import { motion } from 'framer-motion';
import { DeckFrame, colors, fonts } from '../kit';

const around = [
	{ t: 'Actions', d: '到点、有事发生时自动执行', x: 70, y: 30, c: colors.yellow },
	{ t: 'Issues', d: '收件箱 / 任务单：来一件事开一张', x: 980, y: 30, c: colors.blue },
	{ t: 'Pull Request', d: '审批闸：AI 改好，你点 Merge 才生效', x: 980, y: 380, c: colors.green },
	{ t: 'Git 历史', d: '记忆 + 审计：每一次改了什么都留着', x: 70, y: 380, c: colors.white },
];

export default function S03b_Hub() {
	return <DeckFrame tag="今天的主线" title="用 GitHub 当一人公司的运营中心" subtitle="资料、规则、产出都放在一个仓库里。自动化不是另外一套系统，而是围着这个仓库转。" accent={colors.red} bg="#fbf8f3">
		<div style={{ position: 'relative', height: 540 }}>
			<svg width="1400" height="540" style={{ position: 'absolute', inset: 0 }} aria-hidden>
				{[[400, 110], [980, 110], [980, 460], [400, 460]].map(([x, y], i) => <motion.line key={i} x1={700} y1={285} x2={x} y2={y} stroke={colors.dark} strokeWidth={3} strokeDasharray="10 8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .5 + i * .1 }} />)}
			</svg>
			<motion.div initial={{ opacity: 0, scale: .9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: .1 }} style={{ position: 'absolute', left: 470, top: 175, width: 460, background: colors.dark, color: colors.white, borderRadius: 26, padding: '24px 28px', textAlign: 'center', boxShadow: `9px 9px 0 ${colors.red}` }}>
				<div style={{ fontFamily: fonts.mono, fontSize: 16, color: colors.yellow, letterSpacing: 1.5 }}>REPOSITORY</div>
				<div style={{ fontSize: 38, fontWeight: 900, marginTop: 6 }}>你的生意仓库</div>
				<div style={{ fontSize: 20, lineHeight: 1.5, marginTop: 8, color: '#d8d8dd' }}>资料 · 规则（任务卡）· 每天的产出 · 回执</div>
			</motion.div>
			{around.map((n, i) => <motion.div key={n.t} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .3 + i * .12 }} style={{ position: 'absolute', left: n.x, top: n.y, width: 350, background: n.c, border: `2px solid ${colors.dark}`, borderRadius: 20, padding: '16px 20px', boxShadow: '5px 5px 0 rgba(16,22,47,.85)' }}>
				<div style={{ fontSize: 30, fontWeight: 900 }}>{n.t}</div>
				<div style={{ fontSize: 20, lineHeight: 1.45, marginTop: 6 }}>{n.d}</div>
			</motion.div>)}
		</div>
		<div style={{ fontSize: 22, fontWeight: 800, background: colors.yellow, borderRadius: 16, padding: '12px 20px', display: 'inline-block' }}>Codex 是干活的人，GitHub 是它上班的地方：什么时候开工、做完交到哪、谁来签字，都在这里定。</div>
	</DeckFrame>;
}
