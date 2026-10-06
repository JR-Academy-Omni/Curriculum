import { colors, radii } from '../ui';
import { Label } from '../deck';
import { ModuleFrame, Terminal, Note, line, softShadow } from './_shared';

const groups = ['小输入 · 关 cache', '大输入 · 关 cache', '大输入 · 开 cache（跑两次）'];
const cell = { borderBottom: '1px solid rgba(16,22,47,.18)', padding: '10px 14px', fontSize: 18, fontWeight: 700 } as const;

// M3 跑：用 ttft.py 测 TTFT，对比小输入 / 大输入
export default function S16_M3Lab() {
	return (
		<ModuleFrame id="M3" phase="teach" title="动手：给 TTFT 计时">
			<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
				<div>
					<Terminal fontSize={16} lines={[
						'$ seq 1 20000 > big.txt',
						'',
						'# 1. 小输入，关掉 cache',
						'$ DISABLE_PROMPT_CACHING=1 python3 ttft.py "Reply OK"',
						'# 2. 大输入，关掉 cache',
						'$ cat big.txt | DISABLE_PROMPT_CACHING=1 python3 ttft.py "Reply OK"',
						'# 3. 大输入，开着 cache（连跑两次）',
						'$ cat big.txt | python3 ttft.py "Reply OK"',
					]} />
					<Note style={{ marginTop: 16, fontSize: 19 }}>
						ttft.py 在课程资料的 lab/ 里：它调用 claude -p 的 stream-json 输出，记下第一段文字出现的时间。计时包含 CLI 启动，所以只比较组和组之间的差
					</Note>
				</div>
				<div>
					<Label bg={colors.green} color={colors.black}>记录表 · 每组 3 次，取中位数</Label>
					<div style={{ marginTop: 12, border: line, borderRadius: radii.card, overflow: 'hidden', background: colors.white, boxShadow: softShadow }}>
						<table style={{ width: '100%', borderCollapse: 'collapse', tableLayout: 'fixed' }}>
							<thead>
								<tr>{['组', 'TTFT 中位数', 'input 合计'].map((h) => <th key={h} style={{ ...cell, background: colors.green, textAlign: 'left' }}>{h}</th>)}</tr>
							</thead>
							<tbody>
								{groups.map((g) => (
									<tr key={g}>
										<td style={{ ...cell, background: '#fff8f2' }}>{g}</td>
										<td style={{ ...cell, height: 64 }} />
										<td style={cell} />
									</tr>
								))}
							</tbody>
						</table>
					</div>
					<p style={{ marginTop: 18, fontSize: 21, fontWeight: 700, lineHeight: 1.5 }}>
						三组都只输出一个 OK。组 1 和组 2 差出来的时间，基本就是多出来的 prefill
					</p>
				</div>
			</div>
		</ModuleFrame>
	);
}
