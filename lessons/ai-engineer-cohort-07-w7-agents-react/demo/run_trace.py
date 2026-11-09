"""运行记录：只记可见的 Action / Observation，不记模型隐藏推理。"""
import json
import sys
import uuid

from desk import runtime_dir

for stream in (sys.stdout, sys.stderr):
    if hasattr(stream, "reconfigure"):
        stream.reconfigure(encoding="utf-8")


def short(value, limit: int = 160) -> str:
    text = value if isinstance(value, str) else json.dumps(value, ensure_ascii=False)
    return text if len(text) <= limit else text[:limit] + " …"


class Trace:
    def __init__(self, quiet: bool = False):
        self.trace_id = f"run-{uuid.uuid4().hex[:8]}"
        self.steps: list[dict] = []
        self.quiet = quiet

    def action(self, tool: str, args: dict) -> int:
        self.steps.append({"step": len(self.steps) + 1, "tool": tool, "args": args, "observation": None})
        if not self.quiet:
            print(f"\n[Step {len(self.steps)}] Action      {tool} {short(args)}")
        return len(self.steps) - 1

    def observation(self, result, index: int = -1) -> None:
        self.steps[index]["observation"] = result
        if not self.quiet:
            print(f"          Observation {short(result)}")

    def reply(self, text: str) -> None:
        if text.strip() and not self.quiet:
            print(f"\n[Reply] {text.strip()}")

    def save(self) -> str:
        folder = runtime_dir() / "traces"
        folder.mkdir(parents=True, exist_ok=True)
        path = folder / f"{self.trace_id}.json"
        path.write_text(json.dumps(self.steps, ensure_ascii=False, indent=2), encoding="utf-8")
        return str(path)
