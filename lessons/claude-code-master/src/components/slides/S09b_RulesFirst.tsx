import { Slide, Inner, Half, Title, Tag, colors, fonts, border, shadow } from '../ui';
import { slideFromLeft, slideFromRight } from '../ui';
import { motion } from 'framer-motion';

// 第一要务 = 构建 rules，但只写 LLM 基线之上的增量
const deltas = [
	{ t: '① 你们特有的', d: '公司记账政策 / 审批流 / 内部口径 —— LLM 不可能知道' },
	{ t: '② LLM 会搞错的', d: '本地最新特例，如「澳洲 GST 不要假设统一 10%」' },
	{ t: '③ 你要的默认偏好', d: '输出格式 / 命名 / 它该默认遵守的规范' },
];

export default function S09b_RulesFirst() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner style={{ flexDirection: 'column' }}>
				<motion.div {...slideFromLeft}>
					<Tag bg={colors.red}>第一要务</Tag>
					<Title size="46px" style={{ marginTop: 12, lineHeight: 1.16 }}>
						做 AI coding / agent，第一件事永远是<span style={{ background: colors.yellow, padding: '0 8px' }}>构建 rules</span>
					</Title>
				</motion.div>

				<motion.div {...slideFromRight} style={{ marginTop: 18, display: 'flex', gap: 18 }}>
					{/* 左：狭义 / 广义两层 rules */}
					<Half style={{ gap: 12 }}>
						<div style={{ background: '#fff', border, boxShadow: shadow, padding: '14px 18px' }}>
							<div style={{ fontFamily: fonts.mono, fontSize: 13, color: colors.blue, fontWeight: 800 }}>狭义 rules</div>
							<div style={{ fontSize: 17, fontWeight: 800, marginTop: 4 }}>代码规范 · 设计规范 · 命名 · 架构约束</div>
						</div>
						<div style={{ background: '#fff', border, boxShadow: shadow, padding: '14px 18px' }}>
							<div style={{ fontFamily: fonts.mono, fontSize: 13, color: colors.purple, fontWeight: 800 }}>广义 rules</div>
							<div style={{ fontSize: 17, fontWeight: 800, marginTop: 4 }}>公司规则 · 产品要求 · 业务背景 · 行业知识与规范</div>
						</div>
						<div style={{ background: colors.dark, color: colors.white, border, boxShadow: `5px 5px 0 ${colors.red}`, padding: '13px 18px', fontSize: 15.5, lineHeight: 1.5 }}>
							两者都是 rules —— 但<b style={{ color: colors.yellow }}>不等于把所有数据都搬进来</b>。
						</div>
					</Half>

					{/* 右：delta 原则 + 澳洲会计例子 */}
					<Half>
						<div style={{ background: '#fff', border, boxShadow: shadow, padding: '16px 18px', height: '100%' }}>
							<div style={{ fontSize: 19, fontWeight: 900 }}>例：做一个澳洲会计 app</div>
							<div style={{ display: 'flex', gap: 10, marginTop: 10 }}>
								<div style={{ flex: 1, background: '#fff0f0', border: `2px solid ${colors.red}`, padding: '9px 11px', fontSize: 14, lineHeight: 1.45 }}>
									<b style={{ color: colors.red }}>❌</b> 把整部澳洲会计法下载塞进 rules
								</div>
								<div style={{ flex: 1, background: '#f0fdf4', border: `2px solid #0a8a3a`, padding: '9px 11px', fontSize: 14, lineHeight: 1.45 }}>
									<b style={{ color: '#0a8a3a' }}>✅</b> 信任 LLM 已懂的会计 / GAAP 基线
								</div>
							</div>
							<div style={{ fontFamily: fonts.mono, fontSize: 12.5, color: '#888', fontWeight: 700, marginTop: 12, marginBottom: 6 }}>rules 只写「基线之上的增量」三类 ↓</div>
							{deltas.map((d) => (
								<div key={d.t} style={{ display: 'flex', gap: 8, padding: '4px 0', fontSize: 13.5, lineHeight: 1.4 }}>
									<b style={{ color: colors.red, flexShrink: 0 }}>{d.t}</b>
									<span style={{ color: '#555' }}>{d.d}</span>
								</div>
							))}
						</div>
					</Half>
				</motion.div>

				<motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}
					style={{ marginTop: 16, alignSelf: 'flex-start', background: colors.green, color: colors.black, padding: '11px 22px', border, boxShadow: shadow, fontSize: 17, fontWeight: 800 }}>
					判据：LLM 已经会的别写，它不知道 / 会搞错的才写 —— 预训练知识本身就是一份免费 SoT，你只在上面叠 delta。
				</motion.div>
			</Inner>
		</Slide>
	);
}
