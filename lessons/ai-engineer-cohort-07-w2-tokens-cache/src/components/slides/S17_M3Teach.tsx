import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, Grid, CardSm, colors, fonts, border, shadowSm } from '../ui';
import { col, ModuleTag } from './_shared';

const inputBlocks = Array.from({ length: 14 });
const outputBlocks = Array.from({ length: 6 });

const cards = [
	{ tag: 'Prefill → TTFT', bg: colors.green, text: '一次性并行处理全部输入。输入越长，第一个字（Time To First Token）出来越晚' },
	{ tag: 'Decode → TPOT', bg: colors.blue, text: '一个 token 一个 token 地生成，每步都依赖上一步。输出越长，总时间越长（Time Per Output Token）' },
	{ tag: '实测字段', bg: colors.yellow, text: 'duration_ms 是总耗时，duration_api_ms 是等模型 API 的时间。thinking 也算输出，会推迟第一段可见文字' },
];

// M3 讲：解释刚才的数字 —— prefill 和 decode
export default function S17_M3Teach() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner style={col}>
				<ModuleTag id="M3" phase="teach" />
				<Title size="48px" style={{ marginBottom: 26 }}>解释刚才的数字：Prefill 一口读完，Decode 一个个写</Title>

				<div style={{ display: 'flex', alignItems: 'flex-end', marginBottom: 30 }}>
					<div style={{ flex: 1.4 }}>
						<div style={{ fontFamily: fonts.mono, fontSize: 17, fontWeight: 700, marginBottom: 8 }}>PREFILL · 全部输入一起算</div>
						<div style={{ display: 'flex', gap: 5, padding: 12, background: colors.white, border, boxShadow: shadowSm }}>
							{inputBlocks.map((_, i) => <div key={i} style={{ flex: 1, height: 40, background: colors.green, border: `2px solid ${colors.black}` }} />)}
						</div>
					</div>
					<div style={{ margin: '0 14px 12px', padding: '6px 12px', background: colors.yellow, border, fontFamily: fonts.mono, fontSize: 16, fontWeight: 700 }}>TTFT ▶</div>
					<div style={{ flex: 1 }}>
						<div style={{ fontFamily: fonts.mono, fontSize: 17, fontWeight: 700, marginBottom: 8 }}>DECODE · 逐个生成</div>
						<div style={{ display: 'flex', gap: 5, padding: 12, background: colors.white, border, boxShadow: shadowSm }}>
							{outputBlocks.map((_, i) => (
								<motion.div key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.2, delay: 0.5 + i * 0.25 }}
									style={{ flex: 1, height: 40, background: colors.blue, border: `2px solid ${colors.black}` }} />
							))}
						</div>
					</div>
				</div>

				<Grid cols={3} gap={20}>
					{cards.map((c, i) => (
						<motion.div key={c.tag} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: 0.3 + i * 0.15 }}>
							<CardSm style={{ padding: '16px 18px', minHeight: 190 }}>
								<Tag bg={c.bg} color={colors.black}>{c.tag}</Tag>
								<p style={{ fontSize: 20, fontWeight: 600, lineHeight: 1.55, marginTop: 10 }}>{c.text}</p>
							</CardSm>
						</motion.div>
					))}
				</Grid>

				<p style={{ marginTop: 22, fontSize: 23, fontWeight: 800 }}>
					组 3 第二次为什么快回来了？—— 前缀的 prefill 被 cache 省掉了，这就是 M5 要讲的事
				</p>
			</Inner>
		</Slide>
	);
}
