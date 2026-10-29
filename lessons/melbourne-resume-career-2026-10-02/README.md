# 【墨尔本】简历 × 职场答疑分享会

2026 年 10 月 2 日，墨尔本大学。18 页，采用 talk-deck / JR Register B 视觉，并以用户提供的线上39页最新版第8页为实际视觉参考。

## 公开放映

https://jracademy.ai/curriculum/lessons/melbourne-resume-career-2026-10-02/?page=1

## 现场使用

- `output/melbourne-resume-career-2026-10-02.html`：离线网页版，单个文件已包含图片和运行代码。用 Chrome / Edge 打开即可；方向键或空格翻页，F 全屏，V 切换摄像头（浏览器权限允许时）。
- `output/melbourne-resume-career-2026-10-02-cover-matched.pptx`：可编辑 PowerPoint，文字与面板保留原生对象。设计中文字体为 Noto Sans SC，网页版内置同参考稿的 Bricolage Grotesque、DM Sans 和 Space Mono；封面按 83px / 900 / -3px 字距与深蓝黑文字对齐。PPTX 中文为 Noto Sans SC，等宽栏目为 Menlo。PowerPoint 使用原生文本，目标电脑未安装字体时请使用 PDF / HTML 保持版式。
- `output/melbourne-resume-career-2026-10-02.pdf`：18 页静态投屏备用。

## 内容和资产

封面后为匠人介绍与产品业务，再进入流程、主题、四位嘉宾、圆桌、简历诊断、Q&A 与结束。用户提供的原始页码有跳号，成品按实际内容连续编号。

照片按用户附件顺序对应 Lightman、Ethan Wang、Shirley Chen、Giovanni Chen，原始像素不修改。JR 和 UMBA 为主办方；Shirley 的 Deloitte / EY 标记为过往实习经历；CoinW 放在 Giovanni 页。用户在本轮明确确认 Ethan 的公司为 Wobitech，并要求在 Ethan 介绍页放置其公司 Logo。资产来源见 `research/assets.md`。

## 修改与重建

`scripts/build-content.py` 保存完整文案和布局；`src/data/deck.json` 是网页与 PPTX 的共享场景。修改生成脚本后依次运行：

1. `python3 scripts/build-content.py`
2. `node scripts/measure-markers.mjs`
3. `npm run build`
4. `node scripts/pack-offline.mjs`
5. `node scripts/export-pptx.mjs --output output/新文件名.pptx --label 新版本`

浏览器检查及 PDF 导出用 `scripts/review-web.mjs`（先在 127.0.0.1:5198 启动开发服务）。离线检查用 `scripts/review-offline.mjs`。导出脚本使用本机 Codex 随附 Node / Python / artifact-tool，环境路径可在导出脚本中配置。

SlideEngine、ui、CameraBubble、theme 和 main 逐字复制 `_template`。本目录为独立活动制作稿，已接入官网部署流程。公开放映入口：https://jracademy.ai/curriculum/lessons/melbourne-resume-career-2026-10-02/?page=1
