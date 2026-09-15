# Production Sync Status

检查时间 / Checked: 2026-09-15 Australia/Brisbane

## Skills Data Manager read-back

- Local course source: found.
- Local stages: 4.
- Local modules: 8.
- Local duration: 780 minutes / 13 hourly blocks.
- Production Training: `exists: true` (`6aa8a2416d6b36218a8e0e54`).
- Production Modules: 4, all matched to the four local stages.
- Production Program: phase 1 (`6aa8a2476d6b36218a8e0ea3`), Online city, Lightman Wang.
- Production Syllabus: `6aa8a2486d6b36218a8e0ead`.
- Production Lessons: 8, all `Workshop`, all level `初级`, ordered M01–M08.
- Every lesson has four learning outcomes and the correct Module binding.
- Final production diff: 0 changes; 8 unchanged lessons.
- Snapshot health: 8 matched, 0 orphan, 0 unbound, 0 duplicate.
- Training enquiry form: enabled (`openLeadsForm: true`).
- All 8 Lessons now include English titles, English descriptions and published learning materials linked to the learner toolkit.

## 已完成的发布范围

Skills Data Manager 已按 Training → Modules → Program → Syllabus → Lessons 的顺序完成首次创建，并把生产 ID 写回 `public/outline.json`。最新生产快照保存在 `public/prod-state.json`。

本次没有编造日期、价格、名额或优惠。Program 使用仓库发布规范中已登记的 Online city 和 Lightman Wang ID。

## 尚未发布的商业配置

- [x] Instructor / teacher ID approved
- [x] Online delivery target approved
- [ ] Commence and completion dates approved
- [ ] Tuition and promotion policy approved
- [ ] Capacity and enrolment terms approved
- [ ] Registration/payment path tested

Training 内容结构已经发布。只有在以上商业字段确认并完成报名链路测试后，才能把课程称为“可报名开班”；当前不得对外展示未经确认的日期或价格。
