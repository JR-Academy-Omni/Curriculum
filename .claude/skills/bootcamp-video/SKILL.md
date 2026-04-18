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
