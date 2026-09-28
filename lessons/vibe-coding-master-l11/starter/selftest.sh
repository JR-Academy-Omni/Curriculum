#!/usr/bin/env bash
# ════════════════════════════════════════════════════════════
#  自检：不跑真 Agent，用假回执把看门狗的每一支都走一遍。
#
#  为什么值得跑：
#   · 你不用等一次真的凌晨三点故障，就能知道契约写对没有
#   · 作业第 2 条「故意让它断一次」，第 5、7、8 号用例就是它
#
#  用法：  ./selftest.sh
#  它不碰你的 config.env，全程在临时目录里。
# ════════════════════════════════════════════════════════════
set -uo pipefail

HERE="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

pass=0; fail=0
ok()   { printf '  \033[32m✓\033[0m %s\n' "$1"; pass=$((pass+1)); }
bad()  { printf '  \033[31m✗\033[0m %s\n     期望 %s，实际 %s\n' "$1" "$2" "$3"; fail=$((fail+1)); }

# ── 假 Agent：按 STUB 环境变量决定这次「跑成什么样」 ──────
cat > "$TMP/stub-agent.sh" <<'STUB'
#!/usr/bin/env bash
R="$RECEIPT_PATH"
mkdir -p "$(dirname "$R")"
case "$STUB" in
  done)        echo '{"status":"done","evidence":"计数 14 == 14","artifact":"x.md"}' > "$R" ;;
  needs)       echo '{"status":"needs-human","reason":"两个 PR 分不清归哪类"}' > "$R" ;;
  skipped)     echo '{"status":"skipped","reason":"上游数据还没到"}' > "$R" ;;
  garbage)     echo 'Done! I have completed the task.' > "$R" ;;
  wrongstatus) echo '{"status":"success"}' > "$R" ;;
  silent)      : ;;                       # 什么都不写 —— 模拟断在半路
  hang)        sleep 30 ;;                # 模拟卡住
  crash)       exit 1 ;;                  # 非零退出且没写回执
esac
STUB
chmod +x "$TMP/stub-agent.sh"

# ── 造一份临时 config ────────────────────────────────────
make_config() {   # $1=MAX_RETRY  $2=TIMEOUT_S
  cat > "$TMP/config.env" <<CFG
TASK_NAME="selftest"
WORKDIR="$TMP"
RECEIPT_PATH="$TMP/receipt.json"
AGENT_CMD=("$TMP/stub-agent.sh")
TIMEOUT_S=${2:-20}
MAX_RETRY=${1:-0}
BACKOFF_S=0
NOTIFY_MODE="file"
NOTIFY_FILE="$TMP/alerts.log"
LOGDIR="$TMP/logs"
CFG
}

run_case() {      # $1=STUB  $2=MAX_RETRY  $3=TIMEOUT_S
  make_config "${2:-0}" "${3:-20}"
  : > "$TMP/alerts.log"
  STUB="$1" RECEIPT_PATH="$TMP/receipt.json" \
    WATCHDOG_CONFIG="$TMP/config.env" bash "$HERE/watchdog.sh" >/dev/null 2>&1
  echo $?
}
alerts() { cat "$TMP/alerts.log" 2>/dev/null; }

echo
echo "看门狗自检 —— 每一支都走一遍"
echo

# 1
rc=$(run_case done)
[ "$rc" = 0 ] && [ -z "$(alerts)" ] && ok "done → 退出 0，不报警" || bad "done" "0 且无报警" "$rc / $(alerts)"

# 2
rc=$(run_case needs)
{ [ "$rc" = 0 ] && alerts | grep -q "需要你拍板"; } \
  && ok "needs-human → 退出 0，但报警叫人" || bad "needs-human" "0 且报警" "$rc / $(alerts)"

# 3
rc=$(run_case skipped 0)
{ [ "$rc" = 0 ] && [ -z "$(alerts)" ]; } \
  && ok "skipped + MAX_RETRY=0 → 不重试，不报警" || bad "skipped/0" "0 且无报警" "$rc / $(alerts)"

# 4
rc=$(run_case skipped 1)
{ [ "$rc" = 1 ] && alerts | grep -q "重试 1 次仍未完成"; } \
  && ok "skipped + MAX_RETRY=1 → 重试后仍不成，报警" || bad "skipped/1" "1 且报警" "$rc / $(alerts)"

# 5 ★
rc=$(run_case silent)
{ [ "$rc" = 1 ] && alerts | grep -q "没有回执"; } \
  && ok "什么都没写 → 报「没有回执」  ★ 五种断法全走这支" || bad "silent" "1 且报没有回执" "$rc / $(alerts)"

# 6
rc=$(run_case garbage)
{ [ "$rc" = 1 ] && alerts | grep -q "回执坏了"; } \
  && ok "回执不是 JSON → 报「回执坏了」" || bad "garbage" "1 且报回执坏了" "$rc / $(alerts)"

# 7
rc=$(run_case wrongstatus)
{ [ "$rc" = 1 ] && alerts | grep -q "回执坏了"; } \
  && ok "状态写成 success（不在三值内）→ 当契约破坏处理" || bad "wrongstatus" "1 且报回执坏了" "$rc / $(alerts)"

# 8 ★★ 全套最重要的一个
make_config 0 20
echo '{"status":"done","evidence":"上周那次"}' > "$TMP/receipt.json"   # 上次留下的旧回执
: > "$TMP/alerts.log"
STUB="silent" RECEIPT_PATH="$TMP/receipt.json" \
  WATCHDOG_CONFIG="$TMP/config.env" bash "$HERE/watchdog.sh" >/dev/null 2>&1
rc=$?
{ [ "$rc" = 1 ] && alerts | grep -q "没有回执"; } \
  && ok "上次留了 done、这次没写 → 仍报「没有回执」  ★★ 证明旧回执被删了" \
  || bad "旧回执污染" "1 且报没有回执" "$rc / $(alerts)"

# 9
rc=$(run_case hang 0 1)
{ [ "$rc" = 1 ] && alerts | grep -q "没有回执"; } \
  && ok "卡住 → 超时掐断 → 报「没有回执」" || bad "hang" "1 且报没有回执" "$rc / $(alerts)"

# 10
rc=$(run_case crash)
{ [ "$rc" = 1 ] && alerts | grep -q "没有回执"; } \
  && ok "非零退出且没写回执 → 报「没有回执」" || bad "crash" "1 且报没有回执" "$rc / $(alerts)"

# 11 ★ 报告字段：低置信决策要主动叫人（哪怕 status=done）
cat > "$TMP/stub-rich.sh" <<'STUB'
#!/usr/bin/env bash
mkdir -p "$(dirname "$RECEIPT_PATH")"
cat > "$RECEIPT_PATH" <<'J'
{"status":"done",
 "progress":{"done":7,"total":7,"last_step":"写周报"},
 "files_changed":[{"path":"reports/w35.md","action":"created","lines":"+142 -0"}],
 "decisions":[{"what":"跳过 #491","why":"任务书没说机器人 PR 算不算","confidence":"low"}],
 "tests":{"ran":true,"command":"npm test","passed":12,"failed":0},
 "evidence":"计数 14 == 14"}
J
STUB
chmod +x "$TMP/stub-rich.sh"
make_config 0 20
sed -i.bak "s|stub-agent.sh|stub-rich.sh|" "$TMP/config.env"
: > "$TMP/alerts.log"
RECEIPT_PATH="$TMP/receipt.json" WATCHDOG_CONFIG="$TMP/config.env" bash "$HERE/watchdog.sh" >/dev/null 2>&1
rc=$?
{ [ "$rc" = 0 ] && alerts | grep -q "拿不准的决定" && alerts | grep -q "跳过 #491"; } \
  && ok "done 但有低置信决策 → 仍然叫你，且报告里带上原因  ★" \
  || bad "低置信决策" "0 且报警含决策" "$rc / $(alerts | head -3)"

# 12 报告 digest 六项齐全
d=$(source "$HERE/lib/report.sh"; receipt_digest "$HERE/receipt.example.json")
miss=""
for k in "进度" "停在" "为什么停" "改了文件" "出错" "替你做了" "因为：" "测试" "证据"; do
  printf '%s' "$d" | grep -q "$k" || miss="$miss $k"
done
[ -z "$miss" ] && ok "报告 digest 六项齐全（进度/文件/错误/决策/原因/测试）" \
               || bad "digest 字段" "全齐" "缺:$miss"

# 13 needs-human 的报警里必须带「怎么回答」
rc=$(run_case needs)
alerts | grep -q "resume.sh" \
  && ok "needs-human 报警里带了恢复入口（半夜不用再翻文档）" \
  || bad "恢复入口" "报警含 resume.sh" "$(alerts | head -2)"

# 14 ★ resume.sh 必须先记账再发 —— 记账那步比发出去更重要
make_config 0 20
cat >> "$TMP/config.env" <<CFG
RESUME_MODE="manual"
ANSWER_LOG="$TMP/answers.log"
CFG
echo '{"status":"needs-human","reason":"机器人 PR 算不算？"}' > "$TMP/receipt.json"
: > "$TMP/answers.log"
WATCHDOG_CONFIG="$TMP/config.env" bash "$HERE/resume.sh" "算，单独归一类" >/dev/null 2>&1
{ grep -q "机器人 PR 算不算" "$TMP/answers.log" \
  && grep -q "算，单独归一类" "$TMP/answers.log" \
  && grep -q "第 4 段" "$TMP/answers.log"; } \
  && ok "resume.sh 记下「问+答」，并提醒搬进第 4 段  ★ 止血 vs 治本" \
  || bad "resume 记账" "问答都记下且提醒" "$(cat "$TMP/answers.log" 2>/dev/null | head -3)"

# 15 resume.sh 不给答案时要提示它问了什么，而不是静默失败
out=$(WATCHDOG_CONFIG="$TMP/config.env" bash "$HERE/resume.sh" 2>&1); rc=$?
{ [ "$rc" = 2 ] && printf '%s' "$out" | grep -q "机器人 PR 算不算"; } \
  && ok "resume.sh 空参数 → 退出 2，并回显它上次问的是什么" \
  || bad "resume 空参数" "2 且回显问题" "$rc / $out"

# 16 ★ 续跑：第一次断了，把会话拉回来接着做 → 成功
cat > "$TMP/stub-resume-ok.sh" <<'STUB'
#!/usr/bin/env bash
mkdir -p "$(dirname "$RECEIPT_PATH")"
echo '{"status":"done","evidence":"续跑后补齐"}' > "$RECEIPT_PATH"
STUB
chmod +x "$TMP/stub-resume-ok.sh"
make_config 0 20
cat >> "$TMP/config.env" <<CFG
CONTINUE_ON_BREAK=1
MAX_CONTINUE=2
SESSION_FILE="$TMP/session_id"
AGENT_RESUME_CMD=("$TMP/stub-resume-ok.sh")
CFG
echo "sess_abc123" > "$TMP/session_id"
: > "$TMP/alerts.log"
STUB="silent" RECEIPT_PATH="$TMP/receipt.json" \
  WATCHDOG_CONFIG="$TMP/config.env" bash "$HERE/watchdog.sh" >/dev/null 2>&1
rc=$?
{ [ "$rc" = 0 ] && [ -z "$(alerts)" ] && [ ! -f "$TMP/session_id" ]; } \
  && ok "断了 → 续跑一次成功 → 退出 0，且会话 id 被清掉  ★ 续跑≠重跑" \
  || bad "续跑成功" "0 · 无报警 · session 已清" "$rc / $(alerts | head -1) / session存在=$([ -f "$TMP/session_id" ] && echo y || echo n)"

# 17 ★★ 续跑有上限 —— 无限续 = 你在用一个越来越脏的 context 硬撑
make_config 0 20
cat >> "$TMP/config.env" <<CFG
CONTINUE_ON_BREAK=1
MAX_CONTINUE=2
SESSION_FILE="$TMP/session_id"
AGENT_RESUME_CMD=("$TMP/stub-agent.sh")
CFG
echo "sess_abc123" > "$TMP/session_id"
: > "$TMP/alerts.log"
STUB="silent" RECEIPT_PATH="$TMP/receipt.json" \
  WATCHDOG_CONFIG="$TMP/config.env" bash "$HERE/watchdog.sh" >/dev/null 2>&1
rc=$?
{ [ "$rc" = 1 ] && alerts | grep -q "别再续了"; } \
  && ok "续跑到上限仍没回执 → 停下报警，不无限续  ★★ context 已经拖脏了" \
  || bad "续跑上限" "1 且报别再续了" "$rc / $(alerts | head -2)"

# 18 默认不开续跑：CONTINUE_ON_BREAK 缺省时行为不变
rc=$(run_case silent)
{ [ "$rc" = 1 ] && alerts | grep -q "没有回执" && ! alerts | grep -q "续跑"; } \
  && ok "默认不开续跑 → 行为和以前一样（没有回执就报警）" \
  || bad "续跑默认关" "1 且不含续跑" "$rc / $(alerts | head -2)"

# 19 ★★ 回归测试：中文标点会被 bash 吃进变量名
#     这个 bug 在本套脚本里出现过两次，而且它的表现是「最重要的几支静默失效」。
#     裸写 $VAR 后面紧跟中文标点（如 "（会话 $sid）"），bash 会把全角括号
#     当成变量名的一部分 → unbound variable → 那一支直接死掉。
#     一律写成 ${VAR}。
naked=$(grep -nP '\$[A-Za-z_][A-Za-z0-9_]*(?=[^\x00-\x7f])' \
          "$HERE"/*.sh "$HERE"/lib/*.sh 2>/dev/null | grep -v '^\s*#' || true)
[ -z "$naked" ] \
  && ok "没有裸 \$VAR 紧跟中文标点（这个坑犯过两次，锁死）  ★★" \
  || bad "裸变量+中文标点" "0 处" "$(printf '%s' "$naked" | head -3)"

# 20
cat > "$TMP/config-empty.env" <<CFG
TASK_NAME="selftest"
WORKDIR="$TMP"
RECEIPT_PATH="$TMP/receipt.json"
AGENT_CMD=()
CFG
WATCHDOG_CONFIG="$TMP/config-empty.env" bash "$HERE/watchdog.sh" >/dev/null 2>&1
rc=$?
[ "$rc" = 2 ] && ok "AGENT_CMD 没填 → 拒绝运行（退出 2），不装作跑过" || bad "空 AGENT_CMD" "2" "$rc"

echo
printf '  通过 %d 项' "$pass"
[ "$fail" -gt 0 ] && printf '，\033[31m失败 %d 项\033[0m' "$fail"
echo; echo
[ "$fail" -eq 0 ] || exit 1
echo "  脚本本身是对的。接下来把 config.env 里的 AGENT_CMD 换成你自己的命令。"
echo
