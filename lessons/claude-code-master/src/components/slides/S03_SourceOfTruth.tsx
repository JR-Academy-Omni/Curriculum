import { Slide, Inner, Title, Tag, Card, Grid, colors, fonts } from '../ui';
import { Stagger, StaggerItem } from '../ui';
import { motion } from 'framer-motion';

// Source of Truth 定义
export default function S03_SourceOfTruth() {
	return (
		<Slide bg={colors.dark}>
			<Inner center>
				<motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
					<Tag bg={colors.yellow} color={colors.black}>核心概念 #1</Tag>
				</motion.div>
				<Title white size="72px" style={{ marginTop: 18, textAlign: 'center' }}>
					Source of Truth<span style={{ color: colors.yellow }}>（唯一真相源）</span>
				</Title>
				<p style={{ fontSize: 24, color: '#cfd3e6', marginTop: 16, textAlign: 'center', maxWidth: 980, lineHeight: 1.5 }}>
					一件事 <b style={{ color: colors.white }}>只有一个权威出处</b>。
					所有人和所有 AI 要用这个信息，<b style={{ color: colors.yellow }}>都回到同一处读、同一处改</b> —— 不再各存一份。
				</p>

				<Stagger style={{ marginTop: 40, width: '100%' }}>
					<Grid cols={3} gap={20}>
						<StaggerItem>
							<Card bg={colors.white} style={{ height: '100%' }}>
								<div style={{ fontFamily: fonts.mono, fontSize: 13, color: colors.red }}>规则 / 规范</div>
								<div style={{ fontSize: 20, fontWeight: 800, marginTop: 6 }}>怎么干这件事</div>
								<div style={{ fontSize: 15, color: '#777', marginTop: 6 }}>编码规范、品牌色、命名 → 写一处，AI 每次照做</div>
							</Card>
						</StaggerItem>
						<StaggerItem>
							<Card bg={colors.white} style={{ height: '100%' }}>
								<div style={{ fontFamily: fonts.mono, fontSize: 13, color: colors.red }}>数据 / 事实</div>
								<div style={{ fontSize: 20, fontWeight: 800, marginTop: 6 }}>真实的数字是多少</div>
								<div style={{ fontSize: 15, color: '#777', marginTop: 6 }}>课程 ID、用户、价格 → 查库 / 读状态文件，不靠脑补</div>
							</Card>
						</StaggerItem>
						<StaggerItem>
							<Card bg={colors.white} style={{ height: '100%' }}>
								<div style={{ fontFamily: fonts.mono, fontSize: 13, color: colors.red }}>决策 / 历史</div>
								<div style={{ fontSize: 20, fontWeight: 800, marginTop: 6 }}>为什么这么定</div>
								<div style={{ fontSize: 15, color: '#777', marginTop: 6 }}>PRD、记忆库 → 决定和原因留痕，不重复争论</div>
							</Card>
						</StaggerItem>
					</Grid>
				</Stagger>

				<motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}
					style={{ marginTop: 30, background: '#16203a', border: `3px solid ${colors.yellow}`, padding: '14px 28px', textAlign: 'center' }}>
					<div style={{ fontSize: 23, fontWeight: 900, color: colors.white, lineHeight: 1.35 }}>
						AI coding 的本质 = 不断<span style={{ background: colors.yellow, color: colors.black, padding: '0 8px' }}>寻找 + 确认 source of truth</span>的过程
					</div>
					<div style={{ fontSize: 16, color: '#cfd3e6', marginTop: 8 }}>
						AI 的能力上限，由你给它的「真相质量」决定。
					</div>
				</motion.div>
			</Inner>
		</Slide>
	);
}
