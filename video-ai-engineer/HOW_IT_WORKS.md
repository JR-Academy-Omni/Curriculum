# 视频制作原理 · How It Works

> 这个目录是怎么把 13 张小红书海报 + 一篇公众号文案 → 60 秒竖版短视频的？
> 本文把整套"资产采集 + 渲染 + 混音 + 发布"的原理讲清楚。给下一个来接这个项目的人看。

---

## 一句话收尾

**我们不是在"剪辑视频"，而是在写一个 61.4 秒的互动网页，然后让 Chrome 把它逐帧截图再拼成 MP4。**

所以视频里的一切（字幕文本、动画曲线、配图位置、音乐对齐、字号、颜色）都是代码里的参数 —— 改起来跟改网页一样爽。

---

## 完整数据流

```
┌──────────────────────────────────────────────────────────────────────┐
│                      资产准备阶段（render 前跑一次）                  │
└──────────────────────────────────────────────────────────────────────┘

  xhs-posters/index.html                  jr-academy/.env                Archive.org
  (13 张海报的 HTML/CSS)                  (OPENAI_API_KEY)               Incompetech 集合
         │                                         │                          │
         ▼                                         ▼                          ▼
  ① export-xhs-to-images.mjs            ② gen-voiceover.mjs          ③ curl (手动)
   puppeteer-core + Chrome              OpenAI TTS API               Kevin MacLeod
   page.screenshot({ clip })            tts-1-hd / nova / speed 1.15  Aitech.mp3
   像素级复制                            14 段台词 → 14 个 mp3        (CC-BY 3.0)
         │                                         │                          │
         ▼                                         ▼                          ▼
   src/assets/images/                    src/assets/voiceover/        src/assets/bgm/
   mp-*-01-p2-painpoint.png              00-cover.mp3                 main.mp3
   mp-*-02-p3-conversation.png           01-gap.mp3                   (63s)
   ... × 13 张                           ... 14 段
                                                  │
                                                  ▼
                                      ④ sync-scenes-to-voiceover.mjs
                                         afinfo 量每段 mp3 实际时长
                                         写回 scenes.ts:
                                         durationInFrames = (sec + 0.5s) × 30fps

┌──────────────────────────────────────────────────────────────────────┐
│                    渲染阶段（Remotion 核心魔法）                      │
└──────────────────────────────────────────────────────────────────────┘

  src/ShortVideo.tsx  ◄──  src/data/scenes.ts  ◄──  src/assets/*
         │
         ▼
  ⑤ Remotion Bundler
   webpack 打包 React 代码 + assets → 内存里的 web bundle
         │
         ▼
  ⑥ Headless Chromium（自带的）
     并发 4 个 tab，每个访问 http://localhost:xxx/?frame=N
     N = 0, 1, 2, ..., 1839（30fps × 61.4s = 1840 帧）
         │
         ▼
     对每一帧 N：
     ├─ React 渲染 <ShortVideo/>
     ├─ useCurrentFrame() 返回 N
     ├─ <Sequence from=X durationInFrames=Y> 决定第 N 帧该放哪个 Scene
     ├─ spring / interpolate 算出这帧的动画状态（scale 0.94→1.0 之类）
     ├─ Chromium 按 HTML/CSS 绘制到位图
     └─ 保存为 JPEG（.remotion 缓存目录）
         │
         ▼
  ⑦ FFmpeg 拼帧（@remotion/compositor-darwin-arm64 里自带，不用系统装）
     1840 张 JPEG → H.264 视频流（yuv420p，30fps）
         +
     main.mp3（volume 曲线：淡入 1s + 峰值 0.18 + 淡出 2s）
     + 14 段 voiceover.mp3（按 <Sequence from=X> 精确定位）
     → AAC 音频流（48kHz 立体声）
         │
         ▼
     mux 成 MP4 容器（H.264 + AAC）
         │
         ▼
     out/ai-engineer-short.mp4（54MB · 61.4s · 1080×1920）
         │
         ▼
  ⑧ 自动 cp 到 ../ai-engineer-bootcamp/public/video/ai-engineer-short.mp4
     → 被 public/video/index.html 的 <video> 标签加载
     → 被 deploy.yml 同步到线上
```

---

## 🎯 关键理解点

### Remotion 本质是什么

**它不是传统意义的视频编辑器。它是把"React 在不同时刻的 DOM"当成视频帧。**

伪代码：

```tsx
for (let frame = 0; frame < totalFrames; frame++) {
  // 1. 给 React 设定"现在是第 frame 帧"
  setCurrentFrame(frame);

  // 2. 让 React 完整 render 一遍（所有组件基于 frame 重新算样式）
  const html = renderToHtml(<ShortVideo />);

  // 3. 把 HTML 画到 Chromium → 位图
  const jpeg = chromium.paint(html);

  // 4. 存盘
  fs.write(`frames/${frame}.jpg`, jpeg);
}

// 最后 FFmpeg 拼
ffmpeg.stitch('frames/*.jpg', 'audio.mp3', 'output.mp4');
```

### 为什么这么设计很强

- **代码即视频** —— 改 `scenes.ts` 的字符串 = 改视频内容，跟改网页一样
- **动画用 React 声明式** —— `interpolate(frame, [0, 30], [0, 1])` 就是一条 fade-in 曲线，不用拖关键帧
- **热更新** —— Remotion Studio 里改代码秒回显，跟 Vite 一样
- **完全确定性** —— 同一份代码在任何机器上渲染出一样的视频（不像 After Effects 那种受软件版本 / 插件 / 字体影响）
- **协作友好** —— 能 git diff 动画变化，code review 字幕修改

### 我们的视频具体是怎么组合的

```tsx
// 简化后的 ShortVideo.tsx
<AbsoluteFill>
  {/* 第 0-90 帧：开场 */}
  <Sequence from={0} durationInFrames={90}>
    <CoverScene />  {/* 里面用 spring 做 "2026" 数字弹入动画 */}
  </Sequence>

  {/* 第 90 帧开始：13 个 Scene 依次 */}
  <Sequence from={90} durationInFrames={1750}>
    <AbsoluteFill>
      {scenes.map((scene, i) => (
        <Sequence
          key={scene.key}
          from={sceneOffsets[i].from}
          durationInFrames={scene.durationInFrames}
        >
          <Scene scene={scene} />  {/* 海报 + 金句 + spring 动画 */}
        </Sequence>
      ))}
      <TopBar />  {/* 顶部进度条，useCurrentFrame() 算百分比 */}
    </AbsoluteFill>
  </Sequence>

  {/* 音频 */}
  <Audio src="bgm/main.mp3" volume={(f) => 包络函数(f)} />
  {voiceoverTracks.map(t => (
    <Sequence from={t.from}>
      <Audio src={t.file} volume={1.0} />
    </Sequence>
  ))}
</AbsoluteFill>
```

**每一帧 N，Remotion 问**："`<Sequence from={X} durationInFrames={Y}>` 包不包含 N？" 包含就 render 里面的内容，不包含就跳过。这就是时间轴的本质。

---

## 🔬 踩坑实录

### 坑 1 · html2canvas 导出失真

一开始我用 `html2canvas`（JS 在 canvas 上模拟画 DOM）生成海报 PNG → 某些 CSS（渐变、阴影、字体）失真。

**修复**：换成 **Chrome 原生 `page.screenshot`**（puppeteer-core 提供），它就是 Chrome 画屏幕用的同一段 paint 代码，像素级一致。

```
❌ html2canvas:      DOM → JS 模拟 → canvas → PNG   (有翻译损失)
✅ page.screenshot:  DOM → Chrome paint → PNG       (原生没有中间层)
```

附带好处：速度从 5s → 2s。

### 坑 2 · OpenAI TTS 中文时长不稳

第一次生成时发现有几段 mp3 突然是 10+ 秒（预期 4-5 秒）。查下来是 TTS 卡在某些英文缩写上（RAG / GraphRAG / Agent）会一个字母一个字母念 + 加长停顿。

**修复策略**：
1. 每句话英文缩写 ≤ 3 个（超了就拆句）
2. `speed: 1.15`（中文最佳区间 1.15-1.25）
3. 跑完 `sync-scenes-to-voiceover.mjs` **自动用实际时长**更新 scenes.ts —— 不要预估

### 坑 3 · 字体没加载好就 screenshot

puppeteer 打开页面后，立刻 screenshot，Chinese 经常显示成 tofu（口）。

**修复**：`await page.evaluateHandle('document.fonts.ready')` + 额外 `800ms` 让 DOMContentLoaded 里的异步注入逻辑（`.p-course-bar`、`injectPanels` 等）跑完。

### 坑 4 · 音量失衡

BGM 和 VO 都是 1.0 时，真乐器的 BGM 会盖过人声。

**修复**：VO 走 1.0，BGM 压到 **0.18**（真乐曲）或 0.22（合成音乐）。中文人声容易被同频段的中频乐器盖掉。

### 坑 5 · 视频时长和配音对不齐

第一版视频是 63s 固定，但 TTS 生成的总配音 100s，结果配音被截断。

**修复**：反过来让视频配合配音 —— `sync-scenes-to-voiceover.mjs` 读 mp3 实际时长 → 改 `scenes.ts` 的 `durationInFrames`。最终视频长度 = 所有配音时长 + 每段 0.5s buffer。

### 坑 6 · 竖版 3:4 海报放进 9:16 视频有空

海报 1242×1660 (3:4)，视频 1080×1920 (9:16)。海报比视频窄。

**设计**：留 180px 顶部 TopBar（品牌 + 进度条）+ 240px 底部 CaptionBar（金句字幕），中间 1500px 放海报（宽高等比缩到 980×1310）。这样海报不变形，同时利用了 9:16 多出来的竖向空间塞文字信息。

---

## ⚙️ 3 个自动化脚本的职责

### `scripts/export-xhs-to-images.mjs` — 抓真海报

```
用 puppeteer-core + 系统 Chrome/Chrome Headless Shell：
  1. 载入 ../ai-engineer-bootcamp/public/xhs-posters/index.html (file://)
  2. 等 document.fonts.ready + 800ms
  3. 对 13 张 poster 逐个：
     a. page.evaluate() 在页面里把 poster 摘到顶层，清 transform，裹 6px/36px 圆角/24px 投影 frame
     b. page.screenshot({ clip: {x:0, y:0, width:totalW, height:totalH} })
     c. 存为 PNG
     d. 复原 DOM
  4. 每张 <1 秒，13 张 ~2 秒
```

### `scripts/gen-voiceover.mjs` — 生成配音

```
读 jr-academy/.env 拿 OPENAI_API_KEY
对 14 段台词逐个 POST /v1/audio/speech:
  {
    model: 'tts-1-hd',
    voice: 'nova',              // 女声，中文最自然
    input: 台词,
    speed: 1.15,                 // 中文最佳速度
    response_format: 'mp3',
  }
保存到 voiceover/NN-{scene-key}.mp3
```

### `scripts/sync-scenes-to-voiceover.mjs` — 自动对齐时长

```
for each voiceover/NN-{key}.mp3:
  dur = afinfo 读实际时长（秒）
  frames = round((dur + 0.5) × 30)
  用正则替换 scenes.ts 里对应 key 的 durationInFrames

更新 COVER_DURATION 为 cover.mp3 时长 + buffer
```

---

## 🎵 背景音乐选型

### 为什么选 Archive.org · Incompetech 集合

试过很多源都失败：

| 源 | 结果 |
|----|------|
| Pixabay Music | 403（反爬） |
| Chosic | 403 |
| Free Music Archive | 无公开 API |
| Suno / Udio | 需要账号 + 非 royalty-free |
| YouTube Audio Library | 需要 YouTube 账号 |
| **Archive.org · Incompetech** | ✅ 直接 URL 稳定 · Kevin MacLeod CC-BY 3.0 · 108 首曲子 |

URL 格式：
```
https://archive.org/download/Incompetech/mp3-royaltyfree/{TrackName}.mp3
```

### 可用曲名清单（筛过适合我们这个课）

- **Aitech.mp3**（150s · 194kbps · 科技感，AI 主题首选）← 当前用这个
- `Back on Track.mp3`（78.5s · 上扬励志）
- `B-Roll.mp3`（84s · 专为视频 B-roll）
- `Cipher.mp3` / `Electrodoodle.mp3` / `Sneaky Snitch.mp3` / ...

### ⚠️ 合规硬性要求

Kevin MacLeod 是 **CC-BY 3.0**，发视频时**必须在简介/评论/片尾任意一处**标注：

```
Music: "Aitech" by Kevin MacLeod (incompetech.com)
Licensed under Creative Commons: By Attribution 3.0
```

视频预览页 `public/video/index.html` 底部的黄底提醒卡就是这个用途。

---

## 🕰️ 时间开销（参考）

```
② TTS 生成 14 段配音:       ~45s  (每段调一次 OpenAI API，串行)
① puppeteer 抓 13 张海报:    ~2s   (page.screenshot 非常快)
④ 时长同步:                  <1s
⑥ Chromium 渲染 1840 帧:     ~55s  (并发 4 tab)
⑦ FFmpeg 编码 + 混音:        ~5s
                            ──────
总计:                        ~110s（首次；后续 bundle 缓存会再省 20s）
```

---

## 📁 最终产物清单

| 层级 | 内容 | 位置 |
|------|------|------|
| **原始素材** | xhs-posters HTML | `curriculum/ai-engineer-bootcamp/public/xhs-posters/` |
| **中间资产** | 13 PNG + 14 MP3 + 1 BGM MP3 | `curriculum/video-ai-engineer/src/assets/` |
| **视频代码** | React + Remotion 配置 | `curriculum/video-ai-engineer/src/` |
| **最终视频** | MP4 | `curriculum/video-ai-engineer/out/ai-engineer-short.mp4` |
| **自动副本** | MP4（给预览页和 deploy.yml 用） | `curriculum/ai-engineer-bootcamp/public/video/ai-engineer-short.mp4` |
| **发布页** | HTML 预览 + 3 平台文案 | `curriculum/ai-engineer-bootcamp/public/video/index.html` |

---

## 🔌 一条命令完整流水线

```bash
cd curriculum/video-ai-engineer
bun install
bun run pipeline   # = export-xhs-to-images → gen-voiceover → sync-scenes → render
```

单步调试：

```bash
bun run scripts/export-xhs-to-images.mjs        # 抓 13 张真海报（~2s）
bun run scripts/gen-voiceover.mjs               # TTS 14 段（~45s）
bun run scripts/sync-scenes-to-voiceover.mjs    # 对齐时长（<1s）
bun run render                                  # 渲染 MP4 + 自动 cp 到 bootcamp public（~60s）
```

实时调参：`bun run studio` → http://localhost:3001 → Remotion Studio 里拖时间轴、改代码秒回显。

---

## 🧪 复用到其他课程

```bash
cp -r curriculum/video-ai-engineer curriculum/video-{new-bootcamp}
# 改 4 个地方：
#   1. src/data/scenes.ts           —— 13 段剧本（key、image、caption、accentColor）
#   2. src/components/TopBar.tsx    —— 课程名
#   3. src/components/CoverScene.tsx —— 开场文字
#   4. scripts/gen-voiceover.mjs    —— 14 段台词
#   5. scripts/export-xhs-to-images.mjs —— XHS_PATH 和 MAP（指向新课程的 xhs-posters）
bun install && bun run pipeline
```

也可以直接跑 `/bootcamp-video` skill，规范文档在 `.gemini/skills/bootcamp-video/SKILL.md`。

---

## 📚 相关文档

- **Skill 规范**：`.gemini/skills/bootcamp-video/SKILL.md` —— 跨课程复用的完整规则
- **本课 README**：`README.md` —— 怎么跑 + Scene 剧本 + 故障排查
- **上游 xhs-poster skill**：`.gemini/skills/xhs-poster/SKILL.md` —— 视频的配图来源怎么做
- **上游 mp-article skill**：`.gemini/skills/mp-article/SKILL.md` —— 视频叙事的文字版（公众号文章）
