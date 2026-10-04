# CareKind AI 商业模式 · 2026-10-04

用户定义：CareKind是AgedCare养老项目，核心记录用户信息数据，未来可能分析长达8小时录音；本次要求比较ChildCare、GP/Clinic和物业。尚无客户访谈、价格、合同、收入、真实录音或实现证据。以下是商业方案与待验证假设，W1仍按C7P01开展产品契约与受控修改。

## 官方参考（本次查阅）

- [OAIC 商业AI隐私指引](https://www.oaic.gov.au/privacy/privacy-guidance-for-organisations-and-government-agencies/guidance-on-privacy-and-the-use-of-commercially-available-ai-products)：健康信息具有敏感性，采购方应评估个人信息处理与AI使用风险。不能推导8小时录音天然合法或只需一次授权。
- [RACGP AI scribes](https://www.racgp.org.au/running-a-practice/technology/artificial-intelligence-ai/artificial-intelligence-ai-scribes)：输出可能存在错误，GP须核查准确性，并了解患者同意、隐私和供应商要求。支持草稿+专业人员确认，不支持自动诊断。
- [澳洲卫生部门 providers obligations](https://www.health.gov.au/resources/publications/guide-to-aged-care-law/chapter-3-registered-providers-aged-care-workers-and-aged-care-digital-platform-operators/obligations-that-apply-to-all-providers)：记录保存是养老服务治理的一部分。不据此推导市场规模、价格或保证合规。

## 商业推导（待客户访谈与付费试点验证）

定位：养老机构护理记录与交班工作流。护理人员使用，机构采购，老人受益；家属仅在被授权范围接收信息。对象档案连接护理事件、任务、原始来源、确认人和审计记录。试点衡量记录时间、漏项率、复核负担和续费意愿，不预设收益数字。

收入建议：按站点或在管老人分档订阅，包含音频额度，超额用量包；接入、迁移、培训单独计费。不要同时叠加所有计费维度。分钟是成本计量，交班和档案的价值才是购买原因。价格与收入须经成交验证；毛利需扣除转写、分析、存储、安全、客服、复核支持和实施成本。

长录音方向：分段采集/恢复→转写→人/服务对象/时间/事件归属→有来源的分析草稿→人工确认→档案/待办。说话人不等于被照护对象，不得把混合录音直接挂到某一老人。每条草稿可回溯原片段，归属不明待确认。先短语音、已有文字和合成教学数据，后在适当授权下验证8小时录音的噪声、重叠讲话、归属准确率、延迟、成本和复核量。授权、访问范围、保存/删除、第三方处理需由运营方结合地区核实。

## 行业扩展

同一家族的B2B行业SaaS商业思路，可共用技术底座，但购买者、行业流程、责任、软件接入与销售不同。

| 行业 | 购买者假设 | 记录/交付 | 收费单位假设 |
|---|---|---|---|
| AgedCare | 养老机构 | 老人档案、护理事件、交班 | 站点/在管老人 |
| ChildCare | 中心运营方 | 儿童观察、事件、家长沟通 | 中心/在园儿童 |
| GP/Clinic | 医生/诊所 | 一次就诊的病历与随访 | 医生席位/就诊量 |
| 物业 | 物业公司 | 房屋、租户、报修、工单 | 在管物业/团队 |

GP是诊所中的临床场景，不作为额外独立市场重复计数。ChildCare的儿童信息与家长权限、GP的专业复核与病历软件、物业的资产对象和工单验收均需分别设计与验证。

共享：多租户/角色权限、对象档案、录音/文字、事件/任务、来源追溯、人工确认、审计。分别做：字段、术语、模板、审批/责任、保存策略、软件接入、预算、销售与实施。先用一个养老交班工作流获得付费试点，再提炼底座、逐行业扩展。
