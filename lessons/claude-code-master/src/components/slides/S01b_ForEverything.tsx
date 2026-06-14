import { Slide, Inner, Title, Tag, colors, fonts, border, shadow } from '../ui';
import { Stagger, StaggerItem } from '../ui';
import { motion } from 'framer-motion';

const uses = [
	{ icon: '📚', t: '建课程', d: 'curriculum pipeline 自动生成' },
	{ icon: '📣', t: '做 marketing', d: '小红书 / 公众号 / 海报 skill' },
	{ icon: '🧠', t: '管记忆', d: 'CLAUDE.md / 记忆系统 / RAG' },
	{ icon: '🗂️', t: '跑运营', d: 'HR / 派单 / 定时 agent' },
	{ icon: '🎨', t: '出设计', d: 'design token / 这份 PPT 本身' },
	{ icon: '💻', t: '…当然也写代码', d: '只是其中一种' },
];

// 开场 thesis —— AI Coding for Everything
export default function S01b_ForEverything() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner style={{ flexDirection: 'column' }}>
				<motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
					<Tag bg={colors.dark}>这门课的前提</Tag>
					<Title size="62px" style={{ marginTop: 14, lineHeight: 1.06 }}>
						AI Coding for <span style={{ background: colors.red, color: colors.white, padding: '0 12px' }}>Everything</span>
					</Title>
					<p style={{ fontSize: 21, color: '#444', marginTop: 16, maxWidth: 1080, lineHeight: 1.55 }}>
						「Coding」不再只是写程序 —— 而是<b>用结构化的语言(规则 + 流程 + 真相)指挥 AI 干任何事</b>。
						今天教的 SoT、记忆、ADLC,适用于<b style={{ color: colors.red }}>一切</b>,不只是写代码。
					</p>
				</motion.div>

				<Stagger style={{ marginTop: 26 }}>
					<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14 }}>
						{uses.map((u) => (
							<StaggerItem key={u.t}>
								<div style={{ background: colors.white, border, boxShadow: shadow, padding: '14px 18px', display: 'flex', alignItems: 'center', gap: 14 }}>
									<span style={{ fontSize: 30 }}>{u.icon}</span>
									<div>
										<div style={{ fontSize: 19, fontWeight: 900 }}>{u.t}</div>
										<div style={{ fontSize: 14, color: '#777' }}>{u.d}</div>
									</div>
								</div>
							</StaggerItem>
						))}
					</div>
				</Stagger>

				<motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}
					style={{ marginTop: 24, fontSize: 19, color: '#333', fontFamily: fonts.mono }}>
					// 真正的「AI coding」大多不长得像代码 —— 你指挥 AI 干的每件事都算。
				</motion.p>
			</Inner>
		</Slide>
	);
}
