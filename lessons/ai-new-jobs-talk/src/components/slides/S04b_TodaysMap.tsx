import { motion } from 'framer-motion';
import { Slide, Inner, Title, colors, fonts, border, shadowSm } from '../ui';

interface JobIcon {
	emoji: string;
	nameZh: string;
	deep?: boolean;
}

const TECH: JobIcon[] = [
	{ emoji: '🧠', nameZh: 'AI Engineer', deep: true },
	{ emoji: '🚀', nameZh: 'FDE', deep: true },
	{ emoji: '🤖', nameZh: 'AI Agent Dev', deep: true },
	{ emoji: '🤝', nameZh: 'AI Adoption', deep: true },
	{ emoji: '✍️', nameZh: 'Prompt Engineer' },
	{ emoji: '📐', nameZh: 'Context Engineer' },
	{ emoji: '📚', nameZh: 'RAG Engineer' },
	{ emoji: '🎯', nameZh: 'AI Trainer' },
	{ emoji: '⚖️', nameZh: 'Bias Auditor' },
	{ emoji: '🛡️', nameZh: 'AI Red Teamer' },
	{ emoji: '🔧', nameZh: 'MLOps Engineer' },
	{ emoji: '⚙️', nameZh: 'Automation' },
	{ emoji: '🗂️', nameZh: 'Knowledge Arch' },
];

const GOV: JobIcon[] = [
	{ emoji: '👔', nameZh: 'CAIO', deep: true },
	{ emoji: '🧭', nameZh: 'AI PM', deep: true },
	{ emoji: '📜', nameZh: 'AI Ethics', deep: true },
	{ emoji: '💰', nameZh: 'AI Revenue Officer' },
	{ emoji: '🧩', nameZh: 'Human-AI Lead' },
];

const INDUSTRY: JobIcon[] = [
	{ emoji: '🔍', nameZh: 'GEO Specialist', deep: true },
	{ emoji: '🏥', nameZh: 'Healthcare AI', deep: true },
	{ emoji: '🏦', nameZh: 'AI Finance', deep: true },
	{ emoji: '🌾', nameZh: 'Digital Agronomist' },
	{ emoji: '🎓', nameZh: 'AI EdTech' },
];

const MISSING: JobIcon[] = [
	{ emoji: '✨', nameZh: 'Vibe Coder' },
	{ emoji: '🦾', nameZh: 'Robotics-AI' },
	{ emoji: '🧬', nameZh: 'Synthetic Data' },
	{ emoji: '🎤', nameZh: 'AI Sales Eng' },
];

interface RowProps {
	label: string;
	count: string;
	color: string;
	bg: string;
	jobs: JobIcon[];
	startDelay: number;
}

function Row({ label, count, color, bg, jobs, startDelay }: RowProps) {
	return (
		<div style={{ display: 'flex', gap: 10, alignItems: 'stretch' }}>
			{/* Left label column */}
			<div style={{
				width: 140, flexShrink: 0, padding: '8px 12px', background: color, color: colors.white,
				border, display: 'flex', flexDirection: 'column', justifyContent: 'center',
			}}>
				<div style={{ fontFamily: fonts.mono, fontSize: 10, letterSpacing: 1.5, opacity: 0.85, marginBottom: 2 }}>
					{count}
				</div>
				<div style={{ fontSize: 17, fontWeight: 900, lineHeight: 1.1 }}>{label}</div>
			</div>
			{/* Jobs grid */}
			<div style={{ flex: 1, display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 6 }}>
				{jobs.map((j, i) => (
					<motion.div
						key={j.nameZh}
						initial={{ opacity: 0, y: 12 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.3, delay: startDelay + i * 0.04, ease: 'easeOut' }}
						style={{
							position: 'relative', padding: '6px 6px', background: bg, border, boxShadow: shadowSm,
							display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', minHeight: 62,
						}}
					>
						{j.deep && (
							<div style={{
								position: 'absolute', top: -6, right: -6, width: 20, height: 20,
								background: colors.red, color: colors.white, border: `2px solid ${colors.black}`,
								borderRadius: '50%', fontSize: 10, fontWeight: 900,
								display: 'flex', alignItems: 'center', justifyContent: 'center',
							}}>🔥</div>
						)}
						<div style={{ fontSize: 24, lineHeight: 1, marginBottom: 2 }}>{j.emoji}</div>
						<div style={{ fontSize: 11, fontWeight: 700, lineHeight: 1.15, color: colors.dark }}>{j.nameZh}</div>
					</motion.div>
				))}
				{/* Filler cells to keep grid alignment if row has fewer than 7 */}
				{Array.from({ length: Math.max(0, 7 - jobs.length) }).map((_, i) => (
					<div key={`f${i}`} />
				))}
			</div>
		</div>
	);
}

export default function S04b_TodaysMap() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner style={{ flexDirection: 'column', height: '90%', gap: 10, justifyContent: 'center' }}>
				<div style={{ marginBottom: 4, width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
					<div>
						<div style={{
							display: 'inline-block', padding: '5px 12px', background: colors.dark,
							color: colors.yellow, fontFamily: fonts.mono, fontSize: 11, fontWeight: 700,
							letterSpacing: 2, marginBottom: 10,
						}}>TODAY'S MAP · 60 MIN</div>
						<Title size="44px">今天<span style={{ color: colors.red }}>会讲到的 27 个岗位</span></Title>
					</div>
					<div style={{
						display: 'flex', alignItems: 'center', gap: 12, padding: '8px 14px',
						background: colors.white, border,
					}}>
						<div style={{
							width: 22, height: 22, background: colors.red, color: colors.white,
							border: `2px solid ${colors.black}`, borderRadius: '50%', fontSize: 11, fontWeight: 900,
							display: 'flex', alignItems: 'center', justifyContent: 'center',
						}}>🔥</div>
						<span style={{ fontSize: 13, fontWeight: 700 }}>= 10 个深讲</span>
						<span style={{ fontSize: 12, color: '#888' }}>· 其余 17 个一句话带过</span>
					</div>
				</div>

				<Row label="技术岗" count="CH 1 · 13 个" color={colors.techPurple} bg={colors.techBg} jobs={TECH.slice(0, 7)} startDelay={0.05} />
				<Row label="(续 13/13)" count="" color={colors.techPurple} bg={colors.techBg} jobs={TECH.slice(7)} startDelay={0.35} />
				<Row label="治理管理岗" count="CH 2 · 5 个" color={colors.govOrange} bg={colors.govBg} jobs={GOV} startDelay={0.6} />
				<Row label="行业垂直岗" count="CH 3 · 5 个" color={colors.industryCyan} bg={colors.industryBg} jobs={INDUSTRY} startDelay={0.8} />
				<Row label="野生新工种" count="CH 4 · +4 BONUS" color={colors.dark} bg={colors.yellow} jobs={MISSING} startDelay={1.0} />
			</Inner>
		</Slide>
	);
}
