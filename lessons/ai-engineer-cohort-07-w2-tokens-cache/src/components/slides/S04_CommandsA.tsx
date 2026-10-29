import { ModuleFrame } from './_shared';
import CommandTable from './_CommandTable';
import { commandsA } from '../../data/commands';

// 命令速查表（上）：M1–M3
export default function S04_CommandsA() {
	return (
		<ModuleFrame id="M0" title="今天要跑的命令（1/2）" titleSize={44} subtitle="先在空文件夹 w2-lab/ 里跑；Claude Code 和 Codex 二选一。结果追加到 runs.jsonl，M7 统一汇总">
			<CommandTable rows={commandsA} />
		</ModuleFrame>
	);
}
