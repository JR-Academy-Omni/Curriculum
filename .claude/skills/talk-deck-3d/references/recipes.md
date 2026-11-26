# 页面配方（`assets/pages/`）

| 文件 | 效果 | 需要准备 | 注意 |
|---|---|---|---|
| `CoverGlobe` | 深色电影感封面：星空、透视网格、3D 地球、环绕卡片、口号铭牌、三个大数字 | `core/CoverScene.tsx`、`data/land.ts`、环绕卡片数据 | `CoverScene` 里改轨道卡片；`CX/CY/GLOBE` 定位置，轨道半径过大会出画 |
| `YearHero` | 立体年份大字 + 数字卡翻入 + 照片立体堆叠，鼠标视差 | 3 张现场照片 | 照片层不要压正文 |
| `CardWall` | 倾斜的 3D 横向滚动卡片墙（Offer、案例、评价） | `{name, company, role, badge, logo}[]` | 用真实公开数据；悬停暂停 |
| `LogoWall` | 12 层滚动 Logo 墙，层速不同、相邻反向 | `{name, logo}[]` | 每层内容宽度要大于 1600，否则循环露缝（180 个 Logo ÷ 12 层，每个 118 宽） |
| `WorldReach` | 倾斜世界地图、总部飞线、城市脉冲点、各地照片轮换 | `data/worldmap.ts`、每城 2 张 560×420 照片 | `cityXY` 的键与照片文件名一致 |
| `WorkflowLoop` | 多步工作流：节点轮流抬起、分区标尺、回环流动虚线 | 每步：做什么、拿到什么 | 悬停固定；分区按产品实际归属 |
| `SprintBoard` | 任务卡在倾斜看板上逐列移动 + 进度条 | 角色、任务、阶段名 | `frames` 控制每一帧各任务在哪一列 |
| `PeoplePanel` | 课程卡片 + 深色头像墙弹出浮动 | `data` 里的姓名列表与 `public/teachers/tNN.jpg` | 不把老师指派给某门课，除非数据里写了 |
| `ProductPhones` | 平台清单 + 两台 3D 手机模型 | 应用商店官方截图、图标 | 挑掉含账号名或未渲染内容的截图 |

通用类（`depth.css`）：`.rise` 立体抬起入场、`.flip` 翻入、`.pop` 头像弹出、`.shot` 产品图透视悬浮、`.float` 浮动、`.scene > .stage` 鼠标视差（配 `kit.tsx` 的 `parallax`）、`.year3d` 立体字、`.slab` 立体铭牌。

地球与地图数据：

```bash
mkdir -p /tmp/geo && cd /tmp/geo && npm i world-atlas@2.0.2 topojson-client@3.1.0 d3-geo@3.1.1
node <skill>/scripts/gen-geo.mjs <deck>/src/data cities.json   # cities.json: {"brisbane":[153.03,-27.47]}
```

逐页检查：

```bash
node <skill>/scripts/shoot-deck.mjs http://localhost:4377/ 22 /tmp/shots
```

输出里的 `over` 对滚动墙、封面装饰等故意出画的元素会有提示，看图判断；`bad` 和 `errors` 应为空（首次加载慢可调大 `WAIT_MS`）。
