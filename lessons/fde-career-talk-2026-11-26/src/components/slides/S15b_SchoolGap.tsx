import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DeckFrame, Panel, Label, colors, fonts } from '../kit';
import { StillScope, useStill, ini, Toggle, Hint } from '../live';

const planks = [
	{ t: '需求', school: '老师把题目写好，照着做', fde: '自己去问清楚：谁在用、卡在哪、第一版做到哪；需求还会变', fix: '找一个真实使用者，先访谈再动手' },
	{ t: '数据和系统', school: '干净的数据集，自己的电脑上跑', fde: '客户的脏数据、权限、十几年的老系统', fix: '接一个真实 API 或公开的脏数据，处理一次缺失和超时' },
	{ t: '交付', school: '交了作业就结束', fde: '上线、有人在用、出了问题要你修', fix: '把作品部署上线，跟进一轮真实反馈' },
	{ t: 'AI 出错', school: '分数看对错', fde: 'AI 会出错：要自己建评估样例，判断不了的留给人', fix: '为作品写 20 条测试样例，记下改动前后的结果' },
	{ t: '沟通', school: '给老师和组员讲', fde: '给客户、IT、老板讲清取舍，定下第一版范围', fix: '做一次 5 分钟 Pitch，被追问后改一版' },
];
const facts = ['OpenAI 悉尼 FDE：要求 5 年以上经验', 'Palantir：FDSE 实习招 2027 届毕业生', '软件开发新增岗位 71% 是资深', '22–25 岁：AI 最能做的职业少了约 11%'];

function Cliff({ title, items, right }: { title: string; items: string[]; right?: boolean }) {
	return <div style={{ width: 200, height: 190, background: right ? colors.dark : '#f4f1ec', color: right ? colors.white : colors.dark, border: `2px solid ${colors.dark}`, borderRadius: right ? '0 22px 0 0' : '22px 0 0 0', padding: '16px 18px', boxSizing: 'border-box', alignSelf: 'end', boxShadow: `6px 6px 0 ${right ? colors.red : colors.dark}` }}>
		<div style={{ fontSize: 30, fontWeight: 900, color: right ? colors.yellow : colors.dark }}>{title}</div>
		{items.map(x => <div key={x} style={{ fontSize: 17, lineHeight: 1.55, marginTop: 4 }}>{x}</div>)}
	</div>;
}

function Body() {
	const still = useStill();
	const [filled, setFilled] = useState<boolean[]>(planks.map(() => still));
	const [sel, setSel] = useState(0);
	const pick = (i: number) => { setSel(i); setFilled(f => f.map((v, j) => (j === i ? true : v))); };
	const count = filled.filter(Boolean).length;
	const p = planks[sel];
	return <div>
		{/* 断桥：左学校、右 FDE，中间五块桥板 */}
		<div style={{ display: 'grid', gridTemplateColumns: '200px 1fr 200px', alignItems: 'end' }}>
			<Cliff title="学校" items={['课程作业', '考试', '小组项目']} />
			<div style={{ position: 'relative', height: 190 }}>
				<div aria-hidden style={{ position: 'absolute', left: 0, right: 0, top: 96, bottom: 0, background: 'repeating-linear-gradient(135deg, rgba(16,22,47,.07) 0 10px, transparent 10px 20px)' }} />
				<div style={{ position: 'absolute', left: 6, right: 6, top: 28, display: 'grid', gridTemplateColumns: `repeat(${planks.length}, 1fr)`, gap: 6 }}>
					{planks.map((pl, i) => {
						const on = filled[i], cur = !still && sel === i;
						return <button key={pl.t} type="button" className="live-toggle" onClick={() => pick(i)} aria-pressed={on}
							style={{ background: 'transparent', border: 'none', padding: 0, cursor: still ? 'default' : 'pointer', fontFamily: fonts.body, display: 'grid', gap: 6, justifyItems: 'stretch' }}>
							<span style={{ fontSize: 18, fontWeight: 900, textAlign: 'center', color: on ? colors.dark : '#9a948c' }}>{pl.t}</span>
							<span style={{ position: 'relative', height: 44, border: `2px dashed ${on ? 'transparent' : 'rgba(16,22,47,.35)'}`, borderRadius: 8 }}>
								<AnimatePresence>
									{on && <motion.span initial={ini(still, { y: -46, opacity: 0, rotate: -6 })} animate={{ y: 0, opacity: 1, rotate: 0 }} transition={{ type: 'spring', stiffness: 260, damping: 18 }}
										style={{ position: 'absolute', inset: -2, background: cur ? colors.red : colors.yellow, border: `2px solid ${colors.dark}`, borderRadius: 8, boxShadow: `3px 3px 0 ${colors.dark}` }} />}
								</AnimatePresence>
							</span>
						</button>;
					})}
				</div>
				<div style={{ position: 'absolute', left: 0, right: 0, top: 150, textAlign: 'center', fontSize: 18, fontWeight: 800 }}>
					{still ? '五块都补上，才走得过去' : <>已补上 <span style={{ fontFamily: fonts.mono, color: colors.red }}>{count}</span> / {planks.length}{count === planks.length ? '：走得过去了' : ''}</>}
				</div>
			</div>
			<Cliff title="FDE" items={['真实客户', '真实数据', '上线和维护']} right />
		</div>
		{/* 选中那块桥板的说明 */}
		{still
			? <Panel style={{ marginTop: 16, padding: '12px 20px' }}>
				{planks.map(pl => <div key={pl.t} style={{ display: 'grid', gridTemplateColumns: '110px 1fr 1fr', gap: 12, fontSize: 14, lineHeight: 1.4, padding: '4px 0', borderTop: '1px solid rgba(16,22,47,.1)' }}><b>{pl.t}</b><span>学校：{pl.school}</span><span>怎么补：{pl.fix}</span></div>)}
			</Panel>
			: <Panel style={{ marginTop: 16, padding: '14px 22px' }}>
				<div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
					<Label>{p.t}</Label>
					<span style={{ marginLeft: 'auto', display: 'flex', gap: 10, alignItems: 'center' }}>
						<Hint>点桥板补上一块</Hint>
						<Toggle active={false} size={15} onClick={() => setFilled(planks.map(() => true))}>全部补上</Toggle>
						<Toggle active={false} size={15} onClick={() => { setFilled(planks.map(() => false)); setSel(0); }}>重来</Toggle>
					</span>
				</div>
				<AnimatePresence mode="wait">
					<motion.div key={sel} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: .2 }}
						style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr 1.2fr', gap: 18, marginTop: 10 }}>
						{[['学校里通常是', p.school, '#8a847c'], ['FDE 要的是', p.fde, colors.red], ['怎么补', p.fix, colors.dark]].map(([k, v, c]) => <div key={k}>
							<div style={{ fontSize: 15, fontWeight: 800, color: c }}>{k}</div>
							<div style={{ fontSize: 19, lineHeight: 1.45, fontWeight: k === '怎么补' ? 800 : 500, marginTop: 4 }}>{v}</div>
						</div>)}
					</motion.div>
				</AnimatePresence>
			</Panel>}
		<div style={{ display: 'flex', gap: 10, marginTop: 14, flexWrap: 'wrap' }}>
			{facts.map(f => <span key={f} style={{ fontSize: 15, fontWeight: 700, background: colors.white, border: `2px solid ${colors.dark}`, borderRadius: 999, padding: '5px 12px' }}>{f}</span>)}
		</div>
	</div>;
}

export default function S15b_SchoolGap() {
	return <DeckFrame tag="05 · 2027 年怎么入行" title="从学校到 FDE，差的不是知识，是经历" subtitle="学校教会你做题；FDE 要你把一件事在真实世界里做完。" accent={colors.purple}>
		<StillScope><Body /></StillScope>
	</DeckFrame>;
}
