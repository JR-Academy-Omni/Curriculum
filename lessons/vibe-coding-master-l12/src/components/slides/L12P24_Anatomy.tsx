import { Page, Code, colors, fonts, border, shadowSm } from '../deck';
import { AppendixHead } from './L12P23_ExampleLibrary';
import { CONFIG_SHAPE } from '../../data/code';

// P24 · 附录二：脚本解剖与字段速查
// 🔴 课上不讲。这是全 deck 唯一允许出现完整 Can block? 表和字段表的地方。
// 🔴 页面上必须写明「字段与默认值会变，以当天官方文档为准」（蓝图 §11.1）。
const CAN_BLOCK = [
	['PreToolUse', 'Yes', 'Blocks the tool call', true],
	['UserPromptSubmit', 'Yes', 'Blocks prompt processing and erases the prompt', false],
	['UserPromptExpansion', 'Yes', 'Blocks the expansion', false],
	['Stop', 'Yes', 'Prevents Claude from stopping, continues the conversation', true],
	['SubagentStop', 'Yes', 'Prevents the subagent from stopping', false],
	['TeammateIdle', 'Yes', 'Prevents the teammate from going idle', false],
	['TaskCreated', 'Yes', 'Rolls back the task creation', false],
	['TaskCompleted', 'Yes', 'Prevents the task from being marked completed', false],
	['ConfigChange', 'Yes', 'Blocks the change (except policy_settings)', false],
	['PostToolBatch', 'Yes', 'Stops the agentic loop before the next model call', false],
	['PostToolUse', 'No', 'Shows stderr to Claude; the tool already ran', 'bad'],
	['PostToolUseFailure', 'No', 'Shows stderr to Claude; the tool already failed', false],
	['PermissionRequest', 'No', 'exit 2 不生效 —— 要拒绝请用 decision 对象', false],
	['PermissionDenied', 'No', '退出码和 stderr 都被忽略', false],
	['StopFailure', 'No', '输出和退出码都被忽略', false],
] as const;

const TYPES = [
	['command', '跑一个 shell 命令', '10 分钟', '默认选它 · prefer command hooks'],
	['http', 'POST 到一个 URL', '10 分钟', '团队共用策略 / 审计服务'],
	['mcp_tool', '调用已连接的 MCP server 工具', '10 分钟', '已经在用 MCP'],
	['prompt', '单轮模型判断，默认 Haiku', '30 秒', '光看输入数据就够判'],
	['agent', '起 subagent，最多 50 轮工具调用', '60 秒', '得看真实状态 · experimental'],
] as const;

const MATCHERS = [
	['PreToolUse / PostToolUse / PermissionRequest …', '工具名', 'Bash · Edit|Write · mcp__.*'],
	['SessionStart', '会话怎么开始的', 'startup · resume · clear · compact · fork'],
	['SessionEnd', '会话为什么结束', 'clear · resume · logout · prompt_input_exit'],
	['Notification', '通知类型', 'permission_prompt · idle_prompt · agent_completed'],
	['SubagentStart / SubagentStop', 'agent 类型', 'general-purpose · Explore · Plan'],
	['PreCompact / PostCompact', '什么触发的压缩', 'manual · auto'],
	['ConfigChange', '配置来源', 'user_settings · project_settings · skills'],
	['FileChanged', '要盯的文件名', '文件名模式'],
] as const;

export default function L12P24_Anatomy() {
	return (
		<Page bg="#f4efe8">
			<AppendixHead n="二" title="脚本解剖与字段速查" note="课上不讲 · 字段与默认值会变，以当天官方文档为准" />

			<div style={{ flex: 1, display: 'flex', gap: 14, minHeight: 0 }}>
				{/* 左：Can block 全表 */}
				<div style={{ flex: 1.1, display: 'flex', flexDirection: 'column', minHeight: 0 }}>
					<Cap>哪些事件拦得住（官方表）</Cap>
					<div style={{ border, background: colors.white, flex: 1, minHeight: 0, overflow: 'hidden' }}>
						{CAN_BLOCK.map(([ev, can, what, hot]) => (
							<div key={ev as string} style={{
								display: 'flex', alignItems: 'center', gap: 7, padding: '3px 8px',
								background: hot === 'bad' ? colors.red : hot ? '#eafaf1' : 'transparent',
								color: hot === 'bad' ? colors.white : colors.black,
								borderBottom: '1px solid #e2ddd5',
							}}>
								<code style={{ fontFamily: fonts.mono, fontSize: 12.5, fontWeight: 700, minWidth: 132 }}>{ev}</code>
								<span style={{ fontSize: 12, fontWeight: 900, minWidth: 26 }}>{can}</span>
								<span style={{ fontSize: 12, lineHeight: 1.25 }}>{what}</span>
							</div>
						))}
					</div>
				</div>

				{/* 中：配置结构 */}
				<div style={{ flex: 0.85, display: 'flex', flexDirection: 'column', minHeight: 0, minWidth: 0, gap: 10 }}>
					<div style={{ display: 'flex', flexDirection: 'column', minHeight: 0, flex: 1 }}>
						<Cap>配置文件结构</Cap>
						<Code code={CONFIG_SHAPE} size={13} wrap style={{ flex: 1, minHeight: 0, boxShadow: 'none' }} />
					</div>
					<div style={{ border, background: colors.yellow, padding: '8px 11px', fontSize: 12.5, lineHeight: 1.45 }}>
						<b>两层数组：</b>外层一项 = 一组 matcher 相同的 hook；内层 hooks 数组 = 这组挂了几个命令，<b>它们并行跑</b>。
					</div>
					<div style={{ border, background: colors.white, padding: '8px 11px', fontSize: 12, lineHeight: 1.5 }}>
						<b>路径占位符</b><br />
						<code style={{ fontFamily: fonts.mono }}>${'{CLAUDE_PROJECT_DIR}'}</code> 项目根<br />
						<code style={{ fontFamily: fonts.mono }}>${'{CLAUDE_PLUGIN_ROOT}'}</code> plugin 目录（每次更新会变）<br />
						<code style={{ fontFamily: fonts.mono }}>${'{CLAUDE_PLUGIN_DATA}'}</code> plugin 持久数据
					</div>
				</div>

				{/* 右：type + matcher */}
				<div style={{ flex: 1.1, display: 'flex', flexDirection: 'column', minHeight: 0, gap: 10 }}>
					<div>
						<Cap>五种 type</Cap>
						<div style={{ border, background: colors.white }}>
							{TYPES.map(([t, how, to, when], i) => (
								<div key={t} style={{
									display: 'flex', gap: 7, padding: '4px 8px', alignItems: 'center',
									background: i === 0 ? '#eafaf1' : 'transparent',
									borderBottom: '1px solid #e2ddd5',
								}}>
									<code style={{ fontFamily: fonts.mono, fontSize: 12.5, fontWeight: 700, minWidth: 66 }}>{t}</code>
									<span style={{ fontSize: 11.5, flex: 1, lineHeight: 1.25, color: '#555' }}>{how}</span>
									<span style={{ fontFamily: fonts.mono, fontSize: 11.5, minWidth: 46, color: colors.red }}>{to}</span>
									<span style={{ fontSize: 11.5, flex: 0.95, lineHeight: 1.25 }}>{when}</span>
								</div>
							))}
						</div>
					</div>

					<div style={{ flex: 1, minHeight: 0 }}>
						<Cap>matcher 按事件过滤不同的东西</Cap>
						<div style={{ border, background: colors.white }}>
							{MATCHERS.map(([ev, what, eg]) => (
								<div key={ev} style={{ padding: '4px 8px', borderBottom: '1px solid #e2ddd5' }}>
									<div style={{ display: 'flex', gap: 7, alignItems: 'baseline' }}>
										<code style={{ fontFamily: fonts.mono, fontSize: 12, fontWeight: 700, flex: 1 }}>{ev}</code>
										<span style={{ fontSize: 11.5, color: colors.red, fontWeight: 700 }}>{what}</span>
									</div>
									<div style={{ fontFamily: fonts.mono, fontSize: 11, color: '#888', lineHeight: 1.3 }}>{eg}</div>
								</div>
							))}
						</div>
					</div>

					<div style={{ border: `2px solid ${colors.red}`, background: 'rgba(255,87,87,0.07)', padding: '7px 11px', fontSize: 12, lineHeight: 1.45 }}>
						⚠️ <b>matcher 区分大小写</b>　·　<b>没有 matcher = 这个事件每次都触发</b>
					</div>
				</div>
			</div>
		</Page>
	);
}

function Cap({ children }: { children: React.ReactNode }) {
	return (
		<div style={{
			fontFamily: fonts.mono, fontSize: 12, fontWeight: 700, letterSpacing: 1,
			color: '#666', marginBottom: 5,
		}}>
			{children}
		</div>
	);
}
