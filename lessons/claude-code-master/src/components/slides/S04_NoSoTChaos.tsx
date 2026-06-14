import { Slide, Inner, Half, Title, Tag, colors, fonts, border, shadow } from '../ui';
import { slideFromLeft, slideFromRight } from '../ui';
import { motion } from 'framer-motion';

function Row({ left, right }: { left: string; right: string }) {
	return (
		<div style={{ display: 'flex', gap: 12, alignItems: 'stretch', marginBottom: 12 }}>
			<div style={{ flex: 1, background: '#fff', border, padding: '12px 16px', fontSize: 16, color: '#444' }}>{left}</div>
			<div style={{ flex: 1, background: colors.yellow, border, padding: '12px 16px', fontSize: 16, fontWeight: 700 }}>{right}</div>
		</div>
	);
}

// 有无 SoT 对比
export default function S04_NoSoTChaos() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner style={{ flexDirection: 'column' }}>
				<motion.div {...slideFromLeft}>
					<Tag bg={colors.dark}>对比</Tag>
					<Title size="54px" style={{ marginTop: 14 }}>
						同一个任务，<span style={{ color: colors.red }}>没有 SoT</span> vs <span style={{ background: colors.yellow, padding: '0 8px' }}>有 SoT</span>
					</Title>
				</motion.div>

				<motion.div {...slideFromRight} style={{ marginTop: 26 }}>
					<div style={{ display: 'flex', gap: 12, marginBottom: 10 }}>
						<div style={{ flex: 1, fontFamily: fonts.mono, fontSize: 14, color: colors.red, fontWeight: 700 }}>❌ 没有唯一真相</div>
						<div style={{ flex: 1, fontFamily: fonts.mono, fontSize: 14, color: '#0a8a3a', fontWeight: 700 }}>✅ 有唯一真相</div>
					</div>
					<Row left="同一规则抄在 N 个地方，改一处漏改其它 → 必然漂移" right="一处定义、处处引用，改一次全同步" />
					<Row left="每次对话重新解释项目背景" right="CLAUDE.md 一次定规则，永久生效" />
					<Row left="AI 编一个看起来合理的 ID / 数字" right="先查库 / 读状态文件 再说" />
					<Row left="同一个错误每周犯一遍" right="auto-memory 沉淀，下次自动规避" />
					<Row left="新人/新 agent 上手要问一圈" right="读记忆库 5 分钟进入状态" />
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.5 }}
					style={{ marginTop: 26, alignSelf: 'flex-start', background: colors.dark, color: colors.white, padding: '16px 26px', border, boxShadow: shadow, fontSize: 20, fontWeight: 800 }}>
					右边这一整套，就是这门课接下来要教你怎么建的「AI 记忆系统」。
				</motion.div>
			</Inner>
		</Slide>
	);
}
