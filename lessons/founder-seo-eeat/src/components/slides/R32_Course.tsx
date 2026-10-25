import { useEffect, useState, type CSSProperties } from 'react';
import { Slide, assetPath } from '../ui';
import { colors, fonts, radii } from '../../styles/theme';
import lesson from '../../data/structured-data-lesson.json';

type View = 'shopping' | 'concepts' | 'types';
const readView = (): View => {
  const v = new URLSearchParams(window.location.search).get('sd');
  return v === 'concepts' || v === 'types' ? v : 'shopping';
};
const panel: CSSProperties = { background: colors.white, border: `2px solid ${colors.dark}`, borderRadius: radii.panel, boxSizing: 'border-box' };
const productCode = '<script type="application/ld+json">\n' + JSON.stringify(lesson.product, null, 2) + '\n</script>';

export default function R32_Course() {
  const [view, setView] = useState<View>(readView);
  useEffect(() => { const onPop = () => setView(readView()); window.addEventListener('popstate', onPop); return () => window.removeEventListener('popstate', onPop); }, []);
  const select = (next: View) => {
    setView(next);
    const url = new URL(window.location.href);
    if (next === 'shopping') url.searchParams.delete('sd'); else url.searchParams.set('sd', next);
    window.history.pushState({}, '', url);
  };
  const notes = {
    shopping: '验证路径：真实商品信息 → JSON-LD 标记 → Rich Results Test → 上线后 URL Inspection／Merchant Center 核对。',
    concepts: 'Schema.org 定义“用哪些词”；JSON-LD 定义“如何写进网页”；JSON Schema 检查“JSON 数据是否符合规则”。',
    types: '这是常用类型精选，不是完整清单。按真实页面用途与 Google 官方资格选型；有标记不保证获得特别展示。',
  };
  return <Slide bg={colors.warmBg}>
    <section className="structured-data-slide" style={{ position: 'relative', width: 1600, height: 900, fontFamily: fonts.body, color: colors.dark }}>
      <style>{`.structured-data-slide a:focus-visible,.structured-data-slide button:focus-visible{outline:4px solid ${colors.blue};outline-offset:4px}@media(max-width:700px){.deck-runtime:has(.structured-data-slide)>button{top:auto!important;bottom:20px;transform:none!important}}.deck-print-preview .structured-data-slide button,.deck-print .structured-data-slide button{display:none}`}</style>
      <header style={{ position: 'absolute', left: 100, top: 82, width: 1400 }}>
        <span style={{ color: colors.red, fontSize: 18, fontWeight: 750, letterSpacing: 2 }}>SEO / GEO · PART 03</span>
        <h1 style={{ fontSize: 52, lineHeight: 1.2, margin: '16px 0 14px', fontWeight: 850 }}>Structured Data：类型、代码与 Google Shopping</h1>
        <p style={{ fontSize: 23, lineHeight: 1.5, margin: 0 }}>商品页的名称、价格和库存，如何对应 Schema.org 类型与 JSON-LD 字段。</p>
      </header>
      <nav aria-label="Structured Data lesson sections" style={{ position: 'absolute', left: 100, top: 245, display: 'flex', gap: 14 }}>
        {([['shopping', 'Shopping · 商品与代码'], ['concepts', '概念 · 四个词的区别'], ['types', '类型 · Google 用在哪']] as const).map(([id, title]) => <button key={id} onClick={() => select(id)} aria-pressed={view === id} style={{ fontFamily: fonts.body, fontSize: 21, padding: '11px 22px', border: `2px solid ${colors.dark}`, borderRadius: radii.card, background: view === id ? colors.yellow : colors.white, color: colors.dark, cursor: 'pointer', fontWeight: 750 }}>{title}</button>)}
      </nav>
      <main style={{ position: 'absolute', left: 100, top: 315, width: 1400, height: 450 }}>
        {view === 'shopping' && <div style={{ display: 'grid', gridTemplateColumns: '820px 550px', gap: 30 }}>
          <pre style={{ margin: 0, background: colors.dark, color: colors.white, borderRadius: radii.panel, padding: '16px 22px', boxSizing: 'border-box', height: 450, fontFamily: fonts.mono, fontSize: 18, lineHeight: 1.3, whiteSpace: 'pre-wrap', overflowWrap: 'anywhere' }}><code>{productCode}</code></pre>
          <div>
            <article style={{ ...panel, padding: '22px 26px', boxShadow: `6px 6px 0 ${colors.yellow}` }}>
              <span style={{ fontSize: 17, color: colors.red, fontWeight: 750 }}>虚构商品 · 教学字段示例</span>
              <h2 style={{ fontSize: 29, margin: '12px 0' }}>{lesson.product.name}</h2>
              <div style={{ display: 'flex', gap: 22, alignItems: 'baseline' }}><strong style={{ fontSize: 41 }}>A$299.00</strong><span style={{ fontSize: 20 }}>AUD · In stock</span></div>
              <p style={{ fontSize: 19, lineHeight: 1.5, margin: '12px 0 0' }}>Product = 商品本身；Offer = 报价条件。<br />商品、价格、库存与 example.com 均为示例。</p>
            </article>
            <section style={{ marginTop: 25, fontSize: 21, lineHeight: 1.55 }}>
              <p style={{ margin: '0 0 12px' }}><strong>Google Search：</strong>符合条件时，可用于 Product snippets／Merchant listings。</p>
              <p style={{ margin: 0 }}><strong>Shopping：</strong>还要核对 Merchant Center 商品数据与资格；添加 JSON-LD 不会自动投放广告。</p>
            </section>
          </div>
        </div>}
        {view === 'concepts' && <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 22 }}>
          {lesson.definitions.map((d, i) => <article key={d.term} style={{ ...panel, padding: '24px 28px', minHeight: 204, borderTop: `7px solid ${i === 3 ? colors.red : colors.dark}` }}>
            <h2 style={{ fontSize: 31, margin: '0 0 10px' }}>{d.term}</h2><strong style={{ fontSize: 23 }}>{d.role}</strong><p style={{ fontSize: 22, lineHeight: 1.55, margin: '10px 0 0' }}>{d.explanation}</p>
          </article>)}
        </div>}
        {view === 'types' && <table style={{ width: 1400, borderCollapse: 'separate', borderSpacing: 0, fontSize: 19, lineHeight: 1.35, background: colors.white, border: `2px solid ${colors.dark}`, borderRadius: radii.panel, overflow: 'hidden' }}>
          <thead><tr>{['Schema.org 类型', '适用页面', 'Google 用途／可能展示'].map((h, i) => <th key={h} style={{ textAlign: 'left', padding: '9px 18px', background: colors.dark, color: colors.white, width: i === 0 ? 420 : i === 1 ? 250 : 680 }}>{h}</th>)}</tr></thead>
          <tbody>{lesson.types.map((r, i) => <tr key={r[0]} style={{ background: i % 2 ? colors.warmBg : colors.white }}>{[r[0], r[1], r[3]].map((cell, j) => <td key={j} style={{ padding: '6px 18px', borderBottom: '1px solid #cbd0db', fontWeight: j === 0 ? 750 : 400 }}>{cell}</td>)}</tr>)}</tbody>
        </table>}
      </main>
      <aside style={{ position: 'absolute', left: 100, top: 787, width: 1400, boxSizing: 'border-box', padding: '12px 18px', background: colors.white, borderLeft: `5px solid ${colors.red}`, borderRadius: radii.card, fontSize: 20, lineHeight: 1.5 }}>{notes[view]}</aside>
      <div style={{ position: 'absolute', right: 100, bottom: 16, display: 'flex', gap: 25, fontSize: 17, fontWeight: 750 }}>
        <a href={assetPath('materials/structured-data-shopping.html')} target="_blank" rel="noreferrer" style={{ color: colors.dark }}>完整类型、代码与实施讲义 ↗</a>
        <a href={view === 'concepts' ? lesson.links.jsonschema : view === 'types' ? lesson.links.gallery : lesson.links.product} target="_blank" rel="noreferrer" style={{ color: colors.dark }}>官方资料 ↗</a>
      </div>
    </section>
  </Slide>;
}
