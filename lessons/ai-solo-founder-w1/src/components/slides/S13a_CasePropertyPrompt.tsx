import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow } from '../ui';
import { Body, SlideHead } from '../DeckTable';

const KNOWN = [
	['客户', '管理 100–500 套住宅、没有专职维修协调团队的独立物业经理'],
	['现状', '租客从邮件和短信报修；经理追问、建表、找技工、催报价（代价尚未核实）'],
];

const QUESTIONS = [
	'把问题写成“当…时，很难…，导致…”',
	'现有做法具体哪里不好？',
	'初步方案怎样用一句话说清？',
	'本周怎样完成 5 / 3 / 3 / 付费验证？',
];

export default function S13a_CasePropertyPrompt() {
	return (
		<Slide bg={colors.white}>
			<Body>
				<SlideHead
					tag="Opportunity Card · 案例 B 先别看答案"
					tagBg={colors.blue}
					title="现在换你：把物业维修的模糊想法写成机会卡"
					titleSize="clamp(28px, 2.55vw, 39px)"
					sub="给你客户和现状。先补问题、方案缺口、初步方案和本周验证动作，再看下一页。"
				/>

				<div style={{ display: 'grid', gridTemplateColumns: '1fr 1.45fr', gap: 22 }}>
					<div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
						{KNOWN.map(([label, body], index) => (
							<motion.div key={label} initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 + index * 0.1 }} style={{ border, boxShadow: shadow, background: index ? '#FFF6D6' : '#DCEBFF', padding: '20px' }}>
								<div style={{ fontFamily: fonts.mono, color: colors.blue, fontWeight: 700 }}>{label}</div>
								<div style={{ marginTop: 8, fontSize: 22, fontWeight: 800, lineHeight: 1.45 }}>{body}</div>
							</motion.div>
						))}
					</div>
					<div style={{ border, boxShadow: shadow, background: colors.dark, color: colors.white, padding: '22px 24px' }}>
						<div style={{ fontFamily: fonts.mono, color: colors.yellow, fontWeight: 700, marginBottom: 14 }}>小组必须回答</div>
						{QUESTIONS.map((q, index) => (
							<motion.div key={q} initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.25 + index * 0.1 }} style={{ display: 'flex', gap: 14, alignItems: 'baseline', marginBottom: 16 }}>
								<span style={{ fontFamily: fonts.mono, color: colors.red, fontSize: 24, fontWeight: 700 }}>0{index + 1}</span>
								<span style={{ fontSize: 22, fontWeight: 800 }}>{q}</span>
							</motion.div>
						))}
					</div>
				</div>
			</Body>
		</Slide>
	);
}
