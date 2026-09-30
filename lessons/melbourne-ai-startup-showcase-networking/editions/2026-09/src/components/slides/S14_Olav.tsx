import { DeckFrame, Panel, Label, colors } from "../deck";
import { assetPath } from "../ui";
export default function S14_Olav() {
  return (
    <div data-slide-id="S14_Olav" style={{ width: "100%", height: "100%" }}>
      <DeckFrame
        tag={"项目 04 / 07"}
        title={"Olav OS"}
        subtitle={"企业级 AI Agent 操作系统"}
        accent={colors.blue}
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
                  "服务流程复杂、单据密集的专业企业。\n事件溯源记录操作，状态机管理权限，\n业务规则与人工审批决定流程能否推进。"
                }
              </p>
            </Panel>
            <Panel style={{ borderTop: "8px solid #38B6FF" }}>
              <Label bg={colors.blue}>核心产品</Label>
              <p
                style={{
                  fontSize: 25,
                  lineHeight: 1.5,
                  margin: "14px 0",
                  whiteSpace: "pre-line",
                }}
              >
                {
                  "企业级 AI Agent、自动化业务流程、状态机\n人工审批、合规审计、行业适配器"
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
              src={assetPath("olav-os-logo.svg")}
              alt={"olav-os-logo.svg"}
              style={{ width: 290, height: 210, objectFit: "contain" }}
            />
            <div
              style={{
                width: 64,
                height: 6,
                background: colors.blue,
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
              {"移民留学、法律、财税审计\n猎头招聘等专业服务"}
            </p>
          </Panel>
        </div>
      </DeckFrame>
    </div>
  );
}
