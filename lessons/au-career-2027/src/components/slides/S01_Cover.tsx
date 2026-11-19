import { motion } from 'framer-motion';
import { Slide, Inner } from '../ui';
import { Label, colors, fonts } from '../kit';
import { PartnerMarks } from '../PartnerMarks';

const steps = [['看市场', '哪些岗位在招，雇主在要求什么'], ['选路径', '内转、同岗跳槽、转相邻岗位'], ['拆岗位', '四个 AI 相关方向，FDE 看业务与技术'], ['谈薪资', '拿已做成的事，争取更大的职责'], ['定下一步', '用一份真实 JD 验证自己的选择']];

export default function S01_Cover() {
	return <Slide bg={colors.warmBg} style={{ position: 'relative', backgroundImage: 'linear-gradient(rgba(16,22,47,.045) 1px,transparent 1px),linear-gradient(90deg,rgba(16,22,47,.045) 1px,transparent 1px)', backgroundSize: '48px 48px' }}>
		<div aria-hidden style={{ position: 'absolute', left: 0, top: 0, width: 18, height: '100%', background: colors.red }} />
		<Inner style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', alignItems: 'center', gap: 50, padding: '48px 30px', height: '88%' }}>
			<div>
				<Label bg={colors.dark} color={colors.yellow}>JR ACADEMY · 2026.11.19</Label>
				<motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .45 }} style={{ fontFamily: fonts.heading, fontSize: 100, fontWeight: 900, lineHeight: 1.08, letterSpacing: -5, margin: '28px 0 6px', color: colors.dark }}>
					2027<br /><span style={{ backgroundImage: `linear-gradient(transparent 72%,${colors.yellow} 72%,${colors.yellow} 96%,transparent 96%)` }}>澳洲职场</span>
				</motion.h1>
				<p style={{ fontSize: 30, lineHeight: 1.5, margin: '22px 0 0', color: colors.dark, fontWeight: 800 }}>怎么稳住收入、争取更高薪？</p>
				<div style={{ display: 'flex', gap: 26, marginTop: 30, paddingTop: 22, borderTop: `2px solid ${colors.dark}`, fontSize: 22, color: colors.dark, alignItems: 'center' }}>
					<span>Lightman Wang</span><span>匠人学院创始人</span>
				</div>
				<PartnerMarks height={75} />
			</div>
			<div style={{ display: 'grid', gap: 14 }} role="img" aria-label="看市场、选路径、拆岗位、谈薪资、定下一步">
				{steps.map(([t, d], i) => <motion.div key={t} initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: .25 + i * .12 }} style={{ display: 'grid', gridTemplateColumns: '64px 1fr', alignItems: 'center', gap: 16, background: i === 0 ? colors.dark : colors.white, color: i === 0 ? colors.white : colors.dark, border: `2px solid ${colors.dark}`, borderRadius: 20, padding: '16px 22px', boxShadow: `6px 6px 0 ${i === 0 ? colors.red : colors.dark}` }}>
					<span style={{ fontFamily: fonts.mono, fontSize: 24, fontWeight: 700, color: i === 0 ? colors.yellow : colors.red }}>{i + 1}</span>
					<div><div style={{ fontSize: 30, fontWeight: 900 }}>{t}</div><div style={{ fontSize: 19, marginTop: 2 }}>{d}</div></div>
				</motion.div>)}
			</div>
		</Inner>
	</Slide>;
}
