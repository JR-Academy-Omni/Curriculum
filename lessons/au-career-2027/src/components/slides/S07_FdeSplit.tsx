import { DeckFrame, Table } from '../kit';
import { NoteLine, Source } from '../career';
import { EmployerLinks } from '../EmployerLinks';
import { sources } from '../../data/sources';

export default function S07_FdeSplit() {
	return <DeckFrame tag="方向 2 · 匠人 FDE" title="FDE Business 做中小企业，Tech 做中大企业" titleSize={51} subtitle="看客户要交付什么。中小企业先把一条高频流程跑顺，中大型企业要把 AI 接进已有系统并长期运行。">
		<Table head={['', 'FDE Business · 中小企业', 'FDE Tech · 中大型企业']} widths=".53fr 1.55fr 1.55fr" size={22} rows={[
			['从哪起步', '毕业生可以从课题、实习或兼职找流程做作品。在职者把已有行业经验带进客户项目。', '带着 AI Engineer 能力，跟业务、IT 和安全团队确认目标、现有系统与约束。'],
			['具体做什么', '用现有工具搭工作流，核对结果和异常，用试点结果和负责人谈投入。', '按 Founder + AI Engineer 训练，从客户调查、方案和预算走到生产代码、集成和上线。'],
			['交付什么', '可跑的工作流、人工复核规则、试点效果和一线交接。', '可上线的系统、权限和异常处理、评估结果、回退与运行手册。'],
		]} />
		<NoteLine><b>澳洲招聘</b>　Endla 看小团队怎么交付。Google Cloud、OpenAI 和 Accenture 看中大型企业客户的生产交付。</NoteLine>
		<EmployerLinks jobs={[
			{ company: 'Endla', logo: 'endla', role: 'Forward Deployed Engineer', location: '布里斯班', href: sources.endla },
			{ company: 'Google Cloud', logo: 'google', role: 'Staff FDE · Google Cloud', location: '悉尼／墨尔本', href: sources.googleCloudFde },
			{ company: 'OpenAI', logo: 'openai', role: 'Forward Deployed Engineer', location: '悉尼', href: sources.fde },
			{ company: 'Accenture', logo: 'accenture', role: 'Forward Deployed AI Engineer', location: '澳洲', href: sources.fdeAccenture },
		]} />
		<Source links={[[ '匠人 FDE Business', sources.jrFdeBusiness ], [ '匠人 FDE Tech', sources.jrFdeTech ]]} />
	</DeckFrame>;
}
