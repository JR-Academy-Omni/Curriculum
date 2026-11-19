import claudePath from '../../assets/anthropic-fde-path.png?inline';
import openAiCatalog from '../../assets/openai-partneru-catalog.png?inline';
import { PartnerMark } from '../PartnerMarks';
import { DeckFrame, Panel } from '../kit';
import { columns } from '../career';

export default function PartnerLearning() {
	return <DeckFrame tag="技术合作伙伴" title="匠人提供的 Claude 与 OpenAI 学习资源" titleSize={52}>
		<div style={columns}>
			<Panel style={{ padding: 16, minWidth: 0 }}>
				<div style={{ display: 'flex', gap: 15, alignItems: 'center', marginBottom: 12 }}>
					<PartnerMark provider="claude" height={78} />
					<h2 style={{ fontSize: 28 }}>Claude FDE 学习路径</h2>
				</div>
				<img src={claudePath} alt="Anthropic 的 Claude FDE 学习路径。练习为客户定义试点基线、成功指标、首批交付范围和用户。" style={{ display: 'block', width: '100%', height: 'auto', objectFit: 'contain' }} />
			</Panel>
			<Panel style={{ padding: 16, minWidth: 0 }}>
				<div style={{ display: 'flex', gap: 15, alignItems: 'center', marginBottom: 12 }}>
					<PartnerMark provider="openai" height={70} />
					<h2 style={{ fontSize: 28 }}>OpenAI PartnerU</h2>
				</div>
				<div role="img" aria-label="OpenAI PartnerU 课程截图：Foundations、ChatGPT、Codex、API、Cyber 和 Advanced Practitioners" style={{ display: 'grid', gap: 4, width: 465, maxWidth: '100%', margin: '0 auto' }}>
					{['left', 'right'].map(side => <div key={side} style={{ aspectRatio: '1118 / 555', overflow: 'hidden' }}>
						<img src={openAiCatalog} alt="" style={{ display: 'block', width: '200%', maxWidth: 'none', height: 'auto', marginLeft: side === 'right' ? '-100%' : 0 }} />
					</div>)}
				</div>
			</Panel>
		</div>
	</DeckFrame>;
}
