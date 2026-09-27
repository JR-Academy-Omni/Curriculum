# 第七期逐课内容提升 · Batch 06

日期：2026-09-08
范围：数据库顺序第 30–34 条，Reasoning Prompt、System Prompt 与 Structured Output
状态：本地内容完成；既有 Lab 入口待运行；未同步 production

## 本批完成

- `L40`：把 CoT 改为四种 Prompt/Reasoning Control 的受控对照；不要求隐藏推理。
- `L41`：把 System Prompt Lab 改为 Policy、Task、Runtime、Tool 与 Application Check 分层实验。
- `L41a`：重写 System Prompt 设计阅读，加入 layer placement、versioning、failure matrix 与 regression。
- `L41b`：删除把疑似泄露/二手内容称为“真实 System Prompt”的写法，改成五类课程自建可迁移 patterns。
- `L43`：把 JSON Schema Lab 升级为 parse/refusal、schema、domain、permission、state/lineage 五层 validation。

## 边界

- System Prompt 不承担服务端 RBAC、state transition 或 tool authorization。
- Structured Output 只约束输出形状，不保证事实、权限和业务状态正确。
- Reasoning 实验只评估最终可验证结果，不索取或保存模型隐藏推理。
