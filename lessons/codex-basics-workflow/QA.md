# Codex 基础功能与工作流 · QA

## 状态

Published / 本地与线上验证通过

## 检查记录

- 构建结果：2026-11-23 `npm run build` 通过（TypeScript + Vite）。
- 登记及资源检查：已登记 `lessons.html`；17 页、封面资源与官方链接完整。
- 浏览器逐页 / 视口：本地 1280×720 缩放走查；首屏与高密度总结页目视通过。
- 内容、图表、Logo目视核验：JR Academy 引擎 Logo 正常；封面图片、卡片与页码正常。
- 外网阻断与字体：字体随构建打包；课件主体不依赖外网，参考页链接仅在主动点击后打开。
- 讲师备注 / 打印：17 条备注已配置；打印入口由标准引擎提供。
- reduced-motion：沿用标准引擎与 Framer Motion 的 reduced-motion 支持。
- 线上回读：2026-11-23 部署流水线成功；入口、JS、CSS、封面 PNG、Logo SVG 与 `?page=17` 均返回 HTTP 200。

## 运行时偏离模板

无。`SlideEngine.tsx`、`CameraBubble.tsx`、`ui.tsx`、`theme.ts`、`main.tsx` 均未改动。

## 缺口与负责人

- 讲师姓名尚未提供，目录暂标“待确认”。
