# 课程设计与视觉约定

## 课程定位

对有具体业务的非技术人员，采用同一企业案例，在 10 小时内完成 AI Workspace、基础品牌与官网、营销内容、短视频和每周任务。教学按 owner 确认的五课组织，不扩展为求职营、认证、创业融资或 CRM 代建。

## 设计系统

沿用 `../DESIGN.md` 的 curriculum Register B：黑色边框、方角、偏移阴影。复用 `../ai-image-text-workshop/public/styles.css` 的 `.box`、`.lesson`、`.lesson-body`、`.pill`、FAQ 与移动端布局；语义控件和 token 在同一 `public/styles.css` 内维护。

色彩与字体来自 `../ai-adoption-bootcamp/src/styles/theme.ts`：dark `#10162f`、warmBg `#fff1e7`、indigo `#6366f1`，yellow `#FFDE59` 用于价格与状态。深色底白字主操作，主要色块不使用新调色板。字体 Bricolage Grotesque / DM Sans / Noto Sans SC，离线时回退系统中文字体；不加载外部字体或模型素材。

Logo 直接复制 `../../jr-academy-brand/assets/logo/logo-en-white.svg` 和 `logo-official-black.svg`，保持原始文件与比例，不重画、不改色。虚构案例使用文字标识，不伪造商标、客户或经营效果。

## 主要用户路径

课程介绍首屏显示 10 小时、早鸟 A$899／正常 A$1,099、Local 状态 → 点击查看完整成果 → 阅读企业资料、内容全文和周报 → 打开实际单页网站原型与咨询演示 → 返回逐课教学与验收。

课程介绍必须含所有课次和步骤，不能只放五张概览卡。内部待办不进入 `curriculumPages`。报名入口未确认时显示不可用状态，不制造成功报名或真实业务写入。

## 验证范围

检查 Desktop 1440px 与 Mobile 390px / 320px；检查导航、FAQ 展开、键盘焦点、禁用报名、咨询演示反馈、海报下载、文本与步骤完整性、无横向溢出。页面全静态，没有异步加载、保存、未保存或真实表单提交状态；不伪造这些能力。


## 2026-10-22 · 招生页与海报

官网使用既有 Register A semantic tokens；海报使用 A-editorial，继承 JR Academy COURSE_DESIGN / POSTER_DESIGN；奶油底、深墨正文、紫色强调，真实官方 Logo 直接嵌入。`poster-template.html` 为可编辑源，价格从 outline Program 投影。作品画面来自实际 `example-website.html`，不绘制伪 UI；该原型使用案例自身 VI 色彩。主要术语保留英文。

币种 AUD 已由 owner 确认，定价 A$899 / A$1,099。未确认事项继续明确标注。
