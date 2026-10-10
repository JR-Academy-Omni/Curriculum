import { Teaching, Three } from '../Teaching';
import { Panel, Label, colors } from '../deck';
export default function P03(){return <Teaching tag="增长原理 03 · 三种回流" title="推荐、内容、利润，怎样接回下一轮？" subtitle="渠道是入口；循环要描述一轮输出如何产生下一轮输入。不同循环可以共存。"><div style={{height:390}}><Three items={[
{title:'客户带来客户',text:'得到价值 → 推荐或协作邀请 → 新人获值 → 继续推荐。',detail:'方法17–20；Dropbox 奖励、Slack 邀请提供机制示例。'},
{title:'成果形成内容',text:'使用 / 交付 → 可公开成果 → 相关人发现 → 新使用 / 交付。',detail:'方法05、07、13、19；需要授权、分发和新增内容。'},
{title:'利润再投入',text:'获客 → 交付与收款 → 贡献利润 → 再投入获客。',detail:'方法26、28、34–36；利润扣除广告、履约和支持成本。'}
]}/></div><p style={{fontSize:22,margin:'18px 0 0'}}>保留旧内容可以继续获客；要称为内容循环，还需解释新增用户怎样继续产生内容。</p><p style={{fontSize:18,margin:"18px 0 0"}}>框架来源：<a href="https://www.hubspot.com/flywheel?product=breeze" target="_blank" rel="noreferrer">HubSpot Flywheel</a> · <a href="https://www.reforge.com/blog/growth-loops" target="_blank" rel="noreferrer">Reforge Growth Loops</a>；中文应用与演算为教学设计。</p></Teaching>;}