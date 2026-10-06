import { Slide, Inner, Title, colors } from '../ui';
import { col, ModuleTag, Note } from './_shared';
import CommandTable from './_CommandTable';
import { commandsA } from '../../data/commands';

// 命令速查表（上）：M1–M3
export default function S04_CommandsA() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner style={col}>
				<ModuleTag id="M0" />
				<Title size="48px" style={{ marginBottom: 8 }}>今天要跑的命令（1/2）</Title>
				<Note style={{ marginBottom: 18, fontSize: 21 }}>先在空文件夹 <code>w2-lab/</code> 里跑；Claude Code 和 Codex 二选一。所有结果追加到 <code>runs.jsonl</code>，M7 统一汇总</Note>
				<CommandTable rows={commandsA} />
			</Inner>
		</Slide>
	);
}
