import { DeckFrame, Panel, Label, colors } from "../deck";
import { assetPath } from "../ui";
export default function S20_Join() {
  return (
    <div data-slide-id="S20_Join" style={{ width: "100%", height: "100%" }}>
      <DeckFrame
        tag={"STAY CONNECTED"}
        title={"扫码加入澳洲 AI圈"}
        subtitle={"今晚见面，之后常联系 · Meet tonight. Stay connected."}
        accent={colors.yellow}
        titleSize={58}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr .9fr",
            gap: 40,
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
            <Label bg={colors.blue}>AI CIRCLE · MELBOURNE</Label>
            <p
              style={{
                fontSize: 32,
                lineHeight: 1.5,
                margin: "14px 0",
                whiteSpace: "pre-line",
              }}
            >
              {"墨尔本 2 群 / Melbourne Group 2\n继续聊产品、分享经验、认识同行\nTalk products, share experience, meet peers."}
            </p>
            <p
              style={{
                fontSize: 20,
                lineHeight: 1.5,
                margin: "14px 0",
                whiteSpace: "pre-line",
              }}
            >
              {"非正式项目交流 · 认识创业者、投资人与潜在客户"}
            </p>
          </Panel>
          <Panel
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={assetPath("ai-circle-qr.jpg")}
              alt={"ai-circle-qr.jpg"}
              style={{ width: 370, height: 350, objectFit: "contain" }}
            />
            <p
              style={{
                fontSize: 25,
                lineHeight: 1.5,
                margin: "14px 0",
                whiteSpace: "pre-line",
              }}
            >
              {"微信扫码加入社群 / Scan to join on WeChat"}
            </p>
          </Panel>
        </div>
      </DeckFrame>
    </div>
  );
}
