import { motion } from 'framer-motion';
import { DeckFrame, Panel, Label, colors, fonts } from '../kit';

const fields = [
	['核心观点', '一句话：这篇要让读者记住什么'],
	['给谁看', '从 brand.md 里选：哪一类用户、在什么处境'],
	['事实 + 来源', '每个数字、规定、引用都附 URL'],
	['我的经历', '一段只有我能写的真实经历'],
	['下一步', '读完让他做什么（找我 / 领清单 / 预约）'],
	['不能说', '这一篇特别要避开的话'],
];

export default function P06b_TopicSoT() {
	return <DeckFrame tag="回到 W1 · SoT" title="话题定下来之后，先写一份「这个话题的 SoT」" subtitle="W1 讲过 SoT：只有一个当前版本、关键判断有来源、有新证据就更新。今天把同一个原则用到每一个话题上。" accent={colors.red}>
		<div style={{ display: 'grid', gridTemplateColumns: '.85fr 1.15fr', gap: 24 }}>
			<div style={{ display: 'grid', gap: 16, alignContent: 'start' }}>
				<Panel bg="#f4f1ec"><Label bg="#8a847c">W1 · 生意的 SoT</Label><div style={{ fontSize: 22, lineHeight: 1.55, marginTop: 12 }}>你服务谁、解决什么问题、卖什么、哪些不能做。<br />在今天的仓库里，它就是 <b>memory/brand.md</b>。</div></Panel>
				<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .4 }} style={{ fontSize: 34, fontWeight: 900, textAlign: 'center' }}>↓ 每天选出一个话题</motion.div>
				<Panel bg={colors.yellow}><Label>W15 · 话题的 SoT</Label><div style={{ fontSize: 22, lineHeight: 1.55, marginTop: 12, fontWeight: 700 }}>topics/日期-sot.md：这一篇内容唯一的事实和观点来源。后面所有平台的版本，都只从这一份派生。</div></Panel>
			</div>
			<Panel style={{ background: '#0f1428', color: '#f3f0e8' }}>
				<Label bg={colors.yellow} color={colors.dark}>topics/2026-11-08-sot.md 里写这 6 项</Label>
				<div style={{ display: 'grid', gap: 12, marginTop: 18 }}>
					{fields.map(([k, d], i) => <motion.div key={k} initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: .15 + i * .08 }} style={{ display: 'grid', gridTemplateColumns: '170px 1fr', gap: 14, alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,.12)', paddingBottom: 10 }}>
						<span style={{ fontSize: 23, fontWeight: 900, color: colors.yellow }}>{k}</span><span style={{ fontSize: 20, lineHeight: 1.45 }}>{d}</span>
					</motion.div>)}
				</div>
				<div style={{ fontFamily: fonts.body, fontSize: 19, lineHeight: 1.5, marginTop: 16, color: '#d8d8dd' }}>它也是一份当前版本：发现事实错了，改这一份，所有平台的版本重新生成。</div>
			</Panel>
		</div>
	</DeckFrame>;
}
