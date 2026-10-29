# AGENTS.md

## Owner 硬规则：Curriculum 不接入 GA，禁止爬虫抓取和索引（2026-10-26）

- Curriculum 是课件与教学资料区，不是 SEO 获客页；适用于 `/curriculum`、`/curriculum/*`、目录、课件、独立构建产物及兼容旧域名入口。即使主站以后正式开放索引，本规则仍独立生效。
- Curriculum 不需要 GA / GA4 / GTM，不新增或恢复埋点，不因缺少 measurement ID、page_view 或 GA 数据而报故障，不再将 Curriculum 统计覆盖列为缺口。已有注入脚本或历史 GA 方案不能覆盖本规则；后续相关代码修改应移除 Curriculum 注入，不得扩大主站追踪到课件。
- 禁止爬虫抓取：由各服务域名根目录 `robots.txt` 明确禁止 `/curriculum` 及 `/curriculum/`；有独立课件域名时，该域名根 `robots.txt` 应禁止全站。不能用课件子目录内的 robots.txt 代替域名根规则。
- 禁止搜索索引：页面及错误响应保持 `X-Robots-Tag: noindex, nofollow`，HTML 同步保留 robots / googlebot 的 noindex,nofollow；不能只依赖主站临时预上线响应头，也不能把 robots.txt 的抓取禁止当作已完成去索引。
- 不进入公开 sitemap，不提交索引请求、不为课件申请收录。监控只核对根 robots 禁抓、noindex 响应／页面标签和 sitemap 排除；禁止把没有搜索流量或 GA 数据解释为失败。
- robots 与 noindex 约束遵守规则的爬虫，不是访问控制；不得声称可以阻止所有恶意抓取。若需阻止未授权访问，另行按明确需求落实鉴权／访问控制。
- 此规则记录不代表线上配置已修改或验收，不授权提交、推送、CI/CD 或部署；未落实的禁止抓取项须如实标记待修复。

## 制作 PPT / 网页课件：必须使用 Talk Deck

本仓库的课程 PPT、讲座、公开课和课程解读会默认制作成网页 Slide Deck。**使用 `/talk-deck`，制作或修改前完整读取 [Talk Deck Skill](.claude/skills/talk-deck/SKILL.md)**；不要把创建完整 Bootcamp 的 `bootcamp-curriculum-creator` 当成单节 PPT 的制作入口。

- 从 `lessons/_template/` 创建新课件，遵循 Skill 的 PRD、React SlideEngine、品牌和验证流程。
- 每份独立课件必须在同一次修改中登记 [lessons.html](lessons.html)，写清课次、标题、讲师、时长、页数、课程映射、入口和资料链接，同步 `CHANGELOG.md`。
- 发布时同步课件与目录；发布后从 [线上 Lesson 列表](https://jracademy.ai/curriculum/lessons.html) 打开课件核验，再标记已部署。未发布修订写 Local / 待部署，旧版按实际状态保留。
- 用户要求不部署时，只完成授权的更新、验证、commit / push；push 使用非 main 分支，因为 push main 会触发生产部署。不得自动合入 main 或调用发布。
- 所有 PPT、讲座、课程课件和演示稿必须先制作 HTML 在线版，统一使用 Talk Deck；禁止生成或交付 `.pptx`，不得推荐或转交 Canva 作为替代。PDF 仅从已验证的同一 HTML 打印生成。完整 Bootcamp 的大纲管理另用课程管理 Skills。
