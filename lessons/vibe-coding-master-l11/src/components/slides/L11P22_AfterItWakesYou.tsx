import { motion } from 'framer-motion';
import { colors, fonts, border, shadow } from '../ui';
import { Page, PageHead, Verdict, Note } from '../deck';

/**
 * P22 · 它叫醒你之后：恢复路径
 *
 * 🔴 补的是全套材料里最大的一个断裂：needs-human 是我们自己设计的核心一档，
 *    P16 / P19 / P20 三页论证它为什么必须存在 —— 然后**它叫醒你之后就没有下文了**。
 *    学员照着做，第一次被叫醒就卡住，而那恰恰是无人值守的日常。
 *
 * 🔴 三条路径的排序是有意的：回灌在最前（最快），但收口必须落在
 *    「回灌是止血，改任务书才是治本」—— 否则学员会把 webhook 当终点，
 *    然后每周被同一个问题叫醒一次。
 *
 * 🔴 回灌那条必须讲清它的两笔代价（官方文档明确写了）：
 *    ① 你发回去的内容被标成「不可信数据」，任务书必须显式 opt-in 才会读；
 *    ② 谁拿到那个 token 谁就能往里送东西 —— 这正是 P17 讲过的注入面。
 *    具体接口形态以当天官方文档为准（§19.3），deck 不写死。
 */
const PATHS = [
	{
		n: 1, name: '回灌', how: '你的答案发回去，任务带着它重跑一次',
		when: '一次性拍板，且这件事重跑安全',
		cost: '任务书要显式说「去读回灌内容」它才会用；而这扇门谁拿到凭证谁都能走进来',
		color: colors.blue, fg: colors.white,
	},
	{
		n: 2, name: '改任务书', how: '答案写进第 4 段「预答」，下个周期自然带上',
		when: '这个问题以后还会再问',
		cost: '要等下一个周期',
		color: colors.teal, fg: colors.white, star: true,
	},
	{
		n: 3, name: '手动接手', how: '你自己把剩下的做完',
		when: '一次性 / 低频 / 这件事重跑不安全',
		cost: '不可复用，下次还得你来',
		color: colors.dark, fg: colors.white,
	},
];

export default function L11P22_AfterItWakesYou() {
	return (
		<Page style={{ gap: 16 }}>
			<PageHead
				phase="talk"
				title="它半夜叫醒你，你回答了 —— 然后呢？"
				sub={<><code>needs-human</code> 不是终点，是一次<strong>交接</strong>。交接得有下半场。</>}
			/>

			<div style={{ display: 'flex', flexDirection: 'column', gap: 9, flex: 1, minHeight: 0 }}>
				{PATHS.map((p, i) => (
					<motion.div
						key={p.n}
						initial={{ opacity: 0, x: -14 }} animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.3, delay: i * 0.1 }}
						style={{
							display: 'flex', alignItems: 'stretch', gap: 14, flex: 1, minHeight: 0,
							border: p.star ? `3px solid ${colors.teal}` : border,
							background: p.star ? '#eafaf4' : colors.white,
							boxShadow: p.star ? `5px 5px 0 ${colors.teal}` : '4px 4px 0 #000',
							padding: '8px 14px',
						}}
					>
						<span style={{
							flexShrink: 0, width: 128, background: p.color, color: p.fg,
							border: `2px solid ${colors.black}`, fontSize: 20, fontWeight: 900,
							display: 'flex', alignItems: 'center', justifyContent: 'center',
						}}>{p.name}</span>
						<div style={{ flex: 1.3, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
							<div style={{ fontSize: 20, fontWeight: 800, color: colors.dark, lineHeight: 1.3 }}>{p.how}</div>
							<div style={{ fontSize: 17, color: '#888', marginTop: 2 }}>什么时候用：{p.when}</div>
						</div>
						<div style={{
							flex: 1.15, display: 'flex', alignItems: 'center',
							borderLeft: '2px solid #ddd', paddingLeft: 14,
							fontSize: 18, lineHeight: 1.35, color: p.star ? colors.black : '#666',
						}}>
							<span><strong style={{ color: colors.red }}>代价 </strong>{p.cost}</span>
						</div>
					</motion.div>
				))}
			</div>

			<Verdict bg={colors.teal} fg={colors.white} label="三条都能用，但它们不是一回事">
				<span style={{ color: colors.yellow }}>回灌是止血，改任务书才是治本。</span>
				只用回灌，你会每周被同一个问题叫醒一次。
			</Verdict>

			<Note>
				⚠️ 它问你的每一个问题，都是<strong>第四道闸没过干净的证据</strong> ——
				<strong>回答一次是止血，写进第 4 段才是真的把那一格搬走。</strong>
			</Note>
		</Page>
	);
}
