import { motion } from 'framer-motion';
import { Slide, assetPath } from '../ui';
import { colors, fonts, Footer, ink } from '../pitch';

const stages = [['Assess', 'where you stand'], ['Plan', 'the path to the role'], ['Act', 'real tasks, real repo'], ['Prove', 'verifiable evidence'], ['Connect', 'jobs and people'], ['Grow ↺', 'feedback, next loop']];
const stageColors = [colors.red, colors.orange, colors.yellow, colors.green, colors.blue, colors.purple];

export default function S01_Cover() {
	return (
		<Slide bg={colors.warmBg} style={{ position: 'relative', backgroundImage: 'linear-gradient(rgba(16,22,47,.055) 1px, transparent 1px), linear-gradient(90deg, rgba(16,22,47,.055) 1px, transparent 1px)', backgroundSize: '48px 48px' }}>
			<div style={{ width: 1400, display: 'grid', gridTemplateColumns: '1.25fr .75fr', gap: 60, alignItems: 'center' }}>
				<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .45 }}>
					<div style={{ display: 'flex', alignItems: 'center', gap: 28, marginTop: 34 }}>
						<img src={assetPath('brand/careeros-app-icon.png')} alt="CareerOS" style={{ width: 132, height: 132, borderRadius: 30, border: `2px solid ${colors.dark}`, boxShadow: `7px 7px 0 ${colors.yellow}` }} />
						<div style={{ fontFamily: fonts.heading, fontWeight: 900, fontSize: 112, letterSpacing: -3, lineHeight: 1 }}>CareerOS</div>
					</div>
					<div style={{ fontFamily: fonts.heading, fontWeight: 800, fontSize: 44, marginTop: 26, color: colors.dark }}>Your Career Operating System</div>
					<div style={{ fontFamily: fonts.heading, fontWeight: 800, fontSize: 36, marginTop: 14 }}>
						<span style={{ backgroundImage: `linear-gradient(transparent 62%, ${colors.yellow} 62%, ${colors.yellow} 92%, transparent 92%)` }}>Don't just learn. Build your career.</span>
					</div>
					<p style={{ fontSize: 24, lineHeight: 1.5, color: ink, marginTop: 24, maxWidth: 760 }}>A desktop career operating system by JR Academy. Learners do real work on their own computer, with their own Claude Code or Codex, and every task leaves career evidence an employer can check.</p>
					<div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 30 }}>
						<span style={{ fontFamily: fonts.mono, fontSize: 16, color: '#7a716a', letterSpacing: 1 }}>BY</span>
						<img src={assetPath('logo-zh-full.svg')} alt="JR Academy" style={{ height: 52 }} />
					</div>
				</motion.div>
				<motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .45, delay: .2 }} style={{ display: 'grid', gap: 12 }}>
					{stages.map(([name, desc], i) => (
						<div key={name} style={{ display: 'flex', alignItems: 'center', gap: 16, background: colors.white, border: `2px solid ${colors.dark}`, borderRadius: 16, padding: '12px 18px', boxShadow: `5px 5px 0 ${stageColors[i]}` }}>
							<span style={{ fontFamily: fonts.mono, fontWeight: 700, fontSize: 17, color: '#7a716a' }}>0{i + 1}</span>
							<span style={{ fontFamily: fonts.heading, fontWeight: 900, fontSize: 30, minWidth: 150 }}>{name}</span>
							<span style={{ fontSize: 21, color: ink }}>{desc}</span>
						</div>
					))}
				</motion.div>
			</div>
			<Footer />
		</Slide>
	);
}
