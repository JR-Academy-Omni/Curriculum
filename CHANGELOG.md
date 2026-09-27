# Changelog

## 2026-09-27（续五）· L13 课前包移出课程仓库

- **讲师要求把课前包放到 `~/Desktop/team-ops/`，不放在 `lessons/vibe-coding-master-l13/` 下。** 已移，44 个文件，**在新位置重跑验收通过**（六个原样全绿 + 六个弄坏全红）。
- **两个后果写进讲稿和蓝图，别以后才发现：**
  - **它不跟课件一起进版本管理** —— 改了没记录，也回不去上一版。课前包里有六个 `check.mjs` 和一套虚构设定，跟 deck / 讲稿是强耦合的；deck 改了检查顺序而课前包没跟上，学员覆盖过来会直接看到红的。
  - **`lessons.html` 没法链接到它** —— 原来加的 GitHub 链接已撤掉，换成一行「不在本仓库，在讲师本机，需要请找讲师要」。运营在页面上拿不到它。
- 讲稿 §N 加了一条待决：**N1b 决定课前包要不要进版本管理。** 现状是讲师本机单副本。
- 顺带把讲稿里学员视角的路径统一成 `step-1/`（课前包解开后 step-N 就在顶层），讲师视角的统一成 `~/Desktop/team-ops/`。

## 2026-09-27（续四）· L13 课前包：check.mjs 骨架 + 六个救生艇

- **六个救生艇做完了**（`lessons/vibe-coding-master-l13/rescue/`）。每个目录是「那一步做完之后的**完整状态**」，学员卡住超过两分钟就整个覆盖过去继续跟 —— **线上无助教的唯一兜底。**
  - `step-1` 仓库骨架 + 空索引（①）· `step-2` 加裁决表（①②）· `step-3` 花名册 + 两个角色（①②③）· `step-4` 值改成 `[to supply]`（①②③④）· `step-5` 六条全在（⑤ 是提示、⑥ 查花名册名字）· `step-6` 加八行 workflow。
  - 另有 `skeleton/check.mjs`（P08 里「课前包里有」的那个）、发给学员的 `README.md`、**不发给学员的 `INSTRUCTOR.md`**（K.3 虚构设定已预填 + 每步该说的那一句 + 打包命令）。

- **`verify.mjs`：课前一个命令验收，而且它验的是两件事。**
  - ① 六个目录**原样跑必须全绿** ② 六个目录**被故意弄坏必须变红**。
  - **只验 ① 是不够的 —— 一个永远不会红的检查，和一个不存在的检查，是同一个东西。** 这正是课上翻车② 在讲的事，所以验收脚本自己也得守它。
  - **它第一次跑就咬到一条，而且咬的是我。** 破坏动作写的是「建一个 `sops/` 目录」，结果是绿的 —— **因为裁决表里本来就给 `sops/` 留了位置**（P10 特意讲过「先写进表里是对的」）。检查没坏，是破坏动作写错了。**验收脚本自己也会给你一个错误的绿灯**，这条已经写进讲师页。

- **三个刻意的设计，写进讲师页防止后人当疏漏改掉：**
  - **`step-3` 的角色文件里留着两个编的数字**（5000 元 / 3 个工作日）。它是 P13「那个数字是谁定的」的实物 —— `diff -ru step-3/rules step-4/rules` **只有两行，那两行就是那一整页的全部内容**：*前者看起来很专业，没有人同意过；后者难看，但它在等一个人。*
  - **`step-5` 的索引里有三个没写的角色**，让检查⑤ 打印三行「尚未创建」**而仍然是绿的**。学员一跑就看见 `note` 长什么样，不用讲师解释 `bad` / `note` 的区别。
  - **`people/ASSIGNMENTS.md`（谁戴哪顶帽子）放在 `people/`，不在 `rules/`**，而且文件自己写了为什么 —— 角色文件回答「这顶帽子答应什么」，换个人戴内容不变，**名字属于 `people/`**；所以离职那天 `rules/` 一个字都不用动，**检查⑥ 只扫 `rules/` 就是这个道理**。⚠️ 课上被问到再翻，主动讲会把第二幕拖长。

- **打包纪律写进讲师页**：用 zip 不用 tar（Windows 学员解不开）· `INSTRUCTOR.md` 和 `verify.mjs` 不许打进去 · **发之前确认 zip 里有 `step-6/.github/`**（隐藏目录最容易被打包漏掉）。已实测一次打包，66 个条目、`.github` 在、讲师文件没漏进去。

- 同步：讲稿 §0 清单 / §A4 整段重写 / §K.3 预填 / §N1 划掉 · 蓝图 §14 N3 划掉 · `lessons.html` 加课前包入口。**待做只剩 HANDOUT 和生成器骨架全文。**

## 2026-09-27（续三）· L13 v3.2 · 讲师两条反馈，一条拆掉了「最大的自毁按钮」

- **① 指令层（`AGENTS.md` / `CLAUDE.md`）排到最后做。** 讲师的理由：**一旦开始生效就改不了，或者没权限改了。**
  - 这条抓的是一个真实的时序陷阱：**指令层是唯一一份会反过来管住「你这次施工」的文件。** 你写完它那一刻，帮你建仓库的那个 agent 就开始受它管 —— 它里面一旦有「规则目录的改动必须走 PR」「agent 不许写 `governance/`」，**你后面每一步都要跟自己刚立的规矩打架，而且你可能已经没权限改那条规矩了。**
  - 正确顺序：**规则先定死、检查先跑绿、强制点先挂上，最后才告诉 AI「这些是你要遵守的」。** 一句话：**指令层是对前面所有东西的引用；被引用的东西还没定，引用就是空的。**
  - **顺带修掉一处旧的不一致：** 六层图上 L0 一直标着「今天做一点」，**而课上没有任何一步产出过它** —— 标签是假的。现在标「最后做」，是真的。
  - 落点三处：**P04 六层图 L0 改标 + 一个红框讲理由**（全课第一次出现「顺序本身也是设计」）· **P24 生成器第 6 步末尾明写「最后才写给 AI 的那一份 —— 不许提前写」**（学员回去唯一会重跑八步的地方，零课堂成本）· 八步表第 6 步同步。

- **② P18 整页翻面：不要从反面说，直接正面说应该怎么做。** 讲师指出**每个人的代码仓库不一样，那条检查不一定跑出红的结果**。
  - **这一条推翻了我自己立的「教学决定二」，而且它是对的。** 旧版 P18 是「这条检查我不解释，你先跑」，**整格押在它会咬到学员自己刚写的名字**上。但学员课堂上只写两个角色，角色模板那三段（答应什么 / 独自能决定什么 / 什么必须报批）**并不天然招人名** —— **很多人跑出来就是绿的，那一格对他们完全是空的。**
  - 判据一句话：**一个只在学员恰好犯过错时才成立的教学点，不是教学点，是抽奖。**
  - 新四层：**正面给规矩** → **给理由**（离职那天你只该改一份文件）→ **才跑去验证** → **讲师投屏自己的例子**。
  - **新增的那一半是「没抓到」也要有话说**：*两种可能，别急着高兴，你确实写对了，或者你今天只写了两个角色还没碰到 —— 回去写第十个的时候会碰到。* 不说，那批学员会得出「这条跟我无关」的结论。
  - **「检查从哪来」（第四道判断线）改由讲师自己的例子承重**，从「并行主路径」升成主路径：**学员中没中是随机的，讲师中过是确定的。**
  - **连带拆掉了「本 deck 最大的自毁按钮」** —— P11 原本要全程忍着不提人名，讲师一句好心提醒就整格作废，这条在蓝图 / 讲稿 / deck 源码里重复写了四遍。现在 P11 只是「顺序上没必要提前」，说漏嘴不再有结构性后果。**蓝图 §14 里一条严重度「高」的风险直接划掉。**
  - 四次红改成**「前三次必然，第四次是条件红」** —— 讲稿 §D 加了一列「保不保证发生」，§A2 第 91 分钟那个同步点从「⭐⭐ 支点」降成纯命中率读数，**全 `0` 也照常往下走**。

- **同步范围：** deck 4 个文件（P04 / P18 重写 / P24 / P11 注释）+ `deck.tsx` 纪律 2 + `App.tsx` 教学决定二与四次红 + 讲稿 7 处 + P18 整段重写 + 蓝图 §0.7 整段翻面 / §1.2 / §1.3 / §7.6 / §11.1 / §14 + `lessons.html` 卡片。**37 页重跑截图核对。**

## 2026-09-27（续二）· L13 讲稿整份重生成 v3.1

- **讲稿从 v2.5 的 23 个页头重写成 v3.1 的 28 页逐页口播。** 上一版从 P04 起全部错位（讲稿 P04 =「一个说应该怎样」，deck P04 = 六层图），挂着失效标记。**现在页序、标题、分钟数逐页对齐 deck 和蓝图 §11.1 逐页表**，失效标记撤掉。
  - **全部口播按 v3 的新主链重写**，不是把旧段落挪位置：立论换成「**规矩的力量，不在它写了什么，在谁改得了它**」、反转从第五幕前移到第三幕末、翻车① 的形态从「写不出来」换成「**它给你一段跑得通但查错的代码**」、CI 那页的理由从「现在它自己跑」换成「**刚才那个检查在你机器上，你改得了**」。
  - **新增 §A6 埋点与回收表（七条）。** 上一版只有四条埋点写在蓝图里，讲稿上没有一张表能让讲师课前自查「哪个埋点埋在哪、收在哪」。**漏一个，收口就散一块**，而收口是全节唯一不可压缩的四分钟。
  - **新增 P20 演示 B 的降级路径，并进 §K.5。** 「跟 agent 说『把 CI 弄绿』」这个演示的稳定复现方案仍然是 `[to supply]`（蓝图 N5），**而它是全节风险最高的一格**。讲稿现在写死三条路：现场跑 / 放预录 / 投屏上次的 diff，**并明说「绝对不要现编一个结果」** —— 这节课的价值观就是不许编造。
  - **时间表按 135 分钟重算，六个硬判断点改成八个同步点**（28 / 54 / 68 / 85 / 91 / 99 / 117 / 130）。**第 99 分钟那个点是最容易漏的**：第三幕超支要到第四幕中段才会被发现，那时候已经吃掉一半第四幕。
  - 讲飞点从七条扩到十条，新增的三条都是 v3 的新风险：**P20 讲成「防坏人」**（学员一想「我们公司没坏人」整幕就跟他无关）、**P26 被追问权限就开讲**、P11 说漏嘴那条从「第 34 分钟」改成按页定位（分钟数会漂，页不会）。
  - §C 的 check.mjs 补上**「第 6 条为什么用花名册精确匹配不用人名正则」**的完整理由；§M 附录表补上 v3 新增的 A7 / A8 两页。

- **deck 清掉四处版本残留**：封面「120 分钟」→ 135、`App.tsx` 课型注释「敲到第 116 分钟」→ 第 130 分钟、两处 SoT 版本号（v2.2 / v3.0）→ v3.1。**37 页重跑截图核对，全部干净。**

- **`lessons.html` 的 L13 卡片同步到 v3.1**：时长 135 / Slide 数 37 / 三句话整段换成 v3 版本 / 翻车① 换形态 / 讲稿按钮列出新的章节结构。**上一版卡片上写的立论和反转都还是被推翻的那两句**，运营照着做素材会做错。

## 2026-09-27（续）· L13 结构重排 v3

- **讲师连提七条反馈，前六条互相咬，第七条是其中几条的前提。** 收成两件事：补上「对象」（六层图 + SOP 定位 + 回路）、换掉「为什么」（威胁模型 + 脚本的新角色）。
  - **v3 最大的改动是全课主链。** v2 的理由是**勤勉**（你要记得、你要维护），v3 的理由是**信任**（谁改得了它）。链条：写下来不够 → wiki 谁都能悄悄改 → git 有个你改不了的远端 → **可是规则、检查脚本、给 AI 的指令全在本地，全可以改** → 本地跑检查是给自己的便利不是给别人的保证 → **唯一不在改动者机器上的执行点是远端 CI** → 所以检查放 CI、规则改动走 PR、agent 每次先拉。
  - **一换之后立论、阶梯分界线、CI 存在的理由、`CLAUDE.md` 为什么写拉取，全部跟着变。** 立论从「没有强制点就是许愿」换成 **「规矩的力量不在它写了什么，在谁改得了它」**；阶梯分界线从「上面是硬政策下面是约定」换成 **「上面不在你机器上，下面在你机器上」**。
  - **反转从第五幕前移到第三幕末**（检查挡得住的只有你说得清的），生成器那句降成回声，**避免两个反转互相稀释**。

- **新增五页正课 + 两页附录，重做九页，改五页。**
  - **P03 那就写下来？** 三层反驳，主链的入口。埋点 4：**「你改不了的远端」**。
  - **P04 六层图 + SOP 的位置。** 只给六层，**L6 留一个空格**（七层里 L6 就是阶梯，第一幕给全等于提前亮底），第四幕补上。这张图一次答三件事，最后一句是白送的：**L4 站在 L2 和 L3 上面，没有谁说了算，SOP 写出来也没人执行。**
  - **P07 被读还是被数。** 记录该进 git 还是数据库的判据，一句话。完整三方案进附录 A8。
  - **P16 四道判断线。** 第二道「**能不能转化成形状题**」是 v3 新增，全节最实用的一格 ,而课堂检查④本来就是它的例子，只是一直没被命名。
  - **P20 本地的都可以改。** 含那个演示：**跟 agent 说「把 CI 弄绿」，看它去改检查而不是改文件。** 这是 Vibe Coding 课独有的，而且续上 L12：L12 讲「它可以不读，读了可以不照做」，L13 讲「**它还可以把那条规矩本身改掉**」。
  - 附录新增 **A7 回路图**（六层只画了规则到执行，这是缺的那半边）、**A8 记录存储三方案**（纯 git / 纯数据库 / 混合 + 对账检查）。

- **核心技能重新定义：脚本不是给学员抄的。** 学员的动作从「敲 readdirSync 循环」变成「**说一句话，让 agent 写，然后判它对不对**」。deck 上代码的角色从「要抄的」变成「**要评判的**」，统一三栏。翻车①跟着重做：从「学员卡住写不出来」换成「**它给你一个跑得通、但查的不是你想查的东西**」,**这是静默失败，而且在第三幕就埋下了 L14 的收口**。
  - 这门课真正该留下的那句操作性的话：**改你的说法，不是改代码。**

- **新增两条 deck 纪律**：**页面上不写页码**（理由同不写分钟数）· **不用「它」**（同一页里「它」曾同时指四样东西，按蓝图 §0.6 拆词）。演示 A 补一句 **「这不是它的问题，换个人来结果一样」** ,这是 L12 到 L13 唯一一处把承接做实的地方。

- **37 页全部经 1600×900 实机截图 + 程序化核对。** 查出并修掉：
  - **`overflow: hidden` 被 flex 压扁这个 bug 第四次出现**（这次是 A0 的表）。**这次在源头扫了一遍**，八个文件的表格容器统一补上 `flexShrink: 0`。**一个 deck 里同类 bug 出现四次，说明它是这套布局的结构性风险，应该做成共享组件而不是逐页修。**
  - **「第 0 级」在 P19 出现，而阶梯在 P21** ,真泄漏。兜底三级最后一条改成「只能靠人记得」，**并在阶梯页加了一句回调**，反而多一个回收点。
  - 一处产品名漏进 deck、`as const` 可选字段类型报错三个数组、骨架代码过宽裁切、两页加了内容后撑破底部。
  - **纪律扫描全过**：无页码 · 无产品名 · 无精确计数指纹 · 无「原话」引用 · **P00–P20 无阶梯痕迹** · 角色页无「怎么写」提示。
  - **十二项「注释声明 vs 实际文件位置」逐条核对通过**（自毁按钮 P11 · 那一刀 P18 · 阶梯立论 P21 · 反转 P19 · 收口 P27 · 四次红 P12/P14/P17/P18 · 威胁模型 P20 · 六层图 P04 · 判断线 P16）。

- **蓝图升 v3.0（864 行），deck 37 页（135 分钟）。** 讲稿待整份重生成。

## 2026-09-27 · L13 立项

- **L13 立项：先解剖了一套真实在跑的运营仓库，再定课。** 产出三份内部设计文档（`_SOURCE_ANALYSIS` / `_RULES_REPO_DESIGN` / `_OUTCOME_SPEC`），全程脱敏。**这三份是内部文档，任何精确数字都不得进课件。**
  - **最硬的一个判断：那套东西不是「SOP 管理软件」，是一个 git 仓库被当成操作系统在跑**，规则是文件、权限是分支保护、校验是脚本、自动化是 skill、发布是 PR 合并，**零应用代码**。这直接决定了 L13 的产物形态。
  - **讲师要求把脊椎换掉**（第一版是「强制力阶梯 L0–L6」）：阶梯是归纳出来的框架，**在造这套东西的决定链里它是第 6 个决定**，提到第一位，学员学会的是「怎么给一条规则加强制点」，学不会「该有哪些规则、按什么顺序建」。改成**八个决定**当脊椎，学员按同样顺序为自己那摊事做同样的决定。
  - **讲师后续把单位放宽：「也不一定要是公司，也可以是自己的项目小组。」** 这一条把挂了整轮的学员画像问题基本关掉了，**执行岗答不出「公司审批额度谁定的」，但一定答得出「我们组谁能合主分支」**。新增按规模选形态表（三人 / 十人 / 公司）+ 第五条症状（「只有一个人知道那件事怎么做」，偏小组）。

- **两轮 sonnet 审查，查出的真问题比预期多，其中两条是设计级的。**
  - **① 人名检测正则是坏的（实测复现）**：`由某某审批`、`需要某某负责确认`、`某某总监审批` **全部漏掉**（负向前瞻要求名字后不是汉字，而中文里名字后面天然跟着动词），反而把「黄色」误判成人名。**而这条检查是全节 ⭐⭐ 那一格的开关。** 改成**花名册精确子串匹配**：中英文通吃、零误报，而且正好是参考系统的真实做法，顺带把「海外班怎么办」和「先建花名册教人和角色是两张表」一起解决。
  - **② 全节最重要的那条检查，课堂上从来没红过（实测复现）**：`标了 approved 不许残留 [to supply]` 的失败分支永不可达，因为整节课没教学员写 `Status:` 字段。**它被标成「收口所依赖的那一条」，却只靠讲。** 新增一个动作：让学员把一份自己觉得写完了的文件标成生效，跑，**红**。收口从「最后才听到」变成「中途亲手撞到一次」。
  - 另修：§12 检查样例库有三条跑不起来（缺存在性守卫会 ENOENT 崩溃、调用未定义的 `walk()`、假设了课堂没建过的目录）；检查条数 / deck 页数 / 埋点回收页码 / 砍法省时数四处记账矛盾；**讲评对照答案排在当场验证之前**（学员先看到标准答案，反转就没有意外感了）。
  - ⚠️ **自查出一条该脸红的**：两份文档都写「需要 Node ≥18，因为脚本用了 top-level await」，**而全部代码里一个 await 都没有**。**在一节教「不许编造」的课里编了一个技术理由**，已删，改成实话。
  - ⚠️ **订正两处我自己先说错、审查也跟着错的**：早先声称「CI 从未进过正课」「git 基本操作没教过」，**两条都错**，L4 正课有建仓、Actions、Pages、开 PR，而且立场是「那些 git 命令都是 Agent 的活，不用你背」。审查也判错，原因可查：**L1–L4、L8、L9 根本没有蓝图文件，只有 RUNSHEET，它只查了蓝图。** 订正后省下本来要花在 git 速通上的 8 分钟。

- **L13 蓝图 `VIBE_CODING_MASTER_L13_BLUEPRINT.md` v2.2 定稿，1434 行。** 120 分钟**线上直播动手课（无助教）**，硬产物 = 一个从空目录长出来的规则仓库 + 6 条检查 + **4 次学员自己造出来的红** + 1 个被 CI 挡住的 PR。
  - **三句话**：立论**「一条规则如果没有强制点，它不是规则，是许愿。」**· 反转**「生成器的好坏，看它留了多少空，不是填了多少。」**· 收口**「留白在等的那个人，就是你该去谈的那场话。」**
  - **教学决定：规矩不教，让它被抓到。** 写角色文件那一页**故意不说「不许写人名」**，后面那条检查抓到的是学员自己刚写的名字。**讲师一句好心提醒整格作废**，蓝图、讲稿、deck 源码里重复写了四遍，是故意的。
  - **教学决定：不发 starter kit，仓库当堂长出来。** 只发 `check.mjs` 骨架 + 六个救生艇目录。代价是全班同步难度上升，对冲手段是「每一步结束跑一次检查」，**这是把课从管理研讨拉回动手课的唯一手段**。
  - **线上无助教是结构性约束**：所有信号走聊天框数字（翻车③ 改成「抓到打 1 / 没抓到打 0」，**反而给了讲师一个精确的命中率读数**）；学员只贴终端输出不贴文件内容；每个等待点都写好话术，**直播最致命的是空等**。
  - **脱敏纪律约束的是讲师，不是学员**（这一条第一版写反了，已更正）：讲师全部材料脱敏；**学员写真名真金额真客户全都是对的**，而且这是教学必需，编的公司永远答得上「这个数谁定的」，也永远不疼。deck 因此不出现产品名（顺带国内班海外班共用一份）、不出现精确计数、**不出现任何「原话」式引用**。

- **架构层拆成 L14（讲师定方案 A）。** 讲师要求「把这套系统用的是什么技术和治理方案讲清楚，什么权限、什么 MCP、什么技能、怎么维护、有哪些仓库」。这块讲透要 10–14 分钟，120 分钟装不下，**而且顺序本身就是教学内容：地基错了，上面那层越强越危险。**
  - 内容库 `VIBE_CODING_MASTER_L14_ARCH_BRIEFING.md`（439 行，交底五问）+ 课程结构 `VIBE_CODING_MASTER_L14_BLUEPRINT.md`（596 行，《它能碰什么》）。**结构文件不复述内容，这是本课程自己的规矩用在自己身上。**
  - L14 收口：**「它最危险的时候，不是它做错了事，是它什么都没做，而你以为它做了。」**一句话收掉四格：查询失败报成 0 · 连接过期没人知道 · 有人点了合并没人读 · 离职残留的授权还在，**四件事是同一个形状：看起来发生了，实际没有。**
  - L13 因此新增 **P19 全景三仓图**（一分钟，不展开），接口句写死，deck 从 27 页变 28 页。

- **L13 deck 做完：29 页（封面 + 正课 P00–P21 + 附录 A0–A6），`npm run build` 通过，dev server 实机核对关键页渲染正常。** 引擎逐字拷自 L12（`SlideEngine` / `ui` / `CameraBubble` / `theme` / `main` 一行没动）；`deck.tsx` 换成本节构件：`SYMPTOMS` 五句症状 + `LADDER` 强制力阶梯 + `CRASHES` 三次翻车 + `SWITCHES` 分支保护五开关 + `SCALES` 按规模选形态 + `STEPS` 八步总表，新增 `Term`（终端输出块，视觉上跟代码块分开：这是「它说了什么」不是「你写了什么」）和 `ChatSignal`（线上信号条）。
  - **deck 纪律写在 `deck.tsx` 顶部共十条**，其中三条是本节特有的：**写角色那一页不许出现任何「怎么写」的提示**（最大自毁按钮）· **强制力阶梯只能从 P14 开始出现**（前十四页学员在动手和被咬，不在学框架）· **不出现任何产品名**。
  - 构建时修掉一处类型错误：`LADDER` 用 `as const` 导致可选字段在联合类型里不存在，改为显式 `LadderRow` 类型。
  - **28 页全部经 1600×900 实机截图 + 程序化核对**（scratchpad 里临时装的 puppeteer，**没进项目依赖**；检查项：超出 1600×900 画布 / `overflow` 非 visible 且内容更大的横向与纵向裁切）。**查出并修掉两类真问题**：
    - ① **P05 的 `AUTHORITY.md` 代码块右边裁掉 33px**，每行尾部挂的「（以后再建）」注记把行撑宽了。注记移到代码块下方的说明行，顺带把 `people/` 那行的「公司里有谁」改成「**这儿有谁**」（单位放宽之后，「公司」不该再漏进 deck），并给左列 `alignSelf: flex-start` 修掉纵向撑满。
    - ② **`Code` 组件被 flex 父级压扁时会静默裁掉代码行**（P15 两块各差 13px / 5px）。根因是 `overflow: hidden` + flex 默认可收缩，**而学员正在照着敲**。给 `Code` 加 `flexShrink: 0`：**宁可让它撑破画布（截图核对会抓到），也不能悄悄少一行。**
  - ⚠️ **第一版漏了封面。** P00 叫 `Cover`，但实际是第一页内容，**课名《造一套让规矩成立的系统》从头到尾没在屏幕上出现过**，只有一个「第十三节」小标签。补一页真封面（课名 + 副标题 + **「今天你带走什么」三行** + 承接句），**所有页码后移一位**，28 页变 29 页。
    - **线上直播尤其需要封面**：学员是陆续进来的，封面就是他们进来时看到的东西。而「带走什么」放封面而不是留到最后，是因为**动手课的出席动机在产物上，不在主题上**。
    - 补封面时又被核对脚本抓到一次：背景那条「阶梯」暗纹我让它出血到画布外 60px，**在 1600×900 固定画布里出血没有意义**，收进来了。
  - ⚠️ **讲师看完 deck 提了两条，都成立，而且第二条更要命。**
    - **① 「状态仓」这个叫法不对** ,它承重的性质不是「装当下状态」，是**只能追加、不能抹掉**。改叫**记录仓**。分支保护那五个开关为什么那么配，全部从这一条推出来；而**当下状态其实活在学员已经在用的工单系统里，这两个仓都不装** ,这一点原来完全没说。全仓 28 处改名。
    - **② 「这张图没有讲清楚这两个仓有什么区别」** ,原来那一页只摆两个框写「强制 PR / 不强制 PR」，**什么都没解释**。重做成四行对照（它回答什么 / 内容能不能改 / 谁写 / **最怕什么**），最后一行是支点：**规则仓怕「改了没人知道」，记录仓怕「写过的被抹掉」，两种怕法配出两套相反的保护。**
    - 连带把「不会 git 的同事」从主理由降成**后果**（真理由是「追加要零摩擦，而有摩擦的记录没人写」），并让五开关表回收那两句「最怕什么」，点出最反直觉的一格：**中间三行两边都是「开」，但理由不同**。
    - 改这一页时**又撞上同一类 bug**：五开关表加到 5 行之后，`overflow: hidden` 的表格在 flex 列里被静默压扁，**最后一行直接消失而且不报错**。跟 `Code` 组件那次是同一个根因，同样加 `flexShrink: 0`。**一个 deck 里同一类 bug 出现两次，说明它是这套布局的结构性风险，不是偶发。**
    - deck 纪律新增第 11 条：**页面上不写页码**（理由同不写分钟数 ,插一页就全错）。
  - **deck 纪律用源码扫了一遍**（脚本抓不到的那部分）：无绝对分钟数 · **写角色那一页无任何「怎么写」提示** · P00–P13 无阶梯痕迹 · 无待填空白 · 无产品名 · 无精确计数指纹 · 无「原话」式引用。全部通过。

- **按硬规则登记：`lessons.html` 新增 L13 卡片**（含蓝图 / 讲稿 / 三份设计文档 / slides 源码入口）。**待补**：HANDOUT、六个救生艇目录、生成器骨架、L14 的 RUNSHEET 与 deck；**待实测**：免费账号私有仓分支保护当前策略、国产平台能到强制力第几级、120 分钟 dry run。


## 2026-09-27

- 更新 AI 一人创业营 W10 为「AI 内容工厂与智能投流实操」：使用 Codex + Buffer MCP、JSON Schema、HITL 与异步状态回读，并补入 Little Henri、Google / Meta / LinkedIn / TikTok Ads、通用 Landing Page 和 5 层 AI 营销 OS（`ai-solo-founder-bootcamp`；本地与 production W10 课时）。

## 2026-09-23 — WorkBuddy AI 智能办公实战课程方案

- 新增 `WORKBUDDY_COURSE_PLAN.md`，提供面向澳洲华人职场人士的 4 小时 WorkBuddy 实操工作坊设计。
- 课程覆盖安装与安全配置、办公任务、个人 AI 专家、远程工作，并将微信群记录与 Blender 3D 项目划为独立进阶模块。
- 新增 `workbuddy-workshop` 线上直播课程页面、结构化大纲与 1242×1660 可下载海报，并接入课程海报中心和静态部署流程。
- 根据课程原始选题重新定位为《WorkBuddy AI 智能办公全能实战课》：安装缩短为 25 分钟，主体明确覆盖技能应用、AI员工、AI专家和远程操作四大主题；“别再只问 AI，让它开始交付”保留为宣传口号。

## 2026-09-11

- 新增三张可独立售卖的 AI 自动化课程竖版海报，分别聚焦中文媒体 AI 自动化、TikTok + Meta AI 自动化和 AI 全自动内容工厂；对外版本移除 W8-W10、OPC 与创业营内部上下文，仅保留课程价值、Michael Nie、日期与报名信息（`ai-solo-founder-bootcamp/public/promo/ai-automation-standalone`；本地）。

- 重构 OPC 创业营 W8-W10：W8/W9 分别讲清公众号、小红书、抖音与 TikTok、Meta 系平台的特色、内容形态、运营方法和 AI 私信边界；W10 改为现场搭建从单一资料源、自动选题到原生内容生成、自动发送、状态回读与反馈学习的全自动内容工厂；三周主讲统一确认为 Michael Nie，并同步静态课程页与师资排课（`ai-solo-founder-bootcamp`；本地）。

## 2026-09-10

- 新增 AI Engineer 第七期 48 页招生公开课与 MiniClaw Live Coding：覆盖课程安排、全球学员、校友证据、Product Thinking、OpenClaw / MiniClaw 架构、TUI、Harness、Memory、Skills、Provider Router、Trace 与人工审批，并接入 curriculum 生产部署工作流（`lessons/ai-engineer-cohort-07-miniclaw`）。

- 调整 OPC 营销三节课为 W8 中文媒体 AI 自动化、W9 英文媒体自动化、W10 内容工厂自动发布，将 X 配套自学迁至 W9，并同步教学计划与课程页面（`curriculum/ai-solo-founder-bootcamp`；本地）。

- 调整 OPC 创业营 W10 为 AI 内容工厂：实现 AI 自动化发布，将原 SEO & GEO 保留为 3 小时周中独立课（时间待定），同步课程大纲、教学计划与静态课程页（`curriculum/ai-solo-founder-bootcamp`；本地）。

## 2026-09-09

- 更新 `talk-deck` Skill 与 React Deck 模板，将第五期结课 PPT 的网格纸、marker underline、圆角主面板、克制描边和高密度课程排版设为新的视觉黄金范本，并新增可复用 `DeckFrame` / `Panel` / `RoleFocusSlide` 组件（`.claude/skills/talk-deck`、`lessons/_template`）

- 扩展 AI Engineer 第五期结课 deck 的第七期实践路线：新增 W1 ADLC 证据链并逐周展开 W1–W13 的 Design System、MVP、Voice AI、Evaluation、RAG、MCP、Agent、Memory、Harness、Model Routing 与 Production Readiness，同时重写 FDE 职责说明（`lessons/ai-engineer-cohort-05-final`、`ai-engineer-bootcamp`、`lessons.html`）

- 新增 AI Engineer 第五期结课总结课件的正式构建与云端发布路径，并更新 `talk-deck` Skill 及 React Deck 模板的圆角视觉规则（`lessons/ai-engineer-cohort-05-final`、`.claude/skills/talk-deck`、`lessons/_template`）

## 2026-09-08

- 完成第五期到第七期的逐条视频继承复核：第七期现保留 51 个可播放历史录像，补齐前半段 GenAI、Transformer、Embeddings、AI Coding、RAG、LCEL、Production RAG 与求职内容，修正 Prototype 错挂 GPT Store，并排除标题与实际录像不符的旧 RAG 条目（`ai-engineer-bootcamp`）

- 修复第七期往期录播继承范围，将第五期后半段 23 个已转码的 RAG、MCP、Agent、Memory、Harness、Model Routing、Fine-Tuning 与 Evaluation 视频映射到当前课程，并排除一个不可播放的重复转码队列记录（`ai-engineer-bootcamp`）

## 2026-08-31

- 将逐周技术栈从 Practice 工具表升级为 Theory + Practice 的完整 AI Engineering Stack，增加模型机制、Token/Context/Cache、AI OSS、RAG/Eval/Agent/Memory/Governance，并降低通用全栈技术的视觉权重（`ai-engineer-bootcamp`）

- 将 13 场 Practice 的“本周实践工具”扩展为 20–25 个独立技术 Tag，区分课堂实作、AI-native 新能力与 Platform/Cloud，并将 Langfuse 和各项 AWS 服务分别列出（`ai-engineer-bootcamp`）

- 优化 10-Layer Skills Tower 的技术栈视觉：全部技术点改为胶囊 Tag，有正式 Logo 的品牌或工具在 Tag 左侧显示 Logo，概念类能力保持纯文字（`ai-engineer-bootcamp`）

- 将详细大纲 10-Layer Stack 重做为官网 Skills Tower 的 PDF 静态版：英文层名为主、中文为副，并展开 10 层的 50+ 具体技术标签（`ai-engineer-bootcamp`）

- 将第七期全部 Practice 页面改为中文优先的“实践课 Live”，强调老师现场带做、调试和验收，并逐周增加四节点 System Design 关系图与实践技术栈（`ai-engineer-bootcamp`）

- 将 W03 Context Engineering Theory 从一页拆为两页，分别呈现 Context 选择与组装、Lifecycle 与 Trust/Observability/Blueprint，避免压缩字号；详细大纲调整为 32 页（`ai-engineer-bootcamp`）

- 将 AI Engineer 第七期每场课的技术视觉扩展为 8 个 Core + Popular OSS 标识，实践周页改成两排大型 Logo 卡，覆盖模型、AI Coding、UI、RAG、MCP、Agent、Memory、Observability 与 Production 生态（`ai-engineer-bootcamp`）

- 优化 AI Engineer 第七期详细大纲营销版：隐藏内部 Lesson Code，逐周展示真实技术 Logo 与实践 Build Stack，并重新生成可点击、Mac 兼容的电子书 PDF（`ai-engineer-bootcamp`）

## 2026-08-29

- 扩展 AI Engineer 第七期推广计划为全球分区执行体系，加入澳洲、中国大陆、港澳台/新加坡、北美、英国/欧洲的时区与本地化策略，以及短期冲刺、长期品牌、五类增长、实验矩阵和衡量框架（`ai-engineer-bootcamp`）
- 新增 AI Engineer 第七期 Seedance 短视频 Campaign：用 12 个连续机制与事故叙事覆盖教学方式、13 周 Build、RAG、Memory、Harness、A2A Governance、Model Routing 与面试证据（`ai-engineer-bootcamp`）
- 明确 Seedance 短视频矩阵是可协商候选池，不锁制作数量、顺序、语言、片长、视觉隐喻或 CTA（`ai-engineer-bootcamp`）

## 2026-08-27

- 调整第七期 A2A 排课，从 W8 编排内容移到 W11 Governance，补齐身份、信任、授权委派、数据共享、审计、撤销和责任边界（`ai-engineer-bootcamp`）
- 重构第七期 W8 Practice 为 Data Sources → Repository/Data Layer → Domain Services → Permission/Audit → MCP Adapter → CLI，禁止在 MCP handler 内堆 ORM 与业务规则（`ai-engineer-bootcamp`）
- 增强第七期 W8 Multi-Agent Theory，对齐 CCAR-F orchestration domain，并加入 Claude Agent SDK 与 Managed Agents 架构模式、隔离、委派、失败和成本判断（`ai-engineer-bootcamp`）
- 调换第七期 W6/W7 Practice，改为 Evaluation Pipeline First → Build and Prove Policy RAG 的市场主流 Eval-Driven Development 顺序（`ai-engineer-bootcamp`）
- 增强第七期 W7 Agents/ReAct Theory Live，加入 Claude Agent SDK 的 sessions、tools/MCP、permissions、hooks、streaming、interrupt 与跨框架选型（`ai-engineer-bootcamp`）
- 新增 AI Engineer 第七期 25 场 Live 的 Core Stack / Popular OSS Ecosystem 选型表，W6 Core 加入 FastMCP 并补充 Pi Agent Harness 的 CLI/runtime 定位，覆盖 AI Coding、UI、RAG、MCP、Agent、Memory、Harness、Governance、Routing 与 Evals（`ai-engineer-bootcamp`）
- 重构 AI Engineer 第七期 W5 Practice 为 Spec-to-Work 与 Living Documentation 工程工作区，加入 Wiki、Architecture Diagram、ADR、Hooks 和 Project Skills 交付（`ai-engineer-bootcamp`）
- 重写 AI Engineer 第七期 W3 Context Architecture Blueprint，删除把 Context Engineering 等同于固定 Prompt Template 与 CareKind 字段的旧定义（`ai-engineer-bootcamp`）
- 修正 AI Engineer 第七期 W3 Practice 为 Claude Code Rapid MVP Build，删除 W3 实践接入模型的旧口径，明确 W4 才第一次接入 Voice AI（`ai-engineer-bootcamp`）
- 加入 AI Engineer 第七期 W2 Claude Code frontend design workflow、Design Brief、方向比较、截图反馈和人工 Product Design Review（`ai-engineer-bootcamp`）
- 补强 AI Engineer 第七期 W2 的 LLM Efficiency 内容，加入 KV Cache、Prefix Cache、Response Cache、安全失效策略及 TTFT/命中率/Tokens Saved 验证（`ai-engineer-bootcamp`）
- 重构 AI Engineer 第七期 W2 理论侧重点：以 Token Budget 与 Context Window 工程判断为主线，补齐可进入/应排除的上下文内容及长上下文质量、延迟、成本边界（`ai-engineer-bootcamp`）
- 修正 AI Engineer 第七期 A4 大纲 W1 的课程定位，由“AI 产品”改为“AI 系统”，并补齐系统组成表达（`ai-engineer-bootcamp`）
- 新增 AI Engineer 第七期 A4 大纲的 macOS Preview 兼容渲染流程，从已验证 HTML/PDF 生成高清扁平版，规避 Type 3 中文字体显示差异（`ai-engineer-bootcamp`）
- 扩展 AI Engineer 第七期 W1 岗位地图，加入 Applied AI Engineer、FDE、AI Builder、AI Solutions Engineer 等 title 变体及与 ML/Data/Software 岗位的职责边界（`ai-engineer-bootcamp`）

## 2026-08-25

- 统一 AI Engineer 第七期总览页、主海报、设计规范与推广计划为 Editorial Premium 柔和技术栈风格，重制 1242×1660 主海报 PNG，并以 6 个宣传点、5 个内容方向、30 天节奏和渠道原生格式替换第五期旧口径（`ai-engineer-bootcamp`）
- 恢复 AI Engineer 页面原定 Editorial Premium 视觉：以已确认的 A3 V5 十层技术栈海报为风格基准，加入无文字紫橙玻璃 3D Stack Hero、官方 Logo、奶油渐变、圆角卡片与柔阴影，移除误用的 Neo-Brutalism（`ai-engineer-bootcamp/public`）
- 统一 AI Engineer 第七期全部当前课程 HTML：课程总览、系统架构、四个交付阶段、学习方式与面试能力均读取同一份第七期排课口径；旧版长页面、Review 与美国第六期 Landing 原样归档并保留兼容 URL（`ai-engineer-bootcamp/public`）

- 新增第七期数据驱动大纲网页、主宣传海报与无字 Agent 系统主视觉，登记第七期入口并保留第五/第六期历史资产（`ai-engineer-bootcamp`、`posters.html`）
- 强化第七期定位为“每周理论 + 独立实践双 Live”，明确实践从 W1 在同一 CareKind repository 从 0 搭建完整 production Agent 产品，而非理论课附属 Lab（`ai-engineer-bootcamp`）
- 保存第七期最终总结与质量审计，记录 78.1/100 GOOD、10 项亮点、P0/P1 缺口、Advanced Track 和外部依据，并补齐正式 Live 的 week/track/order/level/knowledge/status（`ai-engineer-bootcamp`）
- 合并第七期延长实践为 W13 一场 180 分钟 Production Readiness Review & Demo Day，标准 Remote MCP/Auth/部署/CI/CD 由学生课前完成，正式排课更新为 25 场 Live、45 小时（`ai-engineer-bootcamp`）
- 确认第七期 W12 Production AI System Design/Model Routing 理论与 CareKind Model Router 实践，旧 Demo Day 移为延长实践线最终候选（`ai-engineer-bootcamp`）
- 修正第七期 W11 实践为 `Build the CareKind Production Agent Harness`，将原 8 项 production evaluation/safety 内容完整移动为 W13 延长实践候选（`ai-engineer-bootcamp`）
- 确认第七期 W11 `Productionize the CareKind Agent` 实践，记录 8 项 production eval、tracing、red-team、threshold 与 release hardening 内容（`ai-engineer-bootcamp`）
- 更新第七期 W10 为 production Agent Harness 理论与 CareKind 安全长期 Memory 实践，加入 write gate、scope、lifecycle、permission、audit 和 poisoning 测试；Model Routing 实践回到待排池（`ai-engineer-bootcamp`）
- 确认第七期 W9 Agent Memory/State 理论与 bounded CareKind Agent 实践，补齐 tool loop、termination、fallback、human review 和 trace（`ai-engineer-bootcamp`）
- 确认第七期 W8 Multi-Agent 理论与 CareKind MCP/CLI 实践，补齐 tools、权限、audit 和故障排查边界（`ai-engineer-bootcamp`）
- 恢复第七期 W3–W7 已确认理论线，明确理论与实践独立排课，修正 W3/W4 被误标为待讨论的问题（`ai-engineer-bootcamp`）
- 重排 AI Engineer 第七期 W1–W7 实践节奏：W3 非 AI 业务底座、W4 Voice STT 首次 AI、W5 Structured Documentation、W6 Policy RAG、W7 RAGAS 与 MVP 验收；W8 以后重新待排（`ai-engineer-bootcamp`）

## 2026-08-24

- 更新 AI Engineer 第七期 W5–W7：RAG 主线锁定为 W4–W5 两周，W5 必修 RAGAS 基础测试，W6 改为 Tool Calling/MCP/CLI，W7 只锁定 Agents/ReAct 理论课并保留实践课待讨论（`ai-engineer-bootcamp`）
- 升级 AI Engineer 第七期 Phase 10，新增 AI Governance & Risk Management 直播课与 ISA Governance Pack Quest，同步课程大纲、介绍 Deck、概览页和架构页（`ai-engineer-bootcamp`）
- 落地 AI Engineer 第七期正式大纲与 `outline.json`：12 周每周理论/实践双 Live，新增 CareKind 连续项目、Production RAG、Compliance-aware Model Routing，收束为 24 场正式直播并保留旧内容为录播/Lab/Quest/选修（`ai-engineer-bootcamp`）
- 更新 AI Engineer 第七期 W1 理论课，聚焦 GenAI 基础、Applied AI 系统全景与 AI Engineer 岗位边界，Ops 降为生产意识预告（`ai-engineer-bootcamp`）
- 更新 AI Engineer 第七期 W2 理论与实践排课，建立 Transformer 课前录播 + Live 工程理解，并将 CareKind Care Note Drafting 的 Design System、角色权限、业务状态与 UI 验收写入课程 SoT（`ai-engineer-bootcamp`）
- 更新 AI Engineer 第七期 W3/W4 为 Context single-model baseline → CareKind Policy RAG 的连续递进，保留 Chain of Thought，记录 Memory/Tool Calling/完整 Prompt Injection 的后续排课边界，并移除无证据的效果百分比（`ai-engineer-bootcamp`）
- 建立 AI Engineer 第七期 W0–W4 Required/Conditional/Pool 学习顺序，将 94 个候选条目收束为 29 个固定主线、14 个诊断补齐和 51 个待排 Pool，明确每周前置、后置、Quest 与学习时长（`ai-engineer-bootcamp`）

## 2026-08-21

- 新增 `opc-offer-mvp`、`opc-shipping-review`、`opc-first-dollar`、`opc-customer-acquisition` 四个学生 Skill 与共享 Founder OS，生成中文安装包并绑定生产课程附件（`ai-solo-founder-bootcamp`）

## 2026-08-19

- 新增 AI 一人创业营 W3《这是不是一门好生意 · Prove the Business》网页版讲课 deck：32 张 React SlideEngine slide，讲师 Stan Luo（Ex-McKinsey），对应 `outline.json` 的 `L09`（2026-08-23 周日 14:00–17:00）。主题是「算账」不是「做东西」——全程不产出对外物料，只产出判断。六个环节照 outline L09 逐条做、不自创：顾问看生意的三个动作（拆成可算的部件 → 找结构性约束 → 看约束解不解得开）+ indie hacker 三种自我欺骗 + 证据梯度 L0–L4（把 W2 那 5 场访谈摆上尺子，「0 就写 0」）；七条变现路径全景 + 赚钱算式（客单价 × 目标单量 − 可变成本 = 月毛利）+ $1k / $10k 反推表 + 单量四来源产能上限；麦肯锡四把尺子（市场规模自下而上算不甩 TAM / 竞争看「钱现在正付给谁」并把 Excel 与实习生算进替代方案 / 单位经济算两套贡献并把创始人时间折成钱 / 一人公司只有行业积累·分发渠道·数据流程沉淀三种现实护城河）+ 现场四维打分；中段 30 分钟 Founder Exchange；Stan 主刀现场拆 3–4 个学员 idea（赚钱算式 / 形态 / 结构性风险三层追问，台下同步做十问答题卡）+ 想改方向就改 W1 那份 SoT 原件、不新建文档（六个业务字段取自 `W1_RUNSHEET.md` §1.2）；形态四选一 + 定价五选一 + 三维决策框架 + 价格 anchor 四步 + 组合挑错（订阅 × 一年用两次 = churn 必死）并映射到 W7 的收款方式；最后现场 20 分钟写一页裁决书，继续 / 调整 / 换三选一并明写「允许写换」。数据纪律从严执行 `HANDOVER_DECKS.md` §2.3：deck 内不出现任何具体金额、转化率、市场规模或案例收入，需要数字处一律留白由学员现场填，反推表明标「这是算术，不是承诺」，outline 里的 Freemium 转化率 1–5% 与早鸟 30–50% 只标注为课程大纲经验区间而不印成结论，L10 的「6 个月做出 $1k MRR」按不承诺金钱结果改述为「半年内第一个收入目标」，一个案例都不写（`W1_CASE_STUDIES.md` 不在本仓库、来源无从核对），22 页带 `SourceNote` 出处条。引擎 `SlideEngine.tsx` / `ui.tsx` / `CameraBubble.tsx` / `theme.ts` / `main.tsx` 逐字从 `lessons/_template` 拷贝未改动，`DeckTable.tsx`（含 `FitBox` / `SlideHead` / `Punchline` / `SourceNote`）复用 W4 版本，新写的只有内容层。按 `HANDOVER_DECKS.md` §4.1 把中段 30 分钟交流排进时间表（outline 六个 step 一个不删，按比例压到 140 分钟，step ⑥ 现场只写 20 分钟、余下落到课后 L11 自学）。配 `PRD.md`（180 分钟节奏表、逐页 spec、数据纪律说明与 4 条上台前未决项）与 `README.md`（上台前四件事：讲师署名待本人确认 Principal 拼写与能否实名、课前指定上台被拆的学员、补主场城市、落实混合班 Tutor 排班）。32 页逐页实测 FitBox scale 全为 1、无内容裁切、无元素超出 1600×900 画布。已登记 `lessons.html` 并接入 `deploy.yml` 的 Build 与 Assemble 两处（`lessons/ai-solo-founder-w3`、`lessons.html`、`.github/workflows/deploy.yml`）
- 本期 W3 / W4 排期对调留痕：W4「把想法做出来」已于 08-16 先上，W3 排在其后（08-23）。W3 deck 的 15 周路线页、定调页与下周预告均按对调后的顺序写；`outline.json` 未改动（沿用既定处理：只换排期、不动大纲）。同时修正路线页中 W3 那格的文案——W4 deck 写的是「访谈真实客户」，那其实是 W2 自学 `L08` 的动作，本 deck 改为与 `L09` 一致的「算清楚它到底赚不赚钱，写下继续、调整还是换」（`lessons/ai-solo-founder-w3`）

## 2026-08-08

- 新增 AI 一人创业营 W2《你的 AI 员工上岗 · Agents at Work》网页版讲课 deck：35 张 React SlideEngine slide，沿用 W1 的引擎与 Register B 视觉。主线是把 W1 的「懂你的秘书」升级成「替你干活的员工」——四条 agent 路线现场选型（Hermes / 龙虾 OpenClaw / Codex / Claude Code，只对照定位与适用场景，价格与系统要求标注以官方页面为准）、装机四检查点、五类权限的授权边界与审计要求、敏感行业本地路径与数据红线、agent 工作说明书（JD）五段写法与合成示范、JD 与 SoT 的分工（agent 读 SoT 不改 SoT）、中段 30 分钟 Founder Exchange 与 W2 首次组队及半页组内契约、Agent Schedule 五段结构与五个案例（竞品监控 `0 7 * * *` / SEO 周报 `0 9 * * 1` / 财务月报 `0 8 1 * *` / 周报 `0 18 * * 0` / git 日报 `0 22 * * *`）、cron 速查、跨平台定时机制「关机还跑不跑」对照、五个失败模式兜底、责任边界、agent 产出不等于市场证据、Mom Test 访谈口径与本周作业。新增 `ScheduleCase.tsx` 模板 + `data/schedules.ts` 承载五个同构案例页；配 `PRD.md`（含 180 分钟节奏表、逐页 spec、红线自查与 5 条上台前未决项）与 `README.md`。按 `HANDOVER_DECKS.md` §4.1 把中段 30 分钟交流排进时间表（outline 六个 step 一个不删，各压缩 5–10 分钟腾出）。已登记进 `lessons.html` 并接入 `deploy.yml` 的独立构建与 Assemble 路径（`lessons/ai-solo-founder-w2`、`lessons.html`、`.github/workflows/deploy.yml`）

## 2026-08-02

- 扩展 AI 一人创业营 W1 的 Founder Club 前置说明：在 15 周路线页直接列出 W14 融资准备、W15 Traction / Investor 双 Track、毕业后 Intro Desk 与 30 / 60 / 90 天持续运营；新增学院与 Founder Club 分工、双 Track 进入条件、Intro Desk 六步流程及边界页，以及 Salon、Mastermind、Office Hour、互为客户市场和毕业后行动表页，deck 更新为 45 页（`lessons/ai-solo-founder-w1` / `ai-solo-founder-bootcamp`）
- 统一 AI 一人创业营 W1 课程全景中的 W11 正式名称为“Growth Hacking · 增长黑客”，并按 PR #64 补清 AARRR 最大漏水环、推荐循环与一次 10 渠道 launch 的 Phase 2 收官动作（`lessons/ai-solo-founder-w1`）
- 重做 AI 一人创业营 W1 的 Sponsorship SoT 案例左侧：用拟真 Google Drive 路径、搜索框、Word 文档、Excel 表格与图表、PPT 图表缩略图和六份互相冲突的 final 版本，替代纯文件名列表，让版本灾难与右侧唯一当前 SoT 的对比一眼可见（`lessons/ai-solo-founder-w1`）
- 新增 AI 一人创业营 W1 前置“创业营为什么存在”页：明确有无 Idea 都从行动开始、第一周建立公开内容窗口、每周中段互评与真实支持，并把“课程期间真实业务收入覆盖并争取超过学费”写成经营目标而非收益保证；同步把 Phase 2 纠正为 Go To Market，把 AI 视频实操陪跑与小红书图文诊断室分别呈现为独立 90 分钟线上课，补入英文媒体 / Podcast / Founder feature 外联；把 Phase 4 统一为 Founder Club，新增资金形式、投资材料、Data Room、企业实体、股权、IP、合同与治理准备页，并明确专业建议边界（`lessons/ai-solo-founder-w1` / `ai-solo-founder-bootcamp`）
- 增加 AI 一人创业营 W1 的 Beachhead Market 教学：依据 MIT Sloan / Bill Aulet 的 Disciplined Entrepreneurship 框架，把“第一个用户”纠正为一群购买方式、价值判断与口碑网络相近的首个切入市场；同时把 LLM / SoT 页改成大型活动 Sponsorship Deck 的 Google Drive final-final 版本灾难案例，讲清价格、权益、名额、Logo 与联系人只应从当前 SoT 生成（`lessons/ai-solo-founder-w1` / `ai-solo-founder-bootcamp`）
- 调整 AI 一人创业营 W1 叙事顺序：把原本位于课尾的 15 周路线、阶段成果、每周 Skills 与时间投入四页整体移到封面和本节目标之后，让试听学员先看清完整课程安排，再进入创业、SoT 与个人 AI OS 主线（`lessons/ai-solo-founder-w1` / `ai-solo-founder-bootcamp`）
- 扩展 AI 一人创业营 W1 的 SoT 教学段：以“到底哪一份算数”建立需求，再拆解 Single / Source / Truth 三个承诺，新增 LLM 上下文冲突解释，并把 SoT 的客户问题、竞品流程、初步交付、验证动作、证据与版本边界分别映射到对应 AI Skill，让试听学员看到后续 15 周的能力增长路径（`lessons/ai-solo-founder-w1` / `ai-solo-founder-bootcamp`）
- 重做 AI 一人创业营 W1 第 11 页三道硬门槛：以 NOT YET 决策面板和 USER / MONEY / SPEED 三个连续闸门替代横向说明条，补清每道门的可观察过关标准与不过关后的缩小动作（`lessons/ai-solo-founder-w1`）
- 重做 AI 一人创业营 W1 第 9 页 Opportunity Scan：改为“本人提供真实经历 → AI 只追问事实 → 留下 3 个可验证问题”的单向扫描构图，明确 AI 不得发明用户、数据、痛点或付费意愿，并按 4 / 7 / 4 分钟完成课堂练习（`lessons/ai-solo-founder-w1`）
- 重构 AI 一人创业营 W1 为“搭起你的创业 AI OS”：将课程主线调整为理解创业价值交换、建立 Business SoT v0.1、搭建 Founder Workspace 并跑通 Weekly Skill 与 Human Review；Opportunity Card 提前到 SoT 之前，新增 SoT 管理层、个人 AI OS 四层结构、装修服务案例、数据与责任边界，统一 5/3/3/付费证据作业口径，课程全景移入附录，deck 更新为 40 页（`lessons/ai-solo-founder-w1` / `ai-solo-founder-bootcamp`）
- 新增 AI 一人创业营 W1 的 30 分钟机会筛选模型：三个候选机会按痛点、频率、付费、触达、创始人优势、AI 杠杆与 MVP 可实现性评分，再用三个一票否决圈定本周验证方向，deck 更新为 42 页（`lessons/ai-solo-founder-w1` / `ai-solo-founder-bootcamp`）
- 新增 AI 一人创业营 W1 的 30 分钟“创业机会从哪里来”模块：从熟悉行业、反复痛点、人工流程和已有付费四个入口寻找候选问题，并用 Opportunity Scan 圈出一个进入机会卡，deck 更新为 38 页（`lessons/ai-solo-founder-w1` / `ai-solo-founder-bootcamp`）
- 重构 AI 一人创业营 W1 为《Find a Problem Worth Solving》：新增七个创业误区、Canva 与 DoorDash 一手来源案例、六字段 Opportunity Card、问题与方案句式及 5 / 3 / 3 / 付费意愿验证承诺；把机会卡定义为 SoT v0.1，并将 AI OS 降为验证辅助工具，deck 更新为 34 页（`lessons/ai-solo-founder-w1` / `ai-solo-founder-bootcamp`）
- 恢复 AI 一人创业营 W1 的产品验证路径图，作为独立页面与通用生意验证路径并存，讲清 Idea → PoC → MVP → 付费证据 → PMF → Scale，并将 deck 更新为 30 页（`lessons/ai-solo-founder-w1` / `ai-solo-founder-bootcamp`）
- 重做 AI 一人创业营 W1 为 29 页学生讲课版：覆盖产品、公司、专业服务与传统生意，补齐 15 周逐周 Skills、生意验证路径、SoT 项目管理闭环与 4 道现场理解题；删除内部讲师话术，时间投入移到课尾，并把案例 A 改为现有会计服务的经营改造（`lessons/ai-solo-founder-w1` / `ai-solo-founder-bootcamp`）

## 2026-07-30

- 把 Vibe Coding 大师课第六节《Agent》从 130 分钟动手工作坊改版为 **90 分钟诊断课**（Rick：实操时间不够，主要讲会遇到的问题、怎么定位、怎么改）。主干重构为诊断链「① 会遇到的问题 → ② 怎么定位 → ③ 怎么改」：五条跑偏机制从中段素材升格为主干；新增 `L6P02_TodayMap`（三段地图）、`L6P10_FiveDeaths`（五条机制总览）、`L6P16_ThreeQuestions`（定位三问）、`L6P17_LookupTable`（症状 → 机制反查表，学员带走）、`L6P18_ABDemo`（A/B 预录对照，替代原课上实跑）、`L6P19_DiagnosisDrill`（10 分钟诊断单练习，替代长任务实操）、`L6P20_FixOverview`（机制 → 处方一一对应）、`L6P25_FixWriteToDisk`（落盘处方）、`L6P26_FixInterrupt`（打断，合并原两页）；删除 `L6P13_HandsOnA`（后台跑长任务）、`L6P09_ThreeBeatsOfTasking`（被处方段吸收）、原 `L6P22_ABDiagnosis`；交付单/计划先行/可执行验证三页重构为「处方」定位并按新编号重排。deck 24 页 → 28 页，蓝图升 v0.2（含 v0.1→v0.2 改版对照表），RUNSHEET 按新结构全篇重写（含分钟级节奏、逐段讲稿、救场表），同步更新 `lessons.html` 卡片（`lessons/vibe-coding-master-l6`、`lessons/VIBE_CODING_MASTER_L6_BLUEPRINT.md`、`lessons.html`）
- 新增 Vibe Coding 大师课第六节《Agent》网页版讲座 deck：24 张 React SlideEngine slide，讲清 Agent = 模型 + 工具 + 循环、循环的四拍与「它每轮重新读一遍 context 再决定」、核心立论「它没有记忆只有 context」（并把前五节所有 SoT 重新解释成 context 治理，作为系列收束页）、交任务三拍（计划 → 执行 → 验证）与铁律「它说完成了不算完成」、五条长任务跑偏机制（context 稀释 / 压缩丢细节 / 错误累积 / 目标漂移 / 进度幻觉，每条配学员认得出的症状）、该打断的三个信号与打断后怎么给新 context，以及 A/B 红灯实验（裸交 vs 任务交付单，过关标准是能指认跑偏机制）；新增 `MechPage.tsx` 作为五条机制页的共用版式；配 `VIBE_CODING_MASTER_L6_BLUEPRINT.md`（内容 SoT）+ `RUNSHEET.md`（含分钟级节奏、十段逐字讲稿、救场降级表），登记到 `lessons.html`（尚未接入 `ai-builder/outline.json`，待 bootcamp-sync；PRD.md 待补）（`lessons/vibe-coding-master-l6`、`lessons.html`）
- 新增 Vibe Coding 大师课第六、七节课程蓝图：L6《Agent —— 原理与驾驭长任务》与 L7《Agent Team —— 从一个 context 到一支队伍》。两节是「诊断 → 解法」关系：L6 诊断出 context 稀释 / 压缩丢细节 / 错误累积，L7 的 context 隔离正好治这三条；系列主线因此走完三步（L1–L5 往 context 里放对的东西 → L6 看懂 context 怎么被消耗 → L7 给 context 分家）。原 L6《从静态到动态 / Auth + Database》蓝图按 Rick 决定保持删除，内容留在 git 历史（`lessons/VIBE_CODING_MASTER_L6_BLUEPRINT.md`、`lessons/VIBE_CODING_MASTER_L7_BLUEPRINT.md`）

## 2026-07-29

- 将 CCAR-F YouTube 封面升级为固定 JR Academy 女性虚拟讲师版本，保留原 `v1` 并在发布 SoT 增加人物母图与身份一致性检查（`cca-f-cert-pack/video-ad-remotion-15s`、`cca-f-cert-pack/public/assets`）

## 2026-07-28

- 新增 CCAR-F 6 分 19 秒 YouTube 完整指南：用 12 个信息场景讲清考试结构、五大领域、16 节课程、30 项能力要求、近 480 道原创题、双模式模考、原创场景题和两周计划；补齐 Amy 配音、真实 Demo Exam 操作、配乐、字幕、逐字稿、image model 封面、联系表与 1080p 母版（`cca-f-cert-pack/video-ad-remotion-15s`、`cca-f-cert-pack/public/assets`）

## 2026-07-24

- 把 Vibe Coding 大师课 L5《Skills》deck 里所有"用本仓库 `.claude/skills/`（`talk-deck`/`xhs-poster`/其余 14 个 Skill）当教材"的例子，全部换成 Anthropic 官方文档（`code.claude.com/docs/en/skills`、`platform.claude.com/.../agent-skills/overview`）原文给出的真实例子：`L5P05_RealSkillTeardown`（summarize-changes/pdf-processing 的 frontmatter）、`L5P06_SkillMdStructure`（fix-issue + argument-hint、pdf-processing 的真实目录树）、`L5P09_MetaExample`（原"这套课的 deck 就是 talk-deck 做的"改为官方真实功能 `/run-skill-generator`——专门生成别的 Skill 的 Skill）、`L5P16_SkillLibraryGrows`（原本仓库 14 个 Skill 列表改为 Claude Code 9 个真实 bundled skill + 官方开源 `github.com/anthropics/skills` 仓库 + 插件市场）；同步重写 PRD.md 核心教学决策/数据纪律、RUNSHEET.md 全篇讲稿与 附一、`lessons.html` 卡片描述，课程内容与本课程仓库解耦（`lessons/vibe-coding-master-l5`、`lessons.html`）

- 给 Vibe Coding 大师课 L5《Skills》deck 的 `L5P06_SkillMdStructure` 把「支持文件」从笼统的"模板/脚本"拆成官方三类（Instructions 参考文档 / Code 脚本，代码不进 context 只有运行结果进 / Resources 素材模板示例），并补上通用目录树示意（不假称本仓库有真实案例）；RUNSHEET.md 同步展开三类讲法，并新增"有没有 YAML frontmatter，Level 1 token 上限是否一样"的澄清（结论：上限一样，都封顶在官方 1536 字符的 skill 列表预算里，差的是匹配精度不是 token），同步更新 PRD.md 逐页 spec 与数据纪律，并顺带把此前"career-bootcamp 等三个是旧格式"的不准确措辞改成"没写 frontmatter，退到正文首段当 description，是官方支持的合法简化写法"（`lessons/vibe-coding-master-l5`）

- 核对 Vibe Coding 大师课 L5《Skills》RUNSHEET.md 里渐进式披露/Project vs Personal Skill 的讲法与 Anthropic 官方文档（`code.claude.com/docs/en/skills`、`platform.claude.com/.../agent-skills/overview`）一致，补上官方给的精确 token 数字（Level 1 ~100 token/skill、Level 2 <5k token、Level 3 按需 0 token）与来源引用，并如实说明官方其实还有 Enterprise/Plugin 两层（今晚课程只讲对个人/小团队最常用的 Project/Personal 两层）（`lessons/vibe-coding-master-l5/RUNSHEET.md`）
- 给 Vibe Coding 大师课 L5《Skills》RUNSHEET.md 补充 Project Skill（`.claude/skills/`，随项目 git 共享）vs Global/个人 Skill（`~/.claude/skills/`，跟着用户走）的区别与设置方法，讲稿追加到 §4（拆真实 Skill）和 §6（落地前先定位置），并在附一加一条对应降级预案；只改 RUNSHEET.md 讲稿，不涉及 deck slide（`lessons/vibe-coding-master-l5/RUNSHEET.md`）

- 给 Vibe Coding 大师课 L5《Skills》deck 扩展 SKILL.md 组成格式并新增渐进式披露原理页：`L5P06_SkillMdStructure` 补上 `argument-hint`（本仓库 14 个 Skill 里 11 个真实在用）+ 支持文件说明，`L5P06b_ProgressiveDisclosure`（新增）讲三层加载模型（常驻 description / 触发时读正文 / 按需读支持文件）及 Skill 好处（可复用/一致性/高效/团队共享/可版本管理）；deck 由 22 页扩到 23 页，同步更新 `PRD.md`/`RUNSHEET.md`/`lessons.html`，并把 `L5P17b_DomesticAlternatives` 里的模型名同步更正为 Kimi K3（`lessons/vibe-coding-master-l5`、`lessons.html`）
- 给 Vibe Coding 大师课 L5《Skills》RUNSHEET.md 的「附一：现场卡住了怎么降级」从 6 条扩到 14 条，覆盖新增章节（prompt 原理页、国内替代方案）的降级预案，并按优先级给出时间不够时的取舍顺序（`lessons/vibe-coding-master-l5/RUNSHEET.md`）
- 给 Vibe Coding 大师课 L5《Skills》deck 加两页实战向内容：`L5P11b_PromptAnatomy` 逐句拆解投屏 prompt 为什么这样组词（上下文先行/产出形态先定/结构化字段拆开要/检查点前置），`L5P17b_DomesticAlternatives` 讲国内用不了 Claude Code 时的三条退而求其次路线及生态差距；deck 由 20 页扩到 22 页，同步更新 `PRD.md`/`RUNSHEET.md`/`lessons.html`（`lessons/vibe-coding-master-l5`、`lessons.html`）

## 2026-07-22

- 重做 CCAR-F 90 秒 YouTube 缩略图：改用图片模型完成图文一体设计，以陌生观众可直接理解的“Claude 架构师证书”为最大标题，并逐字校验中文与技术词（`cca-f-cert-pack/public/assets`）
- 新增 CCAR-F 90 秒 YouTube 干货型横屏视频：用原创退款场景讲解 prompt、PreToolUse 与重试的架构判断，复用真实题库和双模式模考录屏，补齐 Amy 配音、字幕、逐字稿、封面、联系表及发布规格验收（`cca-f-cert-pack/video-ad-remotion-15s`）
- 新增 Vibe Coding 大师课第五节《Skills》网页版讲座 deck：20 张 React SlideEngine slide，讲清 Skill 是什么、与一次性 prompt/rules 的区别、该不该做成 Skill 的判断线、`description` 触发命门、拆解本仓库真实 `talk-deck`/`xhs-poster` Skill，并带学员动手写一个 Skill、调用、迭代；配 `PRD.md` + `RUNSHEET.md`，登记到 `lessons.html`（尚未接入 `ai-builder/outline.json`，待 bootcamp-sync）（`lessons/vibe-coding-master-l5`、`lessons.html`）

## 2026-07-21

- 发布并绑定 CCDV-F 第 7–10 章重制 Production Release：70/70 张签名缩略图返回图片，140/140 段音频支持 `206 audio/mpeg` 分段播放，课程登记同步改为已发布（`lessons/ccdv-f-{prompt-context-engineering,security-safety,tools-mcps,exam-prep}`、`lessons.html`）
- 重做 CCDV-F 第 7–10 章完整配音：将 140 段旧版 Eleven v3 + 1.18 倍后处理替换为 Amy Multilingual v2、0.92 语速、固定 seed、上下文衔接且保留自然停顿；补齐 70 张同 Release 缩略图，并增加逐文件编码、时长、声线配置和五视口固定画布闸门（`lessons/ccdv-f-{prompt-context-engineering,security-safety,tools-mcps,exam-prep}`）
- 修复 CCDV-F Claude Code 云端固定画布 QA 在切换 Slide 后未等待新增中文字形加载的问题，避免 `settings-precedence` 标题被误判为跨视口重排（`lessons/ccdv-f-claude-code`）
- 修复 CCDV-F 第 2–6 章 Production Manifest 缺少 `thumbnailUrl` 的问题，为 77 张 Slide 接入同 Release 缩略图并增加构建文件存在性闸门（`lessons/ccdv-f-{agents-workflows,applications-integration,claude-code,eval-testing-debugging,model-selection-optimization}`）
- 修复 CCDV-F 第六课第一页权重条的双重边框与标题压线排版，并增加标题和轨道不得重叠的视觉 QA 闸门（`lessons/ccdv-f-model-selection-optimization`）

## 2026-07-20

- 修复 CCDV-F 第五课第 4 页中 429、500、529 HTTP 状态码的逐位数字朗读，并增加单段语音重生成入口 (`lessons/ccdv-f-eval-testing-debugging`)
- 配置 Classroom Deck 发布 Runner 安装 ffmpeg/ffprobe，使配音时长、编码规格与语速闸门在 CI 中可执行（`.github/workflows/publish-classroom-deck.yml`）
- 修复 CCDV-F 第一章配音过快与分段声线漂移：移除 1.18 倍速和全段静音裁剪，改用 Amy Multilingual v2、0.92 速度、固定 seed 与上下文衔接，重生成 41 段 15:34 配音并新增语速/声线配置闸门（`lessons/ccdv-f-exam-overview-pilot`）
- 发布 CCDV-F 十章 React Classroom Production Release 并绑定生产章节，补全线上登记；移除第一章页脚的本地试验标签（`lessons/ccdv-f-*`、`lessons.html`）
- 修复 CCDV-F 第四章 Claude Code 云端 QA 的字体加载竞态，在建立布局基线前等待 `document.fonts.ready`，并在失败时输出具体重排明细（`lessons/ccdv-f-claude-code`）

## 2026-07-19

- 更新 CCDV-F 第六至第十章的课程登记为 UAT Draft 已发布，保持 Production 未绑定（`lessons.html`）
- 新增 CCDV-F 第十章 Exam Prep 的 18 张内容驱动 React Slide、36 段 Amy 配音、18 张缩略图与 Classroom Bridge；完成 18 页 × 5 容器共 90 项固定 16:9 QA，作为独立 UAT Draft 发布候选，不绑定生产课程（`lessons/ccdv-f-exam-prep`）
- 新增 CCDV-F 第九章 Tools and MCPs 的 18 张内容驱动 React Slide、36 段 Amy 配音、18 张缩略图与 Classroom Bridge；完成 18 页 × 5 容器共 90 项固定 16:9 QA，作为独立 UAT Draft 发布候选，不绑定生产课程（`lessons/ccdv-f-tools-mcps`）
- 新增 CCDV-F 第八章 Security and Safety 的 16 张内容驱动 React Slide、32 段 Amy 配音、16 张缩略图与 Classroom Bridge；完成 16 页 × 5 容器共 80 项固定 16:9 QA，作为独立 UAT Draft 发布候选，不绑定生产课程（`lessons/ccdv-f-security-safety`）
- 新增 CCDV-F 第七章 Prompt and Context Engineering 的 18 张内容驱动 React Slide、36 段 Amy 配音、18 张缩略图与 Classroom Bridge；完成 18 页 × 5 容器共 90 项固定 16:9 QA，作为独立 UAT Draft 发布候选，不绑定生产课程（`lessons/ccdv-f-prompt-context-engineering`）
- 修复 CCDV-F 第六章云端 QA 的字体加载竞态，在建立首个布局基线前等待 `document.fonts.ready`，避免 CI 使用 fallback 字体后切换造成伪 reflow（`lessons/ccdv-f-model-selection-optimization`）
- 新增 CCDV-F 第六章 Model Selection and Optimization 的 18 张内容驱动 React Slide、38 段 Amy 配音、18 张缩略图与 Classroom Bridge；完成 18 页 × 5 容器共 90 项固定 16:9 QA，作为独立 UAT Draft 发布候选，不绑定生产课程（`lessons/ccdv-f-model-selection-optimization`）
- 新增 CCDV-F 第五章 Eval, Testing, and Debugging 的 13 张内容驱动 React Slide、28 段 Amy 配音、13 张缩略图与 Classroom Bridge；完成 13 页 × 5 容器共 65 项固定 16:9 QA，作为独立 UAT Draft 发布候选，不绑定生产课程（`lessons/ccdv-f-eval-testing-debugging`）
- 新增 CCDV-F 第四章 Claude Code 的 12 张内容驱动 React Slide、25 段 Amy 配音、12 张缩略图与 Classroom Bridge；完成 12 页 × 5 容器共 60 项固定 16:9 QA，作为独立 UAT Draft 发布候选，不绑定生产课程（`lessons/ccdv-f-claude-code`）
- 新增 CCDV-F 第三章 Applications and Integration 的 18 张内容驱动 React Slide、43 段 Amy 配音、18 张缩略图与 Classroom Bridge；完成 18 页 × 5 容器共 90 项固定 16:9 QA，作为独立 UAT Draft 发布候选，不绑定生产课程（`lessons/ccdv-f-applications-integration`）
- 新增 CCDV-F 第二章 Agents and Workflows 的 16 张内容驱动 React Slide、39 段 Amy 配音、16 张缩略图与 Classroom Bridge；完成 16 页 × 5 容器共 80 项固定 16:9 QA，作为独立 UAT Draft 发布候选，不绑定生产课程（`lessons/ccdv-f-agents-workflows`）
- 新增 CCDV-F 第一章 15 张内容驱动 React Slide、41 段 Amy 完整配音、真实 Classroom Bridge 自动翻页和逐段审核播放器，不上传、不绑定生产（`lessons/ccdv-f-exam-overview-pilot`）
- 重做 CCDV-F 第一章视觉为用户确认的 JR Course Studio 演播室语言：暖灰渐变外场、官方 Logo 顶栏、独立圆角白色教学主板、克制硬阴影和内容驱动版式；重生成 15 张缩略图，并通过 15 页 × 5 容器的 75 项固定 16:9 QA（`lessons/ccdv-f-exam-overview-pilot`）
- 修复独立 Classroom Deck CI/CD：把 MP3 上传到按 `deckId/releaseId` 隔离的 UAT/Production 专用音频桶，上传后校验对象数量与 206 Range，并让 narration、音频、缩略图和发布脚本变更都能触发 changed-deck 工作流（`.github/workflows/publish-classroom-deck.yml`）
- 修复 Classroom 发布角色无 `s3:ListBucket` 时的音频发布校验，改为逐个对象验证 `Content-Type` 与不可变缓存头，保持最小权限部署（`.github/workflows/publish-classroom-deck.yml`）

## 2026-07-17

- 更新 CCDV-F 第一张 Classroom Deck 的 UAT 音频地址、发布工作流和 Release Candidate 登记（`lessons/ccdv-f-exam-overview-pilot`）

## 2026-09-14 · Curriculum domain

- 更新课程资料、索引和发布模板的 curriculum 绝对链接为 jracademy.ai，增加上传前域名检查；保留原路径和非 curriculum 服务地址。
