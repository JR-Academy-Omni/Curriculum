import { motion, AnimatePresence } from 'framer-motion';
import { DeckFrame, colors, fonts } from '../kit';
import { StillScope, useStill, ini, Toggle, Hint, useCycle } from '../live';

const stages = [
	{ when: '2023', name: 'ChatGPT 和三大云跟进', what: '企业都在做 demo；CBA 搭起 Gen.ai Studio', who: '数据科学家、ML 工程师' },
	{ when: '2024–2025', name: '企业开始自建 AI 团队', what: '第一批项目真正上线，稳不稳定、值不值这个钱，问题都冒出来了', who: '有生产落地经验的人' },
	{ when: '2025–2026', name: '泡沫退一点，人人都能搭', what: '高价招来的人也解决不了落地难题；咨询公司重新入场，不懂技术的人也开始自己搭 AI 工具', who: '咨询公司；企业开始反思要不要这么多工程师' },
	{ when: '现在', name: '派人到客户现场落地', what: '工程师到客户那里驻场两周，交付真正能用的系统；不再另配 BA 和 PM', who: '全栈、又能直接面对客户的人' },
];

function Body() {
	const still = useStill();
	const last = stages.length - 1;
	const { at, pick: setAt, hover } = useCycle(stages.length, 2800, still, still ? last : 0);
	return <div>
		{/* 进度轨道：四个节点，线随所选阶段画过去 */}
		<div style={{ position: 'relative', height: 54, margin: '0 60px 8px' }}>
			<div style={{ position: 'absolute', left: 0, right: 0, top: 25, height: 4, background: 'rgba(16,22,47,.15)', borderRadius: 2 }} />
			<motion.div initial={ini(still, { width: '0%' })} animate={{ width: `${(at / last) * 100}%` }} transition={{ duration: .6, ease: [0.16, 1, 0.3, 1] }} style={{ position: 'absolute', left: 0, top: 25, height: 4, background: colors.red, borderRadius: 2 }} />
			{!still && at < last && <div key={at} className="dash-run" style={{ position: 'absolute', left: `${(at / last) * 100}%`, width: `${100 / last}%`, top: 25, height: 4, color: colors.red }} />}
			{stages.map((s, i) => <button key={s.when} type="button" onClick={() => setAt(i)} aria-label={`${s.when} ${s.name}`} className="live-toggle"
				style={{ position: 'absolute', left: `${(i / last) * 100}%`, top: 6, transform: 'translateX(-50%)', width: 42, height: 42, borderRadius: '50%', cursor: 'pointer', border: `3px solid ${colors.dark}`, background: i <= at ? (i === at ? colors.yellow : colors.red) : colors.white, fontFamily: fonts.mono, fontWeight: 800, fontSize: 17, color: colors.dark, transition: 'background .25s' }}>{i + 1}</button>)}
		</div>
		<div className="flow3d" {...hover} style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 22 }}>
			{stages.map((s, i) => {
				const on = i === at, now = i === last;
				return <motion.div key={s.name} onClick={() => setAt(i)} className={`step3d${on && !still ? ' on' : ''}`}
					initial={ini(still, { opacity: 0 })}
					animate={{ opacity: still || i <= at ? 1 : .38 }}
					transition={{ duration: .35 }}
					style={{ cursor: 'pointer', background: now ? colors.dark : colors.white, color: now ? colors.white : colors.dark, border: `2px solid ${colors.dark}`, borderRadius: 20, padding: '18px 18px', boxShadow: `${on ? 9 : 5}px ${on ? 9 : 5}px 0 ${now ? colors.red : on ? colors.yellow : colors.dark}${on && !still ? ', 0 30px 56px -14px rgba(16,22,47,.45)' : ''}`, display: 'flex', flexDirection: 'column', gap: 12, minHeight: 300 }}>
					<span style={{ fontFamily: fonts.mono, fontSize: 18, fontWeight: 700, color: now ? colors.yellow : colors.red }}>{s.when}</span>
					<div style={{ fontSize: 27, fontWeight: 900, lineHeight: 1.25 }}>{s.name}</div>
					<div style={{ fontSize: 20, lineHeight: 1.55 }}>{s.what}</div>
					{still && <div style={{ marginTop: 'auto', borderTop: '2px dashed rgba(127,127,127,.45)', paddingTop: 10, fontSize: 19, fontWeight: 800 }}>谁最吃香：{s.who}</div>}
				</motion.div>;
			})}
		</div>
		{/* 当前阶段「谁最吃香」：随选择切换 */}
		<div style={{ marginTop: 22, display: 'flex', alignItems: 'center', gap: 18, background: colors.yellow, border: `2px solid ${colors.dark}`, borderRadius: 18, padding: '14px 22px', minHeight: 64 }}>
			<span style={{ fontSize: 18, fontWeight: 800, whiteSpace: 'nowrap' }}>{stages[at].when} · 谁最吃香</span>
			<AnimatePresence mode="wait">
				<motion.span key={at} initial={ini(still, { opacity: 0, x: 18 })} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -18 }} transition={{ duration: .25 }} style={{ fontSize: 27, fontWeight: 900 }}>{stages[at].who}</motion.span>
			</AnimatePresence>
			<span style={{ marginLeft: 'auto', display: 'flex', gap: 10, alignItems: 'center' }}>
				<Hint>会自动轮播；点数字或卡片就停下</Hint>
				{!still && <Toggle active={false} onClick={() => setAt(a => Math.min(a + 1, last))}>下一阶段 →</Toggle>}
			</span>
		</div>
		<div style={{ fontSize: 15, color: '#514c48', marginTop: 12 }}>来源：匠人学院《澳洲 AI 变迁时间进程图》，2026-09 制图；澳洲落地时间为估计值，基于一线从业观察与本地标志事件</div>
	</div>;
}

export default function C06_Timeline() {
	return <DeckFrame tag="01 · AI 这三年" title="澳洲 AI 落地，走到了哪一步" subtitle="企业的问题，从「能不能做个 demo」变成了「谁来让它真正用起来」。">
		<StillScope><Body /></StillScope>
	</DeckFrame>;
}
