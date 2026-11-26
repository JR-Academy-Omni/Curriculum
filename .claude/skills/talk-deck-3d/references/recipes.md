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
| `ProductCarousel` | 3D 旋转产品展台：当前产品居中放大、两侧带景深，底部固定列出全部产品，可悬停／点击 | 每个产品的官网实拍（960×600）、名称、网址、一句话 | 底部清单必须保留，不靠轮播也能看全；清单是 5 列 × 2 行（9 个产品 + 1 个汇总格），再多要缩字或分页；两侧卡片出画是故意的 |
| `ProductPhones` | 平台清单 + 两台 3D 手机模型 | 应用商店官方截图、图标 | 挑掉含账号名或未渲染内容的截图 |
| `ProductShot` | 产品实机图带透视倾斜、投影和缓慢浮动，左侧三条要点 | 一张高清实机图 | 悬停回正；图里不能有账号名或个人信息 |
| `BigStats` | 三张大数字卡立体抬起 | 数字、单位、一句说明 | 数字要有依据，口径记进 README |
| `BadgeCards` | 合作徽章卡一排抬起入场 | 官方徽章文件和准确级别名称 | 没有官方徽章不自造；改色、拉伸都不行 |
| `PortraitFlip` | 人像一排依次翻入 | 授权头像、姓名、职位 | 职位和公司按官网现行内容 |
| `ClosingQR` | 结尾页：口号、权益、联系方式、二维码 | 当次指定的二维码原图 | 二维码用原图不重画；发布前后各扫一次确认链接；二维码本身不做 3D 变形 |

其他内容页（学习方向、功能清单、评价、活动照片、服务列表、机构支持）不需要单独组件：用 `kit.tsx` 的 `Card`（默认 `.rise`，或 `motion="flip"`）排成网格即可。

## 3D 表现形式清单（17 种）

| # | 形式 | 实现 | 示例 |
|---|---|---|---|
| 1 | 3D 地球：点阵大陆、弧线飞线、城市脉冲 | `Globe.tsx`，canvas 三维投影 | CoverGlobe |
| 2 | 卡片环绕轨道，转到背后被遮挡 | `CoverScene.tsx` 的 `Orbit` | CoverGlobe |
| 3 | 星空朝观众飞来 | `CoverScene.tsx` 的 `Stars` | CoverGlobe |
| 4 | 透视网格地面 | `.floor` | CoverGlobe |
| 5 | 有厚度的立体口号铭牌，翻转入场 | `.slab`、`.cover-in` | CoverGlobe |
| 6 | 立体挤出大字 | `.year3d` | YearHero |
| 7 | 鼠标视差分层 | `.scene > .stage` + `parallax` | CoverGlobe、YearHero、ProductPhones |
| 8 | 整面倾斜的滚动卡片墙 | perspective + rotateX/Y/Z | CardWall |
| 9 | 倾斜世界地图 | SVG + rotateX | WorldReach |
| 10 | 流程节点轮流向前抬起 | translateZ + rotateY | WorkflowLoop |
| 11 | 倾斜任务看板 | rotateX | SprintBoard |
| 12 | 产品图透视悬浮，悬停回正 | `.shot` | ProductShot |
| 13 | 手机模型前后叠放 | `.phone` + rotateY | ProductPhones |
| 14 | 产品旋转展台 | translateZ + rotateY | ProductCarousel |
| 15 | 卡片立体抬起入场，悬停倾斜 | `.rise` | 多数内容页 |
| 16 | 卡片、人像翻入 | `.flip` | PortraitFlip、WorldReach |
| 17 | 头像从远处旋转弹出 | `.pop` | PeoplePanel |

第 5、6 项靠多层阴影做出厚度，第 3 项是二维画布上的透视计算；全部不依赖 three.js。

配合使用的平面动效（不算 3D）：多层滚动 Logo 墙（`.offer-row`，12 层）、悬浮（`.float`）、扫光标题（`.shine`）、背景光晕（`.aurora`）、地图飞线与脉冲、照片轮换、流动虚线回环、进度条。

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
