import { motion } from 'framer-motion';
import { Slide, Inner, Half, Title, Tag, colors, fonts, border, shadowSm } from '../ui';
import { Note, ModuleTag } from './_shared';

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
		<Slide bg={colors.white}>
			<Inner split>
				<Half>
					<ModuleTag id="M0" />
					<Title size="54px" style={{ marginBottom: 26 }}>今天只回答两个问题</Title>
					{questions.map((q, i) => (
						<motion.div
							key={q.n}
							initial={{ opacity: 0, x: -30 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.4, delay: 0.15 + i * 0.2 }}
							style={{ padding: '16px 22px', marginBottom: 16, background: colors.warmBg, border, boxShadow: shadowSm }}>
							<Tag bg={q.bg} color={colors.black}>{q.n}</Tag>
							<p style={{ fontSize: 32, fontWeight: 900, margin: '10px 0 6px' }}>{q.q}</p>
							<p style={{ fontFamily: fonts.mono, fontSize: 16, fontWeight: 700, opacity: 0.7 }}>{q.how}</p>
						</motion.div>
					))}
				</Half>

				<Half>
					<p style={{ fontFamily: fonts.mono, fontSize: 17, fontWeight: 700, letterSpacing: 2, marginBottom: 10 }}>生产案例：你手上的 coding agent</p>
					<Title size="40px" style={{ marginBottom: 18 }}>Claude Code / Codex 本身就是一个生产级 LLM 系统</Title>
					{facts.map((f, i) => (
						<motion.div
							key={f}
							initial={{ opacity: 0, x: 30 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.35, delay: 0.5 + i * 0.12 }}
							style={{ padding: '10px 16px', marginBottom: 10, background: colors.white, border, fontSize: 21, fontWeight: 700, lineHeight: 1.45 }}>
							{f}
						</motion.div>
					))}
					<Note style={{ marginTop: 8, fontSize: 21 }}>不需要 API key，老师和你都能在自己电脑上复现每一个数字</Note>
				</Half>
			</Inner>
		</Slide>
	);
}
