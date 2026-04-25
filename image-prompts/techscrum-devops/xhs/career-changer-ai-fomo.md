---
bootcamp: techscrum-devops
bootcampName: TechScrum DevOps 项目实训营
role: career-changer
roleName: 转行/求职者
painPoint: ai-fomo
painPointName: AI FOMO / 不被替代
format: xhs
formatName: 小红书种草
size: 1024x1792
displaySize: 1242x1660
model: gpt-image-2
mode: Thinking
lang: zh
version: 1
title: AI 写得了代码，但 AI 部署不了基础设施
ctaText: 评论区扣"DevOps"领大纲
tags: [DevOps, AI替代, IaC, K8s, 转行]
---

# Career Changer × AI FOMO × 小红书种草

> 模型：`gpt-image-2` · 模式：**Thinking** · 比例 3:4

## 这张想表达什么

差异化卖点：**AI 替代不了 DevOps**。
理由很硬：AI 可以写函数、写组件，但是公司不会把 AWS root account / kubectl prod / tfstate 交给一个 LLM 自动跑。
基础设施的"权责"和"审计"决定了它仍然必须是人类工程师在管。
转行人群常听到"AI 取代码农"，但听不到"AI 取代不了 SRE"——这条就是把这个差异化告诉他们。

## 海报上的中文文字

- **大标题**：AI 写得了代码
- **副标题**：但 AI 部署不了基础设施
- **正文 bullet**：
  - ✓ 公司不会把 root 密钥交给 LLM
  - ✓ K8s 故障半夜还得人来排
  - ✓ 7 周变身能扛 Prod 的 DevOps
- **CTA**：评论区扣 "DevOps" 领大纲
- **角标**：JR Academy · TechScrum DevOps 项目实训营

## 完整 Prompt

```
Model: gpt-image-2.
Aspect ratio: 3:4. Image size: 1024×1792 px. Mode: Thinking.

Vertical 3:4 lifestyle-tech poster, 小红书 editorial photo style.

Top 60%: a clean flat-design split illustration on warm cream background.
Left half: a small chat bubble showing abstract code lines with a tiny robot icon — labeled below "AI" in small heavy bold dark text.
Right half: a server rack outline with a small red flashing alert dot, beside a black silhouette holding a laptop at night (no face) — labeled below "Human" in small heavy bold red text.
Between halves: thin vertical divider in #10162F, tiny "vs" badge centered.
Below all elements: subtle dark gray serif text reading "production access ≠ AI access".
Minimalist editorial, soft drop shadow. Text must be sharp and beautifully composed.

Bottom 40% (text card): clean off-white card on flat #FFF1E7, thin 2px black top border.

Extra-large heavy bold Chinese sans-serif (思源黑体 Heavy), color #10162F, generous letter spacing, 1 line:
"AI 写得了代码"

Just below, medium-bold Chinese sans-serif in #FF5757, 1 line:
"但 AI 部署不了基础设施"

Three bullet lines, medium bold, color #10162F, each preceded by a "✓" in #FF5757:
"✓ 公司不会把 root 密钥交给 LLM"
"✓ K8s 故障半夜还得人来排"
"✓ 7 周变身能扛 Prod 的 DevOps"

Bottom CTA strip, solid #FF5757, white bold Chinese sans-serif:
"评论区扣 DevOps 领大纲"

Bottom-right corner, tiny flat text in #10162F:
"JR Academy · TechScrum DevOps 项目实训营"

Text must be sharp and beautifully composed. Simplified Chinese only. "AI" "LLM" "K8s" "Prod" "DevOps" "root" "Human" "vs" must spell exactly with correct case. "7" must be Arabic numeral. Flat solid color, no stroke, no shadow on text.

Color palette: #FFF1E7 / #10162F / #FF5757 / #444.

No watermark. No graphic logos. No fake AWS/OpenAI/Anthropic brand marks. No emojis. No real human face — silhouette only.
```

## 备用变体

### v2 — 反向角度
> 大标题：**「AI 替代了写 CRUD 的」**
> 副标题：**「但替代不了管 Prod 的」**

### v3 — 数据冲击
> 大标题：**「2026 招聘趋势」**
> 副标题：**「DevOps JD 同比涨 40%、CRUD 跌 25%」**

### v4 — 故事感
> 大标题：**「半夜 3 点 K8s 挂了」**
> 副标题：**「老板找的不是 ChatGPT 是你」**

## 出图 tips

- **AI / Human 对比要清晰**：append `the divider must be exactly vertical, with the AI side on left and Human side on right, "vs" badge centered`
- **silhouette 不能出脸**：append `the human figure must be a flat black silhouette only — no facial features, no skin tone`
- **K8s / LLM / Prod 拼写**：append `tech abbreviations must render exactly as: K8s (capital-K, digit-8, lowercase-s), LLM (all caps), Prod (capital-P only)`
- **production access ≠ AI access**：底部小字偶尔被错画，可换成 `"prod ≠ AI"` 更短更稳
