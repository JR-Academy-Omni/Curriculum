import LessonPage from '../LessonPage';

// Source and adaptation notes: PRD.md, page 6.
export default function S06_FiveQuestions() {
 return <LessonPage {...{"tag": "FRAME · 需求五问", "title": "开工前，先回答五个问题", "subtitle": "问题答不清，Agent 就会用默认想象填空。", "mode": "rows", "blocks": [["谁", "真正使用的人是谁？谁有权确认？"], ["痛点", "现有流程在哪一步卡住？依据是什么？"], ["价值", "不处理会造成什么影响？不要编造效率数字。"], ["成功", "哪个动作或结果改变，才算解决？"], ["边界", "本周做什么、不做什么；什么条件下必须停？"]], "footer": "没有来源的业务判断先标“假设”，不要写成已确认事实。"}} />;
}
