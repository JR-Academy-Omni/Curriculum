import { DeckFrame, AnimatedGroup, Panel, Label, colors } from '../deck';
import { Step, Code, Takeaway } from '../lesson';

export default function S21_Exercise() {
	return (
		<DeckFrame tag="07 · 带走你的第一个 AI 系统 · 练习 7 分钟" title="练习：把你的一套判断，变成一张派活单" subtitle="选一件你经常要查、要比较、要判断的事：选供应商、筛简历、挑房子、看竞品都行。" accent={colors.indigo}>
			<div style={{ display: 'flex', flexDirection: 'column', gap: 18, height: '100%' }}>
				<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 20 }}>
					<Step n="1" title="说出来（2 分钟）" desc="对着 Claude 口述你的判断标准，让它整理成条目" delay={.1} color={colors.blue} />
					<Step n="2" title="画出来（2 分钟）" desc="让它画成流程图：每一步谁做、通过线在哪" delay={.2} color={colors.green} />
					<Step n="3" title="写派活单（3 分钟）" desc="挑其中一步，写一张能直接派给助手的单子" delay={.3} color={colors.red} />
				</div>
				<div style={{ display: 'grid', gridTemplateColumns: '1.1fr .9fr', gap: 26, flex: 1, minHeight: 0 }}>
					<AnimatedGroup delay={.4}><Code title="派活单模板">{`你要查：［对象清单］
判定标准：［满足 / 部分满足 / 不满足 各指什么］
只认来源：［……］  不认：［……］
结果格式：每行  对象|项|判定|证据一句话|出处网址
查不到：按规则判，不许编`}</Code></AnimatedGroup>
					<AnimatedGroup delay={.5} style={{ display: 'flex' }}><Panel style={{ flex: 1 }}>
						<Label bg={colors.green} color={colors.dark}>完成判据</Label>
						<div style={{ display: 'grid', gap: 12, marginTop: 16, fontSize: 21, lineHeight: 1.45, fontWeight: 700 }}>
							<div>□ 判定标准写到别人能照着判</div>
							<div>□ 规定了只认哪些来源</div>
							<div>□ 结果格式固定，能用程序检查</div>
							<div>□ 写了「查不到怎么办」</div>
						</div>
					</Panel></AnimatedGroup>
				</div>
				<div><Takeaway>派活单写清楚了，派 1 个和派 65 个一样简单</Takeaway></div>
			</div>
		</DeckFrame>
	);
}
