#!/usr/bin/env node
import { Command } from 'commander';
import { MockProvider, ModelRouter, providerRegistry } from './providers.js';
import { runAgent } from './agent.js';
import { listSkills, loadSkill } from './skills.js';
import { addMemory, ensureState, listMemory, readConfig, searchMemory, writeConfig } from './state.js';
import { approveReflection, proposeReflection } from './reflection.js';

const program = new Command().name('miniclaw').description('An OpenClaw-like teaching vertical slice').version('0.1.0').option('--json', 'Emit a stable JSON envelope');
function emit(data: unknown) {
	if (program.opts().json) console.log(JSON.stringify({ ok: true, data, meta: { version: '0.1.0' } }, null, 2));
	else console.log(typeof data === 'string' ? data : JSON.stringify(data, null, 2));
}
function wrap(action: (...args: any[]) => Promise<unknown>) { return async (...args: any[]) => { try { emit(await action(...args)); } catch (error) { const out = { ok: false, error: { code: 'command_failed', message: error instanceof Error ? error.message : String(error) } }; console.error(JSON.stringify(out, null, 2)); process.exitCode = 1; } }; }

program.command('init').description('Create local config and state files').action(wrap(async () => { await ensureState(); return { state: 'ready', config: await readConfig() }; }));
program.command('doctor').description('Check config, provider auth and offline mode').action(wrap(async () => {
	const config = await readConfig(); const providers = providerRegistry();
	return { config, offlineMode: true, auth: { openai: process.env.OPENAI_API_KEY ? 'env' : 'missing', anthropic: process.env.ANTHROPIC_API_KEY ? 'env' : 'missing', mock: 'not_required' }, models: { openai: process.env.OPENAI_MODEL ? 'env' : 'missing', anthropic: process.env.ANTHROPIC_MODEL ? 'env' : 'missing', mock: 'built_in' }, selectedProviderAvailable: providers[config.primary]?.available() ?? false };
}));

const models = program.command('models').description('Discover and select providers');
models.command('list').action(wrap(async () => { const config = await readConfig(); return Object.values(providerRegistry()).map(p => ({ id: p.id, available: p.available(), selected: p.id === config.primary })); }));
models.command('set').argument('<provider>').option('--fallback <providers>', 'Comma-separated fallback provider IDs', '').action(wrap(async (provider: string, options: { fallback: string }) => {
	if (!providerRegistry()[provider]) throw new Error(`Unknown provider: ${provider}`);
	const fallbacks = [...new Set(options.fallback.split(',').map(x => x.trim()).filter(id => id && id !== provider))];
	for (const id of fallbacks) if (!providerRegistry()[id]) throw new Error(`Unknown fallback: ${id}`);
	const config = { primary: provider, fallbacks }; await writeConfig(config); return config;
}));

const skills = program.command('skills').description('Discover and inspect SKILL.md files');
skills.command('list').action(wrap(async () => (await listSkills()).map(({ name, description }) => ({ name, description }))));
skills.command('show').argument('<name>').action(wrap(async name => loadSkill(name)));

const memory = program.command('memory').description('Manage confirmed durable memory');
memory.command('add').argument('<text>').option('--scope <scope>', 'Memory scope', 'user').requiredOption('--confirmed', 'Require explicit confirmation').action(wrap(async (text, options) => addMemory(text, options.scope, options.confirmed)));
memory.command('search').argument('<query>').option('--limit <n>', 'Maximum results', '5').action(wrap(async (query, options) => searchMemory(query, Number(options.limit))));
memory.command('list').action(wrap(async () => listMemory()));

program.command('chat').argument('<prompt>').option('--skill <name>', 'Load a bundled skill').option('--remember', 'Store prompt as confirmed durable memory').action(wrap(async (prompt, options) => runAgent(prompt, options)));

const reflect = program.command('reflect').description('Propose and approve bounded self-adjustment');
reflect.command('propose').action(wrap(async () => proposeReflection()));
reflect.command('approve').argument('<proposal-id>').action(wrap(async id => approveReflection(id)));

program.command('demo').option('--fail-primary', 'Simulate a primary provider 429').action(wrap(async options => {
	await addMemory('我的目标是从全栈开发转向 AI Engineer', 'user', true);
	const router = options.failPrimary ? new ModelRouter([new MockProvider(true, 'openai'), new MockProvider(false, 'mock')]) : new ModelRouter([new MockProvider()]);
	return runAgent('根据我的目标给出下一步，并说明你用了哪些系统层。', { skill: 'course-advisor', router });
}));

program.command('request').argument('<method>').argument('<path>').description('Read-only raw escape hatch for local state').action(wrap(async (method, requestPath) => {
	if (method.toLowerCase() !== 'get') throw new Error('Only GET is supported by the raw escape hatch');
	if (requestPath === '/status') return { config: await readConfig(), skills: (await listSkills()).length };
	if (requestPath === '/memory') return listMemory();
	throw new Error(`Unknown local path: ${requestPath}`);
}));

await program.parseAsync();
