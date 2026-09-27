export type Message = { role: 'system' | 'user' | 'assistant'; content: string };
export type ModelRequest = { messages: Message[]; model?: string };
export type ModelResponse = { text: string; provider: string; model: string; usage?: { input?: number; output?: number } };

export interface Provider {
	id: string;
	available(): boolean;
	complete(request: ModelRequest): Promise<ModelResponse>;
}

export type RouteAttempt = { provider: string; ok: boolean; error?: string };
export type RoutedResponse = ModelResponse & { attempts: RouteAttempt[] };
export type Config = { primary: string; fallbacks: string[] };

export type MemoryRecord = {
	id: string;
	text: string;
	scope: string;
	confirmed: boolean;
	createdAt: string;
	deletedAt?: string;
};

export type RunTrace = {
	id: string;
	createdAt: string;
	prompt: string;
	provider: string;
	attempts: RouteAttempt[];
	memoryIds: string[];
	skill?: string;
};
