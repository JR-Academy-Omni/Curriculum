# Vibe Coding L2 第 17 页核对

核对日期：2026-10-04。

用户来源链接： https://jracademy.ai/curriculum/lessons/vibe-coding-master-l2/?page=17

## 线上实际内容

Puppeteer 实际打开该 URL，页面显示 17 / 25。标题为「PRD 不是终点，下一步是把 Rules / Docs / Repo Context 做好」。图片展示 Repo、Readme、Rules、Docs/PRD 如何支撑实施计划与代码 Agent；三个文字说明分别是 PRD、Rules、Docs / Readme。

线上截图：`/tmp/l2-page17-source.png`；复核脚本：`/tmp/qa-l2-page17-import.mjs`。

## 与 W1 的对应关系

完整内容已迁入 `src/components/slides/V2_L2P04d_PRDToRules.tsx`，对应源组件 `../vibe-coding-master-l2/src/components/slides/L2P04d_PRDToRules.tsx`。保留原图、标题和全部三项说明，只将共享样式导入改为 courseUi，并为图片主面板与说明面板添加圆角。

2026-10-04 当前 App 中为第 38 页，主线「C04_Ground · 项目基建」章节的第一张内容页；前一页是第 37 页章节分隔，后一页第 39 页是 CLAUDE.md。建议保留这个主线位置，作为 PRD 练习 → 项目基建 → CLAUDE.md 的过渡，不重复添加。若课堂需要提前讲，可移动现有页而非复制。

本次无需新增 slide；该页无同桌练习措辞，无保证 AI 自动可靠完成或无需人工验证的绝对承诺。

## 素材核对

两份 `public/adlc-prd-rules-flow.png` 的 SHA256 相同：`4b3aa4a64f7992967c9bb011a8a62ece648c537aa7a0fc7f0dd254e6dc51f5a1`。

本地 W1 已实际打开 `http://127.0.0.1:8026/?page=38`，显示 38 / 80；标题和三项文字与线上原页一致。1600×900 截图目视确认完整图片、圆角与三个说明区域均可见，无重叠或截断。截图：`/tmp/w1-imported-l2-page17.png`。
