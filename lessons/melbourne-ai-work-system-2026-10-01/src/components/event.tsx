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
  return <a data-presentation-link={speaker.id} href={speaker.href} download={speaker.downloadFilename} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', gap: 20, alignItems: 'center', background: colors.yellow, color: colors.dark, border: `2px solid ${colors.dark}`, borderRadius: 18, boxShadow: `5px 5px 0 ${colors.dark}`, padding: '14px 23px', fontSize: 20, fontWeight: 800, textDecoration: 'none' }}>
    {speaker.downloadFilename ? `下载${speaker.name}的原版 PPT` : `打开${speaker.name}的演讲 PPT`} <span aria-hidden>{speaker.downloadFilename ? '↓' : '↗'}</span>
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
  return <DeckFrame tag={`GUEST ${String(index).padStart(2, '0')} / THEME SHARING`} title={speaker.title} subtitle={speaker.subtitle} accent={speaker.accent} footer={<PresentationLink speaker={speaker} />}>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 438px', gap: 44, height: '100%', alignItems: 'center' }}>
      <AnimatedGroup delay={.16} style={{ paddingRight: 10 }}>
        <Label bg={speaker.accent} color={colors.dark}>主题分享</Label>
        <h2 style={{ marginTop: 18, fontFamily: fonts.heading, fontSize: 52, lineHeight: 1.1, color: colors.dark }}>{speaker.name}</h2>
        <p style={{ marginTop: 11, fontSize: 26, fontWeight: 700, lineHeight: 1.35 }}>{speaker.role}</p>
        {speaker.affiliation && <p style={{ marginTop: 9, fontSize: 20, color: '#514c48', lineHeight: 1.5 }}>{speaker.affiliation}</p>}
        <div style={{ marginTop: 32, display: 'grid', gap: 20 }}>
          {speaker.topics.map((topic, i) => <div key={topic.title} style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
            <span style={{ fontFamily: fonts.mono, fontSize: 18, fontWeight: 800, width: 42, height: 42, borderRadius: 12, background: speaker.accent, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{String(i + 1).padStart(2, '0')}</span>
            <strong style={{ fontSize: 28, width: 132, flexShrink: 0 }}>{topic.title}</strong>
            {topic.description && <span style={{ fontSize: 22, color: '#514c48' }}>{topic.description}</span>}
          </div>)}
        </div>
      </AnimatedGroup>
      <AnimatedGroup delay={.25}>
        <Panel style={{ padding: 24, background: '#fffdf9', boxShadow: `9px 9px 0 ${speaker.accent}` }}>
          <SpeakerPortrait speaker={speaker} />
        </Panel>
      </AnimatedGroup>
    </div>
  </DeckFrame>;
}

export function TextLink({ href, children, style }: { href: string; children: ReactNode; style?: CSSProperties }) {
  return <a href={href} target="_blank" rel="noopener noreferrer" style={{ color: colors.dark, textDecorationThickness: 2, textUnderlineOffset: 6, fontSize: 22, fontWeight: 700, ...style }}>{children} ↗</a>;
}
