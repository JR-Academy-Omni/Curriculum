import { motion } from 'framer-motion';
import { colors, border, shadow } from '../ui';
import { Page, PageHead, Verdict } from '../deck';

/**
 * P25 · 写到第三份，它就该是个 Skill
 * 收口是一个动作，不是总结（§9.4）。接 L5 的判断线。
 */
export default function L11P25_MakeItASkill() {
	return (
		<Page>
			<PageHead phase="talk" title="写到第三份的时候" />

			<div style={{ display: 'flex', gap: 20, alignItems: 'center', flex: 1, minHeight: 0 }}>
				{[1, 2, 3].map((n, i) => (
					<motion.div
						key={n}
						initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.35, delay: i * 0.14 }}
						style={{
							flex: 1, border, boxShadow: n === 3 ? `7px 7px 0 ${colors.teal}` : shadow,
							borderColor: n === 3 ? colors.teal : colors.black,
							background: colors.white, height: '100%',
							display: 'flex', flexDirection: 'column',
						}}
					>
						<div style={{
							background: n === 3 ? colors.teal : colors.dark, color: colors.white,
							padding: '10px 16px', borderBottom: border, fontSize: 21, fontWeight: 900,
						}}>第 {n} 份任务书</div>
						<div style={{ padding: '18px 20px', display: 'flex', flexDirection: 'column', gap: 8, flex: 1, justifyContent: 'center' }}>
							{['目标', '判据', '边界', '预答', '出口', '回执契约', '重跑规则'].map((seg, si) => {
								const same = n === 3 && [1, 2, 4, 5].includes(si);
								return (
									<div key={seg} style={{
										fontSize: 20, padding: '4px 10px',
										background: same ? colors.yellow : 'transparent',
										border: same ? `2px solid ${colors.black}` : '2px solid transparent',
										fontWeight: same ? 900 : 500, color: same ? colors.black : '#888',
									}}>{seg}{same ? '  ← 又是这句' : ''}</div>
								);
							})}
						</div>
					</motion.div>
				))}
			</div>

			<Verdict bg={colors.dark} label="接 L5 的判断线">
				一样的那几段，<span style={{ color: colors.yellow }}>就是一个 Skill</span>。
			</Verdict>
		</Page>
	);
}
