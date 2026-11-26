import { motion, AnimatePresence } from 'framer-motion';
import { DeckFrame, Panel, Label, colors, fonts } from '../kit';
import { StillScope, useStill, Toggle, Hint, useCycle } from '../live';

const steps = [
	{ t: '了解业务', s: '坐进保险公司客服中心听电话', out: '来电分类：查保单、理赔报案、缴费续保、改资料、投诉各占多少，哪些规则清楚、可以交给 AI' },
	{ t: '确认问题', s: '哪些电话交给 AI 接', out: '第一版接查保单、理赔报案登记、改联系方式；理赔金额判断、投诉、情绪激动的客户一律转人工' },
	{ t: '定范围和权限', s: '和客服主管、IT、合规谈清楚', out: '先核验身份才能办事；AI 只能查和登记，不能批理赔、不能改保额；通话录音按合规告知；随时一键转人工' },
	{ t: '先验证最没把握的一步', s: '打断、口音、身份核验', out: '拿脱敏的历史录音测：口音、背景噪音、客户中途打断；身份核验走固定流程，不让模型自由发挥' },
	{ t: '实现', s: '接电话线路、语音模型、保单和理赔系统', out: '能接真实来电的第一版：总调度 Agent 分给各业务 Agent，查保单系统、在理赔系统建报案单；判断不了的带着通话摘要转人工' },
	{ t: '上线、交接、再改一轮', s: '先接一小部分来电', out: '灰度上线，看自动解决率、转人工率、客户满意度；把转人工的录音加进评估集，按周改' },
];
// 蛇形摆放：第一行 1→2→3，第二行从右往左 4→5→6
const order = [0, 1, 2, 5, 4, 3];

function StepNode({ i, at, still, onPick }: { i: number; at: number; still: boolean; onPick: (i: number) => void }) {
	const done = still || i < at, cur = !still && i === at;
	return <div onClick={() => onPick(i)} className={`step3d${cur ? ' on' : ''}`} style={{ cursor: still ? 'default' : 'pointer', position: 'relative', background: cur ? colors.yellow : done ? colors.dark : colors.white, color: done && !cur ? colors.white : colors.dark, border: `2px solid ${colors.dark}`, borderRadius: 18, padding: '14px 18px', boxShadow: cur ? `5px 5px 0 ${colors.red}, 0 30px 56px -14px rgba(255,87,87,.5)` : '5px 5px 0 rgba(16,22,47,.85)', opacity: done || cur ? 1 : .5 }}>
		<div style={{ fontSize: 25, fontWeight: 900, lineHeight: 1.2 }}><span style={{ fontFamily: fonts.mono, color: done && !cur ? colors.yellow : colors.red, marginRight: 8 }}>{i + 1}</span>{steps[i].t}</div>
		<div style={{ fontSize: 18, lineHeight: 1.4, marginTop: 6, fontWeight: 500 }}>{steps[i].s}</div>
		{cur && <motion.div layoutId="order-token" transition={{ type: 'spring', stiffness: 260, damping: 26 }} style={{ position: 'absolute', right: -12, top: -16, background: colors.red, color: colors.white, borderRadius: 999, padding: '4px 12px', fontFamily: fonts.mono, fontSize: 14, fontWeight: 700, border: `2px solid ${colors.dark}` }}>来电 #1042</motion.div>}
	</div>;
}

// 当前步骤通往下一步的那段箭头换成流动虚线（全图只此一段在动）
const arrow = (c: string, done: boolean, flow = false, still = false) => {
	if (flow && !still) {
		const d = c === '→' ? 'M4 22 H38' : c === '←' ? 'M40 22 H6' : 'M22 2 V34';
		const head = c === '→' ? 'M30 14 L40 22 L30 30' : c === '←' ? 'M14 14 L4 22 L14 30' : 'M14 28 L22 38 L30 28';
		return <div aria-hidden style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
			<svg width={44} height={44} viewBox="0 0 44 44"><path d={d} fill="none" stroke={colors.red} strokeWidth={3.5} strokeDasharray="7 6" strokeLinecap="round"><animate attributeName="stroke-dashoffset" from="26" to="0" dur=".9s" repeatCount="indefinite" /></path><path d={head} fill="none" stroke={colors.red} strokeWidth={3.5} strokeLinecap="round" strokeLinejoin="round" /></svg>
		</div>;
	}
	return <div aria-hidden style={{ fontSize: 32, fontWeight: 900, display: 'flex', alignItems: 'center', justifyContent: 'center', color: done ? colors.red : colors.dark, transition: 'color .3s' }}>{c}</div>;
};

function Body() {
	const still = useStill();
	const { at, pick, hover } = useCycle(steps.length, 2600, still);
	const row = (idx: number[], back: boolean) => <div style={{ display: 'grid', gridTemplateColumns: '1fr 44px 1fr 44px 1fr', alignItems: 'stretch' }}>
		{idx.flatMap((i, k) => {
			const node = <StepNode key={i} i={i} at={at} still={still} onPick={pick} />;
			if (k === idx.length - 1) return [node];
			const passed = still || (back ? idx[k + 1] < at : i < at);
			return [node, <div key={`a${i}`}>{arrow(back ? '←' : '→', passed, back ? idx[k + 1] === at : i === at, still)}</div>];
		})}
	</div>;
	return <div>
		<div className="flow3d" {...hover}>
		{row(order.slice(0, 3), false)}
		<div style={{ display: 'grid', gridTemplateColumns: '1fr 44px 1fr 44px 1fr', height: 44 }}><div /><div /><div /><div />{arrow('↓', still || at > 2, at === 2, still)}</div>
		{row(order.slice(3), true)}
		</div>
		{still
			? <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 22, marginTop: 26 }}>
				<Panel><Label>第一版接哪些电话</Label><div style={{ fontSize: 22, lineHeight: 1.55, marginTop: 12 }}>{steps[1].out}</div></Panel>
				<Panel><Label>上线前要留好的</Label><div style={{ fontSize: 22, lineHeight: 1.55, marginTop: 12 }}>用脱敏的历史录音试出口音和打断问题；判断不了的带着摘要转人工；先接一小部分来电，看自动解决率再放量。</div></Panel>
			</div>
			: <Panel style={{ marginTop: 26, display: 'grid', gridTemplateColumns: '1fr auto', gap: 24, alignItems: 'center' }}>
				<div>
					<Label>第 {at + 1} 步交出的东西</Label>
					<AnimatePresence mode="wait">
						<motion.div key={at} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: .22 }} style={{ fontSize: 25, lineHeight: 1.5, marginTop: 12, fontWeight: 700 }}>{steps[at].out}</motion.div>
					</AnimatePresence>
				</div>
				<div style={{ display: 'grid', gap: 10, justifyItems: 'end' }}>
					<div style={{ display: 'flex', gap: 10 }}>
						<Toggle active={false} onClick={() => pick(a => Math.max(a - 1, 0))}>← 上一步</Toggle>
						<Toggle active onClick={() => pick(a => Math.min(a + 1, steps.length - 1))}>下一步 →</Toggle>
						<Toggle active={false} onClick={() => pick(0)}>重来</Toggle>
					</div>
					<Hint>会自动走一遍；点任意一步就停下手动讲</Hint>
				</div>
			</Panel>}
	</div>;
}

export default function S09_CaseFlow() {
	return <DeckFrame tag="02 · 一个项目从头走到尾" title="比如：给保险公司做 Realtime Voice 客服" subtitle="整个项目由 FDE 做：驻场听电话、定范围、搭系统、上线，接走的是原来一整组一线客服的活。">
		<StillScope><Body /></StillScope>
	</DeckFrame>;
}
