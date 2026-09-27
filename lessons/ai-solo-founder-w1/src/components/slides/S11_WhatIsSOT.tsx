import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow, shadowSm } from '../ui';
import { Body, SlideHead } from '../DeckTable';

const WORDS = [
	{
		letter: 'S',
		word: 'SINGLE',
		title: '只有一个当前版本',
		body: '不是群聊一版、文档一版、AI 又猜一版。所有人先读同一个版本。',
		bg: '#FFE6DF',
	},
	{
		letter: 'S',
		word: 'SOURCE',
		title: '关键判断有来源',
		body: '用户是谁、问题多痛、谁会付钱，都要能追到访谈、行为或付款证据。',
		bg: '#FFF2B8',
	},
	{
		letter: 'T',
		word: 'TRUTH',
		title: '这是当前工作真相',
		body: '它不保证永远正确。新证据推翻旧判断时，更新版本，并记录为什么改。',
		bg: '#DFF3E7',
	},
];

export default function S11_WhatIsSOT() {
	return (
		<Slide bg={colors.white}>
			<Body style={{ padding: '34px 58px 28px' }}>
				<SlideHead
					tag="WHAT · 什么是 SoT"
					tagBg={colors.red}
					title="SoT 不是一份永远正确的文档，而是三个承诺"
					titleSize="clamp(30px, 2.75vw, 43px)"
					sub="Single 解决版本冲突，Source 解决依据问题，Truth 说明这一版可以被新证据修正。"
				/>

				<div style={{ display: 'grid', gridTemplateColumns: '0.64fr 1.36fr', gap: 24, alignItems: 'stretch' }}>
					<motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.46 }} style={{ border, boxShadow: shadow, background: colors.dark, color: colors.white, padding: '23px 24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
						<div style={{ fontFamily: fonts.mono, color: colors.yellow, fontSize: 14, fontWeight: 900, letterSpacing: 1.7 }}>ONE PAGE · ONE CURRENT VERSION</div>
						<div style={{ fontFamily: fonts.heading, fontSize: 98, lineHeight: 0.82, fontWeight: 950, letterSpacing: -6 }}>SoT</div>
						<div style={{ borderTop: '3px solid #fff', paddingTop: 13, fontSize: 20, lineHeight: 1.4, fontWeight: 800 }}>
							这个项目目前<br /><span style={{ color: colors.yellow }}>唯一允许驱动任务</span><br />的说明书
						</div>
					</motion.div>

					<div style={{ display: 'grid', gap: 12 }}>
						{WORDS.map((item, index) => (
							<motion.div key={item.word} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: 0.12 + index * 0.12 }} style={{ border, boxShadow: shadowSm, background: item.bg, padding: '14px 17px', display: 'grid', gridTemplateColumns: '64px 0.82fr 1.18fr', gap: 16, alignItems: 'center' }}>
								<div style={{ width: 52, height: 52, display: 'grid', placeItems: 'center', border, background: colors.white, fontFamily: fonts.heading, fontSize: 31, fontWeight: 950, color: colors.red }}>{item.letter}</div>
								<div>
									<div style={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 900, letterSpacing: 1.4, color: colors.red }}>{item.word}</div>
									<div style={{ marginTop: 4, fontSize: 21, lineHeight: 1.2, fontWeight: 950 }}>{item.title}</div>
								</div>
								<div style={{ borderLeft: '3px solid #111', paddingLeft: 16, fontSize: 16, lineHeight: 1.45, fontWeight: 650 }}>{item.body}</div>
							</motion.div>
						))}
					</div>
				</div>

				<div style={{ marginTop: 16, border, boxShadow: shadowSm, background: colors.red, color: colors.white, padding: '12px 19px', fontSize: 20, fontWeight: 900, textAlign: 'center' }}>
					“唯一真相”不是永远不改；是任何时刻都只有一个明确的当前版本。
				</div>
			</Body>
		</Slide>
	);
}
