import { useEffect, useState } from 'react';
import { Page, Head, body, c, f, grid } from '../kit';

const roles = [['AI Engineer', '把大模型接进产品：RAG、Agent 和工具调用'], ['前线部署工程师（FDE）', '把 AI 方案部署到对方的流程和系统里'], ['AI 产品经理', '定需求和优先级，带团队按期交付']];
const flow = ['选一个角色', '每日 Standup', '每周 Sprint 回顾', '导师 1v1 复盘', '上线交付'];
const columns = ['待办', '进行中', '完成', 'PROD 上线'];
const tasks = ['拆需求', '接口联调', 'Code Review', 'UAT'];
// 每一步各任务所在的列：任务依次从左流到「上线」
const frames = [[0, 0, 0, 0], [1, 0, 0, 0], [2, 1, 0, 0], [3, 2, 1, 0], [3, 3, 2, 1], [3, 3, 3, 2], [3, 3, 3, 3]];
const COL = 352, GAP = 0;

export default function SprintBoard() {
	const [tick, setTick] = useState(3);
	useEffect(() => {
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
		setTick(0);
		const id = window.setInterval(() => setTick((t) => t + 1), 1500);
		return () => window.clearInterval(id);
	}, []);
	const state = frames[tick % frames.length];
	const step = Math.min(flow.length - 1, tick % frames.length);
	return (
		<Page night>
			<div style={{ ...body, paddingTop: 52, gap: 24 }}>
				<Head night tone="mint" eyebrow="P3 职业孵化器 · 3 个月团队项目 · 导师带队" title="像剧本杀一样，在真实项目里当一回目标岗位" lead="跟组员一起做合作企业的商业项目，按 Sprint 推进到上线。在校生和刚入行的人都可以参加。" />
				<div style={{ ...grid(3), perspective: 1400 }}>
					{roles.map(([t, d], i) => {
						const on = tick % 3 === i;
						return <div key={t} className="flip"><div style={{ background: c(on ? 'night-line' : 'night-2'), border: `2px solid ${c(on ? 'mint' : 'night-line')}`, borderRadius: c('r-card'), padding: '20px 28px', transform: on ? 'translateY(-8px)' : 'none', boxShadow: on ? '0 22px 40px -16px rgba(61,217,169,0.55)' : 'none', transition: 'all 0.5s var(--jc-ease)' }}><div style={{ fontFamily: f.h, fontWeight: 700, fontSize: 25 }}>{t}</div><div style={{ fontSize: 18, lineHeight: 1.6, color: c('on-night-muted'), marginTop: 6 }}>{d}</div></div></div>;
					})}
				</div>
				<div style={{ perspective: 1600 }}>
					<div style={{ position: 'relative', height: 268, transform: 'rotateX(13deg)', transformOrigin: '50% 100%' }}>
						{columns.map((name, i) => <div key={name} style={{ position: 'absolute', left: i * (COL + GAP), top: 0, width: COL - 16, height: '100%', borderRadius: c('r-app'), background: i === 3 ? 'rgba(61,217,169,0.13)' : c('night-2'), border: `1px solid ${c(i === 3 ? 'mint' : 'night-line')}`, padding: '12px 18px', fontSize: 17, fontWeight: 700, color: c(i === 3 ? 'mint' : 'on-night-muted') }}>{name}</div>)}
						{tasks.map((t, i) => (
							<div key={t} style={{ position: 'absolute', left: 16, top: 52 + i * 52, width: COL - 48, height: 42, borderRadius: 12, background: c('canvas-pure'), color: c('ink'), display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 18px', fontWeight: 700, fontSize: 18, boxShadow: '0 14px 22px -10px rgba(0,0,0,0.7)', transform: `translateX(${state[i] * (COL + GAP)}px)`, transition: 'transform 0.8s var(--jc-ease)' }}>
								<span>{t}</span><span aria-hidden style={{ color: c(state[i] >= 2 ? 'mint-deep' : 'steel') }}>{state[i] >= 2 ? '✓' : '●'}</span>
							</div>
						))}
					</div>
				</div>
				<div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
					<div style={{ position: 'absolute', left: 40, right: 40, height: 4, background: c('night-line') }}><div style={{ height: '100%', width: `${(step / (flow.length - 1)) * 100}%`, background: c('mint'), transition: 'width 0.8s var(--jc-ease)' }} /></div>
					{flow.map((s, i) => <span key={s} style={{ position: 'relative', padding: '11px 24px', borderRadius: 999, background: c(i <= step ? 'mint' : 'canvas-pure'), color: c('ink'), fontWeight: 700, fontSize: 19, transform: i === step ? 'scale(1.1)' : 'none', transition: 'all 0.4s var(--jc-ease)' }}>{s}</span>)}
				</div>
				<p style={{ fontSize: 22, fontWeight: 700 }}>做完拿项目完成证书，这段经历能直接写进简历。</p>
			</div>
		</Page>
	);
}
