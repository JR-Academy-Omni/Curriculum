import { AnimatedGroup } from '../deck';
import { Page, Shot, P, colors } from '../pitch';

export default function S07_DemoStages() {
	return (
		<Page tag="07 · DEMO ①" title="Every stage is done together with the agent" subtitle="A native agent chat in the centre, step-by-step guidance on the right. The AI writes results as structured cards; the learner confirms, edits or rejects each one, and CareerOS validates before saving." accent={colors.blue} source="Real product screenshots, UI in Chinese · demo profile (fictional person; some AI replies scripted for the demo) · Oct 2026">
			<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 30, alignItems: 'start' }}>
				<AnimatedGroup delay={.15}><Shot src="plan.png" width={655} caption={<><b>Plan:</b> local Claude Code, read-only, proposes a four-week plan card; after the learner confirms, CareerOS checks it again before saving.</>} /></AnimatedGroup>
				<AnimatedGroup delay={.3}><Shot src="connect.png" width={655} style={{ boxShadow: 'none' }} caption={<><b>Connect:</b> English resume bullets drafted against the role's must-haves. Each one cites the resume or the task's v1 record; nothing unsupported is written.</>} /></AnimatedGroup>
			</div>
			<P style={{ fontSize: 18, marginTop: 8, color: colors.dark }}>No forms: resumes and job descriptions are dropped straight into the chat, and learners never fill in technical settings.</P>
		</Page>
	);
}
