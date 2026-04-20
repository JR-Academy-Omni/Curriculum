import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow, shadowSm } from '../ui';

interface Row {
	label: string;
	jr: string;
	dlai: string;
	fastai: string;
	cn: string;
}

const rows: Row[] = [
	{ label: '语言', jr: '中文', dlai: '英文', fastai: '英文', cn: '中文' },
	{ label: '课时', jr: '183 节', dlai: '~30 节', fastai: '~24 节', cn: '~60 节' },
	{ label: 'Phase 完整度', jr: '10 Phase 全栈', dlai: '片段化', fastai: '片段化', cn: '5-6 Phase' },
	{ label: 'MCP 覆盖', jr: '6 节 + 源码', dlai: '❌ 无', fastai: '❌ 无', cn: '0-1 节' },
	{ label: 'P3 职业孵化', jr: '12 周真实项目', dlai: '❌ 无', fastai: '❌ 无', cn: '❌ 无' },
	{ label: '就业闭环', jr: 'LinkedIn+CV+内推', dlai: '❌ 无', fastai: '❌ 无', cn: '部分' },
];

const headers = [
	{ name: 'JR Academy V5', sub: 'AI Engineer Bootcamp', isUs: true },
	{ name: 'deeplearning.ai', sub: 'Andrew Ng', isUs: false },
	{ name: 'Fast.ai', sub: 'Jeremy Howard', isUs: false },
	{ name: '国内某 AI 训练营', sub: '匿名', isUs: false },
];

function renderCell(value: string, isUs: boolean) {
	const isNegative = value.includes('❌') || value === '片段化' || value === '部分';
	if (isUs) {
		return (
			<div style={{
				fontFamily: fonts.heading, fontSize: 'clamp(13px,1.3vw,17px)',
				fontWeight: 900, color: colors.black,
				display: 'flex', alignItems: 'center', gap: 6, justifyContent: 'center',
			}}>
				<span style={{ color: colors.red }}>✓</span> {value}
			</div>
		);
	}
	return (
		<div style={{
			fontFamily: fonts.mono, fontSize: 'clamp(11px,1.1vw,13px)',
			fontWeight: 600, color: isNegative ? '#aaa' : '#555',
			textAlign: 'center',
		}}>
			{value}
		</div>
	);
}

export default function S27_Competitors() {
	return (
		<Slide bg={colors.warmBg}>
			<div style={{
				width: '94%', maxWidth: 1400, height: '90%', padding: '24px 16px',
				display: 'flex', flexDirection: 'column', gap: 14,
			}}>
				{/* 标题 */}
				<motion.div
					initial={{ opacity: 0, y: -8 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4 }}
					style={{ textAlign: 'center' }}
				>
					<h2 style={{
						fontFamily: fonts.heading, fontSize: 'clamp(28px,3.8vw,48px)', fontWeight: 900,
						lineHeight: 1.1, letterSpacing: -1, margin: 0,
					}}>
						和其他 AI 课的<span style={{
							display: 'inline-block', padding: '0 12px', background: colors.yellow,
							border, boxShadow: shadowSm, transform: 'rotate(-1deg)',
						}}>区别</span>
					</h2>
					<p style={{
						fontFamily: fonts.mono, fontSize: 'clamp(11px,1.2vw,14px)', color: '#555',
						fontWeight: 700, marginTop: 8, letterSpacing: 0.5,
					}}>
						客观对比 · 你可以自己去查
					</p>
				</motion.div>

				{/* 表头 */}
				<div style={{
					display: 'grid',
					gridTemplateColumns: '160px 1.4fr 1fr 1fr 1fr',
					gap: 0,
				}}>
					<div style={{
						padding: '10px 12px', background: colors.dark, color: colors.white,
						border, borderRight: 'none',
						fontFamily: fonts.mono, fontSize: 11, fontWeight: 800, letterSpacing: 1,
						display: 'flex', alignItems: 'center',
					}}>
						维度
					</div>
					{headers.map((h, i) => (
						<div key={h.name} style={{
							padding: '8px 10px',
							background: h.isUs ? colors.red : colors.dark,
							color: h.isUs ? colors.yellow : colors.white,
							border,
							borderRight: i === headers.length - 1 ? border : 'none',
							textAlign: 'center',
						}}>
							<div style={{
								fontFamily: fonts.heading,
								fontSize: 'clamp(12px,1.2vw,15px)', fontWeight: 900, lineHeight: 1.15,
							}}>
								{h.name}
							</div>
							<div style={{
								fontFamily: fonts.mono, fontSize: 9,
								fontWeight: 600, opacity: 0.7, marginTop: 2,
							}}>
								{h.sub}
							</div>
						</div>
					))}
				</div>

				{/* 表格行 */}
				<div style={{ display: 'flex', flexDirection: 'column' }}>
					{rows.map((r, i) => (
						<motion.div
							key={r.label}
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.3, delay: 0.15 + i * 0.07 }}
							style={{
								display: 'grid',
								gridTemplateColumns: '160px 1.4fr 1fr 1fr 1fr',
								gap: 0,
								background: i % 2 === 0 ? colors.white : '#faf5ef',
							}}
						>
							<div style={{
								padding: '12px 14px',
								border, borderTop: 'none', borderRight: 'none',
								fontFamily: fonts.heading, fontSize: 'clamp(12px,1.2vw,15px)',
								fontWeight: 800, color: colors.black,
								display: 'flex', alignItems: 'center',
							}}>
								{r.label}
							</div>
							<div style={{
								padding: '12px 10px', border, borderTop: 'none', borderRight: 'none',
								background: colors.yellow,
								display: 'flex', alignItems: 'center', justifyContent: 'center',
							}}>
								{renderCell(r.jr, true)}
							</div>
							<div style={{ padding: '12px 10px', border, borderTop: 'none', borderRight: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
								{renderCell(r.dlai, false)}
							</div>
							<div style={{ padding: '12px 10px', border, borderTop: 'none', borderRight: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
								{renderCell(r.fastai, false)}
							</div>
							<div style={{ padding: '12px 10px', border, borderTop: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
								{renderCell(r.cn, false)}
							</div>
						</motion.div>
					))}
				</div>

				{/* 底部结论 */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5, delay: 0.9 }}
					style={{
						padding: '14px 20px', background: colors.dark, color: colors.white,
						border, boxShadow: shadow, textAlign: 'center',
					}}
				>
					<span style={{
						fontFamily: fonts.heading, fontSize: 'clamp(14px,1.6vw,22px)',
						fontWeight: 900, letterSpacing: 0.3,
					}}>
						国内唯一一个把完整 AI Engineer 技术栈做到{' '}
						<span style={{ color: colors.yellow }}>183 节</span>{' '}
						的课
					</span>
				</motion.div>
			</div>
		</Slide>
	);
}
