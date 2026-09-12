# Production Sync Status

检查时间 / Checked: 2026-09-12 Australia/Brisbane

## Skills Data Manager read-back

- Local course source: found.
- Local stages: 4.
- Local modules: 8.
- Local duration: 780 minutes / 13 hourly blocks.
- Production Training: `exists: false`.
- Production diff: 0 update operations because no Training exists to compare.
- Production mutation: not executed.

## 为什么没有创建

首次创建不是只上传八个 Lesson。同步流程还必须创建 Training、4 个 Module、Program、Syllabus 和 8 个 Lesson。Program 创建需要真实讲师、城市或线上安排、开课日期及价格配置；当前这些信息尚未提供。

禁止使用占位讲师、假日期、零价格或猜测的城市绕过创建要求。

## Unblock checklist

- [ ] Instructor / teacher ID approved
- [ ] Online or city delivery target approved
- [ ] Commence and completion dates approved
- [ ] Tuition and promotion policy approved
- [ ] Capacity and enrolment terms approved
- [ ] Registration/payment path tested

以上字段确认后，重新运行 Skills Data Manager diff，执行首次创建，再下载 production snapshot 到 `skills-data/training-outlines/ai-marketing-agile-business.json` 并完成 Admin 与学生端 read-back。
