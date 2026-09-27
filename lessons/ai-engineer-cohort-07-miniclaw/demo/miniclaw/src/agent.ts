import { randomUUID } from 'node:crypto';
import { loadSkill } from './skills.js';
import { ModelRouter, providerRegistry, type ProviderError } from './providers.js';
import { addMemory, readConfig, saveTrace, searchMemory } from './state.js';
import type { Provider, RoutedResponse, RunTrace } from './types.js';

export async function routerFromConfig(overrides?: Provider[]) {
	if (overrides) return new ModelRouter(overrides);
	const config = await readConfig();
	const registry = providerRegistry();
	const ids = [config.primary, ...config.fallbacks.filter(x => x !== config.primary)];
	return new ModelRouter(ids.map(id => registry[id]).filter(Boolean));
}

export async function runAgent(prompt: string, options: { skill?: string; remember?: boolean; router?: ModelRouter } = {}): Promise<{ response: RoutedResponse; trace: RunTrace }> {
	const skill = options.skill ? await loadSkill(options.skill) : undefined;
	const memories = await searchMemory(prompt);
	const messages = [
		...(skill ? [{ role: 'system' as const, content: `Loaded skill ${skill.name}:\n${skill.instructions}` }] : []),
		...(memories.length ? [{ role: 'system' as const, content: `Relevant confirmed memory:\n${memories.map(x => `- ${x.text}`).join('\n')}` }] : []),
		{ role: 'user' as const, content: prompt },
	];
	const response = await (options.router ?? await routerFromConfig()).complete({ messages });
	if (options.remember) await addMemory(prompt, 'user', true);
	const trace: RunTrace = { id: randomUUID(), createdAt: new Date().toISOString(), prompt, provider: response.provider, attempts: response.attempts, memoryIds: memories.map(x => x.id), skill: skill?.name };
	await saveTrace(trace);
	return { response, trace };
}

export async function safeRunAgent(...args: Parameters<typeof runAgent>) {
	try { return await runAgent(...args); } catch (error) {
		const typed = error as ProviderError;
		throw new Error(`${typed.code ?? 'agent_error'}: ${typed.message}`);
	}
}
