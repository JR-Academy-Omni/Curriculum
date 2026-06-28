import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, fonts, border, shadow } from '../ui';

const questions = [
	{
		q: 'PRD 四要素里，哪一条直接保证「真相源」的权威性 —— 让 AI 不能脑补、不能编造？',
		options: [
			{ key: 'A', label: '目标' },
			{ key: 'B', label: '输入' },
			{ key: 'C', label: '输出' },
			{ key: 'D', label: '红线', correct: true },
		],
		explain: '输入负责「给 AI 事实」，红线负责「规定 AI 必须以事实为唯一准绳」—— 没有红线，AI 拿到事实照样脑补。',
	},
	{
		q: '同样一句「帮我写份简历」拿到一堆套话，换成四要素 PRD 却拿到能直接用的简历 —— 这说明什么？',
		options: [
			{ key: 'A', label: 'Claude 比 ChatGPT 强' },
			{ key: 'B', label: '必须联网才行' },
			{ key: 'C', label: '产出质量取决于你有没有给清晰的真相源，而非 AI 谁强谁弱', correct: true },
			{ key: 'D', label: '简历这种东西只能人工写' },
		],
		explain: '两次都是同一个 AI、同一个模型 —— 唯一的差别只在于你有没有给它一份清晰的 PRD。',
	},
];

// 理解检查 —— 两道 MCQ，验证 PRD 四要素 + 真相源观念
export default function Q01_Check() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner style={{ flexDirection: 'column' }}>
				<motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
					<Tag bg={colors.dark}>理解检查 · 现场抢答</Tag>
					<Title size="46px" style={{ marginTop: 10 }}>
						两道题 —— <span style={{ background: colors.yellow, padding: '0 8px' }}>测测你抓没抓住关键</span>
					</Title>
				</motion.div>

				<div style={{ display: 'flex', gap: 28, marginTop: 24 }}>
					{questions.map((item, qi) => (
						<motion.div key={qi}
							initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + qi * 0.18, type: 'spring', stiffness: 150, damping: 16 }}
							style={{ flex: 1, minWidth: 0, background: colors.white, border, boxShadow: shadow, padding: '22px 22px 20px' }}>
							<div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
								<span style={{ width: 30, height: 30, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: colors.red, color: colors.white, fontFamily: fonts.mono, fontSize: 16, fontWeight: 800 }}>{qi + 1}</span>
								<div style={{ fontSize: 17, fontWeight: 800, lineHeight: 1.35 }}>{item.q}</div>
							</div>

							<div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
								{item.options.map((o) => (
									<div key={o.key}
										style={{
											display: 'flex', alignItems: 'center', gap: 11, padding: '9px 12px',
											border: `2px solid ${o.correct ? colors.green : '#ddd'}`,
											background: o.correct ? '#effae6' : colors.white,
										}}>
										<span style={{
											width: 24, height: 24, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
											fontFamily: fonts.mono, fontSize: 13, fontWeight: 800,
											background: o.correct ? colors.green : '#eee', color: colors.black,
										}}>{o.correct ? '✓' : o.key}</span>
										<span style={{ fontSize: 15, fontWeight: o.correct ? 800 : 500, color: o.correct ? colors.black : '#555', lineHeight: 1.35 }}>{o.label}</span>
									</div>
								))}
							</div>

							<div style={{ marginTop: 14, paddingTop: 12, borderTop: '2px dashed #ddd', fontSize: 14, color: '#555', lineHeight: 1.5 }}>
								<b style={{ color: colors.green }}>解析 · </b>{item.explain}
							</div>
						</motion.div>
					))}
				</div>
			</Inner>
		</Slide>
	);
}
