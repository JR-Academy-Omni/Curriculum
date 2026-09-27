import { motion } from 'framer-motion';
import { colors, fonts, border, shadow } from '../ui';
import { Page, PageHead, Verdict, FS } from '../deck';

// P04 · 选择 Team 的三问 —— 决策框架（蓝图 §5）
// 三问是本节的尺子。P05 用它做判断练习。

const Q = [
	{
		n: '一',
		q: '值得开多个 context 吗？',
		tag: 'L7 的门',
		items: ['搜索或调查会产生大量中间噪音', '有两个以上可独立推进的工作流', '需要独立证据视角'],
		fail: '为否 → 单 Agent，判断结束',
		color: colors.blue,
	},
	{
		n: '二',
		q: '成员的中途信息会改变别人的下一步吗？',
		tag: '本节核心',
		items: ['A 的证据会让 B 改搜索方向', '接口或计划需要多轮协商', '两个假设竞争，需要互相找反证', '前序结果会改变后序任务定义'],
		fail: '只需各自完成、最后统一回报 → Subagent',
		color: colors.purple,
	},
	{
		n: '三',
		q: '协调收益大于协调成本吗？',
		tag: '成本闸',
		items: ['独立 context 成本', '任务拆分与状态维护', '消息阅读与转发', '冲突处理与 Lead 验收时间'],
		fail: '答不出下面那句 → 不开 Team',
		color: colors.orange,
	},
];

export default function L8P04_ThreeQuestions() {
	return (
		<Page>
			<PageHead phase="talk" time="15–25 min" title="选择 Team 的三问" />

			<div style={{ display: 'flex', gap: 18, flex: 1, minHeight: 0 }}>
				{Q.map((c, i) => (
					<motion.div
						key={c.n}
						initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.35, delay: 0.08 + i * 0.1 }}
						style={{ flex: 1, border, boxShadow: shadow, background: colors.white, display: 'flex', flexDirection: 'column' }}
					>
						<div style={{
							background: c.color, color: colors.white, padding: '10px 18px',
							borderBottom: border, display: 'flex', alignItems: 'baseline', gap: 10,
						}}>
							<span style={{ fontFamily: fonts.mono, fontSize: 22, fontWeight: 700 }}>第{c.n}问</span>
							<span style={{ fontSize: FS.note, opacity: 0.9, marginLeft: 'auto' }}>{c.tag}</span>
						</div>

						<div style={{ padding: '18px 20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
							<div style={{ fontSize: 27, fontWeight: 800, color: colors.dark, lineHeight: 1.35, marginBottom: 14 }}>
								{c.q}
							</div>
							<div style={{ display: 'flex', flexDirection: 'column', gap: 9, flex: 1 }}>
								{c.items.map((t) => (
									<div key={t} style={{ display: 'flex', gap: 9, alignItems: 'flex-start' }}>
										<span style={{ color: c.color, fontWeight: 900, fontSize: 22, lineHeight: 1.4 }}>·</span>
										<span style={{ fontSize: 22, color: '#555', lineHeight: 1.42 }}>{t}</span>
									</div>
								))}
							</div>
							<div style={{
								marginTop: 14, padding: '10px 14px', background: '#f4f4f8',
								borderLeft: `5px solid ${c.color}`, fontSize: 22, color: '#444', lineHeight: 1.4,
							}}>{c.fail}</div>
						</div>
					</motion.div>
				))}
			</div>

			<Verdict label="第三问的标准判断句">
				如果我<span style={{ background: colors.yellow, color: colors.black, padding: '0 10px' }}>删掉成员间消息</span>，
				任务会在哪一步变慢、变差或失去可验证性？
				<span style={{ fontSize: 24, opacity: 0.85, display: 'block', marginTop: 8 }}>答不出来，不开 Team。</span>
			</Verdict>
		</Page>
	);
}
