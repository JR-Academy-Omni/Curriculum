#!/usr/bin/env bash
# 三层自动化的【第三层】：每周跑一次的权限漂移巡检。
#
# 漂移 = 实际的权限，和你规矩里写的权限，对不上了。
#
# 两条设计，都是本课讲过的：
#   ① 它【只数数，不点名】—— 个人账号映射属于身份目录，不进规则仓。
#      限制反而逼出了更强的检查：「一个不是组织成员的协作者」，
#      不需要知道那是谁，就能抓到一条离职残留。
#   ② 查不到的时候【报 FAILED，不报 0】。
#      这一条是整个脚本最重要的部分 —— 一个巡检如果在拿不到数据时
#      安静地输出「0 处漂移」，它就是在说谎。
#
# 跑：bash access-drift.sh
# 接：配成每周一次。⚠️ 它需要【服务凭据】，不能用点一下同意的那种授权。

set -uo pipefail

ORG="${OPS_ORG:-}"
REPO="${OPS_REPO:-}"
EXPECTED_PUSHERS="${OPS_EXPECTED_PUSHERS:-}"   # 规矩里写的「有推送权的人数」

printf '权限漂移巡检\n'
printf '════════════\n'

# ── 先检查我们到底能不能查 ─────────────────────────
if [ -z "$ORG" ] || [ -z "$REPO" ]; then
  printf 'FAILED：没有配置组织名或仓库名。\n'
  printf '  这次运行没有覆盖任何东西。\n'
  printf '  这不代表没有漂移，只代表这条巡检这次没跑成。\n'
  printf '  恢复它的确切一步：设置 OPS_ORG 和 OPS_REPO，然后重跑。\n'
  exit 1
fi

if ! command -v gh >/dev/null 2>&1; then
  printf 'FAILED：找不到 gh 命令。\n'
  printf '  这次运行没有覆盖任何东西。恢复：安装 gh 并登录，然后重跑。\n'
  exit 1
fi

if ! gh api "orgs/$ORG/members" >/dev/null 2>&1; then
  # ← 整个脚本最重要的五行。
  #   这里【绝不能】输出「0 处漂移」。
  printf 'FAILED：列不出组织成员 —— 这是认证或权限问题，不是「没有数据」。\n'
  printf '  这次运行没有覆盖：成员数、推送权限、外部协作者、未接受的邀请。\n'
  printf '  所以「有没有漂移」这个问题，本次没有答案 —— 不是答案为零。\n'
  printf '  恢复它的确切一步：确认凭据有 org 读取权限，然后重跑。\n'
  exit 1
fi

drift=0
bad()  { printf '  漂移  %s\n' "$1"; drift=$((drift+1)); }
note() { printf '        %s\n' "$1"; }

# ── 1. 不是组织成员的协作者（离职残留）────────────
#     只数数，不点名。
oc=$(gh api "orgs/$ORG/outside_collaborators" -q 'length' 2>/dev/null || echo "")
if [ -z "$oc" ]; then
  printf '  SKIP  外部协作者查不到（这次没覆盖）\n'
elif [ "$oc" -gt 0 ]; then
  bad "有 $oc 个外部协作者。规矩里写的是 0"
else
  note "外部协作者 0，符合"
fi

# ── 2. 有推送权的人数 ──────────────────────────────
push=$(gh api "repos/$ORG/$REPO/collaborators" -q '[.[]|select(.permissions.push)]|length' 2>/dev/null || echo "")
if [ -z "$push" ]; then
  printf '  SKIP  推送权限查不到（这次没覆盖）\n'
elif [ -n "$EXPECTED_PUSHERS" ] && [ "$push" != "$EXPECTED_PUSHERS" ]; then
  bad "有推送权的 $push 人，规矩里写的是 $EXPECTED_PUSHERS 人"
else
  note "有推送权的 $push 人"
fi

# ── 3. 主分支有没有保护 ────────────────────────────
if gh api "repos/$ORG/$REPO/branches/main/protection" >/dev/null 2>&1; then
  note "main 有保护"
else
  bad "main 没有分支保护"
fi

# ── 4. 久未接受的邀请 ──────────────────────────────
inv=$(gh api "orgs/$ORG/invitations" -q 'length' 2>/dev/null || echo "")
if [ -z "$inv" ]; then
  printf '  SKIP  待接受邀请查不到（这次没覆盖）\n'
elif [ "$inv" -gt 0 ]; then
  note "$inv 个邀请还没被接受（未接受的邀请不携带账号，人也拿不到权限）"
fi

# ── 它看不见什么 —— 这一段必须打出来 ───────────────
printf '\n这条巡检【看不见】下面这些，它们需要人走一遍清单：\n'
printf '  身份提供商与单点登录 · 邮件组 · 共享盘 · 日历系列 · 共享凭据\n'
printf '  ⚠️ 高风险的残留恰恰在那边，不在这边。\n'

printf '\n共 %s 处漂移。\n' "$drift"
# 巡检【不拦人】—— 它是巡检，不是关卡。正常退出。
exit 0
