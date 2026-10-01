import { motion } from 'framer-motion';
import { Slide, assetPath } from './ui';
import content from '../data/deck.json';
import type { CSSProperties } from 'react';

interface Element {
 type:string;x:number;y:number;w:number;h:number;text?:string;fontSize?:number;
 color?:string;fontFamily?:string;fontWeight?:number;lineHeight?:number;align?:string;
 fill?:string;stroke?:string;strokeWidth?:number;shadow?:string;src?:string;
 borderRadius?:number;role?:string;fit?:'contain'|'cover';letterSpacing?:number;
}
declare global { interface Window { __DECK_ASSETS__?: Record<string,string>; } }
export default function DeckSlide({id}:{id:string}) {
 const data=content.slides.find(s=>s.id===id)!;
 const paper=data.paper;
 return <Slide bg={data.background} style={{position:'relative',backgroundImage:`linear-gradient(${paper.gridColor} ${paper.gridWidth}px, transparent ${paper.gridWidth}px),linear-gradient(90deg,${paper.gridColor} ${paper.gridWidth}px,transparent ${paper.gridWidth}px)`,backgroundSize:`${paper.gridSize}px ${paper.gridSize}px`}}>
  <div data-slide-id={id} style={{width:1600,height:900,position:'relative'}}>
   {(data.elements as Element[]).map((e,i)=>{
    const base:CSSProperties={position:'absolute',left:e.x,top:e.y,width:e.w,height:e.h,boxSizing:'border-box'};
    if(e.type==='image')return <img key={i} className={e.role==='engine-logo'?'slide-logo':''} data-element={i} src={window.__DECK_ASSETS__?.[e.src!]||assetPath(e.src!)} alt={e.src!.split('/').pop()?.replace(/\.[^.]+$/,'')} style={{...base,objectFit:e.fit||'contain'}}/>;
    if(e.type==='rect')return <div key={i} data-element={i} aria-hidden="true" style={{...base,background:e.fill,border:e.stroke?`${e.strokeWidth||2}px solid ${e.stroke}`:undefined,borderRadius:e.borderRadius,boxShadow:e.shadow||undefined}}/>;
    const family=e.fontFamily==='Menlo'?'"Space Mono","Menlo","Noto Sans SC",monospace':(e.fontSize||0)>=40?'"Bricolage Grotesque","Noto Sans SC",sans-serif':'"DM Sans","Noto Sans SC",sans-serif';
    return <motion.div key={i} className={e.role==='page-number'?'slide-page-number':''} data-element={i} data-text="true" initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} transition={{duration:.25,delay:.06}} style={{...base,fontFamily:family,fontSize:e.fontSize,fontWeight:e.fontWeight,color:e.color,lineHeight:e.lineHeight,letterSpacing:e.letterSpacing,whiteSpace:'pre-wrap',textAlign:e.align as CSSProperties['textAlign']}}>{e.text}</motion.div>;
   })}
  </div>
 </Slide>;
}
