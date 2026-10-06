import { motion } from 'framer-motion';
import { Slide, Inner, Half, Title, colors, fonts, border, shadowSm } from '../ui';
import { ModuleTag, Note, Terminal, Source } from './_shared';

// /context 里会看到的几层（对应官方 context-window 文档）
const layers = [
	{ name: 'System prompt', desc: '核心指令，你看不到，但每次都带', stable: true },
	{ name: 'System tools', desc: 'Read / Edit / Bash 等工具的定义', stable: true },
	{ name: 'MCP tools', desc: '默认只列名字，用到时才加载完整定义', stable: true },
	{ name: 'Memory files', desc: 'CLAUDE.md、auto memory，会话开始时读入', stable: true },
	{ name: 'Messages', desc: '你的消息、回答、读过的文件、工具结果', stable: false },
	{ name: 'Autocompact buffer', desc: '预留的空间：给后面的输出和 compact 用', stable: null },
];

// M1 讲 + 跑：用 /context 看真实的 Token Budget
export default function S08_M1Context() {
	return (
		<Slide bg={colors.white}>
			<Inner split>
				<Half style={{ flex: 0.9 }}>
					<ModuleTag id="M1" phase="teach" />
					<Title size="50px" style={{ marginBottom: 16 }}>跑 /context：一次请求里装了什么</Title>
					<Terminal lines={['$ cd w2-lab && claude', '# 进入会话后输入：', '$ /context']} />
					<Note style={{ marginTop: 20, fontSize: 22 }}>
						Context window 是一个总预算：输入和输出共用。还没说话，前面几层已经占了一块
					</Note>
					<p style={{ marginTop: 14, fontSize: 22, fontWeight: 700, lineHeight: 1.5 }}>
						老师现场跑一次，大家对照自己的数字：哪一层最大？
					</p>
				</Half>

				<Half style={{ flex: 1.1 }}>
					{layers.map((l, i) => (
						<motion.div
							key={l.name}
							initial={{ opacity: 0, x: 30 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.3, delay: 0.2 + i * 0.1 }}
							style={{ display: 'grid', gridTemplateColumns: '250px 1fr', marginBottom: 10, border, boxShadow: shadowSm }}>
							<div style={{
								padding: '10px 14px', borderRight: border, fontFamily: fonts.mono, fontSize: 18, fontWeight: 700,
								background: l.stable === true ? colors.green : l.stable === false ? colors.blue : colors.yellow,
							}}>{l.name}</div>
							<div style={{ padding: '10px 14px', background: colors.white, fontSize: 19, fontWeight: 600, lineHeight: 1.4 }}>{l.desc}</div>
						</motion.div>
					))}
					<p style={{ marginTop: 6, fontSize: 17, fontWeight: 600, opacity: 0.75 }}>
						绿色 = 基本不变（后面 M5 的稳定前缀）· 蓝色 = 每轮都在长 · 黄色 = 预留
					</p>
					<Source>分层参考 Claude Code 官方文档 Explore the context window；/context 的具体分类名称以你本机版本为准。</Source>
				</Half>
			</Inner>
		</Slide>
	);
}
