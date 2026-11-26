import { motion } from 'framer-motion';
import { DeckFrame, Panel, Label, colors, fonts } from '../kit';
import { StillScope, useStill, ini } from '../live';
import { assetPath } from '../ui';

const MENTORS = [
	['Lightman', '匠人学院创始人', '连续创业，全栈开发与产品'],
	['Joe', '前 Google SDE · Block SDE', '大厂工程 + 职业辅导'],
	['Jason', 'V2 · FDE', '做过企业客户的 AI 交付'],
	['Roy', 'V2 · FDE', '应用 AI 与软件工程'],
];

function Body() {
	const still = useStill();
	const a = (d: number) => ({ initial: ini(still, { opacity: 0, y: 16 }), animate: { opacity: 1, y: 0 }, transition: { delay: still ? 0 : d } });
	return <div style={{ display: 'grid', gridTemplateColumns: '1.25fr 1fr', gap: 20 }}>
		<div style={{ display: 'grid', gap: 16 }}>
			<motion.div {...a(.1)}><Panel style={{ padding: '16px 20px' }}>
				<Label>01 · 两大 AI 公司的正式合作伙伴</Label>
				<div style={{ display: 'flex', alignItems: 'center', gap: 22, marginTop: 14 }}>
					<img src={assetPath('images/partners/claude-partner-certified.svg')} alt="Claude Certified Services Partner" className="float" style={{ height: 96 }} />
					<img src={assetPath('images/partners/openai-select-partner.webp')} alt="OpenAI Select Partner" className="float" style={{ height: 70, animationDelay: '1.2s' }} />
					<div style={{ fontSize: 18, lineHeight: 1.5, fontWeight: 700 }}>Claude Certified Services Partner<br />OpenAI Select Partner</div>
				</div>
			</Panel></motion.div>
			<motion.div {...a(.25)}><Panel style={{ padding: '16px 20px' }}>
				<Label>02 · 官方 FDE 学习资源直接拿来学</Label>
				<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginTop: 12 }}>
					{[['images/partners/anthropic-fde-path.png', 'Claude FDE 学习路径'], ['images/partners/openai-partneru-catalog.png', 'OpenAI PartnerU']].map(([src, t], i) => <div key={t}>
						<div className={i ? 'shot left' : 'shot'} style={{ height: 150, borderRadius: 12, border: `2px solid ${colors.dark}`, overflow: 'hidden', background: colors.white }}>
							<img src={assetPath(src)} alt={t} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
						</div>
						<div style={{ fontSize: 17, fontWeight: 900, marginTop: 6 }}>{t}</div>
					</div>)}
				</div>
			</Panel></motion.div>
			<motion.div {...a(.4)}><Panel bg={colors.yellow} style={{ padding: '14px 20px', display: 'flex', alignItems: 'center', gap: 16 }}>
				<span className="float" style={{ fontSize: 40, display: 'inline-block' }}>🏅</span>
				<div><div style={{ fontSize: 22, fontWeight: 900 }}>03 · 完成训练，拿到 FDE 认可徽章</div><div style={{ fontSize: 16, fontWeight: 700, marginTop: 2 }}>可以放进 LinkedIn 和简历，给雇主一个看得见的证明</div></div>
			</Panel></motion.div>
		</div>
		<motion.div {...a(.55)}><Panel bg={colors.dark} style={{ color: colors.white, padding: '16px 20px', height: '100%', boxSizing: 'border-box' }}>
			<Label bg={colors.yellow} color={colors.dark}>04 · 导师都是 Business + Tech 出身</Label>
			<div style={{ display: 'grid', gap: 12, marginTop: 16 }}>
				{MENTORS.map(([n, r, d], i) => <motion.div key={n} initial={ini(still, { opacity: 0, x: 14 })} animate={{ opacity: 1, x: 0 }} transition={{ delay: still ? 0 : .7 + i * .12 }}
					style={{ display: 'grid', gridTemplateColumns: '150px 1fr', gap: 12, alignItems: 'center', borderTop: i ? '1px solid rgba(255,255,255,.15)' : 'none', paddingTop: i ? 12 : 0 }}>
					<span style={{ fontFamily: fonts.heading, fontSize: 30, fontWeight: 900, color: colors.yellow }}>{n}</span>
					<div><div style={{ fontSize: 18, fontWeight: 800 }}>{r}</div><div style={{ fontSize: 15, color: '#d8d8dd', marginTop: 2 }}>{d}</div></div>
				</motion.div>)}
			</div>
			<div style={{ fontSize: 17, lineHeight: 1.55, marginTop: 18, borderTop: '1px solid rgba(255,255,255,.2)', paddingTop: 14 }}>懂技术，也懂怎么让企业愿意买单：<b style={{ color: colors.yellow }}>FDE 要的正是这两样一起。</b></div>
		</Panel></motion.div>
	</div>;
}

export default function S21b_WhyUs() {
	return <DeckFrame tag="05 · 为什么是匠人" title="为什么匠人能教 FDE？" accent={colors.red}>
		<StillScope><Body /></StillScope>
	</DeckFrame>;
}
