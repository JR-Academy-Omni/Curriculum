# Skill Workshop Web

JR Academy · 半天课《Build Your First Claude Skill · 30 分钟从零到上线》的网页版 PPT。

## 启动

```bash
npm install
npm run dev
```

浏览器会自动打开 `http://localhost:3030`。

## 操作

- **键盘**：`←` / `→` 翻页，`Space` 下一页，`F` 全屏，`O` 章节总览
- **演讲者模式**：右下角点击或访问 `/presenter`
- **导出 PDF**：`npm run export:pdf`

## 项目结构

```
skill-workshop-web/
├── slides.md           # 主入口，35 页内容
├── layouts/            # 自定义 layout
│   ├── cover.vue
│   ├── chapter.vue
│   └── checklist.vue
├── style.css           # Mars Lab Zine 风主题
├── public/             # 静态资源
└── components/         # 互动组件（v2 添加）
```

## 视觉风格

参考根目录 `design.md`：米白底 / 黑墨字 / 高亮黄 / 朱红点缀，中英混排，工程档案感。

## 内容来源

- 《The Complete Guide to Building Skills for Claude》(Anthropic 官方 PDF)
- [Agent Skills 官方文档](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview)
- 项目内 `PRD.md`（v1.0）
