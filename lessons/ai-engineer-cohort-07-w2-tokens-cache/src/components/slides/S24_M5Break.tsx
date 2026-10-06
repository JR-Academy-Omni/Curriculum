import { ModuleFrame, Terminal, card, softShadow } from './_shared';

const notes = [
	{ t: 'A 看什么', d: '第二次的 read 有没有变少、creation 有没有变多？时间戳之后的内容每次都要重算 → 变化的内容放得越靠前，损失越大' },
	{ t: 'B 看什么', d: '第一次换到新模型时，read 归零、重新 creation。每个模型有自己的 cache，内容一模一样也不能共用' },
	{ t: '生产里的同类 bug', d: 'system prompt 开头拼上 user name / 日期 / request id；tools 每次顺序不同；JSON 没排序 key' },
];

// M5 跑 ②：故意把 cache 打碎 —— 时间戳、换模型
export default function S24_M5Break() {
	return (
		<ModuleFrame id="M5" phase="teach" title="实验 ②：故意把 cache 打碎">
			<div style={{ display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', gap: 32 }}>
				<Terminal fontSize={16} lines={[
					'# A. 在 system prompt 末尾加一段每次都变的内容（连跑两次）',
					'$ claude -p "Reply OK" \\',
					'    --append-system-prompt "Current time: $(date +%s)" \\',
					'    --output-format json | jq .usage',
					'',
					'# B. 换一个模型（和实验 ① 比）',
					'$ claude -p "Reply OK" --model sonnet --output-format json | jq .usage',
				]} />
				<div>
					{notes.map((c) => (
						<div key={c.t} style={{ ...card, boxShadow: softShadow, padding: '14px 18px', marginBottom: 14 }}>
							<p style={{ fontSize: 22, fontWeight: 900, marginBottom: 6 }}>{c.t}</p>
							<p style={{ fontSize: 18, fontWeight: 600, lineHeight: 1.55 }}>{c.d}</p>
						</div>
					))}
				</div>
			</div>
		</ModuleFrame>
	);
}
