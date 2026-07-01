# AI Engineer Bootcamp — 自学章节补充草稿

这里是 05 期大纲审查发现的**自学(自学 / Information lesson)覆盖缺口**对应的补充章节草稿。

## 背景

大纲审查结论:88 节自学课全部绑定了真实 learn 章节,但两个硬核 Phase 缺自学复习资料,且 learn 系统里**当前没有**对应章节可以直接链——需要新建:

- **Phase 1 Foundation** — Transformer / 注意力、ML/DL 基础(直播讲了,无自学兜底)
- **Phase 9 Model Layer** — Fine-Tuning / QLoRA / PEFT(全课最难的一段,无自学复习)

## 这些草稿是什么

| 草稿文件 | 目标 slug | 补哪个 Phase |
|---------|----------|-------------|
| `ai-engineer/transformer-attention-basics.md` | `ai-engineer/transformer-attention-basics` | P1 |
| `ai-engineer/ml-dl-fundamentals.md` | `ai-engineer/ml-dl-fundamentals` | P1 |
| `ai-engineer/fine-tuning-peft-qlora.md` | `ai-engineer/fine-tuning-peft-qlora` | P9 |
| `ai-engineer/open-weight-models-local-deploy.md` | `ai-engineer/open-weight-models-local-deploy` | P9 |

按 `learn-content-enhancer` 的 Human-First 写作规则写(4 行术语模板、第一人称、生活比喻、反 AI 味、版本/踩坑视角)。

## ✅ P2 补链已直接应用到 outline.json(无需等页面上线)

P2 旗舰主题(Prompt Engineering / System Prompt / Context Engineering)缺自学,但对应 learn 章节**早已上线**,所以已直接在 `public/outline.json` 的 P2 加了 4 节 `自学` lesson(指向现有页面,可立即生效):

| 新增 lesson | 指向(已上线) |
|---|---|
| L34a 自学：Prompt Engineering 系统方法 | `ai-engineer/prompt-engineering` |
| L37b 自学：Context Engineering 基础 | `ai-engineer/context-fundamentals` |
| L41a 自学：System Prompt 设计实战 | `ai-engineer/system-prompt-design` |
| L41b 自学：System Prompt 案例库 | `ai-engineer/system-prompt-cases` |

> 下面「outline.json 插入片段」里的 P1/P9 lesson **要等新页面上线后再连**;P2 这 4 节已经连好了。

## 上线两步(需要开发同学)

learn 内容在**生产 web 仓库** `jr-academy-web-zh`(JR-Academy-AI 组织,不在本工作台,本工作台红线不碰生产代码),所以这里只出草稿:

1. **放内容**:把 `ai-engineer/*.md` 复制进 `jr-academy-web-zh/src/content/learn/ai-engineer/`,并按 `src/config/learn/directions/ai-engineer.config.ts` 现有条目的字段格式补 3 条 config(对齐 frontmatter,order/group 按实际排)。上线后确认 `/learn/ai-engineer/{slug}` 三个页面可访问。
2. **连大纲**:页面上线后,在 `curriculum/ai-engineer-bootcamp/public/outline.json` 对应 Phase 插入 3 节 `自学` lesson(片段见下),再跑 `python3 lineage/build_lineage.py` 重建谱系,`/bootcamp-sync` 同步到 production。

> 顺序很重要:**先让 learn 页面上线,再连大纲**。否则学员点自学课会进到未上线的空页。

## outline.json 插入片段

**Phase 1**(紧跟 Transformer / ML 基础相关 concept lesson 之后,code 顺延不跳号):

```json
{
  "code": "L28x",
  "type": "Information",
  "title": "自学：Transformer 与注意力机制入门",
  "isLive": false,
  "duration": 20,
  "description": "阅读 AI Engineer 方向章节，用人话搞懂注意力机制、Q/K/V、为什么有 context 限制。",
  "learns": [{ "direction": "ai-engineer", "slug": "transformer-attention-basics" }]
},
{
  "code": "L28y",
  "type": "Information",
  "title": "自学：机器学习 / 深度学习基础速通",
  "isLive": false,
  "duration": 20,
  "description": "给会写代码但没系统学过 ML 的工程师补底子：监督/无监督/强化、神经网络怎么学、过拟合。",
  "learns": [{ "direction": "ai-engineer", "slug": "ml-dl-fundamentals" }]
}
```

**Phase 9**(紧跟 PEFT + QLoRA + Unsloth 直播课之后):

```json
{
  "code": "L163x",
  "type": "Information",
  "title": "自学：LoRA / QLoRA / PEFT 微调原理与取舍",
  "isLive": false,
  "duration": 25,
  "description": "微调最劝退的一段的人话版：什么时候该微调、LoRA/QLoRA 省了什么、消费级单卡怎么调 7B。",
  "learns": [{ "direction": "ai-engineer", "slug": "fine-tuning-peft-qlora" }]
}
```

> `code` 用了占位后缀(如 `L28x`),实际插入时按所在 Phase 现有编号顺延为整数序号,不跳号。
