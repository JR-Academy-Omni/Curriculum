import { DeckFrame, Panel, Label, colors, fonts } from '../deck';
export default function S01_Cover() {
  return <DeckFrame tag="JR ACADEMY · OPC 创业营 W11" title="用户增长的方法" subtitle="增长原理与飞轮 · 四个真实案例 · 36种方法" titleSize={100}>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32, paddingTop: 24 }}>
      <div style={{ display: 'flex', gap: 18 }}><Label bg={colors.yellow} color={colors.dark}>36 种方法</Label><Label bg={colors.warmBg} color={colors.dark}>四个真实增长案例</Label><Label bg={colors.warmBg} color={colors.dark}>90 分钟 · 2026.10.11</Label></div>
      <Panel style={{ padding: 36 }}><div style={{ fontSize: 44, fontWeight: 800, lineHeight: 1.4 }}>找到客户 → 交付价值 → 留存与传播 → 带来下一轮客户 ↺</div><p style={{ fontSize: 29, margin: '20px 0 0', lineHeight: 1.5 }}>给已经有产品或服务、正在寻找第一批客户的一人公司。</p></Panel>
      <p style={{ fontFamily: fonts.body, fontSize: 23, margin: 0 }}>先解释为什么能增长，再把具体方法放回飞轮各环节。</p>
    </div>
  </DeckFrame>;
}
