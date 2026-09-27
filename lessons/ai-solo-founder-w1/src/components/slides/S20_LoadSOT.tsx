import { Slide, colors, fonts, border, shadow } from '../ui';
import { Body, SlideHead, Punchline } from '../DeckTable';

const STEPS = [
	['1', '建一个固定工作空间', '用你已经能登录并能保存上下文的 AI 工具；名字写“Founder Workspace”。'],
	['2', '只放入 SoT v0.1', '第一周不上传邮箱、客户资料、合同、财务或账号权限。'],
	['3', '先让 AI 复述', '让它说清客户、问题、现有做法、边界和最大未知，不要马上出方案。'],
	['4', '纠正后保存', '把理解错的地方改正，再开始调用 Skill 和执行任务。'],
];

export default function S20_LoadSOT() {
	return (
		<Slide bg={colors.warmBg}>
			<Body>
				<SlideHead tag="现场搭建 · 第一步" tagBg={colors.orange} title="先让 AI 读懂当前 SoT，再让它工作" sub="只给足够完成任务的上下文，不把整个数字生活倒进去。" />
				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 14 }}>
					{STEPS.map(([no, title, body], index) => <div key={no} style={{ border, boxShadow: shadow, background: [colors.white, '#FFF6D6', '#DCEBFF', '#D9F2E4'][index], padding: '18px 20px', display: 'grid', gridTemplateColumns: '52px 1fr', gap: 14, alignItems: 'start' }}><div style={{ fontFamily: fonts.mono, fontSize: 30, color: colors.red, fontWeight: 900 }}>{no}</div><div><div style={{ fontFamily: fonts.heading, fontSize: 24, fontWeight: 900 }}>{title}</div><div style={{ marginTop: 7, fontSize: 17, lineHeight: 1.45 }}>{body}</div></div></div>)}
				</div>
				<Punchline bg={colors.dark}>验收：AI 能准确复述，并明确指出“我仍然不知道什么”。</Punchline>
			</Body>
		</Slide>
	);
}
