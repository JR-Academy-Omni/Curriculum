import LessonPage from '../LessonPage';

// Source and adaptation notes: PRD.md, page 17.
export default function S17_SmallTask() {
 return <LessonPage {...{"tag": "BUILD · SCOPED CHANGE", "title": "从问题，到一个可控的小任务", "subtitle": "复用大师课 PRD → 开发 → 验收练习，换成真实 starter 上的最小修改。", "mode": "timeline", "blocks": [["确认问题", "优先文档纠错或已有简单校验；先看到实际问题再选择。"], ["确认计划", "列允许文件、保持的契约、成功/失败验收与检查方法。"], ["执行小改动", "在人确认后实现；留下 diff，避免一次铺开多个模块。"]], "footer": "完成标准由证据决定；第一次改动大小不决定学习成效。"}} />;
}
