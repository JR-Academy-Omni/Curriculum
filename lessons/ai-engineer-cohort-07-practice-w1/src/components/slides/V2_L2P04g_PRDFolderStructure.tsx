// Migrated teaching page; original source: lessons/vibe-coding-master-l2/src/components/slides/L2P04g_PRDFolderStructure.tsx
import { Slide, Inner, Title, Tag, colors, fonts, border, shadow } from '../courseUi';
import { motion } from 'framer-motion';
const folders = [
    ['README.md', 'PRD 命名、状态字段、评审方式', 0],
    ['templates/', '可复用模板', 0],
    ['prd-template.md', '标准 PRD 模板', 1],
    ['review-checklist.md', 'PRD 互审 checklist', 1],
    ['features/', '按功能 / 产品能力分组', 0],
    ['chat-summary/', '聊天总结功能', 1],
    ['PRD.md', '长期维护的需求文档', 2],
    ['CHANGELOG.md', '这个功能的需求变更记录', 2],
    ['resume-match/', '简历匹配功能', 1],
    ['PRD.md', '状态写在文档里，不搬目录', 2],
    ['ai-note-summary/', 'AI 笔记总结功能', 1],
    ['PRD.md', '同一个功能持续迭代', 2],
];
const states = ['Draft', 'Ready', 'In Progress', 'Review', 'Done', 'Dropped'];
const header = `# PRD: Chat Summary

Status: Ready
Owner: Lightman
Version: v1.2
Last updated: 2026-07-05

## Change Log
- v1.2: Add copy button
- v1.1: Support .json upload`;
export default function L2P04g_PRDFolderStructure() {
    return (<Slide bg={colors.warmBg}>
			<Inner style={{ flexDirection: 'column', gap: 22 }}>
				<motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
					<Tag bg={colors.red}>PRD Folder Structure</Tag>
					<Title size="46px" style={{ marginTop: 10 }}>
						PRD 按功能长期维护：<span style={{ color: colors.red }}>状态写进文档，不靠搬文件夹</span>
					</Title>
				</motion.div>

				<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, alignItems: 'stretch', minHeight: 0 }}>
					<motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.42, delay: 0.08 }} style={{ borderRadius: 18, background: '#050816', color: '#f8fafc', border, boxShadow: shadow, padding: '22px 26px', fontFamily: fonts.mono }}>
						<div style={{ color: colors.yellow, fontWeight: 900, fontSize: 15, marginBottom: 14 }}>docs/prd/</div>
						{folders.map(([name, desc, depth]) => (<div key={`${name}-${desc}`} style={{ display: 'grid', gridTemplateColumns: 'minmax(330px, 1fr) 1fr', gap: 12, fontSize: 18, lineHeight: 1.4, marginTop: 4 }}>
								<div style={{ fontWeight: 900, paddingLeft: Number(depth) * 30 }}>
									<span style={{ color: '#94a3b8' }}>├── </span>{name}
								</div>
								<div style={{ color: '#dbeafe', fontWeight: 800 }}>{desc ? `# ${desc}` : ''}</div>
							</div>))}
					</motion.div>

					<motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.42, delay: 0.18 }} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
						<div style={{ borderRadius: 18, background: colors.dark, color: colors.white, border, boxShadow: shadow, padding: '20px 22px' }}>
							<div style={{ fontFamily: fonts.heading, fontSize: 28, fontWeight: 900, color: colors.yellow }}>PRD 状态流</div>
							<div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 16 }}>
								{states.map((s, i) => (<div key={s} style={{ borderRadius: 18, background: i === 1 ? colors.yellow : colors.white, color: colors.black, border, padding: '8px 11px', fontSize: 14, fontWeight: 900 }}>
										{s}
									</div>))}
							</div>
							<div style={{ marginTop: 12, fontSize: 15, fontWeight: 760, lineHeight: 1.45, color: '#d1d5db' }}>
								状态写在每份 PRD 的 header 里。不要把文件从 active/ 搬到 done/，长期维护会很痛。
							</div>
						</div>

						<div style={{ borderRadius: 18, background: '#050816', color: '#f8fafc', border, boxShadow: shadow, padding: '16px 18px', fontFamily: fonts.mono, fontSize: 13.5, lineHeight: 1.45, whiteSpace: 'pre-wrap' }}>
							{header}
						</div>

						<div style={{ borderRadius: 18, background: colors.yellow, border, boxShadow: shadow, padding: '17px 19px' }}>
							<div style={{ fontFamily: fonts.heading, fontSize: 24, fontWeight: 900, color: colors.black }}>目录按功能，状态在文档内</div>
							<div style={{ marginTop: 5, fontSize: 16, fontWeight: 760, color: '#374151', lineHeight: 1.42 }}>
								`features/chat-summary/PRD.md` 会从 v1 一直活到 v10；需求变了就改同一份文档和 Change Log。
							</div>
						</div>
					</motion.div>
				</div>
			</Inner>
		</Slide>);
}
