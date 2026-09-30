import { DeckFrame, Panel, Label, colors } from "../deck";
import { assetPath } from "../ui";
export default function S12_Deerbit() {
  return (
    <div data-slide-id="S12_Deerbit" style={{ width: "100%", height: "100%" }}>
      <DeckFrame
        tag={"项目 02 / 07"}
        title={"Deerbit AI"}
        subtitle={<>非托管 AI 交易工具<span style={{ display: "block", fontSize: 18, marginTop: 4 }}>Non-custodial AI trading tools</span></>}
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
                  margin: "9px 0",
                  whiteSpace: "pre-line",
                }}
              >
                {
                  "用自然语言表达交易想法，由 AI 协助\n研究、生成策略、回测和模拟交易。\n用户确认后，再执行并持续监控。"
                }
              <span style={{ display: "block", fontSize: 19, lineHeight: 1.4, color: "#514c48", marginTop: 8 }}>Describe trading ideas in natural language. AI helps research, develop strategies, backtest and simulate trades. Execution requires user confirmation, followed by monitoring.</span>
              </p>
            </Panel>
            <Panel style={{ borderTop: "8px solid #FFDE59" }}>
              <Label bg={colors.yellow}>核心产品 / CORE PRODUCT</Label>
              <p
                style={{
                  fontSize: 23,
                  lineHeight: 1.4,
                  margin: "9px 0",
                  whiteSpace: "pre-line",
                }}
              >
                {
                  "AI 交易助手、市场研究、策略生成、历史回测\n模拟交易、多平台连接、止盈止损与风险监控"
                }
              <span style={{ display: "block", fontSize: 19, lineHeight: 1.4, color: "#514c48", marginTop: 8 }}>AI trading assistant, market research, strategies, backtesting and paper trading; platform connections, stop orders and risk monitoring.</span>
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
              src={assetPath("deerbit-logo.png")}
              alt={"deerbit-logo.png"}
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
                fontSize: 23,
                lineHeight: 1.4,
                margin: "9px 0",
                whiteSpace: "pre-line",
              }}
            >
              {"资金保留在用户自己的\n交易所、钱包或券商账户"}
              <span style={{ display: "block", fontSize: 19, lineHeight: 1.4, color: "#514c48", marginTop: 8 }}>Funds stay in your own exchange, wallet or brokerage account.</span>
            </p>
          </Panel>
        </div>
        <div style={{ fontSize: 17, marginTop: 16, color: "#514c48" }}>
          产品展示、Demo 与互动问答 / Product demo &amp; Q&amp;A
        </div>
      </DeckFrame>
    </div>
  );
}
