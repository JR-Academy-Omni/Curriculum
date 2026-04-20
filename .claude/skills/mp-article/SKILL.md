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

## 🚨 硬性要求：封面 / 海报生成器必须用原生 Canvas 2D（禁用 HTML/CSS + html2canvas）

> 2026-04-21 实测确认（AI Engineer Bootcamp 封面设计器 `cover.html`，commit dd26b8d）。参考实现：`ai-engineer-bootcamp/public/mp-article/cover.html`。

### 为什么禁用 HTML/CSS + html2canvas

1. **字号溢出**：CSS 的 `font-size: 300px` + `overflow: hidden` 会直接把超长文字切掉，截图里可见 "Junior AI Engineer" 顶部被切、"了" 单独翻行挤出容器
2. **字宽测不准**：CSS font-size 是"显示尺寸"，不同字体/浏览器实际占宽差异大，靠手调试错
3. **三层跳转失真**：HTML → html2canvas → canvas → PNG 每一层都可能失真，文字位移、阴影丢失、字体 fallback
4. **字体加载时序**：CSS 不等字体就绘制时，fallback 字体宽度不同 → 布局已经撑爆

### 正确做法：原生 Canvas 2D API

```html
<canvas id="canvas-main" width="2350" height="1000"></canvas>
```

必备的辅助函数（直接从 cover.html 照搬）：

```javascript
/** 二分降字号直到文字能放下 maxWidth */
function fitText(ctx, text, fontFamily, maxWidth, startSize, minSize = 30) {
  let size = startSize;
  ctx.font = `900 ${size}px ${fontFamily}`;
  while (ctx.measureText(text).width > maxWidth && size > minSize) {
    size -= 4;
    ctx.font = `900 ${size}px ${fontFamily}`;
  }
  return size;
}

/** 背景点阵装饰（Neo-Brutalism 常用） */
function drawDotPattern(ctx, W, H, step, dotR, alpha) { ... }

/** 圆角矩形（brand chip 等） */
function roundRect(ctx, x, y, w, h, r) { ... }
```

### 绘制流程模板

```javascript
async function init() {
  try { await document.fonts.ready; } catch {}  // 🚨 必须等字体加载完
  redraw();
}

function redraw() {
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#10162f';
  ctx.fillRect(0, 0, W, H);                     // 背景
  drawDotPattern(ctx, W, H, 60, 2, 0.12);       // 装饰
  // ... 用 fitText() 动态缩字号 + ctx.fillText() 画内容
}

// 下载 PNG —— 直接 toDataURL，不走 html2canvas
dlBtn.addEventListener('click', () => {
  const url = canvas.toDataURL('image/png');
  const a = document.createElement('a');
  a.download = 'cover.png';
  a.href = url;
  a.click();
});
```

### 额外必带的 UX

- **表单实时重绘**：每个可变文案给 `<input>`，`input` 事件触发 `redraw()` 实时预览
- **140px 手机缩略 canvas**：右侧加一个真实手机 feed 尺寸的同步缩略，让运营直接判断手机端可读性（不用自己缩浏览器窗口试）

### 校验清单（新建 bootcamp 的 cover.html 时必须 ✅）

- [ ] 用 `<canvas width="XXXX" height="XXXX">` 不用 CSS 定位布局
- [ ] 有 `fitText()` 二分缩字号工具
- [ ] 有 `await document.fonts.ready` 等字体加载
- [ ] 下载按钮直接 `canvas.toDataURL('image/png')`，**不引 html2canvas**
- [ ] 每个可改文案都有 `<input>` + `input` 事件实时重绘
- [ ] 右侧有 140px 手机缩略 canvas 同步
- [ ] 改文案超长时缩字号正常生效、文字不溢出容器

**凡是新建封面 / 海报生成器 = 默认走 Canvas 2D。HTML/CSS + html2canvas 已废弃，别再用。**

## 发文流程（给运营看）

**方式 A（推荐，装了 JR Social Publisher 插件）**：
1. 打开本地 mp-article/index.html
2. 点「📤 推送到公众号」按钮
3. 切到 mp.weixin.qq.com → 新建图文 → 页面顶部出现浮条「📥 导入 bootcamp 文章」→ 点击
4. 自动填标题 / 作者 / 摘要 / 正文，封面图自动下载（或自动上传，看命中）
5. 人工检查 → 发布

**方式 B（手动，没装插件）**：
1. 点「批量下载所有配图」→ 本地 12 张 PNG
2. 登录 mp.weixin.qq.com → 素材管理 → 批量上传图片
3. 点「复制富文本」→ 公众号编辑器粘贴
4. 按占位符顺序把素材库图片插进去
5. 预览 → 发布

## 🔗 JR Social Publisher 插件钩子（每个 bootcamp mp-article 必带）

> 见 `docs/MP_XHS_PUBLISHER_EXTENSION_PRD.md`。新生成的 bootcamp mp-article 必须在 `index.html` 加推送按钮，`mp-article-copy.js` 加 `pushToExtension()` 函数。

**HTML 按钮**（放在 `.ops-actions` 里，跟其他复制按钮并列）：

```html
<button class="btn" id="push-mp" title="推送到 JR Social Publisher 插件">📤 推送到公众号</button>
```

**JS（加到 `mp-article-copy.js` 末尾，和现有 `cRich.addEventListener` 同级）**：

```javascript
// ---- JR Social Publisher Chrome Extension 推送钩子 ----
async function pushToExtension() {
  const btn = document.getElementById('push-mp');
  if (!btn) return;
  const oldText = btn.textContent;
  btn.disabled = true;
  btn.textContent = '准备中...';
  try {
    const bodyHtml = buildMpHtml();
    const titleEl = body.querySelector('h1, .mp-title, [data-title]');
    const title = titleEl ? (titleEl.textContent || '').trim() : document.title;
    const leadEl = body.querySelector('.lead, .mp-lead, p');
    const summary = (leadEl ? leadEl.textContent : '').trim().slice(0, 120);

    btn.textContent = '抓封面...';
    const base = new URL('.', location.href).href;
    const firstImg = body.querySelector('.fig-slot');
    const firstPoster = firstImg ? firstImg.dataset.poster : 'poster-p1';
    const coverUrl = new URL('./images/' + firstPoster + '.png', base).href;
    const resp = await fetch(coverUrl);
    const blob = await resp.blob();
    const coverImageBase64 = await new Promise((resolve, reject) => {
      const fr = new FileReader();
      fr.onload = () => resolve(fr.result);
      fr.onerror = () => reject(new Error('封面图读取失败'));
      fr.readAsDataURL(blob);
    });

    const payload = {
      source: 'bootcamp-mp-article',
      date: new Date().toISOString().slice(0, 10),
      title,
      summary,
      wechat: {
        author: 'JR Academy',
        bodyHtml,
        coverImageBase64,
      },
    };

    window.postMessage({ type: 'JR_PUBLISH_PAYLOAD', version: 1, target: 'wechat', payload }, '*');
    btn.textContent = '✅ 已推送';
    setTimeout(() => { btn.textContent = oldText; btn.disabled = false; }, 2500);
  } catch (e) {
    console.error('[push-mp]', e);
    btn.textContent = '❌ ' + (e.message || '失败');
    setTimeout(() => { btn.textContent = oldText; btn.disabled = false; }, 3000);
  }
}

const pushBtn = document.getElementById('push-mp');
pushBtn && pushBtn.addEventListener('click', pushToExtension);
```

**Source 字段必须是 `'bootcamp-mp-article'`**（插件根据 source 区分 AI 日报 vs bootcamp 文章，将来可能做不同的导入策略）。

**插件没装时** `window.postMessage` 只在自己窗口里广播没人听，按钮行为安全不报错。

## 注册
- `curriculum/posters.html` 对应课程卡加 `📰 公众号` 按钮
- `curriculum/.github/workflows/deploy.yml` Assemble 步骤加 `cp -r mp-article/`
