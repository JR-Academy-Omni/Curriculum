import { AnimatedGroup, DeckFrame, Panel, colors, fonts } from '../deck';
import { Marker } from '../event';
import { assetPath } from '../ui';

export default function Slide10() {
  return <DeckFrame tag="THANK YOU FOR JOINING US" title="感谢参与" accent={colors.red}>
    <div style={{ display: 'grid', gridTemplateColumns: '470px 1fr', gap: 40, height: '100%', alignItems: 'center' }}>
      <AnimatedGroup delay={.16}>
        <p style={{ fontFamily: fonts.heading, fontSize: 58, fontWeight: 800, lineHeight: 1.3 }}>Thank you<br />for <Marker>joining us.</Marker></p>
        <img src={assetPath('jr-academy-logo.png')} alt="匠人学院 JR Academy" style={{ marginTop: 56, width: 280, height: 'auto', display: 'block' }} />
      </AnimatedGroup>
      <AnimatedGroup delay={.25}><Panel style={{ padding: 14, width: 800, marginLeft: 'auto', boxShadow: `9px 9px 0 ${colors.red}` }}><img src={assetPath('community.jpg')} alt="匠人学院社区活动合影" style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 16 }} /></Panel></AnimatedGroup>
    </div>
  </DeckFrame>;
}
