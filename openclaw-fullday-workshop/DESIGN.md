# OpenClaw 一日实操班（8 小时·一日深度版） — Design Spec

> OpenClaw·进阶·一日深跑（3 大 Skill 落地）
> 视觉系统所属：**合作品牌线（OpenClaw）**

本文档定义本课程的视觉主色与海报/Slide/页面应用规范。色卡来源：`curriculum/CLAUDE.md`、`curriculum/DESIGN.md`（JR 品牌四色 + Neo-Brutalism 风格）。

---

## 🎨 AI 出图 Prompt（市场 / 产品 copy & paste）

```
设计任务：为「OpenClaw 一日实操班（8 小时·一日深度版）」做配图 / 海报 / banner / 封面图。
课程定位：OpenClaw·进阶·一日深跑（合作品牌线（OpenClaw））

═══ 主题色（必须严格执行）═══
主色：#E84142（OpenClaw 深红 · 比 4h 版浅红 #F87171 深一档）
主色上的文字色：#FFFFFF
主色应占画面 ≥ 30%，用作大色块、标题底色或主背景

═══ 视觉风格 ═══
Neo-Brutalism 极简扁平：
- 所有元素 3px 纯黑（#000）边框
- 卡片 / 按钮 / 标签带 6px×6px 黑色硬阴影（box-shadow: 6px 6px 0 #000）
- 不要渐变、不要发光、不要拟物质感、不要 3D
- 转折硬朗、留白干脆、对比强烈

═══ 配色规则（搭配主色用）═══
JR 品牌四色（永远可用）：黑 #000000 / 白 #FFFFFF / 暖背景 #fff1e7 / 深色 #10162F

辅助色（只在指定场景用）：
- CTA：#FFDE59（限定时早鸟标签 / 报名按钮）
- 3 Skill 卡片底色：#fff5f5（浅红 wash）
- 数据 / 价格：#10162F

═══ 严格避开的色 ═══
下列是其他课程的主色，海报放在一起会混淆品牌识别，本课禁止大面积使用：
- OpenClaw Workshop（4h 版）：#F87171（浅红，本课是深一档）
- OpenClaw Bootcamp（4 周版）：本课与其同色系但深度不同
- AI Programming：#FF7B5A（暖珊瑚，入门编程）

═══ 字体 ═══
- 标题：粗体无衬线（Bricolage Grotesque / 思源黑体 Heavy）
- 中文正文：思源黑体 / 苹方
- 数字 / 数据：Space Mono / DM Sans
- 标题字号至少是正文的 3 倍

═══ 输出 ═══
- 如果是 Midjourney / DALL-E / Imagen / Nano Banana：直接出 PNG，画幅 3:4（小红书）或 9:16（视频号/抖音）
- 如果是 Claude / GPT 写 HTML：用 inline style，符合上述 Neo-Brutalism 规范
- 如果是 SVG：扁平矢量，路径全部带 stroke="#000" stroke-width="3"
```

---

## 主题色

| 属性 | 值 |
|---|---|
| **主色 (primary)** | `#E84142` |
| **色名** | OpenClaw 深红 |
| **主色上文字色** | `#FFFFFF` |

### 选色理由

与 4h 版 `#F87171` 形成"浅红入门 → 深红进阶"的视觉梯队。4h 版是浅色友好"门票"，本课（8h · 一整天 · 3 Skill 深跑 · AU$299）是深一档的"决心版"，色彩饱和度也深一档。

### 色卡

```
█████████████████████████  #E84142  (OpenClaw 深红)
█████████████████████████  #F87171  (OpenClaw 浅红 · 4h 版 · 对比用)
```

> 在 HTML/Slide 里使用时，以变量形式声明：`--theme-primary: #E84142;`

---

## 与同系/相邻课程的区分

| 课程 | 主色 | 时长 | 定位 |
|------|------|------|------|
| OpenClaw Workshop（4h） | `#F87171` | 4 小时 | 入门体验 · 单一行业 Demo |
| **OpenClaw Fullday Workshop（本课）** | **`#E84142`** | **8 小时** | **决心版 · 3 Skill 深跑 · 深度版用户** |
| OpenClaw Bootcamp（4 周） | `#E84142` 同色系 | 4 周 | 系统进阶 · 团队部署 |

---

## 关键设计应用

- **Header**：`linear-gradient(135deg, #10162f 0%, #E84142 100%)` — 深蓝到深红渐变（4h 版同样配方但用浅红）
- **Pricing badge**：`#FFDE59` 底 `#000` 字 — AU$299 / 2026-06-24 / 悉尼
- **3 Skill 卡片**：`#fff5f5` 浅红 wash 底 + 3px 黑边 + 6px 黑硬阴影
- **CTA "立即报名"**：`#FFDE59` 底 `#000` 字 + 3px 黑边
- **里程碑 / 装机段**：用 OpenClaw 深红 `#E84142` 配 emoji 🌸 强调（沿用 4h 版的 AI 小花机制）

---

## 复用 4h 版资产

为节省视觉资产开发成本，以下文件**完全复用 4h 版**（`openclaw-workshop/public/`），无需重新设计：

- `styles.css` — 1:1 复用（已包含 Mobile 响应式 + Neo-Brutalism 基础 component）
- `xhs-posters/` 小红书海报 — 基础模板复用 + 替换价格/日期/主色
- `poster-moments.html` 朋友圈套图 — 同上替换
