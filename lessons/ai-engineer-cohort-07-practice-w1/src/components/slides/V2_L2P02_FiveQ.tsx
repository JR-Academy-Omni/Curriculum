// Migrated teaching page; original source: lessons/vibe-coding-master-l2/src/components/slides/L2P02_FiveQ.tsx
import { Slide, Inner, Title, Tag, colors, fonts, border, shadow } from '../courseUi';
import { motion } from 'framer-motion';
const qs = [
    {
        n: '1', color: colors.red, q: '谁是真正的用户？',
        d: '牵扯几类人、利益冲不冲突 —— 先把人搞清楚',
    },
    {
        n: '2', color: colors.orange, q: '真痛是什么？',
        d: '不是嘴上要的功能；连问 3 次「为什么」挖到根',
    },
    {
        n: '3', color: colors.yellow, q: '不做会怎样？',
        d: '代价小的需求，最好的实现是 —— 不做',
    },
    {
        n: '4', color: colors.blue, q: '怎么算成功？',
        d: '哪个数字 / 动作变好才算；没指标的需求是耍流氓',
    },
    {
        n: '5', color: colors.purple, q: '边界在哪？',
        d: '明确「不做什么」→ 砍成 MVP',
    },
];
// 需求 X 光机 · 五问
export default function L2P02_FiveQ() {
    return (<Slide bg={colors.dark}>
			<Inner style={{ flexDirection: 'column' }}>
				<motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
					<Tag bg={colors.yellow} color={colors.black}>动手前的过滤器</Tag>
					<Title white size="48px" style={{ marginTop: 12 }}>
						需求 <span style={{ color: colors.yellow }}>X 光机</span> · 五问
					</Title>
					<p style={{ fontSize: 19, color: '#cfd3e6', marginTop: 8 }}>
						任何需求进来，先过这 5 关。一关没答清，就别让 AI 动手。
					</p>
				</motion.div>

				<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginTop: 22 }}>
					{qs.map((x, i) => (<motion.div key={x.n} initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.15 + i * 0.1, type: 'spring', stiffness: 180, damping: 16 }} style={{
                borderRadius: 18,
                background: colors.white, border, boxShadow: shadow, padding: '16px 20px',
                display: 'flex', alignItems: 'center', gap: 18,
                ...(i === 4 ? { gridColumn: '1 / -1' } : {})
            }}>
							<div style={{ borderRadius: 18, flexShrink: 0, width: 56, height: 56, background: x.color, border, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 30, fontWeight: 900, color: colors.white, fontFamily: fonts.heading }}>{x.n}</div>
							<div style={{ flex: 1 }}>
								<div style={{ fontSize: 21, fontWeight: 900, color: colors.black, fontFamily: fonts.heading }}>{x.q}</div>
								<div style={{ fontSize: 14.5, color: '#444', marginTop: 4, lineHeight: 1.4 }}>{x.d}</div>
							</div>
						</motion.div>))}
				</div>

				<motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.75 }} style={{ marginTop: 18, display: 'flex', gap: 14, alignItems: 'stretch' }}>
					<div style={{ borderRadius: 18, flex: 1, background: '#222845', border: `3px solid ${colors.red}`, padding: '14px 20px' }}>
						<div style={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 800, color: colors.red }}>没产品思维 · 供给驱动</div>
						<p style={{ fontSize: 16, color: '#e6e9f5', marginTop: 5, lineHeight: 1.45 }}>
							从「我想<b>做什么</b>」往外列 —— 攒了一堆功能，没人要。
						</p>
					</div>
					<div style={{ borderRadius: 18, flex: 1, background: colors.yellow, border, padding: '14px 20px' }}>
						<div style={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 800, color: colors.black }}>有产品思维 · 需求驱动</div>
						<p style={{ fontSize: 16, color: colors.black, marginTop: 5, lineHeight: 1.45 }}>
							从「真正<b>要解决什么</b>」往回倒推 —— 每行代码都有理由。
						</p>
					</div>
				</motion.div>
			</Inner>
		</Slide>);
}
