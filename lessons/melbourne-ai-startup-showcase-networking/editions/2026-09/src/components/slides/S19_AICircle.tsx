import { DeckFrame, Panel, Label, colors } from "../deck";
import { assetPath } from "../ui";
export default function S19_AICircle() {
  return (
    <div data-slide-id="S19_AICircle" style={{ width: "100%", height: "100%" }}>
      <DeckFrame
        tag={"JR ACADEMY COMMUNITY"}
        title={"关于 AI圈"}
        subtitle={"无论你正在学习、开发产品，还是寻找合作，都欢迎加入"}
        accent={colors.green}
        titleSize={58}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 32,
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
            <p
              style={{
                fontSize: 34,
                lineHeight: 1.5,
                margin: "14px 0",
                whiteSpace: "pre-line",
              }}
            >
              {"匠人学院持续开展的\nAI 社区交流系列"}
            </p>
            <p
              style={{
                fontSize: 28,
                lineHeight: 1.5,
                margin: "14px 0",
                whiteSpace: "pre-line",
              }}
            >
              {
                "连接 AI 学习者、从业者、创业者\n与企业伙伴，在分享和交流中\n交换经验、发现合作机会。"
              }
            </p>
            <Label bg={colors.yellow}>
              {"项目 Demo   /   主题分享   /   线下交流"}
            </Label>
          </Panel>
          <Panel style={{ padding: 12, position: "relative", minHeight: 0 }}>
            <img
              src={assetPath("community.webp")}
              alt="AI圈社区活动"
              style={{
                position: "absolute",
                inset: 12,
                width: "calc(100% - 24px)",
                height: "calc(100% - 24px)",
                objectFit: "cover",
                borderRadius: 16,
              }}
            />
          </Panel>
        </div>
      </DeckFrame>
    </div>
  );
}
