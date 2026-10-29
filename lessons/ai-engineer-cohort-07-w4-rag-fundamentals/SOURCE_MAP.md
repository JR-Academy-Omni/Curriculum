# AI Engineer W4 · RAG Fundamentals · SOURCE_MAP

## 内容与资产来源

| 页码 / 资产 | 来源或本地路径 | 核验日期 | 事实 / 观点 | 权利与限制 |
|---|---|---|---|---|
| 全课结构（含目录、章节过渡页、第 3 页架构测试，2026-10-19 讲师审阅后加入）、三个 contract 的字段、failure taxonomy、CareKind 边界、面试检查、检查点 1 的例子 | 讲师 Jessie 的 W4 RAG Fundamentals 课程大纲（2026-10-19，对话中粘贴并逐条确认） | 2026-10-19 | 观点（教学设计） | 内部课程资料 |
| 4 · 五样东西；14、18、23、24 · permission、组装顺序、四条路、freshness | `lessons/ai-engineer-cohort-07-w3-context-engineering`（第 9–12、19 页） | 2026-10-19 | 事实（上节课讲过的内容） | 内部课程资料 |
| 7、10、13 · 窗口上限、token 计费、top-k 预算 | `lessons/ai-engineer-cohort-07-w2-tokens-cache` | 2026-10-19 | 事实（上节课讲过的内容） | 内部课程资料 |
| 7 · 20 万 token 以下可直接放进 prompt；16 · embedding 漏精确匹配；29 · hybrid、rerank | Anthropic, Introducing Contextual Retrieval（2024-09-19）https://www.anthropic.com/news/contextual-retrieval | 2026-10-19 | 事实（Anthropic 的工程建议，转述） | 转述并注明出处 |
| 19 · 引用由 API 解析，保证指向提供的文档 | Anthropic 文档 Citations https://platform.claude.com/docs/en/build-with-claude/citations | 2026-10-19 | 事实（文档） | 转述 |
| 全部 CareKind 例子（探视政策 v2 / v3、24 小时预约、最多 3 位访客、宠物、302 房、A 院 / B 院） | 本课件编写 | 2026-10-19 | 示例（synthetic policy，不是真实文件） | — |
| 全部图解 | 本课件代码绘制（`src/components/slides/`） | 2026-10-19 | — | 没有使用生成图片或外部图库 |
| Logo | 模板随附 `public/logo-zh-full.svg` | — | — | 官方 SVG |

逐条核对记录见 `research/sources.md`。Logo 使用模板随附官方 SVG，不用生成模型绘制。字体 license 随构建复制到 licenses/。
