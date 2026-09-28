import { motion } from 'framer-motion';
import { colors, fonts, border, shadow } from '../ui';
import { Page, PageHead, Note } from '../deck';

// P05 · 六张任务卡：快速判断（蓝图 §11.3）
// ⚠️ 这一页**不显示答案**。学员必须给结构 + 理由，老师口头收。
//    答案在 RUNSHEET 老师兜底材料里。

const CARDS = [
	'查一个常量定义在哪个文件。',
	'三个模块分别更新 README。',
	'前后端持续协商接口并分别实现。',
	'两名调查员验证两个互斥根因，并交换反证。',
	'一个 Agent 写方案，另一个按固定清单验收最终文档。',
	'三名成员都会修改同一个核心文件。',
];

const OPTIONS = ['单 Agent', 'Subagent', 'Team', '先重拆'];

export default function L8P05_SixCards() {
	return (
		<Page>
			<PageHead
				phase="talk" time="15–25 min"
				title="六张任务卡 · 现在判断"
				sub={<>每张卡给<strong>结构</strong>和<strong>理由</strong>。用刚才那三问，不要靠直觉。</>}
			/>

			<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, flex: 1, minHeight: 0 }}>
				{CARDS.map((t, i) => (
					<motion.div
						key={i}
						initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.3, delay: 0.06 + i * 0.06 }}
						style={{ display: 'flex', border, boxShadow: '4px 4px 0 #000', background: colors.white, alignItems: 'center' }}
					>
						<div style={{
							flexShrink: 0, alignSelf: 'stretch', width: 54, background: colors.dark, color: colors.white,
							display: 'flex', alignItems: 'center', justifyContent: 'center',
							fontFamily: fonts.mono, fontSize: 24, fontWeight: 700,
						}}>{i + 1}</div>
						<div style={{ flex: 1, padding: '14px 20px', fontSize: 24, lineHeight: 1.4, color: colors.dark }}>
							{t.split('`').map((seg, k) => k % 2 === 1
								? <code key={k} style={{ fontFamily: fonts.mono, background: '#f0f0f5', padding: '1px 6px' }}>{seg}</code>
								: seg)}
						</div>
					</motion.div>
				))}
			</div>

			<motion.div
				initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.35, delay: 0.5 }}
				style={{ display: 'flex', gap: 12, alignItems: 'center', border, boxShadow: shadow, background: colors.white, padding: '14px 22px' }}
			>
				<span style={{ fontSize: 22, fontWeight: 800, color: colors.dark, marginRight: 6 }}>四选一：</span>
				{OPTIONS.map((o) => (
					<span key={o} style={{
						border: `3px solid ${colors.black}`, background: colors.warmBg,
						padding: '7px 20px', fontSize: 23, fontWeight: 800, color: colors.dark,
					}}>{o}</span>
				))}
				<span style={{ marginLeft: 'auto', fontSize: 22, fontWeight: 700, color: colors.red }}>
					说不出理由的，一律算「先重拆」
				</span>
			</motion.div>

			<Note>提醒：<strong style={{ color: colors.dark }}>人多、文件多、任务大，都不自动等于需要 Team。</strong> 唯一关键判断是中途依赖。</Note>
		</Page>
	);
}
