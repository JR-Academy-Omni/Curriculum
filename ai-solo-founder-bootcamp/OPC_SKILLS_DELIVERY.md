# OPC 学生 Skills 交付表

学生看到能力名称，不使用 `opc-w4-*` 这类排期名称。每个下载包包含 `opc-founder-os`、本项能力 Skill 和中文安装说明。

| 课程能力 | Skill | 课程页 | 生产材料 ID | ZIP SHA-256 | 状态 |
|---|---|---|---|---|---|
| Offer 与最小交付 | `opc-offer-mvp` | 做出能卖的东西 | `6a8708a82fe391d3484d15a0` | `07eefb6b0b11d67bf196290bf768636e1c285a85e8b9582e9821de69344c1db2` | 已绑定并回读 |
| 每周交付复盘 | `opc-shipping-review` | 别让项目烂尾 | `6a8708d92fe391d3484d1718` | `2644d3a428525b4789295183c51359ce5cb091d219f4befce5d2da9031826e81` | 已绑定并回读 |
| 第一笔真实收入 | `opc-first-dollar` | 收到第一笔钱 | `6a8708af2fe391d3484d15fc` | `50444acbcb5e914e8c598e55250c74a244dae677a50fda9a338bc1864f4df352` | 已绑定并回读 |
| 客户获取实验 | `opc-customer-acquisition` | 主动敲开客户的门 | `6a8708b62fe391d3484d1655` | `ba0f46413e7412d6e9d717b205e96fa4900410ad07998708397d6306a2388954` | 已绑定并回读 |

完成门槛：Skill 校验通过；ZIP 完整性通过；上传后 S3 字节与 SHA-256 回读一致；生产课节能看到附件。`drafted`、`executed`、`verified` 必须基于真实证据，不得由 AI 模拟升级。

## 2026-09-19 · 本地补齐，未上传

新增 18 个能力 Skills，连同原有 4 个能力与共享 Founder OS 共 23 个；按 W0–W15 及独立 SEO/GEO 课构建 17 个周/专题包。映射见 [OPC_SKILLS_WEEKLY_MAP.md](OPC_SKILLS_WEEKLY_MAP.md)，机器清单见 [OPC_SKILLS_CATALOG.json](OPC_SKILLS_CATALOG.json)。

本轮新增内容与重新打包内容均未写入生产材料、未绑定课节。上表 SHA-256 属于旧发布包，不代表新包；共享 Founder OS 路由更新后必须使用本次包的 manifest。当前包已按 `public/outline.json` 的 L01–L54 校准，未找到专属 deck 的周次不伪称逐页 PPT 对齐。

最新本地学生包位于 `/Users/lightman/Downloads/OPC 创业营 - 每周 Skills 学生包 - 2026-09-19 (4)`：17 个周/专题 ZIP + 1 个全套 ZIP，CRC、逐文件 SHA-256 回读与包内链接均通过。此记录是本地打包证据，不是生产上传回执。

## 2026-09-20 · 当前课程周包生产发布

已通过 JR 后端私有材料上传链路发布 17 个周/专题 ZIP；每项均完成 S3 签名读回、字节数与 SHA-256 比对、Material 记录读回及 lesson.material 关系读回。全套 23 Skills ZIP 保留为本地下载合集，没有作为重复课程附件上传。

| 包 | 生产 Material ID | 绑定课节 ID | 结果 |
|---|---|---|---|
| W0 | `6aaf618e04e5a70420cde4a2` | `6a671b1b850325ba16ef7375` | 已发布并回读 |
| W1 | `6aaf619604e5a70420cde50f` | `6a671b1b850325ba16ef7380` | 已发布并回读 |
| W2 | `6aaf61a004e5a70420cde562` | `6a671b1c850325ba16ef739b` | 已发布并回读 |
| W3 | `6aaf61a804e5a70420cde5f4` | `6a671b1c850325ba16ef73b3` | 已发布并回读 |
| W4 | `6aaf61b304e5a70420cde7d7` | `6a671b1d850325ba16ef73c2` | 已发布并回读 |
| W5 | `6aaf61bd04e5a70420cde9d0` | `6a671b1f850325ba16ef73fa` | 已发布并回读 |
| W6 | `6aaf61c504e5a70420cdea3e` | `6a671b20850325ba16ef7445` | 已发布并回读 |
| W7 | `6aaf61cc04e5a70420cdeaa4` | `6a671b20850325ba16ef7495` | 已发布并回读 |
| W8 | `6aaf61d404e5a70420cdeb09` | `6aa3c0cf7f633224e021510b` | 已发布并回读 |
| W9 | `6aaf61dc04e5a70420cdec9c` | `6aa3c7db7f633224e024856d` | 已发布并回读 |
| W10 | `6aaf61e704e5a70420cdedac` | `6aa3c87f7f633224e0248e6c` | 已发布并回读 |
| SEO-GEO | `6aaf61f104e5a70420cdef1b` | `6a671b23850325ba16ef74cc` | 已发布并回读 |
| W11 | `6aaf61fe04e5a70420cdf0b5` | `6a671b23850325ba16ef74d6` | 已发布并回读 |
| W12 | `6aaf620804e5a70420cdf261` | `6a671b24850325ba16ef74fa` | 已发布并回读 |
| W13 | `6aaf621304e5a70420cdf430` | `6a671b24850325ba16ef7509` | 已发布并回读 |
| W14 | `6aaf621f04e5a70420cdf8db` | `6a671b25850325ba16ef7524` | 已发布并回读 |
| W15 | `6aaf622a04e5a70420cdfa0b` | `6a671b26850325ba16ef752e` | 已发布并回读 |

完整对象 key、字节数和 SHA-256 见 `.skill-releases/opc-current-curriculum-publish-2026-09-20.json`。第一次 W0 尝试已完成 S3 写入，但 Material 创建因旧脚本传入无效 type enum 而失败；对象 key 未由失败响应返回，记录为不可定位的未登记对象。修正为受支持的 `related` 后重新上传并完成全部绑定，没有重复 Material 哈希记录。
