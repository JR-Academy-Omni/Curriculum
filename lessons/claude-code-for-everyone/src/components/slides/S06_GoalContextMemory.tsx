import { Slide, Inner, Title, Tag, colors, fonts, border, shadow } from '../ui';
import { motion } from 'framer-motion';

const items = [
	{ k: 'GOAL', zh: '目标', color: '#ff5757', desc: '剥到最根本：你真正要的结果是什么 —— 可验证，不是「帮我看看」。', eg: '把这门课的大纲同步到 production，且 diff 我确认过' },
	{ k: 'CONTEXT', zh: '上下文', color: '#38B6FF', desc: '完成目标需要的信息 —— 当下喂进去的规则、文件、数据。', eg: 'CLAUDE.md 规范 + outline.json + 当前 prod 状态' },
	{ k: 'MEMORY', zh: '记忆', color: '#7ED957', desc: '跨会话持久留下的真相 —— 下次不用重讲。', eg: '记忆库里「ObjectId 不用 slug」「prod ID 在哪查」' },
];

// 三个核心词：Goal · Context · Memory
export default function S06_GoalContextMemory() {
	return (
		<Slide bg={colors.dark}>
			<Inner style={{ flexDirection: 'column', gap: 0, justifyContent: 'center' }}>
				<motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
					<Tag bg={colors.yellow} color={colors.black}>核心概念 #2</Tag>
					<Title white size="56px" style={{ marginTop: 14 }}>
						每次让 AI 干活，先想清三个词
					</Title>
				</motion.div>

				<div style={{ display: 'flex', gap: 20, marginTop: 34 }}>
					{items.map((it, i) => (
						<motion.div key={it.k}
							initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 + i * 0.15, duration: 0.5 }}
							style={{ flex: 1, background: colors.white, border, boxShadow: shadow, padding: '22px 20px' }}>
							<div style={{ fontFamily: fonts.mono, fontSize: 15, color: it.color, fontWeight: 800, letterSpacing: 2 }}>{it.k}</div>
							<div style={{ fontSize: 28, fontWeight: 900, marginTop: 2 }}>{it.zh}</div>
							<div style={{ width: 44, height: 4, background: it.color, margin: '12px 0' }} />
							<div style={{ fontSize: 16, color: '#444', lineHeight: 1.5 }}>{it.desc}</div>
							<div style={{ marginTop: 12, fontSize: 13, fontFamily: fonts.mono, color: '#888', background: '#f4f4f6', padding: '8px 10px', borderLeft: `3px solid ${it.color}` }}>
								例：{it.eg}
							</div>
						</motion.div>
					))}
				</div>

				<motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}
					style={{ marginTop: 22, alignSelf: 'flex-start', background: '#16203a', border, boxShadow: `5px 5px 0 ${colors.red}`, padding: '12px 20px', fontSize: 16, color: '#dfe3f0', lineHeight: 1.5 }}>
					<span style={{ fontFamily: fonts.mono, fontWeight: 800, color: colors.red }}>🚀 GOAL = 第一性原理</span>　别问「别人怎么做的」，问「<b style={{ color: colors.white }}>我到底要什么结果</b>」—— 剥掉惯例和模板，从根上定目标，AI 才不会帮你把错的事做得很快。
				</motion.div>

				<motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.85 }}
					style={{ marginTop: 14, fontSize: 19, color: colors.yellow, fontWeight: 800, textAlign: 'center' }}>
					大多数人只给 Goal，跳过 Context、根本没建 Memory —— AI 当然只能瞎猜。
				</motion.p>
			</Inner>
		</Slide>
	);
}
