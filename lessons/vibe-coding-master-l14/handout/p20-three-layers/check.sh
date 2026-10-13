#!/usr/bin/env bash
# 三层自动化的【第二层】：提改动时跑的一致性检查。
#
# 这一层是三层里【唯一真正的硬政策】—— 它红了，改动就进不来。
#
# 它查的是【第十四节今天产出的三样东西】，不重复第十三节那套：
#   ① 第十三节的 check.mjs 还跑不跑得过（把它从「手动跑」变成「合不进去」）
#   ② 写权限表第三列「批准立在什么上面」不许空
#   ③ 技能规范十节不许缺，尤其第 10 条验收测试
#
# 它守两条本课教的规矩：
#   · 硬失败和提示必须分开。bad 会让整个脚本失败，note 永远不会。
#     全设成失败 = 天天红 = 没人再看。
#   · 查不了的时候明说查不了，绝不当成通过。
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

mds() { find . -name '*.md' -not -path './.git/*' -not -path './node_modules/*' 2>/dev/null; }

# ── 1. 上一节那套检查，现在变成硬门 ────────────────
hdr "1. 第十三节的 check.mjs 还跑不跑得过"
CHECK_MJS=$(find . -name 'check.mjs' -not -path './.git/*' -not -path './node_modules/*' 2>/dev/null | head -1)
if [ -z "$CHECK_MJS" ]; then
  skip "仓里没找到 check.mjs"
elif ! command -v node >/dev/null 2>&1; then
  # ← 注意这里：没有 node 不等于检查通过。
  bad "找到了 ${CHECK_MJS}，但这台机器上没有 node —— 这条【没能跑】，不是【通过】"
else
  if node "$CHECK_MJS" >/dev/null 2>&1; then
    note "$CHECK_MJS 通过"
  else
    bad "$CHECK_MJS 没通过（单独跑一次看它说什么：node ${CHECK_MJS}）"
  fi
fi

# ── 2. 写权限表第三列不许空 ────────────────────────
hdr "2. 写权限表：第三列「批准立在什么上面」不许空"
found_table=0
while IFS= read -r f; do
  grep -q '批准立在什么上面' "$f" 2>/dev/null || continue
  out=$(awk -v FS='|' '
    # 表头：找出「批准立在什么上面」是第几列
    /\|/ && /批准立在什么上面/ {
      intable=1; col=0
      for (i=1;i<=NF;i++) { h=$i; gsub(/^[ \t]+|[ \t]+$/,"",h); if (h=="批准立在什么上面") col=i }
      if (col>0) print "T"
      next
    }
    # 分隔行：必须含「-」才算。
    # ⚠️ 这里踩过坑：原来写成 [ \t:|-]* 不要求有 -，
    #    结果空白行 |  |  |  |  | 也被当成分隔行跳过去了 ——
    #    一个本该报错的表，静悄悄地通过了。又是同一个毛病。
    intable && /^[ \t]*\|[ \t:|-]*\|[ \t]*$/ && /-/ { next }
    intable && !/^[ \t]*\|/ { intable=0; next }
    intable && col>0 {
      v=$col; gsub(/^[ \t]+|[ \t]+$/,"",v)
      row++
      if (v=="") print "E " row
    }
  ' "$f")
  [ -z "$out" ] && continue
  case "$out" in *T*) found_table=1 ;; esac
  while IFS= read -r line; do
    case "$line" in
      "E "*) bad "$f 第 ${line#E } 行第三列是空的 —— 填不出来，说明那条权限其实从来没有人批过" ;;
    esac
  done <<< "$out"
done < <(mds)
[ "$found_table" -eq 0 ] && skip "仓里没找到写权限表"

# ── 3. 技能规范十节 ────────────────────────────────
hdr "3. 技能规范：十节不许缺，第 10 条尤其"
SECTIONS=("触发" "读什么" "不能跑" "产物" "审批人" "写操作" "失败" "记录" "隐私" "验收测试")
if [ -d ai-skills ]; then
  for f in ai-skills/*.md; do
    [ -f "$f" ] || continue
    miss=""
    for sec in "${SECTIONS[@]}"; do
      grep -q "$sec" "$f" 2>/dev/null || miss="$miss $sec"
    done
    if [ -n "$miss" ]; then
      bad "$f 缺这几节：$miss"
    else
      note "$f 十节齐"
    fi
  done
else
  skip "没有 ai-skills/ 目录"
fi

# ── 4. 全仓待补项：想知道，但不想天天被它拦 ────────
hdr "4. 全仓还有多少处待补"
gaps=0
while IFS= read -r f; do
  n=$(grep -c '\[to supply\]\|\[待补\]' "$f" 2>/dev/null); gaps=$((gaps + ${n:-0}))
done < <(mds)

# ← 这一条是【提示】，不是失败。故意的：缺口要可见，但不该天天拦你。
#   这两个函数的区别只有一行 —— bad 把 fail 置成 1，note 不置。
#   「硬失败和提示必须分开」，落到代码上就是这一行。
note "共 $gaps 处（这是故意留着的，不算失败）"

# ── 结果 ───────────────────────────────────────────
printf '\n'
if [ "$fail" -eq 0 ]; then
  printf '通过。\n'
else
  printf '有 FAIL，改动不该合进去。\n'
fi
exit "$fail"
