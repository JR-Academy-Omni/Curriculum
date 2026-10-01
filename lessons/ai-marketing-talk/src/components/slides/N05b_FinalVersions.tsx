import { motion } from 'framer-motion';
import ReferenceFrame from '../ReferenceFrame';
import { colors, fonts, border, shadow } from '../deck';

const FOLDERS=[
 {title:'企业报价单',color:colors.rose,files:[
  {name:'final.docx',note:'销售：这份已经发给客户'},
  {name:'final_final.docx',note:'老板：价格刚刚改过'},
  {name:'final_final_copy.docx',note:'同事：我又补了服务范围'},
  {name:'final_真的最终版.docx',note:'群里：发这个，别发错了'},
 ]},
 {title:'活动 Proposal',color:colors.purple,files:[
  {name:'final.docx',note:'策划：方案已整理好'},
  {name:'final_final.docx',note:'财务：预算刚调整'},
  {name:'final_final_copy.doc',note:'同事：这是我本地那份'},
  {name:'final_真的最终版.docx',note:'老板：时间还得再改一下'},
 ]},
];

export default function N05b_FinalVersions(){
 return <ReferenceFrame stage="内容变多后的问题 · final 永远不是最后一版" title="每份都叫 final，到底哪份才算数？" takeaway="报价单、活动方案都如此；下一页把这个问题放回刚才的体验课推广。">
  <div style={{display:'grid',gridTemplateColumns:'520px 520px 280px',gap:30,height:530}}>
   {FOLDERS.map(folder=><section data-version-folder key={folder.title} style={{background:colors.white,border,borderRadius:24,boxShadow:shadow,padding:20}}>
    <h2 style={{fontFamily:fonts.heading,fontSize:30,fontWeight:900,borderBottom:'1px solid #ccc',paddingBottom:15}}>📁 {folder.title}</h2>
    <div style={{display:'grid',gap:12,marginTop:18}}>
     {folder.files.map((file,i)=><motion.div data-version-file key={file.name} initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{delay:i*.12,duration:.3}} style={{display:'flex',gap:16,alignItems:'center',height:92,padding:'12px 16px',background:colors.warmBg,border:'1px solid #ddd',borderRadius:16}}>
      <span aria-hidden style={{width:44,height:52,flexShrink:0,borderRadius:8,background:folder.color,display:'grid',placeItems:'center',fontFamily:fonts.heading,fontWeight:900,fontSize:25,color:colors.white}}>文</span>
      <div style={{minWidth:0}}><p style={{fontFamily:fonts.body,fontSize:22,lineHeight:1.4,fontWeight:900,whiteSpace:'nowrap'}}>{file.name}</p><p style={{fontSize:20,lineHeight:1.4,color:'#666',marginTop:6}}>{file.note}</p></div>
     </motion.div>)}
    </div>
   </section>)}
   <aside style={{display:'flex',flexDirection:'column',justifyContent:'center',textAlign:'center',gap:28}}>
    <div aria-hidden style={{fontSize:86}}>🤷</div>
    <h2 style={{fontSize:43,fontWeight:900,lineHeight:1.35}}>到底<br/>发哪份？</h2>
    <p style={{fontSize:25,color:colors.rose,fontWeight:800,lineHeight:1.5}}>人都不确定<br/>AI 又该信哪份？</p>
   </aside>
  </div>
 </ReferenceFrame>;
}
