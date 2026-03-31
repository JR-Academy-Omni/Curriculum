# /lesson-design — 设计一节完整的 Lesson

为指定主题生成完整的 lesson 结构，包含 Step 序列 + Kanban Task 拆解。

## 使用方法
```
/lesson-design [课号] [课名] [类型] [学习目标]
```
例如：
- `/lesson-design 3.1 "Context Engineering" Lesson "设计四层上下文架构"`
- `/lesson-design 5.1 "Budgeting and API Costs" Video "掌握 LLM 成本管理"`
- `/lesson-design 4.3 "RAG Builder Toolbox" Information "了解 RAG 工具全景"`

## Step 类型（统一标准）

| Step Type | 用途 | HTML tag color |
|-----------|------|---------------|
| CONCEPT | 文字概念讲解 | bg:#e0e7ff, color:#6366f1 |
| LAB | 互动 Lab 练习（标明 Lab 类型 + slug） | bg:#d1fae5, color:#065f46 |
| MCQ | 选择题理解检查 | bg:#fef3c7, color:#92400e |
| SCENARIO | 真实场景实操 | bg:#fce7f3, color:#9d174d |
| VIDEO | 录播视频 | bg:#dbeafe, color:#1e40af |
| LIVE | 直播教学 | bg:#ff5757, color:#fff |
| PROJECT | 项目/作业交付 | bg:#7c3aed, color:#fff |
| LEARN | Learn 方向章节（标明方向 + slug） | bg:#f3e8ff, color:#7c3aed |
| AI TUTOR | AI 引导本地实操（预设场景 Prompt） | bg:#fbbf24, color:#000 |

## Kanban Task 设计

当 lesson 有 PROJECT 或 SCENARIO 步骤时，需要设计 Kanban Task 拆解。学生在课程页面看到 Kanban 看板（Todo → In Progress → Done），拖拽完成每个 task。

### Task 类型和检查方式

| Task 类型 | 检查方式 | 适用场景 | 示例 |
|-----------|---------|---------|------|
| `ai-review` | AI 自动检查 + 评分 + 反馈 | 代码/文本/Prompt 类输出，AI 能判断质量 | 写 Context Engineering 方案、Prompt 迭代、API 封装类 |
| `manual-review` | 老师人工检查 | GitHub 项目、部署验证、架构设计 | RAG 项目 Demo、MCP Server、Fine-Tuning 报告 |
| `auto-check` | 系统自动验证（API 调用/测试通过） | 环境配置、API 连通性、Lab 完成 | OpenAI API 测试、GitHub 仓库创建 |
| `self-check` | 学生自行确认完成 | 阅读/观看类、简单操作 | 完成录播视频、阅读 Wiki |

### Task 设计规范

每个 task 包含：
```
{
  title: "任务标题（动词开头，具体明确）",
  description: "具体要求（Markdown）",
  reviewType: "ai-review | manual-review | auto-check | self-check",
  storyPoints: 1-5,           // 1=简单 2=中等 3=较难 5=大作业
  aiReviewGuideline: "...",   // 仅 ai-review 类型需要，给 AI 的评分标准
  submissionType: "text | file | link | screenshot",
  estimatedTime: "30min"      // 预估完成时间
}
```

### Task 拆解原则

1. **一个 PROJECT step 拆成 3-7 个 task**（太少没意义，太多压力大）
2. **渐进式**：前面的 task 是后面的基础
3. **AI Review 优先**：能用 AI 检查的就不要人工
4. **Manual Review 只用于**：GitHub 项目整体质量、生产部署验证、架构设计评审
5. **每个 task 有明确交付物**：不是"理解 XXX"，而是"提交 XXX"
6. **Story Points 总和** = 该 lesson 的工作量指标

### 示例：L12 Context Engineering 的 Kanban Tasks

```
Task 1: 设计 System Context                [2 pts] [ai-review]
  描述: 为 ISA 项目写 System Prompt，包含角色定义、能力边界、输出格式
  提交: text
  AI 评分标准: 是否包含角色定义、是否有明确边界、格式是否可控

Task 2: 设计 Retrieved Context 策略         [2 pts] [ai-review]
  描述: 定义 ISA 的检索策略 — 什么时候检索、检索什么数据源、结果如何排序
  提交: text

Task 3: 设计 Memory Context 管理            [2 pts] [ai-review]
  描述: 设计 ISA 的对话记忆策略 — 保留什么、丢弃什么、摘要策略
  提交: text

Task 4: 量化对比实验                         [3 pts] [ai-review]
  描述: 准备 10 个测试问题，分别用纯 Prompt 和完整 Context Engineering 回答，记录准确率/一致性/幻觉率
  提交: file (对比报告)

Task 5: ISA Context 方案 v1                 [3 pts] [ai-review]
  描述: 整合 Task 1-3，提交完整 Context Engineering 方案第一版
  提交: file

Task 6: 迭代 v2 (根据 AI 反馈改进)          [2 pts] [ai-review]
  描述: 根据 v1 的 AI Review 反馈，改进方案并说明改了什么、为什么
  提交: file

Task 7: 最终版 v3 提交                      [2 pts] [manual-review]
  描述: 最终版 Context Engineering 方案，包含完整的四层设计 + 版本迭代记录
  提交: link (GitHub)
```

### 示例：L44 RAG QA Application 的 Kanban Tasks

```
Task 1: 搭建项目结构                        [1 pt] [auto-check]
  描述: 创建 GitHub 仓库，初始化 Python 项目，安装依赖 (LangChain, ChromaDB, Streamlit)
  提交: link (GitHub repo)

Task 2: 实现文档 Ingestion                  [2 pts] [ai-review]
  描述: PDF 上传 → Chunking → Embedding → 存入 ChromaDB
  提交: link (GitHub commit)

Task 3: 实现 Retrieval + Generation         [2 pts] [ai-review]
  描述: Query → Vector Search → Context 拼接 → LLM 生成，用 LCEL chain
  提交: link (GitHub commit)

Task 4: 搭建 Streamlit UI                   [2 pts] [ai-review]
  描述: 文件上传 + 聊天界面 + 来源引用显示
  提交: screenshot

Task 5: 接入 LangSmith 监控                 [2 pts] [auto-check]
  描述: 配置 LANGSMITH_API_KEY，验证 Trace 出现在 LangSmith Dashboard
  提交: screenshot (LangSmith trace)

Task 6: 跑 RAGAS 评估                       [3 pts] [ai-review]
  描述: 准备 10 个 QA 对，跑 RAGAS 四指标，生成评估报告
  提交: file (评估报告)

Task 7: 部署 + README                       [3 pts] [manual-review]
  描述: 部署到 Streamlit Cloud 或 AWS，写 README (含架构图、使用说明、RAGAS 分数)
  提交: link (Demo URL + GitHub)
```

## 执行步骤

1. **查找现有资源**（调用 /platform-resources 逻辑）：
   - 在 247 个 Lab 中搜索相关的
   - 在 277 个 Learn 章节中搜索相关的

2. **设计 Step 序列**（4-12 个 Step）：
   - 先 CONCEPT/LEARN（概念输入）
   - 再 LAB（动手实操）
   - 然后 MCQ（理解检查）
   - 最后 SCENARIO/PROJECT（综合运用）

3. **设计 Kanban Tasks**（如果有 PROJECT/SCENARIO step）：
   - 拆成 3-7 个 task
   - 标注 reviewType 和 storyPoints
   - AI Review 的要写 aiReviewGuideline
   - 确保渐进式（前面的 task 是后面的基础）

4. **输出 HTML 代码** + **Kanban Task JSON**

## 注意
- 所有 lesson type 平等 — Video 和 Info 也有完整 step 序列
- LAB 引用要标明具体 slug
- LEARN 引用要标明方向 + slug
- Kanban Task 能用 AI Review 的就不用 manual-review
- Manual Review 只用于 GitHub 整体项目质量、部署验证、架构评审
- 内容具体实用，不要 AI 味空洞描述
