import LessonPage from '../LessonPage';

// Source and adaptation notes: PRD.md, page 13.
export default function S13_Context() {
 return <LessonPage {...{"tag": "GROUND · 开工基建", "title": "PRD 之后，还有 Rules、Docs、Repo", "subtitle": "复用大师课第二课：把“要做什么”和“系统现在是什么”接上。", "mode": "timeline", "blocks": [["PRD · 任务依据", "目标、范围、验收、owner；决定哪些工作被授权。"], ["Rules · 执行边界", "数据、权限、URL/API、改动范围和停止条件；决定怎样做。"], ["Docs / Repo · 当前事实", "README、入口、schema、测试、启动方式；决定在什么基础上做。"]], "footer": "三者不一致，先核查并对齐；不要用 Prompt 掩盖资料冲突。"}} />;
}
