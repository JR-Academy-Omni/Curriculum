# /xhs-poster — 课程小红书封面 + 配图生成器

为 bootcamp 课程生成一套小红书聚光投流素材（20+ 张），浏览器打开一键下载 PNG。

## 使用方法

```
/xhs-poster ai-engineer-bootcamp
/xhs-poster ai-adoption-bootcamp "30天用AI提效"
```

## 参考实现

- **AI Engineer Bootcamp**: `curriculum/ai-engineer-bootcamp/public/xhs-posters/index.html`（22 张）
- 详细 spec: `curriculum/.claude/skills/xhs-poster/SKILL.md`

## 关键规格

- 尺寸: 1242×1660 竖版（锁死）
- 设计: Neo-Brutalism + 品牌四色
- 导出: html2canvas @2x PNG
- 合规: 无二维码 / 无绝对化用语
- 数量: 不限，从 curriculum.html 尽可能多挖素材
