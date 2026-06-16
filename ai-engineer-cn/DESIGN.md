# AI Engineer 训练营（国内版）· 课程设计文档

> Source of truth：`public/outline.json`。本文件记录设计决策、与已有课程的关系、新建资源清单。

## 一句话定位
对着国内大模型应用开发岗的真实 JD 学，在匠人真实项目 **Dispatch AI** 上边学边做，毕业带着扛得住面试追问的真项目，冲 **25–40K** offer。

## 目标岗位（诚实定位）
主流可达岗位 = **大模型应用开发 / AI 应用工程师**（25–40K/月），不押 50K 算法岗幻觉（那需硕博算法背景）。

## 目标用户
1. 后端/全栈工程师（2–5 年）转大模型应用 —— 主盘
2. 应届 CS 拼 AI 校招
3. 传统算法/数据岗补 LLM 工程能力
4. 想做能上线 AI 产品的创业者/独立开发

## 四大差异化（对比黑马/尚硅谷/极客时间/贪心）
1. **真项目反模板** —— 在匠人真实系统 Dispatch AI 上做，竞品最大软肋是项目千人一面、一追问就废。
2. **押注 2025–26 新高频技能** —— Function Calling + MCP、RAG 评测、vLLM 私有化部署。
3. **全国产栈 + 合规** —— Qwen/DeepSeek/GLM + 阿里云百炼/华为云 + Coze/Dify；私有化部署是国内刚需。
4. **JR 平台体验** —— 浏览器内即时验证 Lab + AI Tutor 一对一带练 + Quest 真实环境实战。

## 课程结构
- **12 周技术 + 职业孵化**；7 个 Phase（P0–P5 技术 + P6 职业孵化）。
- **节奏铁律**：每周 **2 节直播，每节 ≤3 小时（180min）**，共 24 节直播；录播/Lab/Quest 自主节奏环绕。
- 统计：61 节课 · 24 直播 · 18 互动 Lab · 6 个 Dispatch AI Quest 里程碑。

## 主线项目：Dispatch AI（全班统一 + 个性化层）
- Dispatch AI 是匠人真实的 AI 调度系统（React 前端 + Node.js 后端 + AI 服务 + 数据库），现被 `techscrum-devops` 课当部署对象。
- **视角翻转**：DevOps 课负责「把它跑上线」，本课负责「让它变聪明」——每个 Phase 在它身上叠一层 AI 工程能力。两门课共享一个项目，形成产品矩阵。
- **6 个 Quest 里程碑**：W1 本地跑通 → W2 接国产模型+FC → W5 RAG+评测 → W8 Agent+MCP → W10 私有化部署 → W12 个性化毕业作品。
- **防同质化**：W1–W11 全班同架构（好教好批），W12 强制每人加自选领域调度场景 + 独创功能，简历各不相同、抗追问。
- ⚠️ **待确认**：当前映射基于 `techscrum-devops` 课程页对 Dispatch AI 的描述。需拿到 Dispatch AI 源码后校准其 AI 服务现状、各模块复用比例（是「升级」还是「重建」）。

## 与已有课程的关系
| 已有课程 | 关系 |
|---|---|
| `ai-engineer-bootcamp`（AU/全球版，12 周/286 课） | 技术内核母库；国内版复用 RAG/Agent/微调/Eval 内核与「Pre-work + Lab + Quest + Capstone」教学法，但换国产栈、瘦身一半、补私有化部署 |
| `ai-engineer-rag` | 喂 P2 RAG 模块 |
| `ai-engineer-resume-interview` | 喂 P6 职业孵化 |
| `techscrum-devops` | 共享 Dispatch AI 项目（部署 ↔ 智能化） |
| `ai-programming` / `openclaw` | Prompt / AI 编程基础打底 |

### AU 版哪些不适合国内（已在国内版替换/砍掉）
- AWS（EC2/IAM/S3/Bedrock/SageMaker/Lambda/CloudWatch）→ 阿里云/华为云
- OpenAI/Claude/Google ADK、GPT Store → 国产大模型 + OpenAI 兼容层 + Coze/Dify
- Claude Code / Harness Engineering 整章 → 砍
- LinkedIn & CV Workshop → BOSS 直聘/猎聘/脉脉 + 国内八股
- AU 版缺、国内版补：**vLLM/SGLang 私有化部署 + 合规**

## 三档定价（漏斗，后续用 /course-funnel-architect 细化）
| 档位 | 价格 | 内容 |
|---|---|---|
| 引流课 | ¥99–199 | 在 Dispatch AI 上跑通一个 RAG/Agent 小功能 |
| 自学版 | ¥2,000–3,000 | 录播 + Lab + AI Tutor |
| 陪跑就业版 | ¥9,800–14,800 | + 直播陪跑 + Quest 里程碑 + P6 职业孵化（outline.json 的 program 即此档：原价 14800 / 促销 9800） |

## 主题色
`#2F6BFF`（confident blue）。选色理由：与 AU 版 `ai-engineer-bootcamp` 的 `#FF5757`（红）明确区分，蓝色传递「工程、可信、技术深度」，契合"诚实对齐 JD、做真项目"的定位。供 xhs-poster / mp-article / posters.html 等统一读取。

## Lab 绑定（全部复用平台已有 Lab，无需新建）
所有 18 个 InteractiveLab 已绑定到官网现有 Lab（来自 ai-engineer-bootcamp / ai-engineer-rag / ai-programming 等已上线课程在用的 slug，已通过真实清单校验）：

| 课时 | 绑定 Lab |
|---|---|
| L02 Python 工程化 | python-lab/python-functions |
| L03 FastAPI/API | python-lab/python-api-basics |
| L04 Git | git-lab/git-branch-basics |
| L10 Prompt 四要素 | prompt-lab/clear-task |
| L11 结构化输出 | prompt-lab/json-schema |
| L17 向量化检索 | llm-lab/rag-feature-pipeline |
| L19 分块索引 | llm-lab/rag-from-scratch |
| L21 混合检索 | llm-lab/rag-inference-pipeline |
| L22 查询重写/压缩 | prompt-lab/context-management |
| L26 RAG 评测 | llm-lab/llm-evaluation |
| L30 ReAct Agent | prompt-lab/react-agent |
| L31 Agent 设计模式 | llm-lab/ai-agent-patterns |
| L34 MCP Server | llm-lab/mcp-server-build |
| L38 多智能体 | prompt-lab/multi-agent |
| L43 微调 | llm-lab/fine-tuning-qlora |
| L46 部署/压测 | llm-lab/model-deployment |
| L51 防注入 | prompt-lab/prompt-injection-defense |
| L52 幻觉护栏 | prompt-lab/hallucination-defense |

> 这些绑定是「最接近的现有 Lab」。部分主题（如 MCP、vLLM 私有化部署）平台已有相近 Lab 可直接用；若后续要做更贴合调度场景的专属 Lab，再单独新建。sync 前 Skills Data Manager pre-flight 会再校验一次 slug 存在性。

## 其他新建资源（约占工作量 30–40%）
- 国产栈适配内容（百炼/Qwen/GLM/华为云、私有化部署 W10）
- 6 个 Dispatch AI Quest 里程碑脚手架（context/stepSkeleton 已在 outline.json 写好，需配套真实环境验证）
- 国内 JD 对齐表 + 八股精讲（P6）

## 待办（落盘后）
- [ ] 拿到 Dispatch AI 源码 → 校准映射与 Quest 验证细节
- [ ] 制作至少 1 张宣传海报 → 注册到 `curriculum/posters.html`（CLAUDE.md 强制规则 2）
- [ ] 新建 Lab 接入前端 config（sync pre-flight 会校验 labs[].source/slug）
- [ ] 转 JSON → skills-data → Skills Data Manager Check Diff → Sync 到 production
