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
- `html2canvas` 导出：`scale: 1`，克隆原生 `.poster`（1242×1660）+ 外框 + padding → 固定 **1374×1792** PNG（保留边框和右下投影）
- 容器必须 `width: 1242px; height: 1660px; overflow: hidden;`

### 数量
- **目标 25 张 + 多版本封面变体**（标准 25 张 + P1B/P1C/P1D 等额外封面 = 28+ 张）
- 参考实现：
  - AI Engineer Bootcamp（28 张）：`curriculum/ai-engineer-bootcamp/public/xhs-posters/index.html`
  - AI Adoption Bootcamp（28 张）：`curriculum/ai-adoption-bootcamp/public/xhs-posters/index.html`
- 小红书需频繁换图 + A/B 测试不同封面 → 多封面变体很重要
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

### 下载脚本（html2canvas 导出 PNG）— 必用模板

直接复制到页面底部。**不要自作主张改成 `exportNode.offsetWidth` 之类基于渲染尺寸的缩放**——那会导致 shadow/border 被吞、尺寸随浏览器缩放漂移。参考 `curriculum/ai-engineer-bootcamp/public/xhs-posters/index.html` 底部实现。

要点：
- 克隆 **`.poster`**（原生 1242×1660），清掉预览用的 `transform: scale(0.35)` 和 `position: absolute`
- 新建一个 frame `<div>` 重新画出 `.poster-scaler` 的 `border + box-shadow`（别指望 html2canvas 完美渲染带 transform 子元素的 box-shadow）
- `scale: 1` + 固定的 `totalW/totalH`，输出永远一致，不随浏览器缩放变化
- 成品 PNG 尺寸固定：`1242 + 6*2 + 48*2 + 24 = 1374 × 1792`，四角露白 + 右下投影

```js
document.querySelectorAll('.dl-btn').forEach(btn => {
  btn.addEventListener('click', async () => {
    const poster = document.getElementById(btn.dataset.target);
    if (!poster) return;

    const POSTER_W = 1242, POSTER_H = 1660;
    const FRAME_BORDER = 6, FRAME_RADIUS = 36;
    const SHADOW_OFFSET = 24, PADDING = 48;

    const clone = poster.cloneNode(true);
    clone.style.transform = 'none';
    clone.style.position = 'relative';
    clone.style.top = '0'; clone.style.left = '0';
    clone.style.width = POSTER_W + 'px';
    clone.style.height = POSTER_H + 'px';
    clone.style.margin = '0';

    const frame = document.createElement('div');
    frame.style.cssText = `box-sizing:border-box;width:${POSTER_W + FRAME_BORDER*2}px;height:${POSTER_H + FRAME_BORDER*2}px;border:${FRAME_BORDER}px solid #10162f;border-radius:${FRAME_RADIUS}px;box-shadow:${SHADOW_OFFSET}px ${SHADOW_OFFSET}px 0 #10162f;background:#fff;overflow:hidden`;
    frame.appendChild(clone);

    const totalW = POSTER_W + FRAME_BORDER*2 + PADDING*2 + SHADOW_OFFSET;
    const totalH = POSTER_H + FRAME_BORDER*2 + PADDING*2 + SHADOW_OFFSET;

    const wrapper = document.createElement('div');
    wrapper.style.cssText = `position:fixed;left:-99999px;top:0;width:${totalW}px;height:${totalH}px;padding:${PADDING}px ${PADDING+SHADOW_OFFSET}px ${PADDING+SHADOW_OFFSET}px ${PADDING}px;background:#eef0f4;box-sizing:border-box`;
    wrapper.appendChild(frame);
    document.body.appendChild(wrapper);

    btn.disabled = true; const oldLabel = btn.textContent; btn.textContent = '生成中...';
    try {
      const canvas = await html2canvas(wrapper, {
        backgroundColor: '#eef0f4', scale: 1, useCORS: true, allowTaint: true, logging: false,
        width: totalW, height: totalH, windowWidth: totalW, windowHeight: totalH
      });
      const link = document.createElement('a');
      link.download = `xhs-{bootcamp-slug}-${btn.dataset.slug}-${Date.now()}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    } catch (e) { console.error(e); alert('导出失败：' + e.message); }
    finally { wrapper.remove(); btn.textContent = oldLabel; btn.disabled = false; }
  });
});
```

`{bootcamp-slug}` 替换成课程前缀，如 `ai-engineer`、`ai-adoption`、`openclaw`。

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

## 📋 标准 25 张海报蓝图（9 张通用骨架 + 16 张按课程定制）

**⚠️ 重要：下面的 25 个槽位是结构骨架，不是内容清单。每门课的 P10-P25 必须根据课程自身特色重新设计主题，不要硬套。**

### 通用骨架（P1-P9）— 每门课都有

```
P1  封面 hook（情绪化痛点 + 课程 chip）
P1B 共鸣版封面（可选 A/B 测试）
P1C 升级版封面（可选 A/B 测试）
P1D 角色版封面（可选 A/B 测试）
P2  痛点对比（X 还在 vs ✅ 他们在做）
P3  同事群对话（Slack 风格气泡）
P4  4 大能力（4 张色块卡）
P5  Phase 地图（课程结构）
P6  工具栈（深色底，技术/工具 pill）
P7  学员反馈（3 条错落软性引言）
P8  课程配置（4 大数字 + 配套列表）
P9  软性 CTA（无二维码）
```

### 定制槽位（P10-P25）— 每门课不同主题

**P10-P25 每张都要根据课程的"最独特卖点"去设计，不要所有课都用同一个主题。**

#### 定制决策流程

开工前必须先做这件事：
1. 读 `outline.json` 找**最大的 Phase**（如 RAG 45 节 / 技术面试 88 节 / 运营场景 48 条）
2. 读 `curriculum.html` 找**业内独有的模块**（如 Memory+Harness / Change Management / STAR 框架）
3. 列出这门课对比竞品的 **3-5 个差异化卖点**
4. 把这些卖点映射到 P10-P25 的 16 个槽位

### 槽位定制原则（通用）

- **P12 · 最大模块深潜** — 找 outline.json 里 lesson 数最多的 Phase，专门做一张
- **P13 · 核心架构 / 方法论拆解** — 本课最有深度的那套体系
- **P14 · 适合谁学** — 按本课目标人群写 4 类，不同课受众完全不同
- **P15 · Lab 分布** — 按本课真实 Lab 数量和分类
- **P16 · 完整时间线** — 课程实际周数 + 关键节点
- **P22 · 本课的专属方法论** — 比如贯穿项目 / 核心框架 / 流程范式
- **P23 · 独家模块** — 业内找不到第二家的 2 块内容，用深色底突出
- **P24 · JD 覆盖** — 按**本课目标市场**的真实招聘公司挑，不要套用其他课的 company list
- **P25 · 薪资** — 按**本课目标市场**的币种 + 薪资区间（US 美元 / 澳洲 AUD / 中国 RMB 等）

### 每一张都要从真实数据填充

不要编造。数据必须来自：
- `outline.json` 的 phases / lessons 真实数字
- `curriculum.html` 已整理好的对比表、时间线、FAQ
- 外部真实来源（levels.fyi / McKinsey / Gartner 等），要标注出处

## 📝 三通道文案面板（必做）

每张海报右侧必须配一个 **460px 宽的文案面板**，包含 3 个 Tab 切换：

| Tab | 内容 | 字数限制 |
|-----|------|---------|
| 📕 小红书 | 标题 + 正文 + 话题标签 + 复制全部 | 标题 ≤ 20 字，正文 100-200 字 |
| 💬 朋友圈 | 3 条短文案 | 每条 ≤ 90 字（6 行内不折叠）|
| 👥 社群 | 2 条稍长版 | 100-150 字，带换行排版 |

实现：用单独的 `xhs-copy.js` 文件存数据 + 注入逻辑（避免 inline script 被 linter 修改）。
参考：`curriculum/ai-engineer-bootcamp/public/xhs-posters/xhs-copy.js`

## 🏷️ 每张海报必须有课程标识 bar

观众单张刷小红书时，看不到上下文 — 一张图必须自己说明白是什么课。

**实现：**
```css
.p-course-bar {
  position: absolute; left: 50%; top: 28px;
  transform: translateX(-50%);
  background: var(--brand-purple); color: #fff;
  border: 2px solid var(--brand-dark);
  border-radius: 100px; padding: 10px 26px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 22px; font-weight: 700; letter-spacing: 1.5px;
  box-shadow: 4px 4px 0 var(--brand-dark);
  white-space: nowrap; z-index: 10;
}
/* 暗色底海报上换黄底深字 */
.p6 .p-course-bar, .p13 .p-course-bar, .p23 .p-course-bar, .p25 .p-course-bar {
  background: var(--brand-yellow); color: var(--brand-dark);
}
/* 已有大 chip 的封面/CTA 隐藏 */
.p1 .p-course-bar, .p1b .p-course-bar, .p1c .p-course-bar, .p1d .p-course-bar, .p9 .p-course-bar { display: none; }
```

**JS 自动注入：**
```js
document.querySelectorAll('.p-inner').forEach(inner => {
  if (inner.querySelector('.p-course-bar')) return;
  const bar = document.createElement('div');
  bar.className = 'p-course-bar';
  bar.textContent = 'AI ADOPTION · 让公司用好 AI · 匠人 AI 8 周课';
  inner.appendChild(bar);
});
```

文案格式：`课程英文 · 一句话角色 · 匠人 AI X 周课`。**必须包含一句话讲清这门课在教什么角色。**

## 🆕 新职业 / 陌生岗位必备：P10 岗位 explainer

像 "AI Adoption Specialist" 这种 2026 才火起来的岗位，大众完全不知道在做什么。
**必须有一张 P10 海报专门解释这个岗位。** 结构：

1. **一句话定义**（深色 bar，黄字 highlight）
   - 例："AI Adoption Specialist = 公司里把 AI 工具变成业务结果的人"
2. **A DAY IN THE ROLE**（4 件具体工作示例）
   - 早上做什么 / 下午做什么 / 傍晚做什么 / 下周做什么
   - 不要抽象描述，要具体场景："跟运营聊周报场景，发现一个能自动化的环节"
3. **3 个 meta 卡片**：岗位名 / 年薪 / 门槛

避免：抽象定义、官话、堆 buzzword。要让一个完全没听过这岗位的人看完就 get 到。

## 🎨 高级设计 patterns（codex 在 Engineer 验证过）

痛点对比 / 升级对比类海报必须用这套结构，不要平铺列表：

| 元素 | 作用 | CSS 类名 |
|------|------|---------|
| **eyebrow** | h2 之上的小标题（虚线 + 大写关键词）| `.eyebrow .line + .eyebrow .txt` |
| **lead** | h2 之下的引子段落（一句话补充语境）| `.lead` |
| **col-head** | 列头复合结构（kicker + 多行 h3 + 子标题 + 编号 badge）| `.col-head + .kicker + h3 + .col-sub + .badge` |
| **divider** | 中间 VS 旋转徽章 + 渐变虚线柱 | `.divider .bar + .divider .vs` |
| **list 卡片化** | 列表项变成独立卡片，左侧 X / GO 角标 | `.col li::before` |
| **bottom-note** | 海报底部黄阴影总结卡 | `.bottom-note` |

参考完整实现：
- AI Engineer P2: `curriculum/ai-engineer-bootcamp/public/xhs-posters/index.html` （搜 `.p2 .eyebrow`）
- AI Adoption P2: `curriculum/ai-adoption-bootcamp/public/xhs-posters/index.html` （搜 `.p2 .eyebrow`）

## 🎨 每门课要用自己的主题色 + 课程 bar 文案

**不要让不同课程长得一样。** 新做一门课时：

1. **选一个未被其他课用过的主色** — 查一下 `curriculum/` 下已存在的 xhs-posters 用的什么色，避开
2. **CSS 变量直接替换** — 保留 `--brand-red/yellow/blue/dark`，新增 `--brand-XXX` 作为本课主色
3. **课程标识 bar 文案公式**：
   ```
   课程英文 · 一句话讲清这是做什么的 · 匠人 AI X 周课
   ```
   中间那句必须说清角色/目标，不能只写课程名 + 周数 — 观众单看一张图才知道是啥。

## 🎭 多版本封面（A/B 测试用）

标准做 4 张封面（P1/P1B/P1C/P1D），每张主打不同角度：

| 海报 | 角度 | 视觉特征 |
|------|------|---------|
| **P1** 默认 | 直接痛点 hook | 黄底标签 + 黑框 + 黄/红高亮 |
| **P1B 共鸣版** | "你以为会用 X 就够了？" | 上下两张 xhs-card 对比（bad/good） |
| **P1C 转岗版** | "从 A 到 B" | Before/After 两个 stage-card + 大箭头 |
| **P1D 角色版** | "不会 X 你就 Y" | sticker-grid 旋转 + 深色底 |

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
导出：每张图下方点「⬇ 下载 PNG」（html2canvas, 固定 1374×1792 带边框+投影）
投聚光前检查：文案无二维码 / 无绝对化用语 / 无联系方式
```

## 🔗 JR Social Publisher 插件钩子（每个 bootcamp xhs-posters 必带）

> 见 `docs/MP_XHS_PUBLISHER_EXTENSION_PRD.md`。新生成的 `posters/index.html` 必须在顶部操作栏加「📤 推送到小红书」按钮，source 字段用 `'xhs-poster'`。

HTML 按钮（放在页面顶部 actions bar 里）：

```html
<button class="btn" id="push-xhs" title="推送到 JR Social Publisher 插件，在小红书创作页一键导入">📤 推送到小红书（插件）</button>
```

JS（在下载脚本同一个 `<script>` 块里）：

```javascript
async function pushXhsToExtension() {
  const btn = document.getElementById('push-xhs');
  if (!btn) return;
  const oldText = btn.textContent;
  btn.disabled = true;
  btn.textContent = '准备中...';

  try {
    // 1. 读本目录的 xhs-caption.json（如果 skill 产出了）
    let caption = null;
    try {
      const resp = await fetch('./xhs-caption.json');
      if (resp.ok) caption = await resp.json();
    } catch {}

    // 2. 6 张海报 → base64（JPEG 85% 压缩控制 payload 体积）
    const posterIds = ['poster-1', 'poster-2', 'poster-3', 'poster-4', 'poster-5', 'poster-6'];
    const images = [];
    for (let i = 0; i < posterIds.length; i++) {
      btn.textContent = `传图 ${i + 1}/${posterIds.length}`;
      const el = document.getElementById(posterIds[i]);
      if (!el) continue;
      // 复用本页的 html2canvas
      const canvas = await html2canvas(el, { scale: 1.1, backgroundColor: '#ffffff' });
      images.push(canvas.toDataURL('image/jpeg', 0.85));
    }

    const payload = {
      source: 'xhs-poster',
      date: new Date().toISOString().slice(0, 10),
      title: caption?.shortTitle || document.title,
      summary: (caption?.shortBody || '').slice(0, 120),
      xiaohongshu: {
        shortTitle: caption?.shortTitle || document.title.slice(0, 20),
        shortBody: caption?.shortBody || '',
        images,
        tags: caption?.tags || ['AI学习', 'AIGC', 'JR Academy']
      }
    };

    window.postMessage({ type: 'JR_PUBLISH_PAYLOAD', version: 1, target: 'xiaohongshu', payload }, '*');
    btn.textContent = '✅ 已推送';
    setTimeout(() => { btn.textContent = oldText; btn.disabled = false; }, 2500);
  } catch (e) {
    console.error('[push-xhs]', e);
    btn.textContent = '❌ ' + (e.message || '失败');
    setTimeout(() => { btn.textContent = oldText; btn.disabled = false; }, 3000);
  }
}
document.getElementById('push-xhs')?.addEventListener('click', pushXhsToExtension);
```

**注意**：如果没产出 `xhs-caption.json`（早期 bootcamp），payload 里 shortBody 会是空字符串，运营需要在插件 popup 的"✏ 填文案"面板补一下再导入。建议每个 bootcamp 生成 xhs-posters 时顺手写个 `xhs-caption.json`（字段见 ai-news-poster SKILL.md）。

## 🚨 绝对不能做的事

1. **改 ratio** — 1242×1660 写死，不给备选，不问用户想要什么比例
2. **不装下载按钮** — 每张 poster 必须有 html2canvas 下载按钮
3. **偏离 quest-posters 色板** — 必须用 brand 色变量，不要自创
4. **写 AI 味文案** — 看到"在当今/深入探讨/全面掌握/comprehensive"立刻重写
5. **放二维码或微信号** — 一次都不行，聚光直接拒审
6. **编造学员数据** — 没真实数字就用软性表达，不要为了好看编"1000+ 学员"
7. **字号低于 36px（正文）/ 88px（h2）** — 手机看不清 = 废图。海报内 < 36px 的正文必须改大。最后必须写 `!important` CSS 兜底。**宁可删内容，不能缩字号。**
12. **没有课程标识 bar** — 每张海报顶部必须自动插入 `.p-course-bar`（紫色徽章 + 课程名 + 一句话角色描述），让观众单看一张图就知道是什么课。封面/CTA 类已有大 chip 的可以隐藏 bar。
13. **新职业不解释** — 像 "AI Adoption Specialist" 这种新岗位，必须有一张 P10 类型的"岗位 explainer"，包含：一句话定义 + 一天工作 4 件事 + 岗位名/年薪/门槛 meta。不能假定观众知道这是干嘛的。
14. **没用 codex 的高级设计 token** — 痛点对比类海报必须用 eyebrow + lead + col-head（kicker + 多行 h3 + 子标题 + badge）+ VS divider + bottom-note 完整结构，不要平铺列表。参考 Engineer P2 / Adoption P2 实现。
15. **封面只做 1 张** — 标准要做 P1（默认）+ P1B 共鸣版 + P1C 转岗版 + P1D 角色版 共 4 张，让运营 A/B 测试。
16. **所有课都用同一个 P10-P25 模板** — 是最容易翻车的错误。P12/P13/P22/P23 必须是**这门课独有的特色模块**，不是通用槽位。开工前先列 3-5 个差异化卖点，再把它们映射到槽位。
17. **所有课用同样的主题色** — 每门课必须选一个独立颜色，避开已存在的其他课，让观众扫一眼就能区分是哪门课。
18. **P24/P25 统一用同一批公司 / 薪资** — 不同课面向不同市场，公司列表和薪资币种要按本课目标市场定（US / AU / EU / 亚洲，技术岗 / 咨询 / 本地 / 大厂），不能套模板。
8. **下载按钮放在海报内** — 必须放外面，不遮挡内容
9. **少于 20 张** — 标准产出 25 张，少于 20 张运营换不动
10. **没有右侧文案面板** — 必须有 xhs-copy.js 注入的三通道（小红书 / 朋友圈 / 社群）面板，每张配 6+ 条文案
11. **多课程同端口** — 每个 bootcamp 用独立端口（8080 / 8081 / 8082...），并行预览不冲突
