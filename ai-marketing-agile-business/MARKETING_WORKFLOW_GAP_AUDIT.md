# Marketing Workflow Gap Audit

审计日期 / Audit date: 2026-09-12

| 项目 | 状态 | 证据 | 下一步 |
|---|---|---|---|
| 中英文课程页 | Complete | `public/curriculum*.html` | 上线后继续做事实回读 |
| 13 小时中英文安排 | Complete | `public/hourly-schedule*.html` | 用真实案例试讲 |
| 教学 Runbook 与模板 | Complete local | `teaching/` | 合并并放入正式共享位置 |
| Persona 定义 | Draft | `PERSONAS*.md` | 收集真实咨询、销售或访谈证据 |
| Persona ground truth | Blocked | 0 条已提供证据 | 完成最小验证任务 |
| Funnel 结构 | Ready for inputs | `FUNNEL_PLAN.md` | 填入批准的日期、价格和条款 |
| 报名与付款链路 | Blocked | 未提供 URL/Program | 完成端到端测试 |
| 讲师与交付资源 | Blocked | 未指定 | 锁定讲师、助教、场地/会议 |
| Master Content | Not started | 无已批准 SOURCE | G0/G1 后起草 |
| 中英文渠道资产 | Not started | 无已批准 Master | 完成平台原生版本和视觉 QA |
| 发布与排程 | Not authorised | 无账号/平台/时间批准 | 明确品牌和平台后执行 |
| Measurement baseline | Unavailable | 无历史数据 | 首轮发布后建立基线 |
| 课程系统 Training/Program | Pending diff | 无 production read-back | 运行 SDM production diff |

## P0

1. 合并不含 PPTX 的课程与教学文件。
2. 运行 Skills Data Manager production diff，确认 Training 是否存在。
3. 收集 Program 必填项：讲师、城市/线上、日期、价格、名额和条款。
4. 获取 Persona ground truth 后再生产招生资产。

## English handoff

The content and teaching system are locally ready. Production course records, real persona evidence, offer inputs, enrolment flow, channel assets and publication remain gated by external facts or explicit account targets.
