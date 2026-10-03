import LessonPage from '../LessonPage';

// Source and adaptation notes: PRD.md, page 4.
export default function S04_SoT() {
 return <LessonPage {...{"tag": "FRAME · SOURCE OF TRUTH", "title": "一件事，只保留一个权威出处", "subtitle": "复用大师课第一课：所有人和 AI 回到同一处读、同一处改。", "mode": "grid", "blocks": [["需求与决策", "Product Brief 说明为什么做、做到哪里；对话里的新想法先确认再写回。"], ["代码与结构", "实际 repo、schema、tests 说明系统现在是什么；不能靠模型猜路径。"], ["规则与限制", "AGENTS.md / CLAUDE.md 说明怎样做；数据和权限边界必须可执行。"], ["验收与状态", "实际检查结果决定通过与否；AI 的“好了”不能替代测试。"]], "footer": "信息冲突时先确认 owner 和权威来源，再继续开发。"}} />;
}
