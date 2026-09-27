import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow, shadowSm } from '../ui';
import { Body, SlideHead } from '../DeckTable';

const CONDITIONS = [
	['01', '买相似的东西', '需求和替代方案足够接近'],
	['02', '用相似方式购买', '销售周期和价值判断相近'],
	['03', '彼此会交流', '经验与口碑能在这群人中传播'],
];

export default function S03a_WorthSolving() {
	return (
		<Slide bg={colors.white}>
			<Body style={{ padding: '31px 56px 23px' }}>
				<SlideHead
					tag="BEACHHEAD MARKET · 首个切入市场"
					tagBg={colors.red}
					title="不是先服务所有人，先拿下一群相似的第一批客户"
					titleSize="clamp(30px, 2.75vw, 43px)"
					sub="Beachhead Market 不是一个人，而是一个足够窄、这周就能接触和验证的初始市场。"
				/>

				<div style={{ display: 'grid', gridTemplateColumns: '0.88fr 1.12fr', gap: 22, alignItems: 'stretch' }}>
					<motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.42 }} style={{ border, boxShadow: shadow, background: colors.dark, color: colors.white, padding: '20px 22px' }}>
						<div style={{ fontFamily: fonts.mono, fontSize: 13, color: colors.yellow, fontWeight: 900, letterSpacing: 1.5 }}>从“大市场”继续往下切</div>
						<div style={{ marginTop: 16, paddingBottom: 14, borderBottom: '2px solid rgba(255,255,255,0.28)' }}>
							<div style={{ fontSize: 15, color: '#cfd3e6', fontWeight: 750 }}>太宽</div>
							<div style={{ marginTop: 3, fontSize: 28, fontWeight: 950, textDecoration: 'line-through', textDecorationColor: colors.red }}>澳洲中小企业</div>
						</div>
						<div style={{ marginTop: 15 }}>
							<div style={{ fontSize: 15, color: colors.yellow, fontWeight: 800 }}>Beachhead Market</div>
							<div style={{ marginTop: 5, fontSize: 27, lineHeight: 1.25, fontWeight: 950 }}>墨尔本 1–5 人装修公司的老板</div>
							<div style={{ marginTop: 10, fontSize: 16, lineHeight: 1.45, color: '#e6e8ef', fontWeight: 650 }}>他们亲自接客户电话、做报价和排工人；你这周能找到 5 人，问最近一次漏跟进。</div>
						</div>
					</motion.div>

					<div style={{ display: 'grid', gap: 12 }}>
						<div style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 900, letterSpacing: 1.2 }}>一个合格的 Beachhead Market，有三个共同点</div>
						{CONDITIONS.map(([n, title, body], index) => (
							<motion.div key={n} initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.38, delay: 0.12 + index * 0.11 }} style={{ border, boxShadow: shadowSm, background: ['#FFE6DF', '#FFF2B8', '#DFF3E7'][index], padding: '13px 16px', display: 'grid', gridTemplateColumns: '52px 0.8fr 1fr', gap: 14, alignItems: 'center' }}>
								<div style={{ fontFamily: fonts.mono, fontSize: 19, fontWeight: 950, color: colors.red }}>{n}</div>
								<div style={{ fontSize: 21, fontWeight: 950 }}>{title}</div>
								<div style={{ borderLeft: '2px solid #111', paddingLeft: 14, fontSize: 15.5, lineHeight: 1.4, fontWeight: 700 }}>{body}</div>
							</motion.div>
						))}
					</div>
				</div>

				<div style={{ marginTop: 15, border, boxShadow: shadowSm, background: colors.red, color: colors.white, padding: '11px 18px', display: 'grid', gridTemplateColumns: '1fr auto', gap: 20, alignItems: 'center' }}>
					<div style={{ fontSize: 18.5, lineHeight: 1.35, fontWeight: 900 }}>W1 的选择标准：这周找得到、问题够相似、能从第一批客户学到可复制的东西。</div>
					<div style={{ fontFamily: fonts.mono, fontSize: 11.5, fontWeight: 800 }}>来源：MIT Sloan · Bill Aulet<br />Disciplined Entrepreneurship</div>
				</div>
			</Body>
		</Slide>
	);
}
