import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow } from '../ui';
import { Body, SlideHead, Punchline } from '../DeckTable';

export default function S10_JDvsSoT() {
	return (
		<Slide bg={colors.white}>
			<Body>
				<SlideHead
					tag="③ 别把这两份文件写成一份"
					tagBg={colors.purple}
					title="SoT 管方向，JD 管这份活怎么算做完"
					sub="上周建的 SoT 一份就够了。今天写的 JD 会有很多份——每个任务一份。"
				/>
				<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
					{[
						['BUSINESS SOT', '唯一当前版本', ['服务谁、解决什么问题', '哪些是事实、哪些还是假设', '边界与明确不做的事', '本周最大的未知'], colors.yellow, '#FFF6D6'],
						['AGENT JD', '每个任务一份', ['这份活的范围与输入源', '交付物的格式与必含字段', '必须停下来找人的条件', '输出送到哪里归档'], colors.green, '#D9F2E4'],
					].map(([tag, sub, items, tagBg, bg], index) => (
						<motion.div
							key={tag as string}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.12 + index * 0.12 }}
							style={{ border, boxShadow: shadow, background: bg as string, padding: '22px 22px' }}
						>
							<div style={{ display: 'inline-block', background: tagBg as string, border, padding: '4px 14px', fontFamily: fonts.mono, fontWeight: 900, fontSize: 15, letterSpacing: 1 }}>{tag as string}</div>
							<div style={{ marginTop: 12, fontFamily: fonts.heading, fontSize: 27, fontWeight: 900 }}>{sub as string}</div>
							<ul style={{ marginTop: 14, listStyle: 'none', fontSize: 18.5, lineHeight: 1.75, fontWeight: 600 }}>
								{(items as string[]).map((i) => (
									<li key={i}><span style={{ color: colors.red, fontWeight: 900 }}>→ </span>{i}</li>
								))}
							</ul>
						</motion.div>
					))}
				</div>
				<motion.div
					initial={{ opacity: 0, y: 16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.45 }}
					style={{ marginTop: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, border, boxShadow: shadow, background: colors.dark, color: colors.white, padding: '16px 22px', fontSize: 21, fontWeight: 800 }}
				>
					<span>Agent</span>
					<span style={{ color: colors.yellow, fontFamily: fonts.mono }}>读 SoT →</span>
					<span>按 JD 干活</span>
					<span style={{ color: colors.yellow, fontFamily: fonts.mono }}>→ 交给你</span>
					<span style={{ background: colors.red, padding: '2px 12px' }}>改 SoT 的只有你</span>
				</motion.div>
				<Punchline bg={colors.red}>
					上周那条规矩这周继续：<u>AI 生成了一份新东西，不代表生意方向发生了变化。</u>
				</Punchline>
			</Body>
		</Slide>
	);
}
