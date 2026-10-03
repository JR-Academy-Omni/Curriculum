import LessonPage from '../LessonPage';

// Source and adaptation notes: PRD.md, page 11.
export default function S11_Acceptance() {
 return <LessonPage {...{"tag": "SPECIFY · ACCEPTANCE", "title": "验收写成 Given / When / Then", "subtitle": "复用 PRD 自检；不要只写“正常工作”“安全可靠”。", "mode": "rows", "blocks": [["成功路径", "Given 合成草稿，When 进入 review，Then 展示待检查状态。"], ["失败路径", "Given 内容为空，When 尝试确认，Then 提示错误且不转为已确认。"], ["禁止路径", "Given 没有人工确认，When AI 建议保存/写回，Then 禁止该操作。"], ["证据类型", "W1 先做 spec review；以后实现时再运行这些产品测试。"]], "footer": "小改动的验收另写：这些拟议业务行为不代表 starter 已实现。"}} />;
}
