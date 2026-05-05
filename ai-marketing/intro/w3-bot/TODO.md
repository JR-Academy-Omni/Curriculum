# W3 引流课 — 工程清单

| # | 待做 | 输出形式 | owner | due | 状态 |
|---|---|---|---|---|---|
| 1 | 30 条 FAQ 模板（含 system prompt + intent / question / answer / fallback 四列） | JSON / CSV 模板 | — | — | ☐ |
| 2 | Coze 部署 step-by-step（中文学员） | Markdown + 截图 step-by-step | — | — | ☐ |
| 3 | Lindy + n8n 部署 step-by-step（英文学员） | Markdown + 截图 | — | — | ☐ |
| 4 | 90 min 录播脚本 + PPT（中英两版） | Keynote / Google Slides + Speaker Notes | — | — | ☐ |
| 5 | 讲师真实 bot demo 录屏（中英各 1） | 10-15 min 录屏 | — | — | ☐ |
| 6 | 售卖平台对接（小鹅通 / Stripe / 落地页） | 平台后台 + 落地页 | — | — | ☐ |

## 内容产出落盘位置

- FAQ 模板（#1）→ `intro/w3-bot/faq-template.json`
- Coze 部署文档（#2）→ `intro/w3-bot/deploy-coze.md`
- Lindy/n8n 部署（#3）→ `intro/w3-bot/deploy-lindy-n8n.md`
- 录播脚本（#4）→ `intro/w3-bot/script-{cn,en}.md`
- demo 录屏（#5）→ S3 链接，写到 README.md
- 售卖（#6）→ `../../operations/SALES_PLATFORMS.md`

## 关键工程注意

- **中英两套录播**：工作量比 W1/W2/W4 多 50%（因为部署目标平台不同）
- **bot 真实部署成功率**：学员设备 / 账号 / 网络差异大，需要写 troubleshooting 章节（5+ 条常见问题）
- **承诺红线**：「至少 1 次回复正确」是过程性，OK；不写「能让你客服效率提升 X%」（金钱/效率承诺红线）
