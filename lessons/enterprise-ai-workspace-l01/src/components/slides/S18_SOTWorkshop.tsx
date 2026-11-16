import { motion } from 'framer-motion';
import { DeckFrame, colors, fonts } from '../kit';

export const tasks = [["01","企业服务","company","读取服务、受众与已确认条款",colors.yellow],["02","项目范围","project","整理包含及不包含的工程范围",colors.green],["03","关键日期","project","记录目标日期与依赖条件",colors.blue],["04","行动清单","tasks","对应事项、负责人、期限和状态",colors.red],["05","待确认项","source","保留资料缺口与未确认事项",colors.purple],["06","事实来源","source","为结论注明文件和记录编号",colors.orange]] as const;

export default function S20_Practice() {
	return <DeckFrame tag="动手操作 · 企业资料" title="整理企业与项目 SoT" subtitle="打开课程工作空间，将原始资料与当前状态对应起来。" accent={colors.red}>
		<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 18 }}>
			{tasks.map(([n, t, k, d, c], i) => <motion.div key={n} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .1 + i * .07 }} style={{ background: colors.white, border: `2px solid ${colors.dark}`, borderRadius: 22, padding: '18px 22px', borderTop: `14px solid ${c}` }}>
				<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
					<span style={{ fontFamily: fonts.mono, fontSize: 18, fontWeight: 700 }}>{n}</span>
					<span style={{ fontSize: 17, fontWeight: 800, background: c, borderRadius: 999, padding: '4px 12px' }}>{k}</span>
				</div>
				<div style={{ fontSize: 30, fontWeight: 900, marginTop: 8 }}>{t}</div>
				<div style={{ fontSize: 20, lineHeight: 1.45, marginTop: 8 }}>{d}</div>
			</motion.div>)}
		</div>
		<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 18, marginTop: 20 }}>
			{[["读取", "先打开企业与项目资料"], ["复述", "让 Codex 列已知与未知"], ["核对", "修正理解后再写文件"]].map(([t, d]) => <div key={t} style={{ background: colors.dark, color: colors.white, borderRadius: 18, padding: '14px 20px' }}><div style={{ fontFamily: fonts.mono, fontSize: 18, color: colors.yellow, fontWeight: 700 }}>{t}</div><div style={{ fontSize: 22, fontWeight: 700, marginTop: 6 }}>{d}</div></div>)}
		</div>
	</DeckFrame>;
}
