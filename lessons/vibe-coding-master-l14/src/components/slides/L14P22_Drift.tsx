import { motion } from 'framer-motion';
import { Page, Head, ActBadge, Code, colors, radii } from '../deck';

/**
 * P22 · 漂移检查只数数不点名，以及它看不见什么
 * 🔴 这一格有个反直觉的收获：因为不能按人查，限制反而逼出了更强的检查形态。
 * 🔴 同样重要的是写清它看不见什么 —— 高风险的残留恰恰在它看不见的地方。
 */
export default function L14P22_Drift() {
	return (
		<Page>
			<ActBadge act={5} />
			<Head sub="个人账号映射属于身份目录，不进规则仓 —— 所以漂移检查不能按人查。而这个限制反而逼出了更强的检查。">
				每周数一次，但不点名
			</Head>

			<div style={{ display: 'flex', gap: 26, flex: 1, minHeight: 0 }}>
				<div style={{ flex: 1.1, display: 'flex', flexDirection: 'column', gap: 14 }}>
					<Code
						style={{ flex: 1 }}
						label="它数这些（都不需要知道那是谁）"
						wrap
						size={20}
						hi={[0]}
						code={`一个不是组织成员的协作者
在职人数 == 账号数
规则仓可推送的人数 == N
记录那边 main 有保护（存在即是漂移）
外部协作者数 == 0
久未接受的邀请`}
					/>
					<motion.div
						initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.45 }}
						style={{
							padding: '16px 20px', borderRadius: radii.card,
							border: `2px solid ${colors.green}`, background: 'rgba(126,217,87,.14)',
							fontSize: 20, lineHeight: 1.55,
						}}
					>
						<strong>第一条最漂亮：</strong>「一个不是组织成员的协作者」——
						<strong>不需要任何人知道那是谁，就能抓到一条离职残留。</strong>
					</motion.div>
				</div>

				<motion.div
					initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.35, duration: 0.45 }}
					style={{
						flex: 1, padding: '24px 26px', borderRadius: radii.panel,
						border: `2px solid ${colors.red}`, background: 'rgba(255,87,87,.08)',
						display: 'flex', flexDirection: 'column', gap: 14,
					}}
				>
					<div style={{ fontSize: 30, fontWeight: 900, color: colors.red }}>它看不见什么</div>
					<div style={{ fontSize: 22, lineHeight: 1.9 }}>
						身份提供商与单点登录<br />
						邮件组<br />
						共享盘<br />
						日历系列<br />
						共享凭据
					</div>
					<div style={{
						marginTop: 'auto', padding: '14px 18px', borderRadius: radii.card,
						background: colors.dark, color: colors.white, fontSize: 22, lineHeight: 1.55, fontWeight: 700,
					}}>
						<strong style={{ color: colors.yellow }}>高风险的残留恰恰在那边，不在这边。</strong>
						<br />那几类<strong>需要人走一遍清单</strong>，没有自动化能替你。
					</div>
				</motion.div>
			</div>
		</Page>
	);
}
