#!/usr/bin/env python3
import json
import sys
from pathlib import Path

REQUIRED = {
    "schemaVersion": int,
    "currentWeek": int,
    "businessModel": str,
    "status": str,
    "deliverables": dict,
    "evidence": list,
    "assumptions": list,
    "blockers": list,
    "nextAction": str,
}

def main() -> int:
    if len(sys.argv) != 2:
        print("usage: validate_founder_state.py <founder-state.json>", file=sys.stderr)
        return 2
    path = Path(sys.argv[1])
    data = json.loads(path.read_text())
    errors = [key for key, kind in REQUIRED.items() if key not in data or not isinstance(data[key], kind)]
    if not 0 <= data.get("currentWeek", -1) <= 15:
        errors.append("currentWeek-range")
    if errors:
        print(json.dumps({"valid": False, "errors": errors}))
        return 1
    print(json.dumps({"valid": True, "week": data["currentWeek"], "status": data["status"]}))
    return 0

if __name__ == "__main__":
    raise SystemExit(main())
