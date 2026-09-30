import { DeckFrame, Panel, Label, colors } from "../deck";
export default function S02_Tonight() {
  return (
    <div data-slide-id="S02_Tonight" style={{ width: "100%", height: "100%" }}>
      <DeckFrame
        tag={"WELCOME"}
        title={<>
          今晚，围绕项目聊起来
          <span style={{ display: "block", fontSize: 30, letterSpacing: 0, marginTop: 12 }}>Tonight, let’s talk projects</span>
        </>}
        subtitle={<>
          一场非正式的项目交流：看 Demo、提问题、认识彼此。
          <span style={{ display: "block", fontSize: 19, marginTop: 4 }}>An informal meetup to see demos, ask questions and meet each other.</span>
        </>}
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
                fontSize: 156,
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
                margin: "10px 0",
                whiteSpace: "pre-line",
              }}
            >
              {"个 AI 创业项目现场展示"}
              <span style={{ display: "block", fontSize: 22, color: "#514c48", marginTop: 8 }}>AI startup projects, live</span>
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
                fontSize: 30,
                lineHeight: 1.5,
                margin: "10px 0",
                whiteSpace: "pre-line",
              }}
            >
              {"分享正在做的产品，聊真实问题和下一步需求"}
              <span style={{ display: "block", fontSize: 22, color: "#514c48", marginTop: 8 }}>Share what you’re building, the challenges and what you need next.</span>
            </p>
            <p
              style={{
                fontSize: 25,
                lineHeight: 1.5,
                margin: "10px 0",
                whiteSpace: "pre-line",
              }}
            >
              {
                "认识创业者、开发者与投资人，寻找潜在客户和合作机会。\n融资与客户连接可能在交流中产生，先从一次对话开始。"
              }
              <span style={{ display: "block", fontSize: 20, color: "#514c48", marginTop: 8 }}>
                Meet founders, developers and investors. Conversations may lead to customers, collaboration or funding connections.
              </span>
            </p>
          </Panel>
        </div>
      </DeckFrame>
    </div>
  );
}
