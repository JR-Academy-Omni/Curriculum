import { MotionArrow } from '../MotionArrow';
import { motion } from 'framer-motion';
import { Slide, Inner, colors, fonts } from '../ui';
import { Label } from '../deck';
import { teachingTermEn } from '../../data/teaching-terms-en';

export default function S01_Cover() {
  return <Slide bg={colors.warmBg} style={{position:'relative',backgroundImage:'linear-gradient(rgba(16,22,47,.045) 1px,transparent 1px),linear-gradient(90deg,rgba(16,22,47,.045) 1px,transparent 1px)',backgroundSize:'48px 48px'}}>
    <div aria-hidden style={{position:'absolute',left:0,top:0,width:18,height:'100%',background:colors.red}} />
    <Inner style={{display:'grid',gridTemplateColumns:'1.25fr 1fr',alignItems:'center',gap:46,padding:'48px 30px',height:'88%'}}>
      <div style={{alignSelf:'stretch',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'flex-start'}}>
        <Label bg={colors.dark} color={colors.yellow}>OPC 创业营 · W11</Label>
        <motion.h1 initial={{opacity:0,y:22}} animate={{opacity:1,y:0}} transition={{duration:.45}} style={{fontFamily:fonts.heading,fontSize:136,fontWeight:900,lineHeight:1.05,letterSpacing:-6,margin:'30px 0 8px',color:colors.dark,whiteSpace:'nowrap'}}>
          <span style={{backgroundImage:`linear-gradient(transparent 73%,${colors.yellow} 73%,${colors.yellow} 96%,transparent 96%)`}}>用户增长</span>
        </motion.h1><div data-teaching-title-en style={{fontFamily:fonts.heading,fontSize:38,fontWeight:800,color:colors.dark,marginBottom:26}}>USER GROWTH</div>
        <motion.p initial={{opacity:0,y:14}} animate={{opacity:1,y:0}} transition={{duration:.4,delay:.12}} style={{fontFamily:fonts.heading,fontSize:51,fontWeight:800,lineHeight:1.4,margin:0,color:colors.dark}}>从第一批客户，<br/>到增长飞轮。</motion.p><div style={{fontSize:23,fontWeight:600,marginTop:10}}>From Seed Customers to a Growth Flywheel</div>
        <p style={{fontFamily:fonts.body,fontSize:25,lineHeight:1.6,margin:'28px 0 0',color:colors.dark}}>种子用户 · 新生节 · 拼多多 · 36 种玩法<span style={{display:'block',fontSize:18,lineHeight:1.3,marginTop:5}}>Seed Users · Freshers Festival · PDD · 36 Tactics</span></p>
        <div style={{display:'flex',alignItems:'center',gap:22,marginTop:34,paddingTop:24,borderTop:`2px solid ${colors.dark}`,fontSize:22,color:colors.dark}}>
          <span style={{fontFamily:fonts.mono,fontWeight:700}}>2026.10.11</span><span>90 分钟 · 含练习<span style={{display:'block',fontSize:17}}>90 min · Including Practice</span></span>
        </div>
      </div>
      <motion.div initial={{opacity:0,scale:.96}} animate={{opacity:1,scale:1}} transition={{duration:.5,delay:.15}} style={{height:566,position:'relative',fontFamily:fonts.body}} role="img" aria-label="增长飞轮主视觉：客户获得价值，继续使用并推荐，带来新的客户">
        <svg width="100%" height="100%" viewBox="0 0 540 566" aria-hidden="true" style={{position:'absolute',inset:0}}>
          <circle cx="270" cy="273" r="186" fill={colors.yellow} stroke={colors.dark} strokeWidth="2" />
          <circle cx="270" cy="273" r="129" fill={colors.warmBg} stroke={colors.dark} strokeWidth="2" />
          <MotionArrow d="M 240 89 A 186 186 0 0 1 438 195" strokeWidth={7} delay={0.0} />
          <path d="M 422 181 L 441 207 L 448 176" fill="none" stroke={colors.dark} strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
          <MotionArrow d="M 453 308 A 186 186 0 0 1 296 455" strokeWidth={7} delay={0.15} />
          <path d="M 312 439 L 282 457 L 313 466" fill="none" stroke={colors.dark} strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
          <MotionArrow d="M 90 231 A 186 186 0 0 1 222 93" strokeWidth={7} delay={0.3} />
          <path d="M 210 82 L 235 90 L 213 110" fill="none" stroke={colors.dark} strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
          <MotionArrow d="M 197 444 A 186 186 0 0 1 88 264" strokeWidth={7} delay={0.44999999999999996} />
          <path d="M 74 279 L 88 249 L 105 276" fill="none" stroke={colors.dark} strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <div style={{position:'absolute',left:'25%',right:'25%',top:207,textAlign:'center',color:colors.dark}}><div style={{fontSize:43,fontWeight:900,lineHeight:1.25}}>每一轮<br/>都有积累</div><div style={{fontFamily:fonts.mono,fontSize:15,marginTop:13,letterSpacing:2}}>GROWTH FLYWHEEL</div></div>
        {[{t:'找到客户',x:'33%',y:23,bg:colors.white},{t:'交付价值',x:'68%',y:203,bg:colors.red},{t:'留存复用',x:'34%',y:434,bg:colors.white},{t:'推荐传播',x:'0%',y:208,bg:colors.green}].map(n=><div key={n.t} style={{position:'absolute',left:n.x,top:n.y,background:n.bg,color:colors.dark,border:`2px solid ${colors.dark}`,borderRadius:18,padding:'14px 20px',fontSize:23,fontWeight:800,whiteSpace:'nowrap',boxShadow:`5px 5px 0 ${colors.dark}`}}>{n.t}<div data-teaching-term-en style={{fontSize:15,fontWeight:550,marginTop:4}}>{teachingTermEn(n.t)}</div></div>)}
        <div style={{position:'absolute',left:0,right:0,bottom:0,textAlign:'center',fontSize:23,fontWeight:700,color:colors.dark}}>让今天的成果，带来下一轮增长。</div>
      </motion.div>
    </Inner>
  </Slide>;
}
