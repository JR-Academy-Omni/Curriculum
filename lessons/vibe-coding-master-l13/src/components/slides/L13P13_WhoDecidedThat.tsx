import { motion } from 'framer-motion';
import { ActBadge, Page, Head, Code, colors, fonts, border, shadow, FS } from '../deck';

// P10 · 那个数字，是谁定的 ⭐⭐
// 🔴 三个问题顺序不能换，一个都不能省。第二个问完要停两秒，不要马上接话。
// 🔴 纯执行岗的追问必须问：「你知道他是按什么定的吗？」
//    答不上来 → 那也是一个空，在等的那个人就是老板。
// 🔴 纪律 7：不出现精确缺口数。
const MARKS = `[confirmed]   锁定，有人确认过，带日期
[proposed]    待签字的建议
[to supply]   还没有人提供`;

export default function L13P13_WhoDecidedThat() {
	return (
		<Page>
			<ActBadge act={3} />
			<Head>那个数字，<span style={{ color: colors.red }}>是谁定的？</span></Head>

			<div style={{ display: 'flex', gap: 30, flex: 1, minHeight: 0, alignItems: 'flex-start' }}>
				<div style={{ flex: '0 0 520px', display: 'flex', flexDirection: 'column', gap: 16 }}>
					{[
						'刚才写「什么必须报批」的时候，有多少人写了一个金额、一个天数？',
						'那个数字，是谁定的？',
						'大概率是你刚才顺手写的 —— 因为不写显得没写完。',
					].map((q, i) => (
						<motion.div
							key={i}
							initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
							transition={{ delay: 0.15 + i * 0.25 }}
							style={{
								border, background: i === 2 ? colors.dark : colors.white,
								color: i === 2 ? colors.white : colors.black,
								boxShadow: '4px 4px 0 #000', padding: '15px 18px',
								fontSize: 23, lineHeight: 1.5,
								fontWeight: i === 1 ? 700 : 400,
							}}
						>
							<span style={{ fontFamily: fonts.mono, color: i === 2 ? colors.yellow : colors.red, marginRight: 10 }}>{i + 1}</span>
							{q}
						</motion.div>
					))}
					<div style={{
						border: `2px dashed ${colors.purple}`, padding: '12px 16px',
						fontSize: 20, lineHeight: 1.55, color: '#444',
					}}>
						答「老板定的」的人 → 追一句：<b>你知道他是按什么定的吗？</b>
						<br />
						答不上来 → <b style={{ color: colors.purple }}>那也是一个空，在等的那个人就是老板。</b>
					</div>
				</div>

				<div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 16 }}>
					<Code label="三个标记" code={MARKS} size={21} />
					<motion.div
						initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}
						style={{ border: `3px solid ${colors.red}`, background: colors.white, boxShadow: shadow, padding: '18px 22px' }}
					>
						<div style={{ fontFamily: fonts.heading, fontSize: 28, fontWeight: 900, marginBottom: 10 }}>
							绝不用一个合理的猜测去填 <span style={{ fontFamily: fonts.mono, color: colors.red }}>[to supply]</span>
						</div>
						<div style={{ fontSize: 21, lineHeight: 1.65, color: '#333' }}>
							空着的缺口是信息。
							<b>编造的值是一个看起来像进展的缺陷</b> ——
							而且更糟，<b>因为它让所有人不再追问。</b>
						</div>
					</motion.div>
					<div style={{ display: 'flex', gap: 12 }}>
						{[
							{ t: '超过 5000 元需老板审批', c: colors.red, n: '看起来很专业。没有人同意过。' },
							{ t: '超过 [to supply] 需老板审批', c: colors.green, n: '难看。但它在等一个人。' },
						].map((x) => (
							<div key={x.t} style={{ flex: 1, border, background: colors.white, boxShadow: '3px 3px 0 #000', padding: '13px 15px' }}>
								<div style={{ fontFamily: fonts.mono, fontSize: 17, color: x.c, fontWeight: 700, marginBottom: 7, lineHeight: 1.4 }}>{x.t}</div>
								<div style={{ fontSize: FS.note, color: '#666', lineHeight: 1.5 }}>{x.n}</div>
							</div>
						))}
					</div>
					<div style={{ fontSize: FS.note, color: '#888', fontFamily: fonts.mono }}>
						动手：把每一个你答不上「谁定的」的数字，改成 [to supply]
					</div>
				</div>
			</div>
		</Page>
	);
}
