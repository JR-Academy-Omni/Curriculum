import { DeckFrame, Panel, NumberBadge, colors } from "../deck";
export default function S10_Order() {
  return (
    <div data-slide-id="S10_Order" style={{ width: "100%", height: "100%" }}>
      <DeckFrame
        tag={"7 PROJECTS"}
        title={"项目分享顺序"}
        subtitle={"每项目最多 15 分钟 · 展示建议 10 分钟，留 5 分钟答疑 · 到时主持人停止分享"}
        accent={colors.blue}
        titleSize={58}
      >
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}
        >
          <Panel style={{ padding: 24 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
              <NumberBadge>01</NumberBadge>
              <span style={{ fontSize: 34, fontWeight: 800 }}>{"Furday"}</span>
            </div>
          </Panel>
          <Panel style={{ padding: 24 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
              <NumberBadge>02</NumberBadge>
              <span style={{ fontSize: 34, fontWeight: 800 }}>
                {"Deerbit AI"}
              </span>
            </div>
          </Panel>
          <Panel style={{ padding: 24 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
              <NumberBadge>03</NumberBadge>
              <span style={{ fontSize: 34, fontWeight: 800 }}>
                {"AirBotix"}
              </span>
            </div>
          </Panel>
          <Panel style={{ padding: 24 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
              <NumberBadge>04</NumberBadge>
              <span style={{ fontSize: 34, fontWeight: 800 }}>{"Olav OS"}</span>
            </div>
          </Panel>
          <Panel style={{ padding: 24 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
              <NumberBadge>05</NumberBadge>
              <span style={{ fontSize: 34, fontWeight: 800 }}>{"Vela"}</span>
            </div>
          </Panel>
          <Panel style={{ padding: 24 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
              <NumberBadge>06</NumberBadge>
              <span style={{ fontSize: 34, fontWeight: 800 }}>{"留小伴"}</span>
            </div>
          </Panel>
          <Panel style={{ padding: 24 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
              <NumberBadge>07</NumberBadge>
              <span style={{ fontSize: 34, fontWeight: 800 }}>
                {"Ponyknows"}
              </span>
            </div>
          </Panel>
        </div>
      </DeckFrame>
    </div>
  );
}
