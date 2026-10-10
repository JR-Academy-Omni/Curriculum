import { DeckFrame, Panel, Label, colors } from './deck';
import { realCases } from '../data/real-cases';
export function RealCaseSlide({ index, apply = false }: { index: number; apply?: boolean }) {
 const d=realCases[index];
 return <DeckFrame tag={`真实 CASE ${index+1} · ${apply?'OPC 借鉴':'真实做法 + 机制分析'}`} title={apply?`${d.brand}：OPC 可以怎样借鉴？`:d.title} subtitle={apply?'下面是拟议的小范围实验；不把大公司的结果当你的项目预测。':'真实资料解释启动与做法；箭头是本课机制拆解，逐一检查回流条件。'} titleSize={56}>
 {apply?<>
 <div style={{display:'grid',gridTemplateColumns:'1.25fr 1fr',gap:26}}>
 <Panel style={{padding:26}}><Label bg={colors.yellow} color={colors.dark}>{d.borrow}</Label><div style={{display:'grid',gap:22,marginTop:24}}>{d.steps.map(([title,text],i)=><div key={title}><h2 style={{fontSize:28,lineHeight:1.3,margin:'0 0 9px'}}>{i+1}. {title}</h2><p style={{fontSize:23,lineHeight:1.5,margin:0}}>{text}</p></div>)}</div></Panel>
 <Panel bg={colors.dark} style={{padding:26,color:colors.white}}>{[['适合',d.fit],['容易断在哪',d.break],['看什么',d.metric]].map(([label,text])=><p key={label} style={{fontSize:23,lineHeight:1.5,margin:'0 0 22px'}}><strong style={{color:colors.yellow}}>{label}：</strong>{text}</p>)}<div style={{fontSize:20,lineHeight:1.5,borderTop:'1px solid white',paddingTop:16}}>对应方法：{d.methods}</div></Panel>
 </div><p style={{fontSize:24,fontWeight:700,lineHeight:1.5,margin:'24px 0 0'}}>讨论：{d.ask}</p>
 </>:<>
 <div style={{display:'grid',gridTemplateColumns:'1.4fr 1fr',gap:38}}>
 <div style={{height:410,position:'relative',display:'grid',gridTemplateColumns:'1fr 1fr',gridTemplateRows:'1fr 1fr',gap:'54px 64px'}}>{[0,1,3,2].map((nodeIndex)=>{const node=d.nodes[nodeIndex];return <Panel key={node[0]} bg={nodeIndex===2?colors.yellow:colors.white} style={{padding:24}}><Label bg={colors.yellow} color={colors.dark}>{nodeIndex+1}</Label><h2 style={{fontSize:27,lineHeight:1.25,margin:'18px 0 12px'}}>{node[0]}</h2><p style={{fontSize:23,lineHeight:1.4,margin:0}}>{node[1]}</p></Panel>;})}<div aria-hidden style={{position:'absolute',top:59,left:'48%',fontSize:35}}>→</div><div aria-hidden style={{position:'absolute',right:135,top:187,fontSize:35}}>↓</div><div aria-hidden style={{position:'absolute',bottom:68,left:'48%',fontSize:35}}>←</div><div aria-hidden style={{position:'absolute',left:135,top:187,fontSize:35}}>↑</div></div>
 <Panel bg={colors.dark} style={{padding:24,color:colors.white}}><Label bg={colors.yellow} color={colors.dark}>真实启动与做法</Label><p style={{fontSize:24,lineHeight:1.5,margin:'20px 0',fontWeight:700}}>{d.seed}</p><div style={{display:'grid',gap:18}}>{d.facts.map(f=><p key={f} style={{fontSize:22,lineHeight:1.5,margin:0}}>{f}</p>)}</div></Panel>
 </div><p style={{fontSize:22,lineHeight:1.5,margin:'25px 0 0'}}><strong>为何可能回流 / 边界：</strong>{d.why}</p>
 </>}
 <p style={{fontSize:17,lineHeight:1.4,margin:'14px 0 0'}}>一手资料：{d.sources.map(([title,url],i)=><span key={url}>{i>0?' · ':''}<a href={url} target="_blank" rel="noreferrer" style={{color:colors.dark}}>{title} ↗</a></span>)}{apply?'；OPC步骤与指标是教学建议。':'；无单因素增长因果或循环效率数据时，不补增长倍数。'}</p>
 </DeckFrame>;
}
