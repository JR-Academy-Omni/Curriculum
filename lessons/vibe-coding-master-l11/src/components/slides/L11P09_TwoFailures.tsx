import { motion } from 'framer-motion';
import { colors, fonts, border } from '../ui';
import { Page, PageHead, Verdict } from '../deck';

/**
 * P09 · 两种翻车并排
 * 第一次给结构，但还不是判断闸 —— 闸要到 P10 才出现（§6.3）。
 * 🔴 版式必须让「它绕过去了」那一侧视觉更重（§20）。
 */
const ROWS = [
	{ k: '现象', a: '它停在那儿等你批准，任务没动', b: '它没停，它绕过去了，然后报告说做完了' },
	{ k: '你的感受', a: '烦，但看得见', b: '舒服，而且看不见' },
	{ k: '后果', a: '事情没做', b: '事情没做 —— 但你以为做了' },
];

export default function L11P09_TwoFailures() {
	return (
		<Page>
			<PageHead phase="talk" title="两种翻车" sub="你们进这个教室的时候，怕的是左边那种。" />

			<div style={{ flex: 1, display: 'flex', flexDirection: 'column', minHeight: 0 }}>
				<div style={{ display: 'grid', gridTemplateColumns: '130px 1fr 1.25fr', gap: 14, flexShrink: 0, marginBottom: 12 }}>
					<div />
					{[
						{ t: '学员以为的卡住', bg: colors.white, fg: colors.dark, bd: border, sh: '4px 4px 0 #000' },
						{ t: '真正更危险的那种', bg: colors.red, fg: colors.white, bd: `3px solid ${colors.black}`, sh: `6px 6px 0 ${colors.black}` },
					].map((h, i) => (
						<motion.div
							key={h.t}
							initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.3, delay: i * 0.12 }}
							style={{
								background: h.bg, color: h.fg, border: h.bd, boxShadow: h.sh,
								padding: '12px 18px', fontSize: i === 1 ? 26 : 23, fontWeight: 900, textAlign: 'center',
							}}
						>{h.t}</motion.div>
					))}
				</div>

				{ROWS.map((r, i) => (
					<motion.div
						key={r.k}
						initial={{ opacity: 0, x: -14 }} animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.3, delay: 0.2 + i * 0.1 }}
						style={{ display: 'grid', gridTemplateColumns: '130px 1fr 1.25fr', gap: 14, marginBottom: 12, flex: 1, minHeight: 0 }}
					>
						<div style={{
							display: 'flex', alignItems: 'center', justifyContent: 'flex-end',
							fontFamily: fonts.mono, fontSize: 20, fontWeight: 700, color: '#888', letterSpacing: 1,
						}}>{r.k}</div>
						<div style={{
							border, background: colors.white, padding: '14px 18px',
							fontSize: 23, lineHeight: 1.4, color: '#555', display: 'flex', alignItems: 'center',
						}}>{r.a}</div>
						<div style={{
							border, background: '#fff0f0', boxShadow: `5px 5px 0 ${colors.red}`,
							padding: '14px 18px', fontSize: 24, lineHeight: 1.4, color: colors.black,
							fontWeight: i === 2 ? 900 : 700, display: 'flex', alignItems: 'center',
						}}>{r.b}</div>
					</motion.div>
				))}
			</div>

			<Verdict bg={colors.red}>
				这两种，都不是靠「设置得更仔细」能解决的。
			</Verdict>
		</Page>
	);
}
