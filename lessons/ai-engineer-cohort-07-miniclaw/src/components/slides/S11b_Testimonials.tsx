import { DeckFrame, AnimatedGroup, Label, colors, fonts } from '../deck';
import { assetPath } from '../ui';

const asset = (name: string) => assetPath(`proof/alumni/${name}`);

const supportingProof = [
	{
		label: 'AI ENGINEER · FULL-TIME',
		image: '02-ai-engineer-software.jpg',
		alt: '已脱敏的 AI Engineer Software 全职 Offer 截图',
		color: colors.blue,
		position: 'center 58%',
	},
	{
		label: 'P3 项目 · 入职反馈',
		image: '05-meta-town-ai-slack-onboard.jpg',
		alt: '官网公开的项目协作与学员入职反馈截图',
		color: colors.red,
		position: 'center 79%',
	},
] as const;

export default function S11b_Testimonials() {
	return <DeckFrame
		tag="学员结果 · 官网公开原图"
		title="不念宣传文案，直接看截图"
		subtitle="左边是第 4 期学员拿到 EY 与 Macquarie 两个 AI 岗位后发来的微信；右边是同一官网证据墙公开的脱敏 Offer 与入职记录。"
		accent={colors.red}
		titleSize={48}
	>
		<div style={{ height: '100%', display: 'grid', gridTemplateColumns: '1.03fr 1fr', gap: 28, minHeight: 0 }}>
			<AnimatedGroup delay={.08} style={{ display: 'flex', minHeight: 0 }}>
				<div style={{ flex: 1, minHeight: 0, background: '#f2f2f2', border: `2px solid ${colors.dark}`, borderRadius: 22, boxShadow: `10px 10px 0 ${colors.yellow}`, padding: 10, position: 'relative', overflow: 'hidden' }}>
					<img
						src={asset('04-ey-vs-macquarie-2offers-chat.jpg')}
						alt="第 4 期学员同时拿到 EY 与 Macquarie 两个 AI 岗位 Offer 的脱敏微信截图"
						style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: 14, display: 'block' }}
					/>
					<div style={{ position: 'absolute', left: 24, top: 24 }}><Label bg={colors.yellow} color={colors.dark}>微信原图 · 双 AI Offer</Label></div>
				</div>
			</AnimatedGroup>

			<AnimatedGroup delay={.18} style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 18, minHeight: 0 }}>
				{supportingProof.map((item) => <div key={item.image} style={{ minWidth: 0, minHeight: 0, display: 'flex', flexDirection: 'column', background: colors.white, border: `2px solid ${colors.dark}`, borderRadius: 20, overflow: 'hidden', boxShadow: `7px 7px 0 ${item.color}` }}>
					<div style={{ padding: '11px 10px', minHeight: 62, display: 'flex', alignItems: 'center', background: item.color, color: item.color === colors.red ? colors.white : colors.dark, fontFamily: fonts.mono, fontSize: 12, lineHeight: 1.25, fontWeight: 900 }}>{item.label}</div>
					<div style={{ flex: 1, minHeight: 0, background: '#f5f5f3', overflow: 'hidden' }}>
						<img src={asset(item.image)} alt={item.alt} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: item.position, display: 'block' }} />
					</div>
				</div>)}
			</AnimatedGroup>
		</div>
		<div style={{ position: 'absolute', left: 100, bottom: 17, fontFamily: fonts.mono, fontSize: 11.5, fontWeight: 700, color: '#655f5a' }}>姓名、联系方式及敏感字段已脱敏 · 原图已用于 JR Academy 官网公开销售页 · 个人结果不构成就业或薪资承诺</div>
	</DeckFrame>;
}
