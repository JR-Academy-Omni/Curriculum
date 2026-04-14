# AI Engineer Bootcamp 第五期 — 10-Phase 重组分析 & 待办清单

> 日期: 2026-04-14
> 状态: **分析完成，待执行修复**
> 涉及文件: `curriculum/ai-engineer-bootcamp/public/outline.json`

---

## 一、背景

第五期从 5 Phase 重组为 10 Phase，灵感来自 Agent Greenhouse Architecture 的分层架构。172 节课的**内容没有任何修改**，只做了：
- Phase 重命名和重新分组
- Lesson code 重新编号（L01-L172）

本文档逐 Phase 分析当前课程顺序的逻辑问题，并给出修复建议。

---

## 二、Phase 状态总览

| Phase | 名称 | 课数 | 来源 | 顺序状态 |
|-------|------|------|------|---------|
| 1 | Foundation Layer | 33 | 旧 P1 前半 | ✅ 不变，无问题 |
| 2 | Context Engineering | 18 | 旧 P1 后半 | ✅ 不变，无问题 |
| 3 | RAG | 45 | 旧 P2 整体 | ⚠️ 有小问题 |
| 4 | Capability Layer | 11 | 旧 P3 抽出 | ✅ 顺序合理 |
| 5 | Agent Core | 9 | 旧 P3 抽出 | ⚠️ Lab 顺序问题 |
| 6 | Multi-Agent & Orchestration | 11 | 旧 P3 抽出 | ❌ 有错放的课 |
| 7 | Memory System | 2 | 旧 P3 抽出 | ⚠️ 内容过少 |
| 8 | Harness Engineering | 8 | 旧 P4 整体 | ⚠️ 缺铺垫内容 |
| 9 | Model Layer | 18 | 旧 P5 前半 | ✅ 顺序合理 |
| 10 | Observability & Evals | 17 | 旧 P5 后半 + P3 移入 | ❌ 有重复 + 错放 |

---

## 三、逐 Phase 详细分析

### Phase 1: Foundation Layer（33 课）✅ 无问题

旧 P1 的 L01-L33 原封不动，教学顺序是：
```
Pre-work Labs → 环境配置 → LLM API → GenAI 全景（直播）→ ML/DL 基础 → Transformer → ISA 项目说明
```
逻辑完整，从基础到理论到实操，没有需要调整的。

---

### Phase 2: Context Engineering（18 课）✅ 无问题

旧 P1 的 L34-L51 原封不动：
```
四大模式（直播）→ Zero/Few-shot Labs → Context Engineering（直播）→ Context Labs ×6 → Vibe Coding（直播）→ GPT Store → Playbook → Eval Labs → 工具对比
```
逻辑合理：理论 → 实操 → 进阶 → 参考资料。

---

### Phase 3: RAG（45 课）⚠️ 小问题

基本等于旧 P2 整体搬入，教学顺序保留。

**问题 1：L52 "RAG 系统入门" 是从旧 P1 尾部移来的**
- 原来是 P1 最后一节，作为 RAG Phase 的过渡
- 放在 P3 开头合理，但原本是给学员"预告下一阶段"，现在变成"Phase 开头第一课"
- **影响程度**：低，不需要改

**问题 2：P3 中间有 P3 职业孵化器 Proposal（L66）**
- 这节课是 P3 项目 Proposal 讨论，不是 RAG 技术内容
- 但这是旧 P2 就有的安排（课程进行到一半时讨论 P3 方向）
- **影响程度**：低，保留原位置

---

### Phase 4: Capability Layer（11 课）✅ 顺序合理

```
Function Calling（直播）→ Tool Use Lab → MCP 入门 → MCP 构建（直播）→ MCP 源码 → MCP 集成（直播）→ MCP 实战 01/02（直播）→ MCP 发布指南 → Computer Use（直播）→ Computer Use 全景
```
从 Function Calling 基础 → MCP 理论 → MCP 实战 → Computer Use，递进合理。

---

### Phase 5: Agent Core（9 课）⚠️ Lab 顺序问题

当前顺序：
```
L108 Agents 基础（直播）
L109 Lab: ReAct Agent          ← ⚠️ Lab 在理论课之前
L110 The ReAct Framework（直播）
L111 Lab: AI Agent 设计模式
L112 Agent SDK 对比（直播）
L113 Agent SDK 对比参考
L114 构建第一个 Agent（直播）
L115 Production-grade Agentic RAG（直播）
L116 Deploying RAG in Production
```

**问题：L109 ReAct Lab 在 L110 ReAct Framework 理论课之前**

学生还没学 ReAct 理论就先做 Lab，逻辑不对。

**建议修复**：L109 和 L110 互换位置
```
L108 Agents 基础（直播）
L110 The ReAct Framework（直播）  ← 先讲理论
L109 Lab: ReAct Agent             ← 再做 Lab
L111 Lab: AI Agent 设计模式
...
```

> 注：这个顺序在旧 P3 就是这样的（旧 L97→L98→L99），可能是教学团队有意为之（先 Agents 总览 → 简单 Lab 热手 → 再深入 ReAct 理论）。需要跟教学团队确认。

---

### Phase 6: Multi-Agent & Orchestration（11 课）❌ 有错放的课

当前顺序：
```
L117 Multi-Agent Architectures（直播）
L118 Lab: 多 Agent 系统
L119 Multi-Agent + LangGraph（直播）
L120 A2A Protocol（直播）
L121 A2A Protocol 入门
L122 Agent Ops with LangSmith（直播）
L123 Multi-Agent RAG with LangGraph（直播）
L124 Multi-Agent + Protocol Ecosystem Map
L125 Agent Ops 最佳实践
L126 Claude Code 技术原理         ← ❌ 不属于 Multi-Agent
L127 Skills 范式                   ← ❌ 不属于 Multi-Agent
```

**问题 1：L126 "Claude Code 技术原理" 和 L127 "Skills 范式" 放错了 Phase**

这两节课的内容是：
- L126：Claude Code 的上下文管理与记忆机制 → 属于 **Harness Engineering**
- L127：从 Agent 到技能库的组织模式 → 属于 **Harness Engineering**

它们是 Harness Engineering 的铺垫，在旧 P3 排在 Harness（旧 P4）前面是作为过渡，但现在 P6 和 P8 之间隔了 P7 Memory System，放 P6 尾部意义不大。

**建议修复**：L126、L127 移到 Phase 8 Harness Engineering 的开头（L130 之前），作为 Harness 的前导材料。

**问题 2：L122 "Agent Ops with LangSmith" 的位置**

当前在 A2A Protocol 后面、Multi-Agent RAG 前面。Agent Ops 是运维/监控主题，可能更适合放在 Multi-Agent 技术内容之后。

**建议修复**：L122 移到 L123 之后
```
L117 Multi-Agent Architectures
L118 Lab: 多 Agent 系统
L119 Multi-Agent + LangGraph
L120 A2A Protocol
L121 A2A Protocol 入门
L123 Multi-Agent RAG with LangGraph    ← 技术内容先完
L122 Agent Ops with LangSmith          ← 运维/监控放后面
L124 Multi-Agent + Protocol Ecosystem Map
L125 Agent Ops 最佳实践
```

---

### Phase 7: Memory System（2 课）⚠️ 内容过少

```
L128 Agent Memory + Mem0（直播）
L129 Agent Memory 技术全景
```

**问题：只有 2 节课，是所有 Phase 中最薄的**

作为一个独立 Phase，2 节课显得空洞。这个问题在 review-new-content.html 里已经标注了，建议后续补充：
- STM/LTM 实操 Lab
- Session 管理 + Namespace Isolation
- Score Pruning 策略
- Memory 实战项目（比如跨 Session 记忆保持）

**是否考虑暂时合并回其他 Phase？** 两个选项：
1. 保持独立 Phase 7，后续补充内容（推荐，因为 Phase 名字已定）
2. 暂时合并到 Phase 5 Agent Core 或 Phase 6 Multi-Agent

---

### Phase 8: Harness Engineering（8 课）⚠️ 缺铺垫

```
L130 Harness Engineering 基础（直播）
L131 Harness 架构剖析：以 Claude Code 为例
L132 从零构建 AI Coding Agent Harness（直播）
L133 Lab: Tool Loop 实现
L134 Harness 工程化（直播）
L135 Harness Patterns 参考
L136 Skills 范式：可复用 Agent 能力单元（直播）
L137 Quest: 在你电脑上构建个人 Harness
```

**问题：缺少从 Agent → Harness 的过渡**

如果 L126（Claude Code 技术原理）和 L127（Skills 范式）从 P6 移过来，这个问题就解决了：
```
L126 Claude Code 技术原理           ← 从 P6 移来，铺垫
L127 Skills 范式                     ← 从 P6 移来，铺垫
L130 Harness Engineering 基础（直播）
L131 Harness 架构剖析
...
```

另外，**L172 "Claude Code Skills 最佳实践"（180m 直播）目前在 Phase 10**，内容是 Skills 模式组织可复用 Agent 能力。这跟 Harness Engineering 高度相关，放在毕业阶段不太合适。

**建议修复**：L172 也移到 Phase 8，放在 L136 "Skills 范式" 之后。

---

### Phase 9: Model Layer（18 课）✅ 顺序合理

```
Open-Weight Models → 部署/推理/SageMaker Labs → SDG → Fine-Tuning 理论 → 下载模型 → GPU 加载 → Sentence Transformers → SFT Lab → PEFT/QLoRA → RLHF/DPO Lab → Fine-Tuning Llama
```
从模型概览 → 部署实操 → 数据准备 → Fine-Tuning 理论 → Fine-Tuning 实操，递进合理。

---

### Phase 10: Observability & Evals（17 课）❌ 有重复 + 错放

当前顺序：
```
L156 AI Evaluation Engineering（直播）
L157 Lab: LLM 评估
L158 Lab: Prompt 评估
L159 Safety, Guardrails + Red-teaming（直播）
L160 Lab: Prompt 注入防御
L161 Lab: 幻觉检测与防护
L162 Lab: 幻觉检测与防护         ← ❌ 重复！跟 L161 同一个 Lab
L163 Lab: CloudWatch 监控
L164 Evaluation & Quality Monitoring
L165 AI Eval Tools 全景
L166 Red-teaming Playbook
L167 LinkedIn & CV Workshop
L168 P3 Demo Day（直播）
L169 学员小组项目展示
L170 往期 P3 项目案例
L171 AI Engineer 职业路径（直播）
L172 Claude Code Skills 最佳实践（直播）  ← ❌ 应在 Harness Phase
```

**问题 1：L161 和 L162 是重复的 Lab**
- L161（从旧 P5 来）和 L162（从旧 P3 移来）都是 `hallucination-defense` 同一个 Lab slug
- **修复**：删除 L162

**问题 2：L172 "Claude Code Skills 最佳实践" 放错 Phase**
- 180 分钟直播课，内容是 Skills 模式 + 个人 AI 开发技能库
- 跟 Harness Engineering 高度相关，不属于 Observability
- **修复**：移到 Phase 8

**问题 3：参考资料（L164-L166）放在 Lab 后面**
- 一般的模式是：理论课 → Lab → 参考资料
- L164-L166 应该紧跟 L159 Safety 直播课和 Labs 之后
- 当前位置还行，因为被 CloudWatch Lab 隔开了
- **影响程度**：低

---

## 四、修复动作清单

### 优先级 P0（必须修复）

| # | 动作 | 原因 |
|---|------|------|
| 1 | **删除 L162** | 跟 L161 重复（同一个 hallucination-defense Lab） |
| 2 | **L126、L127 从 P6 → P8 开头** | Claude Code 技术原理 + Skills 范式 属于 Harness 铺垫，不属于 Multi-Agent |
| 3 | **L172 从 P10 → P8** | Claude Code Skills 最佳实践是 Harness 内容，不是毕业课 |

### 优先级 P1（建议修复）

| # | 动作 | 原因 |
|---|------|------|
| 4 | **P5：L109 和 L110 互换** | ReAct Lab 应该在 ReAct 理论课之后（需跟教学确认，旧 P3 就是这个顺序） |
| 5 | **P6：L122 移到 L123 之后** | Agent Ops 运维内容放在技术内容之后更合理 |

### 优先级 P2（后续补充）

| # | 动作 | 原因 |
|---|------|------|
| 6 | **P7 Memory System 补充内容** | 只有 2 节课，需要补充 STM/LTM Lab、Session 管理等 |
| 7 | **P10 参考资料顺序微调** | L164-L166 放到 Safety Labs 紧后面 |

---

## 五、修复后的课程数量变化

| Phase | 修复前 | 修复后 | 变化 |
|-------|--------|--------|------|
| P6 Multi-Agent | 11 | 9 | -2（L126、L127 移走） |
| P7 Memory System | 2 | 2 | 不变 |
| P8 Harness Engineering | 8 | 11 | +3（L126、L127、L172 移入） |
| P10 Observability & Evals | 17 | 15 | -2（L162 删除、L172 移走） |
| **总计** | **172** | **171** | **-1**（删除 1 个重复 Lab） |

---

## 六、修复后 Phase 8 Harness Engineering 新结构

```
L126 Claude Code 技术原理            ← 从 P6 移来（铺垫）
L127 Skills 范式                      ← 从 P6 移来（铺垫）
L130 Harness Engineering 基础（直播）
L131 Harness 架构剖析：以 Claude Code 为例
L132 从零构建 AI Coding Agent Harness（直播）
L133 Lab: Tool Loop 实现
L134 Harness 工程化（直播）
L135 Harness Patterns 参考
L136 Skills 范式：可复用 Agent 能力单元（直播）
L172 Claude Code Skills 最佳实践（直播）← 从 P10 移来
L137 Quest: 在你电脑上构建个人 Harness
```

教学逻辑：认识 Claude Code → 了解 Skills 概念 → Harness 理论 → Harness 实操 → 工程化 → Skills 深入 → Claude Code Skills 实践 → Quest 动手做

---

## 七、Production IDs

| 实体 | ID |
|------|-----|
| Training | `66e3e7641664e500126d237f` |
| Program (第五期) | `698c339dbb0ad7fe43b0c99d` |
| Syllabus (第五期) | `69b8e9888639a1eb66afe5d9` |

---

## 八、下一步

1. ☐ 确认本文档的修复建议
2. ☐ 执行 P0 + P1 修复（修改 outline.json）
3. ☐ 重新编号 L01-L171
4. ☐ 更新 HTML 页面（curriculum.html / architecture.html / review 页面）
5. ☐ `/bootcamp-sync` 同步到 production
6. ☐ Admin 绑定视频
