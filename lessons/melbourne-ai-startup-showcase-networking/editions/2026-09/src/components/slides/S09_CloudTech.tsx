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
                fontSize: 30,
                lineHeight: 1.5,
                margin: "8px 0",
                whiteSpace: "pre-line",
              }}
            >
              {"位于墨尔本，关注区块链与数字金融技术\n的企业集团。"}<br /><span style={{display:"block",fontSize:20,fontWeight:400,lineHeight:1.35,marginTop:7}}>A Melbourne group focused on blockchain and digital finance technology.</span>
            </p>
            <p
              style={{
                fontSize: 25,
                lineHeight: 1.5,
                margin: "8px 0",
                whiteSpace: "pre-line",
              }}
            >
              {
                "通过 Innovation Hub 支持创新与社区交流，\n为本次活动提供场地支持。"
              }
            <span style={{display:"block",fontSize:20,lineHeight:1.35,marginTop:7}}>Supporting innovation and community through its Innovation Hub. Venue support for tonight.</span></p>
          </Panel>
        </div>
      </DeckFrame>
    </div>
  );
}
