import LessonPage from '../LessonPage';

// Source and adaptation notes: PRD.md, page 12.
export default function S12_SpecExercise() {
 return <LessonPage {...{"tag": "SPECIFY · WORKSHOP / 10 MIN", "title": "写 Brief、Workflow 和验收", "subtitle": "三份产物相互对应，不能各讲各的。", "mode": "exercise", "blocks": [["前 4 分钟", "用六块模板写 Brief；未知事实保留“待确认”。"], ["接着 3 分钟", "画一条主流程；标成功、失败、拒绝与人工确认点。"], ["最后 3 分钟", "写三条验收；自查一处 Agent 容易猜的地方，贴到课堂聊天区。"], ["交付", "Brief + Workflow + Acceptance / Test Plan。"]], "footer": "一个功能找不到用户、流程或验收依据，就先移出本周范围。"}} />;
}
