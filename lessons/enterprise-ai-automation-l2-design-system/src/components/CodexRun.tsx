import { type ReactNode } from 'react';
import { Slide, colors, fonts, border, shadow, shadowSm } from './ui';
import { Body, SlideHead } from './DeckTable';

/**
 * 现场跑 Codex 的「演示夹层」页。
 * 结构固定：左边贴可直接复制的 prompt，右边写验收标准 + 卡壳时怎么办。
 * 讲的时候：念一遍 prompt → 切出去跑 → 回来对着右边验收。
 */
export default function CodexRun({
	no,
	tag,
	title,
	sub,
	prompt,
	accept,
	fallback,
	minutes,
	context,
}: {
	no: string;
	tag: string;
	title: ReactNode;
	sub?: string;
	prompt: string;
	accept: string[];
	fallback: string;
	minutes: string;
	/** 可选：右栏顶部的背景信息块（例如今天这场活动是什么模式） */
	context?: { label: string; items: string[]; note?: string };
}) {
	return (
		<Slide bg={colors.dark}>
			<Body>
				<div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
					<span
						style={{
							fontFamily: fonts.mono,
							fontSize: 15,
							fontWeight: 700,
							background: colors.red,
							color: colors.white,
							padding: '5px 14px',
							letterSpacing: 1,
						}}
					>
						● LIVE · 断点 {no}
					</span>
					<span style={{ fontFamily: fonts.mono, fontSize: 14, color: '#9aa', letterSpacing: 1 }}>{tag}</span>
					<span style={{ marginLeft: 'auto', fontFamily: fonts.mono, fontSize: 14, color: colors.yellow, letterSpacing: 1 }}>
						≈ {minutes}
					</span>
				</div>

				<div
					style={{
						fontFamily: fonts.heading,
						fontSize: 'clamp(30px, 2.7vw, 42px)',
						fontWeight: 900,
						color: colors.white,
						lineHeight: 1.15,
						marginBottom: sub ? 8 : 18,
					}}
				>
					{title}
				</div>
				{sub ? <div style={{ fontSize: 17, color: '#b9c2cc', marginBottom: 18, lineHeight: 1.5 }}>{sub}</div> : null}

				<div style={{ display: 'grid', gridTemplateColumns: '1.45fr 1fr', gap: 20 }}>
					{/* prompt */}
					<div style={{ background: '#0d1220', border: `3px solid ${colors.yellow}`, padding: '16px 18px' }}>
						<div style={{ fontFamily: fonts.mono, fontSize: 12.5, color: colors.yellow, letterSpacing: 1.5, marginBottom: 10 }}>
							PROMPT · 直接复制
						</div>
						<pre
							style={{
								margin: 0,
								fontFamily: fonts.mono,
								fontSize: 14.5,
								lineHeight: 1.65,
								color: '#e6edf3',
								whiteSpace: 'pre-wrap',
								wordBreak: 'break-word',
							}}
						>
							{prompt}
						</pre>
					</div>

					{/* 验收 + fallback */}
					<div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
						{context ? (
							<div style={{ background: colors.yellow, border, boxShadow: shadowSm, padding: '13px 16px' }}>
								<div style={{ fontFamily: fonts.mono, fontSize: 12.5, letterSpacing: 1.5, marginBottom: 9, fontWeight: 700 }}>
									{context.label}
								</div>
								<div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
									{context.items.map((it) => (
										<span
											key={it}
											style={{
												fontSize: 16,
												fontWeight: 800,
												background: colors.white,
												border: `2px solid ${colors.black}`,
												padding: '4px 11px',
											}}
										>
											{it}
										</span>
									))}
								</div>
								{context.note ? (
									<div style={{ marginTop: 9, fontSize: 14.5, lineHeight: 1.4 }}>{context.note}</div>
								) : null}
							</div>
						) : null}

						<div style={{ background: colors.white, border, boxShadow: shadow, padding: '15px 17px' }}>
							<div style={{ fontFamily: fonts.mono, fontSize: 12.5, color: '#888', letterSpacing: 1.5, marginBottom: 10 }}>
								跑完了看这几条
							</div>
							<div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
								{accept.map((a) => (
									<div key={a} style={{ display: 'flex', gap: 9, alignItems: 'flex-start' }}>
										<span
											style={{
												width: 17,
												height: 17,
												border: `2px solid ${colors.black}`,
												flexShrink: 0,
												marginTop: 3,
											}}
										/>
										<span style={{ fontSize: 15.5, lineHeight: 1.4 }}>{a}</span>
									</div>
								))}
							</div>
						</div>

						<div style={{ background: colors.yellow, border, boxShadow: shadowSm, padding: '13px 16px' }}>
							<div style={{ fontFamily: fonts.mono, fontSize: 12.5, letterSpacing: 1.5, marginBottom: 7, fontWeight: 700 }}>
								卡住了怎么办
							</div>
							<div style={{ fontSize: 15, lineHeight: 1.45 }}>{fallback}</div>
						</div>
					</div>
				</div>
			</Body>
		</Slide>
	);
}
