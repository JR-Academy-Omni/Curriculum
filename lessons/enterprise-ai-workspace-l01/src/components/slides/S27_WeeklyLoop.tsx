import { motion } from 'framer-motion';
import { DeckFrame, Panel, Label, PromptCard, colors } from '../kit';

const loop = [['收到新资料', colors.green], ['人工确认', colors.white], ['写回项目 SoT', colors.yellow], ['后续任务读取', colors.dark]] as const;

export default function P09_Learnings() {
	return <DeckFrame tag="企业记忆 · 更新与复用" title="把确认后的变化写回项目资料" subtitle="后续任务读取当前状态，同时保留原始通知和变更记录。" accent={colors.orange}>
		<div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
			{loop.map(([t, c], i) => <motion.div key={t} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .15 + i * .12 }} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
				<div style={{ background: c, color: c === colors.dark ? colors.white : colors.dark, border: `2px solid ${colors.dark}`, borderRadius: 18, padding: '18px 22px', fontSize: 26, fontWeight: 900, whiteSpace: 'nowrap' }}>{t}</div>
				{i < loop.length - 1 && <span style={{ fontSize: 30, fontWeight: 900 }}>→</span>}
			</motion.div>)}
		</div>
		<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginTop: 28 }}>
			<PromptCard label="project/current-status.md">{`版本：v2，依据 UP02 更新
目标开工：2027-04-15，未确认
报价分项：草稿已完成，报价未批准
变更历史：原期望 2027-04-12，保留原始记录`}</PromptCard>
			<div style={{ display: 'grid', gap: 18, alignContent: 'start' }}>
				<Panel><Label>谁维护</Label><div style={{ fontSize: 22, lineHeight: 1.55, marginTop: 12 }}>Codex 可以整理变更建议；<b>负责人确认后</b>，再写回企业或项目资料。</div></Panel>
				<Panel bg={colors.yellow}><Label>下次怎么继续</Label><div style={{ fontSize: 22, lineHeight: 1.55, marginTop: 12, fontWeight: 700 }}>开始新任务时，读取当前项目资料，再生成下一份简报。</div></Panel>
			</div>
		</div>
	</DeckFrame>;
}
