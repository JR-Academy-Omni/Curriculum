# AI 必修课 — 正确的工作流程

> **核心原则：本地先行，production 后行。本地没确认，绝不动 production。**

---

## 第一步：本地内容（curriculum 静态页面）

所有内容修改从这里开始。

### 文件位置
```
curriculum/ai-essentials-bootcamp/
├── public/
│   ├── outline.json          ← 结构化数据源（33 lessons）
│   ├── outline.html          ← 完整大纲页（每个 lesson 的 step 序列）
│   ├── curriculum.html       ← 课程总览页（对外展示）
│   ├── phase0.html           ← Phase 0 详情
│   ├── phase1.html           ← Phase 1 详情
│   ├── phase2.html           ← Phase 2 详情
│   ├── phase3.html           ← Phase 3 详情
│   ├── learning-plan.html    ← 学习计划
│   ├── internal.html         ← 内部资料
│   └── styles.css
```

### 修改顺序
1. **outline.json** — 改这里。这是唯一的数据源。
2. **outline.html** — 从 outline.json 生成，展示所有 lesson 的 step 序列
3. **curriculum.html** — 课程总览，数字要和 outline.json 一致
4. **phase0-3.html** — 每个 Phase 的详细页面
5. **learning-plan.html** — 学习节奏
6. **internal.html** — Lab 映射表、统计

### 验证
```bash
# 本地预览
cd curriculum/ai-essentials-bootcamp
python3 -m http.server 5175 --directory public
# 打开 http://localhost:5175/curriculum.html 检查
```

**本地页面全部正确后，才能进入第二步。**

---

## 第二步：outline.json → production 数据映射

outline.json 是本地数据源。production 的所有数据都从这里来。

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
| `steps` (渲染成 HTML) | `description` | **销售描述**（简短，对外展示） |
| 本地 phase 页面的详细内容 | `learningMaterial.content` | **学生学习资料**（购买后看到） |
| `labs[].slug` | `link[]` 或独立 InteractiveLab lesson | Prompt Lab 引用 |
| `learns[].direction/slug` | `learnChapterSlugs[]` | Learn 章节引用 |
| `interactiveLabSlug` | `interactiveLabUrl` | InteractiveLab 的直达链接 |
| Phase 归属 | `moduleId` | 绑定到哪个 Module（Phase） |
| 在 Syllabus 中的位置 | Syllabus.lessonIds 数组顺序 | 排序 |

### description vs learningMaterial

```
description（课程描述）= 销售文案，对外展示
  - 简短，2-3 句话描述这节课讲什么
  - 未报名的用户能看到
  - 例："学会用 AI 写邮件和会议记录。掌握邮件 Prompt 公式，3 种常见邮件模板。"

learningMaterial（课程学习资料）= 真正的教学内容
  - 详细的教学步骤、示例、Prompt 模板
  - 只有报名的学生能看到
  - 内容来自本地 phase 页面的学习路径
  - 格式：Tiptap JSON 或 HTML 字符串
  - 状态：draft / published
```

---

## 第三步：同步到 Production

**前提：第一步和第二步都确认无误。**

### 创建新课程（首次）

顺序：
```
1. POST /admin-cms/trainings         → trainingId
2. POST /admin-cms/modules × 4       → moduleIds（Phase 0-3）
3. PUT  /admin-cms/trainings/{id}     → 绑定 modules
4. POST /admin-cms/programs           → programId（需要 trainingId + city + teachers）
5. POST /admin-cms/syllabuses         → syllabusId（需要 programId）
6. POST /admin-cms/lessons × 33       → lessonIds（需要 syllabusId + moduleId）
7. PUT  /admin-cms/syllabuses/{id}    → 绑定 lessonIds 数组（按顺序）
8. PUT  /admin-cms/programs/{id}      → 绑定 syllabus
```

每一步创建前**必须检测是否已存在**，已存在则复用 ID 跳过。

### 更新已有课程

```
1. 从 production 下载当前数据
2. 和本地 outline.json 对比 diff
3. 只 PUT 有变化的字段
4. 绝不删除任何内容
```

### 必填字段提醒

| 端点 | 必填 | 容易忘的 |
|------|------|---------|
| POST trainings | `name` | |
| POST programs | `name`, `training`, `teachers[]`, `city` | teachers 和 city 必填！ |
| POST syllabuses | `name`, `programId` | |
| POST lessons | `name` | `level` 必须中文（零基础），`duration` 必须是合法值 |
| POST modules | `name` | |

### 枚举值（传错 = 400）

```
level:    零基础 / 初级 / 中级 / 中级进阶 / 高级
duration: 30 / 60 / 90 / 120 / 150 / 180 / 240
type:     Lesson / Information / InteractiveLab / Video / Quiz / ...
```

---

## 第四步：验证

同步完成后验证：

1. **Admin 后台** — 打开 Program 页面，检查 Syllabus 里的 lesson 列表
   - 数量对不对（33 个）
   - 顺序对不对（Information → InteractiveLab 交替）
   - 每个 lesson 的 type 对不对
   - InteractiveLab 的"具体实验"绑定对不对
   - description 是简短销售文案
   - learningMaterial 是详细教学内容

2. **学生端** — 报名后看课程页面
   - lesson 列表和 admin 一致
   - 点击 InteractiveLab 能跳转到 Prompt Lab
   - Information 课打开能看到 learningMaterial 内容

3. **本地数据** — 从 production 下载最新数据保存到本地
   ```
   skills-data/training-outlines/ai-essentials-bootcamp.json
   ```

---

## 绝对不做的事

- ❌ **不直接往 production PUT AI 生成的内容** — 内容必须先在本地写好/确认
- ❌ **不跳过本地更新直接改 production** — 本地是 source of truth
- ❌ **不让 AI agent 生成教学内容直接上传** — 内容质量无法保证
- ❌ **不在 production 上做实验** — 所有测试在本地完成
- ❌ **不删除 production 数据** — 只增不改，改了要有 diff 确认

---

## 当前状态（2026-04-01）

### Production 上有的
- Training: `69cbc931d3a18e68bc6b9b09`
- Program: `69cbcca0d3a18e68bc6bff1d`
- Syllabus: `69cbce9cd3a18e68bc6c11f8`（33 lessons）
- 4 Modules（Phase 0-3）
- 33 Lessons（16 Information + 2 Lesson + 17 InteractiveLab - 但有 1 个多余的空 Syllabus 需要手动删）

### Production 上有问题的
- description 是 AI 生成的垃圾内容，需要从本地页面重新生成
- learningMaterial 是空的，需要从本地页面填充
- 16 → 33 的编号变化，本地静态页面还没更新

### 本地需要更新的
- outline.json ✅ 已更新到 33 lessons
- curriculum.html ❌ 还是 16 lessons 版本
- outline.html ❌ 还是 16 lessons 版本
- phase0-3.html ❌ 还是旧编号
- learning-plan.html ❌ 还是旧版
- internal.html ❌ 还是旧版

### 下一步
1. 更新本地所有静态页面到 33 lessons
2. 从本地内容生成 description（销售文案）和 learningMaterial（教学内容）
3. 通过 skills-data-manager 同步到 production
