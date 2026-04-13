# outline.json 格式规范

> 每个 Bootcamp 的 `public/outline.json` 是该课程的 **唯一数据源**。所有静态页面、production 同步、课程审查都从这个文件读取。

---

## 完整结构

```json
{
  "slug": "ai-essentials-bootcamp",
  "name": "AI 必修课",
  "name_en": "AI Essentials Bootcamp",
  "description": "各行各业的 AI 入门实战",
  "level": "零基础",
  "type": "training",
  "targetAudience": "40-60 岁非技术人员",
  "totalLessons": 33,
  "totalSteps": 209,
  "liveClasses": 2,
  "estimatedHours": 10,
  "totalInteractiveLabs": 17,

  "title_en": "AI Essentials Bootcamp",
  "description_en": "Learn practical AI skills from zero...",
  "timeLength": "10 小时（33 节课，自主安排节奏）",
  "courseObjective": "从零开始学会用 AI 处理日常工作...",
  "courseObjective_en": "Master everyday AI tools for work...",
  "suitable": "40-60 岁非技术人员...",
  "suitable_en": "Non-technical professionals...",
  "cardDescription": "33 节课从零学会用 AI 工作...",
  "promoDescription": "你身边的同事已经开始用 AI 了...",
  "prerequisiteknowledge": "无需任何基础。会用电脑打字就能学。",
  "highlights": ["亮点1", "亮点2"],
  "highlights_en": ["Highlight 1", "Highlight 2"],
  "features": ["特色1", "特色2"],

  "program": {
    "name": "AI 必修课 第一期",
    "programPhase": 1,
    "commenceCourseDate": "2026-04-14",
    "completeDate": "2026-06-09",
    "cohortStatus": "RECRUITING",
    "tuition": 999,
    "promoTuition": 499
  },

  "phases": [
    {
      "name": "Phase 0 — 从零开始",
      "color": "#2e7d32",
      "summary": "3 自学 + 1 直播 + 测试",
      "test": {
        "questions": 10,
        "passRate": 0.7,
        "unlocks": "Phase 1"
      },
      "lessons": [
        {
          "code": "L01",
          "title": "电脑基础 — 浏览器、搜索、复制粘贴",
          "description": "学会打开浏览器、用搜索引擎、复制粘贴文字。",
          "type": "Lesson",
          "isLive": false,
          "duration": 20,
          "steps": [
            {
              "order": 1,
              "type": "CONCEPT",
              "title": "打开浏览器",
              "description": "Chrome / Edge / Safari 在哪，地址栏在最上面，输入网址按回车",
              "duration": 3
            },
            {
              "order": 2,
              "type": "LAB",
              "title": "搜索练习",
              "description": "用 Google 搜索一个问题",
              "duration": 5,
              "labSlug": "search-practice"
            }
          ],
          "labs": [
            { "source": "prompt-lab", "slug": "search-practice" }
          ],
          "learns": [
            { "direction": "ai-office", "slug": "browser-basics" }
          ]
        }
      ]
    }
  ]
}
```

---

## 字段说明

### 顶层字段

| 字段 | 类型 | 必填 | 说明 |
|------|------|:---:|------|
| `slug` | string | ✅ | URL 标识符，如 `ai-essentials-bootcamp` |
| `name` | string | ✅ | 中文课程名 |
| `name_en` | string | | 英文课程名 |
| `description` | string | ✅ | 课程简介 |
| `level` | string | ✅ | `零基础` / `初级` / `中级` / `中级进阶` / `高级` |
| `type` | string | ✅ | **必须是 `training`**。后端 API 只接受: `training`, `video`, `internship`, `mock`, `career`。⚠️ 不要写 `bootcamp`，会导致同步失败 |
| `targetAudience` | string | | 目标受众 |
| `totalLessons` | number | ✅ | Lesson 总数（和 phases 里的 lessons 数要一致） |
| `totalSteps` | number | | Step 总数 |
| `liveClasses` | number | | 直播课数量 |
| `estimatedHours` | number | | 总学时 |
| `totalInteractiveLabs` | number | | InteractiveLab 类型的 lesson 数量 |
| `title_en` | string | | 英文标题（如 "AI Essentials Bootcamp"） |
| `description_en` | string | | 英文课程描述 |
| `timeLength` | string | | 课程总时长描述 |
| `courseObjective` | string | | 课程目标（中文） |
| `courseObjective_en` | string | | 课程目标（英文） |
| `suitable` | string | | 适合谁（中文） |
| `suitable_en` | string | | 适合谁（英文） |
| `cardDescription` | string | | 课程卡片简介（列表页展示） |
| `promoDescription` | string | | 推广描述（长文案） |
| `prerequisiteknowledge` | string | | 先修知识（如"无需任何基础"） |
| `highlights` | string[] | | 课程亮点列表（中文） |
| `highlights_en` | string[] | | 课程亮点列表（英文） |
| `features` | string[] | | 课程特色列表 |
| `program` | Program | | 班次/期次配置 |
| `curriculumPages` | CurriculumPages | | 官网课程详情页 iframe 展示的 HTML 页面配置。部署时自动生成 `pages.json`，前端动态读取，无需硬编码 |
| `phases` | Phase[] | ✅ | 课程阶段数组 |

### Program 字段（班次配置）

| 字段 | 类型 | 必填 | 说明 |
|------|------|:---:|------|
| `name` | string | ✅ | 班次名称，如 `AI 必修课 第一期` |
| `programPhase` | number | | 期次，默认 1 |
| `commenceCourseDate` | string | | 开课日期（YYYY-MM-DD） |
| `completeDate` | string | | 结课日期（YYYY-MM-DD） |
| `cohortStatus` | string | | `RECRUITING` / `ACTIVE` / `COMPLETED` |
| `tuition` | number | | 原价（元） |
| `promoTuition` | number | | 促销价（元） |

### CurriculumPages 字段（官网 iframe 展示配置）

控制课程详情页 iframe 展示哪些 HTML 页面。部署时 GitHub Actions 自动从此字段生成 `pages.json`，前端动态 fetch，**无需修改前端代码**。

| 字段 | 类型 | 必填 | 说明 |
|------|------|:---:|------|
| `pages` | string[] | ✅ | 可展示的 HTML 文件名列表，如 `["curriculum.html", "phase1.html"]` |
| `defaultPage` | string | ✅ | 默认展示的页面（必须是 `pages` 中的值） |

```json
"curriculumPages": {
  "pages": ["curriculum.html", "outline.html", "phase1.html", "phase2.html", "learning-plan.html"],
  "defaultPage": "curriculum.html"
}
```

**添加新 Bootcamp 到官网的步骤：**
1. 在 `outline.json` 中添加 `curriculumPages` 字段
2. 确保对应的 HTML 文件在 `public/` 目录下
3. 部署 curriculum repo → GitHub Actions 自动生成 `pages.json` → 前端自动识别

### Phase 字段

| 字段 | 类型 | 必填 | 说明 |
|------|------|:---:|------|
| `name` | string | ✅ | Phase 名称，如 `Phase 0 — 从零开始` |
| `color` | string | | 展示颜色（hex） |
| `summary` | string | | 简述，如 `3 自学 + 1 直播 + 测试` |
| `test` | object | | Phase 结束测试配置 |
| `test.questions` | number | | 测试题数 |
| `test.passRate` | number | | 通过率（0-1） |
| `test.unlocks` | string | | 通过后解锁的 Phase |
| `isExtension` | boolean | | 标记为"扩展阅读 / 非主路径"phase。当前仅 local 使用，**Skills Data Manager 同步时会忽略此字段**，extension phase 会作为普通 module 同步到 production。首次使用见 `curriculum/web-code-bootcamp-or-learn-to-code` Phase 10 |
| `lessons` | Lesson[] | ✅ | 该 Phase 的课时数组 |

### Lesson 字段

| 字段 | 类型 | 必填 | 说明 |
|------|------|:---:|------|
| `code` | string | ✅ | 课时编号，如 `L01`、`L02` |
| `title` | string | ✅ | 课时标题 |
| `description` | string | ✅ | 简短描述（2-3 句话，这是销售文案） |
| `type` | string | ✅ | `Lesson`（直播）/ `Information`（自学）/ `InteractiveLab`（互动实验）/ `Quest`（AI 主动教学实战）/ `Video`（录播）/ `Workshop` / `Assignment` / `Quiz` / `Lab` / `Roadmap` |
| `isLive` | boolean | ✅ | 是否直播课 |
| `duration` | number | ✅ | 时长（分钟），production 会 snap 到 30/60/90/120/150/180/240 |
| `steps` | Step[] | ✅ | 教学步骤序列 |
| `labs` | LabRef[] | | 关联的 Lab 资源 |
| `learns` | LearnRef[] | | 关联的 Learn 章节 |
| `cheatSheets` | CheatSheetRef[] | | 关联的速查卡（`/cheat-sheets/{slug}`）|
| `wikis` | WikiRef[] | | 关联的 Wiki 文章（`/wiki/{slug}`）|
| `videos` | VideoRef[] | | 关联的教学视频（`/videos/{slug}`）|
| `roadmaps` | RoadmapRef[] | | 关联的学习路径（`/roadmaps/{slug}`）|
| `interviewQuestions` | InterviewQuestionRef[] | | 关联的面试题库 |
| `isInteractiveLab` | boolean | | 是否为独立的互动实验 lesson |
| `interactiveLabSlug` | string | | InteractiveLab 的 slug（配合 isInteractiveLab 使用） |
| `quest` | QuestConfig | | **仅 type=Quest 时使用**。AI 主动教学的完整配置，见下方 Quest 字段说明 |

### Quest 字段（type=Quest 时必填）

当 `lesson.type === 'Quest'` 时，必须提供 `quest` 字段。bootcamp-sync 会用它创建 QuestGoal 并绑定到 lesson。

```json
{
  "code": "L18a",
  "type": "Quest",
  "title": "实战：在你电脑上装 Claude Code",
  "duration": 30,
  "quest": {
    "title": "实战：在你电脑上装 Claude Code 并完成第一个 AI 辅助项目",
    "description": "简短描述",
    "learningGoal": "学员学完能做什么（具体、可验证）",
    "successCriteria": "怎么算学会了",
    "difficulty": "beginner | intermediate | advanced",
    "estimatedMinutes": 30,
    "uiMode": "chat | chat-sidebar | flow-split",
    "context": "给 AI 的教学背景（最关键字段）—— 告诉 AI 学员是谁、环境是什么、怎么教、注意什么",
    "systemStylePrompt": "可选：覆盖 AI 默认语气",
    "customGuardrails": "可选：追加约束",
    "linkedResources": [
      { "type": "wiki", "ref": "claude-code-install", "description": "安装指南" }
    ],
    "stepSkeleton": [
      {
        "title": "检查 Node.js 版本",
        "description": "运行 node --version，需要 v20+",
        "verificationType": "text-evidence | self-confirm | screenshot",
        "verificationHint": "给 AI verifier 的提示",
        "expectedEvidence": "期望看到的证据（如 v20.x.x）"
      }
    ],
    "prerequisites": ["电脑上装了 Node.js 20+"],
    "targetPlatform": "browser | local-terminal | aws-console | any",
    "tags": ["claude-code", "vibe-coding"]
  }
}
```

**关键字段说明**：
- `context`：这是 AI 教学质量的决定性字段。写得越详细，AI 教得越好。要包含：学员画像、教学环境、可能遇到的坑、教学节奏
- `stepSkeleton`：AI 的教学大纲，AI 按这个顺序教但不会死板跟踪步骤编号
- `uiMode`：决定前端渲染方式。Phase 1 只实现了 `chat`，其他 fallback 到 chat
- `verificationType`：`text-evidence`（要贴命令输出）/ `self-confirm`（AI 会追问验证）/ `screenshot`（Phase 2 接 Vision API）

### Step 字段

| 字段 | 类型 | 必填 | 说明 |
|------|------|:---:|------|
| `order` | number | ✅ | 步骤序号 |
| `type` | string | ✅ | 步骤类型（见下表） |
| `title` | string | ✅ | 步骤标题 |
| `description` | string | ✅ | 步骤描述 |
| `duration` | number | ✅ | 时长（分钟） |
| `labSlug` | string | | 如果 type=LAB，关联的 Lab slug |

### Step 类型

| type | 含义 | 颜色 | 说明 |
|------|------|------|------|
| `CONCEPT` | 概念讲解 | indigo | 知识点、理论 |
| `LAB` | 互动练习 | green | 关联 Prompt Lab / Frontend Lab 等 |
| `MCQ` | 选择题 | yellow | 理解检查 |
| `SCENARIO` | 场景练习 | pink | 真实场景应用 |
| `VIDEO` | 录播视频 | blue | 观看视频 |
| `LIVE` | 直播教学 | red | 老师在线 |
| `PROJECT` | 项目作品 | purple | 交付物 |
| `LEARN` | Learn 章节 | purple | 引用已有 Learn 方向章节 |
| `AI_TUTOR` | AI 辅导 | orange | AI 一对一带练 |

### LabRef 字段

| 字段 | 类型 | 说明 |
|------|------|------|
| `source` | string | Lab 类型：`prompt-lab` / `llm-lab` / `frontend-lab` / `python-lab` / `aws-lab` / `azure-lab` / `git-lab` |
| `slug` | string | Lab 的 slug，对应前端 config 里的文件名 |

### LearnRef 字段

| 字段 | 类型 | 说明 |
|------|------|------|
| `direction` | string | 学习方向 slug，如 `ai-office`、`prompt-master`、`vibe-coding` |
| `slug` | string | 章节 slug |

### CheatSheetRef 字段

| 字段 | 类型 | 说明 |
|------|------|------|
| `slug` | string | 速查卡 slug，对应 `jr-academy-web-zh/src/constants/cheatSheets.ts` 里的 `ICheatSheet.slug`（如 `chatgpt` / `claude` / `notion-ai`）|

```json
"cheatSheets": [
  { "slug": "chatgpt" },
  { "slug": "claude" },
  { "slug": "notion-ai" }
]
```

### WikiRef 字段

| 字段 | 类型 | 必填 | 说明 |
|------|------|:---:|------|
| `slug` | string | ✅ | **Static Wiki 路径**，对应 `jr-academy-web-zh/src/config/staticWikis/*.ts` 里的层级 slug 拼接路径，如 `cursor/getting-started/installation`、`claude/usage/prompting`。同步到 production 时映射为 `lesson.staticWikiSlugs[]` 字段（后端 schema 已支持）|
| `chapter` | string | | 可选：深链到 wiki 内某个章节（通常不填）|

> 🔧 **Sync 支持**：`wikis[]` 字段从 2026-04 起由 Skills Data Manager 同步到 production（见 `tools/skills-data-manager/server/bootcamp/sync.ts` 和 `diff.ts` 的 `staticWikiSlugs` 处理）。首次使用见 `curriculum/web-code-bootcamp-or-learn-to-code`。

```json
"wikis": [
  { "slug": "prompt-engineering" },
  { "slug": "business-analyst", "chapter": "intro" }
]
```

### VideoRef 字段

| 字段 | 类型 | 说明 |
|------|------|------|
| `slug` | string | Video slug，对应 `skills-data/videos/{slug}.json`（Video model 的内容视频，非文件级存储）|

```json
"videos": [
  { "slug": "ba-business-analyst-user-story-ba" }
]
```

### RoadmapRef 字段

| 字段 | 类型 | 必填 | 说明 |
|------|------|:---:|------|
| `slug` | string | ✅ | Roadmap slug，对应 `skills-data/roadmaps/{slug}.json` |
| `nodeId` | string | | 可选：深链到 roadmap 内某个节点（用于"从这节 lesson 直接跳到 roadmap 对应节点"）|

```json
"roadmaps": [
  { "slug": "ai-product-manager-roadmap", "nodeId": "ai-pm-entry" }
]
```

### InterviewQuestionRef 字段

| 字段 | 类型 | 必填 | 说明 |
|------|------|:---:|------|
| `bank` | string | ✅ | 题库 slug，对应 `skills-data/interview-questions/{bank}.json` |
| `questionIds` | string[] | | 可选：只引用题库里的特定几题（v1 **不渲染**，预留字段）|

```json
"interviewQuestions": [
  { "bank": "product-manager" },
  { "bank": "requirements-analysis", "questionIds": ["q1", "q7"] }
]
```

---

## outline.json → Production 映射

| outline.json | Production 字段 | 说明 |
|-------------|----------------|------|
| 顶层 → | Training | slug, name, description, level, type |
| phase → | Module | name, order |
| phase.test → | Module.quizBank | 待实现 |
| lesson → | Lesson | name, title, type, duration, description |
| lesson.isLive=true → | Lesson.type=`Lesson` | 直播课 |
| lesson.isLive=false → | Lesson.type=`Information` | 自学课 |
| lesson.isInteractiveLab=true → | Lesson.type=`InteractiveLab` | 互动实验 |
| lesson.steps → | Lesson.description (HTML) | steps 渲染为 HTML 作为销售描述 |
| lesson.labs → | Lesson.link[] | Lab URL 列表 |
| lesson.learns → | Lesson.learnChapterSlugs[] | 格式：`direction/slug` |
| lesson 在 phase 中 → | Lesson.moduleId | 绑定到对应 Module |
| lesson 在所有 phases 中的顺序 → | Syllabus.lessonIds[] | 按全局顺序排列 |
| lesson.wikis[].slug → | Lesson.staticWikiSlugs[] | Static Wiki 路径数组 |
| phase.isExtension → | (忽略) | 当前 Skills Data Manager 不处理；extension phase 作为普通 Module 同步 |

---

## 验证规则

1. `totalLessons` 必须等于所有 phases 里 lessons 的总数
2. 每个 lesson 的 `code` 必须唯一（L01, L02, ...）
3. `duration` 同步到 production 时会 snap 到最近的合法值（30/60/90/120/150/180/240）
4. `level` 必须是中文（零基础/初级/中级/中级进阶/高级）
5. `labs[].source` 必须对应前端已有的 Lab 配置目录
6. `learns[].direction` 必须对应已有的 Learn 方向
7. `cheatSheets[].slug` 必须存在于 `jr-academy-web-zh/src/constants/cheatSheets.ts` 的 index（Skills Data Manager 的 sync pre-flight 会校验）
8. `wikis[].slug` 必须存在于 `skills-data/wikis/{slug}.json`
9. `videos[].slug` 必须存在于 `skills-data/videos/`
10. `roadmaps[].slug` 必须存在于 `skills-data/roadmaps/`
11. `interviewQuestions[].bank` 必须存在于 `skills-data/interview-questions/`

---

## 课程页面 iframe 嵌入

课程详情页 (`/program-course/{slug}`) 的 Curriculum section 会通过 iframe 嵌入 `curriculum/{slug}/public/` 下的静态 HTML 页面。

**配置位置：** `jr-academy-web-zh/src/components/Pages/BootcampDetailPage/components/BootcampDetailPageIntroduce/IntroduceSyllabus.tsx` 的 `CURRICULUM_SLUGS`

```typescript
const CURRICULUM_SLUGS = {
    'ai-essentials-bootcamp': {
        pages: ['outline.html', 'curriculum.html', 'phase0.html', ...],
        defaultPage: 'outline.html',
    },
};
```

**添加新课程：** 在 `CURRICULUM_SLUGS` 里加一行，确保对应的 HTML 文件已部署到 `jiangren.com.au/curriculum/{slug}/`。

**页面分类：**
- **学生端页面**（加到 `pages` 数组）：outline.html, curriculum.html, phase*.html, learning-plan.html
- **内部页面**（不加到 `pages`）：internal.html
