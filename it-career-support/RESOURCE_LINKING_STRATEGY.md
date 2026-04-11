# 第三期大纲与资源绑定优化策略

> **现状**: 148 节课，77 节有绑定（52%），71 节裸课  
> **平均**: 每节有绑定的课只带 1.7 个资源 — **太单薄**  
> **目标**: 每节课至少 3 个资源（concept + practice + reference），覆盖率 90%+

---

## 一、当前绑定的真实问题

### 问题 1：覆盖率不够（52%）
71 节课没有任何资源绑定，纯粹是"看视频 + 读 description"，学员看完就走，**没有延伸学习路径**。

### 问题 2：绑定太薄（平均 1.7 个/课）
有绑定的课大多只有 1-2 个标签。一节"前端面试准备"只绑了 `Roadmap: frontend`，学员点过去也只是看个路线图，**没有可以马上做的练习**。

### 问题 3：绑定散乱，没有"学习闭环"
当前的绑定是"零散的标签"，不是"学习路径"。理想的一节课应该是：

```
看视频 (Video)
  ↓
读概念 (Wiki / Handbook)
  ↓
练习 (Lab / Cheat Sheet)
  ↓
延伸 (Roadmap / Learn 方向)
  ↓
立即可用 (Free Resource / 平台工具)
```

### 问题 4：标签只是"显示"，没有真正可点击的链接
当前 curriculum.html 的 `<span class="res-tag">` 只是展示，**没有 `<a href>`**。学员看到 `Wiki: cursor` 但不知道去哪打开。

### 问题 5：outline.json 字段没用满
平台后端 Lesson schema 支持的字段：
- `learnChapterSlugs[]` — Learn 章节
- `staticWikiSlugs[]` — Wiki
- `labs[]` — 互动 Lab（含 source）
- `roadmapId` — Roadmap
- `materialIds[]` — 课件资料
- `wikiIds[]` — 老 Wiki ID
- `s3VideoIds[]`, `aliCloudVideoIds[]` — 视频
- `interactiveLabType`, `interactiveLabUrl` — 互动 Lab
- `assignmentIds[]` — 作业

**当前只用了少数几个**，大量字段闲置。

---

## 二、改进策略：让每节课形成"学习闭环"

### 核心原则：每节课至少绑 3 类资源

按照"学，练，用"的顺序：

| 资源类型 | 角色 | 平台来源 |
|---------|------|---------|
| **学** (Concept) | 理解概念 | Handbook / Wiki / Learn 章节 |
| **练** (Practice) | 动手实践 | Prompt Lab / Frontend Lab / Cheat Sheet |
| **用** (Apply) | 真实运用 | Mock Interview / JobPin AI / Job Referral / Free Resource |

### 示例：把 L75 "前端面试需要准备什么" 从 1 个绑定升到 5 个

**之前（薄绑定）：**
```
[Roadmap: frontend]
```

**优化后（学练用闭环）：**
```
学:  [Handbook: coding-interview-prep]   [Roadmap: frontend]
     [Wiki: career-soft-skills (interview-soft-skills)]
练:  [Frontend Lab: HTML/CSS/JS 练习]    [Cheat Sheet: React/JavaScript]
用:  [Mock Interview 平台]               [Free: Resume templates]
```

5 个资源，从理论到实操到真实工具，完整闭环。

---

## 三、按"学习闭环"模板批量补绑

### Template A：技术面试准备类（约 8 节课）
**适用**: L75 前端 / L76 后端 / L77 DevOps / L78 数据 / L79 AI/ML / L82 算法 / L85 System Design

每节绑定模板：
```yaml
学:
  - handbook: coding-interview-prep
  - roadmap: <方向对应 roadmap>
练:
  - lab: <方向对应 Lab>
  - cheatsheet: <方向对应技术速查>
用:
  - mock-interview: /job-interview
```

预计补足 8 节 × 5 = **40 个资源标签**

### Template B：求职工具实操类（约 12 节课）
**适用**: L15 ChatGPT 写简历 / L29 AI Cover Letter / L51 批量定制 / L63 AI 模拟面试 / X3 AI 笔记 / X5 Cursor 实战 等

每节绑定模板：
```yaml
学:
  - wiki: <对应 AI 工具 wiki>
  - learn: prompt-master 章节
练:
  - lab: <对应 prompt lab>
用:
  - tool: 平台工具直链
  - free: 免费试用资源
```

预计补足 12 节 × 5 = **60 个资源标签**

### Template C：行为面试 / 沟通类（约 10 节课）
**适用**: L42-L48 面试基础 / L64-L72 行为面试 / L92-L99 谈判

每节绑定模板：
```yaml
学:
  - handbook: <对应 handbook 章节>
  - wiki: career-soft-skills 章节
练:
  - mock-interview: /job-interview
用:
  - free: 沟通模板/话术
```

预计补足 10 节 × 4 = **40 个资源标签**

### Template D：职业规划 / 成长类（约 25 节课）
**适用**: L8-L18 行业认知 / L100-L112 晋升 / X1-X10 / Y1-Y10

每节绑定模板：
```yaml
学:
  - learn: <对应 Learn 方向>
  - handbook: career-growth/engineering-levels
  - roadmap: <对应方向 roadmap>
练:
  - assignment: 行动计划
用:
  - tool: career-planning
  - free: 免费课程/书
```

预计补足 25 节 × 5 = **125 个资源标签**

---

## 四、新增"学习闭环"展示组件

不只补数据，**curriculum.html 展示也要改**。从一排零散标签 → 三段式学习路径：

### 当前展示（散乱）
```html
<div class="vl-res">
  <span class="res-tag res-handbook">Handbook: ...</span>
  <span class="res-tag res-wiki">Wiki: ...</span>
  <span class="res-tag res-lab">Lab: ...</span>
</div>
```

### 改进展示（学/练/用三段式）
```html
<div class="learn-path">
  <div class="lp-row">
    <span class="lp-stage stage-learn">📖 学</span>
    <span class="res-tag res-handbook">Handbook: coding-interview-prep</span>
    <span class="res-tag res-roadmap">Roadmap: frontend</span>
  </div>
  <div class="lp-row">
    <span class="lp-stage stage-practice">🔧 练</span>
    <span class="res-tag res-lab">Frontend Lab: HTML/CSS</span>
    <span class="res-tag res-cheatsheet">Cheat: React</span>
  </div>
  <div class="lp-row">
    <span class="lp-stage stage-apply">🚀 用</span>
    <a class="res-tag res-tool" href="/job-interview">Mock Interview ↗</a>
    <a class="res-tag res-free" href="/free-resources">免费简历模板 ↗</a>
  </div>
</div>
```

**关键改进：**
- ✅ 三段式分组，学员一眼知道路径
- ✅ "用"段都是 `<a href>`，可点击
- ✅ 可视化图标 📖🔧🚀

---

## 五、对接 outline.json 的字段映射

当前 curriculum.html 的标签 → 同步到 outline.json 时该写到哪个字段：

| HTML 标签 | outline.json 字段 | 说明 |
|----------|-------------------|------|
| `Handbook: resume` | `learnChapterSlugs: ["resume"]` | Interview Handbook 是 Learn 方向之一 |
| `Wiki: cursor` | `staticWikiSlugs: ["cursor"]` | Static wiki |
| `Roadmap: frontend` | `roadmapId: "frontend"` | 单 roadmap |
| `Lab: hello-ai` | `labs: [{source: "prompt-lab", slug: "hello-ai"}]` | 互动 Lab |
| `Cheat Sheet: React` | `staticWikiSlugs: ["react"]` 或 link | Cheat sheet 是 wiki 类型 |
| `Free: GitHub Student Pack` | `link: [{name, url}]` | 外部链接 |
| `Mock Interview` | `interactiveLabType: "mock-interview"`, `interactiveLabUrl: "/job-interview"` | 平台工具 |
| `Learn: vibe-coding/hub` | `learnChapterSlugs: ["vibe-coding/hub"]` | Learn 方向 hub |
| `Career Planning` | `link: [{name: "career-planning", url: "/study/career-planning"}]` | 平台工具 |

---

## 六、优先级执行计划

### Step 1: 用 4 个 Template 批量补绑（P0，立即做）

按 Template A/B/C/D 给所有缺绑定的 71 节课加资源。预计：
- 40 + 60 + 40 + 125 = **265 个新增资源标签**
- 覆盖率：52% → **95%+**
- 平均每节资源：1.7 → **3-5 个**

### Step 2: curriculum.html 改为三段式展示（P0，立即做）
- 加 `.learn-path` CSS
- 把现有 `.vl-res` 转换为学/练/用 三段式
- "用"段加 `<a href>` 真实链接

### Step 3: 准确映射到 outline.json（P1）
- 按"五、对接字段"映射表把所有标签转为 JSON 字段
- 同步到 production 时按 ID 匹配（前面修过的 sync.ts 已支持）

### Step 4: 创建本地 ID 映射文件（P1）
- `production-ids.json` 记录每节课的 prod ID
- 防止重复创建

---

## 七、效果对比预期

| 指标 | 当前 | 优化后 |
|------|------|--------|
| 总课时 | 148 | 148 |
| 有资源绑定 | 77 (52%) | **141 (95%)** |
| 平均资源/课 | 1.7 | **3-5** |
| 资源类型多样性 | 5 类 | **8 类** (新加 cheat-sheet, free-resource, career-planning, mock-interview) |
| 可点击链接 | 0 | **141+** (每节"用"段都可点) |
| 平台资源利用率 | ~15% | **70%+** |

---

## 八、立即可做的 3 件事

要我现在就做哪个？

1. **🔴 P0**: 用 Template 批量补绑 71 节缺资源的课（最快产出，覆盖率立刻 52% → 95%）
2. **🟡 P0**: 把 curriculum.html 改成三段式学/练/用展示 + 可点击链接
3. **🟢 P1**: 生成 outline.json + production-ids.json 准备同步

建议顺序：**1 → 2 → 3**
