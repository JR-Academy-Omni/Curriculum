#!/usr/bin/env python3
"""Bind learn direction chapters to AI Engineer Bootcamp lessons.

Adds entries to `learns` array and prepends matching `LEARN` type steps.
Run from curriculum/ai-engineer-bootcamp/ directory.
"""
import json
from pathlib import Path

OUTLINE_PATH = Path(__file__).parent / "public" / "outline.json"

DIRECTION_TITLE = {
    "ai-engineer": "AI Engineer",
    "prompt-master": "Prompt Master",
    "vibe-coding": "Vibe Coding",
    "openclaw": "OpenClaw",
}

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
    # Phase 4 Capability Layer (MCP + Tools)
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


def learn_step(direction: str, slug: str) -> dict:
    title = f"{DIRECTION_TITLE[direction]}: {slug}"
    return {
        "order": 0,  # renumbered later
        "type": "LEARN",
        "title": title,
        "description": title,
        "duration": 5,
    }


def apply_to_lesson(lesson: dict, new_refs: list[tuple[str, str]]) -> tuple[int, int]:
    existing = {(x["direction"], x["slug"]) for x in lesson.get("learns") or []}
    to_add = [r for r in new_refs if r not in existing]
    if not to_add:
        return 0, 0

    learns = lesson.setdefault("learns", [])
    for direction, slug in to_add:
        learns.append({"direction": direction, "slug": slug})

    steps = lesson.get("steps") or []
    new_steps = [learn_step(d, s) for d, s in to_add]
    lesson["steps"] = new_steps + steps

    for i, step in enumerate(lesson["steps"], start=1):
        step["order"] = i

    return len(to_add), len(new_steps)


def main(dry_run: bool = False):
    with OUTLINE_PATH.open() as f:
        data = json.load(f)

    touched_lessons = 0
    total_learns = 0
    total_steps = 0
    missing = []

    targets = dict(ADDITIONS)
    for phase in data.get("phases", []):
        for lesson in phase.get("lessons", []):
            code = lesson.get("code")
            if code not in targets:
                continue
            added_learns, added_steps = apply_to_lesson(lesson, targets.pop(code))
            if added_learns:
                touched_lessons += 1
                total_learns += added_learns
                total_steps += added_steps
                print(f"  {code}: +{added_learns} learns, +{added_steps} steps")

    for code in targets:
        missing.append(code)

    print(f"\n=== Summary ===")
    print(f"Lessons touched: {touched_lessons}")
    print(f"New learn bindings: {total_learns}")
    print(f"New LEARN steps: {total_steps}")
    if missing:
        print(f"MISSING lesson codes (not found in outline): {missing}")

    if not dry_run:
        with OUTLINE_PATH.open("w") as f:
            json.dump(data, f, ensure_ascii=False, indent=2)
        print(f"\nWrote {OUTLINE_PATH}")
    else:
        print("\n(dry run — no file changes)")


if __name__ == "__main__":
    import sys
    dry = "--dry" in sys.argv
    main(dry_run=dry)
