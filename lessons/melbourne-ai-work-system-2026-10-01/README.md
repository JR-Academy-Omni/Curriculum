# 企业 AI 实战分享 · 墨尔本 2026.10.01

用户提供 Canva 主控稿的 JR 网页版本，保留原稿顺序，并按用户要求在联合主办后加入4页机构与产品介绍，共14页。嘉宾出场：Michael → Lightman → 李敏 → Michael Yang。

- 正式地址：`https://jracademy.ai/curriculum/lessons/melbourne-ai-work-system-2026-10-01/`
- 原稿： https://canva.link/5medn4sfe0328rm
- 内容核对：`research/canva-transcript.md` 与 `research/canva-page-map.json`。
- 视觉基准：仓库 `.claude/skills/talk-deck/SKILL.md`，直接复用用户指定的老板9月稿 `editions/2026-09/src/components/deck.tsx`；具体第8页 `S24_AICircleIntro` 的双主面板与黄色图片说明区。见 `STYLE_REFERENCE.md`。
- 维护嘉宾链接：`src/data/speakers.ts`。李敏直接下载用户提供的原版 PPTX，内容、版式和备注均不修改；旧网页入口也转到原版；其他三位未提供演讲材料链接，暂显示资料待补充，不使用猜测链接。
- 二维码：直接保留原稿微信群二维码完整图片，原图注明 10 月 6 日前有效。
- JR 黑色 logo 为用户官方原始 PNG，SVG 为同一文件的无损嵌入；ANZ / Bupa 和人物图片来自用户 Canva。

```sh
bun install
bun run dev
bun run build
```

运行时五个文件原样来自 `_template`。方向键、空格翻页；F 全屏；V 摄像头；`?page=N` 直达。浏览器只显示已核验来源中的活动信息，不补写未确认的讲述时段。

2026-09-30 照片修订：按用户最新提供原图更新嘉宾人像与封面，照片不做生成或修饰；通过CSS等比展示。

当前第3至6页依次为匠人学院介绍、匠人产品与服务、ANZ介绍、Bupa介绍；嘉宾顺序不变，李敏原版下载现位于第10页。机构简介来源见 `research/cohost-profiles.md`。
