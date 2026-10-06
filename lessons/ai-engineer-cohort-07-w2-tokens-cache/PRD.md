# AI Engineer W2 · Tokens, Context Windows & Cache Efficiency · PRD

## 学习目标

学完能用**自己电脑上真实跑出来的数字**回答两个问题，并能用英文在面试里讲清楚：

1. 这次模型调用看到了什么？（Token Budget、Context Governance）
2. 哪些计算没有必要重复做？（Prefill / Decode、KV Cache、Prefix Cache、Response Cache，以及 Memory 为什么不是缓存）

完成判据：学员能读懂 `usage` 里的 `input_tokens` / `cache_creation_input_tokens` / `cache_read_input_tokens`，能指出让 cache 失效的写法并修好，能区分四种「复用」各自省哪一段、代价是什么、怎么安全失效。

## 已确认范围

- **对象**：第七期 AI Engineer 学员，在澳洲找工作；英文面试是刚需，中英文 token 对比没有意义，不讲。
- **讲师**：Jessie。**时长**：90 分钟。**语言**：讲课用中文，术语保留英文。
- **工具**：学员没有 API key，只有 Claude Code 或 Codex（订阅登录）。所有实验用 `/context`、`/usage`、`claude -p --output-format json`、`codex exec --json`。讲师能在自己电脑上复现每一个数字。
- **生产案例**：Claude Code / Codex 本身（稳定前缀、`/compact`、CLAUDE.md、官方 prompt caching 文档）。
- **教学法**：每个模块 Test → Teach → Test：先预测、再跑命令看真实结果、再换情境考。M0 前测 5 题，M7 用原题再考。
- **数据纪律**：不放编造的数字。学员自己跑的结果用空白记录表现场填；页面上的数字只来自 Codex 官方文档示例行和 Hugging Face 上 Qwen2.5-7B-Instruct 的真实 `config.json`。
- **面试练习**：一题一页，共 4 题；学员先在对话框里写英文答案，再点开参考答案；参考答案关键词高亮。
- **命令速查表**放在课件里（第 4–5 页），学员版在 `lab/README.md`。
- **不提 W3**。视频只作课后资料。

## 本次修订：迁移到模板 2.0

| 项目 | 现状 | 目标 |
|---|---|---|
| 引擎 | legacy（PR #90 时同步的 `_template`） | 逐字复制当前 `_template`（2.0.0）的 `SlideEngine` / `ui` / `CameraBubble` / `theme` / `main` / `deck.tsx` / `presentation.css`，manifest 与模板一致 |
| 视觉 | 旧 Neo-Brutalism，方形卡片、终端框、表格 | Register B：内容页统一用 `DeckFrame`（网格纸、marker 标题），主对象用 `Panel` / `Label` / `NumberBadge`；所有闭合容器都有圆角（面板 22–24、卡片 16–20、标签 7–10） |
| 字体 | Google Fonts 远程加载 | 模板的 Fontsource 本地字体 + `public/licenses/` |
| 讲师备注 | 无 | `src/data/notes.ts` 37 条，N 显示；P 打印视图 |
| 配套资料 | 只有 `OUTLINE.md`、`lab/` | 新增 `RUNSHEET.md`、`WORKSHEET.md`、`SOURCE_MAP.md`、`QA.md`；`OUTLINE.md` 保留为课后资料与外链清单 |
| 登记 | 讲师「待指定」 | `lessons.html` 讲师 = Jessie；`CHANGELOG.md` 记录本次修订 |

内容（题目、命令、答案、页序）不变，只换视觉和运行时；视觉迁移后每页重新逐页 QA。

## 节奏表

| 阶段 | 分钟 | 页码 | 学员产出 |
|---|---|---|---|
| M0 开场 + 全课前测 | 0–5 | 1–6 | 5 道前测的直觉答案；装好 Claude Code / Codex、jq |
| M1 Token Budget | 5–16 | 7–10 | 自己的 `/context` 截图；一行 `usage` JSON（写入 `runs.jsonl`） |
| M2 Context Governance | 16–28 | 11–14 | 自己项目治理前后两次 `/context` 的差值 |
| M3 Prefill / Decode | 28–40 | 15–18 | 三组 TTFT 中位数记录表 |
| M4 KV Cache | 40–50 | 19–21 | 用 Qwen2.5-7B 真实配置算出的 KV 显存，并自己核对 |
| M5 Prefix Cache | 50–68 | 22–27 | cold / warm 两次的 creation / read 记录；打碎 cache 的对照结果；`/usage` 命中率 |
| M6 Response Cache + Memory | 68–78 | 28–31 | agent 写出的 `faq_cache.py`：先泄露、后修好的 cache key |
| M7 汇总 + 英文面试 | 78–90 | 32–37 | `runs.jsonl` 汇总的 hit rate / tokens saved；后测答案；4 段英文面试回答 |

## 逐页规格

格式：页码 · 文件 · 标题｜教学动作｜图解或案例｜讲师提示｜来源｜完成判据。

### M0 开场（1–6）

1. **S01_Cover** · 封面｜开场｜标题 + 「用 Claude Code / Codex 亲手量出 token 和 cache」｜提示 V 开摄像头、N 备注｜—｜学员知道今天要动手
2. **S02_TwoQuestions** · 今天只回答两个问题｜抛出 Q1 / Q2｜左：两个问题；右：Claude Code 为什么是生产案例（4 条）｜强调不需要 API key｜Claude Code 官方文档｜学员能复述两个问题
3. **S03_Agenda** · 90 分钟议程｜介绍节奏和 Test→Teach→Test｜按分钟比例的时间条 + 8 个模块｜—｜`data/modules.ts`｜—
4. **S04_CommandsA** · 命令速查（1/2）｜M1–M3 命令｜命令表（模块 / 工具 / 命令 / 看什么）｜让学员先建 `w2-lab/`｜`data/commands.ts`，参数对照官方文档与 v2.1.278 `--help`｜学员终端就绪
5. **S05_CommandsB** · 命令速查（2/2）｜M5–M7 命令｜同上｜版本要求：`/usage` 命中率需 v2.1.251+，失效原因需 v2.1.260+｜同上；Codex 参考官方 Non-interactive mode 文档（未实测）｜—
6. **S06_PreTest** · 全课前测｜5 题凭直觉答｜5 题列表｜答案写在聊天区，M7 再考｜`data/pretest.ts`｜每人有 5 个答案

### M1 Token Budget（7–10）

7. **S07_M1Pre** · 前测：新会话已经用掉多少 context？｜预测｜3 个选项｜不揭晓，下一页跑｜—｜学员给出预测
8. **S08_M1Context** · 跑 /context｜讲 + 跑｜终端：`claude` → `/context`；6 层拆解（稳定 / 增长 / 预留着色）｜讲师现场跑并比较哪层最大｜Claude Code 文档 Explore the context window｜学员找到自己最大的一层
9. **S09_M1Usage** · 只回一个 OK 也有成本｜讲 + 跑｜`claude -p … --output-format json` 与 `codex exec --json`；4 个 usage 字段解释；Codex 官方示例行｜`total_cost_usd` 是本地估计值｜Codex 文档示例行；Claude Code cost-tracking 文档｜学员能算三个 input 字段之和
10. **S10_M1Post** · 后测：读 usage｜换情境｜示例行 24763 / 24448 / 122｜参考答案 ≈ 98.7% 来自 cache｜Codex 文档示例行｜学员算对比例并指出成本涨在输入

### M2 Context Governance（11–14）

11. **S11_M2Pre** · 前测：自己项目里谁占 context 最多｜预测｜3 个选项｜—｜—｜给出预测
12. **S12_M2Teach** · Claude Code 怎么管自己的 context｜讲｜6 条选择标准 × Claude Code 做法 × 应用里怎么做｜permission / provenance 要在进 context 前过滤｜Claude Code 文档｜学员能把标准对应到做法
13. **S13_M2Lab** · 量一次 → 改一处 → 再量一次｜跑｜终端步骤；lost-in-the-middle 说明｜改动在新会话生效｜Liu et al., TACL 2023（arXiv 2307.03172）｜学员有前后两个数字
14. **S14_M2Post** · 后测：两位同学的 /context｜换情境｜同学 A（MCP 占大头）、B（Messages 占大头）｜参考答案：density / isolation / recency｜—｜学员给出建议并说出标准

### M3 Prefill / Decode（15–18）

15. **S15_M3Pre** · 前测：塞大文件只回 OK 会慢吗｜预测｜3 个选项｜—｜—｜给出预测
16. **S16_M3Lab** · 给 TTFT 计时｜跑｜三组命令（小 / 大 × 关 cache；大 × 开 cache）+ 空白记录表｜计时含 CLI 启动，只比组间差；每组 3 次取中位数｜`lab/ttft.py`｜记录表填满
17. **S17_M3Teach** · Prefill 一口读完，Decode 一个个写｜讲｜prefill / decode 示意条；3 张卡（TTFT、TPOT、实测字段）｜组 3 第二次变快 → 引出 M5｜—｜学员能解释组 1 与组 2 的差
18. **S18_M3Post** · 后测：两种用户抱怨｜换情境｜「出字慢」vs「写得慢」｜参考答案：TTFT / prefill vs TPOT / decode｜—｜学员对应到正确指标

### M4 KV Cache（19–21）

19. **S19_M4Pre** · 前测：第 100 个 token 要不要重算｜预测｜3 个选项｜—｜—｜给出预测
20. **S20_M4Teach** · 存下算过的 Key / Value｜讲 + 算｜公式；Qwen2.5-7B 真实配置 5 项；让 agent 读 config 计算的提示词｜云端 API 看不到 KV Cache；学员要自己核对 agent 的计算；GQA = 1/7｜Hugging Face Qwen/Qwen2.5-7B-Instruct config.json｜学员算出 32K × batch 8 ≈ 14 GiB
21. **S21_M4Post** · 后测：拉长 context / 提高并发｜换情境｜0.44 GiB 基线 → 128K、batch 32｜参考答案 ≈ 7 GiB、≈ 14 GiB｜同上（由真实配置计算）｜学员说出线性放大

### M5 Prefix Cache（22–27）

22. **S22_M5Pre** · 前测：连跑两次 usage 会变吗｜预测｜3 个选项｜—｜—｜给出预测
23. **S23_M5ColdWarm** · 实验 ①：Cold → Warm｜跑｜命令 + 两行空白记录表｜第 1 次就有 read 说明 cache 还热｜Claude API prompt caching 文档｜记录表填满
24. **S24_M5Break** · 实验 ②：故意打碎 cache｜跑｜`--append-system-prompt "Current time: $(date +%s)"`；`--model sonnet`；生产同类 bug｜—｜Claude Code prompt caching 文档｜学员看到 read 下降 / 归零
25. **S25_M5TTL** · 实验 ③：cache 能活多久｜跑｜`jq .usage.cache_creation`；`/usage`、`/model`；TTL 表｜订阅主对话 1h，API key 5m｜同上｜学员读出自己的 TTL 与命中率
26. **S26_M5Production** · Claude Code 怎么保护自己的 cache｜讲｜会失效 / 不影响两列；团队原则｜—｜Claude Code 文档；Anthropic 博客 Lessons from building Claude Code（Thariq Shihipar，2026-04）｜学员能各举 2 个例子
27. **S27_M5Post** · 后测：命中率一直是 0｜换情境｜一段把时间、用户名拼进 system、tools 随机排序的代码｜参考答案：3 个问题 + 改法 + 监控字段｜—｜学员找出 3 个问题

### M6 Response Cache + Memory（28–31）

28. **S28_M6Pre** · 前测：跨公司复用答案｜预测｜3 个选项｜—｜—｜给出预测
29. **S29_M6ResponseCache** · 写一个会泄露的 Response Cache，再修好｜跑｜给 agent 的两段提示词；红线 4 条｜演示用的公司数据是虚构的｜—｜学员看到 B 拿到 A 的数字，修好 key
30. **S30_M6Memory** · 四种「复用」放一起看｜讲｜KV / Prefix / Response / Memory 对照表；CLAUDE.md 加载时机｜Memory 读进来就是 context｜Claude Code prompt caching 文档｜学员能区分四者
31. **S31_M6Post** · 后测：能不能缓存｜换情境｜4 张翻牌卡｜—｜—｜学员说出 key 里必须带什么

### M7 汇总 + 英文面试（32–37）

32. **S32_M7Summary** · 用自己的数据收尾｜跑 + 后测｜`jq -s` 汇总命令；5 题原题 + 可展开答案｜Codex 学员改用 `cached_input_tokens`｜`data/pretest.ts`｜学员算出 hit rate，并对比前测
33–36. **S33–S36_M7Interview1–4** · 英文面试题（一题一页）｜学员先在对话框写英文答案，再点开参考答案｜题目 + 中文考点提示 + 高亮关键词的参考答案｜按 Mechanism → Evidence → Risk 讲｜`data/interview.ts`｜每题有一段学员答案
37. **S37_Resources** · 课后资料｜课后｜6 份一手文档 + 6 个视频（链接已核实）｜视频只核实了标题和频道｜见 `SOURCE_MAP.md`｜—

## 发布范围

- 分支 `feat/ai-engineer-w2-template-2`，推到 fork（`jessieyu1/Curriculum`），开 PR 到 `JR-Academy-Omni/Curriculum` main。
- 卡片保持 Local · Build，直到 maintainer 在 `.github/workflows/deploy.yml` 加入本课件的 build 步骤并部署（作者账号无 `workflow` 权限）。
- 部署后按 skill 第 10 步线上回读，再把卡片改为「已部署」。
