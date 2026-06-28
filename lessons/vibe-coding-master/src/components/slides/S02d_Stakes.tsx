import { Slide, Inner, Title, Tag, colors, fonts, border, shadow } from '../ui';

const steps = [
	{ label: '被替代', sub: '同样的活，别人用 AI 半天干完' },
	{ label: '被挤出去', sub: '岗位需求变了，你的技能不再被要' },
	{ label: '告别 AI / IT 行业', sub: '门槛抬高，连入场券都拿不到' },
];

// 下场：不会 AI coding 的代价
export default function S02d_Stakes() {
	return (
		<Slide bg={colors.darkBg}>
			<Inner style={{ flexDirection: 'column', justifyContent: 'center' }}>
				<div>
					<Tag bg={colors.red}>第 0 章 · 代价</Tag>
					<Title size="56px" white style={{ marginTop: 14 }}>
						不会 AI coding 的<span style={{ color: colors.red }}>下场</span>
					</Title>
				</div>

				<div style={{ display: 'flex', gap: 20, marginTop: 40, alignItems: 'stretch' }}>
					{steps.map((s, i) => (
						<div key={s.label} style={{ display: 'flex', alignItems: 'center', gap: 20, flex: 1 }}>
							<div
								style={{ flex: 1, background: i === 2 ? colors.red : colors.white, border, boxShadow: shadow, padding: '26px 22px', textAlign: 'center' }}>
								<div style={{ fontFamily: fonts.mono, fontSize: 13, color: i === 2 ? '#ffffffcc' : '#999', marginBottom: 8 }}>
									0{i + 1}
								</div>
								<div style={{ fontFamily: fonts.heading, fontSize: 30, fontWeight: 900, color: i === 2 ? colors.white : colors.black, lineHeight: 1.2 }}>
									{s.label}
								</div>
								<div style={{ fontSize: 15, color: i === 2 ? '#ffffffdd' : '#666', marginTop: 10, lineHeight: 1.45 }}>
									{s.sub}
								</div>
							</div>
							{i < steps.length - 1 && (
								<div
									style={{ fontFamily: fonts.heading, fontSize: 40, fontWeight: 900, color: colors.yellow }}>
									→
								</div>
							)}
						</div>
					))}
				</div>

				<div
					style={{ marginTop: 34, alignSelf: 'stretch', background: colors.white, color: colors.black, border, boxShadow: shadow, padding: '18px 22px', display: 'grid', gridTemplateColumns: '260px 1fr', gap: 20, alignItems: 'center' }}>
					<div style={{ background: colors.red, color: colors.white, border, padding: '12px 14px', fontFamily: fonts.heading, fontSize: 24, fontWeight: 900, textAlign: 'center' }}>
						不要等公司<br />发 Claude 权限
					</div>
					<div style={{ fontSize: 20, fontWeight: 900, lineHeight: 1.45 }}>
						等公司正式说“大家可以用 Claude / Codex”时，通常不是学习起点，
						而是<span style={{ background: colors.yellow, padding: '0 8px' }}>筛选开始</span>：
						谁能带着 AI 交付，谁留下；谁还在学怎么开对话，谁先被边缘化。
					</div>
				</div>
			</Inner>
		</Slide>
	);
}
