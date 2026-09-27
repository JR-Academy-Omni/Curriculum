import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow, shadowSm } from '../ui';
import { Body, SlideHead, Punchline } from '../DeckTable';

const CASES = [
	{
		no: '案例 ④',
		title: '周报：每周日晚上给自己一份交代',
		cron: '0 18 * * 0',
		cronHuman: '每周日 18:00',
		rows: [
			['输入源', '这周的代码提交、邮件往来、日历记录，加上 agent 自己的 memory'],
			['交付物', '三段：这周做完了什么 / 下周要做什么 / 现在最大的风险是什么'],
			['送到哪', '存进你的 Workspace，跟 SoT 放在一起，方便下周开课前翻'],
		],
		bg: '#DCEBFF',
	},
	{
		no: '案例 ⑤',
		title: 'git 日报：每天睡前把今天封存',
		cron: '0 22 * * *',
		cronHuman: '每天 22:00',
		rows: [
			['输入源', '当天的代码提交记录 + 当天关掉的任务'],
			['交付物', '一句话总结 + 三条清单：昨天做了 X / Y / Z'],
			['送到哪', '次日早上一封邮件，跟晨间那条排在一起看'],
		],
		bg: '#D9F2E4',
	},
];

export default function S16_CaseReports() {
	return (
		<Slide bg={colors.warmBg}>
			<Body style={{ padding: '38px 56px 32px' }}>
				<SlideHead
					tag="⑤ AGENT SCHEDULE · 案例 ④⑤"
					tagBg={colors.purple}
					titleSize="clamp(32px, 2.9vw, 44px)"
					title="剩下两条是给你自己看的"
					sub="前三条对外看市场，这两条对内看自己。一人公司最容易缺的就是这两条。"
				/>
				<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
					{CASES.map((c, index) => (
						<motion.div
							key={c.no}
							initial={{ opacity: 0, y: 18 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.32, delay: 0.12 + index * 0.12 }}
							style={{ border, boxShadow: shadow, background: c.bg, padding: '20px 22px' }}
						>
							<div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
								<div style={{ display: 'inline-block', border: '2px solid #000', background: colors.white, padding: '3px 11px', fontFamily: fonts.mono, fontSize: 14, fontWeight: 900 }}>{c.no}</div>
								<div style={{ fontFamily: fonts.mono, fontSize: 20, fontWeight: 900, background: colors.dark, color: colors.yellow, padding: '3px 12px' }}>{c.cron}</div>
								<div style={{ fontSize: 15, color: '#444', fontWeight: 700 }}>{c.cronHuman}</div>
							</div>
							<div style={{ marginTop: 13, fontFamily: fonts.heading, fontSize: 26, lineHeight: 1.2, fontWeight: 900 }}>{c.title}</div>
							<div style={{ marginTop: 14, display: 'grid', gap: 9 }}>
								{c.rows.map(([k, v]) => (
									<div key={k} style={{ display: 'grid', gridTemplateColumns: '86px 1fr', gap: 12, border: '2px solid #000', background: colors.white, padding: '10px 13px', boxShadow: shadowSm }}>
										<div style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 900 }}>{k}</div>
										<div style={{ fontSize: 17, lineHeight: 1.45, fontWeight: 600 }}>{v}</div>
									</div>
								))}
							</div>
						</motion.div>
					))}
				</div>
				<Punchline bg={colors.dark}>
					一人公司没有人问你这周干了什么。<span style={{ color: colors.yellow }}>这两条排程就是那个会问你的人。</span>
				</Punchline>
			</Body>
		</Slide>
	);
}
