import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadowSm } from '../ui';
import { Body, SlideHead, Punchline } from '../DeckTable';

const COLUMNS = [
	{
		label: '01 · 钱从哪里来',
		title: '先选资金路径，不是默认找 VC',
		bg: '#E3F3FF',
		items: [
			['客户收入 / 自筹', '不出让股权；用现金流换时间'],
			['Grant / 非稀释资金', '有条件与申请成本，但通常不交换股权'],
			['Angel / Syndicate / Accelerator', '不同阶段、网络与支持方式'],
			['SAFE / Convertible / Priced Equity', '股权何时确定、条款与稀释方式不同'],
		],
	},
	{
		label: '02 · 投资人要看什么',
		title: '把“我有想法”变成可核查材料',
		bg: '#FFF1C7',
		items: [
			['Traction evidence', '收入、复购、留存、获客与真实客户证据'],
			['Pitch + one-pager', '同一组事实，不同阅读场景'],
			['Minimum data room', '公司、财务、产品、客户、合同五类资料'],
			['Investor update', '每月数字、进展、问题、下一步和具体 ask'],
		],
	},
	{
		label: '03 · 公司准备好了吗',
		title: '融资前先把所有权和责任说清楚',
		bg: '#EDE9FE',
		items: [
			['Entity', 'Sole trader / Pty Ltd：为什么选、何时复查'],
			['Ownership', '创始人、股东、cap table 与决策权限'],
			['IP + contracts', '代码、品牌、客户合同和贡献归属'],
			['Governance + tax', '董事责任、记录、ASIC / 税务与顾问清单'],
		],
	},
];

export default function S04f_FounderClubFunding() {
	return (
		<Slide bg="#FFF9F4">
			<Body style={{ padding: '34px 56px 28px' }}>
				<SlideHead
					tag="PHASE 4 · FOUNDER CLUB · W14–W15+"
					tagBg={colors.purple}
					title="准备见投资人之前，先回答三组问题"
					titleSize="clamp(31px, 2.7vw, 43px)"
					sub="这部分不是教所有人融资，而是让你比较资金形式、准备证据，并判断企业架构能不能承接下一步。"
				/>

				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
					{COLUMNS.map((column, index) => (
						<motion.section
							key={column.label}
							initial={{ opacity: 0, y: 16 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.08 + index * 0.1 }}
							style={{ border, boxShadow: shadowSm, background: column.bg, padding: '16px 17px', minHeight: 390 }}
						>
							<div style={{ fontFamily: fonts.mono, fontSize: 12.5, fontWeight: 900, letterSpacing: 1, color: index === 0 ? '#2268A5' : index === 1 ? '#A86400' : '#7442B5' }}>
								{column.label}
							</div>
							<h3 style={{ marginTop: 7, fontFamily: fonts.heading, fontSize: 22, fontWeight: 900, lineHeight: 1.18 }}>{column.title}</h3>
							<div style={{ marginTop: 12, display: 'flex', flexDirection: 'column', gap: 9 }}>
								{column.items.map(([name, desc]) => (
									<div key={name} style={{ border: '2px solid #000', background: colors.white, padding: '9px 10px' }}>
										<div style={{ fontFamily: fonts.heading, fontSize: 16.5, fontWeight: 900, lineHeight: 1.2 }}>{name}</div>
										<div style={{ marginTop: 4, fontSize: 13.5, lineHeight: 1.35, color: '#353535', fontWeight: 600 }}>{desc}</div>
									</div>
								))}
							</div>
						</motion.section>
					))}
				</div>

				<Punchline bg={colors.dark}>
					<div style={{ display: 'flex', justifyContent: 'space-between', gap: 24, alignItems: 'center' }}>
						<span>W14 的结果：<span style={{ color: colors.yellow }}>选一条资金路径，列出材料与架构缺口，决定 Business 还是 VC。</span></span>
						<span style={{ maxWidth: 520, fontSize: 15.5, textAlign: 'right', color: '#DDE3F2' }}>
							这是决策教育，不是法律、税务、投资或公司结构建议；具体选择请咨询澳洲律师、会计师及相应持牌专业人士。
						</span>
					</div>
				</Punchline>
			</Body>
		</Slide>
	);
}
