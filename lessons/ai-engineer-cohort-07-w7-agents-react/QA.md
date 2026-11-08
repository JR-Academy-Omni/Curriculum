# QA 记录

## 迁入 Curriculum（2026-11-08，Local / 未部署）

从独立 deck 迁到 `lessons/_template`（Talk Deck 2.0）：引擎文件逐字来自模板，内容层（`_parts.tsx`、封面、架构图）按 JR Craft 改写，讲师备注进 `src/data/notes.ts`。

| 项目 | 结果 |
|---|---|
| `bun install --frozen-lockfile`、`bun run build` | 通过 |
| `check-talk-decks.py --slug ai-engineer-cohort-07-w7-agents-react --base origin/main` | OK |
| `check-talk-decks.py --engine-inventory` | template-match |
| `index.html` robots / googlebot `noindex, nofollow`，无 GA / GTM | 已加 |
| 53 页浏览器走查（生产构建、子路径 base、1600×900） | 无溢出、无裁切；控制台只有 favicon 404 |
| 目视抽查：封面、过渡页、架构图、LIVE 页、表格页、交接单页 | 圆角、无硬阴影；工具栏（N / P）不遮挡页头 |
| 20 段页面代码片段与 `demo/` 原文 | 一致 |
| `demo/` 内 `uv run pytest` | 67 项通过 |
| 仓库 `qa:deck`（三档视口） | 未运行：本机无法下载 Playwright 1.63 的 Chromium，改用上面的 1600×900 走查。部署前或合并后建议补跑 |

## 已验证（2026-11-07）

demo 已从 9 个脚本合并成 3 样东西：`01_control.py`、`agent.py`、`tests/test_failures.py`。

| 项目 | 结果 |
|---|---|
| `bun run build` | 通过 |
| 53 页浏览器走查（1600×900，含“看答案”展开） | 无溢出，无代码裁切 |
| 30 页的代码标签 | 函数都在所标的文件里，已用脚本核对 |
| 页面代码片段 | 标了文件名的片段都已用脚本核对，与 demo 原文一致 |
| `uv run pytest` | 67 项通过 |
| `-k error` / `-k guard` | 7 项 / 21 项通过 |
| `01_control.py workflow` | 已运行，输出符合设计 |
| 没有 key 时的提示 | 正常 |
| 无效 key 走真实 SDK（环境变量和 `.env` 两种方式） | CLI 启动，收到 key，API 拒绝后输出 api_error 交接单，账本为空 |
| `agent.py` 的 hook 逻辑（审批通过、拒绝、循环检测、提前退出判断） | 不调用模型，已用测试覆盖 |
| MCP server 经 SDK 自带 CLI 在 Windows 上连接 | 合并前 connected，5 个工具都在；server 代码没有改动 |

## 尚未验证：需要 API key

| 项目 | 风险 |
|---|---|
| `01_control.py once`、`01_control.py react` | 还没有和真实模型跑过 |
| `agent.py` 所有场景（A1024、A4096、A8192、`--resume`、`--interrupt`） | 同上 |
| hook 的 `continue_: False`、`updatedInput`、`on_failure="block"` | 逻辑已测试，但 CLI 的实际反应要实测 |
| `--max-turns` 撞线时 `ResultError` 的处理和交接单 | 按 SDK 源码写的，取决于 CLI 什么时候退出 |
| `--max-turns 4 --no-loop-detect` 能否稳定撞线 | 取决于模型是否持续查询 |
| 拒绝审批后账本为空 | 工具层和 hook 已测试，端到端还没跑 |
| `--resume` 恢复上一次运行 | 依赖 SDK 保存的 session。课上不演示，供学员课后自试 |
| `--order A9216` 真实模型面对注入文字 | 还没有跑过，课上不是必讲内容 |
| 第 9 页说的“常会打印还想调用下一个工具” | 要看实际模型行为 |

设置 key 后，每个场景跑几次，把结果写到这里，并确认 RUNSHEET 第 9、31、37、43 页的说法。

## 已知情况

- 运行 `agent.py` 时，CLI 可能先打印一行 claude.ai connectors 的提示，不影响运行。
- 浏览器控制台有 1 个 404，应为 favicon，不影响放映。
- 已迁到 Talk Deck 2.0：讲师备注按 N 显示（`src/data/notes.ts`，由 SPEAKER_NOTES.md 生成），P 为打印视图。
- 视觉已按 JR Craft 改写（`_parts.tsx`、封面、架构图）：圆角容器、2px 深色描边、软阴影，无直角卡片和黑色硬阴影。
