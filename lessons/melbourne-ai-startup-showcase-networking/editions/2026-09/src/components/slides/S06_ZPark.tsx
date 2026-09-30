import { DeckFrame, Panel, Label, colors } from "../deck";
import { assetPath } from "../ui";
export default function S06_ZPark() {
  return (
    <div data-slide-id="S06_ZPark" style={{ width: "100%", height: "100%" }}>
      <DeckFrame
        tag={"联合发起 / 合作伙伴"}
        title={"中关村科技企业家协会"}
        subtitle={""}
        accent={colors.blue}
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
              src={assetPath("zpark-logo.jpg")}
              alt={"zpark-logo.jpg"}
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
            <Label bg={colors.blue}>PARTNER</Label>
            <p
              style={{
                fontSize: 30,
                lineHeight: 1.5,
                margin: "8px 0",
                whiteSpace: "pre-line",
              }}
            >
              {"服务科技企业与创业者的行业协会。"}<br /><span style={{display:"block",fontSize:20,fontWeight:400,lineHeight:1.35,marginTop:7}}>An industry association supporting technology companies and founders.</span>
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
                "围绕科技成果转化、创业辅导与资源对接，\n促进企业交流与创新合作。"
              }
            <span style={{display:"block",fontSize:20,lineHeight:1.35,marginTop:7}}>Connecting innovation, startup mentoring and industry resources.</span></p>
          </Panel>
        </div>
      </DeckFrame>
    </div>
  );
}
