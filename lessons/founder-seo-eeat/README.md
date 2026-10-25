# AI时代的SEO / GEO基础与实战

Lightman · 81页 · 八部分 · 已部署，2026-10-18线上浏览器核验。

- 完整案例试看：https://jracademy.ai/curriculum/lessons/founder-seo-eeat/preview.html
- 课程课件：https://jracademy.ai/curriculum/lessons/founder-seo-eeat/
- 课程目录：https://jracademy.ai/curriculum/lessons.html
- 完整参考材料：https://jracademy.ai/curriculum/lessons/founder-seo-eeat/materials/course-workbook.html

2026-10-25周日，四小时线上；布里斯班13:30 / 悉尼14:30。早鸟A$179至10/20 23:59，10/21 00:00起A$229，均按布里斯班时间。报名仍为私信咨询，未接支付；回放/证书等未确认。视频等待本人录音。

第2页打开完整成果示例，第3页按章节跳转。N备注，P全页打印预览，V摄像头，方向键翻页。试看直接展示五个完整案例与五张内容图；真实观察、人工改稿、教学实施方案分别注明。

内容源src/data/course-v2.json，每页一个Rnn_Course.tsx；共享引擎保持不变。完整大纲、RUNSHEET、WORKSHEET和SOURCE_MAP提供流程、操作和来源。

发布仅通过GitHub Actions的Deploy SEO GEO Course工作流，在GitHub托管Ubuntu云端构建、浏览器检查和部署；本电脑未运行构建或CI。首次真实公开回读已从目录进入五个案例，核对图片、手机布局、原第52/81页课件与完整工作单。

初次发布源码751ba325a8f76d7bb264cc15d61f24935b8116ea；首次Actions任务的上传步骤成功，但回读遇到空响应导致任务标为失败。独立公开浏览器验收已通过，后续命令行回读仍收到空响应；已定位云端请求先收到HTTP202且浏览器随后发生站点校验跳转；发布验收等待真实Chrome加载课程后，再从同一浏览器上下文读取不可变回执，核对目录、五案例和原课件，不缩减检查或更改防护。当前发布SHA与Actions地址以线上release.json或release-SHA.json为准。

## 2026-10-25 · English terminology (local revision)

- Page 19 explains sponsored, UGC and nofollow with three HTML anchor examples; href, anchor text and rel are distinguished from noindex.
- Reviewed all 81 pages. English terms and acronym expansions now supplement the Chinese teaching explanations; exercises remain English.
- Versioned glossary: src/data/terminology.json (72 entries); page mappings: src/data/page-terms.json; examples: src/data/link-examples.json.
- Run python3 scripts/build-terminology.py to rebuild public/materials/seo-geo-glossary.html. The glossary is linked from relevant slides and the source slide.
- This revision is local only, not committed, pushed or deployed. No CI was triggered.

### Page 32 local revision · 2026-10-25

Structured Data slide has Shopping, concept and type views (`?page=32`, optional `sd=concepts` or `sd=types`). Full examples: [Structured Data handout](public/materials/structured-data-shopping.html). Source fixture: src/data/structured-data-lesson.json; deterministic rebuild: python3 scripts/build-structured-data-handout.py. Fictional product example; no Google submission. Local / pending deployment.
