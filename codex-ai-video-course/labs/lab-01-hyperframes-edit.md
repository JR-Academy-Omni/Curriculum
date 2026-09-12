# Lab 1 · 用 Codex 完成第一条 HyperFrames 时间线

## 输入

准备 3–5 个有发布权的竖版或横版素材；先复制 `hyperframes-starter/`，不要直接改公共 starter。

## 任务

1. 用 `ffprobe` 生成素材清单：时长、画幅、帧率、音轨。
2. 让 Codex 产出 `SHOTLIST.md`，为每个保留镜头写明用途、源范围和目标时间。
3. 将镜头写入 HyperFrames composition；需要重复使用同一素材时，用多个 clip 和不同 `data-media-start`。
4. 加入开场信息、字幕区和结尾 CTA，但不加入未确认的事实。
5. 运行 `npm run check`。

## 提交证据

- `SHOTLIST.md`
- `index.html`
- 完整 `npm run check` 输出
- 0 秒、6 秒、11 秒三张 snapshot
