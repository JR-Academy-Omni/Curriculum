import { Slide, colors, fonts, border, shadow } from '../ui';
import { Body, SlideHead } from '../DeckTable';

const checks = [
	['5', '位潜在用户', '听他们讲最近一次真实经历，不推销方案'],
	['3', '个真实案例', '记录发生场景、现有做法和造成的损失'],
	['3', '个现有竞品', '看价格、流程、差评和替代做法'],
	['$', '付费意愿', '问愿不愿意试、为什么愿意或为什么不愿意'],
];

export default function S16c_ValidationCommitment() {
	return (
		<Slide bg={colors.warmBg}>
			<Body>
				<SlideHead
					tag="离开教室前 · 写下承诺"
					tagBg={colors.red}
					title="这周不开发产品，只验证问题是否值得解决"
					sub="下周带回证据。没有证据，就不能把自己的猜测升级成事实。"
				/>

				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
					{checks.map(([value, label, note]) => (
						<div key={label} style={{ border, boxShadow: shadow, background: colors.white, padding: '22px 18px', minHeight: 225 }}>
							<div style={{ fontFamily: fonts.heading, fontSize: 58, fontWeight: 950, color: colors.red, lineHeight: 1 }}>{value}</div>
							<div style={{ marginTop: 8, fontSize: 23, fontWeight: 900 }}>{label}</div>
							<div style={{ marginTop: 14, paddingTop: 12, borderTop: '2px solid #111', fontSize: 16, lineHeight: 1.5 }}>{note}</div>
						</div>
					))}
				</div>

				<div style={{ marginTop: 24, border, background: colors.dark, color: colors.white, padding: '18px 24px', fontSize: 22, fontWeight: 850 }}>
					下周判断只有三种：<span style={{ color: colors.yellow }}>继续验证 / 缩小或修改问题 / 停止这个方向。</span> 没有“为了不浪费已经做的东西，所以继续”。
				</div>
			</Body>
		</Slide>
	);
}
