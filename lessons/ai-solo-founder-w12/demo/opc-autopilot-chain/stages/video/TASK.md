# 练习 3 · 视频脚本 + 分镜（每天 12:00）

## 目标
把今天的文章改成一条 45–60 秒竖版短视频的口播脚本和逐镜分镜。**不是**把文章念一遍：开头 3 秒要能让人停下来。

## 输入
- `runs/<日期>/article/article.md`（只有上游 status=done 才读）
- `config/voice.md`

## 产出
1. `runs/<日期>/video/video-script.md`：口播全文 + 每句大约几秒
2. `runs/<日期>/video/storyboard.json`：数组，每镜 `{ "shot": 1, "seconds": 3, "visual": "画面写什么", "onscreen_text": "屏幕大字", "voiceover": "这一镜说什么" }`

## 完成判据（done）
- 总时长 45–60 秒
- 第 1 镜就是文章里最反常识 / 最具体的那一句
- 屏幕大字每镜不超过 12 个字
- 画面不出现 URL 和二维码（只有 YouTube 允许视频内链接）

## 加分（课后）
用 HyperFrames 把 storyboard.json 渲染成 MP4。渲染失败不影响本阶段 done。
