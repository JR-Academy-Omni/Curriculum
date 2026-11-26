import { motion, AnimatePresence } from 'framer-motion';
import { Slide, assetPath } from '../ui';
import { colors, fonts } from '../kit';
import { StillScope, useStill, ini, useCycle } from '../live';
import '../cover3d/cover3d.css';

// 一个保险客服 Voice Agent 背后的东西。思路参照 Google Customer Engagement Suite（Conversational Agents、Agent Assist、
// Conversational Insights）与 Google Cloud 实时多 Agent 参考架构（调度 Agent 分给专门的子 Agent）；Agent 划分是按保险客服场景做的设计。
type A = { name: string; role: string; does: string; uses: string; c: string };
const DISPATCH: A = { name: 'Router', role: 'In-call · Router Agent', does: '接电话的那一个：听懂客户要办什么，分给对应的 Task Agent；客户中途换话题就重新分流，办不了的转人工。', uses: 'Realtime Voice Model · Intent · Handoff rules', c: colors.yellow };
const BIZ: A[] = [
	{ name: 'Policy', role: 'In-call · Task Agent', does: '查保单状态、保障范围、下次缴费日期，按 PDS 原文回答。', uses: 'Policy Admin API · Product Catalog · Knowledge', c: '#38B6FF' },
	{ name: 'Claims · FNOL', role: 'In-call · Task Agent', does: '记录出险时间、地点和经过，在理赔系统建报案单，告诉客户接下来要交哪些材料。', uses: 'Claims API · Document checklist', c: '#ff5757' },
	{ name: 'Payment', role: 'In-call · Task Agent', does: '查欠费、发缴费链接、提醒续保日期。', uses: 'Payments API · SMS', c: '#7ED957' },
	{ name: 'Profile', role: 'In-call · Task Agent', does: '改地址、电话前先过 ID check，改完念一遍给客户确认。', uses: 'CRM API · Deterministic Flow', c: '#CB6CE6' },
];
const ASSIST: A[] = [
	{ name: 'Sentiment', role: 'In-call · Assist Agent', does: '一直听语气：客户着急、生气或提到投诉，就提醒 Router 尽快转人工。', uses: 'Realtime transcript · Escalation rules', c: '#FF914D' },
	{ name: 'Language', role: 'In-call · Assist Agent', does: '客户说普通话、粤语或其他语言时切换语言，专有名词保持一致。', uses: 'Realtime Voice Model · Glossary', c: '#9fd8ff' },
	{ name: 'Summary', role: 'In-call · Assist Agent', does: '边听边写通话摘要；一旦转人工，人工客服接起电话就能看到前因后果。', uses: 'Realtime transcript · CRM notes', c: '#f472b6' },
];
const CONTEXT: A[] = [
	{ name: 'Memory', role: 'Context Agent · async', does: '一接通就用来电号码预取客户记忆：上次来电说了什么、有没有未结的理赔；挂断后把这通电话写回 Customer Memory。', uses: 'Customer Memory · CRM', c: '#38B6FF' },
	{ name: 'Knowledge', role: 'Context Agent · async', does: '和对话并行跑 RAG：按客户在问的事查 SOP、条款原文和 FAQ，把带出处的片段写进 Session Memory。', uses: 'Enterprise Knowledge · Vector DB', c: '#38B6FF' },
	{ name: 'Product', role: 'Context Agent · async', does: '查客户持有的产品、保障范围、定价规则和对应 PDS 版本，避免按错版本回答。', uses: 'Product Catalog · Policy Admin', c: '#38B6FF' },
];
const SUPPORT: A[] = [
	{ name: 'Agent Assist', role: 'Handoff Agent', does: '人工客服接起电话时，屏幕上已经有摘要、客户资料和建议话术，通话中继续给提示。', uses: '对应 Google Agent Assist', c: '#FF914D' },
	{ name: 'KB Search', role: 'Handoff Agent', does: '人工客服边聊边问，它从条款和内部流程里找原文给出处。', uses: 'Knowledge Base · RAG', c: '#38B6FF' },
	{ name: 'QA', role: 'Post-call Agent', does: '给每通电话打分（LLM-as-judge）：问题解决没有、有没有说错、语气是否得体。', uses: 'Transcript · Rubric · Eval Set', c: '#7ED957' },
	{ name: 'Compliance', role: 'Post-call Agent', does: '检查有没有承诺理赔结果、有没有做录音告知、有没有泄露个人信息。', uses: 'Policy rules · Audit log', c: '#CB6CE6' },
	{ name: 'Insight', role: 'Post-call Agent', does: '把来电归类，每天给主管一份报告：哪类问题变多、哪里转人工最多。', uses: '对应 Google Conversational Insights', c: '#9fd8ff' },
	{ name: 'Callback', role: 'Post-call Agent', does: '报案后缺材料的客户，按时间提醒补交（发短信或外呼）。', uses: 'Claims API · SMS · Outbound call', c: '#ff5757' },
];
const ALL = [DISPATCH, ...BIZ, ...ASSIST, ...CONTEXT, ...SUPPORT];
const RULES = ['ID check', 'Recording notice', 'Confirm sensitive actions', 'One-tap handoff'];
const BASE = [['Agent Harness', 'Tools · Memory · Hooks · Tracing'], ['Memory & Knowledge', 'Customer · Session · SOP · Products'], ['Tool Gateway', 'Policy · Claims · CRM · Pay'], ['Governance', 'PII · AuthZ · Audit'], ['Eval & Observability', 'Eval set · Latency · Cost']];

function Node({ a, i, at, pick, still, w }: { a: A; i: number; at: number; pick: (i: number) => void; still: boolean; w?: number }) {
	const on = !still && at === i;
	return <motion.button type="button" className="live-toggle" onClick={() => pick(i)}
		initial={ini(still, { opacity: 0, z: -400, transformPerspective: 1000 })} animate={{ opacity: 1, z: on ? 40 : 0, y: on ? -8 : 0, transformPerspective: 1000 }}
		transition={{ delay: still ? 0 : (on ? 0 : .3 + i * .12), duration: .6, ease: [0.16, 1, 0.3, 1] }}
		style={{ width: w, cursor: still ? 'default' : 'pointer', textAlign: 'left', fontFamily: fonts.body, borderRadius: 16, padding: '8px 12px', border: `2px solid ${on ? a.c : 'rgba(255,255,255,.18)'}`, background: on ? '#fffef7' : 'rgba(40,36,70,.92)', color: on ? colors.dark : '#f4f1ff', boxShadow: on ? `0 0 0 4px ${a.c}55, 0 26px 40px -14px ${a.c}` : '0 16px 26px -16px rgba(0,0,0,.8)', transition: 'background .3s, color .3s, border-color .3s, box-shadow .3s' }}>
		<div style={{ fontSize: 12, fontWeight: 800, color: on ? '#514c48' : a.c }}>{a.role}</div>
		<div style={{ fontSize: 18, fontWeight: 900, whiteSpace: 'nowrap' }}>{a.name}</div>
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
			<div style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 700, color: colors.yellow, letterSpacing: 1 }}>02 · Zoom in: Agents</div>
			<div style={{ fontFamily: fonts.heading, fontSize: 40, fontWeight: 900, marginTop: 4 }}>客户听到的是一个声音，背后是 <span style={{ color: colors.yellow }}>17 个 Agent</span> 加一整套系统</div>
		</div>
		{/* 左：3D 分层架构 */}
		<div {...hover} style={{ position: 'absolute', left: 50, top: 150, width: 1000, height: 690, perspective: 1600 }}>
			<div style={{ position: 'absolute', inset: 0, transformStyle: 'preserve-3d', transform: still ? 'none' : 'rotateX(14deg) rotateY(-9deg)', transformOrigin: '50% 60%', display: 'grid', gap: 10, alignContent: 'start' }}>
				<motion.div {...layer(.1)} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 17, fontWeight: 800 }}>
					{['📞 Caller', 'Telephony', 'Realtime Voice Model · Barge-in'].map((t, i) => <span key={t} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>{i > 0 && <span style={{ color: colors.yellow }}>→</span>}<span style={{ background: 'rgba(255,255,255,.1)', border: '1px solid rgba(255,255,255,.25)', borderRadius: 999, padding: '6px 14px' }}>{t}</span></span>)}
				</motion.div>
				<div style={{ display: 'flex', justifyContent: 'center' }}><Node a={DISPATCH} i={0} at={at} pick={pick} still={still} w={300} /></div>
				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>{BIZ.map((a, k) => <Node key={a.name} a={a} i={k + 1} at={at} pick={pick} still={still} />)}</div>
				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>{ASSIST.map((a, k) => <Node key={a.name} a={a} i={k + 5} at={at} pick={pick} still={still} />)}</div>
				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>{CONTEXT.map((a, k) => <Node key={a.name} a={a} i={k + 8} at={at} pick={pick} still={still} />)}</div>
				<motion.div {...layer(.9)} style={{ display: 'flex', gap: 8, alignItems: 'center', background: 'rgba(255,222,89,.12)', border: '1.5px dashed rgba(255,222,89,.6)', borderRadius: 14, padding: '8px 14px' }}>
					<span style={{ fontSize: 14, fontWeight: 900, color: colors.yellow, marginRight: 4, whiteSpace: 'nowrap' }}>Deterministic Flows</span>
					{RULES.map(r => <span key={r} style={{ fontSize: 15, fontWeight: 800, background: colors.yellow, color: colors.dark, borderRadius: 999, padding: '3px 12px' }}>{r}</span>)}
				</motion.div>
				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 10 }}>{SUPPORT.map((a, k) => <Node key={a.name} a={a} i={k + 11} at={at} pick={pick} still={still} />)}</div>
				<motion.div {...layer(1.2)} style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 10, background: 'rgba(255,255,255,.06)', border: '1px solid rgba(255,255,255,.18)', borderRadius: 16, padding: 10 }}>
					{BASE.map(([t, d]) => <div key={t} style={{ background: 'rgba(20,18,40,.85)', borderRadius: 12, padding: '8px 12px' }}><div style={{ fontSize: 16, fontWeight: 900 }}>{t}</div><div style={{ fontSize: 13, color: '#b9b4cf', marginTop: 2 }}>{d}</div></div>)}
				</motion.div>
			</div>
		</div>
		{/* 右：当前 Agent 说明 */}
		<div style={{ position: 'absolute', left: 1090, top: 170, width: 420 }}>
			{still
				? <div style={{ display: 'grid', gap: 3 }}>{ALL.map(a => <div key={a.name} style={{ fontSize: 10.5, lineHeight: 1.3 }}><b style={{ color: a.c }}>{a.name}</b>：{a.does}</div>)}</div>
				: <AnimatePresence mode="wait">
					<motion.div key={at} initial={{ opacity: 0, rotateY: -30, x: 30 }} animate={{ opacity: 1, rotateY: 0, x: 0 }} exit={{ opacity: 0, rotateY: 30, x: -30 }} transition={{ duration: .4 }}
						style={{ transformPerspective: 1000, background: '#fffef7', color: colors.dark, borderRadius: 22, padding: '20px 24px', borderTop: `10px solid ${cur.c}`, boxShadow: `0 30px 60px -20px ${cur.c}` }}>
						<div style={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 700, color: '#514c48' }}>{at + 1} / {ALL.length} · {cur.role}</div>
						<div style={{ fontSize: 32, fontWeight: 900, marginTop: 4 }}>{cur.name}</div>
						<div style={{ fontSize: 20, lineHeight: 1.55, marginTop: 10, fontWeight: 700 }}>{cur.does}</div>
						<div style={{ fontSize: 15, marginTop: 14, background: '#f4f1ec', borderRadius: 10, padding: '8px 12px' }}><b>Uses: </b>{cur.uses}</div>
					</motion.div>
				</AnimatePresence>}
			<div style={{ fontSize: still ? 13 : 17, lineHeight: 1.55, marginTop: still ? 10 : 22, fontWeight: 700 }}>FDE 要把这 17 个 Agent、Deterministic Flows 和底下的系统<span style={{ color: colors.yellow, display: 'inline-block' }}>全部接起来并上线</span>。上一页是整套系统，这一页放大其中的 Agent 层。</div>
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
