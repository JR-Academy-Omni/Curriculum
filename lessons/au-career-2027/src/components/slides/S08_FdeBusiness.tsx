import { RolePage } from '../career';
import { sources } from '../../data/sources';

export default function S08_FdeBusiness() {
	return <RolePage tag="FDE BUSINESS · 中小企业" title="FDE Business · 给中小企业做 AI 落地" subtitle="适合毕业生找第一份相关工作，也适合 BA、运营、咨询和实施转岗。"
		job={[
			<>跟销售主管一起查漏单：客户从网站和邮箱重复询价，销售各记一份。先看哪些询盘一直没人回。</>,
			<>把两处询盘接进同一个跟进队列。重复的合并，缺信息的起草补问邮件，销售确认后发出。</>,
			<>让销售拿上周的询盘试跑，查漏掉了谁、有没有重复联系，再和主管决定值不值得推广。</>,
		]}
		skills="能从客户记录里找出问题，亲手搭出工作流，再用销售听得懂的话解释哪一步仍要人判断。"
		evidence="毕业生可以演示大学、实习或个人项目。选一次自己做的改动，说明为什么做、怎么知道它有用。"
		pay="A$100k–120k" payLabel="悉尼公开年薪 · AUD" payScope="ADAPTOVATE 的 Graduate／Associate Forward Deployed AI Consultant 合并报价。"
		signal="ADAPTOVATE 悉尼 Graduate 通道不要求咨询经验。入职后要和客户一起分析业务、搭原型、找用户测试，再根据反馈改。"
		links={[[ 'ADAPTOVATE 悉尼 Graduate／Associate JD', sources.businessGraduate ], [ 'Appian 2027 Graduate JD', sources.businessGraduateAppian ], [ '匠人 FDE Business 路线', sources.jrFdeBusiness ]]} />;
}
