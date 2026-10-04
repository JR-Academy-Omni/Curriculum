// Migrated teaching page; original source: lessons/vibe-coding-master/src/components/slides/S05c_MemorySystem.tsx
import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, fonts, border, shadow, shadowSm } from '../courseUi';
const inputs = [
    { k: '需求', v: '护理记录与交班的实际流程' },
    { k: '材料', v: '字段样例、现有表单、角色权限' },
    { k: '决定', v: '范围取舍、验收约定、待确认项' },
];
const memoryFiles = [
    { f: 'PRD.md', d: '用户、范围、流程与验收', c: colors.blue },
    { f: 'DATA.md', d: '字段、关系、状态与权限', c: colors.teal },
    { f: 'CLAUDE.md', d: '仓库约束、命令与检查', c: colors.red },
    { f: 'TASKS.md', d: '责任人、依赖与完成证据', c: colors.purple },
];
const outputs = [
    { t: 'UI / API', d: '按同一规格实现闭环' },
    { t: 'Tests', d: '验证权限、状态与边界' },
    { t: 'Demo', d: '按验收场景演示功能' },
    { t: 'Handoff', d: '版本、命令、风险与回滚' },
];
function Panel({ title, subtitle, bg, children, }: {
    title: string;
    subtitle: string;
    bg: string;
    children: React.ReactNode;
}) {
    return (<motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} style={{
            flex: 1,
            minHeight: 470,
            background: bg,
            border,
            borderRadius: 24,
            boxShadow: shadow,
            padding: 24,
            position: 'relative',
            overflow: 'hidden',
        }}>
			<div style={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 900, opacity: 0.58, letterSpacing: 1 }}>
				{subtitle}
			</div>
			<h3 style={{ fontSize: 27, lineHeight: 1.15, margin: '8px 0 20px', fontWeight: 900, color: colors.dark }}>
				{title}
			</h3>
			{children}
		</motion.div>);
}
function Arrow({ label, delay = 0 }: {
    label: string;
    delay?: number;
}) {
    return (<motion.div initial={{ opacity: 0.35 }} animate={{ opacity: 1 }} transition={{ delay, duration: 0.25 }} style={{
            width: 76,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            transformOrigin: 'left',
        }}>
			<div style={{ width: '100%', borderTop: `4px dashed ${colors.dark}`, position: 'relative' }}>
				<div style={{
            position: 'absolute',
            right: -2,
            top: -11,
            width: 0,
            height: 0,
            borderTop: '9px solid transparent',
            borderBottom: '9px solid transparent',
            borderLeft: `14px solid ${colors.dark}`,
        }}/>
			</div>
			<div style={{ borderRadius: 18,
            marginTop: 14,
            background: colors.white,
            border: `2px solid ${colors.dark}`,
            boxShadow: shadowSm,
            padding: '6px 9px',
            fontFamily: fonts.mono,
            fontSize: 11,
            fontWeight: 900,
            whiteSpace: 'nowrap',
        }}>
				{label}
			</div>
		</motion.div>);
}
export default function S05c_MemorySystem() {
    return (<Slide bg={colors.warmBg}>
			<Inner style={{ flexDirection: 'column', justifyContent: 'center', gap: 22, padding: '32px 38px' }}>
				<div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 24 }}>
					<div>
						<Tag bg={colors.dark} color={colors.yellow}>AI ENGINEER · 项目事实源</Tag>
						<Title size="48px" style={{ marginTop: 12, marginBottom: 0 }}>
							把项目事实写进仓库，形成<span style={{ background: colors.yellow, padding: '0 10px' }}>可追溯的 SoT</span>
						</Title>
					</div>
					<div style={{ borderRadius: 18,
            width: 330,
            background: colors.white,
            border,
            boxShadow: shadowSm,
            padding: '14px 16px',
            fontSize: 18,
            lineHeight: 1.45,
            fontWeight: 800,
            color: colors.dark,
        }}>
						本课采用的文档示例：<br />
						raw 资料 → 可信 SoT → 多个可交付产物
					</div>
				</div>

				<div style={{ display: 'flex', alignItems: 'stretch', gap: 18 }}>
					<Panel title="业务材料" subtitle="COLLECT" bg="#BFE8FF">
						<div style={{ display: 'grid', gap: 14 }}>
							{inputs.map((item, i) => (<motion.div key={item.k} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 + i * 0.08 }} style={{ borderRadius: 18, background: colors.white, border, boxShadow: shadowSm, padding: '13px 14px' }}>
									<div style={{ fontSize: 22, fontWeight: 900, color: colors.dark }}>{item.k}</div>
									<div style={{ fontSize: 18, marginTop: 3, color: '#384152', lineHeight: 1.35 }}>{item.v}</div>
								</motion.div>))}
						</div>
						<div style={{ position: 'absolute', bottom: 20, left: 24, right: 24, fontSize: 15, fontWeight: 800, color: '#344054' }}>
							注明来源、负责人和日期；未知信息保留为待确认。
						</div>
					</Panel>

					<Arrow label="审计 / 整理" delay={0.25}/>

					<Panel title="项目事实源" subtitle="STRUCTURE" bg="#FFF0A8">
						<div style={{
            background: colors.white,
            border: `4px dashed ${colors.blue}`,
            borderRadius: 22,
            padding: 18,
            minHeight: 305,
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 12,
        }}>
							{memoryFiles.map((file, i) => (<motion.div key={file.f} initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.25 + i * 0.08 }} style={{ borderRadius: 18, background: '#fbfbfb', border, boxShadow: shadowSm, padding: '10px 11px', minHeight: 92 }}>
									<div style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 900, color: file.c }}>
										{file.f}
									</div>
									<div style={{ fontSize: 17, lineHeight: 1.4, marginTop: 6, color: '#374151', fontWeight: 700 }}>
										{file.d}
									</div>
								</motion.div>))}
						</div>
						<div style={{
            position: 'absolute',
            right: 22,
            top: 74,
            background: '#ff7ab8',
            color: colors.white,
            border,
            borderRadius: '999px',
            padding: '10px 14px',
            fontSize: 18,
            fontWeight: 900,
            boxShadow: shadowSm,
        }}>
							SoT
						</div>
					</Panel>

					<Arrow label="复用 / 生成" delay={0.45}/>

					<Panel title="交付与验收" subtitle="DELIVER" bg="#EBD9FF">
						<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 13 }}>
							{outputs.map((item) => (<div key={item.t} style={{ borderRadius: 18, background: colors.white, border, boxShadow: shadowSm, padding: '14px 13px', minHeight: 94 }}>
									<div style={{ fontSize: 23, fontWeight: 900, color: colors.dark }}>{item.t}</div>
									<div style={{ fontSize: 17, lineHeight: 1.4, marginTop: 8, fontWeight: 700, color: '#4b5563' }}>
										{item.d}
									</div>
								</div>))}
						</div>
						<div style={{ borderRadius: 18, position: 'absolute', bottom: 20, left: 24, right: 24, background: colors.yellow, border, boxShadow: shadowSm, padding: '10px 12px', fontSize: 15, fontWeight: 900 }}>
							需求变更后，检查实现与测试，再更新交接记录。
						</div>
					</Panel>
				</div>
			</Inner>
		</Slide>);
}
