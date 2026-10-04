import LessonPage from '../LessonPage';

// Source and adaptation notes: PRD.md, page 22.
export default function S22_PeerReview() {
 return <LessonPage {...{"tag": "SAFEGUARD · REVIEW / 12 MIN", "title": "自查与点评：通过、未通过、未验证", "subtitle": "独立检查证据包，贴到课堂聊天区，由讲师抽样点评。", "mode": "exercise", "blocks": [["前 5 分钟", "检查 Brief、允许范围、diff；找一处可能越界的地方。"], ["接着 4 分钟", "核对实际检查结果与失败路径；提出一个追问。"], ["最后 3 分钟", "记录检查人、结论、理由和未解决问题。"], ["交付", "Human Review；业务事实与确认权仍归人负责。"]], "footer": "未验证是有用的状态：它告诉下一位接手的人还缺什么。"}} />;
}
