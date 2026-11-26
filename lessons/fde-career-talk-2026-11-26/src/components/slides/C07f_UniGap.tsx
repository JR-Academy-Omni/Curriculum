import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Slide } from '../ui';
import { colors, fonts } from '../kit';
import { StillScope, useStill, ini, Count } from '../live';
import { SKILLS, SKILL_GROUPS, MID_SWE, type Skill } from '../../data/jobReady';

// 本页单独版式：顶部一条窄栏（标题 + 筛选 + 数字），下面 12 张能力卡铺满全屏
type Role = 'se' | 'aie' | 'fde' | 'dev';
const ROLES: { k: Role; name: string; c: string; fg: string }[] = [
	{ k: 'se', name: 'Software Engineer', c: colors.blue, fg: colors.white },
	{ k: 'aie', name: 'AI Engineer', c: colors.purple, fg: colors.white },
	{ k: 'fde', name: 'FDE', c: colors.orange, fg: colors.dark },
	{ k: 'dev', name: 'DevOps Engineer', c: '#10b981', fg: colors.white },
];
const UNI_C = '#7ED957';
const GROUP_C = ['#8a847c', '#38B6FF', '#0ea5e9', '#6366f1', '#FF914D', '#10b981', '#FFDE59', '#f472b6', '#CB6CE6', '#10162f', '#ff5757', '#FF914D'];
const taught = (x: Skill) => x.unsw !== 'no';
const COVER_TAG: Record<string, string> = { core: '必修', part: '讲了一部分', elective: '选修' };
const COLS = [[0, 1, 2], [10, 3, 7], [11, 6, 9], [4, 5], [8]];

function Body() {
	const still = useStill();
	const [role, setRole] = useState<Role | null>(still ? 'aie' : null);
	const [ov, setOv] = useState<'uni' | 'mid' | null>(still ? 'uni' : null);
	const uni = ov !== null;
	const covered = (x: Skill) => (ov === 'mid' ? MID_SWE.has(x.t) : taught(x));
	const OV_C = ov === 'mid' ? '#38B6FF' : UNI_C;
	const ovName = ov === 'mid' ? 'Mid 级 SWE 已经会' : '大学教到';
	const [sel, setSel] = useState<number | null>(null);
	const r = role ? ROLES.find(x => x.k === role)! : null;
	const inPool = (x: Skill) => (role ? x[role] : true);
	const lit = (x: Skill) => inPool(x) && (uni ? covered(x) : true);
	const pool = SKILLS.filter(inPool);
	const shown = SKILLS.filter(lit).length;
	const cur = sel !== null ? SKILLS[sel] : null;
	const label = r && uni ? `${r.name} 要 ${pool.length} 项，${ovName}` : r ? `${r.name} 要` : uni ? `${SKILLS.length} 项里，${ovName}` : 'Job Ready 要';
	const btn = (active: boolean, bg: string, fg: string) => ({ fontFamily: fonts.body, fontSize: 15.5, fontWeight: 900, cursor: still ? 'default' : 'pointer', padding: '6px 13px', borderRadius: 999, border: `2.5px solid ${colors.dark}`, background: active ? bg : colors.white, color: active ? fg : colors.dark, boxShadow: active ? `3px 3px 0 ${colors.dark}` : 'none', whiteSpace: 'nowrap' as const });

	return <div style={{ position: 'absolute', inset: 0, padding: '62px 64px 40px', display: 'flex', flexDirection: 'column', gap: 10 }}>
		<div style={{ display: 'flex', alignItems: 'center', gap: 12, height: 50 }}>
			<div style={{ lineHeight: 1.15, marginRight: 6 }}>
				<div style={{ fontFamily: fonts.mono, fontSize: 12, fontWeight: 700, color: colors.red, letterSpacing: 1 }}>01 · 大学 vs 岗位</div>
				<div style={{ fontFamily: fonts.heading, fontSize: 22, fontWeight: 900, whiteSpace: 'nowrap' }}>Job Ready 要哪些能力？大学教了多少？</div>
			</div>
			{ROLES.map(x => <button key={x.k} type="button" className="live-toggle" onClick={() => { setRole(role === x.k ? null : x.k); setSel(null); }} aria-pressed={role === x.k} style={{ ...btn(role === x.k, x.c, x.fg), position: 'relative' }}>{x.name}{(x.k === 'aie' || x.k === 'fde') && <span style={{ position: 'absolute', top: -13, right: -10, fontSize: 11.5, fontWeight: 900, color: colors.white, background: colors.red, border: `2px solid ${colors.dark}`, borderRadius: 999, padding: '0 7px', lineHeight: '17px', transform: 'rotate(8deg)', whiteSpace: 'nowrap' }}>🔥 最火</span>}</button>)}
						<button type="button" className="live-toggle" onClick={() => setOv(ov === 'uni' ? null : 'uni')} aria-pressed={ov === 'uni'} style={btn(ov === 'uni', UNI_C, colors.dark)}>大学教的（UNSW 为例）</button>
			<div className="float" style={{ marginLeft: 'auto', marginRight: 96, marginTop: 6, transform: 'rotate(-3deg)', background: colors.yellow, border: `2.5px solid ${colors.dark}`, borderRadius: 14, boxShadow: `4px 4px 0 ${colors.red}`, padding: '4px 16px', lineHeight: 1.15, textAlign: 'center', whiteSpace: 'nowrap' }}>
				<div style={{ fontFamily: fonts.heading, fontSize: 21, fontWeight: 900 }}>早上车，早上岸</div>
				<div style={{ fontSize: 13, fontWeight: 800 }}>现在上车，要求最低</div>
			</div>
		</div>
		<div style={{ display: 'flex', alignItems: 'center', gap: 14, height: 40, background: colors.dark, color: colors.white, borderRadius: 12, padding: '0 18px' }}>
			<AnimatePresence mode="wait">
				{cur
					? <motion.span key={`s${sel}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ fontSize: 16 }}>
						<b style={{ color: colors.yellow }}>{cur.t}</b>　{cur.unsw !== 'no' ? `大学：${COVER_TAG[cur.unsw]} · ${cur.course}` : '大学：没有对应课程'}　·　要的岗位：{[cur.se && 'Software Engineer', cur.aie && 'AI Engineer', cur.fde && 'FDE', cur.dev && 'DevOps Engineer'].filter(Boolean).join('、') || 'JD 很少直接要求'}</motion.span>
					: <motion.span key={`n${role}${ov}`} initial={ini(still, { opacity: 0 })} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
						<span style={{ fontSize: 16, fontWeight: 700 }}>{label}</span>
						<span style={{ fontSize: 30, fontWeight: 900, lineHeight: 1, color: uni ? OV_C : colors.yellow }}><Count value={shown} /></span>
						<span style={{ fontSize: 16, fontWeight: 700 }}>项{uni ? '，暗下去的要自己补' : ''}</span>
					</motion.span>}
			</AnimatePresence>
			<span style={{ marginLeft: 'auto', fontSize: 12, color: '#a9a7b8' }}>岗位：匠人学习路线图（含 DevOps、AWS）、澳洲 JD、FDE Tech 课程　大学：UNSW 2026 Handbook　点任意一项看课号</span>
		</div>
		<div style={{ flex: 1, minHeight: 0, display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr 1.3fr', gap: 10, alignItems: 'start' }}>
			{COLS.map((col, k) => <div key={k} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>{col.map((gi, j) => { const ci = k * 3 + j;
				const items = SKILLS.map((x, i) => ({ x, i })).filter(o => o.x.g === gi);
				const litN = items.filter(o => lit(o.x)).length;
				const needN = items.filter(o => inPool(o.x)).length;
				const empty = (role || uni) && litN === 0;
				return <motion.div key={gi} initial={ini(still, { opacity: 0, y: 16 })} animate={{ opacity: empty ? .6 : 1, y: 0 }} transition={{ delay: still ? 0 : ci * .04 }}
					style={{ background: colors.white, border: `2px solid ${colors.dark}`, borderRadius: 18, borderTop: `8px solid ${GROUP_C[gi]}`, padding: '7px 11px 9px', display: 'flex', flexDirection: 'column', gap: 5, boxShadow: empty ? 'none' : '4px 4px 0 rgba(16,22,47,.12)' }}>
					<div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
						<span style={{ fontSize: 15.5, fontWeight: 900 }}>{SKILL_GROUPS[gi]}{gi === 11 && <span style={{ fontSize: 12, fontWeight: 700, color: colors.red, marginLeft: 6 }}>重点</span>}{gi === 10 && <span style={{ fontSize: 12, fontWeight: 700, color: colors.red, marginLeft: 6 }}>开发岗都要</span>}{gi === 8 && <span style={{ fontSize: 12, fontWeight: 700, color: '#514c48', marginLeft: 6 }}>按训练营 10 个 Phase</span>}</span>
						<span style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 700, color: empty ? colors.red : '#514c48' }}>{role || uni ? `${litN}/${role && uni ? needN : items.length}` : items.length}</span>
					</div>
					<div style={{ display: 'flex', flexWrap: 'wrap', gap: 3, alignContent: 'flex-start' }}>
						{items.map(({ x, i }) => {
							const on = lit(x), hit = sel === i;
							return <motion.button key={x.t} type="button" className="live-toggle" onClick={() => setSel(hit ? null : i)}
								animate={{ opacity: on ? 1 : inPool(x) ? .3 : .15, scale: hit ? 1.05 : 1 }} transition={{ duration: .25 }}
								style={{ fontFamily: fonts.body, fontSize: 12.5, fontWeight: 800, lineHeight: 1.2, cursor: still ? 'default' : 'pointer', padding: '2px 6px', borderRadius: 9,
									border: `1.5px solid ${on ? colors.dark : 'rgba(16,22,47,.22)'}`,
									background: !on ? '#f4f1ec' : uni ? OV_C : r ? r.c : '#fff8f2',
									color: on && ((r && !uni && r.fg === colors.white) || ov === 'mid') ? colors.white : colors.dark,
									boxShadow: hit ? `2px 2px 0 ${colors.dark}` : 'none' }}>{x.t}</motion.button>;
						})}
					</div>
				</motion.div>;
			})}</div>)}
		</div>
	</div>;
}

export default function C07f_UniGap() {
	return <Slide bg={colors.warmBg} style={{ position: 'relative' }}>
		<StillScope><Body /></StillScope>
	</Slide>;
}
