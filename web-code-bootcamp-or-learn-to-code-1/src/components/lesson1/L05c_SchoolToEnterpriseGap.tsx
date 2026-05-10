import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow, shadowSm } from '../ui';

const SCHOOL = [
	'数据结构 / 算法 / 离散数学',
	'一两个 toy 项目 (一个学期写一次)',
	'单人作业 · 没有 PR / Code Review',
	'考试导向 · 没有 production 经验',
	'AI 课停留在"听过 ChatGPT"',
];

const ENTERPRISE = [
	'Sprint · Standup · Retrospective',
	'Code Review · PR · Branch 策略',
	'Production · CI/CD · On-call · 监控',
	'AI Coding 日常 (Cursor / Claude Code)',
	'RAG / Agent / MCP · 接业务上线',
];

function SchoolIllustration() {
	return (
		<svg viewBox="0 0 220 130" style={{ width: '100%', height: '100%', display: 'block' }}>
			{/* 校园建筑 (柱子+三角顶) */}
			<polygon points="50,55 110,30 170,55" fill={colors.warmBg} stroke={colors.black} strokeWidth="3" />
			<rect x="55" y="55" width="110" height="50" fill={colors.warmBg} stroke={colors.black} strokeWidth="3" />
			<rect x="68" y="68" width="14" height="32" fill={colors.warmBg} stroke={colors.black} strokeWidth="2" />
			<rect x="92" y="68" width="14" height="32" fill={colors.warmBg} stroke={colors.black} strokeWidth="2" />
			<rect x="116" y="68" width="14" height="32" fill={colors.warmBg} stroke={colors.black} strokeWidth="2" />
			<rect x="140" y="68" width="14" height="32" fill={colors.warmBg} stroke={colors.black} strokeWidth="2" />
			{/* 学位帽 */}
			<polygon points="40,108 12,118 40,128 68,118" fill={colors.black} stroke={colors.black} strokeWidth="2.5" />
			<rect x="35" y="103" width="10" height="8" fill={colors.black} />
			<line x1="68" y1="118" x2="68" y2="128" stroke={colors.black} strokeWidth="2" />
			<circle cx="68" cy="129" r="3" fill={colors.yellow} stroke={colors.black} strokeWidth="1.5" />
			{/* 书堆 */}
			<rect x="170" y="98" width="40" height="9" fill={colors.red} stroke={colors.black} strokeWidth="2" />
			<rect x="166" y="107" width="48" height="9" fill={colors.blue} stroke={colors.black} strokeWidth="2" />
			<rect x="172" y="116" width="38" height="9" fill={colors.green} stroke={colors.black} strokeWidth="2" />
		</svg>
	);
}

function EnterpriseIllustration() {
	return (
		<svg viewBox="0 0 220 130" style={{ width: '100%', height: '100%', display: 'block' }}>
			{/* 写字楼主体 */}
			<rect x="60" y="20" width="100" height="100" fill={colors.dark} stroke={colors.black} strokeWidth="3" />
			{/* 屋顶 antenna */}
			<rect x="105" y="6" width="4" height="14" fill={colors.black} />
			<circle cx="107" cy="6" r="3" fill={colors.red} stroke={colors.black} strokeWidth="1.5" />
			{/* 窗户阵列 (随机亮灯) */}
			<rect x="70" y="32" width="14" height="14" fill={colors.yellow} />
			<rect x="92" y="32" width="14" height="14" fill={colors.yellow} />
			<rect x="114" y="32" width="14" height="14" fill="#444" />
			<rect x="136" y="32" width="14" height="14" fill={colors.yellow} />
			<rect x="70" y="54" width="14" height="14" fill="#444" />
			<rect x="92" y="54" width="14" height="14" fill={colors.yellow} />
			<rect x="114" y="54" width="14" height="14" fill={colors.yellow} />
			<rect x="136" y="54" width="14" height="14" fill="#444" />
			<rect x="70" y="76" width="14" height="14" fill={colors.yellow} />
			<rect x="92" y="76" width="14" height="14" fill="#444" />
			<rect x="114" y="76" width="14" height="14" fill={colors.yellow} />
			<rect x="136" y="76" width="14" height="14" fill={colors.yellow} />
			{/* 大门 */}
			<rect x="100" y="98" width="20" height="22" fill={colors.yellow} stroke={colors.black} strokeWidth="2" />
			<circle cx="116" cy="110" r="1.5" fill={colors.black} />
			{/* 左右屏幕 (开发环境) */}
			<rect x="6" y="68" width="44" height="32" fill={colors.white} stroke={colors.black} strokeWidth="2.5" />
			<line x1="10" y1="76" x2="36" y2="76" stroke={colors.green} strokeWidth="2" />
			<line x1="10" y1="82" x2="42" y2="82" stroke={colors.red} strokeWidth="2" />
			<line x1="10" y1="88" x2="30" y2="88" stroke={colors.blue} strokeWidth="2" />
			<line x1="10" y1="94" x2="38" y2="94" stroke={colors.dark} strokeWidth="2" />
			<rect x="20" y="100" width="16" height="6" fill={colors.dark} />
			{/* 右边咖啡杯 */}
			<rect x="178" y="92" width="24" height="22" fill={colors.warmBg} stroke={colors.black} strokeWidth="2.5" />
			<path d="M 202 96 Q 212 100 202 110" fill="none" stroke={colors.black} strokeWidth="2.5" />
			<rect x="178" y="92" width="24" height="6" fill={colors.dark} />
			<line x1="184" y1="86" x2="184" y2="91" stroke={colors.dark} strokeWidth="1.5" />
			<line x1="190" y1="84" x2="190" y2="91" stroke={colors.dark} strokeWidth="1.5" />
			<line x1="196" y1="86" x2="196" y2="91" stroke={colors.dark} strokeWidth="1.5" />
		</svg>
	);
}

function GapIllustration() {
	return (
		<svg viewBox="0 0 90 130" style={{ width: '100%', height: '100%', display: 'block' }}>
			{/* 断开的桥 */}
			<rect x="0" y="62" width="34" height="10" fill={colors.dark} stroke={colors.black} strokeWidth="2" />
			<rect x="56" y="62" width="34" height="10" fill={colors.dark} stroke={colors.black} strokeWidth="2" />
			{/* 警示符 */}
			<polygon points="45,32 32,58 58,58" fill={colors.red} stroke={colors.black} strokeWidth="2.5" />
			<line x1="45" y1="40" x2="45" y2="50" stroke={colors.white} strokeWidth="3" strokeLinecap="round" />
			<circle cx="45" cy="55" r="1.5" fill={colors.white} />
			{/* 落差线 */}
			<line x1="40" y1="78" x2="40" y2="100" stroke={colors.black} strokeWidth="2" strokeDasharray="3 3" />
			<line x1="50" y1="78" x2="50" y2="100" stroke={colors.black} strokeWidth="2" strokeDasharray="3 3" />
		</svg>
	);
}

export default function L05c_SchoolToEnterpriseGap() {
	return (
		<Slide bg={colors.warmBg}>
			<div style={{ width: '94%', maxWidth: 1500, padding: '24px 48px' }}>
				<motion.div
					initial={{ opacity: 0, x: -20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.4 }}
					style={{ marginBottom: 16 }}
				>
					<div style={{
						display: 'inline-block', padding: '6px 14px',
						background: colors.dark, color: colors.yellow,
						fontFamily: fonts.mono, fontSize: 17, fontWeight: 900, letterSpacing: 2,
						border, boxShadow: shadowSm, marginBottom: 10,
					}}>
						COURSE MISSION · 我们到底在做什么
					</div>
					<h2 style={{
						fontFamily: fonts.heading, fontSize: 52, fontWeight: 900,
						letterSpacing: -1.5, lineHeight: 1, color: colors.black,
					}}>
						这门课要填的是
						<span style={{
							display: 'inline-block', background: colors.yellow,
							padding: '0 14px', border: `4px solid ${colors.black}`,
							boxShadow: `5px 5px 0 ${colors.black}`, margin: '0 6px',
						}}>
							学校 → 企业
						</span>
						之间的 gap
					</h2>
				</motion.div>

				<div style={{
					display: 'grid', gridTemplateColumns: '1fr 130px 1fr', gap: 14,
					alignItems: 'stretch',
				}}>
					{/* 左：学校 */}
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, delay: 0.3 }}
						style={{
							background: colors.white, border, boxShadow: shadow,
							padding: '16px 20px', display: 'flex', flexDirection: 'column',
						}}
					>
						<div style={{
							height: 130, marginBottom: 10,
							background: '#faf3e8', border: `2.5px solid ${colors.black}`,
							padding: 4, boxShadow: 'inset -3px -3px 0 rgba(0,0,0,0.08)',
						}}>
							<SchoolIllustration />
						</div>
						<div style={{
							fontFamily: fonts.mono, fontSize: 15, fontWeight: 900,
							color: '#888', letterSpacing: 2, marginBottom: 4,
						}}>
							🎓 学校教的
						</div>
						<div style={{
							fontFamily: fonts.heading, fontSize: 22, fontWeight: 900,
							color: colors.black, lineHeight: 1.15, letterSpacing: -0.4, marginBottom: 10,
						}}>
							考试 · 概念 · toy 项目
						</div>
						<ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 6 }}>
							{SCHOOL.map((s) => (
								<li key={s} style={{
									display: 'flex', alignItems: 'flex-start', gap: 8,
									fontFamily: fonts.body, fontSize: 17, color: '#444',
									fontWeight: 600, lineHeight: 1.4,
								}}>
									<span style={{ color: '#bbb', fontWeight: 900, fontSize: 19, lineHeight: 1, marginTop: -1, flexShrink: 0 }}>·</span>
									<span>{s}</span>
								</li>
							))}
						</ul>
					</motion.div>

					{/* 中：GAP 视觉 */}
					<motion.div
						initial={{ opacity: 0, scale: 0.7 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.5, delay: 0.5 }}
						style={{
							display: 'flex', flexDirection: 'column',
							alignItems: 'center', justifyContent: 'center',
						}}
					>
						<div style={{ width: '100%', height: 130, marginBottom: 8 }}>
							<GapIllustration />
						</div>
						<div style={{
							padding: '8px 14px', background: colors.red, color: colors.white,
							fontFamily: fonts.heading, fontSize: 26, fontWeight: 900,
							border: `4px solid ${colors.black}`, boxShadow: `4px 4px 0 ${colors.black}`,
							transform: 'rotate(-3deg)',
						}}>
							GAP
						</div>
						<div style={{
							marginTop: 8, fontFamily: fonts.heading, fontSize: 44, fontWeight: 900,
							color: colors.dark, lineHeight: 1,
						}}>
							→
						</div>
						<div style={{
							marginTop: 8, fontFamily: fonts.mono, fontSize: 14, fontWeight: 800,
							color: '#666', letterSpacing: 1, textAlign: 'center', lineHeight: 1.3,
						}}>
							我们就是<br />做这件事
						</div>
					</motion.div>

					{/* 右：企业 */}
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, delay: 0.4 }}
						style={{
							background: colors.dark, color: colors.white, border,
							boxShadow: `6px 6px 0 ${colors.yellow}`,
							padding: '16px 20px', display: 'flex', flexDirection: 'column',
						}}
					>
						<div style={{
							height: 130, marginBottom: 10,
							background: '#1a2240', border: `2.5px solid ${colors.black}`,
							padding: 4, boxShadow: 'inset -3px -3px 0 rgba(0,0,0,0.3)',
						}}>
							<EnterpriseIllustration />
						</div>
						<div style={{
							fontFamily: fonts.mono, fontSize: 15, fontWeight: 900,
							color: colors.yellow, letterSpacing: 2, marginBottom: 4,
						}}>
							🏢 企业要的
						</div>
						<div style={{
							fontFamily: fonts.heading, fontSize: 22, fontWeight: 900,
							color: colors.white, lineHeight: 1.15, letterSpacing: -0.4, marginBottom: 10,
						}}>
							第一天就能上手干活
						</div>
						<ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 6 }}>
							{ENTERPRISE.map((s) => (
								<li key={s} style={{
									display: 'flex', alignItems: 'flex-start', gap: 8,
									fontFamily: fonts.body, fontSize: 17, color: colors.white,
									fontWeight: 600, lineHeight: 1.4,
								}}>
									<span style={{ color: colors.yellow, fontWeight: 900, fontSize: 19, lineHeight: 1, marginTop: -1, flexShrink: 0 }}>→</span>
									<span>{s}</span>
								</li>
							))}
						</ul>
					</motion.div>
				</div>

				<motion.div
					initial={{ opacity: 0, y: 16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4, delay: 0.9 }}
					style={{
						marginTop: 14, padding: '12px 20px',
						background: colors.indigo, color: colors.white,
						border, boxShadow: `5px 5px 0 ${colors.yellow}`,
						fontFamily: fonts.heading, fontSize: 19, fontWeight: 900,
						letterSpacing: -0.3, lineHeight: 1.4, textAlign: 'center',
					}}
				>
					学完 = <span style={{ background: colors.yellow, color: colors.black, padding: '0 8px', border: `2px solid ${colors.black}` }}>能直接去公司干活</span>，不是"还要再花 6 个月适应"
				</motion.div>
			</div>
		</Slide>
	);
}
