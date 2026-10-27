# AI Engineer W5 · RAG Quality, Testing & Controlled Improvement · QA

## 状态

已部署 · 2026-10-27 线上核验

## 检查记录

- 构建结果：`npm run build`（`tsc -b && vite build`）通过。讲师机没有 bun，依赖用 `npm install --no-package-lock` 装；`bun.lock` 沿用模板；部署流水线里 `bun install --frozen-lockfile` 和 `bun run build` 已通过（2026-10-27）。
- 登记及资源检查：`python3 scripts/check-talk-decks.py --slug ai-engineer-cohort-07-w5-rag-quality` → OK；`--engine-inventory` → template-match。
- 浏览器逐页：1600×900 视口，打开 P 打印视图，35 页逐页截图目视检查；关闭 framer-motion 入场动画后检查，无文字溢出页面。第 13、30 页在放映模式下点开答案后也能放下。修了一处：第 31 页“修好的题”一行没有基准值时不再显示箭头。
- 三档视口：未执行（`bun run qa:deck` 依赖本机没有的 bun / Playwright）。
- 内容核对：页面上每个数字都对回 reference RAG 的 `runs/` 文件，见 `SOURCE_MAP.md`；检查点 1 的四段助手回答是模型原文。
- 讲师备注：35 条，与页面一一对应。
- 控制台：无报错。
- 抓取与追踪（`CLAUDE.md` 2026-10-26 规则）：`index.html` 带 `robots` / `googlebot` 的 `noindex, nofollow`，构建产物里有；课件不含 GA / GTM。域名根 robots.txt 和 `X-Robots-Tag` 响应头是全站配置，不在本课件范围，状态以全站记录为准。
- 外网阻断与字体、reduced-motion：未执行。
- 线上回读（2026-10-27）：PR #102 squash 合并后，Deploy Curriculum to Server 运行成功；从 https://jracademy.ai/curriculum/lessons.html 的卡片进入课件，35 页、封面与讲师署名正确，Logo 和四套字体加载，无 4xx 资源；PRD / RUNSHEET / WORKSHEET / SOURCE_MAP 返回 200；页面 meta 与 `X-Robots-Tag` 响应头均为 `noindex, nofollow`。

## 运行时偏离模板

无。引擎文件与 `lessons/_template` 一致；新增内容只在 `src/App.tsx`、`src/components/slides/`、`src/data/`。

## 缺口与负责人

- 第 3 页足迹地图 W1 的关键词是占位（“LLM 基础 · 岗位地图”），待讲师确认后改 `src/data/footprint.ts`。负责人：Jessie。
- 完整运行的作答与裁判是本地 Ollama 模型（qwen3:14b、bonsai-2），不是 Claude；页面和讲义已标注。如果之后用 Claude API 重跑，需要替换第 10、13、16、22、23 页的例子和数字。
- 部署：讲师 2026-10-27 授权“直接部署”，已完成。
