import { DeckFrame, Panel, Label, colors } from "../deck";
import { assetPath } from "../ui";
export default function S14_Olav() {
  return (
    <div data-slide-id="S14_Olav" style={{ width: "100%", height: "100%" }}>
      <DeckFrame
        tag={"项目 04 / 07"}
        title={"Olav OS"}
        subtitle={<>企业级 AI Agent 操作系统<span style={{ display: "block", fontSize: 18, marginTop: 4 }}>Enterprise AI agent operating system</span></>}
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
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <Panel style={{ flex: 1 }}>
              <p
                style={{
                  fontSize: 26,
                  lineHeight: 1.4,
                  margin: "9px 0",
                  whiteSpace: "pre-line",
                }}
              >
                {
                  "服务流程复杂、单据密集的专业企业。\n事件溯源记录操作，状态机管理权限，\n业务规则与人工审批决定流程能否推进。"
                }
              <span style={{ display: "block", fontSize: 19, lineHeight: 1.4, color: "#514c48", marginTop: 8 }}>For document-heavy businesses with complex workflows. Event sourcing records actions; state machines manage permissions; rules and human approval govern progress.</span>
              </p>
            </Panel>
            <Panel style={{ borderTop: "8px solid #38B6FF" }}>
              <Label bg={colors.blue}>核心产品 / CORE PRODUCT</Label>
              <p
                style={{
                  fontSize: 23,
                  lineHeight: 1.4,
                  margin: "9px 0",
                  whiteSpace: "pre-line",
                }}
              >
                {
                  "企业级 AI Agent、自动化业务流程、状态机\n人工审批、合规审计、行业适配器"
                }
              <span style={{ display: "block", fontSize: 19, lineHeight: 1.4, color: "#514c48", marginTop: 8 }}>Enterprise AI agents, automated workflows, state machines, human approvals, compliance audits and industry adapters.</span>
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
                fontSize: 23,
                lineHeight: 1.4,
                margin: "9px 0",
                whiteSpace: "pre-line",
              }}
            >
              {"移民留学、法律、财税审计\n猎头招聘等专业服务"}
              <span style={{ display: "block", fontSize: 19, lineHeight: 1.4, color: "#514c48", marginTop: 8 }}>Migration and education, legal, tax and audit, recruitment and other professional services.</span>
            </p>
          </Panel>
        </div>
      </DeckFrame>
    </div>
  );
}
