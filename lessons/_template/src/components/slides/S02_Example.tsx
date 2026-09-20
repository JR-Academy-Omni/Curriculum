import { DeckFrame, AnimatedGroup, Label, Panel, colors, fonts } from '../deck';

// 示例内容页 —— 演示 split 布局 + 复用基元 + 错峰入场动画
export default function S02_Example() {
	return (
		<DeckFrame tag="01 · CHAPTER" title="一个清楚的教学命题" subtitle="标题先说清主题，正文解释关系，主视觉只强调真正重要的对象。" accent={colors.blue}>
			<div style={{ display: 'grid', gridTemplateColumns: '1.05fr .95fr', gap: 28, height: '100%' }}>
				<AnimatedGroup delay={.16} style={{ display: 'flex' }}><Panel style={{ flex: 1, borderTop: `12px solid ${colors.blue}` }}>
					<Label bg={colors.blue}>课堂内容</Label>
					<div style={{ fontFamily: fonts.heading, fontSize: 34, lineHeight: 1.18, fontWeight: 900, marginTop: 28 }}>一个主面板承载本页最重要的关系</div>
					<div style={{ fontSize: 23, lineHeight: 1.5, marginTop: 18, color: '#514c48' }}>卡片、标签和颜色用于建立层级，不用来填满画布。</div>
				</Panel></AnimatedGroup>
				<AnimatedGroup delay={.28} style={{ display: 'flex' }}><Panel bg={colors.dark} style={{ flex: 1, color: colors.white }}>
					<Label bg={colors.yellow} color={colors.dark}>EVIDENCE</Label>
					<div style={{ display: 'grid', gap: 20, marginTop: 28 }}>{['具体例子','可验证结果','仍然存在的限制'].map((item,i)=><div key={item} style={{ fontSize: 25, fontWeight: 800, paddingBottom: 15, borderBottom: `4px solid ${[colors.red,colors.blue,colors.green][i]}` }}>{item}</div>)}</div>
				</Panel></AnimatedGroup>
			</div>
		</DeckFrame>
	);
}
