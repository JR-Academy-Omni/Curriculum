// Migrated teaching page; original source: lessons/vibe-coding-master-l2/src/components/slides/L2P04i_RepoStrategy.tsx
import { Slide, Inner, Title, Tag, colors, fonts, border, shadow, springIn } from '../courseUi';
import { motion } from 'framer-motion';
const repos = [
    {
        t: 'Monorepo',
        sub: '所有模块代码在一个 repo 下',
        arch: '/frontend\n/backend\n/models\n/infra',
        pros: ['便于共享代码与工具链', '便于跨模块修改与检查', '单团队或多团队均可用'],
        cons: ['大仓需治理构建成本', '细粒度权限需额外设计', '共享改动需协调验证'],
        color: colors.blue,
    },
    {
        t: 'Polyrepo · 可选 Submodules',
        sub: '多个独立 repo；是否聚合由协作方式决定',
        arch: 'frontend repo\nbackend repo\ninfra repo\nshared models repo',
        pros: ['按所有权独立维护', '按仓库划分访问权限', '便于独立版本与发布'],
        cons: ['跨仓修改需协调版本', 'Agent需明确路径与权限', '子模块需同步CI与指针'],
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
									<div style={{ fontFamily: fonts.heading, fontSize: 28, fontWeight: 900, color: colors.black }}>{repo.t}</div>
									<div style={{ fontSize: 15, fontWeight: 820, color: '#4b5563' }}>{repo.sub}</div>
								</div>
							</div>

							<div style={{ borderRadius: 18, marginTop: 18, background: '#050816', color: '#f8fafc', border, padding: '15px 17px', fontFamily: fonts.mono, fontSize: 16, lineHeight: 1.45, whiteSpace: 'pre-wrap' }}>
								{repo.arch}
							</div>

							<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginTop: 16 }}>
								<div style={{ borderRadius: 18, background: colors.warmBg, border, padding: '13px 14px' }}>
									<div style={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 900, color: '#347221' }}>优点</div>
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

				<motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.42 }} style={{ borderRadius: 18, background: colors.dark, color: colors.white, border, boxShadow: shadow, padding: '16px 22px', fontSize: 18, fontWeight: 900, lineHeight: 1.35 }}>
					CareKind 先用简单 Monorepo。按代码所有权、权限、发布边界和协作成本选择；多团队也能共用一仓，多仓不必使用子模块。
				</motion.div>
			</Inner>
		</Slide>);
}
