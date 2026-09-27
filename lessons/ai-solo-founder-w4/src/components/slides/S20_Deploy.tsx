import { Slide, colors, fonts, border, shadow } from '../ui';
import { Body, SlideHead, Punchline, SourceNote } from '../DeckTable';

const STEPS = [
	{ n: '1', t: '拖上去', d: '单个 html 文件直接拖进静态托管，几十秒出一个公网地址' },
	{ n: '2', t: '先用送的域名', d: '第一版不必买域名。能打开、能发给人看，就已经赢了' },
	{ n: '3', t: '手机上打开一次', d: '现场用自己手机扫开看一眼——桌面好看手机崩是最常见的翻车' },
	{ n: '4', t: '发给一个真人', d: '发给旁边的同学，问他：你看完知道这是什么活动吗？' },
];

export default function S20_Deploy() {
	return (
		<Slide bg={colors.warmBg}>
			<Body>
				<SlideHead
					tag="§4 · 上线"
					tagBg={colors.green}
					title="上线这一步，比你想的简单得多"
					sub="很多人卡在这儿好几周。其实是四步，十分钟。"
				/>

				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 20 }}>
					{STEPS.map((s) => (
						<div key={s.n} style={{ background: colors.white, border, boxShadow: shadow, padding: '18px 18px 20px', minHeight: 210 }}>
							<div
								style={{
									fontFamily: fonts.mono,
									fontSize: 14,
									fontWeight: 700,
									background: colors.black,
									color: colors.green,
									padding: '3px 10px',
									display: 'inline-block',
								}}
							>
								{s.n}
							</div>
							<div style={{ fontFamily: fonts.heading, fontSize: 23, fontWeight: 900, margin: '12px 0 10px' }}>{s.t}</div>
							<div style={{ fontSize: 16, lineHeight: 1.5 }}>{s.d}</div>
						</div>
					))}
				</div>

				<div style={{ background: colors.dark, border, padding: '18px 22px', color: colors.white }}>
					<div style={{ fontFamily: fonts.heading, fontSize: 21, fontWeight: 900, color: colors.yellow, marginBottom: 10 }}>
						上线之后才开始的事
					</div>
					<div style={{ fontSize: 16.5, lineHeight: 1.6 }}>
						页面不是终点，是<b>开始收数据的地方</b>。有多少人打开、多少人点了报名——
						这两个数字决定你下一步该改文案还是改渠道。没上线，你连这两个数字都没有。
					</div>
				</div>

				<Punchline bg={colors.red}>
					今天下课前，<u>这个链接要真的能在你手机上打开</u>。打不开的，留下来我们一起弄。
				</Punchline>

				<SourceNote>
					部署工具的具体选型（Vercel / Cloudflare / Railway）、域名绑定和监控，在自学线的「部署到 Vercel / Cloudflare / Railway」和「域名 + 部署 + 监控基础」两节里。现场不展开。
				</SourceNote>
			</Body>
		</Slide>
	);
}
