# Codex 剪辑提示词

## 素材体检

> 读取 `assets/` 下所有视频。使用 ffprobe 输出真实的文件名、时长、分辨率、帧率、音轨与编码；不要猜。把结果写入 `MEDIA_INVENTORY.md`，再标出不适合 9:16、缺音轨、损坏或来源不明的文件。

## 镜头表

> 根据 `MEDIA_INVENTORY.md` 和下面的单句目标，写 `SHOTLIST.md`。每个镜头必须包含 source、media start、duration、timeline start、画面功能、裁切策略和可验证的结束条件。先不要改 composition。目标：____。

## 实现与检查

> 按 `SHOTLIST.md` 修改 HyperFrames composition。保持时间线确定、素材由框架控制、所有 timed element 使用 `class="clip"`。完成后运行 `npm run check`；若失败，引用实际错误逐项修复，不要跳过检查。
