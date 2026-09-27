# 学员 Offer 与感言存档 · AI Engineer Bootcamp

> slug: `ai-engineer-bootcamp`
> 负责人：**Beta（产品中心 · 课程运营）** — 这是日常工作，不是一次性任务
> 建立日期：2026-08-12

---

## 这个目录是干什么的

**学员拿到的 offer、学员说的原话，唯一的存放地。**

AI Engineer 班的 Offer、感言和对应证据统一归档在这里，避免散落在班级群、1v1 记录和个人截图里。以后收到一条就存一条，存在 `students/` 里，一个学员一个 Markdown 文件。

当前历史 Offer 汇总见 [`offers.md`](offers.md)，后续逐步统一到 `INDEX.md` 维护。

---

## 放什么 / 不放什么

**放：**
- 学员拿到的 offer（公司、岗位、时间、包裹范围、有没有截图）
- 学员的原话感言（testimonial）——学完最大的变化是什么，逐字记，不润色
- 学员做出来的项目 / 作品链接（AI Engineer 班学员通常有 RAG / Agent 项目）
- 这条素材**能不能对外用、能用在哪几个渠道**（consent）

**不放：**
- 活密码 / token / 学员账号密码（任何 git 都不进，这是全公司红线）
- 没影的事。学员没说过的话不许替他编，offer 没确认不许先写上去

课程内容层面的反馈继续放同级 `feedback/`，不要塞进这里。

---

## 三条红线（写之前先看）

1. **不承诺包就业。** Offer 记录只能是事实陈述，禁止推导成“学完就能拿 offer / 保 offer / 包上岸 / 必进大厂”。
2. **原话不改。** 学员感言逐字录入；要精简版就在原话下面另起一行标“精简版（对外用）”，原话永远保留。
3. **同意才对外。** 仓库是 private，但对外使用必须检查 `consent`；学员选匿名就用代称。退费学员一律不上墙，素材移到 `_archived/` 并注明原因。

补充安全要求：
- 本目录含薪资范围和 Offer 截图，仅供内部备查，不得直接外发。
- 对外制作喜报前，必须再次复核姓名、薪资、联系方式等敏感信息是否脱敏。
- **Haoran 明确标注为“不能被宣传”，禁止任何对外使用。**

---

## 怎么用（日常四步）

1. 学员报喜 / 结业回访拿到 Offer 或感言后，从 `_TEMPLATE.md` 新建 `students/{年份}-{展示名}.md`；现有历史档继续保留原文件名。
2. 逐字填写，拿不准的字段写“待补”，不要猜。
3. 更新 `INDEX.md`；历史记录同时维护 `offers.md`，直至完成统一迁移。
4. 截图存入 `students/`，建议命名 `{英文名小写}-offer.jpg` 或 `.png`，并更新个人记录的图片引用。

---

## 谁会来拿这里的数据

| 下游 | 拿去干嘛 |
|------|---------|
| 销售页 OFFER WALL（`/program-course/ai-engineer-bootcamp/`） | 真实 Offer 卡片 + 一句话感言 |
| `PROMOTION_PLAN.md` / `PROMOTION_PLAN.us.md` / 小红书 / 公众号 | 案例段、学员故事切角 |
| Sales 跟进话术 | 举同类背景学员的真实例子（只能用 consent 允许的） |
| `PERSONAS.md` / `PERSONAS.us.md` refresh | 真实学员画像回灌，替换 AI 推断 |
| `JD_SKILL_MAP.us.md` 校准 | 学员真拿到的岗位 vs 抓取的 JD 是否一致 |

引用时一律回链到具体的 `students/{文件}.md`，不要二次转述后失去出处。

---

## 目录结构

```text
testimonials/
├── README.md          # 本文件
├── INDEX.md           # 新记录的一页汇总表
├── offers.md          # 已迁入的历史 Offer 汇总
├── _TEMPLATE.md       # 新建学员档案模板
├── students/          # 一位学员一份档案及截图
└── _archived/         # 退费 / 撤回 / 作废材料
```
