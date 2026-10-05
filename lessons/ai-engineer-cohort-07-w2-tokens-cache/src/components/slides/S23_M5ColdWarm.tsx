import { Slide, Inner, Half, Title, Highlight, colors, fonts, border } from '../ui';
import { ModuleTag, Terminal, Note } from './_shared';

const cell = { border, padding: '10px 12px', fontSize: 18, fontWeight: 700 } as const;
const cols = ['', 'input', 'creation', 'read'];

// M5 跑 ①：Cold → Warm
export default function S23_M5ColdWarm() {
	return (
		<Slide bg={colors.white}>
			<Inner split>
				<Half>
					<ModuleTag id="M5" phase="teach" />
					<Title size="48px" style={{ marginBottom: 16 }}>实验 ①：Cold → Warm</Title>
					<Terminal
						fontSize={16}
						lines={[
							'# 在 w2-lab/ 里，同一条命令连跑两次',
							'$ claude -p "Reply OK" --output-format json | tee -a runs.jsonl \\',
							'    | jq \'.usage | {input_tokens, cache_creation_input_tokens, cache_read_input_tokens}\'',
							'',
							'# Codex：连跑两次，看 cached_input_tokens',
							'$ codex exec --json "Reply OK" | grep turn.completed',
						]}
					/>
					<Note style={{ marginTop: 16, fontSize: 20 }}>
						如果第 1 次就已经有 read：说明几分钟内你在同一个文件夹跑过，cache 还热着
					</Note>
				</Half>

				<Half>
					<table style={{ width: '100%', borderCollapse: 'collapse', tableLayout: 'fixed', background: colors.white, marginBottom: 20 }}>
						<thead>
							<tr>{cols.map((h) => <th key={h} style={{ ...cell, background: colors.purple, textAlign: 'left', fontFamily: fonts.mono }}>{h}</th>)}</tr>
						</thead>
						<tbody>
							{['第 1 次', '第 2 次'].map((r) => (
								<tr key={r}>
									<td style={{ ...cell, background: colors.warmBg }}>{r}</td>
									<td style={{ ...cell, height: 58 }} />
									<td style={cell} />
									<td style={cell} />
								</tr>
							))}
						</tbody>
					</table>
					<p style={{ fontSize: 22, fontWeight: 700, lineHeight: 1.6 }}>
						Prompt cache 是<Highlight color={colors.yellow}>前缀逐字节精确匹配</Highlight>：顺序是 tools → system → messages，从头比到第一个不一样的地方为止
					</p>
					<p style={{ marginTop: 10, fontSize: 21, fontWeight: 600, lineHeight: 1.6 }}>
						它复用的是这段前缀算好的 KV —— 省掉的是 M3 里那段 prefill，不是答案本身
					</p>
				</Half>
			</Inner>
		</Slide>
	);
}
