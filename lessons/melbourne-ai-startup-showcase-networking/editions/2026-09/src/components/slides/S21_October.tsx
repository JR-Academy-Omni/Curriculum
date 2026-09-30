import { DeckFrame, Panel, Label, colors } from "../deck";
import { assetPath } from "../ui";
export default function S21_October() {
  return (
    <div data-slide-id="S21_October" style={{ width: "100%", height: "100%" }}>
      <DeckFrame
        tag={"NEXT MEETUP · OCTOBER"}
        title={"10月场｜墨尔本 AI创业项目展示交流"}
        subtitle={"AI Startup Showcase & Networking"}
        accent={colors.red}
        titleSize={54}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.35fr .65fr",
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
            <Label bg={colors.red}>SAVE THE DATE</Label>
            <p
              style={{
                fontSize: 37,
                lineHeight: 1.5,
                margin: "14px 0",
                whiteSpace: "pre-line",
              }}
            >
              {"2026 年 10 月 28 日 · 星期三"}
            </p>
            <p
              style={{
                fontSize: 29,
                lineHeight: 1.5,
                margin: "14px 0",
                whiteSpace: "pre-line",
              }}
            >
              {"5:30 PM–8:30 PM · 墨尔本当地时间"}
            </p>
            <p
              style={{
                fontSize: 28,
                lineHeight: 1.5,
                margin: "14px 0",
                whiteSpace: "pre-line",
              }}
            >
              {"ANNG Gallery"}
            </p>
            <p
              style={{
                fontSize: 25,
                lineHeight: 1.5,
                margin: "14px 0",
                whiteSpace: "pre-line",
              }}
            >
              {"Level 17, 60 Albert Road\nSouth Melbourne VIC 3205"}
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
              src={assetPath("promotions/2026-10/registration-qr.png")}
              alt={"promotions/2026-10/registration-qr.png"}
              style={{ width: 280, height: 280, objectFit: "contain" }}
            />
            <p
              style={{
                fontSize: 27,
                lineHeight: 1.5,
                margin: "14px 0",
                whiteSpace: "pre-line",
              }}
            >
              {"扫码报名 10 月场"}
            </p>
            <p
              style={{
                fontSize: 21,
                lineHeight: 1.5,
                margin: "14px 0",
                whiteSpace: "pre-line",
              }}
            >
              {"免费参加，需提前报名"}
            </p>
          </Panel>
        </div>
      </DeckFrame>
    </div>
  );
}
