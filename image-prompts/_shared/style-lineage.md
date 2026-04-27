# 招生海报签名风格族谱（Style Lineage）

> 每个 bootcamp 一个独立签名风格，13 张海报并排不撞脸。
> 新增 bootcamp 时**先查这张表**，从 reservoir 挑没用过的，避免风格冲突。

---

## 设计准则

1. **一 bootcamp = 一个签名风格**，13 张海报视觉立刻能区分
2. **风格服从于受众**：开发者向用 IDE/blueprint，业务向用 corporate/print，零基础向用 friendly/manual
3. **品牌色硬约束**：不管什么签名风格，必须能看到 `#FF5757` / `#10162F` / `#FFF1E7` / `#FFB800` 中至少 3 个
4. **不画 logo**：右下角永远是文字 tag `JR Academy · {Bootcamp}`
5. **签名风格独立但骨架统一**：9-block anatomy 固定（见 `recruitment-poster-spec.md`），只换皮

---

## 已使用风格（13 个）

| # | 签名风格 | bootcamp | 受众 | DNA 关键词（写进 prompt） |
|---|---------|----------|------|--------------------------|
| 1 | **GitHub Tech Zine** | `ai-engineer-bootcamp` | 中级开发者 | neo-brutalist, monospace + sans, hatched corner marks, 1px black strokes, line-art tech icons, navy + accent yellow on cream |
| 2 | **Vector Lab Notebook** | `ai-engineer-rag` | 入门 AI builder | academic notebook + blueprint, vector space dot grid, hand-drawn node graphs, coordinate axes, scientific paper margin |
| 3 | **Risograph Workbook** | `ai-essentials-bootcamp` | 零基础办公族 | 2-color riso print (red + navy), paper grain, slight ink misregistration, warm hand-drawn icons, friendly worksheet feel |
| 4 | **Cursor IDE Splashscreen** | `ai-builder` | 有编程基础 | dark IDE chrome (#1e1e1e), syntax-highlight palette (cyan / magenta / yellow), tab bar + status bar + terminal, glassmorphism cards, monospace dominant |
| 5 | **80s Computer Manual** | `ai-programming` | 零基础非技术 | retro computer user manual, CRT scanlines, pixel icons, dotted-border boxes, instruction-manual layout, beige + navy + alert red |
| 6 | **Swiss Corporate Memo** | `ai-adoption-bootcamp` | 业务管理者 | Helvetica/Akzidenz Grotesk, strict modular grid, memo header (Date/From/To/Re), red rule + black ink + grey, conservative business tone |
| 7 | **Excel Dashboard Print** | `ai-copilot` | Data/BI/BA | spreadsheet zebra stripes, large KPI numbers, sparkline strips, BI dashboard layout, cell borders, header row in #10162F |
| 8 | **Boarding Pass Itinerary** | `business-analyst` | PM/BA 转型 | airline boarding pass + passport stamp, dashed perforation lines, itinerary blocks, ticket stub, monospace flight info, red ink stamp |
| 9 | **Subway Map Diagram** | `it-career-support` | 澳洲 IT 求职者 | Massimo Vignelli NYC subway map, multi-color routes (red / yellow / navy lines), station dots, transfer junctions, clean geometry |
| 10 | **CI/CD Blueprint** | `techscrum-devops` | 初级 DevOps | blueprint paper (white lines on navy), pipeline schematics, technical annotations, dimension lines, engineering callouts |
| 11 | **Browser DevTools Inspector** | `web-code-bootcamp` | 全栈转型 | Chrome DevTools UI panels, Elements tree on left, Network waterfall on right, tab bar, status bar, light grey + cyan + orange |
| 12 | **Algorithm Card Deck** | `full-stack-developer-interview` | 求职刷题者 | LeetCode-meets-playing-card, complexity tags O(n)/O(log n), terminal prompt, card shadows, suit-style corner marks, problem-set typography |
| 13 | **Open-Source Manifesto Zine** | `openclaw-bootcamp` | Agent 开发者 | punk zine + photocopier grain, stencil display type, GitHub README markdown rhythm, rough-cut paper edges, MIT license stamp |

---

## 未使用风格池（reservoir）

新加 bootcamp 时优先从这里选：

- **Japanese editorial** — 纵排排版、留白、汉字 + 假名节奏（适合东亚专精课程）
- **Bauhaus poster** — 几何拼接、原色、Sans-serif 大字（适合设计 / UX 课程）
- **Cyberpunk arcade flyer** — 霓虹 + 网格 + 故障艺术（适合游戏 / Web3 课程）
- **Newspaper classified** — 报纸分栏、报头、衬线字（适合长寿型 / 经典内容课程）
- **Polaroid mood board** — 拍立得拼贴、便签、手写注释（适合创意 / 视觉课程）
- **Topographic map** — 等高线、海拔标记、地理参照（适合数据科学 / GIS 课程）
- **Architectural facade** — 立面图、剖面图、比例尺（适合系统架构 / 平台工程）
- **Library card catalog** — 索引卡、打字机字体、目录条（适合知识管理 / RAG 类课程，注意别和 Vector Lab Notebook 冲突）
- **Vinyl record sleeve** — 黑胶封套、track listing、印刷工艺（适合音频 / 创作类）
- **Botanical field guide** — 博物图鉴、手绘植物、拉丁学名（适合 ML / 数据科学）

---

## 风格冲突避免规则

| 易混淆组合 | 规则 |
|-----------|------|
| Vector Lab Notebook ↔ CI/CD Blueprint | 都是技术蓝图。Vector 用浅蓝/白底 + 点阵网格 + 节点图；Blueprint 用深蓝底 + 白线 + 管道图。Notebook 强调"研究记录"，Blueprint 强调"工程蓝图"。 |
| Cursor IDE ↔ Browser DevTools | 都是开发工具 UI。Cursor 是**编辑器**（暗色 + tab + terminal）；DevTools 是**浏览器调试面板**（亮色 + 树形 + 时间线）。 |
| GitHub Tech Zine ↔ Open-Source Manifesto Zine | 都用 monospace + 极简。Tech Zine 是**clean**（neo-brutalist, 1px stroke），Manifesto 是**rough**（photocopier grain, stencil）。 |
| Risograph Workbook ↔ 80s Computer Manual | 都温暖友好。Risograph 是**艺术印刷**（油墨错位），Manual 是**复古手册**（CRT scanlines）。 |

---

## 给 Claude 的执行规则

新加 bootcamp 时：

1. 打开本文件，**先扫"已使用风格"表**确认目标风格没被占用
2. 从 reservoir 挑一个匹配 bootcamp 受众气质的风格
3. 给它起一个 1 词组的"签名风格名"（例如 `Library Card Catalog`）
4. 在 `recruitment-poster/overview.md` 的 frontmatter `styleName` 字段填这个名字
5. 在 GLOBAL STYLE 段第一行写 `Signature style: {你起的名字}`
6. 把 reservoir 里这个风格删掉，写进"已使用风格"表
7. 提交 commit：`chore(image-prompts): claim {style name} for {bootcamp} recruitment poster`

不要"风格创新一下试试"——风格不在表里就先入表，避免后人复用错。
