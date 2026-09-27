import { Slide, colors, fonts, border, shadow } from '../ui';
import { Body, SlideHead, Punchline } from '../DeckTable';

const TESTS = [
	{
		n: '1',
		t: '单色测试',
		d: '把颜色全去掉，只剩纯黑。logo 还能用吗？',
		fail: '不能用 → 之前是靠颜色在遮丑，形状得重做',
		key: true,
	},
	{
		n: '2',
		t: '记不记得住',
		d: '给人看十秒，收走，让他凭印象画个大概。',
		fail: '画不出来 → 没有记忆点，太复杂或太普通了',
		key: true,
	},
	{
		n: '3',
		t: '缩略图测试',
		d: 'logo 缩到 16px、吉祥物缩到 48px，还认得出来吗？',
		fail: '糊成一团 → 形状太复杂，让它简化',
	},
	{
		n: '4',
		t: '眯眼测试',
		d: '把 logo、吉祥物、样式页并排放，眯起眼看，感觉是不是一路的？',
		fail: '有一个跳出来 → 那个没照着单子做，重新生成，别手改',
	},
	{
		n: '5',
		t: '陌生人测试',
		d: '给旁边不知情的同学看三秒，问他：这是个什么活动？给谁办的？',
		fail: '他说不出来 → 问题在你那句定位，不在设计',
	},
	{
		n: '6',
		t: '换一个物料测试',
		d: '用同一张单子再做一样完全不同的东西（比如签到牌）。',
		fail: '出来像另一个活动 → 单子里有一行写得太虚',
	},
];

export default function S15_BrandCheck() {
	return (
		<Slide bg={colors.white}>
			<Body>
				<SlideHead
					tag="§2 · 验收"
					tagBg={colors.green}
					title="六个检查，判断你的品牌到底立没立住"
					sub="不靠“我觉得好看”。靠这六条，谁都能自己判断 —— 黄色那两条是 logo 最容易翻车的地方。"
				/>

				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 13 }}>
					{TESTS.map((x) => (
						<div key={x.n} style={{ background: x.key ? colors.yellow : colors.warmBg, border, boxShadow: shadow, padding: '14px 16px' }}>
							<div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 8 }}>
								<span
									style={{
										fontFamily: fonts.mono,
										fontSize: 13,
										fontWeight: 700,
										background: colors.black,
										color: colors.yellow,
										padding: '2px 9px',
									}}
								>
									{x.n}
								</span>
								<span style={{ fontFamily: fonts.heading, fontSize: 20, fontWeight: 900 }}>{x.t}</span>
							</div>
							<div style={{ fontSize: 15, lineHeight: 1.45, marginBottom: 9 }}>{x.d}</div>
							<div
								style={{
									fontSize: 14,
									lineHeight: 1.4,
									padding: '7px 10px',
									background: colors.white,
									borderLeft: `4px solid ${colors.red}`,
								}}
							>
								<b>不过：</b>
								{x.fail}
							</div>
						</div>
					))}
				</div>

				<Punchline bg={colors.dark}>
					注意第 5 条和第 6 条的区别：<u>第 5 条不过是策划的问题，第 6 条不过才是设计的问题。</u>别拿设计去补策划的洞。
				</Punchline>
			</Body>
		</Slide>
	);
}
