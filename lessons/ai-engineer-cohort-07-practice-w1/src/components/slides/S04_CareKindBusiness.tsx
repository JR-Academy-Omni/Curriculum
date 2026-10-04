import { AnimatedGroup, DeckFrame, Label, Panel, colors, fonts } from '../deck';

const business = [
  ['谁付钱', '养老机构采购', '护理人员使用，老人受益；机构为记录与交班效率付费。'],
  ['交付什么', '可追溯的老人档案', '整理护理事件、交班摘要与待跟进任务，保留原始来源和确认人。'],
  ['怎么收费 · 假设', '订阅 + 用量 + 接入', '机构订阅含音频额度，超额用量包；系统接入与培训单独计费。'],
];
export default function S04_CareKindBusiness() {
  return <DeckFrame tag="CAREKIND AI · BUSINESS MODEL" title="CareKind AI：养老记录与交班助手" subtitle="先验证一个养老工作流：把零散信息整理成有人确认、可以跟进的记录。" titleSize={54}>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 18, fontFamily: fonts.body, color: colors.dark }}>
      <AnimatedGroup delay={.16} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 18 }}>
        {business.map(([tag,title,body],i) => <Panel key={tag} style={{ padding: 20 }}>
          <Label bg={[colors.yellow,colors.blue,colors.green][i]} color={colors.dark}>{tag}</Label>
          <h2 style={{ fontSize: 28, margin: '14px 0 10px', lineHeight: 1.2 }}>{title}</h2>
          <p style={{ fontSize: 23, lineHeight: 1.4, margin: 0 }}>{body}</p>
        </Panel>)}
      </AnimatedGroup>
      <AnimatedGroup delay={.3}><Panel bg={colors.dark} style={{ color: colors.white, padding: 22 }}>
        <Label bg={colors.yellow} color={colors.dark}>8 小时录音 · 后续验证方向</Label>
        <div style={{ fontSize: 27, fontWeight: 800, lineHeight: 1.4, marginTop: 12 }}>分段 → 人 / 时间 / 事件归属 → 分析草稿 → 人工确认 → 档案与任务</div>
        <p style={{ fontSize: 22, lineHeight: 1.4, margin: '12px 0 0' }}>先短语音 MVP，再验证长录音的授权、多人归属、噪声、成本与复核量。<br/>每条分析回溯原片段；归属不明待确认，医疗内容由专业人员审核。</p>
      </Panel></AnimatedGroup>
      <div style={{ fontSize: 22, lineHeight: 1.4 }}><strong>付费试点看：</strong>记录时间、漏项率、复核负担与续费；收入须覆盖处理、存储、支持和接入成本。</div>
      <div style={{ fontSize: 17, color: '#514c48', lineHeight: 1.4 }}>商业与功能方案待验证，不代表已实现。隐私与医疗复核参考：<a href="https://www.oaic.gov.au/privacy/privacy-guidance-for-organisations-and-government-agencies/guidance-on-privacy-and-the-use-of-commercially-available-ai-products" target="_blank" rel="noreferrer" style={{color:'#514c48'}}>OAIC</a> · <a href="https://www.racgp.org.au/running-a-practice/technology/artificial-intelligence-ai/artificial-intelligence-ai-scribes" target="_blank" rel="noreferrer" style={{color:'#514c48'}}>RACGP</a></div>
    </div>
  </DeckFrame>;
}
