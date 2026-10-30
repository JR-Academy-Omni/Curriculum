# W6 课件演示用的只读 MCP server

合成数据，只读；`send_refund_email` 是模拟操作，只返回 `simulated`。这不是正式 starter，正式 starter 由 Practice 那边锁定版本和验收。

实测版本：FastMCP 4.1.4、MCP Python SDK 2.3.0、Python 3.12（2026-10-30）。命令和输出记录见 `../research/demo-runs.md`。

```bash
uv venv --python 3.12 .venv && uv pip install --python .venv/bin/python "fastmcp==4.1.4"
# 把 mcp-config.example.json 里的路径换成绝对路径
.venv/bin/fastmcp list mcp-config.json --resources --prompts
.venv/bin/fastmcp call mcp-config.json get_order order_id=A1024 customer_id=C001
```
