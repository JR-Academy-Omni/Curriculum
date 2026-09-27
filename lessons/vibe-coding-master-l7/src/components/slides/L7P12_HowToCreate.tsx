import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, fonts, border, shadow } from '../ui';

// P12：把它落盘 —— 怎么建一个子 Agent
// SoT：蓝图 v1.0 §18.1 四种生成方式 + §18.3 三档调用
//
// ⚠️ 数据纪律例外（蓝图 §16.3）：
//    这是全 deck **唯一**出现具体路径和命令的一页。理由：不知道文件放哪、
//    不知道怎么触发，学员回去就落不了地——判断线再对也没用。
//    路径和调用语法是稳定的结构事实，会变的（版本行为、参数细节）留 §18 口播。
const WAYS = [
	{
		n: '①', t: '让它替你写', when: '日常首选',
		how: '描述你要什么 + 存哪里，它把文件写出来',
		c: colors.green,
	},
	{
		n: '②', t: '自己手写', when: '要 commit 进仓库',
		how: '直接建 md 文件，改完几秒生效不用重启',
		c: colors.blue,
	},
	{
		n: '③', t: '临时传入', when: '课堂 / 一次性',
		how: '启动时传进去，只对本次会话生效，不落盘',
		c: colors.purple,
	},
];

export default function L7P12_HowToCreate() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner split>
				<div style={{ flex: '0 0 46%' }}>
					<div style={{ display: 'flex', gap: 10, marginBottom: 8 }}>
						<Tag bg={colors.blue}>从一次性到可复用</Tag>
					</div>
					<Title size="38px" style={{ marginBottom: 6 }}>
						把它<span style={{ background: colors.yellow, padding: '0 8px' }}>落盘</span>
					</Title>
					<p style={{ fontSize: 16, color: '#555', fontWeight: 500, marginBottom: 14 }}>
						前面那种是当场说一次。这一页是让它<strong>变成一个能反复用的角色</strong>。
					</p>

					<div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 16 }}>
						{WAYS.map((w, i) => (
							<motion.div
								key={w.n}
								initial={{ opacity: 0, x: -18 }} animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.33, delay: 0.12 + i * 0.11 }}
								style={{ display: 'flex', border, boxShadow: '3px 3px 0 #000', background: colors.white }}
							>
								<div style={{
									flex: '0 0 38px', background: w.c, color: colors.white,
									display: 'flex', alignItems: 'center', justifyContent: 'center',
									fontSize: 17, fontWeight: 700,
								}}>{w.n}</div>
								<div style={{ flex: 1, padding: '9px 13px' }}>
									<div style={{ display: 'flex', alignItems: 'baseline', gap: 9 }}>
										<span style={{ fontSize: 15.5, fontWeight: 800, color: colors.dark }}>{w.t}</span>
										<span style={{ fontSize: 12, color: w.c, fontWeight: 700 }}>{w.when}</span>
									</div>
									<div style={{ fontSize: 13, color: '#666', lineHeight: 1.45 }}>{w.how}</div>
								</div>
							</motion.div>
						))}
					</div>

					<motion.div
						initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4, delay: 0.5 }}
						style={{ border, boxShadow: shadow, background: colors.white }}
					>
						<div style={{ background: colors.dark, color: colors.white, padding: '8px 14px', fontFamily: fonts.mono, fontSize: 12, fontWeight: 700, letterSpacing: 1.2 }}>
							放哪决定谁能用
						</div>
						<div style={{ padding: '12px 15px', fontFamily: fonts.mono, fontSize: 13, lineHeight: 1.9 }}>
							<span style={{ color: colors.blue, fontWeight: 700 }}>.claude/agents/</span>
							<span style={{ color: '#888', marginLeft: 10 }}>项目级 · 能 commit · 全班共享</span><br />
							<span style={{ color: colors.purple, fontWeight: 700 }}>~/.claude/agents/</span>
							<span style={{ color: '#888', marginLeft: 10 }}>个人级 · 你所有项目</span>
						</div>
						<div style={{ padding: '10px 15px', borderTop: '2px solid #f0f0f0', fontSize: 13.5, color: '#555', lineHeight: 1.5 }}>
							同名时<strong>项目级赢</strong>。身份只看文件里的 name，跟目录层级无关。
						</div>
					</motion.div>
				</div>

				<div style={{ flex: 1, minWidth: 0 }}>
					<div style={{ fontFamily: fonts.mono, fontSize: 12, color: colors.green, letterSpacing: 1.4, fontWeight: 700, marginBottom: 9 }}>
						建完怎么触发它 · 三档强制力递增
					</div>

					<motion.div
						initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4, delay: 0.25 }}
						style={{
							border, boxShadow: shadow, background: colors.dark, color: '#e8e8f0',
							padding: '15px 17px', fontFamily: fonts.mono, fontSize: 13, lineHeight: 2, marginBottom: 16,
						}}
					>
						<span style={{ color: '#666' }}># ① 点名 —— 它自己决定派不派，会漏</span><br />
						用 readonly-verifier 看一下这次改动<br />
						<br />
						<span style={{ color: '#666' }}># ② @ 提及 —— 保证这个角色跑</span><br />
						<span style={{ color: colors.green, fontWeight: 700 }}>@agent-readonly-verifier</span><br />
						<br />
						<span style={{ color: '#666' }}># ③ 整个会话跑成它</span><br />
						<span style={{ color: colors.yellow, fontWeight: 700 }}>claude --agent readonly-verifier</span>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4, delay: 0.5 }}
						style={{ border, boxShadow: shadow, background: '#fff2f2', padding: '13px 16px', marginBottom: 14 }}
					>
						<div style={{ fontFamily: fonts.mono, fontSize: 11.5, color: colors.red, letterSpacing: 1.3, fontWeight: 700, marginBottom: 6 }}>
							⚠ 一个会浪费你十分钟的坑
						</div>
						<div style={{ fontSize: 15, fontWeight: 700, color: colors.dark, lineHeight: 1.55, marginBottom: 5 }}>
							<span style={{ fontFamily: fonts.mono }}>/agents</span> 已经不是创建向导了。
						</div>
						<div style={{ fontSize: 13.5, color: '#666', lineHeight: 1.55 }}>
							跑它只会提示你去问 Claude 或直接编辑目录。
							网上不少教程还在教那个向导——<strong>那个已经没了</strong>。
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4, delay: 0.68 }}
						style={{ border, boxShadow: shadow, background: colors.yellow, padding: '13px 16px', marginBottom: 14 }}
					>
						<div style={{ fontSize: 16, fontWeight: 800, color: colors.black, lineHeight: 1.55, marginBottom: 6 }}>
							什么时候值得落盘？
						</div>
						<div style={{ fontSize: 14, color: '#665', lineHeight: 1.6 }}>
							文件里装的是<strong>每次都一样</strong>的部分：职责、工具边界、输出格式、判据。
							<br />
							<strong>每次不一样的还是得当场说</strong>——这次查哪个目录、这次已排除了什么。
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}
						style={{ fontSize: 13, color: '#999', lineHeight: 1.55, textAlign: 'center', fontStyle: 'italic' }}
					>
						※ 这是全课唯一一页出现具体路径和命令 —— 因为不知道文件放哪就落不了地。<br />
						其余按钮、开关、版本差异一律以你上课当天试出来的为准。
					</motion.div>
				</div>
			</Inner>
		</Slide>
	);
}
