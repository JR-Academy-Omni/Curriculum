import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, fonts, border, shadow } from '../ui';
import { PromptBox } from '../PromptBox';

// P13 Lab B：边做边互通 —— 三个竞争假设
// SoT：蓝图 §9.6
const ROLES = [
	{ k: 'A', role: 'Client investigator', job: '检查客户端缓存与刷新时序', color: colors.blue },
	{ k: 'B', role: 'API investigator', job: '检查服务端 token 轮换与错误路径', color: colors.green },
	{ k: 'C', role: 'Evidence challenger', job: '检查配置 / 测试复现，主动找能推翻 A、B 的证据', color: colors.orange },
];

const SCRIPT = [
	'A 发现一个时间戳，可能改变 B 的排查范围 —— 必须发消息给 B',
	'B 的初步结论与 C 的复现结果冲突 —— 双方附证据处理，不是各交报告',
	'Lead 据新证据更新任务板：关闭一个假设、重派一个验证任务',
	'Team 输出根因、排除证据、未解决风险和可执行验收',
];

export default function L7P13_LabB() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner split>
				<div style={{ flex: '0 0 52%' }}>
					<div style={{ display: 'flex', gap: 10, marginBottom: 8 }}>
						<Tag bg={colors.purple}>Lab B</Tag>
						<Tag bg={colors.dark}>全程只读</Tag>
					</div>
					<Title size="40px" style={{ marginBottom: 12 }}>
						边做<span style={{ background: colors.yellow, padding: '0 8px' }}>边互通</span>
					</Title>

					<motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.15 }}>
						<PromptBox
							label="统一问题"
							accent={colors.dark}
							text={`登录偶发 401 的根因是什么？

当前有客户端缓存、API token 轮换、测试环境配置三种竞争假设。找出根因，并排除另外两种。`}
						/>
					</motion.div>

					<div style={{ fontFamily: fonts.mono, fontSize: 12, color: '#888', letterSpacing: 1.4, fontWeight: 700, margin: '16px 0 8px' }}>
						三个初始角色
					</div>
					<div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
						{ROLES.map((r, i) => (
							<motion.div
								key={r.k}
								initial={{ opacity: 0, x: -18 }} animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.32, delay: 0.4 + i * 0.11 }}
								style={{ display: 'flex', border, boxShadow: '3px 3px 0 #000', background: colors.white }}
							>
								<div style={{
									flex: '0 0 44px', background: r.color, color: colors.white,
									display: 'flex', alignItems: 'center', justifyContent: 'center',
									fontFamily: fonts.mono, fontSize: 19, fontWeight: 700,
								}}>{r.k}</div>
								<div style={{ flex: 1, padding: '8px 14px' }}>
									<div style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 700, color: colors.dark }}>{r.role}</div>
									<div style={{ fontSize: 13.5, color: '#666', lineHeight: 1.4 }}>{r.job}</div>
								</div>
							</motion.div>
						))}
					</div>
				</div>

				<div style={{ flex: 1, minWidth: 0 }}>
					<div style={{ fontFamily: fonts.mono, fontSize: 12, color: colors.purple, letterSpacing: 1.4, fontWeight: 700, marginBottom: 10 }}>
						课堂脚本必须制造「通信有价值的时刻」
					</div>
					{SCRIPT.map((s, i) => (
						<motion.div
							key={i}
							initial={{ opacity: 0, x: 22 }} animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.35, delay: 0.3 + i * 0.12 }}
							style={{ display: 'flex', gap: 12, alignItems: 'flex-start', marginBottom: 13 }}
						>
							<span style={{
								flex: '0 0 auto', fontFamily: fonts.mono, fontSize: 13, fontWeight: 700,
								background: colors.purple, color: colors.white, padding: '5px 10px',
							}}>{i + 1}</span>
							<span style={{ fontSize: 15.5, fontWeight: 600, color: colors.dark, lineHeight: 1.5 }}>{s}</span>
						</motion.div>
					))}

					<motion.div
						initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4, delay: 0.85 }}
						style={{ marginTop: 8, border, boxShadow: shadow, background: '#fff2f2' }}
					>
						<div style={{ background: colors.red, color: colors.white, padding: '8px 14px', fontFamily: fonts.mono, fontSize: 12.5, fontWeight: 700, letterSpacing: 1.2 }}>
							Lab B 计时终点
						</div>
						<div style={{ padding: '12px 15px', fontSize: 15.5, lineHeight: 1.6, color: '#333' }}>
							<span style={{ color: colors.red, fontWeight: 800 }}>不是</span>成员都标记 done，
							<br />
							<span style={{ color: colors.green, fontWeight: 800 }}>而是</span>冲突已处理、根因有证据、
							排除项有反证、<strong>Lead 完成外部验收</strong>。
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.05 }}
						style={{
							marginTop: 14, padding: '12px 16px', background: colors.dark, color: colors.white,
							border, boxShadow: shadow, fontSize: 15.5, fontWeight: 700, lineHeight: 1.55,
						}}
					>
						讲评只问一句：<span style={{ color: colors.yellow }}>如果禁止成员互相通信，这个任务会在哪一步变慢或变差？</span>
						<div style={{ marginTop: 6, fontSize: 14, fontWeight: 500, opacity: 0.85 }}>
							答不出来，说明它本来就不值得用 Agent Team。
						</div>
					</motion.div>
				</div>
			</Inner>
		</Slide>
	);
}
