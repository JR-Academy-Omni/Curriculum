# AI 必修课 — Local vs Production 内容差距报告

> 生成时间: 2026-04-01 | 33 lessons

## Lesson Schema 关键字段说明

**代码位置**: `jr-academy/src/models/lesson.schema.ts`

### description vs learningMaterial 的区别（重要）

| | `description` | `learningMaterial.content` |
|---|---|---|
| **用途** | 对外销售/列表展示的短文案 | 学生端看到的正式教学内容 |
| **展示位置** | 课程列表页、大纲页、SEO | 学生端课程详情页 |
| **内容格式** | 纯文本，1-2 句话 | Tiptap JSON/HTML 富文本 |
| **编辑方式** | Admin 表单 | Admin Tiptap Notion 模式编辑器 |
| **举例** | "学会打开浏览器、用搜索引擎、复制粘贴文字" | 完整的操作步骤、截图、代码、知识点梳理 |
| **发布流程** | 无 | 有 draft/published 状态 |

### 其他关键字段

| 字段 | 用途 | 展示位置 |
|------|------|---------|
| `labs` | 关联 Interactive Lab (ObjectId[]) | 学生端课程页 |
| `learnChapterSlugs` | 关联 Learn 章节 (string[]) | 学生端学习资料 |
| `knowledge` | 知识点标签 (string[]) | 学生端知识点列表 |
| `link` | 课程链接 (string[]) | 学生端资源链接 |
| `wikis` | 关联 Wiki (ObjectId[]) | 学生端 Wiki 资料 |

## 字段完整度汇总

| 字段 | Local (outline.json) | Production | 差距 |
|------|---------------------|------------|------|
| **description** | 23/33 | **33/33** | Local 缺 10 个 |
| **labs** | **29/33** | 0/33 | Prod 全部缺失 |
| **learnChapterSlugs** | 1/33 | 1/33 | 两边都几乎空 |
| **learningMaterial** | N/A (不在 outline.json) | **未查询** | 需逐个 lesson 调 API |

## 逐课对比明细

L=Local, P=Production, Y=有内容, -=空

```
Code  Title                                     Desc  Labs  Learn  Steps
                                                L/P   L/P   L/P    L/P
─────────────────────────────────────────────────────────────────────────
L01   电脑基础 — 浏览器、搜索、复制粘贴                  Y/Y   0/0   0/0    6/5
L02   注册 AI 账号 + 第一次和 AI 说话               Y/Y   2/0   0/0    8/7
L03   AI 基础概念 — 5 分钟搞懂大模型                 Y/Y   1/0   0/0    0/0
L04   Hello AI — 你的第一个 Prompt             Y/Y   1/0   0/0    0/0
L05   AI 能帮你做什么？— 10 个日常场景                Y/Y   1/0   1/1    5/4
L06   模型与参数 — Temperature、Top-P 和模型选择     Y/Y   1/0   0/0    0/0
L07   直播：手把手带你用 AI                        Y/Y   0/0   0/0    5/5
L08   说清楚你要什么 — 任务描述 + 输出格式 + 约束          Y/Y   3/0   0/0    7/6
L09   明确任务 — 让 AI 准确理解你的需求                Y/Y   1/0   0/0    0/0
L10   输出格式 — 让 AI 按你要的格式回答                Y/Y   1/0   0/0    0/0
L11   约束与负面 Prompt — 告诉 AI 不要做什么           Y/Y   1/0   0/0    0/0
L12   给 AI 看例子 + 让 AI 扮演专家                Y/Y   3/0   0/0    7/6
L13   Zero-shot — 零示例直接提问                 Y/Y   1/0   0/0    0/0
L14   Few-shot Learning — 用示例教会 AI        Y/Y   1/0   0/0    0/0
L15   角色扮演 — 让 AI 成为领域专家                  Y/Y   1/0   0/0    0/0
L16   AI 会犯错 — 怎么检查 AI 的回答                -/Y   2/0   0/0    6/5
L17   幻觉检测与防护 — 别让 AI 胡说八道               Y/Y   1/0   0/0    0/0
L18   Chain of Thought — 让 AI 展示思考过程      Y/Y   1/0   0/0    0/0
L19   Prompt 实战 — 摘要、提取、分类                -/Y   4/0   0/0    7/6
L20   文本摘要 — AI 帮你读完一本书                   Y/Y   1/0   0/0    0/0
L21   信息提取 — 让 AI 当数据挖掘助手                 Y/Y   1/0   0/0    0/0
L22   分类与情感分析 — AI 读懂用户情绪                 Y/Y   1/0   0/0    0/0
L23   邮件与商务写作 — AI 秒变写作助手                 Y/Y   1/0   0/0    0/0
L24   直播：职场 AI 全场景演示                      -/Y   0/0   0/0    5/5
L25   AI 写邮件、做会议记录                        -/Y   2/0   0/0    6/5
L26   AI 做文档和报告                           -/Y   1/0   0/0    6/5
L27   AI 处理数据和表格                          -/Y   2/0   0/0    6/5
L28   多模态 Prompt — 让 AI 看图、听声、读文          Y/Y   1/0   0/0    0/0
L29   AI 内容创作 — 文案和图片                     -/Y   1/0   0/0    6/5
L30   AI 多步任务 — 一步一步帮你做复杂的事               -/Y   1/0   0/0    6/5
L31   行业 AI 场景 + 安全红线                     -/Y   1/0   0/0    7/6
L32   成本优化 — 省钱又高效的 AI 调用策略               Y/Y   1/0   0/0    0/0
L33   你的 AI 学习路线图 — 毕业后往哪走                -/Y   0/0   0/0    5/5
```

## 待补齐的 TODO

### 1. Local 缺 description (10 个)
Production 有但 Local 没有，需要回填:
- L16, L19, L24, L25, L26, L27, L29, L30, L31, L33

### 2. Production 缺 labs (29 个)
Local 已绑定 Prompt Lab 但 Production 为空:
- 所有 InteractiveLab 课时 + 含 Lab step 的自学课

### 3. learnChapterSlugs 两边都几乎空 (32/33)
仅 L05 有 `ai-office/choose-ai-tool`，其余全空。需要规划哪些 Learn 章节可以绑定。

### 4. learningMaterial.content 未查询
需要逐个调 API 查看 Production 的 Tiptap 富文本内容是否存在。
这是学生端最重要的教学内容字段。
