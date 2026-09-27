import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, fonts, border, shadow } from '../ui';

// P08：今天这套工具真正支持什么 —— 能力预检卡
// SoT：蓝图 §3.1（v0.4 已补最后两行）+ §16.2 三条产品事实
// 数据纪律：deck 上不出现任何参数名 / 版本号 / 开关字面量，那些留老师备课材料（蓝图 §18）
const ROWS = [
	{ cap: '新 Agent 是否继承主对话历史', impact: 'brief 里要补多少 context' },
	{ cap: '是否自动读取项目规则文件', impact: '哪些规则必须重写进 brief' },
	{ cap: '多个 Agent 用同一还是隔离工作副本', impact: '能否安全并行写' },
	{ cap: '子任务能否继续补充信息或恢复', impact: '「一次交清」的严格程度' },
	{ cap: 'Agent 间如何通信', impact: '汇总与冲突处理方式' },
	{ cap: '工具与权限是否继承', impact: '任务能否真正执行与验证' },
	{ cap: '是否允许嵌套委派', impact: '本节 demo 的最大深度' },
	{ cap: '协作结构是否要显式开启', impact: '不开就没有 Lab B', hot: true },
	{ cap: '怎么确认结构真的成型了', impact: '防止 Subagent 冒充 Team', hot: true },
];

const FACTS = [
	{ n: '01', t: '它可能默认就是关的', d: 'Team 这类结构在不少工具上是「实验特性、默认关闭」。不开，你写多好的指令都不会有队伍。' },
	{ n: '02', t: '它可能拿 Subagent 冒充 Team', d: '工具有时会直接派几个互不通信的 Subagent，而面板上两者长得一样 —— 看面板确认不了。' },
	{ n: '03', t: 'Team 通常不隔离工作副本', d: '成员共用同一份文件。并行写靠的是你划的所有权，不是工具帮你挡。' },
];

export default function L7P08_CapabilityCheck() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner split>
				<div style={{ flex: '0 0 55%' }}>
					<div style={{ display: 'flex', gap: 10, marginBottom: 8 }}>
						<Tag bg={colors.dark}>老师当天实测</Tag>
					</div>
					<Title size="38px" style={{ marginBottom: 4 }}>
						今天这套工具<span style={{ background: colors.yellow, padding: '0 8px' }}>真正支持什么</span>
					</Title>
					<p style={{ fontSize: 16, color: '#555', fontWeight: 500, marginBottom: 12 }}>
						这张卡的作用不是教设置，是建立一条职业习惯。
					</p>

					<div style={{ display: 'flex', background: colors.dark, color: colors.white, border, borderBottom: 'none' }}>
						<div style={{ flex: 1.4, padding: '8px 12px', fontFamily: fonts.mono, fontSize: 11.5, letterSpacing: 1.2, fontWeight: 700 }}>能力</div>
						<div style={{ flex: '0 0 96px', padding: '8px 10px', fontFamily: fonts.mono, fontSize: 11.5, letterSpacing: 1.2, fontWeight: 700, borderLeft: '2px solid rgba(255,255,255,0.2)', color: colors.yellow }}>实测</div>
						<div style={{ flex: 1, padding: '8px 12px', fontFamily: fonts.mono, fontSize: 11.5, letterSpacing: 1.2, fontWeight: 700, borderLeft: '2px solid rgba(255,255,255,0.2)' }}>课堂影响</div>
					</div>
					<div style={{ border, boxShadow: shadow, background: colors.white }}>
						{ROWS.map((r, i) => (
							<motion.div
								key={r.cap}
								initial={{ opacity: 0, x: -14 }} animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.28, delay: 0.08 + i * 0.055 }}
								style={{
									display: 'flex', alignItems: 'stretch',
									borderBottom: i < ROWS.length - 1 ? '1.5px solid #eee' : 'none',
									background: r.hot ? '#fffbe8' : colors.white,
								}}
							>
								<div style={{ flex: 1.4, padding: '7px 12px', fontSize: 13.5, fontWeight: 600, color: colors.dark, display: 'flex', alignItems: 'center', lineHeight: 1.35 }}>
									{r.hot && <span style={{ color: colors.red, marginRight: 5, fontWeight: 900 }}>★</span>}{r.cap}
								</div>
								<div style={{ flex: '0 0 96px', borderLeft: '1.5px solid #eee', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
									<span style={{ width: '76%', height: 2, background: '#ddd' }} />
								</div>
								<div style={{ flex: 1, padding: '7px 12px', fontSize: 12.5, color: '#777', borderLeft: '1.5px solid #eee', display: 'flex', alignItems: 'center', lineHeight: 1.35 }}>
									{r.impact}
								</div>
							</motion.div>
						))}
					</div>
				</div>

				<div style={{ flex: 1, minWidth: 0 }}>
					<div style={{ fontFamily: fonts.mono, fontSize: 12, color: colors.red, letterSpacing: 1.5, fontWeight: 700, marginBottom: 10 }}>
						今天必须当场明示的三件事
					</div>
					{FACTS.map((f, i) => (
						<motion.div
							key={f.n}
							initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.4, delay: 0.35 + i * 0.14 }}
							style={{ border, boxShadow: shadow, background: colors.white, marginBottom: 12 }}
						>
							<div style={{ display: 'flex', alignItems: 'center', gap: 10, background: colors.dark, padding: '7px 13px' }}>
								<span style={{ fontFamily: fonts.mono, fontSize: 12, fontWeight: 700, color: colors.yellow }}>{f.n}</span>
								<span style={{ fontSize: 15.5, fontWeight: 800, color: colors.white }}>{f.t}</span>
							</div>
							<div style={{ padding: '10px 13px', fontSize: 14, lineHeight: 1.55, color: '#444' }}>{f.d}</div>
						</motion.div>
					))}

					<motion.div
						initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4, delay: 0.85 }}
						style={{ border, boxShadow: shadow, background: colors.yellow, padding: '13px 16px' }}
					>
						<div style={{ fontSize: 16.5, fontWeight: 800, color: colors.black, lineHeight: 1.5 }}>
							不要假设协作能力，<br />先做 capability check。
						</div>
						<div style={{ marginTop: 8, fontSize: 13.5, color: '#665', lineHeight: 1.5 }}>
							今天教的是<strong>稳定的通信结构</strong>；具体按钮、开关、并发上限换个版本就变，一律以你上课当天试出来的为准。
						</div>
					</motion.div>
				</div>
			</Inner>
		</Slide>
	);
}
