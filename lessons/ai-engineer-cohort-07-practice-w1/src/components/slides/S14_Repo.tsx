import LessonPage from '../LessonPage';

// Source and adaptation notes: PRD.md, page 14.
export default function S14_Repo() {
 return <LessonPage {...{"tag": "GROUND · LIVE DEMO", "title": "让 Agent 先读懂 starter", "subtitle": "切到老师实际提供的项目；先只读，不写代码。", "mode": "rows", "blocks": [["入口与启动", "从 README / manifests 核实入口与运行方式，不猜命令。"], ["数据与契约", "找到 schema、接口、权限与状态；只记真实文件路径。"], ["测试与范围", "定位相关测试和拟修改文件；区分已有问题与本次问题。"], ["未知项", "把无法确认的内容列出来，让 owner 补齐。"]], "footer": "课堂示范使用老师已核查的 repo；只按真实路径与运行结果填写 Repo Map。"}} />;
}
