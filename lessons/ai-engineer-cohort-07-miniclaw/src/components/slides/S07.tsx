import WeeklyScheduleSlide, { type WeekSchedule } from '../WeeklyScheduleSlide';
import { colors } from '../deck';

const weeks: WeekSchedule[] = [
	{week:'W1',theoryTitle:'GenAI Foundations & AI Engineer Landscape',theoryBody:'讲清 AI、ML、LLM 与 Applied AI 系统的关系，以及 AI Engineer、FDE、ML Engineer、Software Engineer 的责任边界。',practiceTitle:'AI Coding + ADLC',practiceBody:'读懂 starter repo，把产品范围、workflow、acceptance criteria、开发规则和任务拆分写清楚，再做第一次受控改动。',delivery:'CareKind workflow map、PRD、验收标准、task board、AI coding rules。',color:colors.red},
	{week:'W2',theoryTitle:'Tokens、Context Windows 与 Cache',theoryBody:'理解 token budget、prefill/decode、KV cache、prompt cache、TTFT，以及 context 内容与缓存安全怎么管理。',practiceTitle:'CareKind Product UI & Design System',practiceBody:'从 Design Brief 生成并比较方案，建立 Design Tokens、完整信息架构和 loading、empty、error、permission 等真实状态。',delivery:'DESIGN_BRIEF.md、DESIGN.md、完整 UI、迭代记录、Product Design Review。',color:colors.blue},
	{week:'W3',theoryTitle:'Context Engineering Lifecycle',theoryBody:'学习 context inventory、source ownership、选择与排除、权限、新鲜度、assembly、validation、compaction 和 eviction。',practiceTitle:'Rapid CareKind MVP Build',practiceBody:'基于 starter 串起用户操作、API、数据库、权限和审计，先完成一个不依赖 AI 的可运行业务 Vertical Slice。',delivery:'Context Architecture Blueprint、可运行 MVP、E2E test、现场 demo。',color:colors.green},
];

export default function S07(){return <WeeklyScheduleSlide tag="W1–W3 · PRODUCT FOUNDATION" title="前三周先把产品和开发方法搭稳" subtitle="先定义问题和工程规则，再完成 UI 与非 AI MVP。Agent 不会建立在一个跑不通的产品上。" weeks={weeks} accent={colors.red}/>;}
