# HyperFrames Starter

这是 Class 1 的可运行起点。初始画面是 12 秒竖版流程卡，不包含远程视频、音乐或需要授权的素材。

## 运行

```bash
npm run check
npm run dev
```

确认预览后再渲染：

```bash
npm run render
```

## 替换为自己的素材

1. 将有发布权的视频复制到 `assets/`。
2. 用 `ffprobe` 记录每个文件的时长、画幅、帧率、音轨和编码。
3. 按课程 prompt 先写 `SHOTLIST.md`。
4. 在 `index.html` 中加入 `<video>` clip；时间裁切使用 `data-media-start` 和 `data-duration`，时间线位置使用 `data-start`。
5. 再运行 `npm run check`，不要用本地看起来能播放代替检查结果。

`npm run publish` 只用于发布 HyperFrames 工程预览，不等于发布到 TikTok 或 YouTube。
