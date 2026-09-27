import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow } from '../ui';
import { Body, SlideHead } from '../DeckTable';

const cases = [
	{
		name: 'CANVA 前身 · FUSION BOOKS',
		problem: '老师一边上课，一边用难学的桌面软件制作校刊，往往要花数百小时。',
		action: '先把范围缩到澳洲学校校刊；第一位客户支付了 100 澳元订金。',
		color: '#FFE9E4',
	},
	{
		name: 'DOORDASH 前身 · PALOALTODELIVERY',
		problem: '他们还不知道课堂项目能不能成为公司，先看一单真实配送能不能创造价值。',
		action: '先用不到 10 美元买域名做课堂项目，创始人自己完成第一单配送。',
		color: '#DCEBFF',
	},
];

export default function S03b_ProblemFirstCases() {
	return (
		<Slide bg={colors.white}>
			<Body style={{ padding: '32px 56px 24px' }}>
				<SlideHead
					tag="两个真实起点"
					tagBg={colors.red}
					title="值得验证的起点通常很小，但问题非常具体"
					sub="他们没有先宣布要做一个大平台，而是先观察一个正在发生、有人愿意采取行动的问题。"
				/>

				<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 22 }}>
					{cases.map((item, index) => (
						<motion.div
							key={item.name}
							initial={{ opacity: 0, y: 18 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.35, delay: 0.1 + index * 0.12 }}
							style={{ border, boxShadow: shadow, background: item.color, padding: '20px 22px' }}
						>
							<div style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 800, color: colors.red }}>{item.name}</div>
							<div style={{ marginTop: 12, fontSize: 24, lineHeight: 1.35, fontWeight: 900 }}>{item.problem}</div>
							<div style={{ marginTop: 16, borderTop: '2px solid #111', paddingTop: 12, fontSize: 18, lineHeight: 1.45 }}>{item.action}</div>
						</motion.div>
					))}
				</div>

				<div style={{ marginTop: 20, display: 'grid', gridTemplateColumns: '1fr auto 1.55fr', gap: 14, alignItems: 'stretch' }}>
					<div style={{ border, padding: '14px 18px', background: '#F4F4F4', fontSize: 20, fontWeight: 800 }}>“我想做一个 AI 求职平台。”</div>
					<div style={{ alignSelf: 'center', fontFamily: fonts.mono, fontSize: 28 }}>→</div>
					<div style={{ border, padding: '14px 18px', background: colors.yellow, fontSize: 20, fontWeight: 850 }}>“澳洲留学生申请 Graduate Program 时，每个岗位都要重复改简历和 Selection Criteria。”</div>
				</div>

				<div style={{ marginTop: 12, fontSize: 11, color: '#666' }}>
					来源：Canva Newsroom，Melanie Perkins 创业回顾；DoorDash 2024 Q4 股东信。课堂仅概括创始人公开叙述。
				</div>
			</Body>
		</Slide>
	);
}
