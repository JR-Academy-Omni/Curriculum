#!/usr/bin/env python3
"""Add independent Information lessons that bind learn chapters.

Per curriculum/CLAUDE.md rule: each Learn chapter must be its own lesson,
never stuffed into another lesson's learns[] array.

Each new lesson:
- type = "Information", isLive = false, duration = 20
- title = "自学：{chapter_title}"
- learns = [{direction, slug}]  (single element)
- one step of type LEARN
- inserted immediately after the target concept lesson
- code = "L{N}{letter}" with letter skipping any existing suffix
"""
import json
from pathlib import Path

ROOT = Path(__file__).parent
OUTLINE = ROOT / "public" / "outline.json"
TITLES_FILE = ROOT.parent / "_learn_titles.json"

DIRECTION_DISPLAY = {
    "ai-engineer": "AI Engineer",
    "prompt-master": "Prompt Master",
    "vibe-coding": "Vibe Coding",
    "openclaw": "OpenClaw",
}

DIRECTION_CHINESE = {
    "ai-engineer": "AI Engineer",
    "prompt-master": "Prompt Master",
    "vibe-coding": "Vibe Coding",
    "openclaw": "OpenClaw",
}

# Target lesson code -> list of (direction, slug) to insert AFTER it
ADDITIONS = {
    # Phase 1 Foundation
    "L15": [("ai-engineer", "llm-api-basics")],
    "L27": [("ai-engineer", "ai-model-comparison")],
    "L29": [("ai-engineer", "llm-api-basics")],
    # Phase 2 Context Engineering
    "L47": [("ai-engineer", "multimodal-tooling"), ("prompt-master", "google-multimodal-prompts")],
    "L52": [("ai-engineer", "llm-platform-gateway"), ("vibe-coding", "tooling-updates")],
    # Phase 3 RAG
    "L53": [("ai-engineer", "rag-basics"), ("prompt-master", "rag")],
    "L60": [("vibe-coding", "data-rag")],
    "L61": [("ai-engineer", "rag-basics")],
    "L66": [("ai-engineer", "deployment-cost-optimization"), ("vibe-coding", "performance-cost")],
    "L68": [("ai-engineer", "deployment-cost-optimization"), ("vibe-coding", "performance-cost")],
    "L74": [("ai-engineer", "langchain-framework")],
    "L77": [("ai-engineer", "langchain-framework")],
    "L79": [("ai-engineer", "eval-quality-monitoring"), ("vibe-coding", "observability-guardrails")],
    "L81": [("prompt-master", "graph-prompts")],
    "L85": [("ai-engineer", "eval-quality-monitoring"), ("ai-engineer", "llm-judge-evaluation")],
    "L87": [("ai-engineer", "eval-quality-monitoring")],
    "L90": [("ai-engineer", "eval-quality-monitoring")],
    "L91": [("ai-engineer", "eval-quality-monitoring"), ("vibe-coding", "observability-guardrails")],
    "L93": [("prompt-master", "graph-prompts")],
    "L94": [("ai-engineer", "langchain-framework")],
    "L95": [("ai-engineer", "production-deployment")],
    # Phase 4 Capability Layer
    "L100": [("ai-engineer", "mcp-best-practices"), ("openclaw", "mcp-integration")],
    "L103": [("ai-engineer", "mcp-best-practices")],
    "L104": [("ai-engineer", "mcp-best-practices"), ("openclaw", "mcp-integration")],
    "L105": [("ai-engineer", "mcp-best-practices")],
    "L106": [("ai-engineer", "mcp-releasing")],
    "L107": [("ai-engineer", "mcp-releasing")],
    "L109": [("ai-engineer", "ai-agent")],
    # Phase 5 Agent Core
    "L116": [("ai-engineer", "agent-frameworks"), ("ai-engineer", "agent-frameworks-compare")],
    "L118": [("prompt-master", "reflexion"), ("prompt-master", "agent-deep-agents")],
    "L119": [
        ("ai-engineer", "ai-agent"),
        ("prompt-master", "agent-introduction"),
        ("prompt-master", "agent-components"),
    ],
    "L120": [("ai-engineer", "production-deployment")],
    "L121": [("ai-engineer", "production-deployment"), ("ai-engineer", "deployment-cost-optimization")],
    # Phase 6 Multi-Agent
    "L127": [("ai-engineer", "multi-agent-patterns"), ("openclaw", "multi-agent-routing")],
    "L129": [("ai-engineer", "multi-agent-patterns"), ("ai-engineer", "workflow-automation")],
    "L130": [("ai-engineer", "eval-quality-monitoring"), ("vibe-coding", "observability-guardrails")],
    "L131": [("ai-engineer", "multi-agent-patterns")],
    "L132": [("ai-engineer", "debugging-incident-playbook"), ("vibe-coding", "observability-guardrails")],
    # Phase 7 Memory
    "L135": [
        ("ai-engineer", "context-engineering-memory"),
        ("ai-engineer", "context-compression-optimization"),
        ("ai-engineer", "context-degradation-patterns"),
    ],
    # Phase 8 Harness Engineering
    "L138": [("ai-engineer", "agent-skills-paradigm"), ("vibe-coding", "claude-code-full-guide")],
    "L139": [("ai-engineer", "claude-code-context-management"), ("vibe-coding", "claude-code-full-guide")],
    "L140": [("vibe-coding", "claude-code-agents"), ("openclaw", "skill-development-basics")],
    "L142": [("vibe-coding", "claude-code-commands"), ("ai-engineer", "ai-rules-config")],
    "L144": [("ai-engineer", "ai-coding-workflow"), ("vibe-coding", "prompt-patterns")],
    "L145": [("ai-engineer", "ai-coding-workflow"), ("vibe-coding", "pair-programming")],
    "L146": [
        ("ai-engineer", "agent-skills-paradigm"),
        ("vibe-coding", "claude-code-skills"),
        ("openclaw", "build-first-skill"),
    ],
    # Phase 9 Model Layer
    "L150": [("ai-engineer", "production-deployment")],
    "L156": [("ai-engineer", "synthetic-data-augmentation")],
    "L157": [("ai-engineer", "synthetic-data-augmentation")],
    "L161": [("ai-engineer", "rag-basics")],
    # Phase 10 Observability & Evals
    "L175": [("ai-engineer", "eval-quality-monitoring"), ("ai-engineer", "llm-judge-evaluation")],
    "L176": [("ai-engineer", "deployment-cost-optimization"), ("vibe-coding", "performance-cost")],
    "L177": [("ai-engineer", "eval-quality-monitoring")],
    "L178": [
        ("prompt-master", "jailbreaking"),
        ("prompt-master", "prompt-adversarial"),
        ("ai-engineer", "security-threat-modeling"),
    ],
    "L179": [("ai-engineer", "ai-product-ux")],
}


def build_lesson(code: str, direction: str, slug: str, title_map: dict) -> dict:
    info = title_map[direction].get(slug) or {}
    chapter_title = info.get("title") or slug
    group = info.get("group") or ""
    # If title is too generic (short English word, same as group), prepend group
    needs_group = group and (
        len(chapter_title) <= 15 and chapter_title.isascii()
        and chapter_title != group
    )
    display_title = f"{group} · {chapter_title}" if needs_group else chapter_title
    display = DIRECTION_DISPLAY[direction]
    chinese = DIRECTION_CHINESE[direction]

    return {
        "code": code,
        "title": f"自学：{display_title}",
        "description": (
            f"阅读 {chinese} 方向的《{display_title}》章节。"
            f"作为课前/课后扩展阅读，系统补齐知识盲点，配合直播课和 Lab 一起吸收。"
        ),
        "type": "Information",
        "isLive": False,
        "duration": 20,
        "steps": [
            {
                "order": 1,
                "type": "LEARN",
                "title": f"{display}: {slug}",
                "description": f"{display}: {slug}",
                "duration": 20,
            }
        ],
        "labs": [],
        "learns": [{"direction": direction, "slug": slug}],
    }


def next_suffix(used: set[str]) -> str:
    for c in "abcdefghijklmnopqrstuvwxyz":
        if c not in used:
            return c
    raise RuntimeError("Ran out of suffix letters")


def main(dry_run: bool = False):
    with OUTLINE.open() as f:
        data = json.load(f)
    with TITLES_FILE.open() as f:
        title_map = json.load(f)

    # Collect existing codes and suffix letters used per base code
    used_suffix: dict[str, set[str]] = {}
    for p in data["phases"]:
        for l in p["lessons"]:
            code = l.get("code", "")
            # L16a -> base L16, suffix a
            import re
            m = re.match(r"^(L\d+)([a-z]*)$", code)
            if m:
                base, suf = m.group(1), m.group(2)
                if suf:
                    used_suffix.setdefault(base, set()).add(suf)

    touched = 0
    added = 0
    missing_slugs = []

    import re as _re

    def sort_key(lesson):
        code = lesson.get("code", "")
        m = _re.match(r"^L(\d+)([a-z]*)$", code)
        if not m:
            return (9999, "", code)
        return (int(m.group(1)), m.group(2), code)

    for phase in data["phases"]:
        new_lessons = list(phase["lessons"])
        for lesson in phase["lessons"]:
            code = lesson.get("code")
            if code in ADDITIONS:
                for direction, slug in ADDITIONS[code]:
                    if slug not in title_map.get(direction, {}):
                        missing_slugs.append((direction, slug))
                        continue
                    suffix = next_suffix(used_suffix.setdefault(code, set()))
                    used_suffix[code].add(suffix)
                    new_code = f"{code}{suffix}"
                    new_lesson = build_lesson(new_code, direction, slug, title_map)
                    new_lessons.append(new_lesson)
                    added += 1
                touched += 1
        # Sort within phase by code so Quests (e.g. L119a) stay in front of new
        # suffix-lettered lessons that sort after them alphabetically.
        new_lessons.sort(key=sort_key)
        phase["lessons"] = new_lessons

    # Update metadata
    total_lessons = sum(len(p["lessons"]) for p in data["phases"])
    total_steps = sum(len(l.get("steps") or []) for p in data["phases"] for l in p["lessons"])
    data["totalLessons"] = total_lessons
    data["totalSteps"] = total_steps

    print(f"Target concept lessons: {touched}")
    print(f"New Information lessons added: {added}")
    print(f"New totals: {total_lessons} lessons, {total_steps} steps")
    if missing_slugs:
        print(f"MISSING slugs: {missing_slugs}")

    if not dry_run:
        with OUTLINE.open("w") as f:
            json.dump(data, f, ensure_ascii=False, indent=2)
        print(f"\nWrote {OUTLINE}")
    else:
        print("\n(dry run — no file changes)")


if __name__ == "__main__":
    import sys
    main(dry_run="--dry" in sys.argv)
