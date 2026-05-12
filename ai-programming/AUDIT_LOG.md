# ai-programming — Audit Log

按时间倒序追加。每条 audit 记录三件事：**已验证 / 未验证 / 后续动作**。

全局总览见 [`curriculum/AUDIT_DASHBOARD.md`](../AUDIT_DASHBOARD.md)。

---

## 2026-05-12 — _id 重新对齐第 1 期 prod（PASS · 内容重构待后续）

**结论**：commit `aa675d9`（2026-04-13 第 2 期重写）给 108 节课**全部**生成了不存在于 prod 的新 `_id`。本次把 45 节"标题在第 1 期已存在"的 lesson 的 `_id` 改回第 1 期 prod 真值，并补充 `prodLessonIds` 双 program 映射字段。**Prod 完全未被触碰**（第 2 期 sync 从未跑过，prod 还是干净的 84 lessons / 2 programs 第 1 期状态）。

### 背景：disaster 还原

- **2026-04-12 ~ 04-17**：commit `aa675d9` 重写 outline.json，从 46 课扩到 108 课，每个 lesson 生成全新 ObjectId（时间戳全部落在这 5 天内）
- **2026-04-11**：最后一次干净的 prod cache `skills-data/training-outlines/ai-programming.json`（84 lessons / 2 programs，时间戳早于重写）
- **跨集合 _id 交集**：0 个 — 新 outline 的 108 个 _id 与 prod 真实的 84 个 _id 完全脱节
- **本应保留的绑定（如真在 prod）**：video recordings / learnChapterSlugs / staticWikiSlugs / labs / interactiveLabSlug / learningMaterial / 学员进度 — 如果当时 sync，prod 会被污染成 84 孤儿 + 108 空壳

### 第 1 期 prod 真相（2026-04-11 cache）

**Training**: slug=`ai-programming`, name="人人都能学的 AI Coding 实战课", type=training, level=零基础

**2 个 ACTIVE program（都 programPhase=1）**：

| Program | _id | slug | 开课 | 结课 | 学时 | 学费 | lessons |
|---|---|---|---|---|---|---|---|
| 基础班 (5周 for Non-tech) | `68d245017b290a005a0cb68b` | `ai-coding-5-for-non-tech` | 2025-11-16 | 2025-12-20 | 5 周 | $960 | 37 |
| 进阶班 (8周 for Non-tech) | `68a6ebae8a670b0071c9d978` | `零基础ai-coding课-进阶班-8周-for-non-tech` | 2025-11-16 | 2026-01-15 | 8 周 | $1360 | 47 |

**双 doc 模式**：进阶班 1-37 节标题与基础班一致但 _id 不同（37 对独立 doc），38-47 为进阶专属 10 节（API/JSON/OCR/Chatbot/Embedding/产品迭代/AI 互联网产品原型完成等）。

### ✅ 已验证

- outline.json JSON 合法（`jq . > /dev/null` 通过）
- **45 个 lesson 的 `_id` 恢复到第 1 期 prod 真值**（34 节用基础 _id / 11 节用进阶 _id）
- **45 个 lesson 加了 `prodLessonIds` 字段**：34 节有 `{basic, advanced}` 两个 _id，11 节只有 `{advanced}`
- **63 个第 2 期真新增 lesson 保留占位 _id**（29 个 Lab + 5 个 Quest + 28 个自学 + 1 个合并课 L15）—— sync 时由后端生成真实 prod _id
- **顶层数据自洽修复**：
  - 4 个 `phases[].summary` 从 "7/12/16/11 节课" 改成与实际 lesson 数（18/24/38/28）一致的 "Week X，N 节课"
  - `highlights[1]` 从 "46 节课覆盖..." 改成 "46 小时核心实战 + 60+ 自学/Lab 扩展..."（解决与 `totalLessons: 108` 的文案矛盾）

### ⚠️ 未做（明确不在本次范围）

- **未跑 SDM Refresh** — prod cache 还是 2026-04-11，本次 _id 映射基于这份快照。若 prod 在此后被人手动改过，本次映射可能不准（**风险低**：commit aa675d9 之后没人 sync，prod 应该没变）
- **未跑 SDM Sync** — 全程不碰 prod
- **未补内容**：自学课 28 节模板化 description / learningMaterial = null / L18 "Manangement" 拼写错误 / 其他文案问题 — 用户明确要求"内容都先不用补充"，等用户启动内容重构再处理
- **未支持 sync 进阶班**：sync.ts 用 `programs.find(p => phase===N)` 只命中第一个匹配 program，双 program programPhase=1 模式下 sync 始终走基础班。要 sync 进阶班需要先在 admin 把进阶 program 的 phase 改成 2，或在 SDM 加 slug-based program selector

### 📋 后续动作（按优先级）

- [ ] **内容大改**（用户主线任务）— 等用户拆分需求后做：phase 结构重排 / 删 lab / 加 quest / 修自学课等
- [ ] **运行一次 SDM Refresh** 拿最新 prod cache，再做 dry-run diff 确认本次映射对得上
- [ ] **prod admin 清理 3 个孤儿 lesson doc**（见下面表格）— 第 1 期独有、第 2 期不要的，从 program syllabus 移除并 archive
- [ ] **followup PRD**：SDM 加 program selector，让 sync 显式选择目标 program（修当前 "只能命中第一个 programPhase 匹配 program" 的限制）

---

## 第 1 期 → 第 2 期 _id 映射全表（45 节）

| Code | 标题 | basic _id | advanced _id |
|------|------|-----------|--------------|
| L01 | AI Coding是什么？ | `691fd37a83c15bc97885a684` | `691ed51e83c15bc97878812f` |
| L05 | 工具安装 & 环境准备 | `691fd3a883c15bc97885aa42` | `691ed58683c15bc978788f19` |
| L09 | 什么是“一个好的互联网产品”？ | `69256c7e83c15bc9780eeec7` | `69256a6c83c15bc9780e7785` |
| L11 | 入门IT必懂的 10 个基础概念 | `691fd39283c15bc97885a87e` | `691ed53283c15bc9787883f6` |
| L14 | 不同电脑系统的快捷键操作 | `69256bed83c15bc9780ebfcd` | `692569ab83c15bc9780e4db4` |
| L16 | 如何创建并管理你的第一个GitHub仓库 | `69256c3483c15bc9780ed9e3` | `69256a0183c15bc9780e5f7a` |
| L18 | 什么是AI Product Manangement | `68d24fd6b7af1b227efce4ef` | `68a6f44c6c178e09a078082d` |
| L21 | 课程项目示例：推荐给你的 3 个可参考的项目 | `69256cb983c15bc9780efa6e` | `69256ac683c15bc9780e8f0c` |
| L23 | 什么是User Story（用户故事）？ | `69256cd683c15bc9780efd23` | `69256aee83c15bc9780e92ff` |
| L25 | Proposal自己的AI产品 | `68d24fd6b7af1b227efce4f0` | `68a841366c178e09a0954f26` |
| L27 | HTML介绍 | `691bea6683c15bc97836903e` | `691bec0e83c15bc97836c50c` |
| L28 | CSS介绍 | `691bea7e83c15bc97836912d` | `691bec2983c15bc97836c8e8` |
| L29 | Git基础：保存进度不掉线 | `68d24fd6b7af1b227efce4f1` | `68a8419d6c178e09a0955a53` |
| L30 | 把想法变成计划书 | `69119599a3c56e09103c595e` | `69119c1ca3c56e09103d1b30` |
| L31 | AI Coding Prompt公式 | `6926a6aeae6677f81b58811d` | `69256b4183c15bc9780ea74e` |
| L36 | 如何阅读 AI 写的代码 | `6926a6ccae6677f81b5881d7` | `69256b6f83c15bc9780eaa1b` |
| L39 | 网页文件结构入门（HTML/CSS/JS） | `6926a6f2ae6677f81b5882af` | `69256ba783c15bc9780ead4c` |
| L40 | 提交你的完整 PRD 文档 | `691fd2eb83c15bc978859c7b` | `691fcf8383c15bc9788513ed` |
| L41 | 让 AI 帮我写第一个功能 | `68d24fd6b7af1b227efce4f3` | `68a842376c178e09a0956da6` |
| L43 | 报错时正确的 Debug 方法 | `6926a720ae6677f81b588741` | `6926a88bae6677f81b58b4ca` |
| L47 | Debug不再可怕 | `68d24fd6b7af1b227efce4f4` | `68a842686c178e09a09571b4` |
| L49 | 新手开发流程 | `6926a74fae6677f81b58890f` | `6926a8abae6677f81b58b72f` |
| L51 | Lab 01：手把手带你搭建cms系统（上） | `68d24fd6b7af1b227efce4f5` | `68a842a26c178e09a0957408` |
| L54 | 常见前端页面组件介绍 | `6926a787ae6677f81b589049` | `6926a8ceae6677f81b58bb20` |
| L55 | 用 AI 搭建一个完整官网页面 | `68d24fd6b7af1b227efce4f6` | `68d23ec5b7af1b227efac4a5` |
| L57 | 后台系统入门：CMS、数据库与管理员登录 | `68d24fd6b7af1b227efce4f7` | `68d24060b7af1b227efad53d` |
| L61 | 什么是数据库 | `6926a7b6ae6677f81b58930a` | `6926a8ebae6677f81b58bc32` |
| L63 | 用户系统入门：注册、登录与用户管理 | `68d24fd6b7af1b227efce4f8` | `68d24092b7af1b227efad66d` |
| L65 | 网站从CMS读取Service，在官网显示，实现网站管理 | `68d24fd6b7af1b227efce4fa` | `68d2410cb7af1b227efada50` |
| L66 | 注册用户网站下单，管理端查看订单 | `68d24fd6b7af1b227efce4fb` | `68d2415ab7af1b227efadb91` |
| L67 | 什么是部署上线？ | `6926a7e9ae6677f81b58952c` | `6926a910ae6677f81b58c7d2` |
| L69 | 产品上线啦，域名管理 | `68d24fd6b7af1b227efce4fe` | `68d2426bb7af1b227efae427` |
| L71 | 什么是SEO？ | `6926a80aae6677f81b589ffe` | `6926a92cae6677f81b58cd77` |
| L74 | SEO入门 & 检测网站 | `68d24fd6b7af1b227efce4ff` | `68d242c9b7af1b227efae572` |
| L77 | 什么是API？ | — | `6926a9d8ae6677f81b58d13b` |
| L78 | 什么是JSON？ | — | `6926a9f5ae6677f81b58d1f3` |
| L79 | 让产品更聪明 | — | `68d243afb7af1b227efaede1` |
| L82 | 什么是OCR | — | `6926aa1bae6677f81b58d37a` |
| L85 | 什么是Chatbot | — | `6926aa39ae6677f81b58da8f` |
| L89 | 给网站增加AI功能 | — | `68d2441db7af1b227efafeba` |
| L92 | 什么是 Embedding？ | — | `6926aa5bae6677f81b58e98d` |
| L95 | 什么是互联网产品原型 | — | `6926aa7cae6677f81b58eece` |
| L97 | 什么是产品迭代 | — | `6926aaa2ae6677f81b58f3c1` |
| L100 | AI互联网产品原型完成 | — | `68d2446bb7af1b227efb0738` |
| L103 | 项目最终展示与导师点评 | — | `69b263ce58d557c902838c88` |

11 节 "—" 是第 1 期基础班里**没有**对应 doc 的，只能用进阶 _id（这些是 AI/进阶部分课程）。

---

## 第 1 期独有、第 2 期已删除的孤儿 _id（3 个标题，5 个 doc）

这些 prod doc 会在 program syllabus 之外变成 dangling reference。建议 admin 操作时把它们从 program.syllabus 移除并 archive，或转移内容到合并后的新课。

| 第 1 期标题 | basic _id | advanced _id | 第 2 期归宿 |
|---|---|---|---|
| 本地环境VS云端环境 | `69256c1083c15bc9780eca7f` | `692569d783c15bc9780e5937` | 合并到 L15 "什么是终端（Terminal）& 本地环境 VS 云端环境" |
| 什么是终端（Terminal） | `69256c5783c15bc9780edc5b` | `69256a3c83c15bc9780e6b34` | 合并到 L15 同上 |
| AI in Programming 项目孵化营·基础班 (5周 for Non-tech)\_数据存储其实很简单 | `68d24fd6b7af1b227efce4f9` | —（进阶无此课） | 异常 doc，命名带 cohort 前缀疑似旧版手动改名遗留；建议 admin 直接 archive；如内容有价值，转入 L61 "什么是数据库" |

---

## sync.ts dual-program 风险提醒

`tools/skills-data-manager/server/bootcamp/sync.ts:246` 和 `diff.ts:246` 用：

```typescript
targetProg = programs.find(p => Number(p.programPhase) === Number(requestedPhase))
```

`.find()` **只返回第一个匹配**。当前 ai-programming 两个 program 都是 `programPhase=1`，sync 始终命中数组里靠前那个（基础班）。

**后果**：

- 默认 sync 只更新基础班 syllabus，进阶班永远不变
- 如果把 outline.json 的 programPhase 改成 2 并 sync → 会创建新的 programPhase=2 program（这是用户当前不想做的）

**如果未来要 sync 双 program**，选项：

1. 把基础班 program 改成 `programPhase=2`、进阶班保持 1 —— UI selector 可区分（但语义反了）
2. 在 SDM 加 `--program-slug` 参数让 sync 用 slug 选 program（更稳）
3. 拆成两个 outline.json（`outline.basic.json` / `outline.advanced.json`），每份独立 sync

本次只标记风险，不动 sync 代码。

---

## 操作记录

- 命令：所有改动通过单个 `python3` 脚本完成（OrderedDict 保字段顺序）
- 备份：`public/outline.json.pre-id-restore.bak`（267KB，原始 108 课假 _id 版本）
- 改动后体积：273KB（多了 `prodLessonIds` 45 个字段）
- 验证：JSON 合法 / 45 个 _id 落在第 1 期真值集合内 / 63 个保留占位 / phase summary 与实际 lesson 数一致

---

## 模板

```markdown
## YYYY-MM-DD — 简短主题（PASS / partial / FAIL）

**结论**：一句话定性。

### ✅ 已验证
- 检查项 1（用了什么命令/数字证据）

### ⚠️ 未验证
- 项目 + 原因

### 📋 后续动作
- [ ] 任务
```
