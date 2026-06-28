import { Slide, Inner, Half, Title, Tag, Card, colors, fonts } from '../ui';
import { slideFromLeft, slideFromRight } from '../ui';
import { motion } from 'framer-motion';

// 痛点钩子 —— 为什么你的 AI 像金鱼
export default function S02_Hook() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner split>
				<Half>
					<motion.div {...slideFromLeft}>
						<Tag bg={colors.red}>第 0 章 · 开场</Tag>
						<Title size="60px" style={{ marginTop: 20, lineHeight: 1.12 }}>
							为什么你的 AI<br />用起来像<span style={{ background: colors.yellow, padding: '0 10px' }}>金鱼</span>？
						</Title>
						<p style={{ fontSize: 22, color: '#444', marginTop: 24, lineHeight: 1.6 }}>
							每开一个新对话，它都<b>从零开始</b>：
							不记得你的项目规范、不记得昨天的决定、
							不记得上次踩过的坑 —— 你只能<b>反复地教它同一件事</b>。
						</p>
						<p style={{ fontSize: 20, color: colors.red, fontWeight: 800, marginTop: 22 }}>
							问题不在模型聪不聪明，在于它<b>没有记忆，也没有唯一真相</b>。
						</p>
					</motion.div>
				</Half>
				<Half>
					<motion.div {...slideFromRight} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
						<Card bg={colors.white}>
							<div style={{ fontFamily: fonts.mono, fontSize: 13, color: '#999' }}>没有记忆系统</div>
							<div style={{ fontSize: 21, fontWeight: 800, marginTop: 6 }}>「我们用 ObjectId 不用 slug」</div>
							<div style={{ fontSize: 16, color: '#777', marginTop: 4 }}>→ 教一次 · 下次又写错 · 再教一次 …</div>
						</Card>
						<Card bg={colors.white}>
							<div style={{ fontFamily: fonts.mono, fontSize: 13, color: '#999' }}>没有唯一真相</div>
							<div style={{ fontSize: 21, fontWeight: 800, marginTop: 6 }}>「这个数到底以哪份为准？」</div>
							<div style={{ fontSize: 16, color: '#777', marginTop: 4 }}>→ 三份文档三个答案 · AI 猜一个给你</div>
						</Card>
						<Card bg={colors.dark}>
							<div style={{ fontSize: 19, fontWeight: 800, color: colors.yellow }}>
								大师和新手的差距：<br />不是 prompt 技巧，是有没有给 AI 建好「记忆 + 真相」。
							</div>
						</Card>
					</motion.div>
				</Half>
			</Inner>
		</Slide>
	);
}
