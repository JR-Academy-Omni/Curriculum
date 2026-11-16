import { motion } from 'framer-motion';
import { DeckFrame, Panel, Label, colors, fonts } from '../kit';

const fields = [["本次对话", "临时需求、澄清与修改意见"], ["企业 SoT", "稳定的企业事实"], ["项目 SoT", "当前项目的事实与状态"], ["原始资料", "保留通知和会议记录"], ["工作规则", "任务的处理原则与边界"], ["任务模板", "固定输入、步骤和输出结构"]];

export default function P06b_TopicSoT() {
	return <DeckFrame tag="MEMORY · SoT · 工作规则" title="记忆、SoT 与工作规则分别保存什么" subtitle="记忆涉及保存和找回上下文；SoT 管当前事实；工作规则管怎样执行任务。" accent={colors.red}>
		<div style={{ display: 'grid', gridTemplateColumns: '.85fr 1.15fr', gap: 24 }}>
			<div style={{ display: 'grid', gap: 16, alignContent: 'start' }}>
				<Panel bg="#f4f1ec"><Label bg="#8a847c">企业与项目 SoT</Label><div style={{ fontSize: 22, lineHeight: 1.55, marginTop: 12 }}>企业服务、项目范围、当前日期、确认状态与来源。<br />保存在 <b>company/</b> 和 <b>project/</b>。</div></Panel>
				<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .4 }} style={{ fontSize: 34, fontWeight: 900, textAlign: 'center' }}>↓ 执行任务时一起读取</motion.div>
				<Panel bg={colors.yellow}><Label>工作规则</Label><div style={{ fontSize: 22, lineHeight: 1.55, marginTop: 12, fontWeight: 700 }}>AGENTS.md：必读资料、语言格式、修改方式及需要人工确认的动作。</div></Panel>
			</div>
			<Panel style={{ background: '#0f1428', color: '#f3f0e8' }}>
				<Label bg={colors.yellow} color={colors.dark}>信息保存位置</Label>
				<div style={{ display: 'grid', gap: 12, marginTop: 18 }}>
					{fields.map(([k, d], i) => <motion.div key={k} initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: .15 + i * .08 }} style={{ display: 'grid', gridTemplateColumns: '170px 1fr', gap: 14, alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,.12)', paddingBottom: 10 }}>
						<span style={{ fontSize: 23, fontWeight: 900, color: colors.yellow }}>{k}</span><span style={{ fontSize: 20, lineHeight: 1.45 }}>{d}</span>
					</motion.div>)}
				</div>
				<div style={{ fontFamily: fonts.body, fontSize: 19, lineHeight: 1.5, marginTop: 16, color: '#d8d8dd' }}>临时想法不直接写成确定事实；经过负责人确认后，再更新对应文件。</div>
			</Panel>
		</div>
	</DeckFrame>;
}
