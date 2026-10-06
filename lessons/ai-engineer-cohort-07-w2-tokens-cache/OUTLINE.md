# W2 · Tokens, Context Windows & Cache Efficiency — 课程大纲（草案 v3）

> 状态：课件已按本大纲做成，共 37 页（`src/App.tsx`）。讲课用中文，term 用英文；命令速查表在第 4–5 页，学生版在 `lab/README.md`。
> v3 改动：不用 API key，全部用学生已有的 **Claude Code / Codex** 做实验；去掉中英文 token 对比；案例换成真实的生产系统；按澳洲 AI Engineer 求职的需要组织面试题。

---

## 一句话目标

学完能用 **自己电脑上真实跑出来的数字** 回答两个问题，并且能**用英文**在面试里讲清楚：
1. 这次模型调用看到了什么？
2. 哪些计算没有必要重复做？

## 生产案例：Claude Code 和 Codex 本身

学生每天都在用的 coding agent，就是一个在生产环境里管理 context 和缓存的 LLM 系统：
- 每次请求都带着很长的 system prompt 和工具定义 → 典型的**稳定前缀**
- 会自动压缩历史（`/compact`）→ **context governance**
- 有跨会话的记忆（CLAUDE.md、auto memory）→ **Memory ≠ Cache**
- 官方专门写了一篇文档讲它怎么用 prompt caching、哪些操作会让缓存失效 → 现成的生产经验

老师和学生都能复现，不需要 API key，只需要 Claude Code 或 Codex 的登录状态。

## 课前准备（学生）

- 装好 Claude Code（建议 v2.1.260 以上，`/usage` 才会显示缓存命中率和失效原因）**或** Codex CLI
- 装好 `jq`（用来读 JSON 输出）
- 准备一个自己的代码仓库（任何项目都行），再建一个空文件夹 `w2-lab/`

> 实验会消耗少量订阅额度。每个实验都只发很短的提示词，比如 "Reply OK"。

---

## 节奏总览（90 分钟）

每个模块都按 **Test → Teach → Test** 走：先让学生**预测**数字 → 跑命令看真实结果 → 换一个情境再考。

| # | 模块 | 时长 | Claude Code 跑什么 | Codex 跑什么 |
|---|---|---|---|---|
| 0 | 开场 + 全课前测 | 5′ | — | — |
| 1 | Token Budget | 11′ | `/context` · `claude -p … --output-format json` | `codex exec --json` |
| 2 | Context Governance | 12′ | 在自己的仓库里跑 `/context`，治理后再量一次 | 同左（看 `input_tokens`） |
| 3 | Prefill / Decode | 12′ | `stream-json` 计时；`DISABLE_PROMPT_CACHING=1` 对照组 | 老师演示 |
| 4 | KV Cache | 10′ | 让 agent 读真实开源模型的 `config.json`，算显存 | 同左 |
| 5 | Prefix Cache（核心） | 18′ | 连跑两次 → 加时间戳打碎 → 换模型 → `/usage` | 连跑两次看 `cached_input_tokens` |
| 6 | Response Cache + Memory | 10′ | 让 agent 写一个应用层缓存，演示跨租户泄露再修好 | 同左 |
| 7 | 汇总 + 后测 + 英文面试练习 | 12′ | 汇总前面记下的 JSON | 同左 |

所有 `-p` / `exec` 的结果都追加写进 `runs.jsonl`，模块 7 统一汇总。

---

## 模块 0 · 开场 + 全课前测（5′）

全课前测共 5 题，模块 7 用原题再考一次：
1. 你在 Claude Code 里只打一个 "hi"，这次请求大概带了多少 input tokens？
2. 长 prompt 主要拖慢「第一个字出来」，还是「整段写完」？
3. 同一个请求连发两次，第二次为什么会更快、更便宜？要满足什么条件？
4. 在 system prompt 里加一个当前时间，会发生什么？
5. KV Cache、Prompt Cache、Response Cache、Memory，各自省的是什么？

---

## 模块 1 · Token Budget（11′）

**前测**：打开一个新的 Claude Code 会话，还没输入任何内容，context window 已经用掉多少？哪一项最大？

**讲 + 跑**
1. 在空文件夹 `w2-lab/` 里开 Claude Code，跑 `/context` → 看拆解：system prompt、system tools、MCP tools、memory files、skills、messages、free space、autocompact buffer
2. 只发一句话也有成本：
   ```bash
   claude -p "Reply OK" --output-format json | tee -a runs.jsonl | jq '.usage, .total_cost_usd'
   ```
   Codex：
   ```bash
   codex exec --json "Reply OK" | grep turn.completed | tee -a runs.jsonl
   ```
   对比两个工具「只回一个 OK」各自带了多少 input tokens
3. 输出也要占预算：autocompact buffer 本质上是给后面的输出和压缩**预留**的空间；回答写到一半撞上 `max_tokens` 会被截断
4. `total_cost_usd` 是 Claude Code 在本地按价格表算出来的**估计值**，不是账单（官方文档原话）

**后测**：读一行别人的 `usage` JSON，回答两件事：这次一共处理了多少 token（`input_tokens + cache_creation_input_tokens + cache_read_input_tokens`）？哪一部分最贵？

---

## 模块 2 · Context Governance（12′）

**前测**：在你自己的仓库里，你觉得是什么占 context 最多？CLAUDE.md、MCP 工具，还是读过的文件？

**讲 + 跑**
1. 在自己的仓库里跑 `/context`，找出占用最大的一项
2. Claude Code 自己做的治理，正好对应六条选择标准：
   - **information density**：MCP 工具默认只列名字，完整定义等到用的时候再加载（tool search）
   - **relevance**：skill 平时只放一行描述，被调用了才加载全文
   - **isolation**：subagent 有自己独立的 context，只把总结交回主对话
   - **recency**：`/compact` 用摘要替换旧历史
   - **permission**、**provenance**：不该看的内容，在进 context 之前就过滤掉
3. 动手：选一个改进（关掉一个用不上的 MCP server、精简 CLAUDE.md，或者把大量读文件的任务交给 subagent）→ 重新开会话，再跑一次 `/context`，比较前后数字
4. lost-in-the-middle（Liu et al. 2023，TACL）：信息放在长 context 中间时，模型更容易用不上 → 窗口大不等于全放进去。**只讲结论和出处，不现场复现**
5. 和 W3 的边界：这里只讲「选什么」；怎么组装 Context Builder 留到 W3

**后测**：同学 A 的 `/context` 里 MCP tools 占了很大一块，同学 B 是 messages 占大头。分别给一条改进建议，并说出依据的是哪条标准。

---

## 模块 3 · Prefill / Decode（12′）

**前测**：往 agent 里塞一个很大的文件，只让它回一个 "OK"。会变慢吗？慢在哪个阶段？

**讲 + 跑**（Claude Code；Codex 学生看老师演示）
1. 计时 TTFT：用 `stream-json` 记下第一段文字出现的时间，和最后的总时间
   ```bash
   claude -p "Reply OK" --output-format stream-json --verbose --include-partial-messages
   ```
2. 对照组：
   - 关掉缓存：`DISABLE_PROMPT_CACHING=1`
   - 输入从「一句话」换成「通过管道塞进一个大文件」：`cat big.log | claude -p "Reply OK"`
   - 比较 TTFT 和总时间：两组都只输出一个 OK，差出来的时间基本就是 prefill
3. 结论：
   - 输入长度主要影响 TTFT（prefill）
   - 输出长度主要影响总时间（decode，每次生成一个 token）
   - 每组多跑几次，看中位数，不要只看一次
4. 再看 `duration_ms` 和 `duration_api_ms` 这两个字段的区别：一个是总耗时，一个是花在等模型 API 上的时间

**后测**：用户抱怨「点发送后很久才出字」和「回答写得很慢」，分别先看哪个指标、改哪里？

---

## 模块 4 · KV Cache（10′）

**前测**：生成第 100 个 token 时，要不要把前 99 个 token 的 attention 全部重算一遍？

**讲 + 跑**
1. KV Cache 把每一层已经算过的 Key / Value 存起来，下一步只算新 token
2. 坦白讲清楚：**云端的 Claude / Codex 看不到 KV Cache**，它是服务端内部的事
3. 动手：让 agent 去 Hugging Face 读一个真实开源模型的 `config.json`（例如 Qwen2.5-7B-Instruct），按 `2 × 层数 × KV heads × head_dim × 序列长度 × batch × 字节数` 算出 32K context、batch 8 时要多少显存。学生要**自己核对** agent 算的对不对
4. 改序列长度和 batch，看显存怎么涨 → 引出 GQA、PagedAttention（vLLM）
5. 两个「不是」：KV Cache 不会让错误的 context 变正确；它也不是长期 Memory
6. 衔接：Prefix Cache 本质上就是把**相同前缀的 KV** 留给下一个请求用

**后测**：并发从 1 增加到 32、context 从 8K 增加到 128K，KV 显存分别变成原来的几倍？

---

## 模块 5 · Prefix Cache（18′）—— 核心实验

**前测**：同一条命令连跑两次，`cache_read_input_tokens` 分别是多少？如果在 system prompt 里加一个当前时间呢？

**讲 + 跑**
1. **Cold → Warm**：在 `w2-lab/` 里连跑两次
   ```bash
   claude -p "Reply OK" --output-format json | tee -a runs.jsonl | jq '.usage | {input_tokens, cache_creation_input_tokens, cache_read_input_tokens}'
   ```
   - 第 1 次：`cache_creation_input_tokens` 很大
   - 第 2 次：`cache_read_input_tokens` 很大
   - Codex 学生：连跑两次 `codex exec --json`，看 `cached_input_tokens`
2. **打碎它**：加一段每次都会变的系统指令
   ```bash
   claude -p "Reply OK" --append-system-prompt "Current time: $(date +%s)" --output-format json | jq '.usage'
   ```
   连跑两次，第二次的 read 明显变少 → 缓存是**前缀逐字节精确匹配**，中间任何一处变了，后面的全部作废
3. **换模型**：`--model sonnet` 和 `--model opus` 各跑一次 → 每个模型有自己的缓存
4. **TTL**：看 `usage.cache_creation` 里的 `ephemeral_1h_input_tokens` 和 `ephemeral_5m_input_tokens` → 订阅用户的主对话默认 1 小时 TTL，API key 用户默认 5 分钟（官方文档）
5. **交互模式**：开一个会话，聊两轮后跑 `/usage`，看 `Prompt cache (main)` 那一行（命中率，加上一次没命中的可能原因）→ 然后 `/model` 换模型再聊一句，再跑一次 `/usage`
6. **生产经验**：一起读 Claude Code 官方的 *How Claude Code uses prompt caching*
   - 会让缓存失效的操作：换模型、调 effort（多数模型）、增删 MCP server、`/compact`、升级 Claude Code
   - 不会让缓存失效的操作：改仓库里的文件、会话中途改 CLAUDE.md（要等 `/clear` 之后才生效）、切换 permission mode、调用 skill

**后测**：给一段「每次请求都在 system prompt 开头拼上 user name 和时间」的代码，说出问题在哪、怎么改，以及上线后用哪个字段监控。

---

## 模块 6 · Response Cache + Memory（10′）

**前测**：A 公司的管理员问过「本季度退款总额」，B 公司的员工问了同样的问题，能直接把缓存的答案给他吗？

**讲 + 跑**
1. 让 Claude Code 或 Codex 写一个 `faq_cache.py`：用 `claude -p`（或 `codex exec`）当 LLM 后端，外面包一层 Python dict 当 Response Cache
2. 第一版 key 只用「问题文本」→ 用两个 tenant 跑一遍，演示**跨租户泄露**
3. 修复 key：`hash(model, prompt_version, tenant, role, language, 规范化后的问题)`；再演示 TTL 和主动失效
4. 红线：不缓存 Secrets；不缓存不必要的 PII；semantic cache 的相似度阈值必须拿真实问题来测
5. **Memory ≠ Cache**，用 Claude Code 自己当例子：
   - CLAUDE.md 和 auto memory 是按规则挑选、跨会话读回的信息
   - 它们在会话开始时被读进 context，所以中途修改要等 `/clear` 之后才生效
   - 读进来以后，就和其他 context 一样要经过治理

**后测**：4 个场景判断能不能缓存、key 里必须带什么：公开 FAQ、个人工资、实时库存、被投诉答错的答案。

---

## 模块 7 · 汇总 + 后测 + 英文面试练习（12′）

- **跑**：让 agent 读 `runs.jsonl`，算出 hit rate、tokens saved（约等于 `cache_read_input_tokens`）、cold 和 warm 的 `total_cost_usd` 对比
- **全课后测**：模块 0 的 5 题原题再答一次
- **英文面试练习（一题一页，共 4 题）**：学生先在对话框里用英文写下自己的答案，再点开参考答案对照
  1. *What's the difference between the KV cache and prompt caching?*
  2. *Every request to our support bot includes the same long policy document. How would you reduce cost and latency?*
  3. *After last week's release, our prompt-cache hit rate dropped to almost zero. How would you debug it?*
  4. *Would you cache full LLM responses in a multi-tenant SaaS product?*

---

## 课后资料（链接都已核实存在）

**生产一手资料（最推荐）**
- Claude Code 官方文档：[How Claude Code uses prompt caching](https://code.claude.com/docs/en/prompt-caching) · [Explore the context window](https://code.claude.com/docs/en/context-window) · [Run Claude Code programmatically](https://code.claude.com/docs/en/headless)
- Anthropic 博客：[Lessons from building Claude Code: Prompt caching is everything](https://claude.com/blog/lessons-from-building-claude-code-prompt-caching-is-everything)（Thariq Shihipar，2026 年 4 月）
- Codex 文档：[Non-interactive mode](https://learn.chatgpt.com/docs/non-interactive-mode)（`codex exec --json` 的 usage 字段）
- Anthropic API 文档：[Prompt caching](https://platform.claude.com/docs/en/build-with-claude/prompt-caching)

**视频**

| 主题 | 视频 | 频道 |
|---|---|---|
| Tokenizer | [Let's build the GPT Tokenizer](https://www.youtube.com/watch?v=zduSFxRajkE) | Andrej Karpathy |
| Attention | [Attention in transformers, step-by-step](https://www.youtube.com/watch?v=eMlx5fFNoYc) | 3Blue1Brown |
| Prefill vs Decode | [LLM Inference Explained: Prefill vs Decode](https://www.youtube.com/watch?v=HRKFa8LIAQg) | Ready Tensor |
| KV Cache | [KV Cache Explained](https://www.youtube.com/watch?v=hafEw3bEu8E) | Ready Tensor |
| KV Cache + GQA | [LLaMA explained: KV-Cache, RoPE, GQA…](https://www.youtube.com/watch?v=Mn_9W1nCFLo) | Umar Jamil |
| vLLM / PagedAttention | [Fast LLM Serving with vLLM and PagedAttention](https://www.youtube.com/watch?v=Oq2SN7uutbQ) | MLSys Singapore |

**论文**：[Lost in the Middle（arXiv 2307.03172）](https://arxiv.org/abs/2307.03172)

> 视频只核实了标题和频道，内容没有逐个看完；Ready Tensor 的两个建议你先快速看一下质量。

---

## 课件结构（大纲确认后再做）

约 22–25 页：每个模块固定 3 页（前测 → 命令 + 真实输出 → 后测），加上开场、汇总和课后资料。页面上放**真实的命令和老师自己跑出来的输出截图**，不放示意数字。配套交付 `w2-lab/` 实验手册（README + 命令清单）。
