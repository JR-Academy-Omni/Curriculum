import { Slide, Inner, Half, Title, Tag, colors, fonts, border, shadow } from '../ui';
import { slideFromLeft, slideFromRight } from '../ui';
import { motion } from 'framer-motion';

const chapters = [
	'🚀 安装与第一个命令',
	'🛠️ 多文件编辑：杀手锏',
	'🌿 Git 工作流自动化',
	'🪝 Hooks：对的时机干对的事',
	'🔌 MCP：装上超能力插件',
	'🐛 调试：帮你定位 Bug',
	'📋 CLAUDE.md：让 AI 懂你的项目',
	'🧵 Worktree：多个 Claude 并行',
];

// 课后配套手册
export default function S27b_Handbook() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner split>
				<Half>
					<motion.div {...slideFromLeft}>
						<Tag bg={colors.dark}>课后配套 · 带回家照着做</Tag>
						<Title size="42px" style={{ marginTop: 14, lineHeight: 1.16 }}>
							这门课讲「为什么」,<br />这本手册讲<span style={{ background: colors.yellow, padding: '0 8px' }}>「怎么操作」</span>
						</Title>
						<p style={{ fontSize: 18, color: '#444', marginTop: 16, lineHeight: 1.6 }}>
							今天我们建的是 <b>框架</b>(SoT、记忆、ADLC、4 个 C);
							每一步的<b>逐条操作</b> —— 装环境、Hooks、MCP、Worktree 并行 ——
							全在这本 <b style={{ color: colors.red }}>8 章可复制手册</b>里。
						</p>
						<div style={{ marginTop: 16, background: colors.dark, color: colors.white, border, padding: '12px 18px', fontSize: 15, lineHeight: 1.5 }}>
							<span style={{ color: colors.yellow, fontWeight: 800 }}>《Claude Code 中文上手手册》</span><br />
							匠人学院自制(基于 jr-wiki 8 章原文),全中文、可复制 —— 课后微信群 / 公众号资料包领取。
						</div>
					</motion.div>
				</Half>
				<Half>
					<motion.div {...slideFromRight}
						style={{ background: colors.white, border, boxShadow: shadow, padding: '22px 24px' }}>
						<div style={{ fontFamily: fonts.mono, fontSize: 13, color: '#999', fontWeight: 800, marginBottom: 12 }}>📖 8 章目录</div>
						{chapters.map((c, i) => (
							<motion.div key={c}
								initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 + i * 0.07 }}
								style={{ display: 'flex', gap: 10, alignItems: 'center', padding: '7px 0', borderBottom: i < chapters.length - 1 ? '1px dashed #ddd' : 'none', fontSize: 16 }}>
								<span style={{ fontFamily: fonts.mono, fontSize: 12, fontWeight: 900, color: colors.red, width: 18 }}>{String(i + 1).padStart(2, '0')}</span>
								<span>{c}</span>
							</motion.div>
						))}
					</motion.div>
				</Half>
			</Inner>
		</Slide>
	);
}
