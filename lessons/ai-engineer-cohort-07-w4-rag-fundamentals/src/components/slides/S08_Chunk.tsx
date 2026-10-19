import { colors } from '../ui';
import { PartFrame, Rows, Punch, Mark } from './_shared';

// 离线：chunk 大小
export default function S08_Chunk() {
	return (
		<PartFrame part="offline" title="切多大？没有通用最佳值">
			<Rows color={colors.green} fontSize={28} pad={12} gap={11} items={[
				{ say: '用 token 量，不用字数', term: 'Token', note: '上节课讲过' },
				{ say: '不能超过 embedding 模型的输入上限', term: 'Input limit' },
				{ say: '切太大：一块里混了好几件事，哪件都不够像', term: 'Too large' },
				{ say: '切太小：一句话离开上下文，看不懂', term: 'Too small' },
			]} />
			<Punch delay={0.8} size={30} mt={26}>拿你自己的文档和问题去测，<Mark>不要抄一个数字</Mark>。</Punch>
		</PartFrame>
	);
}
