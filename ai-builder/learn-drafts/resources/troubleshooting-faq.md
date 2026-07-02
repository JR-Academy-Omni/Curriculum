---
# ⚠️ 草稿：本课参考资料。建议作为 Wiki 文章或课程"资料"页发布;非顺序课文
title: Vibe Coding 大师课 · 排错 FAQ
description: 最高频卡点的症状→原因→解法速查:装不上、模型不调工具、上下文爆窗、AI 改坏代码等。
type: reference
---

# Vibe Coding 大师课 · 排错 FAQ

卡住了先来这里翻。每条按 **症状（你会怎么描述）→ 可能原因 → 解法** 组织。找不到你的问题就往下滚，或者把完整报错原文贴给 AI，别只贴一句"报错了"。

用法：`Ctrl/Cmd + F` 搜关键词（比如 `PATH`、`rate limit`、`tools/list`）。

---

## 一、安装 / 环境

### 装完 `claude` / `cursor` 命令找不到
> "我明明装了 Claude Code，terminal 里敲 `claude` 说 command not found。"

**原因**：装了但没进 `PATH`，或者装完没重开 terminal。

**解法**：
1. 先重开一个新的 terminal 窗口（旧窗口不会自动读新 PATH）。
2. 确认全局装到位（Claude Code 官方走 npm 全局安装）：
   ```bash
   npm install -g @anthropic-ai/claude-code
   claude --version
   ```
3. 还是找不到，看 npm 全局 bin 目录在不在 PATH 里：
   ```bash
   npm config get prefix
   ```
   把打印出来的路径 + `/bin`（Windows 是路径本身）加进 PATH。
   - macOS / Linux（zsh），在 `~/.zshrc` 末尾加：
     ```bash
     export PATH="$(npm config get prefix)/bin:$PATH"
     ```
     然后 `source ~/.zshrc`。
   - Windows：搜"编辑系统环境变量" → 环境变量 → 在用户 `Path` 里加上 `npm config get prefix` 打印的目录 → 确定后**重开 PowerShell**。
4. Cursor 是桌面 App，命令行的 `cursor` 命令要在 Cursor 里手动装：`Cmd/Ctrl + Shift + P` → 搜 `Shell Command: Install 'cursor' command`。

---

### `npm install -g` 报权限错误（EACCES / permission denied）
> "全局安装报一堆 EACCES、说没权限写到 /usr/local。"

**原因**：npm 全局目录属于 root，普通用户写不进去。**不要用 `sudo npm install -g` 硬来**，那会把后续所有全局包都绑上 root，越搞越乱。

**解法**：把 npm 全局目录换到你自己的家目录。
```bash
mkdir -p ~/.npm-global
npm config set prefix ~/.npm-global
export PATH="$HOME/.npm-global/bin:$PATH"   # 同样写进 ~/.zshrc / ~/.bashrc
```
之后再 `npm install -g @anthropic-ai/claude-code`，不用 sudo。

---

### Node 版本不对 / 装的时候报语法错误
> "安装的时候报 `Unexpected token` 或者要求 Node 18+，我不知道自己是几。"

**原因**：Node 太老。Claude Code 要 Node 18+，很多现代工具要 20+。

**解法**：
```bash
node -v   # 看当前版本
```
低于 18 就升级。别去官网手动下 pkg，用版本管理器，以后切版本方便：
- macOS / Linux 用 `nvm`：
  ```bash
  nvm install 20
  nvm use 20
  nvm alias default 20
  ```
- Windows 用 `nvm-windows`（GitHub 上 coreybutler/nvm-windows），或者直接装官方 LTS installer。

---

### Python 版本 / `python` 命令的坑
> "教程让我跑 `python xxx.py`，我这边说 command not found，或者跑起来是 Python 2。"

**原因**：系统里 `python` 和 `python3` 不是一回事；有的机器 `python` 根本不存在。

**解法**：
- macOS / Linux：优先用 `python3` 和 `pip3`。
  ```bash
  python3 --version
  ```
- Windows：装了官方 Python 后用 `py`：
  ```powershell
  py --version
  py -3 script.py
  ```
- 建议每个项目用虚拟环境，别污染全局：
  ```bash
  python3 -m venv .venv
  source .venv/bin/activate          # Windows: .venv\Scripts\activate
  pip install -r requirements.txt
  ```
  激活后命令行前面会出现 `(.venv)`，说明进对环境了。

---

### macOS / Windows 命令不一样，教程照抄跑不通
> "教程里的命令在我 Windows 上一堆报错，反斜杠、路径都不对。"

**原因**：多数教程默认 macOS/Linux 的 bash 语法。Windows 的 PowerShell 语法不同。

**解法**：记住几个常见对照，其余直接问 AI"这条 bash 命令在 Windows PowerShell 怎么写"。

| 目的 | macOS / Linux | Windows PowerShell |
|------|---------------|--------------------|
| 设环境变量 | `export KEY=value` | `$env:KEY="value"` |
| 看环境变量 | `echo $KEY` | `echo $env:KEY` |
| 路径分隔 | `/` | `\`（PowerShell 里 `/` 多数也认） |
| 删目录 | `rm -rf dir` | `Remove-Item -Recurse -Force dir` |
| 空设备 | `/dev/null` | `$null` |

想彻底躲开差异：在 Windows 上装 **WSL2**（Ubuntu 子系统），之后所有教程都能按 Linux 命令跑。

---

## 二、模型 / 账号

### 额度用完 / 报 quota exceeded / credit 不够
> "用着用着突然说额度不够、insufficient credits、或者直接拒绝。"

**原因**：订阅额度或 API credit 耗尽，或者账单没配。

**解法**：
1. API 用户去平台 console 看用量和余额，充值或换一把有余额的 key。
2. 订阅用户看是不是撞到当前周期的用量上限，等重置或升级档位。
3. 长任务前先估量：把大改动拆成几轮，别一次让 AI 读几十个文件——那既烧额度又烧上下文。

---

### rate limit / 429 / "too many requests"
> "刷刷刷发了几条就报 429，让我等。"

**原因**：短时间请求太密，或并发太高，触发了速率限制。

**解法**：
- 就是等一下再发，通常几十秒到一两分钟恢复。
- 别同时开好几个 agent / 好几个终端对同一个账号猛发。
- 报错里常带 `retry-after`（秒数），照着等最稳。
- 长期高频用，考虑升级到限额更高的档位。

---

### 到底该选哪个模型
> "Opus、Sonnet、Haiku 一堆，我该用哪个？"

**原因**：不同模型是"能力 vs 速度/成本"的取舍，没有一个永远最优。

**解法**：按任务挑，别无脑上最强。
- **复杂重活**（大规模重构、跨多文件推理、难 bug）→ 用最强的（Opus 类）。
- **日常编码**（写函数、改逻辑、常规调试）→ 中档（Sonnet 类）性价比最高，绝大多数时间用它。
- **简单快活**（改文案、格式化、批量小改、跑得快最重要）→ 轻量档（Haiku 类）。

实操建议：默认停在中档，只有当它明显搞不定时再升到最强档。省钱又快。

---

### 响应特别慢 / 转圈半天
> "问一句要等好久，或者一直在生成停不下来。"

**原因**：一次喂进去的上下文太大（塞了整个大项目 / 超长文件），或者选了最重的模型做小事，或者网络。

**解法**：
- 缩小上下文：只 `@` 相关的文件，别把整个仓库丢进去。
- 小任务换轻量模型。
- 长会话开久了会越来越慢——完成一个阶段就开新会话（见"上下文"一节）。
- 挂了 VPN / 代理的检查下网络是否稳定。

---

## 三、MCP（Model Context Protocol）

### MCP server 连不上 / 显示 failed / 一直 connecting
> "配了个 MCP server，客户端里显示连接失败，或者一直在连。"

**原因**：多数是启动命令写错、依赖没装、或路径不对——本质是那条 command 在你机器上根本跑不起来。

**解法**：
1. **先手动跑一遍那条启动命令**，看它自己能不能起来：
   ```bash
   npx -y @some/mcp-server
   ```
   手动都报错，说明是命令/依赖问题，先把它修好，别怀疑客户端。
2. `command` 用绝对路径或确认在 PATH 里。用 `npx` 的话确认 Node 装了。
3. 看客户端的 MCP 日志：
   - Claude Code：`claude` 里跑 `/mcp` 看每个 server 的状态；用 `claude --debug` 启动看详细报错。
4. 需要 API key 的 server，确认 `env` 里填了对的 key。

---

### `tools/list` 是空的 / 连上了但没有工具
> "server 显示连上了，但一个 tool 都没有。"

**原因**：server 起来了但没成功注册工具——通常是 server 本身初始化报错、版本不兼容，或者根本连的是个空 server。

**解法**：
1. 手动起 server（上一条），看它启动日志里有没有报错、有没有打印注册了哪些 tool。
2. 确认 server 版本没过时：`npx -y pkg@latest`。
3. 重启客户端（配置或 server 更新后**必须重启**才会重新拉 tools）。
4. 还是空的，去这个 server 的仓库看它是否需要额外配置（有些要先登录 / 给 workspace 路径才暴露工具）。

---

### 模型死活不调工具
> "MCP 明明连上了、tool 也在，但我让它用它就是不用，自己瞎编答案。"

**原因**：**九成是 tool 的 description 太烂**。模型靠 description 判断"这个工具是干嘛的、什么时候该用"。description 含糊、没说清触发场景，模型就不会选它。

**解法**：
1. 打开 tool 的 description，用"什么时候该调用它"的口吻重写，说清楚：**这个工具做什么 + 什么情况下用它 + 输入输出是什么**。别只写一句名词短语。
   - ❌ `"查询数据"`
   - ✅ `"当用户询问订单状态时，用订单号查询该订单的物流和付款状态，返回 JSON"`
2. 参数也要写 description，告诉模型每个参数填什么。
3. 在你的提示里直接点名："用 xxx 工具查一下" —— 先确认工具本身能被调用，再回头优化 description 让它自动触发。
4. 工具太多（几十个）也会稀释模型注意力，砍掉用不上的 server。

---

### 配置文件路径 / 格式写错
> "照着文档改了 MCP 配置，重启后完全没反应，像没读到。"

**原因**：配置文件放错位置，或 JSON 格式有语法错误（多个逗号、少个括号），整个文件被判无效直接忽略。

**解法**：
1. 确认配置文件的**准确位置**（不同客户端不一样，以你用的那个客户端官方文档为准，别凭记忆猜）。
   - Claude Code 项目级用仓库根的 `.mcp.json`；也支持 `claude mcp add` 命令行加，不用手写。
2. 用命令行加最省心，避免手写 JSON 出错：
   ```bash
   claude mcp add my-server -- npx -y @some/mcp-server
   claude mcp list      # 确认加进去了
   ```
3. 手写的话，把整段贴给 AI 或用在线 JSON 校验器查语法。常见坑：最后一项多了逗号、Windows 路径的反斜杠没转义（要写 `\\`）。

---

### 改完配置没生效
> "我改了 MCP 配置 / 更新了 server，但行为没变。"

**原因**：没重启。MCP 配置和 server 是启动时加载的，改完不重启读的还是旧的。

**解法**：改完配置**完全退出客户端再重开**（不是关个窗口，是彻底退出进程）。Claude Code 里 `/mcp` 确认新状态；桌面 App 从 Dock/任务栏彻底退出后重开。

---

## 四、上下文（Context）

### 上下文爆窗口 / context length exceeded
> "报 context 超了 / 让我压缩，或者对话开久了直接不让发了。"

**原因**：这次会话累积的内容（历史对话 + 读进来的文件）超过了模型的上下文窗口上限。

**解法**：
1. **开新会话**是最干净的解法。把当前进展让 AI 总结成几句，粘到新会话开头继续。
2. Claude Code 里用 `/compact` 压缩历史，或 `/clear` 清空重来。
3. 别一次 `@` 一堆大文件。只给相关的片段/文件。
4. 让 AI 把关键结论写进项目里的 `CLAUDE.md` / 说明文件，下次自动带上，不用每次重讲。

---

### AI "忘了"前面说的
> "前面明明讲过项目规则，聊到后面它又忘了，还原样犯同一个错。"

**原因**：早期对话被挤出上下文窗口了（尤其压缩/清理过之后），或者本来就没进上下文。

**解法**：
- 把**长期有效的约定**写进 `CLAUDE.md`（项目根目录），它每次会自动读，比在对话里反复叮嘱可靠得多。例如代码风格、禁用的库、目录约定。
- 关键指令在每轮里简短重申一次，别指望它记住 50 轮前的一句话。
- 发现它开始漂了，就是该开新会话 + 用 `CLAUDE.md` 兜底的信号。

---

### 大项目喂不进去
> "我项目几百个文件，想让 AI 理解整个代码库，塞不进去。"

**原因**：再大的上下文窗口也装不下整个大仓库，硬塞既超窗又烧钱还稀释注意力。

**解法**：
- 别追求"让它读完全部"。让它**按需检索**：agent 类工具（Claude Code / Cursor）能自己 grep、搜文件、按需读，你只要说清目标。
- 手动指路：告诉它"相关逻辑在 `src/auth/` 目录"，缩小范围。
- 在 `CLAUDE.md` 里写一段项目结构导览（各目录干什么），当它的地图。
- 大重构拆成一个个小任务，一次只让它专注一块。

---

## 五、代码质量

### AI 改坏了别的地方
> "让它改 A 功能，结果它顺手把 B 也改了 / B 挂了。"

**原因**：给的范围太宽、或者它自作主张做了没要求的"顺便优化"。

**解法**：
1. **改动前先看 diff**，别直接 accept all。逐块看它到底动了什么，只留你要的。
2. 指令写窄："只改 `login()` 函数，别动其他文件。"
3. **保证改之前工作区是干净的**（已 commit 或 stash），这样出问题一条命令就能退回：
   ```bash
   git diff              # 看它改了啥
   git checkout -- .     # 全部丢弃，退回上次 commit
   ```
4. 关键改动前先 commit 一版当存档点，AI 每完成一个小任务就 commit 一次，方便回退到任意一步。

---

### 反复改不对，越改越乱（怎么跳出死循环）
> "同一个 bug 让它改了五六次，每次说修好了其实没有，越改越乱。"

**原因**：它在错误的假设上打转，后面每次修改都建立在已经跑偏的代码上，只会越滚越远。**继续在同一个烂摊子上改是最大的坑。**

**解法**：**果断推倒重来，别舍不得。**
1. 把 AI 这几轮的改动全丢掉，回到还正常的那个 commit：
   ```bash
   git checkout -- .          # 丢弃未提交的改动
   # 或回到某个具体 commit：
   git reset --hard <好的那个commit的hash>
   ```
2. **开一个新会话**（旧会话里全是跑偏的上下文，会继续带偏它）。
3. 重新描述问题，这次给更多背景：贴上真实报错、说清期望行为、告诉它前一种思路已经试过不行。
4. 让它**先解释 bug 的原因再动手**，别直接让它改——想清楚了再改，比瞎改五次强。

一句话：**改超过 2-3 次还不对，就 `git checkout` + 新会话重开，不要恋战。**

---

### 幻觉出不存在的 API / 包 / 函数
> "它用了一个库里根本没有的方法，或者让我装一个查不到的 npm 包。"

**原因**：模型是根据模式生成的，会"编"出看着合理但实际不存在的 API、参数、包名。

**解法**：
1. **不认识的包先查真伪再装**：
   ```bash
   npm view <包名>        # 查不到就是不存在
   pip index versions <包名>
   ```
   注意假包名蹭真包（typosquatting），别手一抖装了恶意包。
2. 用到某个 API/方法，让它**给出官方文档链接**或版本号；查文档确认真有。
3. 直接跑代码验证——报 `is not a function` / `ModuleNotFoundError` 就是它编的，把报错贴回去让它换真实方案。
4. 明确它用的**库版本**：老版本没有的新方法，或反之，都会出错。告诉它"我用的是 React 19 / xxx 库 3.x"。

---

## 六、Git

### AI 乱 commit / 一次全塞进一个 commit
> "它自己把一堆不相关的改动 `git add .` 全 commit 了，或者 commit message 乱写。"

**原因**：给它开了 git 权限又没约束，它图省事一锅端。

**解法**：
- 在 `CLAUDE.md` 里立规矩，比如"commit 前先给我看 `git diff`，一个 commit 只包含一件事，message 要说清改了什么"。
- 已经乱 commit 但**还没 push**，可以撤销 commit 但保留改动，自己重新分块提交：
  ```bash
  git reset --soft HEAD~1     # 撤掉最近一次 commit，改动还在暂存区
  git restore --staged .      # 取消暂存，自己挑着 add
  ```
- 想改最近一次的 message：`git commit --amend`。

---

### 冲突了，AI 越解越乱
> "merge / pull 冲突了，让 AI 解结果解得一团糟。"

**原因**：冲突需要理解"两边到底想干嘛"，AI 盲解容易两边逻辑都保不住。

**解法**：
1. 先看清冲突文件，`<<<<<<<` `=======` `>>>>>>>` 之间分别是两边的版本。
2. 让 AI 解时，**告诉它每一边分别是什么意图**、你想保留哪边或怎么合，别丢一句"帮我解冲突"就走。
3. 解不清就中止，回到干净状态再想：
   ```bash
   git merge --abort      # 或 git rebase --abort
   ```
4. 解完**务必跑一遍测试/手动验证**，冲突解错常常代码能编译但逻辑坏了。

---

### 误 push 了 / push 错了分支
> "手快 push 上去了，或者 push 到了不该 push 的分支。"

**原因**：AI 或自己在没确认的情况下执行了 push。

**解法**：
- **push 前设一道确认关**：在 `CLAUDE.md` 写"push 前必须先问我确认"，别让 AI 自动 push。
- 已经 push 了想撤（**先确认没有别人已经拉了你的改动**，否则会坑队友）：
  ```bash
  git revert <commit>          # 安全：生成一个反向 commit 再 push，历史保留（推荐团队场景）
  ```
  真要抹掉历史（只在个人分支、确认没人依赖时）：
  ```bash
  git reset --hard <好的commit>
  git push --force-with-lease   # 比 --force 安全，别人有新提交时会拒绝，防覆盖队友
  ```
- push 错分支：切到对分支重新 push，再到错的分支把那次 commit `revert` 或 `reset` 掉。

---

## 兜底：以上都没解决

1. **把完整报错原文贴给 AI**，连同你执行的命令、你的系统（macOS/Windows）、工具版本（`claude --version` / `node -v`）。信息越全，AI 越可能一次定位。
2. 去对应工具的官方文档 / GitHub issues 搜报错关键词——你遇到的坑大概率别人踩过。
3. 课程答疑群里提问时，请**附上报错截图 + 你已经试过什么**，别只发"我卡住了"。
