import { motion } from 'framer-motion';
import { Slide, Inner, Title, colors, fonts, border, shadow } from '../ui';

// Pipeline layers — each is a horizontal band of nodes
interface Node {
	label: string;
	hint?: string;
}

interface Layer {
	tag: string;
	tagLabel: string;
	skill: string;
	color: string;
	bg: string;
	nodes: Node[];
}

const LAYERS: Layer[] = [
	{
		tag: '01',
		tagLabel: '数据采集',
		skill: '/topic-scanner',
		color: colors.indigo,
		bg: '#eef2ff',
		nodes: [
			{ label: 'Reddit API', hint: 'r/Marketing 热帖' },
			{ label: 'X scraping', hint: 'trend + 互动量' },
			{ label: 'Google Trends', hint: '关键词曲线' },
			{ label: '行业 RSS', hint: 'TechCrunch · 36kr' },
			{ label: '评论区情绪', hint: '过去 7 天评论分析' },
		],
	},
	{
		tag: '02',
		tagLabel: '决策（AI Agent）',
		skill: '/topic-picker',
		color: colors.techPurple,
		bg: colors.techBg,
		nodes: [
			{ label: '每天 8AM 扫所有数据源', hint: '聚合 + 去重' },
			{ label: '按热度 / 相关度 / 重复度打分', hint: 'LLM scoring' },
			{ label: '输出 Top 3 选题 + hook', hint: '当日发布池' },
		],
	},
	{
		tag: '03',
		tagLabel: '生成（4 平台版本）',
		skill: '/multi-platform-writer',
		color: colors.orange,
		bg: '#fff7ed',
		nodes: [
			{ label: 'X', hint: '280 字 · 钩子开头' },
			{ label: '小红书', hint: '400 字 · emoji + 话题' },
			{ label: 'LinkedIn', hint: '专业语气 · 长文' },
			{ label: '公众号', hint: '1500 字 · 排版' },
		],
	},
	{
		tag: '04',
		tagLabel: '配图 + 水印',
		skill: '/xhs-poster',
		color: colors.purple,
		bg: '#faf5ff',
		nodes: [
			{ label: 'gpt-image-2 出图', hint: '4 个尺寸 / 平台' },
			{ label: '品牌色 + 字体校验', hint: 'design system 兜底' },
			{ label: '自动加水印 + alt 文案', hint: 'SEO + 版权' },
		],
	},
	{
		tag: '05',
		tagLabel: '发布 + 追踪',
		skill: '/auto-publisher',
		color: colors.green,
		bg: '#f0fdf4',
		nodes: [
			{ label: '4 平台自动发布', hint: 'Buffer / 飞书 webhook' },
			{ label: '6h / 24h / 7d 取互动数据', hint: 'API 回流' },
			{ label: '写入 dashboard', hint: 'Notion / Metabase' },
		],
	},
];

export default function Z04_Step3_AutoTopic() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner style={{ flexDirection: 'column', gap: 0 }}>
				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: 14 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4 }}
					style={{ marginBottom: 18, width: '100%' }}
				>
					<div style={{
						display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12, flexWrap: 'wrap',
					}}>
						<div style={{
							padding: '6px 14px', background: colors.techPurple,
							color: colors.white, fontFamily: fonts.mono, fontSize: 14,
							fontWeight: 700, letterSpacing: 2,
						}}>STEP 3 · 自动选题 + 多平台分发</div>
						<div style={{
							padding: '6px 14px', background: colors.black,
							color: colors.yellow, fontFamily: fonts.mono, fontSize: 14,
							fontWeight: 700, letterSpacing: 2, border: `2px solid ${colors.black}`,
						}}>BUILT WITH · Claude Skills × 5</div>
					</div>
					<Title size="46px">
						从<span style={{ color: colors.techPurple }}> 内容生产者</span> ， 升级为<span style={{ color: colors.red }}> 内容架构师</span>
					</Title>
				</motion.div>

				{/* Pipeline layers */}
				<motion.div
					initial="hidden"
					animate="visible"
					variants={{ visible: { transition: { staggerChildren: 0.15, delayChildren: 0.25 } } }}
					style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 10 }}
				>
					{LAYERS.map((layer, lIdx) => (
						<motion.div
							key={layer.tag}
							variants={{
								hidden: { opacity: 0, x: -30 },
								visible: { opacity: 1, x: 0 },
							}}
							transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
							style={{
								display: 'flex', alignItems: 'stretch', gap: 0,
								border, background: layer.bg, boxShadow: shadow,
								minHeight: 78,
							}}
						>
							{/* Layer tag column */}
							<div style={{
								flexShrink: 0, width: 200,
								background: layer.color, color: colors.white,
								padding: '12px 16px', display: 'flex', flexDirection: 'column',
								justifyContent: 'center', borderRight: `3px solid ${colors.black}`,
							}}>
								<div style={{
									fontFamily: fonts.mono, fontSize: 13, fontWeight: 700,
									letterSpacing: 2, opacity: 0.85, marginBottom: 4,
								}}>LAYER {layer.tag}</div>
								<div style={{ fontSize: 16, fontWeight: 900, lineHeight: 1.2, marginBottom: 4 }}>
									{layer.tagLabel}
								</div>
								<div style={{
									fontFamily: fonts.mono, fontSize: 12, fontWeight: 700,
									letterSpacing: 1, background: 'rgba(0,0,0,0.25)',
									padding: '2px 6px', alignSelf: 'flex-start',
									borderRadius: 2,
								}}>SKILL · {layer.skill}</div>
							</div>

							{/* Nodes row */}
							<div style={{
								flex: 1, display: 'flex', alignItems: 'center',
								gap: 6, padding: '10px 14px', minWidth: 0,
							}}>
								{layer.nodes.map((node, nIdx) => (
									<div key={node.label} style={{ display: 'flex', alignItems: 'center', flex: 1, minWidth: 0 }}>
										<motion.div
											initial={{ opacity: 0, scale: 0.8 }}
											animate={{ opacity: 1, scale: 1 }}
											transition={{
												duration: 0.35,
												delay: 0.4 + lIdx * 0.15 + nIdx * 0.06,
											}}
											style={{
												flex: 1, minWidth: 0,
												background: colors.white,
												border: `2px solid ${colors.black}`,
												padding: '8px 10px', minHeight: 56,
												display: 'flex', flexDirection: 'column', justifyContent: 'center',
											}}
										>
											<div style={{
												fontSize: 15, fontWeight: 900, color: colors.black,
												lineHeight: 1.25, marginBottom: 2,
												whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
											}}>{node.label}</div>
											{node.hint && (
												<div style={{
													fontFamily: fonts.mono, fontSize: 12, color: '#666',
													lineHeight: 1.3,
													whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
												}}>{node.hint}</div>
											)}
										</motion.div>
										{nIdx < layer.nodes.length - 1 && (
											<div style={{
												fontFamily: fonts.mono, fontSize: 16, fontWeight: 700,
												color: layer.color, padding: '0 4px', flexShrink: 0,
											}}>+</div>
										)}
									</div>
								))}
							</div>
						</motion.div>
					))}
				</motion.div>

				{/* Bottom tagline */}
				<motion.div
					initial={{ opacity: 0, y: 16, scale: 0.95 }}
					animate={{ opacity: 1, y: 0, scale: 1 }}
					transition={{ duration: 0.5, delay: 1.6, type: 'spring', stiffness: 200, damping: 14 }}
					style={{
						marginTop: 16, padding: '14px 24px',
						background: colors.black, color: colors.white,
						display: 'flex', justifyContent: 'space-between', alignItems: 'center',
					}}
				>
					<div style={{ fontSize: 20, fontWeight: 900 }}>
						你从<span style={{ color: colors.yellow }}> 内容生产者</span>，变成<span style={{ color: colors.green }}> 内容架构师</span>。
					</div>
					<div style={{
						fontFamily: fonts.mono, fontSize: 14, color: '#aaa', letterSpacing: 2,
					}}>5 CLAUDE SKILLS · 1 PIPELINE · 4 PLATFORM</div>
				</motion.div>
			</Inner>
		</Slide>
	);
}
