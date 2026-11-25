import { useRef, useState, type PointerEvent as ReactPointerEvent } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { colors, fonts } from './kit';
import { Interactive, Toggle } from './labkit';

type NodeId = 'browser' | 'server' | 'lb' | 'web1' | 'web2' | 'cache' | 'queue' | 'worker' | 'db' | 'obj';
type Box = { id: NodeId; label: string; x: number; y: number; w: number; d: number; h: number; top: string; side: string; text?: string };

const BOXES: Record<NodeId, Box> = {
	browser: { id: 'browser', label: '浏览器', x: 20, y: 235, w: 120, d: 90, h: 24, top: colors.white, side: '#c9c4bd' },
	server: { id: 'server', label: '一台服务器', x: 330, y: 200, w: 220, d: 160, h: 90, top: colors.yellow, side: '#c9a83a' },
	lb: { id: 'lb', label: '负载均衡', x: 190, y: 235, w: 120, d: 90, h: 40, top: colors.blue, side: '#2b86bd', text: colors.dark },
	web1: { id: 'web1', label: 'Web 服务', x: 360, y: 140, w: 130, d: 90, h: 60, top: colors.white, side: '#c9c4bd' },
	web2: { id: 'web2', label: 'Web 服务', x: 360, y: 330, w: 130, d: 90, h: 60, top: colors.white, side: '#c9c4bd' },
	cache: { id: 'cache', label: '缓存', x: 560, y: 40, w: 120, d: 80, h: 40, top: colors.red, side: '#b83d3d', text: colors.white },
	queue: { id: 'queue', label: '消息队列', x: 560, y: 420, w: 140, d: 80, h: 40, top: colors.green, side: '#5a9e3e' },
	worker: { id: 'worker', label: 'Worker', x: 740, y: 420, w: 120, d: 80, h: 60, top: colors.white, side: '#c9c4bd' },
	db: { id: 'db', label: '数据库', x: 760, y: 150, w: 120, d: 90, h: 70, top: colors.purple, side: '#9a4fb0', text: colors.white },
	obj: { id: 'obj', label: '对象存储', x: 760, y: 280, w: 120, d: 90, h: 70, top: colors.orange, side: '#c46a33' },
};

type Version = { key: string; label: string; nodes: NodeId[]; links: [NodeId, NodeId][]; problem: string; added: string; cost: string };

const VERSIONS: Version[] = [
	{ key: 'v0', label: 'v0 一台机器', nodes: ['browser', 'server'], links: [['browser', 'server']], problem: '先让它跑起来', added: '所有程序和数据都在一台服务器上', cost: '磁盘会满，机器一挂全站挂' },
	{ key: 'v1', label: 'v1 拆存储', nodes: ['browser', 'web1', 'db', 'obj'], links: [['browser', 'web1'], ['web1', 'db'], ['web1', 'obj']], problem: '视频塞满磁盘，元数据要查询', added: '数据库存元数据，对象存储存视频', cost: '两边的数据可能对不上' },
	{ key: 'v2', label: 'v2 负载均衡', nodes: ['browser', 'lb', 'web1', 'web2', 'db', 'obj'], links: [['browser', 'lb'], ['lb', 'web1'], ['lb', 'web2'], ['web1', 'db'], ['web2', 'db'], ['web1', 'obj'], ['web2', 'obj']], problem: '一台 Web 服务扛不住，也不能停机升级', added: '负载均衡 + 多台无状态 Web 服务', cost: '状态必须放到共享存储' },
	{ key: 'v3', label: 'v3 缓存', nodes: ['browser', 'lb', 'web1', 'web2', 'cache', 'db', 'obj'], links: [['browser', 'lb'], ['lb', 'web1'], ['lb', 'web2'], ['web1', 'cache'], ['web2', 'cache'], ['web1', 'db'], ['web2', 'db'], ['web1', 'obj'], ['web2', 'obj']], problem: '查进度、看列表的读请求太多', added: '先查缓存，没有再查数据库', cost: '可能读到旧数据' },
	{ key: 'v4', label: 'v4 队列 + Worker', nodes: ['browser', 'lb', 'web1', 'web2', 'cache', 'queue', 'worker', 'db', 'obj'], links: [['browser', 'lb'], ['lb', 'web1'], ['lb', 'web2'], ['web1', 'cache'], ['web2', 'cache'], ['web1', 'db'], ['web2', 'db'], ['web1', 'queue'], ['web2', 'queue'], ['queue', 'worker'], ['worker', 'obj'], ['worker', 'db']], problem: '转码 90 秒，用户不该一直等', added: 'Web 服务放消息，Worker 在后台转码', cost: '重复投递、积压、要管任务状态' },
];

const PLANE_W = 900;
const PLANE_H = 540;

function center(b: Box) { return { x: b.x + b.w / 2, y: b.y + b.d / 2 }; }

function Block({ box }: { box: Box }) {
	const { w, d, h } = box;
	const face = { position: 'absolute' as const, background: box.side, border: '1.5px solid rgba(16,22,47,.55)', boxSizing: 'border-box' as const };
	return <motion.div initial={{ opacity: 0, scale: .6 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: .6 }} transition={{ duration: .35 }}
		style={{ position: 'absolute', left: box.x, top: box.y, width: w, height: d, transformStyle: 'preserve-3d' }}>
		<div style={{ ...face, left: 0, top: 0, width: w, height: h, transformOrigin: 'top', transform: 'rotateX(90deg)' }} />
		<div style={{ ...face, left: 0, top: d, width: w, height: h, transformOrigin: 'top', transform: 'rotateX(90deg)', filter: 'brightness(.9)' }} />
		<div style={{ ...face, left: 0, top: 0, width: h, height: d, transformOrigin: 'left', transform: 'rotateY(-90deg)', filter: 'brightness(.8)' }} />
		<div style={{ ...face, left: w, top: 0, width: h, height: d, transformOrigin: 'left', transform: 'rotateY(-90deg)', filter: 'brightness(.8)' }} />
		<div style={{ ...face, inset: 0, background: box.top, transform: `translateZ(${h}px)`, display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: 6, fontSize: 20, fontWeight: 900, color: box.text ?? colors.dark, borderRadius: 4 }}>{box.label}</div>
	</motion.div>;
}

export default function Architecture3D() {
	const [versionKey, setVersionKey] = useState('v0');
	const [spin, setSpin] = useState(-28);
	const [tilt, setTilt] = useState(54);
	const drag = useRef<{ x: number; y: number; spin: number; tilt: number } | null>(null);
	const version = VERSIONS.find(v => v.key === versionKey) ?? VERSIONS[0];

	const onDown = (e: ReactPointerEvent<HTMLDivElement>) => {
		e.currentTarget.setPointerCapture(e.pointerId);
		drag.current = { x: e.clientX, y: e.clientY, spin, tilt };
	};
	const onMove = (e: ReactPointerEvent<HTMLDivElement>) => {
		if (!drag.current) return;
		setSpin(drag.current.spin + (e.clientX - drag.current.x) * 0.35);
		setTilt(Math.max(15, Math.min(72, drag.current.tilt - (e.clientY - drag.current.y) * 0.25)));
	};
	const onUp = () => { drag.current = null; };

	return <Interactive style={{ display: 'grid', gridTemplateColumns: '1.45fr .55fr', gap: 22, height: '100%' }}>
		<div style={{ display: 'grid', gridTemplateRows: 'auto 1fr', gap: 12 }}>
			<Toggle options={VERSIONS.map(v => ({ key: v.key, label: v.label }))} value={versionKey} onChange={setVersionKey} />
			<div onPointerDown={onDown} onPointerMove={onMove} onPointerUp={onUp} onPointerCancel={onUp}
				role="img" aria-label={`${version.label}：${version.added}`}
				style={{ position: 'relative', borderRadius: 22, border: `2px solid ${colors.dark}`, background: '#f6efe6', overflow: 'hidden', perspective: 1700, cursor: drag.current ? 'grabbing' : 'grab', touchAction: 'none', userSelect: 'none', WebkitUserSelect: 'none', minHeight: 470 }}>
				<div style={{ position: 'absolute', left: '50%', top: '50%', width: PLANE_W, height: PLANE_H, marginLeft: -PLANE_W / 2, marginTop: -PLANE_H / 2 + 30, transformStyle: 'preserve-3d', transform: `rotateX(${tilt}deg) rotateZ(${spin}deg) scale(.82)` }}>
					<div style={{ position: 'absolute', inset: 0, borderRadius: 26, background: '#fffdf8', backgroundImage: 'linear-gradient(rgba(16,22,47,.07) 1px, transparent 1px), linear-gradient(90deg, rgba(16,22,47,.07) 1px, transparent 1px)', backgroundSize: '45px 45px', border: `2px solid rgba(16,22,47,.3)` }} />
					<svg width={PLANE_W} height={PLANE_H} style={{ position: 'absolute', inset: 0, overflow: 'visible' }}>
						{version.links.map(([a, b]) => {
							const p = center(BOXES[a]); const q = center(BOXES[b]);
							return <motion.line key={`${version.key}-${a}-${b}`} x1={p.x} y1={p.y} x2={q.x} y2={q.y} stroke={colors.dark} strokeWidth={4} strokeDasharray="12 10"
								initial={{ strokeDashoffset: 0, opacity: 0 }} animate={{ strokeDashoffset: -44, opacity: 1 }} transition={{ strokeDashoffset: { duration: 1.2, repeat: Infinity, ease: 'linear' }, opacity: { duration: .3 } }} />;
						})}
					</svg>
					<AnimatePresence>
						{version.nodes.map(id => <Block key={id} box={BOXES[id]} />)}
					</AnimatePresence>
				</div>
				<div style={{ position: 'absolute', left: 16, bottom: 12, display: 'flex', gap: 12, alignItems: 'center', fontFamily: fonts.body, fontSize: 16, color: '#514c48' }}>
					<button type="button" onPointerDown={e => e.stopPropagation()} onClick={() => { setSpin(-28); setTilt(54); }}
						style={{ fontSize: 16, fontWeight: 800, padding: '6px 12px', borderRadius: 999, border: `2px solid ${colors.dark}`, background: colors.white, color: colors.dark, cursor: 'pointer' }}>重置视角</button>
					<span style={{ pointerEvents: 'none' }}>拖动可以旋转视角</span>
				</div>
			</div>
		</div>
		<div style={{ display: 'grid', gap: 14, alignContent: 'start', paddingTop: 58 }}>
			{([['遇到的问题', version.problem, colors.white], ['加了什么', version.added, colors.yellow], ['代价', version.cost, colors.dark]] as const).map(([k, v, bg]) =>
				<motion.div key={`${version.key}-${k}`} initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .3 }}
					style={{ background: bg, color: bg === colors.dark ? colors.white : colors.dark, border: `2px solid ${colors.dark}`, borderRadius: 18, padding: '14px 18px' }}>
					<div style={{ fontSize: 16, fontWeight: 800, opacity: .8 }}>{k}</div>
					<div style={{ fontSize: 22, fontWeight: 700, lineHeight: 1.4, marginTop: 4 }}>{v}</div>
				</motion.div>)}
		</div>
	</Interactive>;
}
