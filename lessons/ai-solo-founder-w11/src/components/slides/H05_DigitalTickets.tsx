import { DirectionalArrow } from '../MotionArrow';
import { useState } from 'react';
import { FestivalFrame } from '../FestivalDiagram';
import { colors, fonts } from '../deck';

export default function H05_DigitalTickets() {
  const [used, setUsed] = useState(false);
  const steps = [
    ['用户完成任务', '记录签到 / 任务事件', colors.blue],
    ['系统按规则发券', '核对条件，抽奖券进入账户', colors.yellow],
    ['用户查看并使用', '查余额、参与抽奖、核对状态', colors.green],
  ];
  return <FestivalFrame title="第三阶段：电子券，把奖励接到用户账户" subtitle="报名1500+，到场率约90%；后台能统计，券也能在账户里看见。" takeaway="把任务、奖励和使用记录连起来，才能承接更多玩法。" evidence="人数与到场率来自讲师回顾；券面与使用状态为教学演示，不操作真实账户或抽奖。">
    <div style={{display:'flex',gap:90,alignItems:'center',height:480,padding:'0 70px',fontFamily:fonts.body,color:colors.dark}}>
      <div style={{width:650}}>
        <div style={{display:'flex',gap:55,marginBottom:22}}>
          <div><strong style={{fontSize:43,fontFamily:fonts.heading}}>1500+</strong><div style={{fontSize:20}}>第三阶段报名人数</div></div>
          <div><strong style={{fontSize:43,fontFamily:fonts.heading}}>约90%</strong><div style={{fontSize:20}}>报名后的实际到场率</div></div>
        </div>
        {steps.map(([title,detail,color],i)=><div key={title}>
          <div style={{display:'flex',alignItems:'center',gap:22,border:`2px solid ${colors.dark}`,borderRadius:20,background:color,padding:'14px 22px',height:102}}>
            <span style={{fontSize:31,fontWeight:900}}>{i+1}</span><div><div style={{fontSize:27,fontWeight:850}}>{title}</div><div style={{fontSize:18,marginTop:3}}>{detail}</div></div>
          </div>
          {i<2&&<div aria-hidden style={{height:24,textAlign:'center',lineHeight:'24px'}}><DirectionalArrow direction="down" width={24} height={24} delay={i*.15}/></div>}
        </div>)}
      </div>
      <div style={{position:'relative',width:460,height:444,flexShrink:0,border:`3px solid ${colors.dark}`,borderRadius:30,background:colors.white,boxShadow:`10px 10px 0 ${colors.yellow}`}} aria-label="电子抽奖券示意">
        <div style={{padding:'23px 28px',height:269,background:used?colors.warmBg:colors.blue,borderRadius:'26px 26px 0 0'}}>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',fontSize:22,fontWeight:800}}><span>新生节</span><span style={{fontSize:16,padding:'5px 10px',border:`1px solid ${colors.dark}`,borderRadius:999,background:colors.white}}>券面示意</span></div>
          <div style={{fontSize:42,fontFamily:fonts.heading,fontWeight:900,lineHeight:1.2,margin:'14px 0 12px'}}>电子抽奖券</div>
          <span role="status" aria-live="polite" style={{display:'inline-flex',alignItems:'baseline',gap:8,padding:'8px 17px',fontSize:20,fontWeight:800,borderRadius:999,background:used?colors.red:colors.green,border:`2px solid ${colors.dark}`}}>{used?'已用于抽奖':'可用 · 未使用'}</span>
          <div style={{fontSize:17,marginTop:10}}>任务奖励已到账 · 归属当前账户</div>
        </div>
        <div aria-hidden style={{position:'absolute',top:268,left:19,right:19,borderTop:`2px dashed ${colors.dark}`}}/>
        {[-17,440].map(x=><div key={x} aria-hidden style={{position:'absolute',left:x,top:252,width:30,height:30,borderRadius:999,background:colors.warmBg,border:`2px solid ${colors.dark}`}}/>)}
        <div style={{padding:'12px 28px',textAlign:'center'}}>
          <svg width="250" height="34" viewBox="0 0 250 34" aria-hidden="true">{[0,7,14,24,31,42,50,57,67,73,83,92,99,106,118,127,135,142,154,163,172,180,190,197,205,215,223,232,242].map((x,i)=><rect key={x} x={x} y="0" width={i%3===0?5:2} height="34" fill={colors.dark}/>)}</svg>
          <div style={{fontFamily:fonts.mono,fontSize:15,letterSpacing:2,marginTop:5}}>DEMO-001 · 示意码</div>
          <button onClick={()=>setUsed(v=>!v)} style={{fontFamily:fonts.body,fontSize:21,fontWeight:800,marginTop:14,padding:'9px 22px',border:`2px solid ${colors.dark}`,borderRadius:14,background:used?colors.white:colors.yellow,color:colors.dark,cursor:'pointer'}}>{used?'重置演示':'演示使用这张券'}</button>
        </div>
      </div>
    </div>
  </FestivalFrame>;
}
