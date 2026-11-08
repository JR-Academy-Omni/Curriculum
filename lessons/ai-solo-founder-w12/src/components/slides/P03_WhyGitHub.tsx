import { motion } from 'framer-motion';
import { DeckFrame, colors, fonts } from '../kit';

export default function P03_WhyGitHub() {
	const box = (x: number, y: number, w: number, bg: string, t: string, d: string, delay: number, fg = colors.dark) => <motion.div initial={{ opacity: 0, scale: .94 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay }} style={{ position: 'absolute', left: x, top: y, width: w, background: bg, color: fg, border: `2px solid ${colors.dark}`, borderRadius: 22, padding: '18px 22px', boxShadow: '6px 6px 0 rgba(16,22,47,.85)' }}><div style={{ fontSize: 30, fontWeight: 900 }}>{t}</div><div style={{ fontSize: 20, lineHeight: 1.5, marginTop: 6 }}>{d}</div></motion.div>;
	return <DeckFrame tag="为什么是 GitHub" title="记忆放在一个地方，本地和云端的 Agent 都来读" subtitle="Agent 每次开工都是「失忆」的。它知道多少你的生意，取决于你把多少写进了仓库。" bg="#fbf8f3">
		<div style={{ position: 'relative', height: 560 }}>
			<svg width="1400" height="560" style={{ position: 'absolute', inset: 0 }} aria-hidden>
				{[[360, 150, 520, 200], [1040, 150, 880, 200], [700, 330, 470, 420], [700, 330, 930, 420]].map(([a, b, c, d], i) => <motion.line key={i} x1={a} y1={b} x2={c} y2={d} stroke={colors.dark} strokeWidth={3} strokeDasharray="10 8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .6 + i * .1 }} />)}
			</svg>
			{box(20, 60, 340, colors.white, '本地 Agent', 'Codex App：在你电脑上，打开仓库就能干活；可以设成每天定时', .3)}
			{box(1040, 60, 340, colors.white, '云端 Agent', 'GitHub Actions：电脑关着也按时跑，跑完把结果交回仓库', .4)}
			<motion.div initial={{ opacity: 0, scale: .9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: .1 }} style={{ position: 'absolute', left: 470, top: 150, width: 460, background: colors.dark, color: colors.white, borderRadius: 26, padding: '22px 26px', textAlign: 'center', boxShadow: `9px 9px 0 ${colors.red}` }}>
				<div style={{ fontFamily: fonts.mono, fontSize: 16, color: colors.yellow, letterSpacing: 1.5 }}>GITHUB · 记忆仓库</div>
				<div style={{ fontSize: 34, fontWeight: 900, marginTop: 6 }}>你的生意，写成文件</div>
				<div style={{ fontSize: 19, lineHeight: 1.5, marginTop: 8, color: '#d8d8dd' }}>品牌 · 受众 · 语气 · 过往文章 · 规则 · 每天的产出 · 学到的教训</div>
			</motion.div>
			{box(250, 410, 400, colors.green, '网页', '合并后自动发布到 GitHub Pages', .7)}
			{box(760, 410, 400, colors.yellow, '公众号文章', '排版好的稿子，复制进公众号编辑器', .8)}
		</div>
	</DeckFrame>;
}
