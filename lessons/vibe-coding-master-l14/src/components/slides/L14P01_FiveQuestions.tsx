import { motion } from 'framer-motion';
import { Page, Head, colors, fonts, radii } from '../deck';

/**
 * P01 · 交底五问 ⭐ 全节脊椎
 * 🔴 五问有顺序，不能打乱 —— 图上要能看出先后：
 *   先有仓（东西放哪），才谈权限（谁能动），才谈连接（够不够得着外面），
 *   才谈技能（会干什么活），最后谈维护（怎么不烂掉）。
 */
const QS = [
	{ n: '一', q: '有哪些仓？', s: '拓扑，以及为什么必须分开' },
	{ n: '二', q: '给它什么权限？', s: '读什么 / 写什么 / 谁批', star: true },
	{ n: '三', q: '接哪些外部系统？', s: '以及为什么它不能定时跑' },
	{ n: '四', q: '它有哪些技能？', s: '双层结构 + 一个技能的十节' },
	{ n: '五', q: '怎么维护？', s: '检查怎么长 / 漂移 / 谁能改' },
];

export default function L14P01_FiveQuestions() {
	return (
		<Page>
			<Head sub="这五问有顺序，不能打乱。先有仓，才谈权限；才谈够不够得着外面；才谈会干什么活；最后才谈怎么不烂掉。">
				今天要回答五个问题
			</Head>

			<div style={{ display: 'flex', flexDirection: 'column', gap: 13, flex: 1, minHeight: 0 }}>
				{QS.map((q, i) => (
					<motion.div
						key={q.n}
						initial={{ opacity: 0, x: -22 }} animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.15 + i * 0.11, duration: 0.4 }}
						style={{
							flex: 1, display: 'flex', alignItems: 'center', gap: 20, padding: '0 22px',
							background: q.star ? colors.dark : colors.white,
							color: q.star ? colors.white : colors.black,
							border: `2px solid ${colors.dark}`, borderRadius: radii.card,
							boxShadow: q.star ? `9px 9px 0 rgba(56,182,255,.6)` : `6px 6px 0 rgba(255,222,89,.9)`,
						}}
					>
						<span style={{
							width: 44, height: 44, borderRadius: '50%', flexShrink: 0,
							background: q.star ? colors.blue : colors.yellow,
							border: `2px solid ${colors.black}`,
							display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
							fontFamily: fonts.mono, fontSize: 18, fontWeight: 800, color: colors.black,
						}}>{q.n}</span>
						<span style={{ fontFamily: fonts.heading, fontSize: q.star ? 34 : 30, fontWeight: 900, letterSpacing: -0.8 }}>{q.q}</span>
						<span style={{ fontSize: 20, opacity: .62 }}>{q.s}</span>
						{q.star && <span style={{ marginLeft: 'auto', fontSize: 18, color: colors.yellow, fontWeight: 800 }}>⭐ 今天的核心产物在这一问</span>}
					</motion.div>
				))}
			</div>
		</Page>
	);
}
