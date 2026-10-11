import { motion } from 'framer-motion';
import { Page, Head, ActBadge, Code, colors, fonts, border, radii } from '../deck';

/**
 * P13 · 最小插件骨架
 * 🔴 这一页的任务：让学员觉得这件事【小得不可思议】。
 * 整个 manifest 上屏 —— 它真的只有四行，这本身就是论点。
 * 字段来自已核实的技术事实（PRD §3）：name / version / description / author。
 */
const DIRS = [
	{ d: 'skills/', t: '技能' },
	{ d: 'agents/', t: '助手' },
	{ d: 'commands/', t: '命令' },
	{ d: 'hooks/', t: '钩子' },
];

export default function L15P13_MinimalPlugin() {
	return (
		<Page>
			<ActBadge act={3} />
			<Head sub="做一个能被安装的东西，最少需要什么？答案可能比你想的少得多。">
				那现在，做你自己的包
			</Head>

			<div style={{ display: 'flex', gap: 24, alignItems: 'flex-start' }}>
				<motion.div
					initial={{ opacity: 0, x: -18 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.18, duration: 0.45 }}
					style={{ flex: 1.1 }}
				>
					<Code
						label=".claude-plugin/plugin.json"
						code={`{
  "name": "my-handover",
  "version": "0.1.0",
  "description": "我的技能和钩子。",
  "author": { "name": "换成你的名字" }
}`}
					/>
					<p style={{ fontSize: 21, color: '#555', lineHeight: 1.7, marginTop: 14 }}>
						名字，版本，一句话描述，作者。<strong>一个能被安装的包，它的全部身份信息就是这四行。</strong>
					</p>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.36, duration: 0.45 }}
					style={{ flex: 1 }}
				>
					<div style={{
						padding: '22px 24px', background: colors.white, border,
						borderRadius: radii.panel, boxShadow: `6px 6px 0 ${colors.teal}`,
					}}>
						<div style={{ fontSize: 25, fontWeight: 900 }}>剩下的只要放对地方</div>
						<div style={{ display: 'flex', flexDirection: 'column', gap: 9, marginTop: 16 }}>
							{DIRS.map(x => (
								<div key={x.d} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
									<span style={{
										fontFamily: fonts.mono, fontSize: 19, fontWeight: 700,
										background: '#fdf6ec', border: `2px solid ${colors.black}`, borderRadius: radii.label,
										padding: '4px 12px', minWidth: 142,
									}}>{x.d}</span>
									<span style={{ fontSize: 21 }}>{x.t}</span>
								</div>
							))}
						</div>
						<p style={{ fontSize: 19, color: '#666', lineHeight: 1.65, marginTop: 16 }}>
							这些目录名是约定好的，你不能自己起。但你也不用写任何配置去声明它们 ——
							<strong>放对位置，它们就会被认出来。</strong>
						</p>
					</div>
				</motion.div>
			</div>

			<motion.div
				initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.85, duration: 0.5 }}
				style={{ marginTop: 'auto', fontSize: 23, color: '#555', lineHeight: 1.7 }}
			>
				课前包里那个 <code style={{ fontFamily: fonts.mono, background: colors.yellow, padding: '2px 8px', borderRadius: radii.label }}>p13-my-package</code> 目录，
				就是这样一个已经搭好的空骨架。接下来两步，我们把它换成你自己的。
			</motion.div>
		</Page>
	);
}
