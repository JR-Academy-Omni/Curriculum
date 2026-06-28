import { motion } from 'framer-motion';
import { Slide, Inner, Half, Title, Tag, colors, fonts, border, shadow, shadowSm } from '../ui';

// 为什么记忆系统用 Markdown / YAML，不用 JSON —— 大模型的特点
const GOOD = ['结构清晰、像人话，模型一眼读懂', 'token 少，省上下文', '容错高：少个空格 / 缩进不崩', 'LLM 训练语料里见得最多'];
const BAD = ['括号 / 引号 / 逗号严格，错一个就崩', '嵌套深、token 多，读着费劲', 'LLM 自己也容易生成出语法错', '给机器解析的，不是给模型读的'];

export default function S05f_MdNotJson() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner style={{ flexDirection: 'column', justifyContent: 'center' }}>
				<div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 6 }}>
					<Tag bg={colors.dark} color={colors.yellow}>大模型的特点</Tag>
					<Title size="40px">给 AI 看的东西，用 <span style={{ background: colors.yellow, padding: '0 8px' }}>Markdown / YAML</span>，别用 JSON</Title>
				</div>

				<div style={{ display: 'flex', gap: 22, marginTop: 20, alignItems: 'stretch' }}>
					<Half>
						<motion.div initial={{ opacity: 0, x: -36 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.45 }}
							style={{ background: colors.white, border, boxShadow: shadow, padding: '18px 22px', height: '100%' }}>
							<div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
								<span style={{ background: colors.green, border, padding: '3px 10px', fontWeight: 900, fontFamily: fonts.mono }}>✅ Markdown / YAML</span>
							</div>
							{GOOD.map((g) => (
								<div key={g} style={{ display: 'flex', gap: 8, marginTop: 12, fontSize: 16, lineHeight: 1.4 }}>
									<span style={{ color: colors.green, fontWeight: 900 }}>›</span><span>{g}</span>
								</div>
							))}
						</motion.div>
					</Half>
					<Half>
						<motion.div initial={{ opacity: 0, x: 36 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.45, delay: 0.15 }}
							style={{ background: '#f4f4f4', border, boxShadow: shadow, padding: '18px 22px', height: '100%' }}>
							<div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
								<span style={{ background: '#ddd', border, padding: '3px 10px', fontWeight: 900, fontFamily: fonts.mono }}>⚠️ JSON</span>
							</div>
							{BAD.map((b) => (
								<div key={b} style={{ display: 'flex', gap: 8, marginTop: 12, fontSize: 16, lineHeight: 1.4, color: '#555' }}>
									<span style={{ color: '#bbb', fontWeight: 900 }}>›</span><span>{b}</span>
								</div>
							))}
						</motion.div>
					</Half>
				</div>

				<motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
					style={{ marginTop: 18, fontSize: 17, fontWeight: 600, color: '#444' }}>
					所以个人 / 公司的 SoT、记忆、CLAUDE.md <b style={{ color: colors.black }}>清一色 <span style={{ fontFamily: fonts.mono }}>.md</span></b> —— 你看那棵 ai-os 树，全是 Markdown。
				</motion.p>
			</Inner>
		</Slide>
	);
}
