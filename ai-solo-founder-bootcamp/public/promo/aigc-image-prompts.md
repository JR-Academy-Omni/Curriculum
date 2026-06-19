# AI 一人创业营 · gpt-image-2 / Sora / Nano Banana 配图 Prompt 集

> **用法**：员工去 ChatGPT 网页 (`chat.openai.com`) / Sora / Nano Banana / Midjourney 粘贴下面 prompt 生图 → 下载 → 上传到课程页对应位置。
>
> **风格基准**：参考对手 M01 BOOTCAMP 海报（深蓝 + 橙色 + 米黄底 + 商务感不是 wild west）。匠人 brand 主色：墨蓝 `#10162f` / 橙 `#FF914D` / 金 `#FFDE59` / 米黄 `#fffbe6`。
>
> **prompt 结构**：风格 + 主体 + 构图 + 色调 + 用途 + 尺寸（可选）。
>
> **占位符规则**：`[BD 填: xxx]` BD 自己替换；`[选 / xxx]` 二选一。

---

## 用 prompt 前先理解：4 大平台特性差异

| 平台 | 强项 | 弱项 | 用什么场景 |
|------|------|------|----------|
| **ChatGPT gpt-image-2 (DALL-E 3)** | 中文文字渲染 (near-perfect) · 商务感 · prompt 还原度高 | 真人脸细节 | 配图含中文字 / 数据可视化 / icon 系列 |
| **Sora 图像模式** | 摄影级真实感 · 真人场景 | 中文文字 | Networking 晚宴 / 学员场景 / Demo Day 现场 |
| **Nano Banana (Gemini 2.5 Flash Image)** | 多人物一致性 · 编辑现有图 | 单图最强但批量较慢 | 学员系列 portrait · 海报变体 |
| **Midjourney V7** | 美学最强 · 艺术感 | 中文字渲染弱 · 太"美" 失商务感 | Hero 主视觉 · 抽象概念图 |

**主推**：ChatGPT gpt-image-2（中文文字 + 商务调）+ Sora（真人 / 场景）= 80% 配图覆盖。

---

## 🎨 1. HERO 主视觉（landing.html 顶部）

### 1.1 主 Hero · "一人公司" 概念图

**平台**: ChatGPT gpt-image-2
**尺寸**: 1920×1080 横版 (web) 或 1200×1200 方版 (社媒)
**用途**: landing.html hero 背景 / 朋友圈分享主图 / 小红书封面

```
A premium business poster designed in the style of high-end Australian
fintech / VC firm marketing material. Dark navy blue background (#10162f)
with subtle orange gradient glow in the upper right (#FF914D). A symbolic
icon in the center: a single human silhouette holding a glowing growth-arrow
chart that ascends from left to right, suggesting one-person leverage with
AI. The arrow integrates with circuit-pattern elements (subtle, not crowded)
representing AI infrastructure.

Text overlay (Chinese, rendered in clean modern sans-serif):
- Top: "ONE PERSON COMPANY" in monospace English, small caps, orange
- Center: "一人公司" in massive Chinese characters, white, bold geometric
- Bottom: "用 AI 做澳洲一人公司 · 拿 Grant · 不打工" in smaller white text

Mood: confident, premium, McKinsey-meets-tech-startup. Not corny, not
overly tech-bro, not Web3-flashy. Think Stripe brand x Antler annual report.
NO clip-art icons, NO stock photo people, NO neon, NO crypto aesthetic.
```

**变体 prompt (社媒方版)**:
```
[Same as above but 1200×1200 square, with Chinese title "一人公司" stacked
vertically. Bottom 30% reserved for sub-headline copy in Chinese.]
```

---

### 1.2 Hero 替代版 · 三城地图风

**平台**: ChatGPT gpt-image-2
**尺寸**: 1920×1080
**用途**: 如果 1.1 不喜欢可以换这个

```
Minimalist editorial illustration in dark navy + cream + orange palette.
A stylized map of Australia, with three glowing nodes marking Melbourne (largest), Sydney (medium), Brisbane (small) connected by thin orange lines.
Above the map: floating UI elements suggesting Stripe payment screens, Notion
docs, AI chat bubbles — all minimalist and abstract.

Text overlay (Chinese, modern sans-serif):
- "三城线下 · 11 周 · 50 人 cohort"
- Bottom right corner: "ONE PERSON COMPANY · M01 · JUN 2026"

Style references: The Economist illustration, Stripe brand assets, Antler
annual report. NOT corporate photography. NOT generic vector clipart.
```

---

## 👥 2. 4 类目标人群头像（landing.html 持人群分诊卡）

### 2.1 持人物 portrait 系列 · 4 张一致风格

**平台**: Sora 图像模式（真实感）或 Nano Banana（一致性最好）
**尺寸**: 800×800 方版 × 4 张
**用途**: landing.html 4 人群分诊卡 icon 位置 / 小红书配图

**通用风格设定**（每张 prompt 都加这段）:
```
Style: Photorealistic editorial portrait, soft natural light, slight depth-of-field.
Asian Australian professional in their 30s-40s, looking at viewer with confident
quiet expression (not smiling broadly, not corporate stock-photo posed). Outfit
business-casual, neutral colors. Background: blurred Melbourne / Sydney CBD
office interior in warm tones. Color grade: warm cream + navy + subtle orange
accent. No corporate photography clichés. No stock-photo handshakes. No "boss"
poses. Think New York Times Sunday business profile photo.
```

**Persona 01 · 独立创业者**:
```
[Style preamble above] +
Persona: Asian Australian male or female, late 30s, casual blazer over t-shirt,
holding a Macbook open to a Stripe dashboard. Faintly visible on screen: payment
transactions in AUD. Setting: their own home office or a Cremorne co-working
space. Mood: focused calm, "I just shipped something" energy.
```

**Persona 02 · 自由职业 / 律师 / 会计**:
```
[Style preamble] +
Persona: Asian Australian professional, 40s, in a slightly more polished outfit
(suit jacket without tie, OR professional blouse). Setting: a sleek private
office with law/accounting reference books visible on a shelf in soft focus.
Looking at a laptop with a Notion-style document visible (productized service
template). Mood: established, confident, "I'm upgrading my services" energy.
```

**Persona 03 · 职场转型 senior**:
```
[Style preamble] +
Persona: Asian Australian male, mid 30s to mid 40s, tech worker style — clean
hoodie or crew-neck sweater over collared shirt. Setting: Atlassian/Canva-style
modern office cafeteria, blurred colleagues in background. Holding coffee, looking
at phone with a side-project app preview visible. Mood: contemplative, "I want
something more than this job" energy.
```

**Persona 04 · 小微企业主**:
```
[Style preamble] +
Persona: Asian Australian, 40s-50s, slightly more mature look, casual but neat
business attire. Setting: small business shop / clinic / consultancy office —
visible but blurred shelves or counter behind them. Holding tablet showing
business automation dashboard. Mood: experienced, "I run this and I want
AI to help me scale" energy.
```

---

## 🎓 3. 10 类 Faculty 老师 portrait

### 3.1 Faculty portrait 系列 · 10 张一致风格

**平台**: ChatGPT gpt-image-2（中文 caption）+ Sora（人脸）
**尺寸**: 600×600 方版 × 10 张
**用途**: curriculum.html FACULTY section / landing.html (如展开) / speaker invitation kit deck

**通用风格设定**:
```
Style: Editorial portrait, soft studio lighting, neutral gray-cream background.
Subject is an Asian Australian professional in their 35-55, dressed appropriately
to their role. Looking at viewer with quiet authority. Close framing (chest up).
Color palette: warm cream background + subtle navy/orange accent. NO corporate
clichés, NO stock photos, NO obvious AI artifacts. Think LinkedIn premium
photographer.
```

**Faculty 01 · 麦肯锡 / 战略顾问**:
```
[Style preamble] +
Subject: 40s Asian Australian, sharp suit jacket without tie, MBB consultant
aesthetic. Background subtly suggests a strategy room with whiteboard frameworks.
Caption (Chinese, in white sans-serif at bottom): "麦肯锡 · 战略顾问"
```

**Faculty 02 · SEO / GEO 专家**:
```
[Style preamble] +
Subject: 30s-40s casual professional, glasses optional, indie-marketer vibe.
Background: subtle Google Search Console / Ahrefs screen blur.
Caption: "SEO / GEO 专家"
```

**Faculty 03 · Growth / Marketing 专家**:
```
[Style preamble] +
Subject: 30s creative-professional aesthetic, slightly more colorful outfit accent.
Background: subtle Notion dashboard / Stripe analytics blur.
Caption: "Growth / Marketing 专家"
```

**Faculty 04 · AI 工程 / Stripe / 自动化**:
```
[Style preamble] +
Subject: 30s engineer aesthetic, plain dark shirt, slight stubble OK.
Background: subtle code editor (Cursor / Claude Code) blur.
Caption: "AI 工程 / Stripe / 自动化"
```

**Faculty 05 · 澳洲华人 CPA / CA**:
```
[Style preamble] +
Subject: 40s-50s Asian Australian accountant, formal but warm appearance.
Background: subtle law books / Xero dashboard.
Caption: "澳洲华人 CPA / CA"
```

**Faculty 06 · Grant Consultant**:
```
[Style preamble] +
Subject: 40s consultant aesthetic, sharp but approachable.
Background: subtle "Australian Government R&D Tax Incentive" document blur.
Caption: "Grant Consultant · RDTI 专家"
```

**Faculty 07 · 投资人 / VC**:
```
[Style preamble] +
Subject: 40s-50s polished VC partner aesthetic, sharp suit no tie, confident.
Background: subtle modern VC office (think Antler / Blackbird office aesthetic).
Caption: "投资人 / Local VC"
```

**Faculty 08 · 已退出 founder 校友**:
```
[Style preamble] +
Subject: 30s-40s founder aesthetic, more casual than VC (hoodie or polo).
Background: subtle "exit announcement" article blur OR confident pose against
exposed brick startup-office wall.
Caption: "已退出 / $X MRR 华人 Founder"
```

**Faculty 09 · 微软 / 大厂资深工程师 (新增)**:
```
[Style preamble] +
Subject: 40s Asian Australian senior engineer, polished but technical vibe,
Microsoft / Atlassian / Canva employee aesthetic. Plain dark t-shirt or
collared shirt.
Background: subtle big-tech office architecture blur.
Caption: "微软 / 大厂资深工程师 + 架构师"
```

**Faculty 10 · AI Engineer / LLM 实战 (新增)**:
```
[Style preamble] +
Subject: 30s AI engineer aesthetic, slightly indie-tech, glasses optional.
Background: subtle vector DB / LangChain / OpenAI dashboard blur.
Caption: "AI Engineer / LLM 实战"
```

---

## 🍷 4. Networking 晚宴 / 互为客户日场景

### 4.1 三城 Networking 晚宴

**平台**: Sora 图像模式（真人场景最强）
**尺寸**: 1600×900 横版
**用途**: Phase 4 / Cohort Economy section / 小红书封面 / 公众号头图

```
Photorealistic editorial photograph of an intimate business networking dinner
in Melbourne CBD. 8-12 Asian Australian professionals (mid 30s to early 50s,
mixed gender, business-casual attire) seated around a round dinner table.
Setting: upscale modern restaurant (think Vue de monde / Bistro Guillaume
private dining room aesthetic), warm pendant lighting, exposed brick or wood-
panel walls.

People are mid-conversation — some leaning in, one person showing something
on their phone to another, a few holding wine glasses. On the table: scattered
business cards, two-page printed cards visible showing "我能给的 / 我要的"
(I can offer / I need) in Chinese, half-eaten dessert plates.

Mood: warm camaraderie, founders-after-Demo-Day energy. Not corporate "client
dinner" stiffness. Not Instagrammable-girls-night-out. Think "the moment when
real business gets done."

Avoid: stock photo clichés, fake laughs, obvious AI artifacts on faces or hands.
```

---

### 4.2 互为客户日卡片机制特写

**平台**: ChatGPT gpt-image-2（中文文字)
**尺寸**: 1200×800
**用途**: PHASE 4 W11 section / 小红书干货图

```
Editorial close-up flatlay photograph of two printed cards on a wood dinner
table, slightly out of focus background showing wine glass + a hand reaching.
Cards are minimal cream-colored cardstock with:

Card 1 (left): "我能给的 / WHAT I CAN OFFER" headline in Chinese + English,
followed by 4 bullet points in handwritten ink: "AI 自动化系统 · 财务模型
· Stripe 接入 · 澳洲 RDTI 经验"

Card 2 (right): "我要的 / WHAT I NEED" headline, followed by 4 bullet
points: "10 个早期付费用户 · 一个 co-founder · $5k angel check · 律师 review TOS"

Style: NYT magazine flatlay aesthetic. Warm cream + soft shadows. NO clip-art.
NO obvious AI text artifacts. Hand-written ink looks like an actual person
wrote it, not perfect typography.
```

---

## 🏛 5. 三城线下场景

### 5.1 墨尔本主场教室

**平台**: Sora 图像模式
**尺寸**: 1600×900
**用途**: City Model section / Phase 1-3 配图

```
Photorealistic photograph of a modern Melbourne co-working classroom mid-
session. 12-15 Asian Australian professionals seated at simple wooden tables
facing a screen. The instructor (40s Asian male/female) stands near a large
display showing a Cursor IDE / Stripe dashboard. Natural light from large
windows showing Melbourne CBD skyline (subtle Eureka tower visible in distance).

Mood: focused workshop energy, NOT lecture hall passive. Some students have
laptops open mid-typing, a few are taking notes. Coffee cups on tables.

Style: Stripe Press photography aesthetic + Maker Faire warmth.
Avoid: corporate training photo clichés.
```

### 5.2 悉尼 / 布里斯班 卫星教室

**平台**: Sora 图像模式
**尺寸**: 1600×900 × 2 张
**用途**: City Model section

```
[Same prompt structure as 5.1, but:]
- Sydney version: backdrop shows Sydney harbor / opera house silhouette
- Brisbane version: backdrop shows Brisbane river + Story Bridge

In both versions, students gathered around a single large screen showing a
Zoom-style livestream of the Melbourne instructor. Some students are
discussing with their physical neighbors. Local Tutor (different person)
visible standing near, ready to answer questions.
```

---

## 🇦🇺 6. Phase 3 RDTI / 澳洲合规场景

### 6.1 RDTI 退税审核场景

**平台**: ChatGPT gpt-image-2（中文标注）
**尺寸**: 1200×800
**用途**: Phase 3 section / KILL 04 配图

```
Editorial photograph of an Australian accounting firm office, mid-consultation.
A 40s Asian Australian CPA (in business casual) sits across from a 30s-40s
client (founder), both reviewing a printed R&D Tax Incentive application
document spread on a desk. Highlighter and pen visible. Mac open showing
ATO myGov interface (subtle blur).

Atmosphere: collaborative, warm, "we're filling out this application
together" energy, NOT formal client-meeting stiffness.

Caption overlay (Chinese, white text on subtle dark gradient at bottom):
"Phase 3 · 澳洲 RDTI 43.5% 退税实战 · 持牌 CPA + Grant consultant 陪写申请"
```

---

## 🏆 7. Demo Day 现场

### 7.1 Demo Day pitch 现场

**平台**: Sora 图像模式
**尺寸**: 1600×900
**用途**: Phase 4 / Hero alternate

```
Photorealistic photograph of a Demo Day presentation moment. A 30s Asian
Australian founder stands at the front of a small modern auditorium (50-80
seat capacity) presenting to an audience. On the screen behind: a clean
landing page mockup showing real Stripe transaction data + traction metrics
(MRR growth chart, user count, etc.).

In the front row: a panel of 4-5 judges visible — a senior CPA, a VC partner,
the main instructor — taking notes. Audience: 50 fellow founders + some
alumni + guests.

Mood: high-energy but not pep-rally — "I built this and I'm proud" energy.

Style: Y Combinator Demo Day photography aesthetic.
```

---

## 📊 8. 5 KILL POINTS 配图（如果要做大图版）

### 8.1 KILL 02 · Cohort 经济 $500k-4M 网络图

**平台**: ChatGPT gpt-image-2（数据图最强）
**尺寸**: 1200×1200
**用途**: COHORT ECONOMY section 顶部 / 小红书配图

```
Editorial data visualization in dark navy + cream + orange palette. A central
node labeled "YOU" (你) surrounded by 50 smaller nodes labeled with archetype
icons (senior eng / PM / lawyer / accountant / founder). Lines connecting
all nodes form a dense network web in orange and yellow.

Around the edges: floating callout cards in Chinese:
- "互为早期客户 · $500-5,000 / 次"
- "互为服务采购 · $2k-20k / 次"
- "互为天使投资 · $5-50k angel check"
- "互为客户引荐 · 每次 $5-50k value"

Bottom right large stat: "$500k-4M 网络潜在交易额"

Style: The Economist data viz + Stripe annual report. Clean lines, not crowded.
NO clip-art people icons. NO crypto/Web3 aesthetic. Minimal and dense.
```

### 8.2 KILL 03 · 10 类 Faculty 矩阵图

**平台**: ChatGPT gpt-image-2
**尺寸**: 1200×800
**用途**: FACULTY section 顶部 banner

```
Editorial illustration in navy + cream + orange. A 2-row × 5-column grid,
each cell containing:
- A minimalist circular icon representing a faculty type (think Linear /
  Notion icon aesthetic, not generic clipart)
- Label below in Chinese: 麦肯锡 · SEO · Growth · Senior eng · 微软 ·
  AI Engineer · CPA · Grant · VC · Founder

Above the grid: large headline in Chinese "10 类 Faculty 单独咨询 1 年 $43-176k AUD"
Below the grid: small stat "微软 + VC 用钱买不到"

Style: clean editorial poster, NOT a slide template. NO photos in cells.
NO stock-photo handshakes.
```

---

## 🎨 9. 小红书 / 微信公众号 / X 平台 variant 配图

### 9.1 小红书 9 宫格 · 课程信息 carousel

**平台**: ChatGPT gpt-image-2
**尺寸**: 1242×1660 竖版 × 9 张
**用途**: 小红书发文 9 图 carousel

**通用要求**：
- 字体最小 24px (Canvas 等同) — 用户已在 CLAUDE.md feedback 标注 [Social media poster 最小字号硬要求](feedback_social_media_poster_min_font.md)
- 米黄背景 + 黑字 + 橙强调
- 1 图 1 个 punchy headline + 2-3 supporting bullets

```
Page 1 / Cover:
- Headline (60px, black bold): "OPC 一人公司"
- Sub (32px, orange): "11 周 · 三城线下 · 拿澳洲 Grant"
- Bottom badge (28px, white on navy): "首期招生 · 限额 25 人"
- Background: cream #fffbe6 + subtle orange #FF914D corner accent
- Visual: minimal hand-drawn arrow ↗ icon

Page 2 / WHY NOT 其他课:
- Headline: "OpenClaw / AI Engineer 都是打工"
- Body: 3 bullets in 32-40px font
- Background: same

[Page 3-9 follow similar structure for the 7 KILL POINTS]
```

### 9.2 X / Twitter post 配图

**平台**: ChatGPT gpt-image-2
**尺寸**: 1600×900
**用途**: X 单帖配图 / LinkedIn post

```
Editorial poster, dark navy background, single bold quote in white center:

"用 AI 做澳洲一人公司
拿 Grant 退税
走出打工天花板"

Below the quote, smaller orange text: "ONE PERSON COMPANY · 11 weeks · Melbourne + Sydney + Brisbane · Apply now"

Style: extremely minimal, NYT op-ed aesthetic. NO clutter. NO logos beyond
a small "jiangren.com.au" at bottom corner.
```

---

## 🔧 10. 微信公众号头图 / banner

### 10.1 公众号头图

**平台**: ChatGPT gpt-image-2
**尺寸**: 900×500
**用途**: 公众号长文头图

```
Editorial photograph + text overlay. Background: dim Melbourne CBD evening
skyline (Eureka tower / Federation Square area). Overlay text:

- Large title (Chinese, white bold): "AI 一人创业营 · 首期招生"
- Subtitle (orange): "11 周 · 三城线下 · 限额 25 人"
- Bottom-left small text: "ONE PERSON COMPANY · M01 · JUN 2026"

Style: Bloomberg / The Atlantic banner aesthetic.
```

---

## 📋 使用 Workflow

### Phase 1 · Today (5 张核心图)
1. **Hero 主视觉**（1.1）→ landing.html + 小红书封面
2. **Networking 晚宴**（4.1）→ Phase 4 配图
3. **墨尔本主场教室**（5.1）→ 招生主图
4. **Demo Day 现场**（7.1）→ KILL 06 配图
5. **小红书 9 宫格 · 课程封面**（9.1 page 1）→ 招生首发

### Phase 2 · Week 1 (10 张 Faculty)
- 10 张 Faculty portrait（3.1）— 等 BD 确认每位讲师的实际身份特征再生

### Phase 3 · Week 2 (15+ 张内容图)
- 4 人群 portrait（2.1）
- 卫星教室（5.2 × 2）
- RDTI 场景（6.1）
- KILL POINTS 数据图（8.1 + 8.2）
- 小红书 carousel page 2-9（9.1）
- X / 公众号 banner（9.2 + 10.1）

---

## 🚨 红线 (生图时严守)

1. ❌ **不生成"中国风" / 龙凤 / 红灯笼**（澳洲华人创业课不是国风题材）
2. ❌ **不生成"打鸡血" 风格**（不要 motivational poster 那种 cringe 渲染）
3. ❌ **不生成虚假 logo**（不要让 AI 编 "Atlassian" / "Canva" logo 出现）
4. ❌ **不生成"AI 看起来像 AI" 的图**（手指数错 / 眼睛糊 / 文字乱码 = 立刻拒）
5. ❌ **真人面孔不一致**（同一 Persona 在 4 张图里要看起来是同一个人 — 用 Nano Banana 编辑而不是重生）
6. ❌ **不生成"中国大陆审美"**（小红书审美 OK 但不是大陆品牌 PPT 模板风）

---

## 🎯 验收 checklist

每张图生完员工自己 quick check：

- [ ] 中文文字渲染清楚（gpt-image-2 一般 OK · Midjourney 一般不行 → 换平台）
- [ ] 人物没多手指 / 眼睛对称（AI 标志性 artifact）
- [ ] 色调跟 brand 一致（深蓝 #10162f + 橙 #FF914D + 金 #FFDE59 + 米黄 #fffbe6）
- [ ] 没有虚假 logo / 招牌
- [ ] 没有 "AI 味" 渲染（过度 saturated / 完美对称 / 玻璃质感过头）
- [ ] 用途清晰（属于哪个 section / 哪个平台）

---

## ⚙️ 操作流程

1. **打开 ChatGPT 网页** (`chat.openai.com`)
2. **粘贴上面 prompt** + 把 `[BD 填: xxx]` 替换成真实信息
3. **生成 4 个 variant**（ChatGPT image 默认生 4 张，选最好的 1 张）
4. **下载** 高清版（右键 save as PNG）
5. **检查 verification checklist** 跑一遍
6. **上传到 S3** （用 `/s3-image-uploader` skill 或者手动）
7. **在 curriculum.html / landing.html 对应 `<img src="...">` 位置替换图片 URL**

---

## 🔁 prompt 调优 tips

如果生出来的图不满意：

- **太"AI"** → 加 `editorial photography aesthetic, NOT AI-generated, NOT digital art`
- **太花** → 加 `minimal composition, generous white space, NOT crowded`
- **真人脸怪** → 换 Sora (`with 5 fingers per hand, anatomically correct face`)
- **中文字乱** → 改用 ChatGPT 而不是 Midjourney
- **色调不对** → 加 `color palette strictly: #10162f navy, #FF914D orange, #FFDE59 yellow, #fffbe6 cream`
- **太正经 / 太严肃** → 加 `with warmth and quiet confidence, NOT corporate stiffness`

---

> 📌 **生完图后**：上传到 S3（推荐 bucket: `jr-academy-public/curriculum/ai-solo-founder-bootcamp/`）+ 在 landing.html / curriculum.html 替换 `<img src=>` 即可上线。
