import JdRequirementsPage from '../JdRequirementsPage';
import { AI_ENGINEER_REQS, AI_ENGINEER_TREND } from '../../data/auJdSkills';

// 承接时光机：回到现在，澳洲 AI Engineer 的 JD 在要什么
export default function S10_JdAiEngineer() {
	return <JdRequirementsPage kicker="AI Engineer" title="所以，澳洲 JD 现在最关注什么？" reqs={AI_ENGINEER_REQS} footer={AI_ENGINEER_TREND} />;
}
