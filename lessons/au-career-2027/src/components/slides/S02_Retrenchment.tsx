import { useState, type KeyboardEvent } from 'react';
import { DeckFrame, Panel, colors, fonts, ink } from '../kit';
import { Source } from '../career';
import { sources } from '../../data/sources';

// ABS 026_MTH, Australia, original series. Each observation refers to the previous month.
const months = [
	{ label: '7 月', people: 50541.1056 },
	{ label: '8 月', people: 57830.7221 },
	{ label: '9 月', people: 65716.5059 },
];
const openingMonths = months.slice(0, 2);
const openingTotal = openingMonths.reduce((sum, month) => sum + month.people, 0);
const maxPeople = 75000;
const ticks = ['7.5 万', '5 万', '2.5 万', '0'];

const format = (people: number) => (people / 10000).toFixed(2);
const keepSpace = (event: KeyboardEvent) => {
	if (event.key === ' ') event.stopPropagation();
};

export default function S02_Retrenchment() {
	const [selectedMonth, setSelectedMonth] = useState<number | null>(null);
	const month = selectedMonth === null ? null : months[selectedMonth];
	return <DeckFrame tag="澳洲劳动力市场 · 截至 2026 年 11 月 19 日" title="10–11 月，澳洲有多少人被裁？" subtitle="ABS 全国裁员估计目前到 9 月。10–11 月已有多家企业公布重组计划。">
		<div style={{ display: 'grid', gridTemplateColumns: '1.05fr 1fr', gap: 22 }}>
			<Panel style={{ padding: '18px 21px 16px' }}>
				<strong style={{ fontSize: 23 }}>ABS · 澳洲每月被裁人数</strong>
				<p style={{ fontSize: 17, color: ink, marginTop: 5 }}>10 月：未发布 · 11 月：未发布</p>
				<div style={{ position: 'relative', height: 214, marginTop: 24, marginRight: 10 }}>
					<div aria-hidden style={{ position: 'absolute', inset: '15px 0 35px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
						{ticks.map((tick) => <div key={tick} style={{ height: 1, display: 'flex', alignItems: 'center', gap: 12, fontSize: 17, color: ink }}>
							<span style={{ width: 57, textAlign: 'right', whiteSpace: 'nowrap' }}>{tick}</span>
							<span style={{ flex: 1, borderTop: '1px solid #10162f34' }} />
						</div>)}
					</div>
					<div role="group" aria-label="点选月份查看被裁人数" style={{ position: 'absolute', inset: '15px 10px 0 80px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
						{months.map(({ label, people }, index) => {
							const selected = month ? selectedMonth === index : index < openingMonths.length;
							const count = format(people) + ' 万人';
							return <button key={label} type="button" className="chart-bar-button" aria-label={label + '，约 ' + count + '被裁'} aria-pressed={selected} onKeyDown={keepSpace} onClick={() => setSelectedMonth(index)}>
								<span className="chart-bar" style={{ height: (people / maxPeople * 100) + '%', background: selected ? colors.red : colors.warmBg }}>
									<span className="chart-bar-value">{count}</span>
								</span>
								<span className="chart-bar-month">{label}</span>
							</button>;
						})}
					</div>
				</div>
				<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
					<button className="chart-control chart-compare" aria-pressed={month === null} onKeyDown={keepSpace} onClick={() => setSelectedMonth(null)}>看 7–8 月合计</button>
					<p aria-live="polite" aria-atomic="true" style={{ color: colors.dark, fontSize: 20, textAlign: 'right' }}>
						{month ? month.label : '7–8 月'}　<b>{format(month?.people ?? openingTotal)} 万人</b>
					</p>
				</div>
			</Panel>
			<Panel bg={colors.dark} style={{ color: colors.white, padding: '18px 21px 16px' }}>
				<h2 style={{ fontSize: 23, marginBottom: 12 }}>10–11 月企业公告 · 计划影响的岗位与合同</h2>
				<div style={{ borderTop: '1px solid #ffffff40', padding: '10px 0' }}>
					<div style={{ color: colors.yellow, fontSize: 18, fontWeight: 800 }}>11 月 17 日 · Bunnings</div>
					<div style={{ fontFamily: fonts.heading, fontSize: 25, fontWeight: 900 }}>约 230 个永久技术岗位将裁撤</div>
					<p style={{ fontSize: 17 }}>另有约 120 个承包安排将结束。TCS 交接从 12 月开始。</p>
				</div>
				<div style={{ borderTop: '1px solid #ffffff40', padding: '10px 0' }}>
					<div style={{ color: colors.yellow, fontSize: 18, fontWeight: 800 }}>11 月 10 日 · Qantas</div>
					<p style={{ fontSize: 19 }}><b>约 850 个岗位</b>预计在未来几年受影响，首批变化预计于 2027 年年中实施。</p>
				</div>
				<div style={{ borderTop: '1px solid #ffffff40', padding: '10px 0 0' }}>
					<div style={{ color: colors.yellow, fontSize: 18, fontWeight: 800 }}>10 月 20 日 · NAB</div>
					<p style={{ fontSize: 19 }}>计划在 2027 年 9 月前缩减最多 <b>2,500 个岗位</b>。</p>
				</div>
			</Panel>
		</div>
		<Source links={[[ 'ABS 全国裁员估计', sources.abs ], [ 'ABS 发布日程', sources.absCalendar ], [ 'Bunnings 公告', sources.bunnings ], [ 'Qantas · ABC 报道', sources.qantas ], [ 'NAB 公告', sources.nab ]]} />
	</DeckFrame>;
}
