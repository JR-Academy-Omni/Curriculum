# AI Engineer W3 · Context Engineering: Selection, Assembly & Lifecycle · SOURCE_MAP

## 内容与资产来源

| 页码 / 资产 | 来源或本地路径 | 核验日期 | 事实 / 观点 | 权利与限制 |
|---|---|---|---|---|
| 8–20 · 全课术语（五项标签、五条标准、四条 fallback、Assembly 六件事、Trust Boundary、Observability 四个字段、Lifecycle 各动作、五种机制、Blueprint 五步） | 第七期 W3 理论课课程描述（讲师提供的两页截图，经 2026-10-13 版 PRD 的术语清单转录） | 2026-10-14 | 事实（课程设定） | 内部课程资料；本次会话未重新核对原截图 |
| 全课结构、页面简化原则、复习测试的三个知识点、五个评价指标 | 讲师 2026-10-14 的大纲与逐条确认 | 2026-10-14 | 观点（教学设计） | 内部课程资料 |
| 2–5 · 复习题对应的 W2 内容；9、10 · 与 W2 六条标准的衔接 | `lessons/ai-engineer-cohort-07-w2-tokens-cache`（PRD 与第 12 页） | 2026-10-14 | 事实（上节课讲过的内容） | 内部课程资料 |
| 4、6、13、17 · Prompt 与 Context Engineering 的区别、attention budget、context rot、最小的一组高信号 token、压缩先保证不漏、progressive disclosure、just-in-time、compaction、tool result clearing、现取更慢 | Anthropic, Effective context engineering for AI agents（2025-09-29）https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents | 2026-10-14 | 事实（Anthropic 的工程建议，转述） | 转述并注明出处 |
| 5、12 · 缓存要求前缀完全一致；时间戳放前面每次都不命中；不变的放前面 | Anthropic 文档 Prompt caching https://platform.claude.com/docs/en/build-with-claude/prompt-caching | 2026-10-14 | 事实（文档） | 转述 |
| 17 · 清理旧工具返回会让缓存失效，要一次清够 | Anthropic 文档 Context editing https://platform.claude.com/docs/en/build-with-claude/context-editing | 2026-10-14 | 事实（文档） | 转述 |
| 全部例子（小明、退款政策文档、只能退回原卡、工单备注、账户审核中、40 条交易记录） | 本课件编写 | 2026-10-14 | 示例（不是真实案例） | — |
| 全部图解 | 本课件代码绘制（`src/components/slides/`） | 2026-10-14 | — | 没有使用生成图片或外部图库 |
| Logo | 模板随附 `public/logo-zh-full.svg` | — | — | 官方 SVG |

逐条核对记录见 `research/sources.md`。Logo 使用模板随附官方 SVG，不用生成模型绘制。字体 license 随构建复制到 licenses/。
