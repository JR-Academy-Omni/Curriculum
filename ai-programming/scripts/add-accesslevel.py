#!/usr/bin/env python3
"""
给 ai-programming outline.json 的 113 节 lesson 加 accessLevel 字段。

规则（基于 phase.programs 已有标记）：
- phase 含 'basic' → 所有 lesson accessLevel='basic'
- phase 只含 'advanced' → 所有 lesson accessLevel='advanced'

说明：tier 是 union 模型，advanced 班 grants 含 basic，所以 phase[basic]
的 lesson 标 'basic' 时进阶班学员也能看（他们买的 advanced 班 grants
包含 basic）。P8 基础班答辩虽 programs=['basic']，标 'basic' 后进阶班
学员也能看到（无伤大雅，不强加 'basic-only' 复杂度）。

运行：python3 scripts/add-accesslevel.py
幂等：可重复跑，已有 accessLevel 会被覆盖。
"""
import json
import pathlib
import sys

OUTLINE_PATH = pathlib.Path(__file__).resolve().parents[1] / "public" / "outline.json"

def main():
    out = json.loads(OUTLINE_PATH.read_text(encoding="utf-8"))
    phases = out.get("phases", [])
    counts = {"basic": 0, "advanced": 0, "skipped": 0}

    for p in phases:
        programs = p.get("programs", [])
        if "basic" in programs:
            tier = "basic"
        elif "advanced" in programs:
            tier = "advanced"
        else:
            tier = None
        for lesson in p.get("lessons", []):
            if tier is None:
                counts["skipped"] += 1
                continue
            lesson["accessLevel"] = tier
            counts[tier] += 1

    OUTLINE_PATH.write_text(
        json.dumps(out, ensure_ascii=False, indent=2) + "\n", encoding="utf-8"
    )
    total = sum(counts.values())
    print(f"✅ outline.json updated — total {total} lessons")
    print(f"   basic    = {counts['basic']}")
    print(f"   advanced = {counts['advanced']}")
    if counts["skipped"]:
        print(f"   ⚠️ skipped (no programs tag) = {counts['skipped']}", file=sys.stderr)

if __name__ == "__main__":
    main()
