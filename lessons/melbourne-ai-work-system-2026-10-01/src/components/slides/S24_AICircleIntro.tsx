import { DeckFrame, Panel, Label, colors } from "../deck";
import { assetPath } from "../ui";

// Source: apps/ai-circle-funding/src/HomePage.tsx (hero + WhySection).
export default function S24_AICircleIntro() {
  return <div data-slide-id="S24_AICircleIntro" style={{ width: "100%", height: "100%" }}>
    <DeckFrame tag="AI CIRCLE · 匠人 AI圈" title="把项目带出来，把连接带回去" subtitle="本地 AI 人的线下交流活动 · 开发者、产品经理、创业者与 AI 实践者" accent={colors.green}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 30, height: "100%" }}>
        <Panel style={{ padding: 32, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <Label bg={colors.green}>从同城相识，到真实合作</Label>
          <div style={{ display: "grid", gap: 25, marginTop: 22 }}>
            {[
              ["01", "认识本地同行", "面对面交流，认识同城的 AI 从业者与创业团队。"],
              ["02", "交流真实项目", "聊正在做的产品、使用的工具，以及落地中遇到的问题。"],
              ["03", "连接实际机会", "寻找合作、客户与创业机会；有融资意向的项目可自愿登记。"],
            ].map(([n, title, text]) => <div key={n} style={{ display: "grid", gridTemplateColumns: "45px 1fr", gap: 14 }}>
              <span style={{ fontSize: 23, fontWeight: 900, color: colors.red }}>{n}</span>
              <div><h2 style={{ fontSize: 29, margin: "0 0 7px" }}>{title}</h2><p style={{ fontSize: 23, lineHeight: 1.45, margin: 0 }}>{text}</p></div>
            </div>)}
          </div>
          <p style={{ fontSize: 20, margin: "20px 0 0", fontWeight: 700 }}>jracademy.ai/ai-circle/</p>
        </Panel>
        <Panel style={{ padding: 0, overflow: "hidden", display: "flex", flexDirection: "column" }}>
          <img src={assetPath("ai-circle/sydney-community.webp")} alt="悉尼 AI圈参与者围桌交流的真实活动现场" style={{ width: "100%", flex: 1, minHeight: 0, objectFit: "cover" }} />
          <div style={{ padding: "22px 26px", background: colors.yellow }}><strong style={{ fontSize: 31 }}>带上项目，也带上问题。</strong><p style={{ margin: "8px 0 0", fontSize: 22 }}>悉尼 AI圈真实活动现场</p></div>
        </Panel>
      </div>
    </DeckFrame>
  </div>;
}
