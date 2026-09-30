import { DeckFrame, Panel, Label, colors } from "../deck";
import { assetPath } from "../ui";
export default function S08_KSUG() {
  return (
    <div data-slide-id="S08_KSUG" style={{ width: "100%", height: "100%" }}>
      <DeckFrame
        tag={"联合发起 / 合作伙伴"}
        title={"KSUG.AI"}
        subtitle={""}
        accent={colors.yellow}
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
              src={assetPath("ksug-logo.webp")}
              alt={"ksug-logo.webp"}
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
            <Label bg={colors.yellow}>PARTNER</Label>
            <p
              style={{
                fontSize: 34,
                lineHeight: 1.5,
                margin: "14px 0",
                whiteSpace: "pre-line",
              }}
            >
              {"聚焦 Kubernetes、云原生与 AI\n的技术社区。"}
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
                "通过线上与线下活动，连接开发者、\n工程师和技术爱好者，分享实践经验。"
              }
            </p>
          </Panel>
        </div>
      </DeckFrame>
    </div>
  );
}
