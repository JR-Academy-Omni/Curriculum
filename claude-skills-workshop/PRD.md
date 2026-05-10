# PRD · 网页版 PPT《Build Your First Claude Skill》

> 文档类型：产品需求文档 (PRD)
> 版本：v1.0
> 日期：2026-04-28
> 作者：JR Academy 教学团队
> 项目代号：`skill-workshop-web`

---

## 0. 项目背景与目标

### 0.1 业务背景
- 学员人群：已报名 JR Academy 课程的澳洲学员（华人背景为主，英文为辅）
- 时代背景：2026 年 Anthropic 已将 Agent Skills 推为开放标准，Claude.ai / Claude Code / API 三端通吃；企业侧已支持工作区级部署（2025 年 12 月 18 日上线）
- 学习痛点：学员看了官方 PDF（33 页英文）后能"知道有这东西"，但**无法自己动手做出一个能跑的 Skill**

### 0.2 学习目标 (Learning Outcomes)
课程结束后，学员应能：
1. 解释 Skill 的本质（文件夹 + 进步式披露）以及它和 MCP / Tool / Agent 的关系
2. 使用规范的 YAML frontmatter 写出能被正确触发的 SKILL.md
3. 独立构建一个**功能完整的 Skill**（推荐用 `skill-creator` 在 15–30 分钟内出第一版）
4. 设计一套触发测试 + 功能测试，并能根据 under/over-trigger 信号迭代
5. 通过 Claude.ai 上传 / GitHub 分发 / API 调用三种方式分发自己的 Skill

### 0.3 项目交付物
- 一份 30–40 页的网页版 PPT（中文为主，代码与术语保英文）
- 配套示例 Skill 仓库（GitHub 模板）
- 可在线访问的链接 + PDF 备份

---

## 1. 课程内容大纲（Content Spec）

### 1.1 整体节奏
- **总时长**：4 小时（半天课）
- **页数预算**：35 页（含封面、目录、过渡页、检查清单）
- **节奏单元**：每 45 分钟一个章节 + 5 分钟演练 / Q&A
- **互动比**：讲解 60% / 演示 25% / 学员动手 15%

### 1.2 章节结构

| 章节 | 标题 | 页数 | 时长 | 交付什么 |
|---|---|---|---|---|
| 0 | 开场 + 课程地图 | 2 | 10 min | 学员清楚今天能做出什么 |
| 1 | 什么是 Skill：从一个真实痛点开始 | 5 | 30 min | 概念建立 + 与 MCP/Tool 区分 |
| 2 | Skill 的解剖学：Anatomy of a Skill | 5 | 30 min | 文件结构 + 进步式披露 |
| 3 | 规划：先有 Use Case，再写代码 | 4 | 30 min | 学员选定自己的 Use Case |
| 4 | 写好 SKILL.md：YAML + Markdown 工艺 | 6 | 45 min | 能写出合格的 frontmatter |
| 5 | 测试与迭代 | 4 | 30 min | 三种测试 + 反馈循环 |
| 6 | 发布与分发：Claude.ai / GitHub / API | 4 | 25 min | 三种分发路径 |
| 7 | 进阶 5 种模式 + 排错 | 3 | 25 min | 看懂常见 pattern |
| 8 | 实战：用 skill-creator 现场做一个 Skill | 2 | 25 min | 跟练完成自己的 Skill |
| 9 | 检查清单 + 资源 + Q&A | 1 | 10 min | 课后接得住 |

### 1.3 每页内容拆解（35 页 Slide-by-Slide Spec）

**封面区 · Cover**
1. **P01 · 封面** —— 标题《Build Your First Claude Skill · 30 分钟从零到上线》/ 副标题英文 / 讲师署名 / JR Academy logo
2. **P02 · 课程地图** —— 4 小时的 9 个章节时间轴图，让学员知道终点

**Chapter 1 · 什么是 Skill**

3. **P03 · 章节封面 1** —— 大标题"Skill = 把你的 best practice 装进一个文件夹"
4. **P04 · 一个真实痛点** —— 场景小故事：每次让 Claude 做 Sprint 规划，Prompt 都要重写一遍
5. **P05 · Skill 的官方定义** —— 一段话 + 三句话拆解（指令集 / 文件夹 / 教 Claude 处理特定任务）
6. **P06 · Skill vs MCP vs Tool** —— 厨房比喻图：MCP = 厨房（连接性）/ Skill = 菜谱（知识）/ Tool = 单独的刀
7. **P07 · 为什么 Skill 重要** —— 四个数据点：Token 效率、跨平台、组合性、便携性

**Chapter 2 · Skill 解剖学**

8. **P08 · 章节封面 2** —— "三层披露：让 Claude 只读它需要的"
9. **P09 · 文件结构** —— 标准目录树（SKILL.md / scripts/ / references/ / assets/）
10. **P10 · 进步式披露三层** —— 图解 100 tokens → <5k tokens → 按需读
11. **P11 · 命名硬规则** —— 红绿对比卡（kebab-case ✅ / 大写 / 下划线 / 空格 ❌；不能用 README.md）
12. **P12 · Skill + MCP 的协作模式** —— "MCP 提供能力 / Skill 教怎么用"决策图

**Chapter 3 · 规划**

13. **P13 · 章节封面 3** —— "Start with Use Cases, not Code"
14. **P14 · Good Use Case 模板** —— Trigger / Steps / Result 三段式（用 Sprint 规划做范例）
15. **P15 · 三大类 Skill** —— Document & Asset / Workflow Automation / MCP Enhancement，每类配真实例子
16. **P16 · 成功标准** —— 量化指标（90% 触发率、tool calls 数）+ 定性指标（用户无需提示下一步）

**Chapter 4 · 写好 SKILL.md（核心章节）**

17. **P17 · 章节封面 4** —— "Frontmatter 决定生死"
18. **P18 · 最小可运行模板** —— 6 行 YAML，让学员立刻能跑
19. **P19 · description 字段公式** —— `[What] + [When] + [Key capabilities]`，配 3 组 Good vs Bad
20. **P20 · 完整字段清单** —— name / description / license / allowed-tools / metadata / compatibility，红框标必填
21. **P21 · 主体写作 4 条原则** —— 具体可执行 / 错误处理 / 进步式披露 / 引用 references
22. **P22 · 安全限制** —— 禁用 XML `< >`、禁用 "claude/anthropic" 前缀、为什么（system prompt 注入）

**Chapter 5 · 测试**

23. **P23 · 章节封面 5** —— "Skill 是活文档，先迭代再扩展"
24. **P24 · 三种测试方式** —— Manual / Scripted / Programmatic 对比表
25. **P25 · 触发测试范例** —— Should trigger / Should NOT trigger 的具体测试用例
26. **P26 · 反馈循环** —— Undertrigger（加细节）/ Overtrigger（加 negative trigger）→ 回 skill-creator 改

**Chapter 6 · 发布**

27. **P27 · 章节封面 6** —— "三条路：Claude.ai / GitHub / API"
28. **P28 · Claude.ai 上传** —— Settings > Capabilities > Skills，组织级部署（2025-12-18 新功能）
29. **P29 · GitHub 标准做法** —— 仓库级 README ≠ Skill 内 README，链接到 MCP 文档
30. **P30 · API 用法** —— `/v1/skills` 端点、`container.skills` 参数、Code Execution Tool beta 要求

**Chapter 7 · 进阶模式**

31. **P31 · 5 种 Pattern** —— 一页表格列完：Sequential / Multi-MCP / Iterative / Context-aware / Domain-specific
32. **P32 · 5 大坑速查** —— 上传失败 / 不触发 / 过度触发 / 不听话 / context 太大，每个一个 fix
33. **P33 · 上下文优化** —— SKILL.md 控制在 5,000 字以内，启用 ≤ 20-50 个 skill

**Chapter 8 · 实战**

34. **P34 · Live Demo** —— 现场用 `skill-creator` 做一个 "essay-grader" Skill；学员 fork 模板跟做

**收尾**

35. **P35 · 检查清单 + 资源 + Q&A** —— 课程级 quick checklist + 4 个官方链接 + Discord/Issues 入口

### 1.4 关键知识点（务必准确传达）

- **SKILL.md 大小写敏感**——必须是 `SKILL.md`，不接受 `Skill.md` / `skill.md`
- **文件夹 kebab-case**——`notion-project-setup` ✅，下划线 / 空格 / 大写都会失败
- **frontmatter 三禁**——XML 尖括号、`claude` / `anthropic` 开头的名字、YAML 内执行代码（用 safe loader）
- **description 必须包含 trigger phrase**——否则 Claude 不会自动加载
- **进步式披露 token 预算**——名字+描述 ~100 tokens，SKILL.md <5k，bundled refs 按需
- **Compaction 后行为**（2026 新增）——会话压缩后，每个 skill 保留最近调用的前 5,000 tokens，多 skill 共享 25,000 tokens 预算
- **2026 新趋势**——`description` 略带 "pushy" 风格，避免 undertrigger；`name` 推荐用动名词（gerund）形式
- **企业级部署**——2025-12-18 起支持 workspace-wide deploy，自动更新

### 1.5 学员练习设计
- **课中演练 1**（Chapter 3 后）：每人写下自己想做的 Use Case（Trigger / Steps / Result），同桌互评
- **课中演练 2**（Chapter 4 后）：在 Slidev 内嵌的代码沙箱里写一段 frontmatter，提交后由系统给出诊断
- **课程结业作业**：基于 P34 的 Live Demo 模板，改造成自己的 Skill 并提交 GitHub repo 链接

---

## 2. 网页 PPT 产品功能（Product Spec）

### 2.1 产品定位
不是一份"导出后给 PDF"的 PPT，而是一个**可在线打开 / 可演示 / 可课后回看 / 可嵌互动**的教学产品。

### 2.2 信息架构

```
首页 (cover)
├── 章节侧边栏（可折叠）
│   ├── Ch.0 开场
│   ├── Ch.1 什么是 Skill
│   ├── ... (8 章)
│   └── Ch.9 资源
├── 主显示区（slide canvas）
│   ├── 标题区
│   ├── 内容区（支持代码 / 图 / 表 / 互动组件）
│   └── 页码 / 进度条
├── 工具条
│   ├── 演讲者模式开关
│   ├── 全屏
│   ├── 暗色 / 亮色切换
│   ├── 中 / 英 切换（v2 再做）
│   └── 下载 PDF
└── 学员专属区
    ├── 我的进度（已读到第几页）
    ├── 收藏页
    └── 反馈按钮（每页可点"不懂"）
```

### 2.3 核心功能清单

| 模块 | 功能 | 优先级 | 说明 |
|---|---|---|---|
| 导航 | 键盘 ← / → / Space 翻页 | P0 | 演讲基本盘 |
| 导航 | 章节跳转侧边栏 | P0 | 让学员能直接跳第 4 章 |
| 导航 | 触屏左右滑动 | P0 | 手机端必须 |
| 导航 | URL hash 同步页码 | P0 | 可分享某一页链接 |
| 视觉 | 暗色 / 亮色双主题 | P1 | 默认跟随系统 |
| 视觉 | Code 块语法高亮（Shiki） | P0 | 课程主体是代码 |
| 视觉 | Code 块一键复制 | P0 | 学员要 copy 走的 |
| 视觉 | Code 块可在线编辑 + 校验 frontmatter | P1 | 互动重头戏 |
| 演讲 | Presenter 模式（双屏：当前页 + 下一页 + 备注） | P0 | 讲师必备 |
| 演讲 | 计时器 / 笔记 | P1 | Presenter mode 子功能 |
| 演讲 | Draw / Spotlight（讲师在页面上画圈） | P2 | 锦上添花 |
| 学员 | 进度记忆（localStorage） | P0 | 关 tab 后能回到原页 |
| 学员 | 收藏 / 高亮 | P1 | 课后回看用 |
| 学员 | "这页不懂"反馈按钮 | P1 | 数据回到讲师后台 |
| 学员 | 课后下载 PDF | P0 | 离线学习 |
| 互动 | 内嵌测验（每章结束 1 道选择题） | P1 | 加深记忆 |
| 互动 | Frontmatter 校验器 | P1 | 现场写、现场过 |
| 互动 | 嵌入 Claude.ai 一键复制链接 | P2 | 与产品打通 |

### 2.4 视觉规范
完全沿用项目内 `design.md` 的 **Mars Research Lab Zine 风**：

- 主色：米白 `#F2EFE6` / 近黑 `#0F0F0F` / 高亮黄 `#FFD83D` / 朱红 `#E63329`
- 中文标题：超粗黑体；英文：衬线斜体（Slogan）+ Mono（代码 / Tag）
- 网格底纹 + 等宽小字标注（FIG.01 / CH.04 / P.17）
- 章节封面页可以铺满色块（参考官方 PDF 章节卡的处理）
- 黄色仅做强调，红色仅做点缀（< 5% 面积）

设计 token 在 `design-tokens.json` 单独维护，与 PPT 同源。

### 2.5 学员体验流程（User Journey）

1. **课前**：学员点击 Slack/邮件中的链接 → 落到 P01 → 看到"开始学习"CTA
2. **课中（讲师演示）**：学员观看大屏；同时可在自己设备上同步翻页（v2 加同步功能）
3. **课中（学员演练）**：在 P19 / P34 等互动页直接动手，提交后即时反馈
4. **课后**：链接保留；学员可重看 / 收藏 / 下载 PDF / 提交作业

### 2.6 性能与可访问性
- 首屏 < 1.5s（澳洲访问，CDN 部署东南亚 / 悉尼）
- 全部图片 lazy load + WebP
- 语义化 HTML，键盘可达
- 中文字体 subset，避免拉整套字体（首屏字体包 < 200KB）
- 颜色对比度 AA 级（黄底黑字注意对比）

---

## 3. 技术实现方案（Tech Spec）

### 3.1 技术栈选型

**主框架：Slidev**

| 维度 | Slidev | Reveal.js | Next.js + MDX |
|---|---|---|---|
| 写作体验 | Markdown，最快 | HTML，繁琐 | MDX，灵活但重 |
| 代码高亮 | Shiki 内置 | 需配置 | 需配置 |
| 演讲者模式 | 内置 | 需插件 | 需自建 |
| PDF 导出 | 内置 | OK | 需自建 |
| 自定义视觉 | Vue 组件 | 模板 | 完全自由 |
| 学习曲线 | 低 | 中 | 高 |
| 推荐度 | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐ |

**结论**：用 **Slidev** 作为主框架，自定义主题 `theme-mars-lab` 实现 design.md 风格。

### 3.2 仓库结构

```
skill-workshop-web/
├── slides/
│   ├── 00-cover.md
│   ├── 01-what-is-skill.md
│   ├── 02-anatomy.md
│   ├── ... (按章节拆分)
│   └── 09-resources.md
├── components/         # Vue 组件（自定义互动组件）
│   ├── FrontmatterChecker.vue
│   ├── KitchenAnalogy.vue
│   ├── ProgressiveDisclosure.vue
│   └── CodeCompare.vue
├── theme/              # 自定义主题
│   ├── styles/
│   │   ├── tokens.css
│   │   └── layout.css
│   └── layouts/
│       ├── cover.vue
│       ├── chapter.vue
│       └── checklist.vue
├── public/
│   ├── fonts/          # 中文 subset 字体
│   └── images/
├── examples/           # 课程引用的示例 Skill
│   └── essay-grader/
│       ├── SKILL.md
│       ├── scripts/
│       └── references/
├── scripts/
│   ├── build-pdf.ts    # 生成 PDF 备份
│   └── lint-skills.ts  # 校验示例 Skill
├── slides.md           # 入口文件
├── package.json
└── README.md
```

### 3.3 关键依赖

| 依赖 | 用途 |
|---|---|
| `@slidev/cli` | 主框架 |
| `@slidev/theme-mars-lab` (自研) | 视觉主题 |
| `shiki` | 代码高亮（Slidev 内置） |
| `mermaid` | 流程图（Skill 决策树） |
| `js-yaml` | Frontmatter 校验器逻辑 |
| `monaco-editor` | 浏览器内代码编辑器 |
| `vitest` | 校验测试 |
| `playwright` | 端到端 + PDF 导出 |

### 3.4 互动组件设计

**`<FrontmatterChecker />`**
- 学员粘贴 YAML 进 Monaco editor
- 实时校验：name 是否 kebab-case、是否含 XML 尖括号、是否禁用 `claude` 前缀、description 是否含 trigger phrase
- 输出绿色 / 黄色 / 红色卡片，对应官方建议

**`<KitchenAnalogy />`**
- SVG 动画：MCP（厨房）+ Skill（菜谱）+ User（吃货）三角图
- hover 显示对应解释

**`<ProgressiveDisclosure />`**
- 三层进度条交互：滑动到 100 / 5,000 tokens 看到分别加载什么内容

**`<CodeCompare />`**
- 双栏 ❌ Bad / ✅ Good 对比，可一键切换

### 3.5 部署方案

- **托管**：Vercel（自动部署 main 分支）
- **CDN**：Vercel Edge（亚太节点）
- **域名**：`skills.jracademy.com.au` 或 `workshop.jr-academy.com`
- **PDF 备份**：每次发布触发 GitHub Action 跑 `scripts/build-pdf.ts`，把 PDF 上传到 R2 / S3
- **Analytics**：Plausible（隐私友好）+ 自建 "feedback" 上报到 Supabase
- **学员认证（v2）**：通过 JR Academy 现有 SSO 注入 token，校验报名记录

### 3.6 内容更新流程
1. 讲师在 GitHub 直接编辑 `slides/*.md`
2. PR 触发预览部署（Vercel preview URL）
3. 教学组在预览上 review → merge → 自动上线
4. 示例 Skill 改动需跑 `lint-skills.ts` 通过 CI

### 3.7 时间预估（开发排期）

| 阶段 | 任务 | 工时 |
|---|---|---|
| 0 | 仓库初始化 + 主题脚手架 | 1 天 |
| 1 | 35 页内容撰写（Markdown） | 4 天 |
| 2 | 自定义主题 + 4 个互动组件 | 3 天 |
| 3 | PDF 导出 + 部署 + Analytics | 1 天 |
| 4 | 内审 + 改稿 + 二次走查 | 2 天 |
| 5 | 学员小范围 beta + 反馈回灌 | 2 天 |
| **合计** | | **13 个工作日 / 约 2.5 周** |

---

## 4. 风险与开放问题

### 4.1 已知风险
- **R1**：Slidev 自定义主题工作量被低估 → mitigation：先用默认主题跑通 35 页，再迭代视觉
- **R2**：互动组件（Frontmatter Checker）边界情况多 → mitigation：第一版只做 5 条核心规则，剩下放 v2
- **R3**：澳洲学员英文水平参差，纯中文又怕术语丢失 → mitigation：所有英文术语 hover 显示中文解释
- **R4**：Anthropic Skills API 仍在迭代（2026 年还在变） → mitigation：在 P30 加"以官方文档为准"链接 + 注明本课程版本日期

### 4.2 开放问题（需用户决策）
- 是否需要把课程做成"自学版 + 直播版"两套？还是只做一套通用？
- 学员认证是否第一版就接 JR Academy SSO，还是先公开访问？
- 是否需要中英双语开关（增加 ~30% 工作量）？
- 是否要为每位学员生成"学习证书"作为商业卖点？

---

## 5. 验收标准（Definition of Done）

PRD 进入实施阶段，下列条件全部满足才算上线：

- 35 页内容齐全，所有代码片段 lint 通过
- 在 Chrome / Safari / Firefox 上键盘和触屏导航无障碍
- Lighthouse 性能 / 可访问性 / SEO 三项 ≥ 90
- 演讲者模式可用，PDF 备份可下载
- 至少 1 次内部 dry-run + 1 次 beta 学员试听通过
- 课后反馈表收回 ≥ 5 份，平均评分 ≥ 4.2 / 5

---

## 6. 参考资料

- 《The Complete Guide to Building Skills for Claude》—— Anthropic 官方手册（PDF，33 页，本 PRD 主要素材源）
- [Agent Skills 官方文档](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview)
- [Skill authoring best practices](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/best-practices)
- [anthropics/skills GitHub 公共仓库](https://github.com/anthropics/skills)（PDF / DOCX / PPTX / XLSX 等示例 Skill）
- [Anthropic Skilljar：Introduction to agent skills](https://anthropic.skilljar.com/introduction-to-agent-skills) 在线课程
- [Engineering blog: Equipping Agents for the Real World](https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills)
- [Awesome Claude Skills（社区）](https://github.com/travisvn/awesome-claude-skills)
- 项目内 `design.md`（视觉风格底稿）

---

**附录 A** ｜ 35 页 Slide 原文骨架（详见 `slides/*.md`，独立维护）
**附录 B** ｜ 4 个互动组件 prop & 事件接口（详见 `components/README.md`）
**附录 C** ｜ 示例 Skill `essay-grader` 完整代码（详见 `examples/essay-grader/`）
