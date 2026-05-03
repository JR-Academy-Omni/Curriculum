# 公众号长文：30 分钟做出能收钱的 AI 产品

> 字数：约 2400 字 · 发布前用 `/xhs-review` 检查 + 配 3-5 张截图
> 公众号头图建议用 Stripe 后台一笔真实 test 交易截图（最有说服力）

---

# 30 分钟做出能收钱的 AI 产品 — 一个澳洲华人 indie 的真实记录

## 起因

上个月在墨尔本 CBD 一家咖啡店，我跟一个朋友 K 聊天。她是某保险公司的 senior PM，35 岁，年薪 18 万澳元，最近在看 AI 工具的演示视频上瘾——Cursor 的代码自动补全、Lovable 一句话生成 SaaS、Claude Code 跑完整项目。

她说："我看完心动了一周，但现在又冷下来。"

"为什么？"

"我去注册 Stripe 账号——卡在 ABN 验证；想跑 Vercel 部署——不知道怎么连 GitHub；想加用户系统——查文档查到一半放弃。每个工具都说自己很简单，连起来就是一个迷宫。"

她是典型的 OPC（One-Person Company AI 一人公司）准入者：有钱、有时间、有行业洞察，唯一缺的是一个"原来这件事真的不复杂"的瞬间。

那天晚上回家我录了一段视频：**30 分钟从零做出一个能跑、能收钱的 AI 产品**——不是 demo 截图，不是 Figma 静态页，是一个公网能打开、能注册、能跑测试支付的真东西。

K 看完第二天给我发消息："我做出来了，跟着教程，比预想的快。"

我把这段教程整理成完整 mini course，免费放出来，附带工具清单、准备 checklist、5 个常见踩坑。这篇文章拆解给你看 30 分钟里发生了什么。

---

## 为什么这件事 2026 年才能做成

3 年前你做一个 SaaS 至少要：

- 写前端（React/Vue 起步 2 周）
- 写后端（Node/Django 起步 1 周）
- 接支付（Stripe 文档读 3 天）
- 部署（DevOps 配置 2 天）
- 总计 3-4 周 + 1-2 个外包成本 $3k-$8k

2026 年的工具栈把这些步骤合并到了 30 分钟：

- **Lovable** = 一句 prompt 生成完整 React/Tailwind landing + 工作的表单 + 数据库
- **Stripe** = test mode 不需要 ABN 立刻能跑，live mode 需要本地实体（首期墨尔本 cohort = ABN，未来 UK / NZ / 新加坡版替换为本国实体）
- **Vercel** = GitHub 一键导入，30 秒部署，免费 SSL + CDN
- **GitHub** = 中间桥梁，全部自动化

整套链路免费档够用。30 分钟成本接近 $0。

但工具好不等于结果好。**真正的瓶颈不是工具，是『不知道这条路真的能走通』的心理门槛**。这就是这个教程的价值——让你看见。

---

## 30 分钟分秒走完

### 0-3min · 写产品定位

打开浏览器之前先做这件事：用一句话写出你的产品定位。

不要写"我想做一个 AI 工具"——那是 idea，不是定位。

要写："AI 帮 [谁] 解决 [什么具体痛点]，每月 [价格]"。

我教程里的 demo 是："**AI 帮小红书博主写爆款标题，每月 $9**"。这一句话里有：目标用户（小红书博主）、痛点（写爆款标题难）、定价（$9 订阅）。

写不出来这一句话？那你应该先回去做用户调研，不是急着 ship。

### 3-10min · Lovable 一句话生成 landing page

打开 `lovable.dev`，登录（用 Google 一键），新建项目。

写一句 prompt：
> "做一个 AI 小红书爆款标题生成器的 landing page。Hero 区有标题、副标题、注册邮箱表单。中段有痛点描述、3 个使用场景、产品演示。底部有定价（免费 / Pro $9 / Team $29 三档）+ FAQ。配色用温暖橙黄系，字体现代清晰。"

Lovable 30-60 秒生成完整页面：响应式 + Tailwind 样式 + 工作的表单 + Supabase 数据库（免费）。你看到的是真能跑的东西，不是 mockup。

预览 URL 直接在浏览器看，需要改字直接说"把第二段改成 X"，Lovable 实时改。

### 10-17min · 加 Stripe Checkout（test mode）

注册 Stripe 账号——这一步**不用 KYC、不用 ABN**，立刻能用 test mode（生产用必须实名）。

Stripe Dashboard：
1. Products → Create product → 名字 "Pro Plan" → Price $9/month subscription
2. 创完产品 → 找 "Buy button" 或 "Payment Link" → 复制
3. 回 Lovable → 把 landing page 上的"立刻订阅"按钮的链接换成这个

Stripe 测试卡：`4242 4242 4242 4242`，任意未来到期日，任意 CVC，任意邮编。**不要用真卡**，会真扣钱。

注意：test mode 一定要看 Stripe Dashboard 顶部 toggle，左边是 test 右边是 live。

### 17-24min · 部署到 Vercel 拿公网 URL

Lovable 内置 GitHub 集成：项目设置 → "Connect GitHub" → 自动推到一个新 repo。

Vercel：
1. vercel.com → "Add New Project" → 从 GitHub 选刚推的 repo
2. Vercel 自动识别 framework（Next.js / Vite）→ 默认配置点 Deploy
3. 30-60 秒部署完成，拿到 `your-product-name.vercel.app` 公网 URL

这一步以前要懂 git push / CI/CD pipelines / DNS 配置 / SSL 证书……现在 3 个 click 搞定。

### 24-28min · 测试一笔交易

打开你刚拿到的公网 URL，走完整 checkout 流程：

1. 填邮箱注册
2. 点"立刻订阅 Pro $9"
3. 跳转 Stripe Checkout 页面
4. 填测试卡 `4242 4242 4242 4242` + 任意未来日期 + 任意 CVC
5. 点支付

**Stripe Dashboard → Payments** 立刻看到一笔 $9 test 交易。

这就是 K 那天晚上拿到的"原来真的不复杂"瞬间。

### 28-30min · 收尾 + 7 个进阶方向

到这一步你已经有：能跑能访问的 landing + Stripe checkout + 一笔成功的 test 交易。

但你的产品才刚起步。下一步 7 个方向：

1. **真的 AI 后端**：连 Claude API / OpenAI，让产品真处理用户输入
2. **用户系统**：Lovable 内置 Clerk 集成，10 分钟加完
3. **Stripe live mode**：要本地实体（澳洲 ABN / UK Companies House / NZ NZBN）
4. **自定义域名**：namecheap 买 $10/年 + Vercel DNS 配置
5. **法律文件**：Privacy / TOS / Refund 5 份合规文件（可以用 AI 生成 + AI 律师审核）
6. **Analytics**：Plausible / Posthog 装 30 秒，免费档够 OPC 用
7. **第一笔真实付费**：去哪发？发什么？怎么转化陌生用户？这是营销层面的问题，不是工具层面

---

## K 的故事后续

K 跟着教程做完了 demo，但她的产品 idea 不是"AI 写小红书标题"——她的行业洞察是保险，她要做的是"AI 帮保险中介写客户跟进邮件"，目标用户是澳洲华人保险经纪。

她按照同样的 30 分钟流程，把产品定位换成自己的 idea，重新跑一遍。第二天她的 landing page 公网可访问了，她在 LinkedIn 把 URL 发给 5 个保险经纪朋友说"帮我看看"。

3 天后她拿到了第一个非朋友的 5 用户邮箱注册。

我们后来聊起来，她最大的感慨不是"我做出来了"，是"**原来从 idea 到能跑的产品，2026 年的工具栈让这件事成本这么低，我之前是被自己的预设吓住的**"。

这就是这个 mini course 的全部目的。

---

## 完整教程在哪拿

整套 30 分钟教程 + 工具清单 + 准备 checklist + 5 个常见踩坑都整理在这里：

**🔗 jiangren.com.au/curriculum/ai-solo-founder-bootcamp/lead-magnets/30min-ship.html**

完全免费，不要邮箱，不发广告。

---

## 如果你想再走深一步

这个 mini course 是 **AI 一人创业营 W2 第一节课的压缩公开版**。

完整课程是 11 周三城线下 cohort（墨尔本主场 + 悉尼 / 布里斯班卫星教室），覆盖：

- W1 选品 + 验证 + 定价模型选型
- W2 MVP build + Source of Truth + 装 AI 秘书 + Agent Schedule 工作坊
- W3 上线 + Stripe + AI 法律文件 + 收第一笔钱
- W4-W6 多渠道营销（线上 + 线下 + AI 视频海报 + SEO）
- W7-W9 澳洲合规 + RDTI Grant 实战
- W10-W11 VC 选修 + 三城联合 Demo Day

申请制 30-50% 录取率（不是所有人都该报）。**首期 case study 价 $3,800**（标准价 $5,800，前 10 名享受）。

完整大纲：jiangren.com.au/curriculum/ai-solo-founder-bootcamp/

但报名之前，**强烈建议先做 5 维度 OPC 适配自评**：jiangren.com.au/curriculum/ai-solo-founder-bootcamp/lead-magnets/opc-assessment.html

12 道题 5 分钟，立刻看你的得分。如果 < 60 分，说明你某个 dimension 不到位，建议先补再申请。

---

## 写在最后

OPC 这件事不需要很多人都来做。但**对那些已经有行业洞察、有现金跑道、有时间投入的华人专业人士，2026 年的工具栈让"自己做产品 + 自己卖"的门槛史无前例的低**。

如果这篇文章里有一句话让你停下来想了一下"也许我也能做"——那就花 30 分钟跟着教程跑通一遍。

跑完留言告诉我你做的什么产品。

---

> 公众号文章封面建议：Stripe Dashboard 一笔成功 test 交易截图（$9.00 USD · 状态 Succeeded · 时间 today）— 这是最有说服力的封面，比任何 AI 生成的酷炫海报都强
>
> 文章末尾配 2-3 张截图：Lovable 生成中、Vercel 部署完成、Stripe test 交易记录
>
> 公众号 SEO 关键词：AI 一人公司 / OPC / 墨尔本华人创业 / 澳洲 indie hacker / Lovable / Cursor / AI 创业
