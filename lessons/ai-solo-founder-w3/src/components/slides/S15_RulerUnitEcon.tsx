import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow } from '../ui';
import { Body, SlideHead, Punchline, SourceNote } from '../DeckTable';

// CH3 · 尺子 Ⅲ —— 单位经济：两套贡献
// 呼应 W4 deck S24 下周预告第 2 条「算两套贡献：收入减可变现金成本 vs 再扣掉你自己的时间」
function Ledger({
	title,
	sub,
	rows,
	bottom,
	accent,
	note,
}: {
	title: string;
	sub: string;
	rows: { k: string; v: string }[];
	bottom: string;
	accent: string;
	note: string;
}) {
	return (
		<div style={{ background: colors.white, border, boxShadow: shadow, display: 'flex', flexDirection: 'column' }}>
			<div style={{ background: accent, color: accent === colors.green ? colors.black : colors.white, padding: '13px 18px', borderBottom: '3px solid #000' }}>
				<div style={{ fontFamily: fonts.heading, fontSize: 24, fontWeight: 900 }}>{title}</div>
				<div style={{ fontSize: 14.5, marginTop: 3, opacity: 0.9 }}>{sub}</div>
			</div>
			<div style={{ padding: '14px 18px', display: 'flex', flexDirection: 'column', gap: 9, flex: 1 }}>
				{rows.map((r) => (
					<div key={r.k} style={{ display: 'flex', justifyContent: 'space-between', gap: 14, fontSize: 16.5, lineHeight: 1.4 }}>
						<span>{r.k}</span>
						<span style={{ fontFamily: fonts.mono, color: '#888', flexShrink: 0 }}>{r.v}</span>
					</div>
				))}
				<div style={{ marginTop: 'auto', paddingTop: 12, borderTop: '3px solid #000', display: 'flex', justifyContent: 'space-between', fontSize: 19, fontWeight: 800 }}>
					<span>{bottom}</span>
					<span style={{ fontFamily: fonts.mono, background: colors.yellow, padding: '0 12px' }}>______</span>
				</div>
			</div>
			<div style={{ background: '#f6f6f6', borderTop: '2px solid #000', padding: '11px 18px', fontSize: 15, lineHeight: 1.45 }}>{note}</div>
		</div>
	);
}

export default function S15_RulerUnitEcon() {
	return (
		<Slide bg={colors.warmBg}>
			<Body>
				<SlideHead
					tag="§3 · 尺子 Ⅲ · 单位经济"
					tagBg={colors.green}
					title="同一单生意，要算两遍"
					sub="第一遍算出来通常很好看。第二遍才是真的——差别就在有没有把你自己算进去。"
				/>

				<motion.div
					initial={{ opacity: 0, y: 18 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4, delay: 0.15 }}
					style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}
				>
					<Ledger
						title="第一遍 · 只扣现金"
						sub="做多一单，你多掏出去的钱"
						accent={colors.green}
						rows={[
							{ k: '一单收入', v: '+' },
							{ k: '— 平台 / 支付手续费', v: '−' },
							{ k: '— 这一单专用的软件、素材、外采', v: '−' },
							{ k: '— 交付时的其他现金开销', v: '−' },
						]}
						bottom="现金贡献"
						note="这个数为负 = 每卖一单亏一次钱，卖得越多亏越多。先把它弄正。"
					/>
					<Ledger
						title="第二遍 · 再扣你自己"
						sub="把你的时间按小时折成钱"
						accent={colors.red}
						rows={[
							{ k: '现金贡献（上一栏的结果）', v: '=' },
							{ k: '— 你做这一单花的小时数', v: '×' },
							{ k: '— × 你的时间值多少钱一小时', v: '=' },
							{ k: '（不知道值多少？用你上一份工作的时薪起步）', v: '' },
						]}
						bottom="真实贡献"
						note="这个数为负 = 你在给客户打工，还倒贴。服务型生意翻车，八成翻在这一栏。"
					/>
				</motion.div>

				<Punchline bg={colors.dark}>
					<b style={{ color: colors.yellow }}>不把自己的时间折成钱，服务型生意的毛利永远好看。</b>
					<u>好看到你两年后才发现，自己只是换了个地方上班，还没有年假。</u>
				</Punchline>

				<SourceNote>
					来源：<b>outline.json · L09 step ③</b>「单位经济要把你自己的时间折成钱算进成本，否则服务型生意永远看起来毛利很高」；
					两套贡献的拆法呼应 W4 deck S24 下周预告第 2 条。表内数字全部留空，由学员现场填。
				</SourceNote>
			</Body>
		</Slide>
	);
}
