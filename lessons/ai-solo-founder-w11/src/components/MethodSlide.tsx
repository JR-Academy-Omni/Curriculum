import { DeckFrame, Panel, Label, NumberBadge, AnimatedGroup, colors, fonts } from './deck';
import type { GrowthMethod } from '../data/methods';

const loops: Record<number, string[]> = {
  17: ['得到价值', '邀请朋友', '朋友获值', '再次介绍'],
  18: ['共同任务', '邀请成员', '团队获值', '新协作'],
  19: ['真实使用', '分享成果', '相关人看到', '新的使用'],
  20: ['创建工具', '外部使用', '来源访问', '新的创建'],
};

export default function MethodSlide({ method: m }: { method: GrowthMethod }) {
  const loop = loops[m.id];
  return <DeckFrame tag={`${m.group} · METHOD ${String(m.id).padStart(2, '0')}`} title={`方法 ${String(m.id).padStart(2, '0')} · ${m.name}`} subtitle={m.principle}>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, height: 472 }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1.7fr 1fr', gap: 24, height: 352 }}>
        <AnimatedGroup delay={.12}><Panel style={{ height: '100%', padding: '22px 26px' }}>
          <Label bg={colors.yellow} color={colors.dark}>{loop ? '循环怎么发生' : '具体怎么做'}</Label>
          {loop && <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginTop: 18 }}>{loop.map((v, i) => <div key={v} style={{ display: 'flex', alignItems: 'center', gap: 8, flex: 1 }}><div style={{ background: colors.warmBg, borderRadius: 14, padding: '12px 8px', textAlign: 'center', fontSize: 22, fontWeight: 700, flex: 1 }}>{v}</div>{i < loop.length - 1 && <span style={{ fontSize: 23 }}>→</span>}</div>)}</div>}
          <div style={{ display: 'grid', gap: loop ? 12 : 17, marginTop: 20 }}>
            {m.steps.map((step, i) => <div key={step} style={{ display: 'flex', gap: 16, alignItems: 'center' }}><NumberBadge bg={i === 0 ? colors.yellow : colors.warmBg}>{i + 1}</NumberBadge><div style={{ fontSize: loop ? 23 : 28, fontWeight: 700, lineHeight: 1.3 }}>{step}</div></div>)}
          </div>
          {!loop && <div style={{ marginTop: 18, fontSize: 21, lineHeight: 1.4 }}><strong>起手示例（教学模拟）：</strong>{m.example}</div>}
        </Panel></AnimatedGroup>
        <AnimatedGroup delay={.2}><Panel bg={colors.dark} style={{ height: '100%', padding: '22px 24px', color: colors.white }}>
          <div style={{ display: 'grid', gap: 15, fontFamily: fonts.body, fontSize: 22, lineHeight: 1.4 }}>
            <div><strong style={{ color: colors.yellow }}>适合：</strong>{m.fit}</div>
            <div><strong style={{ color: colors.yellow }}>先别用：</strong>{m.avoid}</div>
            <div><strong style={{ color: colors.yellow }}>看什么：</strong>{m.metric}</div>
            <div><strong style={{ color: colors.yellow }}>成本：</strong>{m.cost}</div>
          </div>
        </Panel></AnimatedGroup>
      </div>
      <Panel style={{ height: 104, padding: '13px 22px', boxShadow: 'none', borderWidth: 1 }}>
        <div style={{ fontSize: 22, lineHeight: 1.35 }}><strong>{m.sources.length ? '案例 / 机制示例：' : '教学情境：'}</strong>{m.sources.length ? m.evidence : m.example}</div>
        <div style={{ marginTop: 7, fontSize: 17, display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}>
          {m.sources.map(s => <a key={s.url} href={s.url} target="_blank" rel="noreferrer" style={{ color: colors.dark, textDecoration: 'underline' }}>{s.title}</a>)}
          {!m.sources.length && <span>本页为方法建议与教学模拟。</span>}
        </div>
      </Panel>
    </div>
  </DeckFrame>;
}
