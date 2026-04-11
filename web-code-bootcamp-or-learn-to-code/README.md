# 编程入门班 · Web Code Bootcamp

本目录是 **编程入门班**（Python + Web 开发入门）的 curriculum source。

- **Slug**: `web-code-bootcamp-or-learn-to-code`（与 production 保持一致）
- **Production Training ID**: `5b4b5ad403c44f38ca79e74b`
- **Course Code**: `weba1801`

## 数据来源

`public/outline.json` 从 `skills-data/training-outlines/web-code-bootcamp-or-learn-to-code.json` 的 **第22期 cohort**（`_id: 68da20032635ef924e6863ba`）生成。

第22期是截至 2026-04 最新的一届，开课 2025-10-29，结课 2026-02-26，包含 73 个 lessons，覆盖完整 Web + Python 栈。没有选更早的期次，是因为越往前的 cohort lesson 数越少、缺 lab、缺 workshop。

## 课程结构（78 lessons / 11 phases · 核心 68 + 扩展 10）

| Phase | 主题 | Lessons | 路径 |
|---|---|---|---|
| Phase 0 | 入学准备 & 开课 | 3 | 核心 |
| Phase 1 | 🆕 第一次和 AI 一起写代码 | 5 | 核心 |
| Phase 2 | HTML & CSS 前端基础 | 12 | 核心 |
| Phase 3 | Git & 版本控制 | 6 | 核心 |
| Phase 4 | JavaScript 前端编程 | 12 | 核心 |
| Phase 5 | Node.js 后端开发 | 7 | 核心 |
| Phase 6 | 数据库基础 | 3 | 核心 |
| Phase 7 | Python 编程入门 ⬆️ | 11 | 核心 |
| Phase 8 | 🎯 全栈项目 Instagramly（Capstone） ⬇️ | 6 | 核心 |
| Phase 9 | 职业发展 | 3 | 核心 |
| Phase 10 | 扩展阅读 · 传统 Web 栈 + JS 资源集合 | 10 | 扩展 |

**资源绑定**（A6 完成后）：147 个资源引用 = 103 labs + 35 learns + 9 wikis，67/78 lesson 有绑定（85.9%）。未绑定的 11 节是纯 orientation（L06 开课讲解会、L64 猎头访谈）和扩展阅读中的 legacy 内容（L35、L66-L73）。

- ~~15 节直播课（Lesson / Workshop）~~ → **0 节**（2026-04-11 A1 重构已全部转为录播）
- 7 个 Interactive Lab（Profile / Gallery / Form / Blog / Clock / TodoList / Calculator）
- 其余为录播（Video）+ 图文阅读（Information / Assignment）

## 类型映射

production lesson type → outline.json `type` + `isLive`：

| production | outline `type` | `isLive` | 默认时长 |
|---|---|:---:|---|
| `Lesson` | `Lesson` | ✅ | 180 min |
| `Workshop` | `Lesson` | ✅ | 120 min |
| `Video` | `Lesson` |  | 180 min |
| `Information` | `Information` |  | 15 min |
| `Lab` | `InteractiveLab` |  | 30 min |
| `Assignment` | `Information` |  | 30 min |

原 production 类型保留在每个 lesson 的 `steps[0].description` 里（带讲师名），不会丢失。

## TODO（剩余待办）

A1-A6 + A9 已完成（见下方进度表）。主要剩余工作：

1. **A7 直播课重引入** — 需要运营/讲师输入选题（6-8 节：开课会 / 项目评审 / 面试模拟 / 答疑）
2. **A8 Lesson 销售文案 + 教学 steps 展开** — 73 节课的 `description` 大部分为空，steps 只有 1 个占位。建议 `/bootcamp-description-enhancer` + `/lesson-design` 批量跑
3. **A10 静态 HTML 页面** — 还没有 `curriculum.html` / `phase*.html`
4. **A11 部署配置** — `.github/workflows/deploy.yml` 还没加 assemble 块；frontend `IntroduceSyllabus.tsx` 的 `CURRICULUM_SLUGS` 还没加这个 slug。**没做部署，线上看不到。**
5. **A12 同步到 production** — 通过 Skills Data Manager `Check Diff` 验证后再 Sync
6. **Phase 测试** — 11 个 phase 都没配 `phase.test`（题数、通过率、解锁条件）— 后端能力本身也待实现

## 重构进度（方向 🅰️：保留 slug + 换内核 · 只加不减）

> **核心原则**：一个 lesson 都不删。所有老内容要么留在主路径，要么移到扩展 phase（`isExtension: true`）作为自选阅读。

| Step | 动作 | 状态 |
|---|---|---|
| A1 | 把 15 节直播课全部转成录播（`isLive: true → false`，`steps[0].type: LIVE → VIDEO`） | ✅ 2026-04-11 |
| A2 | 把 PHP/Wordpress 8 节（L66-L73）抽到新建 Phase 10 扩展阅读（`isExtension: true`）| ✅ 2026-04-11 |
| A3 | 新增 **Phase 1 — 第一次和 AI 一起写代码**（L74-L78, 5 节 · 零基础友好），老 Phase 1-9 顺延为 Phase 2-10 | ✅ 2026-04-11 |
| A4 | **Phase 顺序修复**：Python（原 Phase 8）↔ 全栈项目 Instagramly（原 Phase 7）互换位置 + Phase 2 叙事桥接 summary | ✅ 2026-04-11 |
| A5 | L34「100+ JS Concepts」、L35「50 days 50 projects」移到 Phase 10 扩展。Phase 4 从 14 → 12 节，core 70 → 68 / ext 8 → 10 | ✅ 2026-04-11 |
| A6 | **核心 binding**：给 66/78 lesson 绑定 labs/learns/wikis，147 个资源引用（103 labs + 35 learns + 9 wikis），覆盖率 85.9% | ✅ 2026-04-11 |
| A6b | **Schema 扩展**：`sync.ts` + `diff.ts` 加 `wikis[] → staticWikiSlugs[]` 同步逻辑；`OUTLINE_JSON_FORMAT.md` 更新标准 | ✅ 2026-04-11 |
| A7 | 重新引入 6-8 节直播课，但语义换成开课会/项目评审/面试模拟/答疑 | ⏭️ 需运营/讲师 |
| A8 | 73 个 lesson 补 description（销售文案）+ 用 `/lesson-design` 展开 steps | ⏭️ 独立 session |
| A9 | **L65 更新**：「2023 IT 行业趋势」→「2026 AI Coding 时代的 IT 就业趋势」（title + 占位 step 已改）| ✅ 2026-04-11 |
| A10 | 创建 `curriculum.html` + 更新 `deploy.yml` + 更新 frontend `CURRICULUM_SLUGS` | ⏭️ 内容稳定后 |
| A11 | `/bootcamp-sync` 同步到 production | ⏭️ A10 之后 |

### A4-A6+A9 本次改动总览

**数据改动**（`public/outline.json`）
- Phase 顺序：Phase 7 Python + Phase 8 全栈项目（capstone）
- Phase 2 summary 加了 Phase 1→2 叙事桥接文案
- L34/L35 从 Phase 4 移到 Phase 10（core: 68, ext: 10）
- L65 title 改为"2026 AI Coding 时代的 IT 就业趋势"
- 66 个 lesson 加了 labs/learns/wikis 绑定（147 个资源引用，85.9% 覆盖）

**Sync 工具扩展**（`tools/skills-data-manager/server/bootcamp/`）
- `diff.ts`：`LESSON_COMPARE_FIELDS` 加 `staticWikiSlugs`；`buildLocalLessonFields` 提取 `lesson.wikis` → `staticWikiSlugs`
- `sync.ts`：create lesson payload 加 `staticWikiSlugs: wikiSlugs`
- 向后兼容：没有 `wikis[]` 字段的 outline 走空数组兜底

**文档**（`curriculum/OUTLINE_JSON_FORMAT.md`）
- Phase 字段表加 `isExtension: boolean`
- WikiRef 重新定义为 Static Wiki 路径（原文档写成 `skills-data/wikis/` 但 sync 实际走 `staticWikiSlugs`）
- outline.json → Production 映射表加两行

**A3 改动记录**：
- 新增 5 个 lesson：L74-L78（codes 续在 L73 后面，老 lesson code 不重编号）
- 每节 lesson 都有非模板化的销售文案（`description` 字段），不等 A8 再补
- `steps` 只占位 1 个，完整教学序列等 A8 用 `/lesson-design` 展开
- L76、L78 是 InteractiveLab，labs 字段占位引用 `prompt-lab/first-vibe-coding-webpage` 和 `prompt-lab/first-ai-iteration`，**这两个 lab slug 目前在平台不存在，待后续创建或改绑已有 lab**
- 顺延：Phase 1→2, 2→3, ..., 9→10
- A3 顺便修了 A2 的一个 bug：Phase 8 只改了 summary 没改 name（名字里还带 "& 扩展阅读"），hotfix 改成 "Phase 9 — 职业发展"

**A2 改动记录**（记在 `outline.json` 的 `_source.refactorLog`）：
- Phase 8 从 11 节 → 3 节（保留 L63 API 入门 / L64 猎头找工作 / L65 行业趋势）
- Phase 9 新建，收纳 L66-L73 共 8 节 PHP/Wordpress 视频，`color: #9e9e9e`（灰色），`isExtension: true`
- `totalLessons: 73`（不变），新增 `coreLessons: 65` + `extensionLessons: 8`
- 不删 lesson、不改 title、不改 code，只换 phase 归属

**A1 改动记录**（记在 `outline.json` 的 `_source.refactorLog`）：
- 改的字段：`liveClasses: 15 → 0`、15 个 lesson 的 `isLive` 和对应 `steps[0].type`
- 不改：`title`、`description`、`duration`、讲师信息全部保留
- 原始 production 类型（Lesson / Workshop）记在每个 lesson 的 `steps[0].description` 里，不丢历史

## 和 production 的关系

- production 当前有 23 个 cohort，包含 Wordpress 第3~8期、各地区第6期、Python+Web 第9~22期、零基础 Python Workshop
- 本目录只把第22期作为 canonical 源，**不覆盖**历史 cohort
- 同步到 production 时，`/bootcamp-sync` 应该只更新 Training 本体和当前最新 Program（第22期），历史 cohort 保留
- ⚠️ 历史 cohort 里 HTML 描述超长（8311 字符），同步时注意 `course.description` 字段会不会被覆盖
