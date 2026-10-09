import { AnimatedGroup } from '../deck';
import { Page, Card, colors } from '../pitch';

const risks = [
	['Cash flow during the transition', 'The course and membership businesses keep running. CareerOS starts as a 20–30 learner pilot that reuses existing content and staff, with no full site rebuild; spending is released gate by gate.', colors.red],
	['AI vendors commoditise agents', 'The runtime is the Claude Code or Codex the learner already has, and it is replaceable. We own what sits above it: standards, tasks, evidence rules, mentors and employer relationships. "Stronger models make vouching scarcer" will be tested in the pilot.', colors.purple],
	['Dependence on local Claude Code / Codex', 'Learners need their own subscription. Mitigation: a JR model channel (planned), and every agent call goes through one adapter so upstream changes are handled in one place. Open-source licence compliance can be covered in due diligence.', colors.blue],
	['Mentor cost', 'The first cohort keeps human review on purpose and times it. Example: 24 learners × 30 min/week = 12 hours/week. Capacity comes first; if the economics gate fails, we narrow the service.', colors.orange],
	['Australia first, limited market', 'Role facts for the first track cover Australia first. Target market and work rights are profile fields from day one; each new market opens after calibration on 10+ job descriptions.', colors.green],
	['Privacy and data', 'Career memory and evidence live on the learner\'s computer. Reads are limited to authorised task workspaces; writes and external submissions are approved each time; work rights are self-declared; no screen recording or disk monitoring; external sharing with expiry and revocation (next phase).', colors.yellow],
];

export default function A02_Risks() {
	return (
		<Page tag="Appendix A2 · Risks" title="Key risks and how we handle them" titleSize={44} accent={colors.red} source="Company analysis, Oct 2026">
			<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridTemplateRows: '1fr 1fr', gap: 16, height: '100%' }}>
				{risks.map(([h, t, c], i) => (
					<AnimatedGroup key={h} delay={.08 + i * .06} style={{ display: 'flex' }}>
						<Card accent={c} style={{ flex: 1, padding: '14px 18px' }}>
							<div style={{ fontWeight: 800, fontSize: 22 }}>{h}</div>
							<div style={{ fontSize: 17, lineHeight: 1.45, color: '#3d3833', marginTop: 8 }}>{t}</div>
						</Card>
					</AnimatedGroup>
				))}
			</div>
		</Page>
	);
}
