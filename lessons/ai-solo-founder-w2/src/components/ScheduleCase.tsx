import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { Slide, colors, fonts, border, shadow, shadowSm } from './ui';
import { Body, SlideHead } from './DeckTable';

// Agent Schedule 案例页统一版式 —— 五段结构（S12_ScheduleAnatomy 定的那五段）
// 触发 → 输入源 → 处理 → 交付物 → 送到哪，加一条 cron 表达式和一条现场提示。
// 🚨 案例里的数字只能是时间与 cron；不写任何工具价格、收入或第三方公开数据。

export interface ScheduleSpec {
	/** 案例序号，例：'案例 ①' */
	no: string;
	title: string;
	/** 人话版的一句话 */
	oneLine: ReactNode;
	cron: string;
	cronHuman: string;
	trigger: ReactNode;
	input: ReactNode;
	process: ReactNode;
	deliverable: ReactNode;
	destination: ReactNode;
	/** 台上必须点破的那个坑 */
	gotcha: ReactNode;
	tagBg?: string;
	bg?: string;
}

const SEGMENT_BG = ['#FFE9E4', '#FFF6D6', '#DCEBFF', '#EDE9FE', '#D9F2E4'];

export default function ScheduleCase({ spec }: { spec: ScheduleSpec }) {
	const segments: [string, ReactNode][] = [
		['① 触发', spec.trigger],
		['② 输入源', spec.input],
		['③ 处理', spec.process],
		['④ 交付物', spec.deliverable],
		['⑤ 送到哪', spec.destination],
	];

	return (
		<Slide bg={spec.bg ?? colors.white}>
			<Body style={{ padding: '38px 56px 32px' }}>
				<SlideHead
					tag={`④ AGENT SCHEDULE · ${spec.no}`}
					tagBg={spec.tagBg ?? colors.blue}
					titleSize="clamp(32px, 2.9vw, 44px)"
					title={spec.title}
					sub={spec.oneLine}
				/>

				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 11 }}>
					{segments.map(([label, body], index) => (
						<motion.div
							key={label}
							initial={{ opacity: 0, y: 16 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.3, delay: 0.12 + index * 0.08 }}
							style={{ position: 'relative', border, boxShadow: shadowSm, background: SEGMENT_BG[index], padding: '15px 14px', minHeight: 218 }}
						>
							<div style={{ display: 'inline-block', border: '2px solid #000', background: colors.white, padding: '2px 9px', fontFamily: fonts.mono, fontSize: 14, fontWeight: 900 }}>{label}</div>
							<div style={{ marginTop: 12, fontSize: 17, lineHeight: 1.5, fontWeight: 600 }}>{body}</div>
							{index < segments.length - 1 ? (
								<div style={{ position: 'absolute', right: -17, top: 92, zIndex: 3, width: 30, height: 30, display: 'grid', placeItems: 'center', border, background: colors.yellow, fontFamily: fonts.mono, fontSize: 20, fontWeight: 900 }}>→</div>
							) : null}
						</motion.div>
					))}
				</div>

				<div style={{ marginTop: 15, display: 'grid', gridTemplateColumns: '330px 1fr', gap: 14 }}>
					<div style={{ border, boxShadow: shadow, background: colors.dark, color: colors.white, padding: '13px 18px' }}>
						<div style={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 800, color: colors.yellow, letterSpacing: 1 }}>CRON</div>
						<div style={{ marginTop: 5, fontFamily: fonts.mono, fontSize: 27, fontWeight: 900 }}>{spec.cron}</div>
						<div style={{ marginTop: 3, fontSize: 15, opacity: 0.85 }}>{spec.cronHuman}</div>
					</div>
					<div style={{ border, boxShadow: shadow, background: colors.yellow, padding: '13px 18px', display: 'flex', alignItems: 'center' }}>
						<div style={{ fontSize: 18.5, lineHeight: 1.45, fontWeight: 750 }}>
							<span style={{ fontFamily: fonts.mono, fontWeight: 900, marginRight: 8 }}>坑：</span>{spec.gotcha}
						</div>
					</div>
				</div>
			</Body>
		</Slide>
	);
}
