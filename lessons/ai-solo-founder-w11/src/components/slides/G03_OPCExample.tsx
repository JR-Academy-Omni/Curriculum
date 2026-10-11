import { Teaching } from '../Teaching';
import { Panel, Label, colors } from '../deck';
export default function G03_OPCExample(){return <Teaching tag="开场 03 · OPC 教学假设" title="一个人，也能用增长黑客的方法工作" subtitle="模拟项目：商家预约工具。下面是假设和观察计划，未声称发生了实际增长。">
 <div style={{display:'grid',gridTemplateColumns:'1.25fr 1fr',gap:26}}><Panel style={{padding:28}}><Label bg={colors.yellow} color={colors.dark}>本轮只测试一个主要改动</Label><div style={{display:'grid',gap:23,marginTop:24}}>{[
 ['观察','试用者没有完成第一笔预约；先看他们怎么操作、卡在哪。'],['假设','如果空白配置页是障碍，给一个设置模板可能更容易完成任务。'],['行动','限定范围测试模板流程，再检查用户是否处理了真实预约。']
 ].map(([title,text])=><div key={title}><h2 style={{fontSize:28,margin:'0 0 10px'}}>{title}</h2><p style={{fontSize:24,lineHeight:1.5,margin:0}}>{text}</p></div>)}</div></Panel>
 <Panel bg={colors.dark} style={{padding:28,color:colors.white}}><h2 style={{fontSize:29,margin:'0 0 22px',color:colors.yellow}}>预先约定怎么判断</h2><div style={{display:'grid',gap:20,fontSize:24,lineHeight:1.5}}><div>主指标：首次预约任务完成率。</div><div>其他观察：获值耗时、后续复用。</div><div>成本：支持工时、制作和维护。</div><div>同口径记录；小样本先提供线索，继续补证。</div></div></Panel></div>
 <p style={{fontSize:23,fontWeight:700,lineHeight:1.5,margin:'24px 0 0'}}>Growth Hacker 负责提出并验证改动；AARRR定位卡点；增长飞轮解释成果怎样回流。</p>
 </Teaching>;}
