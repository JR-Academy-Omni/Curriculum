import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadowSm } from '../ui';
import { Body, SlideHead } from '../DeckTable';

const QUESTIONS = [
	{
		no: '1',
		case: '移民中介服务',
		text: '访谈后发现，真正愿意付费的是 5–20 人事务所，不是所有申请人。要不要更新 SoT？',
		options: 'A 要　B 不要',
		bg: '#FFE9E4',
	},
	{
		no: '2',
		case: '餐饮店',
		text: 'AI 生成了一条新的小红书文案，但客户、问题和套餐都没变。要不要更新 SoT？',
		options: 'A 要　B 不要',
		bg: '#FFF6D6',
	},
	{
		no: '3',
		case: '软件产品',
		text: '创始人早上想到一个新功能，还没问过任何客户。它现在应该放在哪里？',
		options: 'A 直接写进 SoT　B 记为待验证想法　C 马上开发',
		bg: '#DCEBFF',
	},
	{
		no: '4',
		case: '会计服务',
		text: '客户明确拒绝 AI 自动发送邮件，只接受员工检查后发送。SoT 哪一部分必须更新？',
		options: 'A 客户名称　B 初步方案里的人工检查要求　C 收费方式',
		bg: '#D9F2E4',
	},
];

export default function S11d_SoTQuiz() {
	return (
		<Slide bg={colors.white}>
			<Body style={{ padding: '32px 56px 28px' }}>
				<SlideHead
					tag="现场测试 · 先别翻下一页"
					tagBg={colors.yellow}
					title="下面四种情况，哪些应该改 SoT？"
					titleSize="clamp(32px, 2.85vw, 44px)"
					sub="先自己选答案，再和旁边同学说一句理由。只报答案不算。"
				/>

				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 15 }}>
					{QUESTIONS.map((q, index) => (
						<motion.div
							key={q.no}
							initial={{ opacity: 0, y: 16 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.32, delay: 0.1 + index * 0.1 }}
							style={{ border, boxShadow: shadowSm, background: q.bg, padding: '16px 19px', minHeight: 175 }}
						>
							<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10 }}>
								<span style={{ fontFamily: fonts.mono, fontSize: 15, fontWeight: 900 }}>Q{q.no}</span>
								<span style={{ border: '2px solid #000', background: colors.white, padding: '2px 8px', fontSize: 14, fontWeight: 800 }}>{q.case}</span>
							</div>
							<div style={{ marginTop: 10, fontFamily: fonts.heading, fontSize: 20, lineHeight: 1.35, fontWeight: 850 }}>{q.text}</div>
							<div style={{ marginTop: 10, fontSize: 16, lineHeight: 1.35, fontWeight: 800, color: '#333' }}>{q.options}</div>
						</motion.div>
					))}
				</div>

				<div style={{ marginTop: 14, border, background: colors.dark, color: colors.white, padding: '11px 18px', fontSize: 19, fontWeight: 800, textAlign: 'center' }}>
					判断标准只有一个：<span style={{ color: colors.yellow }}>新证据有没有改变客户、问题、交付、边界或验证标准？</span>
				</div>
			</Body>
		</Slide>
	);
}
