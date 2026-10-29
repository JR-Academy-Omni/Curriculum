import BackgroundFX from '../BackgroundFX';
import { motion, useReducedMotion } from 'framer-motion';
import { Slide, fonts, radii, assetPath } from '../ui';
import { editorial as e } from '../../styles/editorial-theme';

export default function S01_Talk() {
 const reduced=useReducedMotion();
 const enter=(delay:number)=>({initial:reduced?false as const:{opacity:0,y:18},animate:{opacity:1,y:0},transition:{duration:.65,delay}});
 return <Slide bg={e.paper} style={{position:'relative',color:e.ink,fontFamily:fonts.body}}>
  <div aria-hidden style={{position:'absolute',right:0,top:0,width:640,height:900,background:e.clay,borderRadius:'140px 0 0 140px'}}/>
  <BackgroundFX/>
  <div style={{position:'absolute',left:110,top:110,width:830}}>
   <motion.div {...enter(0)} style={{display:'flex',alignItems:'center',gap:16,fontSize:17,letterSpacing:2,color:e.muted,fontFamily:fonts.mono}}><span style={{height:2,width:44,background:e.accent}}/>JR ACADEMY × 考证匠</motion.div>
   <motion.h1 {...enter(.08)} style={{fontFamily:e.heading,fontSize:137,fontWeight:500,lineHeight:1.05,letterSpacing:-5,margin:'58px 0 0'}}>Claude<br/><span style={{fontSize:105,letterSpacing:2}}>四大认证</span></motion.h1>
   <motion.p {...enter(.18)} style={{fontFamily:e.heading,fontSize:43,lineHeight:1.5,margin:'36px 0 0'}}>让你的 AI 能力，<br/>成为职场里看得见的优势。</motion.p>
   <motion.p {...enter(.26)} style={{fontSize:23,color:e.muted,lineHeight:1.7,margin:'22px 0 0'}}>从 Business 工作流到企业 AI 交付<br/>选对证书，准备你的下一步。</motion.p>
  </div>
  <motion.div {...enter(.18)} style={{position:'absolute',right:68,top:162,width:510,height:550,background:e.surface,border:`1px solid ${e.line}`,borderRadius:36,display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column',gap:18}}>
   <img src={assetPath('claude-partner-certified.svg')} alt="JR Academy 的 Claude Certified Services Partner 官方徽章" style={{width:440,height:440,objectFit:'contain'}}/>
   <span style={{fontFamily:fonts.body,fontSize:19,color:e.muted}}>JR Academy · Claude 认证服务合作伙伴</span>
  </motion.div>
  <div style={{position:'absolute',left:110,right:80,bottom:58,borderTop:`1px solid ${e.line}`,paddingTop:25,display:'flex',justifyContent:'space-between',alignItems:'center'}}>
   <div style={{fontSize:23,letterSpacing:1}}>含金量 <span style={{color:e.accent,margin:'0 18px'}}>／</span>四证区别 <span style={{color:e.accent,margin:'0 18px'}}>／</span>备考与职业机会</div>
   <span style={{fontFamily:fonts.mono,fontSize:18,color:e.muted}}>13 OCT 2026</span>
  </div>
 </Slide>;
}
