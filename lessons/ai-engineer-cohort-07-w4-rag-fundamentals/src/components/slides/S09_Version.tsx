import { colors } from '../ui';
import { PartFrame, Rows, Punch, Mark, muted } from './_shared';

// 离线：Ingestion contract 只讲 version
export default function S09_Version() {
	return (
		<PartFrame part="offline" title="索引有版本，不是建一次就完" subtitle="探视政策从 v2 改成 v3 之后，索引里要发生三件事。">
			<Rows color={colors.green} fontSize={28} pad={12} gap={11} items={[
				{ say: '每一块都记着：来自哪份文档的哪一版', term: 'version' },
				{ say: 'v3 进来，v2 的块要撤掉', term: 'Re-index' },
				{ say: '新索引出问题，能退回上一版', term: 'Rollback' },
			]} />
			<Punch delay={0.8} size={30} mt={26}>Ingestion contract 今天只讲一个字段：<Mark>version</Mark>。</Punch>
			<Punch delay={1} size={22} mt={8}><span style={{ color: muted }}>其余字段（source、hash、parser、chunker……）见讲义。</span></Punch>
		</PartFrame>
	);
}
