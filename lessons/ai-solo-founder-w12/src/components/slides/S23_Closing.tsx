import { DeckFrame, Panel, Label, colors } from '../kit';

export default function S23_Closing() {
	return <DeckFrame tag="收口 · 这周的作业" title="让它自己跑满 7 天" subtitle="每天早上只看一次日报，不要去盯着它跑。" bg={colors.dark}>
		<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 22, height: '100%' }}>
			<Panel><Label bg={colors.yellow} color={colors.dark}>每天</Label><div style={{ fontSize: 24, lineHeight: 1.55, marginTop: 16 }}>看一眼日报。遇到 needs-human，把原因记下来。</div></Panel>
			<Panel><Label bg={colors.green} color={colors.dark}>周日</Label><div style={{ fontSize: 24, lineHeight: 1.55, marginTop: 16 }}>按记下来的原因改任务卡：补完成判据、补预答、收紧边界。</div></Panel>
			<Panel><Label bg={colors.red}>下周 W14 Pitch</Label><div style={{ fontSize: 24, lineHeight: 1.55, marginTop: 16 }}>把 7 天的运行记录带上台，作为「这门生意已经在自己运转」的证据。</div></Panel>
		</div>
	</DeckFrame>;
}
