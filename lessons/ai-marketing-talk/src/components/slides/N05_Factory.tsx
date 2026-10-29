import { motion } from 'framer-motion';
import ReferenceFrame from '../ReferenceFrame';
import { colors, fonts, border, shadow } from '../deck';

// Adapted from Marketing S13c_MasterTree: root, curved branches, leaves.
const BRANCHES=[
 {icon:'📝',title:'文字',color:colors.rose,leaves:['小红书笔记','LinkedIn 文章']},
 {icon:'🎬',title:'视频',color:colors.orange,leaves:['脚本 / 分镜','不同版本短视频']},
 {icon:'🎨',title:'视觉',color:colors.purple,leaves:['海报 / 封面','各平台尺寸']},
 {icon:'📧',title:'销售',color:colors.green,leaves:['咨询话术','跟进邮件草稿']},
];
export default function N05_Factory(){
 return <ReferenceFrame stage="第三层 · 一份底稿，多种内容" title="一个主题，长出一整套内容" takeaway="同一份底稿，做成文章、视频和海报；每种都单独检查。">
  <div style={{display:'flex',justifyContent:'center'}}>
   <section data-reference-panel style={{width:570,height:160,borderRadius:24,overflow:'hidden',border,boxShadow:'6px 6px 0 '+colors.rose,background:colors.dark,color:colors.white,textAlign:'center',padding:18}}>
    <p style={{fontSize:18,color:colors.yellow,fontWeight:800}}>先把这个主题的资料整理好</p>
    <h2 style={{fontSize:38,fontWeight:900,fontFamily:fonts.heading,marginTop:7}}>1 份内容底稿</h2>
    <p style={{fontSize:22,marginTop:6}}>课程推广 · 共用事实与素材</p>
   </section>
  </div>
  <svg viewBox="0 0 1380 90" width="1380" height="90" style={{display:'block'}}>
   {BRANCHES.map((b,i)=><motion.path key={b.title} d={'M690 0C690 50 '+(165+i*350)+' 30 '+(165+i*350)+' 90'} fill="none" stroke={b.color} strokeWidth="4" initial={{pathLength:0}} animate={{pathLength:1}} transition={{duration:.4,delay:i*.06}}/>)}
  </svg>
  <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:20}}>
   {BRANCHES.map((b,i)=><motion.section data-reference-panel key={b.title} initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{delay:.15+i*.06}} style={{height:270,borderRadius:24,overflow:'hidden',border,boxShadow:shadow,background:colors.white}}>
    <div style={{background:colors.white,padding:'14px 12px',textAlign:'center',borderTop:'10px solid '+b.color,borderBottom:'1px solid #ccc'}}>
     <div style={{fontSize:48}}>{b.icon}</div><h2 style={{fontSize:30,fontWeight:900,marginTop:4}}>{b.title}</h2>
    </div>
    <div style={{padding:20,display:'grid',gap:16,textAlign:'center',fontSize:26,fontWeight:800}}>
     {b.leaves.map(l=><p key={l}>{l}</p>)}
    </div>
   </motion.section>)}
  </div>
 </ReferenceFrame>;
}
