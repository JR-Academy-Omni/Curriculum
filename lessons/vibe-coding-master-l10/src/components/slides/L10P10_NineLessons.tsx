import { motion } from 'framer-motion';
import { colors, border, shadow } from '../ui';
import { Page, PageHead, MiniTable, QUAD, Note } from '../deck';

// P10 · 前九节全是这张图的推论（蓝图 §7.2）
// 作用不是复习，是**换解释**：几十条规则不是几十件事，是四件事。
// 🔴 这一页会引出「这框架是不是事后套上去的」这个质疑。
//    **挡法不许是动机声明**（「这不是我事后编的」是本节禁句）——
//    动机是学员唯一无法验证的东西，越强调越像辩解，而且会把
//    「这个框架站不站得住」偷换成「这个老师诚不诚实」。
//    正确做法：**下一个可证伪的判据，然后让位给证据**——
//    「事后归纳的框架只能解释教过的东西，能推出没教过的东西的才不是」，
//    兑现点在 P19 的退化那一条（Johari 原型没有、前九节也没教过）。

export default function L10P10_NineLessons() {
	return (
		<Page>
			<PageHead
				phase="talk"
				title="前九节，全是这张图的推论"
				sub="你们学过的那几十条规则，不是几十件事。是四件事。"
			/>

			<MiniTable
				size={22}
				widths={['150px', '1.5fr', '1fr']}
				head={['这一格', '前九节里对应什么', '你当时学的是']}
				rows={[
					[
						<Chip q="hidden" />,
						'L1 个人 AI OS · L2 PRD · L3 设计宪法 · L9 知识债',
						'一堆要写的文件',
					],
					[
						<Chip q="blind" />,
						'L6 诊断三问 · L9 Discovery 前九步不改文件',
						'一套流程纪律',
					],
					[
						<Chip q="unknown" />,
						'L7 三路只读调查 · L8 成员互改下一步',
						'两种结构',
					],
					[
						<Chip q="open" />,
						'L4 从 PRD 到 Production 那条交付链',
						'一条流水线',
					],
				]}
				style={{ flexShrink: 0 }}
			/>

			<motion.div
				initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.4, delay: 0.3 }}
				style={{ border, boxShadow: shadow, background: colors.white, padding: '20px 26px', flex: 1, minHeight: 0, display: 'flex', alignItems: 'center' }}
			>
				<div style={{ fontSize: 26, lineHeight: 1.55, color: colors.dark }}>
					你现在可能在想：<strong>这框架是不是事后套上去的？</strong>
					<br />
					这个问题我不回答。给你一个判据：
					<span style={{ background: colors.yellow, padding: '0 8px' }}>事后归纳的框架只能解释教过的东西，能推出没教过的东西的才不是</span>
					。
					<br />
					待会儿有一条你们九节课里没见过的，它是从这张图推出来的。<strong>到时候你自己判断。</strong>
				</div>
			</motion.div>

			<Note>
				L9 那句「AI 能读出 status == 7 会导致 skip_validation，读不出为什么是 7」，在这张图里就是一整格。
			</Note>
		</Page>
	);
}

function Chip({ q }: { q: keyof typeof QUAD }) {
	const d = QUAD[q];
	return (
		<span style={{
			display: 'inline-block', background: d.color, color: d.fg,
			padding: '4px 12px', fontSize: 21, fontWeight: 900,
			border: `2px solid ${colors.black}`,
		}}>{d.label}</span>
	);
}
