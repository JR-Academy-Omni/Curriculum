# AI Engineer W2 · Tokens, Context Windows & Cache Efficiency · SOURCE_MAP

## 内容与资产来源

| 页码 / 资产 | 来源或本地路径 | 核验日期 | 事实 / 观点 | 权利与限制 |
|---|---|---|---|---|
| 4–5、9、23–25、32 · Claude Code 命令与参数（`-p`、`--output-format json / stream-json`、`--include-partial-messages`、`--append-system-prompt`、`--model`） | https://code.claude.com/docs/en/headless ；本机 Claude Code v2.1.278 `claude --help` | 2026-10-05 | 事实 | 官方文档，引用要点 |
| 8、12 · `/context` 分层、MCP tool search、skills 按需加载、subagent 独立 context | https://code.claude.com/docs/en/context-window | 2026-10-05 | 事实 | 同上；`/context` 分类名称以学员本机版本为准 |
| 5、25 · `/usage` 的 Prompt cache 行及版本要求（v2.1.251+ / v2.1.260+） | https://code.claude.com/docs/en/prompt-caching | 2026-10-05 | 事实 | 同上 |
| 24–26、30 · 会 / 不会让 cache 失效的操作、TTL 规则、CLAUDE.md 加载时机 | https://code.claude.com/docs/en/prompt-caching | 2026-10-05 | 事实 | 同上 |
| 26 · Claude Code 团队的缓存原则 | https://claude.com/blog/lessons-from-building-claude-code-prompt-caching-is-everything （Thariq Shihipar，2026-04-30） | 2026-10-05 | 事实（转述） | 只转述要点，不大段引用 |
| 9 · `total_cost_usd` 是本地估计值 | https://code.claude.com/docs/en/agent-sdk/cost-tracking | 2026-10-05 | 事实 | 同上 |
| 9–10 · Codex `turn.completed` 示例行（24763 / 24448 / 122） | https://learn.chatgpt.com/docs/non-interactive-mode | 2026-10-05 | 事实（官方示例数据） | 未在讲师机实测 Codex |
| 23、33 · Prompt caching 机制（前缀精确匹配、tools → system → messages） | https://platform.claude.com/docs/en/build-with-claude/prompt-caching | 2026-10-05 | 事实 | 官方文档 |
| 20–21 · Qwen2.5-7B-Instruct 配置（28 层、28 heads、4 KV heads、hidden 3584、bf16）及 KV 显存计算（0.44 / 7 / 14 GiB） | https://huggingface.co/Qwen/Qwen2.5-7B-Instruct/raw/main/config.json ；按公式计算 | 2026-10-05 | 事实（配置）+ 计算 | 公开模型配置 |
| 13 · lost-in-the-middle | Liu et al., *Lost in the Middle: How Language Models Use Long Contexts*, TACL 2023，https://arxiv.org/abs/2307.03172 | 2026-10-05 | 事实（研究结论） | 只引用结论 |
| 16 · TTFT 计时脚本 | `lab/ttft.py`（本课自写，只用 Python 标准库） | 2026-10-05 | — | 课程资产 |
| 29 · 租户与退款数字 | 演示用虚构数据，由学员让 agent 生成 | — | 虚构（已在讲师备注说明） | — |
| 33–36 · 英文面试题与参考答案 | `src/data/interview.ts`，依据上述官方文档整理 | 2026-10-06 | 观点（参考答案） | 课程资产 |
| 37 · 课后视频 | Karpathy、3Blue1Brown、Ready Tensor ×2、Umar Jamil、MLSys Singapore（YouTube oEmbed 核实标题与频道） | 2026-10-05 | — | 只核实了标题和频道，未逐个审看内容 |
| Logo | `public/logo-zh-full.svg`（模板随附官方 SVG） | 2026-10-06 | — | 不用生成模型绘制 |
| 字体 | Fontsource 本地包；license 见 `public/licenses/` | 2026-10-06 | — | 随构建复制 |
