import { AnimatedGroup, DeckFrame, Label, Panel, colors, fonts } from '../deck';
import { Marker } from '../event';
import { assetPath } from '../ui';

export default function Slide09() {
  return <DeckFrame tag="STAY CONNECTED" title="后续活动，我们群里见" accent={colors.green}>
    <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 30, height: '100%', minHeight: 0 }}>
      <AnimatedGroup delay={.16} style={{ display: 'flex', minHeight: 0 }}><Panel style={{ flex: 1, minWidth: 0, minHeight: 0, padding: 32, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <Label bg={colors.green} color={colors.dark}>加入活动群</Label>
        <p style={{ margin: '24px 0', fontFamily: fonts.heading, fontSize: 45, fontWeight: 800, lineHeight: 1.35 }}>Join us for more<br /><Marker>upcoming events!</Marker></p>
        <div><p style={{ fontSize: 25, lineHeight: 1.5, margin: 0 }}>10.1 匠人墨尔本线下企业 AI 构建活动</p>
        <p style={{ fontSize: 20, color: '#665951', lineHeight: 1.45, margin: '14px 0 0' }}>微信扫码加入<br />原二维码标注 10 月 6 日前有效</p></div>
      </Panel></AnimatedGroup>
      <AnimatedGroup delay={.25} style={{ display: 'flex', minHeight: 0 }}><Panel style={{ flex: 1, minWidth: 0, minHeight: 0, padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
        <div style={{ flex: 1, minHeight: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px 26px' }}><img src={assetPath('event-group.png')} alt="10.1 匠人墨尔本线下企业 AI 构建活动微信群二维码，原件标注10月6日前有效" style={{ width: 'auto', height: '100%', maxHeight: 430, maxWidth: '100%', objectFit: 'contain', display: 'block' }} /></div>
        <div style={{ padding: '20px 26px', background: colors.yellow, fontSize: 29, fontWeight: 800 }}>微信扫码加入活动群</div>
      </Panel></AnimatedGroup>
    </div>
  </DeckFrame>;
}
