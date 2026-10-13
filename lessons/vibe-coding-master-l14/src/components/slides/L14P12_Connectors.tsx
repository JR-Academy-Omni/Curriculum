import { Page, Head, ActBadge, SoBar, colors, fonts, radii } from '../deck';
import { motion } from 'framer-motion';

/**
 * P12 · 连接器清单
 * 🔴 纪律 2：按「它要干什么」排，不按产品名排。全页零产品名。
 *   这样排的好处是：学员换一套工具，这张表一个字都不用改。
 */
const ROWS = [
	{ need: '知道现在有哪些活、谁负责、什么时候到期', what: '工单系统', miss: '它只能看文件，看不见真实进度' },
	{ need: '把结果告诉人', what: '聊天工具', miss: '只能写文件，没人会去看' },
	{ need: '起草对外沟通', what: '邮箱', miss: '少一类产出，不致命' },
	{ need: '看技术交付的证据', what: '代码托管', miss: '说不出「做完了没有」' },
];

export default function L14P12_Connectors() {
	return (
		<Page>
			<ActBadge act={3} />
			<Head sub="按「它要干什么」排，不按产品名排。这样排，你换一套工具，这张表一个字都不用改。">
				它要够得着哪些外面的东西
			</Head>

			<div style={{ display: 'flex', flexDirection: 'column', gap: 12, flex: 1, minHeight: 0 }}>
				<div style={{
					display: 'grid', gridTemplateColumns: '1.5fr 1fr 1.4fr', gap: 12,
					fontFamily: fonts.mono, fontSize: 15, fontWeight: 800, letterSpacing: 1, color: '#6f6760',
					padding: '0 20px',
				}}>
					<div>它要干的事</div><div>需要接什么</div><div>没有会怎样</div>
				</div>
				{ROWS.map((r, i) => (
					<motion.div
						key={r.what}
						initial={{ opacity: 0, x: -18 }} animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.15 + i * 0.11, duration: 0.4 }}
						style={{
							flex: 1, display: 'grid', gridTemplateColumns: '1.5fr 1fr 1.4fr', gap: 12,
							alignItems: 'center', padding: '0 20px',
							background: colors.white, border: `2px solid ${colors.dark}`, borderRadius: radii.card,
							boxShadow: `6px 6px 0 rgba(255,222,89,.9)`,
						}}
					>
						<div style={{ fontSize: 21, lineHeight: 1.4 }}>{r.need}</div>
						<div style={{ fontSize: 24, fontWeight: 900, fontFamily: fonts.heading }}>{r.what}</div>
						<div style={{ fontSize: 19, lineHeight: 1.4, color: '#7a716a' }}>{r.miss}</div>
					</motion.div>
				))}
			</div>

			<div style={{ marginTop: 20 }}>
				<SoBar color={colors.blue}>
					这张表上<strong>一个产品名都没有</strong>，而且它对任何一套工具都成立。
					<strong>你们公司用什么，不影响这四行里的任何一行。</strong>
				</SoBar>
			</div>
		</Page>
	);
}
