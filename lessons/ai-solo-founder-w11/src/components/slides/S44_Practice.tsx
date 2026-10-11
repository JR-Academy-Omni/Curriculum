import { DirectionalArrow } from '../MotionArrow';
import { useState } from 'react';
import { Slide, Inner, assetPath } from '../ui';
import { Label, colors, fonts } from '../deck';
const steps = [
  {cn:'找到合适的羊毛',en:'Discover Value',hint:'找到与自己有关的机会'},
  {cn:'收藏＋开雷达',en:'Activate',hint:'以后有类似的再来看'},
  {cn:'邀请相关朋友',en:'Refer',hint:'邀请码识别推荐人'},
  {cn:'朋友注册',en:'Friend Signs Up',hint:'另行追踪首次获值'},
  {cn:'奖励更多雷达',en:'Reward & Return',hint:'更有用 → 再次邀请'},
];
export default function S44_Practice(){
  const [stage,setStage]=useState(0);
  const states=['只点击分享：还没新用户','朋友注册：现行规则 +2 雷达','朋友获值：补上增长证据'];
  return <Slide bg={colors.warmBg}><Inner style={{width:1400,height:830,padding:'52px 0 0',flexDirection:'column',gap:19,color:colors.dark,fontFamily:fonts.body}}>
    <div><Label bg={colors.yellow} color={colors.dark}>LIVE DEMO · 5分钟示范＋7分钟练习＋3分钟互评</Label></div>
    <div><h1 style={{fontSize:57,fontFamily:fonts.heading,lineHeight:1.12,margin:0}}>现场做：薅羊毛 App 的邀请回流</h1><p style={{fontSize:22,margin:'9px 0 0'}}>Build a Referral Loop · 先给产品价值，再让奖励放大价值</p></div>
    <div style={{display:'flex',gap:14,alignItems:'center',height:190}}>{steps.map((s,i)=><div key={s.en} style={{display:'flex',alignItems:'center',gap:14,flex:1}}><div style={{flex:1,height:175,padding:'22px 15px',border:`2px solid ${colors.dark}`,borderRadius:22,background:i===0?colors.yellow:i===4?colors.green:colors.white,textAlign:'center'}}><div style={{fontSize:25,fontWeight:850,whiteSpace:'nowrap'}}>{s.cn}</div><div style={{fontSize:18,fontWeight:650,marginTop:9}}>{s.en}</div><div style={{fontSize:19,lineHeight:1.4,marginTop:23}}>{s.hint}</div></div>{i<4&&<DirectionalArrow width={29} height={29} delay={i*.12}/>}</div>)}</div>
    <div style={{fontSize:24,fontWeight:800,textAlign:'center'}}><DirectionalArrow direction="loop" width={29} height={29} delay={.65}/> 更多相关机会 → 再打开 App → 再产生分享理由 <span style={{fontSize:18,fontWeight:600}}>Retention Loop</span></div>
    <div style={{display:'grid',gridTemplateColumns:'430px 1fr',gap:24,height:245}}>
      <div data-practice-panel style={{background:colors.dark,color:colors.white,borderRadius:25,padding:'23px 30px'}}><div style={{fontSize:23,fontWeight:800}}>真实产品规则 · Current Rules</div><div style={{fontFamily:fonts.heading,fontSize:56,fontWeight:900,lineHeight:1.1,margin:'12px 0',color:colors.yellow}}>5 → 7 个雷达</div><div style={{fontSize:23}}>登录送 5 个；成功邀请注册 +2</div><div style={{fontSize:18,marginTop:15}}>任务还可加额度；分享点击不是成功邀请</div></div>
      <div data-practice-panel style={{background:colors.white,border:`2px solid ${colors.dark}`,borderRadius:25,padding:'18px 24px'}}><div style={{display:'flex',gap:13}}>{['点击分享','朋友注册','首次获值'].map((s,i)=><button key={s} aria-pressed={stage===i} className="ticket-probability-option" onClick={()=>setStage(i)} style={{border:`1px solid ${colors.dark}`,borderRadius:999,padding:'9px 21px',fontFamily:fonts.body,fontSize:21,lineHeight:1.1,fontWeight:800,background:stage===i?colors.yellow:colors.white}}>{s}<span style={{display:'block',fontSize:15,lineHeight:1.1,marginTop:3}}>{['Share','Register','Activate'][i]}</span></button>)}</div><div role="status" data-demo-stage style={{fontSize:25,fontWeight:850,lineHeight:1.2,marginTop:16}}>{states[stage]}</div><p style={{fontSize:19,lineHeight:1.35,margin:'10px 0'}}>现场补：邀请来源 → 注册核验 → 发奖回读；另看首次获值<br/>Track → Verify → Reward / Observe Activation</p><div style={{fontSize:15,lineHeight:1.2}}>点击是本页教学演示；获值追踪是待补设计。</div></div>
    </div>
    <div data-practice-footer style={{display:'flex',justifyContent:'space-between',fontSize:21,fontWeight:750}}><span>学员练习：换成自己的价值、奖励与一个事件。</span><a href={assetPath('worksheet.html')} target="_blank" rel="noreferrer" style={{color:colors.dark}}>增长工作单 / Worksheet ↗</a></div>
    <div style={{fontSize:16,lineHeight:1.35}}>依据讲师产品本地源码：任务进度存本机；雷达在打开App时扫描；线上邀请效果未验证。Registration ≠ Activation。</div>
  </Inner></Slide>;
}
