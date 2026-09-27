import { motion } from 'framer-motion';
import { colors, border, shadow } from '../ui';
import { Page, PageHead, Verdict, Note } from '../deck';

// P11 · Lead 的四项责任 —— 收敛与验收（蓝图 §8.6）
// 核心：Lead 不是第四个调查员。什么时候才下场，是这一页的第二块。

const DUTIES = [
	{ n: '1', k: '结构', d: '任务与所有权是否清楚', c: colors.blue },
	{ n: '2', k: '流动', d: '该互通的证据是否真的互通', c: colors.purple },
	{ n: '3', k: '决定', d: '冲突用什么判据裁决', c: colors.orange },
	{ n: '4', k: '验收', d: '结论是否有成员自述之外的证据', c: colors.green },
];

const ONLY_THEN = [
	'两个成员的范围之间出现无人拥有的缺口',
	'某个冲突需要独立第三证据',
	'成员全部阻塞且任务无法重新分配',
];

export default function L8P11_LeadDuties() {
	return (
		<Page>
			<PageHead phase="talk" time="42–50 min" title="Lead 的四项责任" />

			<Verdict bg={colors.red} fg={colors.white}>
				Lead <span style={{ background: colors.white, color: colors.red, padding: '0 10px' }}>不是第四个调查员</span>。
			</Verdict>

			<div style={{ display: 'flex', gap: 20, flex: 1, minHeight: 0 }}>
				<div style={{ flex: 1.15, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
					{DUTIES.map((d, i) => (
						<motion.div
							key={d.n}
							initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.32, delay: 0.1 + i * 0.08 }}
							style={{ border, boxShadow: shadow, background: colors.white, display: 'flex', flexDirection: 'column' }}
						>
							<div style={{
								background: d.c, color: colors.white, padding: '9px 18px',
								borderBottom: border, fontSize: 25, fontWeight: 900,
								display: 'flex', alignItems: 'baseline', gap: 10,
							}}>
								<span style={{ fontSize: 22, opacity: 0.85 }}>{d.n}</span>{d.k}
							</div>
							<div style={{ padding: '16px 18px', fontSize: 22, lineHeight: 1.45, color: '#444', flex: 1, display: 'flex', alignItems: 'center' }}>
								{d.d}
							</div>
						</motion.div>
					))}
				</div>

				<motion.div
					initial={{ opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.4, delay: 0.3 }}
					style={{ flex: 1, border, boxShadow: shadow, background: colors.white, display: 'flex', flexDirection: 'column' }}
				>
					<div style={{
						background: colors.dark, color: colors.white, padding: '10px 20px',
						borderBottom: border, fontSize: 22, fontWeight: 900,
					}}>Lead 只有这三种情况才下场调查</div>

					<div style={{ padding: '18px 22px', display: 'flex', flexDirection: 'column', gap: 16, flex: 1, justifyContent: 'center' }}>
						{ONLY_THEN.map((t, i) => (
							<div key={t} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
								<span style={{
									flexShrink: 0, width: 28, height: 28, borderRadius: 14,
									background: colors.warmBg, border: `2px solid ${colors.black}`,
									fontSize: 16, fontWeight: 800, color: colors.dark,
									display: 'flex', alignItems: 'center', justifyContent: 'center',
								}}>{i + 1}</span>
								<span style={{ fontSize: 22, lineHeight: 1.45, color: colors.dark }}>{t}</span>
							</div>
						))}
					</div>

					<div style={{
						margin: '0 22px 20px', padding: '13px 18px',
						background: '#fff2f2', border: `3px solid ${colors.red}`,
						fontSize: 23, lineHeight: 1.45, color: '#444',
					}}>
						最常见的失败：<strong style={{ color: colors.red }}>Lead 自己搜完代码再告诉成员答案</strong>。
					</div>
				</motion.div>
			</div>

			<Note>
				<strong style={{ color: colors.dark }}>成员共识 ≠ 外部验收。</strong>
				全员同意、任务 completed、甚至「找到根因」，都不是完成 —— Lead 必须用独立命令、输入或文件证据核对。
			</Note>
		</Page>
	);
}
