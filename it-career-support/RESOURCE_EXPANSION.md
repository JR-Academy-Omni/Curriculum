# 第三期资源扩展建议

> **现状**: 128 节课中只有 55 节有资源绑定（42%），73 节课只有视频 + description  
> **目标**: 把绑定覆盖率从 42% 提升到 80%+，让每节课都有延伸学习资源

---

## 一、现状诊断

| 资源类型 | 当前绑定 | 可用资源池 | 缺口 |
|---------|---------|-----------|------|
| Interview Handbook | 35 节 | 50+ 章节 | 还有 15+ 未用 |
| Wiki | 8 节 | 200+ wiki slug | 严重未用 |
| Roadmap | 10 节 | 30+ 路线图 | 大量未用 |
| Prompt Lab | 10 节 | 22+ 个 Lab | 一半没用 |
| **Interactive Lab (非 Prompt)** | **0 节** | **100+ exercises** | **完全未用** |
| **Videos 视频库** | **0 节** | `/videos` 有面经视频 | **完全未用** |
| **Cheat Sheets** | **0 节** | 200+ 技术速查 | **完全未用** |
| **Mock Interview** | 1 节 | 完整模拟面试系统 | 可用更多 |
| **Career Planning** | 0 节 | AI 职业规划工具 | 完全未用 |
| **Company Intelligence** | 0 节 | 100+ 公司情报 | 完全未用 |

---

## 二、可以新增的资源绑定

### 2.1 Interactive Lab 扩展（0 → 15+ 节）

当前只用了 Prompt Lab，其实平台还有 **Frontend Lab / Python Lab / Git Lab / LLM Lab**，对技术面试准备非常有用：

| 新增绑定 | 对应 Lesson |
|---------|-----------|
| **Frontend Lab** (66 exercises) | L75 前端面试准备 — 让学员直接做 HTML/CSS/JS 练习 |
| **Python Lab** (25+ labs) | L82 算法面试基础 / L83 用 AI 辅助刷题 |
| **Git Lab** (10 exercises) | 可绑定到新增一节"Git 基础面试题" |
| **LLM Lab** (20+ exercises) | L79 AI/ML 方向面试 — 完整 LLM 工程实践 |

**额外 Prompt Lab 绑定**：
| Lab | 绑定 Lesson |
|-----|-----------|
| `cost-optimization` | L96 薪资构成（理解成本概念） |
| `classification` | L22 简历关键词匹配（把 JD 分类） |
| `context-engineering` | L63 AI 模拟面试（多轮对话上下文） |
| `model-parameters` | L52 AI 求职工具全景（理解工具差异） |

---

### 2.2 Wiki 大量扩展（8 → 30+ 节）

平台有 200+ wiki，当前只绑了 5 个。可补充：

**AI 工具 wiki** → 职场提效类课程
| Wiki | 绑定 |
|------|------|
| `copilot` | L8 AI 岗位变化 / L111 AI 竞争力 |
| `windsurf` | L111 AI 时代职业竞争力 |
| `openai-api` | L79 AI/ML 面试准备 |
| `claude-api` | L79 AI/ML 面试准备 |
| `langchain` | L79 AI/ML 面试（RAG 架构） |
| `llamaindex` | L79 AI/ML 面试 |
| `mcp-guide` | L111 AI 工具生态 |
| `vscode-extensions` | L112 日常效率提升 |

**开发工具 wiki** → 技术面试准备
| Wiki | 绑定 |
|------|------|
| `git-guide` | 新增 Git 基础（或绑到 L74 如何准备技术面） |
| `system-design` (完整) | L85 Monolith / L86 Microservices / L90 Advanced System Design |

**求职/软技能 wiki**
| Wiki | 绑定 |
|------|------|
| `ai-agent-guide` | L52 AI 求职工具全景 |

---

### 2.3 Interview Handbook 剩余章节（35 → 50 节）

平台的 Interview Handbook 有完整的算法章节，当前只绑了少数几个。可补充：

**算法章节全覆盖** → L82 刷题策略 / L83 AI 辅助刷题 / L126 大厂算法题
- `algorithms/recursion`
- `algorithms/linked-list`
- `algorithms/queue`, `algorithms/stack`
- `algorithms/interval`
- `algorithms/matrix`
- `algorithms/graph`
- `algorithms/heap`
- `algorithms/trie`
- `algorithms/binary`
- `algorithms/math`
- `algorithms/geometry`

**其他未用章节**
| Handbook | 绑定 |
|---------|------|
| `interviewer-cheatsheet` | L70 面试评分标准解密（从面试官视角） |
| `landscape` | L4 IT 行业主要部门（手册中的行业全景） |

---

### 2.4 Roadmap 扩展（10 → 20 节）

当前只绑了 6 条主流 Roadmap，还有更多可以用：

| Roadmap | 绑定 |
|---------|------|
| `python` | L82 算法面试（Python 基础） |
| `aws-roadmap` | L77 DevOps 面试（云平台） |
| `sql` | L78 数据工程面试 |
| `postgresql-dba` | L78 数据工程面试 |
| `kubernetes` | L77 DevOps 面试（容器编排） |
| `mlops` | L79 AI/ML 面试准备 |
| `machine-learning-roadmap-1` | L79 AI/ML 面试 |
| `rag-retrieval-augmented-generation-roadmap` | L79 AI/ML 面试 |
| `vibe-coding` | L8 AI 时代 IT 岗位变化 / L111 AI 竞争力 |

---

### 2.5 新类型资源（完全未用）

#### 📹 Videos 视频库 `/videos`

平台有 **INTERVIEW / SKILLS / DEMO** 三类视频。可绑定真实面经视频：

| 绑定位置 | 说明 |
|---------|------|
| L122-L125 Atlassian/Google Case Study | 绑定 Atlassian / Google 真实面经视频 |
| L74 如何准备技术面 | 绑定"技术面试真实案例"视频 |
| L64 如何准备 Behavioural Interview | 绑定行为面试模拟视频 |

#### 📋 Cheat Sheets `/cheat-sheets`

200+ 技术速查表，可绑到各方向技术面试：

| Cheat Sheet | 绑定 |
|-------------|------|
| JavaScript / React / CSS | L75 前端面试 |
| Java / Spring Boot | L76 后端面试 |
| Docker / Kubernetes / AWS CLI | L77 DevOps 面试 |
| SQL / Pandas / Python | L78 数据工程面试 |
| Git | L74 技术面通用基础 |

#### 🎯 Mock Interview `/job-interview`

当前只在 L71 绑定了一次。可以扩展到：
- L57 Phone Screening 准备
- L72 模拟行为面试专项
- L98 Group Tutorial 07：模拟技术面试
- L99 模拟薪资谈判

#### 🗺️ Career Planning `/study/career-planning`

AI 驱动的职业规划工具：
- L11 职业规划的重要性
- L15 常见 IT 职业发展路径
- L16 制定未来的 IT 职业生涯

#### 🏢 Company Intelligence (100+ 公司情报)

每个公司都有 profile，包含 tech stack、hiring trend、visa sponsorship：
- L60 行业和公司研究资料 — 教学员怎么用平台的公司情报
- L122-L124 Atlassian Case Study — 直接绑定 Atlassian 情报页
- L125 Google 简历 — 绑定 Google 情报页

#### 📚 Free Resources `/free-resources`

免费资源库，包含免费证书、工具、课程：
- L34 远程工作与全球化求职 — 绑定免费远程工作资源
- L111 AI 时代职业竞争力 — 绑定免费 AI 课程

---

## 三、建议新增的互动实验（Lab）

除了复用已有 Lab，还可以为第三期**新建几个专属 Lab**：

### 3.1 AI 求职专项 Prompt Lab（建议新建）

| Lab 主题 | 对应 Lesson | 描述 |
|---------|-----------|------|
| **`ai-resume-builder`** | L28, L30 | 从 JD 到简历的完整流程，步骤式指导 + AI 实时反馈 |
| **`ai-mock-interview`** | L63 | AI 扮演面试官，学员回答后打分 + 改进建议 |
| **`ai-cover-letter-generator`** | L29 | Few-shot 技巧生成定制 CL |
| **`ai-offer-analyzer`** | L98 | 结构化 offer 对比的实操 Lab |

**价值**：比单纯看视频 + handbook 更有互动感，学员直接在 Lab 里练习。

### 3.2 Career-specific Wiki（建议新建）

| Wiki slug | 内容 | 绑定 |
|-----------|------|------|
| **`au-it-job-market-2026`** | 澳洲 IT 就业市场报告 | L2, L4, L7 |
| **`ai-job-hunting-toolkit`** | AI 求职工具箱完整指南 | L52 |
| **`interview-question-bank-au`** | 澳洲 IT 面试题库（含真题） | L65, L75-L78 |
| **`salary-negotiation-scripts`** | 澳洲谈薪话术模板 | L92-L100 |

---

## 四、优先级建议

### P0 — 必做（已有资源零成本绑定）

| 任务 | 产出 | 工作量 |
|------|------|--------|
| 绑定剩余 Prompt Lab | +15 节覆盖 | 低 |
| 绑定 Frontend/Python/LLM Lab | +10 节（技术面试） | 低 |
| 绑定剩余算法章节 | +8 节 | 低 |
| 绑定扩展 Wiki（AI 工具类） | +10 节 | 低 |
| 绑定 Cheat Sheets | +5 节 | 低 |

**预期**：绑定覆盖率 42% → **75%**

### P1 — 应做（需要挑选内容）

| 任务 | 产出 | 工作量 |
|------|------|--------|
| 绑定 Mock Interview 到更多课 | +4 节 | 中 |
| 绑定 Career Planning 工具 | +3 节 | 低 |
| 绑定 Company Intelligence | +5 节（大厂 case study） | 中 |
| 绑定 Videos 库（面经视频） | +6 节 | 中（要筛选视频） |

**预期**：绑定覆盖率 75% → **85%**

### P2 — 值得做（需要新建内容）

| 任务 | 产出 | 工作量 |
|------|------|--------|
| 新建 4 个 AI 求职 Prompt Lab | 差异化亮点 | 高 |
| 新建 4 个 Career Wiki | 内容竞争力 | 高 |

**预期**：让第三期成为"平台资源最丰富的 Bootcamp"，形成差异化卖点

---

## 五、总结

### 第三期的内容够吗？

**不够。** 当前问题：
1. **资源绑定太稀疏**（42% 覆盖率）——很多 Video 只是孤立的视频，没有延伸学习资源
2. **只用了 Prompt Lab**——Frontend/Python/LLM Lab 完全没用上
3. **Wiki 绑定严重不足**——200+ wiki 只用了 5 个
4. **平台独有资源完全没用**——Videos 库、Cheat Sheets、Mock Interview、Career Planning、Company Intelligence 这些都是平台最有价值的资产

### 建议执行顺序

1. **立即做 P0**：把现成的 Lab/Wiki/Handbook/Cheat Sheet 全部绑上，覆盖率到 75%
2. **规划 P1**：从 Videos 库筛选面经视频，绑定 Mock Interview、Career Planning 等工具
3. **评估 P2**：决定是否新建 4 个 AI 求职专属 Lab（这是最大差异化）
