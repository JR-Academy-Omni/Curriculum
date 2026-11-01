# AI Engineer W6 · Tool Calling, MCP & CLI Integration

41 页理论课课件，90 分钟，线上互动只用聊天框。讲课用中文，术语用英文。页面给学生看：一页一件事。第 2 页是目录，全课分八个部分（开场、先打基础、Tool calling、MCP、FastMCP、接进 CLI、安全与真实结果、边界与后续），第 2–8 部分开始前回到目录。全课只用一个类比：前台客服专员（模型）填工单，交给后台的自动办理窗口（工具）。本课不布置作业。

```bash
bun install --frozen-lockfile   # 或 npm install --no-package-lock
bun run dev
bun run build
```

方向键或空格翻页；F 全屏；V 摄像头；N 讲师备注；P 打印视图；`?page=N` 定位。引擎与 `lessons/_template` 一致，见 `engine-manifest.json`。

- `PRD.md`：课程定位、学习目标、类比对照表、节奏表、41 页逐页规格（讲师 Jessie）。
- `RUNSHEET.md`：讲师流程、答案速查、被问到时怎么答。
- `WORKSHEET.md`：讲义（八个词、tool_use 条子、tool contract 与实习生测试、三种能力、五样配置、四条报错、四道闸、面试检查）。动手代码指向 Practice 的正式 starter，`demo/` 不上线。
- `SOURCE_MAP.md`：逐页来源。`research/demo-runs.md`：本机实测的命令和输出原文。
- `demo/`：课件演示用的只读 MCP server（合成数据），不是正式 starter。
- `QA.md`：验收记录。
- `src/components/slides/_shared.tsx`：内容层共用零件（从 W5 复制，文末是 W6 新增：三列定义表、终端框、代码框、总图）。
