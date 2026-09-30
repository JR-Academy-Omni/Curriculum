import { AnimatedGroup, DeckFrame, Label, Panel, colors, fonts } from '../deck';
import { CoHosts, Marker } from '../event';
import { assetPath } from '../ui';

export default function Slide01() {
  return <DeckFrame tag="MELBOURNE · AI & BUSINESS" title="企业 AI 实战分享" titleSize={74}>
    <div style={{ display: 'grid', gridTemplateColumns: '650px 1fr', gap: 48, height: '100%', alignItems: 'center' }}>
      <AnimatedGroup delay={.16}>
        <Label bg={colors.red}>老板 / 高管专场</Label>
        <div style={{ marginTop: 24, fontSize: 32, fontWeight: 800, lineHeight: 1.7 }}>AI 自动化 × AI Marketing<br /><Marker>财税新变革 × AI 房产金融</Marker></div>
        <div style={{ marginTop: 36, paddingLeft: 22, borderLeft: `5px solid ${colors.red}` }}>
          <p style={{ fontFamily: fonts.mono, fontSize: 29, fontWeight: 800 }}>2026.10.01 · THURSDAY</p>
          <p style={{ fontSize: 25, marginTop: 10 }}>17:00–20:30 · 墨尔本</p>
          <p style={{ fontSize: 23, marginTop: 16, lineHeight: 1.5 }}>Bupa · Ground Floor<br />33 Exhibition Street, Melbourne</p>
        </div>
        <div style={{ marginTop: 24 }}><CoHosts compact /></div>
      </AnimatedGroup>
      <AnimatedGroup delay={.25}>
        <Panel style={{ padding: 16, transform: 'rotate(-1deg)' }}>
          <img src={assetPath('cover.jpg')} alt="企业 AI 实战分享活动海报，嘉宾 Lightman、Michael、李敏及 Michael Yang" style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 16 }} />
        </Panel>
        <p style={{ marginTop: 30, fontFamily: fonts.mono, fontSize: 18, fontWeight: 700, color: '#61524b', textAlign: 'center', letterSpacing: 1.2 }}>A BRIGHTER BUSINESS TOMORROW TOGETHER</p>
      </AnimatedGroup>
    </div>
  </DeckFrame>;
}
