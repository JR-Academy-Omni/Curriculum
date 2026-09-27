import { randomUUID } from 'node:crypto';
import { appendProposal, listProposals, listTraces, readConfig, writeConfig } from './state.js';

type Proposal = { id: string; createdAt: string; status: 'pending' | 'approved'; reason: string; change: { primary: string; fallbacks: string[] }; evidenceTraceIds: string[]; approvedAt?: string };

export async function proposeReflection(): Promise<Proposal> {
	const traces = await listTraces();
	const config = await readConfig();
	const failedPrimary = traces.filter(t => t.attempts[0] && !t.attempts[0].ok);
	const change = failedPrimary.length ? { primary: config.primary, fallbacks: [...new Set([...config.fallbacks, 'mock'])].filter(id => id !== config.primary) } : config;
	const proposal: Proposal = { id: randomUUID(), createdAt: new Date().toISOString(), status: 'pending', reason: failedPrimary.length ? `Primary failed in ${failedPrimary.length} recorded run(s). Add deterministic mock as the final rehearsal fallback.` : 'No recurring primary failure. Keep the current routing policy.', change, evidenceTraceIds: failedPrimary.map(x => x.id).slice(-5) };
	await appendProposal(proposal);
	return proposal;
}

export async function approveReflection(id: string): Promise<Proposal> {
	const proposals = await listProposals<Proposal>();
	const proposal = [...proposals].reverse().find(p => p.id === id);
	if (!proposal) throw new Error('Proposal not found');
	if (proposal.status !== 'pending') throw new Error('Proposal is not pending');
	await writeConfig(proposal.change);
	const approved: Proposal = { ...proposal, status: 'approved', approvedAt: new Date().toISOString() };
	await appendProposal(approved);
	return approved;
}
