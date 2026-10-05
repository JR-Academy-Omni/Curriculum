import { Slide, Inner, Half, Title, colors, fonts, border } from '../ui';
import { ModuleTag, Source } from './_shared';

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

function LinkList({ title, items }: { title: string; items: typeof docs }) {
	return (
		<>
			<p style={{ fontFamily: fonts.mono, fontSize: 17, fontWeight: 700, letterSpacing: 2, marginBottom: 10 }}>{title}</p>
			{items.map((d) => (
				<a key={d.u} href={d.u} target="_blank" rel="noreferrer"
					style={{ display: 'block', padding: '7px 14px', marginBottom: 7, background: colors.white, border, color: colors.black, textDecoration: 'none' }}>
					<span style={{ display: 'block', fontSize: 19, fontWeight: 800, lineHeight: 1.35 }}>{d.t}</span>
					<span style={{ display: 'block', fontSize: 15, fontWeight: 600, opacity: 0.65 }}>{d.s}</span>
				</a>
			))}
		</>
	);
}

// 课后资料：生产一手文档 + 视频（链接已核实存在）
export default function S37_Resources() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner split style={{ alignItems: 'stretch', flexWrap: 'wrap', alignContent: 'center', rowGap: 12 }}>
				<div style={{ width: '100%' }}>
					<ModuleTag id="M7" />
					<Title size="46px">课后资料</Title>
				</div>
				<Half style={{ justifyContent: 'flex-start' }}>
					<LinkList title="生产一手资料（先读这些）" items={docs} />
				</Half>
				<Half style={{ justifyContent: 'flex-start' }}>
					<LinkList title="视频（课后看）" items={videos} />
				</Half>
				<div style={{ width: '100%' }}>
					<Source>链接都已核实存在；视频只核实了标题和频道。课后练习：用你自己的一个项目重跑 M5，把 runs.jsonl 的汇总结果写成三句英文发到群里。</Source>
				</div>
			</Inner>
		</Slide>
	);
}
