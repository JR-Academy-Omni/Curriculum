#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Revert: remove L18a Quest demo lesson from AI Adoption Bootcamp Phase 1."""
import json

OUTLINE_PATH = "/Users/lightman/Documents/sites/jr-academy-ai/curriculum/ai-adoption-bootcamp/public/outline.json"

with open(OUTLINE_PATH) as f:
    outline = json.load(f)

phase1 = outline["phases"][0]
before = len(phase1["lessons"])

phase1["lessons"] = [l for l in phase1["lessons"] if l.get("code") != "L18a"]

after = len(phase1["lessons"])
removed = before - after

outline["totalLessons"] = sum(len(ph["lessons"]) for ph in outline["phases"])

with open(OUTLINE_PATH, "w") as f:
    json.dump(outline, f, ensure_ascii=False, indent=2)

print(f"Removed {removed} L18a lesson(s)")
print(f"Phase 1 now has {after} lessons")
print(f"Total lessons: {outline['totalLessons']}")
