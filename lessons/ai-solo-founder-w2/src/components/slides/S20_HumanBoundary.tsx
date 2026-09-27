import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow, shadowSm } from '../ui';
import { Body, SlideHead, Punchline } from '../DeckTable';

const AUTO = ['查公开资料', '整理和归类', '起草文字', '做对照和汇总', '按格式生成报告', '提醒你该跟进谁'];
const HUMAN = ['联系客户', '报价与承诺', '签合同', '收付款', '对外发布', '法律 / 税务 / 持牌判断'];

export default function S20_HumanBoundary() {
	return (
		<Slide bg={colors.white}>
			<Body>
				<SlideHead
					tag="⑥ 责任边界 · 这条上周立过，这周更重要"
					tagBg={colors.red}
					title="它排了班，不等于它替你担责"
					sub="上周它只是回答你，你随时能纠正；这周它开始自己动，边界必须写死在 JD 里。"
				/>
				<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
					<motion.div initial={{ opacity: 0, x: -18 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.12 }} style={{ border, boxShadow: shadow, background: '#D9F2E4', padding: '22px 22px' }}>
						<div style={{ display: 'inline-block', background: colors.green, color: colors.black, border, padding: '4px 14px', fontFamily: fonts.mono, fontWeight: 900, fontSize: 15 }}>可以自动做完</div>
						<div style={{ marginTop: 18, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
							{AUTO.map((a) => (
								<div key={a} style={{ border: '2px solid #000', background: colors.white, padding: '12px 13px', fontSize: 18, fontWeight: 700, boxShadow: shadowSm }}>{a}</div>
							))}
						</div>
					</motion.div>
					<motion.div initial={{ opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.26 }} style={{ border, boxShadow: shadow, background: '#FFE9E4', padding: '22px 22px' }}>
						<div style={{ display: 'inline-block', background: colors.red, color: colors.white, border, padding: '4px 14px', fontFamily: fonts.mono, fontWeight: 900, fontSize: 15 }}>必须你按下确认</div>
						<div style={{ marginTop: 18, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
							{HUMAN.map((h) => (
								<div key={h} style={{ border: '2px solid #000', background: colors.white, padding: '12px 13px', fontSize: 18, fontWeight: 700, boxShadow: shadowSm }}>{h}</div>
							))}
						</div>
					</motion.div>
				</div>
				<div style={{ marginTop: 14, border, boxShadow: shadowSm, background: '#f2f2f2', padding: '12px 18px', fontSize: 17, lineHeight: 1.5 }}>
					涉及合同、公司结构、税务和持牌事项的判断，<b>去找澳洲执业律师、会计师或相应持牌人士</b>。这门课教你怎么把材料准备好去问，不替代专业意见。
				</div>
				<Punchline bg={colors.dark}>
					出事的时候，<span style={{ color: colors.yellow }}>没有人会去追究一个 agent。</span>
				</Punchline>
			</Body>
		</Slide>
	);
}
