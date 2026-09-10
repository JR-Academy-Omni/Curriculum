import WeeklyScheduleSlide, { type WeekSchedule } from '../WeeklyScheduleSlide';
import { colors } from '../deck';

const weeks: WeekSchedule[] = [
	{week:'W6',theoryTitle:'Tool Calling、MCP 与 CLI Integration',theoryBody:'学习 tool schema、MCP server/client、stdio 进程生命周期、CLI、权限边界和真实排错方法。',practiceTitle:'Build the Evaluation Pipeline First',practiceBody:'在写 RAG 前先冻结 golden dataset、candidate interface、deterministic checks、RAGAS、人工 rubric、baseline 和通过阈值。',delivery:'Versioned eval dataset、可重复运行的 eval command、baseline report、W7 implementation contract。',color:colors.blue},
	{week:'W7',theoryTitle:'Agents 基础 + ReAct Framework',theoryBody:'理解 Action/Observation loop，并学习 tools、MCP、session/resume、permissions、hooks、streaming、interrupt 和 human approval。',practiceTitle:'Build and Prove Policy RAG from Scratch',practiceBody:'不用 RAG framework，亲手实现 chunk、metadata、embedding、vector search、grounded draft、citations 和 no-answer，再与 W6 baseline 比较。',delivery:'Policy corpus、retrieval pipeline、带引用回答、no-answer、同一套 eval 的对比结果。',color:colors.green},
];

export default function S09(){return <WeeklyScheduleSlide tag="W6–W7 · EVALUATION-DRIVEN RAG" title="先写评估，再从零搭建并证明 RAG" subtitle="学生不靠主观挑几个漂亮回答，而是用同一套测试集比较 baseline 与最终实现。" weeks={weeks} accent={colors.blue}/>;}
