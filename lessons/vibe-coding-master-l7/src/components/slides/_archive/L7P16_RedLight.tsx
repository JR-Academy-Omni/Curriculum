import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, fonts, border, shadow } from '../ui';
import { PromptBox } from '../PromptBox';

// P16 红灯：能组 Team，不等于该组 Team
// SoT：蓝图 §9.7（5 分钟判断，不启动 Agent）
const OPTIONS = [
	{
		name: '单 Agent', color: colors.green, verdict: '✓ 应该这样',
		steps: ['直接搜一次', '看结果'],
		note: '两步。',
	},
	{
		name: 'Subagent', color: colors.orange, verdict: '能做，但更贵',
		steps: ['写 brief', '冷启动', '它自己再摸一遍项目', '写完成回执', '你读回执'],
		note: '五步换一个你 10 秒能查到的答案。',
	},
	{
		name: 'Agent Team', color: colors.red, verdict: '✕ 纯粹浪费',
		steps: ['写 charter', '定角色和所有权', '建任务和依赖', '三次冷启动', '成员之间没有话可说', 'Lead 汇总一个单值结果'],
		note: '付了通信成本，却没有任何通信需求。',
	},
];

export default function L7P16_RedLight() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner style={{ flexDirection: 'column', justifyContent: 'center', gap: 0 }}>
				<div style={{ display: 'flex', gap: 10, marginBottom: 8 }}>
					<Tag bg={colors.red}>红灯 · 5 分钟</Tag>
					<Tag bg={colors.dark}>不启动 Agent，只做判断</Tag>
				</div>
				<Title size="40px" style={{ marginBottom: 12 }}>
					能组 Team，<span style={{ background: colors.yellow, padding: '0 8px' }}>不等于该组 Team</span>
				</Title>

				<motion.div
					initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4, delay: 0.1 }}
					style={{ marginBottom: 18 }}
				>
					<PromptBox
						label="微任务"
						accent={colors.dark}
						text="定位 MAX_RETRY 这个常量定义在哪个文件。"
					/>
				</motion.div>

				<div style={{ display: 'flex', gap: 18, alignItems: 'stretch' }}>
					{OPTIONS.map((o, i) => (
						<motion.div
							key={o.name}
							initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.4, delay: 0.3 + i * 0.14 }}
							style={{
								flex: 1, border, boxShadow: shadow, background: colors.white,
								display: 'flex', flexDirection: 'column',
							}}
						>
							<div style={{ background: o.color, padding: '9px 15px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
								<span style={{
									fontFamily: fonts.mono, fontSize: 16, fontWeight: 700,
									color: o.color === colors.green ? colors.black : colors.white,
								}}>{o.name}</span>
								<span style={{
									fontSize: 12.5, fontWeight: 800,
									color: o.color === colors.green ? colors.black : colors.white, opacity: 0.9,
								}}>{o.verdict}</span>
							</div>
							<div style={{ padding: '13px 15px', flex: 1 }}>
								{o.steps.map((s, j) => (
									<div key={s} style={{ display: 'flex', gap: 9, alignItems: 'flex-start', marginBottom: 7 }}>
										<span style={{ fontFamily: fonts.mono, fontSize: 11.5, color: '#bbb', flex: '0 0 auto', paddingTop: 2 }}>
											{String(j + 1).padStart(2, '0')}
										</span>
										<span style={{ fontSize: 14.5, color: '#444', lineHeight: 1.4 }}>{s}</span>
									</div>
								))}
							</div>
							<div style={{
								padding: '10px 15px', borderTop: '2px solid #eee',
								fontSize: 13.5, fontWeight: 700, color: o.color === colors.green ? colors.dark : '#777', lineHeight: 1.45,
							}}>
								{o.note}
							</div>
						</motion.div>
					))}
				</div>

				<motion.div
					initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.45, delay: 0.85 }}
					style={{
						marginTop: 20, padding: '15px 24px', background: colors.dark, color: colors.white,
						border, boxShadow: shadow, textAlign: 'center',
					}}
				>
					<div style={{ fontSize: 15, opacity: 0.85, marginBottom: 6 }}>
						过关答案不是「Team 也能做」，而是：<strong style={{ color: colors.white }}>它没有多 context 强收益，更没有成员通信需求。</strong>
					</div>
					<div style={{ fontSize: 21, fontWeight: 800 }}>
						能用复杂结构完成，<span style={{ color: colors.yellow }}>不代表应该使用复杂结构。</span>
					</div>
				</motion.div>
			</Inner>
		</Slide>
	);
}
