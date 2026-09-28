import { motion } from 'framer-motion';
import { colors, fonts, border, shadow } from '../ui';
import { Page, PageHead, Verdict } from '../deck';

/**
 * P12 · 隐藏区 = 它会来问你的地方
 * 本节和 L10 的结构性接口。上节课隐藏区的处方是落盘，属于好习惯；
 * 这节课它不是好习惯了，是硬性要求 —— 因为定时任务不给它问的机会。
 */
export default function L11P12_HiddenIsWhereItAsks() {
	return (
		<Page>
			<PageHead phase="talk" title="第四道闸，其实上节课讲过" sub="只是当时它还只是个好习惯。" />

			<div style={{ display: 'flex', alignItems: 'center', gap: 26, flexShrink: 0 }}>
				<motion.div
					initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.35 }}
					style={{
						flex: 1, border, boxShadow: shadow, background: colors.purple, color: colors.white,
						padding: '22px 26px',
					}}
				>
					<div style={{ fontFamily: fonts.mono, fontSize: 17, letterSpacing: 2, color: colors.yellow, marginBottom: 8 }}>
						L10 · 隐藏区
					</div>
					<div style={{ fontSize: 28, fontWeight: 900, lineHeight: 1.4 }}>你知道，它不知道</div>
					<div style={{ fontSize: 22, marginTop: 8, opacity: 0.9 }}>处方：落盘。当时是个好习惯。</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
					style={{ fontFamily: fonts.mono, fontSize: 40, color: colors.dark, fontWeight: 700 }}
				>=</motion.div>

				<motion.div
					initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.35, delay: 0.4 }}
					style={{
						flex: 1, border, boxShadow: `6px 6px 0 ${colors.red}`, background: colors.white,
						padding: '22px 26px', borderColor: colors.red,
					}}
				>
					<div style={{ fontFamily: fonts.mono, fontSize: 17, letterSpacing: 2, color: colors.red, marginBottom: 8 }}>
						L11 · 同一个东西
					</div>
					<div style={{ fontSize: 28, fontWeight: 900, lineHeight: 1.4, color: colors.black }}>
						它会来问你的地方
					</div>
					<div style={{ fontSize: 22, marginTop: 8, color: '#666' }}>而它这次问不了。</div>
				</motion.div>
			</div>

			<div style={{ flex: 1 }} />

			<Verdict label="所以第四道闸只有一种过法">
				现在答完，写下来。<span style={{ color: colors.yellow }}>答不出来 = 这件事今天还不能交。</span>
			</Verdict>
		</Page>
	);
}
