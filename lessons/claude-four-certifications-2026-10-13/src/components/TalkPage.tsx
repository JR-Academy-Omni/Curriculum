import ExamInterfacePage from './ExamInterfacePage';
import PurchasedExamPage from './PurchasedExamPage';
import ImpactNumbersPage from './ImpactNumbersPage';
import LearningPage from './LearningPage';
import BackgroundFX from './BackgroundFX';
import MotionStory from './MotionStory';
import IllustratedPage from './IllustratedPage';
import EditorialPage from './EditorialPage';
import { type CSSProperties } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Slide, colors, fonts, radii } from './ui';
import { Panel, Label } from './deck';
import { sources, type TalkSlide } from '../data/talk';

const accent = [colors.yellow, colors.blue, colors.green, colors.purple];
const text: CSSProperties = { fontFamily: fonts.body, fontSize: 27, lineHeight: 1.55, margin: 0 };
function SplitText({ value }: { value: string }) {
 const [label, ...rest] = value.split('｜');
 return <><strong>{label}</strong>{rest.length > 0 && <span style={{ display: 'block', fontSize: 25, marginTop: 10, whiteSpace: 'pre-line' }}>{rest.join('｜')}</span>}</>;
}
export default function TalkPage({ page }: { page: TalkSlide }) {
 const reduced = useReducedMotion();
 const dark = page.mode === 'dark';
 const hero = page.mode === 'hero';
 const bg = dark ? colors.dark : hero && page.title==='选你的方向，开始准备' ? colors.yellow : page.mode === 'bars' ? colors.white : colors.warmBg;
 const fg = dark ? colors.white : colors.dark;
 const appear = (i: number) => ({ initial: reduced ? false as const : { opacity: 0, y: 18 }, animate: { opacity: 1, y: 0 }, transition: { duration: .35, delay: i * .08 } });
 if(page.visual==='career-impact'||page.visual==='question-impact') return <ImpactNumbersPage page={page}/>;
 if(page.purchasedExam) return <PurchasedExamPage page={page}/>;
 if(page.examDemoImage) return <ExamInterfacePage page={page}/>;
 if(page.learningScreenshot) return <LearningPage page={page}/>;
 if(page.animated) return <MotionStory page={page}/>;
 if(page.image) return <IllustratedPage page={page}/>;
 if(page.visual==='anthropic') return <EditorialPage page={page}/>;
 return <Slide bg={bg} style={{ position: 'relative', fontFamily: fonts.body, color: fg }}>
  {page.ambient&&<BackgroundFX dark={page.mode==='dark'}/>}
  <style>{`.talk-action:focus-visible { outline: 4px solid ${colors.blue}; outline-offset: 5px; } .talk-print-answer { display:none; } @media print { .talk-action,.talk-screen-answer {display:none!important} .talk-print-answer {display:block!important} } @media(prefers-reduced-motion:reduce){.talk-bar{transform:none!important}}`}</style>
  {dark && <div aria-hidden style={{ position:'absolute',right:12,top:8,width:215,height:55,background:colors.white,borderRadius:radii.card }} />}
  <div style={{ position: 'absolute', left: 100, top: 76, width: 1400, height: 724, display: 'flex', flexDirection: 'column', gap: 22 }}>
   <div style={{ fontFamily: fonts.mono, fontSize: 17, letterSpacing: 2, fontWeight: 700, color: dark ? colors.yellow : colors.dark }}>{page.kicker}</div>
   <h1 style={{ fontFamily: fonts.heading, fontSize: hero ? 76 : 53, lineHeight: 1.15, letterSpacing: -1, margin: 0, whiteSpace:'pre-line', maxWidth: 1350 }}>{page.title}</h1>
   <p style={{ ...text, fontSize: 24, maxWidth: 1320 }}>{page.sub}</p>
   <div style={{ flex:1, minHeight:0, paddingTop:10 }}>
    {hero && <div style={{ display:'flex',gap:18,marginTop:35,flexWrap:'wrap' }}>{page.items.map((v,i)=><motion.div key={v} {...appear(i)} style={{ width:318,background:accent[i%4],border:`2px solid ${colors.dark}`,borderRadius:radii.panel,padding:25,boxShadow:`6px 6px 0 ${colors.dark}` }}><span style={{fontFamily:fonts.mono,fontSize:18}}>0{i+1}</span><p style={{...text,fontSize:31,fontWeight:800,marginTop:14}}>{v}</p></motion.div>)}</div>}
    {(page.mode==='roles'||page.mode==='role'||page.mode==='compare') && <div style={{ display:'grid',gridTemplateColumns:page.mode==='roles'?'repeat(2,1fr)':'repeat(2,1fr)',gap:24 }}>{page.items.map((v,i)=><motion.div key={v} {...appear(i)}><Panel style={{minHeight:page.mode==='compare'?215:155,borderTop:`9px solid ${accent[i%4]}`,padding:26}}><div style={text}>{page.codes?.[i]&&<div style={{marginBottom:10}}><Label bg={accent[i%4]} color={colors.dark}>{page.codes[i]}</Label></div>}<SplitText value={v}/></div></Panel></motion.div>)}</div>}
    {page.mode==='rows' && <div style={{display:'flex',flexDirection:'column',gap:17}}>{page.items.map((v,i)=><motion.div key={v} {...appear(i)} style={{display:'flex',alignItems:'center',gap:24,background:colors.white,border:`2px solid ${colors.dark}`,borderRadius:radii.card,padding:'20px 25px'}}><Label bg={accent[i%4]} color={colors.dark}>0{i+1}</Label><p style={{...text,fontSize:26,whiteSpace:'pre-line'}}>{v}</p></motion.div>)}</div>}
    {page.mode==='timeline' && <div style={{display:'flex',flexDirection:'column',gap:20}}>{page.items.map((v,i)=><motion.div key={v} {...appear(i)} style={{display:'flex',alignItems:'center',gap:24}}><div style={{width:66,height:66,flexShrink:0,background:accent[i%4],borderRadius:'50%',border:`2px solid ${colors.dark}`,display:'grid',placeItems:'center',fontFamily:fonts.mono,fontSize:24,fontWeight:800}}>{i+1}</div><div style={{...text,background:colors.white,border:`2px solid ${colors.dark}`,borderRadius:radii.card,padding:'16px 25px',flex:1}}>{v}</div></motion.div>)}</div>}
    {dark && <div style={{display:'flex',flexDirection:'column',gap:24,marginTop:25}}>{page.items.map((v,i)=><motion.div key={v} {...appear(i)} style={{display:'flex',alignItems:'center',gap:24}}><span style={{fontSize:58,color:accent[i],fontFamily:fonts.mono}}>0{i+1}</span><p style={{...text,fontSize:page.items.length>3?27:32,maxWidth:page.items.length>3?800:undefined}}>{v}</p></motion.div>)}</div>}
    {page.mode==='bars' && <div style={{display:'flex',flexDirection:'column',gap:25,marginTop:10}}>{page.items.map((v,i)=><div key={v} style={{display:'grid',gridTemplateColumns:'300px 1fr 110px',alignItems:'center',gap:22}}><span style={{...text,fontSize:27,fontWeight:700}}>{v.split('｜')[0]}</span><div style={{height:57,background:colors.warmBg,borderRadius:radii.card,overflow:'hidden'}}><motion.div className="talk-bar" initial={reduced?false:{scaleX:0}} animate={{scaleX:1}} transition={{duration:.6,delay:i*.12}} style={{width:`${(page.values?.[i]??0)/1400*100}%`,height:'100%',background:accent[i],transformOrigin:'left center',borderRadius:radii.card}}/></div><span style={{fontSize:30,fontFamily:fonts.mono,fontWeight:700}}>{page.values?.[i].toLocaleString()}</span></div>)}<p style={{fontSize:18,marginTop:30}}>单位：道；条形图上限 1,400。已发布认证题池统计，不是官方真题数量。</p></div>}

   </div>
   {page.link && <a className="talk-action" href={page.link} target="_blank" rel="noreferrer" style={{color:fg,fontSize:23,fontWeight:800,textUnderlineOffset:6}}>打开考证匠 Claude 四证入口 ↗</a>}
  </div>
  <div style={{position:'absolute',left:100,bottom:36,right:100,display:'flex',justifyContent:'space-between',fontSize:16,color:fg}}><a href={page.sourceKey==='owner'?undefined:sources[page.sourceKey]} target="_blank" rel="noreferrer" style={{color:fg}}>来源：{page.sourceLabel??(page.sourceKey==='owner'?'讲师经历反馈 / 求职目标':page.sourceKey==='counts'?'生产题库快照':page.sourceKey==='product'?'考证匠官网':'Anthropic 官方')} ↗ · 2026-10-13 核验</a><span>{'N 查看讲师备注'}</span></div>
 </Slide>;
}
