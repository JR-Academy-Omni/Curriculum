import { Slide, Inner, Title, Tag, Card, Grid, colors, fonts } from '../ui';
import { Stagger, StaggerItem } from '../ui';
import { motion } from 'framer-motion';

const tips = [
	{ icon: '✂️', t: '短而狠', d: '每条规则烧的是每次对话的 token。全局文件越短越好，长内容拆到子目录 / docs。', good: '一行铁律 + 链接到长文档' },
	{ icon: '🏗️', t: '分层放', d: '通用规则进全局，项目规则进 repo，目录规则进子目录。别把所有东西堆一处。', good: '靠近 cwd = 越具体' },
	{ icon: '🚦', t: '铁律前置', d: '把「绝对不能做」的红线放最前面、加 🚨 视觉锚点，AI 一眼抓到优先级。', good: '禁止瞎编 / 禁止破坏性 git' },
	{ icon: '📋', t: '给表不给段', d: '能用表格 / 清单就别写散文。结构化内容 AI 解析更稳、更难漏。', good: '部署链路矩阵表' },
	{ icon: '🔁', t: '踩坑即更新', d: 'AI 又犯同一个错 → 不是再骂一遍，是把这条写进 CLAUDE.md，治本。', good: 'code-review 自检清单' },
	{ icon: '🔗', t: '可验证', d: '规则要能被 grep / Read 验证；引用文件路径要真实存在，别写虚的。', good: '路径 + 行号可点击' },
];

// 如何优化 CLAUDE.md
export default function S10_OptimizeClaudeMd() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner style={{ flexDirection: 'column' }}>
				<motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
					<Tag bg={colors.dark}>实操</Tag>
					<Title size="50px" style={{ marginTop: 12 }}>
						怎么写一份<span style={{ background: colors.yellow, padding: '0 8px' }}>不烂</span>的 CLAUDE.md
					</Title>
					<p style={{ fontSize: 19, color: '#555', marginTop: 8 }}>规则写得好不好，直接决定 AI 听不听话。六条心法：</p>
				</motion.div>

				<Stagger style={{ marginTop: 22 }}>
					<Grid cols={3} gap={16}>
						{tips.map((x) => (
							<StaggerItem key={x.t}>
								<Card bg={colors.white} style={{ height: '100%' }}>
									<div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
										<span style={{ fontSize: 26 }}>{x.icon}</span>
										<span style={{ fontSize: 21, fontWeight: 900 }}>{x.t}</span>
									</div>
									<div style={{ fontSize: 15, color: '#555', marginTop: 8, lineHeight: 1.5 }}>{x.d}</div>
									<div style={{ marginTop: 10, fontSize: 13, fontFamily: fonts.mono, color: '#0a8a3a', borderTop: '1px dashed #ccc', paddingTop: 8 }}>✓ {x.good}</div>
								</Card>
							</StaggerItem>
						))}
					</Grid>
				</Stagger>

				<motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}
					style={{ marginTop: 20, fontSize: 18, color: colors.red, fontWeight: 800 }}>
					一句话自检：「这条规则删掉，AI 会不会犯错？」不会 → 删；会 → 留并写清楚。
				</motion.p>
			</Inner>
		</Slide>
	);
}
