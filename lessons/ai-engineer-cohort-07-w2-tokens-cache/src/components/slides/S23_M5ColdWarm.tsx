import { colors, fonts, radii } from '../ui';
import { ModuleFrame, Terminal, Note, Mark, line, softShadow } from './_shared';

const cell = { borderBottom: '1px solid rgba(16,22,47,.18)', padding: '10px 14px', fontSize: 18, fontWeight: 700 } as const;
const cols = ['', 'input', 'creation', 'read'];

// M5 跑 ①：Cold → Warm
export default function S23_M5ColdWarm() {
	return (
		<ModuleFrame id="M5" phase="teach" title="实验 ①：Cold → Warm">
			<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
				<div>
					<Terminal fontSize={16} lines={[
						'# 在 w2-lab/ 里，同一条命令连跑两次',
						'$ claude -p "Reply OK" --output-format json | tee -a runs.jsonl \\',
						'    | jq \'.usage | {input_tokens, cache_creation_input_tokens, cache_read_input_tokens}\'',
						'',
						'# Codex：连跑两次，看 cached_input_tokens',
						'$ codex exec --json "Reply OK" | grep turn.completed',
					]} />
					<Note style={{ marginTop: 16, fontSize: 19 }}>如果第 1 次就已经有 read：说明几分钟内你在同一个文件夹跑过，cache 还热着</Note>
				</div>
				<div>
					<div style={{ border: line, borderRadius: radii.card, overflow: 'hidden', background: colors.white, boxShadow: softShadow, marginBottom: 20 }}>
						<table style={{ width: '100%', borderCollapse: 'collapse', tableLayout: 'fixed' }}>
							<thead><tr>{cols.map((h) => <th key={h} style={{ ...cell, background: colors.purple, textAlign: 'left', fontFamily: fonts.mono }}>{h}</th>)}</tr></thead>
							<tbody>
								{['第 1 次', '第 2 次'].map((r) => (
									<tr key={r}>
										<td style={{ ...cell, background: '#fff8f2' }}>{r}</td>
										<td style={{ ...cell, height: 58 }} />
										<td style={cell} />
										<td style={cell} />
									</tr>
								))}
							</tbody>
						</table>
					</div>
					<p style={{ fontSize: 21, fontWeight: 700, lineHeight: 1.65 }}>
						Prompt cache 是 <Mark>前缀逐字节精确匹配</Mark>：顺序是 tools → system → messages，从头比到第一个不一样的地方为止
					</p>
					<p style={{ marginTop: 10, fontSize: 20, fontWeight: 600, lineHeight: 1.6 }}>
						它复用的是这段前缀算好的 KV —— 省掉的是 M3 里那段 prefill，不是答案本身
					</p>
				</div>
			</div>
		</ModuleFrame>
	);
}
