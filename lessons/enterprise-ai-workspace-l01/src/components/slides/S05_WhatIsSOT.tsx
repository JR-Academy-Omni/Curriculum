import { motion } from 'framer-motion';
import { DeckFrame, Panel, Label, colors, fonts } from '../kit';

const fields = [["当前范围", "包含什么、不包含什么"], ["关键日期", "期望日期及依赖条件"], ["确认状态", "已确认、待确认、未批准"], ["事实来源", "文件名与记录编号"], ["负责人", "谁维护，谁确认"], ["变更记录", "原值、新值、日期及原因"]];

export default function P06b_TopicSoT() {
	return <DeckFrame tag="SOURCE OF TRUTH" title="SoT：当前版本、事实来源与更新记录" subtitle="Single：只有一个当前版本；Source：关键判断有来源；Truth：可以根据确认的新信息更新。" accent={colors.red}>
		<div style={{ display: 'grid', gridTemplateColumns: '.85fr 1.15fr', gap: 24 }}>
			<div style={{ display: 'grid', gap: 16, alignContent: 'start' }}>
				<Panel bg="#f4f1ec"><Label bg="#8a847c">企业 SoT</Label><div style={{ fontSize: 22, lineHeight: 1.55, marginTop: 12 }}>企业服务、目标客户、已确认条款和业务边界。<br />在本节工作空间中保存在 <b>company/company-profile.md</b>。</div></Panel>
				<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .4 }} style={{ fontSize: 34, fontWeight: 900, textAlign: 'center' }}>↓ 进入具体项目</motion.div>
				<Panel bg={colors.yellow}><Label>项目 SoT</Label><div style={{ fontSize: 22, lineHeight: 1.55, marginTop: 12, fontWeight: 700 }}>project/current-status.md：维护当前范围、关键日期和确认状态，供项目简报和行动清单使用。</div></Panel>
			</div>
			<Panel style={{ background: '#0f1428', color: '#f3f0e8' }}>
				<Label bg={colors.yellow} color={colors.dark}>project/current-status.md</Label>
				<div style={{ display: 'grid', gap: 12, marginTop: 18 }}>
					{fields.map(([k, d], i) => <motion.div key={k} initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: .15 + i * .08 }} style={{ display: 'grid', gridTemplateColumns: '170px 1fr', gap: 14, alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,.12)', paddingBottom: 10 }}>
						<span style={{ fontSize: 23, fontWeight: 900, color: colors.yellow }}>{k}</span><span style={{ fontSize: 20, lineHeight: 1.45 }}>{d}</span>
					</motion.div>)}
				</div>
				<div style={{ fontFamily: fonts.body, fontSize: 19, lineHeight: 1.5, marginTop: 16, color: '#d8d8dd' }}>发现错误或收到新确认记录时，更新对应字段，并保留来源与变更历史。</div>
			</Panel>
		</div>
	</DeckFrame>;
}
