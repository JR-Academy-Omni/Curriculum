import { motion } from 'framer-motion';
import { DeckFrame, colors, fonts } from '../kit';

const outs = [
	{ t: '公众号图文', d: '1500–2500 字长文 + 排好版的 HTML', f: 'drafts/wechat/', c: colors.yellow },
	{ t: '网页', d: '能被搜索到的问答页，合并后自动上线', f: 'site/', c: colors.green },
	{ t: '小红书', d: '封面标题 + 6 张卡片文字 + 正文，正文不放外链', f: 'drafts/xhs/', c: colors.red },
	{ t: '短视频', d: '60 秒口播 + 逐镜分镜；非 YouTube 平台画面不放链接', f: 'drafts/video/', c: colors.blue },
	{ t: '短帖', d: 'LinkedIn / 朋友圈：3–5 句，一个观点一个行动', f: 'drafts/social/', c: colors.purple },
];

export default function P06c_FanOut() {
	return <DeckFrame tag="一个话题 · 多种媒体" title="一个话题 SoT，自动派生出五种内容" subtitle="选题、核对事实只做一次。每个平台只改写法，不改事实；事实要改，回去改 SoT。" accent={colors.red} bg="#fbf8f3">
		<div style={{ position: 'relative', height: 560 }}>
			<svg width="1400" height="560" style={{ position: 'absolute', inset: 0 }} aria-hidden>
				{outs.map((_, i) => <motion.path key={i} d={`M 420 280 C 620 280, 620 ${60 + i * 110}, 820 ${60 + i * 110}`} fill="none" stroke={colors.dark} strokeWidth={3} strokeDasharray="10 8" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: .4 + i * .1, duration: .5 }} />)}
			</svg>
			<motion.div initial={{ opacity: 0, scale: .92 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: .1 }} style={{ position: 'absolute', left: 20, top: 170, width: 400, background: colors.dark, color: colors.white, borderRadius: 26, padding: '24px 26px', boxShadow: `9px 9px 0 ${colors.red}` }}>
				<div style={{ fontFamily: fonts.mono, fontSize: 15, color: colors.yellow, letterSpacing: 1.5 }}>TOPIC SOT</div>
				<div style={{ fontSize: 32, fontWeight: 900, marginTop: 6 }}>今天的话题 SoT</div>
				<div style={{ fontSize: 19, lineHeight: 1.5, marginTop: 10, color: '#d8d8dd' }}>核心观点 · 给谁看 · 事实 + 来源 · 我的经历 · 下一步 · 不能说</div>
			</motion.div>
			{outs.map((o, i) => <motion.div key={o.t} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: .5 + i * .12 }} style={{ position: 'absolute', left: 830, top: 18 + i * 110, width: 560, display: 'grid', gridTemplateColumns: '150px 1fr', gap: 14, alignItems: 'center', background: colors.white, border: `2px solid ${colors.dark}`, borderLeft: `14px solid ${o.c}`, borderRadius: 18, padding: '12px 16px' }}>
				<div><div style={{ fontSize: 25, fontWeight: 900 }}>{o.t}</div><div style={{ fontFamily: fonts.mono, fontSize: 14, marginTop: 4 }}>{o.f}</div></div>
				<div style={{ fontSize: 18, lineHeight: 1.45 }}>{o.d}</div>
			</motion.div>)}
		</div>
	</DeckFrame>;
}
