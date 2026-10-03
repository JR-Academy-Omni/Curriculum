// Migrated teaching page; original source: lessons/vibe-coding-master-l2/src/components/slides/L2P01d_CRUDPatterns.tsx
import { Slide, Inner, Title, Tag, colors, fonts, border, shadow } from '../courseUi';
import { motion } from 'framer-motion';
const flows = [
    {
        name: 'Create Path',
        zh: '新建路径',
        color: colors.green,
        steps: ['List Page', 'New Button', 'Create Form', 'Submit', 'Detail Page'],
        rule: '新建成功后去详情页，让用户确认刚创建的内容。',
    },
    {
        name: 'Read / Update Path',
        zh: '查看 / 编辑路径',
        color: colors.blue,
        steps: ['List Page', 'Open Row', 'Detail Page', 'Edit Button', 'Edit Form', 'Save', 'Detail Page'],
        rule: '编辑从详情页进入，保存后回详情页，不要突然跳走。',
    },
    {
        name: 'Delete Path',
        zh: '删除路径',
        color: colors.red,
        steps: ['Detail Page', 'Delete Button', 'Confirm Modal', 'Confirm', 'List Page'],
        rule: '删除是危险动作，必须二次确认；删除后回列表页。',
    },
];
const pageRoles = [
    ['List Page', '集合入口：搜索、筛选、打开某条记录、新建记录'],
    ['Detail Page', '单条记录中心：查看、编辑、删除、看状态'],
    ['Form Page', '创建或编辑：提交成功后回到明确页面'],
    ['Confirm Modal', '危险动作防误触：删除、取消、覆盖都要确认'],
];
function StepPill({ text, active }: {
    text: string;
    active?: boolean;
}) {
    return (<div style={{
            borderRadius: 18,
            background: active ? colors.yellow : colors.white,
            color: colors.black,
            border,
            boxShadow: active ? shadow : undefined,
            padding: '10px 12px',
            fontSize: 14,
            fontWeight: 900,
            whiteSpace: 'nowrap'
        }}>
			{text}
		</div>);
}
export default function L2P01d_CRUDPatterns() {
    return (<Slide bg={colors.warmBg}>
			<Inner style={{ flexDirection: 'column', gap: 20 }}>
				<motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
					<Tag bg={colors.dark}>拆产品 · 第二刀</Tag>
					<Title size="44px" style={{ marginTop: 12 }}>
						CRUD 页面关系：<span style={{ color: colors.red }}>先讲入口，再讲路径，不要画成一团</span>
					</Title>
				</motion.div>

				<div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: 20, alignItems: 'stretch', minHeight: 0 }}>
					<div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
						{flows.map((flow, i) => (<motion.div key={flow.name} initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.12 + i * 0.1, duration: 0.38 }} style={{ borderRadius: 18, background: colors.white, border, boxShadow: shadow, padding: '16px 18px' }}>
								<div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
									<div style={{ borderRadius: 18, width: 16, height: 16, background: flow.color, border }}/>
									<div style={{ fontFamily: fonts.heading, fontSize: 24, fontWeight: 900, color: colors.black }}>{flow.name}</div>
									<div style={{ fontSize: 14, fontWeight: 850, color: flow.color }}>{flow.zh}</div>
								</div>
								<div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 8 }}>
									{flow.steps.map((step, idx) => (<div key={`${flow.name}-${idx}`} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
											<StepPill text={step} active={idx === 0 || idx === flow.steps.length - 1}/>
											{idx < flow.steps.length - 1 && <div style={{ fontSize: 22, fontWeight: 900, color: colors.dark }}>→</div>}
										</div>))}
								</div>
								<div style={{ borderRadius: 18, marginTop: 12, background: colors.warmBg, border, padding: '9px 12px', fontSize: 15, fontWeight: 760, color: '#374151' }}>
									{flow.rule}
								</div>
							</motion.div>))}
					</div>

					<motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.4 }} style={{ borderRadius: 18, background: colors.dark, color: colors.white, border, boxShadow: shadow, padding: '22px 24px', display: 'flex', flexDirection: 'column' }}>
						<div style={{ fontFamily: fonts.heading, fontSize: 30, fontWeight: 900, color: colors.yellow }}>先定页面角色</div>
						<div style={{ marginTop: 10, fontSize: 16, lineHeight: 1.45, color: '#d1d5db', fontWeight: 760 }}>
							不要只写“做客户 CRUD”。PRD 里要写清楚每个页面负责什么，以及成功后回到哪里。
						</div>
						<div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 18 }}>
							{pageRoles.map(([page, role], i) => (<div key={page} style={{ borderRadius: 18, background: i === 0 ? colors.yellow : colors.white, color: colors.black, border, padding: '12px 14px' }}>
									<div style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 900, color: i === 0 ? colors.black : colors.red }}>{page}</div>
									<div style={{ marginTop: 4, fontSize: 14, fontWeight: 760, color: '#374151', lineHeight: 1.35 }}>{role}</div>
								</div>))}
						</div>
						<div style={{ borderRadius: 18, marginTop: 'auto', background: colors.red, border: `3px solid ${colors.white}`, padding: '13px 15px', fontSize: 17, fontWeight: 900, lineHeight: 1.35 }}>
							PRD 句式：用户从 List 进入 Detail；从 Detail 进入 Edit/Delete；Create/Edit/Delete 成功后必须写清回跳页面。
						</div>
					</motion.div>
				</div>
			</Inner>
		</Slide>);
}
