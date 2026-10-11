import { motion } from 'framer-motion';
import { Page, ActBadge, Code, ChatSignal, colors, fonts, border, radii } from '../deck';

/**
 * P17 · 动手⑥ 装到一个跟你这台不一样的环境上（✅✅ 全课最硬一处）
 *
 * 🔴 PRD §0.7 铁律：绝不能让学员拿日常配置做实验。开口第一件事就是说安全。
 * 🔴 全课唯一必须等到八成以上才能往下的环节。
 * 四条命令全部实测通过（2026-10-11 · Claude Code 2.1.296），清理后真实配置 md5 不变。
 */
const STEPS = [
	{ n: '1', t: '建一个干净的环境', d: '建完会告诉你里面装了什么 —— 答案是什么都没有。那就是干净的样子。' },
	{ n: '2', t: '把你自己的包当市场加进来', d: '注意参数是一个本地路径，不是网址。市场不一定要在 GitHub 上。' },
	{ n: '3', t: '装', d: '写法跟你刚才装别人东西的时候一模一样：插件名，at 符号，市场名。' },
	{ n: '4', t: '验证', d: '用刚才那个办法 —— 不看提示，看清单。' },
];

export default function L15P17_CleanProfile() {
	return (
		<Page bg={colors.dark}>
			<ActBadge act={3} mode="动手 ⑥ ⭐⭐" />

			<motion.div
				initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}
				style={{
					alignSelf: 'flex-start', padding: '10px 20px', background: colors.green,
					border, borderRadius: radii.pill, marginBottom: 18,
				}}
			>
				<span style={{ fontFamily: fonts.mono, fontSize: 17, fontWeight: 800, letterSpacing: 1 }}>
					隔离环境 · 不会动你平时的配置 · 清理后一模一样
				</span>
			</motion.div>

			<h2 style={{
				fontFamily: fonts.heading, fontSize: 44, fontWeight: 900, letterSpacing: -1.5,
				color: colors.white, lineHeight: 1.2, margin: 0,
			}}>
				把你的包装到一台<span style={{ color: colors.yellow }}>不是你这台</span>的环境上
			</h2>

			<div style={{ display: 'flex', gap: 22, marginTop: 22, alignItems: 'flex-start' }}>
				<motion.div
					initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.25, duration: 0.45 }}
					style={{ flex: 1.3 }}
				>
					<Code
						size={20}
						code={`bash p17-clean-profile/clean-profile.sh new
bash p17-clean-profile/clean-profile.sh add ./p13-my-package
bash p17-clean-profile/clean-profile.sh install my-handover@my-package
bash p17-clean-profile/clean-profile.sh verify my-handover`}
						wrap
					/>
				</motion.div>

				<div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 9 }}>
					{STEPS.map((s, i) => (
						<motion.div
							key={s.n}
							initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }}
							transition={{ delay: 0.4 + i * 0.1, duration: 0.4 }}
							style={{
								display: 'flex', gap: 13, alignItems: 'flex-start',
								background: 'rgba(255,255,255,.07)', border: `2px solid rgba(255,255,255,.26)`,
								borderRadius: radii.card, padding: '11px 15px',
							}}
						>
							<span style={{
								width: 30, height: 30, flexShrink: 0, borderRadius: radii.pill,
								background: colors.yellow, color: colors.black, textAlign: 'center', lineHeight: '30px',
								fontFamily: fonts.heading, fontSize: 17, fontWeight: 900,
							}}>{s.n}</span>
							<div>
								<div style={{ fontSize: 20, fontWeight: 800, color: colors.white }}>{s.t}</div>
								<div style={{ fontSize: 16, color: 'rgba(255,255,255,.58)', lineHeight: 1.5, marginTop: 3 }}>{s.d}</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>

			<ChatSignal>
				跑通了发 <strong style={{ color: colors.yellow }}>1</strong> · 卡住了发 <strong style={{ color: colors.yellow }}>2</strong> 加一个词
			</ChatSignal>
		</Page>
	);
}
