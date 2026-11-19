import { AnimatedGroup, DeckFrame, Node, Panel, colors } from '../kit';
import { Body, Subheading } from '../career';

export default function S03_Paths() {
	return <DeckFrame tag="先确定自己的选择" title="内部转岗、同岗跳槽，还是转相邻岗位？" titleSize={53}>
		<div style={{ display: 'grid', gridTemplateColumns: '.9fr 1.25fr', gap: 42, alignItems: 'center', marginTop: 46 }}>
			<AnimatedGroup delay={.12}>
				<Panel bg={colors.dark} style={{ color: colors.white, padding: 34 }}>
					<Subheading>先写下两个数字</Subheading>
					<Body>每个月至少要有多少到手收入？</Body>
					<Body>下一份工作的目标底薪是多少？</Body>
				</Panel>
			</AnimatedGroup>
			<div style={{ display: 'grid', gap: 20, borderLeft: '2px dashed #10162f66', paddingLeft: 36 }}>
				<AnimatedGroup delay={.18}><Node title="内部转岗" sub="熟悉团队和业务。先问有哪些项目、对应什么级别、什么时候调薪。" /></AnimatedGroup>
				<AnimatedGroup delay={.25}><Node title="同岗跳槽" sub="沿用已有经验。用同城同级的 JD 核对职责、收入和合同。" /></AnimatedGroup>
				<AnimatedGroup delay={.32}><Node title="转相邻岗位" sub="带着已有能力走一步。先找出目标岗位最难补的那项责任。" bg={colors.yellow} /></AnimatedGroup>
			</div>
		</div>
	</DeckFrame>;
}
