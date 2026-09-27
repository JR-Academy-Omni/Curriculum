import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, fonts, border, shadow } from '../ui';

// P08：谁用什么档 —— 按判断密度，不按重要性
// SoT：蓝图 v1.0 §6.9（Teammate 相关陷阱已随 Agent Team 移交 L8）
// 数据纪律：只讲档位和判断线，不出现模型名 / 价格 / 版本号
const ROLES = [
	{ role: 'Verifier', job: '按判据找反例、给红绿', dense: true, pick: '最强档', effort: '高' },
	{ role: '实现型', job: '改文件、跑验证', dense: true, pick: '最强档', effort: '偏高' },
	{ role: '调查员', job: '读文件、搜日志、归纳复述', dense: false, pick: '中间档', effort: '低' },
	{ role: '格式转换 / 清单核对', job: '机械劳动', dense: false, pick: '最快档', effort: '最低' },
];

export default function L7P08_ModelChoice() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner split>
				<div style={{ flex: '0 0 47%' }}>
					<div style={{ display: 'flex', gap: 10, marginBottom: 8 }}>
						<Tag bg={colors.dark}>开跑前</Tag>
					</div>
					<Title size="40px" style={{ marginBottom: 14 }}>
						谁用什么档、<span style={{ background: colors.yellow, padding: '0 8px' }}>花多少力气</span>
					</Title>

					<motion.div
						initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4, delay: 0.12 }}
						style={{ border, boxShadow: shadow, background: '#fffbe8', padding: '14px 17px', marginBottom: 16 }}
					>
						<div style={{ fontFamily: fonts.mono, fontSize: 11.5, color: colors.red, letterSpacing: 1.3, fontWeight: 700, marginBottom: 7 }}>
							★ 默认值陷阱
						</div>
						<div style={{ fontSize: 17, fontWeight: 800, color: colors.dark, lineHeight: 1.55, marginBottom: 8 }}>
							不指定的话，它<strong style={{ color: colors.red }}>跟着主对话走</strong>。
						</div>
						<div style={{ fontSize: 14, color: '#665', lineHeight: 1.6 }}>
							想想它平时干什么：读文件、搜日志、归纳复述。
							<strong>你主线程用最强档，它就跟着用最强档去做检索。</strong>
							——这是最常见的白花钱方式。
						</div>
					</motion.div>

					<div style={{ fontFamily: fonts.mono, fontSize: 12, color: colors.green, letterSpacing: 1.4, fontWeight: 700, marginBottom: 9 }}>
						换档的一个隐藏价值
					</div>
					<motion.div
						initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4, delay: 0.35 }}
						style={{ border, boxShadow: shadow, background: colors.white, padding: '14px 17px' }}
					>
						<div style={{ fontSize: 16.5, fontWeight: 800, color: colors.dark, marginBottom: 9 }}>
							主会话中途换档 = 缓存全废
						</div>
						<div style={{ fontFamily: fonts.mono, fontSize: 12.5, lineHeight: 1.9, color: '#555', paddingLeft: 4 }}>
							<span style={{ color: colors.red }}>✕</span> 主会话切便宜档 → 干活 → 切回来<br />
							<span style={{ color: '#999', paddingLeft: 16 }}>两次全量缓存失效</span><br />
							<span style={{ color: colors.green }}>✓</span> 开一个子 Agent 用便宜档<br />
							<span style={{ color: '#999', paddingLeft: 16 }}>主线程缓存完好</span>
						</div>
						<div style={{ marginTop: 10, paddingTop: 10, borderTop: '2px solid #f0f0f0', fontSize: 14, color: '#555', lineHeight: 1.55 }}>
							所以子 Agent 除了隔离噪音，还是<strong style={{ color: colors.dark }}>唯一能在不破坏缓存的前提下混用档位</strong>的机制。
						</div>
					</motion.div>
				</div>

				<div style={{ flex: 1, minWidth: 0 }}>
					<div style={{ fontFamily: fonts.mono, fontSize: 12, color: colors.purple, letterSpacing: 1.4, fontWeight: 700, marginBottom: 10 }}>
						选档判断线
					</div>

					<div style={{ display: 'flex', background: colors.dark, color: colors.white, border, borderBottom: 'none' }}>
						<div style={{ flex: 1.1, padding: '9px 14px', fontFamily: fonts.mono, fontSize: 11.5, letterSpacing: 1.2, fontWeight: 700 }}>角色</div>
						<div style={{ flex: '0 0 96px', padding: '9px 12px', fontFamily: fonts.mono, fontSize: 11.5, letterSpacing: 1.2, fontWeight: 700, borderLeft: '2px solid rgba(255,255,255,0.2)' }}>密度</div>
						<div style={{ flex: '0 0 96px', padding: '9px 12px', fontFamily: fonts.mono, fontSize: 11.5, letterSpacing: 1.2, fontWeight: 700, borderLeft: '2px solid rgba(255,255,255,0.2)', color: colors.yellow }}>模型档</div>
						<div style={{ flex: '0 0 78px', padding: '9px 10px', fontFamily: fonts.mono, fontSize: 11.5, letterSpacing: 1.2, fontWeight: 700, borderLeft: '2px solid rgba(255,255,255,0.2)', color: colors.yellow }}>力度</div>
					</div>
					<div style={{ border, boxShadow: shadow, background: colors.white, marginBottom: 18 }}>
						{ROLES.map((r, i) => (
							<motion.div
								key={r.role}
								initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.35, delay: 0.25 + i * 0.11 }}
								style={{
									display: 'flex', alignItems: 'stretch',
									borderBottom: i < ROLES.length - 1 ? '2px solid #eee' : 'none',
									background: r.dense ? '#fff6f6' : colors.white,
								}}
							>
								<div style={{ flex: 1.1, padding: '12px 14px' }}>
									<div style={{ fontSize: 16, fontWeight: 800, color: colors.dark }}>{r.role}</div>
									<div style={{ fontSize: 12.5, color: '#888', lineHeight: 1.35 }}>{r.job}</div>
								</div>
								<div style={{ flex: '0 0 96px', borderLeft: '2px solid #eee', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
									<span style={{
										fontSize: 12.5, fontWeight: 700, padding: '3px 9px',
										background: r.dense ? colors.red : '#e8e8e8',
										color: r.dense ? colors.white : '#666',
									}}>{r.dense ? '判断' : '执行'}</span>
								</div>
								<div style={{ flex: '0 0 96px', borderLeft: '2px solid #eee', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 700, color: r.dense ? colors.dark : '#777' }}>
									{r.pick}
								</div>
								<div style={{ flex: '0 0 78px', borderLeft: '2px solid #eee', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
									<span style={{
										fontFamily: fonts.mono, fontSize: 13, fontWeight: 700, padding: '3px 9px',
										background: r.dense ? colors.dark : '#f0f0f0',
										color: r.dense ? colors.yellow : '#888',
									}}>{r.effort}</span>
								</div>
							</motion.div>
						))}
					</div>

					<motion.div
						initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4, delay: 0.65 }}
						style={{ padding: '15px 20px', background: colors.dark, color: colors.white, border, boxShadow: shadow, marginBottom: 14 }}
					>
						<div style={{ fontSize: 19, fontWeight: 800, lineHeight: 1.5 }}>
							跟<span style={{ color: colors.yellow }}>判断密度</span>走，
							不跟<span style={{ textDecoration: 'line-through', opacity: 0.55 }}>重要性</span>走。
						</div>
						<div style={{ marginTop: 7, fontSize: 14.5, opacity: 0.85, lineHeight: 1.55 }}>
							「这个角色重不重要」是错的问法。要问的是：<strong>它是在做判断，还是在做检索？</strong>
						</div>
					</motion.div>

					<div style={{ display: 'flex', gap: 12 }}>
						<motion.div
							initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.85 }}
							style={{ flex: 1.15, border, boxShadow: '3px 3px 0 #000', background: colors.yellow, padding: '11px 14px' }}
						>
							<div style={{ fontSize: 15, fontWeight: 800, color: colors.black, marginBottom: 4 }}>力度不是智商，是步数</div>
							<div style={{ fontSize: 12.5, color: '#665', lineHeight: 1.5 }}>
								调低 = 工具调用更少、更合并。<strong>它不是变笨，是变得不爱多跑。</strong>
							</div>
						</motion.div>
						<motion.div
							initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.95 }}
							style={{ flex: 1, border, boxShadow: '3px 3px 0 #000', background: '#fff2f2', padding: '11px 14px' }}
						>
							<div style={{ fontSize: 15, fontWeight: 800, color: colors.red, marginBottom: 4 }}>低力度会「想当然」</div>
							<div style={{ fontSize: 12.5, color: '#666', lineHeight: 1.5 }}>
								少查一次就少一条证据。<strong>所以低力度那几路，brief 里「附文件:行号」更不能省。</strong>
							</div>
						</motion.div>
					</div>

					<motion.div
						initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.05 }}
						style={{ marginTop: 12, fontSize: 14, color: '#666', textAlign: 'center', lineHeight: 1.55 }}
					>
						两个旋钮，<strong style={{ color: colors.dark }}>同一条判断线</strong>——
						先调力度看质量掉不掉，再决定要不要动模型档。
					</motion.div>
				</div>
			</Inner>
		</Slide>
	);
}
