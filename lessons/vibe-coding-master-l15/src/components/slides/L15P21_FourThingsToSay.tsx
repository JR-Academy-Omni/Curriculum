import { motion } from 'framer-motion';
import { Page, Head, ActBadge, colors, fonts, border, radii } from '../deck';

/**
 * P21 · 四件必须说出口（⭐）
 * 🔴 这四格逐一对应第十四节的四幕 —— 视觉上要标出来。
 * 🔴 第四格停久一点。它空着的时候，答案默认是「你」。不要说破，P28 收口会收。
 */
const FOUR = [
	{ n: '一', t: '它会碰什么', from: '第十四节 · 写权限表', d: '它能动哪些地方', c: colors.blue },
	{ n: '二', t: '它什么时候会自己跑', from: '第十四节 · 人触发 vs 自动跑', d: '会不会在没人看着的时候自己动', c: colors.teal },
	{ n: '三', t: '它依赖什么外部凭据', from: '第十四节 · 连接器', d: '对方要自己准备哪几把钥匙', c: colors.orange },
	{ n: '四', t: '它坏了之后谁修', from: '第十四节 · 谁来维护', d: '最容易空着的一格', c: colors.red, heavy: true },
];

export default function L15P21_FourThingsToSay() {
	return (
		<Page>
			<ActBadge act={4} />
			<Head>所以有四件事，必须说出口</Head>

			<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
				{FOUR.map((f, i) => (
					<motion.div
						key={f.n}
						initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.15 + i * 0.13, duration: 0.45 }}
						style={{
							padding: '18px 22px', background: colors.white, border,
							borderRadius: radii.panel, boxShadow: `6px 6px 0 ${f.c}`,
						}}
					>
						<div style={{ display: 'flex', alignItems: 'center', gap: 13 }}>
							<span style={{
								width: 36, height: 36, flexShrink: 0, borderRadius: radii.pill, border,
								background: f.c, color: colors.white, textAlign: 'center', lineHeight: '32px',
								fontFamily: fonts.heading, fontSize: 19, fontWeight: 900,
							}}>{f.n}</span>
							<span style={{ fontSize: 27, fontWeight: 900 }}>{f.t}</span>
							<span style={{
								marginLeft: 'auto', fontFamily: fonts.mono, fontSize: 13, fontWeight: 700,
								background: '#f3efec', border: `2px solid #ddd`, borderRadius: radii.label,
								padding: '3px 9px', color: '#888',
							}}>{f.from}</span>
						</div>
						<p style={{ fontSize: 20, color: '#555', lineHeight: 1.65, marginTop: 11 }}>{f.d}</p>
						{f.heavy && (
							<p style={{ fontSize: 22, fontWeight: 800, marginTop: 8, color: colors.red }}>
								空着的时候，答案默认是你。永远是你。
							</p>
						)}
					</motion.div>
				))}
			</div>
		</Page>
	);
}
