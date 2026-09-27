# OPC Offer 与 MVP 学生 Skill 包

这个 Skill 用来把真实客户证据收敛成一个可测试的 Offer，以及你本人能够交付的最小 MVP。它不会把访谈称赞、AI 角色扮演或购买意愿当成验证。

## 包内文件

- `opc-founder-os`：读取 Founder Workspace、现有证据和关卡状态。
- `opc-offer-mvp`：生成 Offer、MVP 交付方案和最便宜的外部测试。

## Codex 安装

1. 从课程学习页面下载 ZIP 并解压。
2. 将 `opc-founder-os` 和 `opc-offer-mvp` 两个完整文件夹复制到 `~/.codex/skills/`。
3. 重新打开 Codex，或新建一个任务。
4. 输入：`运行 $opc-offer-mvp，先审计我的真实客户证据，再帮我设计一个能亲自交付的最小 Offer 和 MVP。`

## 开始前准备

把以下文件放进同一个 Founder Workspace：

- `BUSINESS-SOT.md`
- `CUSTOMER-EVIDENCE.md`
- 最近一次 `continue`、`revise` 或 `stop` 判断
- 脱敏后的访谈、测试或承诺证据引用

缺少真人证据时，Skill 只会输出标明 `unvalidated offer hypothesis` 的草案，并要求先完成外部验证。AI 不能代替客户访谈，也不能模拟付款、押金、同意、审批或授权。

## 课程产出

运行完成后应保留三个文件：

1. `OFFER.md`：目标客户、触发场景、承诺结果、交付物、范围、不做事项、客户责任、人工责任、验收标准和价格假设。
2. `MVP-DELIVERY.md`：最小交付流程、人工与 AI 分工、成本和时间上限、依赖、风险及停止条件。
3. `OFFER-TEST.md`：最便宜的真人测试、预先定义的判断信号、截止时间和真实响应记录。

`drafted` 只代表文件齐全；目标客户实际看到 Offer 并留下可检查响应后才是 `executed`；课程指定 reviewer 验收证据链和交付边界后才是 `verified`。

## 学生检查清单

- 每条客户结论能回到真实证据引用，而不是 AI 生成内容。
- 结果承诺在你能控制的范围内，没有保证收入、排名、融资或其他客户业务结果。
- Included、Not included、客户责任和验收标准没有互相冲突。
- 价格明确标为假设，并写清币种、计费单位、付款时点和证据缺口。
- MVP 是测试关键假设所需的最小版本；人工交付没有伪装成全自动。
- 未经你明确批准，Codex 没有联系客户、发送报价、创建付款链接或作出交付承诺。
