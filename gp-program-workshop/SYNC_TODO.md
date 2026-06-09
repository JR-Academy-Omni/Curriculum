# GP Program Workshop — Sync 操作 TODO

> 这是上 prod 前**还需要人/admin 完成的最后步骤清单**。outline.json 已经按 sync schema 补齐，跑同步即可创建 Training，但有 5 处必须先填实/在 admin 配。

---

## ✅ 已完成（outline.json 这边）

- 顶层 Training sync 字段全部到位：`name` / `title` / `level` / `type` / `cardDescription` / `promoDescription` / `description` (HTML) / `highlights` / `features` / `suitable` / `courseObjective` / `timeLength` / `prerequisiteknowledge` / `targetAudience`
- 中英双语字段：`name_en` / `title_en` / `cardDescription_en` / `promoDescription_en` / `suitable_en` / `courseObjective_en` / `targetAudience_en`
- 标准 `lessons[]` 8 节（L00-L07）+ knowledge points + HTML description — sync 会自动创建为后端 Lesson 文档
- 标准 `faqs[]` 8 条（从原 `faq[]` 转格式而来；原 `faq[]` 保留不动给 `curriculum.html` 用）
- `pricing.tuition: 29 AUD` 占位（最终值在 Program 文档配置）
- `enrollment` 占位字段（必须填，见下方 P0）

---

## ✅ P0 / P1 全部完成 — 直接跑 Sync

| 字段 | 状态 | 值 |
|------|------|----|
| `instructor.name_zh` | ✅ | **Aurora Zhou** (Teacher ObjectId `67ff45ff14983a0080ae88e4`) |
| `instructor.linkedin` / `avatar` / `bio` | ✅ | 全部从本地 sdm teacher 数据填实 |
| `enrollment.enrollment_url` | ✅ | `https://jiangren.com.au/curriculum/gp-program-workshop/`（学员经此进平台报名按钮） |
| `enrollment.enrollment_mode` | ✅ | `rolling-intake` — 报名后助教邮件告知最近一场 |
| `enrollment.next_session_at` | ✅ | `null` + Rolling 模式 — 待 admin 在 Program 配具体 cohort |
| Teacher ObjectId | ✅ | `67ff45ff14983a0080ae88e4` (Aurora) — 已存入 `_admin_sync_hints` |
| City ObjectId | ✅ | `5b4b57de92080720ded532c1` (Melbourne · Aurora 所在地) — 已存入 `_admin_sync_hints` |

> 📍 **outline.json 顶层 `_admin_sync_hints` 块**包含 sync 需要的全部 ObjectId + 默认值（tuition 29 AUD / level / training_type），跑 Skills Data Manager 时直接拿来用，不需要查询。

---

## 🚀 跑 Sync 的步骤

```bash
# 1. 启动 Skills Data Manager
cd ~/Documents/sites/jr-academy-ai/tools/skills-data-manager
bun install
bun run dev

# 2. 打开浏览器
open http://localhost:5188/bootcamp

# 3. 在列表里找到 gp-program-workshop（如果没出现，重启 dev server 让它扫描 curriculum/）

# 4. 点 Check Diff —— 应该显示『Training/Syllabus/Modules/Lessons 全部待创建』

# 5. 点 Sync —— 弹窗里填好 Teacher ObjectId + City ObjectId + Program 名（建议『GP Workshop 第一期』）

# 6. Sync 成功后会自动生成 skills-data/training-outlines/gp-program-workshop.json（含所有 _id 映射）
```

---

## 🎨 P2 — Sync 之后 admin 里还要补的视觉/销售配置

这些 outline.json 同步不到（SCHEMA_REFERENCE 标 ❌），必须在 `jr-academy-admin` 里手动填：

- **`thumbnail`** — 课程缩略图（卡片显示用）
- **`thumbNailAlt`** — 缩略图 alt 文本
- **`courseIntroductionBanners`** — 营销 banner URLs（顶部大图）
- **`headerVideoUrl`** — 头部介绍视频（可选，Wistia）
- **`meta` / `meta_en`** — SEO（title / keywords / description）
- **`publishStatus`** — 改为 `APPROVED` 才会上线
- **`isShown`** / **`isShownOnEnglishSite`** — 中英文站显示开关
- **Program 文档**:
  - `tuition: 29` / `currency: AUD` / `earlyBirdDueDate`
  - `installmentSixFirst/Pre` 等分期字段（29 块不需要分期，留空即可）

---

## 📦 P3 — 课程外的资源补充（学员体验提升）✅ 全部完成

### ✅ 已完成（内容创作）— 等运营把内容迁移到生产环境

- [x] **6 份 Worksheet Markdown** — `public/worksheets/01-06`
  - W01 Graduate Resume 模板 / W02 STAR Bullet 公式 / W03 Story Bank / W04 LinkedIn / W05 Coffee Chat / W06 AC 战术
  - **运营 TODO**：把这 6 份内容迁移到 Notion 公开页，把 URL 回填到 `outline.json#resources_bundle.worksheets[*].public_url`
- [x] **海报 PNG 模板** — `public/posters/poster-v1.html`（1242×1660 小红书 · html2canvas 下载）+ 已注册到 `curriculum/posters.html` 卡片
- [x] **Wiki ×3 Markdown 草稿** — `public/wiki-drafts/01-03`
  - W01 6 大行业招聘窗口 / W02 OA 供应商对照 / W03 485 × 公司接受度
  - **运营 TODO**：迁移到平台 `/wiki`，把 wiki slug + URL 回填到 `outline.json#resources_bundle.wikis[*]`
- [x] **Roadmap JSON 数据** — `public/roadmap-data.json`（T-12 → T-0 12 milestones）
  - **运营 TODO**：迁移到 `/roadmaps/gp-application-au` 路由
- [x] **Mock Interview lesson 化** — outline.json `lessons[]` 已加 `L07a · Information · /job-interview`
- [x] **STAR 故事 AI 陪练 Quest** — outline.json `lessons[]` 已加 `L05a · Quest · stepSkeleton + uiMode=chat`
- [x] **curriculum.html 加 L05a / L07a 卡片 + 资源包 section** — 学员页可见全部新内容
- [x] **internal.html 加 L05a / L07a 讲师口播 + 资源包邮件 + D+7 跟进** — 老师交付手册闭环

---

## 验收清单

Sync 完成 + admin 配置完，验收：

- [ ] `https://jiangren.com.au/curriculum/gp-program-workshop/curriculum.html` 200（已通过）
- [ ] `https://jiangren.com.au/program-course/gp-program-workshop` 显示销售页（admin 配 publishStatus=APPROVED 后生效）
- [ ] 课程出现在用户『我的课程』 / 课程列表里（Sync 写入后端 Training 即生效）
- [ ] 支付链接能跳到 29 AUD 收款
- [ ] 录播链接邮件模板就位（admin 平台层处理）
