import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow, shadowSm } from '../ui';

/**
 * S27 — JR Academy AI Engineer 简历+面试 12 节完整模块
 * 今晚 = 第 1+2 节合体；接下来 8 周深化 3-12
 */

interface Lesson {
	num: string;
	title: string;
	state: 'live' | 'next' | 'planned';
	tag?: string;
}

const lessons: Lesson[] = [
	{ num: '01', title: 'AI Engineer 角色定位', state: 'live', tag: '今晚' },
	{ num: '02', title: 'Skills + 经验描述 workshop', state: 'live', tag: '今晚' },
	{ num: '03', title: '项目实战 1 · Production-grade RAG 文档问答', state: 'next', tag: '下周' },
	{ num: '04', title: '项目实战 2 · Multi-Agent 工作流自动化', state: 'next', tag: '下周' },
	{ num: '05', title: '项目实战 3 · Fine-tune + Eval pipeline', state: 'planned' },
	{ num: '06', title: 'LinkedIn 优化 + 内推策略', state: 'planned' },
	{ num: '07', title: '投递策略 + ATS 优化 + 简历版本管理', state: 'planned' },
	{ num: '08', title: '一面 · LLM 基础题库（含本节 15 题深化）', state: 'planned' },
	{ num: '09', title: '二面 · System Design with LLM', state: 'planned' },
	{ num: '10', title: '三面 · Coding + Behavioral', state: 'planned' },
	{ num: '11', title: 'Mock Interview · peer 互评 + 录像复盘', state: 'planned' },
	{ num: '12', title: 'Offer 评估 + 谈判方法论', state: 'planned' },
];

const stateConfig: Record<Lesson['state'], { label: string; bg: string; color: string; tagBg: string }> = {
	live: { label: '✓ 已上', bg: colors.green, color: colors.black, tagBg: colors.yellow },
	next: { label: '🔜 即将', bg: colors.blue, color: colors.white, tagBg: colors.orange },
	planned: { label: '🔜 规划', bg: '#f7f7f7', color: '#666', tagBg: '#e0e0e0' },
};

export default function S27_BootcampOutline() {
	return (
		<Slide bg={colors.warmBg}>
			<div style={{
				width: '94%', maxWidth: 1440, height: '92%', padding: '20px 18px',
				display: 'flex', flexDirection: 'column', gap: 12,
			}}>
				{/* 标题 */}
				<motion.div
					initial={{ opacity: 0, y: -8 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4 }}
					style={{ textAlign: 'center' }}
				>
					<span style={{
						padding: '4px 12px', background: colors.dark, color: colors.yellow,
						fontFamily: fonts.mono, fontSize: 11, fontWeight: 800, letterSpacing: 2,
						border, boxShadow: shadowSm,
					}}>
						MODULE 5 · 收尾
					</span>
					<h2 style={{
						fontFamily: fonts.heading, fontSize: '36px', fontWeight: 900,
						lineHeight: 1.1, letterSpacing: -1, margin: '8px 0 4px',
					}}>
						JR Academy AI Engineer · <span style={{
							display: 'inline-block', padding: '0 10px', background: colors.yellow,
							border, boxShadow: shadowSm, transform: 'rotate(-1deg)',
						}}>简历 + 面试 12 节</span>
					</h2>
					<p style={{
						fontFamily: fonts.mono, fontSize: 12, color: '#555', fontWeight: 700, margin: 0,
					}}>
						今晚 = 第 1+2 节合体 · 接下来 8 周每周 1-2 节深化
					</p>
				</motion.div>

				{/* 12 张卡 · 3 列 × 4 行 */}
				<motion.div
					initial="hidden"
					animate="visible"
					variants={{ visible: { transition: { staggerChildren: 0.05, delayChildren: 0.15 } } }}
					style={{
						display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
						gap: 10, flex: 1, minHeight: 0,
					}}
				>
					{lessons.map((l) => {
						const cfg = stateConfig[l.state];
						return (
							<motion.div
								key={l.num}
								variants={{
									hidden: { opacity: 0, y: 12 },
									visible: { opacity: 1, y: 0 },
								}}
								transition={{ duration: 0.25, ease: 'easeOut' }}
								style={{
									background: colors.white,
									border, boxShadow: shadow,
									display: 'grid', gridTemplateColumns: '46px 1fr auto',
									alignItems: 'stretch',
									overflow: 'hidden',
									opacity: l.state === 'planned' ? 0.85 : 1,
								}}
							>
								{/* 编号块 */}
								<div style={{
									background: cfg.bg, color: cfg.color,
									display: 'flex', alignItems: 'center', justifyContent: 'center',
									borderRight: `3px solid ${colors.black}`,
									fontFamily: fonts.mono, fontSize: 16, fontWeight: 900,
								}}>
									{l.num}
								</div>
								{/* 标题 */}
								<div style={{
									padding: '10px 12px',
									display: 'flex', alignItems: 'center',
									fontFamily: fonts.heading, fontSize: 13, fontWeight: 800,
									color: colors.black, lineHeight: 1.3,
								}}>
									{l.title}
								</div>
								{/* 标签 */}
								{l.tag && (
									<div style={{
										background: cfg.tagBg, color: colors.black,
										padding: '0 10px',
										display: 'flex', alignItems: 'center',
										borderLeft: `2px solid ${colors.black}`,
										fontFamily: fonts.mono, fontSize: 10, fontWeight: 900, letterSpacing: 0.5,
									}}>
										{l.tag}
									</div>
								)}
							</motion.div>
						);
					})}
				</motion.div>

				{/* 底部说明 */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5, delay: 1.0 }}
					style={{
						display: 'flex', alignItems: 'center', justifyContent: 'space-between',
						gap: 12, padding: '10px 16px', background: colors.dark, color: colors.white,
						border, boxShadow: shadowSm,
					}}
				>
					<span style={{ fontFamily: fonts.mono, fontSize: 12, fontWeight: 700, letterSpacing: 0.5 }}>
						<span style={{ color: colors.green }}>✓ 2 节已上</span>
						<span style={{ margin: '0 10px', opacity: 0.5 }}>|</span>
						<span style={{ color: colors.blue }}>🔜 2 节下周</span>
						<span style={{ margin: '0 10px', opacity: 0.5 }}>|</span>
						<span style={{ opacity: 0.85 }}>🗓 8 节深化中</span>
					</span>
					<span style={{
						fontFamily: fonts.heading, fontSize: 13, fontWeight: 800, color: colors.yellow,
					}}>
						只承诺过程 · 不承诺金钱结果
					</span>
				</motion.div>
			</div>
		</Slide>
	);
}
