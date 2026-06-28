import { Slide, Inner, Half, Title, Tag, Card, colors, fonts } from '../ui';
import { slideFromLeft, slideFromRight } from '../ui';
import { motion } from 'framer-motion';

// MCP —— 让 Claude 连真实数据
export default function S22_MCP() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner split>
				<Half>
					<motion.div {...slideFromLeft}>
						<Tag bg={colors.blue} color={colors.white}>武器 ② 配套 · MCP</Tag>
						<Title size="48px" style={{ marginTop: 14, lineHeight: 1.14 }}>
							MCP：给 AI 接上<br /><span style={{ background: colors.yellow, padding: '0 8px' }}>真实世界的插头</span>
						</Title>
						<p style={{ fontSize: 19, color: '#444', marginTop: 16, lineHeight: 1.6 }}>
							记忆解决「它知道什么」，MCP 解决「它能摸到什么」。
							通过 MCP，Claude 能连数据库、查课程数据、读第三方库最新文档 ——
							<b>用真数据回答，不靠脑补</b>。
						</p>
						<p style={{ fontSize: 18, color: '#444', marginTop: 14, lineHeight: 1.6 }}>
							这正好闭合第 5 章的铁律：<b style={{ color: colors.red }}>引用数据前先查，别编 ObjectId</b>。
						</p>
					</motion.div>
				</Half>
				<Half>
					<motion.div {...slideFromRight} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
						<Card bg={colors.white}>
							<div style={{ fontSize: 26 }}>🗄️</div>
							<div style={{ fontSize: 19, fontWeight: 800, marginTop: 6 }}>连数据库 / 业务数据</div>
							<div style={{ fontSize: 15, color: '#777', marginTop: 4 }}>查真实课程、用户、订单，而不是猜一个</div>
						</Card>
						<Card bg={colors.white}>
							<div style={{ fontSize: 26 }}>📚</div>
							<div style={{ fontSize: 19, fontWeight: 800, marginTop: 6 }}>查第三方库最新文档</div>
							<div style={{ fontSize: 15, color: '#777', marginTop: 4 }}>API / 参数对不准？读官方最新文档再写</div>
						</Card>
						<Card bg={colors.dark}>
							<div style={{ fontSize: 16, color: colors.yellow, fontWeight: 800, fontFamily: fonts.mono }}>记忆 + MCP = 知道 + 能查</div>
							<div style={{ fontSize: 15, color: colors.white, marginTop: 4 }}>两条腿走路，幻觉空间被压到最小</div>
						</Card>
					</motion.div>
				</Half>
			</Inner>
		</Slide>
	);
}
