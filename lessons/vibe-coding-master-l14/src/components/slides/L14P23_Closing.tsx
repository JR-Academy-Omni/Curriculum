import { motion } from 'framer-motion';
import { Page, SilentFailures, colors, fonts, radii } from '../deck';

/**
 * P23 · 收口 ⭐⭐⭐ 独占 · 四分钟，一秒不能压
 * 🔴 纪律 9：必须把四种静默失败并排放，不能只念最后那句话。
 *   四件事是同一个形状：看起来发生了，实际没有。
 * 🔴 这一页从头到尾不许提前出现在任何别的页上。
 */
export default function L14P23_Closing() {
	return (
		<Page bg={colors.dark} style={{ justifyContent: 'center' }}>
			<motion.div
				initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}
				style={{ fontSize: 23, color: 'rgba(255,255,255,.5)', marginBottom: 22, lineHeight: 1.6 }}
			>
				今天你给它开了权限、接了系统、写了技能、挂了检查。<br />
				现在回头看四样东西：
			</motion.div>

			<SilentFailures rows={[
				{ looks: '查询失败报成了 0', actually: '你以为本期无异常' },
				{ looks: '连接过期没人知道', actually: '报告天天是空的' },
				{ looks: '有人点了合并，但没人读过', actually: '你以为有审查' },
				{ looks: '离职残留的授权还在', actually: '你以为清过了' },
			]} />

			<motion.div
				initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.7, duration: 0.5 }}
				style={{ fontSize: 28, fontWeight: 800, color: colors.white, marginTop: 26, textAlign: 'center' }}
			>
				四件事是同一个形状：<span style={{ color: colors.red }}>看起来发生了，实际没有。</span>
			</motion.div>

			<motion.h2
				initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 2.4, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
				style={{
					fontFamily: fonts.heading, fontSize: 52, fontWeight: 900, lineHeight: 1.3, letterSpacing: -1.8,
					color: colors.white, textAlign: 'center', margin: '40px auto 0', maxWidth: 1260,
				}}
			>
				它最危险的时候，不是它做错了事，<br />
				是它<span style={{ color: colors.yellow }}>什么都没做</span>，而你以为它做了。
			</motion.h2>

			<motion.div
				initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.4, duration: 0.5 }}
				style={{
					marginTop: 40, alignSelf: 'center', padding: '16px 26px', borderRadius: radii.card,
					border: `2px solid rgba(255,255,255,.26)`, background: 'rgba(255,255,255,.05)',
					fontSize: 22, lineHeight: 1.6, color: 'rgba(255,255,255,.82)', textAlign: 'center',
				}}
			>
				<strong style={{ color: colors.yellow }}>这周就一件事：</strong>回去看你那张写权限表的第三列。<br />
				哪一行的依据你写不出来，<strong style={{ color: colors.white }}>那一行就先关掉。</strong>
			</motion.div>
		</Page>
	);
}
