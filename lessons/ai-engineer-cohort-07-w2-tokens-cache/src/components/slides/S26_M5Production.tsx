import { motion } from 'framer-motion';
import { colors, fonts, radii } from '../ui';
import { Panel } from '../deck';
import { ModuleFrame, Source, line } from './_shared';

const breaks = ['换模型（/model）', '改 effort（多数模型）', '连接或移除 MCP server（工具定义一次性加载时）', '/compact', '升级 Claude Code（system prompt 变了）'];
const keeps = ['改仓库里的文件', '会话中途改 CLAUDE.md（要等 /clear 或重启才生效）', '切换 permission mode', '调用 skill 和命令', '/rewind 回到之前的轮次'];

function List({ title, items, bg, delay }: { title: string; items: string[]; bg: string; delay: number }) {
	return (
		<div style={{ border: line, borderRadius: radii.card, overflow: 'hidden', background: colors.white }}>
			<div style={{ padding: '8px 16px', background: bg, borderBottom: line, fontFamily: fonts.mono, fontSize: 17, fontWeight: 700, color: bg === colors.red ? colors.white : colors.black }}>{title}</div>
			{items.map((it, i) => (
				<motion.div key={it} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25, delay: delay + i * 0.08 }}
					style={{ padding: '8px 16px', borderBottom: i < items.length - 1 ? '1px solid rgba(16,22,47,.15)' : 'none', fontSize: 18, fontWeight: 600 }}>
					{it}
				</motion.div>
			))}
		</div>
	);
}

// M5 讲：Claude Code 团队的生产经验 —— 什么会让 cache 失效
export default function S26_M5Production() {
	return (
		<ModuleFrame id="M5" phase="teach" title="生产经验：Claude Code 怎么保护自己的 cache" titleSize={46}>
			<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 18 }}>
				<List title="✗ 会让 cache 失效" items={breaks} bg={colors.red} delay={0.15} />
				<List title="✓ 不影响 cache" items={keeps} bg={colors.green} delay={0.4} />
			</div>
			<Panel style={{ padding: '12px 20px', fontSize: 19, fontWeight: 700, lineHeight: 1.5 }}>
				团队的原则：稳定内容放前面；变化的信息放进 messages，不改 system prompt；对话中途不增删 tools、不换模型；把 cache 命中率当成和 uptime 一样重要的指标来监控
			</Panel>
			<Source>出自 Claude Code 官方文档 How Claude Code uses prompt caching；Anthropic 博客《Lessons from building Claude Code: Prompt caching is everything》（Thariq Shihipar，2026 年 4 月）。</Source>
		</ModuleFrame>
	);
}
