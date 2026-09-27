import { Slide, colors, fonts } from '../ui';
import { Body, SlideHead, DeckTable, Punchline } from '../DeckTable';

const f = (n: string, name: string) => <span><b style={{ fontFamily: fonts.mono, color: colors.green }}>{n}</b> · <b>{name}</b></span>;

export default function S12b_CaseRenovationService() {
	return (
		<Slide bg={colors.white}>
			<Body style={{ padding: '32px 52px 26px' }}>
				<SlideHead tag="Opportunity Card · 案例 B" tagBg={colors.green} title="装修老板卖的是更快报价和更少漏单，不是 AI 软件" sub="教学用合成场景。AI 只在内部整理电话记录、报价草稿和跟进清单。" />
				<DeckTable fontSize={17} headFontSize={15} cellPad="9px 14px" cols={[{ label: '机会卡字段', w: '1.12fr' }, { label: '课堂案例 B · 装修报价与客户跟进服务', w: '2.88fr', accent: '#D9F2E4' }]} rows={[
					[f('1', '目标用户'), '在澳洲经营 1–5 人装修公司、同时处理多个询价和工地的老板。'],
					[f('2', '问题'), '当多个客户同时来电和改需求时，老板很难及时整理范围、报价和下一步，导致漏跟进或重复沟通（待验证）。'],
					[f('3', '现在怎么解决'), '手机备忘录、微信、纸张、Excel，或晚上回家后再凭记忆补报价。'],
					[f('4', '为什么不好'), '信息分散、依赖记忆、回复慢；到底漏掉多少询价和时间，目前没有证据。'],
					[f('5', '初步方案'), '提供“电话记录 → 报价草稿 → 跟进清单”的整理服务，老板确认价格和承诺后再发送。'],
					[f('6', '本周验证'), '访谈 5 位老板、收集 3 次最近报价经历、比较 3 种现有做法，并测试是否愿意提供样本或付试用费。'],
				]} />
				<Punchline bg={colors.dark}>客户购买的是<u>响应更快、报价更稳、少漏客户</u>；AI 是你降低交付成本的方法。</Punchline>
			</Body>
		</Slide>
	);
}
