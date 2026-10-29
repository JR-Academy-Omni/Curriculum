import { Slide } from '../ui';
import { colors, fonts, radii } from '../../styles/theme';

const identity = [
  { label: '文章署名', english: 'Byline', content: '教程写明作者，\n署名链接到作者页。', tint: colors.yellow },
  { label: '作者 / 关于页', english: 'Author / About', content: '真实背景、擅长领域；\n姓名、简介、主页一致。', tint: colors.blue },
  { label: '项目与作品', english: 'Projects', content: '打开完整作品、代码，\n查看过程、结果与限制。', tint: colors.green },
  { label: '独立外部记录', english: 'External Records', content: '项目方、活动方、出版方\n的记录支持具体经历。', tint: colors.purple },
  { label: '返回本人 / 作品', english: 'Identity Links', content: '外部记录链接本人，\n或链接对应作品。', tint: colors.orange },
];

export default function R49d_PersonalBrand() {
  return <Slide bg={colors.warmBg}>
    <section aria-label="Personal Brand 与作者身份" style={{ position: 'relative', width: 1600, height: 900, color: colors.dark, fontFamily: fonts.body }}>
      <header style={{ position: 'absolute', left: 85, top: 60, width: 1430 }}>
        <span style={{ color: colors.red, fontSize: 18, fontWeight: 750, letterSpacing: 2 }}>E-E-A-T · 作者与声誉</span>
        <h1 style={{ fontSize: 51, lineHeight: 1.2, margin: '13px 0 14px', fontFamily: fonts.heading, fontWeight: 850 }}>Personal Brand / 个人 IP：让作品与作者对应起来</h1>
        <p style={{ margin: 0, fontSize: 25, lineHeight: 1.5 }}>读者能认出是谁、打开做过的成果，再从独立来源核对具体经历。</p>
      </header>
      <div style={{ position: 'absolute', left: 85, top: 250, width: 1430, display: 'flex', gap: 25 }}>
        {identity.map((item, index) => <div key={item.english} style={{ position: 'relative', width: 266, flexShrink: 0, boxSizing: 'border-box', border: `2px solid ${colors.dark}`, borderRadius: radii.card, padding: '20px 18px', background: colors.white, height: 182 }}>
          <span style={{ display: 'inline-block', padding: '4px 9px', background: item.tint, borderRadius: radii.label, fontSize: 16, fontWeight: 750 }}>{String(index + 1).padStart(2, '0')} · {item.english}</span>
          <h2 style={{ margin: '13px 0 9px', fontSize: 26, lineHeight: 1.2 }}>{item.label}</h2>
          <p style={{ margin: 0, fontSize: 20, lineHeight: 1.5, whiteSpace: 'pre-line' }}>{item.content}</p>
          {index < identity.length - 1 && <span aria-hidden="true" style={{ position: 'absolute', right: -24, top: 75, fontSize: 27, fontWeight: 850 }}>→</span>}
        </div>)}
      </div>
      <div style={{ position: 'absolute', left: 85, top: 468, width: 1430, display: 'grid', gridTemplateColumns: '845px 555px', gap: 30 }}>
        <article style={{ borderRadius: radii.panel, padding: '22px 27px', background: colors.white, border: `2px solid ${colors.dark}`, boxSizing: 'border-box', height: 303 }}>
          <h2 style={{ fontSize: 27, lineHeight: 1.3, margin: '0 0 13px' }}>活动报名表单开发者 <span style={{ fontSize: 17, fontWeight: 500 }}>· 教学示例</span></h2>
          <div style={{ fontSize: 22, lineHeight: 1.65 }}>
            <div><strong>发布教程：</strong>解释重复提交如何发生，展示复现与修复。</div>
            <div><strong>公开作品：</strong>放可用 Demo、代码与测试过程，让人复查。</div>
            <div><strong>记录贡献：</strong>PR 被项目采纳后，链接该 PR 再写贡献。</div>
            <div><strong>更新 About：</strong>写明实际角色，把上述证据放在对应经历旁。</div>
          </div>
          <div style={{ marginTop: 10, paddingTop: 10, borderTop: `1px solid ${colors.dark}`, fontSize: 19, lineHeight: 1.5 }}>读者从文章进入作者页，就能找到作品与项目方的记录。</div>
        </article>
        <article style={{ borderRadius: radii.panel, padding: '22px 25px', background: colors.yellow, boxSizing: 'border-box', height: 303 }}>
          <h2 style={{ fontSize: 27, lineHeight: 1.3, margin: '0 0 15px' }}>专业声誉怎样形成？</h2>
          <p style={{ fontSize: 25, lineHeight: 1.65, fontWeight: 750, margin: 0 }}>持续产出同领域成果<br/>→ 他人认识你的专业能力<br/>→ 真实使用、提及与引用<br/>→ 可核实的专业声誉</p>
        </article>
      </div>
      <aside style={{ position: 'absolute', left: 85, top: 800, width: 1430, boxSizing: 'border-box', padding: '13px 20px', borderLeft: `5px solid ${colors.red}`, borderRadius: radii.card, background: colors.white, fontSize: 21, lineHeight: 1.55 }}>E-E-A-T 要看经验、专业性与可信依据；粉丝、头像和人设不能代替它们。建立个人品牌不保证 SEO 排名或 GEO 引用提升。</aside>
    </section>
  </Slide>;
}
