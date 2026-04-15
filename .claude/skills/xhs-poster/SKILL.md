---
name: xhs-poster
description: "为 Bootcamp 课程生成小红书封面 + 配图套装（锁死 1242×1660 / 3:4 竖版，聚光投流标准）。沿用 quest-posters.html 的设计语言（Neo-Brutalism + 品牌四色），每张图自带 html2canvas ⬇ 下载 PNG 按钮。Use when user wants to create Xiaohongshu cover/carousel images for a course, or prepare 聚光 ad creatives."
argument-hint: "[bootcamp目录] [可选：钩子主题，如 '30天入门AI']"
---

# /xhs-poster — 课程小红书封面 + 配图生成器

为某个 bootcamp 生成一套可直接投放小红书聚光 (Juguang) 广告的视觉素材。输出独立 HTML 页面，浏览器打开后每张图下方「⬇ 下载 PNG」一键导出。

## 🔒 固定规格（不要改，不要问，不要给备选）

### 尺寸（ratio 锁死）
- **封面 + 所有配图**: **`1242 × 1660`**（3:4 竖版）
- 这是小红书聚光主流投流素材尺寸，**不提供其他比例选项**
- `html2canvas` 导出时 `scale: 2` → 导出 2484×3320 高清 PNG
- 容器必须 `width: 1242px; height: 1660px; overflow: hidden;`

### 数量
- **目标 25 张**（1 封面 + 24 配图）— 这是当前标准产出量
- 参考实现：
  - AI Engineer Bootcamp（25+ 张）：`curriculum/ai-engineer-bootcamp/public/xhs-posters/index.html`
  - AI Adoption Bootcamp（25 张）：`curriculum/ai-adoption-bootcamp/public/xhs-posters/index.html`
- 小红书需频繁换图，25 张可以让运营组合出 1-2 个月的发布素材
- 不要少于 20 张 — 太少不够换

## 🎨 设计语言（对齐 quest-posters.html）

参考文件：`curriculum/quest-posters.html`。严格沿用该文件的视觉 token，让新课的素材和整个课程矩阵视觉一致。

### 色板（CSS 变量，必须用这套）
```css
--brand-red: #ff5757;    /* 主强调色，hook 标题 em / 下载按钮 */
--brand-dark: #10162f;   /* 文字主色 + 边框 + 深底 */
--brand-yellow: #ffce44; /* 标题下划线高亮、次强调 */
--brand-blue: #3b82f6;   /* 辅助信息、链接感 */
--brand-green: #10b981;  /* 正面/新版/升级 */
--bg-light: #f8f9fb;     /* 海报外层底色（呼吸空间） */
--bg-cream: #fff1e7;     /* 暖色卡片底 */
--text-main: #10162f;
--text-gray: #64748b;
--border-color: #e2e8f0;
```

### Neo-Brutalism 要点（照抄 quest-posters）
- 边框 `2px solid var(--brand-dark)`（内框 `.p-inner` 上）
- 卡片圆角 16-36px
- 偏移阴影 `box-shadow: 6px 6px 0 var(--brand-dark)` / 卡片大: `16px 16px 0 rgba(16,22,47,0.04)`
- 海报右上角点阵装饰（`radial-gradient` 1.5px dots, 28px spacing, opacity 0.1）
- 标题 h2 em 加黄色下划线高亮（`::after` 绝对定位在字底部 10px、高 24px、黄色 opacity 0.75）

### 字体
```html
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;500;700;900&family=JetBrains+Mono:wght@400;700&display=swap" rel="stylesheet">
```
- 主字体 `Noto Sans SC`，weight 900 做标题，500 做正文
- 代码/数据标签用 `JetBrains Mono`

### 字号（竖版 1242×1660 下的视觉基准）

**🔴🔴🔴 铁律 v2：标题宁可大不能小 / 正文宁可少不能小 🔴🔴🔴**

数学验算：
- 海报内容区宽 = 1242 - 80×2（外 padding）- 72×2（内 padding）= **938px**
- 一行最多 20 个汉字 → 938/20 = **47px/字**
- 所以正文最小 **48px**（手机上 ≈ 14px，清晰）

**核心原则：宁愿删掉一些正文内容，也要让标题足够大、正文足够大。**

| 元素 | 画布字号 | 手机端实际 | weight |
|------|---------|-----------|--------|
| 封面 hook | **150px** | 45px | 900 |
| **h2 主标题（统一）** | **100px** | 30px | 900 |
| **大数字 / KPI** | **100px+** | 30px+ | 900 |
| 二级标题 h3/h4/h5 / 工具名 / 卡片标题 | **60px** | 18px | 900 |
| 引言 / 气泡 / 引文 | **56px** | 17px | 600 |
| **正文 / 列表 / 描述 / 标签（绝对下限）** | **48px** | 14px | 600 |
| 标签 p-tag | 36px | 11px | 700 |
| **绝对禁止字号** | < 48px | < 14px | — |

**禁止出现 18/20/22/24/26/28/30/32/40px 等小字号 — 全部改大。**

### 强制 CSS 兜底（写在 `</style>` 前最后）

```css
/* 🔴 小红书手机端字号铁律 v2 */
.poster .p-tag { font-size: 36px !important; padding: 14px 30px !important; }
.poster .corner-mark { font-size: 34px !important; padding: 14px 22px !important; }
/* 正文级 48px */
.poster p, .poster li, .poster .lbl, .poster .cat, .poster .meta,
.poster .who, .poster .sub, .poster .desc, .poster .phase, .poster .phase-tag,
.poster .week, .poster .stg, .poster .role, .poster .sal,
.poster .old, .poster .new, .poster .dim, .poster .v1, .poster .v2,
.poster .topic, .poster .bottom-note, .poster .note, .poster .freq,
.poster .companies span, .poster .lead,
.poster .tier .level, .poster .stat .lbl, .poster .chat-header, .poster .kpi .lbl,
.poster .tool .cat, .poster .delta .lbl {
  font-size: 48px !important;
  line-height: 1.4 !important;
  font-weight: 600 !important;
}
/* 二级标题 60px */
.poster h3, .poster h4, .poster h5,
.poster .tool .name, .poster .name, .poster .cnt {
  font-size: 60px !important;
  line-height: 1.2 !important;
  font-weight: 900 !important;
}
/* 引言 / 气泡 56px */
.poster .bubble, .poster .q .txt, .poster .cert .big {
  font-size: 56px !important;
  line-height: 1.35 !important;
}
/* h2 主标题 100px（统一）*/
.poster h2 {
  font-size: 100px !important;
  line-height: 1.1 !important;
  letter-spacing: -2px !important;
  font-weight: 900 !important;
}
/* 封面 hook 150px / CTA giant 160px */
.p1 .hook { font-size: 150px !important; }
.p9 .giant { font-size: 160px !important; }
/* 大数字 100px */
.poster .num, .poster .big, .poster .range, .poster .n {
  font-size: 100px !important;
  line-height: 1 !important;
}
/* 黄色高亮加粗 */
.hl::after { height: 30px !important; bottom: 14px !important; }
```

**重要：写完海报后必须自查，每张图肉眼一眼看不清的字 = 字号还不够大。**

## 📐 必须的 HTML 结构

### 海报分层架构（边框 + 呼吸感）

```
.poster (1242×1660, 外层)
  ├── background: var(--bg-light)  ← 浅灰底，提供呼吸空间
  ├── padding: 32px               ← 边框到内容的留白
  └── .p-inner (内层白色卡片)
        ├── background: #fff (或各海报自定义底色)
        ├── border: 5px solid var(--brand-dark)
        ├── border-radius: 36px
        └── padding: 80px 72px
```

**为什么这样分层**：html2canvas 对外层 border-radius 截图不完整（已知 bug）。把圆角边框放在内层 `.p-inner`，外层 `.poster` 留纯矩形 + padding，导出 PNG 时边框 100% 包含且有呼吸空间。

### 页面预览缩放

```css
.poster-scaler {
  width: 435px;      /* 1242 * 0.35 */
  height: 581px;     /* 1660 * 0.35 */
}
.poster {
  transform: scale(0.35);
  transform-origin: top left;
}
```

缩放 0.35 让笔记本屏幕能看全整张海报。

### 下载按钮（放在海报外部）

```html
<!-- 按钮在 poster-scaler 外面，poster-frame 里面 -->
<div class="poster-frame" id="p1">
  <div class="label">P1 封面 <em>· 描述</em></div>
  <div class="poster-scaler">
    <div class="poster p1" id="poster-1">
      <div class="p-inner">...</div>
    </div>
  </div>
  <button class="dl-btn" data-target="poster-1" data-slug="p1-cover">⬇ 下载 PNG</button>
</div>
```

按钮样式：居中在海报下方，不遮挡内容。

### 左侧固定导航

```css
.thumb-nav {
  position: fixed; top: 20px; left: 16px;
  width: 112px; flex-direction: column;
}
```

页面主体 `padding-left: 160px` 给导航让位。

## 🚫 聚光投放合规硬性要求

- ❌ 禁二维码 / 微信号 / 手机号 / 加V / 私信领取 / 点击链接
- ❌ 禁绝对化用语：最、第一、唯一、100%、保证、包过、零风险
- ❌ 禁虚假薪资承诺：包就业、XX 天涨薪 50% 这类具体数字承诺
- ❌ 禁营销套话："在当今快速发展的时代"、"深入探讨"、"全面掌握"（参考项目根目录 CLAUDE.md 的 Anti-Template Content Rule）
- ❌ 禁"匠人"品牌底栏 — 小红书场景不需要，`.p-brand { display: none; }`
- ✅ 可以：个人化表达（"我觉得"、"亲测"、"姐妹们"、"真的还挺好用"）
- ✅ 可以：品牌名"匠人 AI"/"JR Academy" 在 CTA 中小字露出
- ✅ 可以：软性表达（"帮助"、"有机会"、"蛮多同学反馈"）

## 📖 内容来源 & 挖掘策略

### 必读文件
1. `curriculum/{bootcamp}/public/outline.json` → phases / lessons / 核心数据
2. `curriculum/{bootcamp}/public/curriculum.html` → **最重要！** 里面有大量已整理好的营销素材（对比图、数据、时间线、FAQ、项目列表等）
3. `curriculum/quest-posters.html` → 复用 CSS 变量和组件

### 从 curriculum.html 挖掘的海报类型

| 海报类型 | 素材来源 | 示例 |
|---------|---------|------|
| 封面 hook | 用户痛点 | "AI 都这么卷了还在只会调 API 拼 Prompt？" |
| 痛点对比 | 还停在这里 vs 他们在做 | 左右两栏，6+6 条 |
| 场景对话 | 同事群聊天记录风格 | Slack 气泡还原 |
| 核心能力 | 课程学习目标 | 4 张能力卡 |
| Phase 地图 | outline.json phases | 10 个 phase 色块 |
| 工具栈 | 技术工具栈 section | 15+ 工具 pill |
| 学员反馈 | 软性表达 | 错落气泡 |
| 课程配置 | 数字 + 配套 | 4 大数字 + 列表 |
| 版本升级 | V1→V2 对比 | 数据对比 |
| 能力矩阵 | 能力升级矩阵 | 6 维度表 |
| 技术升级 | 12 维度技术对比 | 旧→新 对比行 |
| RAG 深潜 | Phase 3 详解 | 最大模块拆解 |
| Agent 五层 | P4-P8 详解 | 5 层 layer 卡 |
| 适合谁学 | 目标用户 | 4 类人群 |
| Lab 分布 | 68 个 Lab 按类型 | 6 类 Lab 卡 |
| 完整时间线 | 学习→P3→Offer | 竖向时间线 |
| 实战项目 | 7 大项目 | 编号列表 |
| 翻转课堂 | 学习方式对比 | 传统 vs 我们 |
| P3 职业孵化 | P3 details | 6 张卡 + 底栏 |
| FAQ 精华 | 常见问题 | Q&A 卡片 |
| ISA 成长 | 贯穿项目 | 5 次升级时间线 |
| 软性 CTA | 收尾引导 | 无二维码 |

## 📋 标准 25 张海报蓝图（参考 AI Engineer / AI Adoption 实现）

```
P1  封面 hook（情绪化痛点 + 课程 chip）
P2  痛点对比（X 还在 vs ✅ 他们在做，6+6 条）
P3  同事群对话（Slack 风格气泡，2-4 轮）
P4  4 大能力（4 张色块卡）
P5  Phase 地图（10 / 4 个 Phase 色块）
P6  工具栈（深色底，15+ 工具 pill）
P7  学员反馈（3 条错落软性引言）
P8  课程配置（4 大数字 + 6 项配套列表）
P9  软性 CTA（无二维码，主页搜某关键词）
─── 以上 9 张是基础，下面 16 张深度展开 ───
P10 升级对比（V1→V2 数据，新增模块）
P11 能力矩阵（V1 vs V2 6 维度对比表）
P12 最大模块深潜（如 RAG 45 节 / 48 场景）
P13 多层架构（如 Agent 5 层 / 7 独家模块）
P14 适合谁学（4 类目标人群）
P15 Lab 分布（按类型拆解柱状）
P16 完整时间线（Week 1→24 时间线）
P17 毕业项目 / 交付清单（编号列表）
P18 学习方式 / 翻转课堂（4 卡或对比）
P19 求职 / Demo Day（流程图 + 证书）
P20 升级 / 标准切换（旧→新对比行）
P21 FAQ 5 问（Q/A 卡）
P22 方法论 / 项目成长（5 阶时间线）
P23 独家模块（深色底，业内独有 2-3 块）
P24 JD 覆盖率（条形进度 + 公司 logo）
P25 薪资地图（3 档 + 公司薪资网格）
```

每一张都要从 outline.json + curriculum.html 找真实数据填充，禁止编造。

## 📝 三通道文案面板（必做）

每张海报右侧必须配一个 **460px 宽的文案面板**，包含 3 个 Tab 切换：

| Tab | 内容 | 字数限制 |
|-----|------|---------|
| 📕 小红书 | 标题 + 正文 + 话题标签 + 复制全部 | 标题 ≤ 20 字，正文 100-200 字 |
| 💬 朋友圈 | 3 条短文案 | 每条 ≤ 90 字（6 行内不折叠）|
| 👥 社群 | 2 条稍长版 | 100-150 字，带换行排版 |

实现：用单独的 `xhs-copy.js` 文件存数据 + 注入逻辑（避免 inline script 被 linter 修改）。
参考：`curriculum/ai-engineer-bootcamp/public/xhs-posters/xhs-copy.js`

## 🔌 本地预览端口（多课程并行）

每个 bootcamp 用独立端口，避免冲突：

| Bootcamp | 端口 |
|----------|------|
| ai-engineer-bootcamp | **8080** |
| ai-adoption-bootcamp | **8081** |
| 其他课程 | 8082+ 顺延 |

```bash
cd curriculum/{bootcamp} && python3 -m http.server 80XX
```

## 执行步骤

### 1. 读取课程信息
- `curriculum/{bootcamp}/public/outline.json` → title / phases / lessons 数据
- `curriculum/{bootcamp}/public/curriculum.html` → **逐段扫描所有 section，每个 section 都可能是一张海报**
- 扫一眼 `curriculum/quest-posters.html` → 复用 CSS 变量

### 2. 参考已有实现
- **AI Engineer Bootcamp**: `curriculum/ai-engineer-bootcamp/public/xhs-posters/`（25 张 + xhs-copy.js）
- **AI Adoption Bootcamp**: `curriculum/ai-adoption-bootcamp/public/xhs-posters/`（25 张 + xhs-copy.js）
- 复用 CSS 架构（分层、缩放、左侧导航、下载按钮）+ xhs-copy.js 三通道文案面板
- 根据新课程内容调整文案、配色（Engineer=红 / Adoption=紫）、数据

### 3. 生成输出文件
- 路径：`curriculum/{bootcamp}/public/xhs-posters/index.html`
- 单一 HTML 文件，内联 CSS
- 左侧固定导航 + 每张海报下方下载按钮

### 4. 注册到 posters.html（强制规则 2）
- 在 `curriculum/posters.html` 加新卡片

### 5. 更新 deploy.yml（强制规则 1）
- 在 `curriculum/.github/workflows/deploy.yml` Assemble 步骤加 `cp -r xhs-posters`

### 6. 告知用户导出方式
```
文件：curriculum/{bootcamp}/public/xhs-posters/index.html
预览：cd curriculum/{bootcamp} && python3 -m http.server 8080
     → http://localhost:8080/public/xhs-posters/
导出：每张图下方点「⬇ 下载 PNG」（html2canvas, 2484×3320 高清）
投聚光前检查：文案无二维码 / 无绝对化用语 / 无联系方式
```

## 🚨 绝对不能做的事

1. **改 ratio** — 1242×1660 写死，不给备选，不问用户想要什么比例
2. **不装下载按钮** — 每张 poster 必须有 html2canvas 下载按钮
3. **偏离 quest-posters 色板** — 必须用 brand 色变量，不要自创
4. **写 AI 味文案** — 看到"在当今/深入探讨/全面掌握/comprehensive"立刻重写
5. **放二维码或微信号** — 一次都不行，聚光直接拒审
6. **编造学员数据** — 没真实数字就用软性表达，不要为了好看编"1000+ 学员"
7. **字号低于 48px（正文）/ 100px（h2）** — 手机看不清 = 废图。海报内任何 < 48px 的正文都必须改大。最后必须写 `!important` CSS 兜底。**宁可删内容，不能缩字号。**
8. **下载按钮放在海报内** — 必须放外面，不遮挡内容
9. **少于 20 张** — 标准产出 25 张，少于 20 张运营换不动
10. **没有右侧文案面板** — 必须有 xhs-copy.js 注入的三通道（小红书 / 朋友圈 / 社群）面板，每张配 6+ 条文案
11. **多课程同端口** — 每个 bootcamp 用独立端口（8080 / 8081 / 8082...），并行预览不冲突
