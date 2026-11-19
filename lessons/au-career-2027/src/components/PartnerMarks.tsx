import claude from '../assets/partners/claude-partner-certified.svg?inline';
import openai from '../assets/partners/openai-select-partner.webp?inline';
import { colors } from './kit';

export function PartnerMark({ provider, height }: { provider: 'openai' | 'claude'; height: number }) {
	const isClaude = provider === 'claude';
	return <img src={isClaude ? claude : openai} alt={isClaude ? 'Claude Certified Services Partner' : 'OpenAI Select Partner'} style={{ display: 'block', height, width: isClaude ? height : 'auto' }} />;
}

export function PartnerMarks({ height = 54 }: { height?: number }) {
	return <div role="group" aria-label="匠人学院技术合作伙伴" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 12, marginTop: 15 }}>
		<span style={{ marginRight: 4, fontSize: 17, fontWeight: 800, color: colors.dark }}>技术合作伙伴</span>
		<PartnerMark provider="openai" height={height} />
		<PartnerMark provider="claude" height={height} />
	</div>;
}
