import { DeckFrame, Panel, Label, Node, Arrow, colors } from '../kit';

export default function P10_Publish() {
	return <DeckFrame tag="第 4 步 · 发布" title="Agent 开 PR，你点 Merge，内容才上线" subtitle="通过 Eval 的稿子不会直接发出去。它把文章、网页和评分一起提成一个 Pull Request，等你签字。" accent={colors.green}>
		<div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
			<Node bg={colors.yellow} title="通过 Eval" sub="文章 + 网页 + 评分" style={{ width: 250 }} />
			<Arrow />
			<Node title="开一个 PR" sub="你看 Files changed" style={{ width: 250 }} />
			<Arrow />
			<Node bg={colors.dark} color={colors.white} title="你点 Merge" sub="这一步就是批准" style={{ width: 250 }} />
			<Arrow />
			<Node bg={colors.green} title="自动上线" sub="合并触发发布" style={{ width: 250 }} />
		</div>
		<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginTop: 28 }}>
			<Panel style={{ borderTop: `14px solid ${colors.green}` }}><Label bg={colors.green} color={colors.dark}>网页：全自动</Label><div style={{ fontSize: 22, lineHeight: 1.6, marginTop: 12 }}>site/ 里的文件一合并到 main，GitHub Actions 就把它发布到 GitHub Pages（或者你自己的网站）。你不用上传任何东西。</div></Panel>
			<Panel style={{ borderTop: `14px solid ${colors.yellow}` }}><Label bg={colors.yellow} color={colors.dark}>公众号：最后一步手动</Label><div style={{ fontSize: 22, lineHeight: 1.6, marginTop: 12 }}>排好版的 HTML 已经在仓库里，复制粘贴进公众号编辑器，你点群发。想让它自动进公众号草稿箱，要用公众号开发接口，需要账号有对应权限，课后再接。</div></Panel>
		</div>
	</DeckFrame>;
}
