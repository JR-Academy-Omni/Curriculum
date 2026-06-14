import { Slide, Inner, Title, Tag, colors, fonts, border, shadow } from '../ui';
import { motion } from 'framer-motion';

const cols = [
	{
		name: 'Monorepo', zh: '一个仓装多项目', color: '#7ED957', verdict: '统一管理好',
		good: '一次 clone 拿全部 · 共享规范一处生效 · AI 跨项目改一气呵成',
		bad: '仓会变大 · 权限较粗 · 单仓 CI 全量触发要靠 path filter 裁剪',
	},
	{
		name: 'Git Submodule', zh: '仓里嵌仓 · 聚合多 repo', color: '#FF914D', verdict: '匠人在用',
		good: '聚合多个独立 repo · 每个各自 CI/CD 独立部署 · 版本可锁定',
		bad: '更新要手动同步 · 对 AI agent 要额外说明结构',
	},
	{
		name: '独立 Sibling Repo', zh: '兄弟目录 + gitignore', color: '#38B6FF', verdict: '敏感/共享用',
		good: '权限独立 · agent 直接 Read 全文',
		bad: '要各自 clone',
	},
];

// repo 规划 —— SoT 住在哪
export default function S12b_RepoStrategy() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner style={{ flexDirection: 'column' }}>
				<motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
					<Tag bg={colors.dark}>基建 · SoT 住在哪</Tag>
					<Title size="46px" style={{ marginTop: 10 }}>
						repo 怎么规划，决定 AI <span style={{ background: colors.yellow, padding: '0 8px' }}>够不够得着真相</span>
					</Title>
					<p style={{ fontSize: 18, color: '#555', marginTop: 8, maxWidth: 1100 }}>
						记忆系统再好，分散在十个 agent 摸不到的仓里也白搭。三种结构、各有取舍：
					</p>
				</motion.div>

				<div style={{ display: 'flex', gap: 16, marginTop: 22 }}>
					{cols.map((c, i) => (
						<motion.div key={c.name}
							initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 + i * 0.13, duration: 0.45 }}
							style={{ flex: 1, background: colors.white, border, boxShadow: shadow, padding: '18px 18px', display: 'flex', flexDirection: 'column' }}>
							<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
								<span style={{ fontFamily: fonts.mono, fontSize: 19, fontWeight: 900 }}>{c.name}</span>
								<span style={{ fontSize: 12, fontWeight: 900, fontFamily: fonts.mono, color: colors.white, background: c.color, padding: '4px 10px' }}>{c.verdict}</span>
							</div>
							<div style={{ fontSize: 15, color: '#777', marginTop: 2 }}>{c.zh}</div>
							<div style={{ width: 40, height: 4, background: c.color, margin: '12px 0' }} />
							<div style={{ fontSize: 14.5, color: '#0a8a3a', lineHeight: 1.5 }}><b>+ </b>{c.good}</div>
							<div style={{ fontSize: 14.5, color: colors.red, lineHeight: 1.5, marginTop: 8 }}><b>− </b>{c.bad}</div>
						</motion.div>
					))}
				</div>

				<motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}
					style={{ marginTop: 20, background: colors.dark, color: colors.white, border, boxShadow: shadow, padding: '14px 22px' }}>
					<span style={{ fontFamily: fonts.mono, fontSize: 13, color: colors.yellow, fontWeight: 800 }}>匠人的真实选择 →</span>
					<span style={{ fontSize: 16, marginLeft: 10, lineHeight: 1.5 }}>
						用 <b style={{ color: '#FF914D' }}>git submodule</b> 聚合多个独立 repo，<b>各自独立部署 / 独立 CI-CD</b>；
						需要「一处管全部、共享规范」时 <b style={{ color: colors.green }}>monorepo</b> 更省心；
						敏感+共享的 <code style={{ color: colors.yellow }}>jr-academy-memory</code> 用 <b style={{ color: '#38B6FF' }}>sibling repo</b>（agent 直接读全文）。
					</span>
				</motion.div>

				<motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}
					style={{ marginTop: 12, fontSize: 16, color: '#666', fontFamily: fonts.mono }}>
					// 没有银弹：要「独立部署」选 submodule，要「统一管理」选 monorepo —— 按部署边界来拆。
				</motion.p>
			</Inner>
		</Slide>
	);
}
