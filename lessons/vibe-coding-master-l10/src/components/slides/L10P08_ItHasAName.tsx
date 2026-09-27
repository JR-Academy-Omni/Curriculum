import { motion } from 'framer-motion';
import { colors, fonts, border, shadow } from '../ui';
import { Page, QuadGrid, Note } from '../deck';

// P08 · 图第一次出现（蓝图 §7.1）—— 全课第一个高光
// 🔴 第 32 分钟，一秒都不许早。第一句台词固定：「你们刚才填的东西有名字。」
// 🔴 这也是「四象限」这个词和四格配色在全 deck 的**首次**出现。
// 格子里放的是学员刚才填的那四问，所以揭示是「原来我填的是这个」，
// 不是「老师给了我一个新框架」。

export default function L10P08_ItHasAName() {
	return (
		<Page>
			<motion.div
				initial={{ opacity: 0, y: -14 }} animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.4 }}
				style={{ flexShrink: 0 }}
			>
				<div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 8 }}>
					<span style={{
						background: colors.blue, color: colors.white, padding: '4px 16px',
						fontSize: 18, fontWeight: 800, border: `2px solid ${colors.black}`,
					}}>讲</span>
					<span style={{
						marginLeft: 'auto', fontFamily: fonts.mono, fontSize: 15, fontWeight: 700,
						letterSpacing: 2, color: colors.white, background: colors.red,
						padding: '4px 14px', border: `2px solid ${colors.black}`,
					}}>四象限 AI 协作协议</span>
				</div>
				<h2 style={{ fontFamily: fonts.heading, fontSize: 52, fontWeight: 900, lineHeight: 1.15, letterSpacing: -1 }}>
					你们刚才填的东西<span style={{ background: colors.yellow, padding: '0 12px' }}>有名字</span>
				</h2>
			</motion.div>

			<QuadGrid
				size={21}
				style={{ flex: 1 }}
				cells={{
					open: (
						<>
							<Q n={1} />
							你和它都清楚的
							<div style={{ marginTop: 7, fontSize: 19, fontWeight: 800, color: colors.dark }}>直接交，别废话</div>
						</>
					),
					hidden: (
						<>
							<Q n={2} />
							你清楚、没写下来、默认它知道的
							<div style={{ marginTop: 7, fontSize: 19, fontWeight: 800, color: colors.dark }}>你不说它就编</div>
						</>
					),
					blind: (
						<>
							<Q n={3} />
							它能看出来、而你不知道的
							<div style={{ marginTop: 7, fontSize: 19, fontWeight: 800, color: colors.red }}>← 你刚才卡在这一格</div>
						</>
					),
					unknown: (
						<>
							<Q n={4} />
							你们俩都不知道的
							<div style={{ marginTop: 7, fontSize: 19, fontWeight: 800, color: colors.dark }}>设计实验</div>
						</>
					),
				}}
			/>

			<Note>
				我没有给你们一个新框架。这四问是按这四格问的，你们已经把它填完了。
			</Note>
		</Page>
	);
}

function Q({ n }: { n: number }) {
	return (
		<span style={{
			display: 'inline-block', marginRight: 8, fontFamily: fonts.mono,
			fontSize: 15, fontWeight: 700, color: colors.white, background: colors.dark,
			padding: '1px 8px', border: `2px solid ${colors.black}`,
			verticalAlign: 2,
		}}>问题 {n}</span>
	);
}
