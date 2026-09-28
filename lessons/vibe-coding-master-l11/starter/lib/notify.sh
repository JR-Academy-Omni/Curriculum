#!/usr/bin/env bash
# 报警通道。写日志不算报警 —— 你不会主动去翻日志。

notify() {
  local msg="$1"
  case "${NOTIFY_MODE:-print}" in
    print)
      printf '\n\033[1;31m[ALERT] %s\033[0m\n' "$msg" >&2
      ;;
    file)
      printf '%s  [%s] %s\n' "$(date +%FT%T)" "${TASK_NAME:-task}" "$msg" >>"${NOTIFY_FILE:?NOTIFY_FILE 没设}"
      ;;
    webhook)
      [ -n "${NOTIFY_WEBHOOK:-}" ] || { echo "NOTIFY_WEBHOOK 没设" >&2; return 1; }
      # 大多数 IM 机器人吃 {"text": "..."}；不是的话改这一行
      curl -sS -m 10 -X POST "$NOTIFY_WEBHOOK" \
        -H 'Content-Type: application/json' \
        -d "$(printf '{"text":%s}' "$(json_escape "[${TASK_NAME:-task}] $msg")")" >/dev/null
      ;;
    command)
      [ -n "${NOTIFY_COMMAND:-}" ] || { echo "NOTIFY_COMMAND 没设" >&2; return 1; }
      bash -c "$NOTIFY_COMMAND" _ "$msg"
      ;;
    *)
      echo "未知 NOTIFY_MODE: $NOTIFY_MODE" >&2; return 1 ;;
  esac
}

json_escape() {
  python3 -c 'import json,sys; print(json.dumps(sys.argv[1]))' "$1"
}
