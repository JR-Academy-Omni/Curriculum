import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadowSm } from '../ui';
import { Body, SlideHead, SourceNote } from '../DeckTable';

const ROWS: [string, string, string][] = [
	['01 · 任务范围', '盯我 SoT 里列的 4 家竞品的定价页和产品更新页。不负责判断我要不要跟进改价。', '#FFE9E4'],
	['02 · 输入源', '4 个页面地址（写死在 memory 里）+ 我的当前 SoT + 上一次抓到的快照。', '#FFF6D6'],
	['03 · 交付物规格', '一封邮件，200 字以内。必含字段：变化项、变化前后、发现时间、原始链接。没有变化就写“无变化”，不要凑字数。', '#DCEBFF'],
	['04 · 停下来找人', '页面打不开或结构变了、变化涉及我的主力定价区间、需要注册或付费才能看到内容——这三种情况都先问我，不要自己猜。', '#EDE9FE'],
	['05 · 输出送到哪', '发到我的工作邮箱，主题前缀固定，方便我一眼筛出来。同时把快照存进云盘的竞品目录。', '#D9F2E4'],
];

export default function S09b_JDExample() {
	return (
		<Slide bg={colors.warmBg}>
			<Body style={{ padding: '38px 58px 32px' }}>
				<SlideHead
					tag="③ 工作说明书 · 示范"
					tagBg={colors.yellow}
					titleSize="clamp(32px, 2.9vw, 44px)"
					title="一份写完了的 JD 长这样"
					sub="注意它有多具体——具体到 agent 自己就能判断这一次算不算做完。"
				/>
				<div style={{ display: 'grid', gap: 10 }}>
					{ROWS.map(([label, body, bg], index) => (
						<motion.div
							key={label}
							initial={{ opacity: 0, x: -16 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.3, delay: 0.12 + index * 0.08 }}
							style={{ display: 'grid', gridTemplateColumns: '210px 1fr', gap: 16, alignItems: 'center', border, boxShadow: shadowSm, background: bg, padding: '13px 17px' }}
						>
							<div style={{ fontFamily: fonts.mono, fontSize: 16, fontWeight: 900 }}>{label}</div>
							<div style={{ fontSize: 18.5, lineHeight: 1.5, fontWeight: 550 }}>{body}</div>
						</motion.div>
					))}
				</div>
				<div style={{ marginTop: 14, padding: '12px 18px', background: colors.dark, color: colors.white, border, fontSize: 19.5, fontWeight: 750, lineHeight: 1.4 }}>
					对照检查：这份 JD 里<span style={{ color: colors.yellow }}>没有一句“尽量”“合适的时候”“如果需要的话”</span>——含糊的词全部换成了条件。
				</div>
				<SourceNote>本页为课堂合成示例，用于说明 JD 的写法与颗粒度，不代表任何真实公司的运营数据或竞品情况。</SourceNote>
			</Body>
		</Slide>
	);
}
