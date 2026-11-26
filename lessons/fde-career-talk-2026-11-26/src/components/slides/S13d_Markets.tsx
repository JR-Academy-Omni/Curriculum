import { motion, AnimatePresence } from 'framer-motion';
import { DeckFrame, Panel, Label, colors, fonts } from '../kit';
import { StillScope, useStill, ini, Hint, useCycle } from '../live';

type K = 'cn' | 'au' | 'us';
// tilt：0 = 完全偏 Business，1 = 完全偏 Tech。是我们按岗位描述和从业者采访做的判断
const M: Record<K, { name: string; big: string; bigNote: string; tilt: number; c: string; rows: [string, string][]; src: string }> = {
	cn: {
		name: '中国', big: '+1,523%', bigNote: '2026 年前 7 个月 FDE 岗位发布量，同比', tilt: .25, c: colors.red,
		rows: [
			['谁在招', '字节、腾讯、阿里云，也有顺丰这类传统企业；工信部 2026 年 8 月底鼓励企业把 FDE 团队派到客户现场，上海计划建千人以上 FDE 储备库'],
			['岗位叫法', '前线部署工程师、前沿部署工程师、AI 解决方案工程师'],
			['工作更像', '以客户沟通、驻场、方案和实施为主，大多是 FDE Business；不少从业者说它是解决方案架构师、实施顾问换了个名字'],
			['薪资', '招聘广告月薪 3–6 万元（腾讯相关岗位）；HR 提醒广告价不等于常见实际薪资'],
		],
		src: '脉脉人才报告（经 SCMP 报道）、虎嗅从业者采访、猎聘／智联岗位',
	},
	au: {
		name: '澳洲', big: 'A$160–240K', bigNote: 'Senior FDE 底薪（中间一半人的区间）', tilt: .6, c: colors.blue,
		rows: [
			['谁在招', 'Databricks、Deloitte、FIS、Publicis Sapient、PALO IT、Lorikeet、Kinetic IT；悉尼、墨尔本为主'],
			['岗位叫法', 'Forward Deployed Engineer，也常写成 AI Consultant、Solutions Architect'],
			['工作更像', '咨询公司和大厂本地团队为主，两类都有；资深岗位多，入门岗少'],
			['门槛', '要本地工作权限；政府和国防项目常要公民身份或 NV1 安全许可'],
		],
		src: 'Re:Sourced 2026 FDE Guide；Databricks、Deloitte、PALO IT 等 2026 年在澳岗位',
	},
	us: {
		name: '美国', big: '643 → 5,330', bigNote: 'Indeed 上 FDE 岗位数，2025-04 → 2026-04（全球口径）', tilt: .85, c: colors.green,
		rows: [
			['谁在招', 'OpenAI、Anthropic、Palantir、Google Cloud、Salesforce、Databricks，以及大量 AI 创业公司'],
			['岗位叫法', 'Forward Deployed Engineer／Forward Deployed Software Engineer'],
			['工作更像', '以写代码、接系统、上线和评估为主，大多是 FDE Tech；Senior、Staff 职级多'],
			['薪资', 'OpenAI 旧金山底薪 US$185K–325K；Anthropic Staff US$280K–320K'],
		],
		src: 'Indeed 数据（Business Insider 报道）、Lightcast；OpenAI、Anthropic 官方岗位',
	},
};
const KEYS: K[] = ['cn', 'au', 'us'];

function Body() {
	const still = useStill();
	const { at, pick, hover } = useCycle(KEYS.length, 4200, still);
	const k = KEYS[at];
	const setK = (x: K) => pick(KEYS.indexOf(x));
	const m = M[k];
	const TW = 460;
	return <div {...hover} style={{ display: 'grid', gridTemplateColumns: '1.15fr .85fr', gap: 22 }}>
		<Panel style={{ padding: '16px 22px' }}>
			<div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
				{!still && KEYS.map(x => <button key={x} type="button" className="live-toggle" onClick={() => setK(x)} aria-pressed={x === k}
					style={{ fontFamily: fonts.body, fontSize: 20, fontWeight: 900, cursor: 'pointer', padding: '7px 20px', borderRadius: 999, border: `2px solid ${colors.dark}`, background: x === k ? M[x].c : colors.white, color: x === k && x !== 'us' ? colors.white : colors.dark, boxShadow: x === k ? `3px 3px 0 ${colors.dark}` : 'none' }}>{M[x].name}</button>)}
				{!still && <span style={{ marginLeft: 'auto' }}><Hint>自动轮播；点国家就停下</Hint></span>}
			</div>
			{still
				? <div style={{ display: 'grid', gap: 8, marginTop: 8 }}>{KEYS.map(x => <div key={x} style={{ fontSize: 13.5, lineHeight: 1.4, borderTop: '1px solid rgba(16,22,47,.12)', paddingTop: 6 }}>
					<b style={{ fontSize: 17 }}>{M[x].name}</b>　<b style={{ color: colors.red }}>{M[x].big}</b> {M[x].bigNote}<br />{M[x].rows.map(r => `${r[0]}：${r[1]}`).join('；')}</div>)}</div>
				: <AnimatePresence mode="wait">
					<motion.div key={k} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: .22 }}>
						<div style={{ display: 'flex', alignItems: 'baseline', gap: 14, marginTop: 12 }}>
							<span style={{ fontSize: 50, fontWeight: 900, letterSpacing: -1, color: m.c === colors.green ? '#2f8a1f' : m.c }}>{m.big}</span>
							<span style={{ fontSize: 17, fontWeight: 700 }}>{m.bigNote}</span>
						</div>
						<div style={{ display: 'grid', gap: 8, marginTop: 10 }}>
							{m.rows.map(([a, b], i) => <motion.div key={a} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: .08 * i }}
								style={{ display: 'grid', gridTemplateColumns: '90px 1fr', gap: 12, fontSize: 18, lineHeight: 1.45, borderTop: '1px solid rgba(16,22,47,.12)', paddingTop: 8 }}>
								<b>{a}</b><span style={{ fontWeight: a === '工作更像' ? 800 : 500 }}>{b}</span>
							</motion.div>)}
						</div>
						<div style={{ fontSize: 13, color: '#514c48', marginTop: 10 }}>来源：{m.src}</div>
					</motion.div>
				</AnimatePresence>}
		</Panel>
		<Panel bg={colors.dark} style={{ color: colors.white, padding: '16px 22px' }}>
			<Label bg={colors.yellow} color={colors.dark}>同叫 FDE，偏哪一种？</Label>
			<div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 16, fontWeight: 900, marginTop: 22, width: TW }}>
				<span style={{ color: colors.yellow }}>← 偏 Business</span><span style={{ color: '#9fd8ff' }}>偏 Tech →</span>
			</div>
			<div style={{ display: 'grid', gap: 26, marginTop: 14 }}>
				{KEYS.map((x, i) => {
					const on = still || x === k;
					return <div key={x} onClick={() => setK(x)} style={{ cursor: still ? 'default' : 'pointer', opacity: on ? 1 : .45, transition: 'opacity .25s' }}>
						<div style={{ fontSize: 19, fontWeight: 900, marginBottom: 8 }}>{M[x].name}</div>
						<div style={{ position: 'relative', width: TW, height: 14, borderRadius: 7, background: 'linear-gradient(90deg, #FFDE59, #38B6FF)' }}>
							<motion.span initial={ini(still, { left: TW / 2 - 14 })} animate={{ left: M[x].tilt * TW - 14, scale: on && !still ? 1.15 : 1 }} transition={{ type: 'spring', stiffness: 140, damping: 16, delay: still ? 0 : .2 + i * .15 }}
								style={{ position: 'absolute', top: -7, width: 28, height: 28, borderRadius: '50%', background: M[x].c, border: `3px solid ${colors.white}`, boxShadow: '0 2px 0 rgba(0,0,0,.4)' }} />
						</div>
					</div>;
				})}
			</div>
			<div style={{ fontSize: 17, lineHeight: 1.55, marginTop: 26, color: '#e6e4ef' }}>中国的 FDE 机会多，<b style={{ color: colors.yellow }}>大多是 Business 型</b>；美国的高薪 FDE <b style={{ color: '#9fd8ff' }}>大多是 Tech 型</b>；澳洲两种都有，量小、偏资深。</div>
			<div style={{ fontSize: 12, color: '#a9a7b8', marginTop: 10 }}>刻度位置是我们根据岗位描述和从业者采访做的判断。</div>
		</Panel>
	</div>;
}

export default function S13d_Markets() {
	return <DeckFrame tag="03 · 三个市场" title="中国、澳洲、美国：同叫 FDE，差别很大" subtitle="先看你要去哪个市场，再看那里的 FDE 更像哪一种。" accent={colors.blue}>
		<StillScope><Body /></StillScope>
	</DeckFrame>;
}
