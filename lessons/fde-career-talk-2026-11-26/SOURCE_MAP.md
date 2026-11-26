# 一场讲懂 FDE · SOURCE_MAP

## 设计与组件

| 文件 | 来源 | 修改 |
|---|---|---|
| src/components/deck.tsx、kit.tsx | `.claude/skills/talk-deck/assets/approved-w12/`（manifest 2026-11-16） | 未改 |
| 引擎（SlideEngine、ui、CameraBubble、theme、main） | `lessons/_template/` | 未改；SlideEngine 与 ai-solo-founder-w12 逐字相同 |
| S01_Cover | approved-w12 `P01_Cover.tsx` | 换文字和五个节点 |
| S08_WhatIsFDE | approved-w12 `P06b_TopicSoT.tsx` | 换文字和字段 |
| S09_CaseFlow、C06_Timeline | approved-w12 `S12_Approval.tsx`（Node／Arrow 流程） | S09 改为两行蛇形；C06 改为四段时间线 |
| S10_RoleMap、C04_AuCuts | approved-w12 `S17_Failures.tsx`（DeckFrame + Table） | 换数据；删去 Takeaway 总结条 |
| S19_Portfolio | approved-w12 `P05_Memory.tsx` | 换文件树和说明 |
| 其余页 | kit 组件组合（DeckFrame、Panel、Label、NumberBadge、Steps） | 新写 |

## 内容与资产来源

| 页码 / 资产 | 来源或本地路径 | 核验日期 | 事实 / 观点 | 权利与限制 |
|---|---|---|---|---|
| 3 · 约 15 万／375 家／2025 年 122,606 | Layoffs.fyi 数字，经二手报道转述（copilotinterview.com、valueaddvc.com） | 2026-11-26 | 事实；未在 layoffs.fyi 原站核实，课前刷新 | 引用数字 |
| 3 · 12.1 万、约 20%、54,836、连续五个月 | Challenger, Gray & Christmas 2026 年 8 月、10 月报告 | 2026-11-26 | 事实 | 引用数字 |
| 4 · CBA、ANZ、NAB、Telstra International | HCAMag、Bloomberg 2026-04-23、Information Age、Insurance Journal 2026-11-12、WSWS 2026-06-23 | 2026-11-26 | 事实；ANZ、NAB 报道未点名 AI | 引用 |
| 5 · RBA、借 AI 名义裁员 | Insurance Journal 2026-11-12 | 2026-11-26 | 事实 | 引用 |
| 6 · 四段时间线 | `lessons/ai-engineer-landscape-talk/src/data/auAiTimeline.ts`（2026-09 制图） | 2026-09 | 观点 + 估计；页面已注明 | 匠人自有 |
| 7 · LinkedIn 2026 Jobs on the Rise | `lessons/ai-new-jobs-talk/research/au-job-market.md`、`us-job-market.md` | 2026-04 调研 | 事实（排名） | 引用 |
| 7 · 五个职能的 AI 落地进度 | 客服：Salesforce CEO 2025-09 访谈（约 9,000→5,000）、Klarna 2024-02 公告与 2025-05 CEO 采访、OpenAI 2025-08-28 Realtime API 正式发布；写代码：Microsoft CEO 2025-04-29 LlamaCon、Google 2024-10 财报会及后续；人事：IBM CEO 2025-05 WSJ 采访、IBM AskHR 94%；翻译和内容：Duolingo 2024-01（Bloomberg）、2025-04 备忘录；公司后台：Amazon CEO 2025-06 邮件、2025-10 裁约 1.4 万人 | 2026-11-26 | 案例为事实；进度条位置与「2027 判断」为观点，页面已注明 | 引用 |
| 8 · 正在消失的岗位 | Indeed Hiring Lab 2026-06/07（整体招聘与 2020-02 持平；软件开发 −27.5%，回升 71% 为资深；数据分析、市场营销 30% 以上，数据分析 −38% 为对 Indeed 公开指数的整理）；Stanford Digital Economy Lab 2026-08 更新（22–25 岁，AI 最能做职业 −11%，最难做 +10%，2022-11→2026-06）；Microsoft Research 2025「Working with AI」（翻译、写作、客服、接线、电话销售、校对、技术写作重合最高）；Jobs and Skills Australia 2025、DEWR（最受影响五分之一 +5.6%，最小 +9.5%；文员、前台、会计文员、簿记、数据录入） | 2026-11-26 | 事实；右侧名单的「原因」一句为归纳 | 引用 |
| 9 · AI Coding 是更高的新起点 | Indeed Hiring Lab 2026-07「AI and Job Postings: From Destruction to Creation?」及「The Labor Market Is Tilting Toward Seniority」：Claude Code 2025-02 发布以来软件开发招聘约 +15%、整体 −7%；新增 71% 为资深、37% 为标题含 AI；仍比 2020-02 低 27.5% | 2026-11-26 | 事实；「以前／现在的起点」清单为归纳，呼应 FDE Tech 课程页「AI Engineering 能力是起点」 | 引用 |
| 10、12、13 · 岗位对照、侧重点、两类 FDE | `ai-engineer-landscape-talk/src/data/auJdSkills.ts`（ROLE_FOCUS、MARKET_TRAITS）、`jr-academy-web-zh/messages/zh/fdePage.json`、`artifacts/fde-business-20261111/AGENT_MODULE_PROPOSAL.md` | 2026-11-26 | 观点（匠人对岗位的归纳） | 匠人自有 |
| 11 · FIS、NAB、SAP 岗位 + logo | `ai-engineer-landscape-talk/src/data/auJobPosts.ts`、`public/logos/jobs/` | 2026-09 截图 | 事实 | Logo 仅用于标识招聘方 |
| 14 · 四项能力、Accenture PoC | 活动页正文；`auJdSkills.ts` FDE_REQS | 2026-11-26 | 观点 + 事实 | — |
| 15 · OpenAI Sydney FDE、Palantir FDSE 实习；澳洲合规 | 活动页正文；`auJdSkills.ts` MARKET_TRAITS | 2026-11-26 | 事实；合规项注明以 JD 为准 | Logo 仅用于标识招聘方 |
| 14 · FDE Tech／FDE Business | jracademy.ai/program-course/fde-tech（10 周、入班需能独立开发调试 AI 应用）、fde-business（8 周、BA／产品／咨询背景）；两页正文于 2026-11-26 线上回读（Tech：10 周、每周 3 小时工作坊、三类交付物；Business：8 周、30 项企业自动化任务用 Codex、三类交付物） | 2026-11-26 | 匠人自有课程定位 | — |
| 16 · FDE Tech 展开 | jracademy.ai/program-course/fde-tech 2026-11-26 回读：10 周周次与阶段交付、三段节奏、30 项工程交付任务六类、三类交付物、企业政策知识助手案例（A$24,000 上限、修订后 A$21,600、运行 A$1,060／月） | 2026-11-26 | 匠人自有课程内容 | — |
| 17 · FDE Business 展开 | jracademy.ai/program-course/fde-business 2026-11-26 回读：8 周周次与阶段交付、30 项企业自动化任务五类、三类交付物、ANZ Z-GPT／Woolworths Olive／IAG CASI 案例 | 2026-11-26 | 匠人自有课程内容 | — |
| 17 · 从学校到 FDE | 五块桥板为教学归纳；底部四个事实同第 8、16 页来源（OpenAI、Palantir、Indeed、Stanford） | 2026-11-26 | 观点 + 引用事实 | — |
| 17 · 澳洲 FDE 薪酬区间 | Re:Sourced《What Is a Forward Deployed Engineer? (2026 Guide)》2026-07-07，经 `aiSalaries.ts` | 2026-07 | 事实（市场区间） | 引用 |
| 17 · OpenAI US$185K–300K | 活动页正文（OpenAI 旧金山公开职位） | 2026-11-26 | 事实 | 引用 |
| 20 · 课程名、周期、价格、链接 | jracademy.ai/program-course/fde-tech、fde-business；`fdePage.json` coachingTerms | 2026-11-26 线上回读 | 事实 | — |
| 21 · 导师 | `jr-academy-web-zh` fdeFaculty 文案（线上页面） | 2026-11-26 | 事实 | — |
| 21 · 导师头像 | Lightman／Joe／Jason：`jr-academy-web-zh/public/course-previews/fde-mentorship/`（来源记录 `docs/evidence/fde-mentorship-people-20261023.json`）；Roy：`videos/fde-why-us-portrait-20261111/assets/mentors/roy.jpg`（与官网仓库 `images/mentors/roy.jpg` 同一文件） | 2026-11-26 | 本人照片 | — |

Logo 使用模板随附官方 SVG，不用生成模型绘制。字体 license 随构建复制到 licenses/。
| 14 · FDE 不是来帮忙的 | 财务 6 人、客服 10 人、HR 4 人为讲课用的情境；真实案例改为讲师口述；案例同第 7 页（Salesforce CEO 2025-09、IBM CEO 2025-05、Klarna 2024-02） | 2026-11-26 | 观点（owner 定位：FDE 是替代而非辅助）+ 引用事实 | — |
| 19 · 中国、澳洲、美国 | 中国：SCMP 报道脉脉数据（2026 年 1–7 月 FDE 岗位同比 +1,523%、字节／腾讯／阿里云招聘、腾讯相关岗位广告月薪 3–6 万元、工信部 2026-08 鼓励派驻）、虎嗅从业者采访（多为沟通驻场、被认为是解决方案架构师／实施顾问新名称）、猎聘／智联岗位（前线／前沿部署工程师、AI 解决方案工程师）、上海千人储备库报道；澳洲：Re:Sourced 2026、Databricks／Deloitte／PALO IT／Lorikeet／Kinetic IT／Publicis Sapient／FIS 在澳岗位；美国：Indeed 643→5,330（2025-04→2026-04，全球口径，Business Insider 报道）、Lightcast、OpenAI／Anthropic 官方岗位 | 2026-11-26 | 事实；Business↔Tech 刻度为观点，页面已注明 | 引用 |
| 10 · 厨房比喻 | owner 比喻与观察（Junior 与 Senior 速度差 100–1000 倍），页面注明为讲者观察 | 2026-11-26 | 观点 | — |
| 11 · 毕业生有工作吗 | SignalFire State of Talent 2025（大厂新招中应届生 7%）与 2026（大型科技公司应届／入门招聘较 2019 约 −65%、早期创业公司约 −76%）；纽约联储 College Labor Market（2024 数据：计算机工程 7.8%、计算机科学 7.0%；2022 年 2.3%、4.3%）；Indeed Hiring Lab 2026-07（新增 71% 资深）；Indeed Hiring Lab Australia 2026-04-22（毕业生岗位连续三年减少，2026 年初小幅回升） | 2026-11-26 | 事实；澳洲软件程序员总就业 2022 年以来 +25%（DEWR）未上页面，讲师备注提醒「不是一个岗位都没有」 | 引用 |
| 12 · Job Ready 87 项 vs UNSW | owner 2026-11-26：AI Engineer 也要产品能力，FDE 补 Stakeholder Map 与 Stakeholder 管理；FDE 范围按 owner 2026-11-26「FDE 基本上全部都要会」标注；「FDE 交付」取 FDE Tech 课程页十个能力维度；能力清单与岗位要求：skills-data/roadmaps（ai-engineer、backend-developer-roadmap、full-stack-developer-roadmap、aws-roadmap）、ai-engineer-landscape-talk auJdSkills.ts、FDE 两门课程页；UNSW 覆盖：skills-data/uni-courses/unsw（UNSW 2026 Handbook 课程说明：COMP1511、1521、1531、2041、2511、2521、3121、3231、3311、3331、3411、3511、3900、4920、6080、6441、6713、9417、9444，MATH1081）；数据文件 src/data/jobReady.ts | 2026-11-26 | 岗位与课程为整理事实；必修／选修归类与「只讲一部分」为观点，页面注明因专业方向而异 | — |
| 23–24 · 两门课 30 项练习 | jracademy.ai/program-course/fde-business 与 fde-tech 2026-11-26 回读，脚本解析任务名、说明与 Tech 交付物，生成 src/data/fdeTasks.ts；Tech 中文短名为讲课翻译 | 2026-11-26 | 匠人自有课程内容 | — |
| 19 · Tech＝大企业 | owner 2026-11-26 口头确认：FDE Tech 一般指大企业；Business 对应中小公司和业务部门（与 artifacts/fde-business-20261111 内部定位一致） | 2026-11-26 | 匠人定位 | — |
| 9 · 2027 年会消失的 25 个岗位 | jracademy.ai/career-impact-map（jr-academy-web-zh/src/config/careerImpactMap/careers.ts 中 riskLevel = High 的 25 个职业及 transitionRole） | 2026-11-26 | 匠人分层（任务重复度、数字化程度、判断责任），不是官方预测；标题「会消失」为 owner 要求的讲法 | 匠人自有 |
| 34–35 · 客服二维码 | owner 2026-11-26 提供的 Amelia 小花微信二维码（public/images/qr-amelia.jpg） | 2026-11-26 | — | 匠人自有 |
| 1 · 3D 封面 | 效果改自 .claude/skills/talk-deck-3d（CoverScene、Globe、depth.css）；地球点阵 presentations/company-intro/src/data/land.ts（Natural Earth 公共领域）；环绕卡片为第 15、19、20 页已引用的真实岗位；三个数字同第 20、21 页来源（脉脉／SCMP、Indeed、Re:Sourced）；白色 logo 取自 jr-academy-brand | 2026-11-26 | — | 匠人自有 |
