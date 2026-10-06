import { Slide, Inner, Title, colors } from '../ui';
import { col, ModuleTag, Source } from './_shared';
import CommandTable from './_CommandTable';
import { commandsB } from '../../data/commands';

// 命令速查表（下）：M5–M7
export default function S05_CommandsB() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner style={col}>
				<ModuleTag id="M0" />
				<Title size="48px" style={{ marginBottom: 18 }}>今天要跑的命令（2/2）</Title>
				<CommandTable rows={commandsB} />
				<Source>
					Claude Code 参数对照官方文档和 v2.1.278 的 --help 核实；/usage 显示 cache 命中率需要 v2.1.251+，显示失效原因需要 v2.1.260+。
					Codex 命令参考官方 Non-interactive mode 文档。实验会消耗少量订阅额度。
				</Source>
			</Inner>
		</Slide>
	);
}
