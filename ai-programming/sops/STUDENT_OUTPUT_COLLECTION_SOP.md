# ai-programming 学员产出收集 SOP

> 课程：人人都能学的 AI Coding 实战课（zero-to-product，Cursor + AI）
> 适用 cohort：02 期（已结业，重点回收）/ 03 期及之后（按本 SOP 执行）
> 文档版本：v1.0 · 2026-05-29
> 维护人：Mason（课程主理人）+ Aurora（Marketing 主管）+ Beta（教务）
> 单一真相文档：curriculum/ai-programming/student-portfolio/
> Trigger skill：[/cohort-ops-conductor](../cohort-ops-conductor)（待建）task #6 调用本 SOP

---

## §0. Meta + 为什么这是 P0

### 0.1 上下游依赖（解锁三条主线）

本 SOP 是 ai-programming **MARKETING_WORKFLOW_GAP_AUDIT.md 列出的 Top 2 优先级**（仅次于 Lightman 拍板 03 期 launch date），原因：一次产出收集动作能解锁三个独立下游，ROI 极高。

| 下游 | 当前状态 | 本 SOP 解锁什么 |
|------|---------|----------------|
| **销售页 OFFER WALL**（jr-academy-web-zh `/program-course/ai-programming/`） | content.ts 还没加 ALUMNI_OFFERS / SOCIAL_PROOF 区块（见 PROMOTION_PLAN §0.5）| 提供 4 大交付物的真实学员作品 URL + 一句话 testimonial + 头像/匿名 → 销售页 v1.7 update 加 OFFER WALL section |
| **02 期 cohort 复盘**（curriculum/ai-programming/cohort-02/postmortem.md，待建） | AUDIT_LOG.md 是空模板，FUNNEL_PLAN 转化率没真实数字回写 | 沉淀作品 = 完课率证据 / 学员真实痛点反馈 / outline.json 哪些 lesson 跑通哪些跑垮 |
| **公众号长文 + 小红书案例**（PROMOTION_PLAN §3 渠道 1+2） | 文案 / Summer 缺真实素材，只能引用 ai-engineer-bootcamp 的工程师 offer | 给 wechat-article-quality + xhs-draft 提供"零基础宝妈做出 landing page"这种破除门槛的具体案例 |

### 0.2 参考案例：ai-engineer-bootcamp v1.6 OFFER WALL

**ai-engineer-bootcamp** 销售页 v1.6 更新后，content.ts 加了 5 张校友 OFFER 截图（路径 `/alumni-offers/ai-engineer-bootcamp/01..05.jpg`），数据结构见 `jr-academy-web-zh/src/app/[locale]/program-course/ai-engineer-bootcamp/content.ts` 的 `ALUMNI_OFFERS` / `ALUMNI_DISCLAIMER` / `COHORT_VIBE` / `HERO_ALUMNI_BADGE` 四个 export（line 512-582）。CHANGELOG 记录该次 update 后销售页转化信号增强（Faculty + OFFER WALL 一起加）。

每张 OFFER 截图 schema：
```
{
  id: 'senior-swe-tfr-212k',
  image: '/alumni-offers/ai-engineer-bootcamp/01-...jpg',
  positionLine: 'Senior Software Engineer',
  anchorLine: 'TFR $212,800 AUD',
  breakdown: 'Base + Super 拆解',
  location: 'Sydney',
  cohort: '第 4 期校友 · 2025-12 issue',
  highlight: true,
  caption: '匿名雇主 · Retail Engineering'
}
```

### 0.3 ai-programming ≠ ai-engineer-bootcamp（一个关键差异）

**不收"拿到 offer"，收"上线作品 URL"**。这是 ai-programming 跟 ai-engineer-bootcamp 在产出形态上的根本区别。

| | ai-engineer-bootcamp | ai-programming |
|---|---------------------|----------------|
| 目标用户 | 工程师转 AI 岗 | 非技术创业者 / 转型者 / 学生 |
| 学完承诺 | 7 个简历可放项目 + GitHub repo | 4 大可上线交付物（PPT / PDF / Landing / 60s 视频） |
| OFFER WALL 形态 | offer letter / TFR 数字 / 公司名 | 可访问 URL + 视频链接 + PDF 下载链 |
| 社会证明逻辑 | "看，校友进了 EY / Macquarie" | "看，跟我一样不懂代码的人做出了一个能上线的东西" |
| 红线 | 不承诺金钱/入职 | 不承诺金钱/月入/副业（更严，因目标人群更容易被"副业变现"话术误导）|

**Persona A 创业者 / Persona B 转型者最大的疑虑是"我能不能做出来"**（PERSONAS.md §2 推测痛点），破除这个疑虑的唯一证据是"同类人做出来的真东西可以点进去看"。一个匿名校友晒出的 landing-page-anon-01.vercel.app URL 比 100 字软文有效得多。

---

## §1. 收集什么（4 大交付物对应）

ai-programming outline.json 承诺学员产出 **4 大可上线交付物**（DESIGN.md / content.ts 6 KILL POINTS 第 2 条）。每个 cohort 学员理论上至少完成其中一件作为答辩作品，本 SOP 收集这 4 类全部。

### 1.1 交付物 1 · PPT 在线版（HTML 可访问 URL）

- **形态**：HTML 页面（Slidev / Reveal.js / 课程自家 SlideEngine 导出），托管在 Vercel / Netlify / GitHub Pages
- **收集**：1 个公开可访问的 URL，5-10 张 slide
- **质量阈值**：URL HTTP 200、移动端可看、内容跟学员介绍一致
- **典型主题**：学员自己生意的"年度总结"、副项目 pitch deck、给客户的方案演示
- **校验**：Mason 点开 URL 看 30 秒，能讲清楚做的什么就算 pass
- **红线**：不收"5 分钟用 ChatGPT 生成的 PPT"——必须看得出学员自己改过结构

### 1.2 交付物 2 · A4 PDF 全家桶（至少一个）

- **形态**：海报 / Business Plan / 简历 / 提案 / 白皮书，任一即可
- **收集**：PDF 直链（S3 / Google Drive / Notion public link / 学员自己的 CDN）+ 1 句话说明"这是给谁用的"
- **质量阈值**：A4 排版完整、字体不糊、无明显错别字、有学员自己的视角不是 AI 直出
- **典型场景**：
  - Persona A 创业者：自家小生意的 BP（给银行 / 投资人 / 合伙人看）
  - Persona B 转型者：转岗简历 / 公司内部提案 PDF / AI 转型白皮书
  - Persona C 学生：求职简历 / 课设作品 / 实习项目说明
- **校验**：Beta 下载 PDF 看封面 + 目录页 + 一页正文，能识别是哪个 persona 的真实需求
- **红线**：不收"截图当 PDF"——必须是真实排版的 A4 文档

### 1.3 交付物 3 · Landing Page 网站（可访问 URL）

- **形态**：Cursor + AI 生成的静态网站，托管在 Vercel / Netlify / Cloudflare Pages
- **收集**：1 个可访问的 URL + 学员一句话说明"做什么用 / 现在有几个真实访客"
- **质量阈值**：
  - HTTP 200，移动端布局不崩
  - 至少 3 个 section（Hero / 卖点 / 联系方式）
  - 有学员自己 idea 的内容（不是直接抄课程 demo）
- **典型场景**：
  - 创业者：自家产品 / 服务的官网
  - 转型者：副业服务的展示页
  - 学生：作品集主页
- **校验**：Mason 点开 URL + 检查 view-source 看是不是抄的课程 demo，跟 Lighthouse 跑一遍移动端
- **红线**：不收"localhost:3000 截图"——必须是已部署可访问的 URL
- **特别建议**：学员被收集前应被提醒"URL 至少要在线 90 天"，不要收一个一周后 404 的链接

### 1.4 交付物 4 · 60s 知识科普视频（视频号 / B 站 / YouTube 链接）

- **形态**：学员用所学 AI 工具（Runway / Sora / 课程里教的 60s 视频 pipeline）做的一段短视频
- **收集**：视频号 / B 站 / 抖音 / YouTube 公开链接 + 1 句话说明主题
- **质量阈值**：
  - 公开可见（不要私密链接）
  - 60-120 秒，有声音有字幕
  - 内容跟学员的领域 / 兴趣相关，不是抄课程 demo
- **典型场景**：
  - 创业者：自家产品介绍短视频
  - 转型者：行业知识科普 / 副业引流视频
  - 学生：项目演示 / 求职 vlog
- **校验**：Aurora 看完整 60s + 看播放量（不强求高，只看有没有真发出来）
- **红线**：不收"私密草稿链接"——必须是已发布对公众可见的

### 1.5 至少收什么（最低线）

每个学员**至少收 1 个**（4 选 1 都行），收齐 2 个以上为 highlight 候选（销售页 OFFER WALL 优先用 highlight）。

```
最低线（足以上 OFFER WALL）：1 个交付物 URL + 1 句话 testimonial + 是否实名
完整线（销售页 + 公众号长文 + 答辩录像剪辑）：4 个交付物全交 + 拍 30s 自述视频
```

---

## §2. 触发时机

ai-programming 基础班 6 周（42 天）、进阶班 8 周（56 天）。本 SOP 时间线按基础班 D+45 结业算，进阶班按 D+60 同节奏顺延。

### 2.1 D+14（第 2 周末）· 预收集预告

**目的**：提前打招呼，降低后期"突然被催"反感
**执行**：Mason 在班级群发一条公告（不是私聊，本节是唯一的群发，后面全部 1v1）
**话术核心**：
- 提到结业后会收作品做"校友墙"
- 说明 release 同意书会发，可以选实名 / 匿名 / 完全不上墙
- 不催，只是提醒"你做的东西要留在线"
- ❌ 禁说"上墙就送 / 不上墙就没福利"

### 2.2 D+21（第 3 周中）· 进度盘点

**目的**：识别"已经有作品了"的学员，作为 early-bird OFFER WALL 候选
**执行**：Beta 翻每个学员的 Lab/Quest 提交记录（jr-academy MongoDB），找出已上线 1 个或以上作品的学员名单
**输出**：`student-portfolio/cohort-02/_progress-21d.md` 内部 ground truth 文件，标记 P0/P1/P2 学员（P0=已有完整作品，P1=有半成品，P2=还没开始）

### 2.3 D+28（第 4 周末）· 第一次 1v1 邀请

**目的**：把 D+21 盘点出的 P0 学员一对一约出来
**执行**：Mason 私聊 P0 学员，话术参考 §3.1 模板
**预期**：5-8 人响应（02 期 37 人 × P0 估 20% = 7 人）

### 2.4 D+35（第 5 周末）· 第二次 1v1 邀请

**目的**：P1 学员补料 + P0 没响应的二次接触
**执行**：Mason + Beta 分头跑（Mason 接 P0 未响应，Beta 接 P1 引导补料）
**预期**：累计响应到 12-15 人

### 2.5 D+42（第 6 周末 = 答辩前一周）· 强提醒

**目的**：明确告诉学员"答辩后 7 天内是收集窗口期"
**执行**：Mason 班级群发一条总结公告（这是第 2 次也是最后一次群发）+ 同时把 release 同意书发到每个学员邮箱

### 2.6 D+45（结业答辩当晚）· 立即收

**目的**：答辩当晚 emotional high 是同意率最高的窗口，必须借势
**执行**：
- 答辩结束后 30 分钟内，Mason 在群里贴 Google Form 链接
- Beta 同步私聊每位答辩学员"今晚提交可以上次月公众号长文，截止 24h"（轻紧迫感，不施压）
- Designer 拍答辩现场照片（征同意后）作为 cohort vibe 素材
**预期**：累计响应到 20-25 人（02 期 37 人 × 60% = 22 人）

### 2.7 D+60（结业后第 15 天）· 二次唤醒

**目的**：检查作品 URL 还在线吗 + 学员有没有继续迭代
**执行**：Mason 1v1 私聊已交作品的学员，问两个问题：
- "你的 landing-page-xxx.vercel.app 还在线吗，最近有更新什么吗"
- "有没有截图 / 反馈想加到说明里"
**输出**：更新 student-portfolio 中每个学员的 README.md，加 `last-verified-at` 字段
**红线**：检查到 404 的链接立即标记"已失效"，不放销售页

---

## §3. 收集方式（人手 vs 自动）

### 3.1 班级群 1v1 私聊（主通道）

**铁律**：除 D+14 预告 + D+42 提醒两次外，**全部 1v1 私聊，不群发**。原因：

- 群发请求 = "我们在收割" 的信号，学员反感（参考 `feedback_no_templated_group_announcements.md`，CLAUDE.md 全局红线）
- 1v1 把"采集"包装成"想看看你做得怎么样 / 帮你 review 一下"
- 私聊允许学员说"我做得不好不想上"，群发会让学员沉默

**Mason 标准话术模板**（D+28 第一次 1v1）：

```
[学员名] 你好，最近 ai-programming 学到第 4 周了，
我看到你 Quest 里那个 [具体 lesson 名] 做得挺有想法的。

我们正在整理这一期的学员作品集，想问问：
1. 你那个 [PPT/PDF/landing/视频] 现在在线上能访问吗？
2. 如果方便，能不能给我一个 URL，我想看看？
3. 完全不强制，纯粹是想看看你做出来的东西，
   你不愿意分享也完全 OK。

我们后面会做一个授权说明，
你可以决定要不要让作品出现在公开页面（实名/匿名都可以）。
```

**禁用话术**：
- ❌ "限时机会"、"上墙就有福利"、"这是给你免费打广告"
- ❌ "我们公司需要素材，麻烦支持下"
- ❌ "其他同学都交了，你呢"

### 3.2 Google Form 收集（标准通道）

**何时用**：D+45 答辩当晚的"批量收集"窗口；私聊响应后的"细节补全"

**Form 字段**（按顺序）：

| # | 字段 | 类型 | 必填 |
|---|------|------|------|
| 1 | 你的姓名 / 别名（用于卡片显示）| 短文本 | ✅ |
| 2 | 你希望以哪种方式出现？| 单选：实名 / 别名（匿名）/ 完全不公开 | ✅ |
| 3 | Cohort 期数 | 单选：02 期 / 03 期 / ... | ✅ |
| 4 | 一句话描述你做的项目（30 字内）| 短文本 | ✅ |
| 5 | PPT 在线版 URL（HTML）| URL | 可空 |
| 6 | PDF 作品下载链接（海报/BP/简历/提案任一）| URL | 可空 |
| 7 | Landing Page URL | URL | 可空 |
| 8 | 60s 视频链接（视频号/B站/YouTube）| URL | 可空 |
| 9 | 一句话 testimonial：学完这门课，你最大的变化是？| 长文本 | 可空 |
| 10 | 是否同意作品出现在以下渠道（多选）| 多选：销售页 / 公众号 / 海报 / 小红书 / 都不同意 | ✅ |
| 11 | 是否提及具体公司名 / 客户名？（如有）需另签同意 | 单选：有，已征得同意 / 有，未征得同意 / 无 | ✅ |
| 12 | 头像（选填，用于卡片显示，可上传或 LinkedIn URL）| 文件 / URL | 可空 |
| 13 | 30 天后我们会回访检查作品 URL 是否还在线，OK 吗？| 单选：OK / 不 OK | ✅ |
| 14 | 备注（任何想补充的）| 长文本 | 可空 |

**Form 配置**：
- 提交人邮箱必填（用于后续联系）
- 提交后自动发感谢邮件（含 release 同意书 PDF 附件）
- Form responses 同步到 Google Sheets `ai-programming-portfolio-{cohort}` 让 Beta 看
- Form URL 短链：`jiangren.com.au/r/portfolio-cohort-02`（找 Dev 配 redirect）

### 3.3 直接 git PR（高质量学员通道）

**适用对象**：技术背景强的学员（Persona A 中已经懂点 git 的、或 Persona C 学生中懂 GitHub 流程的）

**流程**：
1. Mason 1v1 教学员 fork curriculum repo
2. 学员在 `curriculum/ai-programming/student-portfolio/cohort-02/student-{anon-id}/` 创建文件夹
3. 按 §5 模板填 README.md + 4 个 URL txt
4. 提 PR，Mason review，merge
5. 推到 jiangren.com.au/curriculum/ 自动部署

**ROI 评估**：02 期 37 学员中预计 2-3 人走这条通道（Persona C 学生中懂 git 的）。值得做的原因：这部分学员同时是 alumni 推荐人 + git PR 本身是社群参与度信号。

### 3.4 三通道 ROI 对比

| 通道 | 预期响应数（02 期）| 单人耗时 | 数据质量 | 何时主推 |
|------|-------------------|---------|---------|---------|
| 1v1 私聊 → Form | 15-20 人 | Mason 5 min/人 | 中高 | D+28 / D+35 / D+45 |
| 答辩当晚 Form 批量 | 5-8 人 | 学员 10 min | 中 | D+45 当晚 |
| git PR | 2-3 人 | Mason 30 min/人 | 极高（含真实 commit history）| 全程开放 |

**目标**：02 期 37 人 → 累计收 10-15 人作品（27-40% 转化率），其中 5-7 人达到 OFFER WALL 候选质量（4 选 2 以上 + 同意公开）。

---

## §4. Release 同意书（隐私 / 法律）

ai-programming 学员构成有澳洲本地华人 + 中国大陆用户，需满足两边的最低合规线（澳洲 Privacy Act 1988 + 中国《个人信息保护法》）。本节是法律 / 红线主体，必须严格执行。

### 4.1 同意书核心条款

每位学员必须先看到、勾选同意的核心条款（写在 Form 提交前的说明页 + PDF 同意书附件）：

#### 4.1.1 身份呈现方式（学员选）

- **实名**：使用真实姓名 + 真实头像（要求学员上传或 LinkedIn URL，平台不替换）
- **别名**：使用学员自取的展示名（如"小李 · ai-programming 02 期"），头像可用 emoji / 简笔画
- **完全匿名**：用 `Student #anon-{N}` 编号 + 默认头像，不出现任何可识别信息
- **完全不公开**：作品仅供 cohort 内部复盘 / outline 改进参考，不出现在任何公开渠道

**铁律**：实名/别名/完全匿名 = 同一作品在不同渠道可以不同（如销售页用别名 + 公众号实名），但每个渠道的呈现方式必须在 Form 中明确选择。

#### 4.1.2 是否露脸（视频 / 头像）

- **露脸**：上传真实头像 / 视频中露脸 OK
- **不露脸**：头像用 emoji / 视频中不露脸（如有视频要求声明是否做后期处理）

#### 4.1.3 是否露具体公司 / 客户名

- ai-programming 学员里 Persona A 创业者多数有自家小生意，Persona B 转型者多数在职。**任何涉及具体公司名 / 客户名 / 真实业务数据的内容**，必须：
  - 学员声明已征得公司 / 客户同意（Form 第 11 题）
  - Beta 二次确认（D+50 1v1 跟一次，确认聊过了不是随手填）
  - 公司名第一次出现的素材里要打码 / 用"某零售公司"代替（防止后期客户反悔但素材已经传播）

**红线**：学员没主动声明征得同意 → 平台默认不公开任何公司 / 客户名相关信息，哪怕学员说"小公司没关系"。

#### 4.1.4 内容使用范围（学员勾选）

学员勾选同意作品出现在以下渠道（多选，至少选 1 或选"都不同意"，"都不同意"则不进 portfolio 公开区）：

- [ ] 销售页 `/program-course/ai-programming/`（OFFER WALL 卡片）
- [ ] 公众号长文（案例段引用）
- [ ] 小红书帖子配图（最多 1 张作品截图）
- [ ] 课程内部海报（curriculum/ai-programming/public/posters/）
- [ ] 答辩录像剪辑成 cohort vibe 视频（Mason 主导）
- [ ] 课程改进 ground truth（仅内部，不公开）

**铁律**：勾哪几个就只能用在哪几个。后期如果想加新渠道（比如外部合作媒体）必须重新签同意书。

#### 4.1.5 撤回流程

- **撤回入口**：学员邮件 `mason@jiangren.com.au` + 抄送 `aurora@jiangren.com.au`，主题 `[ai-programming Portfolio Withdraw] {自己的姓名/别名}`
- **撤回响应 SLA**：
  - 销售页 / 海报 / 课程内部页面：收到撤回邮件后 **7 天内**下线（Dev 处理）
  - 公众号长文：长文不删，但**追加一段说明**该案例已应学员要求撤回，作品 URL 替换为说明文字
  - 小红书帖子：**24h 内**下架（运营 Summer 处理）
  - 答辩录像：7 天内剪掉对应学员段落
- **撤回记录**：每次撤回记录到 `student-portfolio/cohort-02/_withdrawals.md`，包含撤回日期 / 学员标识 / 撤回的渠道 / 处理人 / 完成日期
- 撤回不影响学员任何已有学习权益（明确写在同意书里）

### 4.2 同意书 PDF 模板存放

- 路径：`curriculum/ai-programming/sops/RELEASE_CONSENT_FORM_TEMPLATE.md`（待 Aurora 起草 v1，本 SOP ship 后 7 天内补）
- Aurora 负责审定法律措辞（必要时找外部 legal review）
- 每期 cohort 沿用同一份模板，重大版本变更（如新增渠道）需 Lightman 拍板

### 4.3 退费学员的特殊规则

- 退费学员（无论原因）一律**不收作品 / 不上 OFFER WALL**，已收到的素材进入 `student-portfolio/cohort-02/_refunded-removed/` 隔离区
- 即使学员退费后说"我作品挺好的可以用"，仍**默认不用**——退费 = 课程关系终止，继续用会让其他在课学员感觉"退费了还能上墙"破坏信任
- 这条规则写在同意书里让学员事前知道

---

## §5. 落地路径（git 真实路径）

### 5.1 目录结构

落盘到 curriculum repo（主 monorepo `/Users/lightman/Documents/sites/jr-academy-ai/curriculum/ai-programming/`），结构如下：

```
curriculum/ai-programming/student-portfolio/
├── README.md                              # 本目录说明 + 链回本 SOP
├── _consent-form-versions/                # 同意书版本归档（v1 / v2 ...）
├── cohort-02/                             # 已结业，重点收集
│   ├── _progress-21d.md                   # D+21 内部盘点（不公开）
│   ├── _withdrawals.md                    # 撤回记录（不公开）
│   ├── _refunded-removed/                 # 退费学员素材隔离区（不公开）
│   ├── student-anon-01/                   # 一个学员 = 一个文件夹
│   │   ├── README.md                      # 卡片 + testimonial + 4 URL（公开）
│   │   ├── consent.json                   # 学员勾选了哪些渠道（用于 Dev 拉数据）
│   │   ├── ppt-live-url.txt               # PPT URL 单文件（便于 grep）
│   │   ├── pdf-portfolio-url.txt          # PDF URL
│   │   ├── landing-url.txt                # Landing URL
│   │   └── video-url.txt                  # 视频 URL
│   ├── student-anon-02/
│   │   └── ...
│   ├── student-real-mason-mock/           # 如学员选实名，文件夹用实名
│   │   └── ...
│   └── ...
├── cohort-03/                             # 03 期开课后建
│   ├── _progress-21d.md
│   └── ...
└── cohort-04/                             # future
```

### 5.2 单学员 README.md 模板（公开 = 销售页能直接拉的卡片）

```markdown
# {学员展示名} · ai-programming 02 期

## 一句话

{学员自述的 30 字内 testimonial — 学完最大的变化}

## 我做了什么

{学员自述的 50-80 字项目说明 — 一句话题目 + 用什么工具做 + 现在状态}

## 4 大交付物

- **PPT 在线版**: [URL](URL)（可选）
- **PDF 全家桶**: [URL](URL)（可选）— 类型：海报 / BP / 简历 / 提案 / 白皮书 任一
- **Landing Page**: [URL](URL)（可选）— last-verified: YYYY-MM-DD
- **60s 视频**: [URL](URL)（可选）— 平台：视频号 / B站 / YouTube

## 同意公开渠道

- [x] 销售页 OFFER WALL
- [x] 公众号案例段
- [ ] 小红书配图（学员未勾）

## Meta

- Cohort: 02 期（2025-11-16 开课）
- 报名 persona（内部分类）: A 创业者 / B 转型者 / C 学生 — 内部参考
- 是否露脸 / 露公司: {学员选择}
- last-verified-at: YYYY-MM-DD（D+60 二次唤醒后更新）
- 撤回联系: mason@jiangren.com.au
```

### 5.3 单学员 consent.json schema（Dev 用，拉数据自动判断哪些渠道能用）

```json
{
  "studentId": "student-anon-01",
  "cohort": "02",
  "displayMode": "anonymous",
  "showFace": false,
  "mentionCompany": false,
  "channels": {
    "salesPage": true,
    "wechatArticle": true,
    "xhsPost": false,
    "internalPoster": true,
    "cohortVibeVideo": true,
    "internalGroundTruth": true
  },
  "consentFormVersion": "v1.0",
  "consentSignedAt": "2026-XX-XX",
  "lastVerifiedAt": "2026-XX-XX",
  "withdrawnAt": null,
  "withdrawnChannels": []
}
```

Dev 在 jr-academy-web-zh 的 `/program-course/ai-programming/` 页面 build 时，从这个 JSON 拉 `channels.salesPage === true` 的学员列表，自动生成 OFFER WALL 卡片。撤回时 `withdrawnAt` 一填，下次 build 自动剔除。

### 5.4 git 操作约定

- 所有 student-portfolio 修改走 PR，merge 到 main 自动触发 jr-academy-web-zh build（销售页拉数据）
- Beta 是该目录默认 reviewer（除答辩当晚批量 import 由 Mason 直接 merge 加速）
- 学员个人 PR 进来时 Mason / Beta 必须 review consent.json 字段是否跟学员实际勾选一致
- 退费学员的整个文件夹用 `git mv` 移到 `_refunded-removed/`，**不要 git rm**（保留 audit trail 哪个学员什么时候被撤）

---

## §6. 卡片设计标准（销售页用）

销售页 OFFER WALL section 复用 ai-engineer-bootcamp v1.6 的设计语言，但卡片内容改成 ai-programming 的 "作品 URL 优先" 模式。

### 6.1 销售页 content.ts 数据 schema

在 `jr-academy-web-zh/src/app/[locale]/program-course/ai-programming/content.ts` 中新增以下 export（参考 ai-engineer-bootcamp content.ts line 512-582 模式）：

```typescript
// 学员作品墙 (v1.7) — 02 期校友的真实可上线作品 URL
// 所有 URL 学员主动授权上线 + 30 天验证还在线
// 红线: CLAUDE.md feedback_no_revenue_promise.md — 不承诺金钱/收入/副业变现，只展示事实
export const ALUMNI_WORKS = [
  {
    id: 'cohort-02-anon-01',
    displayName: 'Student #01',
    avatarType: 'emoji', // 'emoji' | 'real' | 'lineart'
    avatarValue: 'Persona A',
    personaTag: '非技术创业者',
    oneLineTestimonial: '从不敢碰代码到自己上线了第一个产品页',
    projectLine: '给自家咖啡店做的预约 landing page',
    deliveryUrls: {
      pptLive: 'https://...',
      pdfPortfolio: 'https://...',
      landingPage: 'https://...',
      shortVideo: 'https://...'
    },
    cohort: '02 期 · 2026-XX 结业',
    highlight: true, // 销售页前 3-5 张用 highlight=true
    lastVerifiedAt: '2026-XX-XX'
  },
  // ... 更多卡片
];

export const ALUMNI_WORKS_DISCLAIMER =
  '// 02 期校友真实学员作品 · 学员主动授权上线 + 平台不替学员承诺任何金钱/收入/副业变现结果 · 个体学习成果取决于自身投入';

// Hero 顶部 alumni badge — 跟 ai-engineer-bootcamp HERO_ALUMNI_BADGE 同模式
export const HERO_ALUMNI_BADGE = {
  number: '02 期',
  label: '学员作品已上线 ✓ landing / PDF / 视频 真实可点'
};
```

### 6.2 卡片视觉 spec

参考 jr-academy-brand 设计系统（CLAUDE.md 全局规定，走 `jrBrand` token，禁止散落 hex）。ai-programming 是大众入门课，建议跟 ai-solo-founder / ai-essentials 一脉的暖色系（DESIGN.md 主色 `#FF7B5A` 暖珊瑚），不要用 ai-engineer-bootcamp 的 midnight dark。

每张卡片包含：
- 头像（emoji 或 LinkedIn-style 真实头像，根据 displayMode）
- displayName + persona tag（小标签如"非技术创业者"）
- 一句话 testimonial（最显眼，30 字内）
- projectLine（学员做了什么，50 字内）
- 4 个 URL 按钮（PPT / PDF / Landing / Video，缺的不显示）
- 角标：cohort 期数 + verified ✓

### 6.3 OFFER WALL section 文案模板

参考 ai-engineer-bootcamp content.ts 中 SOCIAL_PROOF section，新写一段适用于 ai-programming：

```
## 02 期校友真实作品墙

不是 demo，不是截图，是可以直接点进去看的 URL。
跟你一样不懂代码的人，6-8 周做出来的真东西。

[4-7 张卡片，每张 1 个 URL]

注：以上学员主动授权上线，作品 URL 每月二次验证。
个体学习成果取决于自身投入，平台不承诺任何金钱/收入/副业结果。
```

### 6.4 卡片摆放策略

- 销售页 hero 下方第 2 屏放 ALUMNI_WORKS（重要程度仅次于 hero claim 和 4 大交付物 KILL POINT）
- 默认渲染 highlight=true 的前 3-5 张
- 加 "查看全部 N 个学员作品" 链接跳子页 `/program-course/ai-programming/works`（V2 实现）
- 移动端单列瀑布流；桌面端 3 列 grid

---

## §7. 团队分工（RACI）

| 角色 | Name | Primary 负责 | Secondary |
|------|------|------------|-----------|
| **课程主理人** | Mason | 1v1 私聊学员（D+28/D+35/D+45）/ release 内容审定 / 答辩当晚收集 / 决定哪些上 OFFER WALL highlight | git PR review |
| **教务** | Beta | D+21 进度盘点 / Form 数据整理到 student-portfolio/ / D+60 二次唤醒 / 撤回处理 / consent.json 维护 | 群 1v1 follow-up |
| **Marketing 主管** | Aurora | release 同意书 v1 起草 + 法律 review / 决定哪些素材进公众号 / 决定哪些进小红书 / 跨 cohort 风格统一 / 撤回 SLA 监督 | OFFER WALL 上线 sign-off |
| **新媒体** | Summer | 小红书帖子配图筛选（基于学员勾选 channels.xhsPost=true）/ 撤回 24h SLA 执行 | 帮 Mason 翻 ground truth |
| **Designer** | — | 卡片视觉 spec / 头像处理（学员选 lineart 时） / 海报模板 | 答辩当晚拍照（征同意后） |
| **Dev** | — | content.ts ALUMNI_WORKS export / page 渲染 / 撤回时 build 自动剔除 / consent.json 数据通道 | Google Form short link redirect |
| **Lightman** | — | release 同意书 v1 sign-off / 重大版本变更 / 退费学员特殊 case 决策 | — |

### 7.1 跨人协作时序

D+14 Mason 群发预告 → D+21 Beta 内部盘点 → D+28 Mason 1v1 P0 → D+35 Mason+Beta 1v1 P1 → D+42 Mason 群提醒 + 发同意书 → **D+45 答辩当晚集体行动**：Mason 主持 / Beta 整理 Form 数据 / Designer 现场拍照 → D+50 Aurora sign-off 哪些进销售页 → D+55 Dev push ALUMNI_WORKS 到 content.ts → D+60 Mason 二次唤醒 + Beta 更新 lastVerifiedAt → 月度 Mason + Aurora review 撤回情况。

### 7.2 失败兜底

- Mason 太忙拖到 D+50 还没动 → Beta 触发，Aurora 知会 Lightman
- Aurora release 同意书没起草 → 02 期使用 ai-engineer-bootcamp 的同意书改 ai-programming 字段做 fallback，但 ship 前必须 Lightman 一次性 sign-off
- Dev 没时间接 consent.json 自动化 → 02 期手动维护 ALUMNI_WORKS 数组（Beta 编辑 content.ts 提 PR），03 期再上自动化

---

## §8. KPI 目标（02 期回收）

### 8.1 quantitative

| KPI | 目标值 | 测量 |
|-----|-------|------|
| 02 期学员人数（基线）| 37 人 | prod-state.json cohort 数据 |
| **最终收齐作品的学员数** | **≥ 10 人**（27%）| student-portfolio/cohort-02/ 目录下文件夹数 |
| 其中达到 highlight 标准（4 选 2 + 同意公开）| ≥ 5 人 | consent.json `channels.salesPage=true` 且至少 2 个 URL |
| Landing Page URL 30 天后仍在线率 | ≥ 80% | D+60 verify 时的 HTTP 200 比例 |
| 撤回率 | < 10% | 累计撤回 / 累计同意公开 |
| D+30 截止前完成收集 | 100% | D+45+30=D+75 全部 ship |

### 8.2 qualitative

- 销售页 v1.7 update 加 OFFER WALL section（Dev 拉 ALUMNI_WORKS export 渲染）
- 公众号"02 期校友实战案例"长文（≥ 3 个学员真实故事，由文案+Aurora 用 blog-longform-writer skill 写）
- 小红书"零基础做出真东西"系列（Summer 用 5 张作品截图发 5 篇，xhs-draft skill）
- 答辩录像剪 2-3 分钟 cohort vibe 视频（Designer + 学员授权）

### 8.3 时间锁

- **D+45**：答辩当晚收集启动
- **D+50**：student-portfolio 目录初次 commit
- **D+55**：销售页 v1.7 上线（含 OFFER WALL）
- **D+60**：二次唤醒 + lastVerifiedAt 更新
- **D+75**：本次回收周期结束，归档 cohort-02 数据

### 8.4 03 期前置（学到的）

02 期回收周期结束后立即生成 `cohort-02-collection-postmortem.md`，写明：

- 哪些 persona 响应率高 / 低
- 哪些渠道勾选率高（销售页 vs 小红书）
- 哪些 release 条款引发学员疑虑
- 03 期 SOP 需要改什么（提前到 D+14 还是延后到 D+50？Form 字段去掉哪个？）

这份 postmortem 直接 feed 给 03 期开课时 Mason 用，避免每期冷启动。

---

## §9. 红线（违反就回炉）

### 9.1 内容承诺红线（最重要）

- ❌ 销售页 / 公众号 / 海报 / 小红书 任何渠道**不允许**出现以下话术：
  - "月入 X 万 / 副业变现 / 副业月赚 / 靠 AI 编程赚钱 / 学完包做出 APP"
  - "本课学员平均收入 X / 月销 X 单 / X 个月回本"
  - "保证做出可上线产品" → 改成 "学员真实做出了可上线产品（见作品墙）"
- ✅ 允许的表述：
  - "学员真实作品上线 N 个（URL 真实可点）"
  - "学完掌握 33 工具 + 4 大交付物的完整 pipeline"
  - "校友 testimonial：'学完最大的变化是 XXX'"（学员自述，不是平台承诺）
- **参考**: CLAUDE.md `feedback_no_revenue_promise.md` 课程承诺红线

### 9.2 隐私 / 法律红线

- ❌ 学员**未签 release** 同意书 → 作品**绝不**进入任何公开渠道（哪怕只是内部 wiki）
- ❌ 涉及具体公司名 / 客户名 / 商业 idea → 学员未在 Form 第 11 题勾"已征得同意" → **不公开**
- ❌ 退费学员（无论原因）→ 一律**不收作品 / 不上 OFFER WALL** / 已收的进 `_refunded-removed/` 隔离区
- ❌ 假装"匿名"实际能反向识别（如学员公司 + 学员所在城市 + 学员真实头像 = 三件套同时出现 = 暴露）→ Beta 审核时必须 cross-check 三件套不能同时出现
- ❌ 学员撤回后超过 SLA 还没下线 → Mason 视为 P0 紧急事件，立即叫 Dev 处理

### 9.3 操作红线

- ❌ 群发请求学员交作品（除 D+14 预告 + D+42 提醒两次例外）→ 违反 CLAUDE.md `feedback_no_templated_group_announcements.md`
- ❌ "你不交就没福利 / 不交就掉群" → 教务红线（学习权益跟产出收集**完全解耦**）
- ❌ 不经学员二次确认就改对外文案（如"我帮你润色一下" → 改完直接发 = 不允许）
- ❌ 把"未公开同意"的学员作品当 ground truth 内部用 → 即使内部也要勾 `channels.internalGroundTruth=true`

### 9.4 数据红线

- ❌ Form 收集到的邮箱 / 电话 / 身份信息**不允许**用于学员关心范围之外（如不能拿去做新课程的 cold email）
- ❌ student-portfolio 目录的 `consent.json` / `_withdrawals.md` / `_refunded-removed/` 三个**禁止**出现在任何对外页面 build 中
- ❌ 30 天未 verify 的 URL → 不能继续挂在销售页（即使学员没主动撤回）

---

## §10. 跟 /cohort-ops-conductor 的接口

`/cohort-ops-conductor` 是 ai-programming MARKETING_WORKFLOW_GAP_AUDIT 推荐的 Phase C 课程运营总指挥 skill（P0 待建，AUDIT 第 #3 优先级 cohort-launch-sop + cohort-daily-ops + cohort-progress-tracker 三件套的扩展）。本 SOP 是 conductor 的 task #6"学员产出收集"的具体执行手册。

### 10.1 conductor 调用本 SOP 的时机

```
/cohort-ops-conductor execute --cohort=02 --task=6
  ↓
conductor 检查 cohort-02/ 进度 → 判断当前日期 D+N → 触发对应阶段
  ↓
- D+14: 提示 Mason 群发预告（template 在本 SOP §2.1）
- D+21: 触发 Beta 跑 _progress-21d.md 自动盘点（接 jr-academy MongoDB 拉 Lab/Quest 提交数据）
- D+28: 提示 Mason 1v1 P0 学员名单（话术 template §3.1）
- D+35: 提示 Mason+Beta 1v1 P1 学员
- D+42: 提示 Mason 群提醒 + Beta 邮件 release 同意书 PDF
- D+45: 启动 Form 批量收集流程
- D+50: 提示 Aurora sign-off
- D+55: 提示 Dev push ALUMNI_WORKS 到 content.ts
- D+60: 触发 Beta 二次唤醒 + lastVerifiedAt 更新
```

### 10.2 conductor 读本 SOP 的字段

conductor 启动时读以下字段做决策：

- 触发时机表（§2）→ 决定今天该提示谁做什么
- 团队分工（§7）→ 决定提示发给谁
- KPI 目标（§8）→ 决定是否亮红灯（如 D+50 还没收到 5 人 → 紧急叫 Mason）
- 红线（§9）→ 决定哪些自动化绝不能跨过（如撤回 SLA 必须人工处理不能自动）

### 10.3 conductor 写回本 SOP 的字段

每期 cohort 结束 conductor 生成 postmortem 时写回：

- §8.4 03 期前置经验 → 自动累计
- §3.4 三通道 ROI → 用真实数字替换预期值
- §9 红线 → 如果本期出过红线事件，追加一条 case study

---

## §11. 历史决策日志

| 日期 | 事件 | 决策 |
|------|------|------|
| 2026-05-29 | SOP v1.0 起草 | 基于 MARKETING_WORKFLOW_GAP_AUDIT P0 #2 + ai-engineer-bootcamp v1.6 ALUMNI_OFFERS 模式 + ai-programming 4 大交付物特性创建 |
| — | release 同意书 v1 待 Aurora 起草 | ship 后 7 天内补 `RELEASE_CONSENT_FORM_TEMPLATE.md` |
| — | 02 期回收启动日期待定 | 等 Mason 确认 02 期实际答辩日 + 倒推 D+28 |
| — | /cohort-ops-conductor skill 待建 | AUDIT 第 #3 优先级，建好后本 SOP §10 接入 |

---

## §12. 相关文档（互相引用）

**上游消费本 SOP 的文档**：

- `curriculum/ai-programming/PROMOTION_PLAN.md` §0.5 "校友作品 / 反馈：❌ content.ts 还没加" → 本 SOP §6 卡片 schema 解锁
- `curriculum/ai-programming/MARKETING_WORKFLOW_GAP_AUDIT.md` Top 2 优先级 → 本 SOP 是其落地
- `jr-academy-web-zh/src/app/[locale]/program-course/ai-programming/content.ts` → 待加 ALUMNI_WORKS export（本 SOP §6.1 schema）
- `curriculum/ai-programming/cohort-02/postmortem.md`（待建） → 本 SOP 收集的作品是其证据

**本 SOP 引用的上游**：

- `curriculum/ai-programming/DESIGN.md` → 销售页主色 #FF7B5A
- `curriculum/ai-programming/PERSONAS.md` → 4 persona 分类（A/B/C/D）+ 痛点（虽 GT 0.55 ⚠️）
- `curriculum/ai-programming/FUNNEL_PLAN.md` → 客单价 + cohort 节奏
- `jr-academy-web-zh/src/app/[locale]/program-course/ai-engineer-bootcamp/content.ts` line 512-582 → ALUMNI_OFFERS / DISCLAIMER / VIBE / BADGE 4 个 export 模式
- `CLAUDE.md` 全局红线 → `feedback_no_revenue_promise.md` / `feedback_no_templated_group_announcements.md` / `feedback_url_stability.md`

**未来扩展**：

- 03 期开课后建 `cohort-03/` 子目录沿用本 SOP
- 04 期可考虑加入"主动维护 alumni 持续更新"机制（学员每季度自愿更新作品状态）
- 跨 bootcamp 复用：本 SOP 是 ai-programming 专属，但 §1-§4 / §6-§9 可抽象成 `cohort-graduate-portfolio-collector` skill（MARKETING_WORKFLOW_GAP_AUDIT P0 #2 推荐新建）覆盖全公司所有 bootcamp。

---

> SOP 维护规则：每期 cohort 结束生成 postmortem 后，必须把本期暴露的红线 case / 实际转化率 / 撤回 case 回写到本 SOP（不删旧版本，追加 §11 决策日志 + 修订对应章节）。SOP 不是 freeze 文档，是活的运营手册。
