# MiniClaw 现场编码路线

公开课只从 `demo/starter` 开始。`demo/miniclaw` 是完整参考实现和故障兜底，不先展示。

## 上台前

```bash
cd demo/starter
bun test
bun src/cli.ts doctor
```

终端字号至少 22。打开两个窗口：左侧编辑器，右侧终端。提前清空 `MINICLAW_HOME` 的课堂临时目录，不使用个人真实记忆。

## 40 分钟构建顺序

### 1. Provider 与 Router，10 分钟

保留 `Provider` interface 和 `MockProvider`，现场增加 `FailingProvider` 与 `ModelRouter`。先让 primary 抛出 `simulated_rate_limit`，再看到 fallback 成功。强调 Adapter 负责供应商差异，Router 负责策略。

验收：终端同时打印 primary 失败与 fallback 成功，进程退出码为 0。

### 2. Skill Loader，7 分钟

新建 `skills/course-advisor/SKILL.md`，从 YAML frontmatter 读取名称和说明，把正文注入 system message。

验收：修改 Skill 正文后，不改 Agent Loop，输出行为随之改变。

### 3. Durable Memory 与 Recall，10 分钟

把已确认事实追加到 JSONL。查询时只召回 `confirmed=true` 且未删除的记录。为中文加入连续双字索引，避免整段中文被当成一个 token。

验收：未确认草稿不进入结果，同一用户的目标能跨进程召回。

### 4. Agent Trace 与 Reflection，10 分钟

Agent 组合 Skill、Memory 和 Router，保存 provider attempts、memory IDs 与 skill 名。Reflection 只写 pending proposal。最后由 `reflect approve <id>` 写入配置。

验收：没有 approve 就没有配置变化；trace 能解释为什么发生 fallback。

### 5. 收口，3 分钟

```bash
cd ../miniclaw
bun run build
miniclaw --json demo --fail-primary
miniclaw reflect propose
```

告诉观众完整实现还包含 OpenAI Responses API、Anthropic Messages API、稳定 JSON envelope 和只读 raw escape hatch。这个实现是教学纵切面，不声称复刻生产版 OpenClaw。

## 现场故障降级

- 网络或 Key 失败：保持 mock 模式，重点展示 Router、Memory、Skill 和 Trace。
- 编码超时：切换 `demo/miniclaw`，从上一个已验收命令继续。
- 中文检索无结果：先运行 `memory list` 检查 `confirmed`，再检查连续双字索引。
- Deck 失效：直接按 `RUNSHEET.md` 的时间点和命令讲，浏览器不是核心依赖。
