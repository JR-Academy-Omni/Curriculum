import LessonPage from '../LessonPage';

// Source and adaptation notes: PRD.md, page 18.
export default function S18_Prompts() {
 return <LessonPage {...{"tag": "BUILD · 三段任务说明", "title": "三段 Prompt：读、计划、执行", "subtitle": "每段有明确产出与停止点；第二段完成后由人确认计划。", "mode": "rows", "blocks": [["① 先读", "只读规则、README、入口、schema 和测试。输出真实路径的 Repo Map 与未知项；不改文件。"], ["② 再计划", "提出最小改动、允许文件、保持的契约、验收、测试和停止条件；等人确认。"], ["③ 后执行", "只执行确认的小改动。输出 diff、实际检查结果与未验证项；不自行部署或写回真实系统。"]], "footer": "AI 输出可以直接复制到工作单，但每条事实都要回到 repo 核实。"}} />;
}
