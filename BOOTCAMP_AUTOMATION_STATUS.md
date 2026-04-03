# Bootcamp 课程自动化管理 — 全局状态 & 缺口分析

> 最后更新：2026-04-01

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
│  /bootcamp-plan                规划新课程流程          │
│  /bootcamp-research            市场调研竞品分析        │
│  /lesson-design                设计单节 Lesson        │
│  /expand-outline               大纲扩展为完整课程      │
│  /curriculum-review            审查大纲完整性          │
│                                                     │
│         ↓ 输出到                                     │
│                                                     │
│  curriculum/{bootcamp}/                              │
│  ├── outline.json    ← 唯一数据源                    │
│  ├── *.html          ← 静态展示页面                   │
│  └── WORKFLOW.md     ← 状态追踪                      │
│                                                     │
│         ↓ 转换                                       │
│                                                     │
│  skills-data/training-outlines/{bootcamp}.json       │
│                                                     │
│         ↓ 对比 + 同步                                │
│                                                     │
│  Skills Data Manager (localhost:5188/bootcamp)       │
│  ├── Check Diff     对比 local vs production         │
│  ├── Sync           一键同步到 production             │
│  └── Version        版本管理                         │
│                                                     │
│         ↓ 调用 API                                   │
│                                                     │
│  jr-academy 后端 (admin-cms API)                     │
│  Training → Module → Program → Syllabus → Lesson     │
│                                                     │
│         ↓ 用户看到                                    │
│                                                     │
│  jr-academy-web-zh 前端课程页面                       │
└─────────────────────────────────────────────────────┘
```

---

## 各 Bootcamp 当前状态

| Bootcamp | 目录 | outline.json | 静态页面 | Production 同步 | 阻塞项 |
|----------|------|:---:|:---:|:---:|------|
| AI 必修课 | `ai-essentials-bootcamp/` | ✅ 33 lessons | ✅ 全部 | ✅ 已同步 | learningMaterial 未填充 |
| AI Adoption Specialist | `ai-adoption-bootcamp/` | ❌ **缺失** | ✅ 有 | ❌ 未同步 | **必须先创建 outline.json** |
| AI Engineer | `ai-engineer-bootcamp/` | ❌ **缺失** | ✅ 有 | ⚠️ 部分 | **必须先创建 outline.json** |

---

## Skills 实现状态

| Skill | SKILL.md 设计 | 实际可用 | 说明 |
|-------|:---:|:---:|------|
| `/bootcamp-curriculum-creator` | ✅ 390 行详细设计 | ⚠️ 仅文档 | Claude 可以按文档执行，但没有自动化脚本 |
| `/career-bootcamp` | ✅ 279 行详细设计 | ⚠️ 仅文档 | 同上 |
| `/bootcamp-plan` | ✅ 41 行设计 | ⚠️ 仅文档 | 编排器，调用其他 skill |
| `/bootcamp-research` | ✅ 42 行设计 | ⚠️ 仅文档 | 需要 WebSearch |
| `/bootcamp-sync` | ✅ 324 行设计 | ⚠️ 部分 | server/bootcamp.ts 有部分实现 |
| `/curriculum-review` | ✅ 81 行设计 | ⚠️ 仅 checklist | 不是可执行代码 |
| `/lesson-design` | ✅ 157 行设计 | ⚠️ 仅文档 | 有完整示例 |
| `/expand-outline` | ❓ 未检查 | ❓ | 需要确认 |

**说明：** 所有 skill 的 SKILL.md 设计质量都很高，Claude 可以直接按照 SKILL.md 的指令执行。"仅文档"不代表不能用 — Claude 读了 SKILL.md 就能执行对应操作。但缺少自动化脚本意味着每次都依赖 Claude 手动理解和执行。

---

## 关键缺口（按优先级排序）

### P0 — 阻塞性问题（必须立即解决）

| # | 缺口 | 影响 | 解决方案 |
|---|------|------|---------|
| 1 | ai-adoption-bootcamp 缺少 outline.json | 无法同步到 production | Claude 从现有 HTML 页面反推生成 outline.json |
| 2 | ai-engineer-bootcamp 缺少 outline.json | 无法同步到 production | 同上，且有 kanban-tasks JSON 可参考 |
| 3 | Skills Data Manager diff 功能不完整 | 无法对比 lesson 内容级别差异 | ✅ 已修复（本次对话） |

### P1 — 重要缺口（影响课程质量）

| # | 缺口 | 影响 | 解决方案 |
|---|------|------|---------|
| 4 | ai-essentials-bootcamp learningMaterial 为空 | 学生看不到教学内容 | 从 phase 页面 HTML 提取，通过 API 填充 |
| 5 | Skills Data Manager 不能从 curriculum/ 直接读取 | 需要手动转换 JSON | 加 /api/bootcamps/{slug}/import-from-curriculum 端点 |
| 6 | 没有自动化的 curriculum → training-outlines 转换 | 每次同步需手动转 | 在 bootcamp-sync 或 SDM 中实现自动转换 |

### P2 — 功能增强（提升效率）

| # | 缺口 | 影响 | 解决方案 |
|---|------|------|---------|
| 7 | curriculum-review 只是 checklist 不是可执行代码 | 每次审查靠 Claude 手动看 | 转为自动化检测脚本 |
| 8 | 没有平台资源自动发现 | Claude 每次需要手动查 Lab/Learn 列表 | 加 /api/platform-resources 端点汇总所有可用资源 |
| 9 | 没有批量课程管理视图 | 管理多个 bootcamp 效率低 | SDM Bootcamp 页面加汇总统计 |

### P3 — 未来规划

| # | 缺口 | 说明 |
|---|------|------|
| 10 | Phase 解锁测试系统 | BOOTCAMP_GUIDE.md 有方案但未实现 |
| 11 | Kanban 任务自动化 | ai-engineer 有手动 JSON，未集成到平台 |
| 12 | P3 职业孵化器 | career-bootcamp skill 设计了但后端无支持 |

---

## 平台可整合资源清单

Claude 在创建/优化课程时可以自动整合的已有资源：

| 资源类型 | 数量 | 配置位置 |
|----------|------|---------|
| Prompt Lab | 35+ | `jr-academy-web-zh/src/config/prompt-labs/` |
| LLM Lab | 18+ | `jr-academy-web-zh/src/config/llm-labs/` |
| Python Lab | 37+ | `jr-academy-web-zh/src/config/python-labs/` |
| AWS Lab | 44+ | `jr-academy-web-zh/src/config/aws-labs/` |
| Azure Lab | 31+ | `jr-academy-web-zh/src/config/azure-labs/` |
| Git Lab | 12+ | `jr-academy-web-zh/src/config/git-labs/` |
| Frontend Lab | 70+ | `jr-academy-web-zh/src/config/labs/` |
| Learn 章节 | 277+ | `jr-academy-web-zh/src/config/learn/directions/` |
| Videos | 大量 | `/videos` 路由 |
| Wiki 文章 | 大量 | `/wiki` 路由 |
| Roadmaps | 多个 | `/roadmaps` 路由 |
| Free Resources | 大量 | `/free-resources` 路由 |

---

## 推荐执行顺序

### 本周

1. **给 ai-adoption-bootcamp 和 ai-engineer-bootcamp 生成 outline.json**
   - 用 `/bootcamp-curriculum-creator` 或手动从 HTML 反推
   - 验证和现有页面内容一致

2. **填充 ai-essentials-bootcamp 的 learningMaterial**
   - 从 phase 页面提取教学内容
   - 通过 admin-cms API 批量更新

### 本月

3. **实现 curriculum → training-outlines 自动转换**
4. **升级 Skills Data Manager diff 显示**（已开始）
5. **把 curriculum-review 从 checklist 转为自动检测**

### 下月

6. **实现 Phase 解锁测试**
7. **批量课程管理视图**
8. **平台资源自动发现 API**
