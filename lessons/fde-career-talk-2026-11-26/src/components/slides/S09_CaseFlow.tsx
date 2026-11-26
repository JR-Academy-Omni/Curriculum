import { motion, AnimatePresence } from 'framer-motion';
import { Slide, assetPath } from '../ui';
import { colors, fonts } from '../kit';
import { StillScope, useStill, useCycle } from '../live';
import '../cover3d/cover3d.css';

// 保险公司 Realtime Voice 客服的 System Design。组件划分参照 Google Customer Engagement Suite 与实时多 Agent 参考架构，
// 按保险客服场景做的设计；「一秒内」是设计目标，不是实测数据。
type Tag = 'agent' | 'eval' | 'gov' | 'harness' | 'ctx';
type Box = { id: string; x: number; y: number; w: number; h?: number; t: string; s: string; tone?: string; tags?: [Tag, string][] };
const TAG_C: Record<Tag, string> = { agent: '#FFDE59', eval: '#7ED957', gov: '#CB6CE6', harness: '#FF914D', ctx: '#38B6FF' };
const H = 60;
// Agent 划分（按保险客服场景的设计，共 17 个）：通话中 8、Context 3（异步预取，不占语音路径）、转人工后 2、挂断后 4
const BOXES: Box[] = [
	{ id: 'caller', x: 20, y: 14, w: 150, t: 'Caller', s: 'Phone · App' },
	{ id: 'sip', x: 205, y: 14, w: 170, t: 'Telephony', s: 'SIP trunk · Routing' },
	{ id: 'media', x: 410, y: 14, w: 190, t: 'Media Gateway', s: 'WebSocket audio stream' },
	{ id: 'session', x: 635, y: 14, w: 200, t: 'Realtime Session', s: 'VAD · Barge-in · State' },
	{ id: 'model', x: 870, y: 14, w: 190, t: 'Realtime Voice Model', s: 'Speech-to-speech', tone: '#38B6FF' },
	{ id: 'harness', x: 205, y: 92, w: 855, h: 36, t: 'Agent Harness', s: 'Tool registry · Context & Memory · Prompt versions · Retries & Timeouts · Hooks · Tracing', tone: '#FF914D', tags: [['harness', 'Harness']] },
	{ id: 'rules', x: 870, y: 142, w: 190, t: 'Deterministic Flows', s: 'ID check · Notice', tone: '#CB6CE6', tags: [['gov', 'Governance']] },
	{ id: 'orch', x: 635, y: 142, w: 200, t: 'In-call Agents', s: 'Router · 4 Task · 3 Assist', tone: colors.yellow, tags: [['agent', 'Agent ×8']] },
	{ id: 'gw', x: 410, y: 142, w: 190, t: 'Tool Gateway', s: 'API · AuthZ · Audit log', tags: [['gov', 'Governance']] },
	{ id: 'guard', x: 205, y: 142, w: 170, t: 'Guardrails', s: 'PII · No claim promises', tone: '#CB6CE6', tags: [['gov', 'Governance']] },
	{ id: 'policy', x: 20, y: 230, w: 130, t: 'Policy Admin', s: 'Core system' },
	{ id: 'claims', x: 165, y: 230, w: 130, t: 'Claims', s: 'FNOL' },
	{ id: 'crm', x: 310, y: 230, w: 120, t: 'CRM', s: 'Profiles' },
	{ id: 'pay', x: 445, y: 230, w: 120, t: 'Payments', s: 'Payment link' },
	{ id: 'ctxag', x: 600, y: 230, w: 250, t: 'Context Agents (async)', s: 'Prefetch in parallel', tone: '#38B6FF', tags: [['agent', 'Agent ×3'], ['ctx', 'Context']] },
	{ id: 'handoff', x: 870, y: 230, w: 190, t: 'Human Handoff', s: 'Agent Assist · KB Search', tone: '#FF914D', tags: [['agent', 'Agent ×2']] },
	{ id: 'cmem', x: 20, y: 330, w: 250, t: 'Customer Memory', s: 'Past calls · Open claims', tone: '#38B6FF', tags: [['ctx', 'Memory']] },
	{ id: 'smem', x: 290, y: 330, w: 230, t: 'Session Memory', s: 'Call state · Running summary', tone: '#38B6FF', tags: [['ctx', 'Memory']] },
	{ id: 'know', x: 540, y: 330, w: 260, t: 'Enterprise Knowledge · RAG', s: 'SOP · Policy wording · FAQ', tone: '#38B6FF', tags: [['ctx', 'Knowledge']] },
	{ id: 'prod', x: 820, y: 330, w: 240, t: 'Product Catalog', s: 'Coverage · Pricing · PDS', tone: '#38B6FF', tags: [['ctx', 'Product']] },
	{ id: 'store', x: 20, y: 432, w: 180, t: 'Recordings', s: 'Encrypted · Retention', tags: [['gov', 'Governance']] },
	{ id: 'qa', x: 230, y: 432, w: 250, t: 'Post-call Agents', s: 'QA · Compliance · Insight · Callback', tags: [['agent', 'Agent ×4'], ['eval', 'Eval']] },
	{ id: 'eval', x: 510, y: 432, w: 190, t: 'Eval Set', s: 'Hard cases · Regression', tone: '#7ED957', tags: [['eval', 'Eval']] },
	{ id: 'mon', x: 730, y: 432, w: 330, t: 'Observability', s: 'Latency · Containment · Transfer rate · Cost', tags: [['eval', 'Eval']] },
];
// 连线 [起, 止]；第一段是实时音频热路径
const HOT = ['caller', 'sip', 'media', 'session', 'model'];
const EDGES: [string, string][] = [['session', 'orch'], ['orch', 'rules'], ['orch', 'gw'], ['gw', 'guard'], ['gw', 'policy'], ['gw', 'claims'], ['gw', 'crm'], ['gw', 'pay'], ['orch', 'handoff'], ['orch', 'ctxag'], ['ctxag', 'cmem'], ['ctxag', 'smem'], ['ctxag', 'know'], ['ctxag', 'prod'], ['store', 'qa'], ['qa', 'eval'], ['eval', 'mon']];
const STEPS = [
	{ t: 'Connect & Talk', on: ['caller', 'sip', 'media', 'session', 'model'], d: '电话经 SIP 进来，Media Gateway 用 WebSocket 双向传音频；客户一开口就能 Barge-in 打断，回应目标在一秒内。' },
	{ t: 'In-call: 8 Agents', on: ['session', 'harness', 'orch', 'rules'], d: 'Router Agent 把事分给 Policy、Claims、Payment、Profile 4 个 Task Agent；Sentiment、Language、Summary 3 个 Assist Agent 一直在旁边跑。ID check 走 Deterministic Flow。' },
	{ t: 'Agent Harness', on: ['harness', 'orch', 'handoff', 'qa', 'mon'], d: '17 个 Agent 都跑在 Harness 里：统一管 Tool registry、Context & Memory、Prompt versions、Retries & Timeouts；Hooks 在调用前后插检查，Tracing 记下每一步。' },
	{ t: 'Context: 3 Agents (async)', on: ['orch', 'ctxag', 'cmem', 'smem', 'know', 'prod'], d: '检索不让 In-call Agent 自己做，太慢：一接通，Memory Agent 用来电号码预取客户记忆和未结理赔；Knowledge Agent、Product Agent 并行查 SOP、条款和产品规则，结果写进 Session Memory。In-call Agent 只读现成的上下文，语音不卡。' },
	{ t: 'Tools & Systems', on: ['orch', 'gw', 'policy', 'claims', 'crm', 'pay'], d: 'Agent 不直连核心系统：查保单、建报案单、改资料、发缴费链接，全部经 Tool Gateway 调 Policy Admin、Claims、CRM、Payments。' },
	{ t: 'Governance', on: ['gw', 'guard', 'rules', 'store'], d: 'AuthZ：Agent 只能查和登记，不能批理赔；Audit log：每次系统调用都留记录；PII 脱敏、录音按 Retention policy 保存；敏感操作走 Deterministic Flow 并让客户确认。' },
	{ t: 'Human Handoff: 2 Agents', on: ['orch', 'handoff'], d: '判断不了、客户情绪激动或要求人工时，带着 Summary 转到联络中心；Agent Assist 和 KB Search 两个 Agent 实时给人工客服提示。' },
	{ t: 'Eval: 4 Post-call Agents', on: ['store', 'qa', 'eval', 'mon'], d: 'QA Agent 给每通电话打分（LLM-as-judge），Compliance Agent 查有没有说错话，Insight Agent 归类来电，Callback Agent 提醒补材料；出错和转人工的进 Eval Set，改动先跑 Regression。' },
];
const FDE = ['驻场听电话，定第一版接哪些', '和 IT、合规定权限', '用历史录音测打断和口音', '接系统，上线第一版', '先接一小部分来电', '看指标，按周改'];

const byId = Object.fromEntries(BOXES.map(b => [b.id, b]));
function path(a: Box, b: Box) {
	if (a.y === b.y) { const [l, r] = a.x < b.x ? [a, b] : [b, a]; return `M${l.x + l.w} ${l.y + (l.h ?? H) / 2} H${r.x}`; }
	const [u, d] = a.y < b.y ? [a, b] : [b, a];
	const x1 = u.x + u.w / 2, x2 = d.x + d.w / 2, y1 = u.y + (u.h ?? H), y2 = d.y, my = y2 - y1 > 100 ? y2 - 14 : (y1 + y2) / 2;
	return x1 === x2 ? `M${x1} ${y1} V${y2}` : `M${x1} ${y1} V${my} H${x2} V${y2}`;
}

function Body() {
	const still = useStill();
	const { at, pick, hover } = useCycle(STEPS.length, 3400, still);
	const lit = new Set(still ? BOXES.map(b => b.id) : STEPS[at].on);
	const W = 1080, DH = 500;
	return <div data-night style={{ position: 'absolute', inset: 0, background: '#0d0b1c', color: '#f4f1ff', overflow: 'hidden' }}>
		<img src={assetPath('brand/logo-zh-white.png')} alt="" style={{ position: 'absolute', top: 18, right: 22, height: 30, zIndex: 60 }} />
		<div className="c3d-aurora" aria-hidden style={{ opacity: .6 }} />
		<div aria-hidden style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(125,170,255,.07) 1px, transparent 1px), linear-gradient(90deg, rgba(125,170,255,.07) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
		<div style={{ position: 'absolute', left: 64, top: 52 }}>
			<div style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 700, color: colors.yellow, letterSpacing: 1 }}>02 · 一个 FDE 项目 · System Design</div>
			<div style={{ fontFamily: fonts.heading, fontSize: 38, fontWeight: 900, marginTop: 4 }}>保险公司 Realtime Voice 客服，整套系统长这样</div>
			<div style={{ display: 'flex', gap: 10, marginTop: 8, alignItems: 'center' }}>{[['agent', '17 Agents: In-call 8 · Context 3 · Handoff 2 · Post-call 4'], ['harness', 'Agent Harness'], ['ctx', 'Memory · Knowledge · Product'], ['eval', 'Eval'], ['gov', 'Governance']].map(([k, l]) => <span key={k} style={{ fontSize: 13.5, fontWeight: 900, color: colors.dark, background: TAG_C[k as Tag], borderRadius: 999, padding: '3px 12px' }}>{l}</span>)}</div>
		</div>
		{/* 架构图 */}
		<div {...hover} style={{ position: 'absolute', left: 50, top: 190, width: W, height: DH, perspective: 1800 }}>
			<div style={{ position: 'absolute', inset: 0, transform: still ? 'none' : 'rotateX(8deg) rotateY(-5deg)', transformOrigin: '50% 40%', transformStyle: 'preserve-3d' }}>
				{[['Realtime Voice', 4, 82], ['Harness & Agents', 84, 128], ['Systems of Record', 220, 80], ['Memory & Knowledge', 320, 80], ['Post-call', 422, 80]].map(([t, y, h]) => <div key={t as string} style={{ position: 'absolute', left: 0, top: y as number, width: W, height: h as number, borderRadius: 18, border: '1px dashed rgba(255,255,255,.16)' }}>
					<span style={{ position: 'absolute', left: 12, top: -11, fontSize: 12, fontWeight: 800, color: '#8e88a8', background: '#0d0b1c', padding: '0 8px' }}>{t}</span>
				</div>)}
				<svg width={W} height={DH} style={{ position: 'absolute', inset: 0, overflow: 'visible' }} aria-hidden>
					{HOT.slice(1).map((id, i) => <path key={id} d={path(byId[HOT[i]], byId[id])} fill="none" stroke="#38B6FF" strokeWidth={3.5} strokeDasharray="9 7" strokeLinecap="round" opacity={lit.has(id) && lit.has(HOT[i]) ? 1 : .35}>
						{!still && <animate attributeName="stroke-dashoffset" from="32" to="0" dur="1s" repeatCount="indefinite" />}
					</path>)}
					{EDGES.map(([a, b]) => { const on = lit.has(a) && lit.has(b); return <path key={a + b} d={path(byId[a], byId[b])} fill="none" stroke={on ? colors.yellow : 'rgba(255,255,255,.28)'} strokeWidth={on ? 3 : 2} style={{ transition: 'stroke .35s' }} />; })}
				</svg>
				{BOXES.map((b, i) => {
					const on = lit.has(b.id) && !still;
					return <motion.div key={b.id} initial={still ? false : { opacity: 0, y: 24 }} animate={{ opacity: lit.has(b.id) ? 1 : .42, y: on ? -6 : 0 }} transition={{ opacity: { duration: .35 }, y: { duration: .4 }, default: { delay: .05 * i } }}
						style={{ position: 'absolute', left: b.x, top: b.y, width: b.w, height: b.h ?? H, boxSizing: 'border-box', borderRadius: 14, padding: b.h ? '0 14px' : '7px 12px', display: b.h ? 'flex' : 'block', alignItems: 'center', gap: 14, background: on ? '#fffef7' : 'rgba(36,32,64,.95)', color: on ? colors.dark : '#f4f1ff', border: `2px solid ${on ? (b.tone ?? colors.yellow) : (b.tone ? b.tone + '88' : 'rgba(255,255,255,.22)')}`, boxShadow: on ? `0 0 0 3px ${(b.tone ?? colors.yellow)}44, 0 20px 30px -14px ${b.tone ?? colors.yellow}` : '0 12px 20px -14px rgba(0,0,0,.9)', transition: 'background .35s, color .35s, border-color .35s, box-shadow .35s' }}>
						{b.tags && <div style={{ position: 'absolute', right: 8, top: -12, display: 'flex', gap: 4 }}>{b.tags.map(([k, l]) => <span key={l} style={{ fontSize: 11.5, fontWeight: 900, color: colors.dark, background: TAG_C[k], borderRadius: 999, padding: '1px 8px', boxShadow: '0 2px 0 rgba(0,0,0,.35)', whiteSpace: 'nowrap' }}>{l}</span>)}</div>}
						<div style={{ fontSize: 16, fontWeight: 900, lineHeight: 1.2, whiteSpace: 'nowrap' }}>{b.t}</div>
						<div style={{ fontSize: 12.5, fontWeight: 700, marginTop: b.h ? 0 : 3, opacity: .8, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{b.s}</div>
					</motion.div>;
				})}
			</div>
		</div>
		{/* 右：一通电话走一遍 */}
		<div style={{ position: 'absolute', left: 1160, top: 150, width: 390 }}>
			<div style={{ fontSize: 15, fontWeight: 900, color: colors.yellow }}>One call, step by step</div>
			<div style={{ display: 'grid', gap: still ? 4 : 6, marginTop: still ? 6 : 10 }}>
				{STEPS.map((s, i) => {
					const on = !still && at === i;
					return <button key={s.t} type="button" className="live-toggle" onClick={() => pick(i)} aria-pressed={on}
						style={{ textAlign: 'left', fontFamily: fonts.body, cursor: still ? 'default' : 'pointer', borderRadius: 12, padding: on ? '10px 14px' : still ? '4px 10px' : '6px 14px', border: `2px solid ${on ? colors.yellow : 'rgba(255,255,255,.18)'}`, background: on ? '#fffef7' : 'rgba(36,32,64,.8)', color: on ? colors.dark : '#f4f1ff', transition: 'all .3s' }}>
						<div style={{ fontSize: 16, fontWeight: 900 }}><span style={{ fontFamily: fonts.mono, color: on ? colors.red : colors.yellow, marginRight: 8 }}>{i + 1}</span>{s.t}</div>
						<AnimatePresence initial={false}>{(on || still) && <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} style={{ fontSize: still ? 10 : 14.5, lineHeight: still ? 1.3 : 1.5, marginTop: still ? 2 : 4, fontWeight: 600, overflow: still ? 'visible' : 'hidden' }}>{s.d}</motion.div>}</AnimatePresence>
					</button>;
				})}
			</div>
			{!still && <div style={{ fontSize: 12.5, color: '#8e88a8', marginTop: 8 }}>自动轮播；点任意一步停下</div>}
		</div>
		{/* 底部：FDE 怎么把它做出来 */}
		<div style={{ position: 'absolute', left: 64, right: 64, bottom: 96, display: 'flex', alignItems: 'center', gap: 10, background: 'rgba(255,222,89,.1)', border: '1.5px solid rgba(255,222,89,.55)', borderRadius: 14, padding: '9px 16px' }}>
			<span style={{ fontSize: 15, fontWeight: 900, color: colors.yellow, whiteSpace: 'nowrap' }}>FDE 驻场怎么做出来</span>
			{FDE.map((f, i) => <span key={f} style={{ fontSize: 14, fontWeight: 800, whiteSpace: 'nowrap' }}><span style={{ fontFamily: fonts.mono, color: colors.yellow, marginRight: 4 }}>{i + 1}</span>{f}{i < FDE.length - 1 && <span style={{ color: '#8e88a8', marginLeft: 8 }}>→</span>}</span>)}
		</div>
		<div style={{ position: 'absolute', left: 64, bottom: 66, fontSize: 11.5, color: '#8e88a8' }}>组件划分参照 Google Customer Engagement Suite 与 Google Cloud 实时多 Agent 参考架构，按保险客服场景设计；「一秒内」是设计目标。下一页放大中间的 Agent 层。</div>
	</div>;
}

export default function S09_CaseFlow() {
	return <Slide bg="#0d0b1c" style={{ position: 'relative' }}>
		<StillScope><Body /></StillScope>
	</Slide>;
}
