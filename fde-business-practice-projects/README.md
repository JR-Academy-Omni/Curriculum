# FDE Business · 练习项目包

给 FDE Business 学员课后自己练的项目。主课负责练深（30 项任务 + 跨部门运营 Agent 结业项目），项目包负责练广：见过的中小公司场景越多，面试和去现场时越能拿出「我做过」的例子。

- 定位：澳洲华人圈常见的中小公司场景（内部口径：年薪 15 万以下的 FDE / AI 落地岗位）。
- 三档难度：L1 自动化（30–60 分钟）· L2 Workflow（2–3 小时）· L3 Agent（半天）。
- 工具：以 Claude（Projects / 连接器）+ n8n 为主；每个项目附 ChatGPT 替代做法。入门不要求会写代码。
- 每个项目 7 部分：客户场景 · 练习数据 · 做法 · 应该做出的结果 · 验收清单 · 加分挑战 · 简历写法。
- 练习数据全部为这个练习包设计，由 `_build/` 下的确定性脚本生成；标准答案中规则可算的部分由脚本算出。
- 目录数据：`projects.json`（之后接课程学习区直接读它）。方案：`../../artifacts/fde-business-20261111/PROJECT_PACK_PLAN.md`。

## 项目目录（48 个）

### 行业场景（12 个行业 × L1 / L2 / L3）

| 行业 | L1 自动化 | L2 Workflow | L3 Agent |
|---|---|---|---|
| 餐饮 / 外卖 | [P01 外卖订单汇总成每日销售日报](p01-restaurant-delivery-daily-report/README.md) | [P13 差评监测 → 起草回复 → 店长审批后发布](p13-restaurant-review-reply-approval/README.md) | [P14 订位与咨询 Agent](p14-restaurant-booking-enquiry-agent/README.md) |
| 零售电商 | [P15 商品描述批量改写成中英双语](p15-ecommerce-bilingual-product-copy/README.md) | [P02 低库存预警 → 补货单 → 采购确认](p02-ecommerce-reorder-approval/README.md) | [P16 售后 Agent](p16-ecommerce-after-sales-agent/README.md) |
| 留学移民中介 | [P17 学生材料清单自动核对缺项](p17-education-agency-document-checklist/README.md) | [P18 签证进度表 → 到期提醒 → 顾问跟进待办](p18-education-agency-visa-deadline-followup/README.md) | [P03 咨询初筛 Agent](p03-education-agency-intake-agent/README.md) |
| 房产 / 物业 | [P19 看房登记表整理成客户名单](p19-realestate-open-home-leads/README.md) | [P04 租客报修 → 分类派单 → 完工回访](p04-property-maintenance-dispatch/README.md) | [P20 租赁咨询 Agent](p20-realestate-leasing-enquiry-agent/README.md) |
| 记账事务所 | [P05 银行流水按科目初步分类](p05-bookkeeping-bank-categorise/README.md) | [P21 客户月度单据收集 → 缺件催收 → 会计复核](p21-bookkeeping-monthly-docs-chase/README.md) | [P22 报税季材料 Agent](p22-bookkeeping-tax-season-docs-agent/README.md) |
| 诊所 / 牙医 | [P23 预约表生成次日提醒短信草稿](p23-clinic-next-day-sms-reminders/README.md) | [P24 新病人登记 → 保险信息核对 → 前台确认](p24-clinic-new-patient-insurance-check/README.md) | [P06 前台 Agent](p06-clinic-front-desk-agent/README.md) |
| 教育培训 | [P25 课堂签到表生成出勤周报](p25-tutoring-attendance-weekly-report/README.md) | [P07 试听报名 → 分班 → 家长确认](p07-tutoring-trial-to-class/README.md) | [P26 家长咨询 Agent](p26-tutoring-parent-enquiry-agent/README.md) |
| 物流 / 仓储 | [P08 运单邮件提取成发货台账](p08-logistics-waybill-register/README.md) | [P27 异常件（延误、破损）→ 通知客户 → 理赔登记](p27-logistics-exception-claims/README.md) | [P28 客户查件 Agent](p28-logistics-tracking-agent/README.md) |
| 建筑装修 | [P29 现场日报与照片说明整理成周进度报告](p29-renovation-site-weekly-report/README.md) | [P09 报价请求 → 报价单 → 老板审批](p09-renovation-quote-approval/README.md) | [P30 工程协调 Agent](p30-renovation-site-coordinator-agent/README.md) |
| 招聘 / 人力外包 | [P31 简历批量提取成候选人表](p31-recruitment-resume-extract/README.md) | [P32 筛选 → 约面 → 面试反馈汇总](p32-recruitment-screen-interview-feedback/README.md) | [P10 招聘协调 Agent](p10-recruitment-coordinator-agent/README.md) |
| 旅行社 | [P11 行程需求整理成报价草案](p11-travel-itinerary-quote/README.md) | [P33 订单确认 → 出行前提醒 → 行后回访](p33-travel-booking-reminder-followup/README.md) | [P34 行程咨询 Agent](p34-travel-itinerary-consult-agent/README.md) |
| 美业 | [P35 会员消费记录生成会员月报](p35-beauty-member-monthly-report/README.md) | [P36 预约 → 前一天提醒 → 爽约跟进](p36-beauty-appointment-reminder-noshow/README.md) | [P12 会员运营 Agent](p12-beauty-member-reactivation-agent/README.md) |

### 通用场景（12 个）

| # | 难度 | 项目 |
|---|---|---|
| P37 | L1 | [会议录音 → 纪要 → 待办表](p37-meeting-minutes-action-items/README.md) |
| P38 | L1 | [合同关键条款提取成对比表](p38-contract-key-terms-compare/README.md) |
| P39 | L1 | [竞品网页信息整理成对比表](p39-competitor-web-price-compare/README.md) |
| P40 | L2 | [报销单收集 → 规则核对 → 财务审批](p40-expense-claim-approval/README.md) |
| P41 | L2 | [新员工入职清单：IT、HR、主管各自确认](p41-new-hire-onboarding-checklist/README.md) |
| P42 | L2 | [社媒内容日历 → 草稿 → 审核 → 排程](p42-social-content-calendar-approval/README.md) |
| P43 | L2 | [供应商比价 → 推荐 → 采购批准](p43-supplier-quote-comparison-approval/README.md) |
| P44 | L2 | [每周经营数据自动汇总成老板简报](p44-weekly-ops-owner-brief/README.md) |
| P45 | L3 | [公司知识库问答 Agent：答不了的转人工并记录](p45-knowledge-base-qa-agent/README.md) |
| P46 | L3 | [收件箱分拣 Agent：分类、起草、需要批准的排队](p46-inbox-triage-agent/README.md) |
| P47 | L3 | [销售线索 Agent：查背景、打分、起草跟进、进审批](p47-sales-lead-agent/README.md) |
| P48 | L3 | [Agent 监控：给自己搭的 Agent 建评测样例和失败告警](p48-agent-eval-monitoring/README.md) |
