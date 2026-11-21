import { motion } from 'framer-motion';
import { Slide, Inner } from '../ui';
import { Label, colors, fonts } from '../kit';

const steps = [['企业资料', '沿用第一节的资料'], ['Design System', '定下能复用的品牌规则'], ['报价 Markdown', '整理需求、明细和待确认项'], ['报价 SoT', '确认后生成报价 HTML'], ['PDF', '导出并检查成品']];

export default function P01_Cover() {
	return <Slide bg={colors.warmBg} style={{ position: 'relative', backgroundImage: 'linear-gradient(rgba(16,22,47,.045) 1px,transparent 1px),linear-gradient(90deg,rgba(16,22,47,.045) 1px,transparent 1px)', backgroundSize: '48px 48px' }}>
		<div aria-hidden style={{ position: 'absolute', left: 0, top: 0, width: 18, height: '100%', background: colors.red }} />
		<Inner style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', alignItems: 'center', gap: 50, padding: '48px 30px', height: '88%' }}>
			<div>
				<Label bg={colors.dark} color={colors.yellow}>企业 AI 自动化实战营 · 第 2 节</Label>
				<motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .45 }} style={{ fontFamily: fonts.heading, fontSize: 95, fontWeight: 900, lineHeight: 1.08, letterSpacing: -5, margin: '28px 0 6px', color: colors.dark }}>
					Design System<br /><span style={{ backgroundImage: `linear-gradient(transparent 72%,${colors.yellow} 72%,${colors.yellow} 96%,transparent 96%)` }}>与报价单</span>
				</motion.h1>
				<p style={{ fontSize: 30, lineHeight: 1.5, margin: '22px 0 0', color: colors.dark, fontWeight: 800 }}>从一份企业资料出发，<br />用 Codex 做出能交付的品牌报价单</p>
				<div style={{ display: 'flex', gap: 26, marginTop: 30, paddingTop: 22, borderTop: `2px solid ${colors.dark}`, fontSize: 22, color: colors.dark, alignItems: 'center' }}>
					<span>120 分钟 · 含课堂实操</span>
				</div>
			</div>
			<div style={{ display: 'grid', gap: 14 }} role="img" aria-label="企业资料、Design System、报价 Markdown、报价 SoT、HTML 与 PDF">
				{steps.map(([t, d], i) => <motion.div key={t} initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: .25 + i * .12 }} style={{ display: 'grid', gridTemplateColumns: '64px 1fr', alignItems: 'center', gap: 16, background: i === 0 ? colors.dark : colors.white, color: i === 0 ? colors.white : colors.dark, border: `2px solid ${colors.dark}`, borderRadius: 20, padding: '16px 22px', boxShadow: `6px 6px 0 ${i === 0 ? colors.red : colors.dark}` }}>
					<span style={{ fontFamily: fonts.mono, fontSize: 24, fontWeight: 700, color: i === 0 ? colors.yellow : colors.red }}>{i + 1}</span>
					<div><div style={{ fontSize: 30, fontWeight: 900 }}>{t}</div><div style={{ fontSize: 19, marginTop: 2 }}>{d}</div></div>
				</motion.div>)}
			</div>
		</Inner>
	</Slide>;
}
