import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, fonts, border, shadow } from '../ui';
import { PromptBox } from '../PromptBox';

// P10 Lab A：分头做，回来报 —— 三路只读调查
// SoT：蓝图 §9.4
const ROUTES = [
	{ k: 'A', scope: 'src/api/ 与服务端鉴权路径', color: colors.blue },
	{ k: 'B', scope: 'src/components/、路由守卫与客户端状态', color: colors.green },
	{ k: 'C', scope: '配置、脚本、测试与文档中的隐式依赖', color: colors.orange },
];

const RETURN_FORMAT = `status: complete | partial | blocked

## findings
- 结论：______
  evidence: \`path/to/file:line\` + 一句解释
  impact: ______

## checked
- ______

## not_checked
- ______

## assumptions_or_risks
- ______`;

export default function L7P13_LabA() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner split>
				<div style={{ flex: '0 0 52%' }}>
					<div style={{ display: 'flex', gap: 10, marginBottom: 8 }}>
						<Tag bg={colors.blue}>Lab A</Tag>
						<Tag bg={colors.dark}>全程只读</Tag>
					</div>
					<Title size="40px" style={{ marginBottom: 12 }}>
						分头做，<span style={{ background: colors.yellow, padding: '0 8px' }}>回来报</span>
					</Title>

					<motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.15 }}>
						<PromptBox
							label="统一问题"
							accent={colors.dark}
							text="如果我们修改当前登录态的来源，哪些代码路径、配置和测试会连带受影响？"
						/>
					</motion.div>

					<div style={{ fontFamily: fonts.mono, fontSize: 12, color: '#888', letterSpacing: 1.4, fontWeight: 700, margin: '16px 0 8px' }}>
						三路只读边界 · 互不依赖
					</div>
					<div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
						{ROUTES.map((r, i) => (
							<motion.div
								key={r.k}
								initial={{ opacity: 0, x: -18 }} animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.32, delay: 0.4 + i * 0.11 }}
								style={{ display: 'flex', border, boxShadow: '3px 3px 0 #000', background: colors.white }}
							>
								<div style={{
									flex: '0 0 44px', background: r.color, color: colors.white,
									display: 'flex', alignItems: 'center', justifyContent: 'center',
									fontFamily: fonts.mono, fontSize: 19, fontWeight: 700,
								}}>{r.k}</div>
								<div style={{ flex: 1, padding: '11px 14px', fontSize: 15.5, fontWeight: 600, color: colors.dark, fontFamily: fonts.mono }}>
									{r.scope}
								</div>
							</motion.div>
						))}
					</div>

					<motion.div
						initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.85 }}
						style={{ marginTop: 14, fontSize: 15, color: '#666', lineHeight: 1.5 }}
					>
						三路结果<strong style={{ color: colors.dark }}>只回主 Agent</strong>，彼此不说话 —— 这就是 Hub-and-spoke 的全部。
					</motion.div>
				</div>

				<div style={{ flex: 1, minWidth: 0 }}>
					<div style={{ fontFamily: fonts.mono, fontSize: 12, color: '#888', letterSpacing: 1.4, fontWeight: 700, marginBottom: 8 }}>
						统一返回格式 · 三路都用它
					</div>
					<motion.pre
						initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4, delay: 0.3 }}
						style={{
							border, boxShadow: shadow, background: colors.dark, color: '#e8e8f0',
							padding: '16px 18px', fontFamily: fonts.mono, fontSize: 13.5, lineHeight: 1.72,
							whiteSpace: 'pre-wrap', margin: 0,
						}}
					>
						{RETURN_FORMAT}
					</motion.pre>

					<motion.div
						initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4, delay: 0.7 }}
						style={{ marginTop: 16, border, boxShadow: shadow, background: '#fff2f2' }}
					>
						<div style={{ background: colors.red, color: colors.white, padding: '8px 14px', fontFamily: fonts.mono, fontSize: 12.5, fontWeight: 700, letterSpacing: 1.2 }}>
							Lab A 计时终点
						</div>
						<div style={{ padding: '12px 15px', fontSize: 16, lineHeight: 1.6, color: '#333' }}>
							<span style={{ color: colors.red, fontWeight: 800 }}>不是</span>最后一个 Agent 说「完成」，
							<br />
							<span style={{ color: colors.green, fontWeight: 800 }}>而是</span>主 Agent 产出一张
							<strong>证据可追溯、缺口已标记</strong>的汇总表。
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.95 }}
						style={{ marginTop: 14, padding: '10px 14px', border: '2px dashed #ccc', fontSize: 14, color: '#666', lineHeight: 1.5 }}
					>
						同时填<strong>结构观察卡</strong>：谁拆任务 · 谁能给谁发消息 · 谁处理冲突和缺口 · 通信有没有改变分工或结论。
					</motion.div>
				</div>
			</Inner>
		</Slide>
	);
}
