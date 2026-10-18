import { motion } from 'framer-motion';
import { Page, Head, ActBadge, SoBar, colors, fonts, radii } from '../deck';

/**
 * P10 · 四条不可批准的禁令
 * 🔴 这四条和写权限表视觉上要区分开 —— 它们不在表上，谁批都不行。
 *   否则「我问过了、批准了」就能授权它们。
 */
const BANS = [
	'不从活跃度、消息长度、在线时长推断一个人投入了多少或产出了多少',
	'不给人打分、排名、互相比较',
	'不把私人聊天和邮件当成汇报数据',
	'不在没有人明确确认的情况下，改负责人、日期、优先级、承诺',
];

export default function L14P10_FourBans() {
	return (
		<Page>
			<ActBadge act={2} />
			<Head sub="写权限表之外，还要有一组不在表上的事。它们不是「没批准」，是「不可批准」。">
				有四件事，谁批都不行
			</Head>

			<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, flex: 1, minHeight: 0 }}>
				{BANS.map((b, i) => (
					<motion.div
						key={b}
						initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}
						transition={{ delay: 0.15 + i * 0.12, duration: 0.38 }}
						style={{
							display: 'flex', alignItems: 'center', gap: 18, padding: '22px 24px',
							border: `2px solid ${colors.red}`, borderRadius: radii.panel,
							background: 'rgba(255,87,87,.08)',
							boxShadow: `7px 7px 0 rgba(255,87,87,.3)`,
						}}
					>
						<span style={{
							width: 46, height: 46, borderRadius: '50%', flexShrink: 0,
							background: colors.red, color: colors.white,
							display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
							fontFamily: fonts.mono, fontSize: 20, fontWeight: 800,
						}}>✕</span>
						<span style={{ fontSize: 24, lineHeight: 1.45, fontWeight: 700 }}>{b}</span>
					</motion.div>
				))}
			</div>

			<div style={{ marginTop: 22 }}>
				<SoBar>
					为什么要单独列出来：否则<strong>「我问过了、批准了」就能授权它们</strong>。
					把它们写成<strong>禁令</strong>而不是<strong>待批项</strong>，这句话就用不上了。
				</SoBar>
			</div>
		</Page>
	);
}
