# 本地验收 · 2026-10-30

- 24 页 Talk Deck，从 canonical `_template` 复制；共享引擎 manifest 内所有文件逐字一致。课程内容层使用 JR Craft token；深色页使用官方白色 Logo。导航/备注的样式覆盖在课程 CSS，未改共享运行时。
- 完整 v7 的 205 个材料文件放在 `materials/`，`public/materials` 为指向它的相对软链接，使 Vite 开发及构建使用同一份内容。包含 18 个办公案例、完整 HTML/Markdown 授课稿、视频流程与 Skills/双引擎教材及 11 个文字输入/任务卡。
- `bun run build` 通过；dist/materials 的 CSS 与资料复制已核对。Vite 对 HTML 中 BASE_URL 公共 CSS 给出构建时解析提示，文件确实复制到 dist，开发浏览器加载无 404。
- `python3 scripts/check-talk-decks.py --slug codex-ai-video-workshop` 通过：50 张平级目录卡；当前课件登记与模板 manifest 验证通过。
- 本地 1366×768、1920×1080、390×844 下共 72 个逐页边界检查通过，无页面错误/资源失败；保存截图并实际查看封面、数字案例、图片对照、安装页与手机完整阅读稿。按摄像头默认关闭运行，不请求设备权限。
- 实际验证 ?page 深链、键盘前进、刷新保持页码、打开备注、从课件打开真实案例；阅读页手机无横向溢出。最初键盘检查在 hydration 前发送，等待运行时稳定后重测通过；未改引擎。
- 本地 HTTP 响应含 `X-Robots-Tag: noindex, nofollow`；新增主 HTML 与复制的材料 HTML 均保留 robots/googlebot noindex,nofollow。未新增 GA，不加入 sitemap。
- 未生成 PDF/PPTX/MP4，未调用模型/媒体 API，未运行两套视频引擎或真实学生全程试课。原素材性质、预生成示例、历史音频来源与许可记录全部保留。
- 只新增本课目录、登记 `lessons.html` 和追加 changelog；保护本仓库已有未提交改动。没有提交、推送、CI/CD 或部署；未改既有 workflow。生产域名根 robots、响应头、目录上线与构建集成未在本任务验证，不能声明已上线。
- 未创建或合并临时 worktree，无需清理。本地预览在 `http://127.0.0.1:4318/`；内部证据位于主工作区 `artifacts/codex-office-course-20261030/evidence-curriculum/`。
