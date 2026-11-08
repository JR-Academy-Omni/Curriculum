import { DeckFrame, Steps, Panel, Label, colors } from '../kit';

export default function S16_Demo() {
	return <DeckFrame tag="03 · 讲师演示" title="现场看一条接力跑完" subtitle="打开一个已经自己跑了几天的仓库，再现场跑一次。" bg={colors.dark}>
		<div style={{ display: 'grid', gridTemplateColumns: '1.2fr .8fr', gap: 24 }}>
			<Panel>
				<Steps size={23} items={[
					<>翻过去几天的日报：有 ✅，也有 🙋。打开一个 🙋，看它为什么停下来</>,
					<>Actions 里手动跑「选题」，看日志里「查上游」那一步的输出</>,
					<>接着跑「写文章」，打开 article.md，核对它用的是不是排第 1 的那个题目</>,
					<>删掉 article.md，只留回执，再跑下一段：把关脚本会把它记成 needs-human</>,
					<>仓库里多出一个提交：今天的产物和回执都存进了历史</>,
				]} />
			</Panel>
			<div style={{ display: 'grid', gap: 18, alignContent: 'start' }}>
				<Panel bg={colors.yellow}><Label>请你注意看</Label><div style={{ fontSize: 24, lineHeight: 1.5, marginTop: 12, fontWeight: 800 }}>第 4 步：程序显示「成功结束」，事情其实没做成。</div></Panel>
				<Panel><Label>演示仓库</Label><div style={{ fontSize: 21, lineHeight: 1.5, marginTop: 12 }}>和你们拿到的课程包结构一样，可以课后照着搭。</div></Panel>
			</div>
		</div>
	</DeckFrame>;
}
