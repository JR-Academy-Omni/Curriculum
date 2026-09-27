import { appendFile, mkdir, readFile, writeFile } from 'node:fs/promises';
import { homedir } from 'node:os';
import path from 'node:path';
import { randomUUID } from 'node:crypto';
import type { Config, MemoryRecord, RunTrace } from './types.js';

export function stateDir() { return process.env.MINICLAW_HOME || path.join(homedir(), '.miniclaw'); }
export function statePath(name: string) { return path.join(stateDir(), name); }
export async function ensureState() {
	await mkdir(stateDir(), { recursive: true });
	try { await readFile(statePath('config.json')); } catch { await writeFile(statePath('config.json'), JSON.stringify({ primary: 'mock', fallbacks: [] }, null, 2)); }
}
export async function readConfig(): Promise<Config> { await ensureState(); return JSON.parse(await readFile(statePath('config.json'), 'utf8')) as Config; }
export async function writeConfig(config: Config) { await ensureState(); await writeFile(statePath('config.json'), JSON.stringify(config, null, 2)); }

async function readJsonl<T>(name: string): Promise<T[]> {
	try { return (await readFile(statePath(name), 'utf8')).split('\n').filter(Boolean).map(line => JSON.parse(line) as T); } catch { return []; }
}
async function appendJsonl(name: string, value: unknown) { await ensureState(); await appendFile(statePath(name), `${JSON.stringify(value)}\n`); }

export async function addMemory(text: string, scope = 'user', confirmed = false): Promise<MemoryRecord> {
	const record: MemoryRecord = { id: randomUUID(), text, scope, confirmed, createdAt: new Date().toISOString() };
	await appendJsonl('memory.jsonl', record);
	return record;
}

function tokens(value: string) {
	const normalized = value.toLowerCase();
	const result = new Set(normalized.split(/[^\p{L}\p{N}]+/u).filter(Boolean));
	for (const block of normalized.match(/[\p{Script=Han}]+/gu) ?? []) {
		for (let i = 0; i < block.length - 1; i += 1) result.add(block.slice(i, i + 2));
	}
	return result;
}
export async function searchMemory(query: string, limit = 5): Promise<Array<MemoryRecord & { score: number }>> {
	const q = tokens(query);
	const records = await readJsonl<MemoryRecord>('memory.jsonl');
	return records.filter(r => r.confirmed && !r.deletedAt).map(r => ({ ...r, score: [...tokens(r.text)].filter(x => q.has(x)).length })).filter(r => r.score > 0).sort((a, b) => b.score - a.score || b.createdAt.localeCompare(a.createdAt)).slice(0, limit);
}
export async function listMemory() { return readJsonl<MemoryRecord>('memory.jsonl'); }
export async function saveTrace(trace: RunTrace) { await appendJsonl('traces.jsonl', trace); }
export async function listTraces() { return readJsonl<RunTrace>('traces.jsonl'); }
export async function appendProposal(value: unknown) { await appendJsonl('proposals.jsonl', value); }
export async function listProposals<T>() { return readJsonl<T>('proposals.jsonl'); }
