import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow, shadowSm } from '../ui';
import { Body, SlideHead, Punchline } from '../DeckTable';

const AUDIT = [
	'它替你起草或发出的每一封邮件',
	'它写进云盘、仓库或知识库的每一次改动',
	'它代替你在网页上点击提交的每一次动作',
	'它调用外部接口花掉的每一笔钱',
];

export default function S07b_AuditAndSensitive() {
	return (
		<Slide bg={colors.white}>
			<Body>
				<SlideHead
					tag="② 接权限 · 两件必须当场决定的事"
					tagBg={colors.blue}
					title="哪些动作要留痕，哪些资料根本不该出本机"
					sub="这两条不是合规话术。出事的时候，它们决定你能不能说清楚发生了什么。"
				/>
				<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
					<motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12 }} style={{ border, boxShadow: shadow, background: '#FFF6D6', padding: '24px 24px' }}>
						<div style={{ fontFamily: fonts.mono, color: colors.red, fontWeight: 900, fontSize: 15, letterSpacing: 1 }}>一旦给了，就必须有审计日志</div>
						<ul style={{ marginTop: 16, listStyle: 'none', fontSize: 19.5, lineHeight: 1.75, fontWeight: 600 }}>
							{AUDIT.map((a) => (
								<li key={a} style={{ marginBottom: 6 }}><span style={{ color: colors.red, fontWeight: 900 }}>→ </span>{a}</li>
							))}
						</ul>
						<div style={{ marginTop: 14, borderTop: '2px solid #000', paddingTop: 12, fontSize: 17, lineHeight: 1.5 }}>
							日志要能回答三个问题：<b>什么时候跑的、读了什么、改了什么。</b>
						</div>
					</motion.div>
					<motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.24 }} style={{ border, boxShadow: shadow, background: '#DCEBFF', padding: '24px 24px' }}>
						<div style={{ fontFamily: fonts.mono, color: colors.red, fontWeight: 900, fontSize: 15, letterSpacing: 1 }}>敏感行业走本地路径</div>
						<div style={{ marginTop: 16, fontSize: 20, lineHeight: 1.65, fontWeight: 650 }}>
							律师、会计、医疗，以及任何手上有客户身份资料的人：选本地 memory 的路线，把客户资料留在本机，只把<b>脱敏后的业务上下文</b>交给 agent。
						</div>
						<div style={{ marginTop: 16, border: '2px solid #000', background: colors.white, padding: '12px 14px', fontSize: 16.5, lineHeight: 1.5 }}>
							你所在行业对客户资料有没有额外的存放与跨境要求，<b>去问你的行业主管机构或执业顾问</b>。这一页是提醒你去问，不是法律意见。
						</div>
					</motion.div>
				</div>
				<Punchline bg={colors.dark}>
					授权范围写在 JD 里，<span style={{ color: colors.yellow }}>不要只存在你今天的记忆里</span>——下个月你不会记得当时给了什么。
				</Punchline>
			</Body>
		</Slide>
	);
}
