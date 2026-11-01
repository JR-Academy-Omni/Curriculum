# 从 AI Coding 到应用跑通：前端、API、后端与 AWS

66 页 HTML Talk Deck，225 分钟；讲义、英文工作单与解答、真实 HTTP/SQLite 实操。

## 查看已构建课件

执行 `python3 lab/server.py` 后，打开 http://127.0.0.1:8047/slides/ ，即可查看已构建课件与全部资料；同一服务的根路径为 API 实操。macOS 可运行 `启动课程.command`。只需要 Python 3，不需要重新安装前端依赖。

## 编辑与本地启动

本目录运行 `bun install`，然后在两个终端分别运行：

```sh
bun run dev -- --host 127.0.0.1 --port 8046 --strictPort
python3 lab/server.py
```

- 课件：http://127.0.0.1:8046/?page=1
- API 实操：http://127.0.0.1:8047/
- 讲义：http://127.0.0.1:8046/materials/handbook.html
- 工作单：http://127.0.0.1:8046/materials/worksheet.html
- 参考解答：http://127.0.0.1:8046/materials/answers.html

`bun run build` 生成静态课件与资料。`lab/server.py` 是独立 loopback 教学服务；静态部署不提供其 HTTP/SQLite 能力，不要仅上传 lab.html 就宣称练习已可运行。学员需在自己的电脑启动该服务。

无 PPTX。P 可打印全页同一 HTML，浏览器可另存 PDF 到 Downloads。N 讲师备注、F 全屏、箭头翻页；手机竖屏等比投影，长文和工作单另有响应式页面。

## 接口工具命令

先在终端建立独立会话，cookie jar 只保存在本机临时文件，不分享其值：

```sh
jar=$(mktemp)
curl -s -c "$jar" http://127.0.0.1:8047/ -o /dev/null
curl -s -b "$jar" http://127.0.0.1:8047/api/notes
curl -s -b "$jar" -H 'Content-Type: application/json' -d '{"residentId":"resident-001","activity":"Check-in","note":"Resident requested a quieter room. Preference recorded."}' http://127.0.0.1:8047/api/notes
```

真实 HTTP 请求、会话隔离、SQLite 保存、400/401/403/404 与请求 ID；没有 AWS 资源、生产系统或 AI provider 调用。数据性质和教学拓扑见 SOURCE_MAP 与 RUNSHEET。验收见 QA.md。

55页提供可暂停、单步和重播的图解动画；第6–13页专讲HTML/CSS/JavaScript、React、Node.js、后端框架、构建与Web Server。

System Design模块第40–49页（Message Queue第43页）；Docker图解第51页；Nginx与Node关系第13页。完整讲义：public/materials/system-design.html。官方技术Logo存于public/technology-logos，内部来源见research/technology-logos.md。

IaC图解第39页：配置→预览→Review→Apply与云资源，区分应用代码、Dockerfile和CI/CD。

首页为独立S01_Lesson.tsx课程Hero，包含章节跳转与讲义入口。后续新增分页时保留此组件，不用通用页面包装覆盖封面。

CI/CD第52–55页：CI/CD边界、三条交付路径、产物晋级与环境隔离、部署验证与回滚；课程仍建议210分钟。不运行任何pipeline。

Firewall第34页；该页之后所有内容顺延1页，当前准确页码以SOURCE_MAP.md和首页导航为准。

P24 独立组件 S24_Lesson.tsx 展示 CORS 英文全称、三类 Console 红字、正常响应和原理动画。后续生成页面须保留 S01 与 S24。复现报错可运行 python3 lab/cors_server.py（8050）；正常看课件无需此服务。

P44 Message Queue使用独立MessageQueueStage组件：消息逐条等待/处理/确认、Worker失败重新投递、无队列突发直调对照；参数mq保存过程选择，暂停/单步/重播及打印生命周期。

首页最新修订（2026-11-01）：浅色编辑式布局、大标题、完整应用窗口主视觉、API/云端关系、整幅深色六章导航，替换旧深色立体薄片Hero。

最新页码：Agent Runtime P41–44；System Design P45–54（Message Queue P48）；Docker/CI/CD P55–60；排障P62–64。66页、55页分步图解、225分钟。章节导航、配套讲义与完整内容入口已同步。
