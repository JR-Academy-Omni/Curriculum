import { motion } from 'framer-motion';
import { DeckFrame, colors, fonts } from '../kit';
import { StillScope, useStill, ini } from '../live';

const rows = [
	{ k: '常去哪种公司', tech: '大企业：银行、电信、政府，以及咨询公司和 AI 公司的企业客户项目', biz: '中小公司，和各行业公司里的业务部门' },
	{ k: '适合谁', tech: '已经能独立开发和调试 AI 应用的工程师；AI Engineering 是起点', biz: '做过业务、产品、咨询、BA 或项目管理，想转行做 FDE；不需要先学 AI Engineer' },
	{ k: '课上练什么', tech: '拿企业情况写方案 → 在已有系统里实现接入 → 建验收测试集评估质量和成本 → 应对预算削减和需求变更', biz: '调查部门目标和重复工作 → 设计 AI 工作流 → 用 Codex 亲手做自动化任务 → 测错误、算成本 → Business Case' },
	{ k: '最后交出什么', tech: '客户方案、架构和预算；能运行的核心代码、接入和评估记录；客户展示和运维交接', biz: 'Solution Proposal；能演示的 AI 工作流和验证记录；Pitch 和个人项目材料' },
	{ k: '周期', tech: 'FDE Tech 职业进阶班 · 10 周 · 30 项工程交付任务', biz: 'FDE Business 职业进阶班 · 8 周 · 30 项企业自动化任务' },
];

function Body() {
	const still = useStill();
	return <div style={{ display: 'grid', gridTemplateColumns: '150px 1fr 1fr', columnGap: 18 }}>
		<div />
		<motion.div initial={ini(still, { opacity: 0, y: -12 })} animate={{ opacity: 1, y: 0 }} style={{ background: colors.yellow, borderRadius: '22px 22px 0 0', border: `2px solid ${colors.dark}`, padding: '14px 22px' }}>
			<div style={{ fontFamily: fonts.mono, fontSize: 15, color: colors.red, fontWeight: 700 }}>FDE BUSINESS</div>
			<div style={{ fontSize: 30, fontWeight: 900 }}>判断与推进</div>
		</motion.div>
		<motion.div initial={ini(still, { opacity: 0, y: -12 })} animate={{ opacity: 1, y: 0 }} transition={{ delay: still ? 0 : .1 }} style={{ background: colors.dark, color: colors.white, borderRadius: '22px 22px 0 0', border: `2px solid ${colors.dark}`, padding: '14px 22px' }}>
			<div style={{ fontFamily: fonts.mono, fontSize: 15, color: colors.yellow, fontWeight: 700 }}>FDE TECH</div>
			<div style={{ fontSize: 30, fontWeight: 900 }}>设计架构并实现</div>
		</motion.div>
		{rows.map((r, i) => {
			const last = i === rows.length - 1;
			const cell = (txt: string, tech: boolean) => <motion.div key={r.k + (tech ? 't' : 'b')} initial={ini(still, { opacity: 0, x: tech ? 16 : -16 })} animate={{ opacity: 1, x: 0 }} transition={{ delay: still ? 0 : .25 + i * .15 }}
				style={{ background: last ? (tech ? '#e7eaf5' : '#fff3c4') : colors.white, borderLeft: `2px solid ${colors.dark}`, borderRight: `2px solid ${colors.dark}`, borderBottom: last ? `2px solid ${colors.dark}` : '1px solid rgba(16,22,47,.15)', borderRadius: last ? '0 0 22px 22px' : 0, padding: '12px 22px', fontSize: last ? 22 : 20, fontWeight: last ? 900 : 500, lineHeight: 1.5 }}>{txt}{last && <a href={`https://jracademy.ai/program-course/${tech ? 'fde-tech' : 'fde-business'}`} target="_blank" rel="noreferrer" style={{ display: 'inline-block', marginTop: 6, fontSize: 17, fontWeight: 800, color: tech ? colors.dark : colors.dark, background: tech ? colors.white : colors.yellow, border: `2px solid ${colors.dark}`, borderRadius: 999, padding: '3px 14px', textDecoration: 'none' }}>jracademy.ai/program-course/{tech ? 'fde-tech' : 'fde-business'} →</a>}</motion.div>;
			return [
				<motion.div key={r.k} initial={ini(still, { opacity: 0 })} animate={{ opacity: 1 }} transition={{ delay: still ? 0 : .2 + i * .15 }} style={{ display: 'flex', alignItems: 'center', fontSize: 19, fontWeight: 900, borderBottom: last ? 'none' : '1px solid rgba(16,22,47,.15)' }}>{r.k}</motion.div>,
				cell(r.biz, false),
				cell(r.tech, true),
			];
		})}
	</div>;
}

export default function S13_TwoKinds() {
	return <DeckFrame tag="03 · 岗位地图" title="FDE 分两条路：Business 和 Tech" subtitle="两门课都围绕 FDE 的职责训练，按你现在的起点选；两门课分开报名。" accent={colors.blue}>
		<StillScope><Body /></StillScope>
	</DeckFrame>;
}
