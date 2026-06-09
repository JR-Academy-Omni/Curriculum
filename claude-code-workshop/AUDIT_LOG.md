# claude-code-workshop — Audit Log

按时间倒序追加。每条 audit 记录三件事：**已验证 / 未验证 / 后续动作**。

格式模板见文末。**全局总览见 [`curriculum/AUDIT_DASHBOARD.md`](../AUDIT_DASHBOARD.md)（每次新增 audit 必须同步更新对应行）**。

---

## 2026-05-25 — 首次同步上 prod（🟢 fresh）

**结论**：从 stub 状态首次同步成功上 prod。Training / Module / Program / Syllabus / 5 Lessons 全部由 SDM `bootcamp create` 一把梭创建，本地 + 远端 ID 对齐。

### ✅ 已验证
- outline.json 补齐 `phases[1].lessons[5]` + 修 `level: 中级` + 加 `totalSteps: 0` / `liveClasses: 5`
- 5 节 lesson 总时长 = 180 min（30 / 30 / 60 / 30 / 30，全部命中 VALID_LESSON_DURATIONS）
- SDM `POST /api/bootcamps/claude-code-workshop/create` 8 步全部 success（training → 1 module → bind → program → syllabus → 5 lesson → bind → bind）
- 本地 `skills-data/training-outlines/claude-code-workshop.json` 写回含 5 个 lesson `_id`
- 远端 `GET /api/bootcamps/claude-code-workshop/production` 回 `exists: true / lessonCount: 5 / moduleCount: 1 / programCount: 1`

### 📌 Prod IDs（首次同步）
- Training: `6a13a57d1f8f45ff2c2f76fd`
- Module: `6a13a57d1f8f45ff2c2f7700`
- Program 第1期: `6a13a57e1f8f45ff2c2f7706`
- Syllabus: `6a13a57e1f8f45ff2c2f7712`
- Lessons L01-L05: `6a13a57e1f8f45ff2c2f7719` / `6a13a57e1f8f45ff2c2f7720` / `6a13a57f1f8f45ff2c2f772a` / `6a13a57f1f8f45ff2c2f7735` / `6a13a57f1f8f45ff2c2f773b`

### ⚠️ 未验证 / 待 marketing 决策
- 排课日期（outline.program.date = `"TBD"`），未在 admin 设置 cohort 上线日 / 报名截止
- 价格通道（早鸟 A$99 / 全价 A$199）未在 prod Program.pricingOption 配置，需 admin 后台手动加 PricingOption
- 墨/悉线下全天小班 A$299（`offline_alt`）目前只是 outline 里的描述字段，未在 prod 创建独立 Program — 主理人决定要不要拆第 2 期 Program
- chapterAccess（学员锁屏）未配，目前 5 节 lesson 默认权限 = LearnDirectionAccess 表的默认
- AI 味 / 模板腔抽查暂未跑（lesson description 是首次 AI 生成的，需人工读一遍签字）

### 🛠️ 操作记录
- curriculum/.github/workflows/deploy.yml 已有 cp 块（早就配过）+ 补 `/curriculum/` 首页 Claude Code 大师课 section 卡片
- curriculum/posters.html 已有海报卡（早就配过）
- AUDIT_DASHBOARD.md：从 stub 表移到 在卖/上线中 表 + 别名表加 "Claude Code / Code 大师课 / Code Workshop" → `claude-code-workshop`

### 后续动作（owner = 课程主理人）
1. Marketing 决定排课日期 + 早鸟截止 → 在 admin 后台 Program `第1期` 设 `commenceCourseDate` / `cohortStatus`
2. 课程主理人审 5 节 lesson description（首次 AI 生成）是否能直接对外发，重点查 L03（最长 60min 的 sub-agent 并行那节）
3. 决定是否给「墨/悉线下全天小班 A$299」单独开 Program 第2期 — 或者就一直挂在 outline 描述里走线上为主
4. push curriculum submodule → GitHub Actions deploy → 验 `https://jiangren.com.au/curriculum/claude-code-workshop/curriculum.html` 200

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
