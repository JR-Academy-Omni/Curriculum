import { DeckFrame, AnimatedGroup, Panel, Label, colors, fonts } from '../deck';
import { Takeaway } from '../lesson';

// 经过整理自 2026-10-20 部署对话；不涉及服务器细节
const steps = [
	{ t: 'AI 说', d: '页面做好了，已经合进网站代码，部署后就能看到。' },
	{ t: '我去看', d: '网站上显示「数据还没同步到服务器」。' },
	{ t: '查下来', d: 'AI 是照仓库里一个早就不用的旧部署脚本推断的；真实的打包方式根本不带数据目录。' },
];

export default function S15_Fail2() {
	return (
		<DeckFrame tag="04 · AI 会犯错，怎么管住它" title="翻车二：「部署好了」，网站上什么都没有" subtitle="这是最危险的一类错：AI 说得非常笃定，而且每一步听起来都合理。" accent={colors.purple}>
			<div style={{ display: 'flex', flexDirection: 'column', gap: 20, height: '100%' }}>
				<div style={{ display: 'grid', gridTemplateColumns: '1.1fr .9fr', gap: 28, flex: 1, minHeight: 0 }}>
					<AnimatedGroup delay={.15} style={{ display: 'grid', gap: 14, alignContent: 'start' }}>
						{steps.map((s, i) => (
							<div key={s.t} style={{ display: 'flex', gap: 18, alignItems: 'flex-start', background: colors.white, border: `2px solid ${colors.dark}`, borderRadius: 18, padding: '16px 20px' }}>
								<span style={{ fontFamily: fonts.mono, fontWeight: 800, fontSize: 18, background: [colors.yellow, colors.red, colors.blue][i], border: `2px solid ${colors.dark}`, borderRadius: 8, padding: '4px 10px', flexShrink: 0 }}>{s.t}</span>
								<span style={{ fontSize: 22, lineHeight: 1.5 }}>{s.d}</span>
							</div>
						))}
					</AnimatedGroup>
					<AnimatedGroup delay={.35} style={{ display: 'flex' }}><Panel bg={colors.dark} style={{ flex: 1, color: colors.white }}>
						<Label bg={colors.green} color={colors.dark}>写进说明书的两条</Label>
						<div style={{ fontFamily: fonts.heading, fontWeight: 900, fontSize: 30, lineHeight: 1.35, marginTop: 20 }}>1. 动手前先核实现状</div>
						<div style={{ fontSize: 20, lineHeight: 1.5, opacity: .85, marginTop: 6 }}>不凭仓库里的旧文件下结论。拿不准就请我在服务器上跑只读命令，把结果贴回来。</div>
						<div style={{ fontFamily: fonts.heading, fontWeight: 900, fontSize: 30, lineHeight: 1.35, marginTop: 22 }}>2. 做完要实际验证</div>
						<div style={{ fontSize: 20, lineHeight: 1.5, opacity: .85, marginTop: 6 }}>本地用同样的方式打包、启动、访问一遍，看到结果才说「完成」。修好后验证了三件事：没登录被拒、直接访问数据文件被拒、数据确实打包进去了。</div>
						<div style={{ fontSize: 20, lineHeight: 1.5, marginTop: 26, paddingTop: 16, borderTop: '1px solid rgba(255,255,255,.2)', opacity: .85 }}>我当时的原话：「你究竟有什么地方改错了呢？你认真审查一下。」</div>
					</Panel></AnimatedGroup>
				</div>
				<div><Takeaway>「完成」必须附证据</Takeaway></div>
			</div>
		</DeckFrame>
	);
}
