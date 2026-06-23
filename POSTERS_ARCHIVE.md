# 海报存档索引（按课程）

所有 Bootcamp / Workshop 的宣传海报**按课程分区存档**，一门课一区。本文件是总台账；面向运营/Marketing 的可视化入口是 [`posters.html`](./posters.html)（课程海报中心）。

## 存档规则

1. **海报文件归属课程目录** — 放在 `{slug}/public/posters/` 子目录下（统一用子目录，不要散在 `public/` 根）。
2. **一门课 ≥2 张海报 → 建画廊页** `{slug}/public/posters/index.html`（参考 [`ai-engineer-bootcamp/public/posters/index.html`](./ai-engineer-bootcamp/public/posters/index.html)），新海报登记成一张卡片。单张海报可暂不建画廊。
3. **每张海报自带下载** — 必须含 `<div id="poster">` + 「⬇ 下载 PNG」浮动按钮（html2canvas），配色对照 `jr-academy-brand/`，不凭记忆编 hex。
4. **登记进中央海报中心** — 在 [`posters.html`](./posters.html) 该课卡片的「🎨 海报集」按钮挂上链接 + 更新数量。
5. **加/改海报后回来更新本表**（数量、画廊有无）。

> 命名建议：风格实验用 `poster-v{n}.html`；特定用途用 `poster-{用途}.html`（如 `poster-us-cohort-moments.html` = 美国班朋友圈封面）。

## 课程海报台账

| 课程 slug | 海报数 | 画廊页 | 存放 |
|-----------|:---:|:---:|------|
| `ai-engineer-bootcamp` | 8 | ✅ | `public/posters/`（v1–v7 + 美国班朋友圈封面） |
| `ai-programming` | 7 | ❌ | `public/`（v1–v6 + poster.html，待迁入 `posters/` + 建画廊） |
| `openclaw-workshop` | 2 | ❌ | `public/`（cloudtech-melbourne、moments，待建画廊） |
| `ai-accounting-pro` | 1 | ❌ | `public/poster.html` |
| `ai-accounting-workshop` | 1 | ❌ | `public/poster.html` |
| `ai-comic-video-course` | 1 | ❌ | `public/poster.html` |
| `ai-image-text-workshop` | 1 | ❌ | `public/poster.html` |
| `business-analyst` | 1 | ❌ | `public/poster.html` |
| `claude-cowork-sme-workshop` | 1 | ❌ | `public/poster.html` |
| `gp-program-workshop` | 1 | ❌ | `public/posters/poster-v1.html` |

**合计：10 门课 · 24 张海报。** 只有 `ai-engineer-bootcamp` 已建画廊页，是其余课程的范本。

## 待整理（一致性）

- `ai-programming`（7 张）和 `openclaw-workshop`（2 张）海报散在 `public/` 根，建议迁入各自 `posters/` 子目录并建 `index.html` 画廊——但迁移会动到中央 hub 链接和课程内引用，需逐个改链接验证，单独做。
