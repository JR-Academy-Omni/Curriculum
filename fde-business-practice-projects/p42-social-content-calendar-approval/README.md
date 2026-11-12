# P42 · 通用：社媒内容日历 → 草稿 → 审核 → 排程

| 行业 | 难度 | 时长 | 工具 |
|---|---|---|---|
| 通用 | L2 Workflow | 180 分钟 | Claude + n8n + Google Sheets + Google Drive + Slack |

## 1. 客户场景

麦田烘焙在阿德莱德有两家店，Norwood 一家、Glenelg 一家，Instagram 和 Facebook 都是兼职的小陈在管。每个月店长 Sophie 和老板 Mark 在共享表里排一个内容日历，小陈照着写文案、配图、排程。12 月是一年最忙的月份，日历里塞了十几条，问题也最多：老板想写「全阿德莱德最好吃的可颂」；新出的布朗尼被写成「乳糜泻也能放心吃」，可厨房是共用的；姜饼屋的价格还没定，日历里先写了个 $38；圣诞节当天两家店都关门，却排了一条「今天来店里自提」；还有一张常客一家的照片，没人问过他们同不同意。

Sophie 想要的是：**每周一系统按日历把下两周的文案先写好、把有问题的地方先挑出来，我在 Slack 里一条条批，批过的才进排程表，没有我点头，一条都不会发出去。**

## 2. 练习数据

| 文件 | 内容 |
|---|---|
| `data/content-calendar-2026-12.csv` | 12 月的 12 条计划：post_id, planned_date, planned_time, platform, pillar, topic, notes, asset_caption, asset_type, asset_consent, requested_by |
| `data/brand-facts.md` | 品牌事实表：门店、营业时间（含圣诞新年）、产品和价格、过敏原原文、文案规则 |

全部是练习数据，店铺、员工、价格都是为这个练习设计的，预订链接是 `.example` 域名。照片用 `asset_caption` 文字描述，不附图片文件。

数据里**故意藏了 5 处问题**：

1. **说不出依据的最高级**：S03 要写「全阿德莱德最好吃的可颂」，店里没有任何评比或奖项能证明。
2. **健康 / 过敏原说法**：S05 要写「无麸质」「乳糜泻也能放心吃」，但事实表写明是共用厨房。
3. **事实表里没有的价格**：S06 姜饼屋写了 $38，事实表里价格未定。
4. **门店休息日叫人到店**：S11 排在 12-25，两家店都休息，却写「今天来店里自提」。
5. **没有书面同意的顾客照片**：S04 用了常客一家三口的照片，asset_consent = no。

教学假设：过敏原和食品标注怎么写才合规，以 Food Standards Australia New Zealand 和南澳卫生部门的官方说明为准；这里只按店里的事实表执行，不做合规判断。平台的广告和内容规则以 Meta 官方政策为准。

## 3. 做法

**检查规则**（Code 节点里跑，每次结果一样）：

- 门店休息日 = 每周一 + 12-25、12-26；那天的帖子里有「来店 / 到店 / 自提 / 店里」→ 标「休息日却叫人到店」。
- 照片类型是顾客或员工，asset_consent 不是 yes → 图片暂停。
- topic / notes 里出现的价格不在事实表里 → 草稿留空位，先问 Sophie。
- 出现「最好吃 / 第一 / best / 乳糜泻 / 放心吃 / 无麸质 / 健康」→ 必须改写。
- 草稿写完再跑一遍同样的检查，防止模型把问题写回去。

**第一步：在 Claude 里把写稿规则调好。** 新建 Project「麦田 社媒」，上传两个文件，说明里写：

```
你是麦田烘焙的社媒文案助手，帮小陈起草 Instagram / Facebook 文案。
规则：
1. 事实只能来自 brand-facts.md：营业时间、价格、日期、产品说明照抄。表里没有的写「[待确认，问 Sophie]」，不要补。
2. 不用「最好」「第一」「best」这类说法；不写健康、营养、功效。
3. 布朗尼只能写 made with a gluten-free flour blend，后面必须原样跟上过敏原说明那一句。
4. 门店休息的日子不能叫人到店；改成祝福或提醒恢复营业的时间。
5. 照片没有书面同意的，文案照写，但在备注里写「图片暂停，等同意或换图」。
6. 英文，每条不超过 60 个词，最多 2 个 emoji，语气像店里的人在说话。
每条输出：post_id、草稿、你改了日历里的什么（一句话）、需要 Sophie 决定的事。
你只写草稿，不发布、不排程。
```

把 12 条日历贴进去，跟 `expected/decisions.csv` 对。哪条不一样，先改说明，再进 n8n。

**第二步：建 Google Sheets。** 一张 `calendar`（日历本身，加 status、draft、flags、approved_by、approved_at、scheduled_link 几列），状态按 planned → drafted → approved / rejected → scheduled 走。

**第三步：按下面的节点搭 n8n。** 排程这一步默认由小陈在 Meta Business Suite 里手动做，流程只把批过的帖子送到她手上。

### n8n 搭建

| # | 节点 | 做什么 | 关键设置 |
|---|---|---|---|
| 1 | Schedule Trigger | 每周一早上触发 | 周一 08:00，时区 Australia/Adelaide |
| 2 | Google Sheets（读日历） | 读 status = planned、日期在未来 14 天内的行 | Operation: Get Row(s)；Filter 列 status |
| 3 | Google Drive | 读 brand-facts.md 的最新版 | Operation: Download；接 Extract from File 取文字 |
| 4 | Code（事前检查） | 按上面的规则给每条打 flags 和 decision | Run Once for All Items；休息日、价格白名单、风险词写成常量 |
| 5 | Basic LLM Chain + Anthropic Chat Model | 按 flags 和事实表写草稿 | System 用上面的说明；Temperature 0.3 |
| 6 | Code（事后检查） | 对草稿再跑一遍风险词和价格检查 | 命中就把这条退回第 5 步重写一次，再命中就标「需要人写」 |
| 7 | Google Sheets（写草稿） | 草稿、flags 写回日历，status = drafted | Operation: Update Row；按 post_id 匹配 |
| 8 | Slack · Send and Wait for Response | 一条一条发给 Sophie：日期、平台、草稿、flags、照片说明 | Response Type: Custom Form；字段：决定（批准 / 改了再批 / 不发）、修改后的文案 |
| 9 | Switch | 按 Sophie 的决定分流 | 批准 / 改了再批 / 不发 |
| 10 | Code | 「改了再批」的文案再跑一遍事后检查 | 通过才算 approved，否则回到第 8 步 |
| 11 | Google Sheets（写审批结果） | status = approved 或 rejected，记谁批的、几点批的 | Operation: Update Row |
| 12 | Slack | 把 approved 的帖子发给小陈去排程 | 附草稿、计划时间、图片说明；图片暂停的帖子不发 |
| 13 | Schedule Trigger + Google Sheets + If | 每天检查：approved 但离计划时间不到 24 小时还没 scheduled_link 的 | 命中就提醒小陈和 Sophie |

人工审批点：第 8 步。流程里没有任何直接发布到平台的节点；只有 status = approved 的帖子才会进排程，排程本身由小陈在平台后台完成并回填链接。以后要接排程工具（用 HTTP Request 调它的接口），也只能读 approved 的行。

> 用 ChatGPT 也可以：第一步用 ChatGPT Project 调写稿规则；n8n 里把 Anthropic Chat Model 换成 OpenAI Chat Model，其他节点不变。

## 4. 应该做出的结果

`expected/answer.json` 是标准答案（flags 和 decision 由脚本按规则算出），`expected/decisions.csv` 是 12 条的处理结论和参考草稿（草稿是人写的参考答案）。

12 条计划：7 条直接出草稿送审，5 条被挑出问题。

| 帖子 | 日期 | 问题 | 处理 |
|---|---|---|---|
| S03 可颂 | 12-05（六） | 「最好吃」 | 改写：只写澳洲黄油、层次、$5.80 |
| S04 常客故事 | 12-06（日） | 顾客照片没有书面同意 | 文案送审，图片暂停，等同意或换图 |
| S05 布朗尼 | 12-08（二） | 无麸质、乳糜泻、放心吃 | 改写成 made with a gluten-free flour blend + 过敏原原文 |
| S06 姜饼屋 | 12-10（四） | $38 不在事实表里 | 草稿留「[待确认，问 Sophie]」，补上再审 |
| S11 圣诞快乐 | 12-25（五） | 休息日叫人到店自提 | 改成纯祝福 + 12-27 恢复营业 |

没问题的 7 条：S01、S02、S07、S08、S09、S10、S12。其中 S08 写自提时间要带上「周二到周日」和「24 日 1 点关门」，S10 的营业时间要和事实表逐条一致（24 日 7–13 点，25、26 日休息，27 日起照常，31 日 7–13 点，1-1 休息）。

## 5. 验收清单

- [ ] 被挑出的正好是 S03、S04、S05、S06、S11 五条，原因跟上表一致。
- [ ] 草稿里没有 best、coeliac 这类词；gluten-free 只出现在布朗尼那条的 made with a gluten-free flour blend 里，并且后面带了过敏原原文。
- [ ] 所有草稿里的价格、日期、营业时间都能在事实表里找到；姜饼屋没有出现任何价格。
- [ ] S04 的照片没有进排程；S11 草稿没有叫人到店。
- [ ] 在 n8n 里演示：Sophie 点「不发」的帖子 status 变 rejected，小陈收不到；Sophie 改的文案里加了「best」时，被事后检查拦回来。

## 6. 加分挑战

- 加一列 `link_policy`：Facebook 和 Instagram 各自能不能放链接、放在哪，按平台分别出两版文案。
- 每月底让 Claude 读一遍本月 approved 和 rejected 的记录，总结 Sophie 最常改的三类问题，补进写稿说明里。
- 给顾客照片加一个同意收集表（n8n Form），顾客填完自动把 asset_consent 改成 yes，并记录同意时间和范围。

## 7. 简历 / 面试可以这样讲

> 为一家两店面包房搭建社媒内容审批流程：n8n 每周按内容日历读取未来两周的帖子，用规则先挑出休息日叫人到店、无书面同意的顾客照片、事实表外的价格和不能用的最高级 / 过敏原说法，再让 Claude 只依据品牌事实表起草文案，并对草稿二次检查；每条都经店长在 Slack 审批后才进入排程表，流程中没有直接发布的节点（教学项目，店铺和内容都是为练习设计的）。
