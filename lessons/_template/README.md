# `_template` — 网页版讲座 deck 单一引擎来源

这是所有 React deck(`talk-deck` skill）的**引擎单一来源**。新讲座从这里拷，不要再从某个具体 deck 拷（避免 bug 漂移）。

## 起一个新 deck

```bash
cp -R lessons/_template lessons/{slug}
cd lessons/{slug}
# 1. 全局替换占位符 {{SLUG}} / {{TITLE}}（package.json / vite.config.ts / index.html）
# 2. bun install
# 3. bun run dev  → 浏览器走查（← → 翻页，F 全屏，C 摄像头）
```

## 🚨 两类文件，别搞混

| 类别 | 文件 | 规则 |
|---|---|---|
| **引擎 / 运行时**（测过、逻辑固定） | `src/components/SlideEngine.tsx` · `ui.tsx` · `CameraBubble.tsx` · `src/styles/theme.ts` · `src/main.tsx` | **逐字保留，禁止重写**。要改引擎 → 改这里的 `_template`，再同步到各 deck。出 bug 改一处。 |
| **内容**（每个 deck 不同） | `App.tsx` · `src/components/slides/*` · `src/data/*` · `PRD.md` · `research/*` | 每个 deck 自由生成 / 重写。 |

> 摄像头、键盘/触摸/滚轮翻页、1600×900 缩放这些运行时逻辑有浏览器坑，**绝不靠"照描述重写"**——只拷贝。内容才是每次新写的部分。

## 引擎能力速查

- `SlideEngine`：1600×900 固定画布整体 scale；← → ↑ ↓ Space 翻页；`F` 全屏；`C` 开关摄像头；`?page=N` URL 同步；进度条 + 页码 + 圆点导航。
- `CameraBubble`：右下角圆形演讲者摄像头（`getUserMedia`，按 `C` 开关、可拖动、镜像、自动释放流），固定视口不随画布缩放。
- `ui.tsx`：`Slide`/`Inner`/`Half`/`Title`/`Subtitle`/`Highlight`/`Tag` + `CountUp`/`GrowBar` + `springIn`/`slideFromLeft|Right` + `assetPath()`。
- `theme.ts`：JR Neo-Brutalism 令牌（品牌色 / 字体 / `border` / `shadow`）。

完整规范见 `curriculum/.claude/skills/talk-deck/SKILL.md`。
