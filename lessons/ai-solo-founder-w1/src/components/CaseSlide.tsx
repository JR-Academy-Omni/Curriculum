import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { Slide, colors, fonts, border, shadowSm } from './ui';
import { Body, SlideHead, SourceNote } from './DeckTable';

// 案例页统一版式 —— 固定五段（W1_RUNSHEET.md §4.2 规定的讲法）
// 他是谁 → 一周时间怎么排 → 前几个客户从哪来 → 现在多少钱 → 放弃了什么 / 死过几次
// 🚨 每页必须标出处；文件里标「查不到」的字段照实写「⚠️ 查不到」，不许补数字。

export interface CaseBlock {
	label: string;
	body: ReactNode;
	bg?: string;
	/** 占两列（给「一周时间怎么排」这种重点段） */
	wide?: boolean;
}

export default function CaseSlide({
	tag,
	name,
	place,
	oneLine,
	blocks,
	source,
	landing,
	bg = colors.white,
	tagBg = colors.green,
}: {
	tag: string;
	name: string;
	place: string;
	oneLine: ReactNode;
	blocks: CaseBlock[];
	source: ReactNode;
	landing?: ReactNode;
	bg?: string;
	tagBg?: string;
}) {
	return (
		<Slide bg={bg}>
			<Body style={{ padding: '40px 56px 34px' }}>
				<SlideHead
					tag={tag}
					tagBg={tagBg}
					titleSize="clamp(30px, 2.7vw, 42px)"
					title={
						<span>
							{name}
							<span style={{ fontSize: '0.5em', fontFamily: fonts.mono, marginLeft: 16, color: '#555' }}>{place}</span>
						</span>
					}
					sub={oneLine}
				/>

				<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
					{blocks.map((b, i) => (
						<motion.div
							key={b.label}
							initial={{ opacity: 0, y: 16 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.32, delay: 0.15 + i * 0.09 }}
							style={{
								// 第一块（① 他是谁）永远整行，避免网格留洞
								gridColumn: b.wide || i === 0 ? 'span 2' : 'span 1',
								border,
								boxShadow: shadowSm,
								background: b.bg ?? colors.white,
								padding: '12px 16px',
							}}
						>
							<div
								style={{
									fontFamily: fonts.mono,
									fontSize: 14,
									fontWeight: 700,
									letterSpacing: 1,
									color: '#000',
									background: colors.yellow,
									display: 'inline-block',
									padding: '2px 9px',
									marginBottom: 8,
									border: '2px solid #000',
								}}
							>
								{b.label}
							</div>
							<div style={{ fontSize: 18, lineHeight: 1.5, fontWeight: 500 }}>{b.body}</div>
						</motion.div>
					))}
				</div>

				{landing ? (
					<div
						style={{
							marginTop: 14,
							padding: '11px 18px',
							background: colors.dark,
							color: colors.white,
							border,
							fontSize: 19,
							fontWeight: 700,
							lineHeight: 1.4,
						}}
					>
						落到本课：{landing}
					</div>
				) : null}

				<SourceNote>{source}</SourceNote>
			</Body>
		</Slide>
	);
}

/** 引用原话（英文原句照引，不翻译成具体数字） */
export function Quote({ children }: { children: ReactNode }) {
	return (
		<span
			style={{
				display: 'inline-block',
				background: '#FFF6D6',
				borderLeft: '4px solid #000',
				padding: '2px 8px',
				fontStyle: 'italic',
			}}
		>
			{children}
		</span>
	);
}

/** 查不到 —— 台上必须照实说 */
export function Unknown({ children }: { children: ReactNode }) {
	return (
		<span style={{ color: '#b00', fontWeight: 700 }}>⚠️ {children}</span>
	);
}
