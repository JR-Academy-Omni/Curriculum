import { motion } from 'framer-motion';
import { colors, fonts } from '../ui';
import { Label, Panel } from '../deck';
import { ModuleFrame, card, line } from './_shared';

const inputBlocks = Array.from({ length: 14 });
const outputBlocks = Array.from({ length: 6 });

const cards = [
	{ tag: 'Prefill → TTFT', bg: colors.green, text: '一次性并行处理全部输入。输入越长，第一个字（Time To First Token）出来越晚' },
	{ tag: 'Decode → TPOT', bg: colors.blue, text: '一个 token 一个 token 地生成，每步都依赖上一步。输出越长，总时间越长（Time Per Output Token）' },
	{ tag: '实测字段', bg: colors.yellow, text: 'duration_ms 是总耗时，duration_api_ms 是等模型 API 的时间。thinking 也算输出，会推迟第一段可见文字' },
];

const block = (bg: string) => ({ flex: 1, height: 36, background: bg, border: line, borderRadius: 8 });

// M3 讲：解释刚才的数字 —— prefill 和 decode
export default function S17_M3Teach() {
	return (
		<ModuleFrame id="M3" phase="teach" title="Prefill 一口读完，Decode 一个个写" subtitle="解释刚才记录表里的数字">
			<div style={{ display: 'flex', alignItems: 'flex-end', marginBottom: 24 }}>
				<div style={{ flex: 1.4 }}>
					<div style={{ fontFamily: fonts.mono, fontSize: 16, fontWeight: 700, marginBottom: 8 }}>PREFILL · 全部输入一起算</div>
					<div style={{ ...card, display: 'flex', gap: 5, padding: 12 }}>
						{inputBlocks.map((_, i) => <div key={i} style={block(colors.green)} />)}
					</div>
				</div>
				<div style={{ margin: '0 14px 14px' }}><Label bg={colors.yellow} color={colors.black}>TTFT ▶</Label></div>
				<div style={{ flex: 1 }}>
					<div style={{ fontFamily: fonts.mono, fontSize: 16, fontWeight: 700, marginBottom: 8 }}>DECODE · 逐个生成</div>
					<div style={{ ...card, display: 'flex', gap: 5, padding: 12 }}>
						{outputBlocks.map((_, i) => (
							<motion.div key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.2, delay: 0.5 + i * 0.25 }} style={block(colors.blue)} />
						))}
					</div>
				</div>
			</div>
			<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
				{cards.map((c, i) => (
					<motion.div key={c.tag} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: 0.3 + i * 0.15 }}>
						<Panel style={{ padding: '16px 18px', height: '100%' }}>
							<Label bg={c.bg} color={colors.black}>{c.tag}</Label>
							<p style={{ fontSize: 19, fontWeight: 600, lineHeight: 1.55, marginTop: 10 }}>{c.text}</p>
						</Panel>
					</motion.div>
				))}
			</div>
			<p style={{ marginTop: 22, fontSize: 22, fontWeight: 800 }}>
				组 3 第二次为什么快回来了？—— 前缀的 prefill 被 cache 省掉了，这就是 M5 要讲的事
			</p>
		</ModuleFrame>
	);
}
