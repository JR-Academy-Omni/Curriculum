import { motion } from 'framer-motion';
import { DeckFrame, colors, fonts } from '../kit';

const steps = [["01","对照通知","列出变化、不变和仍待确认的字段","UP02",colors.yellow],["02","确认变化","由负责人确认可以更新的内容","变更建议",colors.red],["03","写回资料","记录当前值、状态、来源和历史","current-status.md",colors.blue],["04","生成新版","按当前资料生成简报，保留旧版","project-brief-v2.md",colors.green]] as const;

export default function S06_Chain() {
	return <DeckFrame tag="SoT · 项目更新" title="收到新通知后，先改资料，再改成果" subtitle="对照新旧记录，确认变化后写回项目 SoT。" accent={colors.red} bg="#fbf8f3">
		<div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 18, marginTop: 10 }}>
			{steps.map(([t, n, d, f, c], i) => <motion.div key={n} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: .15 + i * .2 }} style={{ position: 'relative' }}>
				<div style={{ background: colors.white, border: `2px solid ${colors.dark}`, borderRadius: 22, padding: '20px 20px', borderTop: `14px solid ${c}`, minHeight: 300 }}>
					<div style={{ fontFamily: fonts.mono, fontSize: 22, fontWeight: 700 }}>{t}</div>
					<div style={{ fontSize: 32, fontWeight: 900, marginTop: 8 }}>{n}</div>
					<div style={{ fontSize: 21, lineHeight: 1.5, marginTop: 12 }}>{d}</div>
					<div style={{ marginTop: 20, background: colors.dark, color: colors.white, borderRadius: 12, padding: '10px 14px', fontFamily: fonts.mono, fontSize: 18 }}>→ {f}</div>
				</div>
				{i < 3 && <div style={{ position: 'absolute', right: -22, top: 140, fontSize: 34, fontWeight: 900, zIndex: 2 }}>→</div>}
			</motion.div>)}
		</div>
		<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18, marginTop: 24 }}>
			<div style={{ background: colors.yellow, borderRadius: 18, padding: '16px 22px', fontSize: 23, fontWeight: 800, lineHeight: 1.45 }}>目标日期改为 4 月 15 日，但进入许可与供应商交期仍待确认。</div>
			<div style={{ background: '#ffe9e9', borderRadius: 18, padding: '16px 22px', fontSize: 23, fontWeight: 800, lineHeight: 1.45 }}>报价分项草稿已完成，不代表客户已批准报价。</div>
		</div>
	</DeckFrame>;
}
