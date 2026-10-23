# 企业 AI 自动化实战营

Enterprise AI Automation Bootcamp · Local / 未部署

## 入口

- `public/curriculum.html`：课程介绍与所有 5 节完整大纲。
- `public/outline.html`：逐课目标、实操、120 分钟安排与验收。
- `public/phase1.html` 至 `phase5.html`：各课独立入口。
- `public/examples.html`：可直接阅读的完整预生成示例，网站可打开操作。
- `public/learning-plan.html`：准备与学习计划。
- `public/poster.html`：招生文案海报及 PNG 下载。
- `public/internal.html`：内部来源、资源映射与未完成项，不进入学生 iframe 配置。
- `COURSE_OUTLINE.md` / `ENROLLMENT.md`：由唯一数据源生成的可编辑大纲、招生文案投影。

## 唯一数据源

课程事实、价格、课次和步骤只改 `public/outline.json`。示例文案数据改 `public/case-study.json`；作品结构与本地互动位于 `public/showcase.js`，展示样式位于 `public/showcase.css` / `showcase-polish.css`。作品 HTML 壳使用 `examples-template.html` / `example-website-template.html`，由 render.py 复制到既有入口。产品事实变更时须同步数据与展示模板。

```sh
python3 render.py
python3 -m http.server 5187 --bind 127.0.0.1 --directory public
```

打开 `http://127.0.0.1:5187/curriculum.html`。渲染脚本仅做确定性文件生成，不调用模型、后端、支付、发布或定时任务。海报 PNG 为浏览器对 `#poster` 的截图；修改源后重新截图，避免旧价格残留。

## 确认与边界

5 节、每节 120 分钟、共 10 小时；早鸟 A$899／人、正常 A$1,099／人。主要术语保留英文。VI、Design System、Website 合一节；Codex 视频单独一节；第五节为每周营销任务。

税费、日期、讲师、授课形式、报名入口和费用包含范围待确认。没有 production Training / Program，未同步、未提交、未推送、未触发 CI/CD。保留现有 URL，不创建对外报名路径。

当前是课程规划与本地预览包，不是五套已授课或发布的课件。预生成示例不证明真实模型或定时运行。L04 尚无完整 MP4，L05 尚无独立定时触发证据，正式产品内成果入口尚未接通，**成果 Demo 未完成**。

## 2026-10-23 作品重做（Local）

将抽象资料整理案例替换为虚构拾序咖啡品牌。完整作品包含两种客户问题回复、品牌 VI 与可操作的产品官网、四渠道完整内容、五镜 Storyboard、两周各两篇完整草稿及交接。所有互动为确定性本地选择，不调用 AI、不发布、不发送、不下单。视频仍无 MP4，定时任务未执行。

官网嵌入区使用同一组 public 作品，不再缩在说明文字旁的小窗口；高度随作品调整。课程事实、价格、600 分钟安排及 URL 不变。未部署、未触发 CI。

## 2026-10-23 作品质感与完整交付提升（Local）

- 两张由订阅内置 imagegen 工具生成的咖啡品牌概念图，分别覆盖居家奶咖与工位挂耳。不是实拍商品，不生成 JR / Partner Logo。
- 企业助手展示四种完整成果，支持复制和下载；营销区提供可翻页的四张图文，以及不同渠道的阅读版式。
- Brand Guide、四任务成果、Content Pack 与两周工作包均有完整 Markdown 下载。`render_downloads.py` 从 case-study.json 确定性生成，与页面同源；render.py 同步调用。
- 所有交互是本地预生成示例。没有真实 AI 执行、发送、发布、支付或定时任务。MP4 与真实排程缺口继续保留。
