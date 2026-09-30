import { AnimatedGroup, DeckFrame, colors, fonts } from '../deck';
import { speakers } from '../../data/speakers';

export default function Slide03() {
  return <DeckFrame tag="THEME SHARING" title="主题分享" accent={colors.green}>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '28px 36px', height: '100%', paddingTop: 20 }}>
      {speakers.map((speaker, i) => <AnimatedGroup key={speaker.id} delay={.12 + i * .08} style={{ display: 'flex', alignItems: 'center', gap: 28, borderTop: `3px solid ${colors.dark}`, padding: '24px 6px' }}>
        <span style={{ width: 72, height: 72, borderRadius: 18, background: speaker.accent, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: fonts.mono, fontSize: 30, fontWeight: 800 }}>{String(i + 1).padStart(2, '0')}</span>
        <div><h2 style={{ fontFamily: fonts.heading, fontSize: 37, lineHeight: 1.1 }}>{speaker.name}</h2><p style={{ fontSize: 27, fontWeight: 600, lineHeight: 1.5, marginTop: 16 }}>{speaker.title}</p></div>
      </AnimatedGroup>)}
    </div>
  </DeckFrame>;
}
