# OPC 每周 Skills 与当前课程映射

核对日期：2026-09-20。主课程来源为 `public/outline.json`：54 节课、199 个步骤、16 次 Live Class。共有 23 个学生 Skills，其中 18 个为本轮新建，5 个为既有能力。17 个周/专题包已发布并绑定生产课节，完整回执见 `OPC_SKILLS_DELIVERY.md`。

## 周次映射

| 周次 | 当前课程 | 学生包能力 | 可检查产出 |
|---|---|---|---|
| W0 | L01 装机、订阅、双 agent、Key 安全、ABN 预备、五个想法、A/B/C 身份 | `opc-founder-fit` + Founder OS | 创始人画像、准备清单、想法种子 |
| W1 | L02–L04 CEO AI OS、连接、七类秘书任务、首次对话与一周验收 | `opc-ceo-ai-os`、`opc-business-sot`、`opc-founder-fit` + Founder OS | AI OS 配置、权限表、SoT、一周复盘 |
| W2 | L05–L08 agent JD/权限/排程、公开调研、Prompt Lab、5 次 Mom Test 访谈 | `opc-ai-team`、`opc-customer-discovery` + Founder OS | Agent JD、调研记录、真实访谈证据 |
| W3 | L09–L11 商业公式、四把尺子、定价、5→1 决策矩阵、一页验证报告 | `opc-idea-validator`、`opc-customer-discovery` + Founder OS | 选品矩阵、经济性、验证结论 |
| W4 | L12–L20 可销售交付、PRD→MVP、Cursor/Claude Code/Lovable、部署、域名与监控 | `opc-offer-mvp`、`opc-mvp-ship` + Founder OS | Offer、PRD、可运行核心路径、部署验收 |
| W5 | L21–L22 品牌 SoT、设计系统、网站、六类对外物料与一致性 | `opc-brand-launch` + Founder OS | Brand SoT、网站 brief、物料与传播 QA |
| W6 | L23–L25 Agile sprint、Definition of Done、每周派活、agent 切换/协作/团队 Brain | `opc-shipping-review`、`opc-ai-team` + Founder OS | Sprint、DoD、AI OS 进阶安排与复盘 |
| W7 | L26–L28 产品经营、数据、收款交付、客户跟进、$1 真实付款挑战 | `opc-product-operations`、`opc-first-dollar` + Founder OS | 经营检查、支付权益验收、真实付款证据 |
| W8 | L29–L32 公众号/小红书/抖音、互动边界、标题 Lab、视频/海报/漫剧产线与成本 | `opc-chinese-media` + Founder OS | 平台原生样例、回复规则、60 秒 brief、产能表 |
| W9 | L33–L36 TikTok/Meta 30 天系统、评论私信工作台、Reddit/Indie Hackers | `opc-english-media` + Founder OS | 30 天日历、前 7 天 brief、CRM 分流、社区计划 |
| W10 | L54 一份资料源到自动发送、一个自动渠道与一个人工交接渠道 | `opc-content-factory`、`opc-chinese-media`、`opc-english-media` + Founder OS | Source packet、变体、审批、发送/交接回执 |
| 独立 SEO/GEO | L37–L38 GSC 长尾、E-E-A-T、Schema、提交与季度路线图 | `opc-search-content` + Founder OS | 内容 brief、技术验收、季度路线图 |
| W11 | L39–L41 AARRR、增长循环、三选一 $200/7 天投放、每周实验系统 | `opc-growth-experiment`、`opc-customer-acquisition` + Founder OS | 漏斗定义、授权预算、实验结果与复盘 |
| W12 | L42–L44 交付、客服 Lab、Stripe→Xero | `opc-business-operations` + Founder OS | 运营表、客服 runbook、支付会计映射 |
| W13 | L45–L49 结构/PSI/RDTI、ABN/TFN/GST/BAS、年度财务、Grant 与申请 Lab | `opc-australia-readiness` + Founder OS | 注册计划、现金计划、R&D 证据、Grant 对照与顾问问题 |
| W14 | L50–L51 Pitch/BP 与 business vs VC 决策 | `opc-funding-readiness` + Founder OS | 路线决定、Pitch 事实、脚本、Data Room |
| W15 | L52–L53 Demo Day、W1/W15 对照、三项跟进与 Founder Club 衔接 | `opc-demo-day` + Founder OS | Runsheet、证据检查、90 天计划、三项跟进 |

## 来源边界

- W1、W2、W3、W7 有对应专属投屏课件；当前 curriculum 决定周次与必做结果，专属 deck 补充教学方法。
- W5 的品牌 Skill 以 L21–L22 为周次依据，现有品牌课件只作设计系统参考，不再归入 W4。
- W8 的第三个平台按当前课程写作抖音，不再写视频号。
- W10 是受控内容工厂。只有实际 provider 回执才能标发送；一个人工交接渠道不能写成自动发布。
- 法律、税务、平台规则、服务价格与 Founder Club 权益在实际使用时重新核实。课程文本本身不构成资格、申报或外部操作授权。
- `.skill-releases` 中旧包为历史回执，不覆盖、不删除；当前包以本目录 catalog 与新 manifest 为准。

构建命令：`python3 skills/scripts/build_student_packs.py`。默认导出到系统 Downloads 的新目录，保留既有导出。
