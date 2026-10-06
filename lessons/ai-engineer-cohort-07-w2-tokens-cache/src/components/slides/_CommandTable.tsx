import { motion } from 'framer-motion';
import { colors, fonts, border } from '../ui';
import { moduleById } from '../../data/modules';
import type { Command } from '../../data/commands';

// 命令速查表（S04 / S05 共用；不是 slide）
const cell = { border, padding: '8px 12px', verticalAlign: 'middle', lineHeight: 1.4 } as const;

export default function CommandTable({ rows }: { rows: Command[] }) {
	return (
		<table style={{ width: '100%', borderCollapse: 'collapse', tableLayout: 'fixed', background: colors.white }}>
			<colgroup>
				<col style={{ width: '6%' }} />
				<col style={{ width: '12%' }} />
				<col style={{ width: '52%' }} />
				<col style={{ width: '30%' }} />
			</colgroup>
			<thead>
				<tr>
					{['模块', '工具', '命令', '看什么'].map((h) => (
						<th key={h} style={{ ...cell, background: colors.dark, color: colors.white, textAlign: 'left', fontSize: 17, fontFamily: fonts.mono }}>{h}</th>
					))}
				</tr>
			</thead>
			<tbody>
				{rows.map((r, i) => (
					<motion.tr key={r.cmd} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25, delay: 0.1 + i * 0.05 }}>
						<td style={{ ...cell, background: moduleById(r.module).color, fontFamily: fonts.mono, fontSize: 16, fontWeight: 700 }}>{r.module}</td>
						<td style={{ ...cell, fontSize: 16, fontWeight: 700 }}>{r.tool}</td>
						<td style={{ ...cell, fontFamily: fonts.mono, fontSize: 15, fontWeight: 700, wordBreak: 'break-all' }}>{r.cmd}</td>
						<td style={{ ...cell, fontSize: 16, fontWeight: 600 }}>{r.look}</td>
					</motion.tr>
				))}
			</tbody>
		</table>
	);
}
