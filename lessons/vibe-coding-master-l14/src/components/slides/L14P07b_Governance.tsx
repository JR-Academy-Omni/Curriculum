import { motion } from 'framer-motion';
import { Page, Head, ActBadge, SoBar, colors, fonts, radii } from '../deck';

/**
 * P07b · governance/ 是一个目录，不是一张表
 *
 * 🔴 2026-10-04 新增。对照真系统（omega-company-ops/governance/）之后发现：
 *   课上只教了「写权限表」一张表，学员不知道它旁边还要有另外五份。
 *   而讲师的目标是「学完 L13+L14 自己能搭出来」—— 不给这张全景图，搭不出来。
 *
 * 🔴 两条常设规矩必须上屏，它们都反直觉：
 *   ① 默认权限是角色负责人自己，审批是例外
 *   ② 有些动作是禁止的，不是可批的 —— 否则「我申请过审批」就能把它们授权掉
 *      （这正是 P10 四条禁令的出处）
 */
const FILES = [
	{ f: '谁批什么', d: '决策分类 → 一个审批人', star: false },
	{ f: '你自己决定什么', d: '默认自己定，以及五个例外', star: true },
	{ f: '谁拥有哪一摊', d: '前端 / 后端 / 基础设施', star: false },
	{ f: '升级路径', d: '以及紧急越权和事后复盘', star: false },
	{ f: '数据怎么处理', d: '数据分级、留存、谁能读报告', star: false },
	{ f: 'AI 的权限', d: '谁按合并。写什么指向总表，不复述', star: true },
];

export default function L14P07b_Governance() {
	return (
		<Page>
			<ActBadge act={2} />
			<Head sub="下一页那张写权限表，只是这个目录里的一份。先看全景 —— 不然你回去只会建那一张。">
				它不是一张表，是一个目录
			</Head>

			<div style={{ display: 'flex', gap: 24, flex: 1, minHeight: 0 }}>
				<div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 9 }}>
					<div style={{ fontFamily: fonts.mono, fontSize: 15, fontWeight: 800, letterSpacing: 1, color: '#6f6760' }}>
						治理目录里该有什么
					</div>
					{FILES.map((x, i) => (
						<motion.div
							key={x.f}
							initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }}
							transition={{ delay: 0.12 + i * 0.09, duration: 0.34 }}
							style={{
								flex: 1, display: 'flex', alignItems: 'center', gap: 14, padding: '0 18px',
								background: x.star ? colors.dark : colors.white,
								color: x.star ? colors.white : colors.black,
								border: `2px solid ${colors.dark}`, borderRadius: radii.card,
								boxShadow: x.star ? `7px 7px 0 rgba(56,182,255,.55)` : `4px 4px 0 rgba(255,222,89,.85)`,
							}}
						>
							<span style={{ fontFamily: fonts.heading, fontSize: 23, fontWeight: 900, minWidth: 170 }}>{x.f}</span>
							<span style={{ fontSize: 19, lineHeight: 1.35, opacity: .78 }}>{x.d}</span>
						</motion.div>
					))}
				</div>

				<motion.div
					initial={{ opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4, duration: 0.42 }}
					style={{ flex: '0 0 480px', display: 'flex', flexDirection: 'column', gap: 13 }}
				>
					<div style={{
						padding: '18px 22px', borderRadius: radii.panel, background: colors.dark, color: colors.white,
						boxShadow: `9px 9px 0 rgba(255,87,87,.55)`, fontSize: 21, lineHeight: 1.55,
					}}>
						<strong style={{ fontFamily: fonts.heading, fontSize: 25, color: colors.yellow }}>两条常设规矩，都反直觉</strong>
						<br /><br />
						<strong>一、默认权限是角色负责人自己。</strong>
						审批是**例外**，只在一个写明的触发条件命中时才需要。
						<br /><br />
						<strong>二、有些动作是禁止的，不是可批的。</strong>
						不显式记下来，<strong style={{ color: colors.yellow }}>「我申请过审批」就能把它们授权掉</strong>。
					</div>
					<div style={{
						flex: 1, padding: '16px 20px', borderRadius: radii.card,
						border: `2px solid ${colors.dark}`, background: 'rgba(56,182,255,.1)',
						fontSize: 19.5, lineHeight: 1.55,
					}}>
						还有三条，照抄就行：<br />
						**一项一个审批人** —— 第二个名字叫「咨询」，没有否决权。<br />
						**审批行写的是帽子，不是人** —— 谁戴帽子去花名册里查，所以换人不用改这个目录。<br />
						**每一类审批都要有响应时限和超时默认** —— 没有过期时间的审批请求，是一个停顿。
					</div>
				</motion.div>
			</div>

			<div style={{ marginTop: 18 }}>
				<SoBar color={colors.blue}>
					还有一条决定了它的地位：<strong>当角色文件、SOP、模板跟这个目录冲突时，这个目录赢。</strong>
					—— 这就是上节课那张裁决表，在真系统里长出来的样子。
				</SoBar>
			</div>
		</Page>
	);
}
