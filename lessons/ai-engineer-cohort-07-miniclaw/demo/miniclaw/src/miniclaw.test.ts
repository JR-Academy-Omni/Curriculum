import { afterEach, beforeEach, describe, expect, test } from 'bun:test';
import { mkdtemp, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { MockProvider, ModelRouter } from './providers.js';
import { addMemory, readConfig, saveTrace, searchMemory } from './state.js';
import { loadSkill } from './skills.js';
import { approveReflection, proposeReflection } from './reflection.js';

let testHome = '';
beforeEach(async () => { testHome = await mkdtemp(path.join(tmpdir(), 'miniclaw-test-')); process.env.MINICLAW_HOME = testHome; });
afterEach(async () => { delete process.env.MINICLAW_HOME; await rm(testHome, { recursive: true, force: true }); });

describe('model router', () => {
	test('falls back after a provider error', async () => {
		const result = await new ModelRouter([new MockProvider(true, 'primary'), new MockProvider(false, 'fallback')]).complete({ messages: [{ role: 'user', content: 'hello' }] });
		expect(result.provider).toBe('fallback');
		expect(result.attempts).toEqual([{ provider: 'primary', ok: false, error: 'simulated_rate_limit' }, { provider: 'fallback', ok: true }]);
	});
});

describe('memory', () => {
	test('retrieves confirmed records and ignores drafts', async () => {
		await addMemory('目标是成为 AI Engineer', 'user', true);
		await addMemory('目标是学做海报', 'user', false);
		const result = await searchMemory('目标 AI Engineer');
		expect(result).toHaveLength(1);
		expect(result[0].confirmed).toBe(true);
	});
});

test('loads a bundled SKILL.md', async () => {
	const skill = await loadSkill('course-advisor');
	expect(skill.name).toBe('course-advisor');
	expect(skill.instructions).toContain('confirmed memory');
});

test('reflection requires explicit approval before config changes', async () => {
	await saveTrace({ id: 'trace-1', createdAt: new Date().toISOString(), prompt: 'demo', provider: 'mock', attempts: [{ provider: 'openai', ok: false, error: 'simulated_rate_limit' }, { provider: 'mock', ok: true }], memoryIds: [] });
	const before = await readConfig();
	const proposal = await proposeReflection();
	expect(await readConfig()).toEqual(before);
	expect(proposal.status).toBe('pending');
	const approved = await approveReflection(proposal.id);
	expect(approved.status).toBe('approved');
});
