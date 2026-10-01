import { DeckFrame, Panel, colors } from "../deck";
import { assetPath } from "../ui";

// Active city list: apps/ai-circle-funding/src/cityShare.ts.
const cities = [
  { name: "悉尼", english: "Sydney", slug: "sydney" },
  { name: "墨尔本", english: "Melbourne", slug: "melbourne" },
  { name: "布里斯班", english: "Brisbane", slug: "brisbane" },
  { name: "珀斯", english: "Perth", slug: "perth" },
  { name: "阿德莱德", english: "Adelaide", slug: "adelaide" },
  { name: "新加坡", english: "Singapore", slug: "singapore" },
  { name: "吉隆坡", english: "Kuala Lumpur", slug: "kuala-lumpur" },
  { name: "成都", english: "Chengdu", slug: "chengdu" }
];
export default function S25_AICircleCities() {
  return <div data-slide-id="S25_AICircleCities" style={{ width: "100%", height: "100%" }}>
    <DeckFrame tag="AI CIRCLE · 城市网络" title="八座城市，同一份对 AI 的好奇" subtitle="目前开展的城市" accent={colors.blue}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gridTemplateRows: "repeat(2, 1fr)", gap: 22, height: "100%" }}>
        {cities.map(city => <Panel key={city.slug} style={{ padding: 0, overflow: "hidden", display: "flex", flexDirection: "column" }}>
          <img src={assetPath(`ai-circle/${city.slug}-paper-cut.webp`)} alt={`${city.name}城市剪纸插画`} style={{ width: "100%", flex: 1, minHeight: 0, objectFit: "cover" }} />
          <div style={{ padding: "13px 18px", display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 8 }}><strong style={{ fontSize: 27 }}>{city.name}</strong><span style={{ fontSize: 17 }}>{city.english}</span></div>
        </Panel>)}
      </div>
    </DeckFrame>
  </div>;
}
