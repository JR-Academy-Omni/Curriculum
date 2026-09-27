import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow } from '../ui';
import { Body, SlideHead, Punchline } from '../DeckTable';

const industries = ['教育', '招工', '留学', '房地产', '装修', '会计', '电商', '餐饮', '医疗行政', '活动运营'];
const personal = ['同一件事重复做很多次', '经常为一件事抱怨', '花钱请别人完成', '用多个工具拼起来完成', '明知低效，却不得不继续做'];

export default function S03d_IndustryAndPersonal() {
	return (
		<Slide bg={colors.white}>
			<Body>
				<SlideHead
					tag="入口 1 + 2"
					tagBg={colors.red}
					title="你熟悉什么？什么总在烦你？"
					sub="先从你亲眼见过、亲手做过的流程开始，不用追“最赚钱的行业”。"
				/>

				<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 22 }}>
					<div style={{ border, boxShadow: shadow, background: '#FFE8E1', padding: '20px 22px' }}>
						<div style={{ fontFamily: fonts.mono, fontSize: 15, fontWeight: 800, color: colors.red }}>你熟悉的行业</div>
						<div style={{ marginTop: 14, display: 'flex', flexWrap: 'wrap', gap: 9 }}>
							{industries.map((item, index) => (
								<motion.span key={item} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.04 * index }} style={{ border: '2px solid #111', background: colors.white, padding: '7px 12px', fontSize: 18, fontWeight: 800 }}>{item}</motion.span>
							))}
						</div>
						<div style={{ marginTop: 20, borderTop: '3px solid #111', paddingTop: 14, fontSize: 23, lineHeight: 1.35, fontWeight: 900 }}>哪个行业的问题，你比普通人更容易接触到？</div>
					</div>

					<div style={{ border, boxShadow: shadow, background: '#FFF2B8', padding: '20px 22px' }}>
						<div style={{ fontFamily: fonts.mono, fontSize: 15, fontWeight: 800, color: colors.red }}>过去三个月，你有没有……</div>
						<div style={{ marginTop: 12, display: 'grid', gap: 10 }}>
							{personal.map((item, index) => (
								<motion.div key={item} initial={{ opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.08 * index }} style={{ display: 'grid', gridTemplateColumns: '30px 1fr', alignItems: 'center', fontSize: 20, fontWeight: 800 }}>
									<span style={{ fontFamily: fonts.mono, color: colors.red }}>✓</span><span>{item}</span>
								</motion.div>
							))}
						</div>
					</div>
				</div>

				<Punchline bg={colors.dark}>先写你亲眼见过的，不写“听说这个市场很大”。</Punchline>
			</Body>
		</Slide>
	);
}
