# 练习 5 · 审批闸（你点头之后才继续）

自动化做到草稿就停下，等你批准。批准的方式很简单：在 GitHub 上新建一个空文件 `runs/<日期>/review/APPROVED`。没有这个文件，把关脚本不会让这一段跑。

## 目标
把今天通过主编审稿的文章和视频脚本，整理成各平台可以直接复制粘贴的发布包。**不发布**，只出发布包。

## 输入
- `runs/<日期>/article/article.md`
- `runs/<日期>/video/video-script.md`
- `runs/<日期>/review/review.md`（确认结论是「可以送审」）
- `config/business.md` 里的平台

## 产出
`runs/<日期>/publish-gate/publish-pack.md`：每个平台一段，包括标题、正文（按平台长度改写）、标签、建议发布时间。非 YouTube 平台的文案和画面不放链接。

## 完成判据（done）
- 每个平台一段，长度符合平台习惯
- review.md 里指出的问题已经在发布包里改掉；改不掉的写在 reason 里，状态改为 `needs-human`
