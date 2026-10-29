import { motion } from 'framer-motion';
import { colors, fonts, radii } from '../ui';
import { PartFrame, Rows, Punch, Mark, line } from './_shared';

const code = `[system] 只根据 <evidence> 回答，
         每句话标出 chunk id。

<evidence>
  <chunk id="visit-v3#2" version="v3">
    周末探视需提前 24 小时预约。
  </chunk>
  <chunk id="visit-v3#5" version="v3">
    每次最多 3 位访客。
  </chunk>
</evidence>

[user] 这周末能带孩子来吗？`;

// 组装：证据带编号、分隔放进上下文
export default function S14_Assembly() {
	return (
		<PartFrame part="answer" title="证据带着编号，放进上下文">
			<div style={{ display: 'grid', gridTemplateColumns: '1.05fr .95fr', gap: 26, alignItems: 'start' }}>
				<motion.pre initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: 0.15 }}
					style={{ margin: 0, background: colors.dark, color: colors.white, border: line, borderRadius: radii.panel, padding: '22px 26px', fontFamily: fonts.mono, fontSize: 21, lineHeight: 1.5, whiteSpace: 'pre' }}>{code}</motion.pre>
				<div>
					<Rows color={colors.orange} fontSize={25} pad={11} gap={10} items={[
						{ say: '规则在前，证据在中，问题在后', term: 'Order', note: '上节课讲过' },
						{ say: '每块用标签隔开', term: 'Delimiter' },
						{ say: '每块带编号和版本', term: 'Source ID' },
					]} />
					<Punch delay={0.8} size={28} mt={24}>有编号，后面的 <Mark>引用才能校验</Mark>。</Punch>
				</div>
			</div>
		</PartFrame>
	);
}
