#!/usr/bin/env bash
# 会话续跑（只有本地 / 命令行通道能用）。
#
# 续跑 ≠ 重跑：
#   重跑 从头再来，要求幂等
#   续跑 从断的地方接着做，不要求幂等 ——
#        但它把上次的 context 一起拖过来，那正是 L6 说的稀释和污染。
#        所以要有上限。无限续跑 = 你在用一个越来越脏的 context 硬撑。

# 从 Agent 的结构化输出里捞会话 id，存起来。best-effort，捞不到就算了。
capture_session() {
  local json="$1" out="$2"
  [ -s "$json" ] || return 1
  local sid
  sid="$(python3 - "$json" <<'PY' 2>/dev/null
import json, sys
try:
    d = json.load(open(sys.argv[1]))
except Exception:
    # 也可能是 stream-json：一行一个对象，从后往前找
    d = None
    for line in reversed(open(sys.argv[1], encoding="utf-8").read().splitlines()):
        try:
            o = json.loads(line)
        except Exception:
            continue
        if isinstance(o, dict) and o.get("session_id"):
            d = o; break
if isinstance(d, dict) and d.get("session_id"):
    print(d["session_id"])
PY
)"
  [ -n "$sid" ] || return 1
  mkdir -p "$(dirname "$out")"
  printf '%s\n' "$sid" > "$out"
}

have_session() { [ -s "${1:-}" ]; }

# 把 AGENT_RESUME_CMD 里的 {{SESSION}} 换成真实会话 id
build_resume_cmd() {
  local sid="$1"; shift
  RESUME_CMD_BUILT=()
  local a
  for a in "$@"; do RESUME_CMD_BUILT+=("${a//\{\{SESSION\}\}/$sid}"); done
}
