import { motion } from 'framer-motion';
import { Page, Head, colors, fonts, border, radii } from '../deck';

/**
 * P01b · 今天回答五个问题（⭐ 目录页）
 *
 * 🔴 本节新增（讲师：「没有目录，没有顺序，纯粹流水账」）。
 *    L14 开场第二页就是「交底五问」—— 那是它的目录。L15 原来把那一页换成了清点表，
 *    然后再没把目录补回来，这是丢掉的东西，现在补上。
 * 🔴 五问 = 五幕。幕封面（C1–C5）会逐幕回收这五行。
 */
const QS = [
	{ n: '一', q: '它现在活在哪？', a: '它散在三层里，大半没进 git', c: colors.dark },
	{ n: '二', q: '别人是怎么交的？', a: '装一个现成的，看它能带什么', c: colors.blue },
	{ n: '三', q: '怎么把自己的打成同样的形状？', a: '做一个包，装到别的环境上', c: colors.teal },
	{ n: '四', q: '你交出去的到底是什么？', a: '不是文件', c: colors.red },
	{ n: '五', q: '你走了之后，它还在吗？', a: '把没人接的那几样写下来', c: colors.purple },
];

export default function L15P01b_FiveQuestions() {
	return (
		<Page>
			<Head sub="五幕，一幕一个问题。">今天回答五个问题</Head>

			<div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
				{QS.map((x, i) => (
					<motion.div
						key={x.n}
						initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.14 + i * 0.12, duration: 0.42 }}
						style={{
							display: 'flex', alignItems: 'center', gap: 20,
							background: colors.white, border, borderRadius: radii.card,
							boxShadow: `5px 5px 0 ${x.c}`, padding: '14px 22px',
						}}
					>
						<span style={{
							width: 44, height: 44, flexShrink: 0, borderRadius: radii.pill, border,
							background: x.c, color: colors.white, display: 'flex',
							alignItems: 'center', justifyContent: 'center',
							fontFamily: fonts.heading, fontSize: 22, fontWeight: 900,
						}}>{x.n}</span>
						<span style={{ fontSize: 29, fontWeight: 900, minWidth: 420, letterSpacing: -0.5 }}>{x.q}</span>
						<span style={{ fontSize: 19, color: '#666', lineHeight: 1.5 }}>{x.a}</span>
					</motion.div>
				))}
			</div>

			<motion.p
				initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.95, duration: 0.6 }}
				style={{ marginTop: 'auto', fontSize: 23, color: '#6b6b6b', lineHeight: 1.6 }}
			>
				<strong>每一幕开始前，回到这张表。</strong>
			</motion.p>
		</Page>
	);
}
