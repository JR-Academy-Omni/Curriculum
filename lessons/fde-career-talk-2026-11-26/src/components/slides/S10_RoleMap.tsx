import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DeckFrame, Panel, Label, colors, fonts } from '../kit';
import { StillScope, useStill, ini, Hint } from '../live';

// x = 面对客户的程度，y = 写代码的比重（0–1，相对位置）
const roles = [
	{ id: 'aie', name: 'AI Engineer', sub: 'Applied AI Engineer', x: .2, y: .84, c: colors.blue, who: '自家产品和平台团队', code: '很多', good: '系统可靠、评估扎实、做得够深', job: 'Senior Applied AI Engineer · Culture Amp' },
	{ id: 'fde', name: 'FDE', sub: 'FDSE', x: .72, y: .7, c: colors.red, who: '外部客户或内部业务部门', code: '多，面更广', good: '交付快、能接进客户系统、客户真的在用', job: 'Forward Deployed Engineer · FIS' },
	{ id: 'se', name: 'Solutions Engineer', sub: 'Solutions／Business AI Architect', x: .76, y: .44, c: colors.purple, who: '售前和客户', code: '少到中等', good: '方案能卖出去、能落地', job: 'Business AI Architect · SAP' },
	{ id: 'ac', name: 'AI Consultant', sub: '咨询公司或企业内部', x: .4, y: .16, c: colors.green, who: '业务方和管理层', code: '看公司', good: '方案能在公司里推行下去', job: 'Senior Consultant, AI Engineer · NAB' },
];
const W = 820, H = 450;

function Body() {
	const still = useStill();
	const [sel, setSel] = useState('fde');
	const r = roles.find(x => x.id === sel)!;
	return <div style={{ display: 'grid', gridTemplateColumns: `${W + 40}px 1fr`, gap: 26 }}>
		<div style={{ position: 'relative', width: W + 40, height: H + 40 }}>
			{/* 坐标轴 */}
			<div style={{ position: 'absolute', left: 40, top: 0, width: W, height: H, background: colors.white, border: `2px solid ${colors.dark}`, borderRadius: 22, overflow: 'hidden' }}>
				<div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, borderLeft: '1px dashed rgba(16,22,47,.2)' }} />
				<div style={{ position: 'absolute', top: '50%', left: 0, right: 0, borderTop: '1px dashed rgba(16,22,47,.2)' }} />
				<span style={{ position: 'absolute', right: 16, top: 12, fontSize: 16, color: '#8a847c', fontWeight: 700 }}>写代码多 · 面对客户多</span>
				<span style={{ position: 'absolute', left: 16, bottom: 12, fontSize: 16, color: '#8a847c', fontWeight: 700 }}>写代码少 · 面对客户少</span>
			</div>
			<div style={{ position: 'absolute', left: 40, top: H + 8, width: W, textAlign: 'center', fontSize: 19, fontWeight: 800 }}>面对客户的程度 →</div>
			<div style={{ position: 'absolute', left: 0, top: 0, height: H, width: 30, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
				<span style={{ transform: 'rotate(-90deg)', whiteSpace: 'nowrap', fontSize: 19, fontWeight: 800 }}>写代码的比重 →</span>
			</div>
			{roles.map((p, i) => {
				const on = p.id === sel;
				return <motion.button key={p.id} type="button" className="live-toggle" onClick={() => setSel(p.id)} aria-pressed={on}
					initial={ini(still, { left: 40 + W / 2, top: H / 2, opacity: 0, scale: .6 })}
					animate={{ left: 40 + p.x * W, top: (1 - p.y) * H, opacity: 1, scale: on && !still ? 1.12 : 1 }}
					transition={{ type: 'spring', stiffness: 170, damping: 20, delay: still ? 0 : .15 + i * .1 }}
					style={{ position: 'absolute', x: '-50%', y: '-50%', cursor: 'pointer', background: on ? p.c : colors.white, color: on && p.c !== colors.green ? colors.white : colors.dark, border: `3px solid ${colors.dark}`, borderRadius: 999, padding: '10px 20px', boxShadow: `5px 5px 0 ${on ? colors.dark : p.c}`, fontFamily: fonts.body, textAlign: 'center', whiteSpace: 'nowrap' }}>
					<div style={{ fontSize: 24, fontWeight: 900 }}>{p.name}</div>
					<div style={{ fontSize: 14, fontWeight: 600 }}>{p.sub}</div>
				</motion.button>;
			})}
		</div>
		{still ? <Panel bg={colors.dark} style={{ color: colors.white, display: 'grid', gap: 12, alignContent: 'start' }}>
			{roles.map(p => <div key={p.id} style={{ borderTop: '1px solid rgba(255,255,255,.15)', paddingTop: 10 }}>
				<div style={{ fontSize: 20, fontWeight: 900, color: colors.yellow }}>{p.name}</div>
				<div style={{ fontSize: 17, lineHeight: 1.45, marginTop: 4 }}>对接{p.who}；写代码{p.code}；{p.good}</div>
			</div>)}
		</Panel> : <Panel bg={colors.dark} style={{ color: colors.white, display: 'flex', flexDirection: 'column', gap: 14 }}>
			<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><Label bg={r.c} color={r.c === colors.green ? colors.dark : colors.white}>{r.name}</Label><Hint>点图里的岗位</Hint></div>
			<AnimatePresence mode="wait">
				<motion.div key={sel} initial={ini(still, { opacity: 0, x: 14 })} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -14 }} transition={{ duration: .22 }} style={{ display: 'grid', gap: 14 }}>
					{[['主要对接谁', r.who], ['写代码', r.code], ['怎么算做得好', r.good], ['真实岗位', r.job]].map(([k, v]) => <div key={k} style={{ borderTop: '1px solid rgba(255,255,255,.15)', paddingTop: 10 }}>
						<div style={{ fontSize: 16, fontWeight: 800, color: colors.yellow }}>{k}</div>
						<div style={{ fontSize: 23, fontWeight: 700, lineHeight: 1.4, marginTop: 4 }}>{v}</div>
					</div>)}
				</motion.div>
			</AnimatePresence>
		</Panel>}
	</div>;
}

export default function S10_RoleMap() {
	return <DeckFrame tag="03 · 岗位地图" title="FDE、AI Engineer，还有几个相近的岗位" subtitle="按各岗位 JD 里的日常职责大致摆位置；同一个名称，在不同公司分工可能完全不同。" accent={colors.blue}>
		<StillScope><Body /></StillScope>
	</DeckFrame>;
}
