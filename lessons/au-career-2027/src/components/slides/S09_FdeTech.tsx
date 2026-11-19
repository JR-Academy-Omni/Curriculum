import { RolePage } from '../career';
import { sources } from '../../data/sources';

export default function S09_FdeTech() {
	return <RolePage tag="FDE TECH · 中大型企业" title="FDE Tech · 把 AI 带进客户的生产系统" subtitle="Founder + AI Engineer。把客户高层的业务目标变成可验收的工程交付。"
		job={[
			<>和客户高层（如 CTO、CIO）定业务目标、预算和扩大试点的依据。</>,
			<>和 Staff Engineer 定试点范围与验收。做旧代码迁移 Agent，测代码审查耗时和返工，再决定如何投产。</>,
			<>用试点结果和高层决定是否推广，把反复出现的失败做成评测，反馈给产品和模型团队。</>,
		]}
		skills="能向高层讲清投入和风险，和工程团队定架构、写代码。"
		evidence="讲一个你主导的项目。高层为什么批准？工程团队怎么验收？上线后改善了多少？"
		pay="A$180k–400k" payLabel="资深岗位 · 年薪目标 · AUD" payScope="悉尼资深底薪样本 A$180k–240k。冲高薪时核对具体岗位的底薪、奖金和股票。"
		signal="Google Cloud Staff：8 年云计算或面客技术经验，做过生产级 Agent 或 LLM。OpenAI 悉尼：5 年以上工程或技术部署经验，包含客户工作。"
		links={[[ 'Google Cloud 澳洲 Staff FDE', sources.googleCloudFde ], [ 'OpenAI 悉尼 FDE JD', sources.fde ], [ 'Accenture Forward Deployed AI Engineer', sources.fdeAccenture ], [ 'Re:Sourced 薪资指南', sources.engineerPay ], [ '匠人 FDE Tech 路线', sources.jrFdeTech ]]} />;
}
