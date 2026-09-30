import { AnimatedGroup, DeckFrame, Panel, colors, fonts } from '../deck';
import { assetPath } from '../ui';

export default function Slide08() {
  return <DeckFrame tag="OPEN CONVERSATION" title="Q&A" titleSize={80} accent={colors.blue}>
    <div style={{ display: 'grid', gridTemplateColumns: '370px 1fr', gap: 52, height: '100%', alignItems: 'center' }}>
      <AnimatedGroup delay={.16}><p style={{ fontFamily: fonts.heading, fontSize: 61, fontWeight: 800, lineHeight: 1.3 }}>提问。<br />交流。<br /><span style={{ color: '#1684bc' }}>一起探索。</span></p></AnimatedGroup>
      <AnimatedGroup delay={.25}><Panel style={{ padding: 16, width: 880, marginLeft: 'auto', boxShadow: `9px 9px 0 ${colors.blue}` }}><img src={assetPath('qa.png')} alt="活动参与者面对面交流" style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 16 }} /></Panel></AnimatedGroup>
    </div>
  </DeckFrame>;
}
