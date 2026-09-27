import { motion } from 'framer-motion';
import { colors, border, shadow } from '../ui';
import { Page, PageHead, Verdict, Note } from '../deck';

// P16 · 搬运二 · 先让它说，你别先下结论（蓝图 §8.3）
// 这一格最反直觉：人的本能是先下结论。
// 接 L6「它是在查还是在猜」和 L9「Discovery 前九步不改任何文件」—— 同一件事。

export default function L10P16_LetItSpeakFirst() {
	return (
		<Page>
			<PageHead
				phase="talk"
				title={<>搬运二：<span style={{ background: colors.yellow, padding: '0 10px' }}>先让它说，你别先下结论</span></>}
				mark="搬运 2 / 4"
				markBg={colors.blue}
			/>

			<motion.div
				initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.4 }}
				style={{ border, boxShadow: shadow, background: colors.blue, color: colors.white, padding: '26px 32px', flexShrink: 0 }}
			>
				<div style={{ fontSize: 34, fontWeight: 900, lineHeight: 1.4 }}>
					盲区是唯一一格，<span style={{ background: colors.white, color: colors.dark, padding: '0 10px' }}>它比你先知道</span>。
					<br />
					所以这一格的搬运动作，是<strong>你闭嘴</strong>。
				</div>
			</motion.div>

			<div style={{ display: 'flex', gap: 20, flex: 1, minHeight: 0 }}>
				<div style={{ flex: 1, border, boxShadow: '4px 4px 0 #000', background: colors.white, display: 'flex', flexDirection: 'column' }}>
					<div style={{ background: colors.red, color: colors.white, padding: '10px 18px', borderBottom: border, fontSize: 21, fontWeight: 900 }}>
						为什么这么难做到
					</div>
					<div style={{ padding: '16px 20px', fontSize: 23, lineHeight: 1.55, color: colors.dark, flex: 1 }}>
						人的本能是<strong>先有判断再找证据</strong>。你交任务的时候已经有一个猜测了，
						而你会不自觉地把那个猜测写进指令里。
						<div style={{ marginTop: 12, fontWeight: 800, color: colors.red }}>
							你一说结论，这一格就当场关掉了。
						</div>
					</div>
				</div>

				<div style={{ flex: 1, border, boxShadow: '4px 4px 0 #000', background: colors.white, display: 'flex', flexDirection: 'column' }}>
					<div style={{ background: colors.dark, color: colors.white, padding: '10px 18px', borderBottom: border, fontSize: 21, fontWeight: 900 }}>
						这条你其实早就学过
					</div>
					<div style={{ padding: '16px 20px', fontSize: 23, lineHeight: 1.7, color: colors.dark, flex: 1 }}>
						<strong>L6</strong> · 定位三问的第二问：它是在查，还是在猜<br />
						<strong>L9</strong> · Discovery 前九步<strong>一个文件都不许改</strong>
						<div style={{ marginTop: 12, fontSize: 21, color: '#666' }}>
							当时是两条流程纪律。现在你知道它们防的是同一件事。
						</div>
					</div>
				</div>
			</div>

			<Verdict size={27}>
				你越确定原因是什么，<span style={{ background: colors.yellow, color: colors.black, padding: '0 8px' }}>越应该先让它说一轮</span>。
			</Verdict>

			<Note>「先让它说」不是客气，是采集。你要的是它的判断，不是它的顺从。</Note>
		</Page>
	);
}
