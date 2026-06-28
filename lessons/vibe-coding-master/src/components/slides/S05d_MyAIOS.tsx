import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, fonts, border, shadow, shadowSm } from '../ui';

// 真实例子：讲师本人在用的个人 AI OS 文件层级（/Users/lightman/Documents/sites/ai-os）
// 三层信任级：结构化（可信可执行）/ 私密 / raw（原样存）
const TREE = [
	{ name: 'PROFILE.md', desc: '我是谁、偏好（AI 进来先读）', tier: 's' },
	{ name: 'CLAUDE.md / README.md', desc: '给 AI 的入口说明 + 数据流', tier: 's' },
	{ name: 'Rules/', desc: '铁律：00-iron-laws · 10-coding-principles', tier: 's' },
	{ name: 'Workflow/', desc: '我的 SOP（_template 起手）', tier: 's' },
	{ name: 'Projects/', desc: '各项目知识索引（au-company-tax…）', tier: 's' },
	{ name: 'Personal/', desc: '🔒 experiences · agenda · Finance（私密）', tier: 'p' },
	{ name: 'Feedback/', desc: 'raw：反馈 / 踩坑 / 历史（原样存）', tier: 'r' },
	{ name: 'Reference/', desc: 'raw：外部资料 / 文章（原样存）', tier: 'r' },
];
const TIER = {
	s: { label: '结构化 · 可信可执行 = SoT', color: colors.dark, dot: colors.blue },
	p: { label: '私密', color: colors.red, dot: colors.red },
	r: { label: 'RAW · 原样存，先不动', color: '#888', dot: '#bbb' },
};

export default function S05d_MyAIOS() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner style={{ flexDirection: 'column', justifyContent: 'center' }}>
				<div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
					<Tag bg={colors.dark} color={colors.yellow}>真实例子 · 我自己的 AI OS</Tag>
					<Title size="40px">一个个人 AI OS 长什么样 —— <span style={{ background: colors.yellow, padding: '0 8px' }}>就是一棵文件树</span></Title>
				</div>

				<div style={{ display: 'flex', gap: 24, alignItems: 'stretch' }}>
					{/* 文件树 */}
					<div style={{ flex: 1.6, background: colors.white, border, boxShadow: shadow, padding: '18px 22px' }}>
						<div style={{ fontFamily: fonts.mono, fontSize: 15, fontWeight: 700, color: '#999', marginBottom: 10 }}>~/sites/ai-os/</div>
						{TREE.map((t, i) => {
							const tier = TIER[t.tier as 's' | 'p' | 'r'];
							return (
								<motion.div key={t.name}
									initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.35, delay: 0.1 + i * 0.06 }}
									style={{ display: 'flex', alignItems: 'baseline', gap: 10, padding: '5px 0', borderBottom: '1px dashed #eee' }}>
									<span style={{ flexShrink: 0, width: 10, height: 10, borderRadius: 999, background: tier.dot, border: '2px solid #000', alignSelf: 'center' }} />
									<span style={{ flexShrink: 0, fontFamily: fonts.mono, fontSize: 17, fontWeight: 800, color: colors.black, minWidth: 230 }}>├─ {t.name}</span>
									<span style={{ fontSize: 14, color: '#666', lineHeight: 1.3 }}>{t.desc}</span>
								</motion.div>
							);
						})}
					</div>

					{/* 三层 + 数据流 */}
					<div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 12 }}>
						{(['s', 'p', 'r'] as const).map((k) => (
							<div key={k} style={{ background: colors.white, border, boxShadow: shadowSm, padding: '12px 14px', display: 'flex', alignItems: 'center', gap: 10 }}>
								<span style={{ width: 14, height: 14, borderRadius: 999, background: TIER[k].dot, border: '2px solid #000' }} />
								<span style={{ fontWeight: 800, fontSize: 15, color: TIER[k].color }}>{TIER[k].label}</span>
							</div>
						))}
						<div style={{ background: colors.dark, border, boxShadow: shadowSm, padding: '12px 14px', marginTop: 'auto' }}>
							<div style={{ fontFamily: fonts.mono, fontSize: 13, color: colors.yellow, fontWeight: 700 }}>数据流</div>
							<div style={{ color: colors.white, fontSize: 14, marginTop: 4, lineHeight: 1.45 }}>
								Feedback / Reference（raw）<b style={{ color: colors.yellow }}> → AI 整理 → </b>Rules / Workflow / Projects（结构化）
							</div>
						</div>
					</div>
				</div>

				<motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
					style={{ marginTop: 16, fontSize: 16, fontWeight: 600, color: '#444' }}>
					今晚你写的简历 <span style={{ fontFamily: fonts.mono, background: colors.yellow, padding: '2px 8px', border: '2px solid #000' }}>experiences.md</span> ，就是往你自己这棵树里放下<b style={{ color: colors.black }}>第一个文件</b>。
				</motion.p>
			</Inner>
		</Slide>
	);
}
