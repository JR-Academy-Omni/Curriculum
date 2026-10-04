// Migrated teaching page; original source: lessons/vibe-coding-master-l2/src/components/slides/L2P02b_MVPScope.tsx
import { Slide, Inner, Title, Tag, colors, fonts, border, shadow, springIn } from '../courseUi';
import { motion } from 'framer-motion';
const parts = [
    {
        t: 'Minimum',
        sub: '最小',
        d: '只保留验证问题所需的最少功能，不做完整产品。',
        example: '今晚只做 1 个用户 + 1 条主流程。',
        color: colors.red,
    },
    {
        t: 'Viable',
        sub: '可用',
        d: '不是假图、不是静态壳；用户能真实操作，得到一个有用结果。',
        example: '输入真实 JD 和简历，真的输出修改建议。',
        color: colors.blue,
    },
    {
        t: 'Product',
        sub: '产品',
        d: '有明确用户、场景、输入、输出、验收方式，不只是技术 demo。',
        example: '用户知道什么时候用，也知道用完能解决什么。',
        color: colors.green,
    },
];
// MVP：Minimum Viable Product 是什么
export default function L2P02b_MVPScope() {
    return (<Slide bg={colors.warmBg}>
			<Inner style={{ flexDirection: 'column' }}>
				<motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
					<Tag bg={colors.red}>MVP · Minimum Viable Product</Tag>
					<Title size="48px" style={{ marginTop: 12 }}>
						MVP 不是“做得很烂”，是<span style={{ background: colors.yellow, padding: '0 8px' }}>最小可验证产品</span>
					</Title>
				</motion.div>

				<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 18, marginTop: 28 }}>
					{parts.map((part, i) => (<motion.div key={part.t} {...springIn} transition={{ ...springIn.transition, delay: 0.12 + i * 0.1 }} style={{ borderRadius: 18, background: colors.white, border, boxShadow: shadow, padding: '22px 22px 20px', minHeight: 318 }}>
							<div style={{ borderRadius: 18, background: part.color, border, color: part.color === colors.green ? colors.black : colors.white, padding: '10px 12px', fontFamily: fonts.mono, fontSize: 18, fontWeight: 900 }}>
								{part.t}
							</div>
							<div style={{ marginTop: 12, fontFamily: fonts.heading, fontSize: 30, fontWeight: 900, color: colors.black }}>{part.sub}</div>
							<div style={{ marginTop: 12, fontSize: 18, fontWeight: 750, color: '#1f2937', lineHeight: 1.45 }}>{part.d}</div>
							<div style={{ borderRadius: 18, marginTop: 18, background: colors.warmBg, border, padding: '13px 14px', fontSize: 16, fontWeight: 850, color: colors.black, lineHeight: 1.35 }}>{part.example}</div>
						</motion.div>))}
				</div>

				<motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.58, duration: 0.45 }} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginTop: 22 }}>
					<div style={{ borderRadius: 18, background: colors.red, color: colors.white, border, padding: '15px 20px', fontSize: 20, fontWeight: 900 }}>
						不是：登录、支付、后台、历史记录、权限系统全做完
					</div>
					<div style={{ borderRadius: 18, background: colors.dark, color: colors.white, border, boxShadow: shadow, padding: '15px 20px', fontSize: 20, fontWeight: 900 }}>
						是：一个真实用户能跑完一条主流程
					</div>
				</motion.div>

				<motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.72, duration: 0.45 }} style={{ borderRadius: 18, marginTop: 18, background: colors.yellow, color: colors.black, border, boxShadow: shadow, padding: '16px 24px', fontSize: 22, fontWeight: 900 }}>
					今晚的 MVP 标准：打开页面 → 输入真实例子 → 点击按钮 → 看到有用结果。
				</motion.div>
			</Inner>
		</Slide>);
}
