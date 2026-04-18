# AI Engineer Bootcamp · 60s 竖版短片（Remotion）

> 1080 × 1920 · 30fps · ~60s · 用于视频号 / 抖音 / 小红书视频 / 公众号嵌视频

**这个目录是工具目录，不走 curriculum 的 Vite build / 不会被 deploy.yml 部署到线上。**
输出的 MP4 `out/ai-engineer-short.mp4` 是交付物，交给运营直接发。

---

## 🎬 视频结构（14 段合 60 秒）

| 时间 | Scene | 用哪张图 | 金句 |
|------|-------|---------|------|
| 0-3s | Cover | — | 2026 · AI Engineer 的岗位基线已经换代 |
| 3-7s | 1 · Gap | `mp-ai-engineer-01-p2-painpoint.png` | 2026 岗位基线已经整体右移 |
| 7-11s | 2 · Chatroom | `mp-ai-engineer-02-p3-conversation.png` | 同事群聊 GraphRAG / Eval 能接上吗 |
| 11-15s | 3 · Outcomes | `mp-ai-engineer-03-p4-outcomes.png` | 12 周真会四件事 |
| 15-20s | 4 · Structure | `mp-ai-engineer-04-p5-roadmap.png` | 10 个 Phase · Agent 独占 5 |
| 20-24s | 5 · Stack | `mp-ai-engineer-05-p6-stack.png` | 15+ 2026 真实工具栈 |
| 24-29s | 6 · RAG | `mp-ai-engineer-06-p12-rag.png` | RAG 45 节 · 不是跑 Demo |
| 29-34s | 7 · Agent | `mp-ai-engineer-07-p13-agent.png` | Agent 5 Phase · Memory + Harness 独家 |
| 34-38s | 8 · Labs | `mp-ai-engineer-08-p15-labs.png` | 68 个浏览器 Lab |
| 38-43s | 9 · Projects | `mp-ai-engineer-09-p17-projects.png` | 7 个能写简历的项目 |
| 43-48s | 10 · Timeline | `mp-ai-engineer-10-p16-timeline.png` | 12 周 + 12 周 P3 陪到 Offer |
| 48-52s | 11 · Feedback | `mp-ai-engineer-11-p7-feedback.png` | 学员反馈都很日常 |
| 52-57s | 12 · Package | `mp-ai-engineer-12-p8-format.png` | 183 课 · 68 Lab · 7 项目 |
| 57-63s | CTA | `mp-ai-engineer-13-p9-cta.png` | 主页搜匠人 AI · AI Engineer |

每帧可以在 Studio 里拖时间轴精调字幕 / 动画 / 时长。

---

## 🚀 三步生成视频

### Step 1 · 拿到 13 张配图

打开 **mp-article 预览页**（另一个目录）：
```bash
cd ../ai-engineer-bootcamp && python3 -m http.server 8088
# 浏览器打开：http://localhost:8088/public/mp-article/
```
点右侧「⬇ 批量下载所有配图（13 张 · 高清）」按钮，等 13 张 `mp-ai-engineer-NN-*.png` 下载到本地。

### Step 2 · 把 PNG 拖进 assets 目录

```bash
# 假设下载在 ~/Downloads
cp ~/Downloads/mp-ai-engineer-*.png src/assets/images/
ls src/assets/images/  # 确认 13 张齐了
```

### Step 3 · 打开 Studio 预览 / 渲染 MP4

```bash
cd curriculum/video-ai-engineer
bun install                                    # 首次装 Remotion ~30-60s
bun run studio                                 # → http://localhost:3000 · 实时预览
```

满意了就直接出 MP4：

```bash
bun run render                                 # 满分 MP4 → out/ai-engineer-short.mp4
bun run render:preview                         # 半分辨率 preview（快 4x）
```

---

## 🎵 加背景音乐（可选）

1. 从 [Pixabay Music](https://pixabay.com/music/search/tech/) / [Bensound](https://www.bensound.com) 下载一个 60s 左右的 royalty-free 背景音乐
2. 放到 `src/assets/bgm/main.mp3`
3. 打开 `src/ShortVideo.tsx`，取消 `<Audio ... />` 这段的注释
4. 重新打开 Studio，就能听到音乐了

**推荐风格**：Upbeat Tech / Corporate / Future Bass · BPM 110-128

---

## 🔧 常见问题

### Studio 打开后一片黑，控制台报 `images/*.png not found`
→ 没做 Step 2，把 PNG 拖进 `src/assets/images/`。`Config.setPublicDir('./src/assets')` 已把这个目录配成 static 根目录。

### 渲染卡在 `Bundling...` 很久
→ 第一次启动 Chromium headless 慢，耐心等。后续会用缓存，快很多。

### 中文字体渲染糊 / 显示 tofu
→ Remotion 默认用系统字体。macOS 的 `PingFang SC`、`Heiti SC` 没问题。Linux CI 环境下需要先装 Noto Sans SC：
```bash
apt-get install fonts-noto-cjk
```

### 我想改某一段的时长 / 字幕
→ 改 `src/data/scenes.ts`，Studio 会自动热更新。

### 我想换成横版 1920×1080
→ 改 `src/data/scenes.ts` 里的 `WIDTH = 1920; HEIGHT = 1080`，Scene 里海报的 `maxWidth` / 排版需要相应调整（横版海报不再 width-limited，而是 height-limited）。

---

## 📂 目录结构

```
curriculum/video-ai-engineer/
├── package.json
├── tsconfig.json
├── remotion.config.ts       # 设 setPublicDir('./src/assets')
├── src/
│   ├── index.ts               # registerRoot
│   ├── Root.tsx               # 注册 ShortVideo composition
│   ├── ShortVideo.tsx         # 主合成：Cover + 13 Sequence
│   ├── components/
│   │   ├── TopBar.tsx           # 顶部品牌条 + 进度条
│   │   ├── CaptionBar.tsx       # 底部金句字幕（弹入动画）
│   │   ├── Scene.tsx            # 一张海报 + 动画
│   │   └── CoverScene.tsx       # 开场 3s
│   ├── data/
│   │   └── scenes.ts            # 13 scene 剧本（gitignore 外，必读必改）
│   └── assets/
│       ├── images/              # ⚠️ gitignore 掉了，手动放 PNG
│       └── bgm/                 # ⚠️ gitignore 掉了，手动放 MP3
└── out/
    └── ai-engineer-short.mp4   # 渲染产物（gitignore）
```

---

## 🎨 设计规范（改海报 / 改字幕时守这个）

- **主视觉层**：顶部 180px 品牌条（#10162f 深色）+ 中间 1500px 海报区 + 底部 240px 金句
- **色板**：沿用 xhs-poster 的 `#ff5757` / `#ffce44` / `#10b981` / `#8b5cf6`
- **字幕**：最大 56px / 副字幕 34px，必须用 Noto Sans SC 900 weight
- **动画节奏**：每 scene 前 15 帧滑入 + 后 10 帧淡出，中间静置
- **进度条**：顶部 6px 黄线贯穿全片（让观众知道还剩多久）

---

## 🤝 复用到其他课程？

把这个目录整体 `cp -r video-ai-engineer video-{new-course}`，然后：
1. 改 `src/data/scenes.ts` 的 scene 数组（image 文件名、caption、accentColor）
2. 改 `src/components/TopBar.tsx` 里的 `courseName` / `tagline` 默认值
3. 改 `src/components/CoverScene.tsx` 的开场文字
4. 照常三步走

要写成 skill 的话 todo：`/bootcamp-video` — 复用逻辑 + 根据 outline.json + xhs-copy.js 自动生成 scenes.ts。
