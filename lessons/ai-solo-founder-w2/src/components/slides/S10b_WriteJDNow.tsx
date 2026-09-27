import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow, shadowSm } from '../ui';
import { Body, SlideHead, Punchline } from '../DeckTable';

const CHECKS = [
	'交付物的格式写死了吗？它自己能判断做完没有吗？',
	'哪一句话还是「尽量」「合适的时候」？换成条件。',
	'停下来找人的条件有没有覆盖到花钱和对外发出？',
];

export default function S10b_WriteJDNow() {
	return (
		<Slide bg={colors.warmBg}>
			<Body>
				<SlideHead
					tag="③ 现场写 · 15 MIN"
					tagBg={colors.yellow}
					title="现在写你的第一份 JD，写完存进 memory"
					sub="选你最想让它每周替你做完的那一件事。一件就够，不要一次写五份。"
				/>
				<div style={{ display: 'grid', gridTemplateColumns: '1.25fr 1fr', gap: 20 }}>
					<motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12 }} style={{ border, boxShadow: shadow, background: colors.white, padding: '22px 24px' }}>
						<div style={{ fontFamily: fonts.mono, color: colors.red, fontWeight: 900, fontSize: 15, letterSpacing: 1 }}>照这五行填，一行都不能空</div>
						<div style={{ marginTop: 16, fontFamily: fonts.mono, fontSize: 18.5, lineHeight: 2.05, fontWeight: 600 }}>
							<div>01 任务范围：___________________</div>
							<div>02 输入源：_____________________</div>
							<div>03 交付物：___ 格式 / ___ 字 / 必含 ___</div>
							<div style={{ background: '#FFE9E4' }}>04 停下来找人：__________________</div>
							<div>05 输出送到：___________________</div>
						</div>
					</motion.div>
					<motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.26 }} style={{ border, boxShadow: shadow, background: colors.dark, color: colors.white, padding: '22px 24px' }}>
						<div style={{ fontFamily: fonts.mono, color: colors.yellow, fontWeight: 900, fontSize: 15, letterSpacing: 1 }}>写完转给同桌，他只问这三句</div>
						<div style={{ marginTop: 16, display: 'grid', gap: 11 }}>
							{CHECKS.map((c, i) => (
								<div key={c} style={{ border: `2px solid ${colors.white}`, background: 'rgba(255,255,255,0.08)', padding: '12px 14px', fontSize: 18, lineHeight: 1.5, fontWeight: 650 }}>
									<span style={{ color: colors.yellow, fontFamily: fonts.mono, fontWeight: 900 }}>Q{i + 1} </span>{c}
								</div>
							))}
						</div>
					</motion.div>
				</div>
				<div style={{ marginTop: 14, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
					<div style={{ border, boxShadow: shadowSm, background: '#D9F2E4', padding: '13px 17px', fontSize: 18, fontWeight: 700 }}>写完的第一件事：<b>存进 agent 的 memory</b>，不是存进你的备忘录</div>
					<div style={{ border, boxShadow: shadowSm, background: '#FFF6D6', padding: '13px 17px', fontSize: 18, fontWeight: 700 }}>第二件事：让它<b>用自己的话复述一遍这份 JD</b>，复述错就改</div>
				</div>
				<Punchline bg={colors.dark}>
					一份 JD 好不好，只看一件事：<span style={{ color: colors.yellow }}>它不问你，能不能判断这次算做完了。</span>
				</Punchline>
			</Body>
		</Slide>
	);
}
