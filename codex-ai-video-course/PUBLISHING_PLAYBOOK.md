# TikTok / YouTube Shorts 发布手册

## 1. 发布前输入

- 最终竖版 MP4：1080 × 1920，H.264，声音和字幕已检查。
- 独立平台文案：TikTok 用原生开场与短说明；YouTube Shorts 用可搜索标题和准确描述。
- 素材权利清单：音乐、人物、品牌、生成素材及可发布范围。
- 已确认的品牌、账号、时区、公开时间和可见性。

## 2. Codex 自动检查

1. 读取媒体元数据，确认比例、时长、编码和音轨。
2. 抽取首帧、中点和末帧，检查黑帧、裁切、字幕与 CTA。
3. 对照平台安全区和禁用内容清单。
4. 输出 `release-manifest.json`，状态只能是 `needs-review` 或 `approved-by-human`。

## 3. Human review gate

审核人必须逐项确认：

- 品牌与目标账号正确。
- 最终视频就是刚刚验收的文件，hash 未变化。
- 音乐与画面有发布权。
- 标题、描述、标签、隐私和发布时间正确。
- TikTok 与 YouTube 的文案是分别编写的。

没有这一关，Codex 只能生成发布草稿，不能公开发布。

## 4. Provider mutation 与回读

- 发布请求必须保存 provider 返回的 post/video id、请求时间、目标账号和媒体 hash。
- 排队或 `PENDING` 不等于公开发布。
- 只有平台返回公开 URL，并从未登录环境回读到正确的视频、声音、标题与可见性，状态才是 `published`。
- 回读失败时保持 `scheduled` / `processing` / `failed` 的真实状态，不用本地页面代替。
