import LessonPage from '../LessonPage';

// Source and adaptation notes: PRD.md, page 10.
export default function S10_Workflow() {
 return <LessonPage {...{"tag": "SPECIFY · WORKFLOW", "title": "光有页面不够，还要有 Flow", "subtitle": "合成教学流程：说明责任与状态，本周只定义业务契约。", "mode": "flow", "blocks": [["Draft", "输入教学草稿"], ["Review", "适当角色检查 / 修改"], ["Confirm", "明确人工确认"], ["Evidence", "确认记录 / 审计依据"]], "footer": "空内容 → 提示错误；未确认 → 留在 Review；AI 不能跳过人工确认。"}} />;
}
