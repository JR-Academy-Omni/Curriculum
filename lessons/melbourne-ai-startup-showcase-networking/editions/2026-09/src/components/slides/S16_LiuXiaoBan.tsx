import { DeckFrame, Panel, Label, colors } from "../deck";
import { assetPath } from "../ui";
export default function S16_LiuXiaoBan() {
  return (
    <div
      data-slide-id="S16_LiuXiaoBan"
      style={{ width: "100%", height: "100%" }}
    >
      <DeckFrame
        tag={"项目 / PROJECT 06 / 07"}
        title={"留小伴 · LiuXiaoBan"}
        subtitle={<><span>留学生 AI 陪伴与生活社交应用</span><span style={{ display: "block", fontSize: 20, color: "#625b55", marginTop: 4 }}>AI companionship, daily life and social connections for international students</span></>}
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
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <Panel style={{ flex: 1 }}>
              <p
                style={{
                  fontSize: 26,
                  lineHeight: 1.4,
                  margin: "10px 0",
                  whiteSpace: "pre-line",
                }}
              >
                {
                  "围绕初到异国的孤独感、社交与生活需求，\n提供有个性、会主动互动的 AI 小伴。\n结合真实社交，帮助留学生找到同伴。"
                }
              </p>
              <p style={{ fontSize: 20, lineHeight: 1.35, color: "#625b55", margin: "8px 0 0" }}>A proactive AI companion with its own personality, addressing loneliness and everyday needs abroad. Real-world social features help students find friends.</p>
            </Panel>
            <Panel style={{ borderTop: "8px solid #FFDE59" }}>
              <Label bg={colors.yellow}>核心产品 / CORE PRODUCT</Label>
              <p
                style={{
                  fontSize: 23,
                  lineHeight: 1.4,
                  margin: "10px 0",
                  whiteSpace: "pre-line",
                }}
              >
                {
                  "个性化 AI 小伴、主动互动与关系养成\n班级、广场、漂流瓶、留学生生活服务"
                }
              </p>
              <p style={{ fontSize: 20, lineHeight: 1.35, color: "#625b55", margin: "8px 0 0" }}>Personalized companions · Proactive interaction · Relationship building · Classes · Community feed · Message bottles · Student services</p>
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
              style={{ width: 290, height: 180, objectFit: "contain" }}
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
                fontSize: 23,
                lineHeight: 1.4,
                margin: "10px 0",
                whiteSpace: "pre-line",
              }}
            >
              {"全球留学生"}
            </p>
              <p style={{ fontSize: 20, lineHeight: 1.35, color: "#625b55", margin: "8px 0 0" }}>International students worldwide</p>
          </Panel>
        </div>
        <div style={{ fontSize: 17, marginTop: 16, color: "#514c48" }}>
          产品展示、Demo 与互动问答 · Product demo & Q&A
        </div>
      </DeckFrame>
    </div>
  );
}
