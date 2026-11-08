#!/usr/bin/env python3
"""任务 1：把 watch/pages.txt 里每个页面抓下来，转成纯文本，存到 watch/snapshots/<名字>.txt。
不调用 AI。是否有变化由 git diff 判断。"""
import html, re, sys, urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "watch" / "snapshots"
OUT.mkdir(parents=True, exist_ok=True)


def to_text(raw: str) -> str:
    raw = re.sub(r"(?is)<(script|style|noscript|svg).*?</\1>", " ", raw)
    raw = re.sub(r"(?s)<[^>]+>", "\n", raw)
    lines = [re.sub(r"\s+", " ", html.unescape(l)).strip() for l in raw.splitlines()]
    return "\n".join(l for l in lines if l)[:8000] + "\n"


for line in (ROOT / "watch" / "pages.txt").read_text(encoding="utf-8").splitlines():
    if not line.strip() or line.startswith("#") or "|" not in line:
        continue
    name, url = [x.strip() for x in line.split("|", 1)]
    safe = re.sub(r"[^\w一-鿿-]+", "-", name).strip("-")
    try:
        req = urllib.request.Request(url, headers={"User-Agent": "opc-page-watch/1.0"})
        with urllib.request.urlopen(req, timeout=20) as r:
            text = to_text(r.read().decode("utf-8", errors="replace"))
    except Exception as e:  # 打不开本身就是一种变化，要记下来
        text = f"打不开：{type(e).__name__}: {e}\n"
    (OUT / f"{safe}.txt").write_text(text, encoding="utf-8")
    print(f"{name}: {len(text)} 字")
