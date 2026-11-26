import { useEffect, useState } from 'react';
import { Page, asset, c, f } from '../kit';

// 内容取自 jracademy.ai/careeros
const steps = [
	{ zh: '评估', en: 'Assess', ai: 'AI 读你的简历和想投的岗位，整理现状、目标和差距，每条都附原文', you: '你确认后才写进职业档案', out: '差距清单' },
	{ zh: '规划', en: 'Plan', ai: '按差距先后和你每周能用的时间排计划，推荐课程、认证或项目', you: '看清每周要做什么', out: '每周计划' },
	{ zh: '行动', en: 'Act', ai: '照本周计划动手做，读这周的章节，AI 在旁边带着学', you: '做完一项勾一项，自动接下一周', out: '每周交付物' },
	{ zh: '证明', en: 'Prove', ai: '在真实项目里做任务，AI 导师在右侧提示下一步', you: '代码改动、测试结果和讲解固定成版本', out: '作品版本' },
	{ zh: '连接', en: 'Connect', ai: '对照目标岗位准备投递材料', you: '拿作品让雇主核对', out: '投递材料' },
	{ zh: '成长', en: 'Grow', ai: '记下面试结果和反馈，带着新信息回到评估或规划', you: '开始下一轮', out: '面试反馈' },
];
// [名称, 起始列, 跨几列, 颜色]
const zones: [string, number, number, string][] = [['网站上免费做', 1, 2, 'mint'], ['CareerOS Harness', 3, 4, 'sunshine']];

export default function WorkflowLoop() {
	const [active, setActive] = useState(0);
	const [paused, setPaused] = useState(false);
	useEffect(() => {
		if (paused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
		const id = window.setInterval(() => setActive((a) => (a + 1) % steps.length), 2600);
		return () => window.clearInterval(id);
	}, [paused]);
	const cols = { display: 'grid', gridTemplateColumns: 'repeat(6, minmax(0, 1fr))', columnGap: 30 } as const;
	return (
		<Page night>
			<div style={{ padding: '48px 80px 0' }}>
				<div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
					<img src={asset('site/careeros-icon.webp')} alt="" style={{ width: 44, height: 44, borderRadius: 10 }} />
					<span style={{ fontSize: 22, fontWeight: 700, color: c('sunshine') }}>CareerOS · 匠人自主研发</span>
				</div>
				<h1 style={{ fontFamily: f.h, fontWeight: 700, fontSize: 56, lineHeight: 1.25, marginTop: 12 }}>用 AI 来教：一套带你走完全程的工作流</h1>
				<p style={{ fontSize: 22, color: c('on-night-muted'), marginTop: 6 }}>从看清差距到拿出作品，每一步 AI 都在旁边，做完都留下看得见的东西。</p>

				<div style={{ ...cols, marginTop: 34 }}>
					{zones.map(([name, start, span, tone]) => <div key={name} style={{ gridColumn: `${start} / span ${span}`, gridRow: 1, borderTop: `3px solid ${c(tone)}`, paddingTop: 8, textAlign: 'center', fontSize: 18, fontWeight: 700, color: c(tone) }}>{name}</div>)}
				</div>

				<ol style={{ ...cols, listStyle: 'none', marginTop: 18, perspective: 1400 }} onMouseLeave={() => setPaused(false)}>
					{steps.map((s, i) => {
						const on = i === active;
						return (
							<li key={s.en} className="flip" style={{ position: 'relative' }}>
								<div onMouseEnter={() => { setPaused(true); setActive(i); }} style={{ height: 392, display: 'flex', flexDirection: 'column', padding: '20px 18px', borderRadius: c('r-app'), background: on ? c('canvas-pure') : c('night-2'), color: on ? c('ink') : c('on-night'), border: `2px solid ${on ? c('sunshine') : c('night-line')}`, transform: on ? 'translateY(-14px) translateZ(46px)' : 'rotateY(-5deg)', boxShadow: on ? '0 30px 56px -14px rgba(255, 212, 59, 0.45)' : '0 18px 30px -16px rgba(0, 0, 0, 0.7)', transition: 'all 0.5s var(--jc-ease)' }}>
									<div style={{ width: 40, height: 40, borderRadius: '50%', display: 'grid', placeItems: 'center', fontWeight: 700, fontSize: 20, background: on ? c('sunshine') : c('night-line'), color: on ? c('ink') : c('on-night') }}>{i + 1}</div>
									<div style={{ fontFamily: f.h, fontWeight: 700, fontSize: 32, marginTop: 12 }}>{s.zh} <span style={{ fontSize: 15, opacity: 0.65 }}>{s.en}</span></div>
									<p style={{ fontSize: 18, lineHeight: 1.65, marginTop: 10 }}>{s.ai}</p>
									<p style={{ fontSize: 15, lineHeight: 1.6, marginTop: 10, color: on ? c('slate') : c('on-night-muted') }}>{s.you}</p>
									<div style={{ marginTop: 'auto', paddingTop: 12, borderTop: `1px solid ${on ? c('hairline') : c('night-line')}` }}><div style={{ fontSize: 13, opacity: 0.65 }}>做完拿到</div><div style={{ fontSize: 21, fontWeight: 700 }}>{s.out}</div></div>
								</div>
								{i < steps.length - 1 && <span aria-hidden style={{ position: 'absolute', right: -26, top: 180, fontSize: 24, fontWeight: 700, color: on ? c('sunshine') : c('on-night-muted'), transition: 'color 0.4s' }}>→</span>}
							</li>
						);
					})}
				</ol>

				{/* 成长回到评估：全图唯一的流动虚线 */}
				<svg viewBox="0 0 1440 86" style={{ width: '100%', height: 86, display: 'block', marginTop: 4 }}>
					<path d="M1325 4 V34 Q1325 52 1305 52 H135 Q115 52 115 34 V12" fill="none" stroke="#ffd43b" strokeWidth={2.5} strokeDasharray="9 8"><animate attributeName="stroke-dashoffset" from="34" to="0" dur="1.2s" repeatCount="indefinite" /></path>
					<path d="M106 18 L115 4 L124 18" fill="none" stroke="#ffd43b" strokeWidth={2.5} />
					<rect x="535" y="36" width="370" height="34" rx="17" fill="#ffd43b" />
					<text x="720" y="59" textAnchor="middle" fontSize="18" fontWeight="700" fill="#1f1b2d">带着反馈回到评估，再来一轮</text>
				</svg>
			</div>
		</Page>
	);
}
