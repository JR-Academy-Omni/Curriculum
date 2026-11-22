import { El, Card, Mark, Ink, T, BLUE, INK } from './prims';

// 第 2、3 章的清单卡「是 golden 吗？」。五个副本（A–E）画法完全相同，只是位置和标记不同。
// 勾选框位置（box / base）别动：ClMark、G07 的门号、各处高亮都靠它。
export const NAVY = '#1e2f6b';
export const CL_W = 722, CL_H = 683;

const ROWS: { text: string[]; base: number[]; box: number }[] = [
	{ text: ['input'], base: [-152.6], box: -171.5 },
	{ text: ['expected output'], base: [-66.2], box: -85.1 },
	{ text: ['grading criteria'], base: [20.3], box: 1.4 },
	{ text: ['由懂业务的人', '核对过'], base: [141.8, 209.3], box: 122.9 },
	{ text: ['不给 agent 看'], base: [293], box: 274.1 },
];

/** 第 i 行（0–4）勾选框的中心 */
export function clBox(X: number, Y: number, i: number): [number, number] {
	return [X - 291, Y + ROWS[i].box];
}
/** 第 i 行文字的左端与基线（多行时取第一行） */
export function clRowText(X: number, Y: number, i: number): { x: number; y: number; lines: number[] } {
	return { x: X - 229, y: Y + ROWS[i].base[0], lines: ROWS[i].base.map(b => Y + b) };
}

type Props = {
	X: number; Y: number;
	show?: boolean;
	/** 每一行是否显示（默认跟着卡片一起出现） */
	rows?: boolean[];
	/** 分隔线（默认和第 4 行一起出现） */
	divider?: boolean;
	delay?: number;
};

/** 清单卡本体：卡片 + 标题 + 五行 + 分隔线 + 空勾选框 */
export function Checklist({ X, Y, show = true, rows, divider, delay = 0 }: Props) {
	const r = rows ?? [show, show, show, show, show];
	const div = divider ?? r[3];
	const x0 = X - CL_W / 2, y0 = Y - CL_H / 2;
	return <>
		<Card x={x0} y={y0} w={CL_W} h={CL_H} show={show} delay={delay} band={NAVY} bandH={103}>
			<div style={{ position: 'absolute', left: 40, top: 103 / 2, transform: 'translateY(-50%)', color: '#fff', fontWeight: 800, fontSize: 51, lineHeight: 1, letterSpacing: 1, whiteSpace: 'nowrap' }}>是 golden 吗？</div>
		</Card>
		{ROWS.map((row, i) => <El key={i} x={X - 291 - 29.5} y={Y + row.box - 29.5} w={59} h={59} show={r[i]} anim="pop" delay={delay + 0.1}
			style={{ border: `5px solid ${NAVY}`, borderRadius: 8, background: '#fff', boxSizing: 'border-box' }} />)}
		{ROWS.map((row, i) => row.text.map((t, j) => (
			<T key={`${i}-${j}`} x={X - 229} y={Y + row.base[j]} fs={50} c={BLUE} print weight={600} show={r[i]} delay={delay + 0.15 + j * 0.15}>{t}</T>
		)))}
		<Ink d={`M ${X - 321} ${Y + 65} L ${X + 321} ${Y + 65}`} c={NAVY} w={4} show={div} delay={delay} />
	</>;
}

/** 在清单第 i 行打 ✓ / ✗ */
export function ClMark({ X, Y, i, kind, show = true, delay = 0 }: { X: number; Y: number; i: number; kind: 'tick' | 'cross'; show?: boolean; delay?: number }) {
	const [cx, cy] = clBox(X, Y, i);
	return <Mark x={cx} y={cy} size={kind === 'tick' ? 62 : 52} kind={kind} show={show} delay={delay} c={kind === 'tick' ? INK : undefined} />;
}
