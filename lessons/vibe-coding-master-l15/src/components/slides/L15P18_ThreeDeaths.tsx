import { motion } from 'framer-motion';
import { Page, Head, ActBadge, Code, colors, fonts, border, radii } from '../deck';

/**
 * P18 · 装不上，通常是这三种
 * 🔴 教学决定二（PRD §0.5）：正面给规矩，不赌学员犯错。
 *    三种死法正面讲，【不做现场演示】，不让学员故意把包装坏。
 * 第三种的解法直接接第四幕 —— 交接说明。
 */
const DEATHS = [
	{
		n: '一', t: '路径写死了', c: colors.red,
		sym: '在你机器上好好的，到别人那儿什么都不发生，而且不报错。',
		fix: '用那个路径占位符。',
	},
	{
		n: '二', t: '东西放错了目录', c: colors.orange,
		sym: '装上了，但那个技能或者钩子像不存在一样。',
		fix: '那几个目录名是约定好的，不能自己起。',
	},
	{
		n: '三', t: '依赖了只有你有的东西', c: colors.purple,
		sym: '别人一装就报错，错误信息指向一个他没有的文件、命令、或者凭据。',
		fix: '包只能依赖两样：它自己带着的，和那台机器上一定有的。',
	},
];

export default function L15P18_ThreeDeaths() {
	return (
		<Page>
			<ActBadge act={3} />
			<Head sub="我正面讲一遍，你们不用自己去试。">装不上，通常是这三种</Head>

			<div style={{ display: 'flex', gap: 18 }}>
				{DEATHS.map((d, i) => (
					<motion.div
						key={d.n}
						initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.15 + i * 0.13, duration: 0.45 }}
						style={{
							flex: 1, background: colors.white, border, borderRadius: radii.panel,
							boxShadow: `6px 6px 0 ${d.c}`, overflow: 'hidden',
						}}
					>
						<div style={{
							padding: '12px 20px', background: d.c, borderBottom: border,
							fontFamily: fonts.heading, fontSize: 24, fontWeight: 900, color: colors.white,
						}}>第{d.n}种 · {d.t}</div>
						<div style={{ padding: '18px 20px' }}>
							<div style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 800, letterSpacing: 1, color: '#999' }}>症状</div>
							<p style={{ fontSize: 20, lineHeight: 1.65, marginTop: 7 }}>{d.sym}</p>
							<div style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 800, letterSpacing: 1, color: '#999', marginTop: 16 }}>解法</div>
							<p style={{ fontSize: 20, lineHeight: 1.65, marginTop: 7, fontWeight: 700 }}>{d.fix}</p>
						</div>
					</motion.div>
				))}
			</div>

			<motion.div
				initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.75, duration: 0.5 }}
				style={{ marginTop: 26, fontSize: 24, lineHeight: 1.7 }}
			>
				第三种还有后半句：除此之外的所有东西，<strong>都必须在交接说明里写出来</strong>。
				而交接说明长什么样，就是下一幕的内容。
			</motion.div>

			<motion.div
				initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 0.5 }}
				style={{ marginTop: 'auto' }}
			>
				<Code label="另外：做完先验证再交" code={`claude plugin validate p13-my-package`} size={21} />
			</motion.div>
		</Page>
	);
}
