import type { CSSProperties } from 'react';
import { DeckFrame, AnimatedGroup, colors, fonts } from '../deck';

const steps = [
	{ en: 'Resident', zh: '老人档案', eg: '王奶奶，住 3 号房', who: '院管理员', bg: '#dff3ff' },
	{ en: 'Shift', zh: '班次', eg: '10 月 18 日早班', who: '院管理员', bg: '#dff3ff' },
	{ en: 'Task', zh: '任务', eg: '早班协助王奶奶洗漱', who: '院管理员', bg: '#dff3ff' },
	{ en: 'Care Activity', zh: '护理活动', eg: '07:40 已协助洗漱，皮肤无异常', who: '护理员', bg: '#e7f8df' },
	{ en: 'Progress Note', zh: '交班记录', eg: '早班情况汇总，草稿 v1，提交审核', who: '护理员', bg: '#e7f8df' },
	{ en: 'Review', zh: '审核', eg: '主管看 v1：通过，或退回修改', who: '审核人', bg: '#f3e6fb' },
	{ en: 'Confirm', zh: '确认', eg: 'v1 成为正式记录，写入 audit', who: '审核人', bg: '#f3e6fb' },
];

const card = (bg: string): CSSProperties => ({ background: bg, border: `2px solid ${colors.dark}`, borderRadius: 16, padding: '14px 12px', height: '100%', display: 'flex', flexDirection: 'column', gap: 8 });

export default function S04_Lesson() {
	return <DeckFrame tag="W3 · PRD · 主路径" title="一条业务链，用一个例子走一遍" subtitle="从老人档案到审核确认共 7 步：每一步是什么、谁来做、留下什么。" titleSize={52}>
		<div data-lesson-content style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: 16 }}>
			<div style={{ display: 'flex', alignItems: 'stretch', gap: 6, flex: 1, minHeight: 0 }}>
				{steps.map((s, i) => <div key={s.en} style={{ display: 'contents' }}>
					<AnimatedGroup delay={.08 + i * .08} style={{ flex: 1, minWidth: 0 }}>
						<div style={card(s.bg)}>
							<div style={{ fontFamily: fonts.mono, fontSize: 15, fontWeight: 800 }}>0{i + 1}</div>
							<div style={{ fontFamily: fonts.heading, fontSize: 21, fontWeight: 800, lineHeight: 1.15 }}>{s.en}</div>
							<div style={{ fontSize: 19, fontWeight: 700 }}>{s.zh}</div>
							<div style={{ fontSize: 17, lineHeight: 1.45, color: '#403b37', flex: 1 }}>{s.eg}</div>
							<div style={{ alignSelf: 'flex-start', background: colors.dark, color: colors.white, borderRadius: 8, padding: '4px 9px', fontSize: 15, fontWeight: 700 }}>{s.who}</div>
						</div>
					</AnimatedGroup>
					{i < steps.length - 1 && <div style={{ alignSelf: 'center', fontSize: 22 }}>→</div>}
				</div>)}
			</div>
			<AnimatedGroup delay={.7} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 14 }}>
				<div style={{ fontSize: 19, lineHeight: 1.45, borderLeft: `7px solid ${colors.blue}`, paddingLeft: 14 }}>1–3 步：院管理员事先准备好，护理员上班时直接看到。</div>
				<div style={{ fontSize: 19, lineHeight: 1.45, borderLeft: `7px solid ${colors.green}`, paddingLeft: 14 }}>4–5 步：护理员在手机上记录，交班记录先是草稿。</div>
				<div style={{ fontSize: 19, lineHeight: 1.45, borderLeft: `7px solid ${colors.purple}`, paddingLeft: 14 }}>6–7 步：审核人确认后才算正式记录；退回就回到草稿。</div>
			</AnimatedGroup>
			<div data-lesson-footer style={{ fontSize: 19, lineHeight: 1.4, fontWeight: 750, padding: '8px 18px', borderRadius: 12, background: '#f9dfc7', color: '#463c32' }}>示例人物与数据均为课程虚构；具体字段和谁来创建，以 starter 的 schema 与项目 PRD 为准。</div>
		</div>
	</DeckFrame>;
}
