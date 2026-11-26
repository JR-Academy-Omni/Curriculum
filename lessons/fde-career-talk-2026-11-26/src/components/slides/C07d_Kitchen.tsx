import { motion } from 'framer-motion';
import { DeckFrame, colors, fonts } from '../kit';
import { StillScope, useStill, ini } from '../live';
import { assetPath } from '../ui';

// 左右对比：同一个厨房，新手 vs 高手。图片位预留给 Codex 生成（public/images/kitchen-junior.png、kitchen-senior.png），
// 文件不存在时显示占位框和建议 prompt。
const SIDES = [
	{
		key: 'junior', who: 'Junior + AI', img: 'images/kitchen-junior.png', tone: '#8a847c', bg: '#f4f1ec',
		prompt: '新手在厨房手忙脚乱：灶台冒烟、食材撒一地、端出一盘焦黑看不出是什么的菜。扁平插画，无文字，暖色背景。',
		dish: '没法吃', steps: ['让 AI 一口气写完，跑起来就算完', '改一处坏三处，不知道错在哪', '没有测试，不敢上线'],
		speed: 1,
	},
	{
		key: 'senior', who: 'Senior + AI', img: 'images/kitchen-senior.png', tone: colors.red, bg: '#fff1e7',
		prompt: '主厨在同样的厨房里有条不紊：几口锅同时在做，每道菜摆盘精致，按顺序出菜。扁平插画，无文字，暖色背景。',
		dish: '能上桌', steps: ['先拆任务、写清验收标准', '同时开几个 Agent 并行，自己审', '每一步都有测试，一天交付几周的活'],
		speed: 1000,
	},
];

function ImageSlot({ src, prompt, tone }: { src: string; prompt: string; tone: string }) {
	return <div style={{ position: 'relative', height: 250, borderRadius: 18, border: `2px dashed ${tone}`, background: 'repeating-linear-gradient(135deg, rgba(16,22,47,.04) 0 12px, transparent 12px 24px)', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
		<div style={{ textAlign: 'center', padding: '0 24px', color: '#514c48' }}>
			<div style={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 700, color: tone }}>预留插图 · {src}</div>
			<div style={{ fontSize: 14, lineHeight: 1.5, marginTop: 8 }}>{prompt}</div>
		</div>
		<img src={assetPath(src)} alt="" onError={e => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
			style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
	</div>;
}

function Body() {
	const still = useStill();
	return <div>
		<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14, marginBottom: 14 }}>
			<span style={{ fontSize: 17, fontWeight: 800, color: '#514c48' }}>同一个厨房：</span>
			{[['锅', '大模型'], ['刀', 'Claude Code、Cursor'], ['食材', '代码、文档、数据']].map(([a, b]) => <span key={a} style={{ fontSize: 17, fontWeight: 800, background: colors.white, border: `2px solid ${colors.dark}`, borderRadius: 999, padding: '4px 14px' }}><b>{a}</b> = {b}</span>)}
		</div>
		<div style={{ display: 'grid', gridTemplateColumns: '1fr 60px 1fr', alignItems: 'stretch' }}>
			{SIDES.flatMap((s, i) => {
				const card = <motion.div key={s.key} initial={ini(still, { opacity: 0, x: i ? 24 : -24 })} animate={{ opacity: 1, x: 0 }} transition={{ delay: still ? 0 : .15 + i * .25 }}
					style={{ background: s.bg, border: `2px solid ${colors.dark}`, borderRadius: 24, padding: '14px 18px', boxShadow: `7px 7px 0 ${i ? colors.red : 'rgba(16,22,47,.25)'}`, display: 'flex', flexDirection: 'column', gap: 10 }}>
					<div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
						<span style={{ fontSize: 26, fontWeight: 900 }}>{s.who}</span>
						<span style={{ fontSize: 24, fontWeight: 900, color: s.tone }}>端出来：{s.dish}</span>
					</div>
					<ImageSlot src={s.img} prompt={s.prompt} tone={s.tone} />
					<div style={{ display: 'grid', gap: 6 }}>{s.steps.map(t => <div key={t} style={{ fontSize: 18, fontWeight: 700, borderLeft: `4px solid ${s.tone}`, paddingLeft: 10 }}>{t}</div>)}</div>
				</motion.div>;
				return i === 0 ? [card, <div key="vs" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: fonts.heading, fontSize: 28, fontWeight: 900 }}>VS</div>] : [card];
			})}
		</div>
		<div style={{ marginTop: 14, display: 'grid', gridTemplateColumns: '150px 1fr auto', gap: 14, alignItems: 'center', background: colors.dark, color: colors.white, borderRadius: 18, padding: '12px 22px' }}>
			<span style={{ fontSize: 17, fontWeight: 800 }}>同一件事的速度</span>
			<div style={{ display: 'grid', gap: 6 }}>
				<div style={{ display: 'flex', alignItems: 'center', gap: 10 }}><span style={{ width: 110, fontSize: 14 }}>Junior + AI</span><motion.span initial={ini(still, { width: 0 })} animate={{ width: 8 }} style={{ height: 14, background: '#d8d4ce', borderRadius: 4 }} /><b style={{ fontFamily: fonts.mono }}>1×</b></div>
				<div style={{ display: 'flex', alignItems: 'center', gap: 10 }}><span style={{ width: 110, fontSize: 14 }}>Senior + AI</span><motion.span initial={ini(still, { width: 0 })} animate={{ width: 640 }} transition={{ delay: still ? 0 : .7, duration: 1 }} style={{ height: 14, background: colors.red, borderRadius: 4 }} /><b style={{ fontFamily: fonts.mono, color: colors.yellow }}>100–1000×</b></div>
			</div>
			<span style={{ fontSize: 17, fontWeight: 800, maxWidth: 260, lineHeight: 1.4 }}>公司会<span style={{ color: colors.yellow }}>给 Senior 配 AI</span>，不再招 Junior。</span>
		</div>
		<div style={{ fontSize: 12, color: '#514c48', marginTop: 6 }}>速度倍数是讲者带团队和学员的观察，不是统计数据。</div>
	</div>;
}

export default function C07d_Kitchen() {
	return <DeckFrame tag="01 · AI Coding 的差距" title="人人都有厨房，不等于人人会做饭" accent={colors.red}>
		<StillScope><Body /></StillScope>
	</DeckFrame>;
}
