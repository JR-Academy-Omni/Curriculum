import { DeckFrame, Panel, Label, colors } from "../deck";
import { assetPath } from "../ui";
export default function S15_Vela() {
  return (
    <div data-slide-id="S15_Vela" style={{ width: "100%", height: "100%" }}>
      <DeckFrame
        tag={"项目 05 / 07"}
        title={"Vela"}
        subtitle={"“过程透明”的 AI 占星解读产品"}
        accent={colors.green}
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
                  "面向海外华人，提供免费排盘与付费\n专业解读报告。展示选盘、交叉验证\n及分析依据，让用户看见解读过程。"
                }
              </p>
            </Panel>
            <Panel style={{ borderTop: "8px solid #7ED957" }}>
              <Label bg={colors.green}>核心产品</Label>
              <p
                style={{
                  fontSize: 25,
                  lineHeight: 1.5,
                  margin: "14px 0",
                  whiteSpace: "pre-line",
                }}
              >
                {
                  "免费 AI 排盘、专业解读报告、透明分析过程\n持续积累的用户档案、个性化解读"
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
              src={assetPath("vela-logo.png")}
              alt={"vela-logo.png"}
              style={{ width: 290, height: 210, objectFit: "contain" }}
            />
            <div
              style={{
                width: 64,
                height: 6,
                background: colors.green,
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
              {"面向海外华人的\n消费端 AI 产品"}
            </p>
          </Panel>
        </div>
      </DeckFrame>
    </div>
  );
}
