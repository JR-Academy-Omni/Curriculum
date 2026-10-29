import { AnimatedGroup, DeckFrame, Label, Panel, colors, fonts } from '../deck';
import { speakers } from '../../data/speakers';

export default function Slide03() {
  return <DeckFrame tag="THEME SHARING" title="主题分享" accent={colors.green}>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 30, height: '100%', minHeight: 0 }}>
      {[speakers.slice(0, 2), speakers.slice(2, 4)].map((group, groupIndex) => <AnimatedGroup key={groupIndex} delay={.16 + groupIndex * .09} style={{ display: 'flex', minHeight: 0 }}>
        <Panel style={{ flex: 1, minWidth: 0, minHeight: 0, padding: 32, display: 'flex', flexDirection: 'column' }}>
          <Label bg={groupIndex === 0 ? colors.green : colors.yellow}>主题分享 · {groupIndex === 0 ? '01 — 02' : '03 — 04'}</Label>
          <div style={{ display: 'flex', flexDirection: 'column', flex: 1, minHeight: 0, marginTop: 20 }}>
            {group.map((speaker, i) => <div key={speaker.id} style={{ display: 'grid', gridTemplateColumns: '45px 1fr', gap: 14, alignContent: 'center', flex: 1, minHeight: 0, padding: '20px 0', borderTop: i === 1 ? '1px solid rgba(16,22,47,.16)' : undefined }}>
              <span style={{ fontFamily: fonts.mono, fontSize: 23, fontWeight: 900, color: colors.red, paddingTop: 6 }}>{String(groupIndex * 2 + i + 1).padStart(2, '0')}</span>
              <div><h2 style={{ fontFamily: fonts.heading, fontSize: 34, lineHeight: 1.15, margin: 0 }}>{speaker.name}</h2><p style={{ fontSize: 29, fontWeight: 600, lineHeight: 1.45, margin: '12px 0 0' }}>{speaker.title}</p></div>
            </div>)}
          </div>
        </Panel>
      </AnimatedGroup>)}
    </div>
  </DeckFrame>;
}
