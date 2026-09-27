import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Slide, Title, CountUp, assetPath, colors, fonts, border, shadow, shadowSm } from '../ui';
import { STAGES, NOW_LABEL, quarter } from '../../data/auAiTimeline';
import { STAGE_SKILLS, type SkillStatus } from '../../data/auAiSkills';

type Mode = 'then' | 'now';

const STATUS_UI: Record<SkillStatus, { tag: string; bg: string }> = {
	keep: { tag: '仍需要', bg: colors.green },
	downgrade: { tag: '↓ 降级', bg: colors.yellow },
	obsolete: { tag: '✕ 划掉', bg: colors.red },
};

const ctrlBtn = (active: boolean) => ({
	fontFamily: fonts.mono, fontSize: 14, fontWeight: 700, padding: '7px 14px', cursor: 'pointer',
	border: `2px solid ${colors.black}`, background: active ? colors.yellow : colors.white, color: colors.black,
	boxShadow: active ? 'none' : shadowSm, transform: active ? 'translate(3px, 3px)' : 'none',
} as const);

// 技能时光机 —— 选一个阶段“穿越回去”，看当年要点什么技能；切到“回看”视角，看哪些被划掉、哪些降级、哪些仍是硬通货
// 操作：点击阶段 / 数字键 1–9 / [ ] 前后阶段 · T 切换视角 · P 自动穿越（← → 留给引擎翻页）
export default function S09_SkillTimeMachine() {
	const [stage, setStage] = useState(0);
	const [mode, setMode] = useState<Mode>('then');
	const [playing, setPlaying] = useState(false);

	const jump = (i: number) => { setPlaying(false); setStage(i); setMode('then'); };

	useEffect(() => {
		const onKey = (e: KeyboardEvent) => {
			if (e.key >= '1' && e.key <= '9') jump(Number(e.key) - 1);
			else if (e.key === '[') jump(Math.max(0, stage - 1));
			else if (e.key === ']') jump(Math.min(STAGES.length - 1, stage + 1));
			else if (e.key === 't' || e.key === 'T') { setPlaying(false); setMode((m) => (m === 'then' ? 'now' : 'then')); }
			else if (e.key === 'p' || e.key === 'P') setPlaying((p) => !p);
		};
		window.addEventListener('keydown', onKey);
		return () => window.removeEventListener('keydown', onKey);
	}, [stage]);

	// 自动穿越：当年视角 → 回看 → 下一阶段 …
	useEffect(() => {
		if (!playing) return;
		const t = setTimeout(() => {
			if (mode === 'then') setMode('now');
			else if (stage < STAGES.length - 1) { setStage(stage + 1); setMode('then'); }
			else setPlaying(false);
		}, mode === 'then' ? 1800 : 2600);
		return () => clearTimeout(t);
	}, [playing, mode, stage]);

	const s = STAGES[stage];
	const skills = STAGE_SKILLS[stage];
	const bag = STAGE_SKILLS.slice(0, stage + 1).flat();
	const roomy = skills.length <= 5; // 技能少的阶段放大字号、拉高行距，避免右侧大片留白
	const count = (st: SkillStatus) => bag.filter((k) => k.status === st).length;

	return (
		<Slide bg={colors.warmBg}>
			<div style={{ width: '100%', height: '100%', padding: '34px 64px 54px', display: 'flex', flexDirection: 'column', gap: 14 }}>
				{/* 标题 */}
				<motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}
					style={{ display: 'flex', alignItems: 'baseline', gap: 16, height: 50 }}>
					<Title size="38px">穿越回去，我该点什么技能？</Title>
					<span style={{ fontSize: 17, fontWeight: 500, color: colors.dark, opacity: 0.7 }}>选一个阶段穿越过去，再回到现在看看哪些还算数</span>
				</motion.div>

				{/* 九个阶段的时间轴 */}
				<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.15 }}
					style={{ display: 'grid', gridTemplateColumns: `repeat(${STAGES.length}, 1fr)`, gap: 8, height: 84 }}>
					{STAGES.map((st, i) => {
						const active = i === stage;
						return (
							<button key={st.name} onClick={() => jump(i)} style={{
								position: 'relative', textAlign: 'left', padding: '8px 10px', cursor: 'pointer', fontFamily: fonts.body, color: colors.black,
								border: `2px solid ${colors.black}`, background: i < stage ? colors.green : colors.white, opacity: i > stage ? 0.6 : 1,
							}}>
								{active && (
									<motion.div layoutId="stage-cursor" transition={{ type: 'spring', stiffness: 380, damping: 30 }}
										style={{ position: 'absolute', inset: -2, background: colors.yellow, border: `2px solid ${colors.black}`, boxShadow: shadowSm }} />
								)}
								<div style={{ position: 'relative' }}>
									<div style={{ fontFamily: fonts.mono, fontSize: 12, fontWeight: 700 }}>
										<span style={{ color: colors.red }}>{i + 1}</span> · {quarter(st.au[0])}
									</div>
									<div style={{ fontSize: 14, fontWeight: 700, lineHeight: 1.25, marginTop: 4 }}>{st.name}</div>
								</div>
							</button>
						);
					})}
				</motion.div>

				{/* 主体：左 = 你穿越到的阶段，右 = 技能表 */}
				<div style={{ flex: 1, minHeight: 0, display: 'flex', gap: 22 }}>
					<motion.div key={stage} initial={{ opacity: 0, x: -30, rotate: -1.5 }} animate={{ opacity: 1, x: 0, rotate: 0 }}
						transition={{ type: 'spring', stiffness: 220, damping: 20 }}
						style={{ width: 470, flex: 'none', background: colors.dark, color: colors.white, border, boxShadow: shadow, padding: '20px 24px', display: 'flex', flexDirection: 'column' }}>
						<div style={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 700, letterSpacing: 2, color: colors.yellow }}>你穿越到了 · 澳洲落地窗口</div>
						<div style={{ fontFamily: fonts.mono, fontSize: 40, fontWeight: 700, lineHeight: 1.15, margin: '6px 0 10px' }}>
							{quarter(s.au[0])}<span style={{ color: colors.yellow }}> → </span>{quarter(s.au[1])}
						</div>
						<div style={{ fontFamily: fonts.heading, fontSize: 27, fontWeight: 900, lineHeight: 1.2 }}>
							<span style={{ fontFamily: fonts.mono, color: colors.red }}>{stage + 1}.</span> {s.name}
						</div>
						<div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, margin: '14px 0 16px' }}>
							{s.logos.map((l) => (
								<span key={l.file} style={{ display: 'flex', alignItems: 'center', gap: 6, height: 34, padding: '0 6px', background: colors.white, color: colors.black, border: `2px solid ${colors.black}` }}>
									<img src={assetPath(`logos/${l.file}`)} alt={l.alt} title={l.alt} style={{ display: 'block', maxHeight: 24, maxWidth: 72 }} />
									{l.label && <span style={{ fontFamily: fonts.mono, fontSize: 12, fontWeight: 700, whiteSpace: 'nowrap' }}>{l.label}</span>}
								</span>
							))}
						</div>
						<div style={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 700, letterSpacing: 1, color: colors.yellow, marginBottom: 6 }}>面试与 JD</div>
						<p style={{ fontSize: 16.5, lineHeight: 1.6, margin: 0 }}>{s.jd}</p>
						<div style={{ marginTop: 'auto', paddingTop: 12 }}>
							<div style={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 700, letterSpacing: 1, color: colors.yellow, marginBottom: 6 }}>谁占优</div>
							<p style={{ fontSize: 16.5, lineHeight: 1.5, fontWeight: 700, margin: 0 }}>{s.winner}</p>
						</div>
					</motion.div>

					<div style={{ flex: 1, minWidth: 0, background: colors.white, border, boxShadow: shadow, padding: '14px 22px', display: 'flex', flexDirection: 'column' }}>
						<div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
							<span style={{ fontFamily: fonts.heading, fontSize: 22, fontWeight: 900, marginRight: 'auto' }}>
								{mode === 'then' ? '当年要点的技能' : `站在${NOW_LABEL.replace('现在 ', ' ')} 回看`}
							</span>
							<button onClick={() => { setPlaying(false); setMode('then'); }} style={ctrlBtn(mode === 'then')}>当年视角</button>
							<button onClick={() => { setPlaying(false); setMode('now'); }} style={ctrlBtn(mode === 'now')}>回到现在</button>
							<button onClick={() => setPlaying((p) => !p)} style={ctrlBtn(playing)}>{playing ? '■ 停' : '▶ 自动穿越'}</button>
						</div>

						<div key={stage} style={{ flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column', gap: roomy ? 10 : 6 }}>
							{skills.map((k, i) => {
								const now = mode === 'now';
								const dead = now && k.status === 'obsolete';
								const ui = STATUS_UI[k.status];
								return (
									<motion.div key={k.skill}
										initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }}
										transition={{ duration: 0.35, delay: 0.1 + i * 0.07 }}
										style={{
											display: 'flex', alignItems: 'center', gap: 12, padding: '8px 12px', minHeight: 46, flex: '1 1 0', maxHeight: roomy ? 92 : 72,
											border: `2px solid ${colors.black}`, background: now && k.status === 'keep' ? colors.warmBg : colors.white,
										}}>
										<span style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 700, color: colors.red, width: 22, flex: 'none' }}>{String(i + 1).padStart(2, '0')}</span>
										<motion.div animate={{ opacity: dead ? 0.5 : 1 }} transition={{ duration: 0.3, delay: dead ? 0.15 + i * 0.12 : 0 }} style={{ flex: 1, minWidth: 0 }}>
											<div style={{ lineHeight: 1.4 }}>
												<span style={{ position: 'relative', display: 'inline-block', fontSize: roomy ? 23 : 19, fontWeight: 700, marginRight: 10 }}>
													{k.skill}
													<motion.span
														initial={false} animate={{ scaleX: dead ? 1 : 0 }}
														transition={{ duration: 0.35, delay: dead ? 0.15 + i * 0.12 : 0, ease: 'easeOut' }}
														style={{ position: 'absolute', left: -4, right: -4, top: '52%', height: 3, background: colors.red, transformOrigin: 'left' }}
													/>
												</span>
												{k.detail && <span style={{ fontSize: roomy ? 17 : 15, color: colors.dark, opacity: 0.7 }}>{k.detail}</span>}
											</div>
											{now && k.verdict && (
												<motion.div initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.25 + i * 0.12 }}
													style={{ fontSize: roomy ? 16.5 : 14.5, lineHeight: 1.4, color: colors.dark }}>
													→ {k.verdict}
												</motion.div>
											)}
										</motion.div>
										{now && (
											<motion.span
												initial={{ opacity: 0, scale: 0.4, rotate: -12 }} animate={{ opacity: 1, scale: 1, rotate: 0 }}
												transition={{ type: 'spring', stiffness: 300, damping: 14, delay: 0.15 + i * 0.12 }}
												style={{ flex: 'none', fontFamily: fonts.mono, fontSize: 13, fontWeight: 700, padding: '3px 9px', background: ui.bg, border: `2px solid ${colors.black}`, whiteSpace: 'nowrap' }}>
												{ui.tag}
											</motion.span>
										)}
									</motion.div>
								);
							})}
						</div>
					</div>
				</div>

				{/* 技能背包：穿越到此为止累计点过的技能，用现在的眼光清点 */}
				<div style={{ display: 'flex', alignItems: 'center', gap: 14, height: 46 }}>
					<span style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 700 }}>技能背包 · 阶段 1–{stage + 1} 累计</span>
					{([['共', bag.length, colors.white], ['仍需要', count('keep'), colors.green], ['降级', count('downgrade'), colors.yellow], ['划掉', count('obsolete'), colors.red]] as const).map(([label, n, bg]) => (
						<span key={label} style={{ display: 'flex', alignItems: 'baseline', gap: 6, padding: '4px 12px', background: bg, border: `2px solid ${colors.black}`, fontSize: 14, fontWeight: 700 }}>
							{label}
							<CountUp key={n} value={n} duration={0.4} style={{ fontFamily: fonts.mono, fontSize: 20 }} />
						</span>
					))}
					<span style={{ marginLeft: 'auto', marginRight: 96, fontFamily: fonts.mono, fontSize: 12, color: colors.dark, opacity: 0.6 }}>
						1–9 选阶段 · [ ] 前后 · T 切换视角 · P 自动穿越　｜　划掉 / 降级为讲者观点
					</span>
				</div>
			</div>
		</Slide>
	);
}
