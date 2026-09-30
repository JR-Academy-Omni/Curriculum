# 9月场｜墨尔本 AI 创业项目展示交流

22 页现场主持演示稿，使用 curriculum talk-deck 模板，1600×900。

## 使用
- 线上放映：https://jiangren.com.au/curriculum/lessons/melbourne-ai-startup-showcase-networking/editions/2026-09/?page=1
- 本地 PowerPoint 交付：`output/melbourne-ai-startup-showcase-2026-09-30.pptx`，文字可编辑。
- 本地 PDF 交付：`output/Melbourne-AI-Showcase-2026-09.pdf`，可离线投屏。
- 网页：本目录运行 `npm run dev -- --host 127.0.0.1 --port 5197`，打开 http://127.0.0.1:5197/ 。首次使用需 `npm install`。PPTX/PDF 是本地导出，不随网页发布。
- 方向键 / 空格翻页，F 全屏，`?page=11` 直接打开第一个项目，`?print=1` 显示打印视图。
- 本次源稿和成品独立保存在 `editions/2026-09/`。未来月份另建目录。

## 内容
1–3 开场与议程；4–9 合作伙伴；10 分享顺序；11–17 七个项目；18 讨论；19–20 AI圈与入群；21–22 10月和11月活动宣传及报名二维码。

新金山加入入口为 https://newgoldmountain.io/join 。微信原始群码注明 10月7日前有效。

## 修改
当前网页内容与构图在 `src/components/slides/` 的22个独立 React 页面中修改。`src/data/deck.json` 仅保留旧版历史文案，已不驱动网页。`scripts/build-content.py` 保存初始文案与版式生成逻辑。PPTX 可用 `scripts/export-pptx.mjs` 重新导出。机构来源见 `research/sources.md` 和 PPTX 每页备注。

## 下一期活动预告
- 10月场：2026年10月28日（周三），墨尔本当地时间17:30–20:30。
- 11月场：2026年11月25日（周三），墨尔本当地时间17:30–20:30。
- 两场地点均为 ANNG Gallery，Level 17, 60 Albert Road, South Melbourne VIC 3205。
- 网站系统时间与正文存在一小时差异，用户已明确确认演示稿按正文17:30–20:30。

## 2026-09-30 视觉重做（本地）
已按当前 talk-deck 采用暖色网格纸、marker下划线、圆角主面板与品牌偏移阴影。旧 `scripts/export-pptx.mjs` 基于历史坐标JSON，不代表新版网页，禁止将其输出当作新版交付。此次未重新生成PPTX/PDF，未部署。

## 入群二维码重复展示
按用户要求在封面后、分享顺序后、开放讨论后重复同一入群页，并保留原入群页。共25页，扫码页为第2、12、21、23页，统一复用 S20_Join 与原始群二维码。

## 活动交流与限时规则
本场为非正式项目交流，可能建立投资、融资或客户联系，不承诺成果。每个项目含答疑总计最多15分钟，建议展示10分钟及答疑5分钟；到15分钟主持人停止展示，最后自由交流。前置及重复入群页同步显示简明规则。

## AI圈介绍与已开展城市
匠人学院后新增10页：AI圈介绍、8城总览、悉尼/墨尔本/布里斯班/珀斯/阿德莱德/新加坡/吉隆坡/成都各一页。事实来自 apps/ai-circle-funding/src/cityShare.ts 的active配置，图片复用本地官网素材。共35页，入群页现位于第2、22、31、33页。新增介绍从第6页开始。
