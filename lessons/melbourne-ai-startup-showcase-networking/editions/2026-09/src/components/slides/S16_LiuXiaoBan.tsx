import { DeckFrame, Panel, Label, colors } from "../deck";
import { assetPath } from "../ui";
export default function S16_LiuXiaoBan() {
  return (
    <div
      data-slide-id="S16_LiuXiaoBan"
      style={{ width: "100%", height: "100%" }}
    >
      <DeckFrame
        tag={"项目 06 / 07"}
        title={"留小伴"}
        subtitle={"留学生 AI 陪伴与生活社交应用"}
        accent={colors.yellow}
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
                  "围绕初到异国的孤独感、社交与生活需求，\n提供有个性、会主动互动的 AI 小伴。\n结合真实社交，帮助留学生找到同伴。"
                }
              </p>
            </Panel>
            <Panel style={{ borderTop: "8px solid #FFDE59" }}>
              <Label bg={colors.yellow}>核心产品</Label>
              <p
                style={{
                  fontSize: 25,
                  lineHeight: 1.5,
                  margin: "14px 0",
                  whiteSpace: "pre-line",
                }}
              >
                {
                  "个性化 AI 小伴、主动互动与关系养成\n班级、广场、漂流瓶、留学生生活服务"
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
              src={assetPath("liuxiaoban-logo.png")}
              alt={"liuxiaoban-logo.png"}
              style={{ width: 290, height: 210, objectFit: "contain" }}
            />
            <div
              style={{
                width: 64,
                height: 6,
                background: colors.yellow,
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
              {"全球留学生"}
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
