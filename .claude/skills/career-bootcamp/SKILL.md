# /career-bootcamp — 给一个岗位，自动生成完整 Bootcamp 课程

输入一个目标岗位，以 AI Engineer Bootcamp 第五期为模板，自动生成完整课程。

## 使用方法
```
/career-bootcamp [目标岗位]
```
例如：
- `/career-bootcamp "AI Product Manager"`
- `/career-bootcamp "Data Analyst"`
- `/career-bootcamp "DevOps Engineer"`
- `/career-bootcamp "Cybersecurity Analyst"`

## 参考模板

**AI Engineer Bootcamp 第五期**是标准模板，位于：
- 课程页面：`curriculum/ai-engineer-bootcamp/public/`
- 第四期 JSON 数据：`skills-data/training-outlines/ai-engineer-bootcamp.json`
- Lab 配置：`jr-academy-web-zh/src/config/` 下 prompt-labs/ llm-labs/ python-labs/ aws-labs/ azure-labs/ git-labs/
- Learn 方向：`jr-academy-web-zh/src/config/learn/directions/`

## 完整执行流程

### Step 1: JD 调研（驱动所有后续设计）

**1.1 抓取真实 JD：**
- WebSearch 搜索 LinkedIn / Seek / Indeed / Glassdoor 上的 JD
- 搜索关键词：`[岗位名] job description`、`[岗位名] requirements`、变体 title
- 至少找到 **10 份 JD**，优先澳洲 + 全球远程

**1.2 提取技能矩阵（按频率排序）：**
```
| 排名 | 技能 | 出现频率 | 类别 | JD 原文摘录 |
```
- 8/10+ = 核心必教（2-3 节课）
- 5-7/10 = 重要（1-2 节课）
- 2-4/10 = 放 Lab/Learn 自学
- 1/10 = 不教

**1.3 提取岗位画像：**
- Job Title 变体（5+）
- 薪资：Entry / Mid / Senior
- 日常工作内容 + 隐性要求

### Step 2: 竞品分析

- 搜索 5+ 同类课程（Coursera / Udemy / edX / General Assembly / Maven）
- 竞品对比表：价格 / 时长 / 实操 / 场景教学 / 职业支持
- 找差异化缺口 → 一句话定位

### Step 3: 平台资源盘点

**必须搜索的资源（精确数量）：**

| 资源 | 数量 | 配置位置 |
|------|------|---------|
| Prompt Lab | 35 个 | `jr-academy-web-zh/src/config/prompt-labs/` |
| LLM Lab | 18 个 | `jr-academy-web-zh/src/config/llm-labs/` |
| Python Lab | 37 个 | `jr-academy-web-zh/src/config/python-labs/` |
| AWS Lab | 44 个 | `jr-academy-web-zh/src/config/aws-labs/` |
| Azure Lab | 31 个 | `jr-academy-web-zh/src/config/azure-labs/` |
| Git Lab | 12 个 | `jr-academy-web-zh/src/config/git-labs/` |
| Frontend Lab | 70 个 | `jr-academy-web-zh/src/config/labs/` |
| Vibe Coding Learn | 38 章 | `jr-academy-web-zh/src/config/learn/directions/vibe-coding.config.ts` |
| AI Engineer Learn | 42 章 | `jr-academy-web-zh/src/config/learn/directions/ai-engineer.config.ts` |
| Prompt Master Learn | 111 章 | `jr-academy-web-zh/src/config/learn/directions/prompt-master.config.ts` |
| AI Builder Learn | 18 章 | `jr-academy-web-zh/src/config/learn/directions/ai-builder.config.ts` |
| AI PM Learn | 章节 | `jr-academy-web-zh/src/config/learn/directions/ai-pm.config.ts` |
| AI Office Learn | 章节 | `jr-academy-web-zh/src/config/learn/directions/ai-office.config.ts` |
| Wiki | 大量 | `/wiki` 路由 |
| Videos | 大量 | `/videos` 路由 |
| Roadmaps | 多个 | `/roadmaps` 路由 |
| Cheat Sheets | 200+ | `/cheat-sheets` 路由 |

**读取实际 Lab/Learn 配置文件**，用 slug 匹配与课程相关的内容，不要猜。

### Step 4: 课程结构设计

**4.1 技能 → Phase 映射：**
```
Phase 1: 基础 + 工具入门（让学员先"能用"）
Phase 2: 核心技能实战（JD 高频技能）
Phase 3: 高级/差异化技能（竞品缺口）
Phase 4: 综合评估 + 毕业
```

**4.2 每节 Lesson 的 Step 序列：**

所有 Lesson（不管是直播、录播还是自学）都必须有完整 Step 序列。Step 类型：

| Step Type | 用途 |
|-----------|------|
| CONCEPT | 文字/markdown 概念讲解 |
| LAB | 互动 Lab（标明来源：Prompt Lab / LLM Lab / Python Lab / AWS Lab 等 + slug） |
| MCQ | 选择题理解检查 |
| SCENARIO | 真实场景实操练习 |
| VIDEO | 录播视频内容 |
| LIVE | 直播教学内容 |
| PROJECT | 项目交付/作业 |
| LEARN | Learn 方向章节（标明来源方向 + 章节 slug） |
| AI TUTOR | AI 引导本地实操（预设场景 Prompt，引导学生在自己电脑上完成 Lab 做不了的任务） |

**4.3 Kanban Task 设计（有 PROJECT 步骤的 lesson 必须有）：**

每个有 PROJECT 步骤的 lesson 要设计 Kanban Task 拆解（3-7 个 task），学生在看板上拖拽完成。

Task 检查方式（按优先级选择）：
| 类型 | 说明 | 适用场景 |
|------|------|---------|
| `ai-review` | AI 自动检查+评分+反馈 | 代码/文本/Prompt 类，AI 能判断质量 |
| `auto-check` | 系统自动验证 | 环境配置、API 连通、Lab 完成 |
| `manual-review` | 老师人工检查 | GitHub 项目整体、部署验证、架构评审 |
| `self-check` | 学生自行确认 | 阅读/观看类 |

原则：能用 AI Review 就不用人工。Manual Review 只用于 GitHub 整体项目质量和部署验证。

每个 task 需要：title（动词开头）、description（Markdown）、reviewType、storyPoints (1-5)、submissionType (text/file/link/screenshot)、estimatedTime。

**4.4 章节测试（每个 Phase 结尾）：**
- 30-50 题 MCQ + SCENARIO（项目提交验证）
- 通过线 70%，不通过可重考（间隔 24h）
- 通过后解锁下一 Phase
- Phase 4 毕业测试通过获得证书 + 解锁 P3

**4.4 翻转课堂模型：**
- 课前：学生自学 Lab + Learn 章节（异步）
- 直播：老师只做项目实战 + 答疑（1.5-2h）
- 课后：作业 + 项目（异步）

### Step 5: P3 职业孵化器

- 12 周 P3（课程结束后或重叠进行）
- 结构：Kickoff → Sprint ×4 → 中期审查 → Code Freeze → Demo Day
- 团队角色根据岗位方向定制
- 求职落地：简历 + LinkedIn → 模拟面试 → 企业内推 → Offer

### Step 6: 输出完整交付物

生成以下页面到 `curriculum/[new-bootcamp]/public/`：

| 文件 | 内容 |
|------|------|
| `curriculum.html` | 课程总览：Timeline Gantt 图（课程+P3+求职三轨道）、课程目标、Phase 卡片、项目列表、技术栈、FAQ、第 N 期对比表 |
| `outline.html` | 完整大纲：每个 Lesson 有 Step 序列（CONCEPT/LAB/MCQ/SCENARIO/...）、章节测试、所有 lesson type 平等 |
| `phase1-N.html` | 每 Phase 详细内容 |
| `jd-mapping.html` | JD 需求 vs 课程内容左右对照，每个技能一个 skill-row（左=JD要求，右=课程覆盖+覆盖度进度条） |
| `learning-plan.html` | 翻转课堂方案：每课三列（课前Lab → 直播内容 → 课后作业） |
| `internal.html` | 内部资料：Lab 映射表、老师分工、JD Gap 分析、Marketing 素材、竞品对比、社媒文案 |
| `styles.css` | 从 ai-engineer-bootcamp 复制 |

**页面设计系统（必须遵守）：**
- Neo-Brutalism：3px 黑色边框、6px offset box-shadow、hover 移除阴影
- CSS 变量：--indigo:#6366f1, --teal:#10b981, --red:#ff5757, --orange:#FF914D, --dark:#10162f
- 字体：Noto Sans SC + DM Sans + Space Mono
- 纯 HTML + CSS（不用 React/框架），inline styles 或 `<style>` 块
- 中文内容，英文技术术语保留原文
- 禁止 AI 味模板内容

**也需要生成：**
- `vite.config.ts` — `base: '/curriculum/[new-bootcamp]/'`
- `package.json` — 复制 ai-engineer-bootcamp 的
- 更新 `curriculum/.github/workflows/deploy.yml` — 加入新 bootcamp 的构建和部署步骤

## 注意事项

- **JD 调研驱动一切** — 不是"我觉得应该教什么"，是"市场要什么就教什么"
- **技能频率 = 课程权重** — 8/10 JD 要求 → 2-3 节课；2/10 → Lab/Learn 自学
- **所有 lesson type 平等** — Video/Info 不是附属品，都有完整 step 序列
- **Lab 复用优先** — 先查 247 个现有 Lab + 277 个 Learn 章节，再考虑新建
- **不要 AI 味** — 每段内容要有具体工具+步骤+数字
- **章节测试必须有** — 每个 Phase 结尾有测试，通过解锁下一 Phase
- **P3 + 求职闭环** — 不只教技术，要有完整的"学→做→找工作"路径
