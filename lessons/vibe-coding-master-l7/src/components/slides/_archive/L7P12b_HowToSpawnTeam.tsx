import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, fonts, border, shadow } from '../ui';
import { PromptBox } from '../PromptBox';

// P12b：开一个 Team —— spawn prompt，以及那半句命脉
// SoT：蓝图 §18.2（生成方法、复用角色定义、计划审批、确认成型）
const CHECKS = [
	{ t: '看成员名单', d: '名单里有多个成员 = team 成型；只有你自己 = 拿到的是几个 Subagent' },
	{ t: '让两个成员互发一条消息', d: '收得到 = 通道是通的。这是两种结构唯一的硬区分' },
];

export default function L7P12b_HowToSpawnTeam() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner split>
				<div style={{ flex: '0 0 52%' }}>
					<div style={{ display: 'flex', gap: 10, marginBottom: 8 }}>
						<Tag bg={colors.purple}>结构 B · Agent Team</Tag>
						<Tag bg={colors.dark}>实操</Tag>
					</div>
					<Title size="36px" style={{ marginBottom: 6 }}>
						开一个 Team：<span style={{ background: colors.yellow, padding: '0 8px' }}>只有一句话</span>
					</Title>
					<p style={{ fontSize: 15.5, color: '#555', fontWeight: 500, marginBottom: 12 }}>
						没有命令，没有配置界面。你描述要什么样的队伍，它开人。
					</p>

					<motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.15 }}>
						<PromptBox
							label="开一支队伍"
							accent={colors.purple}
							text={`用户反馈登录偶发 401。开三个 teammate 各查一个假设：
客户端缓存 / API token 轮换 / 测试环境配置。

让它们互相对话、试图推翻彼此的理论，像一场科学辩论。
最后把达成的共识写进结论文档。`}
						/>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.45, delay: 0.5 }}
						style={{
							marginTop: 14, border, boxShadow: shadow, background: colors.dark, color: colors.white,
							padding: '14px 18px',
						}}
					>
						<div style={{ fontFamily: fonts.mono, fontSize: 11.5, color: colors.yellow, letterSpacing: 1.4, fontWeight: 700, marginBottom: 7 }}>
							这半句就是 Team 的全部意义
						</div>
						<div style={{ fontSize: 18, fontWeight: 800, lineHeight: 1.5, marginBottom: 8 }}>
							「让它们互相对话、<br />试图推翻彼此的理论」
						</div>
						<div style={{ fontSize: 14, lineHeight: 1.6, opacity: 0.88 }}>
							去掉它 → 你拿到三份互不相干的报告，
							也就是 <span style={{ color: colors.blue, fontWeight: 700 }}>Subagent，只是更贵</span>。
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.75 }}
						style={{ marginTop: 12, fontSize: 14.5, color: '#666', lineHeight: 1.6, padding: '10px 14px', border: '2px dashed #ccc' }}
					>
						<strong style={{ color: colors.dark }}>原理：</strong>
						单个 Agent 找到一个说得通的解释就停下来了（锚定）。
						让它们互相证伪，<strong>活下来的那个理论才更可能是真根因</strong>。
					</motion.div>
				</div>

				<div style={{ flex: 1, minWidth: 0 }}>
					<div style={{ fontFamily: fonts.mono, fontSize: 12, color: colors.green, letterSpacing: 1.4, fontWeight: 700, marginBottom: 9 }}>
						另外三句常用的
					</div>
					{[
						{ k: '复用已有角色', v: '用「只读验收员」这个角色开一个 teammate，审 auth 模块。' },
						{ k: '先出计划再动手', v: '动手前必须先过计划审批。只批带测试覆盖的计划。' },
						{ k: 'Lead 抢活时', v: '等你的 teammate 完成任务再继续。' },
					].map((s, i) => (
						<motion.div
							key={s.k}
							initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.33, delay: 0.25 + i * 0.1 }}
							style={{ border, boxShadow: '3px 3px 0 #000', background: colors.white, marginBottom: 9 }}
						>
							<div style={{ background: '#f2f2f2', padding: '5px 12px', fontSize: 12, fontWeight: 700, color: '#666', fontFamily: fonts.mono }}>
								{s.k}
							</div>
							<div style={{ padding: '8px 12px', fontSize: 14, color: colors.dark, lineHeight: 1.5, fontFamily: fonts.body }}>
								{s.v}
							</div>
						</motion.div>
					))}

					<motion.div
						initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4, delay: 0.65 }}
						style={{ marginTop: 16, border, boxShadow: shadow, background: '#fff2f2' }}
					>
						<div style={{ background: colors.red, color: colors.white, padding: '8px 14px', fontFamily: fonts.mono, fontSize: 12, fontWeight: 700, letterSpacing: 1.2 }}>
							开完必须验一次：真的是 Team 吗
						</div>
						<div style={{ padding: '11px 14px' }}>
							<div style={{ fontSize: 13.5, color: '#555', lineHeight: 1.55, marginBottom: 10 }}>
								工具有时会直接给你几个 Subagent，<strong style={{ color: colors.red }}>而面板上两者长得一样</strong>。
							</div>
							{CHECKS.map((c, i) => (
								<div key={c.t} style={{ display: 'flex', gap: 9, alignItems: 'flex-start', marginBottom: i === 0 ? 9 : 0 }}>
									<span style={{
										flex: '0 0 auto', fontFamily: fonts.mono, fontSize: 11.5, fontWeight: 700,
										background: colors.dark, color: colors.yellow, padding: '2px 7px',
									}}>{i + 1}</span>
									<div>
										<div style={{ fontSize: 14.5, fontWeight: 800, color: colors.dark }}>{c.t}</div>
										<div style={{ fontSize: 12.5, color: '#666', lineHeight: 1.45 }}>{c.d}</div>
									</div>
								</div>
							))}
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.95 }}
						style={{ marginTop: 12, fontSize: 15, fontWeight: 700, color: colors.dark, lineHeight: 1.5, textAlign: 'center' }}
					>
						当场问一句：<br />
						<span style={{ background: colors.yellow, padding: '2px 8px' }}>你怎么知道现在跑的是 Team？</span>
					</motion.div>
				</div>
			</Inner>
		</Slide>
	);
}
