"""由 SPEAKER_NOTES.md 生成 src/data/notes.ts（每个 "## " 一页，顺序与 App.tsx 一致）。

    python scripts/gen_notes.py
"""
import json
import pathlib
import re

root = pathlib.Path(__file__).resolve().parent.parent
md = (root / "SPEAKER_NOTES.md").read_text(encoding="utf-8")
sections = re.split(r"^## ", md, flags=re.M)[1:]
notes = ["\n".join(line for line in s.strip().splitlines() if line.strip()) for s in sections]
app = (root / "src" / "App.tsx").read_text(encoding="utf-8")
pages = len(re.findall(r"^\t\t\t<\w+ />$", app, flags=re.M))
assert len(notes) == pages, f"SPEAKER_NOTES.md 有 {len(notes)} 节，App.tsx 有 {pages} 页"
body = ",\n".join("\t" + json.dumps(n, ensure_ascii=False) for n in notes)
(root / "src" / "data" / "notes.ts").write_text(
    "// 每页一项（顺序与 App.tsx 一致）；N 显示 / 隐藏。由 SPEAKER_NOTES.md 用 scripts/gen_notes.py 生成，不要手改。\n"
    f"export const notes: string[] = [\n{body},\n];\n", encoding="utf-8", newline="\n")
print(f"{len(notes)} notes")
