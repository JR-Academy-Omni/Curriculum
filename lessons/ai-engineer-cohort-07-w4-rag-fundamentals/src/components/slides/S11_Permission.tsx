import { colors, fonts } from '../ui';
import { PartFrame, Side, Punch, Mark } from './_shared';

const pill = (t: string, bg: string = colors.white) => (
	<span style={{ display: 'inline-block', fontSize: 23, fontWeight: 800, padding: '6px 16px', border: `2px solid ${colors.dark}`, borderRadius: 999, background: bg, color: colors.black }}>{t}</span>
);
const arrow = <span style={{ fontFamily: fonts.heading, fontSize: 26, fontWeight: 900, margin: '0 8px' }}>→</span>;

// 在线：权限先于检索
export default function S11_Permission() {
	return (
		<PartFrame part="online" title="权限先于检索" subtitle="A 院的员工提问，只能在 A 院能看的政策里找。">
			<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
				<Side label="先找，再过滤" labelBg={colors.red} minHeight={300}>
					<div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', rowGap: 10 }}>{pill('全库检索')}{arrow}{pill('取 top-k')}{arrow}{pill('删掉越权的')}</div>
					<div style={{ fontSize: 24, fontWeight: 700, lineHeight: 1.55 }}>B 院的文档已经进过候选集：<br />可能挤掉该进的块，也可能留在日志里。</div>
				</Side>
				<Side label="先过滤，再找" labelBg={colors.green} delay={0.4} minHeight={300}>
					<div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', rowGap: 10 }}>{pill('按身份和院区过滤', colors.yellow)}{arrow}{pill('检索')}{arrow}{pill('取 top-k')}</div>
					<div style={{ fontSize: 24, fontWeight: 700, lineHeight: 1.55 }}>候选集里只有 A 院能看的块。<br />院区（tenant）也是一条权限。</div>
				</Side>
			</div>
			<Punch delay={0.8} size={31} mt={26}>越权的文档，<Mark>连候选集都不进</Mark>。</Punch>
		</PartFrame>
	);
}
