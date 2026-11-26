import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DeckFrame, Panel, Label, colors, fonts } from '../kit';
import { StillScope, useStill, ini, Hint } from '../live';

// now / y2027：0–3 刻度，1 = 帮人干活，2 = 替掉一部分，3 = 整段替掉。位置是我们按公开案例做的判断
const rows = [
	{
		name: '客服', now: 2.4, y2027: 2.9, c: colors.red,
		can: '文字客服已经能自己回答、查订单、办退款；实时语音 Agent 能直接接电话，像真人一样被打断、接着聊。',
		cases: ['Salesforce（2025-09）：客服从约 9,000 人减到约 5,000 人，一半对话由 Agent 接', 'Klarna（2024-02）：AI 助手一个月接了 230 万次对话，相当于 700 名全职客服；2025 年又开始招回真人，因为服务质量下降', 'OpenAI 实时语音接口 2025-08-28 正式上线，可以直接接入电话线路'],
		next: '2027 判断：电话客服会开始成批换成语音 Agent',
		jobs: '在线客服、呼叫中心、预约和回访',
	},
	{
		name: '写代码', now: 1.7, y2027: 2.3, c: colors.blue,
		can: 'AI 写出大量代码，工程师主要负责拆任务、审代码、对结果负责。',
		cases: ['Microsoft（2025-04）：CEO 说公司代码库里 20–30% 的代码由 AI 写', 'Google：2024-10 超过四分之一的新代码由 AI 生成，之后说已超过 30%'],
		next: '2027 判断：初级开发和外包开发的需求先被压缩',
		jobs: '初级开发、测试、外包开发',
	},
	{
		name: '人事 HR', now: 2.0, y2027: 2.5, c: colors.purple,
		can: '请假、工资、政策这类常规问题由 HR Agent 直接答完、办完。',
		cases: ['IBM（2025-05）：CEO 说 AI Agent 接手了几百名 HR 员工的工作；常规 HR 问题 94% 由 AI 自动处理', '同一时期，IBM 多招了程序员和销售'],
		next: '2027 判断：HR 事务岗继续收缩，留下需要判断和沟通的部分',
		jobs: 'HR 事务、员工咨询',
	},
	{
		name: '翻译和内容', now: 2.2, y2027: 2.6, c: colors.green,
		can: 'AI 直接生成课程、文案和多语言版本，人只做审核。',
		cases: ['Duolingo（2024-01）：减少约 10% 外包人员，更多用 AI 生成课程内容', 'Duolingo（2025-04）：宣布逐步不再让外包做 AI 能做的事；CEO 后来说没有裁过全职员工'],
		next: '2027 判断：按字数、按件计费的外包翻译和内容会继续减少',
		jobs: '翻译、内容外包、文案',
	},
	{
		name: '公司后台和管理层', now: 1.5, y2027: 2.2, c: colors.orange,
		can: '报告、审批、协调这些层层传递的工作，被 AI 和更少的层级接走。',
		cases: ['Amazon（2025-06）：CEO 说几年内 AI 会让公司职能岗位变少', 'Amazon（2025-10）：裁约 1.4 万个公司职能岗位，约占 4%'],
		next: '2027 判断：中间层级继续变薄',
		jobs: '运营、后台、中层管理',
	},
];
const TRACK = 470;
const pos = (v: number) => (v / 3) * TRACK;

function Body() {
	const still = useStill();
	const [sel, setSel] = useState(0);
	const r = rows[sel];
	return <div>
		<div style={{ display: 'grid', gridTemplateColumns: '1.12fr .88fr', gap: 24 }}>
			<Panel style={{ padding: '16px 22px' }}>
				{/* 刻度表头 */}
				<div style={{ display: 'grid', gridTemplateColumns: `170px ${TRACK}px`, gap: 14, alignItems: 'end' }}>
					<span style={{ display: 'flex', gap: 10, alignItems: 'center', fontSize: 14, fontWeight: 700 }}>
						<span style={{ width: 22, height: 10, background: colors.dark, borderRadius: 3 }} />现在
						<span style={{ width: 22, height: 10, border: `2px dashed ${colors.dark}`, borderRadius: 3 }} />2027 判断
					</span>
					<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', fontSize: 15, fontWeight: 800, textAlign: 'right' }}>
						<span>帮人干活</span><span>替掉一部分</span><span>整段替掉</span>
					</div>
				</div>
				<div style={{ display: 'grid', gap: 8, marginTop: 8 }}>
					{rows.map((row, i) => {
						const on = !still && i === sel;
						return <button key={row.name} type="button" className="live-toggle" onClick={() => setSel(i)} aria-pressed={on}
							style={{ display: 'grid', gridTemplateColumns: `170px ${TRACK}px`, gap: 14, alignItems: 'center', background: on ? '#fff6d6' : 'transparent', border: on ? `2px solid ${colors.dark}` : '2px solid transparent', borderRadius: 14, padding: '7px 8px', cursor: still ? 'default' : 'pointer', textAlign: 'left', fontFamily: fonts.body, color: colors.dark }}>
							<span style={{ fontSize: 21, fontWeight: 900 }}>{row.name}</span>
							<span style={{ position: 'relative', height: 34, background: 'repeating-linear-gradient(90deg, transparent 0, transparent calc(33.33% - 1px), rgba(16,22,47,.18) calc(33.33% - 1px), rgba(16,22,47,.18) 33.33%)', borderRadius: 8 }}>
								<motion.span initial={ini(still, { width: 0 })} animate={{ width: pos(row.y2027) }} transition={{ delay: still ? 0 : .5 + i * .1, duration: .5 }}
									style={{ position: 'absolute', left: 0, top: 4, height: 26, border: `2px dashed ${colors.dark}`, borderRadius: 8, boxSizing: 'border-box' }} />
								<motion.span initial={ini(still, { width: 0 })} animate={{ width: pos(row.now) }} transition={{ delay: still ? 0 : .15 + i * .1, duration: .55, ease: [0.16, 1, 0.3, 1] }}
									style={{ position: 'absolute', left: 0, top: 4, height: 26, background: row.c, border: `2px solid ${colors.dark}`, borderRadius: 8, boxSizing: 'border-box' }} />
							</span>
						</button>;
					})}
				</div>
				<div style={{ fontSize: 13, color: '#514c48', marginTop: 8 }}>进度是我们根据公开案例做的判断，不是统计数据。</div>
			</Panel>
			{still
				? <Panel bg={colors.dark} style={{ color: colors.white, display: 'grid', gap: 8, alignContent: 'start', padding: '16px 20px' }}>
					{rows.map(row => <div key={row.name} style={{ borderTop: '1px solid rgba(255,255,255,.15)', paddingTop: 6 }}>
						<div style={{ fontSize: 17, fontWeight: 900, color: colors.yellow }}>{row.name} · {row.jobs}</div>
						<div style={{ fontSize: 14, lineHeight: 1.4, marginTop: 2 }}>{row.cases[0]}</div>
					</div>)}
				</Panel>
				: <Panel bg={colors.dark} style={{ color: colors.white, padding: '18px 22px' }}>
					<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><Label bg={colors.yellow} color={colors.dark}>{r.name}</Label><Hint>点左边任意一行</Hint></div>
					<AnimatePresence mode="wait">
						<motion.div key={sel} initial={{ opacity: 0, x: 14 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -14 }} transition={{ duration: .22 }} style={{ display: 'grid', gap: 9, marginTop: 12 }}>
							<div style={{ fontSize: 19, fontWeight: 800, lineHeight: 1.45 }}>{r.can}</div>
							{r.cases.map(c => <div key={c} style={{ fontSize: 15, lineHeight: 1.45, color: '#e6e4ef', borderLeft: `4px solid ${colors.red}`, paddingLeft: 10 }}>{c}</div>)}
							<div style={{ fontSize: 15, lineHeight: 1.45, color: colors.yellow, borderLeft: `4px solid ${colors.yellow}`, paddingLeft: 10 }}>{r.next}</div>
							<div style={{ borderTop: '1px solid rgba(255,255,255,.15)', paddingTop: 8 }}>
								<span style={{ fontSize: 14, fontWeight: 800, color: colors.yellow }}>受影响的岗位　</span>
								<span style={{ fontSize: 20, fontWeight: 900 }}>{r.jobs}</span>
							</div>
						</motion.div>
					</AnimatePresence>
				</Panel>}
		</div>
		<motion.div initial={ini(still, { opacity: 0, y: 12 })} animate={{ opacity: 1, y: 0 }} transition={{ delay: still ? 0 : 1 }}
			style={{ marginTop: 14, display: 'flex', alignItems: 'center', gap: 20, background: colors.yellow, border: `2px solid ${colors.dark}`, borderRadius: 18, padding: '10px 22px' }}>
			<span style={{ fontSize: 20, fontWeight: 700, lineHeight: 1.45 }}>每个职能都在从「帮人干活」走向「整段替掉」。替掉的是流程，缺的是能把这些系统接进企业、测它会怎么出错、上线后盯着结果的人。</span>
			<span style={{ marginLeft: 'auto', whiteSpace: 'nowrap', background: colors.dark, color: colors.white, borderRadius: 999, padding: '10px 24px', fontSize: 25, fontWeight: 900, boxShadow: `5px 5px 0 ${colors.red}` }}>这个人，就是 <span style={{ color: colors.yellow }}>FDE</span></span>
		</motion.div>
		<div style={{ fontSize: 13, color: '#514c48', marginTop: 8 }}>来源：Salesforce CEO 2025-09 访谈；Klarna 2024-02 公告、2025-05 CEO 采访；OpenAI 2025-08-28 发布；Microsoft CEO 2025-04-29；Google 2024-10 财报会；IBM CEO 2025-05 WSJ 采访；Duolingo 2024-01、2025-04；Amazon 2025-06 CEO 邮件、2025-10 公告</div>
	</div>;
}

export default function C07_Shift() {
	return <DeckFrame tag="01 · AI 落地到哪一步" title="你的岗位，AI 已经做到哪一步了？" subtitle="找到离你最近的那一行：实心是现在，虚线是到 2027 年。">
		<StillScope><Body /></StillScope>
	</DeckFrame>;
}
