import { Slide, Inner, Title, Tag, Card, Grid, colors, fonts } from '../ui';
import { Stagger, StaggerItem } from '../ui';
import { motion } from 'framer-motion';

// Claude Code 不是补全，是 agent
export default function S19_NotAutocomplete() {
	return (
		<Slide bg={colors.dark}>
			<Inner style={{ flexDirection: 'column' }}>
				<motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
					<Tag bg={colors.yellow} color={colors.black}>第 4 章 · 大师怎么用</Tag>
					<Title white size="52px" style={{ marginTop: 12 }}>
						Claude Code 不是补全，是 <span style={{ color: colors.yellow }}>agent</span>
					</Title>
					<p style={{ fontSize: 20, color: '#cfd3e6', marginTop: 10, maxWidth: 1040, lineHeight: 1.5 }}>
						它不是「在编辑器里猜下一行」。它能<b style={{ color: colors.white }}>读文件、跑命令、调工具、并行派活、自己验证</b> —— 是一个会用工具的同事。
					</p>
				</motion.div>

				<Stagger style={{ marginTop: 30 }}>
					<Grid cols={2} gap={18}>
						<StaggerItem><Card bg="#16203a" style={{ borderColor: colors.red, height: '100%' }}>
							<div style={{ fontSize: 15, fontFamily: fonts.mono, color: colors.red, fontWeight: 800 }}>❌ 把它当补全用</div>
							<div style={{ fontSize: 18, color: colors.white, marginTop: 10, lineHeight: 1.7 }}>
								一行一行催 · 自己当人肉调度<br />
								不给它工具和真相 · 不让它验证<br />
								<span style={{ color: '#9aa0bb' }}>→ 浪费了 90% 的能力</span>
							</div>
						</Card></StaggerItem>
						<StaggerItem><Card bg="#16203a" style={{ borderColor: colors.green, height: '100%' }}>
							<div style={{ fontSize: 15, fontFamily: fonts.mono, color: colors.green, fontWeight: 800 }}>✅ 把它当 agent 用</div>
							<div style={{ fontSize: 18, color: colors.white, marginTop: 10, lineHeight: 1.7 }}>
								给目标 + 上下文 + 验收标准<br />
								让它调 Skill / MCP / 子 agent<br />
								<span style={{ color: colors.green }}>→ 你只做决策和确认</span>
							</div>
						</Card></StaggerItem>
					</Grid>
				</Stagger>

				<motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
					style={{ marginTop: 26, fontSize: 20, color: colors.yellow, fontWeight: 800, textAlign: 'center' }}>
					接下来三大武器，把它从「会聊天」变成「会干活的团队」。
				</motion.p>
			</Inner>
		</Slide>
	);
}
