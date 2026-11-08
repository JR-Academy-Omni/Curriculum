# W15 · 让生意自己运转 · QA

## 状态（2026-11-08）

- 构建：`bun install --frozen-lockfile && bun run build` 通过（tsc + vite）
- 逐页检查：37 页在 1600×900 画布下逐页切换，正文元素无超出画布；抽查第 6、11、13、20 页截图目视正常
- 仓库 QA 脚本 `qa:deck`：未执行（本机没有 Playwright 浏览器）
- 讲师备注：37 条，与页数一致
- 课程包：`pipeline.py` 的把关与回执检查、页面快照、资料目录、网页目录生成脚本已在本机测试；工作流 YAML 可解析
- 未验证：真实 Codex 运行与 GitHub Actions 端到端（需要讲师自己的 API key），`:workspace` 权限下 `--search` 能否联网搜索
- 发布：见 CHANGELOG 与 GitHub Actions 运行记录
