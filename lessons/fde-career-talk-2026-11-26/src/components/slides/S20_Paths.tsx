import { DeckFrame, Panel, Label, AnimatedGroup, colors, fonts } from '../kit';
import { assetPath } from '../ui';

const paths = [
	{ k: 'B', name: 'FDE Business 职业进阶班', fit: '做过业务分析、产品或咨询，想补 AI 技术理解和动手实践', meta: '8 周 · 30 项企业自动化任务', price: '正价 A$3,850 · 早鸟 A$3,650 · 首期预购 A$3,500', url: '/program-course/fde-business', bg: colors.yellow },
	{ k: 'A', name: 'FDE Tech 职业进阶班', fit: '已经能独立开发和调试 AI 应用，想补企业需求、方案和客户交付', meta: '10 周 · 30 项工程交付任务', price: '正价 A$4,800 · 早鸟 A$4,600 · 首期预购 A$4,400', url: '/program-course/fde-tech', bg: colors.white },
	{ k: '+', name: 'FDE 一对一实战陪跑', fit: '想围绕自己的经历和卡点，安排更个人化的练习和反馈', meta: '三个月方向', price: '指导安排与价格沟通后确认', url: '/program-course/fde-mentorship', bg: colors.white },
];

export default function S20_Paths() {
	return <DeckFrame tag="05 · 怎么补" title="按你的起点，选一条路" subtitle="还不能独立开发 AI 应用、又想走 Tech 方向的，先从 AI Engineer Bootcamp 补工程基础。" accent={colors.red}>
		<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 240px', gap: 18 }}>
			{paths.map((p, i) => <AnimatedGroup key={p.name} delay={.15 + i * .12} style={{ display: 'flex' }}>
				<Panel bg={p.bg} style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 16, padding: '20px 20px', minHeight: 440 }}>
					<div style={{ display: 'flex', alignItems: 'center', gap: 12 }}><span style={{ fontSize: 44, fontWeight: 900, color: colors.red, lineHeight: 1 }}>{p.k}</span><span style={{ fontSize: 24, fontWeight: 900, lineHeight: 1.25 }}>{p.name}</span></div>
					<div style={{ fontSize: 20, lineHeight: 1.55 }}>{p.fit}</div>
					<div><Label>{p.meta}</Label></div>
					<div style={{ fontSize: 18, lineHeight: 1.5, fontWeight: 800 }}>{p.price}</div>
					<div style={{ marginTop: 'auto', fontFamily: fonts.mono, fontSize: 13 }}>{p.url}</div>
				</Panel>
			</AnimatedGroup>)}
			<AnimatedGroup delay={.55} style={{ display: 'flex' }}>
				<Panel bg={colors.dark} style={{ flex: 1, color: colors.white, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12, padding: '20px 18px', textAlign: 'center' }}>
					<Label bg={colors.yellow} color={colors.dark}>咨询 · 报名</Label>
					<img src={assetPath('images/qr-amelia.jpg')} alt="微信二维码：Amelia 小花" className="shot" style={{ width: 196, height: 196, borderRadius: 12, background: colors.white, padding: 6, boxSizing: 'content-box' }} />
					<div style={{ fontSize: 22, fontWeight: 900 }}>Amelia 小花</div>
					<div style={{ fontSize: 15, lineHeight: 1.5, color: '#d8d8dd' }}>微信扫码，问课程、班期和价格</div>
				</Panel>
			</AnimatedGroup>
		</div>
	</DeckFrame>;
}
