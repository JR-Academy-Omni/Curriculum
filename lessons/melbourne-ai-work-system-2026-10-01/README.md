# 企业 AI 实战分享 · 墨尔本 2026.10.01

用户提供 Canva 主控稿的 JR 网页版本。已删除原第13页，匠人学院介绍后依次展示产品与服务、9月参考稿第7–17页，并以参考稿第24页收尾，共25页。嘉宾出场：Michael → Lightman → 李敏 → Michael Yang。

- 正式地址：`https://jracademy.ai/curriculum/lessons/melbourne-ai-work-system-2026-10-01/`
- 原稿： https://canva.link/5medn4sfe0328rm
- 内容核对：`research/canva-transcript.md` 与 `research/canva-page-map.json`。
- 视觉基准：仓库 `.claude/skills/talk-deck/SKILL.md`，直接复用用户指定的老板9月稿 `editions/2026-09/src/components/deck.tsx`；具体第8页 `S24_AICircleIntro` 的双主面板与黄色图片说明区。见 `STYLE_REFERENCE.md`。
- 维护嘉宾链接：`src/data/speakers.ts`。第19页Michael的“查看分享ppt”直接打开用户原版`AI-ROI.pdf`，由浏览器在线预览。李敏通过匠人在线入口打开用户提供的原版 PPTX，使用 PowerPoint 在线预览，内容、版式和备注均不修改；无需下载。Lightman和Michael Yang未提供演讲材料链接，页面留空，不显示占位文字或按钮，不使用猜测链接。
- 尾页二维码：使用用户指定9月参考稿第24页的完整原二维码。原活动第13页已删除，旧二维码仅保留为来源档案。
- JR 黑色 logo 为用户官方原始 PNG，SVG 为同一文件的无损嵌入；ANZ / Bupa 和人物图片来自用户 Canva。

```sh
bun install
bun run dev
bun run build
```

运行时五个文件原样来自 `_template`。方向键、空格翻页；F 全屏；V 摄像头；`?page=N` 直达。浏览器只显示已核验来源中的活动信息，不补写未确认的讲述时段。

2026-09-30 照片修订：按用户最新提供原图更新嘉宾人像与封面，照片不做生成或修饰；通过CSS等比展示。

Michael Yang在封面与第22页统一使用18px圆角矩形，与其他嘉宾一致；原图带有的圆形黑边通过CSS近景裁切移出画面。

当前第3页为匠人学院介绍；第4页为匠人的产品与服务（从上一版本第15页移入）；第5–15页为指定参考稿的第7–17页；ANZ、Bupa依次位于第16–17页。李敏原版在线入口在第21页，Michael Yang在第22页；第25页为指定参考稿第24页。复制页码与资源对应见 `research/reference-page-import.md`，机构简介来源见 `research/cohost-profiles.md`。
