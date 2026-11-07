import { DeckFrame, AnimatedGroup, Panel, Label, colors, fonts } from '../deck';
import { Step, Arrow, Stat, Takeaway } from '../lesson';

// 新口径条目出自五项判定口径 v2（2026-10-19）；改判 49 家见 SOURCE_MAP #9
const newRules = ['公司用公开数据自己算的份额，不算', '第三方数据超过 3 年，不算', '省级、市级的单项冠军和首台套，不算'];

export default function S13_RuleUpgrade() {
	return (
		<DeckFrame tag="03 · 一个人指挥 65 个 AI" title="模糊地带，交给人拍板" subtitle="复核会暴露同一条规则被不同助手理解得松紧不一。这时候不该让 AI 自己定，要把分歧整理成表，人来一条条拍板。" accent={colors.red}>
			<div style={{ display: 'flex', flexDirection: 'column', gap: 20, height: '100%' }}>
				<div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr auto 1fr auto 1fr', gap: 12 }}>
					<Step n="1" title="整理分歧" desc="AI 把模糊处列成「口径待定表」" delay={.1} color={colors.blue} />
					<Arrow />
					<Step n="2" title="人拍板" desc="逐条同意或改写，记进决定表" delay={.2} color={colors.yellow} />
					<Arrow />
					<Step n="3" title="口径升版" desc="v1 → v2，写进口径文件" delay={.3} color={colors.green} />
					<Arrow />
					<Step n="4" title="全量重判" desc="已查的公司按新口径重判，每处写理由" delay={.4} color={colors.red} />
				</div>
				<div style={{ display: 'grid', gridTemplateColumns: '1.3fr .7fr', gap: 28 }}>
					<AnimatedGroup delay={.5} style={{ display: 'flex' }}><Panel style={{ flex: 1 }}>
						<Label bg={colors.dark}>v2 新加的几条（举例）</Label>
						<div style={{ display: 'grid', gap: 12, marginTop: 16 }}>
							{newRules.map(r => <div key={r} style={{ fontFamily: fonts.heading, fontWeight: 800, fontSize: 24 }}>✕ {r}</div>)}
						</div>
					</Panel></AnimatedGroup>
					<div style={{ alignSelf: 'center' }}><Stat value={49} suffix=" 家" label="按新口径改判" color={colors.red} size={96} delay={.6} /></div>
				</div>
				<div><Takeaway>AI 负责把分歧摆出来，人负责定标准</Takeaway></div>
			</div>
		</DeckFrame>
	);
}
