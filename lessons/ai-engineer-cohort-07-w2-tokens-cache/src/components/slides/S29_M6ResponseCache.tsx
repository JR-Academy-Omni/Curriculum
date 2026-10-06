import { Slide, Inner, Half, Title, colors, fonts, border, shadowSm } from '../ui';
import { ModuleTag, Terminal } from './_shared';

const redLines = ['不跨 tenant、不跨权限复用结果', '不缓存 Secrets（key、token、密码）', '不缓存不必要的 PII', 'Semantic cache 的相似度阈值要拿真实问题去测'];

// M6 跑：让 agent 写一个应用层 Response Cache，演示泄露再修好
export default function S29_M6ResponseCache() {
	return (
		<Slide bg={colors.white}>
			<Inner split>
				<Half style={{ flex: 1.15 }}>
					<ModuleTag id="M6" phase="teach" />
					<Title size="44px" style={{ marginBottom: 14 }}>动手：写一个会泄露的 Response Cache，再修好它</Title>
					<Terminal
						fontSize={15}
						lines={[
							'# 第 1 步：在 Claude Code / Codex 里输入',
							'Write faq_cache.py. ask(tenant, role, question) builds a prompt',
							'with that tenant\'s private data from a dict, calls `claude -p`',
							'(or `codex exec`), and caches answers in a dict keyed by the',
							'question text only. Demo: tenant A admin, then tenant B staff,',
							'both ask "What is our refund total this quarter?"',
							'',
							'# 第 2 步：看 B 拿到了谁的数字？然后输入',
							'Fix the cache key: hash(model, prompt_version, tenant, role,',
							'language, normalized question). Add a TTL and invalidate(tenant).',
						]}
					/>
				</Half>

				<Half style={{ flex: 0.85 }}>
					<div style={{ padding: '14px 18px', background: colors.warmBg, border, boxShadow: shadowSm, marginBottom: 16 }}>
						<p style={{ fontSize: 23, fontWeight: 900, marginBottom: 6 }}>Response Cache 省的是什么？</p>
						<p style={{ fontSize: 19, fontWeight: 600, lineHeight: 1.55 }}>
							整次模型调用都不发 —— 最快。代价是 freshness、permission、PII，以及一次答错、次次答错
						</p>
					</div>
					<p style={{ fontFamily: fonts.mono, fontSize: 17, fontWeight: 700, letterSpacing: 2, marginBottom: 8 }}>红线</p>
					{redLines.map((r) => (
						<div key={r} style={{ padding: '9px 14px', marginBottom: 8, background: colors.red, color: colors.white, border, fontSize: 19, fontWeight: 700 }}>{r}</div>
					))}
					<p style={{ marginTop: 10, fontSize: 18, fontWeight: 600, lineHeight: 1.5 }}>
						什么时候失效：数据、政策、权限、prompt 版本任何一个变了；TTL 由业务对新鲜度的要求决定
					</p>
				</Half>
			</Inner>
		</Slide>
	);
}
