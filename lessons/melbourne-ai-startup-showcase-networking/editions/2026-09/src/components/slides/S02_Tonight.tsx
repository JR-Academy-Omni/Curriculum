import { DeckFrame, Panel, Label, colors } from "../deck";
export default function S02_Tonight() {
  return (
    <div data-slide-id="S02_Tonight" style={{ width: "100%", height: "100%" }}>
      <DeckFrame
        tag={"WELCOME"}
        title={"今晚，围绕项目聊起来"}
        subtitle={"一场非正式的项目交流：看 Demo、提问题、认识彼此。"}
        accent={colors.blue}
        titleSize={58}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: ".65fr 1.4fr",
            gap: 32,
            height: "100%",
          }}
        >
          <Panel
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                fontSize: 180,
                fontWeight: 900,
                lineHeight: 1,
                color: colors.red,
              }}
            >
              7
            </div>
            <p
              style={{
                fontSize: 30,
                lineHeight: 1.5,
                margin: "14px 0",
                whiteSpace: "pre-line",
              }}
            >
              {"个 AI 创业项目现场展示"}
            </p>
          </Panel>
          <Panel
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Label bg={colors.blue}>PROJECTS · QUESTIONS · CONNECTIONS</Label>
            <p
              style={{
                fontSize: 33,
                lineHeight: 1.5,
                margin: "14px 0",
                whiteSpace: "pre-line",
              }}
            >
              {"分享正在做的产品，聊真实问题和下一步需求"}
            </p>
            <p
              style={{
                fontSize: 28,
                lineHeight: 1.5,
                margin: "14px 0",
                whiteSpace: "pre-line",
              }}
            >
              {
                "认识创业者、开发者与投资人，寻找潜在客户和合作机会。\n融资与客户连接可能在交流中产生，先从一次对话开始。"
              }
            </p>
          </Panel>
        </div>
      </DeckFrame>
    </div>
  );
}
