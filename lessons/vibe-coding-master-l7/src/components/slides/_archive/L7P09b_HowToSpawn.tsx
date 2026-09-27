import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, fonts, border, shadow } from '../ui';
import { PromptBox } from '../PromptBox';

// P09b：派一个 Subagent —— 你实际要打什么字，以及为什么这么组词
// SoT：蓝图 §9.3 的好 brief 示例 + §18.1 三档调用
const LEVELS = [
	{ n: '①', how: '点名', eg: '"用只读验收员看一下这次改动"', result: '它自己决定派不派', ok: false },
	{ n: '②', how: '@ 提及', eg: '@ 选中那个角色', result: '保证这个角色跑', ok: true },
	{ n: '③', how: '整会话', eg: '启动时就指定角色', result: '主线程直接变成它', ok: true },
];

const ANATOMY = [
	{ line: '只读排查 src/api/auth/', why: '边界落在字面上 —— 它读不到你和主 Agent 的对话' },
	{ line: '不要改文件，不要排查前端或数据库', why: '**否定句**显式收窄。Agent 默认倾向顺手多做' },
	{ line: '每条附 文件:行号 和触发路径', why: '证据格式**前置**。不前置就只能拿到自然语言总结，没法验收' },
	{ line: '列出未检查范围', why: '逼出 not_checked。没这句你不知道它跳过了什么' },
	{ line: '若证据不足，返回「无法判断 + 缺什么证据」', why: '给「不知道」一个**出口**。不给出口，它就编' },
];

export default function L7P09b_HowToSpawn() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner split>
				<div style={{ flex: '0 0 44%' }}>
					<div style={{ display: 'flex', gap: 10, marginBottom: 8 }}>
						<Tag bg={colors.blue}>结构 A · Subagent</Tag>
						<Tag bg={colors.dark}>实操</Tag>
					</div>
					<Title size="36px" style={{ marginBottom: 12 }}>
						你实际要<span style={{ background: colors.yellow, padding: '0 8px' }}>打什么字</span>
					</Title>

					<div style={{ fontFamily: fonts.mono, fontSize: 12, color: '#888', letterSpacing: 1.4, fontWeight: 700, marginBottom: 8 }}>
						三档调用 · 强制力递增
					</div>
					<div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 16 }}>
						{LEVELS.map((l, i) => (
							<motion.div
								key={l.n}
								initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.32, delay: 0.12 + i * 0.1 }}
								style={{ display: 'flex', border, boxShadow: '3px 3px 0 #000', background: colors.white }}
							>
								<div style={{
									flex: '0 0 34px', background: l.ok ? colors.green : '#ddd',
									color: l.ok ? colors.black : '#888',
									display: 'flex', alignItems: 'center', justifyContent: 'center',
									fontSize: 15, fontWeight: 700,
								}}>{l.n}</div>
								<div style={{ flex: 1, padding: '7px 12px' }}>
									<div style={{ fontSize: 15, fontWeight: 800, color: colors.dark }}>
										{l.how}
										<span style={{ marginLeft: 8, fontFamily: fonts.mono, fontSize: 11.5, fontWeight: 400, color: '#999' }}>{l.eg}</span>
									</div>
									<div style={{ fontSize: 12.5, color: l.ok ? colors.green : colors.red, fontWeight: 700, lineHeight: 1.4 }}>
										{l.result}
									</div>
								</div>
							</motion.div>
						))}
					</div>

					<motion.div
						initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4, delay: 0.5 }}
						style={{
							padding: '13px 16px', background: colors.dark, color: colors.white,
							border, boxShadow: shadow, fontSize: 16, fontWeight: 700, lineHeight: 1.55,
						}}
					>
						① 和 ② 的差别本身就是教学点：<br />
						<span style={{ color: colors.yellow }}>「我说了」不等于「它照做了」。</span>
					</motion.div>
				</div>

				<div style={{ flex: 1, minWidth: 0 }}>
					<motion.div
						initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4, delay: 0.2 }}
						style={{ marginBottom: 14 }}
					>
						<PromptBox
							label="一次性委派 · 不建文件也能派"
							accent={colors.blue}
							text={`用一个 subagent 只读排查 src/api/auth/，判断 refresh token 轮换是否可能造成偶发 401。

返回最多 3 条结论，每条附 文件:行号 和触发路径，并列出未检查范围。
不要改文件，不要排查前端或数据库。
若证据不足，返回「无法判断 + 缺什么证据」。`}
						/>
					</motion.div>

					<div style={{ fontFamily: fonts.mono, fontSize: 12, color: colors.red, letterSpacing: 1.4, fontWeight: 700, marginBottom: 8 }}>
						为什么这么组词 —— 这一层比 prompt 本身值钱
					</div>
					<div style={{ border, boxShadow: shadow, background: colors.white }}>
						{ANATOMY.map((a, i) => (
							<motion.div
								key={i}
								initial={{ opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.3, delay: 0.4 + i * 0.09 }}
								style={{
									display: 'flex', alignItems: 'stretch',
									borderBottom: i < ANATOMY.length - 1 ? '2px solid #eee' : 'none',
								}}
							>
								<div style={{
									flex: '0 0 46%', padding: '9px 13px', fontFamily: fonts.mono, fontSize: 12.5,
									color: colors.dark, lineHeight: 1.4, display: 'flex', alignItems: 'center',
									background: '#f7f7f7', fontWeight: 700,
								}}>
									{a.line}
								</div>
								<div style={{ flex: 1, padding: '9px 13px', fontSize: 13, color: '#555', borderLeft: '2px solid #eee', lineHeight: 1.45, display: 'flex', alignItems: 'center' }}>
									<span dangerouslySetInnerHTML={{ __html: a.why.replace(/\*\*(.+?)\*\*/g, '<strong style="color:#10162f">$1</strong>') }} />
								</div>
							</motion.div>
						))}
					</div>

					<motion.div
						initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.95 }}
						style={{ marginTop: 12, fontSize: 15, fontWeight: 700, color: colors.dark, textAlign: 'center' }}
					>
						最后一条最容易漏 —— <span style={{ background: colors.yellow, padding: '2px 8px' }}>不给出口，等于逼它猜。</span>
					</motion.div>
				</div>
			</Inner>
		</Slide>
	);
}
