# 这个目录是「全栈班」

> 任何 AI / 协作者进这个目录，请先读这一段再动文件。

## 身份

- **中文俗称**: 全栈班 / AI 全栈班 / AI Engineer 全栈班 / 全栈项目班
- **正式名**: AI Engineer 全栈项目班 Code Bootcamp | Learn to Code
- **slug**: `web-code-bootcamp-or-learn-to-code-1`（**`-1` 后缀是历史原因，不是 typo，不要去掉**——slug 跟 production 完全对齐，去掉就 sync 不上）
- **Production trainingId**: `5b4c09298018453ddf51937f`
- **课程结构**: 多 cohort 持续运营的旗舰大课，production 当前最新是「AI Engineer 全栈项目班 30 期」

## 不要搞混的几门课

| 用户说 | ✅ 这是正确的 slug | ❌ 容易认错的 |
|---|---|---|
| **全栈班** | `web-code-bootcamp-or-learn-to-code-1`（**就是本目录**） | ❌ `ai-engineer-bootcamp`（那是纯 AI 技术课，12 周 Context Engineering / RAG / Agent / Fine-Tuning）<br>❌ `full-stack-developer-interview`（那是面试题班）|
| **AI Engineer 班** | `ai-engineer-bootcamp` | ❌ 本目录 |
| **全栈面试** / **手撕全栈** | `full-stack-developer-interview` | ❌ 本目录 |
| **编程入门班** | （目前不存在 `web-code-bootcamp-or-learn-to-code` 目录，prod trainingId `5b4b5ad403c44f38ca79e74b`）| ❌ 本目录 |

## 历史踩坑记录

- 2026-04-11 之前有人把「编程入门班」的 PRD/README 错放到这个目录。**已于 2026-05-04 清理**。如果再看到本目录里出现 `slug: web-code-bootcamp-or-learn-to-code`（不带 `-1`）、`trainingId: 5b4b5ad403c44f38ca79e74b`、`Course Code weba1801` 字样的 markdown 文档，那不是这门课的内容，需要再次清理或挪走。
- 多次会话里 AI 把"全栈班"误认为 `ai-engineer-bootcamp`。判断标准只有一个：看 `public/outline.json` 的 `slug` 和 `name` 字段是不是「全栈项目班」。

## 当前状态（2026-05-04 审计）

`public/outline.json` 是 production 原始 dump，**还没整理成正常的教学结构**：

- `phases[]` 装的是 3 期 cohort（26 期 .NET / 27 期 .NET 寒假班 / 28 期 Node.js），不是教学阶段——**结构错误，需重构**
- `totalLessons: 485` 是 3 期加总，不是单期规模
- production 实际有 8 个 module，本地只截了前 3 个；缺失：Agile Team Project / 用户 Dashboard 与 CRUD / **AI 功能接入与 RAG 强化** / **AI 全栈产品上线与运维** / Career Coaching
- 485 lesson 全部 `steps[]` 为空、49 个 description 为空
- 0 个 InteractiveLab / Quest / Wiki / Learn 资源绑定
- 命中 5+ 处 AI 模板腔违禁词（"深入探讨"/"让我们一起"/"至关重要"）

下一步重构方向（待确认后执行）：
1. 从 `public/prod-state.json` + production API 拉完整 8 module + 最新 30 期 program 的 lesson
2. 重新按"教学阶段"划分 phase（不按 cohort），出 markdown 草案
3. 用户 review 后改 outline.json
4. 补 description / steps / 资源绑定
5. SDM Check Diff → Sync

## 静态站结构

- `src/` — Slide Deck (React + framer-motion + inline styles)，25 张 slide 涵盖 M1-M10 模块概览 + Career + Pricing + FAQ
- `public/curriculum.html` — 静态大纲页
- `public/mp-article/` — 微信公众号文章
- `public/xhs-posters/` — 小红书海报
- `public/outline.json` — 数据源（待重构）
- `public/prod-state.json` — production sync 快照（2026-04-30）
- `public/backups/` — sync 前安全备份
