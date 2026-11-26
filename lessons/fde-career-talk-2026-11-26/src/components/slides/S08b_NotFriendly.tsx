import { Fragment, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DeckFrame, colors, fonts } from '../kit';
import { StillScope, useStill, ini } from '../live';

// 五个例子：前三个是业务部门的活，后两个是「做系统的人」的活。人数是示意，不是统计。
// 以前一屋子人手工做；FDE 来了，整段流程交给 AI 跑完，只留下处理例外的人
const CASES = [
	{ who: '财务', task: '处理发票', n: 6, keep: 1, steps: ['读发票', '核金额和 GST', '录进系统'], left: '查对不上的' },
	{ who: '客服', task: '接电话', n: 10, keep: 2, steps: ['听懂问题', '查订单', '办退款'], left: '处理投诉' },
	{ who: 'HR', task: '筛简历', n: 4, keep: 1, steps: ['读简历', '对照 JD', '约面试'], left: '面试' },
	{ who: 'Business Analyst', task: '梳理流程、写需求', n: 3, keep: 0, steps: ['访谈业务方', '画现状流程', '写需求和验收标准'], left: 'FDE 在现场直接做' },
	{ who: 'Designer', task: '画界面、做原型', n: 2, keep: 0, steps: ['看需求', '出界面和原型', '按反馈改稿'], left: 'FDE 用 AI 直接出界面' },
	{ who: 'Software Engineer', task: '做一个内部系统', n: 8, keep: 1, steps: ['写代码', '写测试', '接系统、上线'], left: 'FDE 带 Agent 做完' },
];

const Person = ({ on, keep }: { on: boolean; keep: boolean }) => <motion.svg width="32" height="32" viewBox="0 0 40 40" aria-hidden
	animate={{ opacity: on ? (keep ? 1 : .14) : 1, scale: on && !keep ? .8 : 1 }} transition={{ duration: .4 }}>
	<circle cx="20" cy="13" r="8" fill={on && keep ? colors.red : colors.dark} /><path d="M5 38c1-9 7-14 15-14s14 5 15 14z" fill={on && keep ? colors.red : colors.dark} />
</motion.svg>;

function Row({ c, on, i, still }: { c: (typeof CASES)[number]; on: boolean; i: number; still: boolean }) {
	const dev = i >= 3;
	return <div style={{ display: 'grid', gridTemplateColumns: '210px 1fr 250px', gap: 18, alignItems: 'center', background: dev ? '#eef6ff' : colors.white, border: `2px solid ${colors.dark}`, borderRadius: 16, padding: '4px 18px', height: 62 }}>
		<div><div style={{ fontSize: dev ? 21 : 26, fontWeight: 900, lineHeight: 1.1, whiteSpace: 'nowrap' }}>{c.who}</div><div style={{ fontSize: 16, fontWeight: 700, color: '#514c48' }}>{c.task}</div></div>
		<div style={{ position: 'relative', height: 54, display: 'flex', alignItems: 'center', gap: 4 }}>
			{Array.from({ length: c.n }).map((_, k) => <Person key={k} on={on} keep={k < c.keep} />)}
			<AnimatePresence>
				{on && <motion.div initial={ini(still, { scaleX: 0, opacity: 0 })} animate={{ scaleX: 1, opacity: 1 }} exit={{ opacity: 0 }} transition={{ delay: still ? 0 : i * .25, duration: .5, ease: [0.16, 1, 0.3, 1] }}
					style={{ position: 'absolute', left: c.keep * 36 + 4, right: 0, top: 5, height: 44, transformOrigin: 'left', background: colors.dark, borderRadius: 14, boxShadow: `5px 5px 0 ${colors.red}`, display: 'flex', alignItems: 'center', gap: 8, padding: '0 14px' }}>
					<span style={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 700, color: colors.yellow, marginRight: 4 }}>AI</span>
					{c.steps.map((s, k) => <motion.span key={s} initial={ini(still, { opacity: 0, y: 6 })} animate={{ opacity: 1, y: 0 }} transition={{ delay: still ? 0 : i * .25 + .45 + k * .18 }}
						style={{ display: 'flex', alignItems: 'center', gap: 8, color: colors.white, fontSize: 17, fontWeight: 800, whiteSpace: 'nowrap' }}>{s}{k < c.steps.length - 1 && <span style={{ color: colors.yellow }}>→</span>}</motion.span>)}
					<motion.span initial={ini(still, { scale: 0 })} animate={{ scale: 1 }} transition={{ delay: still ? 0 : i * .25 + 1.05, type: 'spring' }} style={{ marginLeft: 'auto', fontSize: 22, color: '#7ED957', fontWeight: 900 }}>✓</motion.span>
				</motion.div>}
			</AnimatePresence>
		</div>
		<AnimatePresence mode="wait">
			<motion.div key={on ? 'a' : 'b'} initial={ini(still, { opacity: 0, x: 10 })} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }} transition={{ delay: on && !still ? i * .25 + .9 : 0 }}
				style={{ textAlign: 'right' }}>
				{on
					? <><div style={{ fontSize: 28, fontWeight: 900, color: colors.red, lineHeight: 1 }}>{c.n} → {c.keep} 人</div><div style={{ fontSize: 15, fontWeight: 700, marginTop: 4 }}>{c.keep ? `留下的人：${c.left}` : c.left}</div></>
					: <><div style={{ fontSize: 28, fontWeight: 900, lineHeight: 1 }}>{c.n} 人</div><div style={{ fontSize: 15, fontWeight: 700, marginTop: 4, color: '#514c48' }}>{i >= 3 ? '一个环节交给一个人' : '每一单都手工做'}</div></>}
			</motion.div>
		</AnimatePresence>
	</div>;
}

function Body() {
	const still = useStill();
	const [on, setOn] = useState(still);
	return <div>
		{!still && <div style={{ display: 'flex', gap: 10, marginBottom: 14 }}>
			<button type="button" className="live-toggle" onClick={() => setOn(false)} aria-pressed={!on} style={{ fontFamily: fonts.body, fontSize: 20, fontWeight: 900, padding: '9px 22px', borderRadius: 999, border: `3px solid ${colors.dark}`, background: !on ? colors.yellow : colors.white, cursor: 'pointer', boxShadow: !on ? `3px 3px 0 ${colors.dark}` : 'none' }}>现在</button>
			<button type="button" className="live-toggle" onClick={() => setOn(true)} aria-pressed={on} style={{ fontFamily: fonts.body, fontSize: 20, fontWeight: 900, padding: '9px 22px', borderRadius: 999, border: `3px solid ${colors.dark}`, background: on ? colors.red : colors.white, color: on ? colors.white : colors.dark, cursor: 'pointer', boxShadow: on ? `3px 3px 0 ${colors.dark}` : 'none' }}>FDE 来了 →</button>
		</div>}
		<div style={{ display: 'grid', gap: 7 }}>
			{CASES.map((c, i) => <Fragment key={c.who}>
				{(i === 0 || i === 3) && <div style={{ fontSize: 15, fontWeight: 900, color: '#514c48', marginTop: i ? 4 : 0 }}>{i ? '做系统的人的活：以前要 BA 写需求、设计师画界面、工程团队开发上线' : '业务部门的活'}</div>}
				<Row c={c} on={on} i={i} still={still} />
			</Fragment>)}
		</div>
		<div style={{ marginTop: 10, fontSize: 18, fontWeight: 900, lineHeight: 1.45, whiteSpace: 'nowrap' }}>不是给每个人配 Copilot，而是把整段流程交给 AI 跑完：业务岗位、BA、设计师、工程团队的活，都被一个 FDE 带着 AI 接走。<span style={{ color: colors.red }}>这不是一个友善的岗位。</span></div>
	</div>;
}

export default function S08b_NotFriendly() {
	return <DeckFrame tag="02 · FDE 做什么" title="FDE 不是来帮忙的，是来接走整段工作的" accent={colors.red}>
		<StillScope><Body /></StillScope>
	</DeckFrame>;
}
