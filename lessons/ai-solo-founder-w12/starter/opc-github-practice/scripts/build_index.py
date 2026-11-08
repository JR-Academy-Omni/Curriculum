#!/usr/bin/env python3
"""任务 2：扫描 docs/ 下的 Markdown，生成 docs/INDEX.md 目录。不调用 AI。"""
import subprocess
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DOCS = ROOT / "docs"
rows = []
for f in sorted(DOCS.rglob("*.md")):
    if f.name == "INDEX.md":
        continue
    title = next((l.lstrip("# ").strip() for l in f.read_text(encoding="utf-8").splitlines() if l.startswith("# ")), f.stem)
    rel = f.relative_to(DOCS).as_posix()
    date = subprocess.run(["git", "log", "-1", "--format=%cs", "--", str(f)], capture_output=True, text=True, cwd=ROOT).stdout.strip() or "未提交"
    rows.append(f"| [{title}]({rel}) | {date} |")
body = "# 资料目录\n\n这个文件由 GitHub Actions 自动生成，不要手动修改。\n\n| 文档 | 最后更新 |\n|---|---|\n" + "\n".join(rows) + "\n"
(DOCS / "INDEX.md").write_text(body, encoding="utf-8")
print(body)
