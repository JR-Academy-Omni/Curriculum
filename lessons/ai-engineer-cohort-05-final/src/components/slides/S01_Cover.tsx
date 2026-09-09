import { motion } from 'framer-motion';
import { Slide, Inner } from '../ui';
import { colors, fonts, border, shadow } from '../deck';

export default function S01_Cover() {
	return <Slide bg={colors.dark} style={{position:'relative'}}>
		<div aria-hidden style={{position:'absolute',top:10,right:12,width:132,height:48,background:'#fff',border:'2px solid #000'}} />
		<Inner style={{ alignItems: 'center', justifyContent: 'space-between' }}>
			<div style={{ width: '68%' }}>
				<motion.div initial={{ opacity: 0, y: -18 }} animate={{ opacity: 1, y: 0 }} style={{ display: 'inline-block', background: colors.yellow, border, padding: '9px 18px', fontFamily: fonts.mono, fontWeight: 800, fontSize: 17, letterSpacing: 2 }}>AI ENGINEER BOOTCAMP · COHORT 05</motion.div>
				<motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .12 }} style={{ color: colors.white, fontFamily: fonts.heading, fontSize: 92, lineHeight: 1.02, letterSpacing: -3, margin: '34px 0 24px' }}>AI Engineer<br/><span style={{ color: colors.red }}>结课总结</span></motion.h1>
				<motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .35 }} style={{ color: '#fff', fontSize: 30, lineHeight: 1.45, fontWeight: 650, maxWidth: 860 }}>把学过的知识连接成系统能力，再找到最适合你的职业方向。</motion.p>
			</div>
			<motion.div initial={{ opacity: 0, scale: .85 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: .25 }} style={{ width: 330, height: 480, background: colors.white, border, boxShadow: `14px 14px 0 ${colors.red}`, padding: 28, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
				<div style={{ fontFamily: fonts.mono, fontWeight: 800, fontSize: 18 }}>SYSTEM MAP</div>
				{['PRODUCT', 'CONTEXT', 'RAG', 'AGENT', 'EVALS', 'GOVERNANCE'].map((x, i) => <div key={x} style={{ height: 52, background: [colors.yellow, colors.blue, colors.purple, colors.red, colors.green, colors.orange][i], border, display: 'flex', alignItems: 'center', padding: '0 16px', fontFamily: fonts.mono, fontWeight: 800 }}>{String(i + 1).padStart(2, '0')} · {x}</div>)}
			</motion.div>
	</Inner>
	</Slide>;
}
