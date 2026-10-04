import { motion } from 'framer-motion';
import { Page, Head, ActBadge, Code, colors, fonts, radii } from '../deck';

/**
 * P05 · 第一个落到文件上的决定 🎯
 * 🔴 「这是全部权限设计里最便宜、收益最高的一条」—— 这句话要上屏。
 */
export default function L14P05_WriteItDown() {
	return (
		<Page>
			<ActBadge act={1} mode="🎯 动手" />
			<Head sub="现在把刚才那条禁令，写进 agent 真的会读的那份文件里。不是记在脑子里。">
				写死它不许碰哪个仓
			</Head>

			<div style={{ display: 'flex', gap: 28, flex: 1, minHeight: 0 }}>
				<Code
					style={{ flex: 1 }}
					label="指令文件里加这么一段"
					hi={[2, 3]}
					code={`## 这个 agent 绝对不许做的事

- 不许向产品仓写入任何内容
  （仓库名：<把你们的产品仓名字列在这里>）
- 读产品仓是对的，也应该鼓励；写是禁止的。`}
				/>

				<motion.div
					initial={{ opacity: 0, x: 22 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3, duration: 0.45 }}
					style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 18 }}
				>
					<div style={{
						padding: '20px 24px', borderRadius: radii.panel, background: colors.yellow,
						border: `2px solid ${colors.black}`, fontSize: 28, fontWeight: 900,
						fontFamily: fonts.heading, lineHeight: 1.4, letterSpacing: -0.8,
					}}>
						这是全部权限设计里<br />最便宜、收益最高的一条。
					</div>

					<div style={{ fontSize: 22, lineHeight: 1.7, color: '#5a524c' }}>
						为什么值这么多：产品仓有<strong>自己的审查人</strong>和<strong>自己的检查</strong>。
						一个 agent 同时能写两边，<strong>等于把两套互不相干的审查制度短路了</strong>。
						<br /><br />
						而且这一条<strong>不需要任何工具支持</strong> —— 它只是一句写下来的话，
						但它是今天唯一一条你现在立刻就能做完的。
					</div>

					<div style={{
						marginTop: 'auto', padding: '14px 18px', borderRadius: radii.card,
						border: `2px solid ${colors.dark}`, background: 'rgba(56,182,255,.12)',
						fontSize: 20, lineHeight: 1.55,
					}}>
						💬 写完在聊天框打 <strong>1</strong>。
						<strong>把仓库名真的列进去</strong>，写「产品仓」三个字不算。
					</div>
				</motion.div>
			</div>
		</Page>
	);
}
