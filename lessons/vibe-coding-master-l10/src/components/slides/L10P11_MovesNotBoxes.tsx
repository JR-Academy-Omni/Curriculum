import { motion } from 'framer-motion';
import { colors, fonts, border, shadow } from '../ui';
import { Page, PageHead, MoveRow, Note } from '../deck';

// P11 · 协议不是四个格子，是四条搬运动作（蓝图 §0.2 + §8）
// 全课的核心转折页：格子是名词，搬运是动词。名词不产生动作。
//
// 🔴 这一页**只给三条**。第四条留到 P19 当反转。
//    「还有第四条，等一下」这句是故意的悬念，不许提前把退化说出来。
// 过场页，约 1 分钟。

export default function L10P11_MovesNotBoxes() {
	return (
		<Page>
			<PageHead
				phase="talk"
				title={<>协议不是四个格子，是<span style={{ background: colors.yellow, padding: '0 10px' }}>搬运动作</span></>}
				sub="格子是名词。名词不产生动作。真正能改变你回去之后做法的是动词。"
			/>

			<div style={{ display: 'flex', flexDirection: 'column', gap: 13, flex: 1, minHeight: 0, justifyContent: 'center' }}>
				<MoveRow from="hidden" to="开放区" verb="落盘" src="L1–L3 全部 SoT" delay={0.05} />
				<MoveRow from="blind" to="开放区" verb="先让它说" src="L6 诊断 · L9 Discovery" delay={0.15} />
				<MoveRow from="unknown" to="盲区 / 隐藏区" verb="设计实验" src="L7 只读调查" delay={0.25} />

				<motion.div
					initial={{ opacity: 0 }} animate={{ opacity: 1 }}
					transition={{ duration: 0.4, delay: 0.45 }}
					style={{
						border: `3px dashed ${colors.black}`, background: 'transparent',
						padding: '18px 20px', display: 'flex', alignItems: 'center', gap: 14,
					}}
				>
					<span style={{
						flexShrink: 0, fontFamily: fonts.mono, fontSize: 26, fontWeight: 700,
						color: '#bbb', letterSpacing: 4,
					}}>? ? ?</span>
					<span style={{ fontSize: 25, fontWeight: 800, color: '#888' }}>
						还有第四条。<span style={{ color: colors.dark }}>它跟上面三条方向相反，等一下再说。</span>
					</span>
				</motion.div>
			</div>

			<motion.div
				initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.35, delay: 0.55 }}
				style={{ border, boxShadow: shadow, background: colors.dark, color: colors.white, padding: '17px 24px', flexShrink: 0 }}
			>
				<div style={{ fontSize: 27, fontWeight: 800, lineHeight: 1.45 }}>
					上面三条全是<span style={{ background: colors.green, color: colors.black, padding: '0 8px' }}>往开放区搬</span>。
					接下来我们一条一条走。
				</div>
			</motion.div>

			<Note>会背四个格子的名字，不会改变任何事。会做这几个搬运动作，才会。</Note>
		</Page>
	);
}
