type Message = { role: 'system' | 'user'; content: string };
type ModelRequest = { messages: Message[] };
type ModelResponse = { provider: string; text: string };

interface Provider {
	id: string;
	complete(request: ModelRequest): Promise<ModelResponse>;
}

class MockProvider implements Provider {
	id = 'mock';
	async complete(request: ModelRequest): Promise<ModelResponse> {
		return { provider: this.id, text: `收到：${request.messages.at(-1)?.content ?? ''}` };
	}
}

async function main() {
	const command = process.argv[2] ?? 'doctor';
	if (command === 'doctor') {
		console.log(JSON.stringify({ ok: true, stage: 'starter', next: 'implement ModelRouter' }, null, 2));
		return;
	}
	if (command === 'chat') {
		const provider = new MockProvider();
		console.log(await provider.complete({ messages: [{ role: 'user', content: process.argv.slice(3).join(' ') }] }));
		return;
	}
	throw new Error(`Unknown starter command: ${command}`);
}

await main();
