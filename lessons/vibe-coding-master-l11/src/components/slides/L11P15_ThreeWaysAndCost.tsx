import { motion } from 'framer-motion';
import { colors, border } from '../ui';
import { Page, PageHead, Verdict } from '../deck';

/**
 * P15 · 让它不卡住的三条做法 ⭐
 * 🔴 §20：「代价」列的视觉权重必须高于「做法」列。
 *    只讲做法就是在教人踩坑。
 * 这一页讲完，第一次说收口立论（§8.2）。
 */
const WAYS = [
	{
		n: 1, name: '提前批', how: '把它需要的工具逐条预先批准',
		cost: '你批的是**工具类别**，不是**具体那次**。批了「能改文件」，它改哪个文件你管不着',
	},
	{
		n: 2, name: '取消问', how: '用一种「不询问、不等待」的模式跑',
		cost: '它连**该问的问题**也不问了。业务决定它自己做',
	},
	{
		n: 3, name: '全放开', how: '关掉所有检查',
		cost: '**只在隔离容器里做。** 这个模式对内容注入没有任何防护',
	},
];

function Cost({ text }: { text: string }) {
	return (
		<>
			{text.split('**').map((seg, i) =>
				i % 2 ? <strong key={i} style={{ color: colors.red }}>{seg}</strong> : <span key={i}>{seg}</span>
			)}
		</>
	);
}

export default function L11P15_ThreeWaysAndCost() {
	return (
		<Page>
			<PageHead phase="talk" title="让它不卡住，有三条做法" sub="每一条都带一笔代价 —— 代价这一列才是重点。" />

			<div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 12, minHeight: 0 }}>
				{WAYS.map((w, i) => (
					<motion.div
						key={w.n}
						initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.35, delay: i * 0.1 }}
						style={{ display: 'flex', gap: 14, flex: 1, minHeight: 0 }}
					>
						<div style={{
							flex: 0.85, border, background: colors.white, boxShadow: '4px 4px 0 #000',
							padding: '13px 18px', display: 'flex', flexDirection: 'column', justifyContent: 'center',
						}}>
							<div style={{ fontSize: 25, fontWeight: 900, color: colors.dark }}>{w.n}. {w.name}</div>
							<div style={{ fontSize: 20, color: '#777', marginTop: 4, lineHeight: 1.4 }}>{w.how}</div>
						</div>
						<div style={{
							flex: 1.6, border: `3px solid ${colors.red}`, background: '#fff0f0',
							boxShadow: `6px 6px 0 ${colors.red}`, padding: '13px 20px',
							display: 'flex', alignItems: 'center',
						}}>
							<div style={{ fontSize: 23, lineHeight: 1.45, color: colors.black, fontWeight: 600 }}>
								<Cost text={w.cost} />
							</div>
						</div>
					</motion.div>
				))}
			</div>

			<Verdict bg={colors.dark} label="三条都能让它不卡住 —— 但没有一条能让它做对">
				因为你取消的只是<span style={{ color: colors.yellow }}>那次提问</span>。那个决定还在，只是换人做了。
			</Verdict>
		</Page>
	);
}
