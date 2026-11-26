import { motion, AnimatePresence } from 'framer-motion';
import { Slide, assetPath } from '../ui';
import { colors, fonts } from '../kit';
import { StillScope, useStill, ini, useCycle } from '../live';
import '../cover3d/cover3d.css';

// 分层取自匠人 AI Engineer 学习路线「Production AI System」的 L1–L6；L0 和两边的深浅（0 不做、1 要会、2 主场）是按岗位要求做的判断
type Layer = { id: string; name: string; chips: string[]; aie: 0 | 1 | 2; fde: 0 | 1 | 2 };
const LAYERS: Layer[] = [
	{ id: 'L0', name: '客户与业务层', chips: ['对接 CEO／CTO／CIO', '业务流程梳理', 'ROI 与预算', '驻场交付与培训'], aie: 0, fde: 2 },
	{ id: 'L1', name: '产品与体验层', chips: ['对话界面与流式响应', '几天出 Demo', '用户验收'], aie: 1, fde: 2 },
	{ id: 'L2', name: '应用与 API 层', chips: ['Python／TypeScript', 'API 设计', '接老系统和客户数据', 'SQL'], aie: 1, fde: 2 },
	{ id: 'L3', name: 'Agent 与工具层', chips: ['Agent 与工具调用', 'MCP', '权限与人工确认'], aie: 2, fde: 2 },
	{ id: 'L4', name: '知识、RAG 与记忆层', chips: ['RAG 与向量库', '切分、检索、引用', '记忆'], aie: 2, fde: 1 },
	{ id: 'L5', name: '模型与路由层', chips: ['LLM API 与 Prompt', '模型选型与微调', '成本与路由'], aie: 2, fde: 1 },
	{ id: 'L6', name: '生产运行层', chips: ['AWS 部署', 'CI/CD', 'Eval 流水线', '可观测性与故障'], aie: 2, fde: 1 },
];
const MODES = [
	{ k: 'both', label: '两边都要会', c: colors.yellow, head: 'L1–L6 是底座，两个岗位都要', body: ['从界面、API、Agent、RAG、模型到上线运行，六层都要能做', '先用这六层做出一个已上线、有量化指标的作品', '往 AI Engineer 还是 FDE 走，这一步都用得上'] },
	{ k: 'aie', label: 'AI Engineer', c: '#38B6FF', head: 'AI Engineer 往下挖深：L3–L6', body: ['RAG 和记忆做到可追溯、可评估', '模型选型、微调、成本和路由', 'Eval 流水线、可观测性、线上故障处理', '主要对接团队内部：产品经理和其他工程师'] },
	{ k: 'fde', label: 'FDE', c: colors.red, head: 'FDE 往上多一层：L0 客户与业务', body: ['直接对接 CEO、CTO、CIO，讲清值不值、能不能接、安不安全', 'L1–L2 要更快更广：几天出 Demo，接客户的老系统和数据', 'L4–L6 要会用、能上线，深挖交给平台和 AI Engineer'] },
] as const;
const lit = (l: Layer, m: number) => (m === 0 ? l.aie > 0 && l.fde > 0 : m === 1 ? l.aie === 2 : l.fde === 2);

const Dots = ({ v, c }: { v: number; c: string }) => <span style={{ display: 'inline-flex', gap: 4 }}>{[0, 1].map(i => <span key={i} style={{ width: 12, height: 12, borderRadius: '50%', background: i < v ? c : 'transparent', border: `2px solid ${i < v ? c : 'rgba(255,255,255,.3)'}` }} />)}</span>;

function Body() {
	const still = useStill();
	const { at: m, pick, hover } = useCycle(MODES.length, 3600, still);
	const mode = MODES[m];
	return <div data-night style={{ position: 'absolute', inset: 0, background: '#0d0b1c', color: '#f4f1ff', overflow: 'hidden' }}>
		<img src={assetPath('brand/logo-zh-white.png')} alt="" style={{ position: 'absolute', top: 18, right: 22, height: 30, zIndex: 60 }} />
		<div className="c3d-aurora" aria-hidden />
		<div className="c3d-floor" aria-hidden style={{ opacity: .7 }}><div /></div>
		<div style={{ position: 'absolute', left: 64, top: 56 }}>
			<div style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 700, color: colors.yellow, letterSpacing: 1 }}>03 · 岗位地图</div>
			<div style={{ fontFamily: fonts.heading, fontSize: 40, fontWeight: 900, marginTop: 4 }}>一个 AI 系统七层，<span style={{ color: '#9fd8ff' }}>AI Engineer</span> 往下挖深，<span style={{ color: '#ff8a80' }}>FDE</span> 往上多一层</div>
		</div>
		{/* 左：七层 3D 塔，从底层开始飞入堆起 */}
		<div {...hover} style={{ position: 'absolute', left: 40, top: 150, width: 1030, height: 640, perspective: 1500 }}>
			<div style={{ position: 'absolute', inset: 0, transformStyle: 'preserve-3d', transform: still ? 'none' : 'rotateX(20deg) rotateY(-13deg)', transformOrigin: '50% 70%', display: 'grid', gap: 9, alignContent: 'start' }}>
				<div style={{ display: 'grid', gridTemplateColumns: '1fr 74px 74px', gap: 10, fontSize: 13, fontWeight: 800, color: '#b9b4cf', padding: '0 14px' }}><span /><span style={{ textAlign: 'center' }}>AI Eng</span><span style={{ textAlign: 'center' }}>FDE</span></div>
				{LAYERS.map((l, i) => {
					const on = still || lit(l, m);
					const top = l.id === 'L0';
					return <motion.div key={l.id} onClick={() => pick(m)}
						initial={ini(still, { opacity: 0, z: -700, y: 60 })} animate={{ opacity: on ? 1 : .32, z: on && !still ? 34 : 0, y: 0 }}
						transition={{ opacity: { duration: .4 }, z: { duration: .5 }, default: { delay: still ? 0 : .2 + (LAYERS.length - 1 - i) * .14, duration: .7, ease: [0.16, 1, 0.3, 1] } }}
						style={{ display: 'grid', gridTemplateColumns: '58px 200px 1fr 74px 74px', gap: 10, alignItems: 'center', minHeight: 66, borderRadius: 16, padding: '6px 14px',
							background: on && !still ? (top ? 'linear-gradient(90deg, #ff5757, #c2185b)' : 'rgba(255,254,247,.97)') : top ? 'rgba(255,87,87,.25)' : 'rgba(40,36,70,.92)',
							color: on && !still ? (top ? colors.white : colors.dark) : '#f4f1ff', border: `2px solid ${on && !still ? mode.c : 'rgba(255,255,255,.18)'}`,
							boxShadow: on && !still ? `0 0 0 3px ${mode.c}44, 0 24px 34px -16px ${mode.c}` : '0 14px 22px -14px rgba(0,0,0,.8)', transition: 'background .35s, color .35s, border-color .35s, box-shadow .35s' }}>
						<span style={{ fontFamily: fonts.mono, fontSize: 20, fontWeight: 700 }}>{l.id}</span>
						<span style={{ fontSize: 19, fontWeight: 900, whiteSpace: 'nowrap' }}>{l.name}</span>
						<span style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>{l.chips.map(c => <span key={c} style={{ fontSize: 14, fontWeight: 800, borderRadius: 999, padding: '2px 10px', background: on && !still && !top ? '#f1ede6' : 'rgba(255,255,255,.12)', whiteSpace: 'nowrap' }}>{c}</span>)}</span>
						<span style={{ textAlign: 'center' }}><Dots v={l.aie} c="#38B6FF" /></span>
						<span style={{ textAlign: 'center' }}><Dots v={l.fde} c="#ff8a80" /></span>
					</motion.div>;
				})}
			</div>
		</div>
		{/* 右：三种看法轮播 */}
		<div style={{ position: 'absolute', left: 1110, top: 160, width: 430 }}>
			<div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
				{MODES.map((x, i) => <button key={x.k} type="button" className="live-toggle" onClick={() => pick(i)} aria-pressed={m === i}
					style={{ fontFamily: fonts.body, fontSize: 16, fontWeight: 900, cursor: still ? 'default' : 'pointer', padding: '7px 14px', borderRadius: 999, border: `2px solid ${x.c}`, background: m === i ? x.c : 'transparent', color: m === i ? colors.dark : '#f4f1ff' }}>{x.label}</button>)}
			</div>
			{still
				? <div style={{ display: 'grid', gap: 10, marginTop: 14 }}>{MODES.map(x => <div key={x.k} style={{ fontSize: 13.5, lineHeight: 1.45 }}><b style={{ color: x.c }}>{x.head}</b>：{x.body.join('；')}</div>)}</div>
				: <AnimatePresence mode="wait">
					<motion.div key={m} initial={{ opacity: 0, rotateY: -30, x: 30 }} animate={{ opacity: 1, rotateY: 0, x: 0 }} exit={{ opacity: 0, rotateY: 30, x: -30 }} transition={{ duration: .4 }}
						style={{ transformPerspective: 1000, marginTop: 16, background: '#fffef7', color: colors.dark, borderRadius: 22, padding: '18px 22px', borderTop: `10px solid ${mode.c}`, boxShadow: `0 30px 60px -20px ${mode.c}` }}>
						<div style={{ fontSize: 25, fontWeight: 900, lineHeight: 1.3 }}>{mode.head}</div>
						<div style={{ display: 'grid', gap: 8, marginTop: 12 }}>{mode.body.map(b => <div key={b} style={{ fontSize: 17, lineHeight: 1.5, fontWeight: 700, borderLeft: `4px solid ${mode.c}`, paddingLeft: 10 }}>{b}</div>)}</div>
					</motion.div>
				</AnimatePresence>}
			<div style={{ fontSize: 16, lineHeight: 1.55, marginTop: 18, fontWeight: 700 }}>FDE 不一定比 AI Engineer 职级高，各家公司分工不一样。</div>
			{!still && <div style={{ fontSize: 13, color: '#8e88a8', marginTop: 8 }}>自动轮播；点按钮停下</div>}
		</div>
		<div style={{ position: 'absolute', left: 64, right: 200, bottom: 58, fontSize: 12, color: '#8e88a8' }}>分层取自匠人 AI Engineer 学习路线「Production AI System」L1–L6；L0 与两边深浅是按澳洲 AI Engineer、FDE 岗位要求（2026-09）和 Accenture FDE 职位描述做的判断。</div>
	</div>;
}

export default function S12_Overlap() {
	return <Slide bg="#0d0b1c" style={{ position: 'relative' }}>
		<StillScope><Body /></StillScope>
	</Slide>;
}
