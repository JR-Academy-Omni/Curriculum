import { DirectionalArrow } from '../MotionArrow';
import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Slide, Inner } from '../ui';
import { Label, colors, fonts } from '../deck';

/** 单次等概率抽一张中奖券；全部数字为教学模拟，不触发真实抽奖。 */
export default function H04_PaperFriction() {
  const [tickets, setTickets] = useState(1);
  const reducedMotion = useReducedMotion();
  const otherTickets = 90;
  const total = tickets + otherTickets;
  const probability = tickets / total;
  const duration = reducedMotion ? 0 : .32;
  return <Slide bg={colors.white}>
    <Inner style={{width:1400,height:830,padding:'55px 0 0',flexDirection:'column',gap:14,color:colors.dark,fontFamily:fonts.body}}>
      <div><Label bg={colors.dark} color={colors.yellow}>新生节 · Raffle Incentive</Label></div>
      <div>
        <h1 style={{fontFamily:fonts.heading,fontSize:60,fontWeight:900,lineHeight:1.1,margin:0}}>抽奖券越多，中奖概率越高</h1>
        <p style={{fontSize:25,lineHeight:1.35,marginTop:12}}>Tasks → Valid Tickets → Winning Chance → Participation</p>
      </div>
      <div style={{height:500,flexShrink:0}}>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',height:58,marginBottom:18}}>
          <div style={{display:'flex',gap:14,alignItems:'center'}}><span style={{fontSize:24,fontWeight:800}}>你拿到</span>{[1,5,10].map(n=><button className="ticket-probability-option" key={n} aria-pressed={tickets===n} disabled={tickets===n} onClick={()=>setTickets(n)} style={{fontFamily:fonts.body,fontSize:25,fontWeight:800,padding:'8px 26px',border:`2px solid ${colors.dark}`,borderRadius:999,background:tickets===n?colors.yellow:colors.white,color:colors.dark,cursor:tickets===n?'default':'pointer'}}>{n} 张券</button>)}</div>
          <span style={{fontSize:23}}>其他人共 <strong>90 张</strong>，保持不变</span>
        </div>
        <div style={{display:'grid',gridTemplateColumns:'820px 500px',gap:60}}>
          <svg width="820" height="340" viewBox="0 0 820 340" role="img" aria-label={`教学奖池：自己的${tickets}张有效券，其他人90张，共${total}张，每张等概率。`}>
            <rect x="1" y="1" width="818" height="338" rx="26" fill={colors.white} stroke={colors.dark} strokeWidth="2"/>
            <circle cx="32" cy="35" r="8" fill={colors.blue}/><text x="52" y="43" fontSize="24" fontWeight="800" fill={colors.dark}>你的 {tickets} 张券</text>
            <circle cx="290" cy="35" r="8" fill={colors.warmBg} stroke={colors.dark}/><text x="310" y="43" fontSize="24" fill={colors.dark}>其他人的 90 张券</text>
            {Array.from({length:total},(_,i)=><motion.rect data-pool-ticket key={i} x={31+(i%10)*76} y={70+Math.floor(i/10)*21} width="64" height="16" rx="4" stroke={colors.dark} strokeWidth=".75" initial={false} animate={{fill:i<tickets?colors.blue:colors.warmBg}} transition={{duration}}/>) }
            <rect x="31" y="295" width="750" height="20" rx="10" fill={colors.warmBg}/>
            <motion.rect data-ticket-share x="31" y="295" height="20" rx="10" fill={colors.blue} initial={false} animate={{width:750*probability}} transition={{duration}}/>
          </svg>
          <div style={{height:340,borderRadius:26,background:colors.dark,color:colors.white,padding:'25px 32px'}}>
            <div style={{fontSize:25,fontWeight:800}}>单次中奖概率 · Probability</div>
            <div data-winning-probability role="status" aria-live="polite" style={{fontFamily:fonts.heading,fontSize:91,fontWeight:900,lineHeight:1.1,margin:'10px 0 12px',color:colors.yellow}}>{(probability*100).toFixed(1)}%</div>
            <div style={{fontSize:27,lineHeight:1.5}}>你的有效券 / 全池有效券</div>
            <div data-ticket-fraction style={{fontSize:36,fontWeight:800,marginTop:9}}>{tickets} / {total}</div>
            <div style={{fontSize:20,marginTop:10}}>每张券等概率，随机抽 1 张中奖券</div>
          </div>
        </div>
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',fontSize:27,fontWeight:850,padding:'21px 10px 0'}}>
          <span>完成更多任务<span style={{display:'block',fontSize:17}}>Complete Tasks</span></span><DirectionalArrow width={27} height={27}/><span>拿到更多券<span style={{display:'block',fontSize:17}}>Earn More Tickets</span></span><DirectionalArrow width={27} height={27}/><span>中奖机会更大<span style={{display:'block',fontSize:17}}>Higher Chance</span></span><DirectionalArrow width={27} height={27}/><span>更愿意继续参与<span style={{display:'block',fontSize:17}}>Keep Participating</span></span>
        </div>
      </div>
      <div>
        <p style={{fontSize:25,fontWeight:800,lineHeight:1.35}}>奖励把“多做一次”与“多一次机会”连起来，推动用户行动。</p>
        <p style={{fontSize:18,lineHeight:1.4,marginTop:8}}>教学模拟；概率取决于有效券占比，不保证中奖。多奖、多轮需按规则重算；纸券增多也会增加兑换负担。</p>
      </div>
    </Inner>
  </Slide>;
}
