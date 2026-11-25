import { AnimatedGroup, DeckFrame, Label, Node, Panel, colors } from '../kit';

const problems = ['2 TB/天的视频很快塞满本地磁盘', '一台机器扛不住高峰上传，也没法升级不停机', '转码吃满 CPU，连查进度的请求都变慢', '机器一挂，所有功能一起挂'];

export default function S07_SingleBox() {
	return <DeckFrame tag="P07 · 第 3 步" title="先画最简单的版本：一台机器" subtitle="v0 能跑起来。接下来每遇到一个问题，就加一个组件。">
		<div style={{ display: 'grid', gridTemplateColumns: '.9fr 1.1fr', gap: 30 }}>
			<AnimatedGroup delay={.12} style={{ display: 'flex' }}><Panel style={{ flex: 1 }}>
				<Label>v0 · 一台服务器</Label>
				<div style={{ display: 'grid', gap: 14, marginTop: 20 }}>
					<Node title="浏览器" sub="上传视频、查看进度" />
					<Node title="服务器" sub="Web 服务 + 转码程序 + 数据库 + 本地磁盘" bg={colors.yellow} />
				</div>
			</Panel></AnimatedGroup>
			<AnimatedGroup delay={.22} style={{ display: 'flex' }}><Panel bg={colors.dark} style={{ flex: 1, color: colors.white }}>
				<Label bg={colors.yellow} color={colors.black}>按 P05 的数字，它会先在这些地方出问题</Label>
				<div style={{ display: 'grid', gap: 18, marginTop: 22 }}>{problems.map((t, i) => <div key={t} style={{ display: 'flex', gap: 14, alignItems: 'center', fontSize: 24, lineHeight: 1.4 }}>
					<span style={{ width: 44, height: 44, borderRadius: '50%', background: colors.yellow, color: colors.dark, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: 20, flexShrink: 0 }}>{i + 1}</span><span>{t}</span>
				</div>)}</div>
			</Panel></AnimatedGroup>
		</div>
	</DeckFrame>;
}
