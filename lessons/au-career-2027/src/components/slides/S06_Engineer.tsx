import { RolePage } from '../career';
import { EmployerLinks } from '../EmployerLinks';
import { sources } from '../../data/sources';

export default function S06_Engineer() {
	return <RolePage tag="方向 1 · 工程" title="AI Engineer" subtitle="把模型、工具和业务系统接起来，让流程可以稳定运行。"
		job={[
			<>把来电者的保号需求转成系统能处理的请求。</>,
			<>通过 API 查保号政策和费用，经客户确认后提交。</>,
			<>测试政策查不到、重复提交和接口超时，必要时转人工。</>,
		]}
		skills="Python 或 TypeScript、API、数据与部署；能做模型评估、日志和故障处理。"
		evidence="拿出能跑的流程、测试用例和失败处理记录，说清自己负责的部分。"
		pay="A$150k–400k" payScope="A$150k–195k 是全国底薪参考。悉尼 Staff AI Engineer 的公开职位报价为 A$250k–400k。"
		signal="2025 年 10 月 320 条 → 2026 年 10 月 604 条，同比 +88.8%。"
		employer={<EmployerLinks jobs={[{ company: 'Accenture', logo: 'accenture', role: 'Senior AI and Agentic Developer', location: '澳洲', href: sources.ai }]} />}
		links={[[ 'Lightcast 招聘广告', sources.roles ], [ 'Robert Half 全国底薪', sources.aiRh ], [ 'Dreamerlabs 悉尼 Staff 职位报价', sources.aiStaff ]]} />;
}
