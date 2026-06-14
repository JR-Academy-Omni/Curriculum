import { Slide, Inner, Half, Title, Tag, colors, fonts, border, shadow } from '../ui';
import { slideFromLeft, slideFromRight } from '../ui';
import { motion } from 'framer-motion';

// 团队视角 —— IT 本质是多人协作，SoT 是团队共享的同一份真相
export default function S04b_TeamWork() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner style={{ flexDirection: 'column' }}>
				<motion.div {...slideFromLeft}>
					<Tag bg={colors.purple}>团队视角 · 多人协作</Tag>
					<Title size="50px" style={{ marginTop: 14, lineHeight: 1.16 }}>
						AI coding 不是单机游戏 —— <span style={{ color: colors.purple }}>IT 本质是团队作战</span>
					</Title>
					<p style={{ fontSize: 19, color: '#555', marginTop: 12, lineHeight: 1.55 }}>
						一个 feature 经手产品、前端、后端、测试……现在每个人手里又多了<b>各自的 AI</b>。
						真相不共享，混乱不是加法，是<b style={{ color: colors.red }}>乘法</b>。
					</p>
				</motion.div>

				<motion.div {...slideFromRight} style={{ marginTop: 22, display: 'flex', gap: 20 }}>
					<Half>
						<div style={{ background: '#fff', border, boxShadow: shadow, padding: '20px 22px', height: '100%' }}>
							<div style={{ fontFamily: fonts.mono, fontSize: 14, color: colors.red, fontWeight: 800, marginBottom: 12 }}>❌ 每人各有一套真相</div>
							<div style={{ fontSize: 30, fontWeight: 900, color: colors.red, marginBottom: 10 }}>N 人 × N 个 AI = N² 套理解</div>
							<ul style={{ listStyle: 'none', fontSize: 16, lineHeight: 1.85, color: '#444' }}>
								<li>→ 命名 / 风格 / ID 各编各的，merge 即地狱</li>
								<li>→ 同一个坑，A 踩完 B 再踩一遍</li>
								<li>→ 新人 + 新 agent 上手都要重新问一圈</li>
							</ul>
						</div>
					</Half>
					<Half>
						<div style={{ background: colors.dark, color: colors.white, border, boxShadow: `6px 6px 0 ${colors.purple}`, padding: '20px 22px', height: '100%' }}>
							<div style={{ fontFamily: fonts.mono, fontSize: 14, color: colors.green, fontWeight: 800, marginBottom: 12 }}>✅ 一份共享 SoT</div>
							<div style={{ fontSize: 30, fontWeight: 900, color: colors.yellow, marginBottom: 10 }}>所有人 + 所有 agent 对齐同一份</div>
							<ul style={{ listStyle: 'none', fontSize: 16, lineHeight: 1.85, color: '#dfe3f0' }}>
								<li><span style={{ color: colors.green }}>→</span> CLAUDE.md = 团队编码契约（连 tab/空格、命名都统一）→ 谁 + 谁的 AI 写都同一种质量</li>
								<li><span style={{ color: colors.green }}>→</span> 共享记忆库 = 踩过的坑全队自动规避</li>
								<li><span style={{ color: colors.green }}>→</span> 新人 / 新 agent 读真相 5 分钟即插即用</li>
							</ul>
						</div>
					</Half>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.5 }}
					style={{ marginTop: 20, alignSelf: 'flex-start', background: colors.purple, color: colors.white, padding: '13px 24px', border, boxShadow: shadow, fontSize: 18, fontWeight: 800 }}>
					Part 2 会给你看一个真实的团队记忆库长什么样（独立 repo，全队 + agent 共读）。
				</motion.div>
			</Inner>
		</Slide>
	);
}
