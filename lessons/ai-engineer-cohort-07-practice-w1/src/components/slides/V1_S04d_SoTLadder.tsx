// Migrated teaching page; original source: lessons/vibe-coding-master/src/components/slides/S04d_SoTLadder.tsx
import { Slide, Inner, Title, Tag, colors, fonts, border, shadow } from '../courseUi';
import { motion } from 'framer-motion';
// SoT 往上走的阶梯 —— 项目 PRD → 项目交付 → 企业业务落地
const rungs = [
    { scope: '项目需求', sot: 'PRD 与验收标准', detail: '明确问题、范围、角色和可观察的成功条件', w: 52, bg: colors.white, fg: colors.black, bar: colors.blue },
    { scope: '项目协作', sot: '规则、任务与决策记录', detail: '每类信息指定权威来源，团队引用同一版本', w: 68, bg: colors.white, fg: colors.black, bar: colors.purple },
    { scope: '项目交付', sot: '代码、检查与交付证据', detail: 'AI Engineer 管理项目变更、质量检查和交接', w: 84, bg: colors.white, fg: colors.black, bar: colors.orange },
    { scope: '企业落地', sot: 'Company OS · FDE 企业视角', detail: '业务流程、责任、系统接入和部署运营形成闭环', w: 100, bg: colors.dark, fg: colors.white, bar: colors.green },
];
export default function S04d_SoTLadder() {
    return (<Slide bg={colors.warmBg}>
			<Inner style={{ flexDirection: 'column' }}>
				<motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
					<Tag bg={colors.green} color={colors.black}>往上走一层</Tag>
					<Title size="48px" style={{ marginTop: 12, lineHeight: 1.16 }}>
						从项目契约到交付，再到<span style={{ background: colors.yellow, padding: '0 8px' }}>企业落地</span>
					</Title>
					<p style={{ fontSize: 18, color: '#555', marginTop: 10 }}>
						先管理项目范围、上下文与交付。FDE 再把项目接进客户的业务流程和系统；职责有交集，这里按课程重点区分。
					</p>
				</motion.div>

				<div style={{ marginTop: 22, display: 'flex', flexDirection: 'column-reverse', gap: 10 }}>
					{rungs.map((r, i) => (<motion.div key={r.scope} initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 + i * 0.18, type: 'spring', stiffness: 150, damping: 18 }} style={{ borderRadius: 18, display: 'flex', alignItems: 'stretch', width: `${r.w}%`, background: r.bg, color: r.fg, border, boxShadow: i === rungs.length - 1 ? `6px 6px 0 ${r.bar}` : shadow }}>
							<div style={{ flexShrink: 0, width: 8, background: r.bar }}/>
							<div style={{ flexShrink: 0, width: 150, padding: '12px 14px', display: 'flex', alignItems: 'center', fontFamily: fonts.mono, fontSize: 15, fontWeight: 800, borderRight: `2px solid ${r.fg === colors.white ? '#444' : '#ddd'}` }}>
								{r.scope}
							</div>
							<div style={{ flex: 1, padding: '12px 18px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
								<div style={{ fontSize: 21, fontWeight: 900, color: r.fg === colors.white ? colors.yellow : r.bar }}>{r.sot}</div>
								<div style={{ fontSize: 14.5, color: r.fg === colors.white ? '#cfd3e6' : '#666', marginTop: 3 }}>{r.detail}</div>
							</div>
						</motion.div>))}
				</div>

				<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.0 }} style={{ marginTop: 18, alignSelf: 'flex-start', fontFamily: fonts.mono, fontSize: 16, color: '#333', fontWeight: 700 }}>
					// 文档只是入口；可追溯的决策、受控执行与实际交付，才构成项目管理闭环。
				</motion.div>
			</Inner>
		</Slide>);
}
