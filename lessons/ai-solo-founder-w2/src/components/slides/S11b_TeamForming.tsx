import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow, shadowSm } from '../ui';
import { Body, SlideHead, Punchline } from '../DeckTable';

export default function S11b_TeamForming() {
	return (
		<Slide bg={colors.warmBg}>
			<Body>
				<SlideHead
					tag="组队 · 贯穿后面 13 周"
					tagBg={colors.green}
					title="60 秒亮牌：我是谁 / 我能给什么 / 我要什么"
					sub="3–4 人一组，尽量混编——方向已经清楚的、资源和手艺强的、还在决定要不要下场的，各来一个。"
				/>
				<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
					<motion.div initial={{ opacity: 0, x: -18 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.12 }} style={{ border, boxShadow: shadow, background: '#FFE9E4', padding: '22px 22px' }}>
						<div style={{ display: 'inline-block', background: colors.red, color: colors.white, border, padding: '4px 14px', fontFamily: fonts.mono, fontWeight: 900, fontSize: 15 }}>这样写没人找得到你</div>
						<div style={{ marginTop: 18, display: 'grid', gap: 10 }}>
							{['我会做 marketing', '我懂技术', '我想找个靠谱的搭子'].map((t) => (
								<div key={t} style={{ border: '2px solid #000', background: colors.white, padding: '13px 15px', fontSize: 21, fontWeight: 700, textDecoration: 'line-through', color: '#777', boxShadow: shadowSm }}>{t}</div>
							))}
						</div>
					</motion.div>
					<motion.div initial={{ opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.26 }} style={{ border, boxShadow: shadow, background: '#D9F2E4', padding: '22px 22px' }}>
						<div style={{ display: 'inline-block', background: colors.green, color: colors.black, border, padding: '4px 14px', fontFamily: fonts.mono, fontWeight: 900, fontSize: 15 }}>这样写才会被搜到</div>
						<div style={{ marginTop: 18, display: 'grid', gap: 10 }}>
							{['我能两周内帮你搭起小红书内容机器', '我能帮你把报价流程做成一个能用的小工具', '我在这个行业待了六年，能帮你约到真实用户'].map((t) => (
								<div key={t} style={{ border: '2px solid #000', background: colors.white, padding: '13px 15px', fontSize: 19, fontWeight: 750, lineHeight: 1.4, boxShadow: shadowSm }}>{t}</div>
							))}
						</div>
					</motion.div>
				</div>
				<Punchline bg={colors.dark}>
					差别只有一条：<span style={{ color: colors.yellow }}>右边写的是别人可以直接来找你要的东西，左边写的是你的简历。</span>
				</Punchline>
			</Body>
		</Slide>
	);
}
