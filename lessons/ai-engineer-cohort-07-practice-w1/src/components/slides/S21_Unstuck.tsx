import LessonPage from '../LessonPage';

// Source and adaptation notes: PRD.md, page 21.
export default function S21_Unstuck() {
 return <LessonPage {...{"tag": "EVALUATE · 复用排错方法", "title": "卡住时，先缩小问题", "subtitle": "不在同一个失败状态上无限叠 Prompt。", "mode": "rows", "blocks": [["先解释", "让 Agent 说明现象、根因假设与证据，不直接乱改。"], ["最小复现", "隔离一个错误、一个输入、一个失败结果。"], ["一次改一处", "缩小范围后检查 diff；保留其他工作。"], ["用结果验证", "运行相关检查，解释改动怎样解决问题。"], ["把教训写回", "写入实际适用的 rules / docs，避免下一轮再猜。"]], "footer": "需要回退时先说明并确认范围；不要自动清除未提交工作。"}} />;
}
