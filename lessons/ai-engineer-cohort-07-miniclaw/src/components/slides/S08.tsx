import WeeklyScheduleSlide, { type WeekSchedule } from '../WeeklyScheduleSlide';
import { colors } from '../deck';

const weeks: WeekSchedule[] = [
	{week:'W4',theoryTitle:'RAG Fundamentals',theoryBody:'把 embedding、chunk、metadata、retrieval、grounding、citation 和 no-answer 串成一条完整链路，先知道每个环节会怎么错。',practiceTitle:'CareKind Voice AI',practiceBody:'接入录音与 Speech-to-Text；护士可以编辑转写内容，只有人工确认后的 transcript 才进入后续系统，并保留 manual fallback。',delivery:'录音与 STT adapter、editable transcript、human confirmation、权限与失败测试。',color:colors.orange},
	{week:'W5',theoryTitle:'RAG Quality、Testing 与 Improvement',theoryBody:'建立 failure taxonomy、golden cases、RAGAS 指标和人工抽检方法；每次只改变一个变量，避免“感觉回答变好了”。',practiceTitle:'AI-Native Engineering Workspace',practiceBody:'把 feature spec 转成 work plan，用 docs-as-code Wiki、C4/Mermaid、ADR、Hooks 和 Project Skills 持续维护项目。',delivery:'Feature spec、work plan、living docs、architecture diagrams、docs-drift gate、项目 Skills。',color:colors.purple},
];

export default function S08(){return <WeeklyScheduleSlide tag="W4–W5 · FIRST AI CAPABILITY" title="第一次接入 AI，但先守住可信输入和工程上下文" subtitle="Voice 结果必须经过人确认；项目文档、架构和工作计划也要跟着代码一起更新。" weeks={weeks} accent={colors.orange}/>;}
