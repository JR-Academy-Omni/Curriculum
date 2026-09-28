import { motion } from 'framer-motion';
import { colors, fonts, border, shadow } from '../ui';
import { Page, PageHead, Note, FS } from '../deck';

// P19 · 组合选择 + Exit + 作业 —— 收口（蓝图 §11.7 / §16.2 / §17）
// 组合重构的三次删减：让结构选择从刚完成的 Team 反向长出来。

const CUTS = [
	{ n: '1', q: '删掉 C，什么时候仍然成立？', c: colors.orange },
	{ n: '2', q: '把 A、B 换成 Subagents，什么能力消失？', c: colors.blue },
	{ n: '3', q: '把任务缩成一个函数查找，为什么整个 Team 都该删掉？', c: colors.red },
];

const EXIT = [
	{ q: '为什么 Lead + 1 不是本课的最小可用 Team？', must: true },
	{ q: '哪一项设置是当前工具创建 Agent Team 的必要项？', must: false },
	{ q: '什么时候 Lead + 2 足够，什么时候要加 verifier？', must: false },
	{ q: '如果删掉成员间消息，任务完全不受影响，应该换成什么结构？', must: true },
	{ q: 'Team 全部任务 completed，Lead 还缺哪一步？', must: true },
];

export default function L8P19_Recompose() {
	return (
		<Page>
			<PageHead
				phase="review" time="113–120 min"
				title="组合重构 · Exit · 作业"
				sub={<>让结构选择<strong>从你刚做完的这支 Team 反向长出来</strong>。</>}
			/>

			<div style={{ display: 'flex', gap: 20, flex: 1, minHeight: 0 }}>
				{/* 三次删减 */}
				<div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 12 }}>
					<div style={{ fontSize: 23, fontWeight: 800, color: '#888', letterSpacing: 1 }}>三次删减 · 每次都要给理由</div>
					{CUTS.map((c, i) => (
						<motion.div
							key={c.n}
							initial={{ opacity: 0, x: -14 }} animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.3, delay: 0.08 + i * 0.09 }}
							style={{ display: 'flex', border, boxShadow: '4px 4px 0 #000', background: colors.white, flex: 1 }}
						>
							<div style={{
								flexShrink: 0, width: 50, background: c.c, color: colors.white,
								display: 'flex', alignItems: 'center', justifyContent: 'center',
								fontFamily: fonts.mono, fontSize: 24, fontWeight: 700,
							}}>{c.n}</div>
							<div style={{ flex: 1, padding: '12px 18px', display: 'flex', alignItems: 'center', fontSize: 22, lineHeight: 1.42, color: colors.dark }}>
								{c.q}
							</div>
						</motion.div>
					))}

					<motion.div
						initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.35, delay: 0.4 }}
						style={{ border: `3px solid ${colors.dark}`, background: colors.warmBg, padding: '13px 18px' }}
					>
						<div style={{ fontSize: 23, lineHeight: 1.5, color: colors.dark }}>
							作业第 5 题就是这一题的延伸：<strong>删除一个不必要角色，说明为什么质量不下降。</strong>
						</div>
					</motion.div>
				</div>

				{/* Exit ticket */}
				<motion.div
					initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.4, delay: 0.25 }}
					style={{ flex: 1, border, boxShadow: shadow, background: colors.white, display: 'flex', flexDirection: 'column' }}
				>
					<div style={{
						background: colors.dark, color: colors.white, padding: '10px 20px',
						borderBottom: border, fontSize: 22, fontWeight: 900,
						display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
					}}>
						<span>Exit ticket</span>
						<span style={{ fontSize: FS.note, opacity: 0.85 }}>五题至少四题正确</span>
					</div>

					<div style={{ padding: '14px 18px', display: 'flex', flexDirection: 'column', gap: 9, flex: 1 }}>
						{EXIT.map((e, i) => (
							<div key={i} style={{
								display: 'flex', gap: 12, alignItems: 'flex-start', flex: 1,
								padding: '9px 12px',
								background: e.must ? '#fff2f2' : 'transparent',
								border: e.must ? `2px solid ${colors.red}` : '2px solid #eee',
							}}>
								<span style={{
									flexShrink: 0, width: 26, height: 26,
									background: e.must ? colors.red : '#ccc', color: colors.white,
									fontFamily: fonts.mono, fontSize: 16, fontWeight: 700,
									display: 'flex', alignItems: 'center', justifyContent: 'center',
								}}>{i + 1}</span>
								<span style={{ fontSize: 22, lineHeight: 1.4, color: colors.dark }}>
									{e.q}
									{e.must && <span style={{ color: colors.red, fontWeight: 800, marginLeft: 6, fontSize: 16 }}>必对</span>}
								</span>
							</div>
						))}
					</div>
				</motion.div>
			</div>

			<motion.div
				initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.35, delay: 0.5 }}
				style={{ display: 'flex', gap: 16, alignItems: 'center', border, boxShadow: shadow, background: colors.yellow, padding: '14px 24px' }}
			>
				<span style={{ fontSize: 25, fontWeight: 900, color: colors.black, whiteSpace: 'nowrap' }}>今天带走的一句</span>
				<span style={{ fontSize: 25, fontWeight: 700, color: colors.black, lineHeight: 1.45 }}>
					Team 的价值不是多开几个 Agent，是让一名成员的新证据
					<strong>在任务结束前改变另一名成员的下一步</strong>。
				</span>
			</motion.div>

			<Note>
				作业（5 必做 + 5 选做）与课堂评分表在 <strong style={{ color: colors.dark }}>HANDOUT</strong>。
				过关线 8/10，且「Team 真实性」和「外部验收」不得为 0。
			</Note>
		</Page>
	);
}
