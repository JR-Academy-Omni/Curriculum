import LessonPage from '../LessonPage';
export default function S12_Lesson(){return <LessonPage {...{"tag": "W3 · 角色权限", "title": "按钮隐藏不足以保护业务规则", "subtitle": "服务端必须判断角色与当前状态。", "mode": "grid", "blocks": [["UI", "只展示当前角色可用动作，并说明不可操作原因。"], ["API", "对每次动作验证身份、权限和状态前置条件。"], ["拒绝路径", "无权限请求不能写入确认结果。"], ["验证", "换角色、直接请求、过期状态均需检查。"]], "footer": "具体角色名称与权限矩阵来自实际契约；不在课件中猜测。"}}/>;}
