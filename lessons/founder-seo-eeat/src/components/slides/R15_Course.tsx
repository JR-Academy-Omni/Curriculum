import MetaDescriptionLesson from '../MetaDescriptionLesson';
import { useState, useEffect, type CSSProperties } from 'react';
import { CourseSlide } from '../CourseSlide';
import { Slide, assetPath } from '../ui';
import { colors, fonts, radii } from '../../styles/theme';
const ink=colors.dark;
const control:CSSProperties={fontFamily:fonts.body,fontSize:21,fontWeight:750,padding:'10px 22px',border:`2px solid ${ink}`,borderRadius:radii.card,color:ink,cursor:'pointer'};
function TitleTag({showCode,showMeta}:{showCode:()=>void;showMeta:()=>void}){
 return <Slide bg={colors.warmBg}><section className="title-tag-slide" style={{width:1600,height:900,position:'relative',fontFamily:fonts.body,color:ink}}>
 <style>{`.title-tag-slide button:focus-visible,.title-tag-slide a:focus-visible{outline:4px solid ${colors.blue};outline-offset:4px}@media(max-width:700px){.deck-runtime:has(.title-tag-slide)>button{top:auto!important;bottom:20px;transform:none!important}}`}</style>
 <header style={{position:'absolute',left:100,top:72,width:1400}}><span style={{fontSize:18,fontWeight:750,color:colors.red,letterSpacing:2}}>SEO / GEO · PART 02</span><h1 style={{fontSize:52,lineHeight:1.2,margin:'14px 0 12px'}}>Title Tag：网页的名字，写在 &lt;title&gt; 里</h1><p style={{fontSize:24,lineHeight:1.5,margin:0}}>它位于 HTML 的 &lt;head&gt; 中；浏览器标签会使用它，搜索结果也可能参考它。</p></header>
 <nav style={{position:'absolute',left:100,top:235,display:'flex',gap:16}}><span style={{...control,background:colors.yellow}}>01 · Title Tag 是什么</span><button style={{...control,background:colors.white}} onClick={showMeta}>02 · Meta Description →</button><button style={{...control,background:colors.white}} onClick={showCode}>03 · HTML 代码对照 →</button></nav>
 <section style={{position:'absolute',left:100,top:325,width:625}}>
 <div style={{background:ink,color:colors.white,borderRadius:radii.panel,padding:'22px 25px'}}><strong style={{fontSize:22}}>HTML 写法 · 教学示例</strong><pre style={{fontFamily:fonts.mono,fontSize:20,lineHeight:1.45,whiteSpace:'pre-wrap',margin:'12px 0 0'}}><code>{`<head>\n  <title>咖啡机除垢指南｜Coffee Notes</title>\n</head>\n<body>\n  <h1>咖啡机除垢指南</h1>\n</body>`}</code></pre></div>
 <div style={{marginTop:22,display:'grid',gap:13}}>{[['写清具体主题','“咖啡机除垢指南”比“首页”更能说明内容。'],['每页有自己的 Title','除垢页、清洁页各写各的主题，别全站同名。'],['自然、简洁、与正文一致','可带简短品牌名；不堆关键词，不承诺页面没有的内容。']].map(([title,body],i)=><div key={title} style={{display:'flex',gap:14}}><b style={{background:colors.yellow,borderRadius:radii.label,padding:'2px 9px',fontSize:22,alignSelf:'flex-start'}}>{i+1}</b><div><strong style={{fontSize:23}}>{title}</strong><p style={{fontSize:21,lineHeight:1.4,margin:'5px 0 0'}}>{body}</p></div></div>)}</div>
 </section>
 <section style={{position:'absolute',left:775,top:325,width:725,display:'grid',gap:17}}>
 <figure style={{margin:0,background:colors.white,border:`2px solid ${ink}`,borderRadius:radii.panel,padding:'15px 18px'}}><figcaption style={{fontSize:22,fontWeight:750,marginBottom:10}}>① Search Title Link · 搜索结果里的可点击标题</figcaption><img src={assetPath('materials/title-link-property-example.png')} alt="历史房产搜索结果，紫框标出顶部可点击标题：1/17 Barilla Road, Moorabbin, Vic 3189 - Unit for Sale" style={{width:'100%',height:145,objectFit:'contain',display:'block'}}/><p style={{fontSize:18,lineHeight:1.4,margin:'9px 0 0'}}>紫框是 Title Link。Google 可参考 Title Tag、H1 等生成它；搜索截图不能证明原始源码写了什么。</p></figure>
 <article style={{background:colors.white,border:`2px solid ${ink}`,borderRadius:radii.card,overflow:'hidden'}}><div style={{background:colors.yellow,padding:'9px 17px',fontSize:20,fontWeight:750}}>② Browser tab · 浏览器标签（对应左侧代码）</div><div style={{padding:'14px 18px',fontSize:24}}>咖啡机除垢指南｜Coffee Notes <span style={{float:'right',fontSize:19}}>×</span></div></article>
 <article style={{background:colors.white,border:`2px solid ${ink}`,borderRadius:radii.card,padding:'13px 18px'}}><strong style={{fontSize:20}}>③ H1 · 打开网页后，正文里的主标题</strong><div style={{fontSize:29,fontWeight:800,marginTop:8}}>咖啡机除垢指南</div></article>
 </section>
 <footer style={{position:'absolute',left:100,right:100,bottom:16,display:'flex',justifyContent:'space-between',fontSize:17}}><a href="https://developers.google.com/search/docs/appearance/title-link" target="_blank" rel="noreferrer" style={{color:ink}}>Google · Title Links ↗</a></footer>
 </section></Slide>;
}
export default function R15_Course(){
 const read=():'title'|'code'|'description'=>{const v=new URLSearchParams(window.location.search).get('title');return v==='code'||v==='description'?v:'title';};
 const [mode,setMode]=useState(read);
 useEffect(()=>{const sync=()=>setMode(read());window.addEventListener('popstate',sync);return()=>window.removeEventListener('popstate',sync);},[]);
 const select=(value:'title'|'code'|'description')=>{setMode(value);const url=new URL(window.location.href);if(value==='title')url.searchParams.delete('title');else url.searchParams.set('title',value);window.history.pushState({},'',url);window.dispatchEvent(new Event('code-topic-change'));};
 if(mode==='description')return <MetaDescriptionLesson showTitle={()=>select('title')} showCode={()=>select('code')}/>;
 return mode==='code'?<div style={{position:'relative',width:1600,height:900}}><CourseSlide page={15}/><button onClick={()=>select('description')} style={{...control,position:'absolute',right:100,top:78,zIndex:3,background:colors.yellow}}>← Meta Description 图解</button></div>:<TitleTag showCode={()=>select('code')} showMeta={()=>select('description')}/>;
}
