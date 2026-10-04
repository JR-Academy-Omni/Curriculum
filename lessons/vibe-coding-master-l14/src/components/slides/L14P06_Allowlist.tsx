import { motion } from 'framer-motion';
import { Page, Head, ActBadge, Code, colors, radii } from '../deck';

/**
 * P06 · 读权限白名单
 * 🔴 三条原则里第三条是伏笔：白名单不是安全边界，是省事边界 —— 下一页翻车①证明它。
 *   所以这一页【不要】把第三条讲透，留给翻车。
 */
const RULES = [
	{ t: '只放不动你工作区的命令', s: '取远端更新的可以（它只写 .git 里的远端引用，不碰你的文件）；会把改动落到工作区的不行。' },
	{ t: '共享的进仓库，个人的不进', s: '共享白名单提交上去，个人覆盖放本地并忽略提交。' },
	{ t: '白名单不是安全边界', s: '它减少确认弹窗，不阻止任何事。', hint: true },
];

export default function L14P06_Allowlist() {
	return (
		<Page>
			<ActBadge act={2} />
			<Head sub="读权限好办：列一张白名单，里面全是只读检查类命令。">
				先给它眼睛
			</Head>

			<div style={{ display: 'flex', gap: 28, flex: 1, minHeight: 0 }}>
				<Code
					style={{ flex: '0 0 560px' }}
					label="放行列表里只放这类"
					code={`git status / diff / log / show / branch
git fetch / rev-list

ls / find / grep / wc / sort / head / tail

你自己那两个检查脚本`}
				/>

				<div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 14 }}>
					{RULES.map((r, i) => (
						<motion.div
							key={r.t}
							initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
							transition={{ delay: 0.2 + i * 0.14, duration: 0.4 }}
							style={{
								flex: 1, padding: '18px 22px', borderRadius: radii.card,
								border: `2px solid ${colors.dark}`,
								background: r.hint ? colors.dark : colors.white,
								color: r.hint ? colors.white : colors.black,
								boxShadow: r.hint ? `8px 8px 0 rgba(255,87,87,.55)` : `6px 6px 0 rgba(255,222,89,.9)`,
								display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 8,
							}}
						>
							<div style={{ fontSize: 26, fontWeight: 900, letterSpacing: -0.6 }}>{r.t}</div>
							<div style={{ fontSize: 19, lineHeight: 1.5, opacity: .75 }}>{r.s}</div>
							{r.hint && <div style={{ fontSize: 19, color: colors.yellow, fontWeight: 800 }}>那它是什么？下一页。</div>}
						</motion.div>
					))}
				</div>
			</div>
		</Page>
	);
}
