import { DeckFrame, Panel, Label, colors } from "../deck";
import { assetPath } from "../ui";
export default function S07_NewGold() {
  return (
    <div data-slide-id="S07_NewGold" style={{ width: "100%", height: "100%" }}>
      <DeckFrame
        tag={"联合发起 / 合作伙伴"}
        title={"新金山俱乐部"}
        subtitle={""}
        accent={colors.green}
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
            <img
              src={assetPath("newgold-logo.jpg")}
              alt={"newgold-logo.jpg"}
              style={{ width: 340, height: 230, objectFit: "contain" }}
            />
          </Panel>
          <Panel
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Label bg={colors.green}>PARTNER</Label>
            <p
              style={{
                fontSize: 30,
                lineHeight: 1.5,
                margin: "8px 0",
                whiteSpace: "pre-line",
              }}
            >
              {"连接澳洲创投圈的华人创始人、\n投资人与创业从业者。"}<br /><span style={{display:"block",fontSize:20,fontWeight:400,lineHeight:1.35,marginTop:7}}>Connecting Chinese-speaking founders, investors and startup professionals in Australia.</span>
            </p>
            <p
              style={{
                fontSize: 25,
                lineHeight: 1.5,
                margin: "8px 0",
                whiteSpace: "pre-line",
              }}
            >
              {"通过创始人沙龙、资源对接与创业营，\n促进本地交流与中澳连接。"}<br /><span style={{display:"block",fontSize:20,fontWeight:400,lineHeight:1.35,marginTop:7}}>Founder salons, resource connections and startup programs across Australia and China.</span>
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 22,
                marginTop: 12,
              }}
            >
              <img
                src={assetPath("newgold-qr.png")}
                alt={"newgold-qr.png"}
                style={{ width: 210, height: 210, flexShrink: 0, objectFit: "contain" }}
              />
              <div>
                <p
                  style={{
                    fontSize: 24,
                    lineHeight: 1.5,
                    margin: "8px 0",
                    whiteSpace: "pre-line",
                  }}
                >
                  {"扫码申请加入新金山"}
                </p>
                <a
                  href="https://newgoldmountain.io/join"
                  style={{ fontSize: 20, color: colors.dark }}
                >
                  newgoldmountain.io/join
                </a>
              </div>
            </div>
          </Panel>
        </div>
      </DeckFrame>
    </div>
  );
}
