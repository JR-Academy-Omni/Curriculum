import { motion } from 'framer-motion';
import { DeckFrame, colors, fonts } from '../kit';
import { StillScope, useStill, ini, useCycle } from '../live';

// 三位决策者各自会问 FDE 什么，FDE 拿什么回答；下方是和传统顾问的对比（按 FDE 岗位描述与咨询项目常见做法整理的判断）
const CX = [
	{ who: 'CEO', ask: '这件事值不值？能省多少人、多少钱？', back: '上线后的数字：自动处理了多少、省下多少人力和时间', c: colors.red },
	{ who: 'CTO', ask: '能不能接进我们现有的系统？以后谁来维护？', back: '能运行的架构和接入方案，运维交接文档', c: colors.blue },
	{ who: 'CIO', ask: '数据安不安全？合规和审计怎么过？', back: '权限、脱敏和审计记录，哪些操作必须人工确认', c: colors.purple },
];
const ROWS: [string, string, string][] = [
	['对接谁', 'CEO、CTO、CIO 直接拍板，同时和一线使用者一起验收', '管理层发起，日常对接中层项目组'],
	['交出什么', '上线运行的系统，加上效果数据', '诊断报告、方案和实施路线图'],
	['多快见到东西', '几天出能演示的原型，几周上线', '先花几个月做诊断和方案'],
	['谁来动手', 'FDE 自己写代码、接系统', '方案交给客户 IT 或另找实施团队'],
	['怎么证明价值', '上线后的指标：省了多少人、多少时间', '方案是否被采纳、项目是否按期结束'],
];

function Body() {
	const still = useStill();
	const { at, pick, hover } = useCycle(CX.length, 2800, still);
	return <div>
		<div {...hover} style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18, perspective: 1400 }}>
			{CX.map((x, i) => {
				const on = !still && at === i;
				return <motion.div key={x.who} onClick={() => pick(i)} initial={ini(still, { opacity: 0, rotateX: 60, y: 30 })} animate={{ opacity: 1, rotateX: 0, y: on ? -10 : 0, z: on ? 40 : 0 }}
					transition={{ duration: .6, delay: still ? 0 : (on ? 0 : .1 + i * .12), ease: [0.16, 1, 0.3, 1] }}
					style={{ cursor: still ? 'default' : 'pointer', transformOrigin: '50% 100%', background: on ? colors.dark : colors.white, color: on ? colors.white : colors.dark, border: `2px solid ${colors.dark}`, borderRadius: 22, padding: '14px 20px', boxShadow: `7px 7px 0 ${x.c}${on ? ', 0 28px 44px -18px rgba(16,22,47,.6)' : ''}`, transition: 'background .3s, color .3s' }}>
					<div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
						<span style={{ fontFamily: fonts.heading, fontSize: 34, fontWeight: 900, color: on ? colors.yellow : x.c }}>{x.who}</span>
						<span style={{ fontSize: 15, fontWeight: 800, opacity: .75 }}>问 FDE</span>
					</div>
					<div style={{ fontSize: 21, fontWeight: 900, lineHeight: 1.4, marginTop: 4 }}>「{x.ask}」</div>
					<div style={{ fontSize: 16, lineHeight: 1.5, marginTop: 8, borderTop: `1px dashed ${on ? 'rgba(255,255,255,.35)' : 'rgba(16,22,47,.25)'}`, paddingTop: 8 }}><b>FDE 带回去：</b>{x.back}</div>
				</motion.div>;
			})}
		</div>
		<div style={{ display: 'grid', gridTemplateColumns: '170px 1fr 1fr', marginTop: 18, border: `2px solid ${colors.dark}`, borderRadius: 20, overflow: 'hidden', background: colors.white }}>
			<div style={{ background: '#f4f1ec' }} />
			<div style={{ background: colors.red, color: colors.white, padding: '8px 18px', fontSize: 20, fontWeight: 900 }}>FDE</div>
			<div style={{ background: '#e8e4de', padding: '8px 18px', fontSize: 20, fontWeight: 900 }}>传统 Consultant</div>
			{ROWS.map(([k, a, b], i) => [
				<motion.div key={k} initial={ini(still, { opacity: 0 })} animate={{ opacity: 1 }} transition={{ delay: still ? 0 : .5 + i * .1 }} style={{ padding: '7px 18px', fontSize: 17, fontWeight: 900, borderTop: '1px solid rgba(16,22,47,.12)', background: '#f4f1ec' }}>{k}</motion.div>,
				<motion.div key={k + 'a'} initial={ini(still, { opacity: 0, x: -10 })} animate={{ opacity: 1, x: 0 }} transition={{ delay: still ? 0 : .55 + i * .1 }} style={{ padding: '7px 18px', fontSize: 17, fontWeight: 800, borderTop: '1px solid rgba(16,22,47,.12)', background: '#fff1ee' }}>{a}</motion.div>,
				<motion.div key={k + 'b'} initial={ini(still, { opacity: 0, x: 10 })} animate={{ opacity: 1, x: 0 }} transition={{ delay: still ? 0 : .6 + i * .1 }} style={{ padding: '7px 18px', fontSize: 17, color: '#514c48', borderTop: '1px solid rgba(16,22,47,.12)' }}>{b}</motion.div>,
			])}
		</div>
		<div style={{ fontSize: 13, color: '#514c48', marginTop: 8 }}>对比是按 Palantir、OpenAI 等公司的 FDE 岗位描述和咨询项目的常见做法整理的判断，具体以项目为准。</div>
	</div>;
}

export default function S08c_CLevel() {
	return <DeckFrame tag="02 · FDE 做什么" title="FDE 直接对接 C-level" subtitle="这是它和传统顾问最大的区别：坐在 CEO、CTO、CIO 对面的，是那个亲手把系统做出来的人。" accent={colors.red}>
		<StillScope><Body /></StillScope>
	</DeckFrame>;
}
