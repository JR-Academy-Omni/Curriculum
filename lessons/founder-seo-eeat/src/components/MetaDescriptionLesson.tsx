import { Slide } from './ui';
import { colors, fonts, radii } from '../styles/theme';
const ink=colors.dark;
const description='查看咖啡机除垢前要核对的机型、材料和说明书，了解操作与清水冲洗时的注意事项。';
const button={fontFamily:fonts.body,fontSize:21,fontWeight:750,padding:'10px 22px',border:`2px solid ${ink}`,borderRadius:radii.card,color:ink,cursor:'pointer'};
export default function MetaDescriptionLesson({showTitle,showCode}:{showTitle:()=>void;showCode:()=>void}){
 return <Slide bg={colors.warmBg}><section className="meta-description-slide" style={{width:1600,height:900,position:'relative',fontFamily:fonts.body,color:ink}}>
 <style>{`.meta-description-slide button:focus-visible,.meta-description-slide a:focus-visible{outline:4px solid ${colors.blue};outline-offset:4px}@media(max-width:700px){.deck-runtime:has(.meta-description-slide)>button{top:auto!important;bottom:20px;transform:none!important}}`}</style>
 <header style={{position:'absolute',left:100,top:72,width:1400}}><span style={{fontSize:18,fontWeight:750,color:colors.red,letterSpacing:2}}>SEO / GEO · PART 02</span><h1 style={{fontSize:52,lineHeight:1.2,margin:'14px 0 12px'}}>Meta Description：用一段话概括这个网页</h1><p style={{fontSize:23,lineHeight:1.5,margin:0}}>写在 &lt;head&gt; 中，不会自动出现在正文；Google 有时会采用它生成搜索摘要。</p></header>
 <nav style={{position:'absolute',left:100,top:235,display:'flex',gap:15}}><button onClick={showTitle} style={{...button,background:colors.white}}>01 · Title Tag</button><span style={{...button,background:colors.yellow}}>02 · Meta Description</span><button onClick={showCode} style={{...button,background:colors.white}}>03 · HTML 代码对照 →</button></nav>
 <section style={{position:'absolute',left:100,top:315,width:630}}>
 <div style={{background:ink,color:colors.white,padding:'22px 25px',borderRadius:radii.panel}}><strong style={{fontSize:22}}>HTML 写法</strong><pre style={{fontFamily:fonts.mono,fontSize:20,lineHeight:1.5,whiteSpace:'pre-wrap',margin:'14px 0 0'}}><code>{`<head>\n  <meta name="description"\n    content="${description}" />\n</head>`}</code></pre></div>
 <article style={{marginTop:20,background:colors.white,border:`2px solid ${ink}`,borderRadius:radii.panel,padding:'20px 24px'}}><strong style={{fontSize:24}}>怎么写？说明这一页具体有什么</strong><p style={{fontSize:21,lineHeight:1.4,margin:'10px 0'}}><b style={{color:'#b52d2d'}}>差：</b>咖啡机，咖啡机除垢，清洁咖啡机，最好咖啡机。</p><p style={{fontSize:21,lineHeight:1.4,margin:'10px 0'}}><b>好：</b>{description}</p><div style={{borderTop:`1px solid ${ink}`,paddingTop:12,fontSize:20,lineHeight:1.4}}>各页写各自的内容；不用关键词清单，也不承诺正文里没有的信息。</div></article>
 </section>
 <section style={{position:'absolute',left:780,top:315,width:720}}>
 <div style={{fontSize:21,fontWeight:750,marginBottom:14}}>同一页面，两种可能的 Snippet（搜索示意）</div>
 {[['A · 采用 Meta Description 概括',description],['B · 按查询从正文提取','除垢前先查对应机型的说明书。清洁材料、程序设置和冲洗次数应遵循厂家要求。']].map(([label,snippet],i)=><article key={label} style={{background:colors.white,border:`2px solid ${ink}`,borderRadius:radii.panel,padding:'15px 20px',marginBottom:15}}><div style={{fontSize:21,fontWeight:750,marginBottom:10}}>{label}</div><div style={{fontSize:17}}>Coffee Notes · example.com/guides/descaling</div><div style={{fontSize:27,color:'#2345a3',fontWeight:750,margin:'9px 0'}}>咖啡机除垢指南｜Coffee Notes</div><div style={{border:`2px solid ${i===0?colors.red:colors.blue}`,borderRadius:radii.label,padding:'9px 12px',fontSize:20,lineHeight:1.4}}><b>Snippet：</b>{snippet}</div></article>)}
 </section>
 <footer style={{position:'absolute',left:100,right:100,bottom:16,display:'flex',justifyContent:'space-between',fontSize:17}}><span>描述不保证被采用；摘要可随查询变化，并按显示空间截断，没有统一的160字符硬上限。</span><a href="https://developers.google.com/search/docs/appearance/snippet" target="_blank" rel="noreferrer" style={{color:ink}}>Google · Snippets ↗</a></footer>
 </section></Slide>;
}
