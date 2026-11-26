import { Page, Head, asset, body, c, f } from '../kit';

const points = [
	['AI 导师带着做', '右侧 AI 导师告诉你这一步做什么、怎么检查'],
	['真项目里动手', '中间工作区连接你自己的 Claude Code 或 Codex'],
	['判断有依据', '材料在本机读取，AI 的每条提议附原文，你确认才保存'],
];

export default function ProductShot() {
	return (
		<Page night>
			<div style={{ ...body, display: 'grid', gridTemplateColumns: '520px 1fr', gap: 48 }}>
				<div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
					<Head night tone="sunshine" eyebrow="CareerOS Harness · 匠人自主研发" title={<>AI 带着你，<br />在真实项目里做</>} lead="不是看完一堆课就结束。你亲手做任务，AI 导师在旁边带。" />
					<ul style={{ listStyle: 'none', display: 'grid', gap: 14, marginTop: 34 }}>
						{points.map(([t, d]) => <li key={t} className="rise" style={{ background: c('night-2'), border: `1px solid ${c('night-line')}`, borderRadius: 20, padding: '18px 24px' }}><div style={{ fontFamily: f.h, fontWeight: 700, fontSize: 25 }}>{t}</div><div style={{ fontSize: 17, lineHeight: 1.6, color: c('on-night-muted'), marginTop: 4 }}>{d}</div></li>)}
					</ul>
				</div>
				<div style={{ alignSelf: 'center' }}>
					<img className="shot" src={asset('site/careeros-act.webp')} alt="CareerOS Harness 行动阶段界面：左侧职业档案，中间做项目任务，右侧 AI 导师提示下一步" style={{ width: '100%', display: 'block', borderRadius: c('r-tile'), border: `1px solid ${c('night-line')}` }} />
					<p style={{ fontSize: 18, color: c('on-night-muted'), marginTop: 16, textAlign: 'center' }}>CareerOS Harness 行动阶段：中间做项目任务，右侧 AI 导师提示下一步</p>
				</div>
			</div>
		</Page>
	);
}
