#!/usr/bin/env bash
# ════════════════════════════════════════════════════════════
#  无人值守看门狗
#  配合任务书 B 块：第 6 段「回执契约」/ 第 7 段「重跑规则」
#
#  ★ 这个文件不用改。要改的都在 config.env。★
#
#  设计上的八条规矩（每一处「看起来多余」的写法都对应一条）：
#   ① 跑之前先删旧回执 —— 不删，断在半路时你读到的是上次那份 done
#   ② 超时在这一层，不指望 Agent 自己退
#   ③ 不用 set -e —— Agent 非零退出是正常情况之一，先读回执再决定
#   ④ 退出码只当参考，以回执为准（绿灯不等于成功）
#   ⑤ 「没有回执」是独立的报警分支，不是 else 兜底
#   ⑥ 重试要有上限 + 退避，且只在幂等安全时
#   ⑦ 报警要能到人，写日志不算报警
#   ⑧ 调度别挑整点
# ════════════════════════════════════════════════════════════
set -uo pipefail          # 故意不加 -e，见 ③

HERE="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
CONFIG="${WATCHDOG_CONFIG:-$HERE/config.env}"

[ -f "$CONFIG" ] || { echo "找不到配置：$CONFIG" >&2; exit 2; }
# shellcheck disable=SC1090
source "$CONFIG"
source "$HERE/lib/receipt.sh"
source "$HERE/lib/notify.sh"
source "$HERE/lib/report.sh"
source "$HERE/lib/session.sh"

: "${TASK_NAME:?config.env 里 TASK_NAME 没设}"
: "${WORKDIR:?config.env 里 WORKDIR 没设}"
: "${RECEIPT_PATH:?config.env 里 RECEIPT_PATH 没设}"
TIMEOUT_S="${TIMEOUT_S:-900}"
MAX_RETRY="${MAX_RETRY:-0}"
BACKOFF_S="${BACKOFF_S:-600}"

if [ "${#AGENT_CMD[@]}" -eq 0 ]; then
  echo "config.env 里 AGENT_CMD 没填 —— 拒绝运行。" >&2
  echo "不填就跑，等于跑了个空壳还给你个绿灯。" >&2
  exit 2
fi

LOGDIR="${LOGDIR:-$HOME/.local/state/agent-watchdog/$TASK_NAME}"
mkdir -p "$LOGDIR"
LOG="$LOGDIR/$(date +%F).log"

log()   { printf '%s  %s\n' "$(date +%FT%T)" "$*" >>"$LOG"; }
alert() { log "ALERT: $*"; notify "$*"; }

# ── 可移植的超时：Linux 有 timeout，macOS 装了 coreutils 才有 gtimeout ──
run_with_timeout() {
  local secs="$1"; shift
  if command -v timeout >/dev/null 2>&1; then
    timeout --signal=INT "$secs" "$@"
  elif command -v gtimeout >/dev/null 2>&1; then
    gtimeout --signal=INT "$secs" "$@"
  else
    # 都没有就自己实现：后台跑 + 看门计时
    "$@" & local pid=$!
    ( sleep "$secs"; kill -INT "$pid" 2>/dev/null ) & local killer=$!
    wait "$pid"; local rc=$?
    kill "$killer" 2>/dev/null; wait "$killer" 2>/dev/null
    return $rc
  fi
}

# 跑一次。$1 非空表示这是「续跑」，用 AGENT_RESUME_CMD。
run_once() {
  rm -f "$RECEIPT_PATH"                    # ① 先删旧回执
  mkdir -p "$(dirname "$RECEIPT_PATH")"
  cd "$WORKDIR" || return 127
  local rc
  if [ -n "${1:-}" ]; then
    run_with_timeout "$TIMEOUT_S" "${RESUME_CMD_BUILT[@]}" >>"$LOG" 2>&1
  else
    run_with_timeout "$TIMEOUT_S" "${AGENT_CMD[@]}" >>"$LOG" 2>&1   # ②
  fi
  rc=$?
  # 顺手把会话 id 存下来，断了才有得续（best-effort）
  [ -n "${AGENT_JSON_OUT:-}" ] && capture_session "$AGENT_JSON_OUT" "${SESSION_FILE:-}" || true
  return $rc                               # ③④ 只当参考
}

log "=== $TASK_NAME 开始 (timeout=${TIMEOUT_S}s max_retry=${MAX_RETRY}) ==="

attempt=0
continued=0
next_mode=""            # 非空 = 这一轮走「续跑」，不是从头重来
while :; do
  if [ -z "$next_mode" ]; then
    attempt=$((attempt + 1))
    log "attempt $attempt / $((MAX_RETRY + 1))"
  fi

  run_once "$next_mode"; exit_code=$?
  next_mode=""
  status="$(receipt_status "$RECEIPT_PATH")"
  log "exit_code=$exit_code status=$status"

  case "$status" in
    done)
      log "OK"
      rm -f "${SESSION_FILE:-}" 2>/dev/null || true   # 成功了就把会话 id 清掉，别留给下一周期
      # 就算成功也把报告落进日志 —— 「它替我做了哪些决定」只有这里能查到
      digest="$(receipt_digest "$RECEIPT_PATH")"
      printf '%s\n' "$digest" >>"$LOG"
      # 它自己都没把握的决定，成功也要叫你一声
      if printf '%s' "$digest" | grep -q '也没把握'; then
        alert "跑完了，但它有拿不准的决定 —— 去看一眼：

$digest"
      fi
      exit 0
      ;;

    needs-human)
      # 这不是失败，是它按约定停下了 —— 但你必须知道
      alert "需要你拍板：$(receipt_field "$RECEIPT_PATH" reason)

$(receipt_digest "$RECEIPT_PATH")

回答：  $HERE/resume.sh \"你的答案\"
（这是止血。要治本，把答案写进任务书第 4 段）"
      exit 0
      ;;

    skipped)
      reason="$(receipt_field "$RECEIPT_PATH" reason)"
      log "SKIPPED  reason=$reason"
      if [ "$MAX_RETRY" -eq 0 ]; then
        log "第 7 段判定不安全（MAX_RETRY=0），不重试"
        exit 0
      fi
      if [ "$attempt" -gt "$MAX_RETRY" ]; then
        alert "重试 $MAX_RETRY 次仍未完成：$reason

$(receipt_digest "$RECEIPT_PATH")"
        exit 1
      fi
      log "退避 ${BACKOFF_S}s 后重试"
      sleep "$BACKOFF_S"                   # ⑥
      ;;

    NO_RECEIPT)
      # ⑤ 最重要的一支：五种断法全都走这里
      #
      # 本地 / 命令行通道可以【续跑】：不是从头重来，是把上次那个会话拉回来接着做。
      # ⚠️ 续跑不要求幂等（它接着做），但它把上次的 context 一起拖过来 ——
      #    那正是 L6 说的稀释和污染，所以必须有上限。
      if [ "${CONTINUE_ON_BREAK:-0}" = "1" ] \
         && [ "${#AGENT_RESUME_CMD[@]}" -gt 0 ] \
         && have_session "${SESSION_FILE:-}"; then
        continued=$((continued + 1))
        if [ "$continued" -le "${MAX_CONTINUE:-2}" ]; then
          sid="$(cat "$SESSION_FILE")"
          log "没有回执 —— 尝试续跑 $continued/${MAX_CONTINUE:-2} · 会话 $sid"
          build_resume_cmd "$sid" "${AGENT_RESUME_CMD[@]}"
          next_mode="resume"                # 下一圈走续跑，不是从头重来
          continue
        fi
        alert "续跑 ${MAX_CONTINUE:-2} 次仍然没有回执 —— 别再续了。
上次的 context 已经被拖脏了，接下来要么重跑（先确认幂等），要么你自己接手。
日志：$LOG"
        exit 1
      fi
      alert "没有回执（exit_code=${exit_code}）—— 多半断在半路。去看 $LOG"
      exit 1
      ;;

    BAD_RECEIPT|*)
      alert "回执坏了或状态不认识（exit_code=${exit_code}）—— 契约被破坏了。
文件里是这些：$(head -c 200 "$RECEIPT_PATH" 2>/dev/null || echo '(读不出来)')"
      exit 1
      ;;
  esac
done
