import { Slide, Inner, Title, Tag, Card, Grid, colors, fonts } from '../ui';
import { Stagger, StaggerItem } from '../ui';
import { motion } from 'framer-motion';

const items = [
	{ icon: '💻', t: 'Claude Code 已装好', d: '终端能跑 claude 命令，已登录。没装的现在花 3 分钟装', need: true },
	{ icon: '📁', t: '一个你自己的项目', d: '今天所有动手都在你真实的项目里做，不是玩具 demo', need: true },
	{ icon: '🔑', t: '能跑命令的终端', d: 'Mac/Win/Linux 都行；会基本 cd / ls 即可', need: true },
	{ icon: '🧠', t: '一个「老大难」', d: '想一件你最常重复教 AI、或团队反复做的事——待会用得上', need: false },
];

// 环境准备
export default function A02_Setup() {
	return (
		<Slide bg={colors.dark}>
			<Inner style={{ flexDirection: 'column' }}>
				<motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
					<Tag bg={colors.yellow} color={colors.black}>开始前 · 3 分钟</Tag>
					<Title white size="48px" style={{ marginTop: 12 }}>
						先把<span style={{ color: colors.yellow }}>环境</span>备好，待会才跟得上
					</Title>
					<p style={{ fontSize: 19, color: '#cfd3e6', marginTop: 8 }}>这是动手课 —— 没准备好的，趁现在；旁边同学帮一把。</p>
				</motion.div>

				<Stagger style={{ marginTop: 26 }}>
					<Grid cols={2} gap={16}>
						{items.map((x) => (
							<StaggerItem key={x.t}>
								<Card bg={colors.white} style={{ height: '100%', borderColor: x.need ? colors.red : colors.black }}>
									<div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
										<span style={{ fontSize: 30 }}>{x.icon}</span>
										<span style={{ fontSize: 21, fontWeight: 900 }}>{x.t}</span>
										<span style={{ marginLeft: 'auto', fontSize: 12, fontWeight: 800, fontFamily: fonts.mono, color: x.need ? colors.white : colors.black, background: x.need ? colors.red : colors.yellow, padding: '3px 10px' }}>{x.need ? '必备' : '加分'}</span>
									</div>
									<div style={{ fontSize: 16, color: '#555', marginTop: 8, lineHeight: 1.5 }}>{x.d}</div>
								</Card>
							</StaggerItem>
						))}
					</Grid>
				</Stagger>

				<motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
					style={{ marginTop: 22, fontSize: 17, color: '#8890b0', fontFamily: fonts.mono }}>
					// 没装 Claude Code？官网下载 → 登录 → 终端输入 claude 即可开始
				</motion.p>
			</Inner>
		</Slide>
	);
}
