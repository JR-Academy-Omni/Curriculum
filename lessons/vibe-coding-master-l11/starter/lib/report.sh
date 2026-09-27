#!/usr/bin/env bash
# 回执有两个读者，别混：
#   · status / evidence  →  给脚本看的，机器可判，小而稳定
#   · 下面这些字段        →  给人看的，第二天早上你要能三十秒搞清发生了什么
#
# 其中 decisions 是最值钱的一块，理由是这门课的立论：
#   你把提问取消了，那个决定并没有消失 —— 它被交给它自己做了。
#   **那些决定必须留痕，否则你永远不知道它替你决定了什么。**

receipt_digest() {
  local f="$1"
  [ -s "$f" ] || { echo "（没有回执）"; return; }
  python3 - "$f" <<'PY' 2>/dev/null || echo "（回执读不出来）"
import json, sys

try:
    d = json.load(open(sys.argv[1]))
except Exception:
    print("（回执不是合法 JSON）"); raise SystemExit(0)

L = []
p = d.get("progress") or {}
if p:
    L.append("进度      %s/%s%s" % (
        p.get("done", "?"), p.get("total", "?"),
        "  最后一步：%s" % p["last_step"] if p.get("last_step") else ""))

if d.get("stopped_at"):
    L.append("停在      %s" % d["stopped_at"])
if d.get("exit_reason"):
    L.append("为什么停  %s" % d["exit_reason"])

fc = d.get("files_changed") or []
if fc:
    L.append("改了文件  %d 个" % len(fc))
    for x in fc[:5]:
        L.append("          %-9s %s  %s" % (x.get("action", "?"), x.get("path", "?"), x.get("lines", "")))
    if len(fc) > 5:
        L.append("          …… 还有 %d 个，见完整报告" % (len(fc) - 5))
else:
    L.append("改了文件  0 个   ← 如果你以为它该改文件，这一行就是问题所在")

er = d.get("errors") or []
if er:
    L.append("出错      %d 次（%d 次自己恢复了）" % (len(er), sum(1 for e in er if e.get("recovered"))))
    for e in er[:3]:
        L.append("          %s：%s%s" % (e.get("where", "?"), e.get("what", "?"),
                                        "  → %s" % e["how"] if e.get("how") else ""))

de = d.get("decisions") or []
if de:
    low = [x for x in de if x.get("confidence") == "low" or x.get("needs_human")]
    L.append("替你做了  %d 个决定%s" % (len(de), "，其中 %d 个它自己也没把握 ⚠" % len(low) if low else ""))
    for x in de:
        mark = "⚠ " if (x.get("confidence") == "low" or x.get("needs_human")) else "  "
        L.append("        %s%s" % (mark, x.get("what", "?")))
        L.append("            因为：%s" % x.get("why", "（没写原因 —— 这条要退回重来）"))

t = d.get("tests") or {}
if t.get("ran"):
    L.append("测试      %s  通过 %s / 失败 %s" % (t.get("command", ""), t.get("passed", "?"), t.get("failed", "?")))
elif t:
    L.append("测试      没跑   ← 那第 2 段的判据是谁验的？")

if d.get("evidence"):
    L.append("证据      %s" % d["evidence"])
if d.get("report"):
    L.append("完整报告  %s" % d["report"])

print("\n".join(L) if L else "（回执里只有状态，没有报告字段）")
PY
}
