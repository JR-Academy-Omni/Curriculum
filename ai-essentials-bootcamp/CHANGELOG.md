# Changelog — AI 必修课

## 2026-04-05

- 重建 internal.html 为课程大纲管理页面（配置/缺失/TODO，非数据看板）
- 更新 BOOTCAMP_AUTOMATION_STATUS.md 反映最新文件结构和完成状态

## 2026-04-04

- Training description 重写为 3099 字 HTML 销售长文案（AI 率 2.8/10）
- 推送 FAQ 8 条到 production
- 推送 bootcampSections 11 个到 production
- description_en 推送 1016 字 HTML
- outline.json 新增 description_html、faqs、bootcampSections、program 字段
- Training 层级 sync 功能完成（diffBootcamp + syncBootcamp 支持 Training 字段）

## 2026-04-03

- 33 个 lesson 的 learningMaterial 全部填充（2000-3299 字 HTML，tutorial 级别）
- L24 直播课 learningMaterial 从 606 字扩充到 2389 字
- 33 个 lesson 的英文标题 (title_en) 全部填充
- 17 个 InteractiveLab 的 knowledge 字段填充
- Training 层级字段填充：timeLength, courseObjective, suitable, highlights, features, cardDescription, promoDescription, prerequisiteknowledge
- Training 英文字段：title_en, description_en, suitable_en, courseObjective_en, highlights_en
- Program 配置推送：commenceCourseDate, completeDate, cohortStatus, tuition=999, promoTuition=499
- syllabusesToDisplay + showPrograms 绑定（MCP API 现在返回完整 outline）

## 2026-04-02

- 33 个 lesson description 升级为 HTML 富文本（800-1200 字，5 section 结构）
- AI 率检查和修复（去重复句式、换开头、加真实案例）
- 二次修复：去掉 AI 味模板感（"这个 Lab" 重复、"从此" 重复、"掌握" 开头）
- 所有 description sync 到 production（33/33 HTML 格式）

## 2026-04-01

- outline.json 新增 62 个 Learn 章节绑定（ai-office 17, prompt-master 35, ai-content 3, ai-data-analysis 1）
- 新增 4 个 TODO Lab 占位（browser-basics, live-demo-recap, workplace-scenarios, learning-roadmap）
- 33 个 lesson description 重写为销售文案（纯文本版）
- 首次 sync 到 production：description, knowledge, learnChapterSlugs, link
- diffBootcamp 升级到 10+ 字段比较，加 productionId
- syncBootcamp 新增 lesson UPDATE 支持（PUT /admin-cms/lessons/{id}）
- SDM Bootcamp 页面新增详情视图、下载按钮、增强 diff 展示
- 后端 INTERACTIVE_LAB_TYPE 从 4 个补到 8 个（加 llm, aws, azure, git）
- Skills Data Manager diff 修复（空值对比 + 完整 lesson 数据拉取）
- 创建 4 个新 Prompt Lab 配置（browser-basics, live-demo-recap, workplace-scenarios, learning-roadmap）
- 文档体系建立：curriculum/WORKFLOW.md, OUTLINE_JSON_FORMAT.md, BOOTCAMP_AUTOMATION_STATUS.md
- 新建 2 个 Skill：/bootcamp-description-enhancer, /bootcamp-learning-material-generator
- /bootcamp-sync skill 更新为 SDM 端点方式
- 所有相关 skill 加交叉引用文档
