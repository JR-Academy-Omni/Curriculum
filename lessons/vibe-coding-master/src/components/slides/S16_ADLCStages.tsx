import { Slide, Inner, Title, Tag, colors, fonts, border, shadow } from '../ui';
import { motion } from 'framer-motion';

const stages = [
	{ n: '01', name: 'GOAL', zh: '定目标', color: '#ff5757', d: '可验证的结果 + 边界。「做什么 / 做到什么程度算完」' },
	{ n: '02', name: 'CONTEXT', zh: '配上下文', color: '#FF914D', d: '喂规则 + 真相：CLAUDE.md / 记忆 / 真实数据，不让它猜' },
	{ n: '03', name: 'SPEC / PRD', zh: '写规格', color: '#FFDE59', d: '复杂任务先写 PRD：方案、风险、验收标准，对齐再动手' },
	{ n: '04', name: 'BUILD', zh: '让 AI 干', color: '#7ED957', d: 'Skills / Subagent / Workflow 执行；大任务并行拆分' },
	{ n: '05', name: 'EVAL', zh: '验收', color: '#38B6FF', d: '跑测试 / code-review / 灰度；「先验证再说已完成」' },
	{ n: '06', name: 'SHIP', zh: '上线', color: '#CB6CE6', d: '合并 / 部署 / 关闭；按对应 CI/CD 链路走' },
];

// ADLC 六阶段
export default function S16_ADLCStages() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner style={{ flexDirection: 'column' }}>
				<motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
					<Tag bg={colors.dark}>ADLC 主循环</Tag>
					<Title size="48px" style={{ marginTop: 12 }}>
						六个阶段 —— 末端<span style={{ background: colors.green, padding: '0 8px' }}>回流记忆</span>，闭环
					</Title>
				</motion.div>

				<div style={{ display: 'flex', gap: 10, marginTop: 26, alignItems: 'stretch' }}>
					{stages.map((s, i) => (
						<motion.div key={s.n}
							initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12 * i, duration: 0.4 }}
							style={{ flex: 1, background: colors.white, border, boxShadow: shadow, padding: '16px 12px', display: 'flex', flexDirection: 'column' }}>
							<div style={{ fontFamily: fonts.mono, fontSize: 13, color: '#aaa', fontWeight: 800 }}>{s.n}</div>
							<div style={{ width: 36, height: 5, background: s.color, margin: '8px 0' }} />
							<div style={{ fontSize: 20, fontWeight: 900 }}>{s.zh}</div>
							<div style={{ fontFamily: fonts.mono, fontSize: 12, color: s.color, fontWeight: 800, marginBottom: 8 }}>{s.name}</div>
							<div style={{ fontSize: 13.5, color: '#555', lineHeight: 1.45 }}>{s.d}</div>
						</motion.div>
					))}
				</div>

				<motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.85 }}
					style={{ marginTop: 22, display: 'flex', alignItems: 'center', gap: 16, background: colors.dark, color: colors.white, padding: '16px 24px', border, boxShadow: shadow }}>
					<span style={{ fontSize: 30 }}>🔁</span>
					<span style={{ fontSize: 19, fontWeight: 700, lineHeight: 1.4 }}>
						上线后把「学到的东西」写回 <b style={{ color: colors.green }}>记忆系统</b>（第 2 章）—— 下一轮 ADLC 起点更高。
						<b style={{ color: colors.yellow }}> 记忆系统就是 ADLC 的飞轮。</b>
					</span>
				</motion.div>
			</Inner>
		</Slide>
	);
}
