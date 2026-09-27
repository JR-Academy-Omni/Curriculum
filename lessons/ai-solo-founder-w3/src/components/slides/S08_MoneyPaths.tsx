import { Slide, colors, fonts } from '../ui';
import { Body, SlideHead, DeckTable, Punchline, SourceNote } from '../DeckTable';

// CH2 · outline L09 step ② 前半 —— 一人公司变现路径全景
// 🚨 数据纪律：outline 原文说「逐条给客单价区间」，但 outline 里没有任何具体数字。
//    deck 一个金额都不编 —— 「客单价」一列做成留白，现场按学员自己的市场填。
export default function S08_MoneyPaths() {
	const blank = (
		<span style={{ fontFamily: fonts.mono, fontSize: 15, color: '#bbb', letterSpacing: 1 }}>____________</span>
	);

	return (
		<Slide bg={colors.warmBg}>
			<Body>
				<SlideHead
					tag="§2 · 变现路径全景"
					tagBg={colors.green}
					title="钱能从哪几条路进来"
					sub="七条路，没有高低贵贱，只有代价不同。先看清代价，再选。"
				/>

				<DeckTable
					fontSize={16.5}
					headFontSize={14}
					cellPad="9px 12px"
					cols={[
						{ label: '路径', w: '1fr' },
						{ label: '客户买的是什么', w: '1.15fr' },
						{ label: '交付靠什么', w: '1.05fr' },
						{ label: '天花板卡在哪', w: '1.2fr' },
						{ label: '占你多少时间', w: '0.72fr', align: 'center' },
						{ label: '你的客单价', w: '0.66fr', align: 'center', accent: '#FFF7D6' },
					]}
					rows={[
						['订阅制软件', '一个持续在用的工具', '产品本身，你不在也能交付', '获客速度 + 流失率', '前期极高、后期低', blank],
						['做成标准品的服务', '一个交付好的结果', '你和你的流程（AI 放大产能）', '你的小时数', '一直很高', blank],
						['信息产品 / 课程', '一次性把方法学会', '一次做好，反复卖', '你的名气和流量', '前期高、后期中', blank],
						['社群会员', '持续待在一群人里面', '运营、活动、氛围', '你能不能一直在场', '一直中高', blank],
						['佣金与联盟', '你推荐的东西', '别人的产品 + 你的信任度', '别人给你的分成规则', '中', blank],
						['企业定制', '给他一家专门做的东西', '深度参与 + 长周期', '一年能接几单', '极高', blank],
						['授权与模板', '一份可以拿去用的东西', '做一次，卖很多次', '有多少人有这个需求', '低', blank],
					]}
				/>

				<Punchline bg={colors.dark}>
					挑路径的时候，最容易被忽略的一列是<b style={{ color: colors.yellow }}>「占你多少时间」</b>
					——它决定了这门生意<u>能不能在你不上班的那天照样收钱</u>。
				</Punchline>

				<SourceNote>
					路径清单来源：<b>outline.json · L09 step ②</b>原文七条「订阅制软件、生产化服务、信息产品 / 课程、社群会员、佣金与联盟、企业定制、授权与模板」。
					<b>「你的客单价」一列刻意留空</b> —— 课程大纲要求逐条给区间，但没有可引用的数字来源，deck 不编造，由学员按自己所在市场现场填、讲师现场点评。
				</SourceNote>
			</Body>
		</Slide>
	);
}
