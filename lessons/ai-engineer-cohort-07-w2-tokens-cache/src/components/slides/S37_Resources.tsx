import { colors } from '../ui';
import { Label } from '../deck';
import { ModuleFrame, Source, card } from './_shared';

const docs = [
	{ t: 'How Claude Code uses prompt caching', s: 'Claude Code 官方文档', u: 'https://code.claude.com/docs/en/prompt-caching' },
	{ t: 'Explore the context window', s: 'Claude Code 官方文档', u: 'https://code.claude.com/docs/en/context-window' },
	{ t: 'Lessons from building Claude Code: Prompt caching is everything', s: 'Anthropic 博客', u: 'https://claude.com/blog/lessons-from-building-claude-code-prompt-caching-is-everything' },
	{ t: 'Prompt caching', s: 'Claude API 文档', u: 'https://platform.claude.com/docs/en/build-with-claude/prompt-caching' },
	{ t: 'Non-interactive mode（codex exec --json）', s: 'Codex 文档', u: 'https://learn.chatgpt.com/docs/non-interactive-mode' },
	{ t: 'Lost in the Middle', s: 'Liu et al., TACL 2023', u: 'https://arxiv.org/abs/2307.03172' },
];

const videos = [
	{ t: "Let's build the GPT Tokenizer", s: 'Andrej Karpathy', u: 'https://www.youtube.com/watch?v=zduSFxRajkE' },
	{ t: 'Attention in transformers, step-by-step', s: '3Blue1Brown', u: 'https://www.youtube.com/watch?v=eMlx5fFNoYc' },
	{ t: 'LLM Inference Explained: Prefill vs Decode', s: 'Ready Tensor', u: 'https://www.youtube.com/watch?v=HRKFa8LIAQg' },
	{ t: 'KV Cache Explained', s: 'Ready Tensor', u: 'https://www.youtube.com/watch?v=hafEw3bEu8E' },
	{ t: 'LLaMA explained: KV-Cache, RoPE, GQA…', s: 'Umar Jamil', u: 'https://www.youtube.com/watch?v=Mn_9W1nCFLo' },
	{ t: 'Fast LLM Serving with vLLM and PagedAttention', s: 'MLSys Singapore', u: 'https://www.youtube.com/watch?v=Oq2SN7uutbQ' },
];

function LinkList({ title, items, bg }: { title: string; items: typeof docs; bg: string }) {
	return (
		<div>
			<Label bg={bg} color={colors.black}>{title}</Label>
			{items.map((d) => (
				<a key={d.u} href={d.u} target="_blank" rel="noreferrer" style={{ ...card, display: 'block', padding: '6px 14px', marginTop: 7, color: colors.black, textDecoration: 'none' }}>
					<span style={{ display: 'block', fontSize: 18, fontWeight: 800, lineHeight: 1.35 }}>{d.t}</span>
					<span style={{ display: 'block', fontSize: 14, fontWeight: 600, opacity: 0.65 }}>{d.s}</span>
				</a>
			))}
		</div>
	);
}

// 课后资料：生产一手文档 + 视频（链接已核实存在）
export default function S37_Resources() {
	return (
		<ModuleFrame id="M7" title="课后资料" titleSize={46}>
			<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28 }}>
				<LinkList title="生产一手资料（先读这些）" items={docs} bg={colors.yellow} />
				<LinkList title="视频（课后看）" items={videos} bg={colors.blue} />
			</div>
			<Source>链接都已核实存在；视频只核实了标题和频道。课后练习：用你自己的一个项目重跑 M5，把 runs.jsonl 的汇总结果写成三句英文发到群里。</Source>
		</ModuleFrame>
	);
}
