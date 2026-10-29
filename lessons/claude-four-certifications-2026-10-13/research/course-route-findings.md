# 考证匠 Claude 学习页面入口核验

核验日期：2026-10-13。只读访问，无登录、无账号凭据、未点击 AI Tutor/AI 讲解等付费模型入口。

## 可用于真实学习内容截图的入口

四项学习中心均返回 HTTP 200：

- Claude Certified Associate – Foundations：https://jiangren.com.au/certifications/exam/ccao-f/learn
- Claude Certified Developer – Foundations：https://jiangren.com.au/certifications/exam/ccdv-f/learn
- Claude Certified Architect – Foundations：https://jiangren.com.au/certifications/exam/ccar-f/learn
- Claude Certified Architect – Professional：https://jiangren.com.au/certifications/exam/ccar-p/learn

四项第一章入口形态均为 `https://jiangren.com.au/certifications/exam/{slug}/learn/exam-overview`，返回 HTTP 200。

Playwright 新建匿名浏览器上下文真实 body 读回：

- `ccao-f/learn`：看到「课程章节」及全部9章卡片，包含 Prompting 与任务执行、输出评估与验证、产品与模型选型、工作流集成与方案设计等。部分章节标需解锁；没有登录或购买。
- `ccdv-f/learn/exam-overview`：看到第一章长篇实际正文和左侧章节目录。正文含考试概览、内容域表格、备考建议等；左侧当前呈现10章。
- `ccar-f/learn/exam-overview`：看到第一章实际正文和章节侧栏。
- `ccar-p/learn/exam-overview`：看到第一章长篇实际正文、七域权重表与章节侧栏。

服务端 HTML 的学习目录没有章节链接，不能据此推断匿名访问被拦。客户端 hydration 后真实可见。

## 公开 API 目录

`https://api.jiangren.com.au/certifications/{slug}/chapters` 四项均返回 HTTP 200。仅读取 slug/title/chapterNumber，未读取付费章节正文。

- ccao-f：9章。
- ccdv-f：15章，含若干「官方课程」引用章节。
- ccar-f：14章，含 Claude 101、Claude API、MCP 等官方课程引用。
- ccar-p：9章。

API 章节数不能直接冒充前端可见章数：Developer 第一章侧栏当前为10章，而 API 为15章。展示时以实际截图为准。

## 截图时避免误导

- Associate 学习中心右侧考试信息仍写「有效期3年」，与课件已核验的官方12个月政策冲突。应裁剪真实课程章节区域，避免把过时右栏作为本次考试政策。
- 学习页出现「已购买」徽章，但本次上下文没有登录。它不构成真实会员购买验收；裁剪章节或正文区即可。
- 课程正文属于考证匠材料，不作为独立官方事实来源，也不是官方真题。
- 左侧/顶栏名称存在产品旧简称，本次目标是展示真实学习内容，可保留截图真实性并在课件另写四项完整官方认证名称。

## 源码依据

- `apps/cert-site/src/claude-certifications.json`：四证 slugs 与已有考证匠注册入口。
- `jr-academy-web-zh/src/app/[locale]/certifications/exam/[slug]/learn/page.tsx`：学习中心路由。
- `jr-academy-web-zh/src/app/[locale]/certifications/exam/[slug]/learn/ChapterLearnHub.tsx`：课程章节卡片，CertificationAuthGate contentType=chapter_list。
- `jr-academy-web-zh/src/app/[locale]/certifications/exam/[slug]/learn/[chapter]/ChapterLearnClient.tsx`：章节正文与侧栏。
- `jr-academy-web-zh/src/config/certifications/constants.ts`：公开章节 API 路由。
