import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow, shadowSm } from '../ui';
import { Body, SlideHead, Punchline } from '../DeckTable';

const STEPS = [
	['写 cron', '把五条的表达式都写出来，先不管跑不跑得动'],
	['手动触发一次', '不等到点，现在就跑一次，看它到底吐出什么'],
	['改交付物', '八成第一次输出你不满意——回去改 JD 的第 03 段'],
	['再跑一次', '改完再手动跑一次，直到输出是你愿意每天看的样子'],
	['才挂上排程', '满意了再挂定时。没验过就挂排程，等于每天生产垃圾'],
];

export default function S18b_PickYourTimer() {
	return (
		<Slide bg={colors.white}>
			<Body>
				<SlideHead
					tag="⑤ 现在动手 · 现场配通"
					tagBg={colors.purple}
					title="五步走，顺序不能换"
					sub="今天的过关线是 5 条配置 + 至少一次真实输出截图，不是 5 条挂上去就算。"
				/>
				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 12 }}>
					{STEPS.map(([title, body], index) => (
						<motion.div
							key={title}
							initial={{ opacity: 0, y: 18 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.1 + index * 0.09 }}
							style={{ position: 'relative', border, boxShadow: shadowSm, background: [colors.warmBg, '#FFF6D6', '#FFE9E4', '#DCEBFF', '#D9F2E4'][index], padding: '18px 15px', minHeight: 250 }}
						>
							<div style={{ width: 40, height: 40, display: 'grid', placeItems: 'center', border, background: index === 4 ? colors.green : colors.dark, color: index === 4 ? colors.black : colors.yellow, fontFamily: fonts.mono, fontWeight: 900, fontSize: 19 }}>{index + 1}</div>
							<div style={{ marginTop: 15, fontFamily: fonts.heading, fontSize: 23, lineHeight: 1.2, fontWeight: 900 }}>{title}</div>
							<div style={{ marginTop: 12, fontSize: 16, lineHeight: 1.5, fontWeight: 550 }}>{body}</div>
							{index < STEPS.length - 1 ? (
								<div style={{ position: 'absolute', right: -18, top: 108, zIndex: 3, width: 32, height: 32, display: 'grid', placeItems: 'center', border, background: colors.yellow, fontFamily: fonts.mono, fontSize: 21, fontWeight: 900 }}>→</div>
							) : null}
						</motion.div>
					))}
				</div>
				<div style={{ marginTop: 16, border, boxShadow: shadow, background: '#FFF6D6', padding: '14px 20px', fontSize: 19, fontWeight: 700, lineHeight: 1.5 }}>
					配不完五条也没关系。<b>先把第 ① 条竞品监控真的跑通</b>——它是唯一一条今天就能看到真实输出的。
				</div>
				<Punchline bg={colors.red}>
					没手动跑过就挂定时，<u>等于给自己排了一个每天准时生产垃圾的班。</u>
				</Punchline>
			</Body>
		</Slide>
	);
}
