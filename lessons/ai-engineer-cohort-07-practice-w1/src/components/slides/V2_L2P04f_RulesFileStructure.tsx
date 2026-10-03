// Migrated teaching page; original source: lessons/vibe-coding-master-l2/src/components/slides/L2P04f_RulesFileStructure.tsx
import { Slide, Inner, Title, Tag, colors, fonts, border, shadow } from '../courseUi';
import { motion } from 'framer-motion';
const tree = [
    ['README.md', '总体概述和指引', 0],
    ['architecture.md', '系统架构规范', 0],
    ['frontend/', '', 0],
    ['component.md', '前端组件开发规范', 1],
    ['styling.md', '样式和主题规范', 1],
    ['state.md', '状态管理规范', 1],
    ['backend/', '', 0],
    ['api-design.md', 'API 设计规范', 1],
    ['database.md', '数据库使用规范', 1],
    ['platform-adapter.md', '平台适配器规范', 1],
    ['workflow/', '', 0],
    ['git.md', 'Git 使用规范', 1],
    ['ci-cd.md', 'CI/CD 流程规范', 1],
    ['code-quality/', '', 0],
    ['naming.md', '命名规范', 1],
    ['testing.md', '测试规范', 1],
    ['performance.md', '性能优化规范', 1],
];
export default function L2P04f_RulesFileStructure() {
    return (<Slide bg={colors.warmBg}>
			<Inner style={{ flexDirection: 'column', gap: 22 }}>
				<motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
					<Tag bg={colors.dark}>Rules File Structure</Tag>
					<Title size="46px" style={{ marginTop: 10 }}>
						Rules 不要写成一坨：<span style={{ color: colors.red }}>按领域拆成可维护文件</span>
					</Title>
				</motion.div>

				<div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 20, alignItems: 'stretch', minHeight: 0 }}>
					<motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.42, delay: 0.08 }} style={{ borderRadius: 18, background: '#050816', color: '#f8fafc', border, boxShadow: shadow, padding: '22px 26px', fontFamily: fonts.mono }}>
						<div style={{ color: colors.yellow, fontWeight: 900, fontSize: 15, marginBottom: 14 }}>.claude/rules/</div>
						{tree.map(([name, desc, depth]) => (<div key={`${name}-${desc}`} style={{ display: 'grid', gridTemplateColumns: 'minmax(250px, 0.9fr) 1fr', gap: 16, fontSize: 19, lineHeight: 1.38, marginTop: 4 }}>
								<div style={{ fontWeight: 900, paddingLeft: Number(depth) * 30 }}>
									<span style={{ color: '#94a3b8' }}>{Number(depth) ? '├── ' : '├── '}</span>{name}
								</div>
								<div style={{ color: desc ? '#dbeafe' : '#64748b', fontWeight: 800 }}>{desc ? `# ${desc}` : ''}</div>
							</div>))}
					</motion.div>

					<motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.42, delay: 0.18 }} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
						{[
            ['README.mdc', '所有 agent 先读：项目是什么、规则怎么找。'],
            ['领域规则', 'frontend / backend / workflow / code-quality 分开维护，避免互相污染。'],
            ['小文件', '每个文件只管一类规则。LLM 读得快，人也改得动。'],
            ['反复沉淀', 'agent 犯一次错，就把规则写到对应文件里。'],
        ].map(([t, d], i) => (<div key={t} style={{ borderRadius: 18, background: i === 3 ? colors.yellow : colors.white, border, boxShadow: shadow, padding: '17px 19px' }}>
								<div style={{ fontFamily: fonts.heading, fontSize: 23, fontWeight: 900, color: colors.black }}>{t}</div>
								<div style={{ marginTop: 5, fontSize: 16, fontWeight: 750, color: '#374151', lineHeight: 1.42 }}>{d}</div>
							</div>))}
					</motion.div>
				</div>
			</Inner>
		</Slide>);
}
