import { Slide, Inner, Half, Title, Highlight, colors, border, shadowSm } from '../ui';
import { ModuleTag, Terminal, Source } from './_shared';

// M2 跑：在自己的仓库里量一次、改一处、再量一次 + lost-in-the-middle
export default function S13_M2Lab() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner split>
				<Half style={{ flex: 1.1 }}>
					<ModuleTag id="M2" phase="teach" />
					<Title size="48px" style={{ marginBottom: 16 }}>动手：量一次 → 改一处 → 再量一次</Title>
					<Terminal
						fontSize={18}
						lines={[
							'$ cd ~/your-project && claude',
							'$ /context        # 记下总量和最大的一项',
							'',
							'# 三选一：',
							'#   /mcp 里关掉一个用不上的 MCP server',
							'#   精简 CLAUDE.md（删掉过期、重复的规则）',
							'#   把「读 20 个文件找 X」交给 subagent 做',
							'',
							'# 退出后重新开会话（改动在新会话里生效）',
							'$ /context        # 再量一次，前后差多少？',
						]}
					/>
				</Half>

				<Half style={{ flex: 0.9 }}>
					<div style={{ padding: '18px 22px', background: colors.white, border, boxShadow: shadowSm }}>
						<p style={{ fontSize: 26, fontWeight: 900, marginBottom: 10 }}>为什么不全塞进去？</p>
						<p style={{ fontSize: 21, fontWeight: 600, lineHeight: 1.6 }}>
							<Highlight color={colors.yellow}>lost-in-the-middle</Highlight>：研究发现，关键信息放在长 context 的开头或结尾时，模型用得最好；放在中间时效果明显下降。
						</p>
						<p style={{ fontSize: 21, fontWeight: 600, lineHeight: 1.6, marginTop: 10 }}>
							无关内容越多，相关内容越容易被淹没。窗口大，不代表应该全放进去。
						</p>
					</div>
					<Source>Liu et al.,《Lost in the Middle: How Language Models Use Long Contexts》，TACL 2023（arXiv 2307.03172）。</Source>
				</Half>
			</Inner>
		</Slide>
	);
}
