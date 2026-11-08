import { motion } from 'framer-motion';
import { DeckFrame, Panel, Label, colors, fonts } from '../kit';

const lanes = [['公众号', colors.yellow], ['网页', colors.green], ['小红书', colors.red], ['短视频', colors.blue], ['短帖', colors.purple]] as const;

export default function P06d_Workflow() {
	return <DeckFrame tag="这条 workflow 怎么排" title="先定 SoT，再同时生成，各自打分，一个 PR 批准" subtitle="五个版本互不依赖，可以同时生成；但都来自同一份 SoT，所以 SoT 必须先过关。" titleSize={52}>
		<div style={{ display: 'grid', gridTemplateColumns: '200px 40px 200px 40px 1fr 40px 190px', alignItems: 'center', gap: 6, height: 330 }}>
			{[['话题调查', 'topics/日期.md', colors.white], ['写话题 SoT', '核对事实来源', colors.dark]].map(([t, d, c], i) => <Step key={t} t={t} d={d} c={c} delay={.1 + i * .15} arrow />)}
			<div style={{ display: 'grid', gap: 7 }}>
				{lanes.map(([n, c], i) => <motion.div key={n} initial={{ opacity: 0, x: 14 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: .45 + i * .08 }} style={{ display: 'grid', gridTemplateColumns: '1fr 24px 1fr', alignItems: 'center', gap: 8 }}>
					<div style={{ background: c, color: c === colors.blue || c === colors.purple ? colors.white : colors.dark, border: `2px solid ${colors.dark}`, borderRadius: 14, padding: '7px 14px', fontSize: 20, fontWeight: 800 }}>生成 · {n}</div>
					<span style={{ fontSize: 22, fontWeight: 900 }}>→</span>
					<div style={{ background: colors.white, border: `2px solid ${colors.dark}`, borderRadius: 14, padding: '7px 14px', fontSize: 18, fontWeight: 700 }}>按{n}评分卡 Eval</div>
				</motion.div>)}
			</div>
			<span style={{ fontSize: 30, fontWeight: 900, textAlign: 'center' }}>→</span>
			<Step t="一个 PR" d="你看完点 Merge" c={colors.green} delay={1} />
		</div>
		<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 18 }}>
			<Panel><Label>为什么 SoT 先过关</Label><div style={{ fontSize: 20, lineHeight: 1.5, marginTop: 10 }}>SoT 里一个数字错了，五个版本就一起错。先核对一次，比事后改五遍便宜。</div></Panel>
			<Panel><Label>为什么分开 Eval</Label><div style={{ fontSize: 20, lineHeight: 1.5, marginTop: 10 }}>每个平台规矩不同：小红书看封面和正文长度，视频看前 3 秒和画面不放链接。</div></Panel>
			<Panel bg={colors.yellow}><Label>发布</Label><div style={{ fontSize: 20, lineHeight: 1.5, marginTop: 10, fontWeight: 700 }}>网页合并就上线；其他平台的稿子在仓库里，手动发，或者接之前「AI 内容工厂」课搭的发布流程去排程。</div></Panel>
		</div>
	</DeckFrame>;
}

function Step({ t, d, c, delay, arrow }: { t: string; d: string; c: string; delay: number; arrow?: boolean }) {
	const dark = c === colors.dark;
	return <>
		<motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay }} style={{ background: c, color: dark ? colors.white : colors.dark, border: `2px solid ${colors.dark}`, borderRadius: 18, padding: '18px 16px', textAlign: 'center' }}>
			<div style={{ fontSize: 24, fontWeight: 900 }}>{t}</div>
			<div style={{ fontFamily: fonts.body, fontSize: 17, marginTop: 6 }}>{d}</div>
		</motion.div>
		{arrow && <span style={{ fontSize: 30, fontWeight: 900, textAlign: 'center' }}>→</span>}
	</>;
}
