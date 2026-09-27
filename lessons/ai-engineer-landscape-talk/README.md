# GenAI Foundations & AI Engineer Landscape

公开讲座网页版 PPT（19 页）· 主讲 Jason（Lead FDE）· 2026-09-27

上线地址：`jracademy.ai/curriculum/lessons/ai-engineer-landscape-talk/`

## 内容

1. 开场问题：回到 2023 年，求职 / 换赛道怎么布局
2. 澳洲 AI 变迁时间线（总览 + 9 个阶段细节）
3. 技能时光机：每个阶段要点什么技能，现在还剩什么
4. 回到现在：墨尔本在招岗位示例 → AI Engineer / FDE 的 JD 要求 → 面试题示例（eval pipeline）
5. 薪资：澳洲 AI Engineer / FDE，全球 AI Engineer
6. 课程：10 个 Phase 知识范围 → 第七期 13 周排课 → 面试现场的架构图（GCP）

## 开发

```bash
bun install
bun run dev      # ← → 翻页 · F 全屏 · V 摄像头 · ?page=N 跳页
bun run build
```

引擎文件（`SlideEngine.tsx` / `ui.tsx` / `CameraBubble.tsx` / `deck.tsx` / `theme.ts` / `main.tsx`）逐字来自 `lessons/_template`，不要在这里改。
内容在 `src/App.tsx`、`src/components/slides/`、`src/components/{StageDetailPage,JdRequirementsPage}.tsx`、`src/data/`、`public/logos/`。

## 数据来源

每个 `src/data/*.ts` 文件头部注明了来源与讲者归因的范围（时间线与技能为讲者整理；薪资引自 Pearson Carter / Re:Sourced 等；排课来自 cohort-7 页面的 `outline.json`；GCP 图标来自 Google Cloud 官方图标包）。

## 视觉说明

本 deck 由公开模板 `talk-deck` 制作，沿用直角 Neo-Brutalism 卡片，未按 Register B 圆角规范改造。
