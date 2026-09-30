import { DeckFrame, Panel, NumberBadge, colors, fonts } from "../deck";
export default function S03_Agenda() {
  return (
    <div data-slide-id="S03_Agenda" style={{ width: "100%", height: "100%" }}>
      <DeckFrame
        tag={"TONIGHT · 5:30 PM–8:30 PM"}
        title={<>
          今晚怎么聊
          <span style={{ display: "block", fontSize: 30, letterSpacing: 0, marginTop: 10 }}>Tonight’s flow</span>
        </>}
        subtitle={<>
          非正式交流 · 每项目最多 15 分钟：建议展示 10 分钟 + 答疑 5 分钟
          <span style={{ display: "block", fontSize: 18, marginTop: 3 }}>Informal meetup · 15 minutes maximum per project, including 5 minutes for Q&amp;A.</span>
        </>}
        accent={colors.green}
        titleSize={58}
      >
        <div style={{ display: "grid", gap: 9 }}>
          <Panel style={{ padding: "9px 24px" }}>
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
              <span style={{ fontSize: 25, fontWeight: 700 }}>
                {"签到、餐食与自由交流"}
                <span style={{ display: "block", fontSize: 18, fontWeight: 500, color: "#514c48", marginTop: 3 }}>Check-in, food and mingling</span>
              </span>
            </div>
          </Panel>
          <Panel style={{ padding: "9px 24px" }}>
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
              <span style={{ fontSize: 25, fontWeight: 700 }}>
                {"简单开场，说明交流方式"}
                <span style={{ display: "block", fontSize: 18, fontWeight: 500, color: "#514c48", marginTop: 3 }}>Welcome and how the evening works</span>
              </span>
            </div>
          </Panel>
          <Panel style={{ padding: "9px 24px" }}>
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
              <span style={{ fontSize: 25, fontWeight: 700 }}>
                {"7 个项目：展示约 10 分钟 + 答疑 5 分钟"}
                <span style={{ display: "block", fontSize: 18, fontWeight: 500, color: "#514c48", marginTop: 3 }}>7 projects · 10-minute demo + 5-minute Q&amp;A</span>
              </span>
            </div>
          </Panel>
          <Panel style={{ padding: "9px 24px" }}>
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
              <span style={{ fontSize: 25, fontWeight: 700 }}>
                {"一起提问、反馈与讨论"}
                <span style={{ display: "block", fontSize: 18, fontWeight: 500, color: "#514c48", marginTop: 3 }}>Questions, feedback and discussion</span>
              </span>
            </div>
          </Panel>
          <Panel style={{ padding: "9px 24px" }}>
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
              <span style={{ fontSize: 25, fontWeight: 700 }}>
                {"自由交流：继续聊项目、合作与客户"}
                <span style={{ display: "block", fontSize: 18, fontWeight: 500, color: "#514c48", marginTop: 3 }}>Open networking: projects, partners and customers</span>
              </span>
            </div>
          </Panel>
          <div style={{ fontSize: 21, fontWeight: 800, color: colors.red, padding: "3px 4px" }}>
            到 15 分钟主持人会停止分享，即使尚未讲完；后面继续自由交流。
            <span style={{ display: "block", fontSize: 17, fontWeight: 600, marginTop: 3 }}>The host stops each slot at 15 minutes, even if unfinished. Continue the conversation afterwards.</span>
          </div>
        </div>
      </DeckFrame>
    </div>
  );
}
