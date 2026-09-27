import { motion } from 'framer-motion';
import { ActBadge, Instruction, colors, fonts, border } from '../deck';

// P04 · 现在，让它往你的 .env 里加一行 🎬 学员触发
// 🔴 全节高光。deck 上只有这一句指令和一个大空白区（蓝图 §11.1）。
//    不许放结果截图 —— 放了学员就低头看屏幕，不看自己终端。
// 🔴 讲师说完就闭嘴，让教室里那个「哦」自己传开。
// 🔥 收口回收埋点 1：「你刚才没有跟它商量。」
export default function L12P04_TriggerIt() {
	return (
		<div style={{ width: '100%', height: '100%', position: 'relative' }}>
			<ActBadge act={2} mode="🎬 你自己触发" />
			<Instruction kicker="现在">
				让它往你的 <span style={{ color: colors.yellow, fontFamily: fonts.mono }}>.env</span> 里
				<br />
				加一行注释。
			</Instruction>

			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 1.4, duration: 0.7 }}
				style={{
					position: 'absolute', bottom: 80, left: 0, right: 0, justifyContent: 'center',
					display: 'flex', gap: 14, alignItems: 'center',
				}}
			>
				<span style={{ fontSize: 18, color: 'rgba(255,255,255,0.42)' }}>
					看到这句的 → 群里打个 <b style={{ color: colors.yellow }}>1</b>
				</span>
				<code style={{
					fontFamily: fonts.mono, fontSize: 19, fontWeight: 700,
					padding: '9px 18px', background: colors.red, color: colors.white, border,
				}}>
					Blocked: .env matches pattern '.env'
				</code>
			</motion.div>

			<div style={{
				position: 'absolute', bottom: 52, left: 0, right: 0, display: 'flex', justifyContent: 'center',
				fontSize: 15, color: 'rgba(255,255,255,0.28)', fontFamily: fonts.mono,
			}}>
				没有 .env 的 → 改 package-lock.json，一样
			</div>
		</div>
	);
}
