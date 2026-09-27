import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadowSm } from '../ui';
import { Body, SlideHead, Punchline } from '../DeckTable';

const WEEKS = ['W2 AI 助手', 'W3 客户验证', 'W4 最小交付', 'W5 品牌页面', 'W7 销售', 'W8–W11 获客', 'W12–W13 经营', 'W14–W15 展示'];

export default function S19b_AIOSSchematic() {
	return (
		<Slide bg={colors.warmBg}>
			<Body>
				<SlideHead tag="为什么 W1 要先搭 OS" tagBg={colors.blue} title="以后每一周，都从同一个 Founder Workspace 继续" sub="课程不会每周重新开一个聊天窗口。新 Skill 读取当前 SoT，再把新证据写回来。" />
				<div style={{ display: 'grid', gridTemplateColumns: '0.82fr 1.7fr', gap: 22 }}>
					<div style={{ border, background: colors.dark, color: colors.white, padding: '24px 22px', textAlign: 'center', display: 'grid', placeItems: 'center' }}><div><div style={{ fontFamily: fonts.mono, color: colors.yellow, fontWeight: 900 }}>FOUNDER WORKSPACE</div><div style={{ marginTop: 18, fontFamily: fonts.heading, fontSize: 36, fontWeight: 950 }}>当前 SoT</div><div style={{ marginTop: 10, fontSize: 18, lineHeight: 1.5 }}>一个版本<br />一套边界<br />一份证据记录</div></div></div>
					<div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
						{WEEKS.map((week, index) => <motion.div key={week} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.07 }} style={{ border, boxShadow: shadowSm, background: [colors.white, '#FFF6D6', '#DCEBFF', '#D9F2E4'][index % 4], padding: '18px 14px', minHeight: 120, display: 'grid', placeItems: 'center', textAlign: 'center', fontFamily: fonts.heading, fontSize: 19, fontWeight: 900 }}>{week}</motion.div>)}
					</div>
				</div>
				<Punchline>工具可以换，Skill 会增加；<u>项目的当前真相和证据链不能丢。</u></Punchline>
			</Body>
		</Slide>
	);
}
