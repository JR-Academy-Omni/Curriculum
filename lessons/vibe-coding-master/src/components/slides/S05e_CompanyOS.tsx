import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, fonts, border, shadow, shadowSm } from '../ui';

// 从个人联想到企业：公司 AI OS 层级（真实结构：jr-academy monorepo + jr-academy-memory）
const TREE = [
	{ name: 'CLAUDE.md', desc: '公司级铁律 / 编码规范（所有 AI 进来先读）', map: '≈ 个人 PROFILE + Rules' },
	{ name: 'docs/', desc: 'PRD 群 + 规范（PROJECT_CONVENTIONS…）', map: '≈ 个人 Rules / Workflow' },
	{ name: 'jr-academy-brand/', desc: '品牌视觉 SoT（tokens / DESIGN）', map: '视觉真相源' },
	{ name: 'curriculum/', desc: '课程内容 SoT', map: '内容真相源' },
	{ name: 'jr-academy-memory/', desc: '团队共享记忆：hr · rules · decisions · meetings · products', map: '≈ 个人 Personal/经验' },
	{ name: '各 project/CLAUDE.md', desc: '每个项目自己的 SoT（web-zh · admin · api…）', map: '≈ 个人 Projects/' },
];

export default function S05e_CompanyOS() {
	return (
		<Slide bg={colors.darkBg}>
			<Inner style={{ flexDirection: 'column', justifyContent: 'center' }}>
				<div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 14 }}>
					<Tag bg={colors.red}>从个人 → 联想到企业</Tag>
					<Title white size="40px">公司的 AI OS —— <span style={{ background: colors.yellow, color: colors.black, padding: '0 8px' }}>同一套模式，放大到公司</span></Title>
				</div>

				<div style={{ background: colors.white, border, boxShadow: shadow, padding: '18px 22px' }}>
					<div style={{ fontFamily: fonts.mono, fontSize: 15, fontWeight: 700, color: '#999', marginBottom: 10 }}>jr-academy/  （公司 AI OS · 真实在用）</div>
					{TREE.map((t, i) => (
						<motion.div key={t.name}
							initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.35, delay: 0.1 + i * 0.07 }}
							style={{ display: 'flex', alignItems: 'baseline', gap: 10, padding: '6px 0', borderBottom: '1px dashed #eee' }}>
							<span style={{ flexShrink: 0, fontFamily: fonts.mono, fontSize: 17, fontWeight: 800, color: colors.black, minWidth: 230 }}>├─ {t.name}</span>
							<span style={{ flex: 1, fontSize: 14, color: '#555', lineHeight: 1.3 }}>{t.desc}</span>
							<span style={{ flexShrink: 0, fontFamily: fonts.mono, fontSize: 12, color: colors.purple, fontWeight: 700 }}>{t.map}</span>
						</motion.div>
					))}
				</div>

				<motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}
					style={{ marginTop: 16, display: 'flex', gap: 14, alignItems: 'center', flexWrap: 'wrap' }}>
					<span style={{ background: colors.yellow, border, boxShadow: shadowSm, padding: '8px 14px', fontWeight: 800, fontSize: 16 }}>
						个人怎么搭，公司就怎么搭 —— 只是 PROFILE 变成 CLAUDE.md、经验变成团队记忆库
					</span>
					<span style={{ fontSize: 15, color: '#cfd3e6' }}>
						企业 AI OS 是<b style={{ color: colors.white }}>后面的事</b>，今晚先把<b style={{ color: colors.yellow }}>你自己的</b>建起来。
					</span>
				</motion.div>
			</Inner>
		</Slide>
	);
}
