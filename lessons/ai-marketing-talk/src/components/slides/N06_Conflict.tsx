import { motion } from 'framer-motion';
import ReferenceFrame from '../ReferenceFrame';
import { colors, fonts, border, shadow } from '../deck';

// Adapted from W1 S11b_SoTProjectControl: file-browser thumbnails reveal conflicting versions.
const FILES=[
 {name:'课程资料（最终版）',kind:'文',note:'日期：10月15日',color:colors.rose},
 {name:'课程资料（最终最终版）',kind:'文',note:'日期：10月22日',color:colors.rose},
 {name:'视频脚本（旧版）',kind:'片',note:'字幕：10月15日',color:colors.orange},
 {name:'海报（用这一张）',kind:'图',note:'海报：10月22日',color:colors.purple},
 {name:'报名名单（最新版）',kind:'表',note:'本场已满班',color:colors.green},
 {name:'销售话术（最新版）',kind:'文',note:'仍在接受咨询',color:colors.rose},
];
export default function N06_Conflict(){
 return <ReferenceFrame stage="版本冲突 · 六份所谓最新版" title="六份“最新版”，AI 到底相信哪一份？" takeaway="不能看谁写了“最新版”就信谁；得有人确认哪份算数。">
  <div style={{display:'grid',gridTemplateColumns:'990px 1fr',gap:36,height:530}}>
   <section data-reference-panel style={{borderRadius:24,overflow:'hidden',border,boxShadow:shadow,background:colors.white,padding:22}}>
    <div style={{display:'flex',justifyContent:'space-between',borderBottom:'2px solid #ccc',paddingBottom:16,fontSize:22,fontWeight:800}}>
     <span>📁 工作资料 / 体验课推广</span><span style={{color:'#666'}}>六个文件 · 模拟</span>
    </div>
    <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'22px 18px',marginTop:22}}>
     {FILES.map((f,i)=><motion.div key={f.name} initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{delay:i*.05}}>
      <div style={{height:112,borderRadius:14,border:'1px solid #ccc',position:'relative',padding:'20px 20px 12px 72px',background:colors.warmBg}}>
       <span style={{position:'absolute',left:12,top:14,width:44,height:44,borderRadius:8,background:f.color,color:colors.dark,display:'grid',placeItems:'center',fontSize:28,fontWeight:900}}>{f.kind}</span>
       {['85%','100%','65%','90%'].map((w,j)=><div key={j} style={{height:7,width:w,background:j===0?f.color:'#ccc',marginBottom:10}}/>)}
      </div>
      <p style={{fontFamily:fonts.body,fontSize:18,fontWeight:800,marginTop:10}}>{f.name}</p>
      <p style={{fontSize:23,color:colors.rose,fontWeight:800,marginTop:8}}>{f.note}</p>
     </motion.div>)}
    </div>
   </section>
   <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',textAlign:'center'}}>
    <div style={{fontSize:100}}>🤖</div>
    <h2 style={{fontFamily:fonts.heading,fontSize:50,fontWeight:900,marginTop:25}}>哪个算数？</h2>
    <p style={{fontSize:28,color:colors.rose,fontWeight:800,marginTop:28}}>下一页：大家认哪份？ →</p>
   </div>
  </div>
 </ReferenceFrame>;
}
