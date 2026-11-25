import { AnimatedGroup, DeckFrame, Label, Panel, colors } from '../kit';

const functional = ['上传一段视频', '上传后可以关掉页面，回来查看进度', '处理完成后可以播放', '只有本人能看到自己的视频'];
const nonFunctional: [string, string][] = [
	['延迟', '上传完 1 秒内拿到任务编号；转码几分钟内完成'],
	['可用性', '99.9% = 每月最多停机约 43 分钟'],
	['一致性', '显示「可播放」时，成品文件一定已经存在'],
	['成本', '视频文件很大，存储和带宽是主要开销'],
];

export default function S04_Requirements() {
	return <DeckFrame tag="P04 · 第 1 步" title="把需求说清楚" subtitle="功能需求说「做什么」，非功能需求说「做到什么程度」。后者决定架构。">
		<div style={{ display: 'grid', gridTemplateColumns: '.85fr 1.15fr', gap: 28 }}>
			<AnimatedGroup delay={.15} style={{ display: 'flex' }}><Panel style={{ flex: 1 }}>
				<Label>功能需求</Label>
				<ul style={{ margin: '16px 0 0', paddingLeft: 26, fontSize: 25, lineHeight: 1.65 }}>{functional.map(t => <li key={t}>{t}</li>)}</ul>
			</Panel></AnimatedGroup>
			<AnimatedGroup delay={.25} style={{ display: 'flex' }}><Panel bg={colors.dark} style={{ flex: 1, color: colors.white }}>
				<Label bg={colors.yellow} color={colors.black}>非功能需求</Label>
				<div style={{ display: 'grid', gap: 14, marginTop: 16 }}>{nonFunctional.map(([k, v]) => <div key={k} style={{ display: 'grid', gridTemplateColumns: '96px 1fr', gap: 12, fontSize: 23, lineHeight: 1.45 }}>
					<strong style={{ color: colors.yellow }}>{k}</strong><span>{v}</span>
				</div>)}</div>
			</Panel></AnimatedGroup>
		</div>
	</DeckFrame>;
}
