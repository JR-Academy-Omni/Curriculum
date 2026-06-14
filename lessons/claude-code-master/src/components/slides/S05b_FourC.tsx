import { Slide, Inner, Title, Tag, colors, fonts, border, shadow } from '../ui';
import { motion } from 'framer-motion';

const cs = [
	{
		c: 'Context', zh: '上下文 · 记忆', q: '它知道什么', color: '#ff5757',
		d: 'CLAUDE.md / 记忆系统 / SoT —— 给它真相,它才不瞎猜',
		ch: '→ 第 1–2 章',
	},
	{
		c: 'Connections', zh: '连接', q: '它能摸到什么', color: '#38B6FF',
		d: 'MCP / 数据库 / 第三方最新文档 —— 用真数据,不靠脑补',
		ch: '→ MCP',
	},
	{
		c: 'Capabilities', zh: '能力', q: '它能做什么', color: '#7ED957',
		d: 'Skills / Subagents / Workflow —— 把 SOP 变成可调用的活',
		ch: '→ 三大武器',
	},
	{
		c: 'Cadence', zh: '节奏', q: '它什么时候跑', color: '#CB6CE6',
		d: 'Hooks 触发 + Schedule 定时 —— 你不在它也照样产出',
		ch: '→ Hooks / Schedule',
	},
];

// AI 操作系统的 4 个 C
export default function S05b_FourC() {
	return (
		<Slide bg={colors.dark}>
			<Inner style={{ flexDirection: 'column' }}>
				<motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
					<Tag bg={colors.yellow} color={colors.black}>本课主框架</Tag>
					<Title white size="50px" style={{ marginTop: 12 }}>
						AI 操作系统的 <span style={{ color: colors.yellow }}>4 个 C</span>
					</Title>
					<p style={{ fontSize: 19, color: '#cfd3e6', marginTop: 8 }}>
						一台完整的 AI OS = 这四块都补齐。今天每一章,都在装其中一个 C。
					</p>
				</motion.div>

				<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginTop: 22 }}>
					{cs.map((x, i) => (
						<motion.div key={x.c}
							initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.15 + i * 0.12, type: 'spring', stiffness: 180, damping: 16 }}
							style={{ background: colors.white, border, boxShadow: shadow, padding: '16px 20px', display: 'flex', alignItems: 'center', gap: 18 }}>
							<div style={{ flexShrink: 0, width: 64, height: 64, background: x.color, border, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 38, fontWeight: 900, color: colors.white, fontFamily: fonts.heading }}>C</div>
							<div style={{ flex: 1 }}>
								<div style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
									<span style={{ fontSize: 24, fontWeight: 900, fontFamily: fonts.mono }}>{x.c}</span>
									<span style={{ fontSize: 15, color: '#888', fontWeight: 700 }}>{x.zh}</span>
								</div>
								<div style={{ fontSize: 14, color: x.color, fontWeight: 800, fontFamily: fonts.mono }}>{x.q}?</div>
								<div style={{ fontSize: 14.5, color: '#444', marginTop: 5, lineHeight: 1.4 }}>{x.d}</div>
							</div>
							<div style={{ flexShrink: 0, fontSize: 13, fontWeight: 800, color: x.color, fontFamily: fonts.mono, alignSelf: 'flex-end' }}>{x.ch}</div>
						</motion.div>
					))}
				</div>

				<motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.85 }}
					style={{ marginTop: 18, fontSize: 19, color: colors.yellow, fontWeight: 800, textAlign: 'center' }}>
					大多数人只点亮了 Capabilities(会用工具)—— 缺 Context / Connections / Cadence,所以不像「大师」。
				</motion.p>
			</Inner>
		</Slide>
	);
}
