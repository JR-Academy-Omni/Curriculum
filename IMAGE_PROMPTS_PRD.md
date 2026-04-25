# PRD: JR Academy ChatGPT 海报 Prompt 库

> **一句话**：在 `curriculum/` 下建一个 prompt 货架，运营/销售/老师/Claude 打开 `image-prompts.html` → 筛选 → 一键复制 → 贴到 ChatGPT (gpt-image) → 出图。

- **作者**: Wang Yanbo + Claude
- **状态**: Draft v1
- **关联模块**: curriculum 内容创作区
- **落盘位置**: `curriculum/image-prompts.html` + `curriculum/image-prompts/`

---

## 1. 背景与动机

### 现状
- 每个 bootcamp 都有 `public/xhs-posters/`，全是 HTML + Canvas 2D 手写渲染，设计上限受限于前端代码能力，迭代慢。
- 已有 `posters.html`、`quest-posters.html`、`render-mp-posters.mjs` 等多套渲染脚本，但都是"图本身的产线"，不是"创意素材的沉淀"。
- OpenAI 新出的 image 模型（gpt-image / 4o image）已经能渲染中文标题，画面质感、构图、风格可控性大幅超过 html2canvas / Canvas 2D。

### 痛点
1. **运营/销售出图卡在写 prompt** —— 不知道怎么把"35 岁焦虑 + 程序员 + 小红书种草"翻译成可执行的画面描述。
2. **没有沉淀** —— 每次都是从零写，调好的 prompt 散落在各个聊天记录里。
3. **不同 bootcamp 风格不统一** —— 没有共享的品牌风格基底，A 老师做的海报和 B 老师做的不像一个学校。
4. **多格式重复劳动** —— 同一个文案概念，要分别出小红书竖图、朋友圈封面、详情页 hero，每次都重写。

### 机会
把"提示词"作为一种课程素材沉淀下来，**和 outline.json 一样进 git**，可版本化、可复用、可批量。

---

## 2. 目标

### 主目标
让运营/销售/老师/Claude **不写代码、不调 API**，就能为任意一个 bootcamp 拿到一套覆盖三种格式、四类受众、四类痛点的可执行 ChatGPT 海报 prompt。

### 成功指标
- ✅ 16 个 bootcamp 全部覆盖（每个至少 4 个角色×痛点组合 × 3 格式）
- ✅ 总枢纽页能按 bootcamp / 受众 / 痛点 / 格式筛选
- ✅ 一键复制 prompt，贴到 ChatGPT 即出图，**首次出图可用率 ≥ 70%**（剩余 30% 通过备用变体或微调解决）
- ✅ 新 bootcamp 接入成本 < 30 分钟（Claude 跑 skill 自动生成）

---

## 3. 非目标（Out of Scope）

- ❌ **不**在浏览器内直接调 OpenAI API 出图 —— 用户场景明确是"贴去 ChatGPT 网页/桌面端"。
- ❌ **不**替代现有 Canvas 2D 海报系统（`xhs-posters/`、`render-mp-posters.mjs`）—— 那些是确定性、批量、品牌严格一致的输出；本系统是创意性、人工挑图、营销试错。
- ❌ **不**做 prompt 的自动生成（除 skill 辅助外）。每张 prompt 是人工 + Claude 共创，要打磨。
- ❌ **不**包含视频脚本、长文文案。仅图片 prompt。

---

## 4. 用户故事

| ID | 角色 | 故事 |
|----|------|------|
| US-1 | 运营 | 我要发本周的小红书种草帖，主推 ai-engineer-bootcamp，目标受众是 35 岁程序员。我希望打开一个页面，筛选 bootcamp + 角色 + 痛点 + 小红书格式，秒拿 prompt。|
| US-2 | 销售 | 我要在朋友圈宣传 business-analyst bootcamp，受众是想转行的产品经理。我希望复制一段 prompt 到 ChatGPT，出来一张冲突感强的封面图。|
| US-3 | 老师 | 我要给 ai-essentials-bootcamp 课程详情页换 hero。我希望拿一个保持品牌一致、留白足、不抢标题的横版 prompt。|
| US-4 | Claude | 用户用 `/career-bootcamp` 新加了一个 bootcamp，我自动给这个 bootcamp 生成全套 12-15 个 prompt 文件。|
| US-5 | 内部测试 | 我跑完一张图觉得标题太硬，我希望直接看到"备用变体 v2"，换个语气重出。|

---

## 5. 信息架构

```
curriculum/
├── image-prompts.html              # 总枢纽页（HTML + 内嵌 JS，零依赖）
├── image-prompts/
│   ├── README.md                   # 使用说明 + taxonomy 字典
│   ├── index.json                  # 所有 prompt 的元数据，喂 html
│   ├── _shared/
│   │   ├── brand-style.md          # JR Academy 品牌风格基底（配色/字体/Logo 用法），所有 prompt 引用
│   │   └── format-specs.md         # 三种格式的尺寸/构图规范
│   └── {bootcamp-slug}/
│       ├── README.md               # 该 bootcamp 的 prompt 矩阵索引（角色×痛点×格式）
│       ├── xhs/                    # 小红书种草 1242×1660
│       │   └── {role}-{painPoint}.md
│       ├── wechat-cover/           # 朋友圈/视频号封面 1080×1260
│       │   └── {role}-{painPoint}.md
│       └── hero/                   # 课程详情页 hero 1920×900
│           └── {role}-{painPoint}.md
```

### 命名规则
- 文件名：`{role}-{painPoint}.md`，示例 `programmer-age-35.md`
- 同一组合多版本：`programmer-age-35-v2.md`（v1 隐含为基线）

---

## 6. 数据结构

### 6.1 单个 prompt 文件（Markdown + Frontmatter）

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
ctaText: 留言"AI"领大纲
tags: [程序员, 35岁, 转型, RAG]
---

# 程序员 × 35 岁焦虑 × 小红书种草

## 海报上的中文文字

- **大标题**: 35岁程序员，AI 让我重新拿到面试
- **副标题**: 从 CRUD 仔到 RAG 工程师，3 个月
- **正文 bullet**:
  - 写过 8 年代码，第一次觉得"会写代码"不是终点
  - LangChain / RAG / Agent 一套能落地的工程
  - 18 周陪跑，每周作业批改
- **CTA**: 留言"AI"领大纲
- **角标**: JR Academy · 第 4 期

## gpt-image Prompt（英文，可直接复制）

```
[完整英文 prompt，详见样例]
```

## 备用变体

### v2 — 标题更尖锐
> "被裁第 7 天，我学了 AI 工程"
（其他文字保持，仅替换大标题）

### v3 — 受众放宽到 30+
> "30+ 程序员的第二曲线"
```

### 6.2 索引文件 `index.json`

```json
{
  "version": 1,
  "generatedAt": "2026-04-25T...",
  "taxonomy": {
    "roles": [
      { "code": "programmer", "name": "程序员/工程师" },
      { "code": "pm-manager", "name": "产品/运营/管理岗" },
      { "code": "career-changer", "name": "转行/求职者" },
      { "code": "student-parent", "name": "学生/家长" }
    ],
    "painPoints": [
      { "code": "age-35", "name": "35 岁焦虑" },
      { "code": "side-hustle", "name": "副业增长" },
      { "code": "overseas", "name": "海外求职" },
      { "code": "ai-replace", "name": "AI 替代焦虑" }
    ],
    "formats": [
      { "code": "xhs", "name": "小红书种草", "size": "1242x1660" },
      { "code": "wechat-cover", "name": "朋友圈/视频号封面", "size": "1080x1260" },
      { "code": "hero", "name": "课程详情页 hero", "size": "1920x900" }
    ]
  },
  "bootcamps": [
    {
      "slug": "ai-engineer-bootcamp",
      "name": "AI Engineer Bootcamp",
      "promptCount": 15
    }
  ],
  "prompts": [
    {
      "id": "ai-engineer-bootcamp/xhs/programmer-age-35",
      "bootcamp": "ai-engineer-bootcamp",
      "role": "programmer",
      "painPoint": "age-35",
      "format": "xhs",
      "title": "35岁程序员，AI 让我重新拿到面试",
      "filePath": "image-prompts/ai-engineer-bootcamp/xhs/programmer-age-35.md"
    }
  ]
}
```

---

## 7. 内容矩阵设计

### 7.1 受众（Role）— 4 类

| 代号 | 角色 | 关注点 | 视觉气质 |
|------|------|--------|---------|
| `programmer` | 程序员/工程师 | 技术深度、不被淘汰、跳槽涨薪 | 深色 IDE、键盘特写、夜晚书桌 |
| `pm-manager` | 产品/运营/管理岗 | AI 提效、团队带队、跨界 | 会议室白板、数据图表、咖啡 |
| `career-changer` | 转行/求职者 | 上岸、海外、稳定 offer | offer 截图、机场窗景、新工卡 |
| `student-parent` | 学生/家长 | 未来职业、AI 时代起点 | 书桌、笔记、家庭氛围、暖光 |

### 7.2 痛点（Pain Point）— 4 类

| 代号 | 痛点 | 情绪关键词 | 标题钩子样例 |
|------|------|-----------|-------------|
| `age-35` | 35 岁焦虑 | 被优化、天花板、年龄歧视 | "35 岁第一次觉得 AI 是救命稻草" |
| `side-hustle` | 副业增长 | 睡后收入、第二曲线、独立 | "下班 2 小时，AI 给我开了第二条职业线" |
| `overseas` | 海外求职 | 澳洲 PR、远程、英语职场 | "用 AI 工程拿到墨尔本第一份 sponsor" |
| `ai-replace` | AI 替代焦虑 | 饭碗、技能贬值、降维打击 | "与其被 AI 替代，不如先学会用它" |

### 7.3 格式（Format）— 3 种

| 代号 | 用途 | 尺寸 | 构图重点 | 文字密度 |
|------|------|------|---------|---------|
| `xhs` | 小红书种草 | 1242×1660 (3:4) | 大标题 + 痛点钩子 + iPhone 截图感 | 高（标题 + 副标 + 3 bullet + CTA） |
| `wechat-cover` | 朋友圈/视频号封面 | 1080×1260 | 强冲突、单点视觉、人脸/物件特写 | 中（一行大字 + 一句副标） |
| `hero` | 课程详情页 hero | 1920×900 | 品牌质感、留白、不抢标题 | 低（仅一句话 + 品牌元素，前端再叠真标题） |

### 7.4 角色 × 痛点 自然组合（非笛卡尔积）

每个 bootcamp 挑 **4-5 个最贴的组合**，乘以 3 个格式 = 12-15 张 prompt。

| Bootcamp | 自然组合 |
|----------|---------|
| ai-engineer-bootcamp | programmer×age-35, programmer×ai-replace, career-changer×overseas, pm-manager×ai-replace |
| ai-essentials-bootcamp | pm-manager×ai-replace, career-changer×ai-replace, student-parent×ai-replace, pm-manager×age-35 |
| ai-programming | programmer×side-hustle, student-parent×ai-replace, career-changer×ai-replace, programmer×age-35 |
| ai-builder | pm-manager×side-hustle, career-changer×side-hustle, student-parent×ai-replace, pm-manager×ai-replace |
| ai-copilot | programmer×side-hustle, programmer×ai-replace, pm-manager×ai-replace |
| ai-adoption-bootcamp | pm-manager×ai-replace, pm-manager×age-35, career-changer×ai-replace |
| business-analyst | career-changer×overseas, pm-manager×age-35, career-changer×side-hustle, career-changer×ai-replace |
| qa | career-changer×overseas, programmer×age-35, career-changer×ai-replace |
| techscrum-devops | programmer×age-35, programmer×overseas, career-changer×overseas |
| full-stack-developer-interview | programmer×overseas, career-changer×overseas, programmer×age-35 |
| it-career-support | career-changer×overseas, programmer×age-35, career-changer×ai-replace |
| web-code-bootcamp-or-learn-to-code-1 | career-changer×side-hustle, student-parent×ai-replace, career-changer×overseas |
| ai-engineer-rag | programmer×age-35, programmer×side-hustle, career-changer×overseas |
| video-ai-engineer | programmer×ai-replace, programmer×age-35 |
| video-ai-pm | pm-manager×ai-replace, pm-manager×age-35 |
| openclaw-workshop | programmer×side-hustle, programmer×ai-replace |

**规模估算**: 全量 ≈ 16 bootcamp × 平均 4.5 组合 × 3 格式 ≈ **220 份 prompt 文件**

---

## 8. 总枢纽页 `image-prompts.html` 设计

### 8.1 页面结构（零依赖，纯 HTML + 原生 JS）

```
┌─────────────────────────────────────────────────────┐
│  JR Academy · ChatGPT 海报 Prompt 库                  │
│  使用说明：筛选 → 复制 → 贴 ChatGPT → 出图              │
├─────────────────────────────────────────────────────┤
│  Bootcamp: [ 全部 ▾ ]   受众: [ 全部 ▾ ]              │
│  痛点:    [ 全部 ▾ ]   格式: [ 全部 ▾ ]              │
│  搜索:    [_______________________🔍]                │
├─────────────────────────────────────────────────────┤
│  显示 47 / 220 条                                    │
│ ┌──────────────┐ ┌──────────────┐ ┌──────────────┐ │
│ │ ai-engineer  │ │ ai-engineer  │ │ ai-engineer  │ │
│ │ #小红书 #程序员│ │ #朋友圈 #程序员│ │ #hero #程序员 │ │
│ │ #35岁焦虑    │ │ #AI替代      │ │ #海外求职     │ │
│ │              │ │              │ │              │ │
│ │ 35岁程序员，  │ │ 写代码 8 年， │ │ 18 周陪跑     │ │
│ │ AI 让我重新   │ │ 第一次怕被    │ │ AI 工程师     │ │
│ │ 拿到面试      │ │ AI 替代       │ │ 上岸          │ │
│ │              │ │              │ │              │ │
│ │ [📋 复制 prompt]│ [📋 复制 prompt]│ [📋 复制 prompt]│
│ │ [👁 预览]     │ │ [👁 预览]     │ │ [👁 预览]     │ │
│ └──────────────┘ └──────────────┘ └──────────────┘ │
├─────────────────────────────────────────────────────┤
│  右侧抽屉（点击预览展开）:                            │
│  ┌─────────────────────────────┐                    │
│  │ [×] programmer × age-35 × xhs│                    │
│  │                              │                    │
│  │ ## 海报上的中文文字            │                    │
│  │ ...                          │                    │
│  │                              │                    │
│  │ ## 完整 Prompt                │                    │
│  │ [代码框，[复制] 按钮]          │                    │
│  │                              │                    │
│  │ ## 备用变体 v2 / v3           │                    │
│  └─────────────────────────────┘                    │
└─────────────────────────────────────────────────────┘
```

### 8.2 技术实现
- **纯静态**：HTML + 内嵌 CSS + 原生 JS，**不引任何框架**（和 `posters.html`、`quest-posters.html` 风格一致）
- **数据源**：`fetch('image-prompts/index.json')` 拉数据驱动
- **markdown 渲染**：用 [marked.js CDN](https://cdn.jsdelivr.net/npm/marked) 解析 prompt 文件 markdown 内容
- **复制**：`navigator.clipboard.writeText()`，Toast 提示"已复制"
- **筛选**：纯前端过滤，O(n) 即可（n ≤ 300）
- **响应式**：手机端单列，桌面 3-4 列

### 8.3 不做
- ❌ 不做后端 API、不做 SSR
- ❌ 不接登录鉴权（curriculum 本就是内部工具）
- ❌ 不内嵌 ChatGPT iframe

---

## 9. Prompt 撰写规范（核心质量）

### 9.1 通用结构（每个 prompt 的英文部分都遵循）

```
1. Format & size declaration: "Create a vertical 3:4 poster (1242x1660), 小红书 style"
2. Layout split: top X% = visual, bottom Y% = text card
3. Visual scene: 主体（人/物/场景）+ 光线 + 拍摄风格（photo / illustration / 3D）
4. Text overlay: 逐条列出中文文字 + 字号占比 + 颜色 + 位置
5. Style keywords: 配色 hex、字体感觉、滤镜、留白
6. Negative constraints: "No watermarks. No fake brand logos. No English text overlay."
```

### 9.2 中文渲染要点（gpt-image 已知坑）
- 中文字数控制在 **每行 ≤ 12 字**，太长会换行错位
- 标题、副标题、正文 **分块描述**，避免一次塞太多字段
- 用 **直接引号** 标记要画上去的字：`large red text "35岁程序员"`
- 关键字用品牌色 hex（`#FF4D4F`、`#1A1A2E`、`#F8F4EC`），不要让模型自由发挥
- 避免要求 "watermark" / "logo" 字样 —— 模型会乱画 LOGO，改用"corner tag with text 'JR Academy · 第4期'"

### 9.3 品牌一致性（写进 `_shared/brand-style.md`）
- 主色：`#FF4D4F`（红） / `#1A1A2E`（深蓝黑） / `#F8F4EC`（米白）
- 辅助色：`#FFB800`（暖黄，仅用于强调）
- 字体气质："思源黑体 / 苹方"，重 800 / 常规 400
- Logo：**不让模型画 logo**，统一用文字 "JR Academy" + 期数角标
- 禁忌：渐变彩虹、emoji 堆砌、抽象插画、AI 一眼味（彩色绒毛、塑料感人脸）

---

## 10. 分阶段实施计划

### Step 1 — 模式验证（本会话）

**目标**：搭好基础设施 + 跑通 2 个样板 bootcamp，让用户能立即试出图、给反馈。

**交付物**：
1. ✅ `curriculum/IMAGE_PROMPTS_PRD.md`（本文档）
2. ✅ `curriculum/image-prompts/README.md` —— 使用说明 + taxonomy 字典
3. ✅ `curriculum/image-prompts/_shared/brand-style.md`
4. ✅ `curriculum/image-prompts/_shared/format-specs.md`
5. ✅ `curriculum/image-prompts.html` —— 总枢纽页 v1
6. ✅ `curriculum/image-prompts/index.json` —— 索引文件 v1
7. ✅ 2 个样板 bootcamp 的全套 prompt（每个 4-5 组合 × 3 格式）：
   - `ai-engineer-bootcamp/` —— 程序员向，约 12-15 个文件
   - `ai-essentials-bootcamp/` —— 大众向，约 12-15 个文件
8. ✅ `CHANGELOG.md` 追加一条

**完成定义**：用户能在本地浏览器打开 `curriculum/image-prompts.html`，看到 24-30 张卡片，筛选/搜索/复制功能都通，挑一张去 ChatGPT 出图能直接拿来用。

### Step 2 — 批量铺开（后续会话 / `/loop` / `/schedule`）

**目标**：剩余 14 个 bootcamp 全部覆盖。

**做法**：
- 每次会话铺 2-3 个 bootcamp（避免一次塞太多失控）
- 复用 Step 1 调好的 prompt 模板，按 §7.4 的组合清单批量生成
- 每个 bootcamp 完成后更新 `index.json`，刷新 `image-prompts.html` 验证显示

**完成定义**：220 份 prompt 全部归位，`image-prompts.html` 卡片总数与 `index.json` 一致，按任意 bootcamp 筛选都有 ≥ 12 张卡。

### Step 3 — 质量迭代（持续）

- 用户每跑一张图，反馈「这张好 / 这张差」
- Claude 维护 `prompt-feedback.md`，记录哪些模板成功、哪些失败的原因
- 失败 prompt 升级 v2 / v3，原文件保留作 baseline

---

## 11. 集成点

### 11.1 与现有 curriculum pipeline 关系
- **平级**，不影响 outline.json 同步
- `image-prompts/` 不进 `skills-data/training-outlines/`
- `image-prompts.html` 不参与 `posters.html` / `quest-posters.html` 的 hero 逻辑

### 11.2 与 Skills 系统
后续可加一个 skill：`/poster-prompt-creator`，输入 `bootcamp + role + painPoint + format`，输出标准格式的 .md 文件 + 自动更新 index.json。Step 1 不做，Step 2 之后视需求加。

### 11.3 与 chrome-extension-social-publisher
社交发布插件未来可读取 `image-prompts/` 目录，把 ChatGPT 出来的图 + 海报上的中文文字（标题/CTA）一起带进发文流程。Step 3 之后再讨论。

---

## 12. 风险 & 缓解

| 风险 | 影响 | 缓解 |
|------|------|------|
| gpt-image 渲染中文偶尔错字 | 出图返工 | 每 prompt 提供 v2/v3 备用变体；中文每行 ≤ 12 字 |
| 220 份文件长期维护成本高 | 文件腐烂 | 模板高度统一；每文件 frontmatter 自描述；可用 skill 批量重生 |
| 不同 bootcamp 风格漂移 | 品牌不一致 | 强制引用 `_shared/brand-style.md`；同色板、同 logo 规则 |
| ChatGPT 网页端 prompt 长度限制 | 复杂 prompt 截断 | 每 prompt 控制在 ≤ 1500 字符（英文）|
| 用户审美变化 / 平台风向变化 | 内容过时 | prompt 进 git，迭代历史可查；旧版本不删，加 `archived: true` 字段 |

---

## 13. 验收标准

### Step 1 验收
- [ ] `curriculum/image-prompts.html` 在本地可直接 `open` 打开（不依赖 dev server）
- [ ] 卡片筛选 4 个维度都生效
- [ ] 搜索框命中 title / tags
- [ ] "复制 prompt" 按钮真的把英文 prompt 写到剪贴板
- [ ] 抽屉打开后中文文字 + 英文 prompt + 备用变体 三段都显示
- [ ] 至少 24 张卡片（2 bootcamp × 12 张），每张点开都不报错
- [ ] 随机选 5 张去 ChatGPT 实测，≥ 3 张首次出图可用（≥ 60%）

### 全量验收（Step 2 完成后）
- [ ] 16 bootcamp 在 `image-prompts.html` 筛选下拉中都能选中
- [ ] 每个 bootcamp ≥ 12 张
- [ ] 总数 ≥ 200 张
- [ ] 移动端浏览器（375px 宽）单列显示正常
- [ ] `index.json` 自动从文件系统重建（提供脚本 `scripts/rebuild-image-prompts-index.mjs`）

---

## 14. 开放问题（待对齐）

1. **gpt-image 模型版本**：用户提到 "image2"，目前 OpenAI 公开的最新是 `gpt-image-1`（2025-03）。README 写"可用于 ChatGPT 内置 4o image / gpt-image-1 / 后续 image-2"，保持中性。
2. **中英双语版**：英文站（jiangren.com）也用同一套吗？目前规划只做中文海报。如果英文站也要，每张 prompt 加 `lang: zh|en` 字段，文案双语版（约 +30% 工作量）。**Step 1 暂不做，留口子。**
3. **海报合规**：是否需要避免任何"承诺薪资 / 100% 上岸"等违规话术？建议在 `_shared/brand-style.md` 加一节"广告合规红线"。**Step 1 包含。**
4. **是否做反向链接**：从每个 bootcamp 的 outline 静态页（如 `ai-engineer-bootcamp/public/curriculum.html`）加一个"📷 海报素材"入口跳到 image-prompts？**Step 3 视情况加。**

---

## 15. 后续可能的拓展（不在 v1 范围）

- **批量出图脚本**：Node 脚本批量调 OpenAI API 出图，落盘到 `image-prompts/{bootcamp}/_renders/`（适用于不想手动一张张贴 ChatGPT 的场景）
- **A/B 数据回流**：每张 prompt 加 `usageCount` / `convertRate` 字段，运营反馈哪些钩子带来报名
- **跨语言批量翻译**：本中文 prompt → 英文 prompt（翻译标题 + 切换品牌色 / 字体描述）
- **prompt 评分**：用户可在枢纽页给每张 prompt 打⭐，分数高的置顶
