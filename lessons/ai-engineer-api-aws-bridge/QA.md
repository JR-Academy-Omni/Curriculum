# AI Engineer 工程衔接补充课 · 本地验收

## 当前修订：62页、51页分步图解、210分钟

Firewall第34页，紧接VPC网络。展示流量特征、允许规则与阻止分支，解释SG Allow-only/Stateful与WAF，讲义notes另述NACL和应用授权。已目视桌面截图，三档视口3项图解检查通过；首页21项跳转/资源/62页打印回归通过，定向复核通过。构建、目录与canonical运行时检查通过。未执行防火墙命令、未修改任何真实网络，未部署、未触发CI。证据out/visual-qa/1366-page-34.png、final-targeted-report.json与out/home-qa/report.json。



## 首页二次重设计

Owner否定旧卡片式首页后重新制作：全幅夜间Hero、顶部浅色品牌栏、巨型课程标题、三个立体技术栈层和轻量章节文字导航；移除白色导航卡与小框图。保留课程名、内容规模、章节与讲义真实入口。21项首页检查通过，已目视1366px实际截图；三档视口、CTA、query保留、6个章节、讲义与61页打印通过。证据out/home-qa/report.json与截图。受保护运行时未改，无部署或CI。



## 上一轮修订：61页、50页分步图解、210分钟

CI/CD新增第52–55页：分工、前后端/IaC三泳道、环境晋级与配置隔离、发布验证及回滚。新增页12项三档视口检查通过；首页21项和动画/61页50图打印12项回归通过。补全CI/CD英文全称、移开与产物连线重叠的标签后，第52/54页6项定向复核通过。构建、课件目录、资源引用及运行时哈希检查通过，所有新增页桌面已目视。证据out/visual-qa/、out/home-qa/与out/build-release.log。未编辑或执行真实workflow，未启动runner，未部署，未触发CI。



## 首页修订

第1页改为独立课程Hero：完整课名、定位、动态课程规模、浏览器/API/数据架构主视觉、官方技术标识、进入课程与讲义入口、6个章节跳转。21项检查通过：1366/1920/390px截图和边界、资源与异常、CTA打开完整成果、保留其他query参数、6章节跳转、讲义入口、57页打印与主视觉完整路径。证据out/home-qa/report.json及同目录截图。初轮CTA检查读到了切页过渡中的旧标题，改为等待实际目标标题后验证，通过。未改canonical运行时，未改课时或正式排课。



## 上一轮修订：57页、46页分步图解、210分钟

新增第39页Infrastructure as Code，讲Terraform/CloudFormation、Plan/Change set、Review/Apply、State与应用代码/Dockerfile/CI/CD职责。HTML构建、三档视口（1366/1920/390）图解边界与文字检查、目录检查通过，已目视桌面图。配套讲义/工作单/参考解答同步。未执行基础设施命令，未创建云资源，未部署或触发CI。



## 上一轮修订：56页、45页分步图解、210分钟

- Owner明确要求多agent：Logo、System Design数据与完整讲义分别完成，root负责整合与验证。
- Nginx与Node.js独立进程关系在第13页，Request/Response/API Contract术语在对应页和讲义中统一。
- System Design第39–48页，Message Queue第42页，Docker第50页。包含Latency/Throughput、AI延迟分段、Sync/Async、MQ、Job status、Retry/Idempotency、Cache、Backpressure、总体架构和Stateless/Availability。
- 21个官方Logo资产有来源与SHA-256；按实际技术对象使用，Docker不泛指ECS/Fargate。
- 45页×3视口共135项图解检查，无文字越界／重叠或控制台异常；root目视发现总体架构Worker说明与底部面板靠近，已另外移位并做定向复核。
- 12项动画、单步、重播、键盘、低运动与56页/45图打印检查通过。
- 最后复核第42/44/47页；AI call标签曾与AI服务说明靠近，已移位；第47页三档视口再检0问题。21个构建后的Logo资产逐个回读200且XML有效。
- 多agent只读技术review未发现文字重大事实错误；指出Timeout返回箭头和Worker调用AI的图面歧义，root已改为调用方未收到Response、补Worker→AI依赖，并同步notes。
- 完整System Design讲义14节，1440/390px布局、导航和noindex已检查。
- 本地运行；未提交、推送、部署，未触发CI；未运行模型API、队列、云资源或真实文档生成。图解不作为生产架构或性能证据。

以下保留前轮验收记录。

## 上一轮修订：45页，34页图解（2026-11-01）

- 新增HTML/CSS/JavaScript、React组件、JavaScript与Node运行环境、技术栈分层、页面加载与API调用、构建与生产、Web Server七页，置于API之前。
- 图解含运行对象剖面、请求信封、双向数据流、CORS泳道、保存状态机、AWS嵌套网络、权限分支和排障树。方向与节点按语义设计，不将DNS/证书伪画成串行转发节点。
- 34页 × 1366×768、1920×1080、390×844 共102项图解检查，无文字越界、文字重叠或控制台异常，见out/visual-qa/report.json。
- 最后修订的React状态标识、JS运行环境、HTTP列表请求、AWS支撑关系和IAM拒绝符号另做15项定向视口检查，0问题，见out/visual-qa/final-targeted-report.json。
- 12项动画与控制检查通过：暂停、单步、键盘操作、重播、自动停止、低运动终态、45页/34图打印、打印完整路径与文字。见out/visual-qa/controls-report.json。
- 首轮图解检查发现身份图文字和VPC图标签重叠，已修复并重新检查。
- 动画初态/中态/终态和打印证据：out/visual-qa/animation-start.png、animation-middle.png、animation-final.png、print-diagram.png。
- 当前45页已回归27项HTTP/保存重读/隔离/导航检查，以及23项构建包、字体、手机和打印检查，全部通过；报告位于out/qa/。
- 以下为前一轮38页版本的验收记录；当前页数与图解数据以上述修订为准。

## 前一轮材料验收记录

日期：2026-11-01。状态：本地材料及教学实操验收完成；未部署、未触发 CI、未提交或推送。

## 完整成果与入口

- 38 页 HTML Talk Deck： http://127.0.0.1:8047/slides/?page=1 （已构建）；开发预览 http://127.0.0.1:8046/?page=1 。
- 完整护理记录与 HTTP 实操： http://127.0.0.1:8047/ 。入口直接展示完整晨间记录，可新增、保存、刷新重读，从列表再打开；接口面板和日志可操作。
- 完整讲义： http://127.0.0.1:8047/materials/handbook.html 。
- 工作单与解答：同目录 worksheet.html / answers.html 。
- 数据位置：lab/server.py 的 SEED；会话数据位于 out/lab.sqlite3；人工课程数据，不是真实患者或学员成果，不是既有 CareKind 部署。

## 已执行验证

- `bun run build`：TypeScript 与 Vite 构建通过，记录在 out/build.log。
- canonical runtime manifest 的全部 7 个文件哈希与模板一致，无运行时修改；JR Craft 样式仅在内容层。
- 官方逐页 QA 脚本使用现有 Google Chrome executablePath 执行：38 页 × 1366×768、1440×900、1920×1080 共 114 项，0 失败。原默认 Chromium 版本未安装，未下载或改变共享 QA 脚本；适配脚本位于 out/qa/run-qa.mjs。
- 27 项学习流程检查通过：入口完整内容、真实 201 保存与刷新重读、400/401/403/404、恢复正常、独立 API 请求、真实日志、两个会话间读取隔离及重置隔离、跨来源写入拒绝、无会话 API 拒绝、资料入口与 noindex、390px 手机无横向溢出、URL 刷新、键盘导航、N 备注、P 全 38 页。
- 23 项构建包检查通过：production base 下的 8 张重点页与内容边界、资源加载、阻断外网后的本地品牌字体、流程动画终态、390px 工具栏、打印时全部页面及节点、构建后的讲义入口。
- 独立 Python 进程重启验证：SQLite 记录与原会话可在重启后读取。
- 最后回读：修订后 P26/P32；实际保存中的 disabled 状态、保存成功、400 错误、输入 focus 状态均已查看并留图。
- 已回读课件、练习与讲义 noindex HTML 和 X-Robots-Tag；练习服务根 robots.txt 禁止抓取。未发索引请求，无 GA/GTM。此处不声称改变线上根 robots。
- `check-talk-decks.py --slug ai-engineer-api-aws-bridge` 与新课件校验通过，目录结构为 51 张卡片；登记入口、配套资源、未来静态构建／复制配置存在。
- 目视查看全 38 页 contact sheet，重点看完整成果、AWS 架构、网络、职责对照、诊断、封面，以及手机实操／手机课件。修正了手机工具栏遮挡、DNS/证书串行误读、身份与 IAM 混为同一链路、排障结果被串起来的问题。

## 证据

- out/qa/report.json：114 项逐页／视口检查。
- out/qa/learning-report.json：27 项学习、隔离、资料与导航检查。
- out/qa/package-report.json：23 项已构建包与打印检查。
- out/qa/：逐页桌面图、contact-sheet.jpg、deck-mobile.png、lab-desktop.png、lab-mobile.png、handbook-mobile.png、motion-middle.png、motion-end.png、print-preview.png、lab-loading.png、lab-error.png、lab-focus.png。

## 范围与剩余边界

- AWS 是官方资料支持的教学拓扑，未创建、登录或验证真实云资源。CORS、数据库网络与 IAM 故障为图解诊断材料，未声称本地实操产生过这些云端故障。
- 实操真实执行 HTTP、SQLite、隔离会话与业务角色检查。它是本课专用应用；角色切换是受控练习机制，不能作为生产鉴权范式。故障选择器改变请求条件，不冒充已修改源码。
- 静态发布只承载课件和资料；HTTP 练习需要在学员电脑启动 Python 服务。课程包附已构建 dist 和启动命令，无需重新安装前端依赖即可查看。
- 尚未上课，未验证学员真实项目、学习通过率或现场时间表现。讲师、日期和正式课次待排课，未改现有 W4。
- 摄像头不属于本次教学依赖，未请求真实摄像头权限。
- 无 PDF/PPTX、付费模型调用、云资源创建、Git 提交／推送、CI/CD 或部署。未来部署时仍须核实 runner 与发布授权，并更新目录的本地预览入口。

## 2026-11-01 · CORS Console

49项检查通过：三种视口×五个页内状态、英文全称、红字、无溢出及说明区域遮挡、URL/刷新/后退/键盘保持状态、62页打印及错误内容。证据 out/cors-qa/report.json 与截图；已目视桌面 Missing header 和手机 Credentials。实际浏览器捕获与正常200读取见 research/cors-console.md。旧范围说明中“CORS仅图解”已由本次本机捕获补充；不涉及云端故障。

## 2026-11-01 · Message Queue实体消息动画

25项生命周期与展示检查通过：4条持续等待、一条In flight与3条等待、失败重新可见、逐条确认到4条完成、直调分支3个请求失败、暂停/单步/重播、URL/后退/刷新、低动态终态、桌面及390px手机、62页打印保留生命周期、无运行时异常。报告out/queue-qa/report.json，逐状态截图同目录；已目视处理中桌面、直调终态与手机终态，并修正直调失败卡片与文字重叠。仅内容层、无云资源或真实任务调用。

自动推进、暂停保持、恢复播放另行通过，证据out/queue-qa/autoplay.json。

## 2026-11-01 · 首页整体重新设计

第三次反馈后整体重做首页，移除旧深色Hero与立体薄片。30项新版检查通过：1366/1920/390三种视口、新标题与Logo、六章导航、开始打开完整成果、讲义200及完整内容、焦点状态、无运行时错误、正文与章节区无重叠、62页打印含新版首页。截图out/home-redesign/，报告report.json。已实际查看桌面和手机截图，首页文字立即可见，不依赖延迟淡入。7个canonical运行时文件哈希未修改。本地已修改，未部署，未触发CI。

## 2026-11-01 · Agent Runtime

73项内容与回归检查通过：新增4页三档视口、SVG横向边界、低动态终态、暂停单步与重播、66页打印；首页、CORS、IaC、System Design、Queue、Docker及排障入口可读，消息队列互动保留。已实看4页桌面截图；报告out/agent-runtime-qa/report.json。来源research/agent-runtime.md。7个运行时文件哈希保持不变。无AWS资源创建或模型调用，本地未部署，未触发CI。
