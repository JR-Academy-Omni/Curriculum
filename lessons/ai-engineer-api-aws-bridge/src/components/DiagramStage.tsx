import { useEffect, useId, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { diagrams, type DNode, type Shape } from '../data/diagrams';
import { TechnologyMark, technologyForLabel } from './TechnologyLogos';
const color=(tone='sky')=>`var(--diagram-${tone}, var(--jc-${tone}-deep))`;
function Glyph({shape,w,h,tone,reject=false}:{shape:Shape;w:number;h:number;tone:string;reject?:boolean}){
 const stroke=color(tone),fill='var(--jc-canvas-pure)';const common={stroke,strokeWidth:2.5,fill,strokeLinejoin:'round' as const};
 if(shape==='browser')return <g><rect x="0" y="0" width={w} height={h} rx="16" {...common}/><path d={`M0 24 H${w}`} stroke={stroke}/>{[14,28,42].map(x=><circle key={x} cx={x} cy="12" r="3" fill={stroke}/>)}<rect x={w*.12} y={h*.4} width={w*.76} height={h*.14} rx="5" fill={`var(--jc-wash-${tone})`}/><path d={`M${w*.12} ${h*.68} H${w*.55}`} stroke={stroke} strokeWidth="3"/><rect x={w*.65} y={h*.63} width={w*.23} height={h*.19} rx="8" fill={`var(--jc-${tone})`}/></g>;
 if(shape==='server')return <g><rect width={w} height={h} rx="18" {...common}/>{[.14,.43,.72].map(y=><g key={y}><rect x={w*.08} y={h*y} width={w*.84} height={h*.17} rx="6" fill={`var(--jc-wash-${tone})`} stroke={stroke}/><circle cx={w*.79} cy={h*(y+.085)} r="3" fill={stroke}/></g>)}</g>;
 if(shape==='db')return <g {...common}><path d={`M0 ${h*.19} V${h*.8} C0 ${h*1.07} ${w} ${h*1.07} ${w} ${h*.8} V${h*.19}`} /><ellipse cx={w/2} cy={h*.19} rx={w/2} ry={h*.18}/><path d={`M0 ${h*.48} C0 ${h*.76} ${w} ${h*.76} ${w} ${h*.48}`} fill="none"/><path d={`M0 ${h*.7} C0 ${h*.98} ${w} ${h*.98} ${w} ${h*.7}`} fill="none"/></g>;
 if(shape==='cloud')return <path d={`M${w*.18} ${h*.9} C${-w*.04} ${h*.9} ${-w*.05} ${h*.3} ${w*.2} ${h*.34} C${w*.19} ${-h*.1} ${w*.65} ${-h*.14} ${w*.72} ${h*.29} C${w*1.05} ${h*.14} ${w*1.12} ${h*.9} ${w*.82} ${h*.9} Z`} {...common}/>;
 if(shape==='file')return <g {...common}><path d={`M16 0 H${w*.72} L${w} ${h*.25} V${h-14} Q${w} ${h} ${w-14} ${h} H16 Q0 ${h} 0 ${h-14} V16 Q0 0 16 0 Z`}/><path d={`M${w*.72} 0 V${h*.25} H${w}`} fill="none"/>{[.46,.64,.82].map(y=><path key={y} d={`M${w*.12} ${h*y} H${w*.84}`} fill="none"/>)}</g>;
 if(shape==='shield')return <g {...common}><path d={`M${w*.5} 0 L${w*.86} ${h*.16} V${h*.48} Q${w*.86} ${h*.82} ${w*.5} ${h} Q${w*.14} ${h*.82} ${w*.14} ${h*.48} V${h*.16} Z`}/><path d={reject?`M${w*.37} ${h*.34} L${w*.63} ${h*.64} M${w*.63} ${h*.34} L${w*.37} ${h*.64}`:`M${w*.35} ${h*.48} L${w*.46} ${h*.61} L${w*.67} ${h*.34}`} fill="none" strokeWidth="5"/></g>;
 if(shape==='key')return <g {...common}><circle cx={w*.22} cy={h*.44} r={Math.min(w*.19,h*.37)}/><circle cx={w*.22} cy={h*.44} r={Math.min(w*.075,h*.15)}/><path d={`M${w*.4} ${h*.44} H${w*.93} V${h*.75} H${w*.8} V${h*.58} H${w*.64} V${h*.75} H${w*.53} V${h*.44}`} fill="none" strokeWidth="5"/></g>;
 if(shape==='bucket')return <g {...common}><path d={`M${w*.08} ${h*.2} L${w*.17} ${h*.92} Q${w*.5} ${h*1.04} ${w*.83} ${h*.92} L${w*.92} ${h*.2}`} /><ellipse cx={w*.5} cy={h*.2} rx={w*.42} ry={h*.18}/><path d={`M${w*.25} ${h*.53} Q${w*.5} ${h*.72} ${w*.75} ${h*.53}`} fill="none"/></g>;
 if(shape==='container')return <g {...common}><rect width={w} height={h} rx="15" fill={`var(--jc-wash-${tone})`}/>{[.17,.34,.51,.68,.85].map(x=><path key={x} d={`M${w*x} 16 V${h-16}`} stroke={stroke} fill="none"/>)}</g>;
 if(shape==='function')return <g><rect width={w} height={h} rx="28" {...common}/><text x={w/2} y={h*.76} textAnchor="middle" fontSize={h*.8} fill={stroke}>λ</text></g>;
 return <rect width={w} height={h} rx="20" {...common} fill={`var(--jc-wash-${tone})`}/>;
}
function DiagramNode({node,stage,diagramId}:{node:DNode;stage:number;diagramId:number}){
 const {x,y,w,h,label,shape,step,tone='sky'}=node,active=stage>=step;const lines=label.split('\n');const below=shape!=='box';const technology=below?technologyForLabel(label,diagramId):undefined;const markSize=Math.min(w*.65,h*.68);
 return <g className="diagram-node" data-node-id={node.id} data-shape={shape} transform={`translate(${x} ${y})`}>
 <g className="diagram-symbol" style={{opacity:active?1:.42}}>{technology?<><Glyph shape={shape} w={w} h={h} tone={tone} reject={node.id==='deny'}/><rect x={w/2-markSize/2-5} y={h/2-markSize/2-5} width={markSize+10} height={markSize+10} rx="16" fill="var(--jc-canvas-pure)"/><TechnologyMark label={label} technology={technology} x={w/2-markSize/2} y={h/2-markSize/2} size={markSize}/></>:<Glyph shape={shape} w={w} h={h} tone={tone} reject={node.id==='deny'}/>}</g>
 {lines.map((line,i)=><text className="diagram-text" key={i} x={w/2} y={below?h+29+i*29:h/2-(lines.length-1)*15+8+i*30} textAnchor="middle" fontSize={below?24:25} fontWeight={i===0?700:400}>{line}</text>)}
 {active&&stage===step&&<rect className="diagram-highlight" x="-6" y="-6" width={w+12} height={h+12} rx="24" fill="none" stroke={`var(--jc-${tone})`} strokeWidth="3"/>}
 </g>
}
export default function DiagramStage({page}:{page:number}){
 const d=diagrams[page],reduced=useReducedMotion(),[stage,setStage]=useState(reduced?d.steps.length:0),[playing,setPlaying]=useState(!reduced),[run,setRun]=useState(0);const id=useId().replace(/:/g,'');
 useEffect(()=>{if(reduced){setPlaying(false);setStage(d.steps.length)}},[reduced,d.steps.length]);
 useEffect(()=>{if(!playing)return;if(stage>=d.steps.length){setPlaying(false);return}const timer=setTimeout(()=>setStage(s=>s+1),1400);return()=>clearTimeout(timer)},[stage,playing,d.steps.length,run]);
 const replay=()=>{setStage(reduced?d.steps.length:0);setRun(x=>x+1);setPlaying(!reduced)};
 return <div className="diagram-stage" data-diagram-page={page} data-stage={stage} data-max-stage={d.steps.length}>
 <svg viewBox="-15 -12 1430 455" role="img" aria-label={d.summary} className="diagram-svg">
 <title>{d.summary}</title><defs>{['sky','mint','sunshine','coral'].map(t=><marker id={`${id}-${t}`} key={t} viewBox="0 0 12 12" refX="10" refY="6" markerWidth="9" markerHeight="9" orient="auto-start-reverse"><path d="M2 2 L10 6 L2 10" fill="none" stroke={color(t)} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></marker>)}</defs>
 {d.frames?.map((f,i)=><g key={i}><rect x={f.x} y={f.y} width={f.w} height={f.h} rx="26" fill="none" stroke={color(f.tone)} strokeWidth="1.5" opacity=".75"/><text x={f.x+22} y={f.y+32} fontSize="23" fontWeight="700" className="diagram-text">{f.label}</text></g>)}
 {d.edges.map((edge,i)=><g key={i} className="diagram-relation"><motion.path className="diagram-edge" d={edge.d} fill="none" stroke={color(edge.tone)} strokeWidth={edge.support?2:3} strokeDasharray={edge.support?'7 7':undefined} markerEnd={edge.arrow===false?undefined:`url(#${id}-${edge.tone||'sky'})`} initial={false} animate={{pathLength:stage>=edge.step?1:0,opacity:stage>=edge.step?1:0}} transition={{duration:reduced?0:.65}}/>{edge.label&&<text x={edge.lx} y={edge.ly} textAnchor="middle" fontSize="23" className="diagram-text edge-label" style={{opacity:stage>=edge.step?1:0}}>{edge.label}</text>}
 {stage===edge.step&&playing&&!reduced&&edge.points&&<motion.circle key={`${run}-${i}-${stage}`} className="diagram-packet" r="7" fill={`var(--jc-${edge.tone||'sky'})`} initial={{cx:edge.points[0][0],cy:edge.points[0][1]}} animate={{cx:edge.points.map(p=>p[0]),cy:edge.points.map(p=>p[1])}} transition={{duration:1,ease:'linear'}}/>}</g>)}
 {d.nodes.map(node=><DiagramNode key={node.id} node={node} stage={stage} diagramId={page}/>)}
 {d.texts?.map((t,i)=><text key={i} x={t.x} y={t.y} fontSize={t.size||24} textAnchor={t.x<100?'start':'middle'} className="diagram-text">{t.text}</text>)}
 </svg>
 <div className="diagram-controls" onKeyDown={event=>{if([' ','ArrowLeft','ArrowRight','ArrowUp','ArrowDown'].includes(event.key))event.stopPropagation()}}>
 <span className="diagram-caption" aria-live="polite">{stage===0?'沿着图中的关系，看一次操作怎样完成。':d.steps[stage-1]}</span>
 <span className="diagram-step">{stage} / {d.steps.length}</span>
 <button type="button" onClick={()=>{if(stage===d.steps.length)replay();else setPlaying(v=>!v)}} aria-label={playing?'暂停动画':'播放动画'}>{playing?'暂停':'播放'}</button>
 <button type="button" disabled={stage>=d.steps.length} onClick={()=>{setPlaying(false);setStage(s=>Math.min(s+1,d.steps.length))}}>下一步</button>
 <button type="button" onClick={replay}>重播</button>
 </div><p className="diagram-print-summary">{d.summary}</p>
 </div>
}
