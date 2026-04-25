# JR Academy ChatGPT 海报 Prompt 库

> 给运营 / 销售 / 老师 / Claude 用的"海报创意货架"。打开 [`../image-prompts.html`](../image-prompts.html) → 筛选 → 复制 prompt → 贴到 ChatGPT (**gpt-image-2 / ChatGPT Images 2.0**) → 出图。

> 🚨 **写 prompt 必读**：[`_shared/gpt-image-2-guide.md`](_shared/gpt-image-2-guide.md) —— 5 条铁律 + 标准骨架 + 中文渲染坑对策。本仓库所有 prompt **必须**按 gpt-image-2 写法（不是旧的 gpt-image-1 / DALL-E 3 习惯）。

---

## 用法（30 秒）

1. 在浏览器里打开 `curriculum/image-prompts.html`
2. 筛选 bootcamp / 受众 / 痛点 / 格式
3. 点卡片打开抽屉，先看「海报上的中文文字」对不对
4. 点"📋 复制 prompt" → 贴去 ChatGPT（确认右下角是 **gpt-image-2 / Images 2.0** 模型）
5. **xhs 长文案建议切 Thinking 模式**（ChatGPT 右下角切换），准确率显著高
6. 出图后**对照「海报上的中文文字」检查**：错字 / 缺字 / 排版乱位 → 用「备用变体 v2/v3」或自己微调再跑

> **模型**：`gpt-image-2` (OpenAI ChatGPT Images 2.0, 2026-04-21 发布)。中文文字渲染 ~99% 准确，单次出 1-8 张连贯图。详见 [`_shared/gpt-image-2-guide.md`](_shared/gpt-image-2-guide.md)。

---

## 目录结构

```
image-prompts/
├── README.md                       # 本文档
├── index.json                      # 所有 prompt 的元数据（喂给 image-prompts.html）
├── _shared/
│   ├── gpt-image-2-guide.md        # 🚨 写 prompt 必读：5 铁律 + 骨架 + 中文坑
│   ├── brand-style.md              # 品牌风格基底（配色/字体/Logo 规则）
│   └── format-specs.md             # 三种格式的尺寸/构图规范
└── {bootcamp-slug}/
    ├── README.md                   # 该 bootcamp 的 prompt 矩阵索引
    ├── xhs/                        # 小红书种草 1024×1792（输出对应 1242×1660）
    ├── wechat-cover/               # 朋友圈/视频号封面 1024×1792（输出对应 1080×1260）
    └── hero/                       # 课程详情页 hero 1792×1024（输出对应 1920×900）
```

---

## Taxonomy（受众 × 痛点 × 格式）

### 受众（Role）

| 代号 | 角色 | 关注点 |
|------|------|-------|
| `programmer` | 程序员/工程师 | 技术深度、不被淘汰、跳槽涨薪 |
| `pm-manager` | 产品/运营/管理岗 | AI 提效、团队带队、跨界 |
| `career-changer` | 转行/求职者 | 上岸、海外、稳定 offer |
| `student-parent` | 学生/家长 | 未来职业、AI 时代起点 |

### 痛点（Pain Point）

| 代号 | 痛点 | 情绪关键词 |
|------|------|-----------|
| `age-35` | 35 岁焦虑 | 被优化、天花板、年龄歧视 |
| `side-hustle` | 副业增长 | 睡后收入、第二曲线、独立 |
| `overseas` | 海外求职 | 澳洲 PR、远程、英语职场 |
| `ai-replace` | AI 替代焦虑 | 饭碗、技能贬值、降维打击 |

### 格式（Format）

| 代号 | 用途 | 尺寸 | 文字密度 |
|------|------|------|---------|
| `xhs` | 小红书种草 | 1242×1660 (3:4) | 高（标题 + 副标 + 3 bullet + CTA） |
| `wechat-cover` | 朋友圈/视频号封面 | 1080×1260 | 中（一行大字 + 一句副标） |
| `hero` | 课程详情页 hero | 1920×900 | 低（一句 + 品牌元素） |

详细 → [`_shared/format-specs.md`](_shared/format-specs.md)

---

## 文件命名

```
{bootcamp-slug}/{format}/{role}-{painPoint}.md       ← 中文（默认，发小红书/朋友圈/视频号）
{bootcamp-slug}/{format}/{role}-{painPoint}-en.md    ← 英文（发 Instagram/LinkedIn，或英文版详情页）
```

例：
```
ai-engineer-bootcamp/xhs/programmer-age-35.md      # 中文，1242×1660 (4:5)，平台：小红书
ai-engineer-bootcamp/xhs/programmer-age-35-en.md   # 英文，1080×1350 (4:5)，平台：IG / LinkedIn
ai-engineer-bootcamp/hero/programmer-age-35.md     # 中文 hero
ai-engineer-bootcamp/hero/programmer-age-35-en.md  # 英文 hero
```

同组合多版本：`programmer-age-35-v2.md` / `programmer-age-35-en-v2.md`（v1 隐含为基线）

### 中英双语规则

- **同一群学员**（jiangren.com.au 双语站，next-intl 切换）
- **共享 taxonomy**（受众 / 痛点 / 格式 不重新设计，每条字段加英文翻译）
- **英文版不是逐字翻译**，是同一核心 message 的英文表达
- **格式映射**：xhs(小红书) ↔ Instagram/LinkedIn Post，wechat-cover(朋友圈) ↔ LinkedIn/Instagram Cover，hero ↔ hero
- **frontmatter 必须有 `lang: zh | en`**

---

## 写新 prompt 的标准模板

每个 `.md` 文件长这样：

```markdown
---
bootcamp: ai-engineer-bootcamp
bootcampName: AI Engineer Bootcamp
role: programmer
roleName: 程序员/工程师
painPoint: age-35
painPointName: 35 岁焦虑
format: xhs
formatName: 小红书种草
size: 1242x1660
version: 1
title: 35岁程序员，AI 让我重新拿到面试
ctaText: 评论区扣"AI"领大纲
tags: [程序员, 35岁, RAG, Agent]
---

# 程序员 × 35 岁焦虑 × 小红书种草

## 这张想表达什么
一句话讲为什么这张海报对这类人有杀伤力。

## 海报上的中文文字
- **大标题**: 35岁程序员，AI 让我重新拿到面试
- **副标题**: ...
- **正文 bullet**:
  - ...
- **CTA**: ...
- **角标**: JR Academy · AI Engineer Bootcamp

## 完整 Prompt（英文，可直接复制）

```
Create a vertical 3:4 poster (1242x1660), ...
[详细 layout / visual / text overlay / style / negative]
```

## 备用变体

### v2 — 标题更尖锐
> "..."

### v3 — 受众放宽
> "..."

## 出图 tips（可选）
- 第一次没出对字 → 删掉某段重跑
- 字号偏小 → 把 "large bold sans-serif" 换成 "extra-large heavy display font"
```

---

## 给 Claude / 自动化的接入点

新增 / 修改 prompt 后，记得**重建索引**：

```bash
# Step 1 (本文档发布时)：手动维护 index.json
# Step 2：脚本自动重建（待开发）
node curriculum/scripts/rebuild-image-prompts-index.mjs
```

`index.json` 是 `image-prompts.html` 的唯一数据源。

---

## 5 铁律（gpt-image-2 专用）

完整版 → [`_shared/gpt-image-2-guide.md`](_shared/gpt-image-2-guide.md)

1. **前 50 词承担 80% 权重** —— 把 aspect ratio + subject + 主标题文字放最前
2. **结构公式优先**：`[Style] + [Subject] + [Environment] + [Lighting] + [Composition] + [Tech]`
3. **文字必须用引号锁**：`reading: "35岁前端"`，每段 ≤ 14 字
4. **必写 aspect ratio**：`Aspect ratio: 3:4. Image size: 1024×1792.`（不写默认方图）
5. **删掉过时魔法词**：`8K / masterpiece / best quality / ultra realistic` 在 image-2 上无效，反而稀释信号

更多 → [`_shared/gpt-image-2-guide.md`](_shared/gpt-image-2-guide.md) | [`_shared/brand-style.md`](_shared/brand-style.md)

---

## Roadmap

- **v1（当前）**：手写 prompt + 静态 hub 页
- **v2**：`/poster-prompt-creator` skill 自动化新增
- **v3**：批量出图脚本（直接调 OpenAI API）+ 反馈数据回流（哪些 prompt 转化高）

详 → [`../IMAGE_PROMPTS_PRD.md`](../IMAGE_PROMPTS_PRD.md)
