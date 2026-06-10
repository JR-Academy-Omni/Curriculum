import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow } from '../ui';

const rows = [
	{ k: '你的角色', a: '流水线工人（亲自打字）', b: '厂长（只做决策）' },
	{ k: '步骤', a: '一件事从头盯到尾', b: '拆成专岗，自动接力' },
	{ k: '产能', a: '1 条 / 次', b: '一次出 N 条，每周自动跑' },
	{ k: '出错', a: '你不盯就崩', b: '每步有专门 AI 把关' },
] as const;

export default function S12_Workflow() {
	return (
		<Slide bg={colors.warmBg}>
			<div style={{ width: '92%', maxWidth: 1420, height: '86%', padding: '30px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
				<motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
					<span style={{ padding: '6px 16px', background: colors.dark, color: colors.white, fontFamily: fonts.mono, fontSize: 16.5, fontWeight: 700, border, boxShadow: `3px 3px 0 ${colors.rose}` }}>STEP 2 · 什么是 workflow</span>
				</motion.div>

				<motion.h2 initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.12 }}
					style={{ fontFamily: fonts.heading, fontSize: '42.5px', fontWeight: 900, letterSpacing: -1, lineHeight: 1.15, marginBottom: 8 }}>
					Workflow = 把一件事拆成几步，每步交给一个<span style={{ color: colors.rose }}>专岗 AI</span>，串成会自己跑的流水线
				</motion.h2>
				<motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }}
					style={{ fontFamily: fonts.body, fontSize: 20, color: '#555', fontWeight: 600, marginBottom: 22 }}>
					单用 ChatGPT = 雇一个<b>全能临时工</b>，每件事站旁边指挥；Workflow = 你是<b>厂长</b>，不是流水线工人。
				</motion.p>

				<div style={{ display: 'grid', gridTemplateColumns: '120px 1fr 1fr', border, boxShadow: shadow, background: colors.white }}>
					<div style={{ background: colors.dark }} />
					<div style={{ background: colors.dark, color: colors.white, fontFamily: fonts.heading, fontSize: 21, fontWeight: 900, padding: '12px 18px', textAlign: 'center' }}>单用 AI · Step 1</div>
					<div style={{ background: colors.rose, color: colors.white, fontFamily: fonts.heading, fontSize: 21, fontWeight: 900, padding: '12px 18px', textAlign: 'center' }}>Workflow · Step 2+</div>
					{rows.map((r, i) => (
						<motion.div key={r.k} style={{ display: 'contents' }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 + i * 0.1 }}>
							<div style={{ fontFamily: fonts.mono, fontSize: 15.5, fontWeight: 700, color: '#666', padding: '14px 14px', borderTop: `2px solid ${colors.black}`, display: 'flex', alignItems: 'center' }}>{r.k}</div>
							<div style={{ fontFamily: fonts.body, fontSize: 19, fontWeight: 600, color: '#999', padding: '14px 18px', borderTop: `2px solid ${colors.black}`, borderLeft: `2px solid #eee` }}>{r.a}</div>
							<div style={{ fontFamily: fonts.body, fontSize: 19, fontWeight: 800, color: colors.black, padding: '14px 18px', borderTop: `2px solid ${colors.black}`, borderLeft: `2px solid ${colors.rose}`, background: '#fff5f8' }}>{r.b}</div>
						</motion.div>
					))}
				</div>

				<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.85 }}
					style={{ marginTop: 18, fontFamily: fonts.mono, fontSize: 17.5, fontWeight: 700, color: colors.dark, textAlign: 'center', background: colors.yellow, border, boxShadow: shadow, padding: '10px', alignSelf: 'center' }}>
					选题 → 写稿 → 审稿 → 配图 → 打分 → 发布 → 收数据 ｜ 每一步 = 一个 skill
				</motion.div>
			</div>
		</Slide>
	);
}
