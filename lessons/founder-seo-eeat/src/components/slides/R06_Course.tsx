import { useEffect, useState, type CSSProperties } from 'react';
import { Slide } from '../ui';
import { colors, fonts, radii } from '../../styles/theme';
import CourseTerms from '../CourseTerms';
import course from '../../data/course-v2.json';
const content=course.find(s=>s.id===6)!;
const box:CSSProperties={boxSizing:'border-box',border:`2px solid ${colors.dark}`,borderRadius:radii.panel,background:colors.white};
const readView=()=>new URLSearchParams(window.location.search).get('search')==='compare'?'compare':'serp';
export default function R06_Course(){
 const [view,setView]=useState(readView);
 useEffect(()=>{const sync=()=>setView(readView());window.addEventListener('popstate',sync);return()=>window.removeEventListener('popstate',sync);},[]);
 const select=(next:'serp'|'compare')=>{setView(next);const url=new URL(window.location.href);if(next==='serp')url.searchParams.delete('search');else url.searchParams.set('search',next);window.history.pushState({},'',url);};
 return <Slide bg={colors.warmBg}><section className="course-v2 search-elements-slide" style={{fontFamily:fonts.body,color:colors.dark}}>
 <style>{`.search-elements-slide a:focus-visible,.search-elements-slide button:focus-visible{outline:4px solid ${colors.blue};outline-offset:4px}.deck-print .search-elements-slide nav,.deck-print-preview .search-elements-slide nav{display:none}`}</style>
 <header style={{top:82}}><span className="course-kicker">SEO / GEO · PART 01</span><h1 style={{fontSize:50,lineHeight:1.2}}>{view==='serp'?'Search 的组成：Paid Search 与 Organic Search':content.title}</h1><p style={{fontSize:23,lineHeight:1.5}}>{view==='serp'?'SERP = Search Engine Results Page（搜索结果页）。先辨认广告结果与自然结果，再区分 SEM 和 SEO。':content.sub}</p></header>
 <nav aria-label="Search lesson sections" style={{position:'absolute',left:100,top:245,display:'flex',gap:16}}>{[{id:'serp',label:'01 · 搜索结果页怎么看'},{id:'compare',label:'02 · SEO vs SEM 怎么做'}].map(s=><button key={s.id} aria-pressed={view===s.id} onClick={()=>select(s.id as 'serp'|'compare')} style={{fontSize:22,fontWeight:750,padding:'11px 24px',background:view===s.id?colors.yellow:colors.white,color:colors.dark}}>{s.label}</button>)}</nav>
 <main style={{top:325,height:460}}>
 {view==='serp'?<div style={{display:'grid',gridTemplateColumns:'600px 760px',gap:40}}>
  <section style={{...box,padding:18,height:480}} aria-label="SERP结构示意">
   <div style={{fontSize:17,fontWeight:750,color:'#596074',marginBottom:10}}>SERP 结构示意 · 非实时搜索截图</div>
   <div style={{border:`2px solid ${colors.dark}`,borderRadius:radii.pill,padding:'10px 18px',fontSize:23,marginBottom:14}}>⌕　咖啡机除垢</div>
   <div style={{background:colors.warmBg,borderLeft:`7px solid ${colors.red}`,borderRadius:radii.card,padding:'13px 18px',marginBottom:13}}>
    <strong style={{display:'block',fontSize:24,color:'#b52d2d'}}>Paid Search · 付费搜索</strong>
    <div style={{fontSize:16,fontWeight:750,margin:'5px 0'}}>Sponsored · 广告　|　示例清洁用品店</div>
    <div style={{fontSize:23,color:'#2345a3',fontWeight:750}}>咖啡机清洁剂 · 查看适用机型</div>
    <div style={{fontSize:18,marginTop:4}}>商品介绍、使用条件与购买入口</div>
   </div>
   <div style={{background:colors.white,border:`2px solid ${colors.green}`,borderLeft:`7px solid ${colors.green}`,borderRadius:radii.card,padding:'13px 18px'}}>
    <strong style={{display:'block',fontSize:24}}>Organic Search · 自然搜索</strong>
    <div style={{fontSize:16,margin:'5px 0'}}>示例咖啡知识站　|　example.com/descaling</div>
    <div style={{fontSize:23,color:'#2345a3',fontWeight:750}}>咖啡机怎样除垢：步骤与注意事项</div>
    <div style={{fontSize:18,marginTop:4}}>准备材料 → 操作步骤 → 适用条件</div>
   </div>
  </section>
  <div style={{display:'grid',gap:18,gridTemplateRows:'190px 170px 64px'}}>
   <article style={{...box,borderTop:`7px solid ${colors.red}`,padding:'18px 24px'}}><h2 style={{fontSize:29,margin:'0 0 8px'}}>Paid Search → SEM / Search Ads</h2><p style={{fontSize:22,lineHeight:1.5,margin:0}}>通过广告投放获得展示，通常带 Sponsored / 广告标识。<br/>常见 PPC（Pay-per-click，按点击付费）；展示取决于竞价、质量、预算与投放条件。</p></article>
   <article style={{...box,borderTop:`7px solid ${colors.green}`,padding:'18px 24px'}}><h2 style={{fontSize:29,margin:'0 0 8px'}}>Organic Search → SEO</h2><p style={{fontSize:22,lineHeight:1.5,margin:0}}>由搜索系统选择的自然结果，不向搜索引擎支付逐次点击费。<br/>需要持续投入内容、技术与维护；展示和排名会变化。</p></article>
   <div style={{fontSize:20,lineHeight:1.5,color:'#596074'}}>还可能出现 Images、Videos、地图或 AI 回答等模块；位置与样式随查询、地区和设备变化。</div>
  </div>
 </div>:<><table className="course-table" style={{fontSize:21,lineHeight:1.45}}><thead><tr>{content.rows?.[0].map((h,i)=><th key={h} style={{width:i===0?'18%':'41%',padding:'10px 18px'}}>{h}</th>)}</tr></thead><tbody>{content.rows?.slice(1).map(row=><tr key={row[0]}>{row.map((cell,i)=><td key={i} style={{padding:'9px 18px'}}>{cell}</td>)}</tr>)}</tbody></table><section style={{marginTop:18,padding:'13px 20px',borderRadius:radii.card,background:colors.white,borderLeft:`5px solid ${colors.red}`}}><strong style={{fontSize:18,color:'#b52d2d'}}>{content.exampleLabel}</strong><p style={{fontSize:21,lineHeight:1.5,margin:'6px 0 0'}}>{content.example}</p></section></>}
 </main>
 <CourseTerms page={6}/>
 </section></Slide>;
}
