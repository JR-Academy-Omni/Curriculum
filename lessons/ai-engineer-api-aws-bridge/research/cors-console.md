# CORS Console capture · 2026-11-01

P24 的三类英文消息由本机 Chrome 实际 fetch loopback 8050 fixture 捕获；数据见 src/data/cors-observed.json，捕获脚本 out/cors-qa/capture.mjs。页面是可编辑 DOM 重绘，不是 DevTools 截图；颜色遵循课程 danger token。浏览器版本和主题会影响显示。8050 仅固定 JSON、无外部请求或业务写入。正常案例实际返回 200 且 JavaScript 可读取 JSON。课件浏览不依赖 fixture 运行。

复现：启动 8046 Vite 与 python3 lab/cors_server.py，再运行捕获脚本。OPTIONS 204 无响应体。

官方依据：
- https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CORS/Errors
- https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CORS/Errors/CORSMissingAllowOrigin
- https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CORS/Errors/CORSPreflightDidNotSucceed
