import { ActBadge, Page, Head, colors, fonts, border, shadowSm } from '../deck';

// P19 · 这段脚本为什么这么写（原理页）
// 🔴 系列固定要求，不许省（vibe-coding-master 系列内容标准）：
//    学员要的不是这一个脚本，是以后面对新场景**自己能组词**。
// 🔴 穿插在 P18 中间讲，约 2 分钟，挑 4–5 条，讲完立刻切回 P18。
const WHYS = [
	{
		q: '为什么 stderr 那句话要写清「为什么」，不能只写 Blocked？',
		a: '因为**它会收到这句话**。写清楚了它能换条路走；写不清，它会反复撞同一堵墙，把你的 context 耗光。',
		key: '这句话的读者不是你，是它。',
	},
	{
		q: '为什么 matcher 要尽量窄？',
		a: '宽 matcher 的错法是**静默的** —— 你以为只管了一类，其实管了全部。',
		key: '官方原话：matcher 写 .* 或留空 would auto-approve every tool permission prompt。',
	},
	{
		q: '为什么判据要写成路径匹配，不能写「这个改动合不合理」？',
		a: '因为确定性来自不动脑。',
		key: '你写的每一个「合不合理」，都是把判断权又交回给了模型。',
	},
	{
		q: '为什么用 $CLAUDE_PROJECT_DIR 不用相对路径？',
		a: '因为 hook 跑的时候，工作目录不一定是项目根。',
		key: '写相对路径的，换个目录就 command not found。',
	},
	{
		q: '为什么 exit 2 和 JSON 输出不要混用？',
		a: '官方明说：Choose one approach per hook。',
		key: '你不该让自己的规矩，依赖一张需要查的表。',
	},
	{
		q: '为什么第一条规矩要挑机器判得出来的？',
		a: '因为你需要先看见它成功拦一次。',
		key: '一个从没拦成功过的 hook，你不会信它，也不会留着它。',
	},
] as const;

function render(s: string) {
	return s.split('**').map((seg, i) => (i % 2 ? <b key={i}>{seg}</b> : <span key={i}>{seg}</span>));
}

export default function L12P19_WhyWordedThisWay() {
	return (
		<Page>
			<ActBadge act={5} />
			<Head sub="你要的不是这一个脚本，是以后面对新场景自己能组词。">
				这段脚本<span style={{ color: colors.purple }}>为什么这么写</span>
			</Head>

			<div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, minHeight: 0 }}>
				{WHYS.map((w) => (
					<div key={w.q} style={{
						border, background: colors.white, boxShadow: shadowSm,
						padding: '13px 16px', display: 'flex', flexDirection: 'column', gap: 7,
					}}>
						<div style={{ fontSize: 19, fontWeight: 800, lineHeight: 1.35, color: colors.purple }}>
							{w.q}
						</div>
						<div style={{ fontSize: 17, lineHeight: 1.5, color: '#444' }}>{render(w.a)}</div>
						<div style={{
							fontSize: 17, lineHeight: 1.45, fontWeight: 700,
							borderLeft: `3px solid ${colors.black}`, paddingLeft: 10, marginTop: 'auto',
						}}>
							{w.key}
						</div>
					</div>
				))}
			</div>
		</Page>
	);
}
