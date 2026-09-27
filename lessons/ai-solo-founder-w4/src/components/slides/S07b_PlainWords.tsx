import { Slide, colors, fonts } from '../ui';
import { Body, SlideHead, DeckTable, Punchline } from '../DeckTable';

// 术语解码 —— 给不写代码的学员（律师 / 会计 / 医生 / 咨询 / PM）扫清今天的听力障碍
// 放在讲 SoT 之前：术语从下一页开始密集出现
function W({ children }: { children: string }) {
	return (
		<span style={{ fontFamily: fonts.mono, fontWeight: 700, fontSize: 18 }}>{children}</span>
	);
}

export default function S07b_PlainWords() {
	return (
		<Slide bg={colors.white}>
			<Body>
				<SlideHead
					tag="§1 · 先对齐语言"
					tagBg={colors.yellow}
					title="今天这些词，先翻译一遍"
					sub="没有一个是难的。它们唯一的用处，是让你和 AI 指的是同一样东西。"
				/>

				<DeckTable
					fontSize={17}
					cols={[
						{ label: '你会听到', w: '178px' },
						{ label: '说的其实是', w: '1.5fr' },
						{ label: '长什么样', w: '1.25fr' },
					]}
					rows={[
						[
							<W>PRD</W>,
							<span>
								<b>把你要什么写清楚，交给别人照着做。</b>在公司里叫产品需求文档，
								<span style={{ background: colors.yellow, padding: '0 5px' }}>今天我们写的就是这个东西</span>
							</span>,
							<span style={{ color: '#555' }}>「我要一个报名页，要收姓名和邮箱，手机上能打开」</span>,
						],
						[
							<W>SoT</W>,
							<span>
								跟 PRD 是<b>同一件事</b>，只是强调「<b>只有这一份是准的</b>」——所有东西从它生成，改也只改它
							</span>,
							<span style={{ color: '#555' }}>今天的 event-sot.md 就是这场活动的 PRD</span>,
						],
						[
							<W>Design System</W>,
							<span><b>就是你熟的那个「VI」「设计规范」「branding」。</b>一张单子，让每次出的东西都长一个样</span>,
							<span style={{ color: '#555' }}>主色用哪个红、标题用哪款字、口气是松弛还是严肃</span>,
						],
						[
							<W>prompt</W>,
							<span>你对 AI 说的<b>那段话</b>。就这么简单</span>,
							<span style={{ color: '#555' }}>你打字发过去的内容，一个字都不神秘</span>,
						],
						[
							<W>markdown</W>,
							<span>一种<b>纯文字的写法</b>，跟记事本一样。加个 # 就是标题</span>,
							<span style={{ color: '#555' }}>AI 特别认这个格式，所以我们用它写 SoT</span>,
						],
						[
							<W>hex</W>,
							<span>
								<b>颜色的编号</b>。说「暖橙色」AI 会猜，给编号它不会猜
							</span>,
							<span style={{ color: '#555' }}>
								<span style={{ background: '#FB6A4A', color: '#fff', padding: '1px 7px', fontFamily: fonts.mono }}>#FB6A4A</span>{' '}
								就是这个颜色
							</span>,
						],
						[
							<W>SVG</W>,
							<span><b>放大不会糊的图片格式</b>。logo 必须用它</span>,
							<span style={{ color: '#555' }}>印到易拉宝上也清楚；普通截图放大就是马赛克</span>,
						],
						[
							<W>landing page</W>,
							<span><b>一页式的介绍网页</b>，看完就知道要不要报名</span>,
							<span style={{ color: '#555' }}>别人点开你发的链接，看到的那一页</span>,
						],
						[
							<W>部署 / 上线</W>,
							<span><b>把网页放到网上，让别人能打开</b></span>,
							<span style={{ color: '#555' }}>文件拖上去，拿回一个链接，就这样</span>,
						],
					]}
				/>

				<Punchline bg={colors.dark}>
					这一页不用背。<u>后面听到哪个词卡住了，举手让我翻回来。</u>装懂是今天唯一会让你白来的事。
				</Punchline>
			</Body>
		</Slide>
	);
}
