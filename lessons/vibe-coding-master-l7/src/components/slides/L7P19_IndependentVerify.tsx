import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, fonts, border, shadow } from '../ui';

// P17：不重做探索，但要独立验收
// SoT：蓝图 v1.0 §9.12 三件事对照 + verifier 模板
const THREE = [
	{ act: '主 Agent 再完整搜索一遍', should: '通常不应该', color: colors.red, why: '等于付两次探索成本' },
	{ act: '主 Agent 打开关键证据、抽查路径', should: '应该', color: colors.green, why: '验证结论可追溯' },
	{ act: '执行 brief 里的测试或验收命令', should: '必须', color: colors.dark, why: '判据来自 Agent 自述之外' },
];

const TEMPLATE = `你是只读 verifier。
不要修改成品，也不要根据实现过程替作者辩护。

输入：成品 / diff / 需求 / 验收规则。

逐条输出：
- criterion: ______
- verdict: pass | fail | cannot_determine
- evidence: ______
- required_fix_or_missing_evidence: ______

只有所有必选 criterion 都 pass
才能给总体 green。`;

export default function L7P19_IndependentVerify() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner split>
				<div style={{ flex: '0 0 50%' }}>
					<div style={{ display: 'flex', gap: 10, marginBottom: 8 }}>
						<Tag bg={colors.dark}>验</Tag>
						<Tag bg={colors.red}>铁律三</Tag>
					</div>
					<Title size="38px" style={{ marginBottom: 6 }}>
						不重做探索，<span style={{ background: colors.yellow, padding: '0 8px' }}>但要独立验收</span>
					</Title>
					<p style={{ fontSize: 16, color: '#555', fontWeight: 500, marginBottom: 16 }}>
						「派了就认」和「必须验收」不矛盾——它们说的是<strong>两件不同的事</strong>。
					</p>

					<div style={{ border, boxShadow: shadow, background: colors.white, marginBottom: 18 }}>
						{THREE.map((t, i) => (
							<motion.div
								key={t.act}
								initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.35, delay: 0.15 + i * 0.13 }}
								style={{ display: 'flex', alignItems: 'stretch', borderBottom: i < THREE.length - 1 ? '2px solid #eee' : 'none' }}
							>
								<div style={{ flex: 1, padding: '13px 15px', fontSize: 15.5, fontWeight: 600, color: colors.dark, display: 'flex', alignItems: 'center', lineHeight: 1.4 }}>
									{t.act}
								</div>
								<div style={{ flex: '0 0 96px', borderLeft: '2px solid #eee', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
									<span style={{
										fontFamily: fonts.mono, fontSize: 12.5, fontWeight: 700, padding: '4px 9px',
										background: t.color, color: t.color === colors.red || t.color === colors.dark ? colors.white : colors.black,
									}}>{t.should}</span>
								</div>
								<div style={{ flex: '0 0 172px', padding: '13px 14px', borderLeft: '2px solid #eee', fontSize: 13, color: '#666', display: 'flex', alignItems: 'center', lineHeight: 1.4 }}>
									{t.why}
								</div>
							</motion.div>
						))}
					</div>

					<motion.div
						initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4, delay: 0.6 }}
						style={{ border, boxShadow: shadow, background: '#fff2f2', padding: '14px 17px' }}
					>
						<div style={{ fontSize: 17, fontWeight: 800, color: colors.dark, lineHeight: 1.55, marginBottom: 7 }}>
							「再找一个 Agent 看看」<span style={{ color: colors.red }}>不是 verifier</span>。
						</div>
						<div style={{ fontSize: 14, color: '#666', lineHeight: 1.6 }}>
							它不知道要查什么，回来一句「看起来没问题」——
							你付了成本，买了个<strong>安慰</strong>。
						</div>
					</motion.div>
				</div>

				<div style={{ flex: 1, minWidth: 0 }}>
					<div style={{ fontFamily: fonts.mono, fontSize: 12, color: colors.blue, letterSpacing: 1.4, fontWeight: 700, marginBottom: 9 }}>
						合格 verifier 长什么样
					</div>
					<motion.pre
						initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4, delay: 0.3 }}
						style={{
							border, boxShadow: shadow, background: colors.dark, color: '#e8e8f0',
							padding: '15px 17px', fontFamily: fonts.mono, fontSize: 13, lineHeight: 1.75,
							whiteSpace: 'pre-wrap', margin: '0 0 16px',
						}}
					>
						{TEMPLATE}
					</motion.pre>

					<div style={{ display: 'flex', gap: 12, marginBottom: 16 }}>
						{[
							{ t: '只拿成品和判据', d: '不看你怎么做的——它的强项就是没被你的过程污染' },
							{ t: '优先只读', d: '不替实现者顺手改代码，否则它就成了第二个实现者' },
						].map((c, i) => (
							<motion.div
								key={c.t}
								initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.33, delay: 0.55 + i * 0.12 }}
								style={{ flex: 1, border, boxShadow: '3px 3px 0 #000', background: colors.white, padding: '11px 14px' }}
							>
								<div style={{ fontSize: 14.5, fontWeight: 800, color: colors.blue, marginBottom: 5 }}>{c.t}</div>
								<div style={{ fontSize: 12.5, color: '#666', lineHeight: 1.5 }}>{c.d}</div>
							</motion.div>
						))}
					</div>

					<motion.div
						initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4, delay: 0.85 }}
						style={{
							padding: '15px 19px', background: colors.dark, color: colors.white,
							border, boxShadow: shadow,
						}}
					>
						<div style={{ fontSize: 18, fontWeight: 800, lineHeight: 1.5, marginBottom: 8 }}>
							独立 Agent 的价值是<span style={{ color: colors.yellow }}>补充不同视角</span>，
							不是制造<span style={{ color: colors.yellow }}>第二份自信</span>。
						</div>
						<div style={{ fontSize: 14, opacity: 0.85, lineHeight: 1.6, paddingTop: 9, borderTop: '2px solid rgba(255,255,255,0.2)' }}>
							确定性测试仍优先于模型判断；高风险内容仍需要<strong>人类</strong>验收。
						</div>
					</motion.div>
				</div>
			</Inner>
		</Slide>
	);
}
