import { DeckFrame, Panel, Label, colors } from "../deck";
import { assetPath } from "../ui";
export default function S13_AirBotix() {
  return (
    <div data-slide-id="S13_AirBotix" style={{ width: "100%", height: "100%" }}>
      <DeckFrame
        tag={"项目 03 / 07"}
        title={"AirBotix"}
        subtitle={"青少年 AI 编程教育平台"}
        accent={colors.red}
        titleSize={58}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.4fr .7fr",
            gap: 30,
            height: "100%",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <Panel style={{ flex: 1 }}>
              <p
                style={{
                  fontSize: 29,
                  lineHeight: 1.5,
                  margin: "14px 0",
                  whiteSpace: "pre-line",
                }}
              >
                {
                  "面向 5–17 岁青少年，用适龄工具创作\n故事、游戏、动画、网站与代码项目。\n孩子主导创作，AI 辅助，教师指导。"
                }
              </p>
            </Panel>
            <Panel style={{ borderTop: "8px solid #ff5757" }}>
              <Label bg={colors.red}>核心产品</Label>
              <p
                style={{
                  fontSize: 25,
                  lineHeight: 1.5,
                  margin: "14px 0",
                  whiteSpace: "pre-line",
                }}
              >
                {
                  "Story Blocks、Creative Code Studio、Kids OpenCode\n每周小班课、Holiday Camps、一对一辅导、学校合作"
                }
              </p>
            </Panel>
          </div>
          <Panel
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <img
              src={assetPath("airbotix-logo.png")}
              alt={"airbotix-logo.png"}
              style={{ width: 290, height: 210, objectFit: "contain" }}
            />
            <div
              style={{
                width: 64,
                height: 6,
                background: colors.red,
                margin: "26px auto",
              }}
            />
            <p
              style={{
                fontSize: 25,
                lineHeight: 1.5,
                margin: "14px 0",
                whiteSpace: "pre-line",
              }}
            >
              {"5–17 岁青少年\n家庭与学校"}
            </p>
          </Panel>
        </div>
        <div style={{ fontSize: 17, marginTop: 16, color: "#514c48" }}>
          产品展示、Demo 与互动问答
        </div>
      </DeckFrame>
    </div>
  );
}
