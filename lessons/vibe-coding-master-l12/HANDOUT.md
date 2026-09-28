# 第十二节《Claude Hook》· 学员讲义

> 把「我跟它说过」变成「它绕不过去」
>
> **这份讲义能脱离课堂读懂。** deck 上前三幕的页面在没有老师带节奏时是看不懂的（只有指令没有结果），那是故意的；这一份是给你带走的完整版。
>
> **课堂硬产物**：一个你自己写的、**当堂拦截成功过一次**的 hook。
>
> ⚠️ **本讲义里的代码分两类，每条都标了：**
> - **[官方]** —— 逐字来自 `code.claude.com/docs`，**没有改写**。你回去翻文档能对上。
> - **[本课]** —— 基于官方机制拼的，**不是官方示例**。能用，但文档里找不到原文。
>
> ⚠️ **字段、默认值、事件列表会变。** 本讲义按写作当天的官方文档核对，真要动手前请以 `code.claude.com/docs/en/hooks-guide` 和 `/hooks` 的**当天版本**为准（§13）。

---

## 目录

| 章 | 内容 | 什么时候看 |
|---|---|---|
| §0 | 这节课到底在讲什么 | 先看这个 |
| §1 | 三行机制 | 想起来 hook 怎么工作时 |
| §2 | 四道判断线 | 决定「这条规矩要不要挂」时 |
| §3 | 挂在哪个时点 + `Can block?` 全表 | **决定挂哪个事件时（最常用）** |
| §4 | 一份填好的完整示例 | 第一次动手照着抄 |
| §5 | 用法样例库（八类） | 想找「这种需求怎么写」时 |
| §6 | 脚本解剖与字段速查 | 写脚本卡住时 |
| §7 | 反面案例 | **交作业前自查一遍** |
| §8 | 排错八条 | 它不工作时 |
| §9 | 安全：谁受它管 | 提交进仓库之前必读 |
| §10 | 用不了 Claude Code 怎么办 | 环境受限时 |
| §11 | 原理：为什么这么组词 | 面对新场景要自己组词时 |
| §12 | 作业 | 课后 |
| §13 | 官方文档入口 | 查证时 |

---

## §0 这节课到底在讲什么

### 0.1 前十一节交给你的东西，有一个没说破的共同性质

```text
L1   PRD              说给它听
L2   CLAUDE.md        说给它听
L5   Skill            说给它听（只是打包了）
L7   Subagent brief   说给它听
L10  落盘搬空隐藏区    说给它听
L11  七段任务书        说给它听
──────────────────────────────────────────────
以上全部：它可以不读，读了可以不照做，
          这次照做了下次可以不照做。
```

**为什么？四层原因，从「它没看见」到「它看见了但选了别的」。**

```text
①  它根本没在 context 里          ← 最常见，而且大多数人从没怀疑过
②  在 context 里，但被淹没了
③  看见了，但和别的东西冲突
④  看见了，没冲突，还是没做        ← 只有这一层，hook 是唯一解
```

#### ① 它根本没在 context 里

**规矩是「按需加载」的，不是「一直都在」。** 硬依据：官方 `InstructionsLoaded` 事件的 matcher 过滤的是**加载原因**，一共五个值 ——

```text
session_start      会话开始时加载
nested_traversal   进到某个子目录，才加载那一层的 CLAUDE.md
path_glob_match    碰到匹配的文件路径，才加载对应规则
include            被别的文件引入
compact            压缩之后重新加载
```

所以：你在 `src/api/CLAUDE.md` 里写的规矩，**它在改 `src/ui/` 的时候根本不在它眼前**。

**再加上压缩**（官方原话）：

> When Claude's context window fills up, compaction summarizes the conversation to free space. **This can lose important details.**

> 一个长会话跑到后半程，你早上说的规矩可能**已经被摘掉了**。你以为它「读过」—— 它确实读过，**但那是两小时前的事**。

**处方**：`SessionStart` + `compact` 灌回去（§5.C-1）· CLAUDE.md 放对目录层级 · 挂 `InstructionsLoaded` 记日志先看清它到底加载了什么。

#### ② 在 context 里，但被淹没了

500 行的 CLAUDE.md，第 300 行那条，要和**你刚说完的那句话**竞争。官方也提过一句：**Keep your CLAUDE.md concise, since Claude reads it on every run.**

> ⚠️ **反直觉但重要**：**你往 CLAUDE.md 里加的每一条，都在稀释已有的每一条。** 加规矩不是免费的。

#### ③ 看见了，但和别的冲突

- **你自己前后矛盾**：CLAUDE.md 里躺着「别动 `.env`」，你刚说「把配置改成生产环境」。两条都在 context 里，**你当下说的那句天然更「近」**。
- **完成任务 vs 遵守禁令**：L11 已经立过这条 —— **它的目标是完成任务，不是保护你的意图**。L11 演示过：只给读权限让它做一件必须写文件的事，**它不报错也不停，它绕过去**，然后说做完了。

#### ④ 看见了，没冲突，还是没做 ⭐

到这一层就没有「为什么」了，**这就是机制本身**。官方那句话的用词是关键：

> deterministic control: certain actions always happen rather than **relying on the LLM to CHOOSE to run them**

**choose。** 你写进 CLAUDE.md 的每一条，都是在**等它选**照做。它大概率会选，但那是概率，不是保证 —— **同样的 context、同样的请求，跑两次可以不一样**。

> 「它这次照做了」**不构成**「它下次也会」的证据。
> 而你的规矩之所以叫规矩，是因为**你要的是每次**。

#### 怎么判断自己在第几层

| 动作 | 结果 → 结论 |
|---|---|
| **直接问它**：「你的 CLAUDE.md 里关于 X 有什么规定？」 | 答不出 → ①或② · 答得出还犯 → ③或④ |
| **同一个请求跑三次** ⭐ 最有用 | 三次都犯 → **③**（有稳定冲突，去找它）· 有时犯有时不犯 → **④**（这就是概率，上 hook） |
| **挂 `InstructionsLoaded` 记日志** | 你会发现**有些规矩根本没被加载过** —— 那就是①，实锤 |

#### ⭐ 这四层解释了闸①的「三遍」为什么不是拍脑袋

| | 再说一遍有用吗 | 为什么 |
|---|---|---|
| **①②③层** | **有用** | 补上下文、砍 CLAUDE.md、消除冲突，都能真的提高命中率 |
| **④层** | **说一百遍也没用** | 问题不在于它不知道 |

> **闸①（§2）问的不是「你烦不烦」，是「你到第四层了没有」。**
>
> 说过一遍就挂 hook —— 你很可能在**用 hook 解决一个 context 问题**，挂完还是犯，然后你会以为 hook 没用。
>
> **说过十遍还犯，那就是第四层。到这一层，hook 是唯一治得了的东西。**

> 📎 **出处**：`InstructionsLoaded` 五个加载原因、压缩会丢细节、`choose` 那句 —— **官方文档原文**。**「四层诊断」这个分法和上面三个判断动作是本课的教学设计，不是官方分法。**「它的目标是完成任务，不是保护你的意图」是 **L11 的立论**。

### 0.2 hook 是这个系列里第一个「它不能不照做」的东西

官方文档原话（本节的支点）：

> Hooks are user-defined shell commands. Claude Code runs them at specific points in its lifecycle, which gives you **deterministic control: certain actions always happen rather than relying on the LLM to choose to run them.**

一句话：**你写的 shell 命令，Claude Code 在固定时点自动帮你跑，你不用求它记得。**

### 0.3 但它有一条硬边界（本节收口）

> **hook 挡得住的，只有你说得清的那部分。**
>
> 说不清的那部分还在。**而且现在你以为它被挡住了。**

为什么？因为 **hook 的力量来自确定性，确定性来自它不动脑**。

```text
「别动 .env」          你说得清   →  挂得上
「别写得太复杂」        你说不清   →  挂不上
```

你一让它动脑（`prompt` / `agent` hook，§5.H），确定性就还回去了。

### 0.4 这一节结清了两笔老账

| 老账 | 原来的说法 | 现在变成什么 |
|---|---|---|
| **L6 铁律** | 「它说完成了不算完成，判据要来自它之外」 | `Stop` hook：**测试不过，它没法说完成**。铁律从**原则**变成**机制**（§3.4） |
| **L6 的病** | context 会被压缩，压缩会丢东西 | `SessionStart` + `compact`：压缩之后自动把关键信息灌回去（§5.C-1） |

还有一笔接的是 L11：

> L11 教了三条让它不卡住的做法（提前批 / 取消问 / 全放开），代价是**你放开权限的同时，把该拦的也一起放开了**。
>
> **hook 是唯一一个能让「我放开权限」和「这几件事你永远别碰」同时成立的机制**（§9.1）。

---

## §1 三行机制

**hook 的全部就是这三行。** 剩下 30 多个事件、五种 type、各种字段，都是这三行的变奏。

```text
   它给你   ──▶  一坨 JSON 进 stdin
                 { "hook_event_name": "PreToolUse",
                   "tool_name": "Write",
                   "tool_input": { "file_path": "/你的项目/.env" },
                   "cwd": "...", "session_id": "..." }

   你给它   ──▶  exit 0   我不表态，走正常权限流程
                 exit 2   拦住，stderr 那句话变成给它看的反馈
                 JSON     更细的控制（deny / allow / ask，或往 context 里塞话）
```

### ⚠️ 第一个必踩的坑：`exit 0` 不叫「放行」

官方原话：

> **Exit 0**: your hook reports no objection through its exit code.
> For a `PreToolUse` hook **this doesn't approve the tool call: the normal permission flow still applies.**

`exit 0` 的意思是「**我不表态**」。它后面该弹权限还是会弹。

**把 `exit 0` 当放行的人，会以为自己批准了，其实什么都没发生。** 想真的放行要用 JSON（§6.3），而且放行也突破不了 settings 里的 deny 规则。

---

## §2 四道判断线

**不是四个格子，是一条链。前一道过不了，后面不用问。**

```text
              你想让它守的那条规矩
                       │
   ①  这条你已经说过几遍了？ ──── 才一遍 ───▶ 先再说一遍。
      （三遍以上才值得挂）                     hook 不是用来代替沟通的
                       │
   ②  它违反的时候，是漏做还是做错？
      ├─ 漏做（该做没做）  ──▶ 事后补：PostToolUse / Stop
      └─ 做错（做了不该做的）──▶ 事前拦：PreToolUse
      ⚠️ 这一格决定时点。挂反了，第二种会静默失败
                       │
   ③  「违反了没有」这件事，一个不动脑的脚本判得出来吗？
      ├─ 判得出（路径 / 字符串 / 退出码）──▶ command hook
      ├─ 判不出但能描述  ──▶ prompt / agent hook，但确定性还回去了
      └─ 描述不出        ──▶ 这条规矩今天还挂不了 hook
                       │
   ④  它拦错的时候，你还干得了活吗？ ── 干不了 ──▶ 收窄 matcher，
      （拦太宽 = 你会自己关掉 = 等于没挂）        或降级成「提醒」不「拦」
                       │
                       ▼
            可以挂。剩下的才是：挂在哪个文件（谁受它管，§9）
```

### 2.1 每道过不了怎么办

| 闸 | 过不了的样子 | 怎么办 |
|---|---|---|
| **①** | 你其实只说过一次，或者你根本没说过、只是「觉得应该有这条规矩」 | **先去好好说一遍。** 还没沟通就上强制，你会造出 §2.2 那种局面 —— 一个拦太宽、三天后被你自己关掉的 hook |
| **②** | 你说不清它违反时是「多做了」还是「少做了」 | 问自己一句：**「我怕的是它做了什么，还是它没做什么？」** 前者事前拦，后者事后补 |
| **③** | 判据写不成一行 `if` | **这是最常见的一道，也是本节的收口。** 三条出路：<br>a. 把规矩**换个说法**变具体（「别写得太复杂」→「单个文件别超过 400 行」）<br>b. 用 `prompt` / `agent` hook（§5.H），代价是确定性没了<br>c. **承认这条今天挂不了** —— 这是正确答案，不是失败 |
| **④** | 你的 matcher 是空的、或者判据太粗，它一天被拦十几次 | 收窄 matcher（§6.6）、加 `if` 字段（§5.A-4）、或者**降级成「提醒」不「拦」**（把 `exit 2` 改成 `exit 0` + 往 stdout 写一句话） |

### 2.2 关于闸④，一句要记住的话

> **一个被你关掉的 hook，和没挂过是一回事。**

拦太宽的 hook 百分之百有效 —— 它一次都没让你的规矩被违反过，**而它也让你一件事都做不成**。你回去三天之内会把它关掉。

所以闸④不是「锦上添花」，它是「这个 hook 三天后还在不在」。

---

## §3 挂在哪个时点 ⭐ 最常用的一张图

**大多数人的错不是不会写脚本，是挂错时点。**

```text
                    它还没动手              它已经动手了
                 ┌────────────────────┬────────────────────┐
                 │                    │                    │
   拦得住        │   PreToolUse       │   ✗ 拦不住         │
                 │   ← 唯一能拦的时点  │   工具已经跑完了    │
                 │                    │                    │
                 ├────────────────────┼────────────────────┤
                 │                    │                    │
   拦不住，      │   SessionStart     │   PostToolUse      │
   只能补 /      │   UserPromptSubmit │   Stop             │
   提醒 / 验收   │   ← 提前把话塞进去  │   ← 事后补救 / 打回  │
                 │                    │                    │
                 └────────────────────┴────────────────────┘
```

### 3.1 一句话判断线

> **你怕的是「它做了不该做的」→ 事前拦（`PreToolUse`）。**
> **你怕的是「它漏了该做的」→ 事后补（`PostToolUse` / `Stop`）。**
>
> 这两件事挂反了都会失败，**而第一种挂反了你还看不出来**。

### 3.2 为什么右上角是个叉（官方依据）

> `PostToolUse` hooks **can't undo actions since the tool has already executed.**

### 3.3 挂反了长什么样（课堂上那次翻车）

把「别改 `.env`」挂成 `PostToolUse`，然后让它改 `.env`：

- 脚本跑了 ✓
- 判据判对了 ✓
- 它也收到了你那句 `Blocked` ✓
- **而那一行已经在文件里了** ✗

**这一次失败是没有声音的。** 红字照出，日志照写，你的监控上一切正常。**只有文件变了。**

### 3.4 右下角那个 `Stop` —— L6 铁律的执行机构

官方定义：

```text
Stop | Yes | Prevents Claude from stopping, continues the conversation
```

翻译：**它说「我做完了」的时候，你的脚本可以说「不，回去接着做」**，并且告诉它还差什么。

L6 那条铁律 ——「它说完成了不算完成，判据要来自它之外」—— 一直是一条**原则**，靠你自己记得去验。**今天它有执行机构了。**（写法见 §5.D）

### 3.5 `Can block?` 全表（官方，逐字）

| Hook event | Can block? | What happens on exit 2 |
|---|---|---|
| `PreToolUse` | **Yes** | Blocks the tool call |
| `UserPromptSubmit` | Yes | Blocks prompt processing and erases the prompt |
| `UserPromptExpansion` | Yes | Blocks the expansion |
| `Stop` | Yes | Prevents Claude from stopping, continues the conversation |
| `SubagentStop` | Yes | Prevents the subagent from stopping |
| `TeammateIdle` | Yes | Prevents the teammate from going idle, so it continues working |
| `TaskCreated` | Yes | Rolls back the task creation |
| `TaskCompleted` | Yes | Prevents the task from being marked as completed |
| `ConfigChange` | Yes | Blocks the configuration change from taking effect (**except `policy_settings`**) |
| `PostToolBatch` | Yes | Stops the agentic loop before the next model call |
| **`PostToolUse`** | **No** | **Shows stderr to Claude; the tool already ran** |
| `PostToolUseFailure` | No | Shows stderr to Claude; the tool already failed |
| `PermissionRequest` | No | exit 2 不生效，权限流程照常。**要拒绝请用 `decision` 对象**（§6.3） |
| `PermissionDenied` | No | 退出码和 stderr 都被忽略 |
| `StopFailure` | No | 输出和退出码都被忽略（`terminalSequence` 除外） |

---

## §4 一份填好的完整示例 ⭐

> **这一节 deck 上没有，只在讲义里。** 课堂上不给范文，是因为给了范文交上来的全是范文的变体。现在课上完了，给你一份完整的照着抄。
>
> **[本课]** —— 这是按官方机制拼的一个完整例子，不是官方示例。

### 场景

> 「**别直接推 main**」—— 这句话我在群里说过至少五遍，还是有人（包括 Agent）直接推。

### 过四道判断线

| 闸 | 我的答案 |
|---|---|
| ① 说过几遍 | **五遍以上**，群里、CLAUDE.md 里都写过 → 过 |
| ② 漏做还是做错 | **做错**（它做了不该做的事）→ **事前拦，`PreToolUse`** |
| ③ 判得出来吗 | 判得出：Bash 命令里同时出现 `git push` 和 `main` → **`command` hook** |
| ④ 拦错了还干得了活吗 | 干得了。它推别的分支不受影响，且我给了绕过口子（见下）→ 过 |

### 脚本

`.claude/hooks/no-push-main.mjs`

```js
#!/usr/bin/env node
// 拦住直接推 main / master

process.stdin.setEncoding('utf8');
let raw = '';
for await (const chunk of process.stdin) raw += chunk;

const cmd = JSON.parse(raw || '{}').tool_input?.command ?? '';

// 只管 git push；别的 Bash 命令一律放行（不表态）
if (!cmd.includes('git push')) process.exit(0);

if (/(origin\s+)?(main|master)(\s|$)/.test(cmd)) {
  console.error('Blocked: 不要直接推 main。请开分支再发 PR：');
  console.error('  git switch -c feat/<你的分支名> && git push -u origin HEAD');
  console.error('（确实要直接推，请人工执行，不要让我代跑）');
  process.exit(2);
}

process.exit(0);
```

> **不需要 `chmod +x`** —— 下面配置里用 `node` 起它。

### 配置

`.claude/settings.json`

```json
{ "hooks": { "PreToolUse": [{
  "matcher": "Bash",
  "hooks": [{
    "type": "command",
    "if": "Bash(git push *)",
    "command": "node \"$CLAUDE_PROJECT_DIR/.claude/hooks/no-push-main.mjs\""
  }]
}]}}
```

### 验证（**这一步不做，等于没挂**）

```bash
# 1. 离线测脚本本身 —— 正反两条都要跑
echo '{"tool_input":{"command":"git push origin main"}}' \
  | node .claude/hooks/no-push-main.mjs ; echo $?      # 要看到 2

echo '{"tool_input":{"command":"git push origin feat/x"}}' \
  | node .claude/hooks/no-push-main.mjs ; echo $?      # 要看到 0  ← 别省

# 2. 确认它在 /hooks 里出现（只证明 JSON 被解析了，不证明它会拦）
/hooks

# 3. 端到端·正向：让它 push main    → 应该被拦
# 4. 端到端·反向：让它 push 别的分支 → 应该顺利推掉，一点动静都没有
```

> ⚠️ **第 1 步和第 4 步的反面用例别省。** 只测正面的话，下面这个脚本也能"通过"：
>
> ```js
> #!/usr/bin/env node
> console.error('Blocked'); process.exit(2);   // 什么都不判，一律拦
> ```
>
> **该拦的拦住了，只证明它有效；不该拦的放过了，才证明它可用。**
> 只有前者 → 你三天内会关掉它；只有后者 → 它等于没挂。**两条都有才算立住。**

### 这份示例里值得学的四处

1. **先 early return 放行不相关的命令** —— 每个 Bash 调用都会跑这个脚本，别让它做无谓的工作。
2. **那三行 `console.error` 写清了「为什么」和「你该怎么做」**（`console.error` 走 stderr） —— 它会收到这些话，能直接换个做法（§11 第 1 条）。
3. **`if: "Bash(git push *)"`** 在 matcher 之外又收窄了一层（闸④）。
4. **留了一个人工口子** —— 「确实要直接推，请人工执行」。**hook 拦的是它，不是你**，说清楚这一点能避免你自己被逼到去关掉它。

---

## §5 用法样例库

> 按「你想守什么」分成八类。**每条都标了来源。**

### §5.A 拦：它动手之前（`PreToolUse`）

#### A-1 · 保护文件不被改 **[本课 · Node]**

课堂上全班一起挂的就是这个。

`.claude/hooks/protect-files.mjs`

```js
#!/usr/bin/env node
process.stdin.setEncoding('utf8');
let raw = '';
for await (const chunk of process.stdin) raw += chunk;

const { tool_input = {} } = JSON.parse(raw || '{}');
const file = (tool_input.file_path ?? '').replaceAll('\\', '/');

const PROTECTED = ['.env', 'package-lock.json', 'node_modules/', '.git/'];

const hit = PROTECTED.find((p) => file.includes(p));
if (hit) {
  console.error(`Blocked: ${file} 命中保护规则 '${hit}'`);
  console.error('改配置请改 .env.example，依赖请用 npm install。');
  process.exit(2);
}

process.exit(0);
```

```json
{ "hooks": { "PreToolUse": [{
  "matcher": "Edit|Write",
  "hooks": [{
    "type": "command",
    "command": "node \"$CLAUDE_PROJECT_DIR/.claude/hooks/protect-files.mjs\""
  }]
}]}}
```

> ⚠️ **出处**：**官方文档给的是 bash + `jq` 版本。** 上面是它的 **Node 等价实现** —— 本课全部脚本都用 Node，因为演示与学员仓库都是 Node 项目。
>
> **换语言不改机制**：收 stdin → 挑字段 → 判 → `console.error` 写给它看 → `process.exit(2)` 拦住。**和 bash 版一行不差。**
>
> **两个连带好处**：Node 项目本来就有 `node`，**零额外安装**（不用装 `jq`）；用 `node xxx.mjs` 调用，**不需要 `chmod +x`**。

> 🚨 **`.mjs` 这个扩展名是必须的**（或者 `package.json` 里有 `"type": "module"`），否则 top-level await 会报 `SyntaxError`。**这是 Node 版的排错第一名。**

#### A-2 · 拦危险命令 + 同时记日志 **[官方]**

```json
{ "hooks": { "PreToolUse": [{
  "matcher": "Bash",
  "hooks": [
    { "type": "command", "command": "node .claude/hooks/log-bash.mjs" },
    { "type": "command", "command": "node .claude/hooks/block-rm-rf.mjs" }
  ]
}]}}
```

**这个例子专门用来讲「一个事件挂多个 hook」的三条规则（全部官方原文）：**

1. **都会跑完** —— every hook's command runs to completion before Claude Code merges the results。
2. **最严的赢** —— the most restrictive answer applies, in the order `deny`, `defer`, `ask`, `allow`。
3. ⚠️ **一个 `deny` 拦不住兄弟 hook 的副作用** —— *One hook returning `deny` doesn't stop sibling hooks from executing. **Don't rely on one hook's `deny` to suppress side effects in another hook.***

**第 3 条是个真坑**：上面这个例子里，**命令即使被拦了，日志照样写**。官方原话：「The log entry is still written because the logging hook already ran.」

#### A-3 · 用 JSON 输出拦，并告诉它换个做法 **[官方]**

不是禁止，是引导。

```json
{
  "hookSpecificOutput": {
    "hookEventName": "PreToolUse",
    "permissionDecision": "deny",
    "permissionDecisionReason": "Use rg instead of grep for better performance"
  }
}
```

`permissionDecision` 四个值：

| 值 | 含义 |
|---|---|
| `allow` | 跳过询问。**但突破不了 settings 里的 deny 规则**，也压不住标了 `requiresUserInteraction` 的 MCP 工具 |
| `deny` | 取消这次调用，并把 `permissionDecisionReason` 送给它 |
| `ask` | 照常弹给用户 |
| `defer` | 只在 `-p` 非交互模式下可用，给 Agent SDK 包装器收集输入后恢复用 |

> ⚠️ **exit 2 和 JSON 输出不要混用。** 官方明说：**Choose one approach per hook.**

#### A-4 · 用 `if` 字段代替宽 matcher **[官方字段]**

`matcher` 挑事件层面的工具名，`if` 再往下挑具体调用。

```json
{ "hooks": { "PreToolUse": [{
  "matcher": "Bash",
  "hooks": [{
    "type": "command",
    "if": "Bash(git push *)",
    "command": "\"$CLAUDE_PROJECT_DIR\"/.claude/hooks/guard-push.sh"
  }]
}]}}
```

官方对 `if` 的定义：*Permission rule syntax to filter when this hook runs, such as `"Bash(git *)"` or `"Edit(*.ts)"`. The hook command only runs if the tool call matches the pattern.*

**这是闸④（收窄）的一个具体手段。**

### §5.B 补：它动完手（`PostToolUse`）

#### B-1 · 改完自动格式化 **[官方]**

```json
{ "hooks": { "PostToolUse": [{
  "matcher": "Edit|Write",
  "hooks": [{
    "type": "command",
    "command": "node \"$CLAUDE_PROJECT_DIR/.claude/hooks/format.mjs\""
  }]
}]}}
```

这是「漏做」类规矩的标准形态 —— **不拦，补上**（二维图右下格）。

**怎么验证它跑了**：hook 成功时对话里什么都不显示。官方给的验证法很妙 —— 让它往 JS 文件里加一行单引号字符串，然后打开文件：Prettier 默认会把它改成双引号。

#### B-2 · ⚠️ B-1 的坑：它用 Bash 改的文件你看不见 **[官方提醒 + 本课写法]**

官方原话：

> Claude can also create or modify files by running shell commands. If your hook must see every file change, such as for compliance scanning or audit logging, add a `Stop` hook that scans the working tree once per turn. For per-call coverage instead, also match `Bash|PowerShell` and have your script list modified and untracked files with `git status --porcelain`.

**[本课]** 挂在 `Stop` 上，一轮结束扫一遍工作区：

```js
#!/usr/bin/env node
import { execSync } from 'node:child_process';

const files = execSync('git status --porcelain', { encoding: 'utf8' })
  .split('\n').map((l) => l.slice(3).trim())
  .filter((f) => /\.(ts|tsx|js|jsx)$/.test(f));

if (files.length) execSync(`npx prettier --write ${files.join(' ')}`, { stdio: 'inherit' });
process.exit(0);
```

**要点**：`matcher: "Edit|Write"` 只看得见它用**编辑工具**做的改动。它 `sed` 一下、`echo >>` 一下，你的 hook 什么都不知道。

#### B-3 · 盯住某个文件，谁改都算 **[官方]**

用 `FileChanged` 事件，`matcher` 填要盯的文件名。官方：*To run a hook when a specific file changes on disk, whatever wrote it, use a `FileChanged` hook.*

### §5.C 灌上下文：提前把话塞进去

#### C-1 · 压缩之后把关键信息灌回去 **[官方]** ← L6 的兑现

L6 讲过 context 会被压缩、压缩会丢东西。这是解法。

```json
{ "hooks": { "SessionStart": [{
  "matcher": "compact",
  "hooks": [{
    "type": "command",
    "command": "echo 'Reminder: use Bun, not npm. Run bun test before committing. Current sprint: auth refactor.'"
  }]
}]}}
```

**三个要点：**

1. `SessionStart` 的 matcher 过滤的是**会话怎么开始的**：`startup` / `resume` / `clear` / `compact` / `fork`。这里只挂 `compact`。
2. **stdout 的纯文本会被加进 context。** 这是 `exit 0` 的特殊行为，只对 `UserPromptSubmit` / `UserPromptExpansion` / `SessionStart` / `PostModelSwitch` 四个事件成立。
3. **`echo` 可以换成任何命令**，官方举的例子是 `git log --oneline -5`。**动态的比静态的有用得多。**

> **官方给的边界**：每次会话开始都要灌的东西，**用 CLAUDE.md，别用 hook**。hook 是给「只在某种情况下才灌」用的。

#### C-2 · 每次提问自动附上当前状态 **[官方]**

```json
{
  "hookSpecificOutput": {
    "hookEventName": "UserPromptSubmit",
    "additionalContext": "Current branch: release-42. Deploy freeze until Friday."
  }
}
```

⚠️ **官方专门警告的坑**：`additionalContext` **必须嵌在 `hookSpecificOutput` 里面**。放在 JSON 顶层的话，Claude Code **会静默忽略它** —— 不报错，就是不生效。

> 这是「静默失败」的又一个形态，和 §3.3 挂错时点同类。**本节反复出现的主题：失败不一定有声音。**

### §5.D 验收：它说做完了的时候（`Stop`）

#### D-1 · 测试不过它没法收工 · agent hook 版 **[官方]**

```json
{ "hooks": { "Stop": [{
  "hooks": [{
    "type": "agent",
    "prompt": "Verify that all unit tests pass. Run the test suite and check the results. $ARGUMENTS",
    "timeout": 120
  }]
}]}}
```

#### D-2 · 同一件事，不用模型的版本 **[本课]**

**测试命令固定的话，根本不用 agent hook。**

```js
#!/usr/bin/env node
// 挂在 Stop 上：测试没过就把它按回去继续做
import { spawnSync } from 'node:child_process';

const r = spawnSync('npm', ['test', '--silent'], { encoding: 'utf8', shell: true });

if (r.status !== 0) {
  console.error('测试没过，不能收工。失败输出：');
  console.error(`${r.stdout}${r.stderr}`.trim().split('\n').slice(-20).join('\n'));
  process.exit(2);
}
process.exit(0);
```

**D-1 vs D-2 就是 §5.H 那条判断线的实例**：能用 D-2 的场景别用 D-1。

#### ⚠️ D 类共同的坑（官方点名）

> `Stop` hooks fire whenever Claude finishes responding, **not only at task completion**.

你随口问一句「这个函数干嘛的」，它答完**也会触发**这个 hook，于是跑一遍测试。**所以这类 hook 要么加条件，要么你会被自己烦死。**

另外：`Stop` hook 有 **block 次数上限**（block cap），防止无限循环。它们也**不会在你按 Esc 打断时触发**；API 出错时触发的是 `StopFailure`。

#### D-3 · prompt hook 版：让模型判「做完没有」 **[官方]**

```json
{ "hooks": { "Stop": [{
  "hooks": [{
    "type": "prompt",
    "prompt": "Check if all tasks are complete. If not, respond with {\"ok\": false, \"reason\": \"what remains to be done\"}."
  }]
}]}}
```

`ok: false` 时 `reason` 会被喂回给它当下一步指令。还有一个 `impossible: true` 字段 —— 标记「这个条件永远满足不了」，避免它被卡在死循环里。

### §5.E 提醒：它在等你（`Notification`）

#### E-1 · 它卡住等批准时弹桌面通知 **[官方]** ← 接 L11

```json
{ "hooks": { "Notification": [{
  "matcher": "",
  "hooks": [{
    "type": "command",
    "command": "osascript -e 'display notification \"Claude Code needs your attention\" with title \"Claude Code\"'"
  }]
}]}}
```

> L11 的演示 B 是「它挂在那儿等了一夜，而它不会打电话给你」。**这一条就是让它打电话给你。**

`Notification` 的 matcher 能挑通知类型，和前几节直接相关的：

| 值 | 什么时候触发 |
|---|---|
| `permission_prompt` | 它要你批准（**等了约 6 秒之后**才触发） |
| `idle_prompt` | 它答完约 60 秒你没动静 |
| `agent_needs_input` / `agent_completed` | 后台会话（接 L7 / L8） |

> macOS 上如果没弹出来：`osascript` 走的是 Script Editor，权限没给的话**它会静默失败**。在终端里先跑一次 `osascript -e 'display notification "test"'`，让 Script Editor 出现在通知设置里。

### §5.F 审计：谁改了什么

#### F-1 · 配置被改了就记一条 **[官方]**

```json
{ "hooks": { "ConfigChange": [{
  "matcher": "",
  "hooks": [{
    "type": "command",
    "command": "node \"$CLAUDE_PROJECT_DIR/.claude/hooks/audit.mjs\""
  }]
}]}}
```

matcher 挑配置来源：`user_settings` / `project_settings` / `local_settings` / `policy_settings` / `skills`。

**它也能拦**：exit 2 或 `{"decision": "block"}` 就阻止这次配置变更生效。**官方注明一个例外：`policy_settings` 拦不住。**

官方安全页也点名了这个用法：*Audit or block settings changes during sessions with `ConfigChange` hooks.*

### §5.G 团队：让规矩跟着仓库走

#### G-1 · 提交进仓库的项目级 hook **[官方位置]**

把 A-1 的配置写进项目的 `.claude/settings.json` 并提交。**克隆的人自动受管。**

⚠️ **提交之前先读 §9。**

#### G-2 · 挂在 Skill 里的 hook **[官方]** ← 接 L5

```yaml
---
name: secure-operations
description: Perform operations with security checks
hooks:
  PreToolUse:
    - matcher: "Bash"
      hooks:
        - type: command
          command: "node ./scripts/security-check.mjs"
---
```

L5 教了 Skill 是把重复套路打包。现在 Skill **还能带自己的规矩**。

**生命周期不同，要分清（官方原话）：**

| | 什么时候注册 | 什么时候撤 |
|---|---|---|
| **Skill hooks** | 你或它调用这个 skill 时 | **不撤** —— 之后整个会话都还在跑，包括后面几轮。想跑一次就撤，加 `once: true` |
| **Subagent hooks** | 那个 subagent 启动时 | 它跑完就撤。且 subagent 里写的 `Stop` **会被自动转成 `SubagentStop`** |

### §5.H 要动脑的判断：`prompt` / `agent` hook

**说不清的规矩，官方给了两条路。但代价要一起看。**

| 类型 | 怎么工作 | 什么时候用 | 代价 |
|---|---|---|---|
| `command` | 跑一个 shell，退出码说话 | 一行 `if` 就够 | 无。**优先用它** |
| `prompt` | 把 hook 的输入喂给一个模型（默认 Haiku），返回 `{"ok", "reason"}` | 光看 hook 的输入数据就够判断 | **确定性还回去了** —— 判断的是模型，不是脚本 |
| `agent` | 起一个 subagent，能读文件跑命令，最多 50 轮工具调用 | 得对着代码真实状态验证才判得了 | 同上，**而且官方标了 experimental** |

**判断线：**

> **hook 的输入数据就够判 → `prompt`。**
> **得看代码真实状态才判得了 → `agent`。**
> **一行 `if` 就够 → `command`，而且优先用它。**
>
> 官方原话：*For production workflows, **prefer command hooks**.*

### §5.I 更远的：知道它存在就行

| 类型 / 事件 | 一句话 | 什么时候才需要 |
|---|---|---|
| `type: "http"` | 把事件 POST 到一个 URL，返回体里给决定 | 团队共用审计 / 策略服务。⚠️ headers 里的 `$VAR` **只有列进 `allowedEnvVars` 的才会被替换**；HTTP 状态码本身拦不住动作，要返回 2xx + `hookSpecificOutput` |
| `type: "mcp_tool"` | 调用已连接的 MCP server 上的工具 | 你已经在用 MCP（本系列还没讲 MCP） |
| `PostToolBatch` | 一批并行工具调用全结束、下次模型调用之前 | 要看「这一轮总共干了什么」而不是单次调用 |
| `PermissionRequest` | 它要弹权限框的时候 | 自动批准某一类。⚠️ **matcher 一定要窄**（§11 第 2 条） |
| `SubagentStart` / `TeammateIdle` | 接 L7 / L8 | 给子 agent 或 teammate 加统一规矩 |
| `PreCompact` / `PostCompact` | 压缩前后 | 比 `SessionStart:compact` 更早的介入点 |

---

## §6 脚本解剖与字段速查

### 6.1 最小骨架（六步 · Node）

```js
#!/usr/bin/env node
// ① 收：把 stdin 整个读进来（它是一坨 JSON）
process.stdin.setEncoding('utf8');
let raw = '';
for await (const chunk of process.stdin) raw += chunk;

// ② 挑：从 JSON 里取出你要判断的那个字段
const { tool_input = {} } = JSON.parse(raw || '{}');
const field = tool_input.file_path ?? '';

// ③ 判：一行 if。这一行就是你那条规矩
if (field.includes('.env')) {
  // ④ 说：写给它看的话，走 stderr
  console.error('Blocked: 这个文件不许改，改配置请改 .env.example');
  // ⑤ 拦：exit 2
  process.exit(2);
}

// ⑥ 不表态（注意：不是放行）
process.exit(0);
```

**六步里你自己要写的只有第 ③ 和第 ④ 步。** 其余五步每个 hook 都一样，抄就行。

> **换任何语言都是这六步。** 官方文档用 bash + `jq` 写，本讲义用 Node 写 —— **`jq` 从来不是机制的一部分**，它只是个解析 JSON 的小工具。任何能读 stdin、能设退出码的东西都行。

### 6.2 输入：stdin 那坨 JSON

**共有字段**（每个事件都有）：

| 字段 | 是什么 |
|---|---|
| `session_id` | 这次会话的唯一 ID |
| `cwd` | 事件触发时的工作目录。⚠️ 进了 worktree 之后，这里是 **worktree 根**（而 `${CLAUDE_PROJECT_DIR}` 不变） |
| `hook_event_name` | 哪个事件触发的 |

**`PreToolUse` / `PostToolUse` 额外有**：

| 字段 | 是什么 |
|---|---|
| `tool_name` | 它要用哪个工具（`Bash` / `Edit` / `Write` / …） |
| `tool_input` | 传给工具的参数。**Bash 看 `.command`，Edit/Write 看 `.file_path`** |

官方完整样例：

```json
{
  "session_id": "abc123",
  "cwd": "/Users/sarah/myproject",
  "hook_event_name": "PreToolUse",
  "tool_name": "Bash",
  "tool_input": {
    "command": "npm test"
  }
}
```

**别的事件字段不同**：`UserPromptSubmit` 拿到的是 `prompt` 文本；`SessionStart` 拿到的是 `source`（`startup` / `resume` / `clear` / `compact` / `fork`）。

> **别背 schema。** 用 §8 最后那条技巧：把输入原样存下来看一眼，比查任何表都快。

### 6.3 输出：三条路，选一条

```text
路 1  exit 0   ──▶ 「我不表态」
                    ⚠️ 不是放行！正常权限流程还在后面
                    特例：UserPromptSubmit / UserPromptExpansion /
                          SessionStart / PostModelSwitch 四个事件，
                          stdout 的纯文本会被加进 context

路 2  exit 2   ──▶ 「拦住」+ stderr 变成给它的反馈
                    ⚠️ 不是所有事件都拦得住，见 §3.5

路 3  JSON     ──▶ exit 0 + stdout 输出一个对象，做更细的控制
                    PreToolUse:        hookSpecificOutput.permissionDecision
                    UserPromptSubmit:  hookSpecificOutput.additionalContext
                    PostToolUse / Stop: 顶层 decision: "block"
                    PermissionRequest: hookSpecificOutput.decision.behavior
```

**官方铁律：Choose one approach per hook.**

**其他退出码会怎样**（最容易踩，官方写得很细）：

| stdout 是什么 | 结果 |
|---|---|
| 能通过 schema 校验的 JSON 对象 | **退出码被忽略，JSON 说了算，不算错误** |
| 是 JSON 但校验不过 / 看起来像 JSON 但格式错 | **非阻塞错误**，提示里带校验或解析信息 |
| 纯文本或空 | **动作照常进行**，transcript 显示 `<hook name> hook error` + stderr 第一行，前缀 `Failed with non-blocking status code:` |

> **修 JSON 解析失败的官方建议**：用 `jq` 这类编码器构造输出，**别用字符串拼接** —— 值里的引号和反斜杠拼接时会出事。

### 6.4 五种 type 与超时

| type | 干什么 | 默认超时 |
|---|---|---|
| `command` | 跑一个 shell 命令 | 10 分钟 |
| `http` | POST 到一个 URL | 10 分钟 |
| `mcp_tool` | 调用已连接的 MCP server 工具 | 10 分钟 |
| `prompt` | 单轮模型判断，默认 Haiku | 30 秒 |
| `agent` | 起 subagent，最多 50 轮 | 60 秒 |

**几个被下调的超时（容易踩）**：`UserPromptSubmit` / `PreModelSwitch` / `PostModelSwitch` 降到 **30 秒**；`MessageDisplay` 降到 **10 秒**；**`SessionEnd` 所有 hook 共享 1.5 秒预算**（配了更长的 `timeout` 才会抬高，最多 60 秒）。

### 6.5 配置文件结构

```json
{
  "hooks": {
    "<事件名>": [
      {
        "matcher": "<按事件类型过滤，见 6.6>",
        "hooks": [
          {
            "type": "command",
            "command": "<要跑的命令>",
            "if": "Bash(git *)",
            "timeout": 30,
            "once": false,
            "statusMessage": "跑的时候转圈显示这句"
          }
        ]
      }
    ]
  }
}
```

**两层数组的意思**（第一次看必懵）：

- **外层一项** = 一组 matcher 相同的 hook
- **内层 `hooks` 数组** = 这组里挂了几个命令，**它们并行跑**

⚠️ 如果你的 `settings.json` 里已经有 `hooks` 这个 key，**要把新事件加成兄弟键，不是替换整个对象**。

**路径占位符**：

| 占位符 | 是什么 |
|---|---|
| `${CLAUDE_PROJECT_DIR}` | 会话启动时的项目根 |
| `${CLAUDE_PLUGIN_ROOT}` | plugin 安装目录，**每次 plugin 更新都会变** |
| `${CLAUDE_PLUGIN_DATA}` | plugin 的持久数据目录 |

### 6.6 matcher 按事件过滤不同的东西

| 事件 | matcher 过滤什么 | 例子 |
|---|---|---|
| `PreToolUse` / `PostToolUse` / `PostToolUseFailure` / `PermissionRequest` / `PermissionDenied` | 工具名 | `Bash`、`Edit\|Write`、`mcp__.*` |
| `SessionStart` | 会话怎么开始的 | `startup` `resume` `clear` `compact` `fork` |
| `Setup` | 哪个 CLI flag 触发的 | `init` `maintenance` |
| `SessionEnd` | 会话为什么结束 | `clear` `resume` `logout` `prompt_input_exit` `other` |
| `Notification` | 通知类型 | `permission_prompt` `idle_prompt` `agent_needs_input` `agent_completed` … |
| `SubagentStart` / `SubagentStop` | agent 类型 | `general-purpose` `Explore` `Plan` 或自定义名 |
| `PreCompact` / `PostCompact` | 什么触发的压缩 | `manual` `auto` |
| `PreModelSwitch` / `PostModelSwitch` | 要切到的模型名 | `.*opus.*` 这类 |
| `ConfigChange` | 配置来源 | `user_settings` `project_settings` `local_settings` `policy_settings` `skills` |
| `FileChanged` | 要盯的文件名 | 文件名模式 |

⚠️ **两个官方点名的坑：**

1. **matcher 区分大小写**（Matchers are case-sensitive）。
2. **没有 matcher = 这个事件每次都触发。**

> `Edit|Write` 和（v2.1.191 起）`Edit, Write` 等价。

### 6.7 事件全表（按生命周期分组 · 33 个，一个不缺）

**你今天用得上的就 6 个**（下表加粗）。剩下的等你需要了再查。

| 组 | 事件 | 备注 |
|---|---|---|
| 会话 | **`SessionStart`** · `SessionEnd` · `Setup` | `Setup` 只在 `--init-only` / `-p` 模式的 `--init`、`--maintenance` 下触发，给 CI 和脚本做一次性准备 |
| 你说话 | **`UserPromptSubmit`** · `UserPromptExpansion` | 后者是「你敲的命令展开成 prompt、还没到它眼前」那一刻，**可以拦** |
| 它动手 | **`PreToolUse`** · `PermissionRequest` · `PermissionDenied` | |
| 动完手 | **`PostToolUse`** · `PostToolUseFailure` · `PostToolBatch` | `PostToolBatch` 是一批并行调用全结束、下次模型调用之前 |
| 它收工 | **`Stop`** · `StopFailure` | `StopFailure` 是这一轮因 API 报错结束（不是正常收工） |
| 任务 | `TaskCreated` · `TaskCompleted` | 两个都**拦得住**：分别回滚任务创建、阻止标记完成 |
| **分家** | `SubagentStart` · `SubagentStop` · `TeammateIdle` | ⭐ **接 L7 / L8，见下方说明** |
| **context** | `PreCompact` · `PostCompact` · `InstructionsLoaded` | ⭐ **接 L6，见下方说明** |
| 环境 | `CwdChanged` · `DirectoryAdded` · `FileChanged` · `ConfigChange` | `FileChanged` 的 matcher 填要盯的文件名，**谁改的都算** |
| worktree | `WorktreeCreate` · `WorktreeRemove` | 会**替换** git 的默认行为 |
| 模型 | `PreModelSwitch` · `PostModelSwitch` | `PreModelSwitch` **拦得住**模型切换 |
| MCP | `Elicitation` · `ElicitationResult` | MCP server 向你要输入时 |
| 提示 | **`Notification`** · `MessageDisplay` | |

**粗体六个**：`PreToolUse` · `PostToolUse` · `Stop` · `SessionStart` · `UserPromptSubmit` · `Notification`

**命名是有规律的**：`Pre*` 在前，`Post*` 在后，`*Stop` 在收工。你要挂的时点，名字基本猜得出来。

#### ⭐ 「分家」那一组 = 接 L7 / L8，而且这是个真坑

`SubagentStart` · `SubagentStop` · `TeammateIdle`

L7 教了 Subagent（给 context 分家），L8 教了 Agent Team。这一组要单独讲，因为：

> **你挂在主会话上的规矩，默认只管主会话。**
>
> 你派出去的子 agent、你的 teammate，**不会自动继承**你的 hook —— 它们要在这几个事件上单独挂，或者用 subagent frontmatter 里的 hook（§5.G-2）。

**换句话说**：你以为「我已经拦住了改 `.env`」，但你派出去的那个子 agent 可能正在改它。**这是「说得清也未必挡得住」的一个具体形态**（呼应 §0.3 的收口）。

顺带一条官方细节：subagent frontmatter 里写的 `Stop` hook **会被自动转成 `SubagentStop`**。

#### ⭐ 「context」那一组 = 接 L6

`PreCompact` · `PostCompact` · `InstructionsLoaded`

L6 那节课的立论是「**它没有记忆，只有 context**」，并且讲了 context 会被**压缩**，压缩会丢东西。

这三个事件就是**你能在这件事上插手的全部位置**：

| 事件 | 你能干什么 |
|---|---|
| `PreCompact` | 压缩**之前** —— 想留的东西先存出去 |
| `PostCompact` | 压缩**之后** —— 确认它还记不记得 |
| `SessionStart` + `compact` matcher | 压缩之后**自动把关键信息灌回去**（写法见 §5.C-1，这是最常用的一个） |
| `InstructionsLoaded` | CLAUDE.md 或 `.claude/rules/*.md` **真正被读进 context 那一刻**（会话开始时，以及会话中途懒加载时） |

最后一个值得单说：L6 和第一幕都在讲「**读到不等于照做**」。`InstructionsLoaded` 是你唯一能确认「**它到底读没读到**」的地方 —— 读到了但没照做，和压根没读到，是两个不同的问题，处方也不同。

---

## §7 反面案例 ⚠️ 交作业前照着自查一遍

> **这一节 deck 上没有，只在讲义里。**
>
> 下面这份 hook **写得很像回事，但它会出事**。三处问题，你能找出来吗？先自己看一遍再往下翻。

### 有问题的版本

`.claude/hooks/quality-gate.mjs`

```js
#!/usr/bin/env node
import { readFileSync } from 'node:fs';
let raw = ''; for await (const c of process.stdin) raw += c;
const file = JSON.parse(raw).tool_input.file_path;

// 检查这次改动合不合理
if (file.endsWith('.ts') && readFileSync(file, 'utf8').split('\n').length > 300) {
  console.error('Blocked');
  process.exit(2);
}
process.exit(0);
```

```json
{ "hooks": { "PostToolUse": [{
  "matcher": "",
  "hooks": [{ "type": "command", "command": "node .claude/hooks/quality-gate.mjs" }]
}]}}
```

---

### 三处问题

#### 问题 1 ⭐ 时点挂反了：`PostToolUse` 拦不住

作者想拦住「文件变得太长」，但挂在了 `PostToolUse` 上。

- `Can block? = No`（§3.5）
- 脚本会跑、红字会出、它也会收到 `Blocked`
- **而那个文件已经变长了**

**这次失败是没有声音的。** 你的日志上一切正常，只有文件变了。

> **改法**：改成 `PreToolUse`。但注意 —— `PreToolUse` 时文件**还没被改**，`wc -l` 读到的是旧内容。真要拦「改完之后会超过 300 行」，得从 `tool_input` 里算新内容的行数，而不是去读磁盘上的旧文件。**这说明原作者没想清楚自己到底要判什么。**

#### 问题 2 ⭐ matcher 是空的

```json
"matcher": ""
```

空 matcher = **这个事件每次都触发**（§6.6）。它跑 Bash、读文件、用任何工具，这个脚本都会跑一遍。

而脚本里 `JSON.parse(raw).tool_input.file_path` 在非文件类工具上是 `undefined`，`file.endsWith(...)` 直接抛 `TypeError` → 非零退出码 → **每次工具调用都冒一次红字**（§8）。

**你三天内会把它关掉**（闸④）。

> **改法**：`"matcher": "Edit|Write"`，并且加 `?? ''` 兜底 + 取不到就 `process.exit(0)`。

#### 问题 3 ⭐ 判据在动脑，而且 stderr 什么都没说

注释写的是「**检查这次改动合不合理**」—— 这是一个**说不清**的规矩（闸③）。作者把它硬塞成了「超过 300 行」，两者不是一回事：一个 500 行的常量表没有任何问题，一个 80 行的函数可能烂透了。

而且 `echo "Blocked" >&2` **只有一个词**。它收到这句话之后不知道：

- 为什么被拦
- 拦的是哪个文件
- 它应该怎么办

于是它会**反复撞同一堵墙**，把你的 context 耗光（§11 第 1 条）。

> **改法**：要么把规矩换成真正说得清的（「`src/generated/` 下的文件不许手改」），要么承认它挂不了 hook（闸③的正确答案），要么用 `prompt` hook 并接受确定性的损失（§5.H）。
> stderr 至少要写清 **为什么 + 他该怎么做**，参考 §4 的示例。

### 自查清单（交作业前过一遍）

```
☐ 时点对吗？我怕的是「它做了不该做的」还是「它漏了该做的」？
☐ matcher 是空的或 .* 吗？宽了会怎样我说得出来吗？
☐ 判据是一行 if 吗？还是我在让它「判断合不合理」？
☐ stderr 那句话写清「为什么」和「他该怎么办」了吗？
☐ 扩展名是 `.mjs` 吗？（或 package.json 有 `"type": "module"`）
☐ 该拦的：我真的触发过一次、看见它被拦了吗？   ← 最重要的一条
☐ 不该拦的：我也试了一次，确认它没拦吗？       ← 只测正面等于没测
```

---

## §8 排错八条

| 症状 | 查什么 |
|---|---|
| **压根没触发** | `/hooks` 看它在不在正确的事件下面 · matcher **大小写**对不对 · 事件选对没有（`Pre` 在前，`Post` 在后） |
| **`command not found`** | 用绝对路径或 `${CLAUDE_PROJECT_DIR}`。想彻底躲开 shell 引号问题，加 `"args": []` 切成 exec form（不经 shell 直接 spawn） |
| **`SyntaxError: await is only valid in async`** | 扩展名写成了 `.js`。改成 `.mjs`，或在 `package.json` 里加 `"type": "module"` |
| **脚本根本没跑** | 配置里忘了写 `node` 前缀。用 `node xxx.mjs` 就不需要 `chmod +x` |
| **`hook error` 红字** | 退出码用错了 —— **只有 0 和 2 有特殊含义**。单独喂 JSON 测（见下） |
| **JSON 不生效** | 提示里带**校验**信息 = schema 不对；带**解析**信息 = 格式不对。**用 `jq` 构造输出，别字符串拼接** |
| **`/hooks` 里看不见** | 文件监听一般自动加载，几秒后还没有就**重启会话**。检查 JSON 有没有**尾逗号或注释**（都不允许） |
| **想看到底发生了什么** | `claude --debug` 启动，或会话里敲 `/debug` |

### 单独测脚本（不进会话）

```bash
echo '{"tool_name":"Write","tool_input":{"file_path":"/x/.env"}}' \
  | node .claude/hooks/protect-files.mjs
echo $?      # 要看到 2
```

### ⭐ 最有用的一条调试技巧 **[本课]**

**搞不清某个事件到底给了你什么字段？别查文档。**

在脚本第二行加这一句，触发一次，去看那个文件：

```js
import { appendFileSync } from 'node:fs';
let raw = ''; for await (const c of process.stdin) raw += c;
appendFileSync('/tmp/hook-input.jsonl', raw + '\n');   // ← 加这一行
```

**比查任何 schema 表都快十倍。**

---

## §9 安全：谁受它管 ⚠️ 提交进仓库之前必读

### 9.1 hook 压得过 `--dangerously-skip-permissions`

官方原话：

> `PreToolUse` hooks fire **before any permission-mode check**, in every permission mode, including `dontAsk`. A hook that returns `permissionDecision: "deny"` blocks the tool **even in `bypassPermissions` mode or with `--dangerously-skip-permissions`**.

> The reverse is not true: a hook returning `"allow"` doesn't bypass deny rules from settings… **Hooks can tighten restrictions but not loosen them past what permission rules allow.**

**两句话各落一个「所以」：**

- **压得过 bypass** → **所以**你可以放开权限让它跑得快，同时保证有几件事它永远碰不到。**这是 L11 那三条做法的解药。**
- **只能收紧不能放宽** → **所以** hook 不是后门。你没法用它给自己开一条 settings 里禁掉的路。**这是设计，不是限制** —— 一个能放宽的 hook，等于把安全边界交给了**每个能改配置文件的人**。

### 9.2 挂在哪个文件 = 谁受它管

| 位置 | 管谁 | 能不能共享 |
|---|---|---|
| `~/.claude/settings.json` | 你所有项目 | 不能，只在你这台机器上 |
| **`.claude/settings.json`** | **这一个项目** | **能，可以提交进仓库** ⭐ |
| `.claude/settings.local.json` | 这一个项目 | 不能，Claude Code 存设置时会 gitignore |
| 管理策略设置（managed） | 整个组织 | 能，管理员控制 |
| Plugin 的 `hooks/hooks.json` | 启用这个 plugin 时 | 能，跟 plugin 一起走 |
| Skill frontmatter | 被调用之后的**整个会话** | 能 |
| Subagent frontmatter | 那个 subagent **运行期间** | 能 |

### 9.3 第二行是这节课最值钱的一格

> 你把规矩提交进仓库。明天你同事克隆下来，**他的 Claude Code 自动就受这条规矩管**。
>
> 他不需要读 CLAUDE.md，不需要知道有这回事，**也不需要同意**。

**这是前十一节唯一一次跨过「你自己」的能力。** 前面教的全是怎么管好你自己那一个会话。

### 9.4 反过来也成立 ⚠️

> **你克隆一个仓库，就同时接受了它 `.claude/settings.json` 里的每一条 hook。**
>
> 而 hook 是**会在你机器上自动执行的 shell 命令**。

**三条实用纪律：**

1. **克隆陌生仓库之后，敲一下 `/hooks` 看一眼。** 这是本节送你的一个新习惯。
2. **别只看 `settings.json`。** Skill 和 Subagent 的 frontmatter 里也能挂 hook。
3. **想整体关掉**：设置里写 `"disableAllHooks": true`。**但注意边界**（见 9.6）。

### 9.5 Skill 和 Subagent 的信任门槛不一样（反直觉，官方原文）

| | 要不要 workspace trust |
|---|---|
| **项目 subagent** frontmatter 里的 hook | **要。** 你得接受了那个目录的 workspace trust 对话框才会跑，**`-p` 会话不算接受** |
| **项目 skill** frontmatter 里的 hook | 规则不同 —— 官方明说它「including in a `-p` run in a folder you haven't trusted」也会注册 |

**这个差异是真的，且反直觉。** 真要依赖它做安全边界前，请按 §13 核对当天文档。

### 9.6 `disableAllHooks` 的边界

官方原话：

> Claude Code reads the value left after settings precedence applies, so **a project's settings file can override yours**. Hooks configured in managed settings still run unless `disableAllHooks` is also set there.

**也就是说：关不关得掉，取决于设置优先级。** 别默认「我关了就一定关了」—— 自己试一次，用 §8 的方法确认。

### 9.7 提交前的一句话测试

> 提交之前，先在 PR 描述里写清楚这句话：
>
> **「这个 PR 会让所有克隆本仓库的人的 Claude Code 自动执行以下脚本：…」**
>
> **这句话你写不出来，就说明还不该提交。**

---

## §10 用不了 Claude Code 怎么办

### 10.1 先说清 hook 依赖的是什么能力

> hook 这个机制依赖一件事：**宿主愿意在自己生命周期的固定时点，执行你给的命令，并且听你的返回值。**
>
> 你换任何一个 agent 壳，**先去查它有没有这个能力**。有，就是同一件事，只是名字不同；没有，就往下退。

### 10.2 退让阶梯

```text
Claude Code hook（它每一次动手之前）
        │  用不了
        ▼
git hook：pre-commit / pre-push（提交或推送那一刻）
        │  用不了
        ▼
CI 检查（推上去之后）
        │  用不了
        ▼
CLAUDE.md 写一条 + 你自己 review（回到第一幕那个状态）
```

### 10.3 每退一步失去什么

| 退到哪 | 失去什么 |
|---|---|
| **git hook** | **拦得晚了。** 它已经改了一堆文件，你在提交那一刻才拦 —— 返工从「一次工具调用」变成「一整轮改动」 |
| **CI** | 更晚。**它已经推上去了**，而且反馈回路从秒级变成分钟级 |
| **只有 CLAUDE.md** | 失去「强制」。但**判断线（§2）、时点二维图（§3）、脚本解剖（§6）三样完全保留** —— 这三样是判断，不是功能 |

### 10.4 两句收口

> 越往下退，你能守住的规矩越少，但**「说得清才守得住」这条不变** —— 一条你说不清的规矩，在哪一档都守不住。

> 工具会变，会被墙，会改名，会涨价。**「这条规矩机器判不判得出来」这个问题不会。**

---

## §11 原理：为什么这么组词

> **你要的不是这一个脚本，是以后面对新场景自己能组词。**

### 1. 为什么 stderr 那句话要写清「为什么被拦」，不能只写 `Blocked`？

因为**它会收到这句话**。写清楚了它能换条路走；写不清，它会**反复撞同一堵墙**，把你的 context 耗光（接 L6）。

**这句话的读者不是你，是它。**

### 2. 为什么 matcher 要尽量窄？

宽 matcher 的错法是**静默的** —— 你以为只管了一类，其实管了全部。

官方对自动批准那个例子的原话：matcher 写 `.*` 或者留空 **would auto-approve every tool permission prompt**，包括文件写入和 shell 命令。

### 3. 为什么判据要写成「路径匹配」，不能写「这个改动合不合理」？

因为确定性来自不动脑。

**你写的每一个「合不合理」，都是把判断权又交回给了模型。**

### 4. 为什么用 `${CLAUDE_PROJECT_DIR}` 不用相对路径？

因为 hook 跑的时候，工作目录不一定是项目根。写相对路径的，换个目录就 `command not found`。

### 5. 为什么 `exit 2` 和 JSON 输出不要混用？

官方明说：**Choose one approach per hook.**

混用的行为要去查一张表 —— 而**你不该让自己的规矩，依赖一张需要查的表**。

### 6. 为什么 `exit 0` 不叫「放行」？

因为它只是「我不表态」，正常权限流程还在后面。

**把 `exit 0` 当放行的人，会以为自己批准了，其实什么都没发生。**

### 7. 为什么「漏做」和「做错」要用不同时点？

因为 `PostToolUse` **撤不回**。这不是风格问题，是机制问题 —— 工具已经执行了。

### 8. 为什么第一条规矩要挑机器判得出来的？

因为你需要**先看见它成功拦一次**。

**一个从没拦成功过的 hook，你不会信它，也不会留着它。**

---

## §12 作业

### 必做

1. **把课堂那条 hook 补完整并跑通**，贴出一次**拦截成功**的记录。
2. **故意让它失效一次**：改错退出码、删掉执行权限、或者把 matcher 写成别的工具名。**看它是怎么「安静地」不工作的**，写一句你是怎么发现的。
3. 回答一句：**你的 hook 在第一天里，有没有拦住过一次你自己不想被拦的操作？** 有的话，你打算怎么收窄。

### 选做

4. 挂一条 `Stop` hook，让它测试不过就没法收工（§5.D-2）。**这是 L6 铁律第一次真正被执行。**
5. 挂一条 `SessionStart` + `compact` 的 hook（§5.C-1），把你项目里最容易被压缩丢掉的那三句话灌回去。
6. 挑一条你**判过「现在挂不上」**的主观规矩，试着用 `prompt` hook 写一版，然后回答：**你信它的判断吗？为什么？**
7. 等你有三条 hook 且都验证过了，把它们放进项目的 `.claude/settings.json` 提交。**提交之前先过 §9.7 那句话测试。**
8. 克隆一个你常用的开源仓库，敲 `/hooks` 看一眼。**记录你看到了什么。**

---

## §13 官方文档入口

| 文档 | 地址 |
|---|---|
| Hooks 指南（本节主要来源） | `code.claude.com/docs/en/hooks-guide` |
| Hooks 参考（完整 schema / 字段） | `code.claude.com/docs/en/hooks` |
| 设置与优先级 | `code.claude.com/docs/en/settings` |
| 权限与权限模式 | `code.claude.com/docs/en/permissions` · `/permission-modes` |
| Skills（接 L5） | `code.claude.com/docs/en/skills` |
| Subagents（接 L7） | `code.claude.com/docs/en/sub-agents` |
| 安全 | `code.claude.com/docs/en/security` |

> ⚠️ **以当天版本为准。** hooks 的字段、默认超时、事件列表变动很快，其中 `agent` 类型官方仍标注 **experimental**。本讲义里凡是标 **[官方]** 的都逐字引自文档，但**文档本身会变** —— 真要依赖某条行为做安全边界之前，自己去核一遍。

---

## 附：本讲义里哪些是本课自己的东西

**这几样是本课的教学设计，不是官方文档的分法。** 你去翻官方文档不会找到它们：

| 本课的东西 | 官方对应的原材料 |
|---|---|
| **四道判断线**（§2） | 无。这是本课的判断工具 |
| **时点二维图**（§3） | 依据是官方的 `Can block?` 表，但**画成二维图是本课做的重组** |
| **三行机制**（§1） | 官方的 stdin / exit code / stderr 行为，压缩成三行是本课的讲法 |
| **六步骨架**（§6.1） | 官方示例脚本的结构，拆成六步是本课的讲法 |
| 标 **[本课]** 的所有代码 | 基于官方机制拼的，**不是官方示例** |

**为什么要专门说这个**：你回去翻官方文档时会发现对不上 —— 那不是文档错了，是这几样本来就是课堂上为了讲清楚而造的。**它们好用，但不要拿去当官方口径引用。**
