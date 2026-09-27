import { Slide, colors, fonts, border, shadow } from '../ui';
import { Body, SlideHead, Punchline } from '../DeckTable';

const TASKS = [
	['A', '现有替代研究', '找 3 种客户正在用的替代方式，包括“忍着不处理”；保留原始来源，区分事实和推断。', '#FFE9E4'],
	['B', '访谈准备', '围绕最大未知写 5 个不诱导的问题，只问过去行为；再写一封透明的访谈邀请。', '#DCEBFF'],
	['C', '真实邀约草稿', '为一个确实认识或能联系的人起草邀请；本人检查关系、语气和承诺后再决定是否发送。', '#D9F2E4'],
];

export default function S21_FirstRealTask() {
	return (
		<Slide bg={colors.warmBg}>
			<Body>
				<SlideHead tag="现场搭建 · 第三个步骤" tagBg={colors.purple} title="三选一，完成个人 AI OS 的第一次运行" sub="任务必须读取你的 SoT，留下可检查结果，并由你指出至少一处需要修正的地方。" />
				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18 }}>
					{TASKS.map(([no, title, body, bg]) => <div key={no} style={{ border, boxShadow: shadow, background: bg, padding: '22px 20px', minHeight: 270 }}><div style={{ fontFamily: fonts.mono, fontSize: 36, color: colors.red, fontWeight: 900 }}>{no}</div><div style={{ marginTop: 9, fontFamily: fonts.heading, fontSize: 28, fontWeight: 900 }}>{title}</div><div style={{ marginTop: 14, fontSize: 18, lineHeight: 1.5 }}>{body}</div></div>)}
				</div>
				<Punchline bg={colors.dark}>完成标准：<span style={{ color: colors.yellow }}>看见输出 → 找到错误 → 人工修改 → 留下下一条证据。</span></Punchline>
			</Body>
		</Slide>
	);
}
