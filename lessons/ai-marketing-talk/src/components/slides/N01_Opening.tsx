import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Slide } from '../ui';
import { colors, fonts, paper } from '../deck';

const DEPARTMENTS = [
 {name:'经营管理',detail:'目标 · 预算 · 决定',x:330,y:70,color:colors.yellow,icon:'◎'},
 {name:'市场营销',detail:'内容 · 活动 · 咨询',x:110,y:235,color:colors.rose,icon:'↗'},
 {name:'财务会计',detail:'费用 · 发票 · 核对',x:550,y:235,color:colors.orange,icon:'¥'},
 {name:'团队管理',detail:'汇报 · 任务 · 跟进',x:110,y:450,color:colors.purple,icon:'≡'},
 {name:'业务运营',detail:'客户 · 交付 · 进展',x:550,y:450,color:colors.green,icon:'✓'},
];

export default function N01_Opening(){
 const reduceMotion=useReducedMotion();
 const [replay,setReplay]=useState(0);
 const [paused,setPaused]=useState(false);
 const [phase,setPhase]=useState(0);
 const flowing=!reduceMotion&&!paused;
 useEffect(()=>{
  setPhase(0);
  if(!flowing)return;
  let interval:ReturnType<typeof setInterval>|undefined;
  const start=setTimeout(()=>{interval=setInterval(()=>setPhase(v=>(v+1)%3),2000);},2300);
  return ()=>{clearTimeout(start);if(interval)clearInterval(interval);};
 },[flowing,replay]);
 const entrance=(delay:number)=>({initial:reduceMotion?false:{opacity:0,y:16},animate:{opacity:1,y:0},transition:{delay:reduceMotion?0:delay,duration:reduceMotion?0:.45}});
 return <Slide style={{position:'relative',...paper,overflow:'clip'}}>
  <div aria-hidden style={{position:'absolute',left:-120,bottom:-145,width:380,height:380,borderRadius:'50%',border:'45px solid '+colors.yellow,opacity:.45}}/>
  <div data-talk-page style={{width:1380,height:768,position:'relative',color:colors.dark,fontFamily:fonts.body}}>
   <div style={{position:'absolute',left:0,top:35,display:'flex',gap:16,alignItems:'center'}}>
    <span style={{background:colors.dark,color:colors.white,borderRadius:999,padding:'9px 18px',fontSize:18,fontWeight:800}}>企业经营 × AI</span>
    <span style={{fontSize:19,fontWeight:700,color:'#666'}}>30 分钟讲座</span>
   </div>
   <div key={'title'+replay} style={{position:'absolute',left:0,top:166,width:690}}>
    <h1 style={{fontFamily:fonts.heading,fontSize:116,lineHeight:1.08,fontWeight:900,letterSpacing:-4}}>
     <motion.span {...entrance(.05)} style={{display:'block'}}>企业 <span style={{color:colors.rose}}>AI</span></motion.span>
     <motion.span {...entrance(.28)} style={{position:'relative',display:'inline-block',marginTop:14}}>
      <motion.span aria-hidden initial={reduceMotion?false:{scaleX:0}} animate={{scaleX:1}} transition={{delay:reduceMotion?0:.6,duration:.5}} style={{position:'absolute',left:-5,right:-12,bottom:8,height:28,background:colors.yellow,borderRadius:8,rotate:-2,transformOrigin:'left'}}/>
      <span style={{position:'relative'}}>自动化</span>
     </motion.span>
    </h1>
    <motion.p {...entrance(.7)} style={{fontSize:34,lineHeight:1.5,fontWeight:800,marginTop:43}}>从个人提效，到公司协同</motion.p>
    <motion.p {...entrance(.85)} style={{fontSize:25,lineHeight:1.6,color:'#666',marginTop:12}}>让资料、工作和结果，真正接起来。</motion.p>
   </div>
   <div style={{position:'absolute',left:0,bottom:58,display:'flex',gap:18,alignItems:'center'}}>
    <span aria-hidden style={{width:44,height:4,borderRadius:2,background:colors.rose}}/>
    <span style={{fontSize:23,fontWeight:900}}>Lightman</span>
    <span style={{fontSize:21,color:'#666'}}>JR Academy</span>
   </div>
   <motion.svg key={'diagram'+replay} initial={reduceMotion?false:{opacity:0}} animate={{opacity:1}} transition={{duration:.3}} viewBox="0 0 660 690" width="660" height="690" role="img" aria-label="公司AI工作系统连接市场营销、财务会计、团队管理、业务运营和经营管理，以共用资料和做法支撑" style={{position:'absolute',right:-8,top:34,overflow:'visible'}}>
    <circle cx="330" cy="325" r="224" fill="none" stroke={colors.dark} strokeOpacity=".10" strokeWidth="2" strokeDasharray="5 10"/>
    <circle cx="330" cy="325" r="158" fill="none" stroke={colors.rose} strokeOpacity=".16" strokeWidth="2"/>
    {DEPARTMENTS.map((d,i)=><motion.path data-cover-connection key={d.name} initial={reduceMotion?false:{pathLength:0}} animate={{pathLength:1}} transition={{delay:reduceMotion?0:.7+i*.14,duration:reduceMotion?0:.55}} d={'M330 325L'+d.x+' '+d.y} stroke={d.color} strokeWidth="4" fill="none"/>)}
    {flowing&&DEPARTMENTS.map(d=><motion.circle data-flow-dot key={'flow'+d.name} r="7" fill={d.color} initial={{cx:330,cy:325}} animate={{cx:[330,d.x,d.x,330,330],cy:[325,d.y,d.y,325,325]}} transition={{delay:2.3,duration:6,times:[0,.3,.5,.85,1],repeat:Infinity,ease:'linear'}}/>)}
    <path d="M330 457V562" stroke={colors.dark} strokeWidth="3" strokeDasharray="7 7"/>
    <motion.g initial={reduceMotion?false:{opacity:0,scale:.85}} animate={{opacity:1,scale:1}} transition={{delay:reduceMotion?0:.35,duration:.45}} style={{transformOrigin:'330px 325px'}}>
    <circle cx="337" cy="332" r="128" fill={colors.rose}/>
    <circle cx="330" cy="325" r="128" fill={colors.dark}/>
    <text x="330" y="328" fill={colors.white} fontFamily={fonts.heading} fontSize="94" fontWeight="900" textAnchor="middle">AI</text>
    <text x="330" y="374" fill={colors.yellow} fontFamily={fonts.body} fontSize="27" fontWeight="800" textAnchor="middle">公司工作系统</text>
    </motion.g>
    {DEPARTMENTS.map((d,i)=><motion.g data-cover-department key={d.name} initial={reduceMotion?false:{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{delay:reduceMotion?0:1.1+i*.18,duration:.4}}>
     {flowing&&<motion.rect data-department-glow x={d.x-103} y={d.y-57} width="206" height="114" rx="25" fill={d.color} initial={{opacity:0}} animate={{opacity:[0,.1,.6,.1,0]}} transition={{delay:2.3,duration:6,times:[0,.3,.5,.85,1],repeat:Infinity,ease:'easeInOut'}}/>}
     <rect x={d.x-95+5} y={d.y-49+5} width="190" height="98" rx="20" fill={d.color}/>
     <rect x={d.x-95} y={d.y-49} width="190" height="98" rx="20" fill={colors.white} stroke={colors.dark} strokeWidth="2"/>
     <circle cx={d.x-67} cy={d.y-17} r="14" fill={d.color}/>
     <text x={d.x-67} y={d.y-11} fontFamily={fonts.body} fontSize="19" fontWeight="900" fill={colors.dark} textAnchor="middle">{d.icon}</text>
     <text x={d.x+14} y={d.y-8} fontFamily={fonts.body} fontSize="27" fontWeight="900" fill={colors.dark} textAnchor="middle">{d.name}</text>
     <text x={d.x} y={d.y+27} fontFamily={fonts.body} fontSize="20" fill={colors.dark} textAnchor="middle">{d.detail}</text>
    </motion.g>)}
    <rect x="185" y="564" width="290" height="65" rx="18" fill={colors.yellow}/>
    <text x="330" y="605" fontFamily={fonts.body} fontSize="25" fontWeight="900" fill={colors.dark} textAnchor="middle">共用资料 + 固定做法</text>
    <text data-cycle-phase x="330" y="675" fontFamily={fonts.body} fontSize="21" fontWeight="700" fill={colors.rose} textAnchor="middle">{reduceMotion?'任务分出去 · 结果收回来':paused?'循环已暂停':['① AI 下发任务','② 各部门处理','③ 结果回到 AI'][phase]}</text>
   </motion.svg>
   <div style={{position:'absolute',left:0,bottom:0,display:'flex',gap:12}}>
    <button onClick={()=>setReplay(n=>n+1)} style={{fontFamily:fonts.body,fontSize:18,fontWeight:800,padding:'8px 14px',borderRadius:12,border:'1px solid #bbb',background:colors.white,color:colors.dark,cursor:'pointer'}}>↻ 重播开场</button>
    <button aria-pressed={paused} disabled={Boolean(reduceMotion)} onClick={()=>setPaused(v=>!v)} style={{fontFamily:fonts.body,fontSize:18,fontWeight:800,padding:'8px 14px',borderRadius:12,border:'1px solid #bbb',background:colors.white,color:colors.dark,cursor:reduceMotion?'default':'pointer'}}>{reduceMotion?'减少动态模式':paused?'▶ 继续流动':'Ⅱ 暂停流动'}</button>
   </div>
  </div>
 </Slide>;
}
