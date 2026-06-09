#!/usr/bin/env python3
"""
Marketing Dashboard local dev server.
- Serves curriculum/ as static (same as `python -m http.server`)
- + GET /list-outputs?slug=X → list agent-outputs/*.md
- + GET /state?slug=X → read marketing-agents-runtime/{slug}/STATE.json

Usage: cd curriculum/ && python3 server.py [port=8765]
"""
import json
import os
import sys
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from urllib.parse import urlparse, parse_qs

PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 8765
HERE = os.path.dirname(os.path.abspath(__file__))
REPO_ROOT = os.path.abspath(os.path.join(HERE, ".."))


def label_from_filename(name: str) -> str:
    """AGENT_PERSONA_VALIDATE.md → 🤖 AGENT·PERSONA·VALIDATE"""
    stem = name[:-3] if name.endswith(".md") else name
    parts = stem.split("_")
    if parts and parts[0] == "AGENT":
        return "🤖 " + "·".join(parts)
    return stem.replace("_", " ")


class Handler(SimpleHTTPRequestHandler):
    def _send_json(self, code, payload):
        body = json.dumps(payload, ensure_ascii=False).encode("utf-8")
        self.send_response(code)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Cache-Control", "no-store")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def do_GET(self):
        url = urlparse(self.path)
        if url.path == "/list-outputs":
            return self._list_outputs(parse_qs(url.query))
        if url.path == "/state":
            return self._state(parse_qs(url.query))
        # Disable browser caching for markdown so dashboard always sees latest agent output
        if url.path.endswith(".md"):
            self.send_response_only(200)
        return super().do_GET()

    def end_headers(self):
        # Static MD files: no cache (so agent reruns are visible after browser refresh)
        if self.path.endswith(".md") or self.path.endswith(".json"):
            self.send_header("Cache-Control", "no-store")
        super().end_headers()

    def _list_outputs(self, qs):
        slug = (qs.get("slug") or [""])[0]
        if not slug or "/" in slug or ".." in slug:
            return self._send_json(400, {"error": "missing or invalid slug"})
        out_dir = os.path.join(HERE, slug, "agent-outputs")
        if not os.path.isdir(out_dir):
            return self._send_json(200, [])
        items = []
        for fn in sorted(os.listdir(out_dir)):
            if not fn.endswith(".md"):
                continue
            fp = os.path.join(out_dir, fn)
            st = os.stat(fp)
            items.append({
                "file": f"agent-outputs/{fn}",
                "label": label_from_filename(fn),
                "key": fn[:-3].upper(),  # already starts with AGENT_
                "size": st.st_size,
                "mtime": int(st.st_mtime),
            })
        return self._send_json(200, items)

    def _state(self, qs):
        slug = (qs.get("slug") or [""])[0]
        if not slug or "/" in slug or ".." in slug:
            return self._send_json(400, {"error": "missing or invalid slug"})
        state_path = os.path.join(REPO_ROOT, "marketing-agents-runtime", slug, "STATE.json")
        if not os.path.isfile(state_path):
            return self._send_json(404, {"error": f"STATE.json not found for slug={slug}"})
        try:
            with open(state_path, encoding="utf-8") as f:
                return self._send_json(200, json.load(f))
        except Exception as e:
            return self._send_json(500, {"error": str(e)})

    def log_message(self, fmt, *args):
        # Quieter than default — only log non-200 + endpoint calls
        msg = fmt % args
        if " 200 " in msg and ".md " in msg:
            return
        sys.stderr.write(f"[{self.log_date_time_string()}] {msg}\n")


def main():
    os.chdir(HERE)
    print(f"🚀 Dashboard server on http://localhost:{PORT}/marketing-dashboard.html")
    print(f"   /list-outputs?slug=X  → list agent-outputs/*.md")
    print(f"   /state?slug=X         → STATE.json")
    print(f"   Ctrl+C to stop")
    with ThreadingHTTPServer(("", PORT), Handler) as srv:
        try:
            srv.serve_forever()
        except KeyboardInterrupt:
            print("\n bye")


if __name__ == "__main__":
    main()
