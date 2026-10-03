import LessonPage from '../LessonPage';

// Source and adaptation notes: PRD.md, page 3.
export default function S03_Weeks() {
 return <LessonPage {...{"tag": "FRAME · 实践定位", "title": "W1 → W2 → W3：每周接着往下做", "subtitle": "沿用第七期公开课的前三周路线。", "mode": "timeline", "blocks": [["W1 · AI Coding + ADLC", "产品范围、workflow、验收、rules、任务拆分；完成一次受控小改动。"], ["W2 · Product UI", "以 Brief 为依据完成 Design System 与 UI，覆盖 loading / empty / error / permission。"], ["W3 · Runnable MVP", "串起操作、API、数据、权限与审计；完成不依赖产品 AI 的业务主流程。"]], "footer": "W1 不要求完整 vertical slice；W4 才第一次接入产品 AI。"}} />;
}
