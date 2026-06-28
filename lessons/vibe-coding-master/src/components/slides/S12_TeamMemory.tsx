import { Slide, Inner, Half, Title, Tag, Card, colors, fonts } from '../ui';
import { slideFromLeft, slideFromRight } from '../ui';
import { motion } from 'framer-motion';

// 第三层 jr-academy-memory 团队共享
export default function S12_TeamMemory() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner split>
				<Half>
					<motion.div {...slideFromLeft}>
						<Tag bg={colors.green} color={colors.black}>第 3 层 · 团队共享</Tag>
						<Title size="48px" style={{ marginTop: 14, lineHeight: 1.14 }}>
							从「我的记忆」<br />到<span style={{ background: colors.yellow, padding: '0 8px' }}>团队的集体记忆</span>
						</Title>
						<p style={{ fontSize: 19, color: '#444', marginTop: 16, lineHeight: 1.6 }}>
							auto-memory 是单人 + 单项目的。团队级知识（招聘题库、岗位手册、教学工具）放进
							一个<b>独立 private repo</b> <code style={{ color: colors.red }}>jr-academy-memory</code>，
							clone 成兄弟目录 —— 员工和所有内部 agent <b>共用一份真相</b>。
						</p>
						<p style={{ fontSize: 18, color: '#444', marginTop: 14, lineHeight: 1.6 }}>
							检索有纪律：先读 <code>README</code> 索引 → 再进目标 domain → 按需深入，
							<b>不无脑全读</b>。
						</p>
					</motion.div>
				</Half>
				<Half>
					<motion.div {...slideFromRight} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
						<Card bg={colors.white}>
							<div style={{ fontFamily: fonts.mono, fontSize: 14, color: colors.green, fontWeight: 800 }}>hr/</div>
							<div style={{ fontSize: 17, marginTop: 4 }}>招聘题库 · 岗位手册 · 看板 · 派活</div>
						</Card>
						<Card bg={colors.white}>
							<div style={{ fontFamily: fonts.mono, fontSize: 14, color: colors.green, fontWeight: 800 }}>teaching/</div>
							<div style={{ fontSize: 17, marginTop: 4 }}>教学工具 · talk-deck（这份 PPT 的同款引擎）</div>
						</Card>
						<Card bg={colors.dark}>
							<div style={{ fontSize: 14, color: colors.red, fontWeight: 800, fontFamily: fonts.mono }}>🚨 为什么不走 RAG？</div>
							<div style={{ fontSize: 16, marginTop: 6, color: colors.white, lineHeight: 1.5 }}>
								内部 agent 直接 Read 全文 —— RAG 对外可达、且只返回片面 chunk，团队真相要读完整。
							</div>
						</Card>
					</motion.div>
				</Half>
			</Inner>
		</Slide>
	);
}
