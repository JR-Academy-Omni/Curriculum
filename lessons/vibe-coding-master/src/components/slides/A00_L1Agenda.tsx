import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, fonts, border, shadow } from '../ui';

// 第一节课 · 今晚内容总览（避免和整门课混淆）
const ITEMS = [
	{ n: '01', t: '为什么大多数人只会 AI chat，不会 AI coding', s: '300 人真相 + 一个一小时标尺', c: colors.red },
	{ n: '02', t: 'Source of Truth：你和 AI 的唯一真相源', s: 'AI 的能力上限 = 你给它的真相质量', c: colors.blue },
	{ n: '03', t: 'AI OS / 第二大脑：你要搭的东西', s: '记忆层「记得」+ AI OS「做事」', c: colors.purple },
	{ n: '04', t: 'PRD 4 要素：目标 / 输入 / 输出 / 红线', s: '把需求结构化，AI 一次做对', c: colors.teal },
	{ n: '05', t: '现场：一份简历 → 个人 OS → 渲染简历', s: '简历不是终点，是第二大脑长出的产物', c: colors.orange },
	{ n: '06', t: '你动手：写下你第二大脑的第一个文件', s: '走出教室，手里有一份自己的 PRD', c: colors.indigo },
];

export default function A00_L1Agenda() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner style={{ flexDirection: 'column', justifyContent: 'center' }}>
				<div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
					<Tag bg={colors.black} color={colors.yellow}>第一节课 · 今晚</Tag>
					<Title size="52px">90 分钟，我们干这 6 件事</Title>
				</div>

				<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
					{ITEMS.map((it, i) => (
						<motion.div
							key={it.n}
							initial={{ opacity: 0, x: -40 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.45, delay: 0.1 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
							style={{
								display: 'flex', alignItems: 'flex-start', gap: 16,
								background: colors.white, border, boxShadow: shadow, padding: '16px 20px',
							}}>
							<span style={{
								flexShrink: 0, fontFamily: fonts.mono, fontWeight: 700, fontSize: 20,
								background: it.c, color: colors.white, padding: '4px 10px', border,
							}}>{it.n}</span>
							<div>
								<div style={{ fontFamily: fonts.heading, fontWeight: 800, fontSize: 20, lineHeight: 1.25, color: colors.black }}>{it.t}</div>
								<div style={{ fontSize: 14, color: '#666', marginTop: 4, lineHeight: 1.3 }}>{it.s}</div>
							</div>
						</motion.div>
					))}
				</div>

				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5, delay: 0.8 }}
					style={{ marginTop: 22, fontSize: 16, color: '#444', fontWeight: 600 }}>
					今晚只用「你自己」入门 —— 下节课换到真实项目，ADLC 开发流程放第三节。
				</motion.p>
			</Inner>
		</Slide>
	);
}
