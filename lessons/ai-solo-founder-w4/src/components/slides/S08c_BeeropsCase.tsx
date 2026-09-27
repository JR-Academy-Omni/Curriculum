import { motion } from 'framer-motion';
import { Slide, colors, fonts, border } from '../ui';
import { Body, SlideHead } from '../DeckTable';

// 开始动手之前：今天这个案例是什么模式、为什么这一圈转得起来
// 位置固定在断点① 正前面 —— 讲完这页马上开跑。
// ⚠️「办给谁 · 解决什么」由 Lightman 现场口述，这里不编造。
// 整图用纯 SVG 画，坐标可控、不受 flex 布局影响。

const VB_W = 1180;
const VB_H = 430;

const HEAD = fonts.heading;
const BODY = fonts.body;

/** neo-brutalism 卡片：先画黑色偏移块，再画本体 */
function Node({ x, y, w, h, bg, title, sub, delay }: {
	x: number; y: number; w: number; h: number; bg: string; title: string; sub: string; delay: number;
}) {
	return (
		<motion.g initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay }}>
			<rect x={x + 6} y={y + 6} width={w} height={h} fill={colors.black} />
			<rect x={x} y={y} width={w} height={h} fill={bg} stroke={colors.black} strokeWidth={3} />
			<text x={x + w / 2} y={y + 32} textAnchor="middle" fontFamily={HEAD} fontSize={25} fontWeight={900} fill={colors.black}>
				{title}
			</text>
			<text x={x + w / 2} y={y + 55} textAnchor="middle" fontFamily={BODY} fontSize={14} fill="#555">
				{sub}
			</text>
		</motion.g>
	);
}

/** 流动标签：黄底黑边小块 */
function Tag({ x, y, w, text, delay }: { x: number; y: number; w: number; text: string; delay: number }) {
	const h = 30;
	return (
		<motion.g initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.25, delay }}>
			<rect x={x + 3} y={y + 3} width={w} height={h} fill={colors.black} />
			<rect x={x} y={y} width={w} height={h} fill={colors.yellow} stroke={colors.black} strokeWidth={2} />
			<text x={x + w / 2} y={y + 20} textAnchor="middle" fontFamily={BODY} fontSize={15} fontWeight={800} fill={colors.black}>
				{text}
			</text>
		</motion.g>
	);
}

export default function S08c_BeeropsCase() {
	return (
		<Slide bg={colors.white}>
			<Body style={{ padding: '30px 60px 22px' }}>
				<SlideHead
					tag="§1 · 动手之前"
					tagBg={colors.orange}
					title={
						<>
							接下来六步，拿{' '}
							<span style={{ background: colors.yellow, padding: '0 10px' }}>Beerops</span> 跑一遍
						</>
					}
					titleSize="clamp(26px, 2.3vw, 36px)"
					sub="摆摊 · 送礼物 · 抽奖 · 免门票。免票还白送东西，钱从哪来？看这一圈就明白了。"
				/>

				<svg viewBox={`0 0 ${VB_W} ${VB_H}`} style={{ width: '100%', maxHeight: 470, display: 'block' }}>
					<defs>
						<marker id="beerArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
							<path d="M 0 0 L 10 5 L 0 10 z" fill={colors.black} />
						</marker>
					</defs>

					{/* ── 三条流动（顺时针）────────────────────────── */}
					{[
						{ d: 'M 470,86 Q 275,150 190,300', delay: 0.45 },
						{ d: 'M 290,368 L 880,368', delay: 0.8 },
						{ d: 'M 990,300 Q 905,150 710,86', delay: 1.15 },
					].map((f) => (
						<motion.path
							key={f.d}
							d={f.d}
							fill="none"
							stroke={colors.black}
							strokeWidth={3}
							markerEnd="url(#beerArrow)"
							initial={{ pathLength: 0 }}
							animate={{ pathLength: 1 }}
							transition={{ duration: 0.55, delay: f.delay, ease: 'easeInOut' }}
						/>
					))}

					{/* ── 三方节点 ─────────────────────────────── */}
					<Node x={485} y={14} w={210} h={72} bg="#D9F2E4" title="办的人" sub="你" delay={0.1} />
					<Node x={70} y={332} w={210} h={72} bg="#DCEBFF" title="来的人" sub="学生 / 上班族" delay={0.22} />
					<Node x={900} y={332} w={210} h={72} bg="#FFF4D6" title="摆摊的" sub="商家 / 品牌 / 社群" delay={0.34} />

					{/* ── 流动标签 ─────────────────────────────── */}
					{/* 办的人 → 来的人 */}
					<Tag x={118} y={142} w={84} text="免票进场" delay={0.7} />
					<Tag x={118} y={180} w={84} text="礼物" delay={0.78} />
					<Tag x={118} y={218} w={84} text="抽奖" delay={0.86} />

					{/* 来的人 → 摆摊的 */}
					<Tag x={432} y={318} w={56} text="人流" delay={1.05} />
					<Tag x={498} y={318} w={70} text="当面聊" delay={1.13} />
					<Tag x={578} y={318} w={118} text="留下联系方式" delay={1.21} />

					{/* 摆摊的 → 办的人 */}
					<Tag x={980} y={142} w={72} text="摊位费" delay={1.4} />
					<Tag x={980} y={180} w={86} text="赞助礼物" delay={1.48} />

					{/* ── 圆心结论 ─────────────────────────────── */}
					<motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 1.75 }}>
						<text x={590} y={186} textAnchor="middle" fontFamily={HEAD} fontSize={26} fontWeight={900} fill={colors.black}>
							没人做慈善
						</text>
						<text x={590} y={216} textAnchor="middle" fontFamily={BODY} fontSize={16} fill="#333">
							每一方给出去的，正好是下一方想要的
						</text>
						<rect x={452} y={234} width={276} height={32} fill={colors.black} />
						<text x={590} y={256} textAnchor="middle" fontFamily={fonts.mono} fontSize={14} fontWeight={700} fill={colors.yellow}>
							办的人一分礼物钱都没掏
						</text>
					</motion.g>
				</svg>

				<div
					style={{
						marginTop: 4,
						padding: '10px 18px',
						background: colors.dark,
						color: colors.white,
						border,
						fontSize: 17,
						lineHeight: 1.4,
						textAlign: 'center',
					}}
				>
					这一圈你做任何生意都要转得起来。
					<b style={{ color: colors.yellow }}>有一方拿不到想要的，圈就断了 —— 那件事做不长。</b>
					<span style={{ color: '#9aa', marginLeft: 10, fontSize: 15 }}>
						（还没定：办给谁 · 解决他们什么问题 —— 现场口述）
					</span>
				</div>
			</Body>
		</Slide>
	);
}
