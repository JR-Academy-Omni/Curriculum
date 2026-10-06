import { motion } from 'framer-motion';
import { colors, fonts } from '../ui';
import { Panel, Label } from '../deck';
import { ModuleFrame, card } from './_shared';

const questions = [
	{ n: 'Q1', bg: colors.yellow, q: '这次模型调用看到了什么？', how: 'Token Budget · Context Governance' },
	{ n: 'Q2', bg: colors.blue, q: '哪些计算没有必要重复做？', how: 'Prefill / Decode · KV Cache · Prefix Cache · Response Cache' },
];

const facts = [
	'每次请求都带着很长的 system prompt 和 tool definitions → 稳定前缀',
	'会自动 compact 历史 → context governance',
	'有 CLAUDE.md 和 auto memory → Memory ≠ Cache',
	'官方文档专门写了它怎么用 prompt caching、什么会让 cache 失效',
];

// 今天的两个问题 + 为什么拿 Claude Code / Codex 当生产案例
export default function S02_TwoQuestions() {
	return (
		<ModuleFrame id="M0" title="今天只回答两个问题" subtitle="不需要 API key —— 老师和你都能在自己电脑上复现每一个数字">
			<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28, height: '100%' }}>
				<div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
					{questions.map((q, i) => (
						<motion.div key={q.n} initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: 0.15 + i * 0.2 }}>
							<Panel style={{ padding: '20px 24px' }}>
								<Label bg={q.bg} color={colors.black}>{q.n}</Label>
								<p style={{ fontSize: 32, fontWeight: 900, margin: '12px 0 6px' }}>{q.q}</p>
								<p style={{ fontFamily: fonts.mono, fontSize: 16, fontWeight: 700, opacity: 0.7 }}>{q.how}</p>
							</Panel>
						</motion.div>
					))}
				</div>
				<div>
					<Label>生产案例：你手上的 coding agent</Label>
					<p style={{ fontFamily: fonts.heading, fontSize: 32, fontWeight: 800, lineHeight: 1.25, margin: '14px 0 16px' }}>Claude Code / Codex 本身就是一个生产级 LLM 系统</p>
					{facts.map((f, i) => (
						<motion.div key={f} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.35, delay: 0.5 + i * 0.12 }}
							style={{ ...card, padding: '10px 16px', marginBottom: 10, fontSize: 20, fontWeight: 700, lineHeight: 1.45 }}>
							{f}
						</motion.div>
					))}
				</div>
			</div>
		</ModuleFrame>
	);
}
