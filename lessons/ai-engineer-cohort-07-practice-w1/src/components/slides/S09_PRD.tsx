import LessonPage from '../LessonPage';

// Source and adaptation notes: PRD.md, page 9.
export default function S09_PRD() {
 return <LessonPage {...{"tag": "SPECIFY · 复用 PRD 六块", "title": "PRD 六块：让 Agent 少猜一步", "subtitle": "不写空泛愿景；每块都能约束后续动作。", "mode": "grid", "blocks": [["01 · 目标与范围", "谁、场景、问题、成功标准；Must-have / Non-goals。"], ["02 · 页面与流程", "用户从哪里开始、做什么、看到什么；成功与失败分支。"], ["03 · 数据与输入", "来源、字段、权限、合成数据；未知项明确标注。"], ["04 · 模块职责", "哪些模块处理哪类事情；真实路径读 repo 后补。"], ["05 · 红线与验收", "不能做什么；Given / When / Then 与检查方法。"], ["06 · Action / Todo", "本周只读 → 计划 → 小改动 → 检查 → 人工 review。"]], "footer": "先由人确认 Brief，再允许 Agent 执行已经划定的任务。"}} />;
}
