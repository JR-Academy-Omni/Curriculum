#!/usr/bin/env python3
import json
import shutil
import sys
from pathlib import Path

FILES = [
    "FOUNDER-PROFILE.md", "BUSINESS-SOT.md", "AGENT-TEAM.md",
    "CUSTOMER-EVIDENCE.md", "OFFER.md", "PRODUCT.md", "BRAND-SOT.md",
    "BACKLOG.md", "WEEKLY-REVIEWS.md", "SALES-PIPELINE.md",
    "CONTENT-SYSTEM.md", "ACQUISITION.md", "SEARCH-GROWTH.md",
    "EXPERIMENTS.md", "METRICS.md", "OPERATIONS.md", "FINANCE.md",
    "AUSTRALIA-SETUP.md", "PITCH.md", "FACT-MAP.md",
    "FOUNDER-PASSPORT.md", "GRADUATION-EVIDENCE.md"
]

def main() -> int:
    if len(sys.argv) != 2:
        print("usage: init_founder_workspace.py <workspace>", file=sys.stderr)
        return 2
    target = Path(sys.argv[1]).expanduser().resolve()
    target.mkdir(parents=True, exist_ok=True)
    assets = Path(__file__).resolve().parent.parent / "assets"
    state_target = target / "founder-state.json"
    if not state_target.exists():
        shutil.copyfile(assets / "founder-state-template.json", state_target)
    template = (assets / "founder-workspace-template.md").read_text()
    for filename in FILES:
        path = target / filename
        if not path.exists():
            path.write_text(template.replace("# Founder workspace", f"# {path.stem}"))
    print(json.dumps({"workspace": str(target), "created": True, "files": len(FILES) + 1}))
    return 0

if __name__ == "__main__":
    raise SystemExit(main())
