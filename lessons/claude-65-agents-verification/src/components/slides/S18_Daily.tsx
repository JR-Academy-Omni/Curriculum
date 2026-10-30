import { DeckFrame, AnimatedGroup, Panel, Label, colors } from '../deck';
import { Step, Arrow, muted, Takeaway } from '../lesson';

// 步骤出自每日脚本 daily_sim.py
export default function S18_Daily() {
	return (
		<DeckFrame tag="05 · 让系统每天自己跑" title="每天 21:15，它自己跑一遍" subtitle="搭好以后，系统不靠我也不靠对话窗口。电脑上的定时任务每天收盘后跑两次，第二次没新数据就跳过。" accent={colors.teal}>
			<div style={{ display: 'flex', flexDirection: 'column', gap: 22, height: '100%' }}>
				<div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr auto 1fr auto 1fr auto 1fr', gap: 12 }}>
					<Step n="1" title="取当天行情" desc="只读，从数据机传回" delay={.1} color={colors.blue} />
					<Arrow />
					<Step n="2" title="更新底账" desc="大盘条件、跟踪价格" delay={.2} color={colors.green} />
					<Arrow />
					<Step n="3" title="生成页面" desc="重新生成本地查询页" delay={.3} color={colors.yellow} />
					<Arrow />
					<Step n="4" title="私有备份" desc="数据库和原件进私有分支" delay={.4} color={colors.purple} />
					<Arrow />
					<Step n="5" title="写日志" desc="每一步成没成功都记下来" delay={.5} color={colors.red} />
				</div>
				<AnimatedGroup delay={.6} style={{ display: 'flex', flex: 1, minHeight: 0 }}><Panel style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28 }}>
					<div><Label bg={colors.dark}>全程写日志</Label><div style={{ fontSize: 21, lineHeight: 1.55, marginTop: 14 }}>哪一步失败就在日志里写清楚，不静默跳过。我问「昨天更新了吗」，AI 先读日志再回答。</div></div>
					<div><Label bg={colors.red}>我每天只看结果</Label><div style={{ fontSize: 21, lineHeight: 1.55, marginTop: 14 }}>打开本地查询页，看行情更新到哪一天、哪些条件有了变化。</div></div>
				</Panel></AnimatedGroup>
				<div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
					<Takeaway>能自动的都交给它，结果每天看一眼</Takeaway>
					<span style={{ fontSize: 19, color: muted }}>一份数据两个去处：本地查询页、私有备份。</span>
				</div>
			</div>
		</DeckFrame>
	);
}
