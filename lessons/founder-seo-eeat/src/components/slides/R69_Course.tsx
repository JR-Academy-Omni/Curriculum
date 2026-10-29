import { useState, type CSSProperties } from 'react';
import { Slide } from '../ui';
import { colors, fonts, radii } from '../../styles/theme';
const source='https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/404';
const panel:CSSProperties={boxSizing:'border-box',border:`2px solid ${colors.dark}`,borderRadius:radii.panel,background:colors.white,padding:'24px 28px',height:306};
export default function R69_Course(){
 const [wrong,setWrong]=useState(false);
 return <Slide bg={colors.warmBg}><section className="citation-slide" style={{position:'relative',width:1600,height:900,color:colors.dark,fontFamily:fonts.body}}>
 <style>{`.citation-slide a:focus-visible,.citation-slide button:focus-visible{outline:4px solid ${colors.blue};outline-offset:4px}@media(max-width:700px){.deck-runtime:has(.citation-slide)>button{top:auto!important;bottom:20px;transform:none!important}}.deck-print .citation-slide nav,.deck-print-preview .citation-slide nav{display:none}`}</style>
 <header style={{position:'absolute',left:100,top:82,width:1400}}><span style={{fontSize:18,fontWeight:750,letterSpacing:2,color:colors.red}}>SEO / GEO · PART 07</span><h1 style={{fontSize:52,lineHeight:1.2,margin:'16px 0 14px',fontWeight:850}}>Citation：AI 回答里的来源链接</h1><p style={{fontSize:23,lineHeight:1.5,margin:0}}>Citation（引用来源）：回答旁的编号或链接，指向支持这句话的网页。读者可以点击它，回到原文核对。</p></header>
 <nav aria-label="Citation examples" style={{position:'absolute',left:100,top:245,display:'flex',gap:16}}>{[{value:false,label:'正确：原文支持这句话'},{value:true,label:'错误：有链接，原文却不支持'}].map(s=><button key={s.label} aria-pressed={wrong===s.value} onClick={()=>setWrong(s.value)} style={{fontFamily:fonts.body,fontSize:22,fontWeight:750,padding:'11px 24px',border:`2px solid ${colors.dark}`,borderRadius:radii.card,background:wrong===s.value?colors.yellow:colors.white,color:colors.dark,cursor:'pointer'}}>{s.label}</button>)}</nav>
 <div style={{position:'absolute',left:100,top:324,width:1400,padding:'14px 22px',boxSizing:'border-box',borderRadius:radii.card,background:colors.dark,color:colors.white,fontSize:27,fontWeight:750}}>用户提问：网页返回 404，是什么意思？</div>
 <main style={{position:'absolute',left:100,top:420,width:1400,display:'grid',gridTemplateColumns:'680px 680px',gap:40}}>
  <article style={{...panel,borderTop:`8px solid ${wrong?colors.red:colors.blue}`}}><span style={{fontSize:18,color:wrong?'#b52d2d':'#596074',fontWeight:750}}>{wrong?'错误引用示例':'回答示意 · 非实际搜索结果'}</span><h2 style={{fontSize:29,margin:'12px 0'}}>回答中的 [1] 指向哪里？</h2><p style={{fontSize:25,lineHeight:1.65,margin:'0 0 10px'}}>{wrong?'“404 表示 Google 已经处罚了这个网站。”':'404 表示服务器找不到请求的资源。'} <a href={source} target="_blank" rel="noreferrer" style={{color:'#2345a3',fontWeight:850}}>[1]</a></p><p style={{fontSize:23,lineHeight:1.6,margin:0}}>{wrong?'这条说法不受右侧文档支持：放上来源链接，并不能把错误判断变成事实。':'常见原因是 URL 拼错，或页面移动、删除后没有重定向。'}</p></article>
  <article style={{...panel,borderTop:`8px solid ${colors.green}`}}><span style={{fontSize:18,fontWeight:750,color:'#596074'}}>点击 [1] 后打开的真实来源</span><h2 style={{fontSize:29,margin:'12px 0'}}>MDN · 404 Not Found</h2><p style={{fontSize:23,lineHeight:1.6,margin:'0 0 13px'}}>文档解释：服务器找不到请求的资源。<br/>常见原因包括地址输入错误，以及页面被移动或删除后未设置重定向。</p><a href={source} target="_blank" rel="noreferrer" style={{fontSize:21,color:colors.dark,fontWeight:750}}>打开 MDN 原文，比较含义 ↗</a></article>
 </main>
 <section style={{position:'absolute',left:100,top:761,width:1400,boxSizing:'border-box',padding:'13px 20px',borderRadius:radii.card,background:colors.white,borderLeft:`5px solid ${colors.red}`,fontSize:22,lineHeight:1.5}}><strong>你的网站怎样准备：</strong>像右侧文档一样，先直接回答问题，再说明原因、步骤和适用条件。<br/><strong>观察 GEO：</strong>有来源链接才记 Citation；只出现品牌名字，记 Mention（品牌提及）。再核对链接是否支持那句话。</section>
 </section></Slide>;
}
