import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow } from '../ui';
import { Body, SlideHead, Punchline } from '../DeckTable';

const CLAUSES = [
	['召集人是谁', '一个人负责发起每周互查，不设投票'],
	['每周互查哪一项', '写具体交付物名字，不写「互相看看进度」'],
	['卡住了先找谁', '24 小时内先在组里说，不要卡一周才讲'],
	['谁做谁的第一个用户', '组内互为第一批真实用户或第一批挑刺人'],
];

export default function S11c_TeamContract() {
	return (
		<Slide bg={colors.white}>
			<Body>
				<SlideHead
					tag="组内契约 · 不超过半页"
					tagBg={colors.green}
					title="散会前写完，四条，写完拍照发群"
					sub="不写契约的组，第三周就没人说话了。四条都很短，现在就能写完。"
				/>
				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
					{CLAUSES.map(([title, body], index) => (
						<motion.div
							key={title}
							initial={{ opacity: 0, y: 18 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.12 + index * 0.09 }}
							style={{ border, boxShadow: shadow, background: ['#FFF6D6', '#DCEBFF', '#FFE9E4', '#D9F2E4'][index], padding: '20px 22px' }}
						>
							<div style={{ fontFamily: fonts.mono, color: colors.red, fontSize: 17, fontWeight: 900 }}>0{index + 1}</div>
							<div style={{ marginTop: 10, fontFamily: fonts.heading, fontSize: 26, fontWeight: 900 }}>{title}</div>
							<div style={{ marginTop: 10, fontSize: 18, lineHeight: 1.5 }}>{body}</div>
							<div style={{ marginTop: 12, borderTop: '2px dashed #000', paddingTop: 10, fontFamily: fonts.mono, fontSize: 17, color: '#666' }}>→ ________________________</div>
						</motion.div>
					))}
				</div>
				<Punchline bg={colors.dark}>
					组不是用来抱团取暖的。<span style={{ color: colors.yellow }}>它是你每周第一个愿意说真话的用户。</span>
				</Punchline>
			</Body>
		</Slide>
	);
}
