import { Slide, Inner, Title, Tag, colors, fonts, border, shadow } from '../ui';
import { motion } from 'framer-motion';

const parts = [
	{
		k: '目标', en: 'GOAL', color: colors.blue, danger: false,
		d: '要 AI 产出什么、给谁看、干嘛用 —— 一句话说清这次要的成品。',
	},
	{
		k: '输入', en: 'INPUT', color: colors.green, danger: false,
		d: '关于我的真实事实。AI 只能用这里的料，不许脑补、不许加戏。',
	},
	{
		k: '输出', en: 'OUTPUT', color: colors.purple, danger: false,
		d: '成品长什么样 —— 格式 / 长度 / 语气 / 要突出的重点。',
	},
	{
		k: '红线', en: 'RED LINE', color: colors.red, danger: true,
		d: '绝对不准做的事：不准编造没有的经历 / 数字 / 头衔。',
	},
];

// PRD = 你和 AI 的唯一真相源（SoT）· 4 要素
export default function S17b_PRDFour() {
	return (
		<Slide bg={colors.dark}>
			<Inner style={{ flexDirection: 'column' }}>
				<motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
					<Tag bg={colors.yellow} color={colors.black}>动手前的地基</Tag>
					<Title white size="48px" style={{ marginTop: 12 }}>
						PRD = 你和 AI 的<span style={{ color: colors.yellow }}>唯一真相源（SoT）</span> · 4 要素
					</Title>
					<p style={{ fontSize: 19, color: '#cfd3e6', marginTop: 8 }}>
						把这四块写清楚，AI 才有一处权威的料可读 —— 写不清，它就开始替你编。
					</p>
				</motion.div>

				<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginTop: 22 }}>
					{parts.map((x, i) => (
						<motion.div key={x.k}
							initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.15 + i * 0.12, type: 'spring', stiffness: 180, damping: 16 }}
							style={{
								background: x.danger ? x.color : colors.white,
								border: x.danger ? `3px solid ${colors.yellow}` : border,
								boxShadow: shadow, padding: '16px 20px', display: 'flex', alignItems: 'center', gap: 18,
							}}>
							<div style={{ flexShrink: 0, width: 64, height: 64, background: x.danger ? colors.black : x.color, border, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 26, fontWeight: 900, color: colors.white, fontFamily: fonts.heading }}>{x.k}</div>
							<div style={{ flex: 1 }}>
								<div style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
									<span style={{ fontSize: 22, fontWeight: 900, fontFamily: fonts.mono, color: x.danger ? colors.white : colors.black }}>{x.en}</span>
									{x.danger && <span style={{ fontSize: 13, fontWeight: 900, fontFamily: fonts.mono, color: colors.yellow }}>最高优先级</span>}
								</div>
								<div style={{ fontSize: 15, color: x.danger ? '#fff' : '#444', marginTop: 6, lineHeight: 1.45, fontWeight: x.danger ? 700 : 400 }}>{x.d}</div>
							</div>
						</motion.div>
					))}
				</div>

				<motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.85 }}
					style={{ marginTop: 18, background: '#16203a', border: `3px solid ${colors.red}`, padding: '14px 24px', textAlign: 'center' }}>
					<div style={{ fontSize: 20, fontWeight: 900, color: colors.white, lineHeight: 1.4 }}>
						<span style={{ background: colors.red, color: colors.white, padding: '0 10px' }}>红线 = 真相源的权威性</span>
						{' '}—— 它规定 AI 必须以事实为唯一准绳。
					</div>
				</motion.div>
			</Inner>
		</Slide>
	);
}
