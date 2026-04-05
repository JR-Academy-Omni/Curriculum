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
  "type": "bootcamp",
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
| `type` | string | ✅ | `bootcamp` / `training` / `workshop` |
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
| `lessons` | Lesson[] | ✅ | 该 Phase 的课时数组 |

### Lesson 字段

| 字段 | 类型 | 必填 | 说明 |
|------|------|:---:|------|
| `code` | string | ✅ | 课时编号，如 `L01`、`L02` |
| `title` | string | ✅ | 课时标题 |
| `description` | string | ✅ | 简短描述（2-3 句话，这是销售文案） |
| `type` | string | ✅ | `Lesson`（直播）/ `Information`（自学）/ `InteractiveLab`（互动实验） |
| `isLive` | boolean | ✅ | 是否直播课 |
| `duration` | number | ✅ | 时长（分钟），production 会 snap 到 30/60/90/120/150/180/240 |
| `steps` | Step[] | ✅ | 教学步骤序列 |
| `labs` | LabRef[] | | 关联的 Lab 资源 |
| `learns` | LearnRef[] | | 关联的 Learn 章节 |
| `isInteractiveLab` | boolean | | 是否为独立的互动实验 lesson |
| `interactiveLabSlug` | string | | InteractiveLab 的 slug（配合 isInteractiveLab 使用） |

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

---

## 验证规则

1. `totalLessons` 必须等于所有 phases 里 lessons 的总数
2. 每个 lesson 的 `code` 必须唯一（L01, L02, ...）
3. `duration` 同步到 production 时会 snap 到最近的合法值（30/60/90/120/150/180/240）
4. `level` 必须是中文（零基础/初级/中级/中级进阶/高级）
5. `labs[].source` 必须对应前端已有的 Lab 配置目录
6. `learns[].direction` 必须对应已有的 Learn 方向

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
