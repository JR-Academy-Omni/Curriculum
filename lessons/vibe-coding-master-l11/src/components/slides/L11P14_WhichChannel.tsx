import { colors } from '../ui';
import { Page, PageHead, AsciiFlow, Verdict } from '../deck';

/** P14 · 选哪条 —— 一句判断线 */
export default function L11P14_WhichChannel() {
	return (
		<Page>
			<PageHead phase="talk" title="选哪条" />

			<AsciiFlow label="选择线" accent={colors.dark} size={26} lh={1.9} align="center" style={{ flex: 1 }}>
{`要读你机器上的东西      ──▶   本地

要它在你关机时也跑      ──▶   云端

都不满足，或都用不了     ──▶   命令行`}
			</AsciiFlow>

			<Verdict>
				选通道是十分钟的事。<span style={{ color: colors.yellow }}>难的是交出去之前要补什么</span> —— 那是今天剩下的时间。
			</Verdict>
		</Page>
	);
}
