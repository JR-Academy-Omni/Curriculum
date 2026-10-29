import { motion } from 'framer-motion';
import { DeckFrame, AnimatedGroup, Panel, Label, colors, fonts } from '../deck';
import { muted, Takeaway } from '../lesson';

// 汇川技术 2026 年二季度：半年报第 8 页、一季报，见 SOURCE_MAP #7
export default function S08_ProgramCalc() {
	return (
		<DeckFrame tag="02 · 让 AI 自己去拿数据" title="算数交给程序，AI 负责对原文" subtitle="大模型心算会出错，而且错得很自信。所以规定：加减乘除、汇总、日期，全部在程序里算；AI 的活是拿结果去和公告原文对。" accent={colors.green}>
			<div style={{ display: 'flex', flexDirection: 'column', gap: 18, height: '100%' }}>
				<div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: 24, alignItems: 'center', flex: 1, minHeight: 0 }}>
					<AnimatedGroup delay={.15}><Panel>
						<Label bg={colors.dark}>程序算</Label>
						<div style={{ fontFamily: fonts.mono, fontSize: 24, lineHeight: 1.8, marginTop: 18 }}>
							汇川技术 · 2026 Q2<br />
							半年累计 246.75 亿<br />
							− 一季度 101.43 亿<br />
							= <b style={{ fontSize: 34 }}>145.32 亿</b><br />
							÷ 上年同季 115.31 − 1 = <b style={{ color: colors.red }}>+26.02%</b>
						</div>
					</Panel></AnimatedGroup>
					<motion.div initial={{ scale: 2.2, opacity: 0, rotate: -12 }} animate={{ scale: 1, opacity: 1, rotate: -8 }} transition={{ type: 'spring', stiffness: 220, damping: 14, delay: .7 }}
						style={{ width: 150, height: 150, borderRadius: '50%', border: `5px solid ${colors.teal}`, color: colors.teal, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: fonts.heading, fontWeight: 900, fontSize: 46, background: colors.white }}>一致</motion.div>
					<AnimatedGroup delay={.35}><Panel>
						<Label bg={colors.yellow} color={colors.dark}>公告原文</Label>
						<div style={{ fontFamily: fonts.mono, fontSize: 24, lineHeight: 1.8, marginTop: 18 }}>
							半年度报告 · 第 8 页<br />
							第二季度营业收入<br />
							<b style={{ fontSize: 34 }}>145.32 亿</b><br />
							一季报 101.43 亿也对得上
						</div>
						<div style={{ fontSize: 18, color: muted, marginTop: 8 }}>来源：巨潮资讯网 PDF 原件</div>
					</Panel></AnimatedGroup>
				</div>
				<div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
					<Takeaway>对不上，先查程序，不许直接改数</Takeaway>
					<span style={{ fontSize: 19, color: muted }}>全 A 股 5,569 只，每只都这样算一遍。</span>
				</div>
			</div>
		</DeckFrame>
	);
}
