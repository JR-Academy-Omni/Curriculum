import { motion } from 'framer-motion';
import { colors, border } from '../ui';
import { Page, PageHead, WatchdogStack, Verdict, Note } from '../deck';

/**
 * P20 · 断了，谁负责重跑
 *
 * 🔴 原版这里是一张「三层重试表」（它自己 / 调度器 / 你的脚本）。换成架构图，
 *    因为讲的本来就是同样三个角色，而图多回答了一个 deck 一直欠着的问题：
 *    **那个「脚本」到底是什么、在哪。** 全 deck 有 8 处提到它，从没露过脸。
 *    换图不换时长。
 * 🔴 顺序不能颠倒：先契约（P19），后重试。没有契约的重试是盲目的 ——
 *    你连上次是成是败都不知道，重试只是把不确定的事又做了一遍。
 * 🔴 §20：这一页必须有一个要求学员当场自问的动作，不是纯讲授。
 * 🔴 判「不安全 → 降级成只提议」是正确答案，不是失败（评分表同口径）。
 * 🔴 仍然不教脚本工程（§4 非目标）。可跑样板 + 八条写法在 HANDOUT §7。
 */
export default function L11P20_RetryIdempotent() {
	return (
		<Page style={{ gap: 16 }}>
			<PageHead
				phase="talk"
				title="断了，谁负责重跑？"
				sub={<>先有契约，才谈重试。而<strong style={{ color: colors.red }}>判成败的那个人，不能是被判的那个人</strong>。</>}
			/>

			<WatchdogStack style={{ flexShrink: 0 }} />

			<motion.div
				initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.35, delay: 0.3 }}
				style={{
					border: `3px solid ${colors.orange}`, boxShadow: `6px 6px 0 ${colors.orange}`,
					background: '#fff8e5', padding: '11px 20px', flexShrink: 0,
				}}
			>
				<div style={{ fontSize: 25, fontWeight: 900, color: colors.black, lineHeight: 1.3 }}>
					✋ 现在问你自己：<span style={{ color: colors.red }}>你那件事，重跑一次安全吗？</span>
				</div>
				<div style={{ fontSize: 19, color: '#666', marginTop: 4, lineHeight: 1.4 }}>
					会不会开出两个一模一样的 PR？会不会把同一条消息发两遍？会不会把同一笔数据算两次？
				</div>
			</motion.div>

			<div style={{ display: 'flex', gap: 14, flex: 1, minHeight: 0 }}>
				{[
					{ t: '能重跑', c: colors.green, fg: colors.black, d: '跑两次和跑一次结果一样 → 让看门狗重试' },
					{ t: '不能重跑', c: colors.red, fg: colors.white, d: '第一版先降级成「只提议不生效」' },
					{ t: '不确定', c: colors.dark, fg: colors.white, d: '当成不能重跑处理' },
				].map((x, i) => (
					<motion.div
						key={x.t}
						initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.3, delay: 0.45 + i * 0.09 }}
						style={{ flex: 1, border, background: colors.white, boxShadow: '4px 4px 0 #000', display: 'flex', flexDirection: 'column', minHeight: 0 }}
					>
						<div style={{
							background: x.c, color: x.fg, padding: '6px 14px', borderBottom: border,
							fontSize: 20, fontWeight: 900, textAlign: 'center',
						}}>{x.t}</div>
						<div style={{ padding: '9px 14px', fontSize: 18, lineHeight: 1.4, color: '#555', flex: 1 }}>{x.d}</div>
					</motion.div>
				))}
			</div>

			<Verdict bg={colors.dark} size={26} style={{ padding: '13px 26px' }}>
				「重试」不是勇气问题，是<span style={{ color: colors.yellow }}>幂等</span>问题。
			</Verdict>

			<Note>
				⚠️ <strong>云端没有中间这一层</strong> —— 任务是托管的，你插不进自己的脚本。
				那就反过来：不是「收到坏消息才报警」，是<strong>「该收到的没收到就报警」</strong>。
			</Note>
		</Page>
	);
}
