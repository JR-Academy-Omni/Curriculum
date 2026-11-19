import { DeckFrame, Panel, Steps, colors } from '../kit';
import { Body, Subheading, columns } from '../career';

export default function S15_Next() {
	return <DeckFrame tag="带走一份自己的职业计划" title="先写下一份能投的工作" subtitle="打开收藏的一份真实 JD，写出最贴近的一段经历。">
		<div style={{ ...columns, gridTemplateColumns: '1.18fr .82fr', marginTop: 20 }}>
			<Panel>
				<Subheading>今天定下这三件事</Subheading>
				<Steps items={[
					<>我现在能投的岗位是 <b>＿＿＿</b>，收入底线是 <b>＿＿＿</b>。</>,
					<>我想争取的岗位是 <b>＿＿＿</b>，它要求我多负责 <b>＿＿＿</b>。</>,
					<>我已经有的证据是 <b>＿＿＿</b>，还要补的结果是 <b>＿＿＿</b>。</>,
				]} size={24} />
			</Panel>
			<Panel bg={colors.dark} style={{ color: colors.white }}>
				<Subheading>趁还在职，把证据补实</Subheading>
				<Body><b>第 1 周</b>　对照两份 JD，圈出职责差距。</Body>
				<Body><b>第 2–3 周</b>　补一段项目证据，留下可核查的结果。</Body>
				<Body><b>第 4 周</b>　拿它聊内转或试投，听一次真实反馈。</Body>
			</Panel>
		</div>
	</DeckFrame>;
}
