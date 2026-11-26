import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { colors, fonts } from './kit';
import { useStill, ini, Hint } from './live';

// 内容层组件：一门课的 30 项练习铺满一页，按类别筛选、点开看说明
export type WallTask = { n: number; t: string; en?: string; d: string; out?: string; g: number };
const PALETTE = ['#FFDE59', '#38B6FF', '#FF914D', '#7ED957', '#CB6CE6', '#ff5757'];

export function TaskWall({ tasks, groups, bottom }: { tasks: WallTask[]; groups: string[]; bottom: string }) {
	const still = useStill();
	const [g, setG] = useState<number | null>(null);
	const [sel, setSel] = useState<number | null>(null);
	const cur = sel !== null ? tasks.find(x => x.n === sel)! : null;
		return <div>
		<div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'center' }}>
			{groups.map((name, i) => {
				const count = tasks.filter(x => x.g === i).length;
				const on = g === i;
				return <button key={name} type="button" className="live-toggle" onClick={() => { setG(on ? null : i); setSel(null); }} aria-pressed={on}
					style={{ fontFamily: fonts.body, fontSize: 16, fontWeight: 800, cursor: still ? 'default' : 'pointer', padding: '6px 14px', borderRadius: 999, border: `2px solid ${colors.dark}`, background: on || g === null ? PALETTE[i] : colors.white, opacity: g === null || on ? 1 : .55, boxShadow: on ? `3px 3px 0 ${colors.dark}` : 'none' }}>{name} · {count}</button>;
			})}
			{!still && <span style={{ marginLeft: 'auto' }}><Hint>点类别筛选，点任意一项看它做什么</Hint></span>}
		</div>
		<div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 8, marginTop: 12, transform: still ? 'none' : 'perspective(1800px) rotateX(11deg) rotateY(-5deg)', transformOrigin: '50% 0' }}>
			{tasks.map((x, i) => {
				const dim = g !== null && x.g !== g;
				const on = sel === x.n;
				return <motion.button key={x.n} type="button" className="live-toggle" onClick={() => setSel(on ? null : x.n)}
					initial={ini(still, { opacity: 0, rotateY: -75, transformPerspective: 900 })} animate={{ opacity: dim ? .2 : 1, rotateY: 0, transformPerspective: 900, scale: on ? 1.06 : 1, z: 0 }} whileHover={still ? undefined : { y: -5, boxShadow: `5px 7px 0 ${colors.dark}` }}
					transition={{ delay: still ? 0 : g === null && sel === null ? i * .025 : 0, duration: .3 }}
					style={{ position: 'relative', textAlign: 'left', cursor: still ? 'default' : 'pointer', minHeight: 62, borderRadius: 12, border: `2px solid ${colors.dark}`, borderLeft: `8px solid ${PALETTE[x.g]}`, background: on ? colors.dark : colors.white, color: on ? colors.white : colors.dark, padding: '7px 9px', fontFamily: fonts.body, transformOrigin: '0 50%', boxShadow: on ? `4px 4px 0 ${colors.red}` : '0 10px 16px -10px rgba(16,22,47,.45)' }}>
					<span style={{ fontFamily: fonts.mono, fontSize: 11, fontWeight: 700, color: on ? colors.yellow : '#8a847c' }}>{String(x.n).padStart(2, '0')}</span>
					<div style={{ fontSize: x.en ? 14.5 : 15.5, fontWeight: 900, lineHeight: 1.25, marginTop: 1 }}>{x.t}</div>
				</motion.button>;
			})}
		</div>
		<div style={{ marginTop: 12, minHeight: 70, background: colors.dark, color: colors.white, borderRadius: 16, border: `2px solid ${colors.dark}`, padding: '10px 18px', display: 'flex', alignItems: 'center' }}>
			<AnimatePresence mode="wait">
				<motion.div key={cur ? cur.n : 'none'} initial={ini(still, { opacity: 0, y: 6 })} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: .18 }} style={{ width: '100%' }}>
					{cur
						? <div style={{ display: 'grid', gridTemplateColumns: cur.out ? '1fr auto' : '1fr', gap: 16, alignItems: 'center' }}>
							<div><b style={{ color: colors.yellow, fontSize: 18 }}>{String(cur.n).padStart(2, '0')} {cur.t}</b>{cur.en && <span style={{ fontSize: 15, color: '#d8d8dd', marginLeft: 8 }}>（{cur.en}）</span>}<span style={{ fontSize: 17, marginLeft: 10, lineHeight: 1.5 }}>{cur.d}</span></div>
							{cur.out && <span style={{ fontSize: 15, fontWeight: 800, background: colors.yellow, color: colors.dark, borderRadius: 999, padding: '4px 12px', whiteSpace: 'nowrap' }}>交：{cur.out}</span>}
						</div>
						: <span style={{ fontSize: 19, fontWeight: 800, lineHeight: 1.5 }}>{bottom}</span>}
				</motion.div>
			</AnimatePresence>
		</div>
	</div>;
}
