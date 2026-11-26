import { motion, AnimatePresence } from 'framer-motion';
import { Slide, assetPath } from '../ui';
import { colors, fonts } from '../kit';
import { StillScope, useStill, ini, useCycle } from '../live';
import '../cover3d/cover3d.css';

// 一个保险客服 Voice Agent 背后的东西。思路参照 Google Customer Engagement Suite（Conversational Agents、Agent Assist、
// Conversational Insights）与 Google Cloud 实时多 Agent 参考架构（调度 Agent 分给专门的子 Agent）；Agent 划分是按保险客服场景做的设计。
type A = { name: string; role: string; does: string; uses: string; c: string };
const DISPATCH: A = { name: '总调度 Agent', role: '接电话的那一个', does: '听懂客户要办什么，分给对应的业务 Agent；客户中途换话题就重新分流，办不了的转人工', uses: 'Realtime 语音模型 · 意图识别 · 转人工规则', c: colors.yellow };
const BIZ: A[] = [
	{ name: '保单查询', role: '业务 Agent', does: '查保单状态、保障范围、下次缴费日期，按条款原文回答', uses: '保单系统接口 · 条款知识库', c: '#38B6FF' },
	{ name: '理赔报案', role: '业务 Agent', does: '记录出险时间、地点和经过，在理赔系统建报案单，告诉客户接下来要交哪些材料', uses: '理赔系统接口 · 材料清单', c: '#ff5757' },
	{ name: '缴费续保', role: '业务 Agent', does: '查欠费、发缴费链接、提醒续保日期', uses: '支付系统 · 短信', c: '#7ED957' },
	{ name: '资料变更', role: '业务 Agent', does: '改地址、电话前先过身份核验，改完念一遍给客户确认', uses: 'CRM 接口 · 固定核验流程', c: '#CB6CE6' },
];
const SUPPORT: A[] = [
	{ name: '坐席助手', role: '转人工后', does: '人工客服接起电话时，屏幕上已经有通话摘要、客户资料和建议话术', uses: '对应 Google Agent Assist', c: '#FF914D' },
	{ name: '质检总结', role: '每通电话后', does: '写摘要、打分类、标出风险对话，每天给主管一份报告', uses: '对应 Google Conversational Insights', c: '#9fd8ff' },
];
const ALL = [DISPATCH, ...BIZ, ...SUPPORT];
const RULES = ['身份核验', '录音告知', '敏感操作二次确认', '一键转人工'];
const BASE = [['知识库', '保单条款、FAQ、话术'], ['系统接口', '保单、理赔、CRM、支付'], ['护栏与合规', '脱敏、权限、不承诺理赔结果'], ['评估与监控', '评估集、延迟、转人工率']];

function Node({ a, i, at, pick, still, w }: { a: A; i: number; at: number; pick: (i: number) => void; still: boolean; w?: number }) {
	const on = !still && at === i;
	return <motion.button type="button" className="live-toggle" onClick={() => pick(i)}
		initial={ini(still, { opacity: 0, z: -400, transformPerspective: 1000 })} animate={{ opacity: 1, z: on ? 40 : 0, y: on ? -8 : 0, transformPerspective: 1000 }}
		transition={{ delay: still ? 0 : (on ? 0 : .3 + i * .12), duration: .6, ease: [0.16, 1, 0.3, 1] }}
		style={{ width: w, cursor: still ? 'default' : 'pointer', textAlign: 'left', fontFamily: fonts.body, borderRadius: 16, padding: '10px 14px', border: `2px solid ${on ? a.c : 'rgba(255,255,255,.18)'}`, background: on ? '#fffef7' : 'rgba(40,36,70,.92)', color: on ? colors.dark : '#f4f1ff', boxShadow: on ? `0 0 0 4px ${a.c}55, 0 26px 40px -14px ${a.c}` : '0 16px 26px -16px rgba(0,0,0,.8)', transition: 'background .3s, color .3s, border-color .3s, box-shadow .3s' }}>
		<div style={{ fontSize: 12, fontWeight: 800, color: on ? '#514c48' : a.c }}>{a.role}</div>
		<div style={{ fontSize: 20, fontWeight: 900, whiteSpace: 'nowrap' }}>{a.name}</div>
	</motion.button>;
}

function Body() {
	const still = useStill();
	const { at, pick, hover } = useCycle(ALL.length, 3000, still);
	const cur = ALL[at];
	const layer = (d: number) => ({ initial: ini(still, { opacity: 0, y: 40 }), animate: { opacity: 1, y: 0 }, transition: { delay: still ? 0 : d, duration: .6 } });
	return <div data-night style={{ position: 'absolute', inset: 0, background: '#0d0b1c', color: '#f4f1ff', overflow: 'hidden' }}>
		<img src={assetPath('brand/logo-zh-white.png')} alt="" style={{ position: 'absolute', top: 18, right: 22, height: 30, zIndex: 60 }} />
		<div className="c3d-aurora" aria-hidden />
		<div className="c3d-floor" aria-hidden style={{ opacity: .6 }}><div /></div>
		<div style={{ position: 'absolute', left: 64, top: 56, right: 64 }}>
			<div style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 700, color: colors.yellow, letterSpacing: 1 }}>02 · 拆开看一个 Voice Agent</div>
			<div style={{ fontFamily: fonts.heading, fontSize: 40, fontWeight: 900, marginTop: 4 }}>客户听到的是一个声音，背后是 <span style={{ color: colors.yellow }}>7 个 Agent</span> 加一整套系统</div>
		</div>
		{/* 左：3D 分层架构 */}
		<div {...hover} style={{ position: 'absolute', left: 50, top: 150, width: 1000, height: 690, perspective: 1600 }}>
			<div style={{ position: 'absolute', inset: 0, transformStyle: 'preserve-3d', transform: still ? 'none' : 'rotateX(14deg) rotateY(-9deg)', transformOrigin: '50% 60%', display: 'grid', gap: 12, alignContent: 'start' }}>
				<motion.div {...layer(.1)} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 17, fontWeight: 800 }}>
					{['📞 客户来电', '电话线路', 'Realtime 语音模型：边听边说、可以被打断'].map((t, i) => <span key={t} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>{i > 0 && <span style={{ color: colors.yellow }}>→</span>}<span style={{ background: 'rgba(255,255,255,.1)', border: '1px solid rgba(255,255,255,.25)', borderRadius: 999, padding: '6px 14px' }}>{t}</span></span>)}
				</motion.div>
				<div style={{ display: 'flex', justifyContent: 'center' }}><Node a={DISPATCH} i={0} at={at} pick={pick} still={still} w={300} /></div>
				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>{BIZ.map((a, k) => <Node key={a.name} a={a} i={k + 1} at={at} pick={pick} still={still} />)}</div>
				<motion.div {...layer(.9)} style={{ display: 'flex', gap: 8, alignItems: 'center', background: 'rgba(255,222,89,.12)', border: '1.5px dashed rgba(255,222,89,.6)', borderRadius: 14, padding: '8px 14px' }}>
					<span style={{ fontSize: 14, fontWeight: 900, color: colors.yellow, marginRight: 4, whiteSpace: 'nowrap' }}>固定流程（不让模型自由发挥）</span>
					{RULES.map(r => <span key={r} style={{ fontSize: 15, fontWeight: 800, background: colors.yellow, color: colors.dark, borderRadius: 999, padding: '3px 12px' }}>{r}</span>)}
				</motion.div>
				<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>{SUPPORT.map((a, k) => <Node key={a.name} a={a} i={k + 5} at={at} pick={pick} still={still} />)}</div>
				<motion.div {...layer(1.2)} style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10, background: 'rgba(255,255,255,.06)', border: '1px solid rgba(255,255,255,.18)', borderRadius: 16, padding: 10 }}>
					{BASE.map(([t, d]) => <div key={t} style={{ background: 'rgba(20,18,40,.85)', borderRadius: 12, padding: '8px 12px' }}><div style={{ fontSize: 16, fontWeight: 900 }}>{t}</div><div style={{ fontSize: 13, color: '#b9b4cf', marginTop: 2 }}>{d}</div></div>)}
				</motion.div>
			</div>
		</div>
		{/* 右：当前 Agent 说明 */}
		<div style={{ position: 'absolute', left: 1090, top: 170, width: 450 }}>
			{still
				? <div style={{ display: 'grid', gap: 8 }}>{ALL.map(a => <div key={a.name} style={{ fontSize: 13.5, lineHeight: 1.45 }}><b style={{ color: a.c }}>{a.name}</b>：{a.does}</div>)}</div>
				: <AnimatePresence mode="wait">
					<motion.div key={at} initial={{ opacity: 0, rotateY: -30, x: 30 }} animate={{ opacity: 1, rotateY: 0, x: 0 }} exit={{ opacity: 0, rotateY: 30, x: -30 }} transition={{ duration: .4 }}
						style={{ transformPerspective: 1000, background: '#fffef7', color: colors.dark, borderRadius: 22, padding: '20px 24px', borderTop: `10px solid ${cur.c}`, boxShadow: `0 30px 60px -20px ${cur.c}` }}>
						<div style={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 700, color: '#514c48' }}>{at + 1} / {ALL.length} · {cur.role}</div>
						<div style={{ fontSize: 32, fontWeight: 900, marginTop: 4 }}>{cur.name}</div>
						<div style={{ fontSize: 20, lineHeight: 1.55, marginTop: 10, fontWeight: 700 }}>{cur.does}</div>
						<div style={{ fontSize: 15, marginTop: 14, background: '#f4f1ec', borderRadius: 10, padding: '8px 12px' }}><b>用到：</b>{cur.uses}</div>
					</motion.div>
				</AnimatePresence>}
			<div style={{ fontSize: 17, lineHeight: 1.55, marginTop: 22, fontWeight: 700 }}>FDE 要把这 7 个 Agent、固定流程和底下的系统<span style={{ color: colors.yellow }}>全部接起来并上线</span>，这就是上一页那 6 步做的事。</div>
			{!still && <div style={{ fontSize: 13, color: '#8e88a8', marginTop: 10 }}>自动轮播；点任意一个 Agent 停下</div>}
		</div>
		<div style={{ position: 'absolute', left: 64, right: 200, bottom: 58, fontSize: 12, color: '#8e88a8' }}>参考：Google Customer Engagement Suite（Conversational Agents、Agent Assist、Conversational Insights）；Google Cloud 实时多 Agent 参考架构。Agent 划分是按保险客服场景做的设计。</div>
	</div>;
}

export default function S09b_VoiceAgents() {
	return <Slide bg="#0d0b1c" style={{ position: 'relative' }}>
		<StillScope><Body /></StillScope>
	</Slide>;
}
