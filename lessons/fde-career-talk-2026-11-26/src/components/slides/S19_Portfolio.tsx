import { DeckFrame, Panel, Label, colors, fonts } from '../kit';

const tree = [
	['order-exception-triage/', '订单异常分流：一个完整的项目', true],
	['  README.md', '谁提的需求，要解决哪一步', false],
	['  app/', '能运行的第一版', false],
	['  evals/cases.csv', '有代表性的样例，包括容易分错的', false],
	['  evals/results.md', '每一版的准确率和误分记录', false],
	['  changes/v1-to-v2.md', '用户改过哪些判断，你改了什么', false],
	['  handover.md', '交给运营团队的使用和异常处理说明', false],
] as const;

export default function S19_Portfolio() {
	return <DeckFrame tag="05 · 作品集" title="一个能让面试官继续追问的项目" subtitle="不用很大。关键是看得出：有真实使用者、你亲手做的部分，以及上线后改过一轮。" accent={colors.dark}>
		<div style={{ display: 'grid', gridTemplateColumns: '1.25fr .75fr', gap: 24 }}>
			<div style={{ background: '#0f1428', color: '#f3f0e8', borderRadius: 22, padding: '22px 26px' }}>
				{tree.map(([p, d, top]) => <div key={p} style={{ display: 'grid', gridTemplateColumns: '360px 1fr', gap: 12, padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,.08)' }}>
					<span style={{ fontFamily: fonts.mono, fontSize: 20, color: top ? colors.yellow : '#f3f0e8', whiteSpace: 'pre' }}>{p}</span>
					<span style={{ fontSize: 20, lineHeight: 1.45 }}>{d}</span>
				</div>)}
			</div>
			<div style={{ display: 'grid', gap: 18, alignContent: 'start' }}>
				<Panel><Label>面试带三样</Label><div style={{ fontSize: 22, lineHeight: 1.6, marginTop: 12 }}>能运行的版本<br />几条有代表性的测试结果<br />一次改动的前后记录</div></Panel>
				<Panel bg={colors.yellow}><Label>用几分钟讲清</Label><div style={{ fontSize: 22, lineHeight: 1.6, marginTop: 12, fontWeight: 700 }}>谁提出了需求；你亲自做了哪部分；遇到了什么取舍；你怎么判断这个改动值得做。</div></Panel>
			</div>
		</div>
	</DeckFrame>;
}
