import { motion } from 'framer-motion';
import { Slide, Inner, Title, colors, fonts, border, shadowSm } from '../ui';
import { col, ModuleTag } from './_shared';
import { modules } from '../../data/modules';

const total = modules.reduce((s, m) => s + m.minutes, 0);
const starts = modules.map((_, i) => modules.slice(0, i).reduce((s, m) => s + m.minutes, 0));

// 90 分钟议程 + Test → Teach → Test 的节奏说明
export default function S03_Agenda() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner style={col}>
				<ModuleTag id="M0" />
				<div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 22 }}>
					<Title size="54px">今天的 {total} 分钟</Title>
					<div style={{ display: 'flex', gap: 8, fontFamily: fonts.mono, fontSize: 17, fontWeight: 700 }}>
						{['前测 · 先预测', '讲 + 跑 · 看真实数字', '后测 · 换情境再考'].map((t, i) => (
							<span key={t} style={{ padding: '6px 12px', background: i === 1 ? colors.black : colors.white, color: i === 1 ? colors.white : colors.black, border }}>{t}</span>
						))}
					</div>
				</div>

				<div style={{ display: 'flex', height: 54, border, boxShadow: shadowSm, marginBottom: 24 }}>
					{modules.map((m, i) => (
						<motion.div
							key={m.id}
							initial={{ scaleX: 0 }}
							animate={{ scaleX: 1 }}
							transition={{ duration: 0.5, delay: 0.1 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
							style={{ flex: m.minutes, background: m.color, borderRight: i < modules.length - 1 ? border : 'none', transformOrigin: 'left', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: fonts.mono, fontSize: 17, fontWeight: 700 }}>
							{m.id}
						</motion.div>
					))}
				</div>

				<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', columnGap: 28, rowGap: 10 }}>
					{modules.map((m, i) => (
						<motion.div
							key={m.id}
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.3, delay: 0.5 + i * 0.06 }}
							style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '9px 14px', background: colors.white, border }}>
							<span style={{ flexShrink: 0, width: 50, textAlign: 'center', background: m.color, border, fontFamily: fonts.mono, fontSize: 16, fontWeight: 700 }}>{m.id}</span>
							<span style={{ flex: 1, minWidth: 0 }}>
								<span style={{ display: 'block', fontSize: 21, fontWeight: 900 }}>{m.title}</span>
								<span style={{ display: 'block', fontSize: 16, fontWeight: 500, opacity: 0.7 }}>{m.zh}</span>
							</span>
							<span style={{ flexShrink: 0, fontFamily: fonts.mono, fontSize: 15, fontWeight: 700, opacity: 0.7 }}>{starts[i]}–{starts[i] + m.minutes}′</span>
						</motion.div>
					))}
				</div>
			</Inner>
		</Slide>
	);
}
