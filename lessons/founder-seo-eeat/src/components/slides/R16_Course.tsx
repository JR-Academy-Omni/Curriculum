import type { CSSProperties } from 'react';
import { Slide } from '../ui';
import { colors, fonts, radii } from '../../styles/theme';

const ink = colors.dark;
const card: CSSProperties = { background: colors.white, border: `2px solid ${ink}`, borderRadius: radii.panel };
const headingCode = `<main>
  <h1>咖啡机除垢指南</h1>
  <h2>准备工作</h2>
  <h3>确认机型</h3>
  <p>先查看说明书。</p>
  <h3>准备清洁材料</h3>
  <h2>除垢步骤</h2>
  <h3>运行除垢程序</h3>
  <h3>清水冲洗</h3>
  <h2>常见问题</h2>
</main>`;
export default function R16_Course(){
 const chapters=[{title:'准备工作',children:['确认机型','准备清洁材料']},{title:'除垢步骤',children:['运行除垢程序','清水冲洗']},{title:'常见问题',children:[]}];
 return <Slide bg={colors.warmBg}><section className="heading-structure-slide" style={{position:'relative',width:1600,height:900,fontFamily:fonts.body,color:ink}}>
 <style>{`.heading-structure-slide button:focus-visible,.heading-structure-slide a:focus-visible,.paper-web-slide button:focus-visible{outline:4px solid ${colors.blue};outline-offset:4px}@media(max-width:700px){.deck-runtime:has(.heading-structure-slide)>button{top:auto!important;bottom:20px;transform:none!important}}.deck-print .heading-structure-slide nav,.deck-print-preview .heading-structure-slide nav{display:none}`}</style>
 <header style={{position:'absolute',left:100,top:82,width:1400}}><span style={{fontSize:18,fontWeight:750,color:colors.red,letterSpacing:2}}>SEO / GEO · PART 02</span><h1 style={{fontSize:52,lineHeight:1.2,margin:'16px 0 14px',fontWeight:850}}>Page Structure：H1、H2、H3 怎么组织</h1><p style={{fontSize:23,lineHeight:1.5,margin:0}}>H1 是文章主题，H2 是章节，H3 是该章节下的小节；标题层级表达内容关系，字号由 CSS 控制。</p></header>
 <nav style={{position:'absolute',left:100,top:245,display:'flex',gap:16}}><span style={{fontSize:22,fontWeight:750,padding:'11px 24px',background:colors.yellow,border:`2px solid ${ink}`,borderRadius:radii.card}}>01 · 标题层级与 HTML</span><a href="?page=17" style={{fontFamily:fonts.body,fontSize:22,fontWeight:750,padding:'11px 24px',background:colors.white,border:`2px solid ${ink}`,borderRadius:radii.card,color:ink,cursor:'pointer',textDecoration:'none'}}>Website vs 论文 · 下一页 →</a></nav>
 <main style={{position:'absolute',left:100,top:325,width:1400,display:'grid',gridTemplateColumns:'680px 680px',gap:40}}>
 <section style={{...card,padding:'23px 28px',boxSizing:'border-box',height:440}} aria-label="H1 H2 H3 标题树">
  <div style={{fontSize:25,fontWeight:800,padding:'8px 14px',borderRadius:radii.label,background:colors.yellow}}><span style={{marginRight:20}}>H1</span>咖啡机除垢指南</div>
  <div style={{marginLeft:20,paddingLeft:24,borderLeft:`3px solid ${ink}`,marginTop:12}}>{chapters.map(ch=><div key={ch.title} style={{marginBottom:11}}><div style={{fontSize:23,fontWeight:750}}><span style={{color:'#b52d2d',marginRight:18}}>H2</span>{ch.title}</div>{ch.children.length>0&&<div style={{marginLeft:17,paddingLeft:24,borderLeft:`2px solid ${ink}`,marginTop:7}}>{ch.children.map(child=><div key={child} style={{fontSize:21,lineHeight:1.6}}><span style={{fontWeight:750,color:'#2345a3',marginRight:16}}>H3</span>{child}</div>)}</div>}</div>)}</div>
 </section>
 <pre style={{boxSizing:'border-box',height:440,margin:0,padding:'24px 28px',background:ink,color:colors.white,borderRadius:radii.panel,fontSize:20,lineHeight:1.5,fontFamily:fonts.mono,whiteSpace:'pre-wrap'}}><code>{headingCode}</code></pre>
 </main>
 <aside style={{position:'absolute',left:100,top:775,width:1400,boxSizing:'border-box',padding:'13px 20px',borderRadius:radii.card,background:colors.white,borderLeft:`5px solid ${colors.red}`,fontSize:21,lineHeight:1.5}}>同级章节用同级标题；H3 属于前面的 H2。正文用 &lt;p&gt;，字号用 CSS。通常一个 H1，进入小节不跳级。</aside>
 <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/Heading_Elements" target="_blank" rel="noreferrer" style={{position:'absolute',right:100,bottom:16,fontSize:17,color:ink,fontWeight:750}}>MDN · HTML Headings ↗</a>
 </section></Slide>;
}
