# /talk-deck — 网页版讲座 PPT 生成器

把一个讲座/课程主题做成可现场放映 + 可录播引流的网页版 slides（React 19 + Vite + framer-motion 的 SPA deck）。

## 使用方法

```
/talk-deck [slug] [讲座标题] [可选：时长/页数预算]
```
例如：`/talk-deck ai-new-jobs-talk "AI 催生了哪些新岗位？" "60min / ~38页"`

## 参考实现

- **脚手架来源**：`curriculum/lessons/_template/`（引擎单一来源，新 deck 从这里 `cp -R`）
- **黄金范本**：`curriculum/lessons/ai-new-jobs-talk/`（38 页完整 deck，看成品/数据驱动页）
- 完整规范：`curriculum/.claude/skills/talk-deck/SKILL.md`
- 轻量替代（Slidev / slides.md）：`curriculum/lessons/vibe-coding/`

## 关键规格

- 技术栈锁死：React 19 + Vite 8 + framer-motion + inline style（无 Tailwind）
- 引擎：`SlideEngine.tsx` —— 1600×900 固定画布整体 scale，键盘/触摸/滚轮翻页 + `?page=N` URL 同步
- 录播露脸：`CameraBubble.tsx` —— 按 `C` 开关右下角圆形摄像头浮层（对标 Slidev Camera View，可拖动、镜像、品牌粗黑边）
- 结构：一文件一页 `slides/Xnn_Name.tsx`，`theme.ts` 令牌 + `ui.tsx` 基元 + `data/*.ts` 真实数据
- 设计：JR Neo-Brutalism（黑 3px 边框 + 偏移硬阴影 + 品牌四色，暖底不纯白）
- 部署：`vite base = /curriculum/lessons/{slug}/`，build → `dist/`

## 硬性要求

- 先写 `PRD.md`（节奏表 + 逐页 spec）→ sign-off → 才写代码
- 数据零编造：来自 `research/*.md`，缺字段 omit / 显示「数据不足」，野生数据标 `sourceUrl`
- 一个 deck 一套设计体系，不混入别的风格
