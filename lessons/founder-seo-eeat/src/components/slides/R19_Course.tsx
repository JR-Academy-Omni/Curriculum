import { useState, useEffect } from 'react';
import BadSEOPractices from '../BadSEOPractices';
import { Slide, assetPath } from '../ui';
import { colors, fonts, radii } from '../../styles/theme';
import examples from '../../data/link-examples.json';
import course from '../../data/course-v2.json';

function LinkAttributes({showBad}:{showBad:()=>void}) {
  const s = course.find(x=>x.id===19)!;
  return <Slide bg={colors.warmBg}>
    <section className="link-attributes-slide" style={{ position: 'relative', width: 1600, height: 900, fontFamily: fonts.body, color: colors.dark }}>
      <style>{`.link-attributes-slide a:focus-visible{outline:4px solid ${colors.blue};outline-offset:4px}@media(max-width:700px){.deck-runtime:has(.link-attributes-slide)>button{top:auto!important;bottom:20px;transform:none!important}}`}</style>
      <button onClick={showBad} style={{position:'absolute',right:100,top:78,zIndex:3,fontFamily:fonts.body,fontSize:20,padding:'10px 18px',background:colors.yellow,color:colors.dark,border:`2px solid ${colors.dark}`,borderRadius:radii.card,cursor:'pointer'}}>Bad SEO Practices →</button>
      <header style={{ position: 'absolute', left: 100, top: 82, width: 1400 }}>
        <span style={{ color: colors.red, fontSize: 18, fontWeight: 750, letterSpacing: 2 }}>SEO / GEO · PART 02</span>
        <h1 style={{ fontSize: 54, lineHeight: 1.2, margin: '16px 0 14px', fontWeight: 850 }}>{s.title}</h1>
        <p style={{ fontSize: 24, lineHeight: 1.5, margin: 0 }}>{s.sub}</p>
      </header>
      <div style={{ position: 'absolute', left: 100, top: 245, width: 1400 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '620px 1fr', gap: 30, marginBottom: 12, fontSize: 18, fontWeight: 750 }}><span>含义与适用场景</span><span>HTML 语法教学示例 · example.com 为示例域名</span></div>
        {examples.map((example, i) => <article key={example.value} style={{ display: 'grid', gridTemplateColumns: '620px 1fr', alignItems: 'center', gap: 30, borderTop: `1px solid ${colors.dark}`, padding: '14px 0', minHeight: 144, boxSizing: 'border-box' }}>
          <div style={{ display: 'flex', gap: 20, alignItems: 'flex-start' }}>
            <span style={{ display: 'grid', placeItems: 'center', width: 38, height: 38, flexShrink: 0, borderRadius: radii.label, background: colors.yellow, fontSize: 19, fontWeight: 800 }}>{i + 1}</span>
            <div><h2 style={{ fontFamily: fonts.mono, fontSize: 30, lineHeight: 1.2, margin: 0 }}>{example.value}</h2><div style={{ fontSize: 18, marginTop: 7 }}>{example.english}</div><p style={{ fontSize: 22, lineHeight: 1.45, margin: '8px 0 0', maxWidth: 550 }}>{example.meaning}</p></div>
          </div>
          <pre style={{ background: colors.dark, color: colors.white, borderRadius: radii.card, padding: '24px 22px', margin: 0, whiteSpace: 'pre-wrap', overflowWrap: 'anywhere', fontFamily: fonts.mono, fontSize: 19, lineHeight: 1.6 }}><code>{example.code}</code></pre>
        </article>)}
      </div>
      <aside style={{ position: 'absolute', left: 100, top: 754, width: 1400, borderLeft: `5px solid ${colors.red}`, borderRadius: radii.card, background: colors.white, boxSizing: 'border-box', padding: '14px 20px', fontSize: 21, lineHeight: 1.65 }}>
        <div><strong>读懂代码：</strong>href = 目标地址；anchor text = 可点击文字；rel = 链接关系。</div>
        <div><strong>注意：</strong>nofollow 是链接提示，不是 noindex（禁止索引）；普通编辑性引用通常无需特殊 rel。</div>
      </aside>
      <a href={assetPath('materials/seo-geo-glossary.html#rel')} target="_blank" rel="noreferrer" style={{ position: 'absolute', right: 100, bottom: 15, color: colors.dark, fontSize: 17, fontWeight: 750 }}>完整 English 术语表与代码说明 ↗</a>
    </section>
  </Slide>;
}

export default function R19_Course(){
 const read=():'links'|'stuffing'|'practices'=>{const v=new URLSearchParams(window.location.search).get('seo');return v==='stuffing'||v==='practices'?v:'links';};
 const [mode,setMode]=useState(read);
 useEffect(()=>{const sync=()=>setMode(read());window.addEventListener('popstate',sync);return()=>window.removeEventListener('popstate',sync);},[]);
 const select=(next:'links'|'stuffing'|'practices')=>{setMode(next);const url=new URL(window.location.href);if(next==='links')url.searchParams.delete('seo');else url.searchParams.set('seo',next);window.history.pushState({},'',url);};
 return mode==='links'?<LinkAttributes showBad={()=>select('stuffing')}/>:<BadSEOPractices mode={mode} onSelect={select}/>;
}
