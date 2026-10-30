# AI Engineer W6 · Tool Calling, MCP & CLI Integration · QA

## 状态

本地验证通过；讲师 2026-10-30 授权部署

## 检查记录

- 构建结果：`npm run build`（`tsc -b && vite build`）通过。讲师机没有 bun，依赖用 `npm install --no-package-lock` 装；`bun.lock` 沿用模板，`bun install --frozen-lockfile` 在部署流水线里验证。
- 登记及资源检查：`python3 scripts/check-talk-decks.py --slug ai-engineer-cohort-07-w6-tool-calling-mcp` → OK；`--engine-inventory` → template-match。`lessons.html`、`CHANGELOG.md`、`deploy.yml`（构建 + 复制步骤）已登记。
- 浏览器逐页：无头 Chrome 1600×900 打印视图截取 41 页（答案展开），逐页目视检查。修了三处：第 8 页加上“学完能做到的三件事”；第 11 页总图补上方向箭头；第 36 页把“MCP 不替你做”改为“协议本身不管，要靠代码和客户端配置”。
- 三档视口：未执行（`bun run qa:deck` 依赖本机没有的 bun / Playwright）。
- 内容核对：所有终端输出对回 `research/demo-runs.md` 原文；未经验证的说法已删去或限定范围（第 33 页 env 白名单只说 MCP Python SDK 客户端；第 32 页 stdout 照实写“我们用的客户端悄悄丢掉，别的没测”；第 39 页删去“开源”）。
- 讲师备注：41 条，与页面一一对应。
- 2026-10-30 讲师要求加两个例子：第 14 页“模型写出来的只是一张条子”（Anthropic tool use 文档的 tool_use 格式，标明是格式示例）；第 17 页“实习生测试”（OpenAI function calling 指南）。两页不用类比，引文都在页脚注明出处。
- 抓取与追踪：`index.html` 带 `robots` / `googlebot` 的 `noindex, nofollow`；课件不含 GA / GTM。
- 外网阻断与字体、reduced-motion：未执行。
- 线上回读：未部署。

## 运行时偏离模板

无。引擎文件与 `lessons/_template` 一致；新增内容在 `src/App.tsx`、`src/components/slides/`、`src/data/`，另有 `demo/` 与 `research/`。

## 缺口与负责人

- 第 3 页足迹地图 W1 的关键词是占位（“LLM 基础 · 岗位地图”），待讲师确认，W5、W6 一起改 `src/data/footprint.ts`。负责人：Jessie。
- 正式 starter 的版本锁定、命令和测试由 Practice 那边验收；starter 定版后核对第 26–28、30、34 页的命令。
- 第 32 页 stdout 的行为只在 FastMCP CLI（MCP SDK 2.3.0）客户端上实测，Claude Code 未测（需要开真实会话、调用模型）。
- 部署：讲师 2026-10-30 说“可以了 部署吧”。上线后从线上 lessons.html 打开核验，再把卡片标为已部署。
