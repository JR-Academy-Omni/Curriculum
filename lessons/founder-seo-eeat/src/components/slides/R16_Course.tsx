import type { CSSProperties } from 'react';
import { Slide } from '../ui';
import { colors, fonts, radii } from '../../styles/theme';
import course from '../../data/course-v2.json';

const ink = colors.dark;
const card: CSSProperties = { background: colors.white, border: `2px solid ${ink}`, borderRadius: radii.panel };
const badge: CSSProperties = { display: 'inline-grid', placeItems: 'center', width: 30, height: 30, borderRadius: radii.label, background: colors.yellow, fontSize: 17, fontWeight: 800, flexShrink: 0 };
const text: CSSProperties = { fontSize: 20, lineHeight: 1.5, margin: 0 };
const mappings = [
  ['文献库中的题名', '<title> 浏览器标签标题', '告诉读者和搜索引擎这一页讲什么。'],
  ['论文正文的大标题', 'H1 网页主标题', '进入页面后看到的正文标题。'],
  ['章、节、小节', 'H2 / H3 内容层级', '把长内容分开，让人快速找到对应部分。'],
  ['插图与说明', '图片、可见图注与 alt', 'alt 是图像的文本替代，不是堆关键词。'],
  ['参考文献', '可点击的引用链接', '打开来源查依据；站内链接通往相关页面。'],
];

export default function R16_Course() {
  const s = course[15];
  return <Slide bg={colors.warmBg}>
    <section className="paper-web-slide" style={{ width: 1600, height: 900, position: 'relative', fontFamily: fonts.body, color: ink }}>
      <style>{`@media(max-width:700px){.deck-runtime:has(.paper-web-slide)>button{top:auto!important;bottom:20px;transform:none!important}}`}</style>
      <header style={{ position: 'absolute', left: 100, top: 82, width: 1400 }}>
        <span style={{ color: colors.red, fontSize: 18, fontWeight: 750, letterSpacing: 2 }}>SEO / GEO · PART 02</span>
        <h1 style={{ fontSize: 54, fontWeight: 850, lineHeight: 1.2, margin: '16px 0 14px' }}>{s.title}</h1>
        <p style={{ ...text, fontSize: 24 }}>{s.sub}</p>
      </header>
      <div style={{ position: 'absolute', left: 100, top: 252, width: 535 }}>
        <div style={{ fontSize: 21, fontWeight: 750, marginBottom: 13 }}>一篇论文 <span style={{ fontSize: 17, fontWeight: 500 }}>· 结构示例，非真实研究论文</span></div>
        <article style={{ ...card, padding: '24px 30px', height: 468, boxShadow: `7px 7px 0 ${colors.yellow}` }}>
          <div style={{ borderBottom: `1px solid ${ink}`, paddingBottom: 18 }}>
            <span style={{ ...badge, marginRight: 12 }}>1/2</span>
            <strong style={{ fontSize: 27 }}>家用咖啡机除垢方法</strong>
          </div>
          <div style={{ background: colors.warmBg, borderRadius: radii.label, padding: '12px 16px', marginTop: 17 }}>
            <strong style={{ fontSize: 19 }}>摘要</strong>
            <p style={{ ...text, fontSize: 19 }}>说明适用条件、操作方法和注意事项。</p>
          </div>
          <div style={{ marginTop: 19, display: 'flex', gap: 12 }}>
            <span style={badge}>3</span><div><strong style={{ fontSize: 24 }}>1　适用条件</strong><p style={{ ...text, marginTop: 7 }}>1.1　机型与材料</p></div>
          </div>
          <div style={{ marginTop: 16, display: 'flex', gap: 12, alignItems: 'center' }}>
            <span style={badge}>4</span><div style={{ background: colors.warmBg, borderRadius: radii.card, padding: '14px 18px', flex: 1 }}><div style={{ display: 'flex', gap: 12, alignItems: 'center', fontSize: 18 }}><span>准备</span><b>→</b><span>操作</span><b>→</b><span>检查</span></div><p style={{ ...text, fontSize: 16, marginTop: 7 }}>图1 · 过程结构示意</p></div>
          </div>
          <div style={{ marginTop: 18, display: 'flex', gap: 12, alignItems: 'center' }}><span style={badge}>5</span><span style={{ fontSize: 20 }}>参考文献 → 核对原始依据</span></div>
        </article>
      </div>
      <div aria-hidden="true" style={{ position: 'absolute', left: 658, top: 452, color: colors.red, fontSize: 58 }}>→</div>
      <div style={{ position: 'absolute', left: 750, top: 252, width: 750 }}>
        <div style={{ fontSize: 21, fontWeight: 750, marginBottom: 13 }}>一个网页 <span style={{ fontSize: 17, fontWeight: 500 }}>· 把对应关系放进网页结构</span></div>
        <article style={{ ...card, overflow: 'hidden', height: 468, boxShadow: `7px 7px 0 ${colors.red}` }}>
          <div style={{ background: ink, color: colors.white, display: 'flex', alignItems: 'center', gap: 12, padding: '13px 23px', fontSize: 18 }}>
            <span style={{ width: 10, height: 10, borderRadius: 10, background: colors.red }} />浏览器标签：家用咖啡机除垢方法
          </div>
          <div style={{ padding: '6px 22px' }}>
            {mappings.map(([paper, web, explanation], i) => <div key={web} style={{ display: 'flex', gap: 14, padding: '8px 0', borderBottom: i === 4 ? 0 : `1px solid ${colors.warmBg}` }}>
              <span style={{ ...badge, marginTop: 4 }}>{i + 1}</span>
              <div><div style={{ display: 'flex', alignItems: 'baseline', gap: 14 }}><strong style={{ fontSize: 22 }}>{web}</strong><span style={{ fontSize: 16, color: ink }}>↔ {paper}</span></div><p style={{ ...text, fontSize: 19, lineHeight: 1.45, marginTop: 4 }}>{explanation}</p></div>
            </div>)}
          </div>
        </article>
      </div>
      <aside style={{ position: 'absolute', top: 794, left: 100, width: 1400, borderLeft: `5px solid ${colors.red}`, borderRadius: radii.card, background: colors.white, padding: '15px 20px', fontSize: 21, lineHeight: 1.5 }}>
        <strong>摘要要分清：</strong>meta description 是对外概括，不会自动显示在正文；Google 也可能从正文生成搜索摘要。
      </aside>
    </section>
  </Slide>;
}
