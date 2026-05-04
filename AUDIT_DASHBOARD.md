# Curriculum Audit Dashboard

所有课程的体检状态一表扫。详细证据每条见 `curriculum/{slug}/AUDIT_LOG.md`。

**状态图例**：🟢 PASS · 🟡 partial（有阻塞但本地干净）· 🔴 FAIL（发现真问题）· ⚪ 未检 · 🟠 stub（outline 为空）· ⚫ 已下线

**SLA**：在卖 / 上线中课程每月至少一次 audit；新 cohort 上线后 7 天内必须一次。距今 > 30 天 Claude 应主动提示重检。

---

## 🚨 课程别名 → Slug 速查表（先查这个，再说"检查 X 课"）

**口语 / 简称 / 错叫法 → 真正 slug**。说错过的坑都收录在此（"全栈班" 翻车实例 → 见下表 ⚠️ 标记）。

| 你可能怎么叫 | 真正 slug | 完整名 |
|------------|---------|--------|
| **AI 工程师班** / AI Engineer / 工程师 / 主线工程班 | `ai-engineer-bootcamp` | AI Engineer Bootcamp（cohort 制，主推工程班） |
| AI 工程师入门 / RAG 班 / RAG 入门 | `ai-engineer-rag` | AI Engineer 入门（self-paced，**不分期**，是工程师班的入门版） |
| **⚠️ 全栈班** / 全栈项目班 / Code Bootcamp / Learn to Code | `web-code-bootcamp-or-learn-to-code-1` | AI Engineer 全栈项目班 Code Bootcamp / Learn to Code |
| **⚠️ 全栈面试班** / 面试班 / 手撕全栈 / 手撕面试 | `full-stack-developer-interview` | 手撕全栈面试题班（**这是面试题班，不是全栈班！**） |
| **Vibe Coding** / Vibe / Vibe 提升 / 提升班 / AI Builder | `ai-builder` | Vibe Coding 提升班 |
| **AI 营销** / 营销班 / 营销 4 周 / 全链路营销 | `ai-marketing` | AI 营销全链路实战 4 周 |
| **AI 必修课** / 必修课 / Essentials / 入门必修 | `ai-essentials-bootcamp` | AI 必修课 |
| **AI Coding 实战** / Coding 实战 / Programming / 人人都能学的 AI Coding | `ai-programming` | 人人都能学的 AI Coding 实战课 |
| **一人创业** / 一人创业营 / Solo Founder / 创业营 | `ai-solo-founder-bootcamp` | AI 一人创业营 |
| **AI Adoption** / Adoption / 商务班 / AI 适配 / Specialist | `ai-adoption-bootcamp` | AI Adoption Specialist Bootcamp |
| **Copilot** / 数据分析班 / 数据分析 Copilot | `ai-copilot` | AI 数据分析 & Copilot 自动化实战 |
| **BA** / 产品经理班 / 商业分析师 / Business Analyst | `business-analyst` | AI 产品经理 Business Analyst 训练营 |
| **IT 求职** / Career / Career Coaching / IT Career | `it-career-support` | IT Career Coaching Bootcamp |
| **OpenClaw 4 周** / OpenClaw 班 / OpenClaw Bootcamp | `openclaw-bootcamp` | OpenClaw 4 周个人 AI 助手 Bootcamp |
| **OpenClaw 工作坊** / OpenClaw 4h / OpenClaw 沉浸式 | `openclaw-workshop` | OpenClaw 4 小时沉浸式实操工作坊 |
| **DevOps** / TechScrum / TechScrum DevOps | `techscrum-devops` | TechScrum DevOps 项目实训营 |
| AI 漫画 / Comic | `ai-comic-workshop` | 🟠 stub |
| Claude / Cowork | `claude-cowork-workshop` | 🟠 stub |
| Claude SME / Cowork SME | `claude-cowork-sme-workshop` | 🟠 stub |
| 全渠道营销 / Omnichannel | `omnichannel-marketing-workshop` | 🟠 stub |

### ⚠️ 易混淆三组（每次必先确认）

1. **"AI 工程师" 三班**
   - `ai-engineer-bootcamp` = 主推 cohort 工程班（10 phase / 286 lesson）
   - `ai-engineer-rag` = self-paced 入门班（1 phase / 79 lesson，无 cohort）
   - 用户说"AI 工程师" 默认指 `ai-engineer-bootcamp`；说"入门 / RAG" 才是 `ai-engineer-rag`

2. **"全栈" 两班** — 历史翻车点
   - `web-code-bootcamp-or-learn-to-code-1` = **真·全栈项目班**（3 phase / 485 lesson，做项目）
   - `full-stack-developer-interview` = **面试题班**（9 phase / 150 lesson，刷题）
   - 用户说"全栈班" 默认指 `web-code-bootcamp-or-learn-to-code-1`；说"面试" 才是 `full-stack-developer-interview`

3. **"OpenClaw" 两班**
   - `openclaw-bootcamp` = 4 周完整 bootcamp（6 phase / 48 lesson）
   - `openclaw-workshop` = 4 小时单次工作坊（7 phase / 36 lesson）
   - 默认指哪个 → 看用户语境提"4 周" / "工作坊" / "4 小时"

**Claude 处理规则**：用户说的简称在上表能找到唯一映射 → 直接执行；找不到唯一 → 列出候选 slug 让用户选，**禁止猜**（呼应 CLAUDE.md "禁止瞎编"）。

---

## 状态总览 — 在卖 / 上线中

| 课程 | 规模 | 最近 audit | 状态 | 一句话备注 | 详情 |
|------|------|-----------|------|------------|------|
| [ai-engineer-bootcamp](ai-engineer-bootcamp/) | 10p / 286l | 2026-05-04 | 🟡 partial | 本地干净；prod diff 未验证（ADMIN_TOKEN 过期） | [log](ai-engineer-bootcamp/AUDIT_LOG.md) |
| [ai-builder](ai-builder/) — Vibe Coding 提升班 | 4p / 113l | — | ⚪ 未检 | — | — |
| [ai-marketing](ai-marketing/) — AI 营销全链路 4 周 | 4p / 64l | — | ⚪ 未检 | — | — |
| [ai-essentials-bootcamp](ai-essentials-bootcamp/) — AI 必修课 | 4p / 33l | — | ⚪ 未检 | — | — |
| [ai-programming](ai-programming/) — AI Coding 实战课 | 4p / 108l | — | ⚪ 未检 | — | — |
| [ai-solo-founder-bootcamp](ai-solo-founder-bootcamp/) — AI 一人创业营 | 4p / 59l | — | ⚪ 未检 | — | — |
| [ai-engineer-rag](ai-engineer-rag/) — AI Engineer 入门（self-paced） | 1p / 79l | — | ⚪ 未检 | self-paced，不分 cohort | — |
| [ai-adoption-bootcamp](ai-adoption-bootcamp/) — AI Adoption Specialist | 4p / 74l | — | ⚪ 未检 | — | — |
| [ai-copilot](ai-copilot/) — AI 数据分析 & Copilot | 1p / 8l | — | ⚪ 未检 | — | — |
| [business-analyst](business-analyst/) — AI 产品经理 BA 训练营 | 6p / 94l | — | ⚪ 未检 | — | — |
| [full-stack-developer-interview](full-stack-developer-interview/) — 手撕全栈**面试题**班 | 9p / 150l | — | ⚪ 未检 | ⚠️ 不是全栈班，是面试题班 | — |
| [it-career-support](it-career-support/) — IT Career Coaching | 14p / 479l | — | ⚪ 未检 | 规模最大 | — |
| [openclaw-bootcamp](openclaw-bootcamp/) — OpenClaw 4 周 | 6p / 48l | — | ⚪ 未检 | — | — |
| [openclaw-workshop](openclaw-workshop/) — OpenClaw 4 小时工作坊 | 7p / 36l | — | ⚪ 未检 | — | — |
| [techscrum-devops](techscrum-devops/) — TechScrum DevOps | 1p / 7l | — | ⚪ 未检 | — | — |
| [web-code-bootcamp-or-learn-to-code-1](web-code-bootcamp-or-learn-to-code-1/) — AI Engineer **全栈项目班** | 3p / 485l | — | ⚪ 未检 | ⚠️ 默认"全栈班" = 这个 | — |

## Stub / 未开发

| 课程 | 状态 | 备注 |
|------|------|------|
| ai-comic-workshop | 🟠 stub | outline 为空，未规划 |
| claude-cowork-workshop | 🟠 stub | outline 为空 |
| claude-cowork-sme-workshop | 🟠 stub | outline 为空 |
| omnichannel-marketing-workshop | 🟠 stub | outline 为空 |

---

## 使用方式（SOP）

### 触发体检 — 用户说什么会触发

| 用户说 | Claude 行为 |
|--------|------------|
| "检查一下 `{别名/slug}`" / "`{别名}` 没问题吗" / "audit `{别名}`" | 默认跑**最低集**体检 |
| "完整体检 `{别名}`" / "`{别名}` 跟 prod 对一下" / "深度审计" | 跑**完整集**（需要 ADMIN_TOKEN） |
| "`{别名}` 内容质量怎么样" / "查 AI 味" | 跑**内容质量审计**（detail 见下） |
| "哪些课没体检 / 谁最久没查 / 体检状态扫一下" | 直接读 `curriculum/AUDIT_DASHBOARD.md` 报告 |
| "上线 `{别名}` 第 X 期了" | 主动建议跑一次完整体检（呼应 SLA：新 cohort 7 天内必须 audit） |

**别名识别规则**：先查上面的「别名 → Slug 速查表」；找不到唯一映射就停下来问用户，禁止猜。

### 体检三种类型

#### 1. 最低集（默认 / 无需 token）
```
✓ Outline 结构：phase/lesson/step 数与 metadata 顶部字段是否一致
✓ InteractiveLab 100% 绑定 interactiveLabSlug（缺一个就 FAIL）
✓ Lesson description 是否非 stub（≥3 句具体内容；抽样 8 节）
✓ AI 模板腔扫描："在当今/深入探讨/全面掌握/Whether you're a beginner" 等违禁词
✓ Phase Lab 平衡度：每 phase 至少 1 InteractiveLab（避免纯听课无练习）
✓ 重复 lesson 检测（同 phase 内 title 重复 / interactiveLabSlug 重复）
```

#### 2. 完整集（需要 SDM `.env.local` 有效 ADMIN_TOKEN）
```
✓ 上面所有 +
✓ POST http://localhost:3088/api/bootcamps/{slug}/refresh-prod-state
✓ prod vs local：lesson 数 / module 数 / 各 cohort program lesson 数对得上
✓ Orphan lesson：prod 存在但本地 outline 没引用
✓ Duplicate lesson：同 lesson 出现在多 syllabus 但 syllabusOrder 冲突
✓ trainingId / programId 与本地 prod-state.json 缓存一致
```

#### 3. 内容质量审计（深度 / 慢 / 单独触发）
```
✓ 每节 lesson description 是不是营销文案（不是内容摘要 — 呼应 feedback_lesson_description_marketing）
✓ 每节 step content 是否有具体命令 / 数据 / 案例（不是空泛科普段）
✓ Quest 的 context / stepSkeleton 是否齐全
✓ 真实案例 + 创作者署名（呼应 feedback_real_examples_with_attribution）
✓ Phase 名是不是纯主题不带"Day N"（呼应 feedback_no_day_labels）
✓ 没有承诺金钱结果 / 没用"副业"一词（呼应 feedback_no_revenue_promise）
```

### 体检后必做两件事

1. **追加 per-course log**：`curriculum/{slug}/AUDIT_LOG.md` 顶部加一条（倒序），含 ✅ 已验证 / ⚠️ 未验证 / 🛠️ 操作 / 📋 后续
2. **更新 dashboard 行**：本文件对应行的「最近 audit / 状态 / 一句话备注 / 详情链接」

漏掉任何一步 = 体检不完整。

### 状态判定

- 🟢 **PASS** — 完整集全过
- 🟡 **partial** — 最低集过，完整集有阻塞（如 token 过期 / SDM 故障 / API 不通）
- 🔴 **FAIL** — 任何一项真问题：orphan / duplicate / metadata 错配 / 真 stub description / AI 模板腔 / 模糊承诺
- ⚪ **未检** — 没体检记录
- 🟠 **stub** — outline.json 是空的，没必要 audit
- ⚫ **下线** — 课程已停售/退役，不需要维护

### 写作原则（呼应 CLAUDE.md "禁止瞎编"）

- 数字必须来自 `jq` 或 API 响应实际输出，不要拍脑袋
- 没真跑的检查写到「⚠️ 未验证」段，不要伪装成已验证
- 推翻别人 / 自己之前的结论 → 必须附证据（jq 命令 + 输出 / curl 响应）
- AUDIT_LOG 详情要可单独追溯，dashboard 单元格只放摘要
