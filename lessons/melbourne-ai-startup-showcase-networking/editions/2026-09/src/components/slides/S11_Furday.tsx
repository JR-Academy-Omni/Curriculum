import { DeckFrame, Panel, Label, colors } from "../deck";
import { assetPath } from "../ui";
export default function S11_Furday() {
  return (
    <div data-slide-id="S11_Furday" style={{ width: "100%", height: "100%" }}>
      <DeckFrame
        tag={"项目 01 / 07"}
        title={"Furday"}
        subtitle={"宠物健康与生活记录 App"}
        accent={colors.green}
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
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <Panel style={{ flex: 1 }}>
              <p
                style={{
                  fontSize: 29,
                  lineHeight: 1.5,
                  margin: "14px 0",
                  whiteSpace: "pre-line",
                }}
              >
                {
                  "为多宠物家庭整合健康管理、日常记录\n与成长回忆。通过打卡获得成就与贴纸，\n再制作可导出的宠物电子手帐。"
                }
              </p>
            </Panel>
            <Panel style={{ borderTop: "8px solid #7ED957" }}>
              <Label bg={colors.green}>核心产品</Label>
              <p
                style={{
                  fontSize: 25,
                  lineHeight: 1.5,
                  margin: "14px 0",
                  whiteSpace: "pre-line",
                }}
              >
                {
                  "宠物档案、体重与健康日历、疫苗 / 体检 / 驱虫提醒\n日记相册、每日打卡、成就系统、电子手帐"
                }
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
              src={assetPath("furday-logo.png")}
              alt={"furday-logo.png"}
              style={{ width: 290, height: 210, objectFit: "contain" }}
            />
            <div
              style={{
                width: 64,
                height: 6,
                background: colors.green,
                margin: "26px auto",
              }}
            />
            <p
              style={{
                fontSize: 25,
                lineHeight: 1.5,
                margin: "14px 0",
                whiteSpace: "pre-line",
              }}
            >
              {"多宠物家庭"}
            </p>
          </Panel>
        </div>
        <div style={{ fontSize: 17, marginTop: 16, color: "#514c48" }}>
          产品展示、Demo 与互动问答
        </div>
      </DeckFrame>
    </div>
  );
}
