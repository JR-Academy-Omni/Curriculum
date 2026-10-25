import type { CSSProperties, ReactNode } from 'react';
import { Slide, assetPath } from '../ui';
import { colors, fonts, radii } from '../../styles/theme';

const ink = colors.dark;
const panel: CSSProperties = { border: `2px solid ${ink}`, borderRadius: radii.panel, background: colors.white };
const tiny: CSSProperties = { fontSize: 17, fontWeight: 700, letterSpacing: 2 };
function WindowBar({ children }: { children: ReactNode }) {
  return <div style={{ display: 'flex', alignItems: 'center', gap: 8, borderBottom: `2px solid ${ink}`, padding: '15px 20px' }}>
    {[0, 1, 2].map(i => <span key={i} style={{ width: 9, height: 9, borderRadius: 9, background: ink, opacity: .25 + i * .2 }} />)}
    <span style={{ ...tiny, marginLeft: 12, fontSize: 15 }}>{children}</span>
  </div>;
}

export default function R01_Course() {
  return <Slide bg={colors.warmBg}>
    <section className="founder-seo-cover" aria-label="AI时代的SEO GEO基础与实战封面" style={{ width: 1600, height: 900, position: 'relative', fontFamily: fonts.body, color: ink, overflow: 'hidden' }}>
      <style>{`.founder-seo-cover a:focus-visible{outline:5px solid ${colors.blue};outline-offset:6px}.founder-seo-cover a:hover{transform:translateY(-3px)}.founder-seo-cover a{transition:transform .18s}@media(max-width:700px){.deck-runtime:has(.founder-seo-cover)>button{top:auto!important;bottom:20px;transform:none!important}}@media(prefers-reduced-motion:reduce){.founder-seo-cover a{transition:none}}`}</style>
      <div aria-hidden="true" style={{ position: 'absolute', width: 610, height: 610, borderRadius: 610, background: colors.yellow, right: -140, top: -200, opacity: .5 }} />
      <div style={{ position: 'absolute', top: 80, left: 90, display: 'flex', alignItems: 'center', gap: 20 }}>
        <span style={{ ...tiny, color: colors.white, background: ink, borderRadius: radii.pill, padding: '10px 22px' }}>AI 创业营 · 专题实战</span>
        <span style={{ ...tiny, fontFamily: fonts.mono, letterSpacing: 1 }}>SEARCH / CONTENT / TRUST</span>
      </div>
      <div style={{ position: 'absolute', left: 90, top: 165, width: 790 }}>
        <div aria-hidden="true" style={{ width: 68, height: 9, borderRadius: 9, background: colors.red, marginBottom: 23 }} />
        <h1 style={{ fontFamily: fonts.heading, fontSize: 112, fontWeight: 900, letterSpacing: -6, lineHeight: 1.08, margin: 0, whiteSpace: 'nowrap' }}>
          SEO <span style={{ color: colors.red, fontWeight: 500 }}>×</span> GEO
        </h1>
        <h2 style={{ fontSize: 50, letterSpacing: -2, lineHeight: 1.3, fontWeight: 850, margin: '18px 0 18px' }}>AI时代的搜索优化<br /><span style={{ boxShadow: `inset 0 -17px ${colors.yellow}` }}>基础与实战</span></h2>
        <p style={{ fontSize: 23, lineHeight: 1.65, margin: 0 }}>从用户问题出发，完成内容、技术与可信度优化。<br />再理解 AI 搜索中的可见性与验证方法。</p>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 22 }}>
          <span style={{ width: 44, height: 44, borderRadius: 44, background: ink, color: colors.yellow, display: 'grid', placeItems: 'center', fontFamily: fonts.heading, fontWeight: 850, fontSize: 25 }}>L</span>
          <strong style={{ fontSize: 25 }}>Lightman</strong><span style={{ fontSize: 20 }}>· JR Academy</span>
        </div>
        <div style={{ display: 'flex', gap: 18, marginTop: 22 }}>
          <a href={assetPath('materials/course-workbook.html')} target="_blank" rel="noreferrer" style={{ ...panel, display: 'inline-flex', alignItems: 'center', gap: 22, background: ink, color: colors.white, padding: '17px 25px', fontSize: 23, fontWeight: 750, textDecoration: 'none', boxShadow: `5px 5px 0 ${colors.red}`, borderRadius: radii.card }}>先看完整成果示例 <span>↗</span></a>
          <a href="?page=2" style={{ ...panel, padding: '17px 25px', fontSize: 23, fontWeight: 750, color: ink, textDecoration: 'none', borderRadius: radii.card }}>开始上课 →</a>
        </div>
      </div>
      <div style={{ position: 'absolute', left: 920, top: 125, width: 560, height: 510 }}>
        <div style={{ ...tiny, fontFamily: fonts.mono, marginBottom: 16 }}>TWO WAYS TO BE DISCOVERED</div>
        <article style={{ ...panel, width: 475, boxShadow: `8px 8px 0 ${ink}` }}>
          <WindowBar>01 / 搜索中的页面</WindowBar>
          <div style={{ padding: '20px 25px 24px' }}>
            <div style={{ background: colors.warmBg, borderRadius: radii.pill, padding: '13px 18px', fontSize: 21, display: 'flex', alignItems: 'center', gap: 14 }}><span style={{ fontSize: 25 }}>⌕</span> 用户想解决什么问题？</div>
            <div style={{ marginTop: 20, display: 'flex', gap: 12, alignItems: 'center' }}><span style={{ width: 20, height: 20, borderRadius: 20, background: colors.red }} /><span style={{ fontSize: 16 }}>你的页面 · 内容与技术</span></div>
            <h3 style={{ fontSize: 28, margin: '12px 0 10px' }}>给出可执行的完整方法</h3>
            <p style={{ fontSize: 20, lineHeight: 1.5, margin: 0 }}>问题 → 步骤 → 依据 → 下一步</p>
          </div>
        </article>
        <div aria-hidden="true" style={{ position: 'absolute', top: 305, left: 18, fontSize: 55, color: colors.red }}>↳</div>
        <article style={{ ...panel, position: 'absolute', top: 350, left: 80, width: 475, boxShadow: `8px 8px 0 ${colors.red}` }}>
          <WindowBar>02 / AI 搜索中的信息</WindowBar>
          <div style={{ padding: '16px 25px 20px' }}>
            <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}><span style={{ fontSize: 32, color: colors.red }}>✦</span><strong style={{ fontSize: 26 }}>让信息清楚、有依据</strong></div>
            <p style={{ fontSize: 20, lineHeight: 1.5, margin: '10px 0 12px' }}>可读取的正文 · 明确的作者<br />可追查的来源 · 持续的核对</p>
            <span style={{ background: colors.yellow, borderRadius: radii.label, padding: '7px 12px', fontSize: 17, display: 'inline-block' }}>教学结构示意 · 不代表实际排名或引用</span>
          </div>
        </article>
      </div>
      <div style={{ position: 'absolute', left: 90, right: 90, top: 742, borderTop: `2px solid ${ink}`, paddingTop: 24, display: 'flex', alignItems: 'center', gap: 35 }}>
        <div style={{ width: 200 }}><span style={{ ...tiny, color: ink }}>本课练习成果</span><div style={{ fontSize: 16, marginTop: 8 }}>已有完整教学示例可打开</div></div>
        {['页面检查记录', '内容修改简报', '个人网站计划', 'GEO 观察表'].map((label, i) => <div key={label} style={{ display: 'flex', gap: 13, alignItems: 'center', width: 245 }}><span style={{ fontFamily: fonts.mono, color: colors.red, fontSize: 19 }}>0{i + 1}</span><strong style={{ fontSize: 23 }}>{label}</strong></div>)}
      </div>
      <div style={{ position: 'absolute', left: 90, bottom: 27, fontFamily: fonts.mono, fontSize: 14, letterSpacing: 2 }}>JR ACADEMY · LEARN / BUILD / VERIFY</div>
    </section>
  </Slide>;
}
