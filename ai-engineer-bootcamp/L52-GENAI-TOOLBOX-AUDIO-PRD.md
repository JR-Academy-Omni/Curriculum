# L52 GenAI Toolbox · 课程讲解音频 PRD

**Lesson**: AI Engineer Bootcamp (第五期) · Phase 2 · L52 GenAI Toolbox
**Production ID**: `69b8e9888639a1eb66afe67c`
**数据源**: `curriculum/ai-engineer-bootcamp/public/outline.json:2782-2810`
**产出**: 一组中文讲解音频（分段 MP3），可用于后续拼接、Remotion 视频、或直接挂到 learningMaterial

---

## 1. Why（为什么要做这个）

- 这节课是 Phase 2 的收尾，紧接 Phase 3: RAG — 承担"工具地图 → 下沉到 RAG 技术栈"的过渡。
- 原 learningMaterial 只是一张平铺工具清单，没有讲解。学员自学时拿不到"为什么选这个 / 什么场景用"的判断力。
- 音频版本可用于：
  - 嵌入 learningMaterial 作为"5 分钟快速过一遍"的播报
  - 将来做 Remotion 短视频的底层旁白
  - AI Tutor 引用时当作"讲解样本"

## 2. 讲课思路（我怎么讲这节课）

### 核心冲突

Lesson 的 `description` 聊的是**消费级工具**（ChatGPT / Claude / Sora / Suno…），而 `learningMaterial` 列的是**开发者技术栈**（LangChain / Pinecone / LangSmith…）。

两边看似矛盾，但对 AI Engineer 学员其实**都要覆盖**：

| 维度 | 消费级工具 | 开发者技术栈 |
|------|------------|---------------|
| 用法 | **用 AI** 提效自己 | **造 AI** 给别人用 |
| 例子 | 写 PRD 用 Claude、查资料用 Perplexity | 后端接 LLM API、向量库存知识 |
| 为什么都要 | 自己日常得用好，否则没资格造 | 造产品的技术选型 |

### 核心观点：按**场景**分类，不按**品牌**记

工具每周都在换品牌（今天 Cursor 明天 Windsurf），但**场景**是稳定的：
- 写长文 / 研究 / 代码 / 多模态 / 配音 — 这些 5 年不会变
- 学员脑子里只要有一张"场景地图"，新工具出来就知道放在哪个格子

### 讲课节奏（5 分钟 Information lesson 的黄金结构）

```
Hook(30s) → 消费级地图(90s) → Pivot(20s) → 开发者栈 4 层(2min) → 收尾+预告(30s)
```

- **Hook**：制造痛点 — "每周一个新工具，你不可能都学"
- **消费级地图**：按场景串，不按品牌列 — 写作 / 研究 / 代码 / 多模态
- **Pivot**：一句话切换视角 — "刚才是用 AI，接下来是造 AI"
- **开发者栈 4 层**：模型层 → 框架层 → 数据层 → 运维层 — 这就是 Phase 3 往后每节课要展开的
- **收尾**：核心原则一句话 + 预告 Phase 3 RAG

### 语气

- **像资深工程师跟新人在白板前聊**，不是念稿
- 每段开头用一句短句扣住注意力，然后用 1-2 个具体例子
- 避免"本章将深入探讨…"这种 AI 味开场（见 CLAUDE.md 的 Anti-Template 规则）

---

## 3. 脚本结构（8 段，目标总时长 4–5 分钟）

每段约 150–220 字中文，方便后期剪辑替换。

| id | 主题 | 目标时长 | 作用 |
|----|------|----------|------|
| `00-hook` | 工具泛滥的痛点 + 今天要给一张地图 | 25s | 引入 |
| `01-consumer-map` | 消费级工具按场景分类（写作 / 研究 / 代码 / 多模态 / 音频视频） | 55s | 覆盖 description 列的工具 |
| `02-pivot` | 从"用 AI" 切到 "造 AI" | 15s | 过渡 |
| `03-stack-llm` | 模型层：OpenAI / Anthropic / Gemini / DeepSeek 选型 | 40s | learningMaterial 第一块 |
| `04-stack-framework` | 框架层：LangChain / LlamaIndex / Haystack | 35s | learningMaterial 第二块 |
| `05-stack-vectordb` | 数据层：Pinecone / pgvector / Weaviate | 35s | learningMaterial 第三块 |
| `06-stack-ops` | 运维层：LangSmith / Langfuse / RAGAS / Bedrock | 35s | learningMaterial 第四+第五块 |
| `07-closing` | 核心原则收尾 + 预告 Phase 3 RAG | 25s | 收束 |

合计 ≈ 265s ≈ 4 分 25 秒。Information lesson 标 5 分钟，留一点 buffer 学员看文字内容。

---

## 4. Speaker 选型

**选 `jr-female-1`**（CosyVoice 2 · cross_lingual · 自带参考音）

理由：
1. 这节课有大量英文工具名（ChatGPT / Claude / LangChain / Pinecone / pgvector / RAGAS…），cross-lingual 对中英混读最自然
2. 是 JR Academy 所有项目的**默认女声**，保持品牌一致
3. 本地跑，无 API 成本，后续迭代方便

备选（如果想对比）：
- `nova`（OpenAI）— 英文发音更标准，但中文带洋味
- `shimmer`（OpenAI）— 更自然，但还是云服务

---

## 5. 输出规范

### 路径

```
tools/jr-tts/.tmp/ai-engineer-bootcamp/L52-genai-toolbox/
├── 00-hook.mp3
├── 01-consumer-map.mp3
├── 02-pivot.mp3
├── 03-stack-llm.mp3
├── 04-stack-framework.mp3
├── 05-stack-vectordb.mp3
├── 06-stack-ops.mp3
├── 07-closing.mp3
├── script.json          (生成命令输入)
└── result.json          (生成结果：每段实际时长)
```

`.tmp/` 在 jr-tts/.gitignore 里，不入 git。需要对外分发时再手动提出来。

### 格式

- MP3 · 单声道或立体声 · 由 provider 决定（CosyVoice 默认 22.05kHz）
- 文件名 = `{id}.mp3`，和 script.json 里的 id 严格一致

---

## 6. 执行流程

```bash
# Step 1: 写 script.json（8 段，下一步手动写内容）
#   → tools/jr-tts/.tmp/ai-engineer-bootcamp/L52-genai-toolbox/script.json

# Step 2: 先跑一段试听（jr-female-1 对这段文字效果如何）
cd tools/jr-tts
bun run gen \
  --speaker jr-female-1 \
  --text "<00-hook 的内容>" \
  --out .tmp/ai-engineer-bootcamp/L52-genai-toolbox/_audition.mp3

# Step 3: 听 _audition.mp3，调整语气/断句/长度，满意后批量跑全部 8 段
bun run gen \
  --speaker jr-female-1 \
  --script .tmp/ai-engineer-bootcamp/L52-genai-toolbox/script.json \
  --out .tmp/ai-engineer-bootcamp/L52-genai-toolbox/

# Step 4: 读 result.json 验收每段时长，看是否贴近 PRD 目标
```

---

## 7. 验收标准

- [ ] 8 个 MP3 文件全部生成成功，无失败段
- [ ] 总时长 4:00 – 5:30 之间
- [ ] 试听 `00-hook` + `01-consumer-map` 两段，确认：
  - 中英文切换自然（无明显顿挫）
  - 工具名发音正确（ChatGPT / Pinecone / LangChain）
  - 语气像讲解不像播报
- [ ] 脚本内容符合 CLAUDE.md Anti-Template 规则：
  - 没有"在当今…" / "本章将…" 这类开场
  - 每段至少一个具体例子（工具名 / 使用场景 / 选型判断）

## 8. 后续延伸（本 PRD 不覆盖）

- 将音频挂到 lesson learningMaterial（需要先确认平台是否支持 `<audio>` 标签）
- 基于本音频做一条 Remotion 短视频（参考 `curriculum/video-ai-engineer/`）
- 英文版（用 `jr-female-1` 跑英文脚本 or 换 `nova`）

---

**PRD 作者**: Claude (AI Engineer Bootcamp 第五期讲师视角)
**日期**: 2026-04-21
