import { Slide, Inner, Title, Tag, Card, Grid, colors, fonts } from '../ui';
import { Stagger, StaggerItem } from '../ui';
import { motion } from 'framer-motion';

const checks = [
	'引用代码里的函数 / 字段 / 路由 → 先 grep / Read 确认存在',
	'引用 production 数据（ID / 用户 / 订单）→ 先查库或读状态文件',
	'引用第三方库 API → 用 MCP 查最新文档',
	'报告「已完成 / 已测试」→ 必须真跑过、看过输出',
];

// 不准幻觉铁律
export default function S26_NoHallucination() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner style={{ flexDirection: 'column' }}>
				<motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
					<Tag bg={colors.red}>压舱石铁律</Tag>
					<Title size="54px" style={{ marginTop: 12 }}>
						不知道就说不知道，<span style={{ background: colors.yellow, padding: '0 8px' }}>先验证再说</span>
					</Title>
					<p style={{ fontSize: 20, color: '#555', marginTop: 10, maxWidth: 1060, lineHeight: 1.5 }}>
						再好的记忆系统，也敌不过一句自信的胡编。所以放进规则里的第一条往往是 <b style={{ color: colors.red }}>禁止瞎编 / 禁止幻觉</b>。
					</p>
				</motion.div>

				<Stagger style={{ marginTop: 24 }}>
					<Grid cols={2} gap={16}>
						{checks.map((c) => (
							<StaggerItem key={c}>
								<Card bg={colors.white} style={{ height: '100%' }}>
									<div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
										<span style={{ color: colors.green, fontSize: 22, fontWeight: 900 }}>✓</span>
										<span style={{ fontSize: 17, lineHeight: 1.5 }}>{c}</span>
									</div>
								</Card>
							</StaggerItem>
						))}
					</Grid>
				</Stagger>

				<motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}
					style={{ marginTop: 24, background: colors.dark, color: colors.white, padding: '16px 26px', fontSize: 20, fontWeight: 800, alignSelf: 'flex-start', border: `3px solid ${colors.black}`, boxShadow: `6px 6px 0 ${colors.red}` }}>
					黄金法则：回答里出现「应该是 / 大概 / 可能是」—— 停下，去验证。
				</motion.div>
			</Inner>
		</Slide>
	);
}
