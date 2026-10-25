import { useEffect, useState, type CSSProperties } from 'react';
import { Slide, assetPath } from '../ui';
import { colors, fonts, radii } from '../../styles/theme';
import data from '../../data/authoritativeness-lesson.json';

type Section = {id:string;label:string;title:string;headers?:string[];rows?:string[][];records?:{title:string;text:string;label:string;url:string}[];takeaway:string};
const sections = data.sections as Section[];
const readSection = () => sections.find(s => s.id === new URLSearchParams(window.location.search).get('authority'))?.id || 'meaning';
const card: CSSProperties = {border:`2px solid ${colors.dark}`,borderRadius:radii.panel,background:colors.white,boxSizing:'border-box'};
export default function R52_Course(){
 const [view,setView]=useState(readSection);
 useEffect(()=>{const sync=()=>setView(readSection());window.addEventListener('popstate',sync);return()=>window.removeEventListener('popstate',sync);},[]);
 const select=(id:string)=>{setView(id);const url=new URL(window.location.href);if(id==='meaning')url.searchParams.delete('authority');else url.searchParams.set('authority',id);window.history.pushState({},'',url);};
 const section=sections.find(s=>s.id===view)!;
 return <Slide bg={colors.warmBg}><section className="authority-slide" style={{position:'relative',width:1600,height:900,fontFamily:fonts.body,color:colors.dark}}>
  <style>{`.authority-slide a:focus-visible,.authority-slide button:focus-visible{outline:4px solid ${colors.blue};outline-offset:4px}@media(max-width:700px){.deck-runtime:has(.authority-slide)>button{top:auto!important;bottom:20px;transform:none!important}}.deck-print .authority-slide nav,.deck-print-preview .authority-slide nav{display:none}`}</style>
  <header style={{position:'absolute',left:100,top:82,width:1400}}><span style={{fontSize:18,fontWeight:750,color:colors.red,letterSpacing:2}}>SEO / GEO · PART 05</span><h1 style={{fontSize:52,lineHeight:1.2,margin:'16px 0 14px',fontWeight:850}}>Authoritativeness：怎样获得领域认可</h1><p style={{fontSize:23,lineHeight:1.5,margin:0}}>{data.definition}</p></header>
  <nav aria-label="Authoritativeness lesson sections" style={{position:'absolute',left:100,top:245,display:'flex',gap:16}}>{sections.map(s=><button key={s.id} aria-pressed={s.id===view} onClick={()=>select(s.id)} style={{fontFamily:fonts.body,fontSize:22,fontWeight:750,border:`2px solid ${colors.dark}`,borderRadius:radii.card,padding:'11px 24px',background:s.id===view?colors.yellow:colors.white,color:colors.dark,cursor:'pointer'}}>{s.label}</button>)}</nav>
  <main style={{position:'absolute',left:100,top:322,width:1400}}>
   <h2 style={{fontSize:29,lineHeight:1.4,margin:'0 0 19px'}}>{section.title}</h2>
   {section.rows&&<table style={{...card,width:'100%',borderSpacing:0,overflow:'hidden',fontSize:22,lineHeight:1.45,tableLayout:'fixed'}}><thead><tr>{section.headers?.map((h,i)=><th key={h} style={{textAlign:'left',padding:'12px 20px',background:colors.dark,color:colors.white,width:i===0?'21%':i===1?'47%':'32%'}}>{h}</th>)}</tr></thead><tbody>{section.rows.map((row,i)=><tr key={row[0]} style={{background:i%2?colors.warmBg:colors.white}}>{row.map((cell,j)=><td key={j} style={{padding:'11px 20px',borderBottom:'1px solid #cbd0db',verticalAlign:'top',fontWeight:j===0?750:400}}>{cell}</td>)}</tr>)}</tbody></table>}
   {section.records&&<div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:26}}>{section.records.map((r,i)=><article key={r.url} style={{...card,padding:'23px 25px',height:334,borderTop:`8px solid ${[colors.blue,colors.yellow,colors.green][i]}`}}><span style={{fontSize:19,fontWeight:750,color:colors.red}}>0{i+1}</span><h3 style={{fontSize:28,margin:'13px 0'}}>{r.title}</h3><p style={{fontSize:23,lineHeight:1.6,margin:'0 0 18px'}}>{r.text}</p><a href={r.url} target="_blank" rel="noreferrer" style={{fontSize:19,fontWeight:750,color:colors.dark}}>{r.label} ↗</a></article>)}</div>}
  </main>
  <aside style={{position:'absolute',left:100,top:761,width:1400,padding:'14px 20px',boxSizing:'border-box',background:colors.white,borderLeft:`5px solid ${colors.red}`,borderRadius:radii.card,fontSize:22,lineHeight:1.5}}>{section.takeaway}</aside>
  <a href={assetPath('materials/authoritativeness.html')} target="_blank" rel="noreferrer" style={{position:'absolute',right:100,bottom:16,fontSize:18,fontWeight:750,color:colors.dark}}>完整讲义、个人简介写法与来源 ↗</a>
 </section></Slide>;
}
