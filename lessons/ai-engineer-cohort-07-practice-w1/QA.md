# 本地验收 · 完整迁入版 · 2026-10-04

状态：Local verified；86 页，未部署、未 commit/push 或学生平台同步。24 页初稿验收已被本记录取代。

- TypeScript + Vite production build 通过；App 实际注册 86 页。Vite 提示单 bundle 586 kB 超过 500 kB 建议阈值，gzip 170 kB；构建成功。
- 86 页 × 1600×900、1280×720、390×844，共 258 次浏览器检查。发现 P32 关系图底部、P38 PRD 模板溢出，调整 P32 间距及 P38 双栏完整模板后，三视口共 6 次复查通过。合并结果无画布文字越界、内部裁切、图片加载失败、JS 异常或 HTTP 失败。
- 86 页桌面截图通过 contact sheet 逐页目视检查；重点单页复查封面、SoT、AI OS、产品示例、数据关系、PRD、Rules、Review 与延伸页。白底白字问题在课程内容组件中修正；19 个暗底页补做文字/背景近似同色检查及截图，未发现同色文字。
- 原页面/组件样例点击切换通过。规则清单复制的实际剪贴板内容与反馈通过；模拟拒绝写入时给出手动选取提示，无未捕获异常。
- ArrowRight / ArrowLeft、最后一页边界、`?page=86` 深链及刷新、F 全屏通过。
- SlideEngine、CameraBubble、ui、styles/theme、main 与 `_template` 字节一致；Logo 与官方 `jr-academy-brand/assets/logo/logo-zh-full.svg` 一致。
- 每页迁入来源登记在 SOURCE_MAP.md / source-map.json；课件卡片、构建部署配置和两处 CHANGELOG 已更新。git diff --check 通过。

浏览器扫描数据见本地 QA-results.json（按仓库忽略规则未入库）；截图与调试脚本保存在本机 /tmp/ai-engineer-w1-full 和 /tmp/ai-engineer-w1-qa。首轮三标签并行截图受到背景动画节流影响，已废弃，以单标签顺序扫描及最终截图为准。

## 验收边界

这是课件本地显示与交互验收。真实 CareKind starter 的启动、业务功能、测试与代码 walkthrough 尚未在本任务中验收，讲师需按 RUNSHEET 课前核查。摄像头真实权限/画质、公开部署与学生平台同步未测；未制作视频、TTS 或 PDF。

手机采用模板 1600×900 画布等比缩放；完整课件建议桌面或横屏放映，缩放通过不等于手机正文阅读体验。86 个底部页点密集，现场建议方向键、侧边箭头或 `?page=N` 跳页。

## 独立周次补充验收

W1封面改为明确W1标识，重新构建通过；封面三视口复查无裁切、图片或页面异常。W2、W3放映列表、页码、工作单与构建均在各自目录独立注册。
