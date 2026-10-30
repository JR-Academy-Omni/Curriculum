# AI Engineer W6 · Tool Calling, MCP & CLI Integration · PRD

版本：2026-10-30，41 页（目录 + 八个部分，第 2–8 部分前各一张过渡页）。依据讲师 Jessie 提供的 W6 课程描述与修订版正文范围，以及 2026-10-30 在对话里确认的大纲。

## 课程定位

第七期 W6 理论 Live，90 分钟。前五周模型只会“看资料、说话”；从这节课开始它要“动手”：查订单、发邮件。

一句话：**模型只提出要调哪个工具；真正去查、去改的，永远是你的代码。**

学完能做到三件事：

1. 说清楚模型怎么用工具：模型只提出调用，程序执行，结果交还给模型。
2. 看懂 MCP：它是什么、谁提供工具、谁使用工具；能看懂一个最小的 FastMCP server 和一份客户端配置。
3. 出问题时会判断：接不上是启动、配置还是输出的问题；守住两条底线：先授权再访问，模拟就说模拟。

## 学习目标

1. 用自己的话说出 tool、tool calling、schema、result、MCP、MCP server、MCP client、stdio 各是什么。
2. 说出 tool calling 的一来一回；知道模型说“已办好”而没有工具调用时，什么都没发生。
3. 说出好的 tool contract：名字和说明要过“实习生测试”（只看名字、说明、参数就能用对）；参数是有类型的业务参数（订单号），不是任意 SQL；结果统一为 `status / data / error`，查不到、没权限、超时各有可识别的失败；schema 校验不代替授权。
4. 区分 tools、resources、prompts，以及 MCP 与普通 API、tool calling、agent 的边界：MCP 是连接规范，不自动给权限，也不要求 agent 循环。
5. 看懂一个 FastMCP server：type hint 变成 input schema，docstring 变成描述；会用 `fastmcp list` 看工具、`fastmcp call` 手动调用。
6. 说出 client 启动本地 server 要的五样东西：command、args、env、working directory、stdio；说出 stdio 的一生：启动 → initialize → tools/list → tools/call → 关闭；知道 stdout 只放协议、日志写 stderr，env 不会自动继承。
7. 看一条启动报错，判断是 command、working directory、env 还是依赖的问题。
8. 说出四道闸：密钥放 env、先授权再访问、工具白名单、写操作人工确认；模拟写操作返回 `simulated`，不返回“已发送”。
9. 说出 Pi 的三层（统一模型接口、agent runtime、coding CLI），知道 Pi 是使用 MCP 的一方，不是写 MCP server 的 SDK。

完成判据：三道 W5 复习题和三个检查点都能在聊天框答对并说出理由。本课不布置作业。

## 已确认范围

- **对象**：第七期 AI Engineer 学员，约 30 人，基础偏弱，有的没有开发经验。**讲师**：Jessie。**时长**：90 分钟，内容压在 85 分钟，留 5 分钟缓冲。**形式**：线上，互动只用聊天框，不分组，不要求学员装任何东西。讲课用中文，术语保留英文。
- **开场（讲师 2026-10-30 要求）**：足迹地图 + 3 道 W5 复习题；接着单独一部分“先打基础”：这节课要解决什么、两页定义、一张总图。后面每部分都指回这张总图。
- **一套类比，贯穿全课（讲师 2026-10-30 要求）**：一家公司的前台客服专员（模型）填工单，交给后台（工具）去办。后台是“只认工单格式的自动办理窗口”，不是会变通的同事；客服专员（模型）和客服系统（MCP client）在总图上分开画。stdio 生命周期、command 与 args 两处在页面上标“类比到此为止”。课件、讲师备注、讲义、逐字稿都用这一套，不引入其他类比。
- **主线例子**：退款客服，合成数据。只读工具 `get_order(order_id, customer_id)`、资源 `policy://refund`、模板 `refund_reply`、模拟写操作 `send_refund_email`（只返回 `simulated`）。代码在 `demo/`。
- **演示**：页面放静态代码和终端输出，全部来自 2026-10-30 本机实测（FastMCP 4.1.4、MCP SDK 2.3.0），见 `research/demo-runs.md`。课上不现场跑代码。只用 FastMCP 一种写法，不混用低层 Server API。正式 starter 由 Practice 那边锁定版本和验收，本课不当作已发布实验。
- **协议版本**：FastMCP 4.1.4 走 2025-11-25 版的 `initialize` 握手（实测 `server/discover` 返回 Method not found）。课上按 `initialize` 讲；2026-07-28 版规范的 `server/discover` 只用一行脚注。
- **stdout**：规范禁止在 stdout 写非协议内容；实测 FastMCP CLI 客户端会悄悄丢掉多出来的一行。页面照实说，不说“一定会断线”。
- **不重讲 W5**；W5 只在开场复习。
- **数据纪律**：终端输出都是实测原文；类比和设想的场景标“教学示例”时不放数字。
- **留到后面**：Remote MCP、OAuth、云部署、集中式 observability（production 阶段）；agent 循环（W7 理论）；项目 Data Layer（W8 Practice）；自主循环（W9 Practice）。

## 类比对照表（全课统一）

| 技术概念 | 在公司里 |
|---|---|
| 模型 | 前台客服专员：听得懂、会说话，碰不到任何系统 |
| Tool | 后台的一个自动办理窗口，只办一件事（查订单） |
| Tool calling | 客服填一张工单交给后台，后台办完写回执，客服再回复客户 |
| Schema | 工单的固定栏位：订单号、客户号必填 |
| Result | 后台回执：办好了附数据 / 查无此单 / 无权查看 / 超时 |
| MCP | 全公司统一的工单规范 |
| MCP server | 按规范接单的后台部门（订单组） |
| MCP client | 派单的客服系统（Claude Code 这类应用里负责连接的部分） |
| stdio | 客服系统和后台之间的一条专用内线 |
| tools / resources / prompts | 能派的工单 / 只看不办的员工手册 / 客服挑着用的回复模板 |
| tool discovery | 部门入驻先交“本部门能办哪些事”的清单 |
| env | 发给部门的门禁卡（密钥）：要随单发，不会自动带过去 |
| working directory | 部门在哪间办公室上班 |
| stdout / stderr | 内线只传工单和回执；值班日志写在别处 |
| 授权 | 工单格式对，后台仍要核对客户有没有资格 |
| allowlist / 人工确认 | 只能派给名单上的部门；动钱的单要主管签字 |
| simulated | 培训演练单，回执写“演练，未真实执行” |
| agent（W7 预告） | 客服自己决定下一张派什么单 |

## 节奏表

| 部分 | 分钟 | 页码 | 页数 | 学员产出 |
|---|---|---|---|---|
| 封面 + 目录 | 0–2 | 1–2 | 2 | — |
| 1 开场 | 2–8 | 3–6 | 4 | 看清学到哪；聊天框答三道 W5 复习题 |
| 2 先打基础 | 8–17 | 7–11 | 5 | 能用大白话说出八个词 |
| 3 Tool calling | 17–32 | 12–19 | 8 | 检查点 1：退了吗 |
| 4 MCP | 32–42 | 20–24 | 5 | 检查点 2：三样东西各是哪种 |
| 5 FastMCP | 42–51 | 25–28 | 4 | 看懂 server、schema、手动调用 |
| 6 接进 CLI | 51–67 | 29–34 | 6 | 检查点 3：四条报错各是哪类 |
| 7 安全与真实结果 | 67–75 | 35–37 | 3 | 能说出四道闸和 simulated |
| 8 边界与后续 | 75–85 | 38–41 | 4 | 知道 Pi 的边界和后续 |
| 缓冲 | 85–90 | — | — | 答聊天框问题 |

## 逐页规格

格式：页码 · 文件 · 标题｜页面上有什么｜讲师提示。过渡页（C02–C08）用同一个目录组件。

1. **S01_Cover** · Tool Calling & MCP｜“模型只提出要调哪个工具；真正去查、去改的，永远是你的代码。”；讲师 Jessie
2. **S01b_Agenda** · 今天的目录｜八个部分
3. **S02_Footprint** · 我们走到哪了｜W1–W5 打勾（W5：四类失败 · golden case · 单变量实验）；W6 “你在这里”｜从“模型看到什么”进入“模型能做什么”
4. **S03_Q1** · 复习 1：引用了作废的 v1，是哪类失败？｜R / G / C / N｜C
5. **S04_Q2** · 复习 2：faithfulness 满分，说明答对了吗？｜能 / 不能，它不看证据过没过期 ✓
6. **S05_Q3** · 复习 3：同时改了两样，3 道题全修好，是谁的功劳？｜overlap / top-k / 说不清，无法归因 ✓
7. **C02** · 第 2 部分 · 先打基础
8. **S06_Why** · 这节课要解决什么｜左：以前，家属问订单到哪了，模型只能编；右：今天，它能真的去查；底：能动手就可能闯祸，所以先学安全地动手｜三个学完能做到
9. **S07_Terms1** · 先认识 4 个词（上）｜Tool、Tool calling、Schema、Result：每行 术语 · 大白话 · 在公司里
10. **S08_Terms2** · 先认识 4 个词（下）｜MCP、MCP server、MCP client、stdio
11. **S09_BigPicture** · 一张图串起来｜上排公司：客户 → 客服专员 → 客服系统 → 内线 → 订单组窗口 → 回执；下排技术：用户 → 模型 → MCP client → stdio → MCP server / tool → result｜后面每部分指回这张图
12. **C03** · 第 3 部分 · Tool calling
13. **S10_RoundTrip** · 一来一回｜① 模型：调 get_order，order_id=A1024 ② 你的代码执行 ③ result 送回 ④ 模型回复客户｜模型自己从不执行
14. **S10b_Request** · 模型写出来的，只是一张条子｜Anthropic API 的 tool_use 格式示例（name = get_order，input = order_id、customer_id）；右边三步：程序执行 → 结果塞回对话 → 模型才回复｜程序没执行，就什么都没发生；来源 Anthropic tool use 文档
15. **S11_Check1** · 检查点 1：退了吗？｜助手：“已为您办理退款”；记录里没有任何工具调用｜没退，模型只是说了一句话
16. **S12_TypedParams** · 工单栏位要固定｜好：`get_order(order_id: str, customer_id: str)`；坏：`run_sql(query: str)`｜不让模型写任意 SQL
17. **S12b_InternTest** · 实习生测试｜只给新实习生看名字、说明、参数：`do_stuff(data)` 看不懂；`get_order(order_id, customer_id)` + 示例 server 的 docstring 一看就会用｜实习生看不懂的说明，模型也看不懂；来源 OpenAI function calling 指南 “Pass the intern test.”
18. **S13_Result** · 回执要能看懂｜三条实测回执：ok / not_found / forbidden；超时也要有自己的 code｜不能都变成一句“出错了”
19. **S14_AuthZ** · 栏位填对了，不等于有权限｜C001 查 A2048：格式完全合法 → `forbidden`；少填一栏 → schema 直接拦下｜schema 管格式，授权管资格，先授权再访问
20. **C04** · 第 4 部分 · MCP
21. **S15_WhyProtocol** · 为什么要一个统一规范｜没有规范：N 个客服系统 × M 个部门，两两约定；有规范：各对齐一次｜工单规范
22. **S16_ThreeKinds** · 后台提供三种东西｜tools 能派的工单（模型决定用）/ resources 员工手册（应用决定给）/ prompts 回复模板（用户挑）
23. **S17_Check2** · 检查点 2：各是哪一种？｜退款政策文档 / 查订单 / 退款回复模板｜resource / tool / prompt
24. **S18_NotMCP** · MCP 不是什么｜不是某个部门自己的窗口（普通 API）；接上规范 ≠ 什么单都办（不给权限）；规范只管单怎么传，不管客服会不会主动派单（不是 agent）
25. **C05** · 第 5 部分 · FastMCP
26. **S19_Server** · 一个只读的后台部门｜`demo/refund_server.py` 关键几行：`FastMCP("refund-desk")`、`@mcp.tool def get_order…`、`@mcp.resource("policy://refund")`｜只用 FastMCP 一种写法
27. **S20_Schema** · 类型注解，自动变成工单栏位｜左：函数签名 + docstring；右：实测 inputSchema（required 两项）
28. **S21_ManualCall** · 不用模型，也能先试一单｜`fastmcp list` 实测输出（2 tools、1 resource、1 prompt）；`fastmcp call … order_id=A1024 customer_id=C001` → ok｜先确认窗口本身没问题，再交给模型
29. **C06** · 第 6 部分 · 接进 CLI
30. **S22_Config** · 让部门开工，要讲清五样｜command、args、env、working directory、transport=stdio；左：Claude Code `claude mcp add … -e … -- …`（没有 cwd，用绝对路径）；右：`mcpServers` 配置（有 cwd）｜command / args 这里类比到此为止
31. **S23_Lifecycle** · stdio 的一生｜client 启动 server 进程 → initialize（交能力清单）→ tools/list → tools/call → client 关掉，server 跟着结束；脚注：2026-07 新规范改为 server/discover，FastMCP 4.1.4 尚未实现｜这里类比到此为止：部门是被临时叫来的
32. **S24_Stdout** · 内线上只能传工单｜规范：stdout 只能有协议消息；实测：多一行 print，FastMCP 客户端悄悄丢掉、不报错；别的客户端不一定｜日志写 stderr，FastMCP 的启动横幅本来就写在 stderr
33. **S25_Env** · 门禁卡不会自动带过去｜shell 里 export 了，server 仍报 `KeyError: 'ORDERS_API_TOKEN'`；原因：client 只传白名单环境变量｜密钥写进配置的 env
34. **S26_Check3** · 检查点 3：这条报错是哪一类？｜四条实测报错：`No such file or directory: 'python'` / `can't open file '//refund_server.py'` / `KeyError: 'ORDERS_API_TOKEN'` / `No module named 'fastmcp'`｜command / working directory / env / 依赖
35. **C07** · 第 7 部分 · 安全与真实结果
36. **S27_Gates** · 四道闸｜密钥放 env，不写进代码和 args；先授权再访问；只开放白名单工具；写操作前人工确认
37. **S28_Simulated** · 演练单，就写演练｜实测 `{"status": "simulated", … "演练：没有真的发出邮件"}`；对比错误示范 `{"status": "sent"}`｜否则日志和 trace 都在说谎（W10 要用）
38. **C08** · 第 8 部分 · 边界与后续
39. **S29_Pi** · 拿 Pi 对照三层｜pi-ai 统一模型接口 / pi-agent-core agent runtime / pi-coding-agent coding CLI；Pi 2026-09 起内置 MCP 支持，是用 MCP 的一方，不是写 server 的 SDK
40. **S30_NextMap** · 接下来｜W7 理论：客服自己决定下一张单（agent loop）；W8 Practice：项目 Data Layer 接 MCP；W9 Practice：自主循环；以后：Remote MCP、OAuth、云部署、集中观测
41. **S31_End** · 收尾｜“模型只提出调用；执行、授权和说真话，是你代码的责任。”

## 发布范围

讲师 2026-10-30 说“可以 做吧”：授权 PRD、课件、配套资料、本地 build 和 QA、登记 `lessons.html` 与 `CHANGELOG.md`、`deploy.yml` 构建步骤。讲师 2026-10-30 说“可以了 部署吧”：授权 commit、PR、合入 main 与生产部署。示例代码 `demo/` 不上线。
