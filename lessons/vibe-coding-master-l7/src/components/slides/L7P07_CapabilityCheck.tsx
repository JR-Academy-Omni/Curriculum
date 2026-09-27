import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, fonts, border, shadow } from '../ui';

// P07：今天这套工具真正支持什么 —— 能力预检卡
// SoT：蓝图 v1.0 §3.1（7 行，Team 相关三行已随 Agent Team 移交 L8）
// 数据纪律：不出现参数名 / 版本号 / 开关字面量 —— 当天口播，细节见蓝图 §18
const ROWS = [
	{ cap: '新 Agent 是否继承主对话历史', impact: 'brief 里要补多少 context' },
	{ cap: '是否自动读取项目规则文件', impact: '哪些规则必须重写进 brief' },
	{ cap: '多个 Agent 用同一还是隔离工作副本', impact: '能否安全并行写' },
	{ cap: '子任务能否继续补充信息或恢复', impact: '「一次交清」的严格程度' },
	{ cap: '工具与权限是否继承', impact: '任务能否真正执行与验证' },
	{ cap: '是否允许嵌套委派', impact: '本节 demo 的最大深度' },
	{ cap: '子 Agent 默认用哪一档模型', impact: '下一页的选档判断能不能落地', hot: true },
];

export default function L7P07_CapabilityCheck() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner split>
				<div style={{ flex: '0 0 55%' }}>
					<div style={{ display: 'flex', gap: 10, marginBottom: 8 }}>
						<Tag bg={colors.dark}>老师当天实测</Tag>
					</div>
					<Title size="40px" style={{ marginBottom: 4 }}>
						今天这套工具<span style={{ background: colors.yellow, padding: '0 8px' }}>真正支持什么</span>
					</Title>
					<p style={{ fontSize: 16, color: '#555', fontWeight: 500, marginBottom: 14 }}>
						这张卡的作用不是教设置，是建立一条职业习惯。
					</p>

					<div style={{ display: 'flex', background: colors.dark, color: colors.white, border, borderBottom: 'none' }}>
						<div style={{ flex: 1.4, padding: '9px 13px', fontFamily: fonts.mono, fontSize: 11.5, letterSpacing: 1.2, fontWeight: 700 }}>能力</div>
						<div style={{ flex: '0 0 100px', padding: '9px 11px', fontFamily: fonts.mono, fontSize: 11.5, letterSpacing: 1.2, fontWeight: 700, borderLeft: '2px solid rgba(255,255,255,0.2)', color: colors.yellow }}>实测</div>
						<div style={{ flex: 1, padding: '9px 13px', fontFamily: fonts.mono, fontSize: 11.5, letterSpacing: 1.2, fontWeight: 700, borderLeft: '2px solid rgba(255,255,255,0.2)' }}>课堂影响</div>
					</div>
					<div style={{ border, boxShadow: shadow, background: colors.white }}>
						{ROWS.map((r, i) => (
							<motion.div
								key={r.cap}
								initial={{ opacity: 0, x: -14 }} animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.3, delay: 0.1 + i * 0.07 }}
								style={{
									display: 'flex', alignItems: 'stretch',
									borderBottom: i < ROWS.length - 1 ? '1.5px solid #eee' : 'none',
									background: r.hot ? '#fffbe8' : colors.white,
								}}
							>
								<div style={{ flex: 1.4, padding: '9px 13px', fontSize: 14, fontWeight: 600, color: colors.dark, display: 'flex', alignItems: 'center', lineHeight: 1.35 }}>
									{r.hot && <span style={{ color: colors.red, marginRight: 5, fontWeight: 900 }}>★</span>}{r.cap}
								</div>
								<div style={{ flex: '0 0 100px', borderLeft: '1.5px solid #eee', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
									<span style={{ width: '76%', height: 2, background: '#ddd' }} />
								</div>
								<div style={{ flex: 1, padding: '9px 13px', fontSize: 13, color: '#777', borderLeft: '1.5px solid #eee', display: 'flex', alignItems: 'center', lineHeight: 1.35 }}>
									{r.impact}
								</div>
							</motion.div>
						))}
					</div>
				</div>

				<div style={{ flex: 1, minWidth: 0 }}>
					<div style={{ fontFamily: fonts.mono, fontSize: 12, color: colors.red, letterSpacing: 1.4, fontWeight: 700, marginBottom: 10 }}>
						今天必须当场明示的两件事
					</div>

					<motion.div
						initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.4, delay: 0.3 }}
						style={{ border, boxShadow: shadow, background: colors.white, marginBottom: 14 }}
					>
						<div style={{ background: colors.dark, padding: '8px 14px', display: 'flex', alignItems: 'center', gap: 10 }}>
							<span style={{ fontFamily: fonts.mono, fontSize: 12, fontWeight: 700, color: colors.yellow }}>01</span>
							<span style={{ fontSize: 15.5, fontWeight: 800, color: colors.white }}>继承是有选择的</span>
						</div>
						<div style={{ padding: '12px 14px', fontSize: 15, lineHeight: 1.65, color: '#444' }}>
							<strong style={{ color: colors.green }}>项目规则会自动到位</strong>，
							<strong style={{ color: colors.red }}>对话历史不会</strong>。
							<div style={{ marginTop: 7, fontSize: 13.5, color: '#777' }}>
								你在聊天里排除掉的那三个方向，它一个都不知道——这就是六格 brief 第 3 格存在的理由。
							</div>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.4, delay: 0.45 }}
						style={{ border, boxShadow: shadow, background: colors.white, marginBottom: 18 }}
					>
						<div style={{ background: colors.dark, padding: '8px 14px', display: 'flex', alignItems: 'center', gap: 10 }}>
							<span style={{ fontFamily: fonts.mono, fontSize: 12, fontWeight: 700, color: colors.yellow }}>02</span>
							<span style={{ fontSize: 15.5, fontWeight: 800, color: colors.white }}>能开几个不是问题</span>
						</div>
						<div style={{ padding: '12px 14px', fontSize: 15, lineHeight: 1.65, color: '#444' }}>
							累计上限、并发上限、嵌套层数——三个数都<strong>远大于</strong>今天要用的 3 路。
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4, delay: 0.65 }}
						style={{ border, boxShadow: shadow, background: colors.yellow, padding: '14px 17px' }}
					>
						<div style={{ fontSize: 17.5, fontWeight: 800, color: colors.black, lineHeight: 1.5, marginBottom: 8 }}>
							限制从来不是瓶颈，<br />判断力才是。
						</div>
						<div style={{ fontSize: 13.5, color: '#665', lineHeight: 1.55 }}>
							有人问「最多能开几个」，标准答复是：<strong>多到你不该问这个问题</strong>——
							该问的是「这一路值不值得开」。
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.85 }}
						style={{ marginTop: 14, fontSize: 14, color: '#888', lineHeight: 1.55, textAlign: 'center' }}
					>
						不要假设委派能力，<strong style={{ color: colors.dark }}>先做 capability check。</strong>
					</motion.div>
				</div>
			</Inner>
		</Slide>
	);
}
