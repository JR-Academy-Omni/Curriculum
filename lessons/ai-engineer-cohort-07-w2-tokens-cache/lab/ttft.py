"""W2 实验 M3：测一次 claude -p 调用的 TTFT 和总时间。

用法：
    python3 ttft.py "Reply OK"
    cat big.txt | python3 ttft.py "Reply OK"
    cat big.txt | DISABLE_PROMPT_CACHING=1 python3 ttft.py "Reply OK"

说明：
- 时间从启动 claude 进程开始算，包含 CLI 启动开销，所以只比较「组与组之间的差值」。
- TTFT 记的是第一段可见文字（text_delta）出现的时间；模型先思考再回答时，思考时间也算在里面。
- 每组至少跑 3 次，取中位数。
"""

import json
import subprocess
import sys
import time

prompt = sys.argv[1] if len(sys.argv) > 1 else "Reply OK"
cmd = [
    "claude", "-p", prompt,
    "--output-format", "stream-json",
    "--verbose",
    "--include-partial-messages",
]

# 有管道输入就原样转给 claude，没有就不给 stdin
stdin_data = None if sys.stdin.isatty() else sys.stdin.buffer.read()

start = time.monotonic()
proc = subprocess.Popen(
    cmd,
    stdin=subprocess.PIPE if stdin_data is not None else subprocess.DEVNULL,
    stdout=subprocess.PIPE,
)
if stdin_data is not None:
    proc.stdin.write(stdin_data)
    proc.stdin.close()

ttft = None
result = None
for raw in proc.stdout:
    try:
        event = json.loads(raw)
    except json.JSONDecodeError:
        continue
    if (
        ttft is None
        and event.get("type") == "stream_event"
        and (event.get("event") or {}).get("delta", {}).get("type") == "text_delta"
    ):
        ttft = time.monotonic() - start
    if event.get("type") == "result":
        result = event
proc.wait()
total = time.monotonic() - start

usage = (result or {}).get("usage", {})
row = {
    "ttft_s": round(ttft, 2) if ttft is not None else None,
    "total_s": round(total, 2),
    "duration_api_ms": (result or {}).get("duration_api_ms"),
    "input_tokens": usage.get("input_tokens"),
    "cache_creation_input_tokens": usage.get("cache_creation_input_tokens"),
    "cache_read_input_tokens": usage.get("cache_read_input_tokens"),
    "output_tokens": usage.get("output_tokens"),
}
print(json.dumps(row))
