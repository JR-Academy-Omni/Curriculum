# 指定参考页复制记录

2026-09-30，用户明确要求：删除本活动原第13页，将9月参考稿实际第7–17页插在匠人学院介绍后，第24页放最后。复制时参考源版本为 `9779929865ea5863c97ccc3c94b09adb2533864e`；线上浏览核对为39页版本。9月目录不作修改。

来源：https://jracademy.ai/curriculum/lessons/melbourne-ai-startup-showcase-networking/editions/2026-09/?page=24

| 源页码 | 目标页码 | 原组件（文件内容一致） |
|---:|---:|---|
| 7 | 4 | S37_MetaTree.tsx |
| 8 | 5 | S24_AICircleIntro.tsx |
| 9 | 6 | S25_AICircleCities.tsx |
| 10 | 7 | S26_AICircleSydney.tsx |
| 11 | 8 | S27_AICircleMelbourne.tsx |
| 12 | 9 | S28_AICircleBrisbane.tsx |
| 13 | 10 | S29_AICirclePerth.tsx |
| 14 | 11 | S30_AICircleAdelaide.tsx |
| 15 | 12 | S31_AICircleSingapore.tsx |
| 16 | 13 | S32_AICircleKualaLumpur.tsx |
| 17 | 14 | S33_AICircleChengdu.tsx |
| 24 | 25 | S20_Join.tsx |

城市详情共享组件AICircleCitySlide.tsx同样原样复制；DeckFrame/deck.tsx与来源一致，五个锁定runtime不改。所有资源放在本活动public中，使用本活动BASE_URL，不依赖9月目录的线上资源。

参考第7页的MetaTree白色logo在原白面板中本就不显眼，沿用用户指定页面，不擅自替换。第24页文案、群二维码与格式原样保留。

## 资源校验

| 本地资源 | SHA-256 |
|---|---|
| products/metatree.png | 1e0120e95099fcc62407691cc0cba2db693890f31ecc5327a15c002273552efa |
| ai-circle-qr.jpg | eea452e43eab5534cec91ddfba630950542252de522d277199e7ae12ad3ecdcb |
| ai-circle/adelaide-paper-cut.webp | 1ad78f2466d1daa50c785fdf0876c8c2e362333bf6c934e0f9cd24e4d9f34c93 |
| ai-circle/brisbane-paper-cut.webp | 6e0e1d46a969ae6a02409c1a8e5d17f283a15d02dc3cff873b4b0d866f678ccf |
| ai-circle/chengdu-paper-cut.webp | ebe78353389c14a42686433727857aeffc3ac08ce18394e0f7204a84bb767774 |
| ai-circle/kuala-lumpur-paper-cut.webp | 52992c67f9df611b09a3c20e0d89323a413194f7c2d68df644d3bf597c765b49 |
| ai-circle/melbourne-paper-cut.webp | 80b8703d701f4de550d713613b61fa08e0e95ba84c355a5d2a1a7c8af9fa79e3 |
| ai-circle/perth-paper-cut.webp | d4761618a944d10bf7afb4c991801d876e4b8ae9632854f30357cb09694b9dba |
| ai-circle/singapore-paper-cut.webp | 715142556a08134a088359948fe92a761c1d5c8ca885f0e18a94562dd4fe01d5 |
| ai-circle/sydney-community.webp | 5cb09596f35128da4f1ee20f06ad7139aa3c1be6db81cb9d5b0cb4b0f48e695d |
| ai-circle/sydney-paper-cut.webp | 7cbb061216662db2bb0630f7f61f34729ec5a5c2ac26a46665761da4b135dd99 |
