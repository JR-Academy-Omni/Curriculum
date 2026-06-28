import { Slide, Inner, Half, Title, Tag, CountUp, colors, fonts, border, shadow } from '../ui';
import { slideFromLeft, slideFromRight } from '../ui';
import { motion } from 'framer-motion';

const examples = [
	{ cmd: '/xhs-draft', d: '按匠人风格写小红书文案' },
	{ cmd: '/wechat-article-quality', d: '9 维度 / 100 分审公众号文章' },
	{ cmd: '/bootcamp-sync', d: '把课程从本地同步到 production' },
	{ cmd: '/target-user-persona-mapper', d: '产出目标用户画像单一真相文档' },
];

// Skills —— 把 SOP 变能力（76 个）
export default function S21_Skills() {
	return (
		<Slide bg={colors.dark}>
			<Inner split>
				<Half>
					<motion.div {...slideFromLeft}>
						<Tag bg={colors.red}>武器 ① · Skills</Tag>
						<Title white size="48px" style={{ marginTop: 14, lineHeight: 1.14 }}>
							把团队 SOP<br />沉淀成 <span style={{ color: colors.yellow }}>可调用的能力</span>
						</Title>
						<p style={{ fontSize: 19, color: '#cfd3e6', marginTop: 16, lineHeight: 1.6 }}>
							一个 skill = 一份「怎么把这件事做对」的专业知识 + 步骤 + 评分标准。
							团队成员一句斜杠命令触发，<b style={{ color: colors.white }}>新人也能产出老手水平</b>。
						</p>
						<div style={{ marginTop: 20, display: 'inline-flex', alignItems: 'baseline', gap: 14, background: colors.yellow, color: colors.black, border, boxShadow: shadow, padding: '14px 24px' }}>
							<span style={{ fontSize: 64, fontWeight: 900, fontFamily: fonts.mono }}><CountUp value={76} suffix="+" /></span>
							<span style={{ fontSize: 18, fontWeight: 800 }}>个 skill<br />已在匠人在跑</span>
						</div>
					</motion.div>
				</Half>
				<Half>
					<motion.div {...slideFromRight} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
						<div style={{ fontFamily: fonts.mono, fontSize: 14, color: '#8890b0', marginBottom: 2 }}>// 真实 skill 举例</div>
						{examples.map((e, i) => (
							<motion.div key={e.cmd}
								initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.35 + i * 0.12 }}
								style={{ background: colors.white, border, boxShadow: shadow, padding: '12px 16px' }}>
								<div style={{ fontFamily: fonts.mono, fontSize: 16, fontWeight: 800, color: colors.red }}>{e.cmd}</div>
								<div style={{ fontSize: 15, color: '#555', marginTop: 2 }}>{e.d}</div>
							</motion.div>
						))}
						<motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}
							style={{ fontSize: 14, color: '#8890b0', fontFamily: fonts.mono, marginTop: 4 }}>
							→ skill 自己也是写进 git 的 SoT，会随团队经验持续迭代
						</motion.p>
					</motion.div>
				</Half>
			</Inner>
		</Slide>
	);
}
