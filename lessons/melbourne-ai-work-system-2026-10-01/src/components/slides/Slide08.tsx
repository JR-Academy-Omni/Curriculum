import { AnimatedGroup, DeckFrame, Label, Panel, colors, fonts } from '../deck';
import { assetPath } from '../ui';

export default function Slide08() {
  return <DeckFrame tag="OPEN CONVERSATION" title="Q&A" accent={colors.blue}>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 30, height: '100%', minHeight: 0 }}>
      <AnimatedGroup delay={.16} style={{ display: 'flex', minHeight: 0 }}><Panel style={{ flex: 1, minWidth: 0, minHeight: 0, padding: 32, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <Label bg={colors.green}>面对面交流</Label>
        <p style={{ fontFamily: fonts.heading, fontSize: 62, fontWeight: 800, lineHeight: 1.3, margin: '28px 0' }}>提问。<br />交流。<br /><span style={{ color: colors.red }}>一起探索。</span></p>
      </Panel></AnimatedGroup>
      <AnimatedGroup delay={.25} style={{ display: 'flex', minHeight: 0 }}><Panel style={{ flex: 1, minWidth: 0, minHeight: 0, padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
        <img src={assetPath('qa.png')} alt="活动参与者面对面交流" style={{ width: '100%', flex: 1, minHeight: 0, objectFit: 'cover', display: 'block' }} />
        <div style={{ padding: '22px 26px', background: colors.yellow, fontSize: 29, fontWeight: 800 }}>活动参与者面对面交流</div>
      </Panel></AnimatedGroup>
    </div>
  </DeckFrame>;
}
