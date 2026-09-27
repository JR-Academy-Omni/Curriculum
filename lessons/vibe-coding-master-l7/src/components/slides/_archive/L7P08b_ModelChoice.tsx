import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, fonts, border, shadow } from '../ui';

// P08b：谁用什么模型 —— 按「判断密度」选档，不按「重要性」选档
// 数据纪律：只讲档位和判断线，不出现任何模型名、价格、版本号 —— 那些当天口播（蓝图 §18）
const TRAPS = [
	{
		who: 'Subagent', rule: '默认跟随主对话', tone: colors.blue,
		note: '你换了模型，它跟着换',
	},
	{
		who: 'Teammate', rule: '默认不跟随 Lead', tone: colors.red,
		note: '正好反过来 —— 你自己用好档，队伍默认不是', hot: true,
	},
	{
		who: 'Teammate', rule: '开人时就定死', tone: colors.purple,
		note: '事后改不了，只能改 Lead 自己',
	},
];

const ROLES = [
	{ role: 'Verifier / 唱反调的', job: '按判据找反例、裁决冲突', dense: true, pick: '最强档' },
	{ role: 'Team Lead', job: '读三份互相矛盾的证据然后拍板', dense: true, pick: '最强档' },
	{ role: '调查员', job: '读文件、搜日志、归纳复述', dense: false, pick: '中间档够用' },
	{ role: '格式转换 / 清单核对', job: '机械劳动', dense: false, pick: '最快档' },
];

export default function L7P08b_ModelChoice() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner split>
				<div style={{ flex: '0 0 45%' }}>
					<div style={{ display: 'flex', gap: 10, marginBottom: 8 }}>
						<Tag bg={colors.dark}>开跑前</Tag>
						<Tag bg={colors.red}>三个默认值陷阱</Tag>
					</div>
					<Title size="38px" style={{ marginBottom: 12 }}>
						谁用<span style={{ background: colors.yellow, padding: '0 8px' }}>什么模型</span>
					</Title>

					<div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 16 }}>
						{TRAPS.map((t, i) => (
							<motion.div
								key={i}
								initial={{ opacity: 0, x: -18 }} animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.35, delay: 0.12 + i * 0.11 }}
								style={{
									border, boxShadow: shadow, background: t.hot ? '#fffbe8' : colors.white,
								}}
							>
								<div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 14px', borderBottom: '2px solid #eee' }}>
									<span style={{
										fontFamily: fonts.mono, fontSize: 12.5, fontWeight: 700,
										background: t.tone, color: colors.white, padding: '3px 9px',
									}}>{t.who}</span>
									<span style={{ fontSize: 16, fontWeight: 800, color: colors.dark }}>{t.rule}</span>
								</div>
								<div style={{ padding: '8px 14px', fontSize: 13.5, color: '#666', lineHeight: 1.45 }}>
									{t.hot && <span style={{ color: colors.red, fontWeight: 900, marginRight: 5 }}>★</span>}
									{t.note}
								</div>
							</motion.div>
						))}
					</div>

					<motion.div
						initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
						style={{ fontSize: 14.5, color: '#666', lineHeight: 1.6, padding: '10px 14px', border: '2px dashed #ccc' }}
					>
						第二条是<strong style={{ color: colors.dark }}>又一次「不假设继承」</strong>——
						而且方向跟 Subagent 相反，最容易凭直觉搞反。
					</motion.div>
				</div>

				<div style={{ flex: 1, minWidth: 0 }}>
					<div style={{ fontFamily: fonts.mono, fontSize: 12, color: colors.green, letterSpacing: 1.4, fontWeight: 700, marginBottom: 10 }}>
						选档判断线
					</div>

					<div style={{ display: 'flex', background: colors.dark, color: colors.white, border, borderBottom: 'none' }}>
						<div style={{ flex: 1.1, padding: '9px 14px', fontFamily: fonts.mono, fontSize: 11.5, letterSpacing: 1.2, fontWeight: 700 }}>角色</div>
						<div style={{ flex: '0 0 96px', padding: '9px 12px', fontFamily: fonts.mono, fontSize: 11.5, letterSpacing: 1.2, fontWeight: 700, borderLeft: '2px solid rgba(255,255,255,0.2)' }}>密度</div>
						<div style={{ flex: '0 0 116px', padding: '9px 12px', fontFamily: fonts.mono, fontSize: 11.5, letterSpacing: 1.2, fontWeight: 700, borderLeft: '2px solid rgba(255,255,255,0.2)', color: colors.yellow }}>选什么</div>
					</div>
					<div style={{ border, boxShadow: shadow, background: colors.white, marginBottom: 16 }}>
						{ROLES.map((r, i) => (
							<motion.div
								key={r.role}
								initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.35, delay: 0.25 + i * 0.1 }}
								style={{
									display: 'flex', alignItems: 'stretch',
									borderBottom: i < ROLES.length - 1 ? '2px solid #eee' : 'none',
									background: r.dense ? '#fff6f6' : colors.white,
								}}
							>
								<div style={{ flex: 1.1, padding: '10px 14px' }}>
									<div style={{ fontSize: 15.5, fontWeight: 800, color: colors.dark }}>{r.role}</div>
									<div style={{ fontSize: 12.5, color: '#888', lineHeight: 1.35 }}>{r.job}</div>
								</div>
								<div style={{ flex: '0 0 96px', borderLeft: '2px solid #eee', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
									<span style={{
										fontSize: 12.5, fontWeight: 700, padding: '3px 9px',
										background: r.dense ? colors.red : '#e8e8e8',
										color: r.dense ? colors.white : '#666',
									}}>{r.dense ? '判断' : '执行'}</span>
								</div>
								<div style={{ flex: '0 0 116px', borderLeft: '2px solid #eee', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 700, color: r.dense ? colors.dark : '#777' }}>
									{r.pick}
								</div>
							</motion.div>
						))}
					</div>

					<motion.div
						initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4, delay: 0.7 }}
						style={{
							padding: '14px 18px', background: colors.dark, color: colors.white,
							border, boxShadow: shadow, marginBottom: 12,
						}}
					>
						<div style={{ fontSize: 18, fontWeight: 800, lineHeight: 1.5 }}>
							跟<span style={{ color: colors.yellow }}>判断密度</span>走，
							不跟<span style={{ textDecoration: 'line-through', opacity: 0.6 }}>重要性</span>走。
						</div>
						<div style={{ marginTop: 6, fontSize: 14, opacity: 0.85, lineHeight: 1.5 }}>
							「这个角色重不重要」是错的问法。要问的是：<strong>它是在做判断，还是在做检索？</strong>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}
						style={{ border, boxShadow: shadow, background: colors.yellow, padding: '11px 16px' }}
					>
						<div style={{ fontSize: 15.5, fontWeight: 800, color: colors.black, lineHeight: 1.5 }}>
							先扫「思考力度」，再动模型档。
						</div>
						<div style={{ marginTop: 4, fontSize: 13.5, color: '#665', lineHeight: 1.5 }}>
							同一档模型调高力度，常常比换更贵的档更划算 —— 而且改起来不用重开人。
						</div>
					</motion.div>
				</div>
			</Inner>
		</Slide>
	);
}
