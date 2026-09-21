import JdRequirementsPage from '../JdRequirementsPage';
import { FDE_REQS, FDE_TREND } from '../../data/auJdSkills';

// 第 8 阶段的 FDE，落到 JD 上是什么要求
export default function S11_JdFde() {
	return <JdRequirementsPage kicker="Forward Deployed Engineer" title="FDE：同一套底子，更全栈、更贴客户" reqs={FDE_REQS} footer={FDE_TREND} />;
}
