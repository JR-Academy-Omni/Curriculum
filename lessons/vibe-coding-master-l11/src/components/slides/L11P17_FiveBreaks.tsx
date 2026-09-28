import { motion } from 'framer-motion';
import { colors, border } from '../ui';
import { Page, PageHead, BREAKS, Verdict } from '../deck';

/**
 * P17 · 它没活到最后：五种断法
 * 🔴 §20：这一页必须把「断掉」和前面的「卡住」明确切开，过渡句要在页面上。
 *    学员会把两件事混成「反正就是没跑成」，混了他回去只会加超时，不会加契约。
 * 🔴 凭证过期那行高亮；额度那行单独标「压根没跑」（性质和前四种不同）。
 * 🔴 不在 slide 上留讲师个人经历的空 —— 那句「我隔了几天才发现」写在 RUNSHEET。
 */
export default function L11P17_FiveBreaks() {
	return (
		<Page>
			<PageHead
				phase="talk"
				title="它没活到最后"
				sub={<>前面讲的都是「它还活着，但不往前走」。<strong style={{ color: colors.red }}>接下来是另一类：它根本没活到最后。</strong></>}
			/>

			<div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 9, minHeight: 0 }}>
				{BREAKS.map((b, i) => (
					<motion.div
						key={b.name}
						initial={{ opacity: 0, x: -14 }} animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.3, delay: i * 0.08 }}
						style={{
							display: 'flex', gap: 14, alignItems: 'stretch', flex: 1, minHeight: 0,
							border: b.star ? `3px solid ${colors.red}` : b.alone ? `3px solid ${colors.purple}` : border,
							background: b.star ? '#fff0f0' : b.alone ? '#f7f0ff' : colors.white,
							boxShadow: b.star ? `5px 5px 0 ${colors.red}` : b.alone ? `5px 5px 0 ${colors.purple}` : '4px 4px 0 #000',
							padding: '10px 16px',
						}}
					>
						<div style={{
							flexShrink: 0, width: 200, display: 'flex', alignItems: 'center', gap: 8,
							fontSize: 23, fontWeight: 900, color: colors.black,
						}}>
							{b.star && <span style={{ fontSize: 20 }}>🔥</span>}
							{b.name}
						</div>
						<div style={{
							flex: 1, display: 'flex', alignItems: 'center',
							fontSize: 20, color: '#555', lineHeight: 1.35, paddingRight: 8,
						}}>{b.scene}</div>
						<div style={{
							flex: 1.15, display: 'flex', alignItems: 'center',
							fontSize: 20, lineHeight: 1.35,
							color: b.star || b.alone ? colors.black : '#777',
							fontWeight: b.star || b.alone ? 800 : 500,
							borderLeft: '2px solid #ddd', paddingLeft: 14,
						}}>{b.note}</div>
					</motion.div>
				))}
			</div>

			<Verdict bg={colors.red} label="前四种有一个共同点">
				它们全都会给你一个「跑完了」的外观。
				<span style={{ color: colors.yellow, display: 'block', fontSize: 25, marginTop: 8 }}>
					第五种更狠 —— 它连外观都没有。而「什么都没有」和「跑了但没交东西」，在你眼里长得一模一样。
				</span>
			</Verdict>
		</Page>
	);
}
