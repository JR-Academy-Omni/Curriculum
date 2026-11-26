import { motion } from 'framer-motion';
import { DeckFrame, Panel, Label, colors } from '../kit';

const daily = [
	['问清需求', '和使用者、IT、决策人一起弄清卡在哪一步'],
	['读陌生的东西', '客户的代码库、数据和老系统'],
	['动手实现', '写接口、处理数据、接权限、部署'],
	['定范围', '第一版做到哪；范围变了怎么取舍'],
	['看结果', '真实用户怎么用，下一版改什么'],
];

export default function S08_WhatIsFDE() {
	return <DeckFrame tag="02 · FDE 做什么" title="FDE：直接进到客户项目里的工程师" subtitle="Forward Deployed Engineer。不只在自家产品后面写功能，而是走到使用者身边，把问题变成真正在用的系统。">
		<div style={{ display: 'grid', gridTemplateColumns: '.85fr 1.15fr', gap: 24 }}>
			<div style={{ display: 'grid', gap: 16, alignContent: 'start' }}>
				<Panel bg="#f4f1ec"><Label bg="#8a847c">常见的开发工作</Label><div style={{ fontSize: 23, lineHeight: 1.55, marginTop: 12 }}>需求已经写好 → 实现 → 代码合进主分支，就算完成。</div></Panel>
				<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .4 }} style={{ fontSize: 32, fontWeight: 900, textAlign: 'center' }}>↓ 换到客户现场</motion.div>
				<Panel bg={colors.yellow}><Label>FDE</Label><div style={{ fontSize: 23, lineHeight: 1.55, marginTop: 12, fontWeight: 700 }}>需求要自己去问 → 实现并接进客户系统 → 客户真的用起来，才算完成。</div></Panel>
			</div>
			<Panel style={{ background: '#0f1428', color: '#f3f0e8' }}>
				<Label bg={colors.yellow} color={colors.dark}>FDE 一周里会碰到的事</Label>
				<div style={{ display: 'grid', gap: 12, marginTop: 18 }}>
					{daily.map(([k, d], i) => <motion.div key={k} initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: .15 + i * .08 }} style={{ display: 'grid', gridTemplateColumns: '170px 1fr', gap: 14, alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,.12)', paddingBottom: 10 }}>
						<span style={{ fontSize: 24, fontWeight: 900, color: colors.yellow }}>{k}</span><span style={{ fontSize: 21, lineHeight: 1.45 }}>{d}</span>
					</motion.div>)}
				</div>
			</Panel>
		</div>
	</DeckFrame>;
}
