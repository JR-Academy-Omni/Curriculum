import LessonPage from '../LessonPage';

// Source and adaptation notes: PRD.md, page 2.
export default function S02_Evidence() {
 return <LessonPage {...{"tag": "FRAME · 今天的交付", "title": "今天结束时，桌上留下什么", "subtitle": "交付的是别人能检查、下周能接着用的证据。", "mode": "grid", "blocks": [["产品契约", "Product Brief · Workflow\n范围、非目标、验收标准"], ["开发上下文", "Repo Map · Agent Rules\n真实入口、数据边界、允许修改范围"], ["开发证据", "Scoped Diff · Test · Review\n改了哪里、怎样检查、谁确认"], ["推进计划", "Task Board · Owner\n下一步、依赖、阻塞和证据链接"]], "footer": "AI 生成的是候选；人确认后的契约才是项目依据。"}} />;
}
