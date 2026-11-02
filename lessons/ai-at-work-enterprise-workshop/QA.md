# AI at Work 企业内训 · 本地验收

## 已执行

- `bun install --frozen-lockfile` 与 `bun run build`（tsc + Vite）通过，最后构建没有字体未解析警告。
- 课件 protected engine-manifest 7 个文件均与 canonical _template 字节一致，没有改写引擎。
- 26 页 × 1600×900、1280×720、390×844 三档，共 78 项 DOM 边界与截图检查通过，未发现内容越出画布；手机为 canonical 等比放映，长文阅读使用响应式成果和工作单页面。
- 查看全部桌面截图 contact sheet，并逐页检查关键教具。深底使用官方白色 Logo，浅底使用完整黑色 Logo；打印 26 页均有对应 Logo。
- 键盘从第 8 页到第 9 页，URL 同步；N 显示当前页讲师备注，再次 N 关闭；P 打开 26 页 HTML 打印预览，返回课件正常。没有生成或交付 PDF。
- 工作单英文任务、指令及参考作答语言核对；初稿文本域可填写并随内容增高，手机页面 scrollWidth 与 clientWidth 均为 390。
- 从 lessons.html 的企业培训卡片可打开独立分类，分类可打开完整成果和教学包；成果、工作单、讲师指引、课件共六个主要页面的本地链接与资源均可达；118 个构建字体资源逐个 HEAD 检查通过。
- 目录 checker `python3 scripts/check-talk-decks.py --slug ai-at-work-enterprise-workshop` 通过；本次卡片含课名、讲师团队、210 分钟、26 页、技术栈、企业内训映射和资料入口。
- 本地响应提供 X-Robots-Tag noindex,nofollow，所有新增 HTML 含 robots/googlebot noindex；本地服务根 robots.txt 禁止 /curriculum 与 /curriculum/，404 同样含 noindex；新增内容无 GA/GTM，不加入 sitemap。
- 页面显示完整教学内容，不显示 Draft、Local、模拟数据等制作状态标签。Local 状态在 CHANGELOG、本 QA 及目录 data-release-status 元数据中维护，遵从 owner 的展示规则。

## 证据

- `QA-bounds.json`：78 项课件边界检查。
- `QA-links.json`：页面、资源与禁止索引检查。
- 用户截图：Downloads/AI at Work - Curriculum Review 2026-11-02/screenshots/，另有 notes、print-preview、workbook-mobile 和企业培训入口截图。

## 使用边界与发布状态

这是企业专场教学内容，课程事实在 enterprise-training/ai-at-work/course.json，独立于 Bootcamp 个人招生和周课表。参考成果是已审定的确定性课堂材料，不是真实学员或客户记录；制作和验收未调用任何模型 API、未真实发送或写入业务。

真实企业授课、员工工具账号、现场网络、资料授权、具体讲师排期和学习效果未验收；讲师需按 RUNSHEET 组织现场并收集真实成果后判断，不用文件存在或参考答案代替学习效果。

本地只有静态服务；生产域名根 robots、服务器响应与线上目录未在本任务改动或验收。workflow 仅增加将来需要的 build/copy 配置，没有运行 Actions、CI、自托管 runner 或部署。

源码在 /Users/lightman/Documents/sites/curriculum-ai-at-work-20261102，detached HEAD 从本次 fetch 的 origin/main 0d57bb89 创建，根仓库及原 curriculum 的其他改动保留。未提交、推送、合并或部署；临时 worktree 尚有未交付到 main 的本次工作，保留供后续处理。
