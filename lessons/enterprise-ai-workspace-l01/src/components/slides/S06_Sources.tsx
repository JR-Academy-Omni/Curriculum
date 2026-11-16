import { motion } from 'framer-motion';
import { DeckFrame, colors, fonts } from '../kit';

const outs = [{t:"企业介绍",d:"服务、受众与业务范围",f:"outputs/intro.md",c:colors.yellow},{t:"项目简报",d:"范围、日期、待办与来源",f:"outputs/brief.md",c:colors.green},{t:"行动清单",d:"负责人、期限、状态",f:"outputs/actions.md",c:colors.red},{t:"客户 FAQ",d:"根据已确认信息回答常见问题",f:"outputs/faq.md",c:colors.blue},{t:"后续内容",d:"介绍、官网与内容任务读取同一份资料",f:"outputs/",c:colors.purple}];

export default function P06c_FanOut() {
	return <DeckFrame tag="一个 SoT · 多份成果" title="同一份企业资料，供不同任务读取" subtitle="企业事实发生变化时，先更新对应资料，再修改受影响的成果。" accent={colors.red} bg="#fbf8f3">
		<div style={{ position: 'relative', height: 560 }}>
			<svg width="1400" height="560" style={{ position: 'absolute', inset: 0 }} aria-hidden>
				{outs.map((_, i) => <motion.path key={i} d={`M 420 280 C 620 280, 620 ${60 + i * 110}, 820 ${60 + i * 110}`} fill="none" stroke={colors.dark} strokeWidth={3} strokeDasharray="10 8" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: .4 + i * .1, duration: .5 }} />)}
			</svg>
			<motion.div initial={{ opacity: 0, scale: .92 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: .1 }} style={{ position: 'absolute', left: 20, top: 170, width: 400, background: colors.dark, color: colors.white, borderRadius: 26, padding: '24px 26px', boxShadow: `9px 9px 0 ${colors.red}` }}>
				<div style={{ fontFamily: fonts.mono, fontSize: 15, color: colors.yellow, letterSpacing: 1.5 }}>BUSINESS SOT</div>
				<div style={{ fontSize: 32, fontWeight: 900, marginTop: 6 }}>企业与项目 SoT</div>
				<div style={{ fontSize: 19, lineHeight: 1.5, marginTop: 10, color: '#d8d8dd' }}>企业服务 · 项目范围 · 日期 · 确认状态 · 来源 · 变更历史</div>
			</motion.div>
			{outs.map((o, i) => <motion.div key={o.t} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: .5 + i * .12 }} style={{ position: 'absolute', left: 830, top: 18 + i * 110, width: 560, display: 'grid', gridTemplateColumns: '150px 1fr', gap: 14, alignItems: 'center', background: colors.white, border: `2px solid ${colors.dark}`, borderLeft: `14px solid ${o.c}`, borderRadius: 18, padding: '12px 16px' }}>
				<div><div style={{ fontSize: 25, fontWeight: 900 }}>{o.t}</div><div style={{ fontFamily: fonts.mono, fontSize: 14, marginTop: 4 }}>{o.f}</div></div>
				<div style={{ fontSize: 18, lineHeight: 1.45 }}>{o.d}</div>
			</motion.div>)}
		</div>
	</DeckFrame>;
}
