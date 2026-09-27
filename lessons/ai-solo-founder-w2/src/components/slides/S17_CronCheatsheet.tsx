import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow } from '../ui';
import { Body, SlideHead, DeckTable, Punchline } from '../DeckTable';

const FIELDS = [
	['分', '0–59'],
	['时', '0–23'],
	['日', '1–31'],
	['月', '1–12'],
	['周', '0–6 · 0 是周日'],
];

const M = (s: string) => <span style={{ fontFamily: fonts.mono, fontWeight: 900, fontSize: 21 }}>{s}</span>;

export default function S17_CronCheatsheet() {
	return (
		<Slide bg={colors.white}>
			<Body>
				<SlideHead
					tag="⑤ 排程语法 · 五位就够"
					tagBg={colors.purple}
					title="cron 只有五个位置，今天这五条全在这张表里"
					sub="不用背。看懂位置顺序，剩下的照抄改数字。"
				/>
				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 11, marginBottom: 16 }}>
					{FIELDS.map(([name, range], index) => (
						<motion.div
							key={name}
							initial={{ opacity: 0, y: 14 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.1 + index * 0.07 }}
							style={{ border, boxShadow: shadow, background: ['#FFE9E4', '#FFF6D6', '#DCEBFF', '#EDE9FE', '#D9F2E4'][index], padding: '14px 14px', textAlign: 'center' }}
						>
							<div style={{ fontFamily: fonts.mono, fontSize: 30, fontWeight: 900, color: colors.red }}>*</div>
							<div style={{ marginTop: 6, fontFamily: fonts.heading, fontSize: 24, fontWeight: 900 }}>{name}</div>
							<div style={{ marginTop: 5, fontFamily: fonts.mono, fontSize: 14, color: '#444' }}>{range}</div>
						</motion.div>
					))}
				</div>
				<DeckTable
					fontSize={19}
					cellPad="11px 15px"
					cols={[
						{ label: '本课第几条', w: '150px' },
						{ label: '你想要它什么时候跑', w: '1fr' },
						{ label: 'cron', w: '190px' },
						{ label: '记忆点', w: '1fr' },
					]}
					rows={[
						['① 竞品监控', '每天早上 7 点', M('0 7 * * *'), '日、月、周三个位置都放开'],
						['② SEO 周报', '每周一早上 9 点', M('0 9 * * 1'), '最后一位 1 = 周一'],
						['③ 财务月报', '每月 1 号早上 8 点', M('0 8 1 * *'), '第三位定死 1 号'],
						['④ 周报', '每周日傍晚 6 点', M('0 18 * * 0'), '最后一位 0 = 周日'],
						['⑤ git 日报', '每天晚上 10 点', M('0 22 * * *'), '和 ① 同型，只改小时'],
					]}
				/>
				<Punchline bg={colors.red}>
					配之前先确认一件事：<u>这台机器 / 这个平台的时区是不是你的时区。</u>时区错了，你的「每天 7 点」会在半夜跑。
				</Punchline>
			</Body>
		</Slide>
	);
}
