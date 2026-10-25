# 来源与素材映射 · 2026-10-18

当前页面数据：src/data/course-v2.json；每页source对应src/data/course-sources.ts。逐页设计见PRD，原80页完整保留/更新对应见public/materials/course-outline.md。

- 原稿对象：research/extracted-assets.json，26个确定性裁切对象；public/figures/。不直接播放旧PPT整页。
- 当前网页观察：research/public-page-observations-20261018.json（状态、标题、canonical）；research/lovable-browser-20261018.json（语言选择后DOM）；research/lovable-mobile-20261018.png。
- 当前局部图：research/current-case-crops.json，包含裁切区域、来源及哈希。public/cases/中的网页截图均为真实页面；正文重排与操作教具分别标明。
- 当前测量缺口：没有GSC/GA4账户结果、没有当前PSI分数、没有实际AI搜索回答记录、没有真机结果。
- 个人网站案例只说明材料组织方式；不推断Google排名收益。
- 历史图表不外推当前数字；FID→INP；FAQ富结果状态按官方更新；不沿用固定Title长度或第一条链接权重等绝对规则。

官方资料已于2026-10-18复核：Google SEO、Helpful Content、AI优化指南、ProfilePage、更新记录、AI控制与表现报告、Spam Policies、web.dev Web Vitals、OpenAI机器人说明。来源链接同时出现在课件页脚和末页。

## 补充的外部项目记录

Simon个人About中的Django主张与官方FAQ项目起源、基金会核心贡献者名单对应。支持相关贡献；不升级为全领域权威或排名原因。
- https://docs.djangoproject.com/en/dev/faq/general/
- https://www.djangoproject.com/foundation/django_core/

## 2026-10-25 · Landing Page clarification

- Page 14: Google Ads defines a landing page as the webpage reached after an ad click: https://support.google.com/google-ads/answer/14086?hl=en (checked 2026-10-25).
- Pages 12/14: page-content, title, image and link optimization reference: https://developers.google.com/search/docs/fundamentals/seo-starter-guide .
- The coffee-machine tutorial and cleaning-service booking comparison is a teaching example, not a real service, offer, provider test, or conversion result. It illustrates different content goals; it is not a mandatory universal landing-page template. On-page optimization, landing pages, and one-page site structure are distinct concepts.

- Broader analytics meaning: https://support.google.com/analytics/answer/14292358?hl=en defines the landing page as the first page a visitor sees on arrival, including blog posts and product pages. The page-14 comparison is between content/visit goals, not mutually exclusive page types. A tutorial can also be an organic-search landing page.

## 2026-10-25 · Paper analogy on page 16

Original diagram uses a labelled fictional paper structure, with no research outcomes or citations invented. Correspondences are teaching analogies, not claims that metadata equals visible text. Google references: https://developers.google.com/search/docs/fundamentals/seo-starter-guide ; https://developers.google.com/search/docs/appearance/title-link ; https://developers.google.com/search/docs/appearance/snippet .

## 2026-10-25: Breadcrumbs on page 18

Google: https://developers.google.com/search/docs/appearance/structured-data/breadcrumb . USWDS: https://designsystem.digital.gov/components/breadcrumb/ . Teaching hierarchy is not a real URL, browsing history, or ranking claim. Visible navigation and BreadcrumbList markup are distinguished in presenter notes.

## 2026-10-25: Outbound link classification (page 19)

Checked Google documentation: https://developers.google.com/search/docs/crawling-indexing/qualify-outbound-links and https://developers.google.com/search/blog/2019/09/evolving-nofollow-new-ways-to-identify . Ordinary editorial links need no special rel; sponsored, ugc and nofollow describe link relationships and are hints, not substitutes for page-level noindex.

## 2026-10-25 · English terminology and HTML examples

All 81 pages reviewed for English term retention. Canonical terms and short teaching definitions: src/data/terminology.json; mappings: src/data/page-terms.json. Three displayed HTML examples are versioned in src/data/link-examples.json and parsed to verify href/rel. Ordinary editorial links need no special rel; sponsored identifies paid placements, ugc identifies user-generated links, and nofollow applies where other values do not fit. These values are hints, not noindex. Google primary references: https://developers.google.com/search/docs/crawling-indexing/qualify-outbound-links ; https://developers.google.com/search/blog/2019/09/evolving-nofollow-new-ways-to-identify ; https://web.dev/articles/vitals ; https://developers.google.com/search/docs/fundamentals/ai-optimization-guide . No live marketing or provider execution is represented.

## Page 32 · Structured Data / Shopping, 2026-10-25 local revision

Primary references: [Google gallery](https://developers.google.com/search/docs/appearance/structured-data/search-gallery), [Product](https://developers.google.com/search/docs/appearance/structured-data/product), [Merchant listings](https://developers.google.com/search/docs/appearance/structured-data/merchant-listing), [Schema.org](https://schema.org/docs/gs.html), [JSON-LD 1.1](https://www.w3.org/TR/json-ld11/), [JSON Schema](https://json-schema.org/docs), [Merchant Center](https://support.google.com/merchants/answer/7331077?hl=en).

Teaching fixture: src/data/structured-data-lesson.json. Handout regenerated with scripts/build-structured-data-handout.py. Product, offer, price, stock and example.com addresses are fictional; no screenshot or claim of actual Google results. Distinguishes Google Search eligibility, Shopping/Merchant Center data, and advertising.

## Core Web Vitals definition · 2026-10-25

Pages36/39/40: [Google Search Central — Core Web Vitals](https://developers.google.com/search/docs/appearance/core-web-vitals) defines loading, responsiveness and visual stability; examples illustrate LCP/INP/CLS rather than measured site results.

## Page50 · Experience practical example, 2026-10-25

[Google people-first content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content) describes first-hand use and transparent methods. Activity signup scenario and sample paragraph are fictional teaching examples, clearly labeled; no real Lovable execution, customer result or screenshot is claimed.

## Page52 · Authoritativeness expanded, 2026-10-25

Primary sources: [Google E-E-A-T](https://developers.google.com/search/docs/fundamentals/creating-helpful-content), [Simon About](https://simonwillison.net/about/), [Django history](https://docs.djangoproject.com/en/dev/faq/general/), [Django Core Developers](https://www.djangoproject.com/foundation/django_core/). Checked official FAQ attribution and Former Django Core Team label (dissolved2020). Example action paths describe suggested contributions; no invitation, acceptance, client relationship or SEO gain is claimed. Data: src/data/authoritativeness-lesson.json. Full handout generated with scripts/build-authority-handout.py.

## Page53 · Trustworthiness expanded, 2026-10-25

Primary references: [Google people-first content / E-E-A-T](https://developers.google.com/search/docs/fundamentals/creating-helpful-content), [publication dates](https://developers.google.com/search/docs/appearance/publication-dates), [qualify outbound links](https://developers.google.com/search/docs/crawling-indexing/qualify-outbound-links). Disclosure placement is reader-facing teaching guidance, not a jurisdiction-specific legal compliance claim. Author Lin Yue, test results and free account relationship in the sample are fictional and labeled; no real provider/account use. Data: src/data/trustworthiness-lesson.json; generator: scripts/build-trust-handout.py.

## Page54 · Personal domain choice, 2026-10-25

Independent-domain recommendation is an editorial recommendation for stable personal branding and address control. Google [site names](https://developers.google.com/search/docs/appearance/site-names) supports domain/subdomain identities; [SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide) explains domain keywords alone have little ranking effect. No domain purchase, hosting setup or URL migration performed.
