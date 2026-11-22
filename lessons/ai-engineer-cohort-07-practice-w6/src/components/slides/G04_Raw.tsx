import type { Chapter } from '../world/beat';
import { useBeat } from '../world/beat';
import { T, El, Card, Ink, Shift, BLUE, INK, ACCENT } from '../world/prims';
import { Checklist, ClMark } from '../world/checklist';
import { EP2, e2van } from '../world/layout';

// 第 24 页：看着像 golden 的第 1 种：原始数据。矿车（G00）已经开到这里；清单副本 B 到达时就在，未打勾。
const K = 'raw';
const B = { X: 14020, Y: 3260 };

function star(cx: number, cy: number, r: number) {
	const pts: string[] = [];
	for (let i = 0; i < 16; i++) {
		const a = (i * Math.PI) / 8 - Math.PI / 2;
		const rr = i % 2 === 0 ? r : r * 0.48;
		pts.push(`${(cx + rr * Math.cos(a)).toFixed(1)} ${(cy + rr * Math.sin(a)).toFixed(1)}`);
	}
	return 'M ' + pts.join(' L ') + ' Z';
}

/** 散落的印刷单据：中心、尺寸、色带；标题 fs 30 白字 */
function Sheet({ cx, cy, w, band, show, delay = 0 }: { cx: number; cy: number; w: number; band: string; show: boolean; delay?: number }) {
	return <Card x={cx - w / 2} y={cy - 89.5} w={w} h={179} band={band} bandH={66} radius={14} show={show} delay={delay} />;
}

function Render() {
	const { on, during } = useBeat();
	const sheets = on(K, 3);
	return (
		<Shift dx={EP2.dx} dy={EP2.dy}>
			<Checklist X={B.X} Y={B.Y} show={on(K)} />

			{/* 1：三颗金星（看起来是 gold）；2：变灰、消失 */}
			{[12220, 12960, 13700].map((x, i) => (
				<El key={x} x={0} y={0} show={during([K, 1], [K, 2])} anim="pop" delay={i * 0.3} origin={`${x}px 3770px`}>
					<svg width={1} height={1} style={{ position: 'absolute', overflow: 'visible' }}>
						<path d={star(x, 3770, 74)} fill={ACCENT} stroke={INK} strokeWidth={5} strokeLinejoin="round" />
					</svg>
				</El>
			))}

			{/* 3：四张散落的单据，一张接一张落下 */}
			<Sheet cx={12240} cy={3150} w={480} band="#3d7fd9" show={sheets} />
			<T x={12034} y={3110.6} fs={30} print weight={800} c="#fff" show={sheets}>邮件</T>
			<T x={12034} y={3199.4} fs={29} print show={sheets}>「转账手续费太高了」</T>

			<Sheet cx={12750} cy={3200} w={460} band="#7a9a72" show={sheets} delay={0.3} />
			<T x={12554} y={3160.6} fs={30} print weight={800} c="#fff" show={sheets} delay={0.3}>付款批次 PB-1001</T>
			<T x={12554} y={3249.4} fs={36} print show={sheets} delay={0.3}>转账笔数</T>
			<T x={12946} y={3249.4} fs={36} print align="right" weight={800} show={sheets} delay={0.3}>30</T>

			<Sheet cx={12250} cy={3480} w={460} band="#e27a5f" show={sheets} delay={0.6} />
			<T x={12054} y={3440.6} fs={30} print weight={800} c="#fff" show={sheets} delay={0.6}>发票 INV-2001</T>
			<T x={12054} y={3529.4} fs={36} print show={sheets} delay={0.6}>合计</T>
			<T x={12446} y={3529.4} fs={36} print align="right" weight={800} show={sheets} delay={0.6}>1,786.95</T>

			<Sheet cx={12750} cy={3520} w={460} band="#1e2f6b" show={sheets} delay={0.9} />
			<T x={12554} y={3480.6} fs={30} print weight={800} c="#fff" show={sheets} delay={0.9}>合同</T>
			<T x={12554} y={3569.4} fs={36} print show={sheets} delay={0.9}>C-2024-01</T>

			{/* 4：虚线框 = 缺掉的背面；清单第 1 行 ✓ */}
			<Ink d="M 13020 3020 L 13440 3020 L 13440 3620 L 13020 3620 Z" dash="22 16" w={6} show={on(K, 4)} />
			<ClMark X={B.X} Y={B.Y} i={0} kind="tick" show={on(K, 4)} delay={0.5} />
			{/* 5：第 2 行 ✗；框里写「?」和「背面」 */}
			<ClMark X={B.X} Y={B.Y} i={1} kind="cross" show={on(K, 5)} />
			<T x={13230} y={3400} h={170} c={BLUE} align="center" weight={800} show={on(K, 5)} delay={0.5}>?</T>
			<T x={13230} y={3570} h={44} c={BLUE} align="center" show={on(K, 5)} delay={0.8}>背面</T>
		</Shift>
	);
}

export const G04: Chapter = {
	stops: [{
		key: K, chapter: '第 2 章 · golden case 长什么样', cam: { cx: 40500, cy: 3700, z: 0.66 }, builds: 5, van: { s: e2van(7700) }, minimap: false,
	}],
	area: { id: K, bbox: [EP2.dx + 11980, 2900, EP2.dx + 14400, 3860], Render },
};
