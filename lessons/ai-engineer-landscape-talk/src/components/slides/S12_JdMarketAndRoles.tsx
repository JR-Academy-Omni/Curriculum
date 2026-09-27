import { motion } from 'framer-motion';
import { Slide, Title, slideFromLeft, slideFromRight, springIn, colors, fonts, border, shadow, shadowSm } from '../ui';
import { NOW_LABEL } from '../../data/auAiTimeline';
import { MARKET_TRAITS, ROLE_FOCUS, JD_SOURCE_LINE } from '../../data/auJdSkills';

function RoleCard({ name, sub, items, bg }: { name: string; sub: string; items: string[]; bg: string }) {
	return (
		<div style={{ height: '100%', background: bg, border, boxShadow: shadow, padding: '22px 26px', display: 'flex', flexDirection: 'column' }}>
			<div style={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 700, letterSpacing: 1 }}>{sub}</div>
			<div style={{ fontFamily: fonts.heading, fontSize: 32, fontWeight: 900, margin: '4px 0 16px' }}>{name}</div>
			{items.map((t) => (
				<div key={t} style={{ flex: 1, display: 'flex', alignItems: 'center', fontSize: 28, fontWeight: 900, padding: '0 18px', marginBottom: 10, background: colors.white, border: `2px solid ${colors.black}` }}>{t}</div>
			))}
		</div>
	);
}

// 两类岗位的区别 + 共同核心五项 + 澳洲市场特点 —— JD 章节的收束页
export default function S12_JdMarketAndRoles() {
	return (
		<Slide bg={colors.warmBg}>
			<div style={{ width: '100%', height: '100%', padding: '34px 64px 54px', display: 'flex', flexDirection: 'column', gap: 16 }}>
				<motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}
					style={{ display: 'flex', alignItems: 'center', gap: 14, height: 50 }}>
					<span style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 700, padding: '4px 10px', background: colors.yellow, border: `2px solid ${colors.black}`, whiteSpace: 'nowrap' }}>{NOW_LABEL}</span>
					<Title size="36px">两条路，同一套核心</Title>
				</motion.div>

				<div style={{ flex: 1, minHeight: 0, display: 'grid', gridTemplateColumns: '1fr 1.25fr 1fr', gap: 22 }}>
					<motion.div {...slideFromLeft} style={{ minHeight: 0 }}>
						<RoleCard name="AI Engineer" sub="更看重" items={ROLE_FOCUS.aiEngineer} bg={colors.blue} />
					</motion.div>

					<motion.div {...springIn} transition={{ ...springIn.transition, delay: 0.35 }}
						style={{ background: colors.dark, color: colors.white, border, boxShadow: shadow, padding: '22px 26px', display: 'flex', flexDirection: 'column' }}>
						<div style={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 700, letterSpacing: 1, color: colors.yellow }}>两者共同的核心</div>
						<div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, margin: '14px 0' }}>
							{ROLE_FOCUS.shared.map((t, i) => (
								<motion.span key={t}
									initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }}
									transition={{ type: 'spring', stiffness: 280, damping: 14, delay: 0.6 + i * 0.1 }}
									style={{ fontFamily: fonts.heading, fontSize: 34, fontWeight: 900, padding: '8px 18px', background: colors.yellow, color: colors.black, border: `2px solid ${colors.black}` }}>
									{t}
								</motion.span>
							))}
						</div>
						<p style={{ marginTop: 'auto', fontSize: 24, lineHeight: 1.5, fontWeight: 700 }}>{ROLE_FOCUS.advice}</p>
					</motion.div>

					<motion.div {...slideFromRight} style={{ minHeight: 0 }}>
						<RoleCard name="FDE" sub="更看重" items={ROLE_FOCUS.fde} bg={colors.orange} />
					</motion.div>
				</div>

				{/* 澳洲市场的特点 */}
				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
					{MARKET_TRAITS.map((m, i) => (
						<motion.div key={m.title}
							initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 1.1 + i * 0.12 }}
							style={{ background: colors.white, border, boxShadow: shadowSm, padding: '12px 16px' }}>
							<div style={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 700, color: colors.red, marginBottom: 4 }}>澳洲市场 · {m.title}</div>
							<p style={{ fontSize: 16.5, lineHeight: 1.5, margin: 0 }}>
								{m.detail}
								{m.source && <span style={{ fontFamily: fonts.mono, fontSize: 11, color: colors.dark, opacity: 0.6 }}>　来源：{m.source}</span>}
							</p>
							{m.caveat && <p style={{ fontFamily: fonts.mono, fontSize: 11.5, margin: '4px 0 0', color: colors.dark, opacity: 0.7 }}>※ {m.caveat}</p>}
						</motion.div>
					))}
				</div>

				<p style={{ fontFamily: fonts.mono, fontSize: 11, color: colors.dark, opacity: 0.6, margin: 0, marginRight: 96 }}>{JD_SOURCE_LINE}</p>
			</div>
		</Slide>
	);
}
