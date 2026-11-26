import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DeckFrame, colors, fonts } from '../kit';
import { StillScope, useStill, ini, Hint } from '../live';

// 十个维度与 au-career-2027 第 17 页（S09a_FdeTechCapability）一致，来源：匠人 FDE Tech 十项能力与评审方式
const DIMS: [string, string, 'biz' | 'tech'][] = [
	['Business Acumen', '理解企业如何创造收入、承担成本，判断问题是否值得投入。', 'biz'],
	['Client Discovery', '主动调查陌生业务，核实假设、基线、决策权和项目边界。', 'biz'],
	['Solution Architecture', '比较技术路线，根据客户限制解释架构和取舍。', 'tech'],
	['Commercial Planning', '确定范围、完整预算、里程碑、依赖和停止条件。', 'biz'],
	['AI Governance', '把数据主权、权限、安全、审批和责任落实为控制。', 'tech'],
	['Engineering Execution', '在已有系统中实现接入，处理重复事件、重试和故障恢复。', 'tech'],
	['AI Reliability', '建立 golden dataset 和验收标准，用评估证据检查质量、成本与延迟。', 'tech'],
	['Stakeholder Leadership', '协调业务、IT、安全和预算负责人，在冲突与变化中推动决定。', 'biz'],
	['Executive Communication', '面向决策者讲清投入、风险和收益依据，回应质疑并争取批准。', 'biz'],
	['Enterprise Adoption', '推动用户采用，完成培训、试点判断、独立接手和运行维护。', 'biz'],
];
const TAG = { biz: { t: '业务与人', bg: colors.yellow, fg: colors.dark }, tech: { t: '技术', bg: colors.dark, fg: colors.white } };

function Body() {
	const still = useStill();
	const [have, setHave] = useState<boolean[]>(DIMS.map(() => false));
	const n = have.filter(Boolean).length;
	const gap = DIMS.findIndex((_, i) => !have[i]);
	return <div>
		<div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 14, perspective: 1400 }}>
			{DIMS.map(([en, zh, k], i) => {
				const on = have[i];
				return <motion.button key={en} type="button" className="live-toggle" onClick={() => setHave(a => a.map((x, j) => (j === i ? !x : x)))} aria-pressed={on}
					initial={ini(still, { opacity: 0, rotateY: -80 })} animate={{ opacity: 1, rotateY: 0 }} transition={{ delay: still ? 0 : .1 + i * .07, duration: .6, ease: [0.16, 1, 0.3, 1] }}
					whileHover={still ? undefined : { y: -8, rotateX: 6 }}
					style={{ transformOrigin: '0 50%', textAlign: 'left', cursor: still ? 'default' : 'pointer', fontFamily: fonts.body, minHeight: 222, display: 'flex', flexDirection: 'column', gap: 8, borderRadius: 20, padding: '14px 16px', border: `2px solid ${colors.dark}`, background: on ? '#d9f5cf' : colors.white, color: colors.dark, boxShadow: `6px 6px 0 ${k === 'biz' ? 'rgba(255,222,89,.95)' : 'rgba(16,22,47,.85)'}, 0 22px 30px -18px rgba(16,22,47,.5)`, transition: 'background .25s' }}>
					<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
						<span style={{ fontFamily: fonts.mono, fontSize: 15, fontWeight: 700, color: colors.red }}>{String(i + 1).padStart(2, '0')}</span>
						<span style={{ fontSize: 12.5, fontWeight: 800, background: TAG[k].bg, color: TAG[k].fg, borderRadius: 999, padding: '2px 9px' }}>{TAG[k].t}</span>
					</div>
					<div style={{ fontSize: 21, fontWeight: 900, lineHeight: 1.15 }}>{en}</div>
					<div style={{ fontSize: 16, lineHeight: 1.5 }}>{zh}</div>
					{!still && <div style={{ marginTop: 'auto', fontSize: 13, fontWeight: 800, color: on ? '#2f7a1f' : '#8a847c' }}>{on ? '✓ 我会' : '点一下：我会'}</div>}
				</motion.button>;
			})}
		</div>
		<div style={{ marginTop: 16, display: 'flex', alignItems: 'center', gap: 16, background: colors.dark, color: colors.white, borderRadius: 18, padding: '12px 22px', minHeight: 56 }}>
			<AnimatePresence mode="wait">
				<motion.span key={still ? 's' : n} initial={ini(still, { opacity: 0, x: 14 })} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }} transition={{ duration: .2 }} style={{ fontSize: 21, fontWeight: 800 }}>
					{still || n === 0
						? <>一半是<span style={{ color: colors.yellow }}>业务和人</span>，一半是技术：会写代码只占其中几项。</>
						: n === DIMS.length ? <>十项都会了，你已经在做 FDE 的活。</>
						: <>你会 <span style={{ color: colors.yellow }}>{n}</span> / 10 项，先补 <span style={{ color: colors.yellow }}>{DIMS[gap][0]}</span>。</>}
				</motion.span>
			</AnimatePresence>
			<span style={{ marginLeft: 'auto', display: 'flex', gap: 12, alignItems: 'center' }}>
				{!still && <Hint>点卡片标记自己会的</Hint>}
				{n > 0 && <button type="button" className="live-toggle" onClick={() => setHave(DIMS.map(() => false))} style={{ fontFamily: fonts.body, fontSize: 15, fontWeight: 800, borderRadius: 999, border: `2px solid ${colors.white}`, background: 'transparent', color: colors.white, padding: '5px 14px', cursor: 'pointer' }}>重来</button>}
			</span>
		</div>
		<div style={{ fontSize: 13, color: '#514c48', marginTop: 8 }}>来源：匠人 FDE Tech · 十项能力与评审方式（jracademy.ai/program-course/fde-tech）</div>
	</div>;
}

export default function S14_FourAbilities() {
	return <DeckFrame tag="04 · 能力" title="做 FDE，要练成这 10 项能力" subtitle="FDE Tech 的十个评审维度：看你能否解释决定、拿出证据，并在条件变化后调整。" accent={colors.green}>
		<StillScope><Body /></StillScope>
	</DeckFrame>;
}
