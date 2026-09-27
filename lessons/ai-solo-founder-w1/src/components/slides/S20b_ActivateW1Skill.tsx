import { Slide, colors, fonts, border, shadow } from '../ui';
import { Body, SlideHead, Punchline } from '../DeckTable';

export default function S20b_ActivateW1Skill() {
	return (
		<Slide bg={colors.white}>
			<Body>
				<SlideHead tag="现场搭建 · 第二步" tagBg={colors.yellow} title="Skill 是可重复的做事方法，不是一句神奇提示词" sub="以后每周增加一个 Skill，但所有 Skill 都必须读取当前 SoT，并把证据交还给你。" />
				<div style={{ display: 'grid', gridTemplateColumns: '0.82fr 1.5fr', gap: 22 }}>
					<div style={{ border, boxShadow: shadow, background: '#FFF6D6', padding: '24px 22px' }}><div style={{ fontFamily: fonts.mono, color: colors.red, fontWeight: 900 }}>本周你会拿到</div><div style={{ marginTop: 18, fontSize: 23, lineHeight: 1.55, fontWeight: 850 }}>一页 SoT 模板<br />一套逐项追问方法<br />三类验证准备任务<br />一份人工检查清单</div></div>
					<div style={{ border, boxShadow: shadow, background: colors.dark, color: colors.white, padding: '24px 26px' }}><div style={{ fontFamily: fonts.mono, color: colors.yellow, fontWeight: 900 }}>启动时这样说</div><div style={{ marginTop: 16, fontSize: 24, lineHeight: 1.6, fontWeight: 850 }}>请根据我的当前 SoT，逐项检查客户、问题、现有做法、方案和验证动作。不要替我编客户证据；不确定的内容标“待验证”，并先问我最关键的三个问题。</div></div>
				</div>
				<Punchline>AI 的第一反应不应该是替你写答案，而是发现它还缺哪些事实。</Punchline>
			</Body>
		</Slide>
	);
}
