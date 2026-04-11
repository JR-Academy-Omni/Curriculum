#!/usr/bin/env python3
"""Generate steps for 61 Lab lessons that have empty steps arrays."""
import json, re

with open("curriculum/ai-engineer-bootcamp/public/outline.json") as f:
    outline = json.load(f)

lab_type_names = {
    "python-lab": "Python Lab",
    "prompt-lab": "Prompt Lab",
    "llm-lab": "LLM Lab",
    "aws-lab": "AWS Lab",
    "azure-lab": "Azure Lab",
    "git-lab": "Git Lab",
    "frontend-lab": "Frontend Lab",
}

applied = 0
for phase in outline["phases"]:
    for lesson in phase["lessons"]:
        if lesson.get("steps") and len(lesson["steps"]) > 0:
            continue

        labs = lesson.get("labs", [])
        if not labs:
            continue

        lab = labs[0]
        lab_source = lab.get("source", "")
        lab_slug = lab.get("slug", "")
        lab_type = lab_type_names.get(lab_source, "Interactive Lab")

        # Extract topic from title
        topic = re.sub(r'^Lab[：:]\s*', '', lesson.get("title", ""))

        # Generate 3 steps: CONCEPT + LAB + MCQ
        lesson["steps"] = [
            {
                "order": 1,
                "type": "CONCEPT",
                "title": topic,
                "description": topic,
                "duration": 3
            },
            {
                "order": 2,
                "type": "LAB",
                "title": f"{lab_type}: {lab_slug}",
                "description": f"{lab_type}: {lab_slug}",
                "duration": max(10, lesson.get("duration", 30) - 5),
                "labSlug": lab_slug
            },
            {
                "order": 3,
                "type": "MCQ",
                "title": f"{topic} 理解检查",
                "description": f"{topic} 理解检查",
                "duration": 2
            }
        ]
        applied += 1

with open("curriculum/ai-engineer-bootcamp/public/outline.json", "w") as f:
    json.dump(outline, f, ensure_ascii=False, indent=2)

# Verify
total_with_steps = sum(1 for p in outline["phases"] for l in p["lessons"] if l.get("steps") and len(l["steps"]) > 0)
print(f"Applied steps to {applied} Lab lessons")
print(f"Total with steps: {total_with_steps}/157")
