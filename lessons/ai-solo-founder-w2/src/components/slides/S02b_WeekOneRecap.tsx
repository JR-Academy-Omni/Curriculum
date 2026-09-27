import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadowSm } from '../ui';
import { Body, SlideHead, Punchline } from '../DeckTable';

const LAYERS = [
	['01', 'Founder Workspace', '你的业务上下文、任务和证据保存在同一个地方', '#FFE9E4'],
	['02', 'Business SoT v0.1', '唯一当前版本：客户、问题、现有做法、边界、下一步', '#FFF6D6'],
	['03', 'Weekly Skill', '一种可重复的做事方法，不是一句临时提示词', '#DCEBFF'],
	['04', 'Human Review', '你检查、纠错、批准，并决定要不要改 SoT', '#D9F2E4'],
];

export default function S02b_WeekOneRecap() {
	return (
		<Slide bg={colors.white}>
			<Body>
				<SlideHead
					tag="上周你已经有的四层"
					tagBg={colors.blue}
					title="今天不重建业务真相，只往这四层里加一个会自己干活的角色"
					sub="第一件事：打开你的 Workspace，把 SoT 和这周拿到的证据摆到桌面上。"
				/>
				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14 }}>
					{LAYERS.map(([no, title, body, bg], index) => (
						<motion.div
							key={no}
							initial={{ opacity: 0, y: 18 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: index * 0.1 }}
							style={{ border, boxShadow: shadowSm, background: bg, padding: '20px 17px', minHeight: 214 }}
						>
							<div style={{ fontFamily: fonts.mono, color: colors.red, fontSize: 21, fontWeight: 900 }}>{no}</div>
							<div style={{ marginTop: 14, fontFamily: fonts.heading, fontSize: 25, lineHeight: 1.2, fontWeight: 900 }}>{title}</div>
							<div style={{ marginTop: 12, fontSize: 16.5, lineHeight: 1.5 }}>{body}</div>
						</motion.div>
					))}
				</div>
				<div style={{ marginTop: 16, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
					<div style={{ border, boxShadow: shadowSm, background: colors.warmBg, padding: '16px 18px' }}>
						<div style={{ fontFamily: fonts.mono, fontWeight: 900, color: colors.red, fontSize: 15 }}>上周布置的 Sprint</div>
						<div style={{ marginTop: 9, fontSize: 18, lineHeight: 1.5, fontWeight: 600 }}>5 位目标用户 · 3 个真实案例 · 3 种现有替代 · 一条付费证据</div>
					</div>
					<div style={{ border, boxShadow: shadowSm, background: '#FFF6D6', padding: '16px 18px' }}>
						<div style={{ fontFamily: fonts.mono, fontWeight: 900, color: colors.red, fontSize: 15 }}>开场先说卡点</div>
						<div style={{ marginTop: 9, fontSize: 18, lineHeight: 1.5, fontWeight: 600 }}>哪一条没跑通、卡在哪一步——不用补作业式汇报，说清卡点就行</div>
					</div>
				</div>
				<Punchline bg={colors.dark}>
					没做完不影响今天上课。<span style={{ color: colors.yellow }}>但 SoT 必须打开着——今天所有配置都要读它。</span>
				</Punchline>
			</Body>
		</Slide>
	);
}
