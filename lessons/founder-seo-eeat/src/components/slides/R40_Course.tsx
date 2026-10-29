import FIDDetail from '../FIDDetail';
import LCPDetail from '../LCPDetail';
import { useState, useEffect } from 'react';
import WebVitalsDetails from '../WebVitalsDetails';
import { Slide, assetPath } from '../ui';
import { colors, fonts, radii } from '../../styles/theme';
const ink=colors.dark;
const button={fontFamily:fonts.body,fontSize:21,fontWeight:750,padding:'10px 22px',border:`2px solid ${ink}`,borderRadius:radii.card,color:ink,cursor:'pointer'};
type Mode='overview'|'metrics'|'legacy'|'lcp'|'fid';
export default function R40_Course(){
 const read=():Mode=>{const v=new URLSearchParams(window.location.search).get('experience');return v==='metrics'||v==='legacy'||v==='lcp'||v==='fid'?v:'overview';};
 const [mode,setMode]=useState(read);
 useEffect(()=>{const sync=()=>setMode(read());window.addEventListener('popstate',sync);return()=>window.removeEventListener('popstate',sync);},[]);
 const select=(next:Mode)=>{setMode(next);const url=new URL(window.location.href);if(next==='overview')url.searchParams.delete('experience');else url.searchParams.set('experience',next);window.history.pushState({},'',url);};
 if(mode==='fid')return <FIDDetail showMetrics={()=>select('metrics')} showLCP={()=>select('lcp')}/>;
 if(mode==='lcp')return <LCPDetail showMetrics={()=>select('metrics')} showOverview={()=>select('overview')} showFID={()=>select('fid')}/>;
 if(mode==='metrics')return <WebVitalsDetails showOverview={()=>select('overview')} showLegacy={()=>select('legacy')} showLCP={()=>select('lcp')} showFID={()=>select('fid')}/>;
 return <Slide bg={colors.warmBg}><section className="page-experience-slide" style={{position:'relative',width:1600,height:900,fontFamily:fonts.body,color:ink}}>
 <style>{`.page-experience-slide button:focus-visible,.page-experience-slide a:focus-visible{outline:4px solid ${colors.blue};outline-offset:4px}@media(max-width:700px){.deck-runtime:has(.page-experience-slide)>button{top:auto!important;bottom:20px;transform:none!important}}`}</style>
 <header style={{position:'absolute',left:100,top:72,width:1400}}><span style={{fontSize:18,fontWeight:750,color:colors.red,letterSpacing:2}}>SEO / GEO · PART 04</span><h1 style={{fontSize:52,lineHeight:1.2,margin:'14px 0 12px'}}>{mode==='legacy'?'Page Experience：原图哪些需要更新？':'Page Experience：页面体验不只看 Site Speed'}</h1><p style={{fontSize:23,lineHeight:1.5,margin:0}}>{mode==='legacy'?'保留原图的整体思路；更新指标名称，并分清体验检查与搜索排名的关系。':'内容加载快、操作有响应、布局稳定，以及手机上易读、安全连接、内容不被遮挡。'}</p></header>
 <nav style={{position:'absolute',left:100,top:235,display:'flex',gap:16}}>{([['overview','01 · Page Experience'],['metrics','02 · LCP / INP / CLS'],['legacy','03 · 原图与更新']] as const).map(([value,label])=><button key={value} onClick={()=>select(value)} aria-pressed={mode===value} style={{...button,background:mode===value?colors.yellow:colors.white}}>{label}</button>)}</nav>
 {mode==='legacy'?<>
 <img src={assetPath('materials/page-experience-legacy-framework.png')} alt="历史页面体验框架：LCP、FID、CLS和手机适配、安全浏览、HTTPS、弹窗等指向页面体验，旁边讨论排名与内容关系" style={{position:'absolute',left:100,top:345,width:1000,height:430,objectFit:'contain',background:colors.white,borderRadius:radii.panel}}/>
 <aside style={{position:'absolute',left:1140,top:325,width:360,boxSizing:'border-box',border:`2px solid ${ink}`,borderRadius:radii.panel,background:colors.white,padding:'21px 24px'}}>{[['FID → INP','INP 已在2024年3月12日替代 FID（First Input Delay）。'],['不是一个总排名分','Google 没有单一的 Page Experience 排名信号。'],['不能把每个框都算排名因子','CWV被排名系统使用；其他体验检查不应逐一解释成直接加分项。'],['内容仍然关键','相关、能解决问题的内容，不能被一个漂亮的性能分数替代。']].map(([title,body],i)=><div key={title} style={{marginTop:i?18:0}}><strong style={{fontSize:23}}>{title}</strong><p style={{fontSize:20,lineHeight:1.45,margin:'6px 0 0'}}>{body}</p></div>)}</aside>
 </>:<>
 <section style={{position:'absolute',left:100,top:325,width:480,boxSizing:'border-box',border:`2px solid ${ink}`,borderRadius:radii.panel,background:colors.white,padding:'19px 22px',lineHeight:1.2}}><strong style={{fontSize:25}}>Core Web Vitals · 三项体验指标</strong>{[['LCP · Loading','Largest Contentful Paint','最大内容出现 · 良好 ≤ 2.5s'],['INP · Interactivity','Interaction to Next Paint','交互响应 · 良好 ≤ 200ms'],['CLS · Visual Stability','Cumulative Layout Shift','布局稳定 · 良好 ≤ 0.1']].map(([term,full,meaning],i)=><div key={term} style={{marginTop:10,padding:'8px 13px',borderRadius:radii.label,background:i===1?colors.yellow:colors.warmBg}}><strong style={{fontSize:22}}>{term}</strong><div style={{fontSize:17,margin:'3px 0'}}>{full}</div><div style={{fontSize:20}}>{meaning}</div></div>)}</section>
 <section style={{position:'absolute',left:100,top:705,width:480,boxSizing:'border-box',borderRadius:radii.card,background:colors.white,padding:'15px 20px',fontSize:20,lineHeight:1.45}}><strong style={{fontSize:22}}>其他体验检查</strong><div>Mobile usability · 手机易读、能操作</div><div>HTTPS · 安全连接</div><div>No intrusive interstitials · 弹窗不挡正文</div></section>
 <svg aria-hidden="true" style={{position:'absolute',left:580,top:325}} width="70" height="470"><defs><marker id="experience-arrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0 0L8 4L0 8Z" fill={ink}/></marker></defs><path d="M0 180H60" stroke={ink} strokeWidth="3" fill="none" markerEnd="url(#experience-arrow)"/><path d="M0 450H28V265H60" stroke={ink} strokeWidth="3" fill="none" markerEnd="url(#experience-arrow)"/></svg>
 <section style={{position:'absolute',left:650,top:445,width:310,boxSizing:'border-box',background:colors.blue,border:`2px solid ${ink}`,borderRadius:radii.panel,padding:'27px 22px',textAlign:'center'}}><strong style={{fontSize:30,lineHeight:1.2}}>Page Experience</strong><div style={{fontSize:30,fontWeight:800,margin:'7px 0 14px'}}>整体页面体验</div><p style={{fontSize:22,lineHeight:1.45,margin:0}}>让读者顺利阅读<br/>并完成页面上的任务</p></section>
 <aside style={{position:'absolute',left:1030,top:325,width:470,boxSizing:'border-box',background:colors.white,border:`2px solid ${ink}`,borderRadius:radii.panel,padding:'23px 26px'}}><h2 style={{fontSize:29,margin:'0 0 18px'}}>与 SEO 有什么关系？</h2>{[['CWV 会用于排名','但三项达标，不保证排在前面。'],['体验不是唯一条件','其他体验检查不等于逐项排名加分；Google 仍重视与查询相关的内容。'],['内容与体验都值得改','教程有完整步骤，也要让正文及时出现、手机上读得清、按钮能操作。']].map(([title,body],i)=><div key={title} style={{marginTop:i?23:0}}><strong style={{fontSize:24}}>{title}</strong><p style={{fontSize:22,lineHeight:1.45,margin:'8px 0 0'}}>{body}</p></div>)}</aside>
 </>}
 <footer style={{position:'absolute',left:100,right:100,bottom:16,display:'flex',justifyContent:'space-between',fontSize:17}}><span>{mode==='legacy'?'用户提供的历史图；右侧为现行概念更新。':'CWV良好阈值按真实用户数据的p75评估，手机与桌面分别统计；CLS为无单位分数。'}</span><a href="https://developers.google.com/search/docs/appearance/page-experience" target="_blank" rel="noreferrer" style={{color:ink,marginRight:mode==='legacy'?420:0}}>Google · Page Experience ↗</a></footer>
 </section></Slide>;
}
