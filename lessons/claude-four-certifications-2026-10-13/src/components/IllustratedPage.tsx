import BackgroundFX from './BackgroundFX';
import { motion, useReducedMotion } from 'framer-motion';
import { Slide, fonts, radii, colors, assetPath } from './ui';
import { editorial as e } from '../styles/editorial-theme';
import { type TalkSlide, sources } from '../data/talk';

export default function IllustratedPage({page}:{page:TalkSlide}){
 const reduced=useReducedMotion();
 const editorial=page.visual==='anthropic';
 const ink=editorial?e.ink:colors.dark;
 const bg=editorial?e.paper:colors.warmBg;
 const accent=editorial?e.accent:colors.red;
 const line=editorial?e.line:colors.dark;
 return <Slide bg={bg} style={{position:'relative',fontFamily:fonts.body,color:ink}}>
  {page.ambient&&<BackgroundFX dark={page.mode==='dark'}/>}
  <div style={{position:'absolute',left:105,top:78,width:1390,height:725,display:'flex',flexDirection:'column',gap:21}}>
   <div style={{fontFamily:fonts.mono,fontSize:16,letterSpacing:2,color:editorial?e.muted:ink}}>{page.kicker}</div>
   <h1 style={{fontFamily:editorial?e.heading:fonts.heading,fontSize:55,fontWeight:editorial?500:800,lineHeight:1.18,letterSpacing:-1,margin:0}}>{page.title}</h1>
   <p style={{fontSize:24,lineHeight:1.5,margin:0,color:editorial?e.muted:ink}}>{page.sub}</p>
   <div style={{display:'grid',gridTemplateColumns:page.image2?'560px 1fr':'485px 1fr',gap:48,flex:1,minHeight:0,alignItems:'center'}}>
    <motion.figure initial={reduced?false:{opacity:0,x:-20}} animate={{opacity:1,x:0}} transition={{duration:.55}} style={{margin:0,height:'100%',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',gap:17}}>
     <div style={{width:'100%',height:page.image2?440:420,display:'flex',justifyContent:'center',alignItems:'center',gap:18}}>
      <img src={assetPath(page.image!)} alt={page.image2?'考证匠 App AI讲题宣传截图':page.imageCaption+'：'+page.title} style={{width:page.image2?203:'100%',height:'100%',objectFit:'contain',borderRadius:page.image2?radii.card:0}}/>
      {page.image2&&<img src={assetPath(page.image2)} alt="考证匠 App 首页宣传截图" style={{width:203,height:'100%',objectFit:'contain',borderRadius:radii.card}}/>}
     </div>
     <figcaption style={{fontSize:16,color:editorial?e.muted:ink,textAlign:'center'}}>{page.imageCaption}</figcaption>
    </motion.figure>
    <div style={{display:'flex',flexDirection:'column',gap:15}}>{page.items.map((value,i)=>{const [label,...detail]=value.split('｜');return <motion.div key={value} initial={reduced?false:{opacity:0,y:14}} animate={{opacity:1,y:0}} transition={{duration:.4,delay:i*.08}} style={{padding:editorial?'14px 0':'16px 23px',border:editorial?undefined:`2px solid ${line}`,borderBottom:editorial?`1px solid ${line}`:undefined,borderRadius:editorial?0:radii.card,background:editorial?undefined:colors.white}}>
     <div style={{fontSize:20,color:accent,marginBottom:detail.length?9:0,fontWeight:600}}>0{i+1} · {label}</div>
     {detail.length>0&&<p style={{fontSize:24,lineHeight:1.5,margin:0}}>{detail.join('｜')}</p>}
    </motion.div>})}{page.link&&<a href={page.link} target="_blank" rel="noreferrer" style={{fontSize:22,color:ink,fontWeight:700,marginTop:8}}>打开考证匠 Claude 四证入口 ↗</a>}</div>
   </div>
  </div>
  <div style={{position:'absolute',left:105,right:105,bottom:36,display:'flex',justifyContent:'space-between',fontSize:16,color:editorial?e.muted:ink}}><a href={page.sourceKey==='owner'?undefined:sources[page.sourceKey]} target="_blank" rel="noreferrer" style={{color:'inherit'}}>来源：{page.sourceLabel??(page.sourceKey==='owner'?'讲师经历反馈':page.sourceKey==='product'?'考证匠官网':'Anthropic 官方范围')} ↗</a><span>N 查看讲师备注</span></div>
 </Slide>;
}
