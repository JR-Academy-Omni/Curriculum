# 无人值守 starter kit

Vibe Coding 大师课 L11 配套。**改一个文件就能用。**

```
config.env            ★ 你只改这个
task-brief.md         任务书模板（七段，你填）
watchdog.sh           看门狗主脚本（不用改）
selftest.sh           不跑 Agent 就能验证脚本对不对
receipt.example.json  回执长什么样
lib/receipt.sh        读回执 / 只认三个状态
lib/report.sh         把回执渲染成人能三十秒读完的报告
lib/notify.sh         报警通道（print / file / webhook / command）
```

---

## 三步跑起来

### 1. 先自检（不用配置任何东西）

```bash
./selftest.sh
```

它用假回执把看门狗的每一支都走一遍，**不碰你的项目、不消耗任何额度**。
13 项全绿说明脚本本身是对的。

### 2. 填 `config.env`

只有一处是必填的：

```bash
AGENT_CMD=()   # ← 换成你的 Agent 命令
```

参数以你用的工具**当天的官方文档**为准。要点只有一条：
**让它以「不询问、不等待」的方式跑** —— 否则它会挂在那儿等一个不会来的批准，而你在睡觉。

顺手确认这几项：`WORKDIR` · `RECEIPT_PATH` · `TIMEOUT_S` · `NOTIFY_MODE`。

> `MAX_RETRY` 默认 0。**先答完任务书第 7 段的幂等三问再改它。**

### 3. 填 `task-brief.md`，手动跑一次

```bash
./watchdog.sh
```

看回执对不对，报告读不读得懂。**对了再挂调度器。**

---

## 挂上调度器

```cron
# 每周一 09:07 —— 别挑整点，所有人的任务都在整点，你会撞上限流
7 9 * * 1  /usr/bin/env bash /绝对路径/watchdog.sh
```

macOS 用 `launchd` 或 `cron`（需要给终端「完全磁盘访问权限」）。

---

## 退出码

| 码 | 意思 | 你要做什么 |
|---|---|---|
| 0 | `done`，或 `needs-human`（它按约定停下了） | `needs-human` 会报警，去看 |
| 1 | 没有回执 / 回执坏了 / 重试耗尽 | **去看日志。多半断在半路** |
| 2 | 配置不对（`AGENT_CMD` 没填） | 填配置 |

---

## 三件容易写错的事

1. **`notify()` 一直是 `print`** —— 那只是日志，不是报警。判断标准：**你会不会主动去看它？**
2. **`RECEIPT_PATH` 和任务书里写的不一致** —— 它写到 A，你读 B，永远报「没有回执」。
3. **把 `MAX_RETRY` 直接调大** —— 没答幂等三问就重试，会开出两个一模一样的 PR。

---

## 依赖

`bash` `python3`（读 JSON）。
`timeout` 可选 —— 没有的话脚本会自己实现超时（macOS 装 coreutils 可得 `gtimeout`）。
