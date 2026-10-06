# AGENTS.md

## 制作 PPT / 网页课件：必须使用 Talk Deck

本仓库的课程 PPT、讲座、公开课和课程解读会默认制作成网页 Slide Deck。**使用 `/talk-deck`，制作或修改前完整读取 [Talk Deck Skill](.claude/skills/talk-deck/SKILL.md)**；不要把创建完整 Bootcamp 的 `bootcamp-curriculum-creator` 当成单节 PPT 的制作入口。

- 从 `lessons/_template/` 创建新课件，遵循 Skill 的 PRD、React SlideEngine、品牌和验证流程。
- 每份独立课件必须在同一次修改中登记 [lessons.html](lessons.html)，写清课次、标题、讲师、时长、页数、课程映射、入口和资料链接，同步 `CHANGELOG.md`。
- 发布时同步课件与目录；发布后从 [线上 Lesson 列表](https://jracademy.ai/curriculum/lessons.html) 打开课件核验，再标记已部署。未发布修订写 Local / 待部署，旧版按实际状态保留。
- 用户要求不部署时，只完成授权的更新、验证、commit / push；push 使用非 main 分支，因为 push main 会触发生产部署。不得自动合入 main 或调用发布。
- 所有 PPT、讲座、课程课件和演示稿必须先制作 HTML 在线版，统一使用 Talk Deck；禁止生成或交付 `.pptx`，不得推荐或转交 Canva 作为替代。PDF 仅从已验证的同一 HTML 打印生成。完整 Bootcamp 的大纲管理另用课程管理 Skills。
