import { motion } from 'framer-motion';
import { Page, Head, ActBadge, TwoCol, colors, radii } from '../deck';

/**
 * P17 · 技能的双层结构
 * 🔴 降级方案要说清它差在哪：单目录 + 一条一致性检查【不是】等价物，
 *   它把「单副本」换成了「两副本加一条检查」。
 */
export default function L14P17_TwoLayers() {
	return (
		<Page>
			<ActBadge act={4} />
			<Head sub="一个技能分两层，而这一刀是承重的 —— 拆错了，可执行的版本和它的规范会开始互相不认。">
				规范归规范，执行归执行
			</Head>

			<TwoCol
				head={['规范层 —— 回答「为什么」', '执行层 —— 回答「怎么做」']}
				rows={[
					[
						<>这条规则<strong>为什么存在</strong><br />什么被禁，<strong>谁批的</strong></>,
						<>做什么、<strong>什么顺序</strong><br />用哪条查询</>,
					],
					[
						<>改得慢，要审</>,
						<>跟着流程走，改得快</>,
					],
				]}
			/>

			<motion.div
				initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.45 }}
				style={{ display: 'flex', gap: 18, marginTop: 24, flex: 1, minHeight: 0 }}
			>
				<div style={{
					flex: 1, padding: '20px 24px', borderRadius: radii.panel,
					border: `2px solid ${colors.green}`, background: 'rgba(126,217,87,.14)',
					fontSize: 21, lineHeight: 1.6,
				}}>
					<strong style={{ fontSize: 25 }}>两层之间只有一份拷贝</strong><br /><br />
					用相对符号链接连到 agent 会读的那个目录。
					<strong>两份拷贝就是「可执行版和它的规范开始互相不认」的开始。</strong>
					<br /><br />
					还有一条：<strong>执行层携带流程、指向规则，绝不复述规则。</strong>
				</div>

				<div style={{
					flex: 1, padding: '20px 24px', borderRadius: radii.panel,
					border: `2px solid ${colors.orange}`, background: 'rgba(255,145,77,.12)',
					fontSize: 21, lineHeight: 1.6,
				}}>
					<strong style={{ fontSize: 25 }}>不支持符号链接的环境</strong><br /><br />
					单目录 + 一条「两边必须一致」的检查。
					<br /><br />
					<strong style={{ color: colors.red }}>⚠️ 注意这是降级，不是等价。</strong>
					它把「单副本」换成了<strong>「两副本加一条检查」</strong> ——
					检查没跑的那天，你就有两份了。
				</div>
			</motion.div>
		</Page>
	);
}
