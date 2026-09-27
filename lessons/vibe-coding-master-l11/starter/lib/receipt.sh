#!/usr/bin/env bash
# 读回执。契约见 task-brief.md 第 6 段。
# 只认三个状态：done / skipped / needs-human。
# 其它一律当 BAD_RECEIPT —— 契约被破坏了，比失败更值得报警。

receipt_status() {
  local f="$1"
  [ -s "$f" ] || { echo "NO_RECEIPT"; return; }
  python3 - "$f" <<'PY' 2>/dev/null || echo "BAD_RECEIPT"
import json, sys
try:
    d = json.load(open(sys.argv[1]))
except Exception:
    print("BAD_RECEIPT"); raise SystemExit(0)
s = d.get("status")
print(s if s in ("done", "skipped", "needs-human") else "BAD_RECEIPT")
PY
}

receipt_field() {
  local f="$1" key="$2"
  [ -s "$f" ] || { echo ""; return; }
  python3 - "$f" "$key" <<'PY' 2>/dev/null || echo ""
import json, sys
try:
    print(json.load(open(sys.argv[1])).get(sys.argv[2], "") or "")
except Exception:
    print("")
PY
}
