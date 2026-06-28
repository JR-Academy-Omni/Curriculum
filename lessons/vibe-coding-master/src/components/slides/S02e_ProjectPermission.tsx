import { Slide, Inner, Title, Tag, colors, fonts, border, shadow, shadowSm } from '../ui';

const cards = [
	{
		n: '01',
		title: '参与真实项目',
		body: '有真实 repo、真实需求、真实约束，AI 才会暴露上下文、文件结构、测试、部署这些问题。',
		color: colors.blue,
	},
	{
		n: '02',
		title: '承担真实责任',
		body: '你要判断能不能合、会不会破坏现有功能、上线后谁来验证，这些不是 prompt 课能练出来的。',
		color: colors.yellow,
	},
	{
		n: '03',
		title: '经历高权限时刻',
		body: '当你能改配置、跑部署、处理 prod 问题时，才会真正理解权限、审计、回滚和风险边界。',
		color: colors.red,
	},
];

export default function S02e_ProjectPermission() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner style={{ flexDirection: 'column', gap: 22, padding: '34px 40px' }}>
				<div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 24 }}>
					<div>
						<Tag bg={colors.dark}>真正提高的条件</Tag>
						<Title size="50px" style={{ marginTop: 12, marginBottom: 0, lineHeight: 1.08 }}>
							只在玩具 demo 里练，<br />
							学不到真正的 <span style={{ background: colors.yellow, padding: '0 10px' }}>AI Coding</span>
						</Title>
					</div>
					<div style={{ width: 340, background: colors.white, border, boxShadow: shadowSm, padding: '13px 15px', fontSize: 16, fontWeight: 900, lineHeight: 1.45 }}>
						你必须进到项目里<br />
						经历一次“我真的能改坏东西”的时刻
					</div>
				</div>

				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
					{cards.map((x) => {
						const darkText = x.color === colors.yellow;
						return (
							<div key={x.n} style={{ background: colors.white, border, boxShadow: shadow, padding: '20px 18px', minHeight: 245 }}>
								<div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
									<div style={{ width: 48, height: 48, border, background: x.color, color: darkText ? colors.black : colors.white, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: fonts.mono, fontSize: 18, fontWeight: 900 }}>
										{x.n}
									</div>
									<div style={{ fontSize: 26, fontWeight: 900, color: colors.dark, lineHeight: 1.1 }}>{x.title}</div>
								</div>
								<div style={{ marginTop: 20, fontSize: 17, fontWeight: 800, color: '#475467', lineHeight: 1.5 }}>
									{x.body}
								</div>
							</div>
						);
					})}
				</div>

				<div style={{ display: 'grid', gridTemplateColumns: '0.92fr 1.08fr', gap: 16, alignItems: 'stretch' }}>
					<div style={{ background: colors.dark, color: colors.white, border, boxShadow: shadow, padding: '18px 20px' }}>
						<div style={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 900, color: colors.yellow }}>高权限不是乱来</div>
						<div style={{ marginTop: 8, fontSize: 20, fontWeight: 900, lineHeight: 1.42 }}>
							高权限 = 在规则、review、日志、回滚方案都在的情况下，负责真实系统的一小段结果。
						</div>
					</div>
					<div style={{ background: colors.red, color: colors.white, border, boxShadow: shadow, padding: '18px 20px' }}>
						<div style={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 900, color: colors.yellow }}>这门课的训练方式</div>
						<div style={{ marginTop: 8, fontSize: 20, fontWeight: 900, lineHeight: 1.42 }}>
							从个人 OS 开始，逐步走到 repo、worktree、部署、prod-like 流程；你要练的是“能交付、能兜底、能把关”。
						</div>
					</div>
				</div>
			</Inner>
		</Slide>
	);
}
