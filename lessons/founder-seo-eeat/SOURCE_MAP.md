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

## Current page68 / source69 · Citation demonstration, 2026-10-25

Real source: [MDN HTTP404](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/404), definition and common causes paraphrased. [Google generative AI guide](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide) describes source links supporting answers. AI-style answer is an explicitly labeled teaching illustration; the Google-penalty interpretation is labeled wrong, not asserted as fact. No AI search or provider call executed.

## Currentpage66/source67 · SEO vs GEO

[Google generative AI optimization guide](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide) explains that generative AI features use core search/index/ranking foundations and existing SEO practices remain applicable; GEO is industry terminology. Slide distinguishes presentation/measurement from On-site/Off-site location. Coffee tutorial is a scenario, not observed search performance.

## Page6 · SEO vs SEM, 2026-10-25

Sources: [Google Ads SEM definition](https://business.google.com/uk/resources/articles/search-engine-marketing/), [Google SEO vs PPC](https://business.google.com/us/resources/articles/seo-vs-ppc/), [BigCommerce SEM glossary](https://www.bigcommerce.com/glossary/what-is-sem-search-engine-marketing/) for terminology variation. Paid-search convention is stated explicitly; broader usage may include SEO. No numeric timeframe, CPC, ranking or conversion outcome promised. Coffee query is an illustrative scenario; no campaign created.

## Page52 · Moz DA / PA, 2026-10-25

Primary sources: [Moz Authority Scoring Guide](https://moz-static.s3.amazonaws.com/products/landing-pages/announcements/Authority_Scoring_Guide.pdf), [Moz Page Authority Whitepaper](https://moz-static.s3.amazonaws.com/products/landing-pages/PageAuthorityWhitepaper.pdf), [Moz-issued Page Authority announcement](https://www.businesswire.com/news/home/20200901005165/en/Moz-To-Update-Proprietary-Page-Authority-Metric-to-Better-Predict-Ranking-Ability). Historical guides support concepts, not a claim about current formula weights/version. Main Moz learn pages could not be fetched; accessed Moz-hosted PDFs instead. Teaching values40/35/8 are fictional, not live metrics. No Moz API or paid account access.

## Page6 · Paid / Organic Search visual structure

User-supplied original slide informed the need for a visual SERP breakdown. Built new HTML schematic with fictional shop/results/example.com and explicit schematic label. [Google visual elements gallery](https://developers.google.com/search/docs/appearance/visual-elements-gallery) supports result anatomy and variation by query/device/locale; [Google SEO vs PPC](https://business.google.com/us/resources/articles/seo-vs-ppc/) supports organic/paid distinction. No real search ranking, advertising performance or campaign is claimed.

## Page16 · Heading Structure, 2026-10-25

[MDN HTML Heading Elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/Heading_Elements) supports semantic heading levels, CSS for visual size, one H1 as a recommended practice, and avoiding skipped levels when entering subsections. Coffee-machine article is a structural example; it does not claim tested descaling instructions. Heading tree and HTML show the same outline.

## Page16 · Lightman Website vs 论文模型

用户于2026-10-25明确提供并要求加入自己的教学理论。原图保存在 public/materials/lightman-website-paper-theory.png；作为用户提供的历史教学图原样展示，不宣称截图内容为当前网页状态。类比视图署名 Lightman 教学模型；不将内容组织类比当作Google官方排名模型。

## Page13 · On-page SEO annotation, 2026-10-25

User-provided On Page Ranking Factors slide supplies the visual teaching approach: checklist mapped to visible webpage elements. Recreated as original HTML kitchen-article teaching example using existing figures/white-kitchen.png from historical course material. No live publication, tested storage results or ranking outcome claimed. [Google SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide) supports descriptive headings, natural readable content, meaningful image context/alt and descriptive links. No blanket ban on acronyms or promise of featured snippets copied from historical slide.

## Page19 · Bad SEO Practices, 2026-10-25

[Google Spam Policies](https://developers.google.com/search/docs/essentials/spam-policies) checked for Keyword stuffing, Cloaking, Hidden text/link abuse, Doorway abuse, Scaled content abuse, Link spam and Sneaky redirects; [ICANN About Cybersquatting](https://www.icann.org/resources/pages/cybersquatting-2013-05-03-en) for bad-faith trademark-domain registration. User-provided cheap-flights image stored as materials/keyword-stuffing-cheap-flights.png, shown as a negative teaching example. Other scenarios are illustrative. Swapping pages is retained as industry vocabulary, not represented as a standalone current Google policy heading. Ordinary duplicates, accessible hidden text, legitimate updates and ordinary domain investment explicitly distinguished. No tactics executed.

## Page18 · Site Structure, 2026-10-25

[Google site navigation structure guide](https://developers.google.com/search/docs/specialty/ecommerce/help-google-understand-your-ecommerce-site-structure) supports reachable hierarchy and actual page links as site-relationship evidence; [Google URL structure guide](https://developers.google.com/search/docs/crawling-indexing/url-structure) supports clear descriptive URL examples. User image informs tree-diagram teaching approach; rebuilt as original labeled coffee-site diagram. All routes are illustrative, not existing production paths or authorized migrations. No ranking-flow quantities or guaranteed best topology claimed.

## Page15 · Title Tag, 2026-10-25

[Google Title Links](https://developers.google.com/search/docs/appearance/title-link) supports distinct descriptive title elements, concise branding, avoidance of stuffing, multiple title-link inputs and device-width truncation without fixed title-element length limit. Historical property SERP image supplied by user is retained at materials/title-link-property-example.png. It is labeled historical; no current listing/price claim made. Search title shown is not represented as observed page-source title. Coffee Notes browser/H1/code is a separate teaching example, not the actual property HTML.

## Page15 · Meta Description, 2026-10-25

[Google Snippet documentation](https://developers.google.com/search/docs/appearance/snippet) supports page-content-first snippet creation, occasional meta-description adoption, query variation, distinct page descriptions and truncation by device width without a universal character limit. Two coffee search results are explicit HTML teaching schematics using example.com, not real Google search observations. Description and body extract are illustrative text, not tested machine instructions. No claim of guaranteed adoption, ranking or CTR impact.

## Code Topic Rail, 2026-10-25

User-provided legacy Code slide establishes the requested persistent left-side sequence. New content-layer CodeTopicFrame reproduces the seven-topic teaching navigation using existing brand tokens and lesson content. No legacy “under60characters” or mandatory title CTA claim imported. No change to protected SlideEngine/ui/theme files or production route shape.

## Page39 · Site Speed example, 2026-10-25

[Web Vitals](https://web.dev/articles/vitals), [FCP](https://web.dev/articles/fcp), [retired TTI](https://developer.chrome.com/docs/lighthouse/performance/interactive), [retired FMP](https://developer.chrome.com/docs/lighthouse/performance/first-meaningful-paint) checked. User-provided historical Forbes filmstrip stored in materials/site-speed-legacy-timeline.png, with retirement/threshold context. New five-frame HTML phone sequence is schematic and uses existing historical kitchen image;0.8s/2.4s/3.0s/3.35s are invented teaching timings explicitly labeled, not observed metrics.350ms illustrates one interaction, not a measured page-level INP. No real speed test, performance gain or ranking claim.

## Page40 · Page Experience framework, 2026-10-25

[Google Page Experience](https://developers.google.com/search/docs/appearance/page-experience) checked for no single signal, CWV used by ranking systems, other experience aspects not interpreted as standalone direct ranking boosts, and continued importance of relevant content. [INP replacement announcement](https://web.dev/blog/inp-cwv-march-12) confirms2024-03-12 replacement ofFID. User's legacy diagram is preserved as materials/page-experience-legacy-framework.png with corrections, not treated as current full signal taxonomy or proof that mobile/security work is complete. Original current metric cards retained in experience=metrics. No website performance result or ranking guarantee claimed.

## Page40 · Detailed LCP / INP / CLS comparison, 2026-10-25

[LCP](https://web.dev/articles/lcp), [INP](https://web.dev/articles/inp), [CLS](https://web.dev/articles/cls) checked for eligible viewport content, interaction timing scope and exclusion of scrolling/zooming, and maximum session-window score rather than lifetime sum. Original user three-column LCP/FID/CLS image preserved at materials/cwv-lcp-fid-cls-legacy.png, linked as legacy material. New cards use current INP, give representative HTML elements and diagnostic questions, not observed measurements or guaranteed fixes. Input delay is distinguished from processing and presentation delay; INP is not total asynchronous task completion time.

## Page40 · LCP elements and changing candidates, 2026-10-25

[web.dev LCP](https://web.dev/articles/lcp) checked for five eligible element types, viewport-visible size, exclusion heuristics and updated candidates as larger content paints. User legacy LCP slide saved as materials/lcp-elements-legacy.png and linked as original material. New HTML three-frame coffee-page illustration shows small text→headline→hero photo, with green outlines as illustrative candidates; no measured LCP or guarantee of hero always being final candidate. Visible size distinguished from resource byte size and complete load. Viewport term added to glossary.

## Page40 · FID → INP timeline, 2026-10-25

[web.dev FID](https://web.dev/articles/fid) checked for deprecated status and first-input-wait-only definition. [web.dev INP](https://web.dev/articles/inp) checked for whole-visit interactions, processing/presentation scope and distinction from completion of all asynchronous effects. User original saved as materials/fid-timeline-legacy.png. New diagram uses fictional teaching values180+60+40=280ms with proportional widths720/240/160; no real trace, measuredFID, measuredINP or optimization gain.280ms is one interaction latency, not automatically pageINP.


## Page41 · CLS layout shifts, 2026-10-25

[web.dev CLS](https://web.dev/articles/cls) checked for existing visible elements changing start position, Impact Fraction × Distance Fraction, maximum Session Window (under1second between shifts, up to5seconds), recent discrete input500ms exclusion, and good≤0.1 at75th percentile segmented by device. Three views: cls=shift, cls=reserved, cls=details. User original preserved as materials/cls-layout-shifts-legacy.png. Phone before/after diagrams, arithmetic0.5×0.2=0.10 and window scores0.05/0.12 are explicitly controlled teaching schematics with fictional values, not measured website CLS or evidence of improvement.


## 2026-10-25 独立页课堂修订

- 将 Lightman Website vs 论文原图作为真正的第17页，将 Moz DA/PA 对照作为真正的第18页；从原权威性页移除 metrics 切换入口。
- 课件现为82页，App、课程数据、讲师备注及左侧路线链接同步；CLS现为第43页。
- 本地 TypeScript/Vite build 通过；浏览器已核对第17/18页桌面画面。未提交、未部署、未触发CI。

## 2026-10-25 作者小节

显示52–54的来源与推导见research/person-eeat.md：Google Helpful Content / Who / How、Simon About、Django官方FAQ、Datasette与GitHub2023 Accelerator名单。个人IP链条为教学解释，不是Google公开评分公式。
