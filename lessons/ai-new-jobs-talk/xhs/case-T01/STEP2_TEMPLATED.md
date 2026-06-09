# Case T01 · Step 2 — 模板化自动化（page 50 演示对象）

> **对应 PPT**：`Z03_Step2_Templated.tsx` (page=50)
> **演进**：Step 1 朴素手写 → Step 2 把"补上下文"的环节固化成模板，每周自动跑
> **节省**：单条耗时从 2 分钟 → 0 写作 + ~1 分钟审稿
> **关键**：选题还是你定，AI 只负责执行

---

## 一、5 阶段 Pipeline（讲座原图）

```
TRIGGER  →  GENERATE  →  VISUAL  →  REVIEW  →  SCHEDULE
 cron       LLM         gpt-image-2  你审       Buffer
 每周一       按模板        按品牌色      点确认       自动排
 9:00 AM     一次出 5 条    出 5 套首图   30 秒        最佳时段
```

下面把 T01 这个真实选题在 5 阶段里跑一遍。

---

## 二、阶段 ① · TRIGGER（周一 9 AM）

**触发条件**（Cron Job）：
```cron
0 9 * * 1   # 每周一 9:00 AEST
```

**触发后做什么**：
- 拉本周「待发布选题池」最早一条 → 命中 **T01 · 2026 年 26 个 AI 新岗位**
- 加载 T01 对应账号人设：`JR-求职号-A`
- 进入阶段 ②

---

## 三、阶段 ② · GENERATE — 模板化 LLM 生成

### 与 Step 1 关键差异

| | Step 1（朴素） | Step 2（模板化） |
|---|---|---|
| **Prompt** | 一句话："帮我写一条小红书 主题 AI 岗位" | 200 字 System prompt 固化（包含人设 / 规则 / 红线 / 数据点） |
| **输出数** | 1 条 | 一次 5 条候选（不同钩子） |
| **数据源** | ChatGPT 编 | Prompt 里**预先注入**真实数据点 |
| **违禁词** | 不知道 | Prompt 里**显式 ban** 30+ 红线词 |

### 真实可复用的 System Prompt 模板

```text
你是 JR Academy 求职号 A 的小红书写手。
账号人设：澳洲华人求职 / IT 转行受众 / 偏理性数据派 / 不卖鸡汤。

任务：根据下面给定的【主题】和【数据点】，写 5 个候选小红书笔记，
每个用不同的钩子：① 信息钩 ② 痛点钩 ③ 故事钩 ④ 反共识钩 ⑤ 自检钩

输出规则（硬性）：
- 标题 ≤20 字 · 含数字 · 含 emoji · 不许含违禁词
- 正文 400-600 字
- 数据源至少 3 处署名（必须从【数据源清单】里选，不许编）
- 3-5 个 #话题
- 必须 0 命中以下违禁词：
  最 / 第一 / 唯一 / 100% / 绝对 / 顶级 / 包过 / 月入 / 副业 /
  翻倍 / 一定 / +V / 扫码 / 私信领 / 站外外链
- AI 味禁词：首先 / 其次 / 此外 / 综上所述 / 值得注意的是 / 与此同时
- 项目红线：禁说"副业" / 禁承诺金钱结果 / 只承诺过程产出

【主题】：{{topic_headline}}
【关键数据点】：{{key_data_points}}
【数据源清单】：{{data_sources}}
【账号 CTA 模式】：{{cta_template}}

输出 JSON：
{
  "candidates": [
    {"hookType": "信息", "title": "...", "body": "...", "tags": [...]},
    ...
  ]
}
```

### 实际填入 T01 后的产出（5 个候选）

```json
{
  "candidates": [
    {
      "hookType": "信息钩",
      "title": "📊 AI 时代 26 个新岗位（薪资分档）",
      "body": "不要再问'AI 时代该转什么'。这是 26 个真实在招的 AI-native 岗位...",
      "tags": ["#AI岗位", "#求职", "#职业规划", "#AI", "#转型"]
    },
    {
      "hookType": "痛点钩",
      "title": "你以为 AI 岗位只有写代码 还有 26 个",
      "body": "上周朋友问我：'我学文科 是不是这辈子跟 AI 行业无缘了'...",
      "tags": ["#AI转型", "#非技术", "#求职", "#职业规划", "#AI"]
    },
    {
      "hookType": "故事钩",
      "title": "朋友 1 年从 SEO 转 AI Engineer 怎么做到的",
      "body": "去年 4 月，他每天写关键词堆砌的 SEO 文章。今天他在做 RAG...",
      "tags": ["#AI转型", "#程序员", "#求职", "#真实案例", "#AI"]
    },
    {
      "hookType": "反共识钩",
      "title": "AI 行业薪资全曝光 $300K 不是顶配",
      "body": "Levels.fyi 公开数据：OpenAI 人均股权 $1.5M。$300K 在这条赛道...",
      "tags": ["#AI薪资", "#求职", "#职业规划", "#AI", "#硅谷"]
    },
    {
      "hookType": "自检钩",
      "title": "测一下 你能进 26 个 AI 岗位的哪一个",
      "body": "我把 26 个 AI 岗位按 3 条转型路径分了组。你属于哪条..",
      "tags": ["#AI转型", "#自测", "#职业规划", "#AI", "#求职"]
    }
  ]
}
```

→ 这 5 个候选**都是 0 违禁词**（System prompt 强制）。

---

## 四、阶段 ③ · VISUAL — gpt-image-2 出图

### 与 Step 1 关键差异

- Step 1：去 Unsplash 找一张"看着像 AI 的图"
- Step 2：用 **gpt-image-2** 按品牌色 prompt 自动出

### 实际 Image Prompt（T01 候选 ①）

```text
Create a Xiaohongshu cover poster, 3:4 vertical (1242×1660 px).

Style: Neo-Brutalism, JR Academy brand
- Background: cream beige #fff8ee
- Border: black 3px solid + 6px offset shadow
- Color accents: brand-red #ff5757 (key numbers), brand-yellow #ffce44 (labels)
- Typography: Bricolage Grotesque (headings) + Noto Sans SC (Chinese), 900 weight

Content:
- Top: small label "JR ACADEMY · 2026"
- Center: ULTRA LARGE number "26" + Chinese "个 AI 新岗位"
- Below: 3 salary tiers as colored bars:
  · $300K+ (red bar)
  · $100-250K (yellow bar)
  · $70-140K (cream bar)
- Bottom right: small JR logo box

Constraints:
- All Chinese text must be ≥ 24px minimum
- Largest number font: ~200pt
- No watermarks, no QR codes
```

→ gpt-image-2 直接出 5 套首图（每个钩子对应一套色板偏移），中文字符渲染近原生。

### Step 1 vs Step 2 首图对比

| | Step 1 | Step 2 |
|---|---|---|
| 来源 | Unsplash 随便一张 | gpt-image-2 按 spec |
| 时间 | 30 秒挑图 | 0 人工 |
| 品牌一致性 | 0 | 100% |
| 主题相关性 | 弱 | 完全对应正文数字 |

---

## 五、阶段 ④ · REVIEW — 你点确认

### Step 2 的核心：**你从写手变成审核员**

**推送形式**（飞书 / Notion 卡片）：

```
┌──────────────────────────────────────────────┐
│ 🔔 周一选题 T01 · 5 个候选已出 · 等你审       │
├──────────────────────────────────────────────┤
│ ① 信息钩 · 📊 AI 时代 26 个新岗位 [首图缩略] │
│ ② 痛点钩 · 你以为 AI 只有写代码 [首图缩略]   │
│ ③ 故事钩 · 朋友 1 年从 SEO 转 AIE [首图缩略] │
│ ④ 反共识 · AI 薪资全曝光 $300K 不顶配        │
│ ⑤ 自检钩 · 测你能进 26 岗位的哪个            │
│                                              │
│ [选 ①] [选 ②] [选 ③] [选 ④] [选 ⑤] [全砍]   │
└──────────────────────────────────────────────┘
```

**你需要做的**：
- 浏览 5 个候选标题 + 首图 (10 秒)
- 点一个"选 ①"
- 跳出全文 + 配图 8 张预览 (20 秒决定要不要小改)
- 确认 → 进入 ⑤
- **不打字，不写作**

**总耗时**：~1 分钟 / 条。

---

## 六、阶段 ⑤ · SCHEDULE — Buffer 自动排期

**Buffer / Later 的角色**：
- 收到 Step 4 确认的内容（文案 + 8 张图）
- 按账号"最佳发布时段"自动排：
  - 求职号 A：周三 12:30 PM
  - IT 转行号 B：周日 21:00 PM
  - 留学号 C：周一 19:00 PM
- 自动加 alt 文案 / hashtags

**手工版需要做什么**（Step 1）：
- 自己打开 3 个账号 App
- 手动复制粘贴 3 次
- 手动加话题
- 手动选时段
- **15 分钟 / 平台**

→ 3 平台 × 15 分钟 = 45 分钟。
→ Step 2 Buffer 排期 = 0 分钟。

---

## 七、Step 1 vs Step 2 · 同选题 T01 总耗时对比

| 阶段 | Step 1 | Step 2 |
|------|--------|--------|
| 选题 | 0 分（脑子里） | 0 分（cron 触发） |
| 写文案 | 2 分 × 5 条 = 10 分 | 0 分（LLM 自动） |
| 找配图 | 30 秒 × 5 = 2.5 分 | 0 分（gpt-image-2） |
| 审核 | 0 分（直接发） | 1 分（点确认） |
| 发布到 3 平台 | 45 分（手动） | 0 分（Buffer） |
| **合计** | **57.5 分** | **1 分** |

**节省**：57.5 → 1 分钟，**单次效率提升 ~57 倍**。

但 Step 2 还有 3 个**没解决**的问题：

1. **选题还是你定**：你得知道"这周该发 T01"
2. **跨平台还是同稿复制**：4 个平台都发同一份小红书稿，X / LinkedIn / 公众号格式不对
3. **没数据回流**：发完不知道哪个钩子转化好，下次还是 5 个候选随机选

→ 这就是为什么需要 Step 3（多平台 fan-out）和 Step 4（数据回流进化）。

---

## 八、关键洞察

> **Step 2 ≠ 用 AI**
> **Step 2 = 把"用 AI 时每次都要补的上下文"固化成模板，让 LLM 每次自动复用。**

固化的不是 prompt 本身，是**人设 + 规则 + 红线 + 数据源**这 4 件事。

谁会 Step 2？
- 会写 prompt 模板的人
- 会用 Notion AI / 飞书 AI 串简单工作流的人
- 时薪从 $0 涨到 ~$30 的人（Z06 三层定义）

Step 3 看下一篇 → `STEP3_MULTIPLATFORM.md`
