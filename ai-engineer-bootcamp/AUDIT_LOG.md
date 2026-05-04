# ai-engineer-bootcamp — Audit Log

按时间倒序追加。每条 audit 记录三件事：**已验证 / 未验证 / 后续动作**。

格式模板见文末。**全局总览见 [`curriculum/AUDIT_DASHBOARD.md`](../AUDIT_DASHBOARD.md)（每次新增 audit 必须同步更新对应行）**。

---

## 2026-05-04 — 第五期上线后体检（部分通过）

**结论**：本地 outline 健康，无阻塞问题。Prod-vs-local diff **未验证**（ADMIN_TOKEN 过期），需补做。

### ✅ 已验证（本地侧）
- Outline 规模：10 phase / 286 lesson / 869 step / 59 直播 / 68 InteractiveLab — 顶部 metadata 与实际计数一致
- 68 个 InteractiveLab 100% 都有 `interactiveLabSlug` 绑定
- 抽查 8 节 lesson description 都是 5+ 句具体内容，没有 stub
- AI 模板腔扫描（"在当今/深入探讨/全面掌握/Whether you're a beginner"）：0 命中
- 各 phase Lab 数：P1=19 / P2=11 / P3=15 / P4=3 / P5=3 / P6=3 / **P7=1** / P8=2 / P9=6 / P10=5 — Phase 7 最少但非 0
- 4-21 旧 prod snapshot 显示 prod 已存在 program "AI Engineer训练营05期" 含 286 lesson，与本地完全一致 → 5 期当时已上线
- 推翻一份过期的"5 个 P0"清单（L161/L162 重复、L126/L127/L172 错 phase、P7 零 Lab）— **全部为幻觉**，对照 outline.json 不存在

### ⚠️ 未验证（需新 token）
- 当前 prod 真实状态 — 最新一次 prod refresh 是 **2026-04-21**（13 天前）
- 4-21 之后 local / prod 是否漂移
- Orphan / duplicate lesson 检测（依赖最新 prod-state）

### 🛠️ 操作记录
- 启动 SDM 服务器（实际端口 :3088，不是 CLAUDE.md 写的 :5188）
- 触发 `POST /api/bootcamps/ai-engineer-bootcamp/refresh-prod-state` → HTTP 200 但 silently 拉到 0 lesson
- 直接 curl prod API 返回 `{"message":"Token expired","statusCode":401}` → 确认根因
- prod-state.json 已 `git checkout` 回滚到 4-21 旧 snapshot（535 lesson / 4 program 数据完整）

### 📋 后续动作
- [ ] 拿新 ADMIN_TOKEN（登录 jiangren.com.au admin → devtools 复制 Bearer），更新 `tools/skills-data-manager/.env.local`
- [ ] 重跑 refresh-prod-state，再做一次 prod-vs-local diff
- [ ] SDM bug — refresh 在 401 时不该返 `ok:true totalLessons:0`，应该 throw 'Token expired'

---

## 模板

```markdown
## YYYY-MM-DD — 简短主题（PASS / partial / FAIL）

**结论**：一句话定性。

### ✅ 已验证
- 检查项 1（用了什么命令/数字证据）
- 检查项 2

### ⚠️ 未验证 / 已知风险
- 没跑的检查 + 原因（token / 时间 / 工具问题）

### 🛠️ 操作记录
- 实际跑过的命令、改过的文件、触发过的 API

### 📋 后续动作
- [ ] 待办 1
- [ ] 待办 2
```

**写作规则**（同 CLAUDE.md "禁止瞎编"）：
- 数字必须来自 `jq` 或真实 API 响应，不要拍脑袋
- 没跑的检查写到"未验证"，不要伪装成已验证
- 推翻别人（包括前几条 audit 自己）的错误结论时，附上证据

