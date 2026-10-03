import LessonPage from '../LessonPage';

// Source and adaptation notes: PRD.md, page 8.
export default function S08_ADLC() {
 return <LessonPage {...{"tag": "SPECIFY · 七步循环", "title": "ADLC 七步，每一步都有证据", "subtitle": "把大师课五步循环适配到本期确认大纲；执行前有人的确认节点。", "mode": "adlc", "blocks": [["Frame", "问题、用户、范围"], ["Specify", "Brief、验收、计划"], ["Ground", "Repo、Rules、数据"], ["Build", "受控的小改动"], ["Evaluate", "检查和实际结果"], ["Safeguard", "风险、权限、人工确认"], ["Operate", "Owner、任务、证据"]], "footer": "Problem → Spec → Work Plan → Code Change → Test → Review → Evidence"}} />;
}
