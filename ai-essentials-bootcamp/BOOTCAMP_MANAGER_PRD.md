# PRD: AI Essentials Bootcamp 课程管理（Skills Data Manager 扩展）

## 背景

AI 必修课（ai-essentials-bootcamp）的课程大纲已在 `curriculum/ai-essentials-bootcamp/public/outline.html` 中设计完成（16 Lessons, 98 Steps, 4 Phases）。现在需要将这个课程从本地静态页面 **同步到生产环境**（创建 Training、Program、Syllabus、Lessons），并通过 Skills Data Manager 持续管理。

### 核心需求

1. **从 outline.html → 生产环境**：把静态大纲变成平台可交付的课程
2. **双向同步**：本地 JSON ↔ 生产 API（下载最新 / 上传修改）
3. **Lesson 绑定管理**：关联已有 Prompt Lab、Learn 章节等资源
4. **绝对安全**：宁愿操作失败，也不删错数据

---

## 当前系统架构

### Skills Data Manager

| 组件 | 位置 | 技术栈 |
|------|------|--------|
| Server | `tools/skills-data-manager/server/` | Hono + Bun |
| Client | `tools/skills-data-manager/src/` | React 19 + TailwindCSS |
| 数据 | `skills-data/training-outlines/` | JSON 文件 |

### 已有能力

- ✅ 10 个 domain 管理（training-outlines, companies, uni-courses 等）
- ✅ 下载生产数据到本地（`POST /api/{domain}/download`）
- ✅ 上传本地数据到生产（`POST /api/sync/{domain}/upload`）
- ✅ Pending 追踪（hash-based baseline）
- ✅ SSE 流式终端输出
- ✅ 全文搜索、Gap 分析、重复检测

### 后端 API（Admin CMS）

| 操作 | 端点 | 说明 |
|------|------|------|
| 创建/更新 Training | `POST /admin-cms/trainings` | 课程主体 |
| 创建/更新 Program | `POST /admin-cms/programs` | 班次/期次 |
| 创建/更新 Lesson | `POST /admin-cms/lessons` | 课程内容 |
| 获取 Training | `GET /admin-cms/trainings/{slug}` | 按 slug 查询 |
| 获取 Program Lessons | `GET /admin-cms/programs/{id}/lessons` | 按 program 查询 |

所有 admin-cms 端点受 `SuperAdminGuard` + `@SkipThrottle()` 保护。

### 数据模型

```
Training (课程)
├── slug: "ai-essentials-bootcamp"
├── name: "AI 必修课"
├── type: TRAINING
├── modules: Module[] (Phase 0-3)
│   ├── Module (Phase 0)
│   │   └── lessons: Lesson[] (L01-L04)
│   ├── Module (Phase 1)
│   │   └── lessons: Lesson[] (L05-L08)
│   └── ...
├── syllabus: Syllabus
│   └── lessons: Lesson[] (全部 L01-L16 有序列表)
└── programs: Program[] (班次)
    └── Program (第一期)
        ├── syllabus → Syllabus ref
        ├── teachers: Teacher[]
        └── commenceCourseDate, completeDate
```

---

## 功能需求

### Feature 1: Bootcamp Creator — 从大纲创建课程

#### 用户故事
> 作为课程运营，我想在 Skills Data Manager 里选择一个本地 bootcamp 大纲（如 `ai-essentials-bootcamp`），一键创建到生产环境，包括 Training、Module、Lesson 全部结构。

#### 流程

```
[本地 outline.html / outline.json]
        ↓ 解析
[结构化数据：Phases → Lessons → Steps]
        ↓ 预览
[Dashboard 展示：将要创建什么]
        ↓ 确认
[调用后端 API 逐步创建]
        ↓ 结果
[保存 production IDs 到本地 JSON]
```

#### 详细步骤

**Step 1: 解析大纲**

从 `curriculum/ai-essentials-bootcamp/public/outline.html` 或一个结构化 JSON 文件中提取：

```typescript
interface BootcampOutline {
  slug: string;                    // "ai-essentials-bootcamp"
  name: string;                    // "AI 必修课"
  description: string;
  level: string;                   // "零基础"
  phases: Phase[];
}

interface Phase {
  name: string;                    // "Phase 0 — 从零开始"
  lessons: LessonDef[];
}

interface LessonDef {
  code: string;                    // "L01"
  title: string;                   // "电脑基础 — 浏览器、搜索、复制粘贴"
  type: 'Lesson' | 'Video' | 'Info';
  duration: number;                // 分钟
  isLive: boolean;                 // 是否直播课
  steps: StepDef[];
  labs: LabRef[];                  // 关联的已有 Lab slugs
  learns: LearnRef[];              // 关联的已有 Learn 章节 slugs
}

interface StepDef {
  order: number;
  type: 'CONCEPT' | 'LAB' | 'MCQ' | 'SCENARIO' | 'REFLECTION';
  title: string;
  description: string;
  duration: number;                // 分钟
  labSlug?: string;                // 如果 type=LAB，引用 Prompt Lab slug
}

interface LabRef {
  source: 'prompt-lab' | 'llm-lab' | 'frontend-lab';
  slug: string;
}

interface LearnRef {
  direction: string;               // "ai-office" / "prompt-master" 等
  slug: string;                    // "email-communication"
}
```

**建议**：新增一个 `curriculum/ai-essentials-bootcamp/outline.json` 文件作为结构化数据源（从 outline.html 内容生成），Skills Data Manager 读取这个 JSON。

**Step 2: 预览**

在 Dashboard 展示将要创建的全部内容：

```
📦 AI 必修课 (ai-essentials-bootcamp)
├── Training: AI 必修课 [新建]
├── Module: Phase 0 — 从零开始 [新建]
│   ├── Lesson: L01 电脑基础 (20min, 自学) [新建]
│   ├── Lesson: L02 注册 AI (25min, 自学) [新建]
│   ├── Lesson: L03 日常场景 (20min, 自学) [新建]
│   └── Lesson: L04 直播 (60min, 直播) [新建]
├── Module: Phase 1 — Prompt 基础 [新建]
│   ├── ...
│   └── ...
├── Module: Phase 2 — 职场实战 [新建]
│   └── ...
├── Module: Phase 3 — 进阶+行业 [新建]
│   └── ...
├── Syllabus: 全部 16 Lessons [新建]
└── Program: 第一期 [新建]

总计: 1 Training + 4 Modules + 16 Lessons + 1 Syllabus + 1 Program
```

每一行都标注 `[新建]` 或 `[已存在 - 跳过]`（如果生产已有同 slug 的 Training）。

**Step 3: 确认创建**

用户必须点击"确认创建"按钮。按钮默认禁用，需要输入确认文字（如输入 "CREATE"）才能启用。

**Step 4: 逐步创建（SSE 流式输出）**

按顺序调用后端 API：
1. 创建 Training（返回 trainingId）
2. 创建 Module × 4（返回 moduleIds）
3. 创建 Lesson × 16（返回 lessonIds）
4. 创建 Syllabus，关联所有 lessonIds
5. 创建 Program，关联 Training + Syllabus

每一步都在终端输出：
```
✅ Training created: ai-essentials-bootcamp (id: 67...)
✅ Module created: Phase 0 — 从零开始 (id: 67...)
✅ Lesson created: L01 电脑基础 (id: 67...) → Module: Phase 0
✅ Lesson created: L02 注册 AI (id: 67...) → Module: Phase 0
...
✅ Syllabus created with 16 lessons (id: 67...)
✅ Program created: AI 必修课 第一期 (id: 67...)
🎉 全部完成！
```

**Step 5: 保存 ID 映射**

创建完成后，将所有生产 ID 保存到本地：

```
skills-data/training-outlines/ai-essentials-bootcamp.json
```

格式和其他 training outlines 一致，包含完整的 Training + Module + Lesson + Program 数据。

---

### Feature 2: 双向同步

#### 2.1 下载（生产 → 本地）

已有能力，复用 `training-outlines` domain 的 download 功能：

```
POST /api/training-outlines/download?course=ai-essentials-bootcamp
```

下载最新的 Training + Module + Lesson 数据到 `skills-data/training-outlines/ai-essentials-bootcamp.json`。

#### 2.2 上传（本地 → 生产）

在本地修改 JSON 后：
1. `pending` 检测出文件已变更
2. 预览变更内容（diff 对比）
3. 调用 `POST /api/sync/training-outlines/upload`
4. 脚本逐字段对比，只更新变更的字段

#### 2.3 Diff 预览（新增功能）

上传前必须展示 diff：

```
ai-essentials-bootcamp.json
───────────────────────────────
 L05.title:
 - "说清楚你要什么 — 任务描述 + 输出格式"
 + "说清楚你要什么 — 任务、格式、约束"

 L10.duration:
 - 25
 + 30

 无删除操作
───────────────────────────────
确认上传？ [取消] [上传变更]
```

**关键规则**：
- 只展示变更的字段
- **删除操作**（字段从有到无、Lesson 从有到无）用红色高亮警告
- 新增操作用绿色
- 修改操作用黄色

---

### Feature 3: Lesson 绑定管理

#### 用户故事
> 作为课程运营，我想在 Dashboard 里看到每个 Lesson 关联了哪些 Lab 和 Learn 资源，并能修改绑定关系。

#### 3.1 查看绑定

在 Lesson 详情页展示：

```
L05 · 说清楚你要什么
├── Lab 绑定:
│   ├── ✅ Prompt Lab: clear-task (已有)
│   ├── ✅ Prompt Lab: output-format (已有)
│   └── ✅ Prompt Lab: constraints (已有)
├── Learn 绑定:
│   └── (无)
└── Step 序列: 7 steps
```

#### 3.2 添加绑定

从已有 Lab/Learn 资源列表中选择，添加到 Lesson。

数据来源：
- Prompt Lab: 读取 `jr-academy-web-zh/src/config/prompt-labs/` 的 slug 列表
- LLM Lab: 读取 `jr-academy-web-zh/src/config/llm-labs/`
- Learn 章节: 读取 `jr-academy-web-zh/src/config/learn/directions/*.config.ts`

UI：下拉搜索 → 选择 → 预览 → 确认添加

#### 3.3 解除绑定

从 Lesson 中移除 Lab/Learn 关联。

**安全规则**：
- 解除绑定 ≠ 删除 Lab/Learn 本身
- 只是取消 Lesson 和资源的关联
- 操作前需确认："确认取消 L05 与 Prompt Lab: clear-task 的绑定？"

---

### Feature 4: 安全机制（核心）

#### 🔴 绝对规则

| 规则 | 说明 |
|------|------|
| **禁止自动删除** | 任何删除操作都需要人工确认，不存在"自动清理" |
| **删除双重确认** | 第一次点"删除" → 弹窗警告 → 输入确认文字 → 才执行 |
| **宁可失败** | API 调用失败时保留本地数据不变，不回滚已成功的操作 |
| **只增不减** | 默认模式下只允许创建和更新，不允许删除 |
| **操作日志** | 所有 API 调用记录到本地日志文件 |

#### 4.1 删除保护

**场景 1：本地删除了一个 Lesson，上传到生产**

```
⚠️ 检测到以下删除操作：
- L04 直播：手把手带你用 AI (id: 67xxx)

该 Lesson 在生产环境有以下关联：
- 属于 Module: Phase 0 — 从零开始
- 属于 Syllabus: AI 必修课 大纲
- 有 3 名学员已完成该课程

❌ 删除操作已阻止。
如需删除，请手动在生产环境 Admin 后台操作。
```

**结论：Skills Data Manager 不执行任何删除操作。** 如果检测到本地数据比生产少了内容，只警告，不执行。

**场景 2：更新 Lesson 内容覆盖了重要字段**

```
⚠️ 以下字段将被覆盖：
- L05.description: 从 "..." 改为 "..."（286 字 → 42 字）

⚠️ 内容大幅缩减（-85%），请确认这不是误操作。
[取消] [确认覆盖]
```

**内容缩减超过 50% 时额外警告。**

#### 4.2 操作日志

每次操作记录到 `tools/skills-data-manager/.logs/`：

```
2026-03-31T10:30:00Z [CREATE] Training: ai-essentials-bootcamp → 200 OK (id: 67xxx)
2026-03-31T10:30:01Z [CREATE] Module: Phase 0 → 200 OK (id: 67xxx)
2026-03-31T10:30:02Z [CREATE] Lesson: L01 → 200 OK (id: 67xxx)
...
2026-03-31T10:30:15Z [UPDATE] Lesson: L05.title → 200 OK
2026-03-31T10:31:00Z [BLOCKED] DELETE Lesson: L04 → 阻止（安全策略）
```

#### 4.3 回滚支持

每次上传前自动备份当前生产数据：

```
skills-data/training-outlines/.backups/
  ai-essentials-bootcamp_2026-03-31T103000.json
```

如果上传后发现问题，可以从备份恢复。

---

## UI 设计

### 新增页面：Bootcamp Manager

在 Skills Data Manager 侧边栏新增 "Bootcamp" 入口。

#### 页面 1: Bootcamp 列表

```
┌─────────────────────────────────────────────┐
│  Bootcamp Manager                           │
├─────────────────────────────────────────────┤
│                                             │
│  ┌─ ai-essentials-bootcamp ──────────────┐  │
│  │ AI 必修课 · 16 Lessons · 4 Phases     │  │
│  │ 本地: ✅ outline.json 存在            │  │
│  │ 生产: ❌ 未创建                       │  │
│  │ [预览] [创建到生产]                    │  │
│  └────────────────────────────────────────┘  │
│                                             │
│  ┌─ ai-adoption-bootcamp ────────────────┐  │
│  │ AI Adoption Specialist · 22 Lessons   │  │
│  │ 本地: ✅ outline exists               │  │
│  │ 生产: ✅ 已同步 (last: 2026-03-15)   │  │
│  │ [查看] [同步] [Diff]                  │  │
│  └────────────────────────────────────────┘  │
│                                             │
│  ┌─ ai-engineer-bootcamp ────────────────┐  │
│  │ AI Engineer · 95 Lessons · 4 Phases   │  │
│  │ 生产: ✅ 已同步                       │  │
│  │ [查看] [同步] [Diff]                  │  │
│  └────────────────────────────────────────┘  │
│                                             │
└─────────────────────────────────────────────┘
```

#### 页面 2: Bootcamp 详情

```
┌──────────────────────────────────────────────────┐
│  AI 必修课 (ai-essentials-bootcamp)              │
│  Status: 本地 ✅ · 生产 ❌                       │
├──────────────────────────────────────────────────┤
│                                                  │
│  Phase 0 — 从零开始                              │
│  ┌──────────────────────────────────────────┐    │
│  │ L01 电脑基础          20min  自学  0 Lab │    │
│  │ L02 注册AI+第一次对话  25min  自学  2 Lab │    │
│  │ L03 10个日常场景       20min  自学  1 Lab │    │
│  │ L04 直播              60min  直播  0 Lab │    │
│  └──────────────────────────────────────────┘    │
│                                                  │
│  Phase 1 — Prompt 基础                           │
│  ┌──────────────────────────────────────────┐    │
│  │ L05 说清楚你要什么     25min  自学  3 Lab │    │
│  │ L06 给例子+扮演专家    25min  自学  3 Lab │    │
│  │ L07 AI会犯错          20min  自学  2 Lab │    │
│  │ L08 摘要提取分类       25min  自学  4 Lab │    │
│  └──────────────────────────────────────────┘    │
│  ... (Phase 2, 3)                                │
│                                                  │
│  ─────────────────────────────────────────────   │
│  Lab 绑定统计: 22 Labs 全部来自已有资源          │
│  Learn 绑定统计: 0 (可选关联)                    │
│  ─────────────────────────────────────────────   │
│                                                  │
│  [创建到生产] [下载生产数据] [查看 Diff]         │
│                                                  │
└──────────────────────────────────────────────────┘
```

#### 页面 3: Lesson 详情 + 绑定管理

```
┌──────────────────────────────────────────────────┐
│  L05 · 说清楚你要什么 — 任务描述 + 输出格式      │
│  25min · 自学 · 7 Steps                          │
├──────────────────────────────────────────────────┤
│                                                  │
│  Steps:                                          │
│  1. [CONCEPT] 好问题 vs 坏问题         3min     │
│  2. [LAB]     clear-task ✅已有        5min     │
│  3. [CONCEPT] 让AI按格式回答          3min     │
│  4. [LAB]     output-format ✅已有     5min     │
│  5. [CONCEPT] 告诉AI不要做什么        2min     │
│  6. [LAB]     constraints ✅已有       5min     │
│  7. [MCQ]     检查                    2min     │
│                                                  │
│  Lab 绑定:                                       │
│  ┌────────────────────────────────────────┐      │
│  │ ✅ Prompt Lab: clear-task              │      │
│  │ ✅ Prompt Lab: output-format           │      │
│  │ ✅ Prompt Lab: constraints             │      │
│  │ [+ 添加 Lab]                           │      │
│  └────────────────────────────────────────┘      │
│                                                  │
│  Learn 绑定:                                     │
│  ┌────────────────────────────────────────┐      │
│  │ (无关联)                               │      │
│  │ [+ 添加 Learn 章节]                    │      │
│  └────────────────────────────────────────┘      │
│                                                  │
│  [保存修改] [重置]                                │
│                                                  │
└──────────────────────────────────────────────────┘
```

---

## 技术方案

### 新增文件

```
tools/skills-data-manager/
├── server/
│   ├── bootcamp.ts              # Bootcamp 相关 API routes
│   ├── bootcamp-parser.ts       # 解析 outline.json → 结构化数据
│   ├── bootcamp-creator.ts      # 调用后端 API 创建课程（SSE 流式）
│   ├── bootcamp-sync.ts         # 双向同步逻辑
│   └── bootcamp-safety.ts       # 安全检查（删除保护、内容缩减检测）
├── src/
│   └── pages/
│       ├── Bootcamp.tsx         # Bootcamp 列表页
│       ├── BootcampDetail.tsx   # Bootcamp 详情页
│       └── LessonDetail.tsx     # Lesson 详情 + 绑定管理页
```

### 新增 API 端点

| 方法 | 路径 | 说明 |
|------|------|------|
| `GET` | `/api/bootcamps` | 列出所有 bootcamp（本地 + 生产状态） |
| `GET` | `/api/bootcamps/{slug}` | Bootcamp 详情（解析 outline.json） |
| `GET` | `/api/bootcamps/{slug}/diff` | 本地 vs 生产 diff |
| `POST` | `/api/bootcamps/{slug}/create` | 创建到生产（SSE 流式） |
| `POST` | `/api/bootcamps/{slug}/sync` | 同步变更到生产（SSE 流式） |
| `GET` | `/api/bootcamps/{slug}/lessons/{code}` | Lesson 详情 + 绑定 |
| `PUT` | `/api/bootcamps/{slug}/lessons/{code}/bindings` | 更新 Lab/Learn 绑定 |
| `GET` | `/api/labs/available` | 列出所有可用 Lab（Prompt/LLM/Frontend） |
| `GET` | `/api/learns/available` | 列出所有可用 Learn 章节 |

### outline.json 格式

新增 `curriculum/ai-essentials-bootcamp/outline.json`，从 outline.html 生成：

```json
{
  "slug": "ai-essentials-bootcamp",
  "name": "AI 必修课",
  "description": "各行各业的 AI 入门实战",
  "level": "零基础",
  "targetAudience": "40-60 岁非技术人员",
  "totalLessons": 16,
  "totalSteps": 98,
  "liveClasses": 2,
  "estimatedHours": 10,
  "phases": [
    {
      "name": "Phase 0 — 从零开始",
      "color": "#2e7d32",
      "lessons": [
        {
          "code": "L01",
          "title": "电脑基础 — 浏览器、搜索、复制粘贴",
          "type": "Lesson",
          "isLive": false,
          "duration": 20,
          "steps": [
            {
              "order": 1,
              "type": "CONCEPT",
              "title": "打开浏览器",
              "description": "Chrome / Edge / Safari 在哪...",
              "duration": 3
            },
            ...
          ],
          "labs": [],
          "learns": []
        },
        {
          "code": "L02",
          "title": "注册 AI 账号 + 第一次和 AI 说话",
          "type": "Lesson",
          "isLive": false,
          "duration": 25,
          "steps": [...],
          "labs": [
            { "source": "prompt-lab", "slug": "ai-basics" },
            { "source": "prompt-lab", "slug": "hello-ai" }
          ],
          "learns": []
        },
        ...
      ],
      "test": {
        "questions": 10,
        "passRate": 0.7,
        "unlocks": "Phase 1"
      }
    },
    ...
  ]
}
```

### 后端扩展（jr-academy）

可能需要新增或修改的端点：

| 端点 | 说明 | 是否新增 |
|------|------|---------|
| `POST /admin-cms/trainings` | 创建 Training | 已有 |
| `POST /admin-cms/modules` | 创建 Module | 可能需新增 |
| `POST /admin-cms/syllabuses` | 创建 Syllabus | 可能需新增 |
| `POST /admin-cms/lessons` | 创建 Lesson | 已有 |
| `POST /admin-cms/programs` | 创建 Program | 已有 |
| `PUT /admin-cms/lessons/{id}/bindings` | 更新 Lesson 的 Lab/Learn 绑定 | 新增 |
| `GET /admin-cms/trainings/{slug}/full` | 获取完整 Training + Module + Lesson 树 | 可能需新增 |

---

## 安全策略详细

### 操作分级

| 级别 | 操作 | 确认方式 |
|------|------|---------|
| 🟢 安全 | 查看、预览、下载、diff | 无需确认 |
| 🟡 注意 | 创建新内容、更新字段 | 单次确认按钮 |
| 🟠 警告 | 内容大幅缩减（>50%）、覆盖重要字段 | 弹窗 + 说明原因 |
| 🔴 禁止 | 删除 Lesson、删除 Module、删除 Training | **Skills Data Manager 不执行**，只在 Admin 后台操作 |

### 删除保护实现

```typescript
// bootcamp-safety.ts

function validateSync(local: BootcampOutline, production: TrainingData): SyncValidation {
  const result: SyncValidation = { safe: true, warnings: [], blocked: [] };

  // 检测删除
  for (const prodLesson of production.lessons) {
    const localLesson = local.phases
      .flatMap(p => p.lessons)
      .find(l => l.productionId === prodLesson._id);

    if (!localLesson) {
      result.safe = false;
      result.blocked.push({
        type: 'DELETE_BLOCKED',
        entity: 'Lesson',
        id: prodLesson._id,
        title: prodLesson.title,
        reason: 'Skills Data Manager 不允许删除 Lesson。如需删除请在 Admin 后台操作。'
      });
    }
  }

  // 检测内容大幅缩减
  for (const localLesson of local.phases.flatMap(p => p.lessons)) {
    const prodLesson = production.lessons.find(l => l._id === localLesson.productionId);
    if (prodLesson && localLesson.description) {
      const reduction = 1 - (localLesson.description.length / prodLesson.description.length);
      if (reduction > 0.5) {
        result.warnings.push({
          type: 'CONTENT_REDUCTION',
          entity: 'Lesson',
          field: 'description',
          title: localLesson.title,
          reduction: Math.round(reduction * 100) + '%',
          reason: `内容缩减 ${Math.round(reduction * 100)}%，请确认非误操作`
        });
      }
    }
  }

  return result;
}
```

---

## 实施计划

### Phase 1: 基础能力（1-2 周）

1. 创建 `outline.json` 数据格式和解析器
2. Bootcamp 列表页 + 详情页 UI
3. "创建到生产" 功能（SSE 流式）
4. 保存 production IDs 到本地 JSON
5. 操作日志

### Phase 2: 双向同步（1 周）

1. Diff 预览功能
2. 上传变更到生产（带安全检查）
3. 自动备份
4. 删除保护

### Phase 3: 绑定管理（1 周）

1. 读取已有 Lab/Learn 资源列表
2. Lesson 详情页 + 绑定管理 UI
3. 添加/解除绑定 API
4. 后端 Lesson binding 端点（如需新增）

### Phase 4: 打磨（持续）

1. 批量操作（一键同步所有变更）
2. 变更历史（谁在什么时候改了什么）
3. 多人协作冲突检测
4. 和 curriculum/ 静态页面的自动同步

---

## 不做的事

- ❌ 不在 Skills Data Manager 里编辑课程内容（内容编辑在 outline.html/json 或 Admin 后台）
- ❌ 不支持删除 Training / Module / Lesson（只在 Admin 后台删除）
- ❌ 不处理学员数据（报名、进度、成绩）
- ❌ 不管理定价和支付（在 Admin 后台设置）
- ❌ 不做课程页面前端渲染（那是 jr-academy-web-zh 的事）
