import { motion } from 'framer-motion';
import { colors, fonts, radii } from '../ui';
import { moduleById } from '../../data/modules';
import type { Command } from '../../data/commands';
import { line, softShadow } from './_shared';

// 命令速查表（S04 / S05 共用；不是 slide）。外框圆角，表内用细分隔线。
const cell = { borderBottom: `1px solid rgba(16,22,47,.18)`, padding: '8px 12px', verticalAlign: 'middle', lineHeight: 1.4 } as const;

export default function CommandTable({ rows }: { rows: Command[] }) {
	return (
		<div style={{ border: line, borderRadius: radii.card, overflow: 'hidden', background: colors.white, boxShadow: softShadow }}>
			<table style={{ width: '100%', borderCollapse: 'collapse', tableLayout: 'fixed' }}>
				<colgroup>
					<col style={{ width: '7%' }} />
					<col style={{ width: '12%' }} />
					<col style={{ width: '52%' }} />
					<col style={{ width: '29%' }} />
				</colgroup>
				<thead>
					<tr>
						{['模块', '工具', '命令', '看什么'].map((h) => (
							<th key={h} style={{ ...cell, background: colors.dark, color: colors.white, textAlign: 'left', fontSize: 16, fontFamily: fonts.mono }}>{h}</th>
						))}
					</tr>
				</thead>
				<tbody>
					{rows.map((r, i) => {
						const m = moduleById(r.module);
						return (
							<motion.tr key={r.cmd} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25, delay: 0.1 + i * 0.05 }}>
								<td style={cell}>
									<span style={{ display: 'inline-block', padding: '2px 8px', borderRadius: radii.label, background: m.color, border: line, fontFamily: fonts.mono, fontSize: 14, fontWeight: 700 }}>{r.module}</span>
								</td>
								<td style={{ ...cell, fontSize: 16, fontWeight: 700 }}>{r.tool}</td>
								<td style={{ ...cell, fontFamily: fonts.mono, fontSize: 15, fontWeight: 700, wordBreak: 'break-all' }}>{r.cmd}</td>
								<td style={{ ...cell, fontSize: 16, fontWeight: 600 }}>{r.look}</td>
							</motion.tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}
