#!/usr/bin/env python3
"""Extract chapter titles from Learn direction config files."""
import re
import json
from pathlib import Path

CONFIG_DIR = Path("/Users/lightman/Documents/sites/jr-academy-ai/jr-academy-web-zh/src/config/learn/directions")

TITLE_RE = re.compile(r"title:\s*'([^']+)'")
GROUP_RE = re.compile(r"group:\s*'([^']+)'")


def parse_file(path: Path) -> dict[str, dict]:
    """Return {slug: {title, group}} map for one direction config."""
    text = path.read_text()
    result = {}
    matches = []
    for m in re.finditer(r"slug:\s*'([^']+)'", text):
        matches.append((m.start(), m.group(1)))

    for i, (pos, slug) in enumerate(matches):
        end = matches[i + 1][0] if i + 1 < len(matches) else len(text)
        sub = text[pos:end]
        tm = TITLE_RE.search(sub)
        gm = GROUP_RE.search(sub)
        if tm and slug not in result:
            result[slug] = {
                "title": tm.group(1),
                "group": gm.group(1) if gm else "",
            }
    return result


def main():
    all_titles = {}
    for direction in ["ai-engineer", "prompt-master", "vibe-coding", "openclaw"]:
        path = CONFIG_DIR / f"{direction}.config.ts"
        all_titles[direction] = parse_file(path)

    out = Path(__file__).parent / "_learn_titles.json"
    with out.open("w") as f:
        json.dump(all_titles, f, ensure_ascii=False, indent=2)
    print(f"Wrote {out}")
    print("Sample:")
    for d, m in all_titles.items():
        print(f"  {d}: {len(m)} slugs")
        for slug in list(m)[:3]:
            print(f"    {slug}: {m[slug]}")
    # verify agent-introduction
    if "prompt-master" in all_titles and "agent-introduction" in all_titles["prompt-master"]:
        print(f"  prompt-master.agent-introduction = {all_titles['prompt-master']['agent-introduction']}")


if __name__ == "__main__":
    main()
