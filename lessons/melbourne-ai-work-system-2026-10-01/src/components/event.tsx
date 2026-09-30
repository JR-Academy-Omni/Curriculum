import type { CSSProperties, ReactNode } from 'react';
import { AnimatedGroup, DeckFrame, Label, Panel, colors, fonts } from './deck';
import { assetPath } from './ui';
import type { Speaker } from '../data/speakers';

export function Marker({ children, color = colors.yellow }: { children: ReactNode; color?: string }) {
  return <span style={{ backgroundImage: `linear-gradient(transparent 72%, ${color} 72%, ${color} 96%, transparent 96%)`, boxDecorationBreak: 'clone', WebkitBoxDecorationBreak: 'clone' }}>{children}</span>;
}

export function CoHosts({ compact = false }: { compact?: boolean }) {
  const logos = [
    { src: 'jr-academy-logo.png', name: '匠人学院 JR Academy', width: compact ? 176 : 300, height: compact ? 64 : 110 },
    { src: 'anz.png', name: 'ANZ', width: compact ? 170 : 280, height: compact ? 170 : 280 },
    { src: 'bupa.png', name: 'Bupa', width: compact ? 175 : 292, height: compact ? 46 : 78 },
  ];
  return <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: compact ? 24 : 56, height: compact ? 72 : 250 }}>
    {logos.map(logo => <div key={logo.name} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: compact ? 190 : 340, height: compact ? 72 : 230, overflow: 'hidden' }}>
      <img src={assetPath(logo.src)} alt={logo.name} style={{ width: logo.width, height: logo.height, objectFit: 'contain', flexShrink: 0 }} />
    </div>)}
  </div>;
}

export function PresentationLink({ speaker }: { speaker: Speaker }) {
  if (!speaker.href) return <span data-presentation-status={speaker.id} style={{ fontSize: 19, color: '#71635d', padding: '14px 0' }}>演讲资料待补充</span>;
  return <a data-presentation-link={speaker.id} href={speaker.href} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', gap: 20, alignItems: 'center', background: colors.yellow, color: colors.dark, border: `2px solid ${colors.dark}`, borderRadius: 18, boxShadow: `5px 5px 0 ${colors.dark}`, padding: '14px 23px', fontSize: 20, fontWeight: 800, textDecoration: 'none' }}>
    {`在线查看${speaker.name}的 PPT`} <span aria-hidden>↗</span>
  </a>;
}

export function SpeakerPortrait({ speaker, width = 382, height = width * 579 / 500 }: { speaker: Speaker; width?: number; height?: number }) {
  const diameter = Math.min(width, height);
  const scale = diameter / 960;
  return <div data-speaker-portrait={speaker.id} style={{ width, height, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', borderRadius: 18, background: '#fffdf9' }}>
    {speaker.circularPortrait
      ? <div style={{ position: 'relative', width: diameter, height: diameter, borderRadius: '50%', overflow: 'hidden' }}>
          <img src={assetPath(speaker.image)} alt={speaker.name} style={{ position: 'absolute', width: 1320 * scale, maxWidth: 'none', height: 'auto', left: -180 * scale, top: -134 * scale }} />
        </div>
      : <img src={assetPath(speaker.image)} alt={speaker.name} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: speaker.portraitPosition ?? '50% 0%', display: 'block' }} />}
  </div>;
}

export function SpeakerSlide({ speaker, index }: { speaker: Speaker; index: number }) {
  return <DeckFrame tag={`GUEST ${String(index).padStart(2, '0')} / THEME SHARING`} title={speaker.title} accent={speaker.accent}>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 500px', gap: 30, height: '100%', minHeight: 0 }}>
      <AnimatedGroup delay={.16} style={{ minHeight: 0 }}>
        <Panel style={{ padding: 28, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <Label bg={speaker.accent} color={colors.dark}>分享嘉宾</Label>
            <h2 style={{ marginTop: 14, fontFamily: fonts.heading, fontSize: 44, lineHeight: 1.1, color: colors.dark }}>{speaker.name}</h2>
            <p style={{ marginTop: 8, fontSize: 24, fontWeight: 700, lineHeight: 1.35 }}>{speaker.role}</p>
            {speaker.affiliation && <p style={{ marginTop: 6, fontSize: 19, color: '#514c48', lineHeight: 1.5 }}>{speaker.affiliation}</p>}
            {speaker.subtitle && <p style={{ marginTop: 12, fontSize: 23, color: '#514c48', lineHeight: 1.45 }}>{speaker.subtitle}</p>}
          </div>
          <div style={{ marginTop: 22, display: 'grid', gap: 14 }}>
            {speaker.topics.map((topic, i) => <div key={topic.title} style={{ display: 'grid', gridTemplateColumns: '45px 1fr', gap: 14 }}>
              <span style={{ fontSize: 23, fontWeight: 900, color: colors.red }}>{String(i + 1).padStart(2, '0')}</span>
              <div><h3 style={{ fontSize: 27, lineHeight: 1.2 }}>{topic.title}</h3>
                {topic.description && <p style={{ marginTop: 5, fontSize: 22, lineHeight: 1.4 }}>{topic.description}</p>}
              </div>
            </div>)}
          </div>
        </Panel>
      </AnimatedGroup>
      <AnimatedGroup delay={.25} style={{ minHeight: 0 }}>
        <Panel style={{ padding: 0, overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column' }}>
          <div style={{ flex: 1, minHeight: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', background: '#fffdf9' }}>
            <SpeakerPortrait speaker={speaker} width={496} height={380} />
          </div>
          <div style={{ padding: '18px 24px', background: colors.yellow, flexShrink: 0 }}>
            <strong style={{ fontSize: 26 }}>{speaker.name}</strong>
            <div style={{ marginTop: 12, display: 'flex', justifyContent: 'flex-end' }}><PresentationLink speaker={speaker} /></div>
          </div>
        </Panel>
      </AnimatedGroup>
    </div>
  </DeckFrame>;
}

export function TextLink({ href, children, style }: { href: string; children: ReactNode; style?: CSSProperties }) {
  return <a href={href} target="_blank" rel="noopener noreferrer" style={{ color: colors.dark, textDecorationThickness: 2, textUnderlineOffset: 6, fontSize: 22, fontWeight: 700, ...style }}>{children} ↗</a>;
}
