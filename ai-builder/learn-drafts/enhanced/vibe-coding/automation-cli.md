---
# ⚠️ 增强版草稿：合并进现有 learn 章节 vibe-coding/automation-cli 的正文（只加不删，保留原有 frontmatter 的 order/group）
title: 脚手架与自动化交付
direction: vibe-coding
slug: automation-cli
estimatedMinutes: 25
---

### 脚手架与自动化交付

把常用的开发/发布动作脚本化，再结合 AI 生成与维护脚手架，能显著减少重复劳动。

我先讲个真事。去年带一个刚会 vibe coding 的实习生，他每次上线前都手动跑一遍：先 `npm run lint`，看没红字；再 `tsc` 检查类型；再 `npm test`；最后手点几下确认页面没崩。四步，一步都不能漏。结果有一天他赶时间，跳过了 typecheck 直接合并，线上一个组件收到了 `undefined` 就白屏了——因为那个类型错误 lint 抓不到，只有 `tsc` 能抓。回滚、复盘、道歉，一晚上没了。

问题不在他粗心。问题在于「上线前要跑哪几步、按什么顺序、哪步失败就必须停」这件事**只活在他脑子里**，没写下来、没自动化。人是会累、会赶时间、会漏的；脚本不会。今天这节课就是教你把这类「反复要做、做错代价大」的动作交给脚本和 AI 去守，你只负责看结果。

不懂这个会怎样？你会一直做低价值的重复劳动，而且总有一天因为漏一步而翻车；懂了之后，你能把一整套检查/生成/发布流程压成一条命令，团队里任何人（包括三个月后忘光细节的你自己）都能一键跑对。

**术语：脚手架（scaffolding）**
- 一句话解释：帮你自动生成一套「新东西的初始骨架文件」的工具或脚本，比如新建一个页面时自动生出组件、样式、测试、类型文件。
- 形象比喻：盖楼时先搭的那圈钢管架子。房子本身还没盖，但架子把位置、层高、施工动线都定好了，工人上去直接干活，不用每次从平地开始想「梯子搭哪」。
- 工作中怎么用：团队约定「每个新 API 模块都要有 controller/service/dto/测试」，你就写一个脚手架脚本，敲一条命令把这四个文件按模板生出来，省掉手动新建+复制粘贴。
- 最常踩的坑：脚手架生成的模板年久失修——项目早就换了写法，脚手架还在吐三年前的旧结构。生成出来的代码看着能跑，其实全是要手改的技术债。所以脚手架本身也要定期让 AI 帮你对着现有代码更新。

#### 生成 CLI / 脚本骨架

（prompt 示例：生成 bash 脚本 scripts/check.sh，顺序跑 lint、typecheck、test，任一失败即退出并打印错误，最后输出耗时统计。让 AI 先给结构再替换项目命令）

这个 prompt 为什么这么写，我拆给你看。

第一，**指明产物路径和类型**（`scripts/check.sh`，bash 脚本）——不说清楚，AI 可能给你一段裸命令让你自己贴哪儿都不知道，或者用了你机器上没有的语言。

第二，**明确顺序**（lint → typecheck → test）——顺序有讲究：lint 最快、typecheck 中等、test 最慢，把快的放前面，一旦快的挂了立刻停，不浪费时间跑完慢的。

第三，**「任一失败即退出」**——这是最关键的一句。默认情况下 bash 脚本一步失败还会往下跑，导致你以为全过了其实第一步就红了。你必须显式要求它「fail fast」。

第四，**「先给结构再替换项目命令」**——因为你项目里真实的命令可能不叫 `npm run lint` 而是 `pnpm lint` 或 `bun run lint`，让 AI 先搭骨架，你再把命令换成自己的，比让它猜你的技术栈靠谱。

在 2026 年，我一般直接在 Claude Code 或 Cursor 里对着项目说这句话，它能读到你的 `package.json`，连命令都不用你替，直接吐出对的版本。但你仍然要会验收——AI 给完，你要检查三点：（1）脚本开头有没有 `set -e`（碰到错误就退出）；（2）失败时是不是真的 `exit 1` 了；（3）耗时统计是不是真的在算。

AI 大概会返回这样一个脚本，你对着验收：

```bash
#!/usr/bin/env bash
set -euo pipefail   # -e 出错即停 / -u 用未定义变量报错 / -o pipefail 管道里任一步失败都算失败

start=$(date +%s)

echo "▶ [1/3] Lint..."
npm run lint

echo "▶ [2/3] Typecheck..."
npx tsc --noEmit

echo "▶ [3/3] Test..."
npm test

end=$(date +%s)
echo "✅ 全部通过，用时 $((end - start)) 秒"
```

跑它只要一句：

```bash
bash scripts/check.sh
```

注意 `set -euo pipefail` 这一行——这是让脚本「fail fast」的核心。没有它，lint 报错脚本照样往下跑 test，最后打印「全部通过」，把你坑惨。有它，任何一步非零退出，脚本立刻停在那步，你一眼看到卡在哪。

**术语：幂等 / 可重跑脚本（idempotent）**
- 一句话解释：同一个脚本跑一次和跑十次，结果一样、不会越跑越乱、不会因为「上次跑过」就报错。
- 形象比喻：电梯的楼层按钮。你按 5 楼，按一下是去 5 楼，慌张连按五下还是去 5 楼——它不会把你送到 25 楼。可重跑的脚本就该是这样。
- 工作中怎么用：写生成脚本时，加上「文件已存在就跳过或提示，而不是直接崩」；写部署脚本时，重复执行不会创建重复资源。这样脚本跑到一半失败，你修完直接重跑就行，不用手动清理现场。
- 最常踩的坑：脚本第二次跑就炸——比如 `mkdir` 目录已存在直接报错、生成文件时无脑覆盖把你手改的内容冲掉。让 AI 写脚本时一定要加一句「保证可重复执行（idempotent），已存在的产物要检测并妥善处理，不要报错也不要盲目覆盖」。

#### 代码模板与脚手架

- 让 AI 为"新增页面/组件/接口"生成模板（含测试/样式/类型）
- 把模板放入 scripts/generate-*，配合 npm run 快速创建

这里的核心思路是：把「新建一个 X 要建哪几个文件、每个文件长什么样」固化成模板，然后用一条命令批量生出来。

举个更完整的例子。假设你的项目每个 React 组件都要配一个测试文件，你可以写一个生成脚本：

```bash
#!/usr/bin/env bash
# scripts/generate-component.sh —— 用法: bash scripts/generate-component.sh Button
set -euo pipefail

name="${1:?请传组件名，例如: bash scripts/generate-component.sh Button}"
dir="src/components/$name"

if [ -d "$dir" ]; then
  echo "⚠ $dir 已存在，跳过创建（避免覆盖你的改动）"
  exit 0
fi

mkdir -p "$dir"

cat > "$dir/$name.tsx" <<EOF
export function $name() {
  return <div>$name</div>;
}
EOF

cat > "$dir/$name.test.tsx" <<EOF
import { render } from '@testing-library/react';
import { $name } from './$name';

test('renders $name', () => {
  render(<$name />);
});
EOF

echo "✅ 已生成 $dir/{$name.tsx, $name.test.tsx}"
```

注意我加的那段 `if [ -d "$dir" ]`——这就是上面讲的「幂等」在起作用。你第二次误敲同一个组件名，它提示你「已存在，跳过」，而不是把你写了半天的组件冲成空模板。

配到 `package.json`：

```json
{
  "scripts": {
    "gen:component": "bash scripts/generate-component.sh"
  }
}
```

以后新建组件就一句：

```bash
npm run gen:component Button
```

在 Cursor / Claude Code 时代，很多人问：「AI 都能直接帮我写组件了，还要脚手架脚本干嘛？」区别在于**一致性和门槛**。让 AI 每次现写，十个组件可能有十种目录结构、十种测试写法；脚手架脚本保证每次生出来的骨架一模一样。而且脚手架是给团队用的——新人不懂你的约定，一条 `npm run gen:component` 就能生出符合规范的骨架，不用先读一遍规范文档。AI 负责「写业务逻辑」，脚手架负责「统一起手式」，两者不冲突。

#### 集成到 CI/CD

- 要求 AI 输出 CI 配置片段（如 GitHub Actions），覆盖缓存、并行、失败策略
- 让它写"人工兜底步骤"，如发布前手动验证清单

**术语：CI/CD**
- 一句话解释：CI（持续集成）= 每次你推代码，服务器自动帮你跑 lint/test/build，挂了就拦住；CD（持续交付/部署）= 检查过了自动把代码发到线上。
- 形象比喻：机场安检 + 登机口。CI 是安检——每个人（每次提交）都得过一遍同样的检查，带违禁品（有 bug）就不让进。CD 是登机口——过了安检的自动被送上飞机（部署上线），不用你手动搬行李。
- 工作中怎么用：把本地那个 `scripts/check.sh` 的三步搬到 GitHub Actions 里，让它在每个 Pull Request 上自动跑。这样别人不管在自己机器上跑没跑，代码进主干前一定被检查过一遍。
- 最常踩的坑：CI 每次从零安装依赖，跑一次五分钟起步，慢到大家嫌烦。解决办法就是 prompt 里说的「覆盖缓存」——让 AI 加上依赖缓存配置，第二次跑直接复用，能从五分钟压到一分钟内。

这个 prompt（要求 AI 输出 CI 配置片段，覆盖缓存、并行、失败策略）为什么点名这三样？因为这正是新手写 CI 最容易漏的三件事：

- **缓存**：不加，每次 CI 重装依赖，慢且费额度。
- **并行**：lint 和 test 其实可以同时跑，不加就串行排队，白等。
- **失败策略**：默认一个 job 挂了其他还继续跑，浪费时间；你可能想要「一挂全停（fail-fast）」，或者相反「都跑完好一次看全部错误」——这得你告诉 AI 你要哪种。

AI 大概会给你这样一段，你把命令换成自己的：

```yaml
# .github/workflows/check.yml
name: Check
on: [pull_request]

jobs:
  check:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'          # ← 缓存依赖，第二次跑快很多
      - run: npm ci
      - run: npm run lint
      - run: npx tsc --noEmit
      - run: npm test
```

验收要点：（1）`cache: 'npm'` 在不在（缓存）；（2）触发条件 `on:` 是不是你要的（PR 时跑还是 push 时跑）；（3）用的是 `npm ci` 不是 `npm install`（CI 里 `ci` 更快更严格，锁定 lock 文件版本）。

那句「人工兜底步骤」也别忽略。自动化不是万能的——比如「发布前肉眼确认支付页面能跳到收银台」这种，机器不好判断，就写成一份人工检查清单挂在发布流程里。让 AI 帮你把这类清单也生成出来，钉在团队 wiki 或 PR 模板里。

#### 保持脚本可维护

- 让 AI 在脚本内加注释/用法说明，避免"黑盒"
- 重要命令集中到 package.json scripts 或 Makefile

脚本最怕变成「黑盒」——三个月后没人敢动，因为没人记得它干嘛、传什么参数。所以让 AI 写脚本时，永远多加一句「在文件顶部写清楚用途和用法示例，关键步骤加注释」。你看上面那个 `generate-component.sh` 顶部就有 `# 用法: ...`，这一行能省掉后来人半小时的猜。

另外，别让命令散落在各处。把重要命令都收进 `package.json` 的 `scripts`（前端项目）或 `Makefile`（多语言/后端项目），让「这个项目能干哪些事」一目了然。新人进来先看这一处，就知道 `npm run dev / test / gen:component / check` 分别是什么——这本身就是最好的文档。

2026 年还有个好习惯：把这些脚本和命令约定写进项目根目录的 `CLAUDE.md` / `.cursorrules`，这样 Claude Code、Cursor、Codex CLI 这些 AI 工具进到你项目里，第一时间就知道「跑检查用 `npm run check`、生成组件用 `npm run gen:component`」，不会自己乱造一套命令。等于给 AI 也发了一份说明书。

#### 常见坑

- **忘了 `set -e`（或等价的 fail-fast）**：脚本一步失败还往下跑，最后打印「成功」，是最坑的假阳性。写任何 bash 检查脚本，第一行就把 `set -euo pipefail` 加上。
- **脚本不可重跑**：跑到一半挂了，重跑因为「目录已存在 / 文件已生成」直接报错，逼你手动清现场。生成类脚本一律加「已存在就跳过或提示」。
- **脚手架模板过期**：项目写法早变了，脚手架还在吐旧结构，生成的代码全是要返工的债。定期让 AI 对着现有代码更新模板。
- **CI 不加缓存**：每次重装依赖，慢到全团队嫌弃 CI，最后干脆有人绕过它。加缓存是必修，不是可选。
- **命令散落无人整理**：一半在 README、一半在某人脑子里、一半在聊天记录里。统一收进 `package.json scripts` 或 `Makefile`，只留一个真相源。
- **全信 AI 生成不验收**：AI 给的脚本可能命令名对不上你的项目、可能漏了失败退出、可能耗时统计写错。永远自己跑一遍、看一眼三个验收点再用。

#### 小结

这节课的核心就一句话：**把「反复做、做错代价大」的动作交给脚本和 AI 去守，你只看结果。** 具体落地是三层——

1. **检查脚本**（`scripts/check.sh`）：把上线前的 lint/typecheck/test 串成一条命令，`set -euo pipefail` 保证一步挂就停。
2. **脚手架脚本**（`scripts/generate-*`）：把「新建 X 要建哪些文件」固化成模板，一条 `npm run gen:*` 生出统一骨架，记得做到幂等可重跑。
3. **CI/CD + 人工兜底**：把检查脚本搬上 GitHub Actions 自动跑，加缓存加失败策略，机器判断不了的用人工清单补。

配合 Claude Code / Cursor / Codex CLI，你只要说清楚「产物路径 + 顺序 + 失败策略 + 先搭骨架再替命令」，AI 就能给你八九不离十的初版，剩下你负责的只有验收那三个点。会了这套，你就从「每天手动重复劳动、总担心漏一步」升级成「一条命令跑对一整套流程」。

#### 练习

让 AI 为项目生成"新增 API 模块"脚手架：controller/service/dto/测试/README，最后输出一条 npm 命令生成整套骨架。

**进阶要求**（做完基础版再挑战）：

1. 让脚手架**幂等**——同一个模块名跑第二次要提示「已存在，跳过」而不是覆盖你已经写的业务逻辑。
2. 在生成的 `README` 里让 AI 自动写清这个模块的用途占位和「怎么跑这个模块的测试」。
3. 把这条生成命令**写进项目 `CLAUDE.md`**，这样 AI 工具下次进项目就知道「新建 API 模块用 `npm run gen:api <名字>`」。
4. 交付前，用本课的「六个常见坑」逐条自检一遍你生成的脚手架脚本，特别是：有没有 `set -e`、是不是可重跑、命令有没有收进 `package.json scripts`。
