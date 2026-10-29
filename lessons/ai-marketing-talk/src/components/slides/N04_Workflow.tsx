import { motion } from 'framer-motion';
import ReferenceFrame from '../ReferenceFrame';
import { colors, fonts, border, shadow } from '../deck';

// Adapted from Marketing S12b_Step2Templated; historical timings/provider claims removed.
const STAGES = [
  {icon:'⏰',title:'每天自动开始',detail:'查看最新课程资料',color:colors.rose},
  {icon:'✍️',title:'AI 写文案',detail:'/xhs-draft',color:colors.purple},
  {icon:'🎨',title:'AI 做海报',detail:'/xhs-poster',color:colors.orange},
  {icon:'✋',title:'推给人审核',detail:'批准才进入下一步',color:colors.yellow},
  {icon:'🚀',title:'安排发布',detail:'已接通自动发，否则人工',color:colors.green},
];
export default function N04_Workflow(){
 return <ReferenceFrame stage="自动接力 · 从一个 Skill 到一条流程" title="不再每一步都等你：把工作接成一条流程" takeaway="定时开始 → 调用 Skill → 人批准 → 执行发布；接下来扩展到多个平台。">
  <div style={{display:'flex',alignItems:'center',gap:10,height:450}}>
   {STAGES.map((s,i)=><div key={s.title} style={{display:'flex',alignItems:'center',flex:1,gap:10}}>
    <motion.section data-reference-panel initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{delay:i*.07}} style={{height:330,flex:1,borderRadius:24,overflow:'hidden',border,boxShadow:shadow,background:colors.white,textAlign:'center'}}>
     <div style={{height:13,background:s.color}}/>
     <div style={{fontSize:66,marginTop:28}}>{s.icon}</div>
     <h2 style={{fontFamily:fonts.heading,fontSize:28,fontWeight:900,marginTop:24}}>{s.title}</h2>
     <p style={{fontSize:22,lineHeight:1.5,marginTop:18,padding:'0 8px'}}>{s.detail}</p>
     <div style={{fontFamily:fonts.mono,fontSize:25,color:colors.rose,marginTop:24,fontWeight:900}}>0{i+1}</div>
    </motion.section>
    {i<4&&<span style={{fontSize:32,color:colors.rose}}>→</span>}
   </div>)}
  </div>
  <p style={{fontSize:25,textAlign:'center',fontWeight:700}}>未接通的平台交给人发布 ｜ 每次记下做了什么、是否成功</p>
 </ReferenceFrame>;
}
