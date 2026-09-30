import { DeckFrame, Panel, Label, colors } from "../deck";
import { assetPath } from "../ui";
export default function S17_Ponyknows() {
  return (
    <div
      data-slide-id="S17_Ponyknows"
      style={{ width: "100%", height: "100%" }}
    >
      <DeckFrame
        tag={"项目 / PROJECT 07 / 07"}
        title={"Ponyknows"}
        subtitle={<><span>AI 多智能体精准教学平台</span><span style={{ display: "block", fontSize: 20, color: "#625b55", marginTop: 4 }}>Multi-agent AI platform for targeted teaching</span></>}
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
                  "连接教学助手、辅学系统与纸笔交互。\n借助智慧打印终端与智慧笔，协同课堂、\n练习与反馈，探索更完整的教学闭环。"
                }
              </p>
              <p style={{ fontSize: 20, lineHeight: 1.35, color: "#625b55", margin: "8px 0 0" }}>Connects teaching assistants, study support and pen-and-paper interaction. Smart printers and pens link classroom teaching, practice and feedback.</p>
            </Panel>
            <Panel style={{ borderTop: "8px solid #ff5757" }}>
              <Label bg={colors.red}>核心产品 / CORE PRODUCT</Label>
              <p
                style={{
                  fontSize: 23,
                  lineHeight: 1.4,
                  margin: "10px 0",
                  whiteSpace: "pre-line",
                }}
              >
                {
                  "AI 多智能体教学协同、教学助手、辅学系统\n智慧打印终端、智慧笔、精准教学闭环"
                }
              </p>
              <p style={{ fontSize: 20, lineHeight: 1.35, color: "#625b55", margin: "8px 0 0" }}>Multi-agent coordination · Teaching assistants · Study support · Smart printers and pens · Teaching–practice–feedback loop</p>
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
              src={assetPath("ponyknows-logo.png")}
              alt={"ponyknows-logo.png"}
              style={{ width: 290, height: 180, objectFit: "contain" }}
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
                fontSize: 23,
                lineHeight: 1.4,
                margin: "10px 0",
                whiteSpace: "pre-line",
              }}
            >
              {"教师与学习者\n真实课堂与纸笔练习"}
            </p>
              <p style={{ fontSize: 20, lineHeight: 1.35, color: "#625b55", margin: "8px 0 0" }}>Teachers and learners · Classrooms and pen-and-paper practice</p>
          </Panel>
        </div>
        <div style={{ fontSize: 17, marginTop: 16, color: "#514c48" }}>
          产品展示、Demo 与互动问答 · Product demo & Q&A
        </div>
      </DeckFrame>
    </div>
  );
}
