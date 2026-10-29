import { type CSSProperties } from 'react';
import { Slide } from '../ui';
import { colors, fonts, radii } from '../../styles/theme';
import data from '../../data/authority-metrics.json';

const panel: CSSProperties = { border: `2px solid ${colors.dark}`, borderRadius: radii.panel, background: colors.white, boxSizing: 'border-box' };

export default function R16c_AuthorityMetrics() {
 return <Slide bg={colors.warmBg}><section className="authority-metrics-slide" style={{position:'relative',width:1600,height:900,fontFamily:fonts.body,color:colors.dark}}>
  <style>{`.authority-metrics-slide a:focus-visible{outline:4px solid ${colors.blue};outline-offset:4px}`}</style>
  <header style={{position:'absolute',left:100,top:65,width:1400}}>
   <span style={{fontSize:18,fontWeight:750,color:colors.red,letterSpacing:2}}>SEO · DOMAIN & PAGE</span>
   <h1 style={{fontSize:49,lineHeight:1.2,margin:'15px 0 12px',fontWeight:850}}>Domain Authority（DA）vs Page Authority（PA）</h1>
   <p style={{fontSize:24,lineHeight:1.5,margin:0}}>Moz 的第三方预测指标：DA 看整个域名，PA 看一篇文章所在的具体 URL。</p>
  </header>
  <main style={{position:'absolute',left:100,top:247,width:1400}}>
   <table style={{...panel,width:'100%',borderSpacing:0,overflow:'hidden',fontSize:22,lineHeight:1.45,tableLayout:'fixed'}}>
    <thead><tr>{data.headers.map((h,i)=><th key={h} style={{textAlign:'left',padding:'14px 20px',background:colors.dark,color:colors.white,width:i===0?'16%':'42%'}}>{h}</th>)}</tr></thead>
    <tbody>{data.rows.map((row,i)=><tr key={row[0]} style={{background:i%2?colors.warmBg:colors.white}}>{row.map((cell,j)=><td key={j} style={{padding:'13px 20px',borderBottom:'1px solid #cbd0db',verticalAlign:'top',fontWeight:j===0?750:400}}>{cell}</td>)}</tr>)}</tbody>
   </table>
   <div style={{display:'flex',alignItems:'center',gap:25,marginTop:24}}>
    <div style={{...panel,width:352,padding:'17px 24px',background:colors.yellow}}><div style={{fontSize:18,fontWeight:750}}>虚构数字示例 · 整个域名</div><div style={{fontSize:28,fontWeight:850,marginTop:7}}>example.com · DA 40</div></div>
    <span aria-hidden="true" style={{fontSize:36}}>→</span>
    <div style={{...panel,flex:1,padding:'17px 25px'}}><div style={{display:'flex',justifyContent:'space-between',fontSize:28,fontWeight:850}}><span>/guide · PA 35</span><span>/new · PA 8</span></div><p style={{fontSize:20,margin:'7px 0 0'}}>同一个网站里，不同页面的 PA 可以不同。</p></div>
   </div>
  </main>
  <aside style={{position:'absolute',left:100,top:788,width:1400,padding:'12px 20px',boxSizing:'border-box',background:colors.white,borderLeft:`5px solid ${colors.red}`,borderRadius:radii.card,fontSize:23,lineHeight:1.5,fontWeight:750}}>DA / PA 不是 Google 官方评分，也不等于 E-E-A-T 的 Authoritativeness；分数高不保证排名高。</aside>
  <div style={{position:'absolute',right:100,bottom:16,display:'flex',gap:25,fontSize:17}}><a href={data.links.da} target="_blank" rel="noreferrer" style={{color:colors.dark}}>Moz · Authority Scoring Guide ↗</a><a href={data.links.pa} target="_blank" rel="noreferrer" style={{color:colors.dark}}>Moz · Page Authority ↗</a></div>
 </section></Slide>;
}
