import { AnimatedGroup, DeckFrame, Label, Panel, colors, fonts } from '../deck';
import { Marker } from '../event';
import { assetPath } from '../ui';

export default function Slide10() {
  return <DeckFrame tag="THANK YOU FOR JOINING US" title="感谢参与" accent={colors.red}>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 30, height: '100%', minHeight: 0 }}>
      <AnimatedGroup delay={.16} style={{ display: 'flex', minHeight: 0 }}><Panel style={{ flex: 1, minWidth: 0, minHeight: 0, padding: 32, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <Label bg={colors.green}>感谢参与</Label>
        <p style={{ fontFamily: fonts.heading, fontSize: 52, fontWeight: 800, lineHeight: 1.3, margin: '24px 0' }}>Thank you<br />for <Marker>joining us.</Marker></p>
        <img src={assetPath('jr-academy-logo.png')} alt="匠人学院 JR Academy" style={{ width: 280, height: 'auto', display: 'block' }} />
      </Panel></AnimatedGroup>
      <AnimatedGroup delay={.25} style={{ display: 'flex', minHeight: 0 }}><Panel style={{ flex: 1, minWidth: 0, minHeight: 0, padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
        <img src={assetPath('community.jpg')} alt="匠人学院社区活动合影" style={{ width: '100%', flex: 1, minHeight: 0, objectFit: 'cover', display: 'block' }} />
        <div style={{ padding: '22px 26px', background: colors.yellow, fontSize: 29, fontWeight: 800 }}>匠人学院社区活动合影</div>
      </Panel></AnimatedGroup>
    </div>
  </DeckFrame>;
}
