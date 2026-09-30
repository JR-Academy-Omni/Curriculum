import { motion } from 'framer-motion';
import { Slide, assetPath } from './ui';
import content from '../data/deck.json';
import type { CSSProperties } from 'react';

interface Element {
  type:string; x:number; y:number; w:number; h:number; text?:string;
  fontSize?:number; color?:string; fontFamily?:string; fontWeight?:number;
  lineHeight?:number; align?:string; url?:string; fill?:string;
  stroke?:string; strokeWidth?:number; shadow?:string; src?:string;
}
export default function DeckSlide({id}:{id:string}) {
  const data=content.slides.find(s=>s.id===id)!;
  return <Slide bg={data.background} style={{position:'relative'}}>
    <div data-slide-id={id} style={{width:1600,height:900,position:'relative'}}>
      {(data.elements as Element[]).map((e,i)=>{
        const base:CSSProperties={position:'absolute',left:e.x,top:e.y,width:e.w,height:e.h};
        if(e.type==='image')return <img key={i} data-element={i} src={assetPath(e.src!)} alt={e.src?.replace(/\.(png|jpg|svg|webp)$/,'')||''} style={{...base,objectFit:'contain'}}/>;
        if(e.type==='rect')return <div key={i} data-element={i} style={{...base,background:e.fill,border:e.stroke?`${e.strokeWidth||3}px solid ${e.stroke}`:undefined,boxShadow:e.shadow}}/>;
        const style:CSSProperties={...base,fontFamily:'"Bricolage Grotesque", "DM Sans", "Noto Sans SC", "PingFang SC", sans-serif',fontSize:e.fontSize,fontWeight:e.fontWeight,color:e.color,lineHeight:e.lineHeight,whiteSpace:'pre-wrap',textAlign:e.align as CSSProperties['textAlign'],overflowWrap:'normal',textDecoration:e.url?'underline':'none'};
        return <motion.div key={i} data-element={i} initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{duration:.28,delay:.05}} style={style}>{e.url?<a href={e.url} target="_blank" rel="noreferrer" style={{color:'inherit'}}>{e.text}</a>:e.text}</motion.div>;
      })}
    </div>
  </Slide>;
}
