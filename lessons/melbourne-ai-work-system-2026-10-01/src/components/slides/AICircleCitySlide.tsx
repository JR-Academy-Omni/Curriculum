import { DeckFrame, Panel, Label, colors } from "../deck";
import { assetPath } from "../ui";

// City identities and original illustrations: apps/ai-circle-funding/src/cityShare.ts + public/cities/.
export default function AICircleCitySlide({ name, english, slug }: { name: string; english: string; slug: string }) {
  return <div data-slide-id={`AICircle-${slug}`} style={{ width: "100%", height: "100%" }}>
    <DeckFrame tag="AI CIRCLE · 本地 AI 人的线下交流活动" title={`${name} AI圈`} subtitle={`${english} · 认识本地同行，交流真实项目`} accent={colors.green}>
      <div style={{ display: "grid", gridTemplateColumns: "1.65fr .75fr", gap: 32, height: "100%" }}>
        <Panel style={{ padding: 0, overflow: "hidden" }}><img src={assetPath(`ai-circle/${slug}-paper-cut.webp`)} alt={`${name}城市剪纸插画，来自 AI圈官网`} style={{ width: "100%", height: "100%", objectFit: "cover" }} /></Panel>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: 25 }}>
          <Label bg={colors.green}>AI CIRCLE CITIES</Label>
          <div><div style={{ fontSize: 68, fontWeight: 900, lineHeight: 1.15 }}>{name}</div><div style={{ fontSize: 30, marginTop: 12, fontWeight: 700 }}>{english}</div></div>
          <p style={{ fontSize: 28, lineHeight: 1.6, margin: "10px 0" }}>把正在做的项目<br />带到同城的人面前。</p>
          <p style={{ fontSize: 23, lineHeight: 1.5, margin: 0 }}>交流工具与产品方案，<br />连接合作与创业机会。</p>
          <p style={{ fontSize: 19, lineHeight: 1.5, margin: "20px 0 0" }}>城市详情与活动报名<br /><strong>jracademy.ai/ai-circle/</strong></p>
        </div>
      </div>
    </DeckFrame>
  </div>;
}
