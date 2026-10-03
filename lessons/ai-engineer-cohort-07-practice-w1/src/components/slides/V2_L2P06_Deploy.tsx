// Migrated teaching page; original source: lessons/vibe-coding-master-l2/src/components/slides/L2P06_Deploy.tsx
import { Slide, Inner, Tag, colors, fonts, border, shadow, springIn, slideFromLeft } from '../courseUi';
import { motion } from 'framer-motion';
// 部署步骤清单
const steps: {
    n: string;
    t: string;
    note: string;
    color: string;
}[] = [
    { n: '1', t: '让 agent 部署到云端', note: 'Cloudflare Workers / Vercel / Serverless，拿到一个可访问 URL', color: colors.blue },
    { n: '2', t: '配 key / 环境变量', note: '一步步让 agent 告诉你每个变量填哪、填什么', color: colors.purple },
    { n: '3', t: 'build 报错？别自己 debug', note: '把报错原样贴回去，让 agent 读报错自己修', color: colors.orange },
    { n: '4', t: '对照 PRD 验收标准逐条过', note: '不是看着顺眼就行 —— 回到 PRD 第 5 块，一条条点开确认', color: colors.red },
];
// 部署上线 checklist：手机能打开 + 对着 PRD 验收标准逐条过 = 过关
export default function L2P06_Deploy() {
    return (<Slide bg={colors.dark}>
			<Inner style={{ flexDirection: 'column', height: '88%' }}>
				<motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
					<Tag bg={colors.blue}>🚀 部署上线</Tag>
					<span style={{ borderRadius: 18, fontSize: 14, fontWeight: 800, fontFamily: fonts.mono, color: colors.dark, background: colors.green, padding: '8px 14px', border }}>checklist</span>
				</motion.div>

				<motion.h2 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} style={{ fontFamily: fonts.heading, fontSize: 38, fontWeight: 900, color: colors.white, marginTop: 14, lineHeight: 1.1 }}>
					部署上线 checklist：<span style={{ background: colors.green, color: colors.black, padding: '0 8px' }}>打开 + 对照 PRD 验收 = 过关</span>
				</motion.h2>

				{/* 顶部框定 */}
				<motion.div {...springIn} style={{ borderRadius: 18, marginTop: 12, background: '#0b0f1e', border: `2px solid ${colors.green}`, padding: '11px 18px', fontSize: 16.5, color: '#dfe3f0', lineHeight: 1.45 }}>
					跑在你电脑上不算数 —— <span style={{ color: colors.green, fontWeight: 800 }}>真正上线</span>才是别人能用。前三步交给 agent，第四步你自己对照 PRD 验收。
				</motion.div>

				{/* 步骤清单 */}
				<div style={{ display: 'flex', flexDirection: 'column', gap: 11, marginTop: 16 }}>
					{steps.map((s, i) => (<motion.div key={s.n} {...slideFromLeft} transition={{ duration: 0.45, delay: 0.25 + i * 0.1, ease: [0.16, 1, 0.3, 1] }} style={{ borderRadius: 18, display: 'flex', alignItems: 'center', gap: 14, background: colors.white, border, boxShadow: shadow, padding: '13px 18px' }}>
							<span style={{ borderRadius: 18, flexShrink: 0, width: 40, height: 40, background: s.color, border, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 19, fontWeight: 900, fontFamily: fonts.mono, color: s.color === colors.yellow || s.color === colors.green ? colors.black : colors.white }}>{s.n}</span>
							<div style={{ flex: 1, minWidth: 0 }}>
								<div style={{ fontSize: 18, fontWeight: 900, color: '#1a1a2e', lineHeight: 1.2 }}>{s.t}</div>
								<div style={{ fontSize: 14, color: '#5a5f72', fontFamily: fonts.mono, marginTop: 2, lineHeight: 1.35 }}> // {s.note}</div>
							</div>
						</motion.div>))}
				</div>

				{/* 过关标准 —— 最醒目高亮块 */}
				<motion.div initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.6 }} style={{ borderRadius: 18, marginTop: 'auto', display: 'flex', alignItems: 'center', gap: 18, background: colors.yellow, border, boxShadow: shadow, padding: '16px 22px' }}>
					<span style={{ flexShrink: 0, fontSize: 38 }}>📱</span>
					<div>
						<div style={{ fontSize: 14, fontWeight: 900, fontFamily: fonts.mono, color: colors.red, letterSpacing: 1, marginBottom: 4 }}>✓ 过关标准</div>
						<div style={{ fontSize: 19.5, fontWeight: 900, color: colors.black, lineHeight: 1.3 }}>
							用<span style={{ background: colors.black, color: colors.yellow, padding: '0 7px' }}>手机</span>（不是本机 localhost）打开 URL，<b>并且</b>对照 PRD 验收标准逐条确认 —— 不是"能看到东西"，是"看到 PRD 说的那个东西"
						</div>
					</div>
				</motion.div>
			</Inner>
		</Slide>);
}
