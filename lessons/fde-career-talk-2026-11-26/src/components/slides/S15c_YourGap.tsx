import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DeckFrame, colors, fonts } from '../kit';
import { StillScope, useStill, ini } from '../live';

// 按背景看转 FDE 缺什么；能力名对应第 26 页十项能力，路径对应匠人现有课程
const BG = [
	{ k: 'da', name: '在职 DA', have: ['SQL 分析与报表', '指标与基线', '数据质量与清洗', '懂业务数据', '做汇报'], lack: ['Python 工程能力', 'REST API 与后端', 'Git 与 Code Review', '测试', 'AWS 与部署', '调用 LLM API', 'RAG 与 Agent', '评估集', '方案、预算与范围', 'Stakeholder 管理'], path: ['FDE Business', '想走工程，再补 AI Engineer', 'FDE Tech'] },
	{ k: 'swe', name: '软件工程师', have: ['编程与数据结构', 'REST API 与后端', '数据库与 SQL', 'Git 与 Code Review', '测试', '部署与 CI/CD'], lack: ['调用 LLM API', 'Context Engineering', 'RAG 与 Agent', 'MCP 与工具调用', '评估集与 LLM-as-judge', 'AI Governance 与护栏', '业务调查', 'Stakeholder 管理', '方案、预算与范围', '向决策者讲清风险'], path: ['AI Engineer 训练营', 'FDE Tech'] },
	{ k: 'ba', name: 'BA／产品／咨询', have: ['需求调查', '业务流程', 'Stakeholder 管理', '需求优先级', '写方案和汇报'], lack: ['用 AI 做完一个流程', 'Python 或自动化工具', '数据清洗', '调用 LLM API', 'RAG 与 Agent 原理', '评估与验收', '成本估算'], path: ['FDE Business'] },
	{ k: 'grad', name: '应届生', have: ['编程基础', '数据结构与算法', '面向对象', '课程项目'], lack: ['真实项目上线', 'AWS 与部署', 'Git 团队协作', '调用 LLM API', 'RAG 与 Agent', '评估集', '业务理解', 'Stakeholder 管理', '向客户讲清取舍'], path: ['AI Engineer 训练营', 'FDE Tech'] },
];

function Body() {
	const still = useStill();
	const [k, setK] = useState(still ? 'swe' : 'da');
	const b = BG.find(x => x.k === k)!;
	const chip = (t: string, on: boolean, i: number) => <motion.span key={t} initial={ini(still, { opacity: 0, y: 8 })} animate={{ opacity: 1, y: 0 }} transition={{ delay: still ? 0 : .05 * i }}
		style={{ fontSize: 20, fontWeight: 800, padding: '6px 14px', borderRadius: 12, border: `2px solid ${colors.dark}`, background: on ? '#d9f5cf' : colors.white, boxShadow: on ? 'none' : `3px 3px 0 ${colors.red}` }}>{t}</motion.span>;
	return <div>
		<div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
			<span style={{ fontSize: 20, fontWeight: 900 }}>你现在是：</span>
			{BG.map(x => <button key={x.k} type="button" className="live-toggle" onClick={() => setK(x.k)} aria-pressed={x.k === k}
				style={{ fontFamily: fonts.body, fontSize: 21, fontWeight: 900, padding: '9px 22px', borderRadius: 999, border: `3px solid ${colors.dark}`, background: x.k === k ? colors.yellow : colors.white, cursor: still ? 'default' : 'pointer', boxShadow: x.k === k ? `3px 3px 0 ${colors.dark}` : 'none' }}>{x.name}</button>)}
		</div>
		<AnimatePresence mode="wait">
			<motion.div key={k} initial={ini(still, { opacity: 0, y: 10 })} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: .22 }}>
				<div style={{ display: 'grid', gridTemplateColumns: '.8fr 1.2fr', gap: 18, marginTop: 18 }}>
					<div style={{ background: colors.white, border: `2px solid ${colors.dark}`, borderRadius: 20, padding: '16px 20px' }}>
						<div style={{ fontSize: 22, fontWeight: 900 }}>你已经有 <span style={{ color: '#2f8a1f' }}>{b.have.length}</span></div>
						<div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 12 }}>{b.have.map((t, i) => chip(t, true, i))}</div>
					</div>
					<div style={{ background: '#fff1e7', border: `2px solid ${colors.dark}`, borderRadius: 20, padding: '16px 20px' }}>
						<div style={{ fontSize: 22, fontWeight: 900 }}>转 FDE 还缺 <span style={{ color: colors.red }}>{b.lack.length}</span></div>
						<div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 12 }}>{b.lack.map((t, i) => chip(t, false, i + 3))}</div>
					</div>
				</div>
				<div style={{ marginTop: 18, display: 'flex', alignItems: 'center', gap: 12, background: colors.dark, color: colors.white, borderRadius: 18, padding: '14px 22px' }}>
					<span style={{ fontSize: 20, fontWeight: 800 }}>建议路径</span>
					{b.path.map((p, i) => <span key={p} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
						<span style={{ fontSize: 22, fontWeight: 900, color: colors.yellow }}>{p}</span>{i < b.path.length - 1 && <span style={{ fontSize: 22 }}>→</span>}</span>)}
				</div>
			</motion.div>
		</AnimatePresence>
	</div>;
}

export default function S15c_YourGap() {
	return <DeckFrame tag="05 · 你缺什么" title="按你现在的背景，转 FDE 缺什么？" accent={colors.purple}>
		<StillScope><Body /></StillScope>
	</DeckFrame>;
}
