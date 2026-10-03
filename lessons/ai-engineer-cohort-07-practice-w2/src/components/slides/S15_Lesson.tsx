import LessonPage from '../LessonPage';
export default function S15_Lesson(){return <LessonPage {...{"tag": "W2 · 状态图", "title": "先讲清主路径，再画分支", "subtitle": "这是 UI 评审用的状态候选，转换权限需确认。", "mode": "flow", "blocks": [["Draft", "准备内容"], ["Review", "等待复核"], ["Confirmed", "明确确认"]], "footer": "失败与升级分支必须保留恢复入口；状态名称不能代替权限定义。"}}/>;}
