import { motion } from 'framer-motion';
import { colors, fonts, border, shadow } from '../ui';
import { Page, PageHead, Note } from '../deck';

// P08 · 从 Lead+2 到 Lead+3：组合阶梯（蓝图 §7.2 / §7.4）
// 两块：标准课堂单位（正式 Lab 用的组合）+ 扩展顺序（不得倒着扩展）

const TEAM = [
	{ k: 'A', role: '边界一调查员', c: colors.blue },
	{ k: 'B', role: '边界二调查员', c: colors.green },
	{ k: 'C', role: 'verifier / challenger', c: colors.orange },
];

const LADDER = [
	'最小 Team',
	'稳定角色',
	'明确依赖与任务状态',
	'challenger / verifier',
	'写入所有权',
	'模型与思考档位',
	'plan approval',
	'Hooks / MCP / Skills',
];

export default function L8P08_Ladder() {
	return (
		<Page>
			<PageHead phase="talk" time="25–34 min" title="从 Lead+2 到 Lead+3：扩展顺序" />

			<div style={{ display: 'flex', gap: 24, flex: 1, minHeight: 0 }}>
				{/* 标准课堂单位 */}
				<motion.div
					initial={{ opacity: 0, x: -18 }} animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.4, delay: 0.1 }}
					style={{ flex: 1, border, boxShadow: shadow, background: colors.white, display: 'flex', flexDirection: 'column' }}
				>
					<div style={{
						background: colors.dark, color: colors.white, padding: '10px 22px',
						borderBottom: border, fontSize: 23, fontWeight: 900,
					}}>标准课堂单位 · 正式 Lab 用它</div>

					<div style={{ padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: 12 }}>
						<div style={{
							fontFamily: fonts.mono, fontSize: 26, fontWeight: 700,
							color: colors.dark, marginBottom: 4,
						}}>Lead + 3 teammates</div>

						{TEAM.map((t) => (
							<div key={t.k} style={{ display: 'flex', border: `3px solid ${colors.black}`, background: colors.warmBg }}>
								<div style={{
									flexShrink: 0, width: 54, background: t.c, color: colors.white,
									display: 'flex', alignItems: 'center', justifyContent: 'center',
									fontFamily: fonts.mono, fontSize: 25, fontWeight: 700,
								}}>{t.k}</div>
								<div style={{ flex: 1, padding: '12px 18px', fontSize: 23, fontWeight: 700, color: colors.dark }}>
									{t.role}
								</div>
							</div>
						))}
					</div>

					<div style={{
						marginTop: 'auto', padding: '16px 24px', borderTop: '2px dashed #ddd',
						fontSize: 23, color: '#555', lineHeight: 1.5,
					}}>
						A 与 B 交换<strong>跨边界证据</strong>；C 负责<strong>找反例</strong>和验收候选结论；
						Lead 负责拆分、决定和最终验收。
					</div>
				</motion.div>

				{/* 扩展顺序 */}
				<motion.div
					initial={{ opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.4, delay: 0.2 }}
					style={{ flex: 1, border, boxShadow: shadow, background: colors.white, display: 'flex', flexDirection: 'column' }}
				>
					<div style={{
						background: colors.purple, color: colors.white, padding: '10px 22px',
						borderBottom: border, fontSize: 23, fontWeight: 900,
					}}>扩展顺序 · 固定，不得倒着来</div>

					<div style={{ padding: '16px 24px', display: 'flex', flexDirection: 'column', gap: 6, flex: 1 }}>
						{LADDER.map((l, i) => (
							<div key={l} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
								<span style={{
									flexShrink: 0, width: 30, height: 30, borderRadius: 15,
									background: i === 0 ? colors.green : '#e8e8ef',
									color: i === 0 ? colors.black : '#888',
									fontFamily: fonts.mono, fontSize: 16, fontWeight: 700,
									display: 'flex', alignItems: 'center', justifyContent: 'center',
									border: `2px solid ${i === 0 ? colors.black : '#ccc'}`,
								}}>{i + 1}</span>
								<span style={{ fontSize: 22, fontWeight: i === 0 ? 800 : 600, color: i === 0 ? colors.dark : '#555' }}>{l}</span>
								{i < LADDER.length - 1 && <span style={{ marginLeft: 'auto', color: '#ccc', fontSize: 18 }}>↓</span>}
							</div>
						))}
					</div>

					<div style={{
						margin: '0 24px 20px', padding: '14px 18px',
						background: '#fff2f2', border: `3px solid ${colors.red}`,
						fontSize: 23, lineHeight: 1.5, color: '#444',
					}}>
						没有<strong>角色、消息与验收协议</strong>时，先加 MCP、模型和 Hooks
						<strong style={{ color: colors.red }}>只会让错误更复杂</strong>。
					</div>
				</motion.div>
			</div>

			<Note>组合选择表（9 种任务形状 → 推荐组合）在 <strong style={{ color: colors.dark }}>HANDOUT</strong>；P19 会用它做反向重构。</Note>
		</Page>
	);
}
