import { motion } from 'framer-motion';
import { colors, fonts, border, shadow } from '../deck';

// P00 · 封面
// 🔴 线上直播，学员是陆续进来的，这一页是他们进来时看到的东西，
//    所以它要同时回答三件事：这是哪一节 / 今天要干什么 / 我会带走什么。
// 🔴 「带走什么」那三行是故意放上来的：动手课的出席动机在产物上，不在主题上。
// 🔴 承接句放在最下面，讲师照念，然后切下一页开始认领症状。
// 🔴 不放大纲，不放讲师介绍，第 8 分钟就要开始敲键盘了。
const TAKEAWAYS = [
	'一个从空目录长出来的规则仓库',
	'6 条检查，你说一句话，它写，你判它对不对',
	'一个被 CI 挡住的 PR',
];

export default function L13P00_Cover() {
	return (
		<div style={{
			width: '100%', height: '100%', background: colors.dark, position: 'relative',
			padding: '72px 80px', display: 'flex', flexDirection: 'column', justifyContent: 'center',
			overflow: 'hidden',
		}}>
			{/* 背景：一条极淡的「阶梯」暗纹，呼应全节框架，但不泄露内容 */}
			<div style={{
				position: 'absolute', right: 0, top: 0, bottom: 0, width: 560,
				display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 10,
				opacity: 0.045, pointerEvents: 'none',
			}}>
				{[0, 1, 2, 3, 4, 5, 6].map((i) => (
					<div key={i} style={{
						height: 46, background: colors.white,
						marginLeft: i * 34, border: `2px solid ${colors.white}`,
					}} />
				))}
			</div>

			<motion.div
				initial={{ opacity: 0, y: -14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
				style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 26 }}
			>
				<span style={{
					fontFamily: fonts.mono, fontSize: 15, fontWeight: 700, letterSpacing: 3,
					padding: '6px 14px', background: colors.yellow, color: colors.black, border,
				}}>
					Vibe Coding 大师课 · 第十三节
				</span>
				<span style={{
					fontFamily: fonts.mono, fontSize: 14, letterSpacing: 2,
					color: 'rgba(255,255,255,0.4)', border: '1px solid rgba(255,255,255,0.22)', padding: '5px 12px',
				}}>
					135 分钟 · 动手课
				</span>
			</motion.div>

			<motion.h1
				initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.65, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
				style={{
					fontFamily: fonts.heading, fontSize: 88, fontWeight: 900, lineHeight: 1.08,
					color: colors.white, letterSpacing: -3, maxWidth: 1180,
				}}
			>
				造一套<br />
				<span style={{ color: colors.yellow }}>让规矩成立</span>的系统
			</motion.h1>

			<motion.div
				initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.6 }}
				style={{ fontSize: 30, color: 'rgba(255,255,255,0.62)', marginTop: 22, lineHeight: 1.5 }}
			>
				把一条<b style={{ color: 'rgba(255,255,255,0.9)' }}>没人执行</b>的规矩，
				变成一个<b style={{ color: 'rgba(255,255,255,0.9)' }}>别人改不了</b>的东西
				<div style={{
					marginTop: 14, fontSize: 22, color: colors.yellow,
					borderLeft: `4px solid ${colors.yellow}`, paddingLeft: 16,
				}}>
					你们要的不是一堆 SOP，<b>是一套让 SOP 能被执行的系统</b>
				</div>
			</motion.div>

			<motion.div
				initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.85, duration: 0.6 }}
				style={{ display: 'flex', gap: 26, marginTop: 46, alignItems: 'flex-end' }}
			>
				<div style={{
					border: `3px solid ${colors.yellow}`, background: 'rgba(255,222,89,0.06)',
					padding: '18px 24px', boxShadow: shadow,
				}}>
					<div style={{
						fontFamily: fonts.mono, fontSize: 14, letterSpacing: 2,
						color: colors.yellow, marginBottom: 12,
					}}>
						今天你带走什么
					</div>
					{TAKEAWAYS.map((t, i) => (
						<div key={i} style={{ fontSize: 23, color: colors.white, lineHeight: 1.75 }}>
							<span style={{ color: colors.yellow, fontWeight: 700, marginRight: 10 }}>→</span>{t}
						</div>
					))}
				</div>

				<div style={{ flex: 1, minWidth: 0, paddingBottom: 6 }}>
					<div style={{
						fontSize: 25, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7,
						borderLeft: `4px solid rgba(255,255,255,0.18)`, paddingLeft: 20,
					}}>
						上一节，我们让<b style={{ color: 'rgba(255,255,255,0.8)' }}>一个 agent</b> 绕不过去。
						<br />
						今天，让<b style={{ color: colors.white }}>一整个团队</b>绕不过去。
					</div>
				</div>
			</motion.div>
		</div>
	);
}
