# 需求简报：给 Gemini 做 60s AI Engineer Bootcamp 短视频的配音 + 背景音乐

> 把这整份 `.md` 粘给 Gemini（或 Gemini CLI）就能上手。
> 任务分两部分：**A. 生成中文配音（13 段 + 开场 + 结尾）** · **B. 生成 63 秒背景音乐**
> Gemini 可以用自己的模型（Chirp 3 HD TTS / Lyria 2 Music / Imagen）或调外部 API，自己挑。
> 结束后把音频文件放到指定路径即可，无需改 React 代码 —— Remotion 视频组件那边会自动接上。

---

## 一、项目上下文（给 Gemini 看的 "你在哪"）

这是 **JR Academy（匠人学院）的 AI Engineer Bootcamp** 宣传片项目，位置：
```
/Users/lightman/Documents/sites/jr-academy-ai/curriculum/video-ai-engineer/
```

目前状态：
- ✅ 已用 Remotion 4.x 搭好 60 秒竖版短片（1080×1920 · 30fps）
- ✅ 已有 13 张小红书海报作为主画面（已放在 `src/assets/images/`）
- ✅ 已有 13 段 scene 剧本（见 `src/data/scenes.ts`）
- ❌ **缺配音**（要做成 13 段 mp3，和每段 scene 对齐）
- ❌ **缺背景音乐**（要做成 63 秒的单轨 mp3）

视频结构（每 scene 的时长单位是帧，30 fps）：

| 段 | 起始秒 | 时长 | 类型 | 主视觉 | 说的内容 |
|----|--------|------|------|--------|---------|
| 0 | 0:00 | 3s | 开场 | 2026 黄底大字 | "2026·AI Engineer 的岗位基线，已经换代了。" |
| 1 | 0:03 | 4s | Scene | P2 痛点对比 | "你是不是还停留在拼 Prompt 调 API？2026 的 AI 岗位基线，已经整体往右移了。" |
| 2 | 0:07 | 4s | Scene | P3 对话 | "同事群聊 GraphRAG、Eval、MCP 的时候，你能接上话吗？" |
| 3 | 0:11 | 4s | Scene | P4 能力 | "12 周，让你真学会四件事：生产级 RAG、三大 Agent SDK、多智能体协作、微调和评估。" |
| 4 | 0:15 | 5s | Scene | P5 全景 | "课程拆成 10 个 Phase，光 Agent 就独占了 5 个 —— Memory 和 Harness 市面上几乎没人系统讲。" |
| 5 | 0:20 | 4s | Scene | P6 工具栈 | "15 个以上 2026 真实工具栈，每一个都配独立 Lab，不是 PPT 点名带过。" |
| 6 | 0:24 | 5s | Scene | P12 RAG | "P3 的 RAG 整整 45 节课 —— 向量检索、GraphRAG、LangChain 工程化、RAGAS 评估，全链路。" |
| 7 | 0:29 | 5s | Scene | P13 Agent 五层 | "Agent 被我们拆成了 Capability、Core、Multi-Agent、Memory、Harness —— 每一层都能独立成项目。" |
| 8 | 0:34 | 4s | Scene | P15 Lab | "68 个浏览器内互动 Lab，每一个都是独立 Lesson，可单独追踪进度。" |
| 9 | 0:38 | 5s | Scene | P17 项目 | "7 个能写进简历的大项目，从 RAG from Scratch 到 Multi-Agent，全部能部署、能讲 STAR 故事。" |
| 10 | 0:43 | 5s | Scene | P16 时间线 | "学完不是终点 —— 后面还有 12 周 P3 职业孵化，陪你把简历写好、面试过掉、拿到 Offer。" |
| 11 | 0:48 | 4s | Scene | P7 反馈 | "学员反馈都很日常，没有夸张数字 —— 就是普通工程师的成长记录。" |
| 12 | 0:52 | 5s | Scene | P8 配置 | "你拿到手的是 183 节课、68 Lab、7 个项目，加上 Meta、微软、亚马逊在职导师的 Code Review。" |
| 13 | 0:57 | 6s | CTA | P9 软性 CTA | "如果今年只打算认真做一件 AI 投资，推荐你看看新一期 AI Engineer Bootcamp。主页搜「匠人 AI」。" |

**总时长**：63 秒（开场 3s + 13 段合计 60s）

---

## 二、任务 A · 生成中文配音（14 段 mp3）

### 要求

- **语言**：简体中文（普通话，避免方言）
- **声线**：**温和专业 · 女声**（类似小红书 up 主讲解风，不是新闻播报腔）；如果 Gemini TTS 没合适的女声，男声也行，**但必须避开机器感重的那种合成腔**
- **语速**：**偏慢一点**（约每分钟 220 字），让听众能跟上
- **情绪曲线**：开场略平 → 中段 scene 4-7 上扬 → 结尾 CTA 亲切平稳
- **格式**：MP3，44.1 kHz 或 48 kHz，单声道或立体声都可
- **文件命名**（严格匹配）：
  ```
  src/assets/voiceover/00-cover.mp3
  src/assets/voiceover/01-gap.mp3
  src/assets/voiceover/02-chatroom.mp3
  src/assets/voiceover/03-outcomes.mp3
  src/assets/voiceover/04-structure.mp3
  src/assets/voiceover/05-stack.mp3
  src/assets/voiceover/06-rag.mp3
  src/assets/voiceover/07-agent.mp3
  src/assets/voiceover/08-labs.mp3
  src/assets/voiceover/09-projects.mp3
  src/assets/voiceover/10-timeline.mp3
  src/assets/voiceover/11-feedback.mp3
  src/assets/voiceover/12-package.mp3
  src/assets/voiceover/13-cta.mp3
  ```
- **每段时长上限**（不能超，超了会撞到下一段）：

  | 文件 | 最大时长（秒） |
  |------|---------------|
  | 00-cover.mp3 | 2.8 |
  | 01-gap.mp3 | 3.8 |
  | 02-chatroom.mp3 | 3.8 |
  | 03-outcomes.mp3 | 3.8 |
  | 04-structure.mp3 | 4.8 |
  | 05-stack.mp3 | 3.8 |
  | 06-rag.mp3 | 4.8 |
  | 07-agent.mp3 | 4.8 |
  | 08-labs.mp3 | 3.8 |
  | 09-projects.mp3 | 4.8 |
  | 10-timeline.mp3 | 4.8 |
  | 11-feedback.mp3 | 3.8 |
  | 12-package.mp3 | 4.8 |
  | 13-cta.mp3 | 5.8 |

  （视频每段实际时长留了 0.2s 缓冲给音频自然结束）

### 14 段台词（直接喂给 TTS）

```
[00-cover.mp3]
2026 · AI Engineer 的岗位基线，已经换代了。

[01-gap.mp3]
你是不是还停留在拼 Prompt、调 API？2026 的 AI 岗位基线，已经整体往右移了。

[02-chatroom.mp3]
同事群聊 GraphRAG、Eval、MCP 的时候，你能接上话吗？

[03-outcomes.mp3]
12 周，让你真学会四件事：生产级 RAG、三大 Agent SDK、多智能体协作、以及微调和评估。

[04-structure.mp3]
课程拆成了 10 个 Phase，光 Agent 就独占了 5 个。Memory 和 Harness 这两块，市面上几乎没人系统讲。

[05-stack.mp3]
15 个以上 2026 真实工具栈，每一个都配独立 Lab，不是 PPT 点名带过。

[06-rag.mp3]
Phase 3 的 RAG，整整 45 节课。向量检索、GraphRAG、LangChain 工程化、RAGAS 评估，全链路。

[07-agent.mp3]
Agent 被我们拆成了 Capability、Core、Multi-Agent、Memory、Harness。每一层都能独立成一个项目。

[08-labs.mp3]
68 个浏览器内互动 Lab，每一个都是独立 Lesson，可以单独追踪进度。

[09-projects.mp3]
7 个能写进简历的大项目，从 RAG from Scratch 到 Multi-Agent，全部能部署、能讲 STAR 故事。

[10-timeline.mp3]
学完不是终点。后面还有 12 周 P3 职业孵化，陪你把简历写好、面试过掉、拿到 Offer。

[11-feedback.mp3]
学员反馈都很日常，没有夸张数字。就是普通工程师的成长记录。

[12-package.mp3]
你拿到手的是 183 节课、68 个 Lab、7 个项目，加上 Meta、微软、亚马逊在职导师的 Code Review。

[13-cta.mp3]
如果今年只打算认真做一件 AI 投资，推荐你看看新一期 AI Engineer Bootcamp。主页搜「匠人 AI」。
```

### 特别提示（避免常见 TTS 翻车）

- **英文术语念法**：`GraphRAG` → 「GraphRAG」按英文读；`Agent` 读「AI-gent」；`MCP` 按字母「em-see-pee」；`RAGAS` 读「RA-gas」；`STAR` 按字母「ess-tee-ay-ar」；`SDK` 按字母。
- **数字**：`12 周` 念「十二周」；`68 个` 念「六十八个」；`183` 念「一百八十三」。
- **标点停顿**：句号后停 0.3-0.5 秒；逗号停 0.2 秒；冒号停 0.3 秒。
- **语气词**：句末不要带过多「呢、啊、呀」，保持干净。

### Gemini 可以用的方案（选一个）

1. **Chirp 3 HD**（Google Cloud TTS）—— 推荐 `cmn-CN-Chirp3-HD-Achird` 或 `cmn-CN-Chirp3-HD-Aoede` 女声
2. **Gemini 2.5 Flash TTS** —— `gemini-2.5-flash-preview-tts`，支持中文，带表情控制
3. **Veo 3 生成视频的音频**（不推荐，此任务不需要 Veo）
4. 调外部 API（ElevenLabs 中文、MiniMax speech-01、豆包）也可以，自己选

---

## 三、任务 B · 生成 63 秒背景音乐

### 要求

- **风格**：**Upbeat Tech / Corporate Uplifting / Future Bass 混合**。不要太电子也不要太 lo-fi。参考感觉：Apple Keynote 开场那种 "充满希望的科技感"
- **BPM**：110-128 之间
- **时长**：**63 秒**（和视频总长度完全一致），最后 3 秒要有自然淡出
- **能量曲线**：
  - 0-3s：极简开场（只有低音 pad + 少量点缀打击乐，让 cover 的 "2026 大字" 震撼感出来）
  - 3-10s：逐步加入节奏（kick + hi-hat）
  - 10-45s：主段落，有清晰的 melodic hook
  - 45-55s：稍降 energy，给语音留空间（因为结尾 CTA 是重点）
  - 55-63s：自然 outro + fade out
- **混音要求**：
  - **中频留空**给人声（200Hz - 4kHz 不要太满），不和配音抢频段
  - 整体 LUFS -14 到 -16 之间（和配音合成后不会炸耳）
  - 不要人声 / 不要 vocal chop（避免和配音打架）
- **格式**：MP3，44.1 kHz 或 48 kHz，立体声，320 kbps 或 192 kbps
- **文件命名**：
  ```
  src/assets/bgm/main.mp3
  ```

### Gemini 可以用的方案

1. **Lyria 2**（Google Vertex AI）—— 支持 instrumental music generation，一次生成 30-60 秒片段。可能需要拼 2 段后交叉淡化。
2. **MusicGen**（开源，可本地跑）—— Meta 的 model，`facebook/musicgen-stereo-large` 能生成 30 秒段
3. **Suno API / Udio** —— 闭源但质量好，能直接出 1 分钟整轨
4. **Stable Audio 2.0** —— Stability AI 的，免费 web 界面

### 喂给音乐生成模型的 Prompt 模板

```
Upbeat corporate tech background music, 125 BPM, 63 seconds, uplifting melodic hook,
subtle future bass elements, driving kick and hi-hat from 10 seconds in,
main hook at 15 seconds, slight energy dip at 45 seconds to leave room for narration,
natural fade out in final 3 seconds. Instrumental only, no vocals, no vocal chops.
Mid-frequency headroom for voiceover overlay. Style: Apple Keynote opening mixed with
Stripe product launch video. Mix target -15 LUFS, clean master, stereo.
```

---

## 四、做完之后把文件放哪

```
curriculum/video-ai-engineer/
└── src/
    └── assets/
        ├── images/              (已有 13 张海报，不动)
        ├── voiceover/           ← 【放这里】14 段配音 mp3
        │   ├── 00-cover.mp3
        │   ├── 01-gap.mp3
        │   ├── ...
        │   └── 13-cta.mp3
        └── bgm/
            └── main.mp3         ← 【放这里】63 秒背景音乐
```

创建 `voiceover/` 子目录：
```bash
mkdir -p /Users/lightman/Documents/sites/jr-academy-ai/curriculum/video-ai-engineer/src/assets/voiceover
```

---

## 五、验收标准（Gemini 自检清单）

- [ ] `src/assets/voiceover/` 下有 14 个文件：`00-cover.mp3` 到 `13-cta.mp3`
- [ ] 每个 mp3 文件可正常播放（用 `afplay` 测试一个）
- [ ] 每个 mp3 的实际时长不超过 "任务 A" 表里的"最大时长"
- [ ] 14 段配音总时长加起来 ≤ 60 秒（开场 3s 不含在内）
- [ ] `src/assets/bgm/main.mp3` 存在，总时长 62-64 秒之间
- [ ] 用 `ffprobe` 或 `afinfo` 验证每个文件的 codec 是 MP3，采样率 ≥ 44.1 kHz
- [ ] 配音里没有 `GraphRAG` 被念成 "graph rag" 中文拼音这种翻车情况
- [ ] bgm 的最后 3 秒有自然淡出，不是硬切

验证命令：
```bash
cd /Users/lightman/Documents/sites/jr-academy-ai/curriculum/video-ai-engineer/src/assets
ls -la voiceover/ bgm/
# 时长检查
for f in voiceover/*.mp3 bgm/*.mp3; do
  afinfo "$f" 2>/dev/null | grep -E "duration|estimated duration" | head -1
done
```

---

## 六、Remotion 接音频（Gemini 完成上面后，我这边 1 分钟接入）

音频文件就位后，只需要改 `src/ShortVideo.tsx` —— 把现在注释掉的 `<Audio>` 段换成：

```tsx
// BGM 铺满全程，淡入 1s + 淡出 2s
<Audio
  src={staticFile('bgm/main.mp3')}
  volume={(f) => {
    const fps = 30;
    const total = 63 * fps;
    if (f < fps) return f / fps * 0.35;         // 1s 淡入，峰值 0.35（给人声留空间）
    if (f > total - 2 * fps) return Math.max(0, (total - f) / (2 * fps)) * 0.35;
    return 0.35;
  }}
/>

// 14 段配音按 Sequence 精确对齐
<Sequence from={0} durationInFrames={Math.round(2.8 * 30)}>
  <Audio src={staticFile('voiceover/00-cover.mp3')} />
</Sequence>
<Sequence from={90} durationInFrames={Math.round(3.8 * 30)}>
  <Audio src={staticFile('voiceover/01-gap.mp3')} />
</Sequence>
// ... 13 段按 scene 起始帧对齐
```

这部分让原项目的 Claude 接，Gemini 不用管。

---

## 七、给 Gemini 的开工指令（一句话）

> "用 Lyria 2 或你认为最合适的模型，根据 `AUDIO_BRIEF_FOR_GEMINI.md` 里任务 A 和任务 B 的规格，生成 14 段中文配音 mp3 和 1 段 63 秒背景音乐 mp3，按指定文件名放到 `src/assets/voiceover/` 和 `src/assets/bgm/` 目录。做完跑一遍第五节的验证命令，把结果贴给我。"

---

## 八、项目相关文件（Gemini 可能会想翻的）

| 文件 | 作用 |
|------|------|
| `src/data/scenes.ts` | 13 段 scene 的原始数据（字幕、时长、色彩） |
| `src/ShortVideo.tsx` | 主视频合成（音频将要挂载的地方） |
| `README.md` | 整个项目怎么跑 |
| `src/assets/images/` | 13 张海报（Gemini 如果好奇视频长啥样可以看） |

---

开工愉快 🎧
