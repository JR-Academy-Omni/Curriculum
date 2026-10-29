import { colors } from '../ui';
import { PartFrame, TermCards, Punch, Mark } from './_shared';

// 兜底：过期与冲突证据 → human review
export default function S19_StaleConflict() {
	return (
		<PartFrame part="fallback" title="证据过期或打架时">
			<TermCards minHeight={320} items={[
				{ zh: '过期', term: 'Stale', color: colors.yellow, d: <>检索到 v2，但 v3 已经生效。<br />不拿 v2 答，标出 stale。<br /><b>上节课的 freshness。</b></> },
				{ zh: '打架', term: 'Conflict', color: colors.orange, d: <>政策写最多 3 位访客，楼层通知写 2 位。<br />两条都列出来，标出 conflict。</> },
				{ zh: '交给人', term: 'Human review', color: colors.red, d: <>冲突、过期、涉及住户照护的问题，<br />进复核队列，由人来答。</> },
			]} />
			<Punch delay={0.8} size={31} mt={28}>检索错的证据，<Mark>比不检索更糟</Mark>。</Punch>
		</PartFrame>
	);
}
