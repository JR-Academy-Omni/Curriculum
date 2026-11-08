#!/usr/bin/env bash
# 本机跑一个阶段（实验 2 用）。用你已登录的 Codex，不需要 API key。
# 用法：bash scripts/run-local.sh topic-radar
set -euo pipefail
cd "$(dirname "$0")/.."
STAGE="$1"; DATE="${2:-$(python3 scripts/pipeline.py today)}"
RUN=$(python3 scripts/pipeline.py gate "$STAGE" "$DATE" | tail -1)
if [ "$RUN" != "run=true" ]; then python3 scripts/pipeline.py check "$STAGE" "$DATE"; exit 0; fi
python3 scripts/pipeline.py prompt "$STAGE" "$DATE" > /dev/null
codex exec --sandbox workspace-write - < .autopilot/prompt.md
python3 scripts/pipeline.py check "$STAGE" "$DATE"
python3 scripts/pipeline.py digest "$DATE"
