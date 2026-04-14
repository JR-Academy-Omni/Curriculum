# Bootcamp 课程自动化管理 — 全局状态 & 缺口分析

> 最后更新：2026-04-14

---

## 系统架构总览

```
┌─────────────────────────────────────────────────────┐
│  Claude AI（课程创作引擎）                            │
│  通过 Skills 批量管理课程内容                          │
├─────────────────────────────────────────────────────┤
│                                                     │
│  /bootcamp-curriculum-creator  从零创建完整课程        │
│  /career-bootcamp              给岗位自动生成课程      │
│  /bootcamp-description-enhancer 升级课程描述           │
│  /bootcamp-learning-material-generator 生成学习资料   │
│  /lesson-design                设计单节 Lesson        │
│  /curriculum-review            审查大纲完整性          │
│                                                     │
│         ↓ 输出到                                     │
│                                                     │
│  curriculum/{bootcamp}/public/                       │
│  ├── outline.json     ← 唯一数据源（含 Training 配置）│
│  │                                                   │
│  │   学生端页面（嵌入 program-course iframe）          │
│  ├── outline.html     ← 完整大纲（默认展示）           │
│  ├── curriculum.html  ← 课程总览                      │
│  ├── phase0~N.html    ← Phase 详情                   │
│  ├── learning-plan.html ← 学习计划                    │
│  │                                                   │
│  │   内部页面（不对学生展示）                          │
│  └── internal.html    ← 课程大纲管理（配置/缺失/TODO）  │
│                                                     │
│         ↓ Diff + Sync                                │
│                                                     │
│  Skills Data Manager (localhost:5188/bootcamp)       │
│  ├── 详情页    查看 Training 配置 + Lesson 内容        │
│  ├── Check Diff  对比 local vs production             │
│  ├── Sync        推送 Training + Lesson 变更          │
│  ├── Download    备份 production 数据                  │
│  └── Versions    版本管理                             │
│                                                     │
│         ↓ 调用 API                                   │
│                                                     │
│  jr-academy 后端 (admin-cms API)                     │
│  Training → Module → Program → Syllabus → Lesson     │
│                                                     │
│         ↓ 用户看到                                    │
│                                                     │
│  /program-course/{slug}                              │
│  ├── 课程详情页（从 production 读取）                   │
│  └── Curriculum section iframe（嵌入学生端 HTML 页面）  │
└─────────────────────────────────────────────────────┘
```

---

## 标准文件结构

每个 Bootcamp 在 `curriculum/{slug}/public/` 下应该有以下文件：

### 数据源

| 文件 | 必须 | 说明 |
|------|:---:|------|
| `outline.json` | ✅ | 唯一数据源，包含 Training 配置 + Phase/Lesson 结构 + Program 配置 |

### 学生端页面（嵌入 program-course iframe）

| 文件 | 必须 | 说明 |
|------|:---:|------|
| `outline.html` | ✅ | 完整大纲 — 每节课的教学步骤、Lab、Learn（iframe 默认展示） |
| `curriculum.html` | ✅ | 课程总览 — Phase 卡片、亮点、统计数据 |
| `phase0.html ~ phaseN.html` | ✅ | 各 Phase 详情 — 每节课的学习路径 |
| `learning-plan.html` | 建议 | 学习计划 — 每周学什么、怎么安排节奏 |
| `styles.css` | ✅ | 共享样式 |

### 内部页面（运营/老师/开发用，不嵌入 iframe）

| 文件 | 必须 | 说明 |
|------|:---:|------|
| `internal.html` | ✅ | 课程大纲管理 — 每节课的配置状态、缺失内容、TODO、Production IDs |

### iframe 配置

学生端页面通过 iframe 嵌入 `/program-course/{slug}` 课程详情页的 Curriculum section。

**配置位置：** `jr-academy-web-zh/.../IntroduceSyllabus.tsx` 的 `CURRICULUM_SLUGS` 对象。

```typescript
const CURRICULUM_SLUGS = {
    'ai-essentials-bootcamp': {
        pages: ['outline.html', 'curriculum.html', 'phase0.html', ...],
        defaultPage: 'outline.html',
    },
};
```

添加新课程：在此对象加一行 + 确保 HTML 已部署到 `jiangren.com.au/curriculum/{slug}/`。

---

## 各 Bootcamp 当前状态

| Bootcamp | 目录 | outline.json | 学生端页面 | internal.html | Production | iframe |
|----------|------|:---:|:---:|:---:|:---:|:---:|
| AI 必修课 | `ai-essentials-bootcamp/` | ✅ 33 lessons | ✅ 8 页 | ✅ 已更新 | ✅ 全量同步 | ✅ 已配置 |
| AI Adoption | `ai-adoption-bootcamp/` | ❌ **缺失** | ✅ 8 页 | ✅ 有（旧） | ❌ 未同步 | ✅ 已配置（但无 outline.json 无法 sync） |
| AI Engineer | `ai-engineer-bootcamp/` | ❌ **缺失** | ✅ 9 页 | ✅ 有（旧） | ⚠️ 部分 | ✅ 已配置（同上） |
| 编程入门班 22 期 | `web-code-bootcamp-or-learn-to-code/` | ✅ 78 lessons | ✅ curriculum.html | ❌ 缺 | ⏳ 待 sync | ❌ 未配置 |
| **AI Engineer 全栈 30 期** | `web-code-bootcamp-or-learn-to-code-1/` | ⏳ **PRD 已写，待创建** | ❌ 缺 | ❌ 缺 | ❌ 未同步 | ❌ 未配置 |

### AI 必修课详情

| 层级 | 字段 | 状态 |
|------|------|:---:|
| Training | description (3099字 HTML) | ✅ |
| Training | description_en (1016字 HTML) | ✅ |
| Training | highlights/features (6+6) | ✅ |
| Training | faqs (8条) | ✅ |
| Training | bootcampSections (11个) | ✅ |
| Training | syllabusesToDisplay + showPrograms | ✅ |
| Training | thumbnail / heroVideo | ❌ 缺 |
| Training | teachers / tutors | ❌ 缺 |
| Training | pricingOptions | ❌ 缺 |
| Program | 日期/状态/定价 | ✅ |
| Lesson ×33 | description (HTML 800+字) | ✅ 33/33 |
| Lesson ×33 | learningMaterial (2000+字) | ✅ 33/33 |
| Lesson ×33 | title_en | ✅ 33/33 |
| Lesson ×33 | knowledge | ✅ 33/33 |
| Lesson ×33 | learnChapterSlugs | ✅ 31/33 |
| Lesson ×33 | Lab 绑定 | ✅ 33/33 (含 4 个新建 Lab) |
| Lesson ×33 | Module 绑定 | ✅ 33/33 |

---

## Skills 实现状态

| Skill | 用途 | 状态 |
|-------|------|:---:|
| `/bootcamp-curriculum-creator` | 从零创建完整课程 | ✅ SKILL.md 完整，Claude 可执行 |
| `/career-bootcamp` | 给岗位自动生成课程 | ✅ 同上 |
| `/bootcamp-sync` | 同步到 production | ✅ **SDM 端点已实现**（diff + sync Training + Lesson） |
| `/bootcamp-description-enhancer` | 升级课程描述为 HTML | ✅ SKILL.md + 已在 AI 必修课验证 |
| `/bootcamp-learning-material-generator` | 生成学习资料 | ✅ SKILL.md + 已在 AI 必修课验证 |
| `/curriculum-review` | 审查大纲完整性 | ⚠️ checklist 模式 |
| `/lesson-design` | 设计单节 Lesson | ✅ SKILL.md 完整 |
| `/bootcamp-plan` | 规划新课程 | ⚠️ 轻量 |
| `/bootcamp-research` | 市场调研 | ⚠️ 轻量 |
| `/expand-outline` | 大纲扩展 | ⚠️ 轻量 |

---

## 关键缺口

### AI Engineer 全栈班 30 期详情

| 维度 | 值 |
|------|-----|
| PRD | `docs/prd/AI_ENGINEER_FULLSTACK_30_PRD.md` |
| Training slug | `web-code-bootcamp-or-learn-to-code-1` |
| Training ID | `5b4c09298018453ddf51937f` |
| Program 30 期 ID | `6982e2367711f8c9cc8cfbff` |
| Syllabus 30 期 ID | `699e541b66bd6c9af808e51c` |
| 基线 | 28 期 156 节全部保留 |
| 目标 | 10 个模块 ~276 节，AI 占比 24%+ |
| 新增 | 77 Lab + 31 Learn + 12 Quest |
| 关键调整 | Git Lab 集中到 M3c（不放 M1/M2 开营阶段） |
| 状态 | Phase 1 — PRD 完成，待创建 outline.json |

**实施步骤**:
1. ✅ PRD 完成 (2026-04-13)
2. ⏳ 创建 30 期 outline.json（继承 28 期 + 重编排到 10 模块）
3. ⏳ 设计 12 个 Quest 的 stepSkeleton
4. ⏳ 创建 10 篇 Wiki
5. ⏳ SDM diff + sync 上线

---

### P0 — 阻塞性

| # | 缺口 | 影响 |
|---|------|------|
| 1 | ai-adoption-bootcamp 缺 outline.json | 无法 sync 到 production、无法用 SDM 管理 |
| 2 | ai-engineer-bootcamp 缺 outline.json | 同上 |
| 3 | **AI Engineer 全栈 30 期缺 outline.json** | PRD 已完成但还没转成可执行的 outline.json |

### P1 — 重要

| # | 缺口 | 影响 |
|---|------|------|
| 3 | AI 必修课缺 thumbnail / heroVideo | 课程页面顶部空白 |
| 4 | AI 必修课缺 teachers / pricingOptions | 无法显示老师和价格卡片 |
| 5 | ai-adoption / ai-engineer 的 internal.html 过时 | 内部管理数据不准确 |

### P2 — 增强

| # | 缺口 | 影响 |
|---|------|------|
| 6 | Phase 解锁测试系统未实现 | 无法按 Phase 考试解锁 |
| 7 | Kanban 任务系统未集成 | ai-engineer 有手动 JSON |

---

## 推荐执行顺序

1. **给 ai-adoption-bootcamp 和 ai-engineer-bootcamp 生成 outline.json** → 用 `/bootcamp-curriculum-creator` 从现有 HTML 反推
2. **更新这两个课程的 internal.html** → 同 ai-essentials 格式
3. **AI 必修课补充 thumbnail + heroVideo** → 设计素材
4. **AI 必修课绑定 teachers + pricingOptions** → 需要 ObjectId

---

## 平台可整合资源

| 资源类型 | 数量 | 配置位置 |
|----------|------|---------|
| Prompt Lab | 38+ | `jr-academy-web-zh/src/config/prompt-labs/` |
| LLM Lab | 23+ | `jr-academy-web-zh/src/config/llm-labs/` |
| Python Lab | 37+ | `jr-academy-web-zh/src/config/python-labs/` |
| AWS Lab | 44+ | `jr-academy-web-zh/src/config/aws-labs/` |
| Azure Lab | 31+ | `jr-academy-web-zh/src/config/azure-labs/` |
| Git Lab | 12+ | `jr-academy-web-zh/src/config/git-labs/` |
| Frontend Lab | 70+ | `jr-academy-web-zh/src/config/labs/` |
| Learn 章节 | 277+ | `jr-academy-web-zh/src/config/learn/directions/` |
