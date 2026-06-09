# Changelog — AI 工作流提效营 (AI Workflow Bootcamp) · 原 AI Adoption Specialist Bootcamp

## 2026-05-25 — 重定位 · 旧名 "AI Adoption Specialist Bootcamp" → 新名 "AI 工作流提效营 / AI Workflow Bootcamp"

依据 `REALITY_CHECK_2026-05-24.md` 选项 A（在岗提效型）落地。**slug `ai-adoption-bootcamp` 永久冻结**，只换显示层；如未来跑数据发现新定位不 work，可低成本回退（slug 没动 = SEO / 反向链接 / 后台数据全程不断）。

### 为什么 slug 不改

1. URL `jiangren.com.au/course/ai-adoption-bootcamp` 已上线、Google 已索引、有反向链接。改 slug = 几十~几百页 404 + Google 索引清零 + GSC 数据断层。CLAUDE.md 最高级铁律「禁止修改已上线 URL 结构」明确禁止。
2. 外部链接（小红书、微信公众号、海报二维码、合作 BD 材料）全部用了旧 URL，改 slug 全死链。
3. 显示名 ≠ slug 是好设计。slug 是技术 ID，显示名是给用户看的字符串，两者本就该解耦。
4. 给"再改回来"留安全网 — 这次重定位是基于 reality check 的赌注，赌"在岗提效"卖得动。如失败，name/title/description 改回去即可，slug 没动 = SEO / 后台数据零损失。

### 改了什么（统一从「转职 AI Adoption Specialist 岗位」改成「在岗用 AI 提效部门工作流」）

- **outline.json 顶层销售层** — name / name_en / title_en / description / description_en / targetAudience / courseObjective / cardDescription / promoDescription / suitable / highlights / features / prerequisiteknowledge 全部重写
- **outline.json description_html** — 销售页大段重写，明确「不是 ChatGPT 入门课、不是转职课」；增加「不适合谁」段防红线
- **outline.json FAQ Q3 整条重写** — 从「AI Adoption Specialist 是什么岗位 / 薪资 $70K-$250K」改成「学完能不能找新工作」的诚实回答（不能 / 不承诺 / 想转职走 ai-engineer-bootcamp）
- **L01 lesson** — 标题「角色定位 → 在岗定位」+ description / learningMaterial 全段重写，去掉 $70K-$250K 字样 + 转职暗示，改成 6 步工作流（识别 → 选工具 → 跑试点 → 写 SOP → 度量 → 推广）
- **Phase 1 名字** — 「AI 工具精通 + 角色定位」→「AI 工具精通 + 在岗定位」
- **"Adoption Lens 视角" → "工作流视角"**（L33 / L42 / 多处 learningMaterial）
- **"AI Adoption Specialist" → "AI 工作流提效师"**（剩余岗位指代）
- **"AI 采纳推动者" → "AI 工作流操盘手"**
- **"AI 采纳方案" → "AI 工作流方案"**
- **毕业证书** — 「JR Academy AI Adoption Specialist」→「JR Academy AI Workflow Specialist」（所有 8+ 处）
- **静态 HTML** — curriculum.html / phase1-4.html / internal.html / learning-plan.html / quest-feature.html / index.html / slides.html 全 11 个文件用 Python 脚本统一替换
- **learning-plan.html P3 段** — 「这个岗位的现实挑战」整段重写成「在公司内部推 AI 工作流 / 接外部咨询单」双轨制（Path A 在岗提效 = 主推 / Path B 外部咨询 = 选修，对应 reality check 选项 B 小池子）
- **Slide deck** — S01 Cover (主标题 + tags) / S03 WhatIs (定位卡片) / S05 Curriculum (Phase 3 名 + 毕业产出) / S13 CTA (副标题) 全改
- **xhs-posters/index.html** — 标题 / 课程介绍 P10 / FAQ / 合规卡片全改
- **ai-adoption-workshop**（2 小时引流工作坊）整套重写 — 与 bootcamp 新定位保持一致，避免学员从 workshop 进 bootcamp 时发现承诺不一致。整个工作坊 hook 从「2 小时看懂 AI Adoption Specialist 这个新岗位 + $70K-$250K 薪资」改成「2 小时学会把 AI 装进你部门的工作流」。outline.json + curriculum.html 全段重写

### 验证

- `grep -rn "AI Adoption Specialist|\\$70K|\\$250K|Adoption Lens|采纳推动者"` 在 outline.json / 所有 public/*.html / slides/*.tsx / xhs-posters/ / ai-adoption-workshop/ 全部 **0 残留**
- 故意保留的 "AI Adoption" 字眼：① learning-plan.html L709/L713（诚实告知学员"LinkedIn 上这个 title 池子小、要搜其他 title"）② P3 Path B 求职策略段（对外部求职的少数学员有用）

### 还没做（要分开 ship）

- `skills-data/training-outlines/ai-adoption-bootcamp.json` — **不需要手动改**。SDM (`tools/skills-data-manager/server/bootcamp/diff.ts` + `hydrate-ids.ts`) 直接读 outline.json 作 source of truth，skills-data 只是缓存 production `_id` 的快照
- production 同步 — 用户去 `localhost:5188/bootcamp` 跑 Check Diff → 确认 → Sync。**Claude 不自动 sync production**（写操作要用户授权）
- 第一期招生 program 内的 `name: "AI Adoption Specialist 第一期"` 同步时会变成 `"AI 工作流提效营 第一期"`（已在 outline.json 改）

## 2026-04-05

- 从本地 curriculum.html + phase1-4.html 生成 outline.json（29 lessons, 4 phases, 150 steps）
- 重建 internal.html 为课程大纲管理页面
- Production 未创建（待首次 sync）

## 2026-04-06

- 拆分 21 个 Prompt Lab 引用为独立 InteractiveLab lesson（29 → 68 节课）
- 每节直播课/自学课后面紧跟对应的 Lab 练习课
- 39 个 InteractiveLab lesson 新增（30min 互动练习）
- 重新编号 L01-L68
- 绑定 29 节自学/直播课的 Learn 章节（ai-office, prompt-master, ai-builder, ai-content, ai-pm, ai-data-analysis）
- 首次创建到 Production（68 lessons, 4 modules, 1 program, 1 syllabus）
- 新增 39 个 InteractiveLab 课时的 description（每个含「练什么」「怎么练」，同一 Lab slug 在不同 Phase 有不同业务上下文描述）
- 新增 Training 级字段：description_html 销售页、faqs (8 条)、bootcampSections、program 第一期招生信息
