import { DeckFrame, Panel, Label, colors } from "../deck";
export default function S09_CloudTech() {
  return (
    <div
      data-slide-id="S09_CloudTech"
      style={{ width: "100%", height: "100%" }}
    >
      <DeckFrame
        tag={"场地支持"}
        title={"CloudTech Group"}
        subtitle={""}
        accent={colors.red}
        titleSize={58}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: ".8fr 1.3fr",
            gap: 32,
            height: "100%",
          }}
        >
          <Panel
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ fontSize: 48, fontWeight: 900, textAlign: "center" }}>
              CloudTech
              <br />
              Group
            </div>
          </Panel>
          <Panel
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Label bg={colors.red}>PARTNER</Label>
            <p
              style={{
                fontSize: 34,
                lineHeight: 1.5,
                margin: "14px 0",
                whiteSpace: "pre-line",
              }}
            >
              {"位于墨尔本，关注区块链与数字金融技术\n的企业集团。"}
            </p>
            <p
              style={{
                fontSize: 29,
                lineHeight: 1.5,
                margin: "14px 0",
                whiteSpace: "pre-line",
              }}
            >
              {
                "通过 Innovation Hub 支持创新与社区交流，\n为本次活动提供场地支持。"
              }
            </p>
          </Panel>
        </div>
      </DeckFrame>
    </div>
  );
}
