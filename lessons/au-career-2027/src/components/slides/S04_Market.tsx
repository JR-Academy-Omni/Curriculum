import { motion, useReducedMotion } from 'framer-motion';
import { DeckFrame, Panel, colors, fonts, ink } from '../kit';
import { Source } from '../career';
import { sources } from '../../data/sources';

const national = [{ year: '2025', ads: 9383 }, { year: '2026', ads: 17792 }];
const categories = [
	{ name: 'Software Engineer', all: [1864, 2128], ai: [283, 592] },
	{ name: 'Data Analyst', all: [387, 330], ai: [61, 79] },
	{ name: 'AI Engineer', all: [320, 604], ai: [301, 584] },
];
const format = (ads: number) => ads.toLocaleString('en-AU');
const yearColors = [colors.dark, colors.red];
const added = national[1].ads - national[0].ads;
const growth = (100 * added / national[0].ads).toFixed(1);

function NationalChart({ reduce }: { reduce: boolean }) {
	const max = 20000;
	return <Panel style={{ padding: '19px 23px 15px' }}>
		<h2 style={{ fontSize: 25 }}>全澳提到 AI 技能的广告</h2>
		<p style={{ fontSize: 18, color: ink }}>两年各自的 8–10 月合计</p>
		<div style={{ position: 'relative', height: 273, margin: '30px 0 0 0' }}>
			<div aria-hidden style={{ position: 'absolute', inset: '0 0 34px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
				{[20000, 15000, 10000, 5000, 0].map(value => <div key={value} style={{ display: 'flex', alignItems: 'center', gap: 10, height: 1, color: ink, fontSize: 15 }}>
					<span style={{ width: 56, textAlign: 'right' }}>{format(value)}</span>
					<span style={{ flex: 1, borderTop: '1px solid #10162f30' }} />
				</div>)}
			</div>
			<div role="group" aria-label="全澳提到 AI 技能的广告，按年比较" style={{ position: 'absolute', inset: '0 13px 34px 80px', display: 'flex', justifyContent: 'space-around', gap: 28, alignItems: 'flex-end' }}>
				{national.map(({ year, ads }, index) => <div key={year} style={{ position: 'relative', flex: '0 1 120px', height: (100 * ads / max) + '%' }}>
					<motion.div aria-hidden className="market-bar market-national-bar" data-year={year} initial={reduce ? false : { scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ delay: .15 + index * .45, duration: .7, ease: 'easeOut' }} style={{ width: '100%', height: '100%', transformOrigin: 'bottom', background: yearColors[index], borderRadius: '11px 11px 0 0' }} />
					<strong style={{ position: 'absolute', bottom: '100%', left: '50%', transform: 'translateX(-50%)', fontFamily: fonts.heading, fontSize: 33, lineHeight: 1.02, whiteSpace: 'nowrap', paddingBottom: 4 }}>{format(ads)}</strong>
					<span style={{ position: 'absolute', top: '100%', width: '100%', textAlign: 'center', fontSize: 19, fontWeight: 800, marginTop: 5 }}>{year} 年</span>
				</div>)}
			</div>
		</div>
		<motion.div className="market-growth" initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.05, duration: .25 }} style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 10, padding: '8px 13px', background: colors.yellow, borderRadius: 8 }}>
			<strong style={{ fontSize: 30, lineHeight: 1.08 }}>+{growth}%</strong><span style={{ fontSize: 20, fontWeight: 800 }}>多 {format(added)} 条</span>
		</motion.div>
	</Panel>;
}

function RoleBars({ values, scale, reduce, delay, label }: {
	values: number[];
	scale: number;
	reduce: boolean;
	delay: number;
	label: string;
}) {
	return <div role="group" aria-label={label + '，2025 年 ' + format(values[0]) + ' 条，2026 年 ' + format(values[1]) + ' 条'} style={{ display: 'grid', gap: 4 }}>
		{values.map((ads, index) => <div key={index} style={{ display: 'grid', gridTemplateColumns: '1fr 57px', gap: 7, alignItems: 'center' }}>
			<div aria-hidden style={{ height: 11, background: colors.warmBg, borderRadius: 4 }}>
				<motion.div className="market-bar market-role-bar" initial={reduce ? false : { scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: delay + index * .24, duration: .58, ease: 'easeOut' }} style={{ width: (100 * ads / scale) + '%', height: '100%', transformOrigin: 'left', borderRadius: 4, background: yearColors[index] }} />
			</div>
			<strong aria-hidden style={{ textAlign: 'right', fontSize: 18, fontVariantNumeric: 'tabular-nums', lineHeight: 1.1 }}>{format(ads)}</strong>
		</div>)}
	</div>;
}

export default function S04_Market() {
	const reduce = Boolean(useReducedMotion());
	const columns = 'minmax(155px, 1fr) 1fr 1fr';
	return <DeckFrame tag="澳洲招聘市场" title="提到 AI 技能的招聘广告同比增近九成" titleSize={55} subtitle="左边看全澳增长，右边看具体职业的总量和 AI 技能要求怎样变。">
		<div style={{ display: 'grid', gridTemplateColumns: '.87fr 1.28fr', gap: 23, alignItems: 'stretch' }}>
			<NationalChart reduce={reduce} />
			<Panel style={{ padding: '19px 23px 15px' }}>
				<h2 style={{ fontSize: 25 }}>按职业看 10 月招聘广告</h2>
				<div style={{ display: 'flex', gap: 17, marginTop: 7 }}>
					{national.map(({ year }, index) => <span key={year} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 18 }}><span aria-hidden style={{ width: 13, height: 13, borderRadius: 3, background: yearColors[index] }} />{year} 年</span>)}
				</div>
				<div style={{ display: 'grid', gridTemplateColumns: columns, gap: 13, marginTop: 18, paddingBottom: 9, fontSize: 17, fontWeight: 850 }}>
					<span>职业</span><span>全部广告</span><span>提到 AI 技能</span>
				</div>
				{categories.map(({ name, all, ai }, index) => <div key={name} style={{ display: 'grid', gridTemplateColumns: columns, gap: 13, alignItems: 'center', minHeight: 72, borderTop: '1px solid #10162f28' }}>
					<strong style={{ fontSize: 18 }}>{name}</strong>
					<RoleBars values={all} scale={2200} reduce={reduce} delay={.5 + index * .12} label={name + ' 全部广告'} />
					<RoleBars values={ai} scale={650} reduce={reduce} delay={.5 + index * .12} label={name + ' 提到 AI 技能的广告'} />
				</div>)}
				<p style={{ marginTop: 13, fontSize: 17, color: ink }}>Data Analyst 总广告少了 57 条，提到 AI 技能的多了 18 条。</p>
				<p style={{ marginTop: 5, fontSize: 15, color: ink }}>两列各用独立刻度。每列的三组条形可以直接比较。</p>
			</Panel>
		</div>
		<Source links={[['AI Jobs Index Australia · 全行业', sources.market], ['Lightcast · 职业比较', sources.roles]]} />
	</DeckFrame>;
}
