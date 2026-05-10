# 05 · Rules 体系

## 5.1 为什么需要 Rules

- AI 默认不知道你团队的"行规"——它会用统计意义上最常见的写法
- **Rules = 把团队规范变成 AI 的强制约束**
- 没 Rules：每次都要在 prompt 里重复"用 TypeScript / 不要 any / 用 styled-components"
- 有 Rules：AI 自动加载，写出来的代码一上来就符合团队风格

> 讲师提示：把 Rules 类比成"新员工入职手册"，AI 是新员工，每次都要先翻手册。

---

## 5.2 `.cursor/rules/` 目录结构

```
.cursor/rules/
  README.mdc              # 项目总览
  architecture.mdc        # 架构原则
  frontend/
    component.mdc         # 组件规范
    styling.mdc           # 样式规范
    state.mdc             # 状态管理
  backend/
    api-design.mdc        # API 设计
    database.mdc          # 数据库
    platform-adapter.mdc  # 平台适配
  workflow/
    git.mdc               # Git 规范
    ci-cd.mdc             # CI/CD
  code-quality/
    naming.mdc            # 命名
    testing.mdc           # 测试
    performance.mdc       # 性能
```

- 每个 `.mdc` 文件 = **一条规则**
- AI 自动按目录加载（Cursor / Claude Code 都支持）
- **按域分文件**比"一个大文件塞所有规则"好维护
- `README.mdc` = 入口，列出 Rules List 索引

> 讲师提示：现场打开学员的项目，看有没有 `.cursor/rules/`，没有当场建一个。

---

## 5.3 Rules 入口 — `rules/README.mdc`

- 作用：**Rules List 入口**，告诉 AI "你要遵守哪些规则、在哪个文件"
- 内容：一段总览 + 子规则文件链接
- 引用示例：[readme-rule.mdc](https://fullstack27.atlassian.net/browse/F2-8)
- 不要把所有规则塞在 README 里——README 只列**索引**，详情拆到子文件

---

## 5.4 三大原则：SOLID + DRY + KISS

- 用法 4 步走：
  1. **Prompt it in** — Follow SOLID, DRY, KISS, and readability rules above.
  2. **Audit the output** — Check each pull request against the 10-point readability checklist.
  3. **Refine** — If the LLM violates a rule, update the prompt or add a small inline comment and re-ask.
  4. **循环** — Rules 是活的，AI 一旦违反就更新 Rules，不是骂 AI

> 讲师提示：强调"AI 违反了不要骂 AI，要骂自己 Rules 写得不够清楚"。

---

### 5.4.1 SOLID Principles

- **S — Single Responsibility**：一个类/函数只做一件事
- **O — Open/Closed**：对扩展开放、对修改关闭
- **L — Liskov Substitution**：子类能替换父类不破坏行为
- **I — Interface Segregation**：小而专的接口 > 大而全的接口
- **D — Dependency Inversion**：依赖抽象，不依赖具体实现

### 5.4.2 DRY — Don't Repeat Yourself

- Every piece of knowledge must have a **single, unambiguous, authoritative representation** in the codebase
- Eliminate copy-paste by extracting **reusable functions, constants, or configs**
- 反例：同一段业务逻辑在 3 个 controller 里复制
- 正例：抽到一个 service / util，三处复用

### 5.4.3 KISS — Keep It Simple, Stupid

- Favor the **simplest working design**
- Avoid clever one-liners, unnecessary patterns, or premature optimizations
- Today's reader (often **your future self or an LLM**) will thank you
- 反例：一行 reduce 套 map 套 filter 没人看得懂
- 正例：拆成 3 个 for + 中间变量 + 注释

> 讲师提示：KISS 在 AI 时代特别重要——AI 读不懂的代码 = AI 改不动的代码 = 技术债。

---

## 5.5 Rules List — 13 条可执行规则

| # | 规则 | 一句话 |
|---|------|--------|
| 1 | **Single Responsibility** | 每个函数/类只做一件事，长度 < 50 行 |
| 2 | **Clear Naming** | 名字要让陌生人 5 秒看懂，不用 `data` `info` `temp` |
| 3 | **No Hard-Coded Secrets** | 任何 key / token / 密码进 `.env`，永远不进 git |
| 4 | **Comments First** | 复杂逻辑先写注释再写代码，AI 也能照注释生成 |
| 5 | **Test-Driven** | 新功能必须带 test，AI 写完代码立刻让它写 test |
| 6 | **Explicit Error Handling** | 不要 `try { ... } catch { return null }` 静默吞错 |
| 7 | **Secure by Default** | 默认拒绝、显式放行；输入永远不可信 |
| 8 | **Performance Boundaries** | 给关键路径设 SLO（< 200ms / < 1MB），AI 改完看是否越界 |
| 9 | **Minimal Dependencies** | 加一个 npm 包前先问"能不能 20 行自己写" |
| 10 | **YAGNI — You Aren't Gonna Need It** | 不为"未来可能用到"提前抽象 |
| 11 | **Code for the Reader** | 写给人看，顺便机器能跑；可读性 > 简洁性 |
| 12 | **Explicit Types** | Every exported value has an explicit type / interface |
| 13 | **No `any`** | No `any` unless whitelisted (写注释说明为啥必须 any) |

> 讲师提示：13 条不用一次记住，让学员挑 3 条最痛的先落地到自己 repo 的 `.cursor/rules/`。

---

## 5.6 Rules 落地节奏（讲师收尾用）

- **Week 1** — 把团队最痛的 3 条规则写进 `.cursor/rules/`
- **Week 2** — 跑一周，看 AI 还在哪些地方违反，把违反的写成新规则
- **Week 3** — Rules 文件交叉 review，补全 SOLID / DRY / KISS 三大基础
- **持续** — 每次 PR review 发现新坑 → 当场写进 Rules

> 讲师提示：最后留一个作业 — 学员下课前在自己 repo 建 `.cursor/rules/README.mdc`，至少写 3 条规则。
