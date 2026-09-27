#!/usr/bin/env bash
# ════════════════════════════════════════════════════════════
#  它叫醒你之后：把答案送回去
#
#  用法：  ./resume.sh "你的答案"
#
#  ⚠️ 这只是【止血】。
#     它问你的每一个问题，都是任务书第 4 段「预答」没填干净的证据。
#     回答一次能让这次跑完；**把答案写进第 4 段，下次才不会再问。**
#     所以这个脚本每次都会把你的答案记进 ANSWER_LOG —— 别忘了搬过去。
# ════════════════════════════════════════════════════════════
set -uo pipefail

HERE="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
CONFIG="${WATCHDOG_CONFIG:-$HERE/config.env}"
[ -f "$CONFIG" ] || { echo "找不到配置：$CONFIG" >&2; exit 2; }
# shellcheck disable=SC1090
source "$CONFIG"
source "$HERE/lib/receipt.sh"

ANSWER="${1:-}"
if [ -z "$ANSWER" ]; then
  echo "用法：./resume.sh \"你的答案\"" >&2
  echo >&2
  if [ -s "${RECEIPT_PATH:-}" ]; then
    echo "它上次问的是：" >&2
    echo "  $(receipt_field "$RECEIPT_PATH" reason)" >&2
  fi
  exit 2
fi

# 先记账 —— 这一步比发出去更重要
ANSWER_LOG="${ANSWER_LOG:-$HOME/.local/state/agent-watchdog/answers.log}"
mkdir -p "$(dirname "$ANSWER_LOG")"
{
  printf '%s  [%s]\n' "$(date +%FT%T)" "${TASK_NAME:-task}"
  printf '  问：%s\n' "$(receipt_field "${RECEIPT_PATH:-/dev/null}" reason)"
  printf '  答：%s\n' "$ANSWER"
  printf '  → 记得把这条搬进 task-brief.md 第 4 段「预答」\n\n'
} >>"$ANSWER_LOG"

case "${RESUME_MODE:-manual}" in
  webhook)
    [ -n "${RESUME_WEBHOOK:-}" ] || { echo "RESUME_WEBHOOK 没设" >&2; exit 2; }
    [ -n "${RESUME_TOKEN:-}"   ] || { echo "RESUME_TOKEN 没设" >&2; exit 2; }
    hdr=(-H "Authorization: Bearer $RESUME_TOKEN" -H "Content-Type: application/json")
    for h in "${RESUME_EXTRA_HEADERS[@]:-}"; do [ -n "$h" ] && hdr+=(-H "$h"); done
    body="$(python3 -c 'import json,sys; print(json.dumps({"text": sys.argv[1]}))' "$ANSWER")"
    echo "→ 回灌中……"
    curl -sS -m 20 -X POST "$RESUME_WEBHOOK" "${hdr[@]}" -d "$body" && echo
    echo
    echo "⚠️ 提醒两件事："
    echo "   ① 任务书第 5 段必须写明「先读回灌内容」，否则它只当资料，不会用。"
    echo "   ② 这是止血。答案已记进 $ANSWER_LOG —— 把它搬进第 4 段才是治本。"
    ;;

  rerun)
    echo "→ 本地重跑（把答案作为环境变量传给 Agent）"
    echo "⚠️ 重跑前先确认这件事幂等（任务书第 7 段）。"
    RESUME_ANSWER="$ANSWER" bash "$HERE/watchdog.sh"
    ;;

  manual)
    echo "RESUME_MODE=manual —— 没有自动回灌。"
    echo
    echo "它问的是：$(receipt_field "${RECEIPT_PATH:-/dev/null}" reason)"
    echo "你答的是：$ANSWER"
    echo
    echo "答案已记进：$ANSWER_LOG"
    echo "接下来你自己选："
    echo "  · 把答案写进 task-brief.md 第 4 段，等下个周期（治本，推荐）"
    echo "  · 手动把剩下的做完"
    echo "  · 配好 RESUME_MODE=webhook / rerun 之后再来一次"
    ;;

  *)
    echo "未知 RESUME_MODE: $RESUME_MODE" >&2; exit 2 ;;
esac
