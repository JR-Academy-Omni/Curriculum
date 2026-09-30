import { Frame, BodyGrid, Panel, Label, colors, assetPath } from './DeckPrimitives';

export default function Slide01() {
  return <Frame page={1} tag="AI & BUSINESS · 15 MIN" title="AI对会计行业的影响" subtitle="如何让专业服务真正做到「物美价廉」" titleSize={62}>
    <BodyGrid columns="1.5fr 0.8fr" gap={34}>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '12px 0 18px' }}>
        <img src={assetPath('jr-academy-logo.png')} alt="JR Academy 匠人学院" style={{ width: 256, height: 78, objectFit: 'contain', objectPosition: 'left center' }} />
        <div>
          <div style={{ fontSize: 56, fontWeight: 900, marginBottom: 12 }}>李敏</div>
          <div style={{ fontSize: 29, lineHeight: 1.5 }}>资深注册会计师<br />ML Tax Solution 创始人</div>
        </div>
        <div><Label bg={colors.yellow} color={colors.dark}>老板 / 高管专场</Label><p style={{ marginTop: 20, fontSize: 28, lineHeight: 1.4 }}>从数据整理、风险识别<br />到专业判断</p></div>
      </div>
      <Panel style={{ height: '100%', minHeight: 0, padding: 12, display: 'flex', justifyContent: 'center' }}>
        <img src={assetPath('li-min-event-poster.jpg')} alt="李敏《AI 对会计行业的影响》活动海报，2026年10月1日，Bupa Melbourne" style={{ width: '100%', height: '100%', minHeight: 0, objectFit: 'contain', borderRadius: 14 }} />
      </Panel>
    </BodyGrid>
  </Frame>;
}
