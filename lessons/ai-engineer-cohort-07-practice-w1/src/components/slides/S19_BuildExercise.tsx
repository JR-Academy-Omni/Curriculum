import LessonPage from '../LessonPage';

// Source and adaptation notes: PRD.md, page 19.
export default function S19_BuildExercise() {
 return <LessonPage {...{"tag": "BUILD · WORKSHOP / 17 MIN", "title": "完成第一次 scoped diff", "subtitle": "切到编辑器和终端；保持问题、计划、diff 与检查一一对应。", "mode": "exercise", "blocks": [["开始前", "确认改动范围和验收；给当前未提交工作留出保护边界。"], ["执行中", "只做一个小修改；Agent 超范围时先停并说明原因。"], ["检查后", "保存实际命令与结果，区分预期输出和实际输出。"], ["交付", "Scoped Diff + Check Result；没完成也写清阻塞和下一步。"]], "footer": "启动或依赖卡住时先求助；可以做已确认的文档改动，不伪造代码测试。"}} />;
}
