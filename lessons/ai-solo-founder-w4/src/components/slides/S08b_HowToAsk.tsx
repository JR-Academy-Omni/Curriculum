import { Slide, colors, fonts, border, shadowSm } from '../ui';
import { Body, SlideHead, Punchline } from '../DeckTable';

// 跟 AI 要东西的固定套路 —— 后面六个断点全是这一套，学会它比记住 prompt 有用
const STEPS = [
	{
		n: '1',
		t: '先让它读什么',
		bad: '「帮我设计个 logo」',
		good: '「读我那份说明和品牌规范，再设计 logo」',
		why: '不给背景，它只能瞎猜；给了，它才是在为你这件事干活',
		key: true,
	},
	{
		n: '2',
		t: '要方向，不要成品',
		bad: '「给我一个最好的方案」',
		good: '「给我 6 个不同方向，每个说明在表达什么」',
		why: '穷举是它的活，挑是你的活。一次只要一个，你就失去了选择权',
	},
	{
		n: '3',
		t: '说清要什么形式',
		bad: '「写详细一点」',
		good: '「输出两个文件：一份 md 规范 + 一页能打开的样式页」',
		why: '形式不说死，它就按自己的习惯来，然后你再花时间返工',
	},
	{
		n: '4',
		t: '划红线',
		bad: '（什么都不说）',
		good: '「没定的写待定不要编」「不许写字」「不用赋能一站式」',
		why: '不禁的它默认就会做——编数字、写错字、堆空话',
		key: true,
	},
	{
		n: '5',
		t: '让它交代不确定的地方',
		bad: '（拿了就用）',
		good: '「最后列一个清单：哪些是我必须自己补的」',
		why: '它知道自己编了哪些，但你不问它不说',
	},
];

export default function S08b_HowToAsk() {
	return (
		<Slide bg={colors.warmBg}>
			<Body style={{ padding: '36px 60px 28px' }}>
				<SlideHead
					tag="§1 · 方法"
					tagBg={colors.red}
					title="跟 AI 要东西，每次都是这五步"
					titleSize="clamp(30px, 2.7vw, 44px)"
					sub="接下来六次现场演示，用的全是这一个套路。记住它，比抄我的 prompt 有用得多 —— 你回去要做的是你自己那件事。"
				/>

				<div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
					{STEPS.map((s) => (
						<div
							key={s.n}
							style={{
								display: 'grid',
								gridTemplateColumns: '38px 148px 1fr 1.15fr',
								gap: 12,
								alignItems: 'center',
								background: s.key ? colors.yellow : colors.white,
								border,
								boxShadow: shadowSm,
								padding: '11px 14px',
							}}
						>
							<span
								style={{
									fontFamily: fonts.mono,
									fontSize: 14,
									fontWeight: 700,
									background: colors.black,
									color: colors.white,
									padding: '3px 9px',
									textAlign: 'center',
								}}
							>
								{s.n}
							</span>

							<span style={{ fontFamily: fonts.heading, fontSize: 19, fontWeight: 900, lineHeight: 1.2 }}>{s.t}</span>

							<div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
								<span style={{ fontSize: 14, color: '#a33', lineHeight: 1.3 }}>✗ {s.bad}</span>
								<span style={{ fontSize: 14.5, fontWeight: 700, lineHeight: 1.3 }}>✓ {s.good}</span>
							</div>

							<span style={{ fontSize: 14.5, color: '#444', lineHeight: 1.35 }}>{s.why}</span>
						</div>
					))}
				</div>

				<Punchline bg={colors.dark}>
					黄色那两步（<b style={{ color: colors.yellow }}>先给背景</b> 和 <b style={{ color: colors.yellow }}>划红线</b>）决定八成质量。
					<u>大部分人只写了中间那句「帮我做个 X」，然后抱怨 AI 不好用。</u>
				</Punchline>
			</Body>
		</Slide>
	);
}
