import type { ModelRequest, ModelResponse, Provider, RoutedResponse, RouteAttempt } from './types.js';

export class ProviderError extends Error {
	constructor(public provider: string, public code: string, message: string) { super(message); }
}

export class MockProvider implements Provider {
	id = 'mock';
	constructor(private fail = false, id = 'mock') { this.id = id; }
	available() { return true; }
	async complete(request: ModelRequest): Promise<ModelResponse> {
		if (this.fail) throw new ProviderError(this.id, 'simulated_rate_limit', 'Simulated 429 for live failover');
		const prompt = request.messages.filter(m => m.role === 'user').at(-1)?.content ?? '';
		const memory = request.messages.find(m => m.role === 'system' && m.content.startsWith('Relevant confirmed memory:'))?.content;
		return { provider: this.id, model: 'miniclaw-deterministic-v1', text: `我会按已加载的 Skill 处理：${prompt}${memory ? '\n我也找到了与你相关的已确认记忆。' : ''}` };
	}
}

export class OpenAIProvider implements Provider {
	id = 'openai';
	available() { return Boolean(process.env.OPENAI_API_KEY && process.env.OPENAI_MODEL); }
	async complete(request: ModelRequest): Promise<ModelResponse> {
		const key = process.env.OPENAI_API_KEY;
		if (!key) throw new ProviderError(this.id, 'missing_auth', 'OPENAI_API_KEY is missing');
		const model = request.model ?? process.env.OPENAI_MODEL;
		if (!model) throw new ProviderError(this.id, 'missing_model', 'OPENAI_MODEL is missing');
		const response = await fetch('https://api.openai.com/v1/responses', { method: 'POST', headers: { authorization: `Bearer ${key}`, 'content-type': 'application/json' }, body: JSON.stringify({ model, input: request.messages }) });
		if (!response.ok) throw new ProviderError(this.id, `http_${response.status}`, await response.text());
		const data = await response.json() as { output_text?: string; usage?: { input_tokens?: number; output_tokens?: number } };
		return { provider: this.id, model, text: data.output_text ?? '', usage: { input: data.usage?.input_tokens, output: data.usage?.output_tokens } };
	}
}

export class AnthropicProvider implements Provider {
	id = 'anthropic';
	available() { return Boolean(process.env.ANTHROPIC_API_KEY && process.env.ANTHROPIC_MODEL); }
	async complete(request: ModelRequest): Promise<ModelResponse> {
		const key = process.env.ANTHROPIC_API_KEY;
		if (!key) throw new ProviderError(this.id, 'missing_auth', 'ANTHROPIC_API_KEY is missing');
		const model = request.model ?? process.env.ANTHROPIC_MODEL;
		if (!model) throw new ProviderError(this.id, 'missing_model', 'ANTHROPIC_MODEL is missing');
		const system = request.messages.filter(m => m.role === 'system').map(m => m.content).join('\n\n');
		const messages = request.messages.filter(m => m.role !== 'system');
		const response = await fetch('https://api.anthropic.com/v1/messages', { method: 'POST', headers: { 'x-api-key': key, 'anthropic-version': '2023-06-01', 'content-type': 'application/json' }, body: JSON.stringify({ model, max_tokens: 800, system, messages }) });
		if (!response.ok) throw new ProviderError(this.id, `http_${response.status}`, await response.text());
		const data = await response.json() as { content?: Array<{ type: string; text?: string }>; usage?: { input_tokens?: number; output_tokens?: number } };
		return { provider: this.id, model, text: data.content?.filter(x => x.type === 'text').map(x => x.text).join('') ?? '', usage: { input: data.usage?.input_tokens, output: data.usage?.output_tokens } };
	}
}

export class ModelRouter {
	constructor(private providers: Provider[]) {}
	async complete(request: ModelRequest): Promise<RoutedResponse> {
		const attempts: RouteAttempt[] = [];
		for (const provider of this.providers) {
			if (!provider.available()) { attempts.push({ provider: provider.id, ok: false, error: 'unavailable' }); continue; }
			try { return { ...(await provider.complete(request)), attempts: [...attempts, { provider: provider.id, ok: true }] }; }
			catch (error) { attempts.push({ provider: provider.id, ok: false, error: error instanceof ProviderError ? error.code : 'provider_error' }); }
		}
		throw new ProviderError('router', 'no_provider_succeeded', JSON.stringify(attempts));
	}
}

export function providerRegistry(): Record<string, Provider> {
	return { openai: new OpenAIProvider(), anthropic: new AnthropicProvider(), mock: new MockProvider() };
}
