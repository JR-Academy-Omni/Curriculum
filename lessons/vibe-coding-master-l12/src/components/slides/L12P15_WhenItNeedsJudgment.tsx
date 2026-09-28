import { ActBadge, Page, Head, Code, colors, fonts, border, shadowSm } from '../deck';
import { AGENT_HOOK, STOP_CMD } from '../../data/code';

// P15 · 那要动脑的怎么办
// 🔴 必须紧接 P14 讲（铁律 7），否则学员带着「挂不上」的挫败感走。
// 🔴「代价」列视觉权重高于「怎么工作」列（蓝图 §22 检查项）。
type HookType = { t: string; how: string; when: string; cost: string; best?: boolean; warn?: boolean };

const TYPES: readonly HookType[] = [
	{
		t: 'command', how: '跑一个 shell，退出码说话', when: '一行 if 就够',
		cost: '无。优先用它', best: true,
	},
	{
		t: 'prompt', how: '把 hook 的输入喂给一个模型（默认 Haiku），返回 {"ok","reason"}',
		when: '光看输入数据就够判', cost: '确定性还回去了 —— 判断的是模型，不是脚本',
	},
	{
		t: 'agent', how: '起一个 subagent，能读文件跑命令，最多 50 轮',
		when: '得看代码真实状态才判得了', cost: '同上，而且官方标了 experimental', warn: true,
	},
] as const;

export default function L12P15_WhenItNeedsJudgment() {
	return (
		<Page>
			<ActBadge act={4} />
			<Head sub="官方给了两条路。但代价要一起讲。">
				那说不清的怎么办
			</Head>

			<div style={{ display: 'flex', flexDirection: 'column', gap: 9, marginBottom: 18 }}>
				{TYPES.map((x) => (
					<div key={x.t} style={{
						display: 'flex', gap: 12, alignItems: 'stretch',
						border, background: colors.white, boxShadow: shadowSm,
					}}>
						<div style={{
							width: 132, flexShrink: 0, background: x.best ? colors.green : x.warn ? colors.orange : colors.dark,
							color: x.best ? colors.black : colors.white,
							display: 'flex', alignItems: 'center', justifyContent: 'center',
							fontFamily: fonts.mono, fontSize: 19, fontWeight: 700,
						}}>
							{x.t}
						</div>
						<div style={{ flex: 1.35, padding: '11px 14px', fontSize: 17, lineHeight: 1.45, alignSelf: 'center' }}>
							{x.how}
						</div>
						<div style={{ flex: 0.85, padding: '11px 14px', fontSize: 17, lineHeight: 1.45, alignSelf: 'center', color: '#555' }}>
							{x.when}
						</div>
						{/* 代价列：视觉权重最高 */}
						<div style={{
							flex: 1.15, padding: '11px 16px', alignSelf: 'stretch',
							background: x.best ? '#eaf7e4' : colors.red, color: x.best ? colors.black : colors.white,
							borderLeft: `3px solid ${colors.black}`,
							display: 'flex', alignItems: 'center',
							fontSize: 18, fontWeight: 700, lineHeight: 1.4,
						}}>
							{x.cost}
						</div>
					</div>
				))}
			</div>

			<div style={{ flex: 1, display: 'flex', gap: 22, minHeight: 0 }}>
				<div style={{ flex: 1, display: 'flex', flexDirection: 'column', minHeight: 0, minWidth: 0 }}>
					<Lbl official>agent hook · 验证测试通过才准收工</Lbl>
					<Code code={AGENT_HOOK} size={16} wrap style={{ flex: 1, minHeight: 0 }} />
				</div>
				<div style={{ flex: 1, display: 'flex', flexDirection: 'column', minHeight: 0 }}>
					<Lbl>同一件事 · 测试命令固定的话，根本不用模型</Lbl>
					<Code code={STOP_CMD} size={16} hi={[6]} wrap style={{ flex: 1, minHeight: 0 }} />
				</div>
			</div>

			<div style={{
				marginTop: 16, padding: '13px 22px', background: colors.dark, color: colors.white,
				fontSize: 21, lineHeight: 1.55, textAlign: 'center',
			}}>
				输入数据就够判 → <code style={{ fontFamily: fonts.mono, color: colors.yellow }}>prompt</code>　·　
				得看代码真实状态 → <code style={{ fontFamily: fonts.mono, color: colors.yellow }}>agent</code>　·　
				一行 if 就够 → <code style={{ fontFamily: fonts.mono, color: colors.yellow }}>command</code>
				<span style={{ color: 'rgba(255,255,255,0.55)' }}>，而且官方原话：prefer command hooks</span>
			</div>
		</Page>
	);
}

function Lbl({ children, official }: { children: React.ReactNode; official?: boolean }) {
	return (
		<div style={{
			fontFamily: fonts.mono, fontSize: 13, fontWeight: 700, letterSpacing: 1,
			color: official ? colors.teal : colors.purple, marginBottom: 6,
		}}>
			{official ? '[官方] ' : '[本课] '}{children}
		</div>
	);
}
