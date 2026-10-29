import { colors } from '../ui';
import { PartFrame, Flow, Punch, Mark } from './_shared';

// 离线：六步流水线
export default function S07_Pipeline() {
	return (
		<PartFrame part="offline" title="离线：资料先变成索引">
			<Flow color={colors.green} minHeight={290} zhSize={27} steps={[
				{ en: 'manifest', zh: '列清单', d: '有哪些文档，各是哪一版' },
				{ en: 'parse', zh: '读成文字', d: 'PDF、网页变成纯文本' },
				{ en: 'chunk', zh: '切小块', d: '一块讲一件事' },
				{ en: 'metadata', zh: '贴标签', d: '来源、版本、谁能看、生效日期' },
				{ en: 'embed', zh: '变成向量', d: '每块变成一串数字' },
				{ en: 'index', zh: '存进索引', d: '之后能按相似度查' },
			]} />
			<Punch delay={1} size={30} mt={30}>这条线 <Mark>提前跑好</Mark>，不在用户提问时跑。</Punch>
		</PartFrame>
	);
}
