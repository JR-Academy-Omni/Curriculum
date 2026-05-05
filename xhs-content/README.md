# 小红书内容生命周期目录（xhs-content）

5 件套链路（topic-picker / draft / poster / review / score）所有产出统一落盘到这里，1 个目录 = 1 篇内容完整生命周期，方便复盘 / 改稿 / 切自动模式。

## 目录结构

```
curriculum/xhs-content/
├── 2026-05-05/
│   ├── 001-rain-job/                ← {topic-id}-{account-slug}
│   │   ├── 01-topic.json            ← /xhs-topic-picker 选题元数据
│   │   ├── 02-draft.md              ← /xhs-draft 3 切角初稿
│   │   ├── 03-final.md              ← 员工选定 + 调整后的最终稿
│   │   ├── 04-review.md             ← /xhs-review 违禁词扫描 + 改写报告
│   │   ├── 05-score.md              ← /xhs-score 9 维度打分卡
│   │   ├── posters/                 ← /xhs-poster 配图
│   │   │   ├── prompts.md
│   │   │   ├── manifest.json
│   │   │   └── *.png
│   │   └── published.json           ← 发布后回填阅读量/点赞/收藏
│   ├── 001-amelia-syd/              ← 同选题给 Amelia 写一版
│   ├── 002-uq/                      ← 校园号专属选题
│   └── ...
└── 2026-05-06/
    └── ...
```

## 命名规则

### 日期目录: `YYYY-MM-DD`
对应 `/xhs-topic-picker` 当天跑出的选题。

### 篇目录: `{topic-id}-{account-slug}`
- `topic-id`: 当天 picker 输出的 candidate id（001-009，3 位 0 padding）
- `account-slug`: 11 账号缩写（见下表）

### 11 账号 slug 对照表

| 中文账号名 | slug | 归属 |
|---|---|---|
| 澳洲匠人学院 | `au-jr` | Summer |
| Rain姐说求职 | `rain-job` | Summer |
| 澳洲实习猿 | `au-intern` | Summer |
| Kiki的分享日记 | `kiki-diary` | Summer |
| Amelia在悉尼 | `amelia-syd` | Lily |
| momo在澳洲 | `momo-au` | Lily |
| JR 匠人学院 | `jr` | Lily |
| UQ 课代表 | `uq` | KIKI |
| UNSW 课代表 | `unsw` | KIKI |
| 墨大课代表 | `unimelb` | KIKI |
| 素人号 | `sandbox` | KIKI |

⚠️ 改账号矩阵 → 先改 `docs/COMPANY_TEAM.md` → 同步本表。

## 文件 schema 速查

### `01-topic.json`（picker 输出）
完整 candidate 对象，含 hit_score / dimension_scores / why_hit / why_flop / suitable_accounts / image_briefs / risk / related_hotspot。
直接抄自 `curriculum/xhs-topics/YYYY-MM-DD.json` 中对应 candidate。

### `02-draft.md`（draft 输出）
3 切角初稿：痛点版 / 故事版 / 干货版，每稿含标题 + 正文 + 话题 + 配图建议 + 自检结果。

### `03-final.md`（员工产出）
员工从 02-draft.md 挑一个切角 + 调整 + 加真实细节 = 最终发布稿。**这是发布前唯一权威稿**。

### `04-review.md`（review 输出）
违禁词扫描结果 + 降 AI 率改写版本。员工跑 `/xhs-review` 把终端输出粘贴到这里（xhs-review 是 user 全局 skill 不自动落盘）。

### `05-score.md`（score 输出）
9 维度打分卡 + 必改项 + 决策（≥85 直发 / 75-84 可发 / 60-74 修订 / <60 重写）。

### `posters/`（poster 输出）
封面图 A/B/C 备选 + 内容图（screenshot/comparison/chart/scene/cta）+ prompts.md + manifest.json。

### `published.json`（人工回填）
发布后 24h / 72h / 7d 回填真实数据：reads / likes / saves / comments / shares / followers_gained。

```json
{
  "published_at": "2026-05-05T14:30:00Z",
  "post_url": "https://www.xiaohongshu.com/explore/...",
  "selected_cover": "cover-A.png",
  "selected_angle": "痛点版",
  "data": {
    "24h": { "reads": 1234, "likes": 56, "saves": 12, "comments": 3 },
    "72h": { ... },
    "7d":  { ... }
  },
  "predicted_tier": "1w-5w",
  "actual_tier": "3k-1w",
  "tier_match": false,
  "lessons": "封面 A 数字钩子点击率高，但内容图 chart 数据看不清"
}
```

## 复盘 SOP（每月 1 次）

```bash
# 列出本月所有篇
ls curriculum/xhs-content/2026-05-*/

# 找出爆款（actual_tier 5w+）
find curriculum/xhs-content/2026-05-* -name "published.json" \
  -exec grep -l '"actual_tier": "5w+"' {} \;

# 对照预估 vs 实际，看 hit_score 准确度
jq -r '.predicted_tier + " vs " + .actual_tier' \
  curriculum/xhs-content/2026-05-*/*/published.json
```

每月更新 `xhs-topic-picker/SKILL.md` 的爆款评分维度权重 — 数据驱动迭代。

## 与其他目录的关系

| 旧目录 | 新归宿 | 说明 |
|---|---|---|
| `curriculum/xhs-topics/{date}.json` | 保留（picker 原始全量输出） | 9 个候选完整池，05-content 只存被选中的某 1 条 |
| `curriculum/xhs-posters/{date}/{account-angle}/` | **迁移到** `curriculum/xhs-content/{date}/{topic-id}-{slug}/posters/` | xhs-poster 新版 SKILL.md 已改路径 |
| `curriculum/posts/` (legacy) | 不动 | 历史数据，新内容统一走 xhs-content |

## 工作流时序

```
[早会]   /xhs-topic-picker        → curriculum/xhs-topics/2026-05-05.json (9 候选)
[挑选]   员工挑 candidate 1 给 Rain姐写 → mkdir curriculum/xhs-content/2026-05-05/001-rain-job/
[复制]   把 candidate 1 数据写进 01-topic.json
[写稿]   /xhs-draft topic_id: 1, account: "Rain姐说求职"
         → 输出落 02-draft.md
[挑稿]   员工挑切角 + 调整 → 落 03-final.md
[配图]   /xhs-poster draft_id: 1, account: "Rain姐说求职"
         → 出 prompt → 员工 ChatGPT 生图 → mv 到 posters/
[审核]   /xhs-review (粘贴 03-final.md 内容)
         → 员工把终端输出粘贴到 04-review.md
[打分]   /xhs-score (输入 03-final.md + posters/cover-A.png)
         → 员工把终端输出粘贴到 05-score.md
[决策]   ≥75 → 发布 → 24h 后回填 published.json
         <75 → 改 03-final.md → 重跑 score
```
