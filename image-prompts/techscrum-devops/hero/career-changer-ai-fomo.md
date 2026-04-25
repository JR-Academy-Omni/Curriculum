---
bootcamp: techscrum-devops
bootcampName: TechScrum DevOps 项目实训营
role: career-changer
roleName: 转行/求职者
painPoint: ai-fomo
painPointName: AI FOMO / 不被替代
format: hero
formatName: 课程详情页 hero
size: 1792x1024
displaySize: 1920x900
model: gpt-image-2
mode: Instant
lang: zh
version: 1
title: TechScrum DevOps 实训营（AI 替代不了的赛道 hero）
ctaText: ""
tags: [hero, 详情页, AI替代, DevOps]
---

# Career Changer × AI FOMO × 课程详情页 Hero

> 模型：`gpt-image-2` · 模式：**Instant** · 比例 16:9

## 这张想表达什么

详情页 hero 克制美学。视觉锚点：**深夜值班灯光下的服务器机柜剪影 + 一杯冒着热气的咖啡**——无声地说"凌晨 3 点的 prod 修罗场只有人能撑"。
不喊"AI 不能替代 DevOps"，让画面替它说。

## 海报上的中文文字

> 用法 A（推荐）：**0 字纯氛围图**，前端用真 H1 叠在左半边
> 用法 B：极简一行 headline + 角标

- **极简 headline（仅用法 B）**：管 Prod 的工程师，AI 替代不了
- **角标（仅用法 B）**：JR Academy · TechScrum DevOps 项目实训营

## 完整 Prompt

### 用法 A — 0 字纯氛围图

```
Model: gpt-image-2.
Aspect ratio: 16:9. Image size: 1792×1024 px. Mode: Instant.

Horizontal 16:9 editorial minimalist hero banner for a DevOps Bootcamp landing page.

Right 45% of canvas: a quiet desk still-life on warm wooden surface at night. Modern open laptop showing an abstract monitoring dashboard with three calm green status indicators and one tiny amber alert dot (labels minimal, suggestive only). Ceramic coffee mug with soft visible steam. Small office plant. Wireless headphones laying flat. Through the deep-blurred window: faint warm bokeh of city lights, no recognizable buildings. Single warm desk lamp from camera-right at low angle, long gentle amber shadows leftward. Photo-realistic premium magazine still-life, shallow depth of field, slight film grain, late-night calm mood. Text must be sharp and beautifully composed.

Left 55% of canvas (≈ 985px wide): intentionally empty — subtle gradient wash from #FFF1E7 (top) to slightly warmer cream (bottom), hint of warm lamp spill from the right. This zone will be overlaid with H1 by the frontend, so it MUST stay clean — no objects, no text, no patterns. This is a strict layout constraint.

Color palette: #FFF1E7 / #10162F / #FFB800 / #FF5757 / #444.

NO text overlay anywhere on the image. No watermarks. No logos. No people. No emojis. No futuristic/sci-fi aesthetic. No real Grafana/Datadog/AWS brand marks. Dashboard labels small and barely-readable — suggestive, not advertising.
```

### 用法 B — 带极简 headline

```
[复制用法 A 全部内容，然后追加：]

Add bottom-left text overlay, 60px from canvas edge,
heavy bold Chinese sans-serif (思源黑体 Heavy style), color #10162F,
with generous letter spacing, in 1 line, reading:
"管 Prod 的工程师，AI 替代不了"

Add bottom-right corner, 40px from edge, tiny flat single-line text, color #444, reading:
"JR Academy · TechScrum DevOps 项目实训营"

Text must be sharp and beautifully composed. Simplified Chinese only for the Chinese characters.
The English "Prod" must render with capital-P only, "AI" must render in all uppercase.
Flat solid color, no stroke, no outline, no shadow on text.
```

## 备用变体

### v2 — 切上锁视角
> 把 dashboard 换成 `an abstract terminal window showing a faint "sudo" prompt cursor and a small lock icon` —— 强调"权限 = 责任 = 你的位置"。

### v3 — 通用版
> 删掉 alert dot，所有 indicators 改成 calm green，更平静的 detail 页氛围。

### v4 — 切日间咖啡馆
> Time of day 改 "late afternoon golden hour"，氛围更轻松，适合营销邮件 hero。

## 出图 tips

- **关键检查**：左半边必须留空，append `LEFT 55% must remain EMPTY background only — no objects, no text, no diagram`
- **alert dot 不能太大**：append `the amber alert dot must be small, 12-16px, occupying < 2% of the dashboard area`
- **steam 别画过头**：append `coffee steam should be subtle, single thin wisp, not a cartoon cloud`
- **窗外不要识别**：append `window background must be soft warm bokeh only — no recognizable building outlines`
