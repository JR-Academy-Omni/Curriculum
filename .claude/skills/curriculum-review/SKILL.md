# /curriculum-review — 审查课程大纲完整性

检查 bootcamp 课程大纲的完整性和质量，对照 AI Engineer 第五期标准。

## 使用方法
```
/curriculum-review [bootcamp目录]
```
例如：`/curriculum-review ai-engineer-bootcamp`

## 检查清单

### 1. Lesson Step 完整性
每节 Lesson（不管是直播/录播/自学）必须有：
- [ ] 完整 Step 序列（CONCEPT → LAB → MCQ → SCENARIO → PROJECT）
- [ ] LAB 引用有具体 slug（不是泛泛的"做个练习"）
- [ ] LEARN 引用有具体方向 + 章节 slug
- [ ] MCQ 理解检查
- [ ] 不存在没有 Step 的空 Lesson

### 2. 平台资源整合
- [ ] 有多少现有 Lab 被复用？（247 个 Lab 里）
- [ ] 有多少 Learn 章节被引用？（277 个章节里）
- [ ] 复用率是多少？（目标 >40%）
- [ ] 需新建的 Lab 数量合理吗？

### 3. Kanban Task 设计
- [ ] 有 PROJECT 步骤的 lesson 是否都有 Kanban Task 拆解？
- [ ] 每个 task 是否标注了 reviewType（ai-review / manual-review / auto-check / self-check）？
- [ ] AI Review 优先原则：能 AI 检查的不要用人工？
- [ ] Manual Review 是否只用于 GitHub 整体项目和部署验证？
- [ ] 每个 task 是否有 storyPoints（工作量指标）？
- [ ] Task 是否渐进式（前面的是后面的基础）？
- [ ] 每个 task 是否有明确交付物（不是"理解 XXX"而是"提交 XXX"）？

### 4. 章节测试
- [ ] 每个 Phase 结尾有章节测试？
- [ ] 测试有 MCQ + SCENARIO（项目验证）？
- [ ] 通过线设置（70%）？
- [ ] 解锁机制说明？
- [ ] 毕业测试通过获得证书 + 解锁 P3？

### 5. 完整页面体系
- [ ] `curriculum.html` — 有 Timeline Gantt（课程+P3+求职）？有第 N 期对比？
- [ ] `outline.html` — 每个 Lesson 有 Step？所有类型平等？
- [ ] `phase1-N.html` — 每 Phase 有详细内容？
- [ ] `jd-mapping.html` — JD 左右对照？覆盖度进度条？
- [ ] `learning-plan.html` — 翻转课堂三列？成本对比？
- [ ] `internal.html` — Lab 映射、老师分工、JD 分析、Marketing？

### 6. P3 + 求职闭环
- [ ] curriculum.html 有 P3 区块（Timeline + Sprint + Demo Day）？
- [ ] 有求职路径（简历 → 面试 → 内推 → Offer）？
- [ ] Timeline 展示三轨道（课程 + P3 + 求职）？

### 7. 内容质量
- [ ] 有没有 AI 味空洞描述？
- [ ] 英文技术术语保留原文？
- [ ] 每段内容删掉后读者是否损失信息？

### 8. 部署
- [ ] `vite.config.ts` base path 正确？
- [ ] `deploy.yml` 包含这个 bootcamp？
- [ ] styles.css 存在？

## 输出格式
```
## 课程审查报告: [bootcamp名]

### 总分: X/100

### 通过项 ✅
- ...

### 问题项 ❌
- [课号] [问题描述] [建议修复]

### 改进建议
1. ...
```
