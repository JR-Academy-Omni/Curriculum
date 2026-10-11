import { ChartFrame, ChartDefs, ChartNode, ChartArrow } from '../GrowthChart';
import { colors } from '../deck';
export default function C10_PDDSupply(){return <ChartFrame tag="真实案例 · 拼多多 02" title="供给飞轮：更多需求，推动更好的供给" subtitle="传播把人带来；供给与履约决定人是否愿意留下、再买、再介绍" footnote={<><a href="https://www.sec.gov/Archives/edgar/data/1737806/000104746919000391/a2237673zf-1a.htm" target="_blank" rel="noreferrer">拼多多 2019 F-1/A · 公司对供需循环的披露</a>；此图不是独立因果评估。OPC 借鉴是课堂方案。</>}>
<svg viewBox="0 0 1400 530" style={{width:1400,height:530}} role="img" aria-label="更多买家需求带来订单规模，吸引商家改善供给，更有价值的商品吸引买家，供需互相加强">
<ChartDefs id="pdd-supply"/><ChartArrow id="pdd-supply" d="M 455 140 L 935 140"/><ChartArrow id="pdd-supply" d="M 1105 206 L 1105 331"/><ChartArrow id="pdd-supply" d="M 945 392 L 475 392"/><ChartArrow id="pdd-supply" d="M 295 332 L 295 209"/>
<ChartNode x={135} y={78} w={320} h={128} title="买家需求聚合" detail="更多订单 + 需求反馈" fill={colors.yellow}/><ChartNode x={945} y={78} w={320} h={128} title="商家有生意" detail="订单规模，改善供给动力" fill={colors.blue}/><ChartNode x={945} y={332} w={320} h={128} title="商品更有吸引力" detail="价格 / 品类 / 匹配程度" fill={colors.green}/><ChartNode x={135} y={332} w={320} h={128} title="买家愿意回来" detail="复购与推荐再带来需求" fill={colors.red}/>
<text x="700" y="259" textAnchor="middle" fontSize="35" fontWeight="900" fill={colors.dark}>需求 ⇄ 供给，互相加强</text><text x="700" y="301" textAnchor="middle" fontSize="24" fill={colors.dark}>OPC：聚合相同需求 → 批次交付 → 降低单位工时</text><text x="700" y="499" textAnchor="middle" fontSize="23" fill={colors.dark}>成立条件：交付质量与毛利能支撑下一轮；优惠和补贴都有成本</text>
</svg></ChartFrame>;}
