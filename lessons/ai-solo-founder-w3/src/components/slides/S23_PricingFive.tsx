import { Slide, colors, fonts } from '../ui';
import { Body, SlideHead, DeckTable, Punchline, SourceNote } from '../DeckTable';

// CH5 · outline L09 step ⑤ —— 5 大定价模型
// 🚨 Freemium 转化率区间取自 outline 原文，标注为课程大纲口径的经验区间，非保证、非外部调研
export default function S23_PricingFive() {
	return (
		<Slide bg={colors.warmBg}>
			<Body>
				<SlideHead
					tag="§6 · 定价五选一"
					tagBg={colors.green}
					title="收钱的方式只有五种"
					sub="定价不是「我值多少」，是「用什么节奏收」。选错了，产品再好也会漏钱。"
				/>

				<DeckTable
					fontSize={17}
					headFontSize={14}
					cellPad="11px 14px"
					cols={[
						{ label: '收钱方式', w: '0.95fr' },
						{ label: '怎么收', w: '1.15fr' },
						{ label: '适合什么情况', w: '1.3fr' },
						{ label: '什么时候会翻车', w: '1.3fr' },
					]}
					rows={[
						[
							<b>一次性买断</b>,
							'交付完，一次付清',
							'一次性的成果：一份方案、一个网站、一次改造',
							<span>你会一直在找新客户，永远没有存量收入</span>,
						],
						[
							<b>订阅</b>,
							'每月 / 每年自动续',
							'客户每周甚至每天都要用的东西',
							<span style={{ background: '#ffe3e0' }}>他一年只用两次 —— 续费必掉，这是最常见的错配</span>,
						],
						[
							<span>
								<b>先免费再收费</b>
								<br />
								<span style={{ fontSize: 13.5, color: '#888' }}>Freemium</span>
							</span>,
							'免费用一部分，想要更多才付钱',
							'能靠量取胜、免费那部分成本很低',
							<span>没有量就没有转化。免费用户的成本还得你自己扛</span>,
						],
						[
							<span>
								<b>按人头收</b>
								<br />
								<span style={{ fontSize: 13.5, color: '#888' }}>B2B per-seat</span>
							</span>,
							'一家公司几个人用，就收几份',
							'卖给公司、团队里多个人一起用',
							<span>公司裁员或换工具，一次掉一大块</span>,
						],
						[
							<b>服务 + 软件混合</b>,
							'先收一笔做起来，再收持续的使用费',
							'客户要结果，但用起来又是长期的',
							<span>两头都要维护，你的时间会被拉扯</span>,
						],
					]}
				/>

				<Punchline bg={colors.red}>
					选之前先回答一句：<u>客户下一次给你钱，是什么时候、因为什么？</u>
					答不上来的，说明你选的是自己喜欢的收法，不是客户的节奏。
				</Punchline>

				<SourceNote>
					来源：<b>outline.json · L09 step ⑤</b>「定价五选一：一次性买断、订阅、Freemium（转化率 1-5%）、B2B per-seat、服务 + 软件混合」。
					<b style={{ fontFamily: fonts.body, marginLeft: 6 }}>
						⚠️ 原文提到的 Freemium 转化率 1–5% 是课程大纲给的经验区间，不是外部调研数据、更不是对任何人的保证，本页故意不把它印成结论。
					</b>
				</SourceNote>
			</Body>
		</Slide>
	);
}
