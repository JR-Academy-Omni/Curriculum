# claude-code-workshop-fullday — Audit Log

按时间倒序追加。每条 audit 记录三件事：**已验证 / 未验证 / 后续动作**。

格式模板见文末。**全局总览见 [`curriculum/AUDIT_DASHBOARD.md`](../AUDIT_DASHBOARD.md)（每次新增 audit 必须同步更新对应行）**。

---

## 2026-05-25 — 首次创建并同步上 prod（🟢 fresh）

**结论**：从零创建。1day 非技术友好版 vs 3h Zoom 工程师版形成 Claude Code 系列双轨。Training / Module / Program 第1期 / Syllabus / 6 Lessons 全部由 SDM `bootcamp create` 一次创建，本地 + 远端 ID 对齐。

### ✅ 已验证
- 新建 `curriculum/claude-code-workshop-fullday/` 目录（outline.json + curriculum.html + styles.css）
- outline.json `phases[1].lessons[6]` 总时长 = 360min（60 × 6，全部命中 VALID_LESSON_DURATIONS）
- `level: "零基础"` / `type: "workshop"` 都过 schema enum 校验
- SDM `POST /api/bootcamps/claude-code-workshop-fullday/create` 8 步全部 success
- `skills-data/training-outlines/claude-code-workshop-fullday.json` 写回含 6 个 lesson `_id`
- `GET .../production` 回 `exists: true / lessonCount: 6 / moduleCount: 1 / programCount: 1`
- curriculum.html 内嵌交叉链接到 `../claude-code-workshop/curriculum.html`（vs 表格 + footer 双处）
- 原 `claude-code-workshop` outline 的 description / cardDescription / promoDescription 都加了 fullday 入口段（互相导流）

### 📌 Prod IDs（首次同步）
- Training: `6a13c2921f8f45ff2c32abd4`
- Module: `6a13c2921f8f45ff2c32abdb`
- Program 第1期: `6a13c2931f8f45ff2c32abe5`
- Syllabus: `6a13c2931f8f45ff2c32abed`
- Lessons L01-L06: `6a13c2931f8f45ff2c32abf4` / `6a13c2941f8f45ff2c32abfe` / `6a13c2941f8f45ff2c32ac04` / `6a13c2951f8f45ff2c32ac0c` / `6a13c2951f8f45ff2c32ac15` / `6a13c2961f8f45ff2c32ac26`

### ⚠️ 未验证 / 待 marketing 决策
- 排课日期（outline.program.date = `"TBD"`），未在 admin 设置 cohort 上线日 / 报名截止
- 价格通道（早鸟 A$299 / 全价 A$399）未在 prod Program.pricingOption 配置，需 admin 后台手动加 PricingOption
- 3 城市轮转节奏（墨/悉/布里斯班）未在 admin 后台 lessonAddress 配置，需逐场配
- 助教 1:5 比例 = 每场 8-12 学员需要 2-3 助教 — 教学组要排
- 6 节 lesson description 是首次 AI 生成的，需教学主管读一遍签字（重点 L01 装机救援 SOP / L04 用学员真实素材的实操节奏 / L05 爬资料场景细节）
- 5 台备机（学员电脑装不上时借用）需课程运营准备

### 🛠️ 操作记录
- 复用 `claude-code-workshop/public/styles.css`（cp 到 fullday/public/）
- deploy.yml 加 `claude-code-workshop-fullday` cp 块 + 改首页索引 section 把 3h + 1day 两课并列
- posters.html 加 1day 卡片（蓝黄配色和 3h 卡片视觉区分）+ 3h 卡片副标改成"工程师友好版"加 1day 引导
- AUDIT_DASHBOARD.md：别名表 + 在卖表 + 易混淆三组**加第 4 组 "Claude Code 两班"**（决策规则跟 OpenClaw 两班对齐）

### 后续动作
1. 教学主管签字 6 节 description（重点 L01 装机救援预案 — 5 台备机够不够要看实际报名）
2. Marketing 排首场城市 + 日期（建议先开布里斯班，跟现有 Claude Cowork SME workshop 同 city，复用场地）
3. 课程运营算单场 unit economics：A$299 × 12 学员 = $3,588 收入，1:5 助教 = 2-3 助教成本 + 场地 + 午餐茶歇 + 5 台备机折旧
4. SEO：1day 班对非技术学员更长尾，关键词覆盖「Claude Code 入门 / 不会代码 / 办公自动化 / AI 助理」要在落地页 H1 + meta 里加

---

## 模板

```markdown
## YYYY-MM-DD — 一句话标题（状态）

**结论**：1-2 句。

### ✅ 已验证
- ...

### ⚠️ 未验证
- ...

### 🛠️ 操作记录
- ...

### 后续动作
1. ...
```
