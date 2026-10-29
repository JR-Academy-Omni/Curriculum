import { Teaching } from '../Teaching';
import { Panel, Label, colors } from '../deck';
export default function G02_Process(){return <Teaching tag="开场 02 · 增长黑客的工作方式" title="把增长问题变成一轮可验证的实验" subtitle="先明确客户价值与观察指标，再用试验发现有效的增长杠杆。以下五步是课堂整理。">
 <div style={{display:'grid',gridTemplateColumns:'repeat(5,1fr)',gap:16}}>{[
 ['观察','查看客户行为与原话，定位具体卡点。'],['假设','说明改什么、为什么可能影响结果。'],['排序','比较影响、现有证据、成本与工时。'],['试验','一个主要改动；范围、指标、窗口先约定。'],['复盘','保留、调整、停止或补证，再进入下一轮。']
 ].map(([title,text],i)=><Panel key={title} bg={i===4?colors.yellow:colors.white} style={{padding:23,height:280}}><Label bg={colors.dark}>{i+1}</Label><h2 style={{fontSize:31,margin:'22px 0 16px'}}>{title}</h2><p style={{fontSize:25,lineHeight:1.5,margin:0}}>{text}</p></Panel>)}</div>
 <Panel bg={colors.dark} style={{color:colors.white,marginTop:28,padding:'22px 28px'}}><p style={{fontSize:26,lineHeight:1.5,margin:0}}>早期OPC先验证：客户是否需要、是否得到价值、是否愿意付费。<br/>有稳定价值和转化基础后，再寻找可重复、可持续的扩张路径。</p></Panel>
 <p style={{fontSize:18,lineHeight:1.4,margin:'20px 0 0'}}>依据：<a href="https://www.startup-marketing.com/2010/07/" target="_blank" rel="noreferrer">Sean Ellis 的试验与分析过程</a> · <a href="https://www.penguinrandomhouse.com/books/545936/hacking-growth-by-sean-ellis-founder-of-growthhackerscom-and-morgan-brown/" target="_blank" rel="noreferrer">Hacking Growth：跨职能、快速测试与迭代</a>。</p>
 </Teaching>;}
