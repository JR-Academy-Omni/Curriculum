# 手撕全栈面试题班 第7期 升级 PRD

> **Status**: ✅ Shipped (2026-04-11)
> **Owner**: Stan Luo (CTO, Jobpin AI)
> **Production URL**: https://jiangren.com.au/program-course/training/full-stack-developer-interview
> **Curriculum URL**: https://jiangren.com.au/curriculum/full-stack-developer-interview/curriculum.html

---

## 1. 背景

第5/6期 production 数据存在 4 个核心问题：

1. **课程模式落后** — 2 周集训班，必须等开课。学员买完要等 1-2 个月才能开始学，转化率受限。
2. **内容质量薄弱** — 18 节课大部分是 2025 年 12 月之前的录播，缺少 learningMaterial 自学教程。
3. **资源未整合** — 平台已有的 70+ 互动 Lab、80+ 公司真题、求职匠 Chrome Extension、JobPin AI 简历编辑器，全部没有绑定到课程里。
4. **AI 编程缺失** — 2026 年澳洲科技公司面试普遍加入 AI 编程题（OpenAI/Claude API、RAG、AI Agent），第6期完全没覆盖。

竞品（NeetCode Pro、AlgoExpert、Educative）都已经从「集训」转向「自学 + 互动 Lab」模式。我们再不升级会被淘汰。

---

## 2. 目标

| # | 目标 | 度量 |
|---|------|------|
| G1 | 从「等开课集训」升级为「买完立刻学」自学型课程 | 学员可以在购买后立即访问全部 40 节课 |
| G2 | 每节课提供 2000+ 字详细自学教程（learningMaterial） | 100% 课程满足，平均 4880 字 |
| G3 | 整合 70+ 平台互动 Lab + 公司真题 + Cheat Sheet 资源 | 89 个 Lab 绑定 + 21 个 Learn 章节 + 12 个 Cheat Sheet |
| G4 | 新增 AI 编程面试模块（2026 新趋势） | 3 节课覆盖 LLM API / RAG / Agent / 全栈集成 |
| G5 | 保留全部往期录播 + 直播课资产 | 11 节录播 + 7 节直播课全部保留，没有删除 |
| G6 | 课程总览页面具备营销转化能力 | 完整的痛点 → 方案 → 卖点 → FAQ → CTA 销售页 |

---

## 3. 核心原则

1. **只加不减**：原有 18 节课 100% 保留，不删除任何已有资产
2. **本地是 source of truth**：所有内容在 `curriculum/` 编辑，通过 SDM 同步到 production
3. **付费内容隔离**：marketing 销售页（curriculum.html）公开可见，详细 learningMaterial 仅在购买后可见
4. **每节课都是 immersive**：视频 + 教程 + Lab + 真题 + Cheat Sheet 一体化，不需要跳出平台
5. **Anti-template content**：拒绝 AI 味营销文案，每段内容必须有具体代码/数据/案例

---

## 4. Solution Architecture

### 4.1 课程结构（9 Phases / 40 Lessons）

| Phase | 标题 | 课数 | 类型 | 来源 |
|------|------|------|------|------|
| **0** | 往期精华录播（第5期） | 11 | Video | 第5期老内容（保留） |
| **1** | 面试策略与求职准备 | 3 | Information | 全新自学 |
| **2** | 面试核心直播课（第5-6期升级版） | 7 | Lesson (Live) | 第5/6期直播课（保留） |
| **3** | 前端高频突击（自学 + Lab） | 4 | Information | 全新自学 + 30+ Lab |
| **4** | 后端高频突击（自学 + Lab） | 3 | Information | 全新自学 |
| **5** | 系统设计 | 3 | Information | 全新自学 |
| **6** | AI 编程面试 🆕 | 3 | Information | 全新（2026 新趋势）|
| **7** | 算法与白板题 | 3 | Information | 全新自学 |
| **8** | 模拟面试与冲刺 | 3 | Information + Live | 全新自学 + 直播 |
| **总计** | | **40** | | |

### 4.2 数据流

```
本地 source of truth
└── curriculum/full-stack-developer-interview/
    ├── public/
    │   ├── outline.json          # 唯一数据源（5680 行）
    │   ├── curriculum.html       # marketing 销售页（公开）
    │   └── styles.css            # 共享样式
    └── PRD.md                    # 本文档

         ↓ Skills Data Manager (localhost:5188/bootcamp)
         ↓ POST /api/bootcamps/full-stack-developer-interview/sync

Production
├── api.jiangren.com.au           # 数据库 (Training/Modules/Programs/Lessons)
├── jiangren.com.au/curriculum/   # 静态 HTML (curriculum.html)
└── jiangren.com.au/program-course/training/full-stack-developer-interview  # 课程详情页
```

### 4.3 关键资源映射

| 平台资源 | 集成方式 | 数量 |
|---------|--------|------|
| 前端实验室 (`/learn/frontend-lab/*`) | `lesson.labs[].source = "frontend-lab"` | 42 |
| Prompt 实验室 (`/learn/prompt-lab/*`) | `lesson.labs[].source = "prompt-lab"` | 16 |
| Learn 章节 (`/learn/{direction}/{slug}`) | `lesson.learns[]` | 21 |
| Interview Handbook | `lesson.resources.interviewHandbook` | 15 sections |
| Cheat Sheets | `lesson.resources.cheatSheets` | 12 |
| 公司真题（80+ 家） | `lesson.resources.interviewQuestions` | 8 集合 |
| 求职匠 Chrome Extension | L02 + L29 深度集成 | — |
| JobPin AI 简历编辑器 | L03 集成 | — |
| 全栈开发者 Roadmap | L01 链接 | — |

---

## 5. 内容提升

### 5.1 数量对比

| 指标 | 升级前 | 升级后 | 增幅 |
|------|------|------|------|
| 总课数 | 18 | **40** | +122% |
| Phase 数 | 1 | **9** | +800% |
| 总 description 字符 | ~3,200 | **4,594** | +44% |
| 平均 description | 80 | **114** | +43% |
| 总 learningMaterial 字符 | ~0 | **195,237** | ∞ |
| 平均 learningMaterial | ~0 | **4,880** | ∞ |
| 绑定 Lab 数 | 0 | **89** | ∞ |
| 绑定 Learn 章节数 | 0 | **21** | ∞ |
| Phase 0 录播视频绑定 | 0 | **17** | ∞ |

### 5.2 每节课内容标准

每节课的 `learningMaterial` 必须包含：
- 真实代码示例（不是 placeholder）
- 至少 1 个对比表格（多维度 trade-off）
- 真实公司面试题或 anti-pattern 反例
- 5 步答题框架（algorithmic 题）或 STAR 模板（behavioral）
- 至少 1 个互动 Lab 链接
- 面试官追问应对模板

### 5.3 Anti-template 规则

禁止出现：
- ❌ "在当今快速发展的..." 类空洞开场
- ❌ "本节课将深入探讨..." 类模板套话
- ❌ 没有具体代码/数据的「概念解释」
- ❌ 万能句式（换个关键词就能用在别的主题）

每段内容自检标准：「如果删掉这段，读者会损失什么具体信息？」答案是「没有」就删掉。

---

## 6. Marketing 销售页

`curriculum.html` 是公开访客（未购买）能看到的销售页面，结构：

| 区块 | 目的 | 内容 |
|------|------|------|
| Hero | 抓注意 | 痛点钩子 + 5 个核心数字（40节/70+Lab/80+真题/9模块/$299）+ CTA 按钮 |
| 痛点 (4 卡) | 共鸣 | 会写≠会讲 / 答题散乱 / 盲目刷题 / AI 编程新趋势 |
| 强调 Box | 认知锚点 | 「面试 60% 写代码，40% 表达」 |
| 解决方案 (4 卡) | 价值主张 | 11 节录播 / 7 节直播 / 22 节自学 / 求职匠+JobPin AI |
| 9 Phase 卡片 | 课程结构 | 每个 Phase 一句话价值描述（不展开 lesson 详情） |
| 为什么选我们 (4 卡) | 信任建立 | Stan Luo / 80+ 公司真题 / 70+ Lab / 1v1 模拟面试 |
| 适合谁 (6 项) | 定位匹配 | 6 种学员画像 |
| FAQ (6 题) | 解除疑虑 | 从已有销售文案提取 |
| 最终 CTA | 转化 | 价格 box（$299→$270 早鸟）+ 大按钮 |

详细的 Phase 内容、lesson 标题、learningMaterial、Lab 答案 — 全部隐藏，购买后才能看到。

---

## 7. Production 状态

### 7.1 数据库同步

| 实体 | ID | 状态 |
|------|---|------|
| Training | `6113777f11946dfa480ce146` | ✅ 元数据全部更新 |
| Phase 7 Program | `69d85b9b76e3e0c1b378a69c` | ✅ 创建 + 元数据补全 |
| Syllabus | `69d85b9b76e3e0c1b378a6a9` | ✅ 40 lessons 全部 attach |
| Modules | 9 个 | ✅ 全部命名正确 |
| Lessons | 40 个 | ✅ 全部含 learningMaterial + Lab 绑定 |
| 视频 URL | 17 节录播课 | ✅ 从第5期复制 |

### 7.2 静态文件

| 文件 | 大小 | URL | 状态 |
|------|------|-----|------|
| `outline.json` | ~200KB | `/curriculum/full-stack-developer-interview/outline.json` | ✅ 200 |
| `curriculum.html` | ~24KB | `/curriculum/full-stack-developer-interview/curriculum.html` | ✅ 200 |
| `styles.css` | ~8KB | `/curriculum/full-stack-developer-interview/styles.css` | ✅ 200 |
| `pages.json` | ~50B | `/curriculum/full-stack-developer-interview/pages.json` | ✅ 自动生成 |

### 7.3 Skills Data Manager

`tools/skills-data-manager/server/bootcamp/diff.ts` 的字段映射要求：
- `outline.slug` 必须在顶层（不能在 metadata 内）
- `outline.name` 必须在顶层
- `phase.name` 必须存在（diff 用 name 而不是 title 匹配 module）

之前 outline.json 把 slug/name 嵌在 metadata 下，导致 SDM 显示 "Sync to Local: undefined"，已修复。

---

## 8. 走过的坑

### 8.1 SDM 兼容性

| 坑 | 原因 | 修复 |
|----|-----|------|
| Sync 显示 "undefined" | outline.json 把 slug/name 放在 `metadata{}` 下，SDM 读 `outline.slug` | 把 slug/name 提到顶层 |
| 9 个 Module 名称是 "undefined" | diff.ts 读 `phase.name`，outline 用 `phase.title` | 给每个 phase 加 `name` 字段 |
| Sync 后看不到大纲 | Training 的 `syllabusesToDisplay` 锁死在第5期 syllabus | 改为 phase 7 syllabus |
| 大纲只显示 0 lessons | 22 节新课没有 `module` 字段，被公共接口过滤 | 按 outline 的 phase 给每节课设置正确的 module |

### 8.2 部署链路

| 坑 | 原因 | 修复 |
|----|-----|------|
| `localhost:8000` 看不到 curriculum iframe | CurriculumEmbed fetch `https://jiangren.com.au/curriculum/.../pages.json` 触发 CORS | next.config.js 加 dev rewrite，组件改用相对路径 `/curriculum` |
| Phase HTML 内容泄露 | `curriculumPages` 列出 phase0-phase8.html，公开可访问 | 只保留 `curriculum.html`，删除 phase HTML 文件 |
| description_en 脏数据 | production 上有 `<p><br data-mce-bogus="1"></p>` | 直接调 admin-cms API 清空 |

### 8.3 公共接口的 Lesson 过滤

`GET /trainings/:id/syllabuses` 公共接口在 `training.service.ts` 的 `getSyllabusBySyllabusId` 里有一行：

```typescript
syllabusDoc.lesson.forEach((item: any) => {
  if (item.module) {  // ← 没有 module 的 lesson 被静默过滤
    // 加入响应
  }
});
```

任何创建新 lesson 时必须设置 `module` 字段，否则不会显示在前台。

---

## 9. 后续工作

### 9.1 P0 (建议尽快做)

- [ ] **删除 production nginx 上残留的 phase0-8.html 文件**（git rm 不会自动删除已部署的文件）
- [ ] **优化 SDM diff 工具**：自动检测 lesson 缺少 `module` 字段，避免静默过滤

### 9.2 P1 (有时间做)

- [ ] **为 Phase 0 录播课补字幕**：让搜索引擎能索引视频内容
- [ ] **每节课加 1-2 个真实公司原题**：从 `skills-data/interview-questions/` 拉真题对应到课程
- [ ] **增加学习进度追踪**：学生能看到自己学了哪几节
- [ ] **加 review 系统**：购买学员可以给课程评分

### 9.3 P2 (Nice to have)

- [ ] **英文版 description / learningMaterial**：覆盖海外华人市场
- [ ] **配套 PDF 学习手册**：把 195K 字 learningMaterial 导出为 PDF
- [ ] **模拟面试自动评分**：用 AI 评估学员的答题质量
- [ ] **同学社区集成**：报名后自动加入学习群

---

## 10. 关键决策记录 (ADR)

### ADR-001: 自学 vs 集训

**决策**: 采用「自学为主 + 可选模拟面试」模式，不再开新一期集训班。

**理由**:
- 学员买完立刻可以学，转化漏斗减少 1 个等待环节
- 老师不再需要按 cohort 排课，运营成本降低
- 模拟面试作为增值服务单独收费，提高 ARPU

**权衡**: 失去了集训的「同学群体」氛围，需要靠社区运营补回来。

### ADR-002: 保留全部历史内容

**决策**: 不删除任何往期录播或直播课，全部以 Phase 0 + Phase 2 形式保留。

**理由**:
- 这些是真实积累的内容资产，删除是浪费
- 用户：「我之前买的课不能因为升级就少了内容」
- 保留也能让新一期看起来内容更丰富（40 节 vs 18 节）

**权衡**: 课程内容看起来略显冗余（部分话题在录播和新自学课都有覆盖），但这是双向 reinforcement 不是缺点。

### ADR-003: Marketing 页 vs 学习页

**决策**: `curriculum.html` 是 marketing 页（公开），详细 learningMaterial 在 production 课程详情页（购买后可见）。

**理由**:
- 公开页要为转化服务，不是为学习服务
- 把 200K 字的教学内容公开会被竞品抄袭
- SEO 上 marketing 页能吸引「面试准备」相关搜索

**权衡**: 用户在购买前看不到完整内容，需要靠 marketing 页的可信度建立信任。

### ADR-004: outline.json 顶层结构

**决策**: outline.json 的 metadata 字段（slug/name/level/type 等）放在顶层，不嵌在 `metadata{}` 里。

**理由**:
- SDM 的 diff/sync 工具读取的是顶层字段
- 和 ai-adoption-bootcamp / ai-engineer-bootcamp 保持一致
- 避免 SDM 显示 "undefined" 的 bug

**权衡**: 顶层字段较多看起来不够整洁，但工具兼容性优先。

---

## 11. 度量指标

升级上线后需要跟踪：

| 指标 | 当前基线 (第5期) | 目标 (第7期，3个月) |
|------|----------------|-------------------|
| 课程购买转化率 | TBD | +30% |
| 学员完课率 | TBD | +50% |
| 课程平均评分 | TBD | ≥ 4.5/5 |
| 模拟面试附加购买率 | 0% | ≥ 20% |
| 课程详情页停留时间 | TBD | +50% |
| `curriculum.html` 访问 → 购买转化 | TBD | ≥ 5% |

需要在 jr-academy 后端加埋点跟踪。

---

## 12. 相关文件

### 本地

- `curriculum/full-stack-developer-interview/public/outline.json` — 唯一数据源（5680 行）
- `curriculum/full-stack-developer-interview/public/curriculum.html` — Marketing 销售页
- `curriculum/full-stack-developer-interview/public/styles.css` — 共享样式
- `skills-data/training-outlines/full-stack-developer-interview.json` — Production 数据备份

### 工具

- `tools/skills-data-manager/server/bootcamp/sync.ts` — Sync 实现
- `tools/skills-data-manager/server/bootcamp/diff.ts` — Diff 比较逻辑
- `tools/skills-data-manager/server/bootcamp/outline.ts` — outline.json 读取

### 修改的核心代码

- `jr-academy-web-zh/src/components/Pages/BootcampDetailPage/components/BootcampDetailPageIntroduce/IntroduceSyllabus.tsx` — CurriculumEmbed 改用相对路径 + 补全 PAGE_LABELS
- `jr-academy-web-zh/next.config.js` — 加 dev rewrite `/curriculum/* → https://jiangren.com.au/curriculum/*`
- `curriculum/.github/workflows/deploy.yml` — wire `full-stack-developer-interview` 到部署流水线

### Production IDs

```
Training:        6113777f11946dfa480ce146
Phase 7 Program: 69d85b9b76e3e0c1b378a69c
Phase 7 Syllabus: 69d85b9b76e3e0c1b378a6a9
Modules: [
  6191cabafd19ab30b24355cb (Phase 0 - 往期精华录播)
  6191cb35fd19ab30b24355cc (Phase 1 - 面试策略与求职准备)
  6191cb7afd19ab30b24355cd (Phase 2 - 面试核心直播课)
  694245dcbc0df65b189fbe84 (Phase 3 - 前端高频突击)
  67624812606855fad8294130 (Phase 4 - 后端高频突击)
  69d9e71e76e3e0c1b3982d30 (Phase 5 - 系统设计)
  69d9e71e76e3e0c1b3982d43 (Phase 6 - AI 编程面试)
  69d9e71f76e3e0c1b3982d48 (Phase 7 - 算法与白板题)
  69d9e71f76e3e0c1b3982d4d (Phase 8 - 模拟面试与冲刺)
]
```

---

## 13. 时间线

| 日期 | 事件 |
|------|------|
| 2026-04-09 | 项目立项，分析现状 |
| 2026-04-09 | 创建 outline.json 初版（40 节课结构） |
| 2026-04-10 | 完成全部 40 节课的初版 learningMaterial |
| 2026-04-10 | 第一次同步到 production（含 SDM bug 排查） |
| 2026-04-10 | 创建静态 HTML 页面 + 接入 deploy.yml |
| 2026-04-11 | 修复公共接口 lesson 过滤问题（module 字段）|
| 2026-04-11 | 修复 localhost CORS 问题（next.config rewrite） |
| 2026-04-11 | 重写 curriculum.html 为 marketing 销售页 |
| 2026-04-11 | 全部 40 节课 description + learningMaterial 升级到 marketing 标准 |
| 2026-04-11 | ✅ Final shipped — production diff 0 changes |
