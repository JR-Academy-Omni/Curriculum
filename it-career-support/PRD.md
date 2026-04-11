# IT Career Coaching Bootcamp 第三期 · PRD

> **产品**: IT Career Coaching Bootcamp（澳洲 IT 职业全周期训练营）
> **版本**: 第三期（v3.1 — Expanded Lesson Architecture）
> **基于**: 第二期 106 节 + 第一期 120 节
> **作者**: JR Academy 课程团队
> **日期**: 2026-04-11
> **状态**: 规划中（Draft）
> **本地预览**: http://localhost:8765/curriculum.html

## v3.1 关键变更（重要）

**之前 v3.0**：把 Wiki/Lab/Roadmap 当成课程"标签"，挂在 Video lesson 上 → 错。

**现在 v3.1**：按 `curriculum/CLAUDE.md` 的设计，**每个 Wiki / Handbook / Roadmap / Lab 都是独立的 Lesson**：
- Wiki / Handbook / Roadmap → 独立 `Information` lesson（标题前缀 `📖 学一下:` / `🗺️ 学一下:`）
- Lab → 独立 `InteractiveLab` lesson（标题前缀 `🔬 练一下:`）
- 学员从 syllabus 走"video → wiki info → lab → 下一个 video"的步进序列
- **lesson 总数 148 → 479**（marketing 卖点：479 节课的全周期训练营）

---

## 0. 文档关系

本 PRD 是第三期的**唯一权威规划文档**，整合以下分支文档：

| 子文档 | 角色 | 在本 PRD 的章节 |
|--------|------|----------------|
| `IMPROVEMENT_PLAN.md` | 第二期问题分析 + 初版 128 节大纲 | §1, §3 |
| `THREE_DIMENSIONS.md` | 三维度课程定位框架 | §2 |
| `D3_NEW_LESSONS.md` | 20 节新增 D3 课程详细大纲 | §4 |
| `RESOURCE_EXPANSION.md` | 平台资源扩展机会分析 | §5 |
| `RESOURCE_LINKING_STRATEGY.md` | 学/练/用三段式绑定策略 | §5, §6 |

后续所有改动以本 PRD 为准，子文档作为参考资料保留。

---

## 1. 背景与问题

### 1.1 历史课程对比

| 期数 | Lesson 数 | 互动 Lab | Wiki/Info Lesson | Description | AI 内容 |
|------|----------|---------|------------------|------------|---------|
| 第一期 | 120 | 0 | 0 | 0% | 0 |
| 第二期 | 106 | 0 | 0 | 0% | 1 节 |
| **第三期（本 PRD v3.1）** | **479** ⬆️ | **31** | **328** | **100%** | **41 节核心 + 20+ 配套** |

### 1.2 第二期暴露的核心问题

| # | 问题 | 严重度 | 影响 |
|---|------|--------|------|
| 1 | 106 节 description 全部为空 | 严重 | 学员看不到课程说明 |
| 2 | 零资源绑定 | 严重 | 纯视频堆砌，没有延伸学习 |
| 3 | AI 时代内容严重不足（仅 1 节） | 严重 | 2026 年的求职课不能没 AI |
| 4 | 缺少职业成长内容（仅 12 节晋升） | 严重 | 学员拿到 offer 就脱钩 |
| 5 | 没有结营测试和总结 | 中等 | 学习闭环不完整 |
| 6 | Group Tutorial / Assignment 无说明 | 中等 | 学员不知道工作坊做啥 |
| 7 | 内容碎片化（如内推拆 3 节） | 低 | 节奏割裂 |

### 1.3 第三期的定位升级

**原版定位（过窄）：**
> "帮你找到澳洲 IT 工作"

**第三期定位（更广）：**
> **"从找工作到升职加薪：澳洲 IT 职业全周期训练营 + AI 时代终身学习路径"**

---

## 2. 三维度课程框架

第三期把课程分为 3 个维度，覆盖学员从"没工作"到"升职加薪"的全周期：

```
┌──────────────────┬──────────────────┬──────────────────┐
│  D1 · 56 节      │  D2 · 297 节     │  D3 · 121 节 🆕  │
│  职业认知规划    │  求职与面试      │  职业成长提升    │
│  我该做什么？    │  怎么拿 offer？  │  怎么升职加薪？  │
└──────────────────┴──────────────────┴──────────────────┘
```

### 2.1 第三期 vs 第二期 维度分布

| 维度 | 第二期 | 第三期 v3.1 | 变化 |
|------|--------|-----------|------|
| D1 职业认知规划 | 18 节 | **56 节** (12%) | 18 核心 + 38 配套学习单元 |
| D2 求职与面试 | 73 节 | **297 节** (62%) | 95 核心 + 202 配套学习单元 |
| **D3 职业成长提升** | **15 节** | **121 节** (25%) | **38 核心 + 83 配套学习单元** |
| 总计 | 106 | **479** | **+373 节** |

### 2.2 D3 是第三期最大的差异化

**第二期问题**: D3 只有 12%，学员学完就觉得"找到工作就和这门课没关系了"，**没有粘性**。

**第三期解决**: 新增 2 个 Module（X + Y）共 20 节 D3 课程，让课程价值延伸到入职后的 1-5 年。

---

## 3. 第三期完整大纲（479 节 / 14 模块）

### 3.1 模块结构总览（v3.1 — 展开后的真实数字）

```
IT Career Coaching Bootcamp 第三期 (479 节)
│
├─ Part 1  · 行业认知与入营            29 节  ( 9 核心 + 20 配套)
├─ Part 2  · 职业规划                  27 节  ( 9 核心 + 18 配套)
├─ Part 3  · 简历与个人品牌            52 节  (18 核心 + 34 配套)
├─ Part 4  · LinkedIn 与社交网络       23 节  ( 9 核心 + 14 配套)
├─ Part 5  · 求职策略与投递            25 节  ( 9 核心 + 16 配套)
├─ Part 6  · 面试基础                  18 节  ( 8 核心 + 10 配套)
├─ Part 7  · 行为面试                  30 节  (10 核心 + 20 配套)
├─ Part 8  · 技术面试                  88 节  (20 核心 + 68 配套) ← 最重
├─ Part 9  · 薪资谈判与 Offer 决策     23 节  ( 8 核心 + 15 配套)
├─ Part 10 · 职业晋升                  40 节  (12 核心 + 28 配套)
├─ Part 10.5 · Module X — AI 时代持续学习  42 节  (10 核心 + 32 配套) 🆕
├─ Part 10.6 · Module Y — 职业方向深度发展  39 节  (10 核心 + 29 配套) 🆕
├─ Part 11 · 大厂求职                  40 节  (14 核心 + 26 配套)
└─ Part 12 · 结营                      3 节   ( 2 核心 + 1 配套)
```

### 3.1.1 核心 vs 配套 lesson 类型分布

| 类型 | 数量 | 说明 |
|------|------|------|
| **核心 Video / Lesson** | 148 | 第二期保留 106 + 第三期新增 42 |
| **配套 Information** (📖 学一下 / 🗺️ 学一下 / 🚀 用一下) | 300 | 每个 Wiki/Handbook/Roadmap/Tool 一节 |
| **配套 InteractiveLab** (🔬 练一下) | 31 | 每个 Lab 独立一节 |
| **总计** | **479** | |

### 3.2 41 节新增课程清单

**第一批 21 节 AI 求职类（已生成 learningMaterial）：**

| # | 课程 | Part | 目的 |
|---|------|------|------|
| L8 | 2026 AI 时代的 IT 岗位变化 | P1 | 行业认知 |
| L29 | 用 AI 定制 Cover Letter | P3 | 简历 |
| L30 | AI 简历自检与优化技巧 | P3 | 简历 |
| L51 | 用 AI 批量定制求职材料 | P5 | 求职 |
| L52 | AI 求职工具全景 | P5 | 求职 |
| L53 | 远程工作与全球化求职 | P5 | 求职 |
| L63 | 用 AI 模拟面试练习 | P7 | 面试 |
| L69 | 面试结尾提问技巧 | P7 | 面试 |
| L70 | 面试评分标准解密 | P7 | 面试 |
| L72 | Group Tutorial: 模拟行为面试专项 | P7 | 面试 |
| L79 | AI/ML 方向面试准备 | P8 | 面试 |
| L82 | 算法面试基础与刷题策略 | P8 | 面试 |
| L83 | 用 AI 辅助刷题与准备技术面 | P8 | 面试 |
| L96 | 澳洲 IT 薪资构成详解 | P9 | 谈判 |
| L97 | 全球 IT 薪资对比 | P9 | 谈判 |
| L98 | 用 AI 分析 Offer 对比 | P9 | 谈判 |
| L100 | Group Tutorial: 模拟薪资谈判 | P9 | 谈判 |
| L111 | AI 时代的职业竞争力 | P10 | 晋升 |
| L112 | 用 AI 提升日常工作效率 | P10 | 晋升 |
| L127 | 结营总结与后续行动计划 | P12 | 结营 |
| L128 | 结营测试 | P12 | 结营 |

**第二批 20 节 D3 职业成长类（已生成 learningMaterial）：**

| # | 课程 | Module |
|---|------|--------|
| X1 | 入职后的第一个 90 天 | X · 持续学习 |
| X2 | 如何建立可持续的 learning routine | X |
| X3 | 用 AI 做日常学习笔记 | X |
| X4 | 技术人如何管理信息焦虑 | X |
| X5 | Cursor 实战：提升 3x 编码效率 | X |
| X6 | Claude Code：AI 结对编程新范式 | X |
| X7 | 用 AI 做代码 review 和重构 | X |
| X8 | AI 辅助技术调研与方案设计 | X |
| X9 | 如何成为团队的 AI Champion | X |
| X10 | 2026 必须掌握的 5 个 AI 工具 | X |
| Y1 | T 型 vs π 型人才 | Y · 方向发展 |
| Y2 | 从 Junior 到 Senior 的 5 个关键跨越 | Y |
| Y3 | 如何建立技术影响力 | Y |
| Y4 | Staff / Principal 的真实要求 | Y |
| Y5 | 管理路线：Tech Lead / EM 技能树 | Y |
| Y6 | 转型 AI Engineer 完整路径 | Y |
| Y7 | 转型 AI Product Manager | Y |
| Y8 | 转型 AI Adoption Specialist | Y |
| Y9 | 副业：独立开发者 | Y |
| Y10 | 持续学习计划：5 年技术规划 | Y |

### 3.3 顺序变更说明

第三期保留第二期 106 节全部内容，**只有 1 处顺序调整**：
- 二期 L92 "大厂找工作的渠道" 从"职业晋升"部分移到"大厂求职"部分开头（Part 11）
- 原因：内容更属于大厂求职而非晋升

---

## 4. Module X / Y 详细设计

### 4.1 Module X · AI 时代的持续学习（10 节）

**定位**: 拿到 offer 后，怎么用 AI 工具让自己每天都在变强，真正不被 AI 时代淘汰。

**插入位置**: Part 10 职业晋升之后，Part 11 大厂求职之前。

**核心命题**: AI 不会取代你，但会用 AI 的人会取代你。

| Lesson | 关键内容 | 资源绑定 |
|--------|---------|---------|
| X1 入职 90 天 | Week 1-Month 3 关键节点 + 5 个新人误区 | Handbook: career-growth |
| X2 Learning routine | 每日 30min + 每周 2h 节奏，工具栈 | Learn: vibe-coding/hub, Free: Harvard CS50 |
| X3 AI 学习笔记 | 三层笔记 Prompt + Obsidian 集成 | Learn: prompt-master, Lab: information-extraction |
| X4 信息焦虑管理 | 80/20 + 半衰期 + 延迟学习 | Handbook: career-growth |
| X5 Cursor 实战 | Cmd+K/L/Composer + .cursorrules + 5 场景 | Wiki: cursor, Learn: vibe-coding |
| X6 Claude Code | AI 结对编程 + MCP 协议 | Wiki: claude-code-guide, mcp-guide |
| X7 AI 代码 review | 5 维度评审 Prompt + 历史 PR 批量审 | Lab: code-generation, chain-of-thought |
| X8 AI 技术调研 | 架构选型 + trade-off 分析模板 | Lab: chain-of-thought, Handbook: system-design |
| X9 团队 AI Champion | 4 个推动 AI 采用的策略 | Learn: ai-adoption |
| X10 5 个必备 AI 工具 | Cursor / Claude Code / Perplexity / NotebookLM / v0 | Wiki: cursor, claude-code-guide, copilot, windsurf |

### 4.2 Module Y · 职业方向深度发展（10 节）

**定位**: 入职不是"保住工作"，是"选对方向长期发展"。从 Junior 到 Staff/Principal，从技术路线到管理路线。

**插入位置**: Module X 之后，Part 11 大厂求职之前。

**核心命题**: 你的下一个 5 年取决于现在选什么方向、补什么技能。

| Lesson | 关键内容 | 资源绑定 |
|--------|---------|---------|
| Y1 T vs π 人才 | 第二专精选择 + 澳洲薪资溢价数据 | Handbook: engineering-levels, Roadmap: full-stack/ai-engineer |
| Y2 J→S 5 跨越 | 5 个关键转变 + 时间线 + 红旗 | Handbook: career-growth, engineering-levels |
| Y3 技术影响力 | Blog/Talk/OSS 三条路径 + 2 年规划 | Wiki: remote-work |
| Y4 Staff 真实要求 | Google L6 / Atlassian P5 / Canva Staff JD 对比 | Handbook: engineering-levels, interview-formats-top-companies |
| Y5 管理路线 | TL/EM/Director 技能树 + 自测 | Handbook: career-growth, engineering-levels |
| Y6 转型 AI Engineer | 6 月路径 + 真实案例 | Learn: ai-engineer/hub, Roadmap: ai-engineer/ml/rag |
| Y7 转型 AI PM | 技术背景优势 + 日常工作 | Learn: ai-pm |
| Y8 转型 AI Adoption | 新岗位 $70K-$250K + 6 月路径 | Learn: ai-adoption |
| Y9 副业独立开发 | SaaS / Consulting / Content 三模式 | Wiki: remote-work, Free: GitHub Student Pack |
| Y10 5 年规划 | OKR 框架 + 季度复盘 + 提交作业 | Roadmap: frontend/backend/ai-engineer, Handbook: career-growth |

---

## 5. 资源绑定策略（v3.1 — 资源 = 独立 Lesson）

### 5.1 核心原则：资源不是标签，是 Lesson

**v3.0 错的做法（已废弃）：**
```
L8 (Video): 2026 AI 岗位变化
  ├─ tag: Wiki: cursor              ← 错：标签
  ├─ tag: Wiki: claude-code-guide    ← 错：标签
  └─ tag: Lab: hello-ai              ← 错：标签
```

**v3.1 正确的做法：**
```
L8     (Video):           2026 AI 岗位变化            [30 min]
L8-W1  (Information):     📖 学一下: Cursor 完全指南    [30 min]
L8-W2  (Information):     📖 学一下: Claude Code 指南   [30 min]
L8-W3  (Information):     📖 学一下: GitHub Copilot     [30 min]
L8-H1  (Information):     📖 学一下: IT 行业全景        [25 min]
L8-D1  (Information):     📚 学一下: Vibe Coding 方向   [30 min]
L8-T1  (Information):     🚀 用一下: Vibe Coding Hub    [20 min]
L9     (Lesson):          Group Tutorial 00            [120 min]
```

学员从 syllabus 走 L8 → L8-W1 → L8-W2 → ... → L9 的步进序列，**每节都是独立 lesson、每节都能打卡进度**。

### 5.1.1 Lesson 编码规则

| 后缀 | 类型 | 含义 | 标题前缀 |
|------|------|------|---------|
| `L<n>` / `X<n>` / `Y<n>` | 核心 | 视频 / 直播 / 测试 | （原标题） |
| `<base>-W<i>` | Information | 配套 Wiki | 📖 学一下: |
| `<base>-H<i>` | Information | 配套 Interview Handbook | 📖 学一下: |
| `<base>-R<i>` | Information | 配套 Roadmap | 🗺️ 学一下: |
| `<base>-D<i>` | Information | 配套 Learn 方向章节 | 📚 学一下: |
| `<base>-L<i>` | InteractiveLab | 配套 Lab | 🔬 练一下: |
| `<base>-T<i>` | Information | 配套平台工具 | 🚀 用一下: |

### 5.2 平台资源利用情况（v3.1 — 资源都成 lesson 后）

| 资源类型 | 平台总量 | v3.1 利用（独立 lesson 数） |
|---------|---------|---------------------------|
| Interview Handbook 章节 | 50+ | **25+** 节独立 Information lesson |
| Static Wiki | 200+ | **15** 节独立 Information lesson（cursor/claude-code/copilot 等） |
| Roadmap | 30+ | **20+** 节独立 Information lesson |
| Prompt Lab | 22 个 | **22** 节独立 InteractiveLab lesson |
| Frontend Lab | 66 exercises | **9** 节独立 InteractiveLab lesson |
| Learn 方向章节 | 6 个方向 | **15+** 节独立 Information lesson（vibe-coding / prompt-master / ai-engineer / ai-pm / ai-builder） |
| Career Planning 工具 | 1 | **15+** 节独立 Information lesson（每个相关课配 1 节"用一下"） |
| Mock Interview 工具 | 1 | **10+** 节独立 Information lesson |
| JobPin AI 工具 | 1 | **6** 节独立 Information lesson |
| Job Referral 工具 | 1 | **8** 节独立 Information lesson |
| Vibe Coding Hub | 1 | **5** 节独立 Information lesson |
| 求职匠 Chrome Ext | 1 | **3** 节独立 Information lesson |
| Free Resources | 免费资源 | **9** 节独立 Information lesson（CS50 / GitHub Pack / 简历模板等） |

### 5.3 自动展开规则

`tools/build-expanded-outline.py` 按统一规则展开每个核心 lesson。Pseudocode：

```python
for base_lesson in 148_base_lessons:
    output(base_lesson)  # 核心 lesson 本身

    binding = resource_bindings[base_lesson.code]

    for wiki in binding.wikis:
        output(make_info_lesson("📖 学一下: " + wiki, wiki))

    for handbook in binding.handbook:
        output(make_info_lesson("📖 学一下: " + handbook, handbook))

    for roadmap in binding.roadmaps:
        output(make_info_lesson("🗺️ 学一下: " + roadmap, roadmap))

    for learn_chapter in binding.learns:
        output(make_info_lesson("📚 学一下: " + learn_chapter, learn_chapter))

    for lab in binding.labs:
        output(make_interactive_lab_lesson("🔬 练一下: " + lab, lab))

    for tool in binding.tools:
        output(make_info_lesson("🚀 用一下: " + tool, tool))
```

总计：148 核心 + 331 配套 = **479 节 lesson**。

---

## 6. 数据与同步设计

### 6.1 核心数据文件

```
curriculum/it-career-support/
├── PRD.md                          ← 本文档（v3.1）
├── public/
│   ├── curriculum.html             ✓ 静态展示（479 节）
│   └── outline.json                ✓ 数据源（479 节，911 KB）
├── resource-bindings.json          ✓ 资源绑定权威映射
├── production-ids.json             ⏳ 待重新生成（按 479 节匹配）
├── learning-materials/             ✓ 41 节核心新课的 HTML 教学内容
│   ├── L08-ai-era-job-changes.html
│   ├── ... (40 个文件)
│   └── Y10-5-year-plan.html
├── video-ids.json                  ✓ 第二期 prod 视频 + lesson 映射
└── video-ids-phase1.json           ✓ 第一期 prod 视频 + lesson 映射

tools/
├── build-resource-bindings.py      ✓ 生成 resource-bindings.json
├── build-expanded-outline.py       ✓ 生成 479 节 outline.json (v3.1)
├── build-curriculum-html-expanded.py ✓ 生成 479 节 curriculum.html (v3.1)
├── build-production-ids.py         ✓ 生成 production-ids.json
├── build-outline-json.py           ⚠️ v3.0 版本（148 节），已 deprecated
└── build-curriculum-html.py        ⚠️ v3.0 版本（148 节），已 deprecated
```

### 6.2 视频复用情况

| 来源 | 数量 | 说明 |
|------|------|------|
| 第二期 aliCloudVideo | 82 节 | 直接复用 |
| 第二期 s3Videos | 1 节 | 直接复用 |
| 从第一期回填 | 3 节 | 二期没绑但一期有的 |
| **总可复用** | **86 节** | 占第二期 81% |
| 待录制（第三期新增 41 节） | 41 节 | 需新录或用 Information 类型 |
| 真正缺失（Video 类型但两期都没） | 3 节 | 需确认是否补录 |

### 6.3 Production ID 映射

**核心问题**: sync 没保存 prod ID，按位置匹配，会造成重复创建。

**解决方案**: 创建 `production-ids.json`：
```json
{
  "trainingId": "6510338e4e6d79002bf31ee1",
  "lastSyncedAt": "2026-04-11T03:00:00Z",
  "programs": {
    "1": "651bbdefe05bd70070ec3d1d",
    "2": "65ae20f032b918002c416120",
    "3": null
  },
  "lessons": {
    "L01": { "prodId": "65ae20f932b918002c416121", "syncedAt": "..." },
    "L02": { "prodId": "65ae20f932b918002c416122", "syncedAt": "..." },
    "X1":  { "prodId": null },
    "Y1":  { "prodId": null }
  }
}
```

**对应的 sync 改造**:
- ✅ 已修复：`tools/skills-data-manager/server/bootcamp/sync.ts` 加了 Program 重复检查
- ✅ 已修复：`tools/skills-data-manager/server/bootcamp/production.ts` 加了 Program 去重展示
- ⏳ 待做：sync 写回 lesson prod ID 到 production-ids.json
- ⏳ 待做：diff 优先按 ID 匹配而不是按位置

---

## 7. 当前进度与待办

### 7.1 已完成（✅）

| 任务 | 文件 | 版本 |
|------|------|------|
| 课程大纲规划 | IMPROVEMENT_PLAN.md | v3.0 |
| 三维度框架 | THREE_DIMENSIONS.md | v3.0 |
| 20 节新 D3 课程大纲 | D3_NEW_LESSONS.md | v3.0 |
| 资源扩展分析 | RESOURCE_EXPANSION.md | v3.0 |
| 学/练/用 绑定策略 | RESOURCE_LINKING_STRATEGY.md | v3.0 |
| 41 节核心新课教学内容 | learning-materials/*.html (41 个) | ✓ |
| 视频 ID 映射 | video-ids.json + video-ids-phase1.json | ✓ |
| 资源绑定权威映射 | resource-bindings.json | ✓ |
| **479 节 expanded outline.json** | public/outline.json (911KB) | **v3.1 ✓** |
| **479 节 expanded curriculum.html** | public/curriculum.html (152 KB) | **v3.1 ✓** |
| Sync Program 去重 fix | tools/skills-data-manager/server/bootcamp/sync.ts | ✓ |
| Production 去重展示 fix | tools/skills-data-manager/server/bootcamp/production.ts | ✓ |

### 7.2 待办（按优先级）

#### P0 — 必须做（同步前提）

| # | 任务 | 状态 |
|---|------|------|
| 1 | 重新生成 production-ids.json（按 479 节匹配，约 100 节有 prodId） | ⏳ 待做 |
| 2 | 修改 sync.ts / diff.ts 用 production-ids.json 按 ID 匹配（不按位置） | ⏳ **关键**，否则 sync 会破坏 Phase 2 |
| 3 | 本地 Skills Data Manager 跑 diff，确认 ~100 update + ~379 create + 0 delete | ⏳ 待做 |
| 4 | 修复 5 节 Video 类型缺视频的课（确认录制 or Information 类型） | ⏳ 待用户确认 |

#### P1 — 应该做

| # | 任务 |
|---|------|
| 5 | 同步 479 节到 production（创建第三期 Program） |
| 6 | sync 改造：每次 create 后回写 prodId 到 production-ids.json |
| 7 | 校验所有 wiki/handbook/roadmap 跳转链接有效 |

#### P2 — 值得做

| # | 任务 | 产出 |
|---|------|------|
| 10 | 新建 4 个 AI 求职专属 Prompt Lab | 差异化亮点 |
| 11 | 新建 4 个 Career Wiki（au-it-job-market-2026 等） | 内容竞争力 |
| 12 | 后端 Program schema 加 unique index `(training, programPhase)` | 治本防重复 |
| 13 | **新建 `/learn/ai-adoption` Learn 方向**（当前不存在，X9/Y8 想用这个方向） | 平台缺失能力，让 AI Adoption Specialist 转型路径完整 |

---

## 8. 验收标准

### 8.1 内容完整性

- [x] 479 节课全部有 description
- [x] 41 节核心新增课全部有 learningMaterial（2000-4000 字）
- [x] 328 节配套 lesson 全部有 learningMaterial（含跳转链接到平台资源）
- [x] D3 占比 ≥ 24%（35 节以上）

### 8.2 数据正确性

- [x] outline.json 通过 JSON 校验
- [x] type === 'training'、programPhase === 3、totalLessons === 479
- [x] 没有重复 lesson code
- [ ] production-ids.json 按 479 节重新匹配（待做）
- [ ] sync diff 显示预期变更（待做）

### 8.3 同步安全性

- [x] sync 不会重复创建 Program（Program 级 fix 已完成）
- [x] sync 不会删除已有 lesson（validateNoDeletes 已有）
- [ ] **sync 改用 production-ids.json 按 ID 匹配**（必须做，否则会污染 Phase 2）
- [ ] sync 失败可回滚

### 8.4 学员体验

- [x] curriculum.html 显示 479 节课
- [x] Base / Supplementary 视觉层次清晰
- [x] 课程类型颜色编码（Video / Info / InteractiveLab / Lesson / Quiz）
- [x] 移动端适配（响应式 CSS）

---

## 9. 风险与缓解

| 风险 | 概率 | 影响 | 缓解 |
|------|------|------|------|
| sync 创建第三期 Program 失败 | 低 | 高 | sync.ts 已加重复检查 + 二次确认 |
| 视频 ID 绑错节课 | 中 | 中 | 用 production-ids.json 按 ID 匹配 |
| 41 节新课没视频 | 高 | 中 | 用 Information 类型 + learningMaterial 替代 |
| 学员对 D3 内容不感兴趣 | 中 | 高 | 营销文案强调"找到工作只是开始" |
| 平台资源链接失效 | 低 | 低 | 同步前批量校验链接 |

---

## 10. 营销定位调整

### 10.1 核心卖点（5 个）

| 原版（3 个） | 第三期新增 |
|-------------|-----------|
| ✓ 找到澳洲 IT 工作 | ➕ **AI 时代的职业转型指南** |
| ✓ 通过技术/行为面试 | ➕ **入职后的持续学习路径** |
| ✓ 谈到好薪资 | ➕ **5 年职业发展规划** |

### 10.2 课程描述模板

> **IT Career Coaching Bootcamp 第三期 — 澳洲 IT 职业全周期训练营**
>
> **479 节课** · 14 个模块 · 12 周 · 涵盖找工作、面试、谈薪、入职、晋升、转型 · 全程绑定 JR Academy 平台 200+ 学习资源
>
> 148 节核心视频 + 31 节互动 Lab + 300 节配套 Information lessons（Wiki / Handbook / Roadmap / Tools 全部独立学习单元）
>
> **不只是求职课，是从 Junior 到 Staff 的完整成长路径。**

---

## 11. 子文档索引

| 文档 | 内容 | 状态 |
|------|------|------|
| `PRD.md` | **本文档（v3.1 权威）** | ✅ |
| `IMPROVEMENT_PLAN.md` | 第二期问题分析 + 初版 128 节大纲 | v3.0 历史参考 |
| `THREE_DIMENSIONS.md` | 三维度框架详细推演 | v3.0 历史参考 |
| `D3_NEW_LESSONS.md` | 20 节新 D3 课程详细大纲 | v3.0 历史参考 |
| `RESOURCE_EXPANSION.md` | 资源扩展机会清单 | v3.0 历史参考 |
| `RESOURCE_LINKING_STRATEGY.md` | 学/练/用 三段式策略详解 | v3.0 历史参考（v3.1 已弃用） |
| `resource-bindings.json` | 138 节核心 lesson 的资源映射 | ✅ |
| `public/curriculum.html` | 静态展示页 — **479 节** | ✅ v3.1 |
| `public/outline.json` | 同步源数据 — **479 节，911 KB** | ✅ v3.1 |
| `learning-materials/*.html` | 41 节核心新课的教学 HTML | ✅ |
| `video-ids.json` | 第二期视频 + lesson 映射 | ✅ |
| `video-ids-phase1.json` | 第一期视频 + lesson 映射 | ✅ |
| `production-ids.json` | lesson code → prod ID 映射 | ⏳ 待按 479 重新生成 |

---

## 12. 下一步

要进入执行阶段：

1. **重新生成 production-ids.json**（按 479 节匹配 prod ID）
2. **修改 sync.ts / diff.ts 用 production-ids.json 按 ID 匹配** — 关键！否则 sync 会污染 Phase 2
3. **本地 diff 预演** — SDM 确认 ~100 update + ~379 create + 0 delete
4. **正式同步到 production** — 创建第三期 Program + 379 个新 lesson

**本地预览**: http://localhost:8765/curriculum.html

要从哪一步开始？
