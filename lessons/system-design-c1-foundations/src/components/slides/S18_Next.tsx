import { AnimatedGroup, DeckFrame, Label, Panel, Steps, colors } from '../kit';
import { assetPath } from '../ui';

export default function S18_Next() {
	return <DeckFrame tag="P18 · 收尾" title="这张组件地图，后两节会越填越满" subtitle="方法不变，每个案例加几块新组件。">
		<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 24 }}>
			<AnimatedGroup delay={.12} style={{ display: 'flex' }}><Panel style={{ flex: 1 }}>
				<Label>本节 · 视频上传</Label>
				<p style={{ marginTop: 14, fontSize: 23, lineHeight: 1.55 }}>5 步方法、数据库、对象存储、负载均衡、缓存、消息队列、重试与幂等</p>
			</Panel></AnimatedGroup>
			<AnimatedGroup delay={.2} style={{ display: 'flex' }}><Panel bg={colors.yellow} style={{ flex: 1 }}>
				<Label>第 2 节 · 直播</Label>
				<p style={{ marginTop: 14, fontSize: 23, lineHeight: 1.55 }}>CDN、带宽估算、实时连麦和大规模观看两条链路、观看人数和弹幕的一致性</p>
			</Panel></AnimatedGroup>
			<AnimatedGroup delay={.28} style={{ display: 'flex' }}><Panel bg={colors.dark} style={{ flex: 1, color: colors.white }}>
				<Label bg={colors.yellow} color={colors.black}>第 3 节 · AI 视频生成</Label>
				<p style={{ marginTop: 14, fontSize: 23, lineHeight: 1.55 }}>任务状态机、租约与条件更新、镜头版本、失败后只重做一步</p>
			</Panel></AnimatedGroup>
		</div>
		<Panel style={{ marginTop: 26 }}>
			<Steps size={23} items={[
				<a href={assetPath('worksheet.html')} target="_blank" rel="noreferrer">课堂工作单和参考答案</a>,
				<a href={assetPath('result.html')} target="_blank" rel="noreferrer">视频上传完整架构和执行轨迹</a>,
			]} />
		</Panel>
	</DeckFrame>;
}
