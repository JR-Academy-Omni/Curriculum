import { DeckFrame, Panel, Label, colors } from "../deck";
import { assetPath } from "../ui";
export default function S05_ANNG() {
  return (
    <div data-slide-id="S05_ANNG" style={{ width: "100%", height: "100%" }}>
      <DeckFrame
        tag={"联合发起 / 合作伙伴"}
        title={"ANNG Gallery"}
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
            <img
              src={assetPath("anng-logo.png")}
              alt={"anng-logo.png"}
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
            <Label bg={colors.red}>PARTNER</Label>
            <p
              style={{
                fontSize: 34,
                lineHeight: 1.5,
                margin: "14px 0",
                whiteSpace: "pre-line",
              }}
            >
              {"位于 South Melbourne 的\n艺术与科技交流空间。"}
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
                "结合数字、互动与传统艺术，\n为展览、分享与社区活动创造相遇的场所。"
              }
            </p>
          </Panel>
        </div>
      </DeckFrame>
    </div>
  );
}
