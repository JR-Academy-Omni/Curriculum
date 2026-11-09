import { DeckFrame, AnimatedGroup, Panel, Label, colors } from '../deck';
import { muted, Takeaway } from '../lesson';

const zones = [
	{ t: 'AI 可以直接做', c: colors.green, items: ['读写项目里的代码和文件', '跑脚本、跑测试、出报表', '派子助手去查公开公告'] },
	{ t: '先问我再做', c: colors.yellow, items: ['改规则、改口径', '推送代码、部署网站', '下载大文件、装新软件'] },
	{ t: '绝对不碰', c: colors.red, items: ['没授权的服务器', '把数据库放进公开仓库', '替我做买卖决定'] },
];

export default function S06_Permission() {
	return (
		<DeckFrame tag="02 · 让 AI 自己去拿数据" title="先写清楚 AI 能碰什么" subtitle="AI 能连上我的电脑、我的数据机、我的代码仓库。能做什么、要问什么、碰都不能碰什么，开工前就写清楚。" accent={colors.green}>
			<div style={{ display: 'flex', flexDirection: 'column', gap: 18, height: '100%' }}>
				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 26, flex: 1, minHeight: 0 }}>
					{zones.map((z, i) => (
						<AnimatedGroup key={z.t} delay={.15 + i * .12} style={{ display: 'flex' }}><Panel style={{ flex: 1, borderTop: `14px solid ${z.c}` }}>
							<Label bg={z.c} color={colors.dark}>{z.t}</Label>
							<div style={{ display: 'grid', gap: 16, marginTop: 22 }}>
								{z.items.map(t => <div key={t} style={{ fontSize: 23, fontWeight: 700, lineHeight: 1.35, paddingBottom: 12, borderBottom: '2px dashed rgba(16,22,47,.18)' }}>{t}</div>)}
							</div>
						</Panel></AnimatedGroup>
					))}
				</div>
				<div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
					<Takeaway>权限写进说明书，不靠 AI 自觉</Takeaway>
					<span style={{ fontSize: 19, color: muted }}>数据机只开只读：AI 在那台机器上跑只读脚本，把结果传回来。</span>
				</div>
			</div>
		</DeckFrame>
	);
}
