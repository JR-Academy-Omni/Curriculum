import { DeckFrame, AnimatedGroup, Panel, Label, colors } from '../deck';
import { Code, Stat, Takeaway } from '../lesson';

// 样例行原文出自补查结果 batch 文件；检查项出自校验脚本 check_fill.py
const checks = ['每行至少 6 段，代码是 6 位数字', '判定只能是满足 / 部分满足 / 不满足', '出处以 http 开头，是完整网址', '名单里要求查的项，一项不少', '报出「有效行数 / 应有行数」和缺了哪些'];

export default function S11_Format() {
	return (
		<DeckFrame tag="03 · 一个人指挥 65 个 AI" title="格式定死，程序才能检查" subtitle="65 份结果，人看不过来。所以格式一个字都不能自由发挥：这样一段几十行的脚本就能把关。" accent={colors.red}>
			<div style={{ display: 'flex', flexDirection: 'column', gap: 18, height: '100%' }}>
				<AnimatedGroup delay={.15}>
					<Code title="batch 结果 · 真实样例（一行一项：代码|名称|项|判定|证据|出处）">{`000969|安泰科技|②|满足|年报：拥有国家级制造业单项冠军企业3家；钨合金多叶光栅全球放疗设备市场占有率达70%|http://static.cninfo.com.cn/…/1225050394.PDF
000670|盈方微|②|不满足|半年报引国际电子商情：2024、2025年度中国电子元器件分销商营收排名均第15位|http://static.cninfo.com.cn/…/1225495749.PDF`}</Code>
				</AnimatedGroup>
				<div style={{ display: 'grid', gridTemplateColumns: '1.3fr .7fr', gap: 28, flex: 1, minHeight: 0 }}>
					<AnimatedGroup delay={.3} style={{ display: 'flex' }}><Panel style={{ flex: 1 }}>
						<Label bg={colors.purple}>校验脚本检查这 5 件事</Label>
						<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px 22px', marginTop: 16 }}>
							{checks.map((c, i) => <div key={c} style={{ fontSize: 20, fontWeight: 700, lineHeight: 1.35 }}>{i + 1}. {c}</div>)}
						</div>
					</Panel></AnimatedGroup>
					<div style={{ alignSelf: 'center' }}><Stat value={2438} label="行全部通过校验，才导入数据库" color={colors.teal} delay={.5} size={92} /></div>
				</div>
				<div><Takeaway>先定格式，再派活；不合格整组退回</Takeaway></div>
			</div>
		</DeckFrame>
	);
}
