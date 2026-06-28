import { Slide, Inner, Title, Tag, colors, fonts, border, shadow } from '../ui';
import { motion } from 'framer-motion';

const layers = [
	{ n: '1', name: 'CLAUDE.md', role: '规则 SoT', scope: '全局 → 项目 → 子目录三级', color: '#ff5757', detail: '每次开机自动加载的铁律 / 编码规范 / 架构约束' },
	{ n: '2', name: 'auto-memory', role: '对话沉淀', scope: '每次对话自动写入', color: '#FF914D', detail: '一文件一事实 + MEMORY.md 索引，下次自动 recall' },
	{ n: '3', name: 'jr-academy-memory', role: '团队共享', scope: '独立 private repo', color: '#7ED957', detail: 'HR / 教学等团队知识，员工 + agent 共用' },
	{ n: '4', name: 'training-rag', role: '语义检索', scope: '全仓 markdown 向量化', color: '#38B6FF', detail: '4 namespace · 800+ 文件 · 4500+ chunks 进 pgvector' },
];

// 匠人记忆系统全景四层
export default function S08_JRMemoryMap() {
	return (
		<Slide bg={colors.dark}>
			<Inner style={{ flexDirection: 'column' }}>
				<motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
					<Tag bg={colors.yellow} color={colors.black}>第 2 章 · 活教材</Tag>
					<Title white size="54px" style={{ marginTop: 14 }}>
一套真实在跑的记忆系统，长这样
					</Title>
					<p style={{ fontSize: 20, color: '#cfd3e6', marginTop: 10 }}>
						不是 PPT 上的理论 —— 这是<b style={{ color: colors.yellow }}>这个仓库此刻真实在跑</b>的四层结构。
					</p>
				</motion.div>

				<div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 26 }}>
					{layers.map((l, i) => (
						<motion.div key={l.n}
							initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.15 + i * 0.12, duration: 0.45 }}
							style={{ display: 'flex', alignItems: 'center', gap: 18, background: colors.white, border, boxShadow: shadow, padding: '14px 20px' }}>
							<div style={{ width: 50, height: 50, flexShrink: 0, background: l.color, border, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 26, fontWeight: 900, color: colors.white, fontFamily: fonts.mono }}>{l.n}</div>
							<div style={{ width: 230, flexShrink: 0 }}>
								<div style={{ fontSize: 22, fontWeight: 900, fontFamily: fonts.mono }}>{l.name}</div>
								<div style={{ fontSize: 14, color: l.color, fontWeight: 800 }}>{l.role} · {l.scope}</div>
							</div>
							<div style={{ fontSize: 17, color: '#444', flex: 1 }}>{l.detail}</div>
						</motion.div>
					))}
				</div>

				<motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}
					style={{ marginTop: 22, fontSize: 18, color: colors.yellow, fontFamily: fonts.mono }}>
					// 从「这一次对话」到「整个团队的集体记忆」，越往下越持久、越共享。
				</motion.p>
			</Inner>
		</Slide>
	);
}
