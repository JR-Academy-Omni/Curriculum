import { Slide, Inner, Title, Tag, colors, fonts, border, shadow } from '../ui';
import { slideFromLeft, slideFromRight } from '../ui';
import { motion } from 'framer-motion';

// 记忆的载体很多 —— git 只是其中一种；治理红线跨载体通用
const media = [
	{ name: '文件 / Git', why: '可版本化 · 可 diff · agent 直接读', use: '规则 · PRD · 脱敏知识', color: '#7ED957' },
	{ name: '向量库 (RAG)', why: '海量 · 语义召回', use: '长文档 · 法条 · 历史', color: '#38B6FF' },
	{ name: '托管记忆服务', why: '平台托管的 long-term memory', use: '跨会话用户画像 · 偏好', color: '#CB6CE6' },
	{ name: 'Wiki / Notion', why: '人友好 · 权限可细控', use: '敏感 PII · 协作文档', color: '#FF914D' },
	{ name: '知识图谱', why: '结构化实体关系', use: '关系强的业务领域', color: '#10b981' },
	{ name: '元记忆 (meta)', why: '记忆的记忆 · 知道自己记过什么、何时该调', use: '自省 · 索引 · 决定记/忘', color: '#ff5757' },
	{ name: 'Web3 / 去中心化', why: '去中心存储 (IPFS/Arweave) + 链上溯源', use: '永久 · 可验证 · 可携带 · 归用户', color: '#FFDE59' },
];

export default function S14_GitVsNotion() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner style={{ flexDirection: 'column', gap: 0, justifyContent: 'center' }}>
				<motion.div {...slideFromLeft}>
					<Tag bg={colors.dark}>载体 · 别把「记忆」等于 git</Tag>
					<Title size="40px" style={{ marginTop: 8, lineHeight: 1.16 }}>
						记忆住在哪？<span style={{ background: colors.yellow, padding: '0 8px' }}>Git 只是其中一种</span>
					</Title>
					<p style={{ fontSize: 16, color: '#555', marginTop: 6 }}>
						同一套记忆逻辑，可以落在很多系统上 —— 按「<b>权限 / 检索方式 / 共享范围</b>」选载体，不是只有 git。
					</p>
				</motion.div>

				<motion.div {...slideFromRight} style={{ marginTop: 12, display: 'flex', flexDirection: 'column', gap: 6 }}>
					{media.map((m, i) => (
						<motion.div key={m.name}
							initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.12 + i * 0.07 }}
							style={{ display: 'flex', alignItems: 'center', background: '#fff', border, boxShadow: shadow, padding: '6px 14px' }}>
							<div style={{ flexShrink: 0, width: 8, height: 26, background: m.color, marginRight: 14 }} />
							<div style={{ width: 196, flexShrink: 0, fontSize: 16, fontWeight: 900, fontFamily: fonts.mono }}>{m.name}</div>
							<div style={{ flex: 1, fontSize: 14, color: '#666' }}>{m.why}</div>
							<div style={{ width: 256, flexShrink: 0, fontSize: 14, fontWeight: 700, color: '#333' }}>→ {m.use}</div>
						</motion.div>
					))}
				</motion.div>

				{/* 跨载体通用的治理红线 */}
				<motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}
					style={{ marginTop: 12, background: colors.dark, color: colors.white, border, boxShadow: `6px 6px 0 ${colors.red}`, padding: '11px 22px' }}>
					<span style={{ fontFamily: fonts.mono, fontSize: 13, color: colors.red, fontWeight: 800 }}>不管选哪种，一条治理红线 →</span>
					<span style={{ fontSize: 16, marginLeft: 10, lineHeight: 1.5 }}>
						脱敏 / 可共享 → <b style={{ color: colors.green }}>版本化系统(git)</b>；敏感 PII（简历 · 薪酬 · 学员隐私）→ <b style={{ color: colors.orange }}>受控系统(Notion/DB)</b>。
						匠人的 git + Notion 组合，只是这条红线下的<b style={{ color: colors.yellow }}>一种合理解</b>。
					</span>
				</motion.div>
			</Inner>
		</Slide>
	);
}
