# 02 · 岗位地图 & Agile 流程

## 2.1 Software Development 全景图

- 一句话：写代码只是冰山一角，真正的产品交付是**一整张组织图**
- 核心岗位拆分：
  - **Business Analyst** — 跟 Stakeholder 谈需求、写 Requirements
  - **Product Owner** — 排优先级、拍板做不做
  - **UI Designer** — 画 Wireframe + 高保真
  - **Front-end / Back-end / Full-stack** — 实现
  - **QA & Tester** — 跑 UAT / Staging / Production 三套环境
  - **DevOps & SRE** — CI/CD、上线、稳定性
  - **Cloud Engineer** — 基础设施
  - **Data Engineer / Data Analyst** — Data Warehouse / Lake / Tools
- 环境三层：**UAT → Staging → Production**
- 方法论底色：**Agile**（不是瀑布，不是凭感觉）

> 讲师提示：先让学员认这张图——他们将来不管做哪个岗位，都得在这张图里找位置；AI 不会让任何一个岗位消失，只会让"会拼图的人"变值钱。

---

## 2.2 From idea to Live Product · Agile 13 步流程

- 主线：**Idea → POC → Live Product**
- 13 个节点（板书顺序）：
  1. **Business Analyst** 收集需求
  2. **Wireframe** 草图
  3. **Product Owner** 拍板优先级
  4. **Sprint Plan** 排期
  5. **User Story** 拆任务
  6. **Refinement Meeting** 评审 / 估点
  7. **QA** 介入写测试用例
  8. **User Story Sprint** 进入开发
  9. **UI Designer** 出高保真
  10. **Developer** 写代码
  11. Code Review + Merge
  12. CI/CD → UAT → Staging
  13. Release → Production
- 关键认知：**每一个节点都可以被 AI 加速**，不是只有"写代码"那一步

> 讲师提示：现场让学员猜哪几个节点 AI 介入最多——答案是 1, 2, 5, 9, 10, 11，几乎覆盖前 80%。

---

## 2.3 From idea to Live Product · Agile 详细流转

- **PRD（Product Requirement Document）** = 一切的起点
- 详细链路：
  - **Idea → ChatGPT → Planning → Prompt → Code Agent**
  - **Code Agent → CI/CD → Testing → UAT → Validation → ChatGPT**（验证不通过回炉）
  - **CI/CD → Production**
- AI 在三个位置反复出现：
  - **Planning** 阶段帮你拆 PRD
  - **Code Agent** 帮你写实现
  - **Validation** 阶段帮你验真伪 / 出 Test Plan
- 核心范式转变：**人写 PRD，AI 写代码；人验收，AI 自测**

> 讲师提示：强调"AI 出现 3 次"——不是一次性魔法，而是端到端的协作伙伴。

---

## 2.4 全流程组件 · 一图看懂

- 7 个组件，按顺序串起来：
  1. **PRD（Product Requirement Documents）** → UI Design
  2. **Agile Development** → Planning User Story
  3. **Back-end / Front-end / Testing**
  4. **DevOps · Cloud Infrastructure · CI/CD**
  5. **Deployment**
  6. **UAT（User Acceptance Testing） / Integration Testing / Staging Test**
  7. **Deployment & Release** → User Feedback & Continuous Operation
- 闭环：**User Feedback → 回到 PRD**，不是发完就结束

> 讲师提示：黑板画一个圈，强调"产品从来不是发布完就死了，是每一轮 Feedback 喂回 PRD"。

---

## 2.5 岗位关系图 · AI 时代的四类工程师

- 4 个核心角色（同心圆 / 重叠区）：
  - **Software Engineer & Developer** — 写应用代码
  - **AI Engineer** — 把 LLM/AI 能力接进产品
  - **AI Builder** — 用 AI 工具快速搭产品（PRD + Prompt + Coding Agent）
  - **ML Engineer** — 训练模型 / 调 pipeline / 做 MLOps
- 重叠区：**AI Web** = AI Engineer + Software Engineer
- 趋势：**AI Builder** 是最新出现的岗位，门槛最低、增长最快

> 讲师提示：让学员对号入座——大部分人会落在 AI Builder 或 AI Web，少数想深入到 ML Engineer。

---

## 2.6 AI Coding 岗位 · NEW vs OLD

| 旧岗位 | AI 时代 NEW |
|--------|------------|
| Software Engineer | **AI Coding Engineer**（写代码 + 用 Agent） |
| Business Analyst & PM | **AI Builder PM**（写 PRD + 跑 Prompt + 验收 AI 输出） |
| DevOps Engineer | **AI DevOps**（自动化 pipeline + AI 辅助 ops） |

- 旧岗位**不会消失**，但工作方式被 AI 重塑
- 不会用 AI 的人 = 还在用纸笔和会用计算器的人比赛

> 讲师提示：现场调研——有多少学员公司已经强制用 AI Coding 工具？数字会让他们意识到时间窗口。

---

## 2.7 AI Builder 关键技能（6 项硬核）

- 6 个必须掌握的技能：
  - **PRD** — 写清楚要做什么
  - **LLM PROMPT** — 跟 AI 沟通的语言
  - **AI Coding** — 用 Cursor / Codex / Claude Code
  - **Feature** — 拆分 + 实现 + 验收
  - **Git** — 代码版本管理（AI 也要 commit）
  - **Deployment** — 把作品推上线
- 不要求精通，但**每一项都要能跑通完整闭环**

> 讲师提示：这 6 项就是本次 Vibe Coding 课的主线，后面每节课都对应其中 1-2 项。

---

## 2.8 AI Engineer / AI Builder 关系图

- 关键判断：**AI Web** 是 AI Engineer + Software Engineer 的交集
- 4 个圈：
  - **Software Engineer & Developer**（基础底座）
  - **AI Engineer**（接 LLM API、做 RAG、Agent）
  - **ML Engineer**（训模型、调 pipeline）
  - **AI Builder**（用工具组合，不写底层）
- 课程聚焦：**AI Web 方向 + AI Programming**
  - 不教训模型（那是 ML Engineer 的活）
  - 重点教"怎么把 AI 装进 Web 产品"

> 讲师提示：重申本课定位——我们不培养 ML PhD，我们培养"明天就能用 AI 出活"的 AI Builder & AI Web Engineer。
