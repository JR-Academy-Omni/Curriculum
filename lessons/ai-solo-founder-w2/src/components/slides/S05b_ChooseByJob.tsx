import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadowSm } from '../ui';
import { Body, SlideHead, Punchline } from '../DeckTable';

const JOBS = [
	['我经常不在电脑前，想在手机上派活', 'Hermes', '常驻 + 跨设备记忆', '#DCEBFF'],
	['我的资料不能离开本机', '龙虾（OpenClaw）', '本地 memory + 模型可换', '#D9F2E4'],
	['我要它写脚本、改数据、跑小工具', 'Codex', '与既有 ChatGPT 订阅打通', '#FFF6D6'],
	['我要它连续改我那个真实项目', 'Claude Code', 'agentic 连续作业能力最强', '#FFE9E4'],
];

export default function S05b_ChooseByJob() {
	return (
		<Slide bg={colors.white}>
			<Body>
				<SlideHead
					tag="① 选型 · 怎么落到自己身上"
					tagBg={colors.red}
					title="先说这句话，再选工具"
					sub={<span style={{ fontWeight: 700 }}>「我要它每周替我做完 ______，做完之后结果送到 ______。」</span>}
				/>
				<div style={{ display: 'grid', gap: 12 }}>
					{JOBS.map(([job, route, why, bg], index) => (
						<motion.div
							key={route}
							initial={{ opacity: 0, x: -18 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.32, delay: 0.12 + index * 0.09 }}
							style={{ display: 'grid', gridTemplateColumns: '1.5fr 60px 1fr 1.1fr', alignItems: 'center', gap: 14, border, boxShadow: shadowSm, background: bg, padding: '15px 18px' }}
						>
							<div style={{ fontSize: 21, fontWeight: 700, lineHeight: 1.35 }}>{job}</div>
							<div style={{ fontFamily: fonts.mono, fontSize: 26, fontWeight: 900, color: colors.red, textAlign: 'center' }}>→</div>
							<div style={{ fontFamily: fonts.heading, fontSize: 25, fontWeight: 900 }}>{route}</div>
							<div style={{ fontSize: 16, lineHeight: 1.45, color: '#333' }}>{why}</div>
						</motion.div>
					))}
				</div>
				<Punchline bg={colors.dark}>
					填不出前半句的人，先别装。<span style={{ color: colors.yellow }}>没有活的 agent，装完就会变成第二个没人用的收藏夹。</span>
				</Punchline>
			</Body>
		</Slide>
	);
}
