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

## 🚨 硬性要求：`inlineStyles()` 必须用公众号能识别的写法

> **2026-04-18 实测**（在 jr-wiki `ai-news-posters/2026-04-18/mp-article.html` 上跑通过 mp.weixin.qq.com 图文编辑器，保留全部视觉）。参考实现：`ai-engineer-bootcamp/public/mp-article/mp-article-copy.js` 的 `inlineStyles()` 函数。

公众号编辑器（mp.weixin.qq.com）粘贴 HTML 时 sanitizer 会：

1. **剥掉 `<style>` 标签 + class 属性的视觉效果** → 只认 inline `style=""`
2. **剥掉 `background:` shorthand** → 必须用 `background-color:`
3. **不认短 hex** → `#fff` / `#000` 必须写成 `#ffffff` / `#000000`
4. **丢弃 `rgba()` 的 alpha** → 改成纯 hex
5. **不解析 CSS 变量** → 不要出现 `var(--*)`
6. **裸 `<div>` / `<blockquote>` 的 background 有时失效** → 彩色块必须包一层 `<section style="background-color:...">`

`mp-article-copy.js` 的 `inlineStyles(root)` 函数必须：

```javascript
function inlineStyles(root) {
  const map = {
    // ✅ 全部用 background-color，不用 background shorthand
    '.lead':     'background-color:#f1f5f9;border-left:3px solid #10b981;padding:14px 16px;...',
    '.cta-card': 'background-color:#fff8ee;border:2px solid #10162f;padding:20px 18px;...',
    '.cta-qrcode': 'background-color:#ffffff;...',  // 不是 #fff
    // ... 其他 selector
  };

  // 1) 按 selector 注入 inline style
  Object.entries(map).forEach(([sel, style]) => {
    root.querySelectorAll(sel).forEach(el => {
      el.setAttribute('style', style + (el.getAttribute('style') || ''));
    });
  });

  // 2) 彩色块外包一层 <section> 双保险
  ['.lead', '.cta-card', '.cta-qrcode'].forEach(sel => {
    const wrapStyle = map[sel] || '';
    root.querySelectorAll(sel).forEach(el => {
      if (el.tagName.toLowerCase() === 'section') return;
      const wrapper = document.createElement('section');
      wrapper.setAttribute('style', wrapStyle);
      el.removeAttribute('style');
      el.setAttribute('style', 'background-color:transparent;padding:0;margin:0;border:0;');
      wrapper.appendChild(el.cloneNode(true));
      el.replaceWith(wrapper);
    });
  });
}
```

### 校验清单（生成新 bootcamp 的 mp-article 时必须 ✅）

- [ ] `inlineStyles()` map 里**没有**任何 `background:` shorthand（全部 `background-color:`）
- [ ] 没有短 hex（`#fff` / `#000` 全部写成 6 位）
- [ ] 没有 `rgba()`（包括 box-shadow alpha，用纯 hex 或删掉）
- [ ] 没有 `var(--*)`
- [ ] 所有彩色块（`.lead` / `.cta-card` / `.cta-qrcode` 等）都在 map 里**且**被 `<section>` wrap 循环覆盖
- [ ] 本地打开 → 点「复制富文本」→ 贴到 Notion 或 Gmail 草稿，能看到完整颜色/背景/边框（WeChat 粘贴前的最低验证）

> **不满足任何一条 = 生成完就废**。公众号运营同事粘贴后会变成黑白纯文本，所有 marketing 视觉全丢。

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
