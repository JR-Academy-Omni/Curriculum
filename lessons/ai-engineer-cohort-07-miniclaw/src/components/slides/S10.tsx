import WeeklyScheduleSlide, { type WeekSchedule } from '../WeeklyScheduleSlide';
import { colors } from '../deck';

const weeks: WeekSchedule[] = [
	{week:'W8',theoryTitle:'Multi-Agent Architectures',theoryBody:'判断任务该用 deterministic workflow、single agent 还是 multi-agent；理解 coordinator、handoff、termination、成本和人工升级。',practiceTitle:'Data Layer + MCP + CLI',practiceBody:'先抽出 Repository、Domain Service、权限和审计边界，再用 thin adapter 暴露 MCP tools，并用 CLI 直接验证。',delivery:'Data inventory、contracts、service tests、boundary diagram、4 个 tools、permission matrix。',color:colors.blue},
	{week:'W9',theoryTitle:'Agent Memory & State Management',theoryBody:'区分 task、session 和 long-term memory，明确 read/write policy、scope、lifecycle、provenance、冲突和 poisoning。',practiceTitle:'Build a Bounded CareKind Agent',practiceBody:'使用 W8 tools 实现可见的 state/action/observation loop，加入 allowlist、步数与时间预算、停止条件、retry、fallback 和人工审批。',delivery:'Agent schema、受控 tool loop、human-review gate、trace、termination 与失败测试。',color:colors.red},
	{week:'W10',theoryTitle:'Harness Engineering for Production Agents',theoryBody:'学习 runtime、context lifecycle、hooks、permissions、budgets、checkpoint、retry/replay、idempotency、human approval 和 trace。',practiceTitle:'Safe Long-Term Memory',practiceBody:'只写入人工确认事实；按 resident、user、team、role 隔离，并实现来源、TTL、冲突、更正、删除和投毒防护。',delivery:'Memory contract、write gate、scoped retrieval、audit、跨 session recall、poisoning tests。',color:colors.purple},
];

export default function S10(){return <WeeklyScheduleSlide tag="W8–W10 · TOOLS, AGENT & MEMORY" title="先把工具边界做清楚，再让 Agent 执行和记忆" subtitle="三周连续使用同一套 CareKind 数据与工具：能力越来越强，权限、状态和失败处理也同步收紧。" weeks={weeks} accent={colors.purple}/>;}
