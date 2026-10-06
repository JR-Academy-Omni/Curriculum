import { motion } from 'framer-motion';
import { colors, fonts, radii } from '../ui';
import { Label } from '../deck';
import { ModuleFrame, card, line, softShadow } from './_shared';
import { modules } from '../../data/modules';

const total = modules.reduce((s, m) => s + m.minutes, 0);
const starts = modules.map((_, i) => modules.slice(0, i).reduce((s, m) => s + m.minutes, 0));

// 90 分钟议程 + Test → Teach → Test 的节奏说明
export default function S03_Agenda() {
	return (
		<ModuleFrame id="M0" title={`今天的 ${total} 分钟`} subtitle="每个模块：前测先预测 → 讲 + 跑看真实数字 → 后测换情境再考">
			<div style={{ display: 'flex', height: 50, border: line, borderRadius: radii.pill, overflow: 'hidden', boxShadow: softShadow, marginBottom: 22 }}>
				{modules.map((m, i) => (
					<motion.div
						key={m.id}
						initial={{ scaleX: 0 }}
						animate={{ scaleX: 1 }}
						transition={{ duration: 0.5, delay: 0.1 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
						style={{ flex: m.minutes, background: m.color, borderRight: i < modules.length - 1 ? line : 'none', transformOrigin: 'left', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: fonts.mono, fontSize: 16, fontWeight: 700 }}>
						{m.id}
					</motion.div>
				))}
			</div>
			<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', columnGap: 24, rowGap: 10 }}>
				{modules.map((m, i) => (
					<motion.div key={m.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.5 + i * 0.06 }}
						style={{ ...card, display: 'flex', alignItems: 'center', gap: 14, padding: '9px 14px' }}>
						<Label bg={m.color} color={colors.black}>{m.id}</Label>
						<span style={{ flex: 1, minWidth: 0 }}>
							<span style={{ display: 'block', fontSize: 20, fontWeight: 900 }}>{m.title}</span>
							<span style={{ display: 'block', fontSize: 16, fontWeight: 500, opacity: 0.7 }}>{m.zh}</span>
						</span>
						<span style={{ flexShrink: 0, fontFamily: fonts.mono, fontSize: 15, fontWeight: 700, opacity: 0.7 }}>{starts[i]}–{starts[i] + m.minutes}′</span>
					</motion.div>
				))}
			</div>
		</ModuleFrame>
	);
}
