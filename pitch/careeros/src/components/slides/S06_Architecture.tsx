import { AnimatedGroup } from '../deck';
import { Page, KindTag, P, colors, fonts } from '../pitch';

const layers = [
	{ name: 'CareerOS Desktop', who: 'JR product layer', c: colors.red, t: 'Career Profile, six stage chats, task workbench, evidence, portfolio, local career memory' },
	{ name: 'Career Harness', who: 'JR-owned core', c: colors.yellow, t: 'Gives the agent goals, gaps, tasks, permissions and rubrics; decides what counts as evidence and what comes next' },
	{ name: 'Agent Runtime', who: 'Replaceable infrastructure', c: colors.blue, t: 'The learner\'s local Claude Code or Codex (OpenWork / OpenCode base). JR neither builds nor hosts it' },
	{ name: 'Web control plane', who: 'Existing backend + admin', c: colors.green, t: 'Accounts, role and task standards, mentor review, consented sharing, opportunity feeds' },
];

const guards = ['Read-only tasks stay read-only (exact tool grants)', 'File writes need per-run learner approval', 'Commands run from an allowlist, inside the project only', 'Work rights are self-declared, never inferred', 'No keylogging, screen recording or disk monitoring'];

export default function S06_Architecture() {
	return (
		<Page tag="06 · Architecture" title="Desktop first: the value is in the Harness, not the model" subtitle="Evidence has to come from the learner's real workspace (diffs, tests, commits), which the web cannot see. So the desktop is the core product; the web handles only multi-party work." accent={colors.yellow} source="Product demo, Oct 2026">
			<div style={{ display: 'grid', gridTemplateColumns: '1.3fr .7fr', gap: 26, height: '100%' }}>
				<div style={{ display: 'grid', gap: 12, alignContent: 'start' }}>
					{layers.map((l, i) => (
						<AnimatedGroup key={l.name} delay={.12 + i * .08}>
							<div style={{ display: 'grid', gridTemplateColumns: '290px 1fr', alignItems: 'center', gap: 18, background: colors.white, border: `2px solid ${colors.dark}`, borderRadius: 18, padding: '14px 18px', boxShadow: `6px 6px 0 ${l.c}` }}>
								<div>
									<div style={{ fontFamily: fonts.heading, fontWeight: 900, fontSize: 28 }}>{l.name}</div>
									<div style={{ fontFamily: fonts.mono, fontSize: 15, fontWeight: 700, color: '#7a716a', marginTop: 4 }}>{l.who}</div>
								</div>
								<P style={{ fontSize: 19 }}>{l.t}</P>
							</div>
						</AnimatedGroup>
					))}
				</div>
				<AnimatedGroup delay={.45} style={{ display: 'flex' }}>
					<div style={{ flex: 1, background: colors.dark, color: colors.white, borderRadius: 22, padding: '20px 22px', boxShadow: '8px 8px 0 rgba(255,87,87,.6)' }}>
						<div style={{ display: 'flex', gap: 10, alignItems: 'center' }}><KindTag kind="built" text="Built" /></div>
						<div style={{ fontFamily: fonts.heading, fontWeight: 800, fontSize: 26, marginTop: 14 }}>Safety boundaries are enforced in code, not in prompts</div>
						<div style={{ display: 'grid', gap: 11, marginTop: 14 }}>
							{guards.map(g => <div key={g} style={{ fontSize: 18, lineHeight: 1.4, paddingLeft: 12, borderLeft: `4px solid ${colors.yellow}` }}>{g}</div>)}
						</div>
						<div style={{ fontSize: 17, color: '#c9c9d3', marginTop: 14, lineHeight: 1.4 }}>Cost: no cloud environment per learner; compute runs on the learner's own machine and subscription. Cost to serve will be measured in the pilot.</div>
					</div>
				</AnimatedGroup>
			</div>
		</Page>
	);
}
