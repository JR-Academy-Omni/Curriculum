import { Slide, Inner, Half, Title, Tag, colors, fonts, border, shadow } from '../ui';
import { motion } from 'framer-motion';

const types = [
	{ icon: '🛡️', t: '动作前拦截', d: '危险命令 / 写错目录，自动挡下', ev: 'PreToolUse' },
	{ icon: '✅', t: '动作后自动跑', d: '改完代码自动 lint / build / 测试', ev: 'PostToolUse' },
	{ icon: '🔔', t: '事件通知', d: '任务完成 / 卡住时提醒你来看', ev: 'Stop · Notification' },
];

// Hooks —— 自动化护栏 + 真实配置例子
export default function S23_Hooks() {
	return (
		<Slide bg={colors.dark}>
			<Inner style={{ flexDirection: 'column' }}>
				<motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
					<Tag bg={colors.green} color={colors.black}>武器 ③ 配套 · Hooks</Tag>
					<Title white size="44px" style={{ marginTop: 10 }}>
						Hooks：把规则变成<span style={{ color: colors.yellow }}>自动护栏</span>
					</Title>
					<p style={{ fontSize: 17, color: '#cfd3e6', marginTop: 8, maxWidth: 1080, lineHeight: 1.5 }}>
						CLAUDE.md 是「请你遵守」，Hooks 是「系统强制执行」—— 在工具调用前后挂钩子，<b style={{ color: colors.white }}>不靠 AI 自觉</b>。
					</p>
				</motion.div>

				<div style={{ display: 'flex', gap: 20, marginTop: 16, alignItems: 'stretch' }}>
					{/* 左：真实例子 */}
					<Half style={{ flex: 1.25 }}>
						<div style={{ fontFamily: fonts.mono, fontSize: 13, color: colors.green, fontWeight: 800, marginBottom: 6 }}>// .claude/settings.json — 两个真实 hook</div>
						<pre style={{ background: '#0b0f1e', color: '#aab0cc', fontFamily: fonts.mono, fontSize: 13, padding: '14px 16px', border, boxShadow: `6px 6px 0 ${colors.green}`, whiteSpace: 'pre-wrap', lineHeight: 1.55, margin: 0 }}>
{`{
  "hooks": {
    `}<span style={{ color: colors.red }}>"PreToolUse"</span>{`: [{
      "matcher": `}<span style={{ color: '#e7d199' }}>"Bash"</span>{`,
      "hooks": [{ "type": "command",
        "command": `}<span style={{ color: '#e7d199' }}>"guard-destructive.sh"</span>{` }]
    }],
    `}<span style={{ color: colors.green }}>"PostToolUse"</span>{`: [{
      "matcher": `}<span style={{ color: '#e7d199' }}>"Edit|Write"</span>{`,
      "hooks": [{ "type": "command",
        "command": `}<span style={{ color: '#e7d199' }}>"bun run build"</span>{` }]
    }]
  }
}`}
						</pre>
						<div style={{ marginTop: 10, fontSize: 13.5, color: '#cfd3e6', lineHeight: 1.6 }}>
							<div><span style={{ color: colors.red, fontWeight: 800 }}>PreToolUse · Bash</span> → AI 每次跑命令前先过脚本，命中 <code style={{ color: colors.yellow }}>git reset --hard</code> / <code style={{ color: colors.yellow }}>rm -rf</code> 就拦。</div>
							<div style={{ marginTop: 4 }}><span style={{ color: colors.green, fontWeight: 800 }}>PostToolUse · Edit|Write</span> → 每次改完文件自动 build，编译不过立刻知道。</div>
						</div>
					</Half>

					{/* 右：三类触发时机 */}
					<Half style={{ flex: 0.9, gap: 11, justifyContent: 'flex-start' }}>
						<div style={{ fontFamily: fonts.mono, fontSize: 13, color: '#8890b0', fontWeight: 800 }}>三类常用触发时机</div>
						{types.map((x, i) => (
							<motion.div key={x.t}
								initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 + i * 0.13 }}
								style={{ background: colors.white, border, boxShadow: shadow, padding: '11px 14px' }}>
								<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
									<span style={{ fontSize: 16, fontWeight: 900 }}>{x.icon} {x.t}</span>
									<span style={{ fontFamily: fonts.mono, fontSize: 11, fontWeight: 800, color: colors.white, background: colors.dark, padding: '3px 7px' }}>{x.ev}</span>
								</div>
								<div style={{ fontSize: 13.5, color: '#666', marginTop: 5 }}>{x.d}</div>
							</motion.div>
						))}
					</Half>
				</div>

				<motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}
					style={{ marginTop: 14, fontSize: 17, color: colors.yellow, fontWeight: 800, textAlign: 'center' }}>
					「自动化行为」要的不是记忆、不是 prompt —— 是 Hook。这条最容易被搞错。
				</motion.p>
			</Inner>
		</Slide>
	);
}
