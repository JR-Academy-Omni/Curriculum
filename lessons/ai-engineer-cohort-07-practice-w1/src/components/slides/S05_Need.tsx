import LessonPage from '../LessonPage';

// Source and adaptation notes: PRD.md, page 5.
export default function S05_Need() {
 return <LessonPage {...{"tag": "FRAME · PRODUCT THINKING", "title": "想法不是需求，功能也不是需求", "subtitle": "复用大师课第二课的四层拆解；下列是合成教学例子。", "mode": "rows", "blocks": [["想法", "“做一个护理 AI 助手”——只有方向。"], ["功能", "“加语音、列表、聊天框”——只有实现清单。"], ["需求", "“记录草稿需要被适当角色检查、修改并明确确认”——开始有责任与行为。"], ["本周范围", "写清契约、读懂 starter，选一个小修改；不把整套产品一次交给 AI。"]], "footer": "为【谁】在【什么场景】解决【什么问题】，做到【什么】算成功。"}} />;
}
