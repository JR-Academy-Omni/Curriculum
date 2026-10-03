import LessonPage from '../LessonPage';

// Source and adaptation notes: PRD.md, page 16.
export default function S16_GroundExercise() {
 return <LessonPage {...{"tag": "GROUND · WORKSHOP / 10 MIN", "title": "Repo Map + 三条停止条件", "subtitle": "打开工作单第 3 部分，用真实文件证明你的判断。", "mode": "exercise", "blocks": [["Repo Map", "入口、启动、数据/schema、本次修改位置、相关测试。"], ["每项有依据", "写路径、来源与确认方式；不存在的文件不能补一个看似合理的名字。"], ["三条停止条件", "业务事实不清 / 超过允许范围 / 无法确认启动或测试前置。"], ["交付", "Repo Map + Agent Rules；把未确认项交给 owner。"]], "footer": "工作单和规则是你的工作成果；不要求今天搭建大型文档目录。"}} />;
}
