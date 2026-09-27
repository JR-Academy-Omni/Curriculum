# Changelog

## 2026-08-30

- **L11 蓝图 `VIBE_CODING_MASTER_L11_BLUEPRINT.md` 写完，1095 行 / 21 节。** 主题由讲师定：**让 Agent 定时 / 自动替你干活**。90 分钟框架课，硬产物 = **一份七段「无人值守任务书」**。分支 `feat/vibe-l11-blueprint`（基于 `feat/vibe-l10-quadrant-protocol`，L10 源码在手）。
  - **全节立论**：前十节所有技巧都建立在一个没说出口的前提上，**你在旁边看着**。L6 的打断信号要人看、L7 的汇总是你的活、L10 的四问是你开工前自己过一遍。L11 第一次把这个前提抽掉。收口立论：**「你消灭的不是那个问题，是那次提问。」** 提问被取消了，那个决定并没消失，它被交给 Agent 自己做了，这就是任务书存在的理由，不是一句总结。
  - **和 L10 的接口写实了**：**L10 的隐藏区 = 它会来问你的地方**。定时任务不给它问的机会，所以隐藏区必须在出发前搬空。L10 那节理论课在这里第一次变成硬性动作（判断闸④），也给了任务书第 4 段「预答」出处。
  - **教学决定一：先让学员交一件不合格的任务。** 0–7 分钟写下「我想让它每天替我做的事」，7–22 分钟用四个问题逐个打回来，**判断闸到第 36 分钟才出现**（沿用 L10「图不许提前上屏」的铁律形态）。全课支点是第二问「**它做错了，你多久会知道？**」，多数人答不出，因为手工做的时候那一眼检查是免费且隐形的，自动化把它拿掉了。追问三句写死在 `§5.3`，不许救场。
  - **教学决定二：演示必须翻车两次，翻法不同。** 学员进教室时只怕「它停下来等你批」，真正会伤人的是「**它没停，它绕过去了，然后报告说做完了**」。演示 A（只给读权限让它做要写文件的事 → 它绕道 → 当场打开文件让大家看见它没变）不许砍，演示 B 可降级为口述。
  - **按讲师中途追加的两点重写了第四幕**：**中途会遇到的问题**（网络断 / **凭证过期** / 环境没准备好 / 限流超时，四种断法共同点是**全都给你一个「跑完了」的外观**）+ **脚本重试与结果契约**。由此把「卡住」和「断掉」明确切开：卡住是它还活着不往前走，断掉是它没活到最后，**处方完全不同，混着讲学员回去只会加超时不会加契约**。
  - **硬产物因此从六段升级成七段两块**：**A 给它看的**（目标 / 判据 / 边界 / 预答 / 出口）+ **B 给脚本看的**（回执契约 / 重跑规则）。这是本节的真实架构：**无人值守从来不是「一个 Agent 自己跑」，是「一个 Agent + 一个盯着它的东西」。**
  - **结果契约定死三个状态 `done` / `skipped` / `needs-human`**，理由写进原理页：只有成功 / 失败两档时，它会把「我没做」也塞进成功里（它确实正常结束了），**第三档是第 59 分钟那条铁律的机器形态，给它说实话的余地**。并写明「什么都没交回来 = 报警」，因为那多半是断在半路。契约在 `§19.1` 标明**是本课的教学约定，不是任何工具的内置功能**。
  - **重试排在契约之后，不许颠倒**：没有契约的重试是盲目的，你都不知道上次是成是败。落点是**幂等**，「重试不是勇气问题，是幂等问题」，判「不安全 → 第一版只提议不生效」在评分表里是**满分答案**，不是失败。
  - **机制层全部按 `code.claude.com/docs` 当天版本核实过**（三条通道对照表、云端运行中无审批提示、本地任务在人工批准档会挂起等待、`-p` 起始为手动档、不询问模式连 `AskUserQuestion` 也拒、绿灯只代表进程正常退出）。但 `§19.1` 定了纪律：**deck 只写能力描述，不写死参数名 / 版本号 / 数值**，因为这块产品行为变化快且部分仍在预览；`§19.3` 列了**七条必须开课当天重新核对**的项，其中「云端是否仍然运行中不弹审批」变了整节课要改。
  - **讲师说不确定学员能不能建云端 routine，按可解的方式处理**：`§2.4` 加了**课前 72 小时三步通道自查**（敲 `/schedule` → 有无桌面端 → 能否写系统调度），课堂按结果分流；**硬产物与通道解耦**，一条通道都用不了的人照样交得出任务书。`§8.7` 的受限环境退让阶梯逐级标明**失去哪一项能力维度**，收口是「通道会变、会被墙、会改名、会涨价，**任务书不会**」。
  - `§10` 留了**密度警告**：第四幕 47→78 连讲 31 分钟，中间只有一处学员自问。试讲撑不住的正确处理是**加时到 105 分钟展开 P17–P20**，不是砍页，那四页是这一版新增的骨干。`§10.2` 三级砍法里「凭证过期」标为必须留（唯一会静默三个月的一种）。
  - **蓝图写完后自查了一遍，修掉 8 处**（含 3 处会让讲师照着做就出事的真矛盾），文件 1095 → 1121 行。
    - **① 演示 B 的形态三处打架**：`§6.4` 和 `§10.1` 铁律写「两次演示都现场跑」，`§15.1` 却写「提前一天挂住、课上直接展示」。**按 `§15.1` 定案**，演示 B 要证明的是「它等了一夜也没人理」，**这件事在五分钟的课堂时段里物理上演不出来**，现场建一个再等只会等到一个刚挂住三十秒的会话。流程表、逐页表、铁律、检查表四处同步。
    - **② 评分表惩罚了蓝图自己指派的兜底路径**：`§2.3` 明说走公开仓库兜底的学员「闸④几乎是空的」，`§13.1` 却写「闸④空的不给分」，过关线 10/12 意味着这类学员丢 2 分后再丢一项就挂。补了例外口径：说清「我这一格为什么填不满」同样满分。
    - **③ 动手环节八分钟写不完七段**：P23 原理页要占掉 2 分钟，学员实际动笔只有 6 分钟。补了课堂交付线，**A 块五段写实，B 块两段各写到关键行（三状态 + 幂等结论），细化进作业**。不写这条线，学员会想把七段都写完美，然后一段都没写完。
    - **④ 两条机制断言我写超了**：云端「错过了会怎样」我填的是「按计划继续」，**但官方文档根本没写补跑规则**，改成「文档没写，别替它承诺」并进课前核对；`§6.1` 把「它会绕道」说成了机制保证，实际文档保证的只是**「会话不会因此停下」**，「绕道」是行为预期，措辞收紧，并注明这正是 `§6.4` 一级降级存在的理由。
    - **⑤ 补了第五种断法：额度用完**（文档明确写了到上限后 run 会被直接拒）。它和前四种性质不同，前四种是**跑了没成**，这一种是**压根没跑**，而「压根没跑」在你的回执里和「跑了但什么都没交」长得一模一样。
    - **⑥ 顺带找到一个让演示 A 更确定的做法**：与其靠「反复被挡」触发绕道，不如直接把写文件那类工具从它的可见范围里摘掉，工具不在它眼前，它根本不知道有这个选项，必然去找别的路。比依赖阈值行为可靠得多。
    - **⑦ 「三条通道」是本课的教学分类，不是官方分法**（官方第三种是会话内循环，本节换成了命令行 + 系统调度，因为前者随会话消亡、还会自动过期）。`§19.1` 补了这个替换和理由，否则学员翻官方文档会发现对不上。
- **L11 deck 做完：27 页 P00–P26，`npm run build` 通过，base 与标题都验过。** 引擎逐字拷自 `lessons/_template`（`SlideEngine` / `ui` / `CameraBubble` / `theme` / `main` 一行没动，按「引擎只拷不重写」）；`deck.tsx` 从 L10 的构件改造：`QUAD` 四格 + `MOVES` 换成 **`GATES` 四道判断闸 + `STUCK` 卡住三形态 + `BREAKS` 五种断法 + `STATUS` 三状态契约**，阶段徽章改为 讲/问/演/写。
  - **讲师要求：deck 里不留任何待填空白页。** 原计划把 `§16` 附录 A 的三个空（那次静默失败隔了几天发现、演示用哪个项目、演示 B 的会话）做成显式占位，讲师明确否掉，改成**讲师个人素材只进 RUNSHEET**，slide 全部发完整版。`DemoBoard` 因此设计成「引导语 + 盯着看的三件事」，不依赖具体项目名也讲得通。
  - **铁律用脚本验，不靠肉眼**：剥掉注释后检查**渲染内容**，① P00–P09 十页没有「定时 / Schedule / Cron / 自动化 / 判断线」任何一词，也没有 `GateChain`/`GateRow`/`GATES`/`StatusBox`/`STATUS`/`BREAKS` 任何组件（封面叫**「你不在的时候」**，`index.html` 的 `<title>` 也不用真名，比蓝图口径严一档，省掉「课前检查标签页有没有暴露在投屏区」这个动作）· ② 全 deck 没有绝对分钟数（沿用 L10 的教训，动作页只给**时长**）· ③ 没有 `___` / TODO / 待填 · ④ P19 三状态写死为 `done` / `skipped` / `needs-human` 且无「等等」这类模糊词。四项全过。
  - **P22 硬产物页分 A / B 两块**，页面上直接写明「前五段写给它看，后两段写给盯着它的那个脚本看」，并把**课堂交付线**印在页脚（A 块五段写实、B 块两段各写到关键行、细化进作业），不写这条线，学员会想把七段都写完美然后一段都没写完。骨架完整可读，但**全 deck 没有一份填好的样例任务书**（给了范文就变成填空题）。
  - **修了一个 `as const` 联合收窄的编译错**：`GATES` / `BREAKS` / `STATUS` 上的可选字段（`pivot` / `star` / `alone`）在 `as const` 下只存在于部分联合成员，`tsc` 报 18 处 TS2339。改成显式 `type` + `readonly T[]` 标注。顺带清了 10 处未使用 import。
  - **登记与部署都接上了**：`lessons.html` 加了 L11 卡片（CLAUDE.md 硬规则）；`.github/workflows/deploy.yml` 补了 Build 步骤和 Assemble 的 cp 块（YAML 已校验）。⚠️ 顺带记一笔既有缺口：**L7 / L8 / L9 至今没进 `lessons.html`，也没进 `deploy.yml`**，且源码分散在三条未合并的分支上。
- **L11 讲稿 `RUNSHEET.md` 写完：1136 行 / 39 节**，蓝图 `§18` 要求的 9 项全部覆盖（脚本验过逐页时间与 `§10` 流程表逐行一致，P00–P26 一页不缺）。`HANDOUT.md` 仍待写。
  - **写的时候查出蓝图自己的一处硬伤：砍法判断点和被砍的页对不上。** `§18` 原文要求判断点设在第 61 / 71 / 78 分钟，但三级砍法砍的是 **P11（第 40 分钟那页）**，到 71 分钟才看表，那页早讲完了，**砍不动**。改成四个判断点，每个都早于它要砍的内容：**29**（决定 P08）· **36**（决定 P11，全课最硬的关口）· **61**（决定 P17）· **78**（保 P22 的六分钟，必要时砍 P25）。蓝图 `§18` 同步改掉。
  - **`§C` 把 P04 的 60 秒拆成秒级脚本**（0–15 有人抬头看你不许回应 / 30–45 最难熬你会想说「比如说」/ 45–60 有人小声互问不要制止），配三句顺序不能改的追问，收在「**这件事到今天没出过问题，是因为你每次做的时候顺手看了一眼，手工做的时候那一眼是免费的，你甚至不知道自己看了。自动化第一件事就是把那一眼拿掉**」。并写明这 60 秒的账在哪还：**P19 的说服力全部来自这里，省下的每一秒都要在 P19 加倍还回去。**
  - **`§D` 演示五种走向**比蓝图的三级降级多出一种：**走向三「它绕过去了，但绕法你没预料到」**（去改了另一个有权限的文件 / 把内容塞进 commit message），这种比预期更好用：「我原以为它会打印出来，它没有，它找了另一条路。**你猜不到它会绕到哪去，你能控制的只有告诉它不确定时该停下。**」另外把「预录必须明说是预录」列成硬规矩，理由和 L10 同源：**这节课整节在讲「绿灯不等于真的」，讲师自己在这里含糊一下，全课可信度归零。**
  - **`§E` 三个埋点全部配了回收台词**：P07 末「一会儿回来算这笔账」→ P18「凌晨三点跑的，你早上看到的就是一个绿灯」· P15 末「那个决定还在，只是换人做了」→ P22 动手前「第 4 段就是你把那个决定拿回来的地方」· P17「我隔了 ___ 天才发现」→ P19 末「那几天我的回执里什么都没有，而我没有一条规则去管『什么都没有』」。
  - **`§K` 五个空全部落在讲稿里，deck 一个空都没有**（按讲师要求）。其中 K.3「你自己那次静默失败」标为最重要的一个空，且**必须说得出具体天数**，说不出的换素材，或用 §D.4 的现场故障顶上。
- **L11 讲义 `HANDOUT.md` 写完：567 行 / 11 节，蓝图 `§17` 十项全覆盖。L11 四件套齐（蓝图 / deck / 讲稿 / 讲义）。**
  - **起因是讲师点出的一个真窟窿**：deck 的 B 块写着「后两段写给盯着它的那个脚本看」，但**那个脚本长什么样、怎么写，全课一个字没有**，学员会直接问「什么脚本？我没有脚本。」蓝图把它放进了 `§17-7` 而讲义一直没写，所以这个洞一直挂着。
  - **`§7` 因此做成了讲义里最实的一节**，四层：**7.1** 一张图说清「判成败的那个人不能是被判的那个人」· **7.2 伪代码骨架**（通道无关，先看懂这个）· **7.3 一个能跑的 shell 样板**（`bash -n` 校验过）· **7.4 怎么写的八条规则**。八条里最关键的三条：**① 跑之前先删旧回执**（不删，断在半路时你读到的是上次那份 `done`，而且**它长得像成功**，你永远发现不了）· **③ 不要 `set -e`**（Agent 非零退出是正常情况之一，`set -e` 会让脚本在读回执之前就死掉，而回执里恰好写着为什么）· **⑤「没有回执」必须是独立的报警分支**，不是 `else` 里的兜底，五种断法**全都**走这一支。
  - **样板的唯一必填项 `AGENT_CMD` 不填就 `exit 2` 并大声报错**，理由写在旁边：「不填就跑，等于跑了个空壳还给你个绿灯」，让样板自己示范一遍本节那条铁律。具体参数不写死（`§19.1` 数据纪律），以当天官方文档为准。
  - **`§7.5` 补了云端通道的特殊问题**：托管定时里**你没有外层进程**，插不进一个 bash，而**看门狗不能和被看的任务是同一个进程，它自己断了也报不了警**。所以云端要反过来做：不是「收到坏消息才报警」，是「**该收到的没收到就报警**」（任务 A 每次都写回执，检查 B 隔天只看那份回执在不在）。这也说明了「什么都没交回来 = 报警」为什么必须写进契约，在云端那是你唯一能发现「它根本没起来」的办法。
  - **`§9` 反面案例**：一份七段齐全、格式也对、但会在某个凌晨三点吃亏的任务书，三处问题折叠起来让学员先自己找（判据自证 / 回执是自然语言脚本没法判 / 没判幂等就开重试）。另外两处「不算错但会让它变弱」的也标了：边界写成态度而不是否定句 · 第 4 段空着且理由是「这个任务比较标准」。
- **补上讲师指出的两个真窟窿：deck 从没说过「那个脚本」是什么，也从没说过任务跑完你该拿到什么报告。deck 27 → 28 页，课程 90 → 93 分钟。**
  - **窟窿一：全 deck 有 8 处提到「脚本」，从没露过脸**（P19 外面那个脚本 / P20 你的脚本 / P22 盯着它的那个脚本 / P23 不留给脚本），硬产物的 B 块等于写给一个学员没见过的读者。**修法：P21 原来的「三层重试表」换成看门狗三层架构图**（调度器 / 看门狗 / Agent），讲的本来就是同样三个角色，换图信息量更大、**不加分钟**。页眉换成「判成败的那个人，不能是被判的那个人」，页脚补了云端的特殊问题（**托管定时里你没有外层进程**，所以要反过来做「该收到的没收到就报警」）。
  - **窟窿二（讲师亲自列的六项）：回执只够脚本分支，人读了还是不知道昨晚发生了什么。新增 P20「回执的第二个读者是你」**，进度 / 文件修改列表 / 错误 / **决策** / **决策原因** / 测试结果。中间两行标红，因为它们是全节立论的落点：**「你把提问取消了，那个决定并没有消失，它被交给它自己做了。那些决定如果它不写下来，就哪儿也没去。」** 配两条硬要求：每条决定必须带 why；它自己没把握的要标 `low`，**那种情况哪怕状态是 done 也要叫人**，「跑完了」和「跑对了」是两件事，低置信决定是这两者之间最常见的那道缝。
  - 时间因此 90 → 93（P20 占 3 分钟，其后全部后移）。蓝图 `§10` 流程表 / `§11.2` 逐页表 / `§20` 检查表、讲稿 28 节逐页口播与 `§H` 四个判断点、`lessons.html` 全部同步，脚本复验：流程表区间连续终点 93、逐页表 P00–P27 全齐、讲稿 28 节一节不缺。**密度警告随之加重，第四幕现在从 47 连讲到 81 分钟，加时到 105 分钟的建议比之前更硬。**
- **按讲师要求在 deck 末尾加了一页附录：本地通道断网之后，把会话拉回来接着跑。deck 29 → 30 页（29 正课 + 1 附录），96 分钟不变。**
  - **做成附录页是刻意的**：课上不讲、不占那 96 分钟，下课前投屏停在这一页给想拍照的人拍。也因此它是**全 deck 唯一允许写具体命令行参数的一页**（正课页按 `§19.1` 只写能力描述），页面上写明「参数会变，以当天官方文档为准」。它**不带阶段徽章**，挂个「讲」和「课上不讲」自相矛盾（第一版挂了，截图里看出来的）。
  - **这一页真正要防的误解是「续跑 = 重跑」**：重跑从头再来、**要求幂等**；续跑从断的地方接着做、**不要求幂等，但它把上次的 context 一起拖过来**，那正是 L6 诊断出来的稀释和错误累积。所以 **续跑两次封顶**：无限续跑 = 你在用一个越来越脏的 context 硬撑。这条把附录页接回了 L6，不是一段孤立的运维技巧。
  - **只有本地 / 命令行通道能续**，云端每次重新克隆，没有本地会话可续。页面第一行就写明了。
  - starter kit 同步实现：新增 `lib/session.sh`（会话 id 捕获 + `{{SESSION}}` 模板替换）· `config.env` 加 §9（`CONTINUE_ON_BREAK` 默认 **0**，`MAX_CONTINUE=2`）· watchdog 的 `NO_RECEIPT` 分支接上续跑，**成功后把会话 id 清掉**不留给下一周期。讲稿加 `§B2` 说明这一页怎么用（包括有人当场问「重跑不就行了」时那 30 秒的答法）。
  - **过程中修了两个真 bug，其中一个是复发：**
    - **中文标点又一次被 bash 吃进变量名**，`"（会话 $sid）"` 里的全角括号让 `sid）: unbound variable`，导致续跑分支直接死掉。这是同一个坑的**第二次**（第一次在 `exit_code）`）。**这次把它锁成了自检第 19 项**：`grep -P '\$[A-Za-z_]\w*(?=[^\x00-\x7f])'` 扫全部脚本，有裸变量紧跟中文标点就红。以后不可能再悄悄回来。
    - **`continue` 会回到循环顶部重跑整个任务**，把刚拿到的续跑结果丢掉。改成 `next_mode` 标志：续跑那一圈不递增 `attempt`、不重跑完整命令。
  - 自检 16 → **20 项全绿**（新增：续跑成功且清 session · 续到上限停下报警 · 默认不开续跑行为不变 · 中文标点回归测试）。讲义 `§7.7` 补了这一节，附录 A 重生成为 **11 个文件**，`HANDOUT.md` 1575 → 1782 行。
- **补掉全套材料里最大的一处断裂：`needs-human` 叫醒你之后没有下文。deck 28 → 29 页，96 分钟（讲师明确说不用压缩课时）。**
  - **这是自查时发现的最严重一条**：`needs-human` 是本节自己设计的核心一档，P16 / P19 / P20 三页论证它为什么必须存在，然后**它叫醒你之后就没了**。重跑整个任务？从断点继续？改任务书再跑？三份材料 grep 下来 **0 命中**。学员照着做，第一次被叫醒就卡死，而那恰恰是无人值守的日常。
  - **新增 P22「它叫醒你之后」**，三条路径：**回灌**（答案发回去，任务带着它重跑）· **改任务书**（写进第 4 段预答）· **手动接手**。
  - **讲师提的 webhook 方向是对的，但只是三条里的一条，而且有两笔代价**（已按官方文档核实）：① 你回灌的内容**不会被当成指令**，它被包成 `<routine-fire-payload>` 并标为不可信数据，任务书第 5 段必须**显式 opt-in** 才会读；② **谁拿到那个凭证谁都能往里送东西**，这正是本节 P17 讲过的注入面，**你为了闭合回路开的这扇门，也是别人可能走进来的门**。
  - **收口是这一页的全部重量：「回灌是止血，改任务书才是治本。」** 只用回灌，你会每周被同一个问题叫醒一次。再往回接一层，**它问你的每一个问题，都是第四道闸没过干净的证据**：回答一次是止血，写进第 4 段才是真的把那一格搬走。这条把 P22 接回了闸④ 和 L10 隐藏区。
  - **starter kit 同步实现**：新增 `resume.sh`（webhook / rerun / manual 三种模式）；`config.env` 加 §8 恢复配置；**watchdog 的 `needs-human` 报警里直接带上「回答：./resume.sh "你的答案"」**（半夜被叫醒不用再翻文档）；任务书第 5 段模板补上**成对的两句**，一句让回灌能被读到，一句挡住别人从同一个口子送指令进来。
  - **`resume.sh` 的设计刻意把「记账」放在「发送」之前**：它先把「问 + 答」记进 `answers.log` 并提醒你搬进第 4 段，再去回灌。**记账那步比发出去更重要**，不记，你下周还会被同一个问题叫醒。自检加了 3 项覆盖它（13 → **16 项**，全绿）。
- **新增可运行的 `starter/`，学员改一个 `config.env` 就能用，不用从讲义里抄代码。**
  - 9 个文件：`config.env`（唯一要改的）· `watchdog.sh`（看门狗主脚本）· `lib/{receipt,report,notify}.sh` · `task-brief.md`（七段模板）· `receipt.example.json` · `README.md` · **`selftest.sh`**。
  - **`selftest.sh` 是这套东西里最有用的一个**：用假回执把看门狗每一支都走一遍，**不碰项目、不消耗额度**，13 项断言。其中两项是课程内容的直接验证，**「上次留了 done、这次没写 → 仍报没有回执」**（证明旧回执被删了，对应讲义 §7.4 ①，这个 bug 一旦有就永远发现不了，因为它长得像成功）；**「done 但有低置信决策 → 仍然叫你」**。它同时也是作业第 2 条「故意让它断一次」的工具。
  - **写的时候踩到一个真 bug 值得记：中文标点会被 bash 吃进变量名。** `"…（exit_code=$exit_code）…"` 里的**全角右括号**被当成变量名的一部分，报 `exit_code）: unbound variable`，导致「没有回执 / 回执坏了」这几支**全部静默失效**，而那正是最重要的几支。自检从 5/13 变 13/13 就是修了这个。凡是变量后面紧跟中文标点，一律加花括号。
  - **讲义附录 A 收录全部 9 个文件源码**，由脚本从真实文件抽取生成（改了代码重跑一次就同步，不会漂移）。`HANDOUT.md` 因此 567 → 1394 行。
  - **`§5.4` 新增「回执有两个读者，别混」**：status/evidence 给脚本，其余六项给第二天早上的你；`lib/report.sh` 负责把这份 JSON 渲染成三十秒能读完的样子（已实测渲染）。
  - **`§4.2` 给了一份填好的完整范例**（每周合并改动汇总成周报草稿），并标出四处「真正起作用的地方」：判据里那条**不用读内容就能跑的数量检查** · 边界全是否定句 · 预答第三问给的是**兜底动作**而不是让它自己判断 · 第 7 段写清了**为什么**安全而不是只写「安全」两个字。范例**只在讲义出现，课堂不给**。
  - **一条留给讲师的决定**：第四幕从 47 分钟连讲到 78 分钟，中间只有一处学员自问。蓝图 `§10` 的密度警告仍然成立，试讲若撑不住，正确处理是**加时到 105 分钟展开 P17–P20**（新增的骨干四页），不是砍页。


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
