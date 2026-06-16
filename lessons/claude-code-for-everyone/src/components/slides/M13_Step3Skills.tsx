import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow } from '../ui';

interface Layer { tag: string; tagLabel: string; skill: string; color: string; bg: string; nodes: { label: string; hint: string }[]; }

const LAYERS: Layer[] = [
	{ tag: '01', tagLabel: '数据采集', skill: '（信号源）', color: colors.indigo, bg: '#eef2ff',
		nodes: [{ label: 'Reddit', hint: 'r/Marketing 热帖' }, { label: '小红书 / 抖音', hint: '当日热点' }, { label: 'Google Trends', hint: '关键词曲线' }, { label: '评论区情绪', hint: '近 7 天评论' }] },
	{ tag: '02', tagLabel: '选题决策', skill: '/xhs-topic-picker', color: colors.purple, bg: '#faf5ff',
		nodes: [{ label: '每天扫所有信号源', hint: '聚合 + 去重' }, { label: '按热度 / 相关度打分', hint: 'LLM scoring' }, { label: '输出 Top 3 + hook', hint: '当日发布池' }] },
	{ tag: '03', tagLabel: '多平台生成', skill: '/xhs-draft · /blog-longform-writer', color: colors.orange, bg: '#fff7ed',
		nodes: [{ label: '小红书', hint: '400 字 · 三切角' }, { label: '公众号', hint: '1500 字 · 排版' }, { label: 'LinkedIn', hint: '专业长文' }, { label: 'X', hint: '280 字 · 钩子' }] },
	{ tag: '04', tagLabel: '配图', skill: '/xhs-poster', color: colors.rose, bg: '#fff0f6',
		nodes: [{ label: 'gpt-image 出图', hint: '各平台尺寸' }, { label: '品牌色校验', hint: 'DESIGN.md 兜底' }, { label: '水印 + alt 文案', hint: 'SEO + 版权' }] },
	{ tag: '05', tagLabel: '发布 + 追踪', skill: 'metrics-agent', color: colors.green, bg: '#f0fdf4',
		nodes: [{ label: '4 平台自动发', hint: 'Buffer / webhook' }, { label: '6h/24h/7d 取数据', hint: 'API 回流' }, { label: '写入 dashboard', hint: 'Notion / admin' }] },
];

export default function S13_Step3Skills() {
	return (
		<Slide bg={colors.warmBg}>
			<div style={{ width: '94%', maxWidth: 1500, height: '88%', padding: '24px 36px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
				<motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} style={{ marginBottom: 16 }}>
					<div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10, flexWrap: 'wrap' }}>
						<div style={{ padding: '6px 14px', background: colors.dark, color: colors.yellow, fontFamily: fonts.mono, fontSize: 16.5, fontWeight: 700, letterSpacing: 2 }}>STEP 3 · 自动选题 + 多平台</div>
						<div style={{ padding: '6px 14px', background: colors.rose, color: colors.white, fontFamily: fonts.mono, fontSize: 16.5, fontWeight: 700, letterSpacing: 2, border }}>BUILT WITH · 我们真实在用的 Skills</div>
					</div>
					<h2 style={{ fontFamily: fonts.heading, fontSize: '42.5px', fontWeight: 900, letterSpacing: -1 }}>从 <span style={{ color: colors.rose }}>内容生产者</span> 升级为 <span style={{ color: colors.dark }}>内容架构师</span></h2>
				</motion.div>

				<motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.13, delayChildren: 0.2 } } }}
					style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
					{LAYERS.map((layer, lIdx) => (
						<motion.div key={layer.tag} variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } }} transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
							style={{ display: 'flex', alignItems: 'stretch', border, background: layer.bg, boxShadow: shadow, minHeight: 72 }}>
							<div style={{ flexShrink: 0, width: 210, background: layer.color, color: colors.white, padding: '10px 14px', display: 'flex', flexDirection: 'column', justifyContent: 'center', borderRight: `3px solid ${colors.black}` }}>
								<div style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 700, letterSpacing: 2, opacity: 0.85, marginBottom: 3 }}>LAYER {layer.tag}</div>
								<div style={{ fontFamily: fonts.heading, fontSize: 19, fontWeight: 900, lineHeight: 1.2, marginBottom: 4 }}>{layer.tagLabel}</div>
								<div style={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 700, background: 'rgba(0,0,0,0.25)', padding: '2px 6px', alignSelf: 'flex-start' }}>{layer.skill}</div>
							</div>
							<div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 6, padding: '8px 12px', minWidth: 0 }}>
								{layer.nodes.map((node, nIdx) => (
									<div key={node.label} style={{ display: 'flex', alignItems: 'center', flex: 1, minWidth: 0 }}>
										<div style={{ flex: 1, minWidth: 0, background: colors.white, border: `2px solid ${colors.black}`, padding: '7px 10px', minHeight: 50, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
											<div style={{ fontFamily: fonts.body, fontSize: 17, fontWeight: 900, color: colors.black, lineHeight: 1.2, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{node.label}</div>
											<div style={{ fontFamily: fonts.mono, fontSize: 13.5, color: '#666', lineHeight: 1.3, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{node.hint}</div>
										</div>
										{nIdx < layer.nodes.length - 1 && <div style={{ fontFamily: fonts.mono, fontSize: 17.5, fontWeight: 700, color: layer.color, padding: '0 4px', flexShrink: 0 }}>+</div>}
									</div>
								))}
							</div>
						</motion.div>
					))}
				</motion.div>

				<motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 1.4 }}
					style={{ marginTop: 14, padding: '12px 22px', background: colors.dark, color: colors.white, display: 'flex', justifyContent: 'space-between', alignItems: 'center', border, boxShadow: `6px 6px 0 ${colors.rose}` }}>
					<div style={{ fontFamily: fonts.heading, fontSize: 23.5, fontWeight: 900 }}>你从 <span style={{ color: colors.yellow }}>内容生产者</span>，变成 <span style={{ color: colors.green }}>内容架构师</span></div>
					<div style={{ fontFamily: fonts.mono, fontSize: 15.5, color: '#aaa', letterSpacing: 2 }}>1 PIPELINE · 4 PLATFORM</div>
				</motion.div>
			</div>
		</Slide>
	);
}
