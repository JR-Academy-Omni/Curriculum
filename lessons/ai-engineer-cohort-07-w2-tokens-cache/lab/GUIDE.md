# W2 Lab · Tokens, Context Windows & Cache Efficiency

不需要 API key，用你已有的 **Claude Code** 或 **Codex** 就能做。

## 课前准备

1. Claude Code（建议 v2.1.260+；`claude --version` 查看）或 Codex CLI
2. `jq`（macOS：`brew install jq`）
3. Python 3（只用标准库）
4. 建一个空文件夹，把本目录里的 `ttft.py` 放进去：

```bash
mkdir w2-lab && cd w2-lab
```

## 命令速查表

所有 Claude Code 结果追加到 `runs.jsonl`，Codex 结果追加到 `runs-codex.jsonl`，M7 统一汇总。

| 模块 | 工具 | 命令 | 看什么 |
|---|---|---|---|
| M1 | Claude Code | `/context`（交互模式里输入） | 各层 token 占用 |
| M1 | Claude Code | `claude -p "Reply OK" --output-format json \| tee -a runs.jsonl \| jq .usage` | `input_tokens` · `cache_creation_input_tokens` · `cache_read_input_tokens` |
| M1 | Codex | `codex exec --json "Reply OK" \| grep turn.completed \| tee -a runs-codex.jsonl` | `input_tokens` · `cached_input_tokens` · `output_tokens` |
| M2 | Claude Code | 在自己的项目里 `/context`，改一处后重开会话再跑一次 | 占用最大的一项，前后差多少 |
| M3 | 终端 | `seq 1 20000 > big.txt` | 造一个大输入 |
| M3 | Claude Code | `DISABLE_PROMPT_CACHING=1 python3 ttft.py "Reply OK"` | 小输入 + 关 cache 的 TTFT |
| M3 | Claude Code | `cat big.txt \| DISABLE_PROMPT_CACHING=1 python3 ttft.py "Reply OK"` | 大输入 + 关 cache 的 TTFT |
| M3 | Claude Code | `cat big.txt \| python3 ttft.py "Reply OK"`（连跑两次） | 第二次 TTFT 是否回落 |
| M4 | 任一 | 让 agent 读 `https://huggingface.co/Qwen/Qwen2.5-7B-Instruct/raw/main/config.json` 并计算 KV Cache 大小 | 自己核对公式和数字 |
| M5 | Claude Code | 同 M1 的 `claude -p` 命令，连跑两次 | 第 1 次 creation 大，第 2 次 read 大 |
| M5 | Claude Code | `claude -p "Reply OK" --append-system-prompt "Current time: $(date +%s)" --output-format json \| jq .usage`（连跑两次） | read 是否下降 |
| M5 | Claude Code | `claude -p "Reply OK" --model sonnet --output-format json \| jq .usage` | 换模型后重新 creation |
| M5 | Claude Code | `claude -p "Reply OK" --output-format json \| jq .usage.cache_creation` | `ephemeral_1h_input_tokens` / `ephemeral_5m_input_tokens` |
| M5 | Claude Code | `/usage`（交互模式里输入） | `Prompt cache (main)`：命中率和失效原因 |
| M5 | Codex | `codex exec --json "Reply OK" \| grep turn.completed`（连跑两次） | `cached_input_tokens` 的变化 |
| M6 | 任一 | 让 agent 写 `faq_cache.py`（提示词见课件） | B 公司拿到了谁的数字 |
| M7 | 终端 | 见下方汇总命令 | hit rate、tokens saved |

M7 汇总（Claude Code）：

```bash
jq -s '[.[].usage | select(.)] | {runs: length, read: (map(.cache_read_input_tokens) | add), write: (map(.cache_creation_input_tokens) | add), uncached: (map(.input_tokens) | add)}' runs.jsonl
```

hit rate ≈ read ÷ (read + write + uncached)；tokens saved ≈ read。

## 注意

- 实验会消耗少量订阅额度，每条命令都只让模型回一个 "OK"
- `ttft.py` 的计时包含 CLI 启动时间，只比较组与组之间的差值；每组跑 3 次取中位数
- `total_cost_usd` 是 Claude Code 在本地估算的金额，不是账单
- Codex 命令参考官方 Non-interactive mode 文档，未在课程准备机上实测
