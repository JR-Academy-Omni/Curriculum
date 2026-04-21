import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow, shadowSm } from '../ui';

const oldStack = [
	'React + Node 传统全栈求职路径',
	'Instagramly CRUD 作为毕业项目',
	'LeetCode + JD 地毯式海投',
	'毕业 = 会做 CRUD 的初级开发者',
];

const newStack = [
	'全栈 + AI 双技能栈，稀缺且抗替代',
	'CareerMate — AI 驱动的毕业项目',
	'RAG / Agent / MCP 直接对齐 2026 JD',
	'毕业 = 能交付 AI 产品的全栈工程师',
];

export default function S02_XhsHook() {
	return (
		<Slide bg={colors.warmBg}>
			<div style={{ width: '94%', maxWidth: 1400, padding: '40px 36px', display: 'flex', flexDirection: 'column' }}>
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4 }}
					style={{ textAlign: 'center', marginBottom: 28 }}
				>
					<div style={{ display: 'inline-block', padding: '5px 14px', background: colors.dark, color: colors.yellow, fontFamily: fonts.mono, fontSize: 12, fontWeight: 900, letterSpacing: 2, border, boxShadow: shadowSm, marginBottom: 14 }}>
						2026 · V30 · NEW KERNEL
					</div>
					<h2 style={{ fontFamily: fonts.heading, fontSize: 'clamp(32px,4.5vw,58px)', fontWeight: 900, lineHeight: 1.1, letterSpacing: -1.5, margin: 0 }}>
						8 年 29 期 IT 就业课，
						<br />
						<span style={{ display: 'inline-block', padding: '0 14px', background: colors.yellow, border, boxShadow: `5px 5px 0 ${colors.black}`, transform: 'rotate(-1deg)', marginTop: 8 }}>
							2026 年换成 AI 全栈内核
						</span>
					</h2>
				</motion.div>

				<div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: 20, alignItems: 'stretch' }}>
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.2 }}
						style={{ background: '#f5f5f5', border, boxShadow: shadow, padding: '22px 22px', transform: 'rotate(-0.8deg)' }}
					>
						<div style={{ display: 'inline-block', padding: '4px 12px', background: '#999', color: colors.white, fontFamily: fonts.mono, fontSize: 12, fontWeight: 800, marginBottom: 14 }}>
							29 期之前
						</div>
						<div style={{ fontFamily: fonts.heading, fontSize: 'clamp(18px,2.2vw,26px)', fontWeight: 900, color: '#333', marginBottom: 14, lineHeight: 1.25 }}>
							"做全栈去求 Junior offer"
						</div>
						{oldStack.map((item, i) => (
							<div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 8, fontSize: 'clamp(12px,1.3vw,15px)', color: '#555', fontWeight: 500 }}>
								<span style={{ color: '#999', marginTop: 2 }}>×</span>
								<span>{item}</span>
							</div>
						))}
					</motion.div>

					<motion.div
						initial={{ opacity: 0, scale: 0.5 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ delay: 0.5 }}
						style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
					>
						<div style={{ width: 60, height: 60, borderRadius: '50%', background: colors.red, border, boxShadow: shadow, display: 'flex', alignItems: 'center', justifyContent: 'center', color: colors.white, fontSize: 28, fontWeight: 900, transform: 'rotate(8deg)' }}>
							→
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 30 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.3 }}
						style={{ background: colors.white, border, boxShadow: `8px 8px 0 ${colors.red}`, padding: '22px 22px', transform: 'rotate(1deg)' }}
					>
						<div style={{ display: 'inline-block', padding: '4px 12px', background: colors.red, color: colors.white, fontFamily: fonts.mono, fontSize: 12, fontWeight: 800, marginBottom: 14 }}>
							第 30 期 · AI 新内核
						</div>
						<div style={{ fontFamily: fonts.heading, fontSize: 'clamp(18px,2.2vw,26px)', fontWeight: 900, color: colors.black, marginBottom: 14, lineHeight: 1.25 }}>
							"全栈 + AI 直接进场"
						</div>
						{newStack.map((item, i) => (
							<div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 8, fontSize: 'clamp(12px,1.3vw,15px)', color: colors.black, fontWeight: 600 }}>
								<span style={{ color: colors.red, marginTop: 2, fontWeight: 900 }}>→</span>
								<span>{item}</span>
							</div>
						))}
					</motion.div>
				</div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.8 }}
					style={{ marginTop: 28, padding: '14px 22px', background: colors.black, border, boxShadow: `5px 5px 0 ${colors.yellow}`, textAlign: 'center' }}
				>
					<span style={{ fontFamily: fonts.heading, fontSize: 'clamp(14px,1.7vw,22px)', color: colors.white, fontWeight: 900, letterSpacing: -0.3 }}>
						面向 IT 在校生 / 毕业生 —— <span style={{ background: colors.yellow, color: colors.black, padding: '0 10px' }}>AI 时代的全栈就业课</span>
					</span>
				</motion.div>
			</div>
		</Slide>
	);
}
