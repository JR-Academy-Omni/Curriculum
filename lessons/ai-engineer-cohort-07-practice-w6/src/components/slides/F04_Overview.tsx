import { motion } from 'framer-motion';
import type { Chapter } from '../world/beat';
import { useBeat } from '../world/beat';
import { ACCENT, INK } from '../world/prims';
import { topS, lap } from '../world/layout';

// 第 53 页：拉远看全图，环路合拢（引擎负责），环内沿着下边写一整行 EVAL-DRIVEN DEVELOPMENT。
// 全图 zoom ≈ 0.0345，所以字高约 1900 个画布单位。两个词各自写出，荧光笔划线跟着整行的实际宽度。
const CX = 27200, BASE = 8900, H = 1900;
const SIZE = H * 1.38;
const SHOWN = 'inset(-30% -4% -30% -4%)', HIDDEN = 'inset(-30% 100% -30% -4%)';

function Render() {
	const { on, isStatic, reduced, lag } = useBeat();
	const k = 'overview';
	const a = on(k, 1), b = on(k, 2), c = on(k, 3);
	const t = (d: number) => ({ duration: reduced ? 0 : 0.9, delay: reduced ? 0 : d + lag, ease: [0.25, 0.46, 0.45, 0.94] as const });
	const word = (show: boolean, text: string) => isStatic
		? <span style={{ visibility: show ? 'visible' : 'hidden' }}>{text}</span>
		: <motion.span initial={false} animate={{ clipPath: show ? SHOWN : HIDDEN }} transition={t(0)} style={{ display: 'inline-block' }}>{text}</motion.span>;
	if (isStatic && !a) return null;
	return (
		<div style={{ position: 'absolute', left: CX, top: BASE - SIZE * 0.8, transform: 'translateX(-50%)', fontSize: SIZE, lineHeight: 1, fontWeight: 800, color: INK, whiteSpace: 'nowrap', letterSpacing: -0.01 * SIZE }}>
			{word(a, 'EVAL-DRIVEN')}{' '}{word(b, 'DEVELOPMENT')}
			{isStatic
				? c && <div style={{ position: 'absolute', left: 0, right: 0, top: SIZE * 0.8 - H * 0.42, height: H * 0.56, background: ACCENT, borderRadius: H * 0.2, mixBlendMode: 'multiply' }} />
				: <motion.div initial={false} animate={{ scaleX: c ? 1 : 0 }} transition={t(0.2)}
					style={{ position: 'absolute', left: 0, right: 0, top: SIZE * 0.8 - H * 0.42, height: H * 0.56, background: ACCENT, borderRadius: H * 0.2, mixBlendMode: 'multiply', transformOrigin: 'left center' }} />}
		</div>
	);
}

export const F04: Chapter = {
	stops: [{
		key: 'overview', chapter: '第 4 章 · 回到周五：能上线吗？', cam: { cx: 27200, cy: 6400, z: 0.0345 }, builds: 3, van: { s: lap(topS(3300)) }, minimap: false,
	}],
	area: { id: 'overview', bbox: [8000, 6600, 46500, 9300], Render },
};
