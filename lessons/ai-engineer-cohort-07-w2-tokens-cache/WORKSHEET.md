# AI Engineer W2 · Tokens, Context Windows & Cache Efficiency · WORKSHEET

## 任务

用你自己的 Claude Code 或 Codex，量出一次请求的 token 构成，证明 prompt cache 生效，再故意让它失效并解释原因；最后用英文把结论讲清楚。

## 输入资料

- `lab/GUIDE.md`：全部命令和字段说明
- `lab/ttft.py`：TTFT 计时脚本（只用 Python 标准库）
- 一个空文件夹 `w2-lab/` 和一个你自己的真实项目

## 操作步骤

1. **Token Budget**：在 `w2-lab/` 开 Claude Code 跑 `/context`，记下占用最大的一层；用 `claude -p "Reply OK" --output-format json` 记下三个 input 字段。
2. **Context Governance**：在自己项目里跑 `/context`，做一处治理（关掉不用的 MCP server / 精简 CLAUDE.md / 把大量读文件交给 subagent），新会话再跑一次，记下差值。
3. **Prefill / Decode**：用 `ttft.py` 跑三组（小输入关 cache、大输入关 cache、大输入开 cache），每组 3 次取中位数。
4. **KV Cache**：让 agent 读 Qwen2.5-7B-Instruct 的 `config.json`，算 32K context、batch 8 的 KV 显存，并自己核对公式里每个数。
5. **Prefix Cache**：同一命令连跑两次，对比 creation / read；加 `--append-system-prompt "Current time: $(date +%s)"` 再跑两次；换 `--model` 跑一次；交互模式看 `/usage`。
6. **Response Cache**：让 agent 写 `faq_cache.py`，先只用问题文本做 key，复现跨 tenant 泄露，再改成带 tenant / role / 版本的 key。
7. **汇总**：用 `jq` 汇总 `runs.jsonl`，算 hit rate 和 tokens saved。

## 完成判据

- 能说清楚：总输入 = `input_tokens + cache_creation_input_tokens + cache_read_input_tokens`。
- 有一组 cold / warm 对照，第二次 `cache_read_input_tokens` 明显增加。
- 能指出至少 3 种会让 cache 失效的写法，并说出修法和监控字段。
- `faq_cache.py` 的 key 包含 tenant 和 role，B 公司拿不到 A 公司的数字。
- 4 道英文面试题都写过一版答案，并按 Mechanism → Evidence → Risk 改过一次。

## 独立迁移任务

拿你自己的一个 LLM 项目（或你常用的一段长 prompt），按第 5 步重做一次 cold / warm 对比：找出 prompt 里会变的部分，把它挪到稳定前缀之后，再测一次。

## 提交证据

- `runs.jsonl` 的 `jq` 汇总结果（hit rate、tokens saved）
- 治理前后两次 `/context` 截图
- 修好后的 `faq_cache.py` 的 cache key 代码片段
- 三句英文总结：你改了什么、数字怎么变、为什么
