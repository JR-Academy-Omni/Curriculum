---
name: mp-article
description: "为 Bootcamp 课程生成微信公众号文章（复用该课 xhs-posters 的配图 + 串联叙事，组装成可粘贴进 mp.weixin.qq.com 的长文）。左预览右操作：复制 HTML / 复制 Markdown / 批量下载配图。Use when user wants to generate a WeChat MP article from an existing bootcamp's xhs-posters."
argument-hint: "[bootcamp目录]"
---

# /mp-article — 课程微信公众号文章生成器（快速参考）

完整规范见 `.gemini/skills/mp-article/SKILL.md`。此处只列核心要点。

## 强依赖
必须先做完 `curriculum/{bootcamp}/public/xhs-posters/index.html`（xhs-poster skill 产出物）。

## 输出
- `curriculum/{bootcamp}/public/mp-article/index.html` —— 左手机预览 + 右操作面板
- `curriculum/{bootcamp}/public/mp-article/mp-article-copy.js` —— 文章内容数据 + render/导出逻辑

## 标准 12 Section 蓝图
封面(p1/p1c) · 痛点(p2) · 对话(p3) · 四能力(p4) · 结构(p5+p6) · RAG(p12) · Agent(p13) · Lab&项目(p15+p17) · 时间线(p16) · 反馈(p7) · 配套(p8+p10) · CTA(p9)

## 核心约束
- 2500-4000 字、10-14 张图、禁 AI 味开场、禁"最/唯一/100%"
- 微信合规：可以放二维码 + 公众号名片（和小红书不同）
- 手机预览宽 375px、正文 15px/行高 1.85

## 导出原理
iframe 偷偷加载 `../xhs-posters/index.html`，复用 xhs 的 html2canvas 脚本批量导出配图为 `mp-{slug}-NN-posterSlug.png`，运营手动上传到公众号素材库后按占位符顺序插入。

## 发文流程（给运营看）
1. 点「批量下载所有配图」→ 本地 12 张 PNG
2. 登录 mp.weixin.qq.com → 素材管理 → 批量上传图片
3. 点「复制富文本」→ 公众号编辑器粘贴
4. 按占位符顺序把素材库图片插进去
5. 预览 → 发布

## 注册
- `curriculum/posters.html` 对应课程卡加 `📰 公众号` 按钮
- `curriculum/.github/workflows/deploy.yml` Assemble 步骤加 `cp -r mp-article/`
