import LessonPage from '../LessonPage';

// Source and adaptation notes: PRD.md, page 24.
export default function S24_Handoff() {
 return <LessonPage {...{"tag": "OPERATE · W2 HANDOFF", "title": "今天的证据，成为下周的起点", "subtitle": "从产品契约展开完整 UI 与 Design System。", "mode": "hero", "blocks": [["交付清单", "Brief · Workflow · Acceptance\nRepo Map · Rules · Task Board\nDiff · Test Result · Human Review"], ["下周接力", "从已确认用户和流程推导页面、状态与 Design Tokens。"], ["最后自检", "别人拿到你的证据包，能否知道已完成什么、缺什么、从哪里继续？"]], "footer": "W1 的成果是可继续开发的底座；第一周不要求做出完整业务或 Agent。"}} />;
}
