# 新时代的 AI Marketing 讲座 — Design Spec

> 网页版讲座 deck 的唯一视觉真相（Source of Truth）。
> 视觉系统所属：**营销 / 创作线**（继承 `curriculum/ai-marketing/DESIGN.md` 的 `#E63977`）。
> 🚨 改任何颜色 / 字号 / 阴影前先读本文件；**禁止凭记忆配色或自编 hex**。token 全在 `src/styles/theme.ts`，组件全在 `src/components/ui.tsx`。

---

## 1. 主题色

| 属性 | 值 |
|---|---|
| **主色 (primary)** | `#E63977`（玫红 / `colors.rose`）|
| **主色上文字色** | `#FFFFFF` |
| **声明位置** | `src/styles/theme.ts` → `colors.rose` |

### 选色理由
营销「投放 / 转化 / 电商」语义的最强符号色，比 JR 旗舰红 `#ff5757` 深一档，避免和工程课撞色。本讲座是营销课线（`curriculum/ai-marketing/`）的引流物料，**必须**用同一主色保持品牌识别。

### 色卡
```
█████████████████████████  #E63977  玫红（rose · 主色）
```
主色应占封面 / 章节封面画面 ≥ 30%（大色块、标题底、强调框）。

---

## 2. 调色板与角色分工（来自 `theme.ts`，不要新增 hex）

| token | hex | 只用来做 |
|---|---|---|
| `rose` | `#E63977` | **主色** · 封面 / 章节封面 / 关键强调框 / CTA |
| `dark` | `#10162f` | 深色背景页 / 主文字 / 结论卡 |
| `yellow` | `#FFDE59` | 撞色高亮 · 金句重点字 · 深色页上的 accent |
| `warmBg` | `#fff1e7` | 浅色页默认背景 |
| `white` | `#ffffff` | 卡片底 / 深色页文字 |
| `black` | `#000000` | 3px 描边 + 硬阴影（neo-brutalism 灵魂）|
| `green` | `#7ED957` | Poll 选项 A · 「半对」标签 |
| `orange` | `#FF914D` | Poll 选项 B · 「半对」标签 |
| `blue` / `purple` | `#38B6FF` / `#CB6CE6` | skills 分组区分色（仅 S13 军火库）|

> ✅ **唯一允许的内联裸 hex 两类**：(1) 中性灰阶 `#333 / #444 / #555 / #666 / #888 / #999 / #aaa`——做次要文字 / 说明文字（模板 `ui.tsx` 本身就这么用）；(2) 极浅分区底纹 `#fff5f8 / #fff5f5 / #eee / #ccc`——只做卡片内浅色分块。
> ❌ 除以上两类外，所有颜色走 `colors.*`。需要新彩色 → 先在 `theme.ts` 命名再用，禁止内联裸彩色 hex。

---

## 3. 视觉风格 — Neo-Brutalism（与 ai-marketing 课线一致）

- 所有卡片 / 按钮 / 标签：**3px 纯黑描边** = `border`（`theme.ts` 导出）
- 硬阴影：**`6px 6px 0 #000`** = `shadow`；小卡用 `shadowSm`（`4px 4px 0`）
- 强调框可换硬阴影颜色制造层次：`6px 6px 0 ${rose}` / `${yellow}` / `${dark}`
- **不要**渐变、发光、毛玻璃、拟物、3D；**内容卡片 / 按钮 / 标签圆角一律 0**
  - 唯一例外是模板 chrome：摄像头气泡（`CameraBubble`，圆形）+ 底部翻页圆点（`SlideEngine`）—— 这两个不算内容，保持原样
- 卡片 hover：位移 + 阴影收起（`Card` / `CardSm` 组件已内置，别自己写）
- 倾斜强调：关键标题块用 `transform: rotate(-1deg ~ -1.5deg)` 制造手作感（克制使用，1 页 ≤ 1 处）

---

## 4. 字体系统（来自 `fonts`，已在 `index.html` preload）

| 角色 | 字体 | token |
|---|---|---|
| 标题 / 大字 / 数字锚点 | Bricolage Grotesque | `fonts.heading` |
| 正文 / bullet | DM Sans | `fonts.body` |
| 标签 / 数据 / kicker | Space Mono | `fonts.mono` |
| 中文 | Noto Sans SC（fallback 内置在每个 family 里）| — |

- 标题 `fontWeight: 900`、`letterSpacing: -1 ~ -2`
- 封面巨字 78–96px；章节封面 ~78px；页内主标 40–62px；正文 16–20px
- 字号最小 13px（mono 标签），正文不低于 15px

---

## 5. 组件目录（`src/components/ui.tsx` — 复用，别重造）

| 组件 | 用途 |
|---|---|
| `Slide` | 每页最外层（`bg` 控背景）|
| `Inner` / `Half` | 居中 / 分栏容器 |
| `Title` / `Subtitle` | 标准标题 / 副标 |
| `Highlight` / `Tag` | 行内高亮块 / mono 标签 |
| `Card` / `CardSm` | 带 hover 的 neo-brutalism 卡 |
| `Grid` / `Stagger` / `StaggerItem` | 网格 / 入场错峰 |
| `CountUp` / `GrowBar` | 数字滚动 / 条形增长 |
| `springIn` / `slideFromLeft` / `slideFromRight` | framer-motion 入场预设 |
| `SectionCover`（`components/SectionCover.tsx`）| 章节封面（kicker + title + accent + sub + bg）|

动画统一缓动：`[0.16, 1, 0.3, 1]`（ease-out）；入场 `delay` 按阅读顺序 0.1–0.15 递增。

---

## 6. Slide 布局 Pattern（本 deck 实际在用的 8 种）

| Pattern | 出现页 | 结构 |
|---|---|---|
| **封面** | S01 / SectionCover | kicker 标签 + 巨字 + 倾斜强调块 |
| **Poll 提问** | S02 / S04 | 大字问句 + 两张 A/B 卡（绿 / 橙，rotate ±2）+ 底部投票方式 |
| **Reveal 揭晓** | S03 / S05 | 单大字翻转 OR 三栏（半对 / 半对 / 结论）+ 大字落点 |
| **总览行表** | S08 / S13 / S27 | 多行，每行 旧→新 / 阶段→skill / 层级→下一步 |
| **Before/After 双栏** | S09 / S14 / S21 | 灰旧 vs rose 新，硬阴影区分 |
| **流程 / fan-out 图** | S12 / S15 / S19 | 节点 + 箭头，记忆系统 3 层 → BRAIN → 输出 |
| **数据网格** | S18 | 7 项 + 1 收口，2×4 grid |
| **课程卡 / 大金句** | S17 / S28 / S29 / S30 | 单一巨字主张 OR 左文案 + 右价格/QR 卡 |

---

## 7. 🚫 严格避开的色（其他课线主色，混用会糊品牌）

本讲座是营销线 `#E63977`。下列是别的课主色，**不可在本 deck 大面积使用**：
- JR 旗舰红 `#FF5757`（工程线 / ai-engineer）—— 仅作 `theme.ts.red` 备用，不做本 deck 主色
- 小红书粉 `#FF2E4D`、桃粉 `#FF6B9D`（其他营销子课）

---

## 8. AI 出图 Prompt（海报 / banner / 封面图复用）

做本讲座的海报 / 配图时，把以下整段粘贴给任意出图 AI（继承 `curriculum/ai-marketing/DESIGN.md`）：

```
设计任务：为「新时代的 AI Marketing」讲座做海报 / banner / 封面图。
主色：#E63977（玫红），占画面 ≥ 30%，主色上文字 #FFFFFF。
风格：Neo-Brutalism 极简扁平 —— 所有元素 3px 纯黑描边 + 6px×6px 黑色硬阴影；
不要渐变 / 发光 / 拟物 / 3D / 圆角。对比强烈、留白干脆、转折硬朗。
配色：黑 #000 / 白 #FFF / 暖背景 #fff1e7 / 深色 #10162f；CTA 撞色用黄 #FFDE59。
字体：标题 Bricolage Grotesque / 思源黑体 Heavy（粗），数据 Space Mono，中文思源黑体；标题字号 ≥ 正文 3 倍。
画幅：海报 3:4，banner 16:9。
```

---

## 9. Code-review 自检（改 deck 时）

diff 里出现以下任一 → **停下，对照本文件**：
- 内联裸**彩色** hex（灰阶 `#333–#999` / 浅底纹 `#eee`·`#ccc`·`#fff5xx` 除外）
- 主色不是 `#E63977` / 用了 `#ff5757`·`#FF2E4D` 当大色块
- 出现渐变 / blur / glow，或**内容卡片**带 `borderRadius`（摄像头气泡 + 翻页圆点除外）
- 自己手写 hover 动画而不用 `Card` / `CardSm`
- 字号 < 13px 或正文 < 15px
- 新增彩色没先进 `theme.ts` 命名
