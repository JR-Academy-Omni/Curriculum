// Migrated teaching page; original source: lessons/vibe-coding-master-l2/src/components/slides/L2P04i_RepoStrategy.tsx
import { Slide, Inner, Title, Tag, colors, fonts, border, shadow, springIn } from '../courseUi';
import { motion } from 'framer-motion';
const repos = [
    {
        t: 'Monorepo',
        sub: '所有模块代码在一个 repo 下',
        arch: '/frontend\n/backend\n/models\n/infra',
        pros: ['全局统一依赖', 'AI 容易理解全局语义', '便于一次性部署'],
        cons: ['repo 过大', '管理复杂', '权限不易控制'],
        color: colors.blue,
    },
    {
        t: 'Polyrepo + Submodules',
        sub: '多个独立 repo，通过 submodule 组合',
        arch: 'frontend repo\nbackend repo\ninfra repo\nshared models repo',
        pros: ['各模块独立维护', '利于团队分工', '权限清晰', 'AI 可模块化理解'],
        cons: ['跨模块重构不方便', '依赖更新需手动管理', 'AI 需要递归处理多个 repo'],
        color: colors.red,
    },
];
export default function L2P04i_RepoStrategy() {
    return (<Slide bg={colors.warmBg}>
			<Inner style={{ flexDirection: 'column', gap: 22 }}>
				<motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
					<Tag bg={colors.dark}>Repo Strategy</Tag>
					<Title size="46px" style={{ marginTop: 10 }}>
						手把手做项目前，先定 repo：<span style={{ color: colors.red }}>Monorepo 还是 Polyrepo?</span>
					</Title>
				</motion.div>

				<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, alignItems: 'stretch', minHeight: 0 }}>
					{repos.map((repo, i) => (<motion.div key={repo.t} {...springIn} transition={{ ...springIn.transition, delay: 0.1 + i * 0.1 }} style={{ borderRadius: 18, background: colors.white, border, boxShadow: shadow, padding: '22px 24px', display: 'flex', flexDirection: 'column' }}>
							<div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
								<div style={{ borderRadius: 18, width: 48, height: 48, background: repo.color, border }}/>
								<div>
									<div style={{ fontFamily: fonts.heading, fontSize: 32, fontWeight: 900, color: colors.black }}>{repo.t}</div>
									<div style={{ fontSize: 15, fontWeight: 820, color: '#4b5563' }}>{repo.sub}</div>
								</div>
							</div>

							<div style={{ borderRadius: 18, marginTop: 18, background: '#050816', color: '#f8fafc', border, padding: '15px 17px', fontFamily: fonts.mono, fontSize: 16, lineHeight: 1.45, whiteSpace: 'pre-wrap' }}>
								{repo.arch}
							</div>

							<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginTop: 16 }}>
								<div style={{ borderRadius: 18, background: colors.warmBg, border, padding: '13px 14px' }}>
									<div style={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 900, color: colors.green }}>优点</div>
									<ul style={{ margin: '8px 0 0 18px', padding: 0 }}>
										{repo.pros.map((p) => <li key={p} style={{ fontSize: 14.5, fontWeight: 760, color: '#374151', lineHeight: 1.4 }}>{p}</li>)}
									</ul>
								</div>
								<div style={{ borderRadius: 18, background: colors.warmBg, border, padding: '13px 14px' }}>
									<div style={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 900, color: colors.red }}>缺点</div>
									<ul style={{ margin: '8px 0 0 18px', padding: 0 }}>
										{repo.cons.map((c) => <li key={c} style={{ fontSize: 14.5, fontWeight: 760, color: '#374151', lineHeight: 1.4 }}>{c}</li>)}
									</ul>
								</div>
							</div>
						</motion.div>))}
				</div>

				<motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.42 }} style={{ borderRadius: 18, background: colors.dark, color: colors.white, border, boxShadow: shadow, padding: '16px 22px', fontSize: 19, fontWeight: 900, lineHeight: 1.35 }}>
					课堂建议：个人小项目先用 Monorepo；公司级项目 / 多团队协作再考虑 Polyrepo + submodules。选错 repo 结构，agent 的上下文会先乱。
				</motion.div>
			</Inner>
		</Slide>);
}
