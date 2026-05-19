import { motion } from 'framer-motion';
import { Slide, Inner, Title, Grid, colors, fonts, border, shadow } from '../ui';

interface Reason {
	no: string;
	title: string;
	subtitle: string;
	desc: string;
	example: string;
	accent: string;
}

const REASONS: Reason[] = [
	{
		no: '01',
		title: '重复性 = 死刑',
		subtitle: 'REPETITIVE = DEATH',
		desc: '任何能写成 SOP 的工作 —— 流程能列出来、规则能写下来 —— AI 就能做。',
		example: '例：开发票、对账、套模板写文案、按表格录数据、按 checklist 审合规。',
		accent: colors.explosive,
	},
	{
		no: '02',
		title: '中间层 = 被压扁',
		subtitle: 'MIDDLE LAYER = SQUEEZED',
		desc: 'Junior 原本帮 senior 做的"打杂"工作，现在 senior 直接让 AI 做了，不再雇 junior。',
		example: '例：律所 paralegal、咨询公司 analyst、设计公司 junior designer、开发团队 CRUD 仔。',
		accent: '#ea580c',
	},
	{
		no: '03',
		title: '信息搬运 = 第一波',
		subtitle: 'INFO SHUFFLING = FIRST WAVE',
		desc: '整理 / 汇总 / 查找 / 翻译 —— 这 4 件事就是 LLM 的母语，命中率最高。',
		example: '例：报告汇总、市场 desk research、客服 FAQ 查询、字面翻译、会议纪要整理。',
		accent: colors.fast,
	},
];

export default function C04_DyingPattern() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner style={{ flexDirection: 'column', gap: 22 }}>
				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: 14 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4 }}
					style={{ width: '100%' }}
				>
					<Title size="56px">
						为什么这些岗位<span style={{ color: colors.explosive }}>在消失</span>？
					</Title>
					<p style={{ fontSize: 20, color: '#555', marginTop: 10 }}>
						看清楚 3 个共同 pattern —— 它们解释了"为什么是这批人先被吃"。
					</p>
				</motion.div>

				{/* 3 reasons grid */}
				<motion.div
					initial="hidden"
					animate="visible"
					variants={{ visible: { transition: { staggerChildren: 0.18, delayChildren: 0.25 } } }}
					style={{ width: '100%' }}
				>
					<Grid cols={3} gap={24}>
						{REASONS.map((r, idx) => (
							<motion.div
								key={r.no}
								variants={{
									hidden: { opacity: 0, y: 30, scale: 0.94 },
									visible: { opacity: 1, y: 0, scale: 1 },
								}}
								transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
								style={{
									border, background: colors.white, boxShadow: shadow,
									padding: 28, minHeight: 340, display: 'flex', flexDirection: 'column',
								}}
							>
								<motion.div
									initial={{ scale: 0.3, opacity: 0 }}
									animate={{ scale: 1, opacity: 1 }}
									transition={{ duration: 0.5, delay: 0.45 + idx * 0.18, type: 'spring', stiffness: 220, damping: 14 }}
									style={{
										fontFamily: fonts.mono, fontSize: 50, fontWeight: 700,
										color: r.accent, lineHeight: 1, marginBottom: 10,
									}}
								>{r.no}</motion.div>
								<div style={{
									fontFamily: fonts.mono, fontSize: 11, color: '#888',
									letterSpacing: 2, marginBottom: 8,
								}}>
									{r.subtitle}
								</div>
								<div style={{ fontSize: 24, fontWeight: 900, marginBottom: 12, lineHeight: 1.25 }}>
									{r.title}
								</div>
								<div style={{ fontSize: 15, lineHeight: 1.65, color: '#333', marginBottom: 14 }}>
									{r.desc}
								</div>
								<div style={{
									marginTop: 'auto', padding: '10px 12px', background: '#fafafa',
									border: `1.5px dashed ${r.accent}`, fontSize: 13, lineHeight: 1.55, color: '#555',
								}}>
									{r.example}
								</div>
							</motion.div>
						))}
					</Grid>
				</motion.div>

				{/* Closing statement */}
				<motion.div
					initial={{ opacity: 0, y: 20, scale: 0.95 }}
					animate={{ opacity: 1, y: 0, scale: 1 }}
					transition={{ duration: 0.5, delay: 1.4, type: 'spring', stiffness: 200, damping: 14 }}
					style={{ width: '100%', textAlign: 'center' }}
				>
					<span style={{
						display: 'inline-block', padding: '14px 28px', background: colors.dark, color: colors.white,
						fontSize: 22, fontWeight: 900, letterSpacing: 0.5,
					}}>
						不是岗位<span style={{ color: colors.explosive }}>消失</span>，是岗位<span style={{ color: colors.yellow }}>重新组合</span>
					</span>
				</motion.div>
			</Inner>
		</Slide>
	);
}
