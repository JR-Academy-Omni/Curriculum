import { motion } from 'framer-motion';
import { colors, border, shadow } from '../ui';
import { Page, PageHead, Code, Note, FS } from '../deck';

// P06 · 必须设置 vs 可选设置 —— 环境地图（蓝图 §6.1 / §6.5）
// ⚠️ 数据纪律（§20.2）：feature flag 作为必要设置保留（不开就没有本节），
//    但不出现模型名、价格、并发上限。产品 UI 位置留 RUNSHEET 当天映射。

const MUST = [
	'功能已启用，且对当前账号可用',
	'项目目录可读',
	'至少使用默认或 in-process 显示模式',
	'Lead 与 teammates 权限模式安全、明确',
	'课堂任务默认只读',
];

const OPTIONAL = [
	'tmux / iTerm2 分屏',
	'自定义角色文件',
	'不同模型档位',
	'plan approval',
	'Hooks 质量门',
	'MCP · Skill',
];

export default function L8P06_SetupMap() {
	return (
		<Page>
			<PageHead
				phase="talk" time="25–34 min"
				title="必须设置 vs 可选设置"
				sub="创建第一个 Team 需要的东西，比你以为的少得多。"
			/>

			<div style={{ display: 'flex', gap: 22, flex: 1, minHeight: 0 }}>
				<div style={{ flex: 1.05, display: 'flex', flexDirection: 'column', gap: 14 }}>
					<Code label="必要：实验能力默认关闭，课前在设置里启用">{`{
  "env": {
    "CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS": "1"
  }
}`}</Code>

					<motion.div
						initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.35, delay: 0.2 }}
						style={{ border, boxShadow: shadow, background: colors.white, flex: 1, display: 'flex', flexDirection: 'column' }}
					>
						<div style={{
							background: colors.green, color: colors.black, padding: '9px 20px',
							borderBottom: border, fontSize: 23, fontWeight: 900,
						}}>最低要求只有这五条</div>
						<div style={{ padding: '14px 20px', display: 'flex', flexDirection: 'column', gap: 10, flex: 1, justifyContent: 'center' }}>
							{MUST.map((m, i) => (
								<div key={m} style={{ display: 'flex', gap: 11, alignItems: 'flex-start' }}>
									<span style={{ color: colors.green, fontSize: 22, fontWeight: 900 }}>{i + 1}.</span>
									<span style={{ fontSize: 23, lineHeight: 1.4, color: colors.dark }}>{m}</span>
								</div>
							))}
						</div>
					</motion.div>
				</div>

				<motion.div
					initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.4, delay: 0.28 }}
					style={{ flex: 1, border, boxShadow: shadow, background: colors.white, display: 'flex', flexDirection: 'column' }}
				>
					<div style={{
						background: '#999', color: colors.white, padding: '9px 20px',
						borderBottom: border, fontSize: 23, fontWeight: 900,
					}}>不是创建第一个 Team 的前提</div>
					<div style={{ padding: '16px 20px', display: 'flex', flexWrap: 'wrap', gap: 10, alignContent: 'flex-start' }}>
						{OPTIONAL.map((o) => (
							<span key={o} style={{
								border: '3px solid #ccc', background: '#fafafa', color: '#888',
								padding: '8px 16px', fontSize: 22, fontWeight: 700,
								textDecoration: 'line-through', textDecorationColor: '#ddd',
							}}>{o}</span>
						))}
					</div>
					<div style={{
						margin: '4px 20px 20px', padding: '16px 18px',
						background: '#fff8e5', border: `3px solid ${colors.orange}`,
						fontSize: 22, lineHeight: 1.5, color: '#444', marginTop: 'auto',
					}}>
						它们是<strong>体验增强</strong>，不是开课条件。
						<br />
						课后按 <strong>P08 的扩展顺序</strong>逐个加，不要一上来全开。
					</div>
				</motion.div>
			</div>

			<Note>
				⚠️ <code style={{ fontSize: FS.note }}>tools</code> 是<strong style={{ color: colors.dark }}>工具 allowlist，不是目录级沙箱</strong>——
				「只读 `frontend/`」是角色指令，不是物理路径限制（§6.4）。
			</Note>
		</Page>
	);
}
