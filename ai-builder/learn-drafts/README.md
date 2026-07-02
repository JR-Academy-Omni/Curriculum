# Vibe Coding 大师课（ai-builder）— 自学章节补充草稿

这里是 2026-07-02 大纲审查发现的**自学（Information lesson）死链**对应的补充章节草稿。

## 背景

审查从学生端逐节核对了「自学」课绑定的 learn 章节，发现 **7 个 learn 章节在平台上是硬 404**（学生点进去看到红框 `Chapter not found`）。这 7 个 slug 分属两个方向、被 12 处 lesson 引用：

| 缺失 slug | 方向 | 学生端症状 |
|---|---|---|
| `claude-code-workflow` | vibe-coding | 章节 404 |
| `claude-schedule` | vibe-coding | 章节 404 |
| `model-routing-2026` | vibe-coding | 章节 404 |
| `mcp-tool-integration` | ai-engineer | 章节 404 |
| `agent-fundamentals` | ai-engineer | 章节 404（截图实证） |
| `agent-tool-use` | ai-engineer | 章节 404 |
| `multi-agent-orchestration` | ai-engineer | 章节 404 |

## ✅ 已完成的止血（B 步骤，已写进 outline.json）

**不用等页面上线，学生端现在已经不再报错。** 已在 `public/outline.json` 做了两件事：

1. **移除 12 处死链**：所有指向上述 7 个 404 slug 的 `learns` 引用已清空（9 节课的 `learns` 清空为 `[]`；L47 / L54 / L60 只删死链、保留仍可用的 learn 引用）。
2. **填实 4 节全空自学课**：L49 / L56 / L61 / L63 原本 `steps=0` 且无 learningMaterial，点进去只有红框。已补上 `learningMaterial`（教学正文）+ 3 个 step，学生现在能看到真实内容。

> 也就是说：**红色 `Chapter not found` 已消失**，B 步骤是纯 outline.json 改动，`/deploy`（或本工作台「发布」）即可生效，不依赖下面的 learn 页面上线。

## 这些草稿是什么（A 步骤 — 补齐正式章节）

B 只是让课不空白；下面 7 篇是把 7 个主题写成**完整的正式 learn 章节**，按 `learn-content-enhancer` 的 Human-First 写法（术语四行模板、第一人称、生活比喻、反 AI 味、真实代码/JSON、踩坑视角）。

| 草稿文件 | 目标 slug | 对应自学课（B 已兜底） |
|---------|----------|----------------------|
| `vibe-coding/claude-code-workflow.md` | `vibe-coding/claude-code-workflow` | L43（另 L43 自身有 step 兜底） |
| `vibe-coding/claude-schedule.md` | `vibe-coding/claude-schedule` | L53 |
| `vibe-coding/model-routing-2026.md` | `vibe-coding/model-routing-2026` | L67 |
| `ai-engineer/mcp-tool-integration.md` | `ai-engineer/mcp-tool-integration` | L49（并被 L47 / L52 引用） |
| `ai-engineer/agent-fundamentals.md` | `ai-engineer/agent-fundamentals` | L56（并被 L54 引用） |
| `ai-engineer/agent-tool-use.md` | `ai-engineer/agent-tool-use` | L61（并被 L60 引用） |
| `ai-engineer/multi-agent-orchestration.md` | `ai-engineer/multi-agent-orchestration` | L63（并被 L62 引用） |

## 上线两步（需要开发同学）

learn 内容在**生产 web 仓库** `jr-academy-web-zh`（JR-Academy-AI 组织，不在本工作台，本工作台红线不碰生产代码），所以这里只出草稿：

1. **放内容**：把 `vibe-coding/*.md`（3 篇）复制进 `jr-academy-web-zh/src/content/learn/vibe-coding/`、`ai-engineer/*.md`（4 篇）复制进 `.../learn/ai-engineer/`，并按各自 `src/config/learn/directions/{direction}.config.ts` 现有条目补 config（对齐 frontmatter，`order` / `group` 按该方向实际排布调整——草稿里的 order/group 是占位建议）。上线后确认 7 个 `/learn/{direction}/{slug}` 页面可访问。
2. **重新连大纲**：页面上线后，在 `public/outline.json` 把对应自学课的 `learns` 从 `[]` 改回指向真 slug（见上表），再在 jr-omni 根跑 `python3 lineage/build_lineage.py` 重建谱系，`/bootcamp-sync` 同步到 production。

> 顺序很重要：**先让 learn 页面上线，再把 outline.json 的 `learns` 连回去**。否则学员又会点进未上线的空页 / 404。在页面上线前，B 步骤的 learningMaterial + step 已经保证课不空白。

## 增强版：4 篇已上线但偏薄章节的加厚稿（`enhanced/`）

这批和上面 7 篇**不一样**：它们对应的 learn 页面**已经上线**，只是内容偏薄（原来各 375–600 字）。审查按「只加不删」把它们**扩写加厚到 ~2600–3050 字**，原有标题 / 正文 / prompt / 练习全部保留并融入，只补深度。

| 增强稿 | 目标 slug | 原字数 → 现字数 | 备注 |
|---|---|---|---|
| `enhanced/vibe-coding/automation-cli.md` | `vibe-coding/automation-cli` | ~375 → ~2900 | +3 术语模板、2 个完整实操例 |
| `enhanced/vibe-coding/ai-ux-copy.md` | `vibe-coding/ai-ux-copy` | ~600 → ~3050 | +好/烂文案对比 |
| `enhanced/vibe-coding/prompt-patterns.md` | `vibe-coding/prompt-patterns` | ~550 → ~2650 | +模糊→结构化改写对比 |
| `enhanced/vibe-coding/install-cursor.md` | `vibe-coding/install-cursor` | ~550 → ~2650 | ⚠️ 已把过期的 GPT-4/GPT-3.5 更新为 Claude Fable 5 / Opus 4.8 / GPT-5.4 mini |

**上线方式（和新建章节不同，更简单）**：这 4 个页面已存在，**不用新建 config、不用改 outline.json**。开发同学只需把增强稿正文**合并进** `jr-academy-web-zh/src/content/learn/vibe-coding/{slug}` 现有文件的正文（保留原 frontmatter 的 order/group）。合并原则同样是「只加不删」——用增强稿替换/扩展正文即可，别丢原有内容。

## 第三批：新增知识点（4 篇全新章节）

这批不是补洞，是**加课程原来没有的新知识点**——审查认为它们是「学员除了直播还该学」的实战/心法内容。全新 slug，需要在 learn 系统新建页面 + config，并在 outline.json **新增自学 lesson**。

| 草稿文件 | 目标 slug | 主题 | 建议插入 Phase |
|---------|----------|------|--------------|
| `vibe-coding/ai-code-security.md` | `vibe-coding/ai-code-security` | AI 生成代码的安全（密钥/注入/幻觉依赖包/license） | Phase 4（紧跟 Code Review L100/L101 之后） |
| `vibe-coding/ai-data-privacy.md` | `vibe-coding/ai-data-privacy` | 把代码/数据喂给 AI 的边界、隐私合规意识 | Phase 1（早立意识，安装/PRD 之后） |
| `vibe-coding/ai-legacy-codebase.md` | `vibe-coding/ai-legacy-codebase` | 在真实/遗留大代码库里用 AI（非绿地） | Phase 4（项目实战段） |
| `vibe-coding/when-not-to-use-ai.md` | `vibe-coding/when-not-to-use-ai` | 何时不该用 AI、防过度依赖（心法） | Phase 1 早立 或 Phase 4 毕业反思 |

**上线三步**（比补洞多一步——要新增 lesson）：
1. 内容进 `jr-academy-web-zh/src/content/learn/vibe-coding/` + 补 config（4 条）。确认 4 个 `/learn/vibe-coding/{slug}` 可访问。
2. 在 `public/outline.json` 对应 Phase **新增 4 节 `自学` Information lesson**（`code` 按所在 Phase 顺延、不跳号），插入片段例：
   ```json
   {
     "code": "L__",
     "title": "自学：AI 生成代码的安全",
     "type": "Information",
     "isLive": false,
     "duration": 25,
     "description": "读懂并防住 AI 代码最常埋的安全坑：硬编码密钥、注入漏洞、幻觉依赖包(slopsquatting)、license。",
     "learns": [{ "direction": "vibe-coding", "slug": "ai-code-security" }]
   }
   ```
   其余 3 节同格式（换 title / description / slug）。
3. 跑 `python3 lineage/build_lineage.py` 重建谱系，`/bootcamp-sync` 同步。顺序仍是**先让页面上线，再连 outline**。

## 参考资料（`resources/` — 非顺序课文）

3 份脚手架，帮学员「学得更顺」，不是章节，是随时查的资料：

| 文件 | 内容 | 建议发布位置 |
|------|------|------------|
| `resources/glossary.md` | 术语表（34 条 / 7 组：Agent/MCP/Tool/Context/RAG… 统一定义） | Wiki 文章（`staticWikiSlugs`）或课程「资料」页 |
| `resources/troubleshooting-faq.md` | 排错 FAQ（31 条 / 6 类：装不上、模型不调工具、上下文爆窗、AI 改坏…） | Wiki 文章 或 课程「资料」页 |
| `resources/cheatsheets.md` | 速查卡合集（5 张：Cursor 快捷键 / Claude Code 操作 / 提示词模式 / MCP 配置 / workflow 四段式） | Wiki 文章 或 课程「资料」页 |

> 这 3 份**不进 outline 的 lesson 序列**（它们是参考，不是要按顺序学的课）。最省事的落法：作为 Wiki 文章发布，再在相关 lesson 里用 `staticWikiSlugs` 引用；或挂到课程详情页的「资料」tab。术语表和速查卡也可以在多门 AI 课之间共用。

## 校验记录（2026-07-02）

- 补洞新建 7 篇（1750–2050 字）；增强 4 篇（2650–3050 字）；新增知识点 4 篇（1850–3050 字）；参考资料 3 份（术语表 34 条 / FAQ 31 条 / 速查卡 5 张）。frontmatter 完整。
- `ai-data-privacy` 已核：不做法律建议，5 处让读者「问公司 policy/法务」，无硬编法规/罚款数字。
- 无 AI 味套话（已扫 `在当今快速发展 / 深入探讨 / 无论你是初学者还是 / 本文将` 等，0 命中）。
- 未编造跑分 / 价格 / 公司案例；`model-routing-2026` 按定位描述 2026 模型格局，无编造数字。
- 增强 4 篇均已核对「只加不删」：原有标题 / prompt / 练习全部保留；`install-cursor` 无 GPT-4/GPT-3.5 残留。
- ⚠️ 发布前仍建议核 `mcp-tool-integration` 的 MCP TS SDK 方法签名对齐当前版本；`model-routing-2026` 建议挂季度更新提醒。
