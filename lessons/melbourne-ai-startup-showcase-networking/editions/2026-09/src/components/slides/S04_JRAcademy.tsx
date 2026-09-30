import { DeckFrame, Panel, Label, colors } from "../deck";
import { assetPath } from "../ui";
export default function S04_JRAcademy() {
  return (
    <div
      data-slide-id="S04_JRAcademy"
      style={{ width: "100%", height: "100%" }}
    >
      <DeckFrame
        tag={"联合发起 / 合作伙伴"}
        title={"JR Academy 匠人学院"}
        subtitle={""}
        accent={colors.yellow}
        titleSize={58}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: ".8fr 1.3fr",
            gap: 32,
            height: "100%",
          }}
        >
          <Panel
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={assetPath("jr-logo.png")}
              alt={"jr-logo.png"}
              style={{ width: 340, height: 230, objectFit: "contain" }}
            />
          </Panel>
          <Panel
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Label bg={colors.yellow}>PARTNER</Label>
            <p
              style={{
                fontSize: 34,
                lineHeight: 1.5,
                margin: "14px 0",
                whiteSpace: "pre-line",
              }}
            >
              {"面向华人学习者与科技从业者的\nIT 与 AI 教育平台。"}
            </p>
            <p
              style={{
                fontSize: 29,
                lineHeight: 1.5,
                margin: "14px 0",
                whiteSpace: "pre-line",
              }}
            >
              {"通过课程、项目实践与职业支持，\n帮助学习者提升技能、连接行业。"}
            </p>
          </Panel>
        </div>
      </DeckFrame>
    </div>
  );
}
