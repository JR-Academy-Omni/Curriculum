import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow } from '../ui';

const items = [
	{ n: '01', t: '你是谁', d: '定位 / 一句话讲清楚' },
	{ n: '02', t: '卖给谁', d: '用户画像（persona）' },
	{ n: '03', t: '痛点', d: '他们半夜睡不着的事' },
	{ n: '04', t: '品牌语气', d: '怎么说话、什么调性' },
	{ n: '05', t: '红线', d: '不能说什么 / 合规' },
	{ n: '06', t: '真实数据弹药', d: '真案例 / 真截图 / 真数字' },
	{ n: '07', t: '业务现状', d: '现在主推什么 / KPI' },
] as const;

export default function S18_WhatsInMaster() {
	return (
		<Slide bg={colors.warmBg}>
			<div style={{ width: '92%', maxWidth: 1420, height: '86%', padding: '32px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
				<motion.h2 initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }}
					style={{ fontFamily: fonts.heading, fontSize: '49px', fontWeight: 900, letterSpacing: -1, marginBottom: 8 }}>
					一份真相 = <span style={{ color: colors.rose }}>7 样东西</span>
				</motion.h2>
				<motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
					style={{ fontFamily: fonts.body, fontSize: 21, color: '#666', fontWeight: 600, marginBottom: 24 }}>
					这一页就是你今晚的<b>可带走清单</b> —— 回去先把这 7 样写下来。
				</motion.p>

				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14 }}>
					{items.map((it, i) => (
						<motion.div key={it.n} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 + i * 0.08 }}
							style={{ background: i === 5 ? colors.rose : colors.white, color: i === 5 ? colors.white : colors.black, border, boxShadow: shadow, padding: '18px 18px', minHeight: 130 }}>
							<div style={{ fontFamily: fonts.heading, fontSize: 29.5, fontWeight: 900, color: i === 5 ? colors.yellow : colors.rose, marginBottom: 6 }}>{it.n}</div>
							<div style={{ fontFamily: fonts.heading, fontSize: 23.5, fontWeight: 900, marginBottom: 6 }}>{it.t}</div>
							<div style={{ fontFamily: fonts.body, fontSize: 16.5, fontWeight: 600, opacity: 0.85, lineHeight: 1.4 }}>{it.d}</div>
						</motion.div>
					))}
					<motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 + 7 * 0.08 }}
						style={{ background: colors.dark, color: colors.white, border, boxShadow: shadow, padding: '18px', minHeight: 130, display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', fontFamily: fonts.heading, fontSize: 21, fontWeight: 800 }}>
						写完这 7 样<br />= 你的 Master
					</motion.div>
				</div>
			</div>
		</Slide>
	);
}
