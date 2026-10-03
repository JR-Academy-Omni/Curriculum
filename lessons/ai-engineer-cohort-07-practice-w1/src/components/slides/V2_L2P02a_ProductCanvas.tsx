// Migrated teaching page; original source: lessons/vibe-coding-master-l2/src/components/slides/L2P02a_ProductCanvas.tsx
import { Slide, Inner, Title, Tag, colors, fonts, border, shadow, springIn } from '../courseUi';
import { motion } from 'framer-motion';
const cells = [
    { t: '用户', q: '到底是谁？', hint: '学生 / 老师 / 运营 / 自己', color: colors.red },
    { t: '触发场景', q: '什么时候会用？', hint: '每天 / 课前 / 投递前 / 客服后', color: colors.orange },
    { t: '真痛', q: '现在哪里费劲？', hint: '慢 / 容易错 / 记不住 / 没标准', color: colors.purple },
    { t: '现有 workaround', q: '现在怎么凑合？', hint: 'Excel / 群聊 / 手抄 / 靠记忆', color: colors.blue },
    { t: '成功标准', q: '什么变好了？', hint: '少 20 分钟 / 少漏 1 单 / 多 1 次复习', color: colors.green },
    { t: '边界', q: '这版不做什么？', hint: '不登录 / 不接支付 / 不做后台', color: colors.dark },
];
// Product Thinking Canvas：把想法磨成需求
export default function L2P02a_ProductCanvas() {
    return (<Slide bg={colors.dark}>
			<Inner style={{ flexDirection: 'column' }}>
				<motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
					<Tag bg={colors.yellow} color={colors.black}>1 页 Canvas</Tag>
					<Title white size="48px" style={{ marginTop: 12 }}>
						把想法磨成需求：<span style={{ color: colors.yellow }}>6 格就够</span>
					</Title>
					<p style={{ fontSize: 18, color: '#dfe3f0', marginTop: 8, fontWeight: 700 }}>
						填不出来的格子，不是写作问题，是需求还没想清楚。
					</p>
				</motion.div>

				<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 14, marginTop: 24 }}>
					{cells.map((cell, i) => (<motion.div key={cell.t} {...springIn} transition={{ ...springIn.transition, delay: 0.1 + i * 0.08 }} style={{ borderRadius: 18, background: colors.white, border, boxShadow: shadow, padding: '18px 18px 16px', minHeight: 132 }}>
							<div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
								<div style={{ borderRadius: 18, width: 18, height: 18, background: cell.color, border }}/>
								<div style={{ fontFamily: fonts.heading, fontSize: 23, fontWeight: 900, color: colors.black }}>{cell.t}</div>
							</div>
							<div style={{ marginTop: 10, fontSize: 17, fontWeight: 900, color: '#111827' }}>{cell.q}</div>
							<div style={{ marginTop: 6, fontSize: 14, fontWeight: 700, lineHeight: 1.45, color: '#4b5563' }}>{cell.hint}</div>
						</motion.div>))}
				</div>

				<motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.68, duration: 0.45 }} style={{ borderRadius: 18, marginTop: 22, background: colors.yellow, color: colors.black, border, boxShadow: shadow, padding: '16px 22px', fontSize: 20, fontWeight: 900 }}>
					输出一句话：为【用户】在【场景】解决【真痛】，用【成功标准】验收，这版不做【边界】。
				</motion.div>
			</Inner>
		</Slide>);
}
