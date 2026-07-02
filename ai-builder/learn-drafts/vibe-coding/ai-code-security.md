---
# ⚠️ 草稿：待开发同学放进 jr-academy-web-zh/src/content/learn/vibe-coding/ 并按 vibe-coding.config.ts 补 config 条目
title: AI 生成代码的安全
description: AI 写代码飞快，但埋的安全坑也快——硬编码密钥、缺输入校验、编造出根本不存在的依赖包。这一章带你认全 AI 代码最常见的几个坑，以及每个坑怎么在合并前就堵死。
direction: vibe-coding
slug: ai-code-security
group: AI 工程实战
order: 70
estimatedMinutes: 25
---

上周我让 Claude Code 帮我写一个给用户发验证短信的接口，它几秒钟就吐出一整段能跑的代码。我扫了一眼，逻辑对、能编译、测试也过了，差点就 commit 了。结果眼角瞥到一行：`const TWILIO_TOKEN = "SK3f9a..."`——它把我的真实 token 直接写进了源码，还顺手 import 了一个我从没听过的包 `twilio-sms-helper`。

这两个细节，一个会让密钥泄进 git 历史里再也拿不回来，另一个可能是攻击者抢注的恶意包。**代码能跑，不代表它安全。** 这一章讲的就是：AI 写代码时最爱埋的几类安全坑，以及你在合并前怎么一个个堵掉。

为什么非得你自己懂？因为 AI 不对安全后果负责，你负责。出了事被 review 打回、密钥泄露上新闻、公司被拖库，落在谁头上很清楚。AI 是个手速极快但不长记性的实习生，你得当那个把关的人。

## 坑一：硬编码密钥

这是最常见、也最致命的一个。你让 AI 写调用某个 API 的代码，它为了「能直接跑」，经常把 key、token、数据库密码直接写进代码里，或者写进给你看的示例里。

```python
# ❌ AI 经常这么写——key 直接进源码
import stripe
stripe.api_key = "sk_live_51H8xY2eZvKf..."

def charge(amount):
    return stripe.Charge.create(amount=amount, currency="aud")
```

问题不只是「不好看」。一旦这行代码被 commit，**git 历史会永久记住它**——就算你下一个 commit 删掉，`git log -p` 还是能翻出来。密钥一旦进了远程仓库，唯一安全的处理是：立刻去平台后台吊销并重新生成，而不是删代码假装没发生。

正确做法是把密钥挪到环境变量或密钥管理服务：

```python
# ✅ 从环境变量读，源码里不出现真实值
import os
import stripe
stripe.api_key = os.environ["STRIPE_API_KEY"]

def charge(amount):
    return stripe.Charge.create(amount=amount, currency="aud")
```

配合 `.gitignore` 把 `.env`、`*.pem`、`config.local.*` 这类文件挡在 git 外面。2026 年主流做法已经是云端密钥管理（Vault、云厂商的 Secrets Manager、或平台内置的加密环境变量），本地开发用 `.env` + `.env.example`（example 里只放占位符）。

> **术语：密钥管理（Secrets Management）**
> - 把 API key、token、密码这类敏感字符串集中存放、加密、按需下发，而不是散落在代码里。
> - 就像家里的贵重物品不放在门口鞋柜上，而是锁进保险箱，用的时候才拿。
> - 工作中：代码只写 `os.environ["X"]` 这样的「取件凭证」，真实的值放在 `.env`（本地）或密钥服务（生产），部署时注入。
> - 最常踩的坑：把 `.env` 忘了加进 `.gitignore`，一 push 全泄了；或者以为「删掉那行 commit」就安全了——其实 git 历史里还在，必须吊销重发。

## 坑二：注入类漏洞——AI 常忘了校验输入

AI 生成 CRUD、查询、拼接命令的代码时，经常直接把用户输入拼进 SQL、HTML 或 shell 命令里，因为「拼字符串」是最短的能跑通的写法。但这正是 SQL 注入、XSS、命令注入的温床。

看一个典型的坏例子：

```javascript
// ❌ 用户输入直接拼进 SQL——经典 SQL 注入
app.get("/user", (req, res) => {
  const name = req.query.name;
  db.query(`SELECT * FROM users WHERE name = '${name}'`, (err, rows) => {
    res.json(rows);
  });
});
```

如果有人传 `name = ' OR '1'='1`，这条 SQL 就变成了「返回所有用户」；再狠一点还能删表。修法是用参数化查询，让数据库自己处理转义，输入永远只被当数据、不被当代码：

```javascript
// ✅ 参数化查询——输入被当成纯数据，注入不了
app.get("/user", (req, res) => {
  const name = req.query.name;
  db.query("SELECT * FROM users WHERE name = ?", [name], (err, rows) => {
    res.json(rows);
  });
});
```

XSS 同理——把用户输入直接 `innerHTML` 进页面就会执行其中的 `<script>`，正确做法是用 `textContent` 或框架自带的转义（React 的 `{}` 默认转义，别乱用 `dangerouslySetInnerHTML`）。命令注入也一样——别用字符串拼 shell 命令，用能接收参数数组的 API（如 Node 的 `execFile`、Python 的 `subprocess.run([...])`）。

> **术语：参数化查询（Parameterized Query / Prepared Statement）**
> - 把 SQL 语句结构和用户传的值分开发给数据库，值永远只当数据处理，不会被解析成 SQL 命令。
> - 好比填表格：表格的格子（语句结构）是固定印好的，用户只能往格子里写字，改不了表格本身。
> - 工作中：凡是用户输入进 SQL，一律用 `?` / `$1` / 命名占位符 + 参数数组，不用字符串模板拼。
> - 最常踩的坑：以为「我自己写个函数把引号转义掉就行」——手写转义总有漏，参数化才是标准解，交给驱动去做。

## 坑三：幻觉依赖包 / slopsquatting（重点，很多人不知道）

这个坑最阴，因为它伪装成「AI 帮你省事」。AI 会**编造出根本不存在的包名**——比如它记得有个处理日期的库，就自信地让你 `npm install date-formatter-pro` 或 `pip install requests-helper`，但这个包压根不存在。

单纯装不上还好，问题在于：攻击者知道 AI 爱编哪些名字，就**提前把这些幻觉包名抢注到 npm / PyPI 上，塞进恶意代码**。你照着 AI 的建议一装，恶意包就进了你的机器和项目。这个手法叫 slopsquatting。

```bash
# ❌ AI 建议的包，看着很合理，但可能根本不是官方的
npm install react-form-validator-easy
pip install fastapi-auth-toolkit
```

装之前，花三十秒核对：

1. **去官方 registry 搜一下**——npmjs.com / pypi.org 上有没有这个包，是不是你以为的那个。
2. **看下载量和维护状态**——一个几周前才发布、周下载量个位数、却声称是「流行库」的包，高度可疑。
3. **点进它的仓库**——有没有真实的 GitHub 源、star、issue、提交历史；有没有官方文档链接。
4. **对不上就别装**——很多时候 AI 想要的功能，标准库或你已装的主流库就能做，让 AI 换成真实存在的方案。

> **术语：slopsquatting**
> - 攻击者抢注「AI 常编造出来的假包名」，塞进恶意代码，等着有人照 AI 建议去安装。
> - 就像有人发现导航软件老把你导到一条不存在的街，于是真去那条街盖了个假店等你上门。
> - 工作中：AI 让你装任何不熟悉的包，先去官方 registry 核实真实性、看下载量和仓库，再决定装不装。
> - 最常踩的坑：看包名「很合理」就直接 `install`——名字合理恰恰是攻击者精心设计的，合理 ≠ 真实。

## 坑四：依赖与 license 合规

AI 拉进来的库，除了可能不存在，还可能带着**不兼容的开源协议**。它不会替你判断 GPL、AGPL 这类「传染性」协议会不会逼你的商业闭源项目也得开源。它只管功能对不对，不管法务能不能过。

合并新依赖前，扫一眼它的 license 字段（`package.json` 的 `license`、PyPI 页面的 License 分类）。团队里最好接一个自动扫描（很多平台的 CI 有依赖 license 检查），别等产品上线了才发现引了个不能商用的库。同理，AI 直接「借鉴」某段网上代码贴进你项目时，也要留意那段代码本身的授权。

## 坑五：「看起来对」不等于安全

前面几类是具体的洞，这一类是心态：AI 代码能编译、能跑、测试也绿，都不代表它没洞。安全问题往往不会让程序崩溃——它安安静静地等着被利用。所以每次合并 AI 代码，过一遍这份人工复核清单：

- [ ] 有没有硬编码的密钥、token、密码、内网地址？
- [ ] 所有用户输入进 SQL 都参数化了吗？进 HTML 都转义了吗？进 shell 都用参数数组了吗？
- [ ] 新装的每个包都在官方 registry 核实过真实性、下载量、仓库了吗？
- [ ] 权限校验有没有做？这个接口该不该验登录、验角色、验资源归属？
- [ ] 错误信息会不会把堆栈、SQL、内部路径直接吐给用户？
- [ ] 敏感操作（付款、删数据、改密码）有没有日志和二次确认？
- [ ] 依赖的 license 跟项目商用要求兼容吗？

## 实操：让 AI 先自查，你再人工复核

好消息是，AI 也能帮你查它自己埋的坑——只要你明确要求。写完一段代码后，别急着合并，先让它做一轮自审：

```
请以安全审查者的身份复核你刚才生成的代码，逐条检查并指出：
1. 是否有硬编码的密钥 / token / 密码 / 敏感地址
2. 所有用户输入是否做了校验和转义（SQL 注入 / XSS / 命令注入）
3. 引入的每个第三方包是否真实存在、是否为官方维护（我会去 registry 核对）
4. 是否缺少权限 / 身份校验
5. 错误处理是否会泄露内部信息
对每一条：说明有没有问题、在哪一行、给出修复后的代码。
```

Claude Code / Cursor / Codex CLI 都能接这类 prompt，很多时候它自己就把硬编码密钥和缺校验揪出来了。但**AI 自查只是第一道筛子，不是终点**——它可能漏、也可能对自己编的幻觉包过度自信。所以自审之后，你再拿上面那份人工清单过一遍，尤其是「包是否真实存在」这条，必须你自己去 registry 眼见为实。

## 常见坑

- **以为「删掉那行 commit」密钥就安全了**——git 历史抹不掉，唯一正解是吊销重发。
- **信 AI 说「这个包很流行」**——它会对自己编的名字很自信，一切以官方 registry 为准。
- **手写转义代替参数化查询**——手写总有漏网的边界，参数化才是标准答案。
- **测试过了就当没洞**——安全洞通常不影响功能，测试绿灯跟安全没关系。
- **只查自己写的、不查 AI 一键生成的**——恰恰是你没细看的那几百行最容易埋坑。

## 小结

AI 写代码快，但把关的人还是你。记住这几个高频坑：密钥别进源码（进了就吊销重发）、用户输入一律参数化 + 转义、每个新包都去官方 registry 核实真实性防 slopsquatting、留意 license 合规。合并前让 AI 先自查一轮，再拿人工清单过一遍——「能跑」和「安全」是两码事，中间那道防线就是你。
