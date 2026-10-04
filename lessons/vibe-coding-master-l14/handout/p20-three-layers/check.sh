#!/usr/bin/env bash
# 三层自动化的【第二层】：提改动时跑的一致性检查。
#
# 这一层是三层里【唯一真正的硬政策】—— 它红了，改动就进不来。
#
# 它守两条本课教的规矩：
#   ① 硬失败和提示必须分开。bad 会让整个脚本失败，note 永远不会。
#      全设成失败 = 天天红 = 没人再看。
#   ② 查不了的时候明说查不了，绝不当成通过。
#
# 放哪：你自己规则仓的 .claude/scripts/check.sh
# 跑：  bash .claude/scripts/check.sh
# 接：  配成 PR / push 时跑，红了不许合。

set -uo pipefail
# 不管从哪个目录调起来，都回到仓库根再查。
cd "$(git rev-parse --show-toplevel 2>/dev/null || pwd)" || exit 1

fail=0
hdr()  { printf '\n%s\n' "$1"; }
bad()  { printf '  FAIL  %s\n' "$1"; fail=1; }   # ← 真不一致，拦
note() { printf '        %s\n' "$1"; }            # ← 提示，永不拦
skip() { printf '  SKIP  %s（这次没查，不代表没问题）\n' "$1"; }

# ── 1. 每个角色都有自己的文件 ──────────────────────
hdr "1. 每个角色都有 charter"
if [ -d roles ]; then
  n=0
  for d in roles/*/; do
    [ -d "$d" ] || continue
    n=$((n+1))
    [ -f "$d/charter.md" ] || bad "$d charter.md 缺失"
  done
  [ "$n" -gt 0 ] && note "共 $n 个角色"
else
  skip "没有 roles/ 目录"
fi

# ── 2. 每个角色都登记在索引里 ──────────────────────
hdr "2. 每个角色都登记在 roles/README.md"
if [ -f roles/README.md ]; then
  for d in roles/*/; do
    [ -d "$d" ] || continue
    name=$(basename "$d")
    grep -q "$name" roles/README.md || bad "$name 未登记进 roles/README.md"
  done
else
  skip "没有 roles/README.md"
fi

# ── 3. 标了生效的文件不许还留着待补 ────────────────
hdr "3. 标了生效的文件，不许残留待补项"
gaps=0
while IFS= read -r f; do
  if head -20 "$f" | grep -qi 'status:[[:space:]]*approved\|状态：[[:space:]]*生效'; then
    if grep -q '\[to supply\]\|\[待补\]' "$f"; then
      bad "$f 标了生效，但还有待补项"
    fi
  fi
  n=$(grep -c '\[to supply\]\|\[待补\]' "$f" 2>/dev/null); gaps=$((gaps + ${n:-0}))
done < <(find . -name '*.md' -not -path './.git/*' -not -path './node_modules/*' 2>/dev/null)

# ← 这一条是【提示】，不是失败。故意的：缺口要可见，但不该天天拦你。
note "全仓待补项共 $gaps 处（这是故意留着的，不算失败）"

# ── 结果 ───────────────────────────────────────────
printf '\n'
if [ "$fail" -eq 0 ]; then
  printf '通过。\n'
else
  printf '有 FAIL，改动不该合进去。\n'
fi
exit "$fail"
