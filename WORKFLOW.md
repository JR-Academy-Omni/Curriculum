# Bootcamp 课程管理 — 通用工作流

> **适用于所有 Bootcamp 课程。** 每个 `curriculum/{bootcamp}/` 目录都遵循此流程。

---

## 为什么用 AI 管理课程

1. **Production 数据质量差** — 之前人工创建的课程描述粗糙、内容不完整
2. **人工调整大纲难度大** — 重新排列 lesson 顺序、拆分合并课时，人工操作复杂易错
3. **AI 能整合平台资源** — Claude 自动匹配并绑定已有的 Lab、Wiki、Learn 章节、Roadmap 等
4. **自动化全链路** — 从创建到同步全部由 AI 完成，人只做最终确认

---

## 后端数据模型（必须理解）

```
Training（课程模板）—— "AI 必修课"、"AI Engineer Bootcamp" 这种课程品牌
│
├── Module[]（阶段/Phase）—— Phase 0 从零开始、Phase 1 Prompt 基础
│   └── 每个 Lesson 通过 moduleId 绑定到 Module
│
├── Program（班次/期）—— "AI 必修课 第一期"、"第二期"
│   │   同一个 Training 可以开多期，每期有不同时间、老师
│   │
│   └── Syllabus（大纲）—— 该期的课程大纲
│       └── Lesson[]（课时）—— 按顺序排列的所有课
│
└── syllabusesToDisplay[] —— 前端展示用的大纲列表
```

### 每个层级是什么

| 层级 | 中文含义 | 类比 | 关键字段 |
|------|---------|------|---------|
| **Training** | 课程模板 | 一本教材 | slug, name, type, level, modules[], syllabusesToDisplay[] |
| **Module** | 阶段/Phase | 教材的"章" | name, order, sequentialUnlock, quizBank |
| **Program** | 班次/期 | 用这本教材的某个班级 | training(ref), syllabus(ref), teachers[], city, commenceCourseDate |
| **Syllabus** | 大纲 | 这个班级的课表 | program(ref), lesson[] |
| **Lesson** | 课时 | 课表里的每一节课 | name, type, module(ref), syllabus(ref), description, learningMaterial, order |

### 关键关系

1. **Training → Module** 是 1:N — 一个课程模板有多个 Phase
2. **Training → Program** 是 1:N — 一个课程可以开多期
3. **Program → Syllabus** 是 1:1 — 每期一个大纲
4. **Syllabus → Lesson** 是 1:N — 大纲包含多节课，**按 order 排序**
5. **Lesson → Module** 是 N:1 — 每节课属于一个 Phase

### Lesson 的两个内容字段（绝对不要搞混）

| | `description` | `learningMaterial.content` |
|---|---|---|
| **用途** | 对外销售/列表展示的短文案 | 学生端看到的正式教学内容 |
| **谁能看到** | **所有人**（未报名也能看） | **只有报名学生** |
| **内容格式** | 纯文本，1-2 句话 | Tiptap JSON/HTML 富文本 |
| **编辑方式** | Admin 表单 | Admin Tiptap 编辑器 |
| **举例** | "学会打开浏览器、用搜索引擎" | 完整操作步骤、截图、代码、知识点 |

**outline.json 中的映射：**
- `lesson.description` → 对应后端 `description`（销售短文案）
- `lesson.steps[]` → 对应后端 `learningMaterial.content`（需要转成 Tiptap 格式上传）

**description 写得再详细也不会出现在学生端教学页面。** 这是最常犯的错误。

### Lesson 类型

| type | 含义 | 场景 |
|------|------|------|
| `Lesson` | 直播/互动课 | 老师在线讲 |
| `Information` | 图文自学 | 学生自己看 |
| `Video` | 录播视频 | 看录播 |
| `Lab` | 实验课 | 后端 LessonLab 系统（代码实验等） |
| `InteractiveLab` | 互动实验 | 前端配置的 Lab（Prompt Lab / Frontend Lab / Python Lab 等） |
| `Quiz` | 测验 | 阶段测试 |
| `Tutorial` | 辅导课 | 答疑 |
| `Workshop` | 工作坊 | 动手做 |
| `Assignment` | 作业 | 提交作品 |
| `Roadmap` | 路线图课 | 关联 Roadmap 可视化学习路径 |
| `Offline` | 线下课 | 线下面授 |

**Lab vs InteractiveLab 区别：**
- `Lab` — 后端 LessonLab 系统，存在 MongoDB `lessonlabs` collection，通过 lesson 的 `labIds` 绑定
- `InteractiveLab` — 前端配置的互动 Lab，配置在 `jr-academy-web-zh/src/config/` 下，通过 `interactiveLabType` + `interactiveLabUrl` 绑定

**INTERACTIVE_LAB_TYPE（8 种，对应前端 Lab 配置目录）：**

| interactiveLabType | 前端配置目录 | 说明 |
|-------------------|-------------|------|
| `prompt` | `config/prompt-labs/` | Prompt 工程练习 |
| `frontend` | `config/labs/` | HTML/CSS/JS 前端练习 |
| `javascript` | — | JavaScript 练习 |
| `python` | `config/python-labs/` | Python 编程练习 |
| `llm` | `config/llm-labs/` | LLM 工程练习 |
| `aws` | `config/aws-labs/` | AWS 云服务练习 |
| `azure` | `config/azure-labs/` | Azure 云服务练习 |
| `git` | `config/git-labs/` | Git 版本控制练习 |

### Module 的解锁控制

- `sequentialUnlock` — 该 Phase 内的 Lesson 必须按顺序完成
- `moduleGate` — 进入该 Phase 的前置条件
- `unlocksModules[]` — 完成该 Phase 后解锁哪些 Phase
- `requireQuizPass` — 需要通过测验才能解锁

---

## 完整流程（所有 Bootcamp 通用）

```
Step 1: Claude 在 curriculum/{bootcamp}/ 创建/修改课程内容
        - outline.json = 唯一数据源
        - 静态 HTML 页面 = 对外展示 + 内部参考
        ↓
Step 2: 本地预览确认
        cd curriculum/{bootcamp}
        python3 -m http.server 5175 --directory public
        ↓
Step 3: outline.json 转为同步格式 → skills-data/training-outlines/{bootcamp}.json
        ↓
Step 4: Skills Data Manager (localhost:5188/bootcamp) Check Diff 对比 local vs production
        ↓
Step 5: 确认 diff 无误 → Sync 同步到 production
        ↓
Step 6: 从 production 下载最新数据验证
```

**核心原则：本地是 source of truth。本地没确认，绝不动 production。**

---

## 第一步：本地内容（curriculum/ 内容创作）

所有内容修改从这里开始。Claude AI 是主要创作者。

### 每个 Bootcamp 的标准文件结构

```
curriculum/{bootcamp}/
├── public/
│   ├── outline.json          ← 结构化数据源（唯一 source of truth）
│   ├── outline.html          ← 完整大纲页（每个 lesson 的 step 序列）
│   ├── curriculum.html       ← 课程总览页（对外展示）
│   ├── phase0.html ~ phaseN.html  ← 各 Phase 详情
│   ├── learning-plan.html    ← 学习计划
│   ├── internal.html         ← 内部资料（Lab 映射、统计等）
│   └── styles.css
├── WORKFLOW.md               ← 该课程特有的状态和 production ID（可选）
├── BOOTCAMP_MANAGER_PRD.md   ← 该课程的 PRD（可选）
└── ...（Vite/React slide deck 等）
```

### 修改顺序

1. **outline.json** — 改这里。这是唯一的数据源。
2. **outline.html** — 从 outline.json 生成
3. **curriculum.html** — 课程总览，数字要和 outline.json 一致
4. **phase*.html** — 每个 Phase 的详细页面
5. **learning-plan.html** — 学习节奏
6. **internal.html** — Lab 映射表、统计

---

## 第二步：outline.json → production 数据映射

### Lesson 类型映射

| outline.json | production lesson type | 说明 |
|-------------|----------------------|------|
| `isLive: true` | `Lesson` | 直播课 |
| `isLive: false, 无 isInteractiveLab` | `Information` | 自学图文课 |
| `isInteractiveLab: true` | `InteractiveLab` | 互动实验（Prompt Lab 等） |

### 字段映射

| outline.json 字段 | production lesson 字段 | 说明 |
|-------------------|----------------------|------|
| `title` | `name`, `title` | 课时名称 |
| `type` | `type` | Lesson / Information / InteractiveLab |
| `duration` | `duration` | 必须是 30/60/90/120/150/180/240 |
| `steps`（渲染成 HTML） | `description` | 销售描述（简短，对外展示） |
| 本地 phase 页面详细内容 | `learningMaterial.content` | 学生学习资料（购买后看到） |
| `labs[].slug` | `link[]` 或独立 InteractiveLab lesson | Prompt Lab 引用 |
| `learns[].direction/slug` | `learnChapterSlugs[]` | Learn 章节引用 |
| Phase 归属 | `moduleId` | 绑定到哪个 Module（Phase） |

### description vs learningMaterial

```
description = 销售文案，未报名用户能看到，2-3 句话
learningMaterial = 真正的教学内容，只有报名学生能看到
```

---

## 第三步：同步到 Production

通过 Skills Data Manager（`localhost:5188/bootcamp`）操作。

### 创建新课程（首次）

```
1. POST /admin-cms/trainings         → trainingId
2. POST /admin-cms/modules × N       → moduleIds（Phase 0-N）
3. PUT  /admin-cms/trainings/{id}     → 绑定 modules
4. POST /admin-cms/programs           → programId（需要 trainingId + city + teachers）
5. POST /admin-cms/syllabuses         → syllabusId（需要 programId）
6. POST /admin-cms/lessons × N        → lessonIds（需要 syllabusId + moduleId）
7. PUT  /admin-cms/syllabuses/{id}    → 绑定 lessonIds 数组（按顺序）
8. PUT  /admin-cms/programs/{id}      → 绑定 syllabus
```

每一步创建前**必须检测是否已存在**，已存在则复用 ID 跳过。

### 更新已有课程

1. Skills Data Manager 下载 production 当前数据
2. Check Diff 对比 local vs production
3. 只 PUT 有变化的字段
4. 绝不删除任何内容

### 必填字段和枚举值

见 `tools/skills-data-manager/BOOTCAMP_GUIDE.md` 第 2-3 节。

---

## 第四步：验证

1. **Admin 后台** — 检查 lesson 列表、数量、顺序、类型
2. **学生端** — 报名后检查课程页面
3. **本地数据** — 从 production 下载最新数据保存到本地

---

## 绝对不做的事

- ❌ 不直接往 production PUT AI 生成的未确认内容
- ❌ 不跳过本地更新直接改 production
- ❌ 不在 production 上做实验
- ❌ 不删除 production 数据

---

## 相关 Skills

| Skill | 用途 |
|-------|------|
| `/bootcamp-curriculum-creator` | 从零创建完整 Bootcamp |
| `/bootcamp-sync` | 从 curriculum/ 同步到 production |
| `/curriculum-review` | 审查课程大纲完整性 |
| `/lesson-design` | 设计单节 Lesson |
| `/expand-outline` | 简单大纲扩展为完整课程 |

---

## 当前 Bootcamp 列表

| Bootcamp | 目录 | 状态 |
|----------|------|------|
| AI 必修课 | `ai-essentials-bootcamp/` | Production 已有，33 lessons |
| AI Adoption Specialist | `ai-adoption-bootcamp/` | 有 slide deck 和静态页面 |
| AI Engineer | `ai-engineer-bootcamp/` | 有 slide deck 和静态页面 |

各课程特有的 production ID 和状态记录在各自目录的 `WORKFLOW.md` 中。
