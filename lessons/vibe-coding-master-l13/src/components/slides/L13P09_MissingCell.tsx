import { motion } from 'framer-motion';
import { ActBadge, Page, Head, colors, fonts, border, shadow, FS } from '../deck';

// P06 · 他们不是没写裁决规则 ⭐
// 🔴 叙述版，虚构化：不出现任何精确计数（「N 个 PR 全部自合」这类是指纹）。
//    只说「连着几个月，没有一次例外」。纪律 7。
// 🔴 讲师必须点的那一句：他们写了裁决规则，但那张表漏了一格。
export default function L13P09_MissingCell() {
	return (
		<Page>
			<ActBadge act={2} />
			<Head sub="第 1 步你有了一个目录。文件一多，它们会互相矛盾。到时候听谁的？">
				他们不是没写裁决规则
			</Head>

			<div style={{ display: 'flex', gap: 30, flex: 1, minHeight: 0, alignItems: 'center' }}>
				<div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 14 }}>
					{[
						{ tag: 'A · 治理文件', t: '这个仓库每次改动都走 PR，不需要审批人', c: colors.blue },
						{ tag: 'B · 角色文件', t: '合并审查绝不由作者自己做', c: colors.purple },
					].map((r, i) => (
						<motion.div
							key={r.tag}
							initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
							transition={{ delay: i * 0.15 }}
							style={{ border, background: colors.white, boxShadow: '4px 4px 0 #000', padding: '16px 20px' }}
						>
							<div style={{
								display: 'inline-block', fontFamily: fonts.mono, fontSize: 13, fontWeight: 700,
								padding: '3px 10px', background: r.c, color: colors.white, marginBottom: 8,
							}}>{r.tag}</div>
							<div style={{ fontSize: 23, lineHeight: 1.5 }}>{r.t}</div>
						</motion.div>
					))}
					<motion.div
						initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 }}
						style={{ fontSize: 22, color: '#555', lineHeight: 1.6, marginTop: 4 }}
					>
						两条前后差一天，都签字确认过。<b>不加范围读，不可能同时成立。</b>
					</motion.div>
				</div>

				<motion.div
					initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.7 }}
					style={{
						flex: '0 0 560px', border: `3px solid ${colors.red}`, background: colors.dark,
						boxShadow: shadow, padding: '24px 26px',
					}}
				>
					<div style={{ fontSize: 21, lineHeight: 1.75, color: 'rgba(255,255,255,0.85)' }}>
						他们的裁决规则只写了一句：
						<div style={{
							fontFamily: fonts.mono, fontSize: 20, color: colors.yellow,
							padding: '10px 0', lineHeight: 1.5,
						}}>
							「跟治理文件冲突时，治理文件赢」
						</div>
						而角色文件<b style={{ color: colors.red }}>不在治理目录里</b> ——
						那条裁决规则够不着这个组合。
						<div style={{ height: 14 }} />
						后来有人去翻记录：<b style={{ color: colors.white }}>连着几个月，每一个改动都是提出的人自己批、自己合，没有一次例外。</b>
						<div style={{ height: 14 }} />
						<span style={{ color: 'rgba(255,255,255,0.6)' }}>
							在第一种读法下这是正常运行，在第二种读法下这是一串违规。
							而必需审批人数配置为 0，<b style={{ color: colors.yellow }}>无论按哪种读法，都没有任何东西会把差别暴露出来。</b>
						</span>
					</div>
				</motion.div>
			</div>

			<motion.div
				initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1 }}
				style={{
					marginTop: 18, fontFamily: fonts.heading, fontSize: 34, fontWeight: 900, textAlign: 'center',
				}}
			>
				他们写了裁决规则。<span style={{ background: colors.yellow, padding: '2px 12px' }}>但那张表漏了一格。</span>
				<span style={{ fontSize: FS.note, fontFamily: fonts.body, fontWeight: 400, color: '#888', marginLeft: 14 }}>
					漏掉的那一格，就是将来那场事故的位置
				</span>
			</motion.div>
		</Page>
	);
}
