import LessonPage from '../LessonPage';

// Source and adaptation notes: PRD.md, page 23.
export default function S23_TaskBoard() {
 return <LessonPage {...{"tag": "OPERATE · OWNER + EVIDENCE", "title": "每项任务，都有 Owner 和证据", "subtitle": "看板状态反映工作事实；Done 不能靠模型自评。", "mode": "timeline", "blocks": [["Todo → Doing", "目标与验收明确；owner、依赖、允许范围已写清。"], ["Doing → Review", "提交 diff 和实际检查；未验证项明确列出。"], ["Review → Done", "人工确认验收；挂上证据链接。阻塞项另列下一步。"]], "footer": "60 秒汇报：解决什么、改了哪里、证据是什么、还缺什么。"}} />;
}
