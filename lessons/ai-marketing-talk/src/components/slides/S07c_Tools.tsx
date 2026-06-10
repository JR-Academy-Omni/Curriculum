import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow, assetPath } from '../ui';

interface Tool { name: string; sub: string; emblem: string; img?: string; color: string; rec?: boolean; }

const MODELS: Tool[] = [
	{ name: 'Claude', sub: 'Anthropic · 今晚 demo 主力', emblem: '✻', img: 'claude-logo.svg', color: '#d97757', rec: true },
	{ name: 'OpenAI', sub: 'ChatGPT / GPT', emblem: '◍', color: '#10a37f' },
];
const AGENTS: Tool[] = [
	{ name: 'Hermes', sub: '跨平台 AI 记忆 agent', emblem: '🪽', color: colors.purple },
	{ name: 'OpenClaw', sub: '开源 CLI AI 助手', emblem: '🐾', color: colors.rose },
];

function Card({ t }: { t: Tool }) {
	return (
		<div style={{ flex: 1, background: colors.white, border, boxShadow: shadow, padding: '20px 18px', display: 'flex', alignItems: 'center', gap: 16, position: 'relative' }}>
			<div style={{ width: 64, height: 64, flexShrink: 0, background: t.color, border, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
				{t.img
					? <img src={assetPath(t.img)} alt={t.name} style={{ width: 40, height: 40, filter: 'brightness(0) invert(1)' }} />
					: <span style={{ fontSize: 34, color: colors.white }}>{t.emblem}</span>}
			</div>
			<div style={{ minWidth: 0 }}>
				<div style={{ fontFamily: fonts.heading, fontSize: 28, fontWeight: 900, color: colors.black }}>{t.name}</div>
				<div style={{ fontFamily: fonts.body, fontSize: 15.5, fontWeight: 600, color: '#666' }}>{t.sub}</div>
			</div>
			{t.rec && <span style={{ position: 'absolute', top: -12, right: 12, background: colors.rose, color: colors.white, fontFamily: fonts.mono, fontSize: 12, fontWeight: 800, padding: '3px 10px', border: `2px solid ${colors.black}` }}>推荐</span>}
		</div>
	);
}

export default function S07c_Tools() {
	return (
		<Slide bg={colors.warmBg}>
			<div style={{ width: '92%', maxWidth: 1380, height: '86%', padding: '28px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
				<motion.div initial={{ opacity: 0, y: -14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} style={{ marginBottom: 22 }}>
					<span style={{ padding: '6px 16px', background: colors.dark, color: colors.yellow, fontFamily: fonts.mono, fontSize: 15, fontWeight: 700, letterSpacing: 2 }}>今晚这套 · 用什么实现都行</span>
					<h2 style={{ fontFamily: fonts.heading, fontSize: '40px', fontWeight: 900, letterSpacing: -1, marginTop: 10 }}>不绑定平台 —— <span style={{ color: colors.rose }}>大模型直接用，或交给 Agent 跑</span></h2>
				</motion.div>

				<motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} style={{ marginBottom: 18 }}>
					<div style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 700, color: '#999', letterSpacing: 1.5, marginBottom: 10 }}>① 大模型直接用</div>
					<div style={{ display: 'flex', gap: 16 }}>{MODELS.map((t) => <Card key={t.name} t={t} />)}</div>
				</motion.div>

				<motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
					<div style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 700, color: '#999', letterSpacing: 1.5, marginBottom: 10 }}>② 交给 Agent 自动跑</div>
					<div style={{ display: 'flex', gap: 16 }}>{AGENTS.map((t) => <Card key={t.name} t={t} />)}</div>
				</motion.div>

				<motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} style={{ marginTop: 22, textAlign: 'center' }}>
					<div style={{ display: 'inline-block', padding: '12px 26px', background: colors.rose, color: colors.white, border, boxShadow: `6px 6px 0 ${colors.dark}`, fontFamily: fonts.heading, fontSize: 21, fontWeight: 900 }}>
						工具会换，<span style={{ color: colors.yellow }}>方法不变</span> —— 维护一份真相 + 搭 pipeline
					</div>
				</motion.div>
			</div>
		</Slide>
	);
}
