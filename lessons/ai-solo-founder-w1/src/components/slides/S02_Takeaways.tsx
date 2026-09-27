import { Slide, colors, fonts } from '../ui';
import { Body, SlideHead, DeckTable, Punchline } from '../DeckTable';

export default function S02_Takeaways() {
	return (
		<Slide bg={colors.warmBg}>
			<Body>
				<SlideHead tag="今天的过关线" tagBg={colors.red} title="三小时后，你要有三样可以继续使用的东西" sub="不是听完三个概念，而是建立后续 15 周共同使用的工作方式。" />
				<DeckTable fontSize={21} cols={[{ label: '#', w: '64px', align: 'center' }, { label: '带走什么', w: '1fr' }, { label: '下课前怎样验收', w: '2fr' }]} rows={[
					[<span style={{ fontFamily: fonts.mono, fontWeight: 900, fontSize: 26 }}>1</span>, <b>一个值得验证的业务方向</b>, '能说清具体客户、问题场景、现有做法和为什么值得继续调查'],
					[<span style={{ fontFamily: fonts.mono, fontWeight: 900, fontSize: 26 }}>2</span>, <b>Business SoT v0.1</b>, '只有一个当前版本；事实、假设、边界和下一步都写在同一页'],
					[<span style={{ fontFamily: fonts.mono, fontWeight: 900, fontSize: 26 }}>3</span>, <b>个人 AI OS</b>, '一个固定工作空间读取 SoT，调用本周 Skill，完成并人工检查一项真实任务'],
				]} />
				<Punchline bg={colors.dark}>以后每周都重复同一个动作：<span style={{ color: colors.yellow }}>从 SoT 取任务，用 Skill 执行，把新证据写回 SoT。</span></Punchline>
			</Body>
		</Slide>
	);
}
