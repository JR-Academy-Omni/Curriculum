# WORKFLOW — AI Adoption Specialist Bootcamp

## Production IDs

| 实体 | ID | 说明 |
|------|-----|------|
| Training | `69d33dff770e889d1d63097a` | 课程主体 |
| Program | `69d33e00770e889d1d630a12` | 第一期项目 |
| Syllabus | `69d33e00770e889d1d630a1a` | 教学大纲 |
| Module 1 | `69d33dff770e889d1d63097d` | Phase 1 — AI 工具精通 + 角色定位 |
| Module 2 | `69d33dff770e889d1d6309bd` | Phase 2 — 业务场景实战 |
| Module 3 | `69d33dff770e889d1d6309c4` | Phase 3 — 组织 AI 采纳方法论 |
| Module 4 | `69d33e00770e889d1d6309c8` | Phase 4 — 毕业项目 |

首次创建于 2026-04-06。

## 当前状态

- **outline.json**: 68 节课（22 直播 + 39 InteractiveLab + 7 自学）✅
- **Production 同步**: 已完成首次同步 ✅
- **静态页面**: curriculum.html + phase1-4.html + internal.html ✅
- **Slides**: 13 个 slide 组件 ✅
- **Learn 绑定**: 93 个章节绑定到 29 节非 Lab 课 ✅
- **Training 级字段**: description_html, faqs(8), bootcampSections(6), program ✅

## 同步流程

```
1. 修改 outline.json
2. 运行 /bootcamp-sync
3. 在 localhost:5188/bootcamp 确认 diff
4. 确认无误后 sync 到 production
```

## 文件清单

| 文件 | 说明 |
|------|------|
| `public/outline.json` | 唯一数据源（68 lessons） |
| `public/curriculum.html` | 课程总览页（含行业场景、FAQ） |
| `public/phase1.html` | Phase 1 详情（Week 1-2） |
| `public/phase2.html` | Phase 2 详情（Week 3-5） |
| `public/phase3.html` | Phase 3 详情（Week 6-7） |
| `public/phase4.html` | Phase 4 详情（Week 8） |
| `public/internal.html` | 内部管理页（68 课完整列表） |
| `public/learning-plan.html` | 学习方案页 |
| `public/styles.css` | 共享样式 |
| `slides.html` | Slide deck 入口 |
| `src/components/slides/` | 13 个 slide 组件 |
