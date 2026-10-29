import { colors } from '../ui';
import { PartFrame, Rows, Punch, Mark } from './_shared';

// 五种机制各管什么
export default function S19_Mechanisms() {
	return (
		<PartFrame part="lifecycle" title="五样东西，各管一件事">
			<Rows color={colors.yellow} fontSize={28} pad={11} gap={10} items={[
				{ say: '这一次调用里放的全部内容', term: 'Context Window' },
				{ say: '按问题，从资料库里找相关片段', term: 'RAG' },
				{ say: '跨会话留下来的信息', term: 'Memory' },
				{ say: '工具刚查回来的结果', term: 'Tool Results' },
				{ say: '重复的前缀不用重算', term: 'Cache', note: '上节课讲过' },
			]} />
			<Punch delay={0.8} size={28} mt={18}>它们不能互相顶替：<Mark>Cache 省的是计算，不是记住了内容</Mark>。</Punch>
		</PartFrame>
	);
}
