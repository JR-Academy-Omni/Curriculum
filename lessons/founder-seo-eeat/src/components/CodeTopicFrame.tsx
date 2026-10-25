import { useEffect, useState, type ReactNode } from 'react';
import { colors, fonts, radii } from '../styles/theme';
const topics=[
 {id:'structure',label:'Site Structure & URL',zh:'网站结构与网址',href:'?page=20&site=structure',page:18},
 {id:'canonical',label:'Canonical Link',zh:'首选网址',href:'?page=32',page:30},
 {id:'title',label:'Title Tag',zh:'网页标题',href:'?page=15',page:15},
 {id:'description',label:'Meta Description',zh:'网页描述',href:'?page=15&title=description',page:15},
 {id:'schema',label:'Schema',zh:'结构化数据',href:'?page=34',page:32},
 {id:'headings',label:'Headings',zh:'H1 / H2 / H3',href:'?page=16',page:16},
 {id:'images',label:'Images',zh:'图片与 alt text',href:'?page=19',page:17},
];
export default function CodeTopicFrame({page,children}:{page:number;children:ReactNode}){
 const read=()=>page===15&&new URLSearchParams(window.location.search).get('title')==='description'?'description':topics.find(x=>x.page===page)?.id??'title';
 const [active,setActive]=useState(read);
 useEffect(()=>{const sync=()=>setActive(read());window.addEventListener('popstate',sync);window.addEventListener('code-topic-change',sync);sync();return()=>{window.removeEventListener('popstate',sync);window.removeEventListener('code-topic-change',sync);};},[page]);
 const index=topics.findIndex(x=>x.id===active);
 return <div className="code-topic-frame" style={{width:1600,height:900,position:'relative',background:colors.warmBg,color:colors.dark,fontFamily:fonts.body}}>
 <style>{`.code-topic-rail a:focus-visible{outline:4px solid ${colors.blue};outline-offset:4px}.code-topic-rail a:hover{background:${colors.yellow}!important}.code-topic-rail a{box-sizing:border-box;text-decoration:none;color:${colors.dark}}.deck-runtime:has(.code-topic-frame)>button{top:auto!important;bottom:20px;transform:none!important}`}</style>
 <aside className="code-topic-rail" aria-label="Code 七步讲解路线" style={{position:'absolute',left:32,top:90,width:230,zIndex:4}}>
 <div style={{fontSize:16,fontWeight:750,color:colors.red,letterSpacing:2}}>CODE · 页面基础</div>
 <div style={{fontSize:26,fontWeight:800,margin:'10px 0 7px'}}>逐项看懂网页</div>
 <div style={{fontSize:18,marginBottom:20}}>第 {index+1} 步 / 7</div>
 <nav style={{display:'grid',gap:9}}>{topics.map((topic,i)=><a key={topic.id} href={topic.href} aria-current={active===topic.id?'step':undefined} style={{display:'flex',gap:10,alignItems:'center',padding:'10px 11px',minHeight:64,border:`${active===topic.id?3:1}px solid ${colors.dark}`,borderRadius:radii.card,background:active===topic.id?colors.yellow:colors.white,boxShadow:active===topic.id?`4px 4px 0 ${colors.dark}`:'none'}}><span style={{fontSize:18,fontWeight:800,width:20,flexShrink:0}}>{i+1}</span><span><strong style={{display:'block',fontSize:18,lineHeight:1.25}}>{topic.label}</strong><span style={{display:'block',fontSize:16,marginTop:4}}>{topic.zh}</span></span>{active===topic.id&&<span aria-hidden="true" style={{marginLeft:'auto',fontSize:23}}>→</span>}</a>)}</nav>
 <div style={{display:'flex',gap:13,justifyContent:'space-between',marginTop:18,fontSize:18,fontWeight:750}}>{index>0?<a href={topics[index-1].href}>← 上一步</a>:<span style={{opacity:0.4}}>← 上一步</span>}{index<topics.length-1?<a href={topics[index+1].href}>下一步 →</a>:<span style={{opacity:0.4}}>下一步 →</span>}</div>
 </aside>
 <div className="code-topic-content" style={{position:'absolute',left:220,top:63,width:1600,height:900,transform:'scale(0.86)',transformOrigin:'top left'}}>{children}</div>
 </div>;
}
