import { DeckFrame, Panel, Label, Table, colors } from '../kit';

export default function S09_Watch() {
	return <DeckFrame tag="02 · 形态 4 · 监控巡检" title="定时去看，只有变了才叫你" subtitle="它要记住上一次看到了什么。没有「上一次」，就不知道什么叫变化。" accent={colors.green}>
		<div style={{ display: 'grid', gridTemplateColumns: '1.2fr .8fr', gap: 24 }}>
			<Table head={['页面', '上次快照', '这次', '结果']} widths="1.1fr 1fr 1fr .9fr" rows={[
				['竞品 A 定价页', 'Pro $29/月', 'Pro $39/月', <b style={{ color: '#c0392b' }}>叫你</b>],
				['竞品 B 首页', '主打「AI 写作」', '主打「AI 写作」', '安静'],
				['我的产品页', '能打开', '打不开', <b style={{ color: '#c0392b' }}>叫你</b>],
				['某政策页', '更新于 10 月', '只改了排版', '安静'],
			]} />
			<div style={{ display: 'grid', gap: 18, alignContent: 'start' }}>
				<Panel><Label>记忆放在哪</Label><div style={{ fontSize: 23, lineHeight: 1.5, marginTop: 12 }}>每个页面一份快照文件。每次看完就用新结果覆盖它，下一次拿来比较。</div></Panel>
				<Panel bg="#ffe9e9"><Label bg={colors.red}>它怎么失败</Label><div style={{ fontSize: 23, lineHeight: 1.5, marginTop: 12 }}>每次都给你写一份「一切正常」的长报告。三天之后你就不看了，真变了的那天也错过了。</div></Panel>
			</div>
		</div>
	</DeckFrame>;
}
