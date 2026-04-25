# Research: gpt-image-2 (ai-image learning direction)

> Source-of-truth file. Every chapter claim must be traceable to here.
> Last updated: 2026-04-25

---

## 1. Release & Identity

- **官方名**: ChatGPT Images 2.0（产品名）/ gpt-image-2（API 模型 ID）
- **发布日**: 2026-04-21（OpenAI 官方公告）
- **可用日**:
  - ChatGPT / Codex 网页用户：2026-04-22 起
  - API 开放给开发者：2026 年 5 月初
- **替换关系**: 同时取代 DALL-E 3 和 GPT Image 1.5（前代过渡产品）
- **底层 backbone**: GPT-5.4（与 ChatGPT 文本能力共用同一 reasoning pipeline）
- **官方公告**: https://openai.com/index/introducing-chatgpt-images-2-0/

## 2. 核心能力数据（每条都是可写入章节的事实）

### 文字渲染
- ~99% 字符级准确率，覆盖 Latin / CJK（中日韩）/ Hindi / Bengali 四大字符体系
- 支持多行英文标题、中文字符、混合语言版式（一张图里中英共存）
- TechCrunch 评价："surprisingly good at generating text"
- **战略意义**：这是 vs Midjourney / Flux 的最大差异化（MJ 中文字几乎无法用）

### 分辨率与速度
- 上限 **4K (4096×4096)** —— 之前以为是 2K，错了
- 比前代（GPT Image 1.5）快约 2 倍
- 单次最多生成 8 张连贯图（multi-image generation）
- 比例支持 3:1 ~ 1:3

### Reasoning 集成（核心差异化）
gpt-image-2 用与 ChatGPT 文本侧相同的 reasoning pipeline：
- 生成前会"想"用户到底想要什么
- 必要时联网搜索参考图（如"画一张 2025 上海车展现场"会先搜真实素材）
- 生成后自检输出准确度（self-check loop）

这点是 Midjourney / Flux / Imagen 都没有的。

### 多轮编辑（Context-Aware Editing）
- 生成图后可继续指令修改局部
  - "把背景换成日落"
  - "去掉左边那个人"
  - "文字调大"
- 模型保留其他元素不变，只改指定部分
- 这能力让它从"生图工具"升级为"图像协作伙伴"

## 3. 定价（API 早期开放，2026-05）

### 按图定价（1024×1024）
| 质量档 | 价格 | 适用 |
|--------|------|------|
| Low | $0.006 | 草图、批量探索 |
| Medium | $0.053 | 一般用途、社交媒体配图 |
| High | $0.211 | 海报、Logo、文字密集场景 |

### 按 Token 定价
- Image Input: $8 / 1M tokens
- Image Cached: $2 / 1M tokens（cache hit 折扣）
- Image Output: $30 / 1M tokens

### 成本估算（写章节时用）
- 单张高质量图 ≈ $0.21（约人民币 1.5 元）
- 38 章 × 5 张高质量配图 ≈ $40（人民币 290 元）—— 实际预算 $15 应主要用 medium

## 4. 性能数据（Image Arena Leaderboard）

- 发布后 12 小时内夺得 #1，领先第二名 **242 分**
- 这是 Image Arena 史上最大领先优势（之前最大领先约 80-100 分）
- 在所有评测类目（写实、艺术、文字、人物、场景）均第一

## 5. Prompt 公式（官方 + 社区共识）

### 6 大构件（OpenAI Cookbook 官方推荐顺序）
书写顺序应该一致：**背景/场景 → 主体 → 关键细节 → 约束 → 用途说明**

具体六个 building block：
1. **Subject（主体）**: 谁/什么 — 主角对象
2. **Setting（环境）**: 在哪里 — 背景与场景
3. **Style（风格）**: 怎么画 — photorealistic / 3D / oil painting / watercolor
4. **Composition（构图）**: 怎么拍 — wide shot / close-up / overhead / rule of thirds
5. **Lighting（光线）**: 什么光 — golden hour / studio softbox / neon / moody
6. **Technical specs（技术规格）**: 像什么 — 35mm film / shallow depth of field / 8K detail

### 文字渲染 best practice
- **必须用双引号包裹**字面文字：`title: "Hello World"`
- 用角色提示词（role hint）控制层级：
  - "headline" / "subhead" / "footer" / "sidebar item" / "stat card"
- 强调 EXACT TEXT 或 verbatim，加 "no extra words" / "no duplicate text"
- 字体/字重/颜色/位置全部明确说出
- **多语言混排**示例：
  ```
  Japanese title: "本日のおすすめ"
  English subtitle: "Today's Special"
  ```

### 中文专项
- 推荐用 high quality 档（中文笔画清晰需要更高细节）
- 不要"翻译"，直接粘贴中文 glyph
- 海报场景：可一张图里中英共存
- 字体提示词："楷体" / "宋体" / "黑体" / "行书" 都能识别

### Front-load priority（前 50 词法则）
- 模型对 prompt 前 50 词权重最高
- 最关键的元素（主体 + 风格）必须放前面
- 装饰性细节放后面

## 6. 与对手的对比矩阵

| 维度 | gpt-image-2 | Midjourney v7 | Flux 1.1 Pro | Nano Banana | DALL-E 3 |
|------|-------------|---------------|--------------|-------------|----------|
| 文字渲染 | ⭐⭐⭐⭐⭐ 99% | ⭐⭐ 经常错 | ⭐⭐⭐ 中等 | ⭐⭐⭐⭐ 较好 | ⭐⭐ 有限 |
| 中文字 | ⭐⭐⭐⭐⭐ | ❌ | ⭐⭐ | ⭐⭐⭐ | ⭐ |
| 写实质感 | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ |
| 艺术风格 | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ |
| Reasoning | ⭐⭐⭐⭐⭐ 唯一 | ❌ | ❌ | ❌ | ❌ |
| 多轮编辑 | ⭐⭐⭐⭐⭐ | 有限 | 有限 | 有限 | ❌ |
| 价格 | $0.006-0.211 | $10/月起 sub | $0.04 / 张 | 免费 + 付费 | 已停用 |
| API | 2026-05 开放 | 第三方 | 官方 | 官方 | 已停用 |

**结论**：
- 文字密集（海报 / Logo / 中文）→ 首选 gpt-image-2
- 极致写实人像 / 艺术氛围 → Midjourney 仍然小优
- 控制 prompt 多轮迭代 → gpt-image-2 reasoning 碾压
- 免费用 → Nano Banana

## 7. 三种使用方式

> ⚠️ Sora 应用已下线，不再是 gpt-image-2 的入口。

### A. ChatGPT 网页（最简单）
- ChatGPT Plus ($20/月) / Pro ($200/月) 直接用
- 无 API 知识即可用
- 自带多轮编辑 UI

### B. Codex（开发者预览）
- 给开发者提前体验
- 需要 OpenAI 开发者账号

### C. API（5 月初开放）
- 走 OpenAI 官方 API
- 模型 ID: `gpt-image-2`
- 支持 Node.js / Python SDK
- 可批量生成

### 国内访问
- 走 fal.ai / Apiyi 等第三方代理（合规走流程）
- 价格略高于官方 API

## 8. 已知限制 & 翻车点

- **手指仍偶发**：5 根手指有时变 6 根（比 MJ 好但仍存在）
- **文字 99% 不是 100%**：长段中文偶尔笔画错乱
- **版权敏感词**：迪士尼、漫威等品牌名仍被拦
- **真人脸**：知名公众人物会被替换为类似但不同的脸
- **冷门字体**：极小众字体识别不准，回退到通用 sans-serif
- **NSFW 拦截**：标准很严

## 9. 最佳应用场景（写工作流章节用）

按 OpenAI 团队 + 社区实测排名：
1. **海报与 KV**（活动 / 电商 / 课程 — 文字渲染优势最大）
2. **小红书封面**（中文标题 + 人物 + 风格统一）
3. **LinkedIn 视觉**（Banner / 头像 / 招聘卡片 — 英文文字 + 商务调性）
4. **品牌 Logo & VI**（多图一致性 + 文字精准）
5. **PPT 配图 / 信息图**（图表元素 + 文字标签）
6. **电商主图**（白底 + 场景 + 中文卖点 三件套）
7. **课程封面 / Banner**
8. **个人头像 / IP 形象**

## 10. 核心 Sources

- OpenAI 官方公告: https://openai.com/index/introducing-chatgpt-images-2-0/
- OpenAI Cookbook 官方 prompt 指南: https://developers.openai.com/cookbook/examples/multimodal/image-gen-models-prompting-guide
- TechCrunch 评测（文字能力专项）: https://techcrunch.com/2026/04/21/chatgpts-new-images-2-0-model-is-surprisingly-good-at-generating-text/
- Build Fast With AI 开发者解析: https://www.buildfastwithai.com/blogs/chatgpt-images-2-0-gpt-image-2-2026
- PixVerse Prompt 指南: https://pixverse.ai/en/blog/gpt-image-2-review-and-prompt-guide
- fal.ai prompt 指南（含技术细节）: https://fal.ai/learn/tools/prompting-gpt-image-2
- Mindwired 完整功能 + 定价: https://mindwiredai.com/2026/04/22/what-is-gpt-image-2-the-complete-breakdown-features-pricing-and-who-gets-access/
- Awesome GPT Image (社区精选 prompts): https://github.com/ZeroLu/awesome-gpt-image/

## 11. SEO 关键词（每章绑 1 主 + 3 副）

### 主词（高搜索量 / 中竞争）
- gpt-image-2 教程
- gpt-image-2 prompt
- gpt-image-2 中文
- gpt-image-2 vs midjourney
- gpt-image-2 海报
- gpt-image-2 写实
- ChatGPT 画图 2.0
- ChatGPT 海报 prompt
- ChatGPT 小红书封面

### 副词（长尾）
- gpt image 2 怎么用
- gpt-image-2 LinkedIn 封面
- gpt-image-2 Logo 设计
- gpt-image-2 中文字体
- gpt-image-2 API 价格
- AI 画图 prompt 公式
- AI 海报 中文 prompt

## 12. 写作要点（给后续章节作者看）

- 不要再说 "2K" 了 → **4K (4096×4096)**
- 不要把它叫"DALL-E 4" → 它**取代**了 DALL-E 3 但是不同产品线
- 强调 reasoning 是它**最大杀手锏**（vs MJ / Flux 都没有）
- 文字渲染是 **vs Midjourney 的最大差异化**，每个文字相关的章节都要点这一点
- 提价格永远说"低 / 中 / 高 三档" + 具体美元，不要说"便宜 / 贵"
- 提性能永远引用 Image Arena +242 分数据 —— 这个数字会被读者记住
