# Lesson · Vibe Coding

> AI Engineer 全栈项目班 Lesson 1（讲师 Lightman）现场演讲 PPT。

## 目录结构

```
curriculum/lessons/vibe-coding/
├── slides.md          ← Slidev 主文件（PPT 内容）
├── package.json       ← Slidev 依赖
├── notes/             ← 讲师备课资料
│   ├── OUTLINE.md
│   ├── LESSON_1_SCRIPT.md   ← 120 min 现场讲稿（时间表 + Live Demo 脚本）
│   ├── 01-landscape.md
│   ├── 02-roles-and-agile.md
│   ├── 03-product-and-prd.md
│   ├── 04-vibe-coding-workflow.md
│   ├── 05-rules.md
│   ├── 06-claude-code.md
│   ├── 07-claude-code-system-prompt.md   ← Claude Code System Prompt 全文
│   ├── 08-mcp-and-agents.md
│   ├── 09-practice.md
│   └── 10-job-checklist.md
└── public/            ← 图片/字体等静态资源（如需要）
```

## 使用

```bash
cd curriculum/lessons/vibe-coding
npm install
npm run dev              # 启动开发模式，浏览器演讲
npm run build            # 构建静态站点
npm run export:pdf       # 导出 PDF
```

## 演讲快捷键（Slidev）

| 键 | 作用 |
|---|------|
| `→` / `Space` | 下一页 / 下一动画 |
| `←` | 上一页 |
| `o` | 总览模式 |
| `d` | 暗色 / 亮色切换 |
| `f` | 全屏 |
| `g` | 跳到第 N 页 |
| `e` | 编辑当前 slide（开发模式） |

## 跨课程复用

这个 lesson 在多个 bootcamp 共享：
- AI Engineer 全栈项目班 — Lesson 1
- AI Solo Founder Bootcamp — 也作为开篇课
- AI Adoption Bootcamp — 第 2 周（按需引用）

如果要为某一节定制（比如时长改 60 min），复制 `slides.md` 出去做 fork 版本，不要改主文件。

## 红线（来自 CLAUDE.md）

- 禁止生成 `.pptx` / `.docx` 二进制文件
- `npm run export:pptx` 已禁用，会直接报错
- 要给学员发"PPT"，发 PDF（`npm run export:pdf`）或在线演讲链接
