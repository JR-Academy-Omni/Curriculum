# 创业财税与合规进阶课 · QA

## 状态

Local / 已构建验证 / 待 PR 合并部署

## 检查记录

- 构建结果：2026-10-29 使用模板依赖完成 TypeScript 与 Vite 生产构建。
- 登记及资源检查：Lesson 目录卡片、部署 build/copy 步骤与 30 张本地资源均已登记。
- 浏览器逐页 / 三档视口：Curriculum 版本已检查首页、末页、直达页参数与 30 页计数；完整三档自动截图待 PR 检查。
- 内容、图表、Logo 目视核验：已抽查封面、课程地图、数据页、案例页、总结页和资料页。
- 外网阻断与字体：模板使用本地 Fontsource；页面主体为本地静态图片。
- 讲师备注 / 打印：原稿未提供讲师备注，备注数组留空；打印使用模板引擎。
- reduced-motion：内容组件遵循 prefers-reduced-motion。
- 线上回读：PR 合并与部署后执行。

## 运行时偏离模板

无。SlideEngine、CameraBubble、ui、theme 与 main 均来自 lessons/_template。

## 缺口与负责人

- PR 合并后核验线上 Lesson 列表和课件入口。
# 2026-10-29 · Talk Deck 重构验收

- [x] 30 页不再通过 `OriginalSlide` 渲染整页 PNG。
- [x] 原稿文字已从 PPTX XML 提取并转为 HTML/React 内容。
- [x] 封面、六卡高密度页、深色章节页和第 30 页完成浏览器目视检查。
- [x] Logo 进入 Vite hashed asset，浅色和深色页面均可见。
- [x] `tsc -b` 与 `vite build` 通过。
