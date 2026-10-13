import { motion } from 'framer-motion';
import { Page, Head, colors, fonts, radii } from '../deck';

/**
 * P01 · 五问对偶表 ⭐ 独占（蓝图 §7 / §1.1）
 * 「Part 2」这三个字的视觉证明：L14 交底五问 ←→ L15 追责五问，逐行对应。
 * 第 4 行（凭什么让它自己跑）标 ⭐⭐ —— 它是本节终点。
 */
const ROWS: { l14: string; l15: string; star?: boolean }[] = [
	{ l14: '有哪些仓', l15: '它刚才干了什么' },
	{ l14: '给它什么权限', l15: '这条痕迹谁会读' },
	{ l14: '接哪些外部系统', l15: '撤得回来吗' },
	{ l14: '它有哪些技能', l15: '凭什么让它自己跑', star: true },
	{ l14: '怎么维护', l15: '这次错怎么变成下次的规矩' },
];

export default function L15P01_FiveQuestions() {
	return (
		<Page>
			<Head sub="上节课问的是「这套东西长什么样」。今天问的是「它干过什么」。">
				同样五问，换一边问
			</Head>

			<div style={{ display: 'flex', gap: 0, alignItems: 'stretch', flex: 1, minHeight: 0 }}>
				{/* 左：L14 */}
				<div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 12, opacity: 0.58 }}>
					<div style={{ fontFamily: fonts.mono, fontSize: 16, fontWeight: 800, letterSpacing: 1.4, color: '#6f6760' }}>
						L14 · 交底五问 ,, 事前
					</div>
					{ROWS.map((r, i) => (
						<motion.div
							key={r.l14}
							initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
							transition={{ delay: 0.12 + i * 0.07, duration: 0.38 }}
							style={{
								flex: 1, display: 'flex', alignItems: 'center', padding: '0 20px',
								background: '#f3efec', border: `2px solid #c4bbb4`, borderRadius: radii.card,
								fontSize: 25, fontWeight: 700, color: '#6f6760',
							}}
						>
							{r.l14}
						</motion.div>
					))}
				</div>

				{/* 中：对应关系竖线 */}
				<div style={{ flex: '0 0 72px', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 34 }}>
					<div style={{ width: 2, flex: 1, background: 'rgba(16,22,47,.2)' }} />
				</div>

				{/* 右：L15 */}
				<div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
					<div style={{ fontFamily: fonts.mono, fontSize: 16, fontWeight: 800, letterSpacing: 1.4, color: colors.red }}>
						L15 · 追责五问 ,, 事后
					</div>
					{ROWS.map((r, i) => (
						<motion.div
							key={r.l15}
							initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
							transition={{ delay: 0.12 + i * 0.07, duration: 0.38 }}
							style={{
								flex: 1, display: 'flex', alignItems: 'center', gap: 12, padding: '0 20px',
								background: r.star ? colors.dark : colors.white,
								color: r.star ? colors.white : colors.black,
								border: `2px solid ${colors.dark}`, borderRadius: radii.card,
								boxShadow: r.star ? `8px 8px 0 rgba(255,87,87,.58)` : `6px 6px 0 rgba(255,222,89,.92)`,
								fontSize: r.star ? 28 : 25, fontWeight: r.star ? 900 : 700,
							}}
						>
							{r.l15}
							{r.star && <span style={{ fontSize: 19, color: colors.yellow, marginLeft: 'auto' }}>⭐⭐ 今天的终点</span>}
						</motion.div>
					))}
				</div>
			</div>
		</Page>
	);
}
