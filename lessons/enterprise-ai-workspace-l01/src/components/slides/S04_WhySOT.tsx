import { motion } from 'framer-motion';
import { DeckFrame, Panel, Label, colors } from '../kit';

const chain = ['资料', '确认', 'SoT', '任务', '成果'];

export default function S03_RealVsFake() {
	return <DeckFrame tag="SoT · 为什么需要" title="聊天和文件越来越多，哪一份算数？" subtitle="把旧计划、新通知和当前状态放在一起，先解决版本与确认状态。">
		<div style={{ display: 'grid', gridTemplateColumns: '.85fr 1.15fr', gap: 26, height: '100%' }}>
			<Panel bg="#f4f1ec">
				<Label bg="#8a847c">资料分散</Label>
				<div style={{ fontSize: 26, lineHeight: 1.55, marginTop: 20 }}>Brief 写 4 月 12 日，客户新通知写 4 月 15 日，AI 周报写成“已经确认”。</div>
				<div style={{ fontSize: 22, lineHeight: 1.55, marginTop: 18, color: '#514c48' }}>客户提出日期变化，但进入许可和供应商交期没有确认。需要保留原始记录及不同确认状态。</div>
			</Panel>
			<Panel>
				<Label bg={colors.red}>使用当前 SoT</Label>
				<div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 24 }}>
					{chain.map((c, i) => <motion.div key={c} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .2 + i * .12 }} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
						<div style={{ background: c === 'SoT' ? colors.yellow : colors.white, border: `2px solid ${colors.dark}`, borderRadius: 16, padding: '14px 20px', fontSize: 28, fontWeight: 900 }}>{c}</div>
						{i < chain.length - 1 && <span style={{ fontSize: 30, fontWeight: 900 }}>→</span>}
					</motion.div>)}
				</div>
				<div style={{ fontSize: 23, lineHeight: 1.6, marginTop: 26 }}>
					根据通知核对变化：<b>新的期望日期是 4 月 15 日，仍未确认</b>。负责人确认写回后，简报按更新后的资料生成。
				</div>
				<div style={{ fontSize: 22, lineHeight: 1.55, marginTop: 16, fontWeight: 700 }}>关键日期同时记录：当前值、确认状态、来源。</div>
			</Panel>
		</div>
	</DeckFrame>;
}
