import { AnimatedGroup, Panel, Label, colors, fonts } from "../deck";
import { Slide } from "../ui";

export default function S01_Cover() {
  return (
    <div data-slide-id="S01_Cover" style={{ width: "100%", height: "100%" }}>
      <Slide style={{ position: "relative", color: colors.dark,
        backgroundImage: "linear-gradient(rgba(16,22,47,.055) 1px, transparent 1px), linear-gradient(90deg, rgba(16,22,47,.055) 1px, transparent 1px)",
        backgroundSize: "48px 48px" }}>
        <div aria-hidden style={{ position: "absolute", width: 290, height: 290, borderRadius: "50%", border: `36px solid ${colors.yellow}`, right: -105, bottom: -145 }} />
        <div style={{ position: "absolute", left: 100, right: 100, top: 76, bottom: 80, display: "flex", flexDirection: "column" }}>
          <AnimatedGroup style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <Label bg={colors.yellow}>MELBOURNE · 2026.09.30</Label>
            <span style={{ fontFamily: fonts.mono, fontSize: 17, letterSpacing: 2, fontWeight: 700 }}>STARTUP SHOWCASE & NETWORKING</span>
          </AnimatedGroup>
          <div style={{ flex: 1, display: "grid", gridTemplateColumns: "870px 430px", gap: 100, alignItems: "center" }}>
            <AnimatedGroup delay={0.1}>
              <p style={{ margin: "0 0 20px", fontSize: 28, fontWeight: 700 }}>墨尔本 AI 创业项目展示交流</p>
              <h1 style={{ fontFamily: fonts.heading, fontSize: 91, fontWeight: 900, letterSpacing: -3, lineHeight: 1.22, margin: 0 }}>
                让真实项目<br />
                <span style={{ backgroundImage: `linear-gradient(transparent 73%, ${colors.yellow} 73%, ${colors.yellow} 94%, transparent 94%)` }}>遇见新的可能。</span>
              </h1>
              <p style={{ fontSize: 27, fontWeight: 600, margin: "28px 0 34px", color: "#514c48" }}>看产品 · 聊想法 · 认识下一位合作伙伴</p>
              <div style={{ display: "flex", gap: 22, alignItems: "center", fontSize: 26, fontWeight: 800 }}>
                <span>9 月 30 日 · 星期三</span>
                <span style={{ width: 2, height: 27, background: colors.dark }} />
                <span>5:30 PM–8:30 PM</span>
              </div>
              <p style={{ fontSize: 24, margin: "14px 0 0" }}>ANNG Gallery <span style={{ color: "#625b55", fontSize: 21 }}> / 场地支持 CloudTech Group</span></p>
            </AnimatedGroup>
            <AnimatedGroup delay={0.22} style={{ position: "relative", paddingTop: 26 }}>
              <Panel bg={colors.dark} style={{ color: colors.white, padding: "36px 34px", boxShadow: `12px 12px 0 ${colors.red}`, minHeight: 355 }}>
                <Label bg={colors.green}>LIVE DEMO · 现场交流</Label>
                <div style={{ display: "flex", alignItems: "baseline", gap: 13, marginTop: 20 }}>
                  <span style={{ fontFamily: fonts.heading, fontSize: 160, fontWeight: 900, lineHeight: 1, letterSpacing: -8, color: colors.yellow }}>07</span>
                  <span style={{ fontSize: 26, fontWeight: 700 }}>个项目</span>
                </div>
                <div style={{ fontSize: 28, fontWeight: 800, marginTop: 14 }}>产品展示 × 人与人的连接</div>
                <div style={{ width: 70, height: 5, borderRadius: 3, background: colors.blue, margin: "25px 0 18px" }} />
                <p style={{ fontSize: 22, lineHeight: 1.5, margin: 0, color: "#efebe6" }}>创业者、开发者、行业伙伴<br />从一个对话开始。</p>
              </Panel>
              <div aria-hidden style={{ position: "absolute", right: -18, top: 0, width: 65, height: 65, borderRadius: "50%", background: colors.blue, border: `2px solid ${colors.dark}`, display: "grid", placeItems: "center", fontSize: 37, fontWeight: 800 }}>↗</div>
            </AnimatedGroup>
          </div>
          <AnimatedGroup delay={0.32} style={{ borderTop: "2px solid rgba(16,22,47,.2)", paddingTop: 20, display: "flex", alignItems: "center", gap: 24 }}>
            <span style={{ fontFamily: fonts.mono, fontSize: 15, fontWeight: 700, letterSpacing: 1 }}>TOGETHER WITH</span>
            <span style={{ fontSize: 21, fontWeight: 700 }}>匠人学院 × ANNG × 中关村科技企业家协会 × 新金山俱乐部 × KSUG</span>
          </AnimatedGroup>
        </div>
      </Slide>
    </div>
  );
}
