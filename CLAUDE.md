# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## 核心定位：AI 驱动课程管理的内容创作区

**curriculum/ 是所有 Bootcamp 课程内容的 source of truth。** Claude AI 是课程的主要创建者和管理者。

### 为什么用 AI 管理课程

1. **Production 数据质量差** — 之前人工创建的课程描述粗糙、内容不完整
2. **人工调整大纲难度大** — 重新排列 lesson 顺序、拆分合并课时，人工操作复杂易错
3. **AI 能整合平台资源** — Claude 自动匹配并绑定已有的 Lab、Wiki、Learn 章节、Roadmap 等，课程质量大幅提升
4. **自动化全链路** — 从创建到同步全部由 AI 完成，人只做最终确认

### 完整工作流

```
Step 1: Claude 在 curriculum/{bootcamp}/ 创建/修改课程内容
        - outline.json = 唯一数据源
        - 静态 HTML 页面 = 对外展示 + 内部参考
        ↓
Step 2: 本地预览确认（python3 -m http.server）
        ↓
Step 3: 转为 JSON → skills-data/training-outlines/{bootcamp}.json
        ↓
Step 4: Skills Data Manager (localhost:5188/bootcamp) Check Diff 对比
        ↓
Step 5: 确认无误 → Sync 同步到 production
```

### 相关 Skills（批量管理课程）

| Skill | 用途 |
|-------|------|
| `/bootcamp-curriculum-creator` | 从零创建完整 Bootcamp（市场调研→大纲→内容→页面） |
| `/bootcamp-sync` | 从 curriculum/ 同步到 production |
| `/curriculum-review` | 审查课程大纲完整性 |
| `/lesson-design` | 设计单节 Lesson |
| `/expand-outline` | 简单大纲扩展为完整课程 |

### 相关工具和文档

| 文件 | 说明 |
|------|------|
| `tools/skills-data-manager/SCHEMA_REFERENCE.md` | **🔑 Training/Program/Lesson schema 权威参考（改任何字段前必读）** — 标注了每个字段能不能本地同步、要不要 admin 操作 |
| `curriculum/OUTLINE_JSON_FORMAT.md` | **outline.json 格式规范（核心数据格式）** |
| `curriculum/WORKFLOW.md` | **通用工作流（所有 Bootcamp 适用，含后端数据模型）** |
| `curriculum/BOOTCAMP_AUTOMATION_STATUS.md` | **全局状态 & 缺口分析（必读）** |
| `tools/skills-data-manager/` | 同步操作台（localhost:5188） |
| `tools/skills-data-manager/BOOTCAMP_GUIDE.md` | Bootcamp 开发踩坑指南 |

---

## 给运营 / Marketing 同事的快速指南

你不需要懂代码！直接用中文告诉 Claude 你想做什么就行。以下是你最常用的命令：

### 常用命令（输入后回车即可）

| 命令 | 作用 | 例子 |
|------|------|------|
| `/list-pages` | 查看所有页面地址 | 直接输入即可 |
| `/update-page` | 修改页面内容 | `/update-page ai-adoption phase2 把第3课标题改成"AI写商业计划书"` |
| `/deploy` | 发布到线上 | `/deploy 更新了课程内容` |
| `/preview` | 本地预览 | `/preview ai-adoption-bootcamp` |
| `/check-deploy` | 检查发布状态 | 直接输入即可 |
| `/curriculum-review` | 审查课程完整性 | `/curriculum-review ai-adoption-bootcamp` |

### 用自然语言也行

你也可以直接用中文描述需求，不用记命令：

- "帮我看一下 AI Adoption 的 Phase 2 页面"
- "把 AI Engineer 课程大纲里第5课的描述改成xxx"
- "在 Phase 3 加一节新课，主题是 AI 做数据分析"
- "帮我发布到线上"
- "最近一次部署成功了吗？"
- "所有课程页面的网址是什么？"

### 注意事项

- 改完内容后记得用 `/deploy` 发布，否则线上看不到
- 发布后等 2-3 分钟线上才会更新
- 如果不确定改对没有，先用 `/preview` 本地看看
- **不要删除已有内容**，只加不减

---

## 🚨 Lesson 两个内容字段的区别

后端 Lesson Schema (`jr-academy/src/models/lesson.schema.ts`) 有两个容易混淆的内容字段：

| | `description` | `learningMaterial.content` |
|---|---|---|
| **用途** | 对外销售/列表展示的短文案 | 学生端看到的正式教学内容 |
| **展示位置** | 课程列表页、大纲页、SEO | 学生端课程详情页 |
| **内容格式** | 纯文本，1-2 句话 | Tiptap JSON/HTML 富文本（Notion 模式编辑） |
| **编辑方式** | Admin 表单 | Admin Tiptap 编辑器 |
| **举例** | "学会打开浏览器、用搜索引擎" | 完整操作步骤、截图、代码、知识点 |

**outline.json 中的映射：**
- `lesson.description` → 对应后端 `description`（销售短文案）
- `lesson.steps[]` → 对应后端 `learningMaterial.content`（需要转成 Tiptap 格式上传）

**绝对不要把这两个搞混。** description 写得再详细也不会出现在学生端教学页面。

---

## What This Repo Is

Static curriculum site for JR Academy bootcamps. Each bootcamp is a standalone Vite + React 19 + TypeScript app that builds to static HTML. The site is served at `jiangren.com.au/curriculum/`.

Currently contains:
- **ai-adoption-bootcamp/** — AI Adoption Specialist Bootcamp (8-week, for business professionals)
- **ai-engineer-bootcamp/** — AI Engineer Bootcamp (12-week, for developers)
- **ai-essentials-bootcamp/** — AI Essentials Bootcamp (4-week, introductory)

Each bootcamp has two parts:
1. **Slide Deck** — React app with `SlideEngine` (interactive presentation at `slides.html` or `index.html`)
2. **Static HTML pages** — Curriculum overview, phase details, internal docs (in `public/`)

---

## 🚨 CRITICAL: Technology Standards

### 核心原则：保持极简

这个项目追求**最小技术栈**，拒绝复杂框架。所有内容最终输出为**纯静态文件**（HTML/CSS/JS），不需要服务端渲染、路由、状态管理等。

### 允许使用的技术

| 技术 | 用途 | 版本 |
|------|------|------|
| **Vite** | 构建工具、Dev Server | 8.x |
| **React 19** | Slide Deck 交互组件 | 19.x |
| **TypeScript** | 类型安全 | 5.9.x |
| **framer-motion** | Slide 动画 | 12.x |
| **Inline styles** | 所有样式（Slide Deck） | — |
| **Plain CSS** | 静态 HTML 页面（`public/styles.css`） | — |
| **bun** | 包管理器 + 运行时 | latest |

### 🔴 禁止使用的技术

| 禁止 | 原因 |
|------|------|
| **Next.js** | 过度复杂，这是纯静态站不需要 SSR/SSG 框架 |
| **Nuxt / Remix / Astro** | 同上，不需要任何全栈框架 |
| **React Router** | 不需要客户端路由，每个页面是独立 HTML 文件 |
| **Redux / Zustand / Jotai** | 不需要状态管理，Slide Deck 状态在 SlideEngine 内部管理 |
| **styled-components / Emotion** | Slide Deck 只用 inline style，HTML 页面用 plain CSS |
| **Tailwind CSS** | 不用 utility class 方案，inline style 更直接 |
| **CSS Modules** | 不需要 CSS 模块化 |
| **Material UI / Ant Design / Chakra** | 不用任何 UI 组件库 |
| **Axios / SWR / React Query** | 不需要数据请求库，这是纯静态内容 |
| **任何 CSS-in-JS 库** | 只用 inline style |
| **任何 ORM / 数据库** | 这是纯静态站 |
| **任何 Node.js 服务端框架** | 这是纯静态站 |

### 为什么这么严格？

1. **纯静态输出** — 最终部署的是 HTML/CSS/JS 文件，nginx 直接 serve，没有任何服务端
2. **最小依赖** — 每个 bootcamp 只有 5 个依赖（react, react-dom, framer-motion + 3 devDeps）
3. **快速构建** — `bun run build` 几秒完成，没有复杂的打包配置
4. **任何人都能维护** — 不需要理解框架概念（SSR、hydration、middleware 等）
5. **零运行时成本** — 没有服务端开销，纯 CDN 可部署

---

## Commands

```bash
# Dev — run from inside a bootcamp directory
cd ai-adoption-bootcamp  # or ai-engineer-bootcamp
bun install
bun run dev              # http://localhost:5173/

# Build
bun run build            # runs tsc -b && vite build → outputs to dist/

# Preview production build
bun run preview
```

There are no tests or linting configured.

## Deployment

Push to `main` triggers GitHub Actions (`.github/workflows/deploy.yml`):
1. Builds each bootcamp with bun
2. Assembles all `dist/` + `public/` files into `_site/`
3. Auto-generates `pages.json` from each `outline.json`'s `curriculumPages` field
4. Generates an index page at `_site/index.html`
5. SCPs to nginx server at `/var/www/static/curriculum/`

Requires GitHub Secrets: `SERVER_HOST`, `SERVER_USER`, `SSH_PRIVATE_KEY`.

### pages.json (auto-generated, do NOT commit)

Each bootcamp's `public/pages.json` is **auto-generated by the deploy workflow** from the `curriculumPages` field in `outline.json`. It tells the frontend iframe which HTML pages to list.

```json
{
  "pages": ["curriculum.html", "phase1.html", "phase2.html", ...],
  "defaultPage": "curriculum.html"
}
```

To control which pages appear: edit `curriculumPages` in `outline.json`, not `pages.json` directly. The file is git-untracked by design.

## Adding a New Bootcamp

1. Copy an existing bootcamp directory
2. Update `vite.config.ts` — set `base` to `/curriculum/<new-name>/`
3. Add build + copy steps in `deploy.yml`
4. Add a card to the index page HTML in `deploy.yml`'s "Assemble output" step

---

## Architecture & Conventions

### Slide Deck (React)

- **Stack**: React 19 + framer-motion + inline styles only (no CSS files, no styled-components, no UI libraries)
- **Design system**: Neo-Brutalism — black 3px borders, offset `box-shadow: 6px 6px 0 #000`, hover removes shadow + translates
- **Shared UI**: `src/components/ui.tsx` — `Slide`, `Card`, `CardSm`, `Title`, `Highlight`, `Grid`, `Stagger`, etc.
- **Theme**: `src/styles/theme.ts` — colors, fonts, shared constants
- **Slide naming**: `S01_Cover.tsx`, `S02_Problem.tsx` — two-digit prefix + descriptive name
- **Fonts**: Bricolage Grotesque (headings), DM Sans (body), Space Mono (data/labels), Noto Sans SC (Chinese)
- **Responsive titles**: Always use `clamp()` for font sizes

### Static HTML Pages (public/)

- `curriculum.html` — Full curriculum overview with all phases
- `phase1.html` through `phase4.html` — Individual phase detail pages
- `styles.css` — Shared styles for HTML pages
- `internal.html` — Internal-only docs (lab mapping, teacher assignments, JD comparison, marketing)

Static HTML 页面用**纯 HTML + CSS**，不用 React。这些是独立的 `.html` 文件，Vite build 时直接 copy 到 dist。

### Package.json 标准模板

每个 bootcamp 的 `package.json` 应该保持极简：

```json
{
  "name": "bootcamp-name",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "framer-motion": "^12.x",
    "react": "^19.x",
    "react-dom": "^19.x"
  },
  "devDependencies": {
    "@types/react": "^19.x",
    "@types/react-dom": "^19.x",
    "@vitejs/plugin-react": "^6.x",
    "typescript": "~5.9.x",
    "vite": "^8.x"
  }
}
```

不允许在此基础上添加额外的 npm 包，除非有充分理由并在 PR 中说明。

### 文件结构标准

```
bootcamp-name/
├── package.json
├── index.html              # 入口 HTML，引入 Google Fonts
├── vite.config.ts          # base: '/curriculum/bootcamp-name/'
├── tsconfig.json
├── tsconfig.app.json
├── public/                 # 静态 HTML 页面（直接 copy，不经过 Vite 处理）
│   ├── outline.json        # 🔑 课程唯一数据源（phases, lessons, steps）
│   ├── pages.json          # ⚠️ 自动生成，不要手动编辑或提交
│   ├── curriculum.html     # 课程概览
│   ├── phase1.html         # Phase 详情
│   ├── phase2.html
│   ├── ...
│   ├── styles.css          # 共享样式
│   └── internal.html       # 内部资料
├── src/
│   ├── main.tsx            # React 入口
│   ├── App.tsx             # SlideEngine + Slides 组装
│   ├── styles/
│   │   └── theme.ts        # 颜色、字体、常量
│   └── components/
│       ├── SlideEngine.tsx  # 翻页引擎
│       ├── ui.tsx           # 共享 UI 组件
│       └── slides/
│           ├── S01_Cover.tsx
│           ├── S02_xxx.tsx
│           └── ...
└── bun.lock
```

### Design Spec

See `DESIGN.md` for the complete presentation design system including color palette, component catalog, slide layout patterns (cover, stats, split, grid, CTA), and SlideEngine keyboard/touch interactions.

---

## 🚨 CRITICAL: 课程设计原则

### 所有学习内容都是平等的 Lesson

平台上 Video、Info（图文）、Lesson（直播/互动）都是 lesson，只是 type 不同。课程大纲 = lesson 数组。

**录播和自学不是二等公民。** 它们和直播课一样，都应该有完整的 step 序列（教学内容→练习→验证）。不要把录播/图文当成"附属品"或"自学堆砌"。

| Lesson Type | 含义 | 例子 |
|-------------|------|------|
| **Lesson** | 互动课（直播/Lab） | 直播课、Workshop、Clinic |
| **Video** | 录播视频 | 工具演示、案例拆解、操作步骤 |
| **Info** | 图文内容 | 操作指南、模板说明、Wiki 知识 |

### 多通道学习：围绕学习目标，不围绕直播课

直播课只是学习方式之一。**最终目的是学员掌握技能**，不管通过哪种通道。每节课的"掌握路径"要列出所有可用的学习资源：

1. **直播课** — 老师讲解 + 现场演示
2. **Prompt Lab** — 平台已有的互动练习（22+ 个，标"已有"）
3. **AI Tutor** — AI 一对一带练、答疑、纠正、模拟角色扮演
4. **录播视频** — 工具演示、案例分析（独立 lesson，不是附属品）
5. **图文教程** — 操作步骤指南（独立 lesson）
6. **Vibe Coding Lab** — AI 编程练习（已有）
7. **OpenClaw 章节** — Ch.1-5, Ch.10-11（已有）
8. **Roadmap** — 可视化学习路径
9. **Wiki** — 知识库文章（适合放"找不到老师教但需要了解"的内容，如 Power Automate）
10. **作业** — 综合运用

### 学员自主节奏

- 学员按自己节奏完成各项学习资源
- **不要绑定具体哪天**（不做"周二做这个周四做那个"的日程表）
- Lab 不是"课后马上做"，是学员自主安排的学习内容
- 掌握路径只标**推荐顺序**，不标具体日期

### 必须整合的 JR 平台现有资源

设计课程时必须查看并整合已有的资源生态，能复用就复用：

| 资源 | 路由 | 说明 |
|------|------|------|
| **Prompt Lab** | `/study-center?tab=learn&mode=prompt-lab` | 22+ 个互动练习 |
| **Vibe Coding Hub** | `/learn/vibe-coding/hub` | AI 编程学习中心 |
| **AI 学习方向** | `/learn/ai-adoption` 等 | AI 学习中心各方向 |
| **Roadmaps** | `/roadmaps` | 可视化学习路径 |
| **Videos** | `/videos` | 教学视频库 |
| **Wiki** | `/wiki` | 知识库文章 |
| **Free Resources** | `/free-resources` | 免费工具/认证/课程 |
| **Mock Interview** | `/job-interview` | 面试模拟 |
| **Career Planning** | `/study/career-planning` | AI 职业规划 |
| **JobPin AI** | `/study-center?tab=jobpin-ai` | AI 简历编辑 |

### 只加不删

- **绝对不要简化或删除已有内容**
- 新页面的详细程度必须 >= 现有页面
- 如果做了更详细的版本，用它来**反推扩展**已有页面，不是反过来精简
- 遇到"太长了要不要精简"的想法 → 不要精简，保持详细
