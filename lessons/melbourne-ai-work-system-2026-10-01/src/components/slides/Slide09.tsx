import { AnimatedGroup, DeckFrame, Label, Panel, colors, fonts } from '../deck';
import { Marker } from '../event';
import { assetPath } from '../ui';

export default function Slide09() {
  return <DeckFrame tag="STAY CONNECTED" title="后续活动，我们群里见" accent={colors.green}>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 420px', gap: 90, height: '100%', alignItems: 'center', paddingRight: 60 }}>
      <AnimatedGroup delay={.16}>
        <Label bg={colors.green} color={colors.dark}>加入活动群</Label>
        <p style={{ marginTop: 28, fontFamily: fonts.heading, fontSize: 56, fontWeight: 800, lineHeight: 1.3 }}>Join us for more<br /><Marker>upcoming events!</Marker></p>
        <p style={{ fontSize: 25, lineHeight: 1.5, marginTop: 30 }}>10.1 匠人墨尔本线下企业 AI 构建活动</p>
        <p style={{ fontSize: 20, color: '#665951', marginTop: 14 }}>微信扫码加入 · 原二维码标注 10 月 6 日前有效</p>
      </AnimatedGroup>
      <AnimatedGroup delay={.25}><Panel style={{ display: 'flex', justifyContent: 'center', padding: 10, width: 365, margin: '0 auto', boxShadow: `9px 9px 0 ${colors.green}` }}><img src={assetPath('event-group.png')} alt="10.1 匠人墨尔本线下企业 AI 构建活动微信群二维码，原件标注10月6日前有效" style={{ width: 'auto', height: 515, display: 'block', borderRadius: 16 }} /></Panel></AnimatedGroup>
    </div>
  </DeckFrame>;
}
