---
name: bootcamp-video
description: "为 Bootcamp 课程生成 60s 竖版营销短视频（1080×1920 · 视频号/抖音/小红书投流）。自动化：抓 xhs-posters 海报 → OpenAI TTS 中文配音 → Archive.org CC-BY 背景音乐 → Remotion 渲染 MP4。Use when user wants to generate a promotional short video for a bootcamp."
argument-hint: "[bootcamp目录]"
---

# /bootcamp-video — 60s 竖版短视频生成器（快速参考）

完整规范见 `.gemini/skills/bootcamp-video/SKILL.md`。

## 强依赖
- `curriculum/{bootcamp}/public/xhs-posters/index.html` 已就绪
- `jr-academy/.env` 有 `OPENAI_API_KEY`

## 参考实现
`curriculum/video-ai-engineer/`（60 秒完整 pipeline 可跑）

## 一条命令
```bash
cd curriculum/video-{bootcamp-slug}
bun install
bun run pipeline
# = export-xhs-to-images → gen-voiceover → sync-scenes-to-voiceover → render
```

## 产物
`out/{bootcamp-slug}-short.mp4`（1080×1920 · H.264 · 8-50MB · ~60s）

## BGM 合规
Kevin MacLeod (incompetech.com) · CC-BY 3.0 · 发视频时必须标作者

## 复用到新课程
```bash
cp -r curriculum/video-ai-engineer curriculum/video-{new-bootcamp}
# 改 scenes.ts / TopBar 课程名 / CoverScene 开场 / gen-voiceover 14 段台词 / export-xhs 的 XHS_PATH
bun install && bun run pipeline
```

## 🎨 Per-Course Theme Color（2026-05 新规则）

复用 `video-ai-engineer/` 到新课时，**必须替换主题色**——参考实现的色板锁死在 AI Engineer Bootcamp 的 `#FF5757`，直接复制其他课会让所有课的视频都长得像 Engineer Bootcamp。

### 替换步骤

1. 读 `curriculum/{bootcamp}/public/outline.json` 顶层 `themeColor`（hex）
2. 读 `curriculum/{bootcamp}/DESIGN.md` 拿主色名、主色上文字色、严格避开的色
3. 全文搜 `video-{bootcamp}/src/` 下 `#FF5757` / `#ff5757`（旧 brand-red）→ 全部替换成新 themeColor
4. 重点位置：
   - `CoverScene.tsx` — 开场封面背景或主色块
   - `TopBar.tsx` — 顶部 brand bar accent
   - `scenes.ts` — 各 scene 的 highlight / CTA / 转场色
   - `OutroScene.tsx` — 结尾 CTA 卡片
5. 文字色：所有压在 themeColor 上的文字按 DESIGN.md 的 `text_on_primary`
6. 配音 / 字幕：高亮关键词的 highlight 色用 themeColor

### 兜底

没 themeColor → 默认 `#ff5757`。但生产新课 video 前必须先在 outline.json 写 themeColor，否则视频和别的课撞色。
