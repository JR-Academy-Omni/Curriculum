import { DeckFrame, Panel, NumberBadge, colors, fonts } from "../deck";
export default function S03_Agenda() {
  return (
    <div data-slide-id="S03_Agenda" style={{ width: "100%", height: "100%" }}>
      <DeckFrame
        tag={"TONIGHT · 5:30 PM–8:30 PM"}
        title={"今晚怎么聊"}
        subtitle={"非正式交流 · 每项目最多 15 分钟：建议展示 10 分钟 + 答疑 5 分钟"}
        accent={colors.green}
        titleSize={58}
      >
        <div style={{ display: "grid", gap: 12 }}>
          <Panel style={{ padding: "13px 24px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
              <NumberBadge>1</NumberBadge>
              <span
                style={{
                  width: 280,
                  fontFamily: fonts.mono,
                  fontSize: 25,
                  fontWeight: 800,
                }}
              >
                {"5:30–6:00 PM"}
              </span>
              <span style={{ fontSize: 27, fontWeight: 700 }}>
                {"签到、餐食与自由交流"}
              </span>
            </div>
          </Panel>
          <Panel style={{ padding: "13px 24px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
              <NumberBadge>2</NumberBadge>
              <span
                style={{
                  width: 280,
                  fontFamily: fonts.mono,
                  fontSize: 25,
                  fontWeight: 800,
                }}
              >
                {"6:00–6:10 PM"}
              </span>
              <span style={{ fontSize: 27, fontWeight: 700 }}>
                {"简单开场，说明交流方式"}
              </span>
            </div>
          </Panel>
          <Panel style={{ padding: "13px 24px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
              <NumberBadge>3</NumberBadge>
              <span
                style={{
                  width: 280,
                  fontFamily: fonts.mono,
                  fontSize: 25,
                  fontWeight: 800,
                }}
              >
                {"6:10–7:55 PM"}
              </span>
              <span style={{ fontSize: 27, fontWeight: 700 }}>
                {"7 个项目：展示约 10 分钟 + 答疑 5 分钟"}
              </span>
            </div>
          </Panel>
          <Panel style={{ padding: "13px 24px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
              <NumberBadge>4</NumberBadge>
              <span
                style={{
                  width: 280,
                  fontFamily: fonts.mono,
                  fontSize: 25,
                  fontWeight: 800,
                }}
              >
                {"7:55–8:10 PM"}
              </span>
              <span style={{ fontSize: 27, fontWeight: 700 }}>
                {"一起提问、反馈与讨论"}
              </span>
            </div>
          </Panel>
          <Panel style={{ padding: "13px 24px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
              <NumberBadge>5</NumberBadge>
              <span
                style={{
                  width: 280,
                  fontFamily: fonts.mono,
                  fontSize: 25,
                  fontWeight: 800,
                }}
              >
                {"8:10–8:30 PM"}
              </span>
              <span style={{ fontSize: 27, fontWeight: 700 }}>
                {"自由交流：继续聊项目、合作与客户"}
              </span>
            </div>
          </Panel>
          <div style={{ fontSize: 24, fontWeight: 800, color: colors.red, padding: "6px 4px" }}>
            到 15 分钟主持人会停止分享，即使尚未讲完；后面继续自由交流。
          </div>
        </div>
      </DeckFrame>
    </div>
  );
}
